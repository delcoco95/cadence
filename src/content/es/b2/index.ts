import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { subjuntivo1, subjuntivo2 } from './subjuntivo';
import { hipotesis1, hipotesis2 } from './hipotesis';
import { temporales1, temporales2 } from './temporales';
import { estiloIndirecto1, estiloIndirecto2 } from './estilo-indirecto';
import { pasiva1, pasiva2 } from './pasiva';
import { perifrasis1, perifrasis2 } from './perifrasis';
import { concesivas1, concesivas2 } from './concesivas';
import { cambio1, cambio2 } from './cambio';
import { CHECKPOINTS_B2, CAN_DO_B2 } from './checkpoints';
import { KCS_B2 } from './kcs';
import { THEMES_B2, VOCAB_B2 } from './vocab';

const LESSONS_B2: Lesson[] = [
  subjuntivo1, subjuntivo2,
  hipotesis1, hipotesis2,
  temporales1, temporales2,
  estiloIndirecto1, estiloIndirecto2,
  pasiva1, pasiva2,
  perifrasis1, perifrasis2,
  concesivas1, concesivas2,
  cambio1, cambio2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'B2', title, description,
  lessonIds: LESSONS_B2.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_B2[id],
});

const UNITS_B2: Unit[] = [
  unit('es-b2-subjuntivo', 'Subjonctif (2)', 'Subjonctif imparfait (-ra / -se) et passé, concordance des temps, ojalá, como si.'),
  unit('es-b2-hipotesis', 'Irréel du passé', 'si hubiera…, habría… ; hypothèses mixtes ; de haberlo sabido ; reproches.'),
  unit('es-b2-temporales', 'Subordonnées', 'Subjonctif dans les temporelles (cuando llegues) et les relatives (el que quieras).'),
  unit('es-b2-estilo-indirecto', 'Discours indirect', 'Rapporter paroles, questions et ordres au passé ; concordance et repères.'),
  unit('es-b2-pasiva', 'Passif et impersonnel', 'ser + participe, estar + participe, passive réfléchie, se impersonnel.'),
  unit('es-b2-perifrasis', 'Périphrases verbales', 'llevar + gérondif, seguir, acabar de, volver a, dejar de, ponerse a.'),
  unit('es-b2-concesivas', 'Concession et condition', 'aunque + indicatif ou subjonctif, a pesar de que, con tal de que, a no ser que.'),
  unit('es-b2-cambio', 'Verbes de changement', 'ponerse, quedarse, volverse, hacerse, convertirse en ; diminutifs et augmentatifs.'),
];

/** Niveau B2 du cours d'espagnol : unités, leçons, défis, notions et vocabulaire. */
export const B2: LevelModule = {
  cefr: 'B2',
  units: UNITS_B2,
  lessons: LESSONS_B2,
  checkpoints: CHECKPOINTS_B2,
  kcs: KCS_B2,
  themes: THEMES_B2,
  vocab: VOCAB_B2,
};
