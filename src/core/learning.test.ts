import { describe, expect, it } from 'vitest';
import { matchSpeech, checkFreeAnswer, bestSpeechMatch } from './speaking';
import { newCard, ratingFor, review, Rating, State, isLearned } from './srs';
import { initialKc, updateKc, mastery, isWeak, isMastered } from './mastery';
import { buildSession, sessionSeconds } from './session';
import { irregularExercise, vocabExercise, englishVariants } from './generators';
import { gradeExercise } from './exercise';
import type { Exercise, VocabEntry } from '../content/types';

describe('speech matching', () => {
  it('scores intelligibility word by word and lists missing words', () => {
    const m = matchSpeech('She works from home on Mondays.', 'she works from home mondays');
    expect(m.score).toBeCloseTo(5 / 6);
    expect(m.missing).toEqual(['on']);
  });

  it('accepts digits for number words and small ASR spelling slips on long words', () => {
    expect(matchSpeech('I took the train at seven.', 'I took the train at 7').score).toBe(1);
    expect(matchSpeech('It is beautiful', 'it is beautifull').score).toBe(1);
  });

  it('picks the best accepted variant', () => {
    expect(bestSpeechMatch(['I do not drink coffee', "I don't drink coffee"], "I don't drink coffee").score).toBe(1);
  });

  it('checks free answers by length and keywords', () => {
    const c = checkFreeAnswer('I usually play football on Sundays', 5, [['usually', 'often'], ['on sundays']]);
    expect(c.score).toBe(1);
    expect(checkFreeAnswer('football', 5, [['usually']]).missingKeywords).toEqual(['usually']);
  });
});

describe('srs', () => {
  it('maps answers to FSRS ratings', () => {
    expect(ratingFor('wrong', 3000, 5)).toBe(Rating.Again);
    expect(ratingFor('typo', 3000, 5)).toBe(Rating.Hard);
    expect(ratingFor('correct', 30000, 5)).toBe(Rating.Hard);
    expect(ratingFor('correct', 3000, 0)).toBe(Rating.Good);
    expect(ratingFor('correct', 3000, 3)).toBe(Rating.Easy);
  });

  it('grows intervals on success and shrinks them on a lapse', () => {
    let now = new Date(2026, 8, 1);
    let card = newCard('vocab', 'cheap', now);
    const intervals: number[] = [];
    for (let i = 0; i < 4; i++) {
      card = review(card, Rating.Good, now);
      intervals.push(Math.round((card.due - now.getTime()) / 86_400_000));
      now = new Date(card.due);
    }
    for (let i = 1; i < intervals.length; i++) expect(intervals[i]).toBeGreaterThan(intervals[i - 1]);
    expect(card.state).toBe(State.Review);
    const beforeLapse = card.stability;
    card = review(card, Rating.Again, now);
    expect(card.lapses).toBe(1);
    expect(card.stability).toBeLessThan(beforeLapse);
    expect(isLearned(card)).toBe(false);
  });
});

describe('mastery', () => {
  it('rises with successes and flags weaknesses', () => {
    let good = initialKc('a');
    let bad = initialKc('b');
    for (let i = 0; i < 10; i++) {
      good = updateKc(good, 0, 1);
      bad = updateKc(bad, 0, i % 3 === 0 ? 1 : 0);
    }
    expect(mastery(good)).toBeGreaterThan(0.85);
    expect(isMastered(good)).toBe(true);
    expect(isWeak(bad)).toBe(true);
  });
});

const vocab = (id: string, theme = 'food'): VocabEntry => ({ id, en: id, fr: `fr-${id}`, cefr: 'A2', theme, example: `I like ${id}.` });
const pool = ['apple', 'bread', 'cheese', 'rice', 'soup'].map((w) => vocab(w));
const ex = (id: string, type: Exercise['type'] = 'mcq'): Exercise =>
  type === 'speak'
    ? { id, type, mode: 'repeat', prompt: 'Hi', cefr: 'A2', skill: 'speaking', kcIds: ['k'], difficulty: 0, instruction: '', explanation: '' }
    : { id, type: 'mcq', question: '', options: ['a'], answer: 0, cefr: 'A2', skill: 'grammar', kcIds: ['k'], difficulty: 0, instruction: '', explanation: '' };

describe('session builder', () => {
  const now = Date.now();
  const due = Array.from({ length: 30 }, (_, i) => ({ ...newCard('kc', `k${i}`, new Date(now - 86400000)), due: now - i * 1000 }));

  it('respects the time budget and mixes reviews, drills and new words', () => {
    const items = buildSession({
      now, budgetSeconds: 300, seed: 's', dueCards: due,
      resolveCard: (c) => ex(`r-${c.itemId}`),
      weakKcs: ['w1', 'w2'],
      exercisesForKc: (kc) => [ex(`${kc}-1`), ex(`${kc}-2`), ex(`${kc}-3`)],
      newItems: pool.map((e) => ({ cardId: `vocab:${e.id}`, intro: { label: 'Nouveau mot', title: e.en, subtitle: e.fr, speak: e.en }, exercise: vocabExercise(e, pool, 'en_fr') })),
      includeSpeaking: true,
    });
    const secs = sessionSeconds(items);
    expect(secs).toBeGreaterThan(240);
    expect(secs).toBeLessThan(360);
    const sources = new Set(items.map((i) => (i.kind === 'intro' ? 'intro' : i.source)));
    expect(sources).toEqual(new Set(['review', 'drill', 'intro', 'new']));
    // Chaque présentation de mot est suivie de son exercice
    items.forEach((it, i) => {
      if (it.kind === 'intro') expect(items[i + 1]).toMatchObject({ kind: 'exercise', cardId: it.cardId });
    });
  });

  it('drops speaking exercises when speaking is off', () => {
    const items = buildSession({
      now, budgetSeconds: 120, seed: 's', dueCards: due.slice(0, 5),
      resolveCard: (c) => ex(`r-${c.itemId}`, 'speak'),
      weakKcs: [], exercisesForKc: () => [], newItems: [],
      includeSpeaking: false,
    });
    expect(items).toHaveLength(0);
  });
});

describe('generators', () => {
  it('builds vocabulary exercises whose reference answer is accepted', () => {
    for (const mode of ['en_fr', 'listen', 'fr_en', 'cloze', 'say'] as const) {
      const e = vocabExercise(pool[0], pool, mode);
      const response =
        e.type === 'mcq' || e.type === 'listen_mcq'
          ? { kind: 'choice' as const, index: e.answer }
          : e.type === 'speak'
            ? { kind: 'speech' as const, transcript: 'apple' }
            : { kind: 'text' as const, value: 'apple' };
      expect(gradeExercise(e, response).verdict, mode).toBe('correct');
    }
    expect(englishVariants('to go / to leave')).toEqual(['to go', 'go', 'to leave', 'leave']);
  });

  it('builds irregular verb exercises', () => {
    const verb = { id: 'be', base: 'be', past: 'was / were', participle: 'been', fr: 'être', cefr: 'A2' as const };
    expect(gradeExercise(irregularExercise(verb, 'three'), { kind: 'text', value: 'were been' }).verdict).toBe('correct');
    expect(gradeExercise(irregularExercise(verb, 'say'), { kind: 'speech', transcript: 'be was been' }).verdict).toBe('correct');
    expect(gradeExercise(irregularExercise(verb, 'past'), { kind: 'text', value: 'was' }).verdict).toBe('correct');
  });
});
