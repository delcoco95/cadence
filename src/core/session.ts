import type { Exercise } from '../content/types';
import { estSeconds, seededShuffle } from './exercise';
import { reviewPriority, type SrsCard } from './srs';

export type SessionSource = 'lesson' | 'review' | 'drill' | 'new';

/** Fiche de présentation d'un nouvel élément (mot, verbe irrégulier), non notée. */
export interface IntroCard {
  label: string;
  title: string;
  subtitle: string;
  lines?: { en: string; fr?: string }[];
  /** Texte lu par la synthèse vocale */
  speak: string;
}

export type SessionItem =
  | { kind: 'exercise'; exercise: Exercise; source: SessionSource; cardId?: string }
  | { kind: 'intro'; intro: IntroCard; cardId: string };

export interface NewItem {
  cardId: string;
  intro: IntroCard;
  exercise: Exercise;
}

export interface SessionInput {
  now: number;
  budgetSeconds: number;
  seed: string;
  dueCards: SrsCard[];
  /** Exercice à présenter pour une carte due (undefined si le contenu n'existe plus) */
  resolveCard: (card: SrsCard) => Exercise | undefined;
  /** Notions faibles, de la plus faible à la moins faible */
  weakKcs: string[];
  /** Exercices disponibles pour une notion, les moins récemment vus en premier */
  exercisesForKc: (kcId: string) => Exercise[];
  /** Éléments jamais vus, dans l'ordre d'apprentissage souhaité */
  newItems: NewItem[];
  includeSpeaking: boolean;
  /** Part du budget pour les révisions et le travail ciblé (défaut 0,5 et 0,25) */
  shares?: { review: number; drill: number };
}

export const INTRO_SECONDS = 10;

/**
 * Compose une séance d'environ `budgetSeconds` :
 * ~50 % révisions dues, ~25 % travail ciblé sur les faiblesses, le reste en nouveaux mots.
 * Le budget non utilisé par une catégorie est reporté sur les suivantes.
 */
export function buildSession(input: SessionInput): SessionItem[] {
  const B = input.budgetSeconds;
  const shares = input.shares ?? { review: 0.5, drill: 0.25 };
  const usable = (e: Exercise | undefined): e is Exercise => !!e && (input.includeSpeaking || e.type !== 'speak');
  const used = new Set<string>();
  let spent = 0;

  // 1. Révisions dues, les plus urgentes d'abord
  const reviews: SessionItem[] = [];
  const due = input.dueCards
    .filter((c) => c.due <= input.now)
    .sort((a, b) => reviewPriority(b, input.now) - reviewPriority(a, input.now));
  for (const card of due) {
    if (spent >= B * shares.review) break;
    const ex = input.resolveCard(card);
    if (!usable(ex) || used.has(ex.id)) continue;
    used.add(ex.id);
    reviews.push({ kind: 'exercise', exercise: ex, source: 'review', cardId: card.id });
    spent += estSeconds(ex);
  }

  // 2. Travail ciblé : tour à tour sur chaque notion faible
  const drills: SessionItem[] = [];
  const drillLimit = spent + B * shares.drill;
  const pools = input.weakKcs.map((kc) => input.exercisesForKc(kc).filter(usable));
  while (spent < drillLimit && pools.some((p) => p.length)) {
    for (const pool of pools) {
      if (spent >= drillLimit) break;
      const ex = pool.shift();
      if (!ex || used.has(ex.id)) continue;
      used.add(ex.id);
      drills.push({ kind: 'exercise', exercise: ex, source: 'drill' });
      spent += estSeconds(ex);
    }
  }

  // 3. Nouveaux éléments : présentation puis premier exercice
  const fresh: SessionItem[][] = [];
  for (const item of input.newItems) {
    if (spent >= B) break;
    if (!usable(item.exercise)) continue;
    fresh.push([
      { kind: 'intro', intro: item.intro, cardId: item.cardId },
      { kind: 'exercise', exercise: item.exercise, source: 'new', cardId: item.cardId },
    ]);
    spent += INTRO_SECONDS + estSeconds(item.exercise);
  }

  // Entrelacement : révisions et faiblesses mélangées, nouveaux mots répartis régulièrement.
  const mixed = seededShuffle([...reviews, ...drills], input.seed);
  if (!fresh.length) return mixed;
  const out: SessionItem[] = [];
  const step = Math.max(1, Math.ceil(mixed.length / fresh.length));
  let f = 0;
  mixed.forEach((item, i) => {
    if (i % step === 0 && f < fresh.length) out.push(...fresh[f++]);
    out.push(item);
  });
  while (f < fresh.length) out.push(...fresh[f++]);
  return out;
}

export function sessionSeconds(items: SessionItem[]): number {
  return items.reduce((a, it) => a + (it.kind === 'intro' ? INTRO_SECONDS : estSeconds(it.exercise)), 0);
}
