import { describe, expect, it } from 'vitest';
import type { Exercise } from '../content/types';
import { emptyMastery, observe, summarize, isWeak, type Observation } from './mastery';
import { detectErrors, detectTextErrors, persistentDifficulties, type IrregularForms } from './errors';
import { gradeExercise } from './exercise';
import { interleave, planRetry, reformat } from './retry';
import { newCard, retrievability, review, Rating } from './srs';
import { evidenceOf } from './evidence';

const base = { cefr: 'A2' as const, skill: 'grammar' as const, difficulty: 0, instruction: '', explanation: '' };
const mcq = (id: string, kc = 'k', extra: Partial<Exercise> = {}): Exercise =>
  ({ ...base, id, kcIds: [kc], type: 'mcq', question: 'She ___ here.', options: ['work', 'works', 'working'], answer: 1, ...extra }) as Exercise;
const cloze = (id: string, kc = 'k'): Exercise => ({ ...base, id, kcIds: [kc], type: 'cloze', sentence: 'He ___ TV.', accepted: ['watches'], strict: true });

const obs = (evidence: Observation['evidence'], score: number, day = '2026-09-01', difficulty = -1): Observation => ({
  evidence, score, difficulty, now: Date.parse(day), day,
});

describe('mastery by evidence level', () => {
  it('does not flag a notion as weak after a few correct answers (not enough data ≠ weakness)', () => {
    let m = emptyMastery('k');
    for (let i = 0; i < 3; i++) m = observe(m, obs('recognition', 1));
    const s = summarize(m);
    expect(s.confident).toBe(false);
    expect(s.state).toBe('learning');
    expect(isWeak(s)).toBe(false);
  });

  it('never reaches mastery with recognition only (capped at 60 %)', () => {
    let m = emptyMastery('k');
    for (let i = 0; i < 20; i++) m = observe(m, obs('recognition', 1));
    const s = summarize(m);
    expect(s.value).toBeLessThanOrEqual(0.6);
    expect(s.cap).toBe('no_production');
    expect(s.state).not.toBe('mastered');
  });

  it('caps at 80 % without free production, and requires productive success on 2 different days', () => {
    let m = emptyMastery('k');
    for (let i = 0; i < 10; i++) m = observe(m, obs('production', 1));
    expect(summarize(m).value).toBeLessThanOrEqual(0.8);
    for (let i = 0; i < 6; i++) m = observe(m, obs('free', 1, '2026-09-01', 0));
    expect(summarize(m).state).not.toBe('mastered'); // un seul jour
    for (let i = 0; i < 2; i++) m = observe(m, obs('free', 1, '2026-09-04', 0));
    expect(summarize(m).state).toBe('mastered');
  });

  it('flags real weaknesses and counts guessed answers only partially', () => {
    let weak = emptyMastery('w');
    for (let i = 0; i < 6; i++) weak = observe(weak, obs('recall', i % 3 === 0 ? 1 : 0));
    expect(isWeak(summarize(weak))).toBe(true);
    let sure = emptyMastery('a');
    let guess = emptyMastery('b');
    for (let i = 0; i < 5; i++) {
      sure = observe(sure, { ...obs('recall', 1), confidence: 4 });
      guess = observe(guess, { ...obs('recall', 1), confidence: 1 });
    }
    expect(summarize(guess).value!).toBeLessThan(summarize(sure).value!);
  });

  it('derives evidence from the exercise type', () => {
    expect(evidenceOf(mcq('a'))).toBe('recognition');
    expect(evidenceOf(cloze('b'))).toBe('recall');
    expect(evidenceOf({ ...base, id: 's', kcIds: [], type: 'speak', mode: 'answer', prompt: '' })).toBe('free');
  });
});

describe('retention', () => {
  it('decreases with time since the last review', () => {
    const t0 = new Date(2026, 8, 1);
    const card = review(newCard('kc', 'k', t0), Rating.Good, t0);
    const soon = retrievability(card, t0.getTime() + 86_400_000);
    const later = retrievability(card, t0.getTime() + 30 * 86_400_000);
    expect(soon).toBeGreaterThan(later);
    expect(later).toBeLessThan(0.7);
  });
});

