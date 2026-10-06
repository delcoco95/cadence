import type { Cefr, Exercise, Lesson, Unit } from './types';
import { presentSimple1, presentSimple2 } from './a2/present-simple';
import { presentContinuous1 } from './a2/present-continuous';
import { pastSimple1, pastSimple2 } from './a2/past-simple';
import { articlesPlurals, pronounsPossessives, thereIsAre } from './a2/basics';
import { whQuestions, futureForms } from './a2/questions-future';
import { comparatives, quantities } from './a2/compare-quantities';
import { canCould, obligation, prepositionsTime } from './a2/modals-prepositions';
import { VOCAB_A2, THEMES } from './vocab/a2';
import { IRREGULAR_VERBS } from './vocab/irregular';
import { CHECKPOINTS, CAN_DO } from './a2/checkpoints';

export { VOCAB_A2, THEMES, IRREGULAR_VERBS };

export const LESSONS: Lesson[] = [
  articlesPlurals, pronounsPossessives, thereIsAre,
  presentSimple1, presentSimple2, presentContinuous1,
  whQuestions,
  pastSimple1, pastSimple2,
  futureForms,
  comparatives, quantities,
  canCould, obligation,
  prepositionsTime,
];

export const UNITS: Unit[] = [
  {
    id: 'a2-basics', cefr: 'A2', title: 'Bases grammaticales',
    description: 'Articles, pluriels, pronoms, possessifs, there is.', lessonIds: ['a2-basics-1', 'a2-basics-2', 'a2-basics-3'],
  },
  {
    id: 'a2-present-simple', cefr: 'A2', title: 'Present Simple',
    description: 'Habitudes, routines, vérités générales.', lessonIds: ['a2-ps-1', 'a2-ps-2'],
  },
  {
    id: 'a2-present-continuous', cefr: 'A2', title: 'Present Continuous',
    description: 'Ce qui se passe maintenant, situations temporaires.', lessonIds: ['a2-pc-1'],
  },
  {
    id: 'a2-questions', cefr: 'A2', title: 'Questions',
    description: 'Poser toutes les questions du quotidien.', lessonIds: ['a2-questions-1'],
  },
  {
    id: 'a2-past-simple', cefr: 'A2', title: 'Past Simple',
    description: 'Raconter des actions terminées.', lessonIds: ['a2-past-1', 'a2-past-2'],
  },
  {
    id: 'a2-future', cefr: 'A2', title: 'Futur',
    description: 'Projets, prédictions, décisions.', lessonIds: ['a2-future-1'],
  },
  {
    id: 'a2-compare', cefr: 'A2', title: 'Comparer',
    description: 'Comparatifs et superlatifs.', lessonIds: ['a2-compare-1'],
  },
  {
    id: 'a2-quantities', cefr: 'A2', title: 'Quantités',
    description: 'Dénombrables, some / any, much / many.', lessonIds: ['a2-quant-1'],
  },
  {
    id: 'a2-modals', cefr: 'A2', title: 'Modaux',
    description: 'can, could, must, have to, should.', lessonIds: ['a2-modals-1', 'a2-modals-2'],
  },
  {
    id: 'a2-prepositions', cefr: 'A2', title: 'Prépositions',
    description: 'in / on / at pour le temps et le lieu.', lessonIds: ['a2-prep-1'],
  },
];

for (const u of UNITS) u.canDo ??= CAN_DO[u.id];

export { CHECKPOINTS };
export const checkpointById = new Map<string, Exercise>(Object.values(CHECKPOINTS).flatMap((list) => list.map((e) => [e.id, e] as const)));

const lessonById = new Map(LESSONS.map((l) => [l.id, l]));
const exerciseById = new Map<string, Exercise>(LESSONS.flatMap((l) => l.exercises.map((e) => [e.id, e] as const)));

export const getLesson = (id: string) => lessonById.get(id);
export const getExercise = (id: string) => exerciseById.get(id);
export const unitsForLevel = (cefr: Cefr) => UNITS.filter((u) => u.cefr === cefr);

/** Ordre du parcours : unités puis leçons. */
export const PATH: string[] = UNITS.flatMap((u) => u.lessonIds);

/** Banque d'exercices de leçons, indexée par notion (pour les révisions et le travail ciblé). */
export const EXERCISES_BY_KC = new Map<string, Exercise[]>();
for (const e of exerciseById.values())
  for (const kc of e.kcIds) EXERCISES_BY_KC.set(kc, [...(EXERCISES_BY_KC.get(kc) ?? []), e]);

export const vocabById = new Map(VOCAB_A2.map((v) => [v.id, v]));
export const irregularById = new Map(IRREGULAR_VERBS.map((v) => [v.id, v]));

export const TOTAL_EXERCISES = exerciseById.size;
