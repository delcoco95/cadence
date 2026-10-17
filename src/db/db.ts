import Dexie, { type EntityTable, type Table, type TransactionMode } from 'dexie';
import type { Cefr, Lang, Skill } from '../content/types';
import type { SrsCard } from '../core/srs';
import type { KcMastery } from '../core/mastery';
import type { ErrorEvent } from '../core/errors';
import type { Evidence } from '../core/evidence';
import type { ErrorTag } from '../content/types';
import { replayAttempts } from './replay';
import type { Gender } from '../core/gender';
import type { CadenceVoice } from '../speech/audio';
import type { UnitRecord } from '../core/units';
import type { TurnRecord } from '../core/scene';
import type { PlacementBand, PlacementResponse, PlacementResult } from '../core/placement';

export type ThemePref = 'system' | 'light' | 'dark';
/** Accent des voix Cadence en anglais (et langue de la reconnaissance vocale). */
export type Accent = 'en-US' | 'en-GB';
export type Motivation = 'travel' | 'work' | 'studies' | 'culture' | 'people' | 'brain';

export interface VoicePref {
  gender: CadenceVoice;
}

/** Ce qui est propre à chaque langue commencée. */
export interface CourseSettings {
  startLevel: Cefr;
  /** Niveau estimé par le dernier test de placement */
  estimatedBand?: PlacementBand;
  startedAt: number;
}

export interface Settings {
  id: 'me';
  onboarded: boolean;
  /** Langue apprise en ce moment */
  language: Lang;
  /** Langues commencées : une langue absente n'a pas encore de niveau de départ */
  courses: Partial<Record<Lang, CourseSettings>>;
  firstName: string;
  /** Accord des textes français : « prête » / « prêt » / « prêt·e » */
  gender: Gender;
  /** Objectifs choisis à l'inscription (1 à 3) : ils orientent le vocabulaire et les phrases utiles */
  motivations: Motivation[];
  /** Ancien réglage (un seul objectif), repris dans motivations */
  motivation?: Motivation;
  dailyGoalMinutes: number;
  /** Niveau de départ de la langue active (copie de courses[language]) */
  startLevel: Cefr;
  /** Niveau estimé de la langue active (copie de courses[language]) */
  estimatedBand?: PlacementBand;
  /** L'utilisateur veut bloquer ses apps via Raccourcis */
  blockingEnabled: boolean;
  /** Guide Raccourcis terminé */
  blockingSetupDone: boolean;
  /** Nom exact du raccourci qui débloque */
  unlockShortcutName: string;
  theme: ThemePref;
  /** Accent anglais ; l'italien et l'espagnol n'en ont qu'un */
  accent: Accent;
  speechRate: number;
  /** Voix Cadence : féminine ou masculine (dans la langue et l'accent choisis) */
  cadenceVoice: CadenceVoice;
  /** L'accent a été choisi par l'apprenant (avant les voix britanniques, la valeur par défaut était en-GB sans effet) */
  accentChosen?: boolean;
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
  context: 'lesson' | 'review' | 'drill' | 'new' | 'recap' | 'retry' | 'placement' | 'checkpoint' | 'scene';
}

