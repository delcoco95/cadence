/** Correction déterministe des réponses fermées. */

const CONTRACTIONS: [RegExp, string][] = [
  [/\bi'm\b/g, 'i am'],
  [/\byou're\b/g, 'you are'],
  [/\bwe're\b/g, 'we are'],
  [/\bthey're\b/g, 'they are'],
  [/\b(he|she|it|that|there|what)'s\b/g, '$1 is'],
  [/\b(i|you|we|they)'ve\b/g, '$1 have'],
  [/\b(i|you|he|she|it|we|they)'ll\b/g, '$1 will'],
  [/\b(i|you|he|she|it|we|they)'d\b/g, '$1 would'],
  [/\bcan't\b/g, 'cannot'],
  [/\bcan not\b/g, 'cannot'],
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\b(do|does|did|is|are|was|were|have|has|had|would|should|could|must)n't\b/g, '$1 not'],
];

/** Minuscules, apostrophes unifiées, contractions développées, ponctuation retirée. */
export function normalize(input: string): string {
  let s = input
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[’‘`´]/g, "'")
    .replace(/[“”]/g, '"')
    .trim();
  for (const [re, rep] of CONTRACTIONS) s = s.replace(re, rep);
  return s
    .replace(/[.,!?;:"()«»]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length];
}

export type Verdict = 'correct' | 'typo' | 'wrong';

export interface TextGrade {
  verdict: Verdict;
  /** 0..1 */
  score: number;
  /** Réponse attendue la plus proche (pour l'affichage). */
  closest: string;
}

/**
 * Compare une réponse libre à une liste de réponses acceptées.
 * Une faute de frappe légère (1 caractère pour ≤ 8, 2 au-delà) est tolérée
 * et signalée, sauf si `strict` (ex. conjugaison, où une lettre change tout).
 */
export function gradeText(input: string, accepted: string[], strict = false): TextGrade {
  const n = normalize(input);
  let best = { dist: Infinity, answer: accepted[0] ?? '' };
  for (const a of accepted) {
    const dist = levenshtein(n, normalize(a));
    if (dist < best.dist) best = { dist, answer: a };
    if (dist === 0) break;
  }
  if (best.dist === 0) return { verdict: 'correct', score: 1, closest: best.answer };
  const target = normalize(best.answer);
  const tolerance = strict || target.length <= 3 ? 0 : target.length <= 8 ? 1 : 2;
  if (n.length > 0 && best.dist <= tolerance) return { verdict: 'typo', score: 0.8, closest: best.answer };
  return { verdict: 'wrong', score: 0, closest: best.answer };
}
