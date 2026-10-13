import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { prepositions1, prepositions2 } from './prepositions';
import { possessives1, possessives2 } from './possessives';
import { passatoAvere1, passatoAvere2 } from './passato-avere';
import { passatoEssere1, passatoEssere2 } from './passato-essere';
import { imperfetto1, imperfetto2 } from './imperfetto';
import { pronouns1, pronouns2 } from './pronouns';
import { future1, future2 } from './future';
import { compare1, compare2 } from './compare';
import { CHECKPOINTS_A2, CAN_DO_A2 } from './checkpoints';
import { KCS_A2 } from './kcs';
import { THEMES_A2, VOCAB_A2 } from './vocab';

const LESSONS_A2: Lesson[] = [
  prepositions1, prepositions2,
  possessives1, possessives2,
  passatoAvere1, passatoAvere2,
  passatoEssere1, passatoEssere2,
  imperfetto1, imperfetto2,
  pronouns1, pronouns2,
  future1, future2,
  compare1, compare2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'A2', title, description,
  lessonIds: LESSONS_A2.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_A2[id],
});

const UNITS_A2: Unit[] = [
  unit('it-a2-prepositions', 'Prépositions articulées', 'al, nel, dal, sul, del ; lieux et déplacements.'),
  unit('it-a2-possessives', 'Possessifs et démonstratifs', 'il mio, mia madre ; questo et quello.'),
  unit('it-a2-passato-avere', 'Passato prossimo (1)', 'Avec avere, participes réguliers et irréguliers.'),
  unit('it-a2-passato-essere', 'Passato prossimo (2)', 'Avec essere, accord du participe, verbes pronominaux.'),
  unit('it-a2-imperfetto', 'Imparfait', 'Habitudes, descriptions, contraste avec le passato prossimo.'),
  unit('it-a2-pronouns', 'Pronoms compléments', 'lo, la, li, le, gli, le ; ne et ci.'),
  unit('it-a2-future', 'Futur et modaux', 'Futuro semplice, stare per, stare + gérondif.'),
  unit('it-a2-compare', 'Comparer et conseiller', 'Comparatifs, superlatifs, migliore ; impératif (tu, voi, Lei).'),
];

/** Niveau A2 du cours d'italien : unités, leçons, défis, notions et vocabulaire. */
export const A2: LevelModule = {
  cefr: 'A2',
  units: UNITS_A2,
  lessons: LESSONS_A2,
  checkpoints: CHECKPOINTS_A2,
  kcs: KCS_A2,
  themes: THEMES_A2,
  vocab: VOCAB_A2,
};
