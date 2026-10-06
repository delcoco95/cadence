import type { CefrBand } from '../content/types';

/**
 * Test de placement adaptatif, sur le principe des tests de placement officiels
 * (Cambridge English Placement Test, Oxford Placement Test, EF SET) :
 * - modèle de Rasch avec correction du hasard pour les QCM :
 *   P(réussite) = g + (1 − g) · σ(θ − b), g = 1 / nombre d'options ;
 * - estimation bayésienne (EAP) de θ après chaque réponse ;
 * - question suivante = la plus informative au niveau estimé, tirée parmi les 3 meilleures
 *   pour que deux passages ne donnent pas le même test ;
 * - sections successives (grammaire, vocabulaire, lecture, écoute) avec un nombre de
 *   questions borné et un arrêt anticipé quand l'estimation est assez précise.
 * Les résultats sont exprimés sur l'échelle CECRL, comme une estimation et jamais comme une certification.
 */

export type PlacementSection = 'grammar' | 'vocabulary' | 'reading' | 'listening';
export type PlacementBand = 'A1' | CefrBand;

export interface PlacementItemMeta {
  id: string;
  section: PlacementSection;
  /** Difficulté sur l'échelle logit commune (voir BAND_THETA) */
  b: number;
  /** Probabilité de réussir au hasard (1 / nombre d'options, 0 pour une réponse tapée) */
  guess: number;
  /** Unité A2 que l'item permet de valider (dispense d'unité) */
  unitId?: string;
}

export interface PlacementResponse {
  id: string;
  section: PlacementSection;
  b: number;
  guess: number;
  correct: boolean;
  unitId?: string;
}

export interface SectionConfig {
  section: PlacementSection;
  label: string;
  min: number;
  max: number;
}

export const SECTIONS: SectionConfig[] = [
  { section: 'grammar', label: 'Grammaire', min: 6, max: 8 },
  { section: 'vocabulary', label: 'Vocabulaire', min: 4, max: 6 },
  { section: 'reading', label: 'Lecture', min: 3, max: 4 },
  { section: 'listening', label: 'Écoute', min: 4, max: 5 },
];

export const MAX_ITEMS = SECTIONS.reduce((a, s) => a + s.max, 0);

/** Seuil bas de chaque bande sur l'échelle θ (voir docs/PEDAGOGY.md § 3). */
export const BAND_THETA: [PlacementBand, number][] = [
  ['C2', 3.2],
  ['C1', 2.5],
  ['B2+', 1.9],
  ['B2', 1.3],
  ['B1+', 0.6],
  ['B1', -0.1],
  ['A2+', -0.8],
  ['A2', -1.5],
];

export function bandOf(theta: number): PlacementBand {
  return BAND_THETA.find(([, min]) => theta >= min)?.[0] ?? 'A1';
}

/**
 * Plus haute bande mesurable : la banque ne va pas au-delà de C1. Comme les tests officiels,
 * un sans-faute donne « C1 », jamais un niveau que le test ne peut pas observer.
 */
export const TOP_BAND: PlacementBand = 'C1';
const ceilingTheta = BAND_THETA.find(([b]) => b === TOP_BAND)![1];

export function reportedBand(theta: number): PlacementBand {
  return bandOf(Math.min(theta, ceilingTheta));
}

/** Milieu de bande : sert à calibrer la difficulté des items. */
export function bandCenter(band: PlacementBand): number {
  const i = BAND_THETA.findIndex(([b]) => b === band);
  if (band === 'A1') return -2.2;
  if (i === 0) return 3.5;
  return (BAND_THETA[i][1] + BAND_THETA[i - 1][1]) / 2;
}

const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));

export function pCorrect(theta: number, b: number, guess = 0): number {
  return guess + (1 - guess) * sigmoid(theta - b);
}

/** Information de Fisher d'un item (modèle à 3 paramètres, discrimination 1). */
export function information(theta: number, b: number, guess = 0): number {
  const s = sigmoid(theta - b);
  const p = guess + (1 - guess) * s;
  const dp = (1 - guess) * s * (1 - s);
  return (dp * dp) / (p * (1 - p));
}

export interface Estimate {
  theta: number;
  /** Erreur standard (écart-type a posteriori) */
  se: number;
}

const GRID = Array.from({ length: 171 }, (_, i) => -4 + i * 0.05);

