import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { congiuntivo1, congiuntivo2 } from './congiuntivo';
import { ipotesi1, ipotesi2 } from './ipotesi';
import { condizionalePassato1, condizionalePassato2 } from './condizionale-passato';
import { indiretto1, indiretto2 } from './indiretto';
import { passivo1, passivo2 } from './passivo';
import { formeImplicite1, formeImplicite2 } from './forme-implicite';
import { connettivi1, connettivi2 } from './connettivi';
import { lessico1, lessico2 } from './lessico';
import { CHECKPOINTS_B2, CAN_DO_B2 } from './checkpoints';
import { KCS_B2 } from './kcs';
import { THEMES_B2, VOCAB_B2 } from './vocab';

const LESSONS_B2: Lesson[] = [
  congiuntivo1, congiuntivo2,
  ipotesi1, ipotesi2,
  condizionalePassato1, condizionalePassato2,
  indiretto1, indiretto2,
  passivo1, passivo2,
  formeImplicite1, formeImplicite2,
  connettivi1, connettivi2,
  lessico1, lessico2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'B2', title, description,
  lessonIds: LESSONS_B2.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_B2[id],
});

const UNITS_B2: Unit[] = [
  unit('it-b2-congiuntivo', 'Subjonctif (2)', 'Congiuntivo passato, imperfetto et trapassato ; concordance des temps.'),
  unit('it-b2-ipotesi', 'Irréel du passé', 'Période hypothétique irréelle, hypothèses mixtes, magari et come se.'),
  unit('it-b2-condizionale-passato', 'Conditionnel passé', 'Regret, reproche, futur dans le passé, information non confirmée.'),
  unit('it-b2-indiretto', 'Discours indirect', 'Discours rapporté au passé : concordance, repères, questions et ordres.'),
  unit('it-b2-passivo', 'Passif avancé', 'Passif avec venire et andare, si passivant.'),
  unit('it-b2-forme-implicite', 'Formes implicites', 'Gérondif, participe passé seul, infinitif passé.'),
  unit('it-b2-connettivi', 'Concession et condition', 'sebbene, benché, purché, a meno che, affinché + subjonctif.'),
  unit('it-b2-lessico', 'Verbes idiomatiques', 'andarsene, farcela, cavarsela, metterci ; suffixes -ino, -one, -accio.'),
];

/** Niveau B2 du cours d'italien : unités, leçons, défis, notions et vocabulaire. */
export const B2: LevelModule = {
  cefr: 'B2',
  units: UNITS_B2,
  lessons: LESSONS_B2,
  checkpoints: CHECKPOINTS_B2,
  kcs: KCS_B2,
  themes: THEMES_B2,
  vocab: VOCAB_B2,
};
