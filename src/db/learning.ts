import { db, getSettings, type Attempt } from './db';
import {
  EXERCISES_BY_KC, IRREGULAR_VERBS, VOCAB_A2, irregularById, vocabById, THEMES,
} from '../content';
import type { Exercise, IrregularVerb, Lesson, VocabEntry } from '../content/types';
import type { ExerciseResult } from '../core/exercise';
import { cardId, isLearned, newCard, ratingFor, review, State, type SrsCard, type SrsItemType } from '../core/srs';
import { initialKc, isWeak, mastery, updateKc, type KcState } from '../core/mastery';
import { irregularExercise, irregularModeFor, vocabExercise, vocabModeFor } from '../core/generators';
import { buildSession, type NewItem, type SessionItem } from '../core/session';
import { dayKey } from '../core/dates';
import type { Verdict } from '../core/grading';

export type Focus = 'all' | 'vocab' | 'irregular' | 'weak';

export interface ResultInput {
  exercise: Exercise;
  result: ExerciseResult;
  durationMs: number;
  context: Attempt['context'];
  lessonId?: string;
  /** Carte SRS concernée (révision ou nouvel élément) */
  cardId?: string;
  /** Seule la première réponse compte pour la maîtrise et la répétition espacée */
  firstTry: boolean;
  response: string;
}

/** Enregistre une réponse et met à jour la maîtrise des notions et la carte SRS éventuelle. */
export async function recordResult(r: ResultInput): Promise<void> {
  await db.transaction('rw', db.attempts, db.kcMastery, db.srsCards, async () => {
    await db.attempts.add({
      exerciseId: r.exercise.id,
      lessonId: r.lessonId,
      at: Date.now(),
      durationMs: r.durationMs,
      score: r.result.score,
      verdict: r.result.verdict,
      response: r.response,
      kcIds: r.exercise.kcIds,
      skill: r.exercise.skill,
      context: r.context,
    });
    if (!r.firstTry) return;

    for (const kc of r.exercise.kcIds) {
      const state = (await db.kcMastery.get(kc)) ?? initialKc(kc);
      await db.kcMastery.put(updateKc(state, r.exercise.difficulty, r.result.score));
    }

    if (r.cardId) {
      const [type, ...rest] = r.cardId.split(':');
      const card = (await db.srsCards.get(r.cardId)) ?? newCard(type as SrsItemType, rest.join(':'));
      await db.srsCards.put(review(card, ratingFor(r.result.verdict, r.durationMs, card.reps)));
    }
  });
}

/**
 * Fin de leçon : chaque notion travaillée devient (ou reste) une carte de révision,
 * notée selon la réussite moyenne sur ses exercices.
 */
export async function scheduleLessonKcs(lesson: Lesson, firstTry: Map<string, number>): Promise<void> {
  const byKc = new Map<string, number[]>();
  for (const e of lesson.exercises) {
    const score = firstTry.get(e.id);
    if (score === undefined) continue;
    for (const kc of e.kcIds) byKc.set(kc, [...(byKc.get(kc) ?? []), score]);
  }
  await db.transaction('rw', db.srsCards, async () => {
    for (const [kc, scores] of byKc) {
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      const verdict: Verdict = avg >= 0.85 ? 'correct' : avg >= 0.6 ? 'typo' : 'wrong';
      const id = cardId('kc', kc);
      const card = (await db.srsCards.get(id)) ?? newCard('kc', kc);
      await db.srsCards.put(review(card, ratingFor(verdict, 10_000, card.reps)));
    }
  });
}

// ───────────── Construction de la séance ─────────────

interface SeenInfo {
  lastAt: number;
  lastScore: number;
}

async function seenMap(): Promise<Map<string, SeenInfo>> {
  const recent = await db.attempts.orderBy('at').reverse().limit(3000).toArray();
  const map = new Map<string, SeenInfo>();
  for (const a of recent) if (!map.has(a.exerciseId)) map.set(a.exerciseId, { lastAt: a.at, lastScore: a.score });
  return map;
}

/** Exercices d'une notion : d'abord ceux ratés la dernière fois, puis les moins récemment vus. */
function orderedForKc(kc: string, seen: Map<string, SeenInfo>): Exercise[] {
  const pool = EXERCISES_BY_KC.get(kc) ?? [];
  const key = (e: Exercise) => {
    const s = seen.get(e.id);
    if (!s) return 1e15; // jamais vu : après les ratés, avant les réussis récents
    return s.lastScore < 0.8 ? 0 : 2e15 + s.lastAt;
  };
  return [...pool].sort((a, b) => key(a) - key(b));
}

const vocabIntro = (v: VocabEntry): NewItem['intro'] => ({
  label: `Nouveau mot · ${THEMES[v.theme] ?? v.theme}`,
  title: v.en,
  subtitle: v.fr,
  lines: v.example ? [{ en: v.example, fr: v.exampleFr }] : undefined,
  speak: v.example ? `${v.en}. ${v.example}` : v.en,
});

const irregularIntro = (v: IrregularVerb): NewItem['intro'] => ({
  label: 'Verbe irrégulier',
  title: `${v.base} → ${v.past} → ${v.participle}`,
  subtitle: v.fr,
  lines: [{ en: `base : ${v.base}` }, { en: `past simple : ${v.past}` }, { en: `participe passé : ${v.participle}` }],
  speak: `${v.base}, ${v.past.replace('/', 'or')}, ${v.participle.replace('/', 'or')}`,
});

