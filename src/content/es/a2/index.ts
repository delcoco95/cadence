import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { serEstar1, serEstar2 } from './ser-estar';
import { possessives1, possessives2 } from './possessives';
import { perfecto1, perfecto2 } from './perfecto';
import { indefinido1, indefinido2 } from './indefinido';
import { imperfecto1, imperfecto2 } from './imperfecto';
import { pronouns1, pronouns2 } from './pronouns';
import { future1, future2 } from './future';
import { compare1, compare2 } from './compare';
import { CHECKPOINTS_A2, CAN_DO_A2 } from './checkpoints';
import { KCS_A2 } from './kcs';
import { THEMES_A2, VOCAB_A2 } from './vocab';

const LESSONS_A2: Lesson[] = [
  serEstar1, serEstar2,
  possessives1, possessives2,
  perfecto1, perfecto2,
  indefinido1, indefinido2,
  imperfecto1, imperfecto2,
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
  unit('es-a2-ser-estar', 'Ser ou estar', 'Identité, état, lieu ; adjectifs qui changent de sens ; hay ou está.'),
  unit('es-a2-possessives', 'Possessifs et démonstratifs', 'mi / mío, el mío ; este, ese, aquel ; esto, eso.'),
  unit('es-a2-perfecto', 'Pretérito perfecto', 'he comido, participes irréguliers, ya / todavía no / alguna vez.'),
  unit('es-a2-indefinido', 'Pretérito indefinido', 'Verbes réguliers et irréguliers (fui, hice, tuve) ; perfecto ou indefinido.'),
  unit('es-a2-imperfecto', 'Imparfait', 'Habitudes, descriptions, contraste avec l’indefinido.'),
  unit('es-a2-pronouns', 'Pronoms compléments', 'lo, la, le ; se lo ; place des pronoms.'),
  unit('es-a2-future', 'Futur et obligation', 'ir a + infinitif, futur simple, tener que, hay que, estar + gérondif.'),
  unit('es-a2-compare', 'Comparer et conseiller', 'Comparatifs, superlatifs, impératif affirmatif (tú, usted, vosotros).'),
];

/** Niveau A2 du cours d'espagnol : unités, leçons, défis, notions et vocabulaire. */
export const A2: LevelModule = {
  cefr: 'A2',
  units: UNITS_A2,
  lessons: LESSONS_A2,
  checkpoints: CHECKPOINTS_A2,
  kcs: KCS_A2,
  themes: THEMES_A2,
  vocab: VOCAB_A2,
};
