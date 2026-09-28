import { db, getSettings, type Attempt } from './db';
import { EXERCISES_BY_KC, IRREGULAR_VERBS, VOCAB_A2, irregularById, vocabById, THEMES } from '../content';
import type { ErrorTag, Exercise, IrregularVerb, Lesson, VocabEntry } from '../content/types';
import type { ExerciseResult } from '../core/exercise';
import { cardId, isLearned, newCard, ratingFor, retrievability, review, State, type SrsCard, type SrsItemType } from '../core/srs';
import { emptyMastery, isWeak, observe, summarize, type MasterySummary } from '../core/mastery';
import { EVIDENCE_LEVELS, evidenceOf, type Evidence } from '../core/evidence';
import { irregularExercise, irregularModeFor, vocabExercise, vocabModeFor, type VocabMode } from '../core/generators';
import { buildSession, type NewItem, type SessionItem } from '../core/session';
import { persistentDifficulties, type PersistentDifficulty } from '../core/errors';
import { planRetry } from '../core/retry';
import { dayKey } from '../core/dates';
import type { Verdict } from '../core/grading';
import { kcForError } from './replay';
import { resolveExercise, vocabAttemptInfo } from './meta';

export type Focus = 'all' | 'vocab' | 'irregular' | 'weak';
export type Confidence = 1 | 2 | 3 | 4;

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
  errorTags: ErrorTag[];
  confidence?: Confidence;
}