/** Une partie jouée d'une scène de conversation (bilan conservé pour suivre les progrès à l'oral). */
export interface SceneRun {
  id?: number;
  sceneId: string;
  at: number;
  goalReached: boolean;
  comprehension: number;
  precision: number;
  autonomy: number;
  overall: number;
  turns: TurnRecord[];
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

/** Tables communes à toutes les langues : réglages, temps actif, série. */
interface SharedTables {
  settings: EntityTable<Settings, 'id'>;
  dailyActivity: EntityTable<DailyActivity, 'date'>;
}

/** Tables de progression, une base par langue. */
interface LearningTables {
  attempts: EntityTable<Attempt, 'id'>;
  lessonProgress: EntityTable<LessonProgress, 'lessonId'>;
  srsCards: EntityTable<SrsCard, 'id'>;
  kcEvidence: EntityTable<KcMastery, 'kcId'>;
  errorEvents: EntityTable<ErrorEvent, 'id'>;
  unitProgress: EntityTable<UnitRecord, 'unitId'>;
  assessments: EntityTable<PlacementRecord, 'id'>;
  sceneRuns: EntityTable<SceneRun, 'id'>;
}

export const LEARNING_TABLES = ['attempts', 'lessonProgress', 'srsCards', 'kcEvidence', 'errorEvents', 'unitProgress', 'assessments', 'sceneRuns'] as const;

/**
 * Base historique « cadence » : tables communes + progression en anglais (inchangée, pour ne rien perdre).
 * L'italien et l'espagnol ont chacun leur base de progression (« cadence-it », « cadence-es »).
 */
const main = new Dexie('cadence') as Dexie & SharedTables & LearningTables;

main.version(1).stores({
  settings: 'id',
  dailyActivity: 'date',
  attempts: '++id, exerciseId, lessonId, at, *kcIds',
  lessonProgress: 'lessonId',
});

// v2 : répétition espacée et maîtrise par notion
main.version(2).stores({
  srsCards: 'id, due, type, itemId',
  kcMastery: 'kcId',
});

// v3 : maîtrise par niveau de preuve + journal des erreurs, recalculés depuis l'historique des réponses
main.version(3)
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
main.version(4).stores({
  unitProgress: 'unitId',
  assessments: '++id, kind, at',
});

// v5 : parties jouées des scènes de conversation
main.version(5).stores({
  sceneRuns: '++id, sceneId, at',
});

function learningDb(name: string) {
  const d = new Dexie(name) as Dexie & LearningTables;
  d.version(1).stores({
    attempts: '++id, exerciseId, lessonId, at, *kcIds',
    lessonProgress: 'lessonId',
    srsCards: 'id, due, type, itemId',
    kcEvidence: 'kcId',
    errorEvents: '++id, tag, kcId, at',
    unitProgress: 'unitId',
    assessments: '++id, kind, at',
  });
  d.version(2).stores({ sceneRuns: '++id, sceneId, at' });
  return d;
}

const LEARNING: Record<Lang, Dexie & LearningTables> = { en: main, it: learningDb('cadence-it'), es: learningDb('cadence-es') };
let activeLearning: Lang = 'en';

/** Base de progression de la langue active (appelée par App avant d'afficher les écrans). */
export function setLearningLanguage(lang: Lang): void {
  activeLearning = lang;
}

export const learningDbOf = (lang: Lang) => LEARNING[lang];
export const sharedDb = main;

/**
 * Accès aux tables : les tables communes viennent de la base historique, celles de progression
 * de la base de la langue active. Une transaction s'ouvre sur la base des tables concernées.
 */
export const db = {
  get settings() {
    return main.settings;
  },
  get dailyActivity() {
    return main.dailyActivity;
  },
  get attempts() {
    return LEARNING[activeLearning].attempts;
  },
  get lessonProgress() {
    return LEARNING[activeLearning].lessonProgress;
  },
  get srsCards() {
    return LEARNING[activeLearning].srsCards;
  },
  get kcEvidence() {
    return LEARNING[activeLearning].kcEvidence;
  },
  get errorEvents() {
    return LEARNING[activeLearning].errorEvents;
  },
  get unitProgress() {
    return LEARNING[activeLearning].unitProgress;
  },
  get assessments() {
    return LEARNING[activeLearning].assessments;
  },
  get sceneRuns() {
    return LEARNING[activeLearning].sceneRuns;
  },
  transaction<U>(mode: TransactionMode, ...rest: [...(Table | Table[])[], () => Promise<U>]): Promise<U> {
    const scope = rest.slice(0, -1).flat() as Table[];
    const fn = rest[rest.length - 1] as () => Promise<U>;
    return scope[0].db.transaction(mode, scope, fn);
  },
};

export const DEFAULT_SETTINGS: Settings = {
  id: 'me',
  onboarded: false,
  language: 'en',
  courses: {},
  firstName: '',
  gender: 'n',
  motivations: [],
  dailyGoalMinutes: 5,
  startLevel: 'A2',
  blockingEnabled: false,
  blockingSetupDone: false,
  unlockShortcutName: 'Cadence Valider',
  theme: 'system',
  accent: 'en-US',
  speechRate: 0.9,
  cadenceVoice: 'female',
  soundEffects: true,
  speakingEnabled: true,
  newWordsPerDay: 8,
  askConfidence: true,
  createdAt: Date.now(),
};

/** Premier niveau d'un cours : l'anglais commence à A2, l'italien et l'espagnol à A1. */
export const firstLevel = (lang: Lang): Cefr => (lang === 'en' ? 'A2' : 'A1');

export async function getSettings(): Promise<Settings> {
  // Fusion avec les valeurs par défaut : les réglages créés par une version antérieure n'ont pas les nouveaux champs.
  const stored = await db.settings.get('me');
  const merged = { ...DEFAULT_SETTINGS, ...(stored ?? { createdAt: Date.now() }) };
  // Avant les langues, le niveau était global : c'était celui de l'anglais.
  const courses: Settings['courses'] =
    stored && !stored.courses
      ? { en: { startLevel: merged.startLevel, estimatedBand: merged.estimatedBand, startedAt: merged.createdAt } }
      : merged.courses;
  const course = courses[merged.language];
  return {
    ...merged,
    courses,
    startLevel: course?.startLevel ?? firstLevel(merged.language),
    estimatedBand: course?.estimatedBand,
    // Ancien réglage par défaut (en-GB) ou australien : on garde la voix entendue jusqu'ici (Nora, américaine).
    accent: merged.accentChosen ? (merged.accent === 'en-GB' ? 'en-GB' : 'en-US') : 'en-US',
    motivations: merged.motivations.length ? merged.motivations : merged.motivation ? [merged.motivation] : [],
  };
}

/** Le niveau (startLevel, estimatedBand) s'enregistre dans le cours de la langue active. */
export async function updateSettings(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  // Lecture + écriture dans une transaction : deux modifications simultanées (prénom puis genre) ne s'écrasent pas.
  await db.transaction('rw', db.settings, () => applySettingsPatch(patch));
}

async function applySettingsPatch(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  const current = await getSettings();
  const next = { ...current, ...patch, id: 'me' as const };
  if ('startLevel' in patch || 'estimatedBand' in patch) {
    const lang = next.language;
    const course = next.courses[lang] ?? { startLevel: firstLevel(lang), startedAt: Date.now() };
    next.courses = {
      ...next.courses,
      [lang]: {
        ...course,
        ...('startLevel' in patch ? { startLevel: patch.startLevel! } : {}),
        ...('estimatedBand' in patch ? { estimatedBand: patch.estimatedBand } : {}),
      },
    };
  }
  await db.settings.put(next);
}

/** Commence une langue (niveau de départ par défaut) si ce n'est pas déjà fait. */
export async function startCourse(lang: Lang): Promise<void> {
  const s = await getSettings();
  if (s.courses[lang]) return;
  await db.settings.put({ ...s, courses: { ...s.courses, [lang]: { startLevel: firstLevel(lang), startedAt: Date.now() } } });
}

export const voicePref = (s: Pick<Settings, 'cadenceVoice'>): VoicePref => ({ gender: s.cadenceVoice });

/** Demande à Safari de ne pas effacer les données (PWA installée). */
export async function requestPersistentStorage(): Promise<boolean> {
  try {
    return (await navigator.storage?.persist?.()) ?? false;
  } catch {
    return false;
  }
}
