import type { Cefr, Exercise, Lesson, Unit } from './types';
import { presentSimple1, presentSimple2 } from './a2/present-simple';
import { presentContinuous1 } from './a2/present-continuous';
import { pastSimple1, pastSimple2 } from './a2/past-simple';

export const LESSONS: Lesson[] = [presentSimple1, presentSimple2, presentContinuous1, pastSimple1, pastSimple2];

export const UNITS: Unit[] = [
  {
    id: 'a2-present-simple', cefr: 'A2', title: 'Present Simple',
    description: 'Habitudes, routines, vérités générales.', lessonIds: ['a2-ps-1', 'a2-ps-2'],
  },
  {
    id: 'a2-present-continuous', cefr: 'A2', title: 'Present Continuous',
    description: 'Ce qui se passe maintenant, situations temporaires.', lessonIds: ['a2-pc-1'],
  },
  {
    id: 'a2-past-simple', cefr: 'A2', title: 'Past Simple',
    description: 'Raconter des actions terminées.', lessonIds: ['a2-past-1', 'a2-past-2'],
  },
];

const lessonById = new Map(LESSONS.map((l) => [l.id, l]));
const exerciseById = new Map<string, Exercise>(LESSONS.flatMap((l) => l.exercises.map((e) => [e.id, e] as const)));

export const getLesson = (id: string) => lessonById.get(id);
export const getExercise = (id: string) => exerciseById.get(id);
export const unitsForLevel = (cefr: Cefr) => UNITS.filter((u) => u.cefr === cefr);

/** Ordre du parcours : unités puis leçons. */
export const PATH: string[] = UNITS.flatMap((u) => u.lessonIds);
