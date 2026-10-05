import { describe, expect, it } from 'vitest';
import { BADGES, badgeProgress, type BadgeInput } from './badges';

const zero: BadgeInput = { lessonsDone: 0, bestStreak: 0, wordsActive: 0, verbsLearned: 0, mastered: 0, totalSeconds: 0, totalXp: 0 };

describe('badges', () => {
  it('sont tous verrouillés au départ', () => {
    expect(BADGES.every((b) => !badgeProgress(b, zero).unlocked)).toBe(true);
  });
  it('se débloquent au seuil et affichent une progression partielle avant', () => {
    const streak7 = BADGES.find((b) => b.id === 'streak-7')!;
    expect(badgeProgress(streak7, { ...zero, bestStreak: 3 }).ratio).toBeCloseTo(3 / 7);
    expect(badgeProgress(streak7, { ...zero, bestStreak: 7 }).unlocked).toBe(true);
  });
});
