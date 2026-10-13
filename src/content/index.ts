import type { Cefr, Exercise, IrregularVerb, Lang, Lesson, Unit, VocabEntry } from './types';
import type { Course } from './course';
import type { PlacementExercise } from './placement';
import { ENGLISH, VOCAB_A2 } from './english';
import { setKcs } from './kcs';
import { setActiveLang } from '../core/lang';

/**
 * Contenu du cours actif. Les exports sont des liaisons vivantes (`export let`) : activateCourse les
 * remplace quand l'apprenant change de langue, et les modules qui les importent voient les nouvelles valeurs.
 * Les écrans sont remontés à ce moment-là (clé de langue dans App).
 */

export { VOCAB_A2 };

export let COURSE: Course = ENGLISH;
export let LESSONS: Lesson[] = [];
export let UNITS: Unit[] = [];
export let LEVELS_OF_COURSE: Cefr[] = [];
export let CHECKPOINTS: Record<string, Exercise[]> = {};
export let checkpointById = new Map<string, Exercise>();
export let THEMES: Record<string, string> = {};
export let VOCAB: VocabEntry[] = [];
export let IRREGULAR_VERBS: IrregularVerb[] = [];
export let PLACEMENT: PlacementExercise[] = [];
/** Ordre du parcours : unités puis leçons. */
export let PATH: string[] = [];
/** Banque d'exercices de leçons, indexée par notion (pour les révisions et le travail ciblé). */
export let EXERCISES_BY_KC = new Map<string, Exercise[]>();
export let vocabById = new Map<string, VocabEntry>();
export let irregularById = new Map<string, IrregularVerb>();
export let TOTAL_EXERCISES = 0;
let lessonById = new Map<string, Lesson>();
let exerciseById = new Map<string, Exercise>();

export function activateCourse(c: Course): void {
  COURSE = c;
  LESSONS = c.lessons;
  UNITS = c.units;
  LEVELS_OF_COURSE = c.levels;
  CHECKPOINTS = c.checkpoints;
  checkpointById = new Map(Object.values(c.checkpoints).flatMap((list) => list.map((e) => [e.id, e] as const)));
  THEMES = c.themes;
  VOCAB = c.vocab;
  IRREGULAR_VERBS = c.verbs;
  PLACEMENT = c.placement;
  PATH = c.units.flatMap((u) => u.lessonIds);
  lessonById = new Map(c.lessons.map((l) => [l.id, l]));
  exerciseById = new Map(c.lessons.flatMap((l) => l.exercises.map((e) => [e.id, e] as const)));
  EXERCISES_BY_KC = new Map();
  for (const e of exerciseById.values())
    for (const kc of e.kcIds) EXERCISES_BY_KC.set(kc, [...(EXERCISES_BY_KC.get(kc) ?? []), e]);
  vocabById = new Map(c.vocab.map((v) => [v.id, v]));
  irregularById = new Map(c.verbs.map((v) => [v.id, v]));
  TOTAL_EXERCISES = exerciseById.size;
  setKcs(c.kcs);
  setActiveLang(c.lang);
}

activateCourse(ENGLISH);

export const getLesson = (id: string) => lessonById.get(id);
export const getExercise = (id: string) => exerciseById.get(id);
export const unitsForLevel = (cefr: Cefr) => UNITS.filter((u) => u.cefr === cefr);

/** Cours d'une langue ; l'italien et l'espagnol sont chargés à la demande (fichiers séparés). */
export async function loadCourse(lang: Lang): Promise<Course> {
  if (lang === 'it') return (await import('./it')).ITALIAN;
  if (lang === 'es') return (await import('./es')).SPANISH;
  return ENGLISH;
}
