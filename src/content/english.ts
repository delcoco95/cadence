import type { Lesson, Unit } from './types';
import type { Course } from './course';
import { presentSimple1, presentSimple2 } from './a2/present-simple';
import { presentContinuous1 } from './a2/present-continuous';
import { pastSimple1, pastSimple2 } from './a2/past-simple';
import { articlesPlurals, pronounsPossessives, thereIsAre } from './a2/basics';
import { whQuestions, futureForms } from './a2/questions-future';
import { comparatives, quantities } from './a2/compare-quantities';
import { canCould, obligation, prepositionsTime } from './a2/modals-prepositions';
import { VOCAB_A2, THEMES as THEMES_A2 } from './vocab/a2';
import { IRREGULAR_VERBS } from './vocab/irregular';
import { CHECKPOINTS as CHECKPOINTS_A2, CAN_DO } from './a2/checkpoints';
import { LEVELS } from './levels';
import { KCS_EN } from './kcs';
import { PLACEMENT_ITEMS } from './placement';
import { MOTIVATION_THEMES } from '../core/motivation';

/** Cours d'anglais : le niveau A2, historique, est déclaré ici ; B1 à C2 sont des modules de niveau. */

const LESSONS_A2: Lesson[] = [
  articlesPlurals, pronounsPossessives, thereIsAre,
  presentSimple1, presentSimple2, presentContinuous1,
  whQuestions,
  pastSimple1, pastSimple2,
  futureForms,
  comparatives, quantities,
  canCould, obligation,
  prepositionsTime,
];

const UNITS_A2: Unit[] = [
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

for (const u of UNITS_A2) u.canDo ??= CAN_DO[u.id];

export const ENGLISH: Course = {
  lang: 'en',
  levels: ['A2', ...LEVELS.map((l) => l.cefr)],
  units: [...UNITS_A2, ...LEVELS.flatMap((l) => l.units)],
  lessons: [...LESSONS_A2, ...LEVELS.flatMap((l) => l.lessons)],
  checkpoints: Object.assign({}, CHECKPOINTS_A2, ...LEVELS.map((l) => l.checkpoints)),
  kcs: KCS_EN,
  themes: Object.assign({}, THEMES_A2, ...LEVELS.map((l) => l.themes)),
  vocab: [...VOCAB_A2, ...LEVELS.flatMap((l) => l.vocab)],
  verbs: IRREGULAR_VERBS,
  placement: PLACEMENT_ITEMS,
  placementUnitLevels: ['A2'],
  motivationThemes: MOTIVATION_THEMES,
};

export { VOCAB_A2, IRREGULAR_VERBS };
