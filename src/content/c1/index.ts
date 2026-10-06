import type { Lesson, Unit } from '../types';
import { vocabFromRows, type LevelModule } from '../level';
import { inversion1, inversion2 } from './inversion';
import { cleft1, cleft2 } from './cleft';
import { passive1, passive2 } from './passive';
import { conditionals1, conditionals2 } from './conditionals';
import { participles1, participles2 } from './participles';
import { modality1, modality2 } from './modality';
import { cohesion1, cohesion2 } from './cohesion';
import { register1, register2 } from './register';
import { CHECKPOINTS_C1, CAN_DO_C1 } from './checkpoints';
import { KCS_C1 } from './kcs';
import { THEMES_C1, VOCAB_ROWS_C1 } from './vocab';

const LESSONS_C1: Lesson[] = [
  inversion1, inversion2,
  cleft1, cleft2,
  passive1, passive2,
  conditionals1, conditionals2,
  participles1, participles2,
  modality1, modality2,
  cohesion1, cohesion2,
  register1, register2,
];

const unit = (slug: string, title: string, description: string): Unit => {
  const id = `c1-${slug}`;
  return { id, cefr: 'C1', title, description, lessonIds: [`${id}-1`, `${id}-2`], canDo: CAN_DO_C1[id] };
};

const UNITS_C1: Unit[] = [
  unit('inversion', 'Inversion emphatique', 'Never have I…, Not only…, Hardly… when, Should you…, Had I known…'),
  unit('cleft', 'Phrases clivées et mise en relief', 'It was… that…, What I need is…, All I did was…, antéposition.'),
  unit('passive', 'Passif avancé et discours rapporté', 'It is said that…, He is believed to have…, have something done.'),
  unit('conditionals', 'Conditionnels avancés et subjonctif', 'Conditionnels mixtes, provided / unless / but for, I suggest he be…'),
  unit('participles', 'Participiales et constructions absolues', 'Having finished…, Written in 1990…, With prices rising…'),
  unit('modality', 'Modalité avancée et nuance', 'needn’t have, must have, be bound to, would rather ; nuancer son propos.'),
  unit('cohesion', 'Cohésion du discours', 'Ellipse, substitution, connecteurs soutenus, nominalisation.'),
  unit('register', 'Registre et langue idiomatique', 'Formel ou informel, collocations, idiomes, verbes à particule.'),
];

/** Niveau C1 : unités, leçons, défis, notions et vocabulaire. */
export const C1: LevelModule = {
  cefr: 'C1',
  units: UNITS_C1,
  lessons: LESSONS_C1,
  checkpoints: CHECKPOINTS_C1,
  kcs: KCS_C1,
  themes: THEMES_C1,
  vocab: vocabFromRows('C1', VOCAB_ROWS_C1),
};
