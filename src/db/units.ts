import { db, updateSettings, type PlacementRecord } from './db';
import { UNITS } from '../content';
import { pathState, unitsValidatedByJump, CHALLENGE_PASS, type PathState, type Step, type UnitRecord } from '../core/units';
import type { PlacementResponse, PlacementResult } from '../core/placement';
import { addActivity } from './activity';

export async function loadPath(): Promise<PathState> {
  const [lessons, records] = await Promise.all([db.lessonProgress.toArray(), db.unitProgress.toArray()]);
  return pathState(UNITS, new Map(lessons.map((l) => [l.lessonId, l])), new Map(records.map((r) => [r.unitId, r])));
}

export async function nextStep(): Promise<Step | undefined> {
  return (await loadPath()).next;
}

export const stepPath = (s: Step): string =>
  s.kind === 'lesson' ? `/lesson/${s.lessonId}` : `/unit/${s.unitId}/${s.kind}`;

async function record(unitId: string): Promise<UnitRecord> {
  return (await db.unitProgress.get(unitId)) ?? { unitId };
}

export async function completePractice(unitId: string, xp: number): Promise<void> {
  const r = await record(unitId);
  await db.unitProgress.put({ ...r, practiceDoneAt: r.practiceDoneAt ?? Date.now() });
  await addActivity(0, xp);
}

export interface ChallengeOutcome {
  passed: boolean;
  /** Unités validées par ce défi (plusieurs en cas de saut) */
  validated: string[];
}

/** Enregistre un défi. En mode saut, la réussite valide aussi les unités précédentes. */
export async function recordChallenge(unitId: string, score: number, xp: number, jump: boolean): Promise<ChallengeOutcome> {
  const passed = score >= CHALLENGE_PASS;
  const now = Date.now();
  const outcome = await db.transaction('rw', db.unitProgress, async () => {
    const r = await record(unitId);
    await db.unitProgress.put({
      ...r,
      challengeBest: Math.max(score, r.challengeBest ?? 0),
      challengeAttempts: (r.challengeAttempts ?? 0) + 1,
      validatedAt: r.validatedAt ?? (passed ? now : undefined),
      via: r.via ?? (passed ? (jump ? 'jump' : 'challenge') : undefined),
    });
    if (!passed) return { passed, validated: [] };
    if (!jump) return { passed, validated: [unitId] };
    const all = new Map((await db.unitProgress.toArray()).map((x) => [x.unitId, x]));
    const others = unitsValidatedByJump(UNITS, unitId, all);
    for (const id of others) {
      const o = all.get(id) ?? { unitId: id };
      await db.unitProgress.put({ ...o, validatedAt: now, via: 'jump' });
    }
    return { passed, validated: [unitId, ...others] };
  });
  await addActivity(0, xp);
  return outcome;
}

// ───────────── Test de niveau ─────────────

export async function savePlacement(result: PlacementResult, responses: PlacementResponse[]): Promise<number> {
  const at = Date.now();
  // Le journal garde les réponses (sans notion : le placement ne nourrit pas la maîtrise).
  await db.attempts.bulkAdd(
    responses.map((r) => ({
      exerciseId: r.id, at, durationMs: 0, score: r.correct ? 1 : 0, verdict: r.correct ? ('correct' as const) : ('wrong' as const),
      response: '', kcIds: [], context: 'placement' as const,
    })),
  );
  const id = await db.assessments.add({ kind: 'placement', at, result, responses, applied: false });
  await updateSettings({ estimatedBand: result.band });
  return id as number;
}

export async function latestPlacement(): Promise<PlacementRecord | undefined> {
  return db.assessments.where('kind').equals('placement').last();
}

/** L'apprenant accepte la dispense : les unités prouvées sont validées. */
export async function applyPlacement(id: number): Promise<void> {
  const rec = await db.assessments.get(id);
  if (!rec) return;
  const now = Date.now();
  await db.transaction('rw', db.unitProgress, db.assessments, async () => {
    for (const unitId of rec.result.testedOutUnits) {
      const r = await record(unitId);
      if (!r.validatedAt) await db.unitProgress.put({ ...r, validatedAt: now, via: 'placement' });
    }
    await db.assessments.put({ ...rec, applied: true });
  });
}

// ───────────── Niveau choisi sans test ─────────────

export type LevelChoice = 'test' | 'A1' | 'A2' | 'B1' | 'B2';

export const LEVEL_CHOICES: { value: LevelChoice; label: string; hint: string; tone: string }[] = [
  { value: 'test', label: 'Je passe le test de niveau', hint: 'Recommandé · 10 min, adaptatif, sur le modèle des tests officiels', tone: 'tone-sun' },
  { value: 'A1', label: 'Débutant', hint: 'Je connais quelques mots et phrases toutes faites', tone: 'tone-success' },
  { value: 'A2', label: 'Élémentaire', hint: 'Je me débrouille avec des phrases simples', tone: 'tone-sky' },
  { value: 'B1', label: 'Intermédiaire', hint: 'Je tiens une conversation simple sur des sujets connus', tone: 'tone-primary' },
  { value: 'B2', label: 'Avancé', hint: 'Je suis à l’aise dans la plupart des situations', tone: 'tone-pink' },
];

/**
 * Niveau déclaré par l'apprenant. À partir de B1, le niveau A2 est entièrement ouvert
 * (marqué « niveau choisi », sans prétendre qu'il a été prouvé) : les défis restent disponibles.
 */
export async function applyChosenLevel(level: Exclude<LevelChoice, 'test'>): Promise<void> {
  const advanced = level === 'B1' || level === 'B2';
  await updateSettings({ estimatedBand: level, startLevel: advanced ? level : 'A2' });
  if (!advanced) return;
  const now = Date.now();
  await db.transaction('rw', db.unitProgress, async () => {
    for (const u of UNITS) {
      const r = await record(u.id);
      if (!r.validatedAt) await db.unitProgress.put({ ...r, validatedAt: now, via: 'self' });
    }
  });
}
