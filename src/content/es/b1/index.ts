import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { condicional1, condicional2 } from './condicional';
import { subjuntivo1, subjuntivo2 } from './subjuntivo';
import { imperativo1, imperativo2 } from './imperativo';
import { relativos1, relativos2 } from './relativos';
import { relato1, relato2 } from './relato';
import { porPara1, porPara2 } from './por-para';
import { hipotesis1, hipotesis2 } from './hipotesis';
import { conectores1, conectores2 } from './conectores';
import { CHECKPOINTS_B1, CAN_DO_B1 } from './checkpoints';
import { KCS_B1 } from './kcs';
import { THEMES_B1, VOCAB_B1 } from './vocab';

const LESSONS_B1: Lesson[] = [
  condicional1, condicional2,
  subjuntivo1, subjuntivo2,
  imperativo1, imperativo2,
  relativos1, relativos2,
  relato1, relato2,
  porPara1, porPara2,
  hipotesis1, hipotesis2,
  conectores1, conectores2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'B1', title, description,
  lessonIds: LESSONS_B1.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_B1[id],
});

const UNITS_B1: Unit[] = [
  unit('es-b1-condicional', 'Conditionnel', 'Politesse, souhaits et conseils : podría, me gustaría, deberías, yo que tú.'),
  unit('es-b1-subjuntivo', 'Subjonctif présent', 'quiero que, espero que, es importante que, ojalá, cuando + subjonctif.'),
  unit('es-b1-imperativo', 'Impératif négatif', 'no hagas, no vengáis, usted ; place des pronoms (dímelo, no me lo digas).'),
  unit('es-b1-relativos', 'Relatives', 'que, donde, lo que ; el que, la que, quien après une préposition.'),
  unit('es-b1-relato', 'Raconter', 'Plus-que-parfait ; enchaîner indefinido, imperfecto et pluscuamperfecto.'),
  unit('es-b1-por-para', 'Por ou para', 'Emplois de por et para, expressions figées, verbes à préposition.'),
  unit('es-b1-hipotesis', 'Hypothèses', 'si + présent ; subjonctif imparfait ; si tuviera…, haría…'),
  unit('es-b1-conectores', 'Relier et rapporter', 'Connecteurs de cause, de conséquence et d’opposition ; discours rapporté au présent.'),
];

/** Niveau B1 du cours d'espagnol : unités, leçons, défis, notions et vocabulaire. */
export const B1: LevelModule = {
  cefr: 'B1',
  units: UNITS_B1,
  lessons: LESSONS_B1,
  checkpoints: CHECKPOINTS_B1,
  kcs: KCS_B1,
  themes: THEMES_B1,
  vocab: VOCAB_B1,
};
