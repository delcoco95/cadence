import { EVIDENCE_LEVELS, isProductive, type Evidence } from './evidence';

/**
 * Maîtrise d'une notion par niveau de preuve (modèle Elo / Rasch par niveau) :
 * P(réussite) = σ(θ − b), b = difficulté de l'exercice.
 * La maîtrise globale privilégie la production et le transfert, avec des plafonds :
 * on ne peut pas « maîtriser » une notion qu'on a seulement reconnue dans des QCM.
 */
export interface EvidenceState {
  theta: number;
  /** Réussite récente (moyenne mobile exponentielle, α = 0,3) */
  recent: number;
  n: number;
  correct: number;
  lastAt: number;
}

export interface KcMastery {
  kcId: string;
  levels: Partial<Record<Evidence, EvidenceState>>;
  /** Jours (AAAA-MM-JJ) où la notion a été réussie en production sans aide, 6 derniers */
  productiveDays: string[];
  updatedAt: number;
}

export type MasteryState = 'not_started' | 'learning' | 'practicing' | 'developing' | 'mastered';

export const STATE_LABELS: Record<MasteryState, string> = {
  not_started: 'Pas commencée',
  learning: 'En apprentissage',
  practicing: 'En pratique',
  developing: 'En développement',
  mastered: 'Maîtrisée',
};

export const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));

export function emptyMastery(kcId: string): KcMastery {
  return { kcId, levels: {}, productiveDays: [], updatedAt: 0 };
}

/**
 * Confiance déclarée : une bonne réponse « devinée » compte à moitié,
 * une réponse « pas sûr » aux trois quarts.
 */
export function effectiveScore(score: number, confidence?: 1 | 2 | 3 | 4): number {
  if (!confidence || score < 0.8) return score;
  return confidence === 1 ? score * 0.5 : confidence === 2 ? score * 0.75 : score;
}

export interface Observation {
  evidence: Evidence;
  difficulty: number;
  score: number;
  confidence?: 1 | 2 | 3 | 4;
  now: number;
  day: string;
}

export function observe(m: KcMastery, o: Observation): KcMastery {
  const s = m.levels[o.evidence] ?? { theta: 0, recent: 0.5, n: 0, correct: 0, lastAt: 0 };
  const score = effectiveScore(o.score, o.confidence);
  const k = Math.max(0.25, 1.2 / Math.sqrt(1 + s.n));
  const p = sigmoid(s.theta - o.difficulty);
  const next: EvidenceState = {
    theta: s.theta + k * (score - p),
    recent: 0.7 * (s.recent ?? 0.5) + 0.3 * score,
    n: s.n + 1,
    correct: s.correct + (score >= 0.8 ? 1 : 0),
    lastAt: o.now,
  };
  const productiveSuccess = isProductive(o.evidence) && score >= 0.8;
  const productiveDays =
    productiveSuccess && !m.productiveDays.includes(o.day) ? [...m.productiveDays, o.day].slice(-6) : m.productiveDays;
  return { ...m, levels: { ...m.levels, [o.evidence]: next }, productiveDays, updatedAt: o.now };
}

const WEIGHTS: Record<Evidence, number> = { recognition: 1, recall: 2, production: 3, free: 3, transfer: 4 };
/** Difficulté d'un exercice « typique » du niveau */
const REF_DIFFICULTY = -0.5;
/** Observation « fictive » à 50 % : évite qu'une seule réponse donne 90 %. */
const PRIOR = 1;
const MIN_OBSERVATIONS = 4;

export interface MasterySummary {
  /** 0..1, ou null tant qu'il n'y a aucune donnée */
  value: number | null;
  state: MasteryState;
  /** Estimation par niveau de preuve (null = jamais observé) */
  byLevel: Record<Evidence, number | null>;
  observations: number;
  /** Assez de données pour juger (≥ 4 observations) */
  confident: boolean;
  /** Ce qui limite la maîtrise, pour l'expliquer à l'utilisateur */
  cap?: 'no_production' | 'no_free_production';
}

/** Estimation d'un niveau : Elo (stable) et réussite récente (réactive), puis rétrécissement vers 50 %. */
function levelValue(s: EvidenceState): number {
  const raw = 0.5 * sigmoid(s.theta - REF_DIFFICULTY) + 0.5 * (s.recent ?? 0.5);
  return (s.n * raw + PRIOR * 0.5) / (s.n + PRIOR);
}

export function summarize(m: KcMastery): MasterySummary {
  const byLevel = Object.fromEntries(EVIDENCE_LEVELS.map((e) => [e, m.levels[e] ? levelValue(m.levels[e]!) : null])) as Record<
    Evidence,
    number | null
  >;
  const observed = EVIDENCE_LEVELS.filter((e) => m.levels[e]?.n);
  const observations = observed.reduce((a, e) => a + m.levels[e]!.n, 0);
  if (!observations) return { value: null, state: 'not_started', byLevel, observations: 0, confident: false };

  const totalWeight = observed.reduce((a, e) => a + WEIGHTS[e], 0);
  let value = observed.reduce((a, e) => a + WEIGHTS[e] * byLevel[e]!, 0) / totalWeight;
  let cap: MasterySummary['cap'];
  if (!observed.some(isProductive)) {
    if (value > 0.6) cap = 'no_production';
    value = Math.min(value, 0.6);
  } else if (!observed.some((e) => e === 'free' || e === 'transfer')) {
    if (value > 0.8) cap = 'no_free_production';
    value = Math.min(value, 0.8);
  }

  const confident = observations >= MIN_OBSERVATIONS;
  const productiveObs = observed.filter(isProductive).reduce((a, e) => a + m.levels[e]!.n, 0);
  let state: MasteryState;
  if (!confident) state = 'learning';
  else if (value < 0.6) state = 'practicing';
  else if (value >= 0.85 && productiveObs >= 2 && m.productiveDays.length >= 2) state = 'mastered';
  else state = 'developing';

  return { value, state, byLevel, observations, confident, cap };
}

/** Point faible : assez de données ET résultats insuffisants (le manque de données n'est pas une faiblesse). */
export const isWeak = (s: MasterySummary) => s.confident && s.value !== null && s.value < 0.55;
export const isMastered = (s: MasterySummary) => s.state === 'mastered';
