import Dexie, { type EntityTable } from 'dexie';
import type { Cefr, Skill } from '../content/types';
import type { SrsCard } from '../core/srs';
import type { KcMastery } from '../core/mastery';
import type { ErrorEvent } from '../core/errors';
import type { Evidence } from '../core/evidence';
import type { ErrorTag } from '../content/types';
import { replayAttempts } from './replay';

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
  /** Exercices oraux activés (micro) */
  speakingEnabled: boolean;
  /** Nouveaux mots présentés par jour */
  newWordsPerDay: number;
  /** Demander « Sûr de toi ? » après certaines bonnes réponses */
  askConfidence: boolean;
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
  skill?: Skill;
  evidence?: Evidence;
  /** 1 deviné · 2 pas sûr · 3 plutôt sûr · 4 certain */
  confidence?: 1 | 2 | 3 | 4;
  errorTags?: ErrorTag[];
  context: 'lesson' | 'review' | 'drill' | 'new' | 'recap' | 'retry' | 'placement';
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
  srsCards: EntityTable<SrsCard, 'id'>;
  kcEvidence: EntityTable<KcMastery, 'kcId'>;
  errorEvents: EntityTable<ErrorEvent, 'id'>;
};

db.version(1).stores({
  settings: 'id',
  dailyActivity: 'date',
  attempts: '++id, exerciseId, lessonId, at, *kcIds',
  lessonProgress: 'lessonId',
});

// v2 : répétition espacée et maîtrise par notion
db.version(2).stores({
  srsCards: 'id, due, type, itemId',
  kcMastery: 'kcId',
});

// v3 : maîtrise par niveau de preuve + journal des erreurs, recalculés depuis l'historique des réponses
db.version(3)
  .stores({
    kcMastery: null,
    kcEvidence: 'kcId',
    errorEvents: '++id, tag, kcId, at',
  })
  .upgrade(async (tx) => {
    // Pas d'attente hors IndexedDB ici : la transaction se fermerait trop tôt.
    const attempts = (await tx.table('attempts').toArray()) as Attempt[];
    const { masteries, errors } = replayAttempts(attempts);
    await tx.table('kcEvidence').bulkPut(masteries);
    await tx.table('errorEvents').bulkAdd(errors);
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
  speakingEnabled: true,
  newWordsPerDay: 8,
  askConfidence: true,
  createdAt: Date.now(),
};

export async function getSettings(): Promise<Settings> {
  // Fusion avec les valeurs par défaut : les réglages créés par une version antérieure n'ont pas les nouveaux champs.
  const stored = await db.settings.get('me');
  return { ...DEFAULT_SETTINGS, ...(stored ?? { createdAt: Date.now() }) };
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