describe('error taxonomy', () => {
  const irr: IrregularForms = new Map([
    ['go', { past: ['went'], participle: ['gone'] }],
    ['take', { past: ['took'], participle: ['taken'] }],
  ]);
  const ex = cloze('x');
  const cases: [string, string, string][] = [
    ['He works in a bank', 'He work in a bank', 'third_person_s'],
    ["She doesn't speak German", "She doesn't speaks German", 'auxiliary_with_inflected_verb'],
    ['Did you go out?', 'Did you went out?', 'auxiliary_with_inflected_verb'],
    ['I went home', 'I goed home', 'regularized_irregular'],
    ['I have gone', 'I have went', 'irregular_form'],
    ['She can swim', 'She can to swim', 'modal_to'],
    ["I'm an engineer", "I'm engineer", 'article_missing'],
    ['See you on Monday', 'See you in Monday', 'wrong_preposition'],
    ['Where do you live?', 'Where you live?', 'missing_auxiliary'],
    ['Does he work here?', 'Do he work here?', 'wrong_auxiliary'],
    ['He often goes to work', 'He goes often to work', 'word_order'],
  ];
  it.each(cases)('%s / %s → %s', (target, given, tag) => {
    expect(detectTextErrors(target, given, ex, { irregulars: irr })).toContain(tag);
  });

  it('does not diagnose answers unrelated to the target', () => {
    expect(detectTextErrors("It's a good idea", 'xx', ex)).toEqual([]);
  });

  it('does not invent errors on correct answers and uses plural context', () => {
    expect(detectErrors(ex, { kind: 'text', value: 'watches' }, gradeExercise(ex, { kind: 'text', value: 'watches' }))).toEqual([]);
    const plural = { ...cloze('p', 'grammar.plurals'), accepted: ['cities'] } as Exercise;
    expect(detectErrors(plural, { kind: 'text', value: 'city' }, gradeExercise(plural, { kind: 'text', value: 'city' }))).toContain('plural_form');
  });

  it('reads the misconception behind a wrong multiple-choice option', () => {
    const e = mcq('m', 'k', { options: ['She doesn’t speaks German.', 'She doesn’t speak German.'], answer: 1, question: 'Choisis' });
    expect(detectErrors(e, { kind: 'choice', index: 0 }, gradeExercise(e, { kind: 'choice', index: 0 }))).toContain('auxiliary_with_inflected_verb');
  });

  it('prefers author-planned error patterns', () => {
    const e = { ...cloze('q'), errorPatterns: [{ match: 'watchs', tag: 'spelling' as const }], accepted: ['watches'] } as Exercise;
    expect(detectErrors(e, { kind: 'text', value: 'watchs' }, gradeExercise(e, { kind: 'text', value: 'watchs' }))).toEqual(['spelling']);
  });

  it('detects persistent difficulties (≥ 3 in 14 days)', () => {
    const now = Date.parse('2026-09-20');
    const ev = (d: number) => ({ tag: 'third_person_s' as const, kcId: 'k', exerciseId: 'e', at: now - d * 86_400_000 });
    expect(persistentDifficulties([ev(1), ev(2), ev(3)], now)).toHaveLength(1);
    expect(persistentDifficulties([ev(1), ev(2), ev(20)], now)).toHaveLength(0);
    // Même nombre d'erreurs mais le même jour : pas encore « persistant »
    expect(persistentDifficulties([ev(1), ev(1), ev(1), ev(1)], now)).toHaveLength(0);
  });
});

describe('retry and interleaving', () => {
  it('uses a variant of the same notion rather than the failed item', () => {
    const failed = mcq('a', 'k');
    const plan = planRetry(failed, [failed, mcq('b', 'k'), mcq('c', 'other')], new Set(['a']));
    expect(plan.how).toBe('variant');
    expect(plan.exercise.id).toBe('b');
  });

  it('turns a gap-fill multiple choice into a typed recall when no variant exists', () => {
    const failed = mcq('a', 'k');
    const plan = planRetry(failed, [failed], new Set(['a']));
    expect(plan.how).toBe('reformatted');
    expect(plan.exercise.type).toBe('cloze');
    expect(gradeExercise(plan.exercise, { kind: 'text', value: 'works' }).verdict).toBe('correct');
    expect(reformat(cloze('z'))).toBeUndefined();
  });

  it('otherwise reshuffles with a new seed', () => {
    const failed = mcq('a', 'k', { question: 'Choisis la phrase correcte.' });
    const plan = planRetry(failed, [failed], new Set(['a']));
    expect(plan.how).toBe('reshuffled');
    expect(plan.shuffleSeed).not.toBe(failed.id);
  });

  it('never puts more than 2 items of the same notion in a row when avoidable', () => {
    const items = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c'];
    const out = interleave(items, (x) => x);
    for (let i = 2; i < out.length; i++) {
      const run = out[i] === out[i - 1] && out[i] === out[i - 2];
      if (run) expect(out.slice(i).every((x) => x === out[i])).toBe(true); // seul cas : il ne reste que cette notion
    }
    expect([...out].sort()).toEqual([...items].sort());
  });
});

describe('session recap', async () => {
  const { buildSession } = await import('./session');
  it('always ends with the recap items, interleaved', () => {
    const now = Date.now();
    const items = buildSession({
      now, budgetSeconds: 120, seed: 's', dueCards: [], resolveCard: () => undefined,
      weakKcs: ['k'], exercisesForKc: () => [mcq('d1', 'k'), mcq('d2', 'k')], newItems: [], includeSpeaking: true,
      recap: [cloze('r1', 'a'), cloze('r2', 'a'), cloze('r3', 'a'), cloze('r4', 'b')],
    });
    const recap = items.filter((i) => i.kind === 'exercise' && i.source === 'recap');
    expect(recap).toHaveLength(4);
    expect(items.slice(-4)).toEqual(recap);
    const keys = recap.map((i) => (i.kind === 'exercise' ? i.exercise.kcIds[0] : ''));
    expect(keys.join('')).not.toContain('aaa');
  });
});

describe('migration replay', async () => {
  const { replayAttempts } = await import('../db/replay');
  it('rebuilds evidence-based mastery and error events from the answer log', () => {
    const at = Date.parse('2026-09-27T10:00:00');
    const { masteries, errors } = replayAttempts([
      { exerciseId: 'a2-ps-1-03', at, durationMs: 4000, score: 0, verdict: 'wrong', response: JSON.stringify({ kind: 'text', value: 'watch' }), kcIds: ['tense.present_simple.third_person_s'], context: 'lesson' },
      { exerciseId: 'a2-ps-1-03', at: at + 60_000, durationMs: 4000, score: 1, verdict: 'correct', response: '{}', kcIds: ['tense.present_simple.third_person_s'], context: 'lesson' },
      { exerciseId: 'a2-ps-1-01', at, durationMs: 4000, score: 1, verdict: 'correct', response: '{}', kcIds: ['tense.present_simple.third_person_s'], context: 'lesson' },
    ]);
    const m = masteries.find((x) => x.kcId === 'tense.present_simple.third_person_s')!;
    // Le repêchage du même jour n'est pas compté comme un premier essai
    expect(m.levels.recall?.n).toBe(1);
    expect(m.levels.recognition?.n).toBe(1);
    expect(errors.map((e) => e.tag)).toContain('third_person_s');
  });
});
