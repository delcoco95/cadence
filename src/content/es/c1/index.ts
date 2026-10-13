import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { subjuntivo1, subjuntivo2 } from './subjuntivo';
import { probabilidad1, probabilidad2 } from './probabilidad';
import { registro1, registro2 } from './registro';
import { coherencia1, coherencia2 } from './coherencia';
import { expresiones1, expresiones2 } from './expresiones';
import { argumentar1, argumentar2 } from './argumentar';
import { enfasis1, enfasis2 } from './enfasis';
import { oraciones1, oraciones2 } from './oraciones';
import { CHECKPOINTS_C1, CAN_DO_C1 } from './checkpoints';
import { KCS_C1 } from './kcs';
import { THEMES_C1, VOCAB_C1 } from './vocab';

const LESSONS_C1: Lesson[] = [
  subjuntivo1, subjuntivo2,
  probabilidad1, probabilidad2,
  registro1, registro2,
  coherencia1, coherencia2,
  expresiones1, expresiones2,
  argumentar1, argumentar2,
  enfasis1, enfasis2,
  oraciones1, oraciones2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'C1', title, description,
  lessonIds: LESSONS_C1.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_C1[id],
});

const UNITS_C1: Unit[] = [
  unit('es-c1-subjuntivo', 'Subjonctif avancé', 'Valeurs fines du subjonctif : opinion niée, verbes à double sens, quienquiera, cualquiera, pase lo que pase.'),
  unit('es-c1-probabilidad', 'Supposer', 'Futur et conditionnel de probabilité, futur antérieur, futur concessif.'),
  unit('es-c1-registro', 'Registre formel', 'usted, lettres et courriels formels, demandes polies, langue administrative.'),
  unit('es-c1-coherencia', 'Cohésion', 'no obstante, en cambio, por consiguiente, de ahí que ; nominalisation, structurer et reformuler.'),
  unit('es-c1-expresiones', 'Expressions idiomatiques', 'Locutions courantes : corps, nourriture, animaux, locutions verbales et adverbiales.'),
  unit('es-c1-argumentar', 'Argumenter', 'Nuancer, concéder (si bien), réfuter (nada más lejos, en absoluto), pero / sino.'),
  unit('es-c1-enfasis', 'Mise en relief', 'lo + adjectif, lo + adjectif + que, phrases clivées (es… quien / donde), dislocations.'),
  unit('es-c1-oraciones', 'Phrase complexe', 'Participe absolu, gérondif, infinitif composé, al / nada más / con / de + infinitif.'),
];

/** Niveau C1 du cours d'espagnol : unités, leçons, défis, notions et vocabulaire. */
export const C1: LevelModule = {
  cefr: 'C1',
  units: UNITS_C1,
  lessons: LESSONS_C1,
  checkpoints: CHECKPOINTS_C1,
  kcs: KCS_C1,
  themes: THEMES_C1,
  vocab: VOCAB_C1,
};
