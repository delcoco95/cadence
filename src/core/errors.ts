import type { ErrorTag, Exercise } from '../content/types';
import type { ExerciseResponse, ExerciseResult } from './exercise';
import { normalize } from './grading';

/**
 * Classification déterministe des erreurs : on compare la réponse à la réponse attendue
 * mot par mot et on reconnaît les erreurs typiques (« he work », « goed », « must to »…).
 */

const AUX = new Set(['do', 'does', 'did', 'am', 'is', 'are', 'was', 'were', 'have', 'has', 'had', 'will', 'would', 'can', 'could']);
const DO_AUX = new Set(['do', 'does', 'did']);
const ARTICLES = new Set(['a', 'an', 'the']);
const PREPOSITIONS = new Set(['in', 'on', 'at', 'to', 'for', 'from', 'of', 'by', 'with', 'about', 'into', 'under', 'next', 'between', 'opposite', 'behind']);
const PRONOUNS = new Set(['i', 'me', 'my', 'mine', 'you', 'your', 'yours', 'he', 'him', 'his', 'she', 'her', 'hers', 'it', 'its', 'we', 'us', 'our', 'ours', 'they', 'them', 'their', 'theirs']);
const MODALS = new Set(['can', 'could', 'must', 'should', 'will', 'would', 'may', 'might']);

/** Formes des verbes irréguliers : base → [past, participe] (variantes séparées par « / ») */
export type IrregularForms = Map<string, { past: string[]; participle: string[] }>;

export interface DetectOptions {
  irregulars?: IrregularForms;
}

type Op = { kind: 'eq'; t: string; u: string } | { kind: 'del'; t: string } | { kind: 'ins'; u: string } | { kind: 'sub'; t: string; u: string };

/** Alignement mot à mot (plus longue sous-séquence commune), suppressions + insertions voisines = substitution. */
export function alignWords(target: string[], user: string[]): Op[] {
  const n = target.length;
  const m = user.length;
  const dp = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = target[i] === user[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const raw: Op[] = [];
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && target[i] === user[j]) raw.push({ kind: 'eq', t: target[i++], u: user[j++] });
    else if (j < m && (i === n || dp[i][j + 1] >= dp[i + 1][j])) raw.push({ kind: 'ins', u: user[j++] });
    else raw.push({ kind: 'del', t: target[i++] });
  }
  // Fusion : un « del » et un « ins » consécutifs forment une substitution.
  const ops: Op[] = [];
  for (let k = 0; k < raw.length; k++) {
    const a = raw[k];
    const b = raw[k + 1];
    if (a.kind === 'del' && b?.kind === 'ins') {
      ops.push({ kind: 'sub', t: a.t, u: b.u });
      k++;
    } else if (a.kind === 'ins' && b?.kind === 'del') {
      ops.push({ kind: 'sub', t: b.t, u: a.u });
      k++;
    } else ops.push(a);
  }
  return ops;
}

const tokens = (s: string) => normalize(s).split(' ').filter(Boolean);

/** `inflected` est-il `base` + -s / -es / -ies ? */
function isThirdPersonOf(inflected: string, base: string): boolean {
  if (inflected === `${base}s` || inflected === `${base}es`) return true;
  if (base.endsWith('y') && inflected === `${base.slice(0, -1)}ies`) return true;
  return base === 'have' && inflected === 'has';
}

const isEdOf = (inflected: string, base: string) =>
  inflected === `${base}ed` || inflected === `${base}d` || (base.endsWith('y') && inflected === `${base.slice(0, -1)}ied`);

function irregularBaseOf(word: string, irr: IrregularForms): string | undefined {
  for (const [base, f] of irr) if (base === word || f.past.includes(word) || f.participle.includes(word)) return base;
  return undefined;
}

