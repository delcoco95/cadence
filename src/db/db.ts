import Dexie, { type EntityTable } from 'dexie';
import type { Cefr, Skill } from '../content/types';
import type { SrsCard } from '../core/srs';
import type { KcMastery } from '../core/mastery';
import type { ErrorEvent } from '../core/errors';
import type { Evidence } from '../core/evidence';
import type { ErrorTag } from '../content/types';
import { replayAttempts } from './replay';
import type { Gender } from '../core/gender';
import type { VoiceGenderPref } from '../speech/voices';
import type { UnitRecord } from '../core/units';
import type { PlacementBand, PlacementResponse, PlacementResult } from '../core/placement';

export type ThemePref = 'system' | 'light' | 'dark';
export type Accent = 'en-US' | 'en-GB' | 'en-AU';
export type Motivation = 'travel' | 'work' | 'studies' | 'culture' | 'people' | 'brain';

export interface VoicePref {
  /** Identifiant de la voix choisie : voiceURI, ou nom pour les anciens réglages (absent : meilleure voix disponible) */
  id?: string;
  gender: VoiceGenderPref;
}

export interface Settings {
  id: 'me';
  onboarded: boolean;
  firstName: string;
  /** Accord des textes français : « prête » / « prêt » / « prêt·e » */
  gender: Gender;
  /** Objectifs choisis à l'inscription (1 à 3) : ils orientent le vocabulaire et les phrases utiles */
  motivations: Motivation[];
  /** Ancien réglage (un seul objectif), repris dans motivations */
  motivation?: Motivation;
  dailyGoalMinutes: number;
  startLevel: Cefr;
  /** Niveau estimé par le dernier test de placement */
  estimatedBand?: PlacementBand;
  /** L'utilisateur veut bloquer ses apps via Raccourcis */
  blockingEnabled: boolean;
  /** Guide Raccourcis terminé */
  blockingSetupDone: boolean;
  /** Nom exact du raccourci qui débloque */
  unlockShortcutName: string;
  theme: ThemePref;
  accent: Accent;
  speechRate: number;
  /** Voix choisie : voiceURI (unique, contrairement au nom sur iPhone) */
  voiceId?: string;
  /** Ancien réglage (nom de voix), repris dans voiceId */
  voiceName?: string;
  voiceGender: VoiceGenderPref;
  /** Sons de réussite / d'erreur */
  soundEffects: boolean;
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
  context: 'lesson' | 'review' | 'drill' | 'new' | 'recap' | 'retry' | 'placement' | 'checkpoint';
}

export interface LessonProgress {
  lessonId: string;
  status: 'started' | 'completed';
  bestScore: number;
  completions: number;
  lastAt: number;
}

export interface PlacementRecord {
  id?: number;
  kind: 'placement';
  at: number;
  result: PlacementResult;
  responses: PlacementResponse[];
  /** Dispense d'unités acceptée par l'apprenant */
  applied: boolean;
}

export const db = new Dexie('cadence') as Dexie & {
  settings: EntityTable<Settings, 'id'>;
  dailyActivity: EntityTable<DailyActivity, 'date'>;
  attempts: EntityTable<Attempt, 'id'>;
  lessonProgress: EntityTable<LessonProgress, 'lessonId'>;
  srsCards: EntityTable<SrsCard, 'id'>;
  kcEvidence: EntityTable<KcMastery, 'kcId'>;
  errorEvents: EntityTable<ErrorEvent, 'id'>;
  unitProgress: EntityTable<UnitRecord, 'unitId'>;
  assessments: EntityTable<PlacementRecord, 'id'>;
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

// v4 : étapes d'unité (entraînement, défi) et résultats du test de niveau
db.version(4).stores({
  unitProgress: 'unitId',
  assessments: '++id, kind, at',
});

export const DEFAULT_SETTINGS: Settings = {
  id: 'me',
  onboarded: false,
  firstName: '',
  gender: 'n',
  motivations: [],
  dailyGoalMinutes: 5,
  startLevel: 'A2',
  blockingEnabled: false,
  blockingSetupDone: false,
  unlockShortcutName: 'Cadence Valider',
  theme: 'system',
  accent: 'en-GB',
  speechRate: 0.9,
  voiceGender: 'any',
  soundEffects: true,
  speakingEnabled: true,
  newWordsPerDay: 8,
  askConfidence: true,
  createdAt: Date.now(),
};

export async function getSettings(): Promise<Settings> {
  // Fusion avec les valeurs par défaut : les réglages créés par une version antérieure n'ont pas les nouveaux champs.
  const stored = await db.settings.get('me');
  const merged = { ...DEFAULT_SETTINGS, ...(stored ?? { createdAt: Date.now() }) };
  return {
    ...merged,
    voiceId: merged.voiceId ?? merged.voiceName,
    motivations: merged.motivations.length ? merged.motivations : merged.motivation ? [merged.motivation] : [],
  };
}

export async function updateSettings(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  const current = await getSettings();
  await db.settings.put({ ...current, ...patch, id: 'me' });
}

export const voicePref = (s: Pick<Settings, 'voiceId' | 'voiceGender'>): VoicePref => ({
  id: s.voiceId,
  gender: s.voiceGender,
});

/** Demande à Safari de ne pas effacer les données (PWA installée). */
export async function requestPersistentStorage(): Promise<boolean> {
  try {
    return (await navigator.storage?.persist?.()) ?? false;
  } catch {
    return false;
  }
}