/** Estimation EAP sur une grille, avec un a priori normal. */
export function estimate(responses: Pick<PlacementResponse, 'b' | 'guess' | 'correct'>[], prior = { mean: -0.5, sd: 1.5 }): Estimate {
  let sum = 0;
  let mean = 0;
  const weights = GRID.map((t) => {
    let logL = -((t - prior.mean) ** 2) / (2 * prior.sd ** 2);
    for (const r of responses) {
      const p = pCorrect(t, r.b, r.guess);
      logL += Math.log(r.correct ? p : 1 - p);
    }
    return logL;
  });
  const max = Math.max(...weights);
  const w = weights.map((l) => Math.exp(l - max));
  for (let i = 0; i < GRID.length; i++) {
    sum += w[i];
    mean += w[i] * GRID[i];
  }
  mean /= sum;
  let variance = 0;
  for (let i = 0; i < GRID.length; i++) variance += w[i] * (GRID[i] - mean) ** 2;
  return { theta: mean, se: Math.sqrt(variance / sum) };
}

/** Précision suffisante pour clore une section avant son maximum. */
export const SE_STOP = 0.55;

/**
 * Prochaine question, ou null quand le test est terminé.
 * `rng` est injecté pour des tests reproductibles.
 */
export function nextPlacementItem<T extends PlacementItemMeta>(
  responses: PlacementResponse[],
  pool: T[],
  rng: () => number = Math.random,
): T | null {
  const answered = new Set(responses.map((r) => r.id));
  for (const cfg of SECTIONS) {
    const done = responses.filter((r) => r.section === cfg.section);
    const available = pool.filter((i) => i.section === cfg.section && !answered.has(i.id));
    if (available.length === 0 || done.length >= cfg.max) continue;
    if (done.length >= cfg.min && sectionEstimate(responses, cfg.section).se < SE_STOP) continue;
    // Toutes les réponses déjà données renseignent sur le niveau : la section démarre au bon endroit.
    const theta = estimate(responses).theta;
    const ranked = [...available].sort((a, b) => information(theta, b.b, b.guess) - information(theta, a.b, a.guess));
    return ranked[Math.floor(rng() * Math.min(3, ranked.length))];
  }
  return null;
}

/** Niveau d'une compétence : ses réponses, avec le niveau global comme a priori (rétrécissement). */
export function sectionEstimate(responses: PlacementResponse[], section: PlacementSection): Estimate {
  const global = estimate(responses);
  return estimate(responses.filter((r) => r.section === section), { mean: global.theta, sd: 1 });
}

export interface SectionResult extends Estimate {
  band: PlacementBand;
  n: number;
  correct: number;
}

export interface PlacementResult extends Estimate {
  band: PlacementBand;
  sections: Partial<Record<PlacementSection, SectionResult>>;
  /** Unités A2 dont le contenu est déjà acquis (dispense proposée) */
  testedOutUnits: string[];
}

export function placementResult(responses: PlacementResponse[], unitOrder: string[]): PlacementResult {
  const global = estimate(responses);
  const sections: PlacementResult['sections'] = {};
  for (const cfg of SECTIONS) {
    const rs = responses.filter((r) => r.section === cfg.section);
    if (!rs.length) continue;
    const e = sectionEstimate(responses, cfg.section);
    sections[cfg.section] = { ...e, band: reportedBand(e.theta), n: rs.length, correct: rs.filter((r) => r.correct).length };
  }
  return { ...global, band: reportedBand(global.theta), sections, testedOutUnits: testedOutUnits(responses, unitOrder) };
}

/**
 * Dispense d'unités : on ne saute que ce qui est prouvé.
 * - niveau grammatical ≥ B1+ : toute unité A2 sans erreur sur ses items ;
 * - niveau ≥ A2+ : les unités dont au moins un item a été réussi, sans aucune erreur ;
 * - en dessous : aucune dispense.
 * On ne garde que le début du parcours, d'un seul tenant : on ne saute pas une unité
 * en laissant une lacune avant elle.
 */
export function testedOutUnits(responses: PlacementResponse[], unitOrder: string[]): string[] {
  const grammar = sectionEstimate(responses, 'grammar').theta;
  if (grammar < -0.8) return [];
  const byUnit = new Map<string, { ok: number; ko: number }>();
  for (const r of responses) {
    if (!r.unitId) continue;
    const s = byUnit.get(r.unitId) ?? { ok: 0, ko: 0 };
    if (r.correct) s.ok++;
    else s.ko++;
    byUnit.set(r.unitId, s);
  }
  const passes = (unitId: string) => {
    const s = byUnit.get(unitId);
    if (s?.ko) return false;
    return grammar >= 0.6 ? true : (s?.ok ?? 0) > 0;
  };
  const out: string[] = [];
  for (const u of unitOrder) {
    if (!passes(u)) break;
    out.push(u);
  }
  return out;
}
