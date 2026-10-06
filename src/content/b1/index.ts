import type { LevelModule } from '../level';
import type { Lesson, Unit } from '../types';
import { presentPerfect1, presentPerfect2 } from './present-perfect';
import { forSince1, forSince2 } from './for-since';
import { pastNarrative1, pastNarrative2 } from './past-narrative';
import { future1, future2 } from './future';
import { conditionals1, conditionals2 } from './conditionals';
import { passiveRelatives1, passiveRelatives2 } from './passive-relatives';
import { modals1, modals2 } from './modals';
import { reportedVerbs1, reportedVerbs2 } from './reported-verbs';
import { CHECKPOINTS_B1, CAN_DO_B1 } from './checkpoints';
import { KCS_B1 } from './kcs';
import { THEMES_B1, VOCAB_B1 } from './vocab';

const LESSONS_B1: Lesson[] = [
  presentPerfect1, presentPerfect2,
  forSince1, forSince2,
  pastNarrative1, pastNarrative2,
  future1, future2,
  conditionals1, conditionals2,
  passiveRelatives1, passiveRelatives2,
  modals1, modals2,
  reportedVerbs1, reportedVerbs2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'B1', title, description,
  lessonIds: LESSONS_B1.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_B1[id],
});

const UNITS_B1: Unit[] = [
  unit('b1-present-perfect', 'Present perfect', 'Expériences, just / already / yet, present perfect ou past simple.'),
  unit('b1-for-since', 'Depuis combien de temps ?', 'for, since, How long…?, present perfect continuous.'),
  unit('b1-past-narrative', 'Raconter le passé', 'Past continuous, when / while, used to.'),
  unit('b1-future', 'Parler de l’avenir', 'will, going to, present continuous, when / as soon as + présent.'),
  unit('b1-conditionals', 'Conditionnels', 'Conditionnels zéro, premier et deuxième, unless.'),
  unit('b1-passive-relatives', 'Passif et relatives', 'Voix passive au présent et au passé ; who, which, that, where, whose.'),
  unit('b1-modals', 'Modaux', 'Déduction (must, might, can’t), obligation, conseil, be able to.'),
  unit('b1-reported-verbs', 'Discours rapporté et verbes', 'say / tell, concordance des temps, -ing ou to, phrasal verbs.'),
];

/** Niveau B1 : unités, leçons, défis, notions et vocabulaire. */
export const B1: LevelModule = {
  cefr: 'B1',
  units: UNITS_B1,
  lessons: LESSONS_B1,
  checkpoints: CHECKPOINTS_B1,
  kcs: KCS_B1,
  themes: THEMES_B1,
  vocab: VOCAB_B1,
};