/** Enregistre une réponse : journal, maîtrise par niveau de preuve, erreurs, carte SRS éventuelle. */
export async function recordResult(r: ResultInput): Promise<void> {
  const now = Date.now();
  const day = dayKey();
  const evidence = evidenceOf(r.exercise);
  await db.transaction('rw', [db.attempts, db.kcEvidence, db.srsCards, db.errorEvents], async () => {
    await db.attempts.add({
      exerciseId: r.exercise.id,
      lessonId: r.lessonId,
      at: now,
      durationMs: r.durationMs,
      score: r.result.score,
      verdict: r.result.verdict,
      response: r.response,
      kcIds: r.exercise.kcIds,
      skill: r.exercise.skill,
      evidence,
      confidence: r.confidence,
      errorTags: r.errorTags.length ? r.errorTags : undefined,
      context: r.context,
    });
    // Les erreurs comptent toujours (même au repêchage) : ce sont elles qui révèlent les difficultés persistantes.
    for (const tag of r.errorTags) {
      await db.errorEvents.add({ tag, kcId: kcForError(r.exercise, tag), exerciseId: r.exercise.id, at: now });
    }
    if (!r.firstTry) return;

    for (const kc of r.exercise.kcIds) {
      const m = (await db.kcEvidence.get(kc)) ?? emptyMastery(kc);
      await db.kcEvidence.put(observe(m, { evidence, difficulty: r.exercise.difficulty, score: r.result.score, confidence: r.confidence, now, day }));
    }
    if (r.cardId) {
      const [type, ...rest] = r.cardId.split(':');
      const card = (await db.srsCards.get(r.cardId)) ?? newCard(type as SrsItemType, rest.join(':'));
      await db.srsCards.put(review(card, ratingFor(r.result.verdict, r.durationMs, card.reps, r.confidence)));
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

// ───────────── Choix des exercices ─────────────

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

const rankOf = (e: Exercise) => EVIDENCE_LEVELS.indexOf(evidenceOf(e));

/**
 * Exercices d'une notion pour une révision : on vise un niveau de preuve qui monte avec
 * la solidité du souvenir (rappel au début, production ensuite), et on évite ce qui a été vu récemment.
 */
function pickForKc(kc: string, seen: Map<string, SeenInfo>, targetEvidence: Evidence, speaking: boolean): Exercise[] {
  const pool = (EXERCISES_BY_KC.get(kc) ?? []).filter((e) => e.role !== 'assessment' && (speaking || e.type !== 'speak'));
  const target = EVIDENCE_LEVELS.indexOf(targetEvidence);
  const score = (e: Exercise) => {
    const s = seen.get(e.id);
    const recency = s ? (Date.now() - s.lastAt) / 86_400_000 : 30; // jours depuis la dernière fois
    return -Math.abs(rankOf(e) - target) * 10 + Math.min(recency, 30);
  };
  return [...pool].sort((a, b) => score(b) - score(a));
}

const evidenceForReps = (reps: number): Evidence => (reps <= 1 ? 'recall' : reps <= 3 ? 'production' : 'free');

/** Repêchage : variante d'une autre famille ou d'un autre format, jamais l'item raté à l'identique. */
export function retryItem(
  failed: Exercise,
  source: SessionItem & { kind: 'exercise' },
  usedIds: Set<string>,
  attempt: number,
): SessionItem {
  const vocab = failed.vocab?.[0] && vocabById.get(failed.vocab[0]);
  if (vocab) {
    // Mot raté : on redemande dans un autre format (production si c'était de la reconnaissance).
    const info = vocabAttemptInfo(failed.id);
    const next: VocabMode = info?.mode === 'en_fr' || info?.mode === 'listen' ? 'fr_en' : 'en_fr';
    return { ...source, exercise: vocabExercise(vocab, VOCAB_A2, next, `${failed.id}#${attempt}`), source: 'retry', shuffleSeed: `${failed.id}#${attempt}` };
  }
  if (failed.id.startsWith('gen-irr-')) {
    const verb = IRREGULAR_VERBS.find((v) => failed.id.startsWith(`gen-irr-${v.id}-`));
    if (verb) {
      const mode = failed.id.endsWith('-three') ? 'past' : 'three';
      return { ...source, exercise: irregularExercise(verb, mode), source: 'retry' };
    }
  }
  const candidates = failed.kcIds.flatMap((k) => EXERCISES_BY_KC.get(k) ?? []);
  const plan = planRetry(failed, candidates, usedIds, attempt);
  // Un repêchage ne crée pas de nouvelle carte : il ne sert qu'à la consolidation immédiate.
  return { kind: 'exercise', exercise: plan.exercise, source: 'retry', shuffleSeed: plan.shuffleSeed };
}

// ───────────── Récap de fin de séance ─────────────

/**
 * Récap : ce qui a été vu aujourd'hui et hier revient à la fin, SANS aide et dans un autre format
 * (on doit retrouver ou produire, pas reconnaître). Les éléments ratés passent en premier.
 */
export async function prepareRecap(max: number, excludeIds: Set<string>, speaking: boolean): Promise<Exercise[]> {
  const since = Date.now() - 2 * 86_400_000;
  const recent = await db.attempts.where('at').above(since).toArray();
  const seen = await seenMap();
  const byItem = new Map<string, { failed: boolean; at: number; exerciseId: string }>();
  for (const a of recent) {
    if (a.context === 'recap' || a.context === 'placement') continue;
    const vocab = vocabAttemptInfo(a.exerciseId);
    const irr = a.exerciseId.startsWith('gen-irr-') ? IRREGULAR_VERBS.find((v) => a.exerciseId.startsWith(`gen-irr-${v.id}-`)) : undefined;
    const key = vocab ? `v:${vocab.vocabId}` : irr ? `i:${irr.id}` : `k:${a.kcIds[0]}`;
    const prev = byItem.get(key);
    byItem.set(key, { failed: (prev?.failed ?? false) || a.score < 0.8, at: Math.max(prev?.at ?? 0, a.at), exerciseId: a.exerciseId });
  }
  const ordered = [...byItem.entries()].sort(([, a], [, b]) => Number(b.failed) - Number(a.failed) || a.at - b.at);
  const out: Exercise[] = [];
  const used = new Set(excludeIds);
  for (const [key, info] of ordered) {
    if (out.length >= max) break;
    const [kind, id] = [key.slice(0, 1), key.slice(2)];
    let ex: Exercise | undefined;
    if (kind === 'v') {
      const v = vocabById.get(id);
      const mode: VocabMode = speaking && out.length % 2 === 1 ? 'say' : v?.example ? 'cloze' : 'fr_en';
      ex = v && vocabExercise(v, VOCAB_A2, mode);
    } else if (kind === 'i') {
      const v = irregularById.get(id);
      ex = v && irregularExercise(v, speaking && out.length % 3 === 2 ? 'say' : 'three');
    } else {
      // Notion de leçon : un autre exercice de la même notion, au moins de niveau « rappel ».
      ex = pickForKc(id, seen, 'production', speaking).find((e) => !used.has(e.id) && e.id !== info.exerciseId && rankOf(e) >= 1);
    }
    if (ex && !used.has(ex.id)) {
      used.add(ex.id);
      out.push(ex);
    }
  }
  return out;
}

// ───────────── Construction de la séance ─────────────

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

/** Notions à travailler : difficultés persistantes d'abord, puis notions faibles. */
async function focusKcs(): Promise<string[]> {
  const [states, events] = await Promise.all([db.kcEvidence.toArray(), db.errorEvents.where('at').above(Date.now() - 14 * 86_400_000).toArray()]);
  const persistent = persistentDifficulties(events).map((p) => p.kcId);
  const weak = states
    .map((m) => ({ kc: m.kcId, s: summarize(m) }))
    .filter(({ kc, s }) => isWeak(s) && !kc.startsWith('vocab.'))
    .sort((a, b) => (a.s.value ?? 0) - (b.s.value ?? 0))
    .map(({ kc }) => kc);
  return [...new Set([...persistent, ...weak])].filter((k) => !k.startsWith('vocab.'));
}

export async function prepareSession(focus: Focus, budgetSeconds: number): Promise<SessionItem[]> {
  const settings = await getSettings();
  const speaking = settings.speakingEnabled;
  const now = Date.now();
  const seed = `${dayKey()}-${focus}-${now}`;
  const [cards, seen, today, weakKcs] = await Promise.all([db.srsCards.toArray(), seenMap(), introducedToday(), focusKcs()]);
  const known = new Set(cards.map((c) => c.id));

  const typeAllowed = (t: SrsItemType) =>
    focus === 'all' || (focus === 'vocab' && t === 'vocab') || (focus === 'irregular' && t === 'irregular');

  const resolveCard = (card: SrsCard): Exercise | undefined => {
    if (card.type === 'kc') return pickForKc(card.itemId, seen, evidenceForReps(card.reps), speaking)[0];
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

  const drillKcs = focus === 'all' || focus === 'weak' ? weakKcs : [];
  const recap = focus === 'weak' ? [] : await prepareRecap(budgetSeconds >= 600 ? 6 : 4, new Set(), speaking);

  return buildSession({
    now,
    budgetSeconds,
    seed,
    dueCards: cards.filter((c) => typeAllowed(c.type)),
    resolveCard,
    weakKcs: drillKcs,
    exercisesForKc: (kc) =>
      kc === 'verbs.irregular'
        ? // Pas d'exercices écrits à la main : on génère sur les verbes déjà rencontrés, les plus fragiles d'abord.
          cards
            .filter((c) => c.type === 'irregular')
            .sort((a, b) => a.stability - b.stability)
            .map((c) => irregularById.get(c.itemId))
            .filter((v): v is IrregularVerb => !!v)
            .map((v) => irregularExercise(v, 'three'))
        : pickForKc(kc, seen, 'recall', speaking),
    newItems: focus === 'weak' ? [] : newItems,
    includeSpeaking: speaking,
    recap,
    // Le mode « points faibles » consacre tout le budget au travail ciblé.
    shares: focus === 'weak' ? { review: 0, drill: 1 } : undefined,
  });
}

/** Items de récap à ajouter à la fin d'une leçon (mélange avec les notions déjà vues). */
export async function lessonRecap(lesson: Lesson): Promise<SessionItem[]> {
  const settings = await getSettings();
  const exclude = new Set(lesson.exercises.map((e) => e.id));
  const recap = await prepareRecap(3, exclude, settings.speakingEnabled);
  return recap.map((exercise) => ({ kind: 'exercise', exercise, source: 'recap' }));
}

// ───────────── Statistiques ─────────────

export interface KcReport {
  kcId: string;
  summary: MasterySummary;
  /** Rétention actuelle de la carte de révision de la notion (si elle existe) */
  retention?: number;
}

export interface LearningStats {
  dueCount: number;
  /** Vocabulaire actif : rappelé ou produit avec succès, au moins 2 jours différents */
  wordsActive: number;
  /** Vocabulaire passif : seulement reconnu */
  wordsPassive: number;
  verbsLearned: number;
  verbsStarted: number;
  /** Rétention moyenne des éléments déjà révisés */
  retention: number | null;
  kcs: KcReport[];
  weak: KcReport[];
  /** Bien maîtrisé mais en train d'être oublié */
  forgetting: KcReport[];
  persistent: PersistentDifficulty[];
  byState: Record<MasterySummary['state'], number>;
}

export async function learningStats(): Promise<LearningStats> {
  const now = Date.now();
  const [cards, states, events, vocabAttempts] = await Promise.all([
    db.srsCards.toArray(),
    db.kcEvidence.toArray(),
    db.errorEvents.where('at').above(now - 14 * 86_400_000).toArray(),
    db.attempts.where('exerciseId').startsWith('gen-v-').toArray(),
  ]);
  const reviewed = cards.filter((c) => c.state !== State.New);
  const retention = reviewed.length ? reviewed.reduce((a, c) => a + retrievability(c, now), 0) / reviewed.length : null;
  const kcCards = new Map(cards.filter((c) => c.type === 'kc').map((c) => [c.itemId, c]));

  const kcs: KcReport[] = states
    .filter((m) => !m.kcId.startsWith('vocab.'))
    .map((m) => {
      const card = kcCards.get(m.kcId);
      return { kcId: m.kcId, summary: summarize(m), retention: card ? retrievability(card, now) : undefined };
    });

  // Vocabulaire actif / passif, à partir des formats réussis
  const recognized = new Set<string>();
  const activeDays = new Map<string, Set<string>>();
  for (const a of vocabAttempts) {
    const info = vocabAttemptInfo(a.exerciseId);
    if (!info || a.score < 0.8) continue;
    if (info.mode === 'en_fr' || info.mode === 'listen') recognized.add(info.vocabId);
    else activeDays.set(info.vocabId, (activeDays.get(info.vocabId) ?? new Set()).add(dayKey(new Date(a.at))));
  }
  const active = [...activeDays.values()].filter((d) => d.size >= 2).length;
  const passive = new Set([...recognized, ...activeDays.keys()]).size - active;

  const byState = { not_started: 0, learning: 0, practicing: 0, developing: 0, mastered: 0 };
  for (const k of kcs) byState[k.summary.state]++;

  return {
    dueCount: cards.filter((c) => c.due <= now).length,
    wordsActive: active,
    wordsPassive: passive,
    verbsLearned: cards.filter((c) => c.type === 'irregular' && isLearned(c)).length,
    verbsStarted: cards.filter((c) => c.type === 'irregular' && c.state !== State.New).length,
    retention,
    kcs,
    weak: kcs.filter((k) => isWeak(k.summary)).sort((a, b) => (a.summary.value ?? 0) - (b.summary.value ?? 0)),
    forgetting: kcs.filter((k) => (k.summary.value ?? 0) >= 0.6 && k.retention !== undefined && k.retention < 0.7),
    persistent: persistentDifficulties(events, now),
    byState,
  };
}

/** Pour les écrans qui affichent un exercice de journal (ex. détail d'une erreur). */
export { resolveExercise };
