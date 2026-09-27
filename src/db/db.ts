import Dexie, { type EntityTable } from 'dexie';
import type { Cefr } from '../content/types';

export type ThemePref = 'system' | 'light' | 'dark';
export type Accent = 'en-US' | 'en-GB' | 'en-AU';

export interface Settings {
  id: 'me';
  onboarded: boolean;
  dailyGoalMinutes: number;
  startLevel: Cefr;
  /** L'utilisateur veut bloquer ses apps via Raccourcis */
  blockingEnabled: boolean;
  /** Guide Raccourcis terminé */
  blockingSetupDone: boolean;
  /** Nom exact du raccourci qui débloque */
  unlockShortcutName: string;
  theme: ThemePref;
  accent: Accent;
  speechRate: number;
  createdAt: number;
}

export interface DailyActivity {
  date: string; // AAAA-MM-JJ
  activeSeconds: number;
  goalSeconds: number;
  goalMetAt?: number;
  xp: number;
  /** Déblocage (raccourci lancé) ce jour-là */
  unlockedAt?: number;
}

export interface Attempt {
  id?: number;
  exerciseId: string;
  lessonId?: string;
  at: number;
  durationMs: number;
  score: number;
  verdict: 'correct' | 'typo' | 'wrong';
  response: string;
  kcIds: string[];
  context: 'lesson' | 'review' | 'drill' | 'placement';
}

export interface LessonProgress {
  lessonId: string;
  status: 'started' | 'completed';
  bestScore: number;
  completions: number;
  lastAt: number;
}

export const db = new Dexie('cadence') as Dexie & {
  settings: EntityTable<Settings, 'id'>;
  dailyActivity: EntityTable<DailyActivity, 'date'>;
  attempts: EntityTable<Attempt, 'id'>;
  lessonProgress: EntityTable<LessonProgress, 'lessonId'>;
};

db.version(1).stores({
  settings: 'id',
  dailyActivity: 'date',
  attempts: '++id, exerciseId, lessonId, at, *kcIds',
  lessonProgress: 'lessonId',
});

export const DEFAULT_SETTINGS: Settings = {
  id: 'me',
  onboarded: false,
  dailyGoalMinutes: 5,
  startLevel: 'A2',
  blockingEnabled: false,
  blockingSetupDone: false,
  unlockShortcutName: 'Cadence Valider',
  theme: 'system',
  accent: 'en-GB',
  speechRate: 0.9,
  createdAt: Date.now(),
};

export async function getSettings(): Promise<Settings> {
  return (await db.settings.get('me')) ?? { ...DEFAULT_SETTINGS, createdAt: Date.now() };
}

export async function updateSettings(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  const current = await getSettings();
  await db.settings.put({ ...current, ...patch, id: 'me' });
}

/** Demande à Safari de ne pas effacer les données (PWA installée). */
export async function requestPersistentStorage(): Promise<boolean> {
  try {
    return (await navigator.storage?.persist?.()) ?? false;
  } catch {
    return false;
  }
}
