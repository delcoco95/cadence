import { describe, expect, it } from 'vitest';
import { addDays, dayKey } from './dates';
import { computeStreak } from './streak';
import { ActiveTimeTracker } from './activeTime';
import { gradeText, normalize } from './grading';
import { gradeExercise } from './exercise';
import type { Exercise } from '../content/types';

describe('dates', () => {
  it('formats local day keys and adds days across months', () => {
    expect(dayKey(new Date(2026, 0, 5))).toBe('2026-01-05');
    expect(addDays('2026-02-28', 1)).toBe('2026-03-01');
    expect(addDays('2026-01-01', -1)).toBe('2025-12-31');
  });
});

describe('computeStreak', () => {
  const met = (...dates: string[]) => dates.map((date) => ({ date, goalMet: true }));

  it('counts consecutive days ending today', () => {
    const s = computeStreak(met('2026-09-25', '2026-09-26', '2026-09-27'), '2026-09-27');
    expect(s).toMatchObject({ current: 3, best: 3, todayDone: true });
  });

  it('keeps the streak alive until today is over', () => {
    const s = computeStreak(met('2026-09-25', '2026-09-26'), '2026-09-27');
    expect(s).toMatchObject({ current: 2, todayDone: false });
  });

  it('breaks on a missed day and tracks best', () => {
    const s = computeStreak(
      [...met('2026-09-01', '2026-09-02', '2026-09-03', '2026-09-04', '2026-09-26'), { date: '2026-09-27', goalMet: false }],
      '2026-09-27',
    );
    expect(s).toMatchObject({ current: 1, best: 4, daysCompleted: 5 });
  });
});

describe('ActiveTimeTracker', () => {
  it('counts only time within the idle window while visible', () => {
    let t = 0;
    const tr = new ActiveTimeTracker(() => t, 60_000);
    t = 30_000;
    tr.tick();
    t = 200_000; // inactif depuis 0 → seulement 60 s comptées au total
    expect(tr.drainMs()).toBe(60_000);
    tr.interact();
    t = 210_000;
    tr.setVisible(false);
    t = 500_000;
    expect(tr.drainMs()).toBe(10_000);
  });
});

describe('grading', () => {
  it('normalizes contractions and punctuation', () => {
    expect(normalize("She doesn't   work!")).toBe('she does not work');
    expect(normalize('I’m fine.')).toBe('i am fine');
  });

  it('tolerates small typos but not on short or strict answers', () => {
    expect(gradeText('She works everyday', ['She works every day']).verdict).toBe('typo');
    expect(gradeText('go', ['do']).verdict).toBe('wrong');
    expect(gradeText('gones', ['gone'], true).verdict).toBe('wrong');
    expect(gradeText('He does not like tea', ["He doesn't like tea"]).verdict).toBe('correct');
  });

  it('grades word bank order', () => {
    const ex: Exercise = {
      id: 't', type: 'word_bank', cefr: 'A2', skill: 'grammar', kcIds: [], difficulty: 0,
      instruction: '', explanation: '', question: '', tokens: ['Does', 'she', 'work', '?'],
    };
    expect(gradeExercise(ex, { kind: 'tokens', tokens: ['Does', 'she', 'work', '?'] }).verdict).toBe('correct');
    expect(gradeExercise(ex, { kind: 'tokens', tokens: ['She', 'does', 'work', '?'] }).verdict).toBe('wrong');
  });
});
