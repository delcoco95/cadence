import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { congiuntivo1, congiuntivo2 } from './congiuntivo';
import { futuro1, futuro2 } from './futuro';
import { registro1, registro2 } from './registro';
import { passatoRemoto1, passatoRemoto2 } from './passato-remoto';
import { coesione1, coesione2 } from './coesione';
import { espressioni1, espressioni2 } from './espressioni';
import { argomentare1, argomentare2 } from './argomentare';
import { enfasi1, enfasi2 } from './enfasi';
import { CHECKPOINTS_C1, CAN_DO_C1 } from './checkpoints';
import { KCS_C1 } from './kcs';
import { THEMES_C1, VOCAB_C1 } from './vocab';

const LESSONS_C1: Lesson[] = [
  congiuntivo1, congiuntivo2,
  futuro1, futuro2,
  registro1, registro2,
  passatoRemoto1, passatoRemoto2,
  coesione1, coesione2,
  espressioni1, espressioni2,
  argomentare1, argomentare2,
  enfasi1, enfasi2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'C1', title, description,
  lessonIds: LESSONS_C1.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_C1[id],
});

const UNITS_C1: Unit[] = [
  unit('it-c1-congiuntivo', 'Subjonctif avancé', 'Relatives, superlatifs, chiunque, qualunque et valeurs fines du subjonctif.'),
  unit('it-c1-futuro', 'Supposer', 'Futur de probabilité, futur antérieur et concordance complète.'),
  unit('it-c1-registro', 'Registre formel', 'Le Lei, la lettre formelle et la langue administrative.'),
  unit('it-c1-passato-remoto', 'Passato remoto', 'Formes régulières et irrégulières, temps du récit écrit, trapassato remoto.'),
  unit('it-c1-coesione', 'Cohésion', 'pertanto, tuttavia, ciononostante, infatti ; reprises et nominalisation.'),
  unit('it-c1-espressioni', 'Expressions idiomatiques', 'Locutions courantes et verbes à pronoms figés.'),
  unit('it-c1-argomentare', 'Argumenter', 'Nuancer, envisager une hypothèse (magari, semmai, qualora), concéder et réfuter.'),
  unit('it-c1-enfasi', 'Mise en relief', 'Dislocations, sujet postposé, phrases clivées.'),
];

/** Niveau C1 du cours d'italien : unités, leçons, défis, notions et vocabulaire. */
export const C1: LevelModule = {
  cefr: 'C1',
  units: UNITS_C1,
  lessons: LESSONS_C1,
  checkpoints: CHECKPOINTS_C1,
  kcs: KCS_C1,
  themes: THEMES_C1,
  vocab: VOCAB_C1,
};
