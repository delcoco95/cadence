import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { condizionale1, condizionale2 } from './condizionale';
import { congiuntivo1, congiuntivo2 } from './congiuntivo';
import { pronomiCombinati1, pronomiCombinati2 } from './pronomi-combinati';
import { relative1, relative2 } from './relative';
import { racconto1, racconto2 } from './racconto';
import { impersonale1, impersonale2 } from './impersonale';
import { ipotesi1, ipotesi2 } from './ipotesi';
import { discorso1, discorso2 } from './discorso';
import { CHECKPOINTS_B1, CAN_DO_B1 } from './checkpoints';
import { KCS_B1 } from './kcs';
import { THEMES_B1, VOCAB_B1 } from './vocab';

const LESSONS_B1: Lesson[] = [
  condizionale1, condizionale2,
  congiuntivo1, congiuntivo2,
  pronomiCombinati1, pronomiCombinati2,
  relative1, relative2,
  racconto1, racconto2,
  impersonale1, impersonale2,
  ipotesi1, ipotesi2,
  discorso1, discorso2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'B1', title, description,
  lessonIds: LESSONS_B1.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_B1[id],
});

const UNITS_B1: Unit[] = [
  unit('it-b1-condizionale', 'Conditionnel présent', 'Politesse, souhaits, conseils.'),
  unit('it-b1-congiuntivo', 'Subjonctif présent', 'penso che, voglio che, è importante che.'),
  unit('it-b1-pronomi-combinati', 'Pronoms combinés', 'me lo, glielo, ce ne ; place avec l’infinitif et l’impératif.'),
  unit('it-b1-relative', 'Relatives', 'che, cui, il quale, chi.'),
  unit('it-b1-racconto', 'Raconter', 'Trapassato prossimo, passato remoto (reconnaissance).'),
  unit('it-b1-impersonale', 'Impersonnel et passif', 'si impersonnel et passivant, passif avec essere et venire.'),
  unit('it-b1-ipotesi', 'Hypothèses', 'Période hypothétique réelle et possible (se + subjonctif imparfait + conditionnel).'),
  unit('it-b1-discorso', 'Relier et rapporter', 'Connecteurs (perché, quindi, però, mentre, anche se), discours rapporté au présent.'),
];

/** Niveau B1 du cours d'italien : unités, leçons, défis, notions et vocabulaire. */
export const B1: LevelModule = {
  cefr: 'B1',
  units: UNITS_B1,
  lessons: LESSONS_B1,
  checkpoints: CHECKPOINTS_B1,
  kcs: KCS_B1,
  themes: THEMES_B1,
  vocab: VOCAB_B1,
};
