import type { LevelModule } from '../level';
import { aspectUnit, aspect1, aspect2 } from './aspect';
import { inversionUnit, inversion1, inversion2 } from './inversion';
import { stanceUnit, stance1, stance2 } from './stance';
import { academicUnit, academic1, academic2 } from './academic';
import { cohesionUnit, cohesion1, cohesion2 } from './cohesion';
import { figurativeUnit, figurative1, figurative2 } from './figurative';
import { lexisUnit, lexis1, lexis2 } from './lexis';
import { registerUnit, register1, register2 } from './register';
import { CHECKPOINTS_C2 } from './checkpoints';
import { KCS_C2 } from './kcs';
import { THEMES_C2, VOCAB_C2 } from './vocab';

/** Niveau C2 : unités, leçons, défis, notions et vocabulaire. */
export const C2: LevelModule = {
  cefr: 'C2',
  units: [aspectUnit, inversionUnit, stanceUnit, academicUnit, cohesionUnit, figurativeUnit, lexisUnit, registerUnit],
  lessons: [
    aspect1, aspect2,
    inversion1, inversion2,
    stance1, stance2,
    academic1, academic2,
    cohesion1, cohesion2,
    figurative1, figurative2,
    lexis1, lexis2,
    register1, register2,
  ],
  checkpoints: CHECKPOINTS_C2,
  kcs: KCS_C2,
  themes: THEMES_C2,
  vocab: VOCAB_C2,
};