/** Détecteurs sur deux phrases (attendue / donnée). */
export function detectTextErrors(expected: string, given: string, ex: Exercise, opts: DetectOptions = {}): ErrorTag[] {
  const t = tokens(expected);
  const u = tokens(given);
  const tags = new Set<ErrorTag>();
  const irr = opts.irregulars ?? new Map();
  const pluralContext = ex.kcIds.some((k) => k.includes('plural') || k.includes('countable'));

  // Modal suivi de « to » (can to, must to, will to) absent de la réponse attendue
  const targetBigrams = new Set(t.slice(0, -1).map((w, k) => `${w} ${t[k + 1]}`));
  for (let k = 0; k < u.length - 1; k++)
    if (MODALS.has(u[k]) && u[k + 1] === 'to' && !targetBigrams.has(`${u[k]} to`)) tags.add('modal_to');

  // Même mots, autre ordre
  if (t.length > 1 && t.length === u.length && [...t].sort().join(' ') === [...u].sort().join(' ') && t.join(' ') !== u.join(' ')) {
    tags.add('word_order');
    return [...tags];
  }

  const ops = alignWords(t, u);
  // Réponse trop éloignée de l'attendu (« xx », phrase sans rapport) : pas de diagnostic inventé.
  const matched = ops.filter((o) => o.kind === 'eq').length;
  if (t.length >= 3 && matched / t.length < 0.5) return [...tags];
  const hasDoAux = u.some((w) => DO_AUX.has(w));
  for (const op of ops) {
    if (op.kind === 'sub') {
      const { t: tw, u: uw } = op;
      if (AUX.has(tw) && AUX.has(uw)) tags.add('wrong_auxiliary');
      else if (isThirdPersonOf(tw, uw)) tags.add(pluralContext ? 'plural_form' : 'third_person_s');
      else if (hasDoAux && (isThirdPersonOf(uw, tw) || isEdOf(uw, tw))) tags.add('auxiliary_with_inflected_verb');
      else if (isThirdPersonOf(uw, tw)) tags.add(pluralContext ? 'plural_form' : 'third_person_s');
      else if (ARTICLES.has(tw) && ARTICLES.has(uw)) tags.add('article_wrong');
      else if (PREPOSITIONS.has(tw) && PREPOSITIONS.has(uw)) tags.add('wrong_preposition');
      else if (PRONOUNS.has(tw) && PRONOUNS.has(uw)) tags.add('wrong_pronoun');
      else {
        const base = irregularBaseOf(tw, irr);
        if (base && isEdOf(uw, base)) tags.add('regularized_irregular');
        else if (base && irregularBaseOf(uw, irr) === base) {
          // Autre forme du même verbe : sans auxiliaire do, c'est une erreur de forme irrégulière.
          if (hasDoAux) tags.add('auxiliary_with_inflected_verb');
          else tags.add('irregular_form');
        } else if (tw.endsWith('ing') !== uw.endsWith('ing') || tw.endsWith('ed') !== uw.endsWith('ed')) tags.add('wrong_tense');
      }
    } else if (op.kind === 'del') {
      if (AUX.has(op.t)) tags.add('missing_auxiliary');
      else if (ARTICLES.has(op.t)) tags.add('article_missing');
      else if (PREPOSITIONS.has(op.t)) tags.add('wrong_preposition');
    } else if (op.kind === 'ins') {
      if (ARTICLES.has(op.u) && !t.includes(op.u)) tags.add('article_wrong');
      else if (PREPOSITIONS.has(op.u) && !t.includes(op.u)) tags.add('wrong_preposition');
    }
  }
  return [...tags];
}

