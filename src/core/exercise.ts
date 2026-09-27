import type { Exercise } from '../content/types';
import { gradeText, normalize, type Verdict } from './grading';

export type ExerciseResponse =
  | { kind: 'choice'; index: number }
  | { kind: 'text'; value: string }
  | { kind: 'tokens'; tokens: string[] };

export interface ExerciseResult {
  verdict: Verdict;
  score: number;
  /** Bonne réponse à afficher */
  expected: string;
}

export function gradeExercise(ex: Exercise, response: ExerciseResponse): ExerciseResult {
  switch (ex.type) {
    case 'mcq': {
      const ok = response.kind === 'choice' && response.index === ex.answer;
      return { verdict: ok ? 'correct' : 'wrong', score: ok ? 1 : 0, expected: ex.options[ex.answer] };
    }
    case 'type_answer':
    case 'cloze':
    case 'translate': {
      const value = response.kind === 'text' ? response.value : '';
      const strict = ex.type === 'translate' ? false : ex.strict;
      const g = gradeText(value, ex.accepted, strict);
      return { verdict: g.verdict, score: g.score, expected: g.verdict === 'correct' ? g.closest : ex.accepted[0] };
    }
    case 'word_bank': {
      const built = response.kind === 'tokens' ? response.tokens.join(' ') : '';
      const target = ex.tokens.join(' ');
      const ok = [target, ...(ex.alternatives ?? [])].some((s) => normalize(s) === normalize(built));
      return { verdict: ok ? 'correct' : 'wrong', score: ok ? 1 : 0, expected: target };
    }
  }
}

/** Mélange déterministe (graine) pour que l'ordre reste stable pendant un exercice. */
export function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** XP : effort réel, pondéré par la difficulté. */
export function xpFor(ex: Exercise, score: number): number {
  const base = 10 + Math.round(Math.max(0, ex.difficulty + 3) * 2);
  return Math.round(base * score);
}
