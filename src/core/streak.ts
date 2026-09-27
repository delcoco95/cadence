import { addDays } from './dates';

export interface DayRecord {
  date: string; // AAAA-MM-JJ
  goalMet: boolean;
}

export interface StreakStats {
  current: number;
  best: number;
  daysCompleted: number;
  /** Objectif atteint aujourd'hui */
  todayDone: boolean;
}

/**
 * Série actuelle : jours consécutifs avec objectif atteint, se terminant aujourd'hui
 * ou hier (la série n'est pas perdue tant que la journée en cours n'est pas finie).
 */
export function computeStreak(days: DayRecord[], today: string): StreakStats {
  const done = new Set(days.filter((d) => d.goalMet).map((d) => d.date));
  const todayDone = done.has(today);

  let current = 0;
  let cursor = todayDone ? today : addDays(today, -1);
  while (done.has(cursor)) {
    current++;
    cursor = addDays(cursor, -1);
  }

  let best = 0;
  let run = 0;
  let prev: string | null = null;
  for (const date of [...done].sort()) {
    run = prev !== null && addDays(prev, 1) === date ? run + 1 : 1;
    best = Math.max(best, run);
    prev = date;
  }

  return { current, best, daysCompleted: done.size, todayDone };
}