/** Nombre de nouveaux éléments déjà présentés aujourd'hui. */
async function introducedToday(): Promise<{ vocab: number; irregular: number }> {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const todays = await db.attempts.where('at').aboveOrEqual(start.getTime()).filter((a) => a.context === 'new').toArray();
  return {
    vocab: todays.filter((a) => a.exerciseId.startsWith('gen-v-')).length,
    irregular: todays.filter((a) => a.exerciseId.startsWith('gen-irr-')).length,
  };
}

export async function prepareSession(focus: Focus, budgetSeconds: number): Promise<SessionItem[]> {
  const settings = await getSettings();
  const speaking = settings.speakingEnabled;
  const now = Date.now();
  const seed = `${dayKey()}-${focus}-${now}`;
  const [cards, kcStates, seen, today] = await Promise.all([
    db.srsCards.toArray(),
    db.kcMastery.toArray(),
    seenMap(),
    introducedToday(),
  ]);
  const known = new Set(cards.map((c) => c.id));

  const typeAllowed = (t: SrsItemType) =>
    focus === 'all' || (focus === 'vocab' && t === 'vocab') || (focus === 'irregular' && t === 'irregular');

  const resolveCard = (card: SrsCard): Exercise | undefined => {
    if (card.type === 'kc') return orderedForKc(card.itemId, seen).find((e) => speaking || e.type !== 'speak');
    if (card.type === 'vocab') {
      const v = vocabById.get(card.itemId);
      return v && vocabExercise(v, VOCAB_A2, vocabModeFor(card.reps, `${seed}${v.id}`, speaking), `${seed}${v.id}`);
    }
    const v = irregularById.get(card.itemId);
    return v && irregularExercise(v, irregularModeFor(card.reps, `${seed}${v.id}`, speaking));
  };

  const newWords: NewItem[] =
    focus === 'all' || focus === 'vocab'
      ? VOCAB_A2.filter((v) => !known.has(cardId('vocab', v.id)))
          .slice(0, Math.max(0, (focus === 'vocab' ? settings.newWordsPerDay * 2 : settings.newWordsPerDay) - today.vocab))
          .map((v) => ({ cardId: cardId('vocab', v.id), intro: vocabIntro(v), exercise: vocabExercise(v, VOCAB_A2, 'en_fr', seed) }))
      : [];
  const newVerbs: NewItem[] =
    focus === 'all' || focus === 'irregular'
      ? IRREGULAR_VERBS.filter((v) => !known.has(cardId('irregular', v.id)))
          .slice(0, Math.max(0, (focus === 'irregular' ? 8 : 3) - today.irregular))
          .map((v) => ({ cardId: cardId('irregular', v.id), intro: irregularIntro(v), exercise: irregularExercise(v, 'past') }))
      : [];
  // Les nouveaux mots et verbes s'alternent plutôt que d'arriver en bloc.
  const newItems: NewItem[] = [];
  for (let i = 0; i < Math.max(newWords.length, newVerbs.length); i++) {
    if (newWords[i]) newItems.push(newWords[i]);
    if (newVerbs[i]) newItems.push(newVerbs[i]);
  }

  const weakKcs =
    focus === 'all' || focus === 'weak'
      ? kcStates.filter((s) => isWeak(s) && !s.kcId.startsWith('vocab.')).sort((a, b) => mastery(a) - mastery(b)).map((s) => s.kcId)
      : [];

  return buildSession({
    now,
    budgetSeconds,
    // Le mode « points faibles » consacre tout le budget au travail ciblé.
    shares: focus === 'weak' ? { review: 0, drill: 1 } : undefined,
    seed,
    dueCards: cards.filter((c) => typeAllowed(c.type)),
    resolveCard,
    weakKcs,
    exercisesForKc: (kc) =>
      kc === 'verbs.irregular'
        ? // Pas d'exercices écrits à la main : on génère sur les verbes déjà rencontrés, les plus fragiles d'abord.
          cards
            .filter((c) => c.type === 'irregular')
            .sort((a, b) => a.stability - b.stability)
            .map((c) => irregularById.get(c.itemId))
            .filter((v): v is IrregularVerb => !!v)
            .map((v) => irregularExercise(v, 'three'))
        : orderedForKc(kc, seen),
    newItems: focus === 'weak' ? [] : newItems,
    includeSpeaking: speaking,
  });
}

// ───────────── Statistiques ─────────────

export interface LearningStats {
  dueCount: number;
  wordsLearned: number;
  wordsStarted: number;
  verbsLearned: number;
  verbsStarted: number;
  weak: { kcId: string; mastery: number }[];
  strong: { kcId: string; mastery: number }[];
}

export async function learningStats(): Promise<LearningStats> {
  const now = Date.now();
  const [cards, kcs] = await Promise.all([db.srsCards.toArray(), db.kcMastery.toArray()]);
  const ofType = (t: SrsItemType) => cards.filter((c) => c.type === t);
  const grammar = kcs.filter((k) => !k.kcId.startsWith('vocab.') && k.attempts >= 3);
  const withMastery = (list: KcState[]) => list.map((k) => ({ kcId: k.kcId, mastery: mastery(k) }));
  return {
    dueCount: cards.filter((c) => c.due <= now).length,
    wordsLearned: ofType('vocab').filter(isLearned).length,
    wordsStarted: ofType('vocab').filter((c) => c.state !== State.New).length,
    verbsLearned: ofType('irregular').filter(isLearned).length,
    verbsStarted: ofType('irregular').filter((c) => c.state !== State.New).length,
    weak: withMastery(grammar.filter(isWeak)).sort((a, b) => a.mastery - b.mastery).slice(0, 5),
    strong: withMastery(grammar).filter((k) => k.mastery >= 0.85).sort((a, b) => b.mastery - a.mastery).slice(0, 5),
  };
}