/** Étiquettes d'erreur d'une réponse corrigée (vide si la réponse est juste). */
export function detectErrors(ex: Exercise, response: ExerciseResponse, result: ExerciseResult, opts: DetectOptions = {}): ErrorTag[] {
  if (result.verdict === 'correct') return [];
  if (result.verdict === 'typo' && ex.type !== 'speak') return ['spelling'];

  const given =
    response.kind === 'text' ? response.value
      : response.kind === 'speech' ? response.transcript
        : response.kind === 'tokens' ? response.tokens.join(' ')
          : 'options' in ex ? ex.options[response.index] ?? ''
            : '';

  // Pièges prévus par l'auteur
  const n = ` ${normalize(given)} `;
  const planned = (ex.errorPatterns ?? []).filter((p) => n.includes(` ${normalize(p.match)} `)).map((p) => p.tag);
  if (planned.length) return [...new Set(planned)];

  const isVocab = ex.kcIds.some((k) => k.startsWith('vocab.'));
  switch (ex.type) {
    case 'listen_mcq':
      return ['listening_misunderstanding'];
    case 'mcq': {
      if (isVocab) return ['vocabulary_missing'];
      const found = detectTextErrors(ex.options[ex.answer], given, ex, opts);
      return found.length ? found : ['wrong_choice'];
    }
    case 'speak': {
      if (ex.mode === 'answer') return ['insufficient_answer'];
      if (ex.mode === 'repeat') return ['pronunciation_intelligibility'];
      const found = detectTextErrors(result.expected, given, ex, opts);
      return found.length ? found : isVocab ? ['vocabulary_missing'] : ['pronunciation_intelligibility'];
    }
    case 'dictation': {
      const found = detectTextErrors(result.expected, given, ex, opts);
      return found.length ? found : ['listening_misunderstanding'];
    }
    default: {
      if (isVocab) return ['vocabulary_missing'];
      return detectTextErrors(result.expected, given, ex, opts);
    }
  }
}

export const ERROR_LABELS: Record<ErrorTag, string> = {
  third_person_s: 'Oubli du -s à la 3ᵉ personne (he works)',
  missing_auxiliary: 'Auxiliaire manquant (do, does, is, are…)',
  auxiliary_with_inflected_verb: 'Verbe conjugué après do / does / did',
  wrong_auxiliary: 'Mauvais auxiliaire (do / does, is / are, was / were)',
  wrong_tense: 'Mauvais temps',
  irregular_form: 'Forme de verbe irrégulier',
  regularized_irregular: 'Irrégulier mis en -ed (goed, taked…)',
  article_missing: 'Article manquant (a / an / the)',
  article_wrong: 'Mauvais article',
  wrong_preposition: 'Mauvaise préposition',
  word_order: 'Ordre des mots',
  plural_form: 'Forme du pluriel',
  countable_uncountable: 'Dénombrable / indénombrable',
  modal_to: '« to » après un modal (can to…)',
  wrong_pronoun: 'Pronom ou possessif',
  spelling: 'Orthographe',
  vocabulary_missing: 'Vocabulaire non retrouvé',
  listening_misunderstanding: 'Compréhension orale',
  pronunciation_intelligibility: 'Prononciation / intelligibilité',
  insufficient_answer: 'Réponse trop courte ou incomplète',
  wrong_choice: 'Mauvais choix',
};

/**
 * Difficulté persistante : au moins 3 occurrences du même tag sur la même notion en 14 jours,
 * sur au moins 2 jours différents (une mauvaise séance ne suffit pas).
 */
export interface ErrorEvent {
  id?: number;
  tag: ErrorTag;
  kcId: string;
  exerciseId: string;
  at: number;
}

export interface PersistentDifficulty {
  tag: ErrorTag;
  kcId: string;
  count: number;
  lastAt: number;
  days: number;
}

export function persistentDifficulties(events: ErrorEvent[], now = Date.now(), minCount = 3, windowDays = 14): PersistentDifficulty[] {
  const since = now - windowDays * 86_400_000;
  const groups = new Map<string, PersistentDifficulty & { daySet: Set<string> }>();
  for (const e of events) {
    if (e.at < since || e.tag === 'wrong_choice' || e.tag === 'spelling') continue;
    const key = `${e.kcId}|${e.tag}`;
    const g = groups.get(key) ?? { tag: e.tag, kcId: e.kcId, count: 0, lastAt: 0, days: 0, daySet: new Set<string>() };
    g.count++;
    g.daySet.add(new Date(e.at).toDateString());
    g.days = g.daySet.size;
    g.lastAt = Math.max(g.lastAt, e.at);
    groups.set(key, g);
  }
  return [...groups.values()]
    .filter((g) => g.count >= minCount && g.days >= 2)
    .map(({ daySet: _d, ...g }) => g)
    .sort((a, b) => b.count - a.count);
}
