import type { Unit } from '../content/types';

/**
 * Enchaînement d'une unité : leçons → entraînement de l'unité → défi d'unité.
 * L'unité suivante s'ouvre quand le défi est réussi (ou que l'unité a été validée par le
 * test de niveau, ou sautée en réussissant directement son défi).
 */

export type StepKind = 'lesson' | 'practice' | 'challenge';
export type StepStatus = 'locked' | 'available' | 'done' | 'consolidate';

/** Réussite au premier essai requise pour valider une unité. */
export const CHALLENGE_PASS = 0.75;

export interface UnitRecord {
  unitId: string;
  practiceDoneAt?: number;
  challengeBest?: number;
  challengeAttempts?: number;
  validatedAt?: number;
  via?: 'challenge' | 'placement' | 'jump' | 'self';
}

export interface LessonRecord {
  status: 'started' | 'completed';
  bestScore: number;
}

export interface Step {
  kind: StepKind;
  unitId: string;
  lessonId?: string;
  status: StepStatus;
  /** Meilleur score (leçon ou défi) */
  score?: number;
}

export interface UnitView {
  unit: Unit;
  unlocked: boolean;
  validated: boolean;
  via?: UnitRecord['via'];
  steps: Step[];
}

export interface PathState {
  units: UnitView[];
  next?: Step;
  /** Unités validées */
  validatedCount: number;
}

export function pathState(units: Unit[], lessons: Map<string, LessonRecord>, records: Map<string, UnitRecord>): PathState {
  const views: UnitView[] = [];
  let next: Step | undefined;

  units.forEach((unit, i) => {
    const rec = records.get(unit.id);
    const validated = !!rec?.validatedAt;
    // Les apprenants d'avant les défis gardent l'accès aux unités qu'ils avaient commencées.
    const started = unit.lessonIds.some((id) => lessons.has(id));
    const unlocked = i === 0 || validated || started || !!views[i - 1]?.validated;

    const lessonSteps: Step[] = unit.lessonIds.map((lessonId) => {
      const l = lessons.get(lessonId);
      const done = l?.status === 'completed';
      const status: StepStatus = !unlocked ? 'locked' : done ? (l!.bestScore < 0.7 ? 'consolidate' : 'done') : 'available';
      return { kind: 'lesson', unitId: unit.id, lessonId, status, score: done ? l!.bestScore : undefined };
    });
    const lessonsDone = lessonSteps.every((s) => s.status === 'done' || s.status === 'consolidate');
    const practiceDone = !!rec?.practiceDoneAt;

    const practice: Step = {
      kind: 'practice',
      unitId: unit.id,
      status: !unlocked ? 'locked' : practiceDone || validated ? 'done' : lessonsDone ? 'available' : 'locked',
    };
    const challenge: Step = {
      kind: 'challenge',
      unitId: unit.id,
      status: !unlocked ? 'locked' : validated ? 'done' : practiceDone ? 'available' : 'locked',
      score: rec?.challengeBest,
    };
    const steps = [...lessonSteps, practice, challenge];
    views.push({ unit, unlocked, validated, via: rec?.via, steps });

    if (!next && unlocked && !validated) next = steps.find((s) => s.status === 'available');
  });

  // Tout est validé : on repasse sur la leçon la moins bien réussie.
  if (!next) {
    const weakest = views
      .flatMap((v) => v.steps)
      .filter((s) => s.kind === 'lesson')
      .sort((a, b) => (a.score ?? 0) - (b.score ?? 0))[0];
    next = weakest;
  }

  return { units: views, next, validatedCount: views.filter((v) => v.validated).length };
}

/**
 * Sauter jusqu'à une unité : réussir directement son défi valide aussi toutes les unités
 * précédentes encore ouvertes (on prouve un niveau, pas une seule notion).
 */
export function unitsValidatedByJump(units: Unit[], targetUnitId: string, records: Map<string, UnitRecord>): string[] {
  const idx = units.findIndex((u) => u.id === targetUnitId);
  return units.slice(0, idx + 1).filter((u) => !records.get(u.id)?.validatedAt).map((u) => u.id);
}
