import type { Exercise } from '../content/types';
import { gradeText, normalize, type Verdict } from './grading';
import { bestSpeechMatch, checkFreeAnswer } from './speaking';

export type ExerciseResponse =
  | { kind: 'choice'; index: number }
  | { kind: 'text'; value: string }
  | { kind: 'tokens'; tokens: string[] }
  | { kind: 'speech'; transcript: string };

export interface ExerciseResult {
  verdict: Verdict;
  score: number;
  /** Bonne réponse à afficher */
  expected: string;
  /** Détail de l'oral */
  speech?: { heard: string; missing: string[]; note?: string };
}

/** Seuils de l'oral : on vise l'intelligibilité, pas un accent natif. */
const SPEECH_OK = 0.85;
const SPEECH_PARTIAL = 0.6;

export function gradeExercise(ex: Exercise, response: ExerciseResponse): ExerciseResult {
  switch (ex.type) {
    case 'mcq':
    case 'listen_mcq': {
      const ok = response.kind === 'choice' && response.index === ex.answer;
      return { verdict: ok ? 'correct' : 'wrong', score: ok ? 1 : 0, expected: ex.options[ex.answer] };
    }
    case 'type_answer':
    case 'cloze':
    case 'translate':
    case 'dictation': {
      const value = response.kind === 'text' ? response.value : response.kind === 'speech' ? response.transcript : '';
      const strict = ex.type === 'type_answer' || ex.type === 'cloze' ? ex.strict : false;
      const g = gradeText(value, ex.accepted, strict);
      return { verdict: g.verdict, score: g.score, expected: g.verdict === 'correct' ? g.closest : ex.accepted[0] };
    }
    case 'word_bank': {
      const built = response.kind === 'tokens' ? response.tokens.join(' ') : '';
      const target = ex.tokens.join(' ');
      const ok = [target, ...(ex.alternatives ?? [])].some((s) => normalize(s) === normalize(built));
      return { verdict: ok ? 'correct' : 'wrong', score: ok ? 1 : 0, expected: target };
    }
    case 'speak': {
      const heard = response.kind === 'speech' ? response.transcript : response.kind === 'text' ? response.value : '';
      if (ex.mode === 'answer') {
        const c = checkFreeAnswer(heard, ex.minWords, ex.keywords);
        const notes: string[] = [];
        if (c.wordCount < c.minWords) notes.push(`Réponse courte : ${c.wordCount} mot(s), vise au moins ${c.minWords}.`);
        if (c.missingKeywords.length) notes.push(`Essaie d’utiliser : ${c.missingKeywords.join(', ')}.`);
        return {
          verdict: c.score >= 0.99 ? 'correct' : c.score >= SPEECH_PARTIAL ? 'typo' : 'wrong',
          score: c.score >= 0.99 ? 1 : c.score,
          expected: ex.sample ?? '',
          speech: { heard, missing: [], note: notes.join(' ') || undefined },
        };
      }
      const accepted = ex.mode === 'repeat' ? ex.accepted ?? [ex.prompt] : ex.accepted ?? [];
      const m = bestSpeechMatch(accepted, heard);
      const verdict: Verdict = m.score >= SPEECH_OK ? 'correct' : m.score >= SPEECH_PARTIAL ? 'typo' : 'wrong';
      return {
        verdict,
        score: verdict === 'correct' ? 1 : verdict === 'typo' ? 0.7 : Math.max(0, m.score * 0.5),
        expected: m.target,
        speech: { heard, missing: m.missing },
      };
    }
  }
}

/** Mélange déterministe (graine) pour que l'ordre reste stable pendant un exercice. */
export function seededShuffle<T>(items: T[], seed: string): T[] {
  const rand = seededRandom(seed);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function seededRandom(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** XP : effort réel, pondéré par la difficulté (l'oral compte un peu plus). */
export function xpFor(ex: Exercise, score: number): number {
  const base = 10 + Math.round(Math.max(0, ex.difficulty + 3) * 2) + (ex.type === 'speak' ? 5 : 0);
  return Math.round(base * score);
}

/** Durée estimée d'un exercice, pour composer une séance de N minutes. */
export function estSeconds(ex: Exercise): number {
  switch (ex.type) {
    case 'mcq':
    case 'listen_mcq':
      return 12;
    case 'cloze':
    case 'type_answer':
      return 16;
    case 'word_bank':
    case 'dictation':
      return 22;
    case 'translate':
      return 30;
    case 'speak':
      return ex.mode === 'answer' ? 45 : 22;
  }
}
