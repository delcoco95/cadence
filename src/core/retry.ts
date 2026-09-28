import type { ClozeExercise, Exercise } from '../content/types';
import { EVIDENCE_LEVELS, evidenceOf } from './evidence';

/**
 * Repêchage après une erreur : jamais le même item à l'identique.
 * 1. une variante (même famille, sinon même notion) jamais vue dans la séance ;
 * 2. sinon le même contenu dans un format plus exigeant (QCM à trou → réponse tapée) ;
 * 3. sinon le même exercice avec un autre ordre des options.
 */
export interface RetryPlan {
  exercise: Exercise;
  /** Graine de mélange différente de la première présentation */
  shuffleSeed: string;
  how: 'variant' | 'reformatted' | 'reshuffled';
}

const rank = (e: Exercise) => EVIDENCE_LEVELS.indexOf(evidenceOf(e));

export function planRetry(failed: Exercise, candidates: Exercise[], usedIds: Set<string>, attempt = 1): RetryPlan {
  const shuffleSeed = `${failed.id}#retry${attempt}`;
  const fresh = candidates.filter(
    (c) => c.id !== failed.id && !usedIds.has(c.id) && c.role !== 'assessment' && c.kcIds.some((k) => failed.kcIds.includes(k)),
  );
  // Même famille d'abord, puis même notion principale ; au moins le même niveau de preuve.
  const score = (c: Exercise) =>
    (failed.familyId && c.familyId === failed.familyId ? 100 : 0) +
    (c.kcIds[0] === failed.kcIds[0] ? 10 : 0) +
    (rank(c) >= rank(failed) ? 5 : 0) -
    Math.abs(c.difficulty - failed.difficulty);
  const variant = [...fresh].sort((a, b) => score(b) - score(a))[0];
  if (variant && (variant.kcIds[0] === failed.kcIds[0] || failed.familyId === variant.familyId)) {
    return { exercise: variant, shuffleSeed, how: 'variant' };
  }

  const reformatted = reformat(failed);
  if (reformatted) return { exercise: reformatted, shuffleSeed, how: 'reformatted' };
  return { exercise: failed, shuffleSeed, how: 'reshuffled' };
}

/** QCM « phrase à trou » → texte à trous tapé : il faut retrouver la réponse sans la voir. */
export function reformat(ex: Exercise): Exercise | undefined {
  if (ex.type === 'mcq' && ex.question.includes('___')) {
    const correct = ex.options[ex.answer];
    if (correct === '—' || correct.split(' ').length > 4) return undefined;
    const cloze: ClozeExercise = {
      ...ex,
      id: `${ex.id}~recall`,
      type: 'cloze',
      sentence: ex.question,
      accepted: [correct.replace(/’/g, "'")],
      strict: false,
      instruction: 'Complète sans aide.',
    };
    delete (cloze as Partial<{ options: unknown; answer: unknown }>).options;
    delete (cloze as Partial<{ options: unknown; answer: unknown }>).answer;
    return cloze;
  }
  return undefined;
}

/**
 * Entrelacement : réordonne pour ne jamais avoir plus de `maxRun` éléments consécutifs
 * sur la même notion, tout en gardant l'ordre relatif autant que possible.
 */
export function interleave<T>(items: T[], key: (t: T) => string, maxRun = 2): T[] {
  const rest = [...items];
  const out: T[] = [];
  while (rest.length) {
    const runKey = out.length >= maxRun && out.slice(-maxRun).every((x) => key(x) === key(out[out.length - 1])) ? key(out[out.length - 1]) : null;
    const idx = runKey === null ? 0 : rest.findIndex((x) => key(x) !== runKey);
    out.push(rest.splice(idx === -1 ? 0 : idx, 1)[0]);
  }
  return out;
}
