import { db, getSettings, type DailyActivity } from './db';
import { addDays, dayKey } from '../core/dates';
import { computeStreak } from '../core/streak';

async function ensureToday(): Promise<DailyActivity> {
  const date = dayKey();
  const existing = await db.dailyActivity.get(date);
  if (existing) return existing;
  const s = await getSettings();
  const fresh: DailyActivity = { date, activeSeconds: 0, goalSeconds: s.dailyGoalMinutes * 60, xp: 0 };
  await db.dailyActivity.put(fresh);
  return fresh;
}

/** Ajoute du temps actif et de l'XP à aujourd'hui. Renvoie true si l'objectif vient d'être atteint. */
export async function addActivity(seconds: number, xp = 0): Promise<boolean> {
  if (seconds <= 0 && xp <= 0) return false;
  return db.transaction('rw', db.dailyActivity, db.settings, async () => {
    const today = await ensureToday();
    const activeSeconds = today.activeSeconds + seconds;
    const justMet = !today.goalMetAt && activeSeconds >= today.goalSeconds;
    await db.dailyActivity.put({
      ...today,
      activeSeconds,
      xp: today.xp + xp,
      goalMetAt: today.goalMetAt ?? (justMet ? Date.now() : undefined),
    });
    return justMet;
  });
}

export async function markUnlocked(): Promise<void> {
  const today = await ensureToday();
  await db.dailyActivity.put({ ...today, unlockedAt: Date.now() });
}

/** Un changement d'objectif s'applique à aujourd'hui s'il n'est pas encore atteint. */
export async function applyGoalToToday(minutes: number): Promise<void> {
  const today = await ensureToday();
  if (today.goalMetAt) return;
  const goalSeconds = minutes * 60;
  await db.dailyActivity.put({
    ...today,
    goalSeconds,
    goalMetAt: today.activeSeconds >= goalSeconds ? Date.now() : undefined,
  });
}

export async function loadStats() {
  const days = await db.dailyActivity.toArray();
  const today = dayKey();
  const streak = computeStreak(days.map((d) => ({ date: d.date, goalMet: !!d.goalMetAt })), today);
  const totalSeconds = days.reduce((a, d) => a + d.activeSeconds, 0);
  const totalXp = days.reduce((a, d) => a + d.xp, 0);
  return { streak, totalSeconds, totalXp, today: days.find((d) => d.date === today) };
}

export interface WeekDay {
  date: string;
  label: string;
  done: boolean;
  isToday: boolean;
  isFuture: boolean;
}

const WEEK_LABELS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/** Semaine en cours, du lundi au dimanche, avec les jours où l'objectif a été atteint. */
export async function weekActivity(now: Date = new Date()): Promise<WeekDay[]> {
  const today = dayKey(now);
  const monday = addDays(today, -((now.getDay() + 6) % 7));
  const days = WEEK_LABELS.map((label, i) => ({ label, date: addDays(monday, i) }));
  const records = await db.dailyActivity.bulkGet(days.map((d) => d.date));
  return days.map((d, i) => ({
    ...d,
    done: !!records[i]?.goalMetAt,
    isToday: d.date === today,
    isFuture: d.date > today,
  }));
}

/** Nombre de leçons terminées aujourd'hui (quêtes du jour). */
export async function lessonsDoneToday(now: Date = new Date()): Promise<number> {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return db.lessonProgress.filter((p) => p.lastAt >= start).count();
}
