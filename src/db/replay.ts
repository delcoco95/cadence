import type { Attempt } from './db';
import { resolveExercise, IRREGULAR_FORMS } from './meta';
import { emptyMastery, observe, type KcMastery } from '../core/mastery';
import { evidenceOf } from '../core/evidence';
import { detectErrors, type ErrorEvent } from '../core/errors';
import { gradeExercise, type ExerciseResponse } from '../core/exercise';
import { kcById } from '../content/kcs';
import { dayKey } from '../core/dates';
import type { ErrorTag, Exercise } from '../content/types';

/** Notion à laquelle rattacher une erreur : celle qui déclare ce type d'erreur, sinon la première. */
export function kcForError(ex: Exercise, tag: ErrorTag): string {
  return ex.kcIds.find((k) => kcById.get(k)?.errorTags?.includes(tag)) ?? ex.kcIds[0];
}

/**
 * Reconstruit la maîtrise (et les erreurs des réponses tapées) à partir du journal des réponses.
 * Sert à la migration : le nouveau modèle s'applique à tout l'historique, sans perte.
 * Les anciennes versions ne marquaient pas le « premier essai » : on ne garde que la
 * première réponse à un exercice donné pour une journée donnée.
 */
export function replayAttempts(attempts: Attempt[]): { masteries: KcMastery[]; errors: ErrorEvent[] } {
  const masteries = new Map<string, KcMastery>();
  const errors: ErrorEvent[] = [];
  const seen = new Set<string>();
  for (const a of [...attempts].sort((x, y) => x.at - y.at)) {
    const day = dayKey(new Date(a.at));
    const key = `${a.exerciseId}|${day}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const ex = resolveExercise(a.exerciseId);
    if (!ex) continue;
    for (const kc of a.kcIds.length ? a.kcIds : ex.kcIds) {
      const m = masteries.get(kc) ?? emptyMastery(kc);
      masteries.set(kc, observe(m, { evidence: a.evidence ?? evidenceOf(ex), difficulty: ex.difficulty, score: a.score, now: a.at, day, confidence: a.confidence }));
    }
    if (a.verdict === 'correct') continue;
    // Les QCM générés ont un ordre d'options aléatoire : leur réponse n'est pas rejouable.
    let response: ExerciseResponse | undefined;
    try {
      response = JSON.parse(a.response) as ExerciseResponse;
    } catch {
      response = undefined;
    }
    if (!response || (response.kind === 'choice' && a.exerciseId.startsWith('gen-'))) continue;
    const tags = a.errorTags ?? detectErrors(ex, response, gradeExercise(ex, response), { irregulars: IRREGULAR_FORMS });
    for (const tag of tags) errors.push({ tag, kcId: kcForError(ex, tag), exerciseId: a.exerciseId, at: a.at });
  }
  return { masteries: [...masteries.values()], errors };
}
