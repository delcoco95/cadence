import { createEmptyCard, fsrs, generatorParameters, Rating, State, type Card, type Grade } from 'ts-fsrs';
import type { Verdict } from './grading';

/**
 * Répétition espacée FSRS, planifiée en jours (pas de pas intra-journée : une erreur
 * dans une leçon fait déjà revenir l'exercice immédiatement).
 */
const scheduler = fsrs(
  generatorParameters({ request_retention: 0.9, enable_fuzz: true, enable_short_term: false, maximum_interval: 365 }),
);

export type SrsItemType = 'kc' | 'vocab' | 'irregular';

/** Carte sérialisable (dates en millisecondes, indexables par Dexie). */
export interface SrsCard {
  id: string; // `${type}:${itemId}`
  type: SrsItemType;
  itemId: string;
  due: number;
  stability: number;
  difficulty: number;
  elapsedDays: number;
  scheduledDays: number;
  learningSteps: number;
  reps: number;
  lapses: number;
  state: State;
  lastReview?: number;
}

export const cardId = (type: SrsItemType, itemId: string) => `${type}:${itemId}`;

function toFsrs(c: SrsCard): Card {
  return {
    due: new Date(c.due),
    stability: c.stability,
    difficulty: c.difficulty,
    elapsed_days: c.elapsedDays,
    scheduled_days: c.scheduledDays,
    learning_steps: c.learningSteps,
    reps: c.reps,
    lapses: c.lapses,
    state: c.state,
    last_review: c.lastReview ? new Date(c.lastReview) : undefined,
  };
}

function fromFsrs(type: SrsItemType, itemId: string, c: Card): SrsCard {
  return {
    id: cardId(type, itemId),
    type,
    itemId,
    due: c.due.getTime(),
    stability: c.stability,
    difficulty: c.difficulty,
    elapsedDays: c.elapsed_days,
    scheduledDays: c.scheduled_days,
    learningSteps: c.learning_steps,
    reps: c.reps,
    lapses: c.lapses,
    state: c.state,
    lastReview: c.last_review?.getTime(),
  };
}

export function newCard(type: SrsItemType, itemId: string, now = new Date()): SrsCard {
  return fromFsrs(type, itemId, createEmptyCard(now));
}

/** La note FSRS est déduite de la réponse, jamais demandée à l'utilisateur. */
export function ratingFor(verdict: Verdict, durationMs: number, reps: number, confidence?: 1 | 2 | 3 | 4): Grade {
  if (verdict === 'wrong') return Rating.Again;
  // Juste mais deviné ou incertain : l'élément doit revenir vite.
  if (verdict === 'typo' || durationMs > 25_000 || confidence === 1 || confidence === 2) return Rating.Hard;
  if (reps >= 2 && (durationMs < 5_000 || confidence === 4) && confidence !== 3) return Rating.Easy;
  return Rating.Good;
}

export function review(card: SrsCard, grade: Grade, now = new Date()): SrsCard {
  const { card: next } = scheduler.next(toFsrs(card), now, grade);
  return fromFsrs(card.type, card.itemId, next);
}

/** Rattrapage : on révise d'abord le plus en retard, puis le plus fragile. */
export function reviewPriority(card: SrsCard, now: number): number {
  const overdueDays = (now - card.due) / 86_400_000;
  return overdueDays + 1 / Math.max(0.5, card.stability);
}

/** Rétention : probabilité de se souvenir de l'élément maintenant (courbe d'oubli FSRS). */
export function retrievability(card: SrsCard, now = Date.now()): number {
  if (card.state === State.New) return 0;
  return scheduler.get_retrievability(toFsrs(card), new Date(now), false);
}

/** Un élément est « appris » quand il est en révision avec une stabilité d'au moins une semaine. */
export const isLearned = (c: SrsCard) => c.state === State.Review && c.stability >= 7;

export { Rating, State };
