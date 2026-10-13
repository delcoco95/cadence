import { levenshtein, normalize, stripAccents } from './grading';
import { activeLang } from './lang';
import type { Lang } from '../content/types';

const NUMBERS: Record<Lang, Record<string, string>> = {
  en: {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six',
    '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven', '12': 'twelve',
    '20': 'twenty', '30': 'thirty', '100': 'hundred',
  },
  it: {
    '0': 'zero', '1': 'uno', '2': 'due', '3': 'tre', '4': 'quattro', '5': 'cinque', '6': 'sei',
    '7': 'sette', '8': 'otto', '9': 'nove', '10': 'dieci', '11': 'undici', '12': 'dodici',
    '20': 'venti', '30': 'trenta', '100': 'cento',
  },
  es: {
    '0': 'cero', '1': 'uno', '2': 'dos', '3': 'tres', '4': 'cuatro', '5': 'cinco', '6': 'seis',
    '7': 'siete', '8': 'ocho', '9': 'nueve', '10': 'diez', '11': 'once', '12': 'doce',
    '20': 'veinte', '30': 'treinta', '100': 'cien',
  },
};

/**
 * Mots normalisés ; les chiffres deviennent des mots (la reconnaissance vocale écrit « 7 » ou « seven »).
 * À l'oral, les accents ne comptent pas : la transcription les omet parfois (« esta » pour « está »).
 */
export function words(text: string): string[] {
  return normalize(text)
    .replace(/(\d+)\s*(am|pm)\b/g, '$1 $2')
    .split(' ')
    .filter(Boolean)
    .map((w) => NUMBERS[activeLang()][w] ?? w)
    .map((w) => (activeLang() === 'en' ? w : stripAccents(w)));
}

const sameWord = (a: string, b: string) => a === b || (a.length >= 5 && levenshtein(a, b) <= 1);

export interface SpeechMatch {
  /** Part des mots attendus reconnus, 0..1 */
  score: number;
  /** Mots attendus manquants ou mal reconnus */
  missing: string[];
  target: string;
}

/**
 * Alignement par plus longue sous-séquence commune entre le texte attendu et la transcription.
 * Mesure l'intelligibilité : a-t-on reconnu les mots attendus, dans l'ordre ? L'accent n'est pas jugé.
 */
export function matchSpeech(target: string, heard: string): SpeechMatch {
  const t = words(target);
  const h = words(heard);
  const dp = Array.from({ length: t.length + 1 }, () => new Array<number>(h.length + 1).fill(0));
  for (let i = 1; i <= t.length; i++)
    for (let j = 1; j <= h.length; j++)
      dp[i][j] = sameWord(t[i - 1], h[j - 1]) ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const matched = new Set<number>();
  for (let i = t.length, j = h.length; i > 0 && j > 0; ) {
    if (sameWord(t[i - 1], h[j - 1])) {
      matched.add(i - 1);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
    else j--;
  }
  const missing = t.filter((_, i) => !matched.has(i));
  return { score: t.length ? matched.size / t.length : 0, missing, target };
}

/** Meilleure correspondance parmi plusieurs formulations acceptées. */
export function bestSpeechMatch(accepted: string[], heard: string): SpeechMatch {
  return accepted
    .map((a) => matchSpeech(a, heard))
    .reduce((best, m) => (m.score > best.score ? m : best), { score: -1, missing: [], target: accepted[0] ?? '' });
}

export interface FreeAnswerCheck {
  score: number;
  wordCount: number;
  minWords: number;
  /** Groupes de mots-clés absents (on affiche le premier mot de chaque groupe) */
  missingKeywords: string[];
}

/** Réponse libre, sans IA : longueur suffisante + présence des mots-clés demandés. */
export function checkFreeAnswer(heard: string, minWords = 5, keywords: string[][] = []): FreeAnswerCheck {
  const w = words(heard);
  const set = new Set(w);
  const text = ` ${w.join(' ')} `;
  const has = (k: string) => (k.includes(' ') ? text.includes(` ${words(k).join(' ')} `) : set.has(words(k)[0]));
  const missingKeywords = keywords.filter((group) => !group.some(has)).map((g) => g[0]);
  const lengthScore = Math.min(1, w.length / minWords);
  const keywordScore = keywords.length ? (keywords.length - missingKeywords.length) / keywords.length : 1;
  return { score: keywords.length ? 0.5 * lengthScore + 0.5 * keywordScore : lengthScore, wordCount: w.length, minWords, missingKeywords };
}
