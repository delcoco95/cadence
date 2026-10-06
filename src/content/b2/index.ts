import type { LevelModule } from '../level';
import { vocabFromRows } from '../level';
import { narrativeUnit, narrative1, narrative2 } from './narrative';
import { perfectFutureUnit, perfectFuture1, perfectFuture2 } from './perfect-future';
import { conditionalsUnit, conditionals1, conditionals2 } from './conditionals';
import { passiveUnit, passive1, passive2 } from './passive';
import { reportedUnit, reported1, reported2 } from './reported';
import { deductionUnit, deduction1, deduction2 } from './deduction';
import { linkingUnit, linking1, linking2 } from './linking';
import { patternsUnit, patterns1, patterns2 } from './patterns';
import { CHECKPOINTS_B2 } from './checkpoints';
import { KCS_B2 } from './kcs';
import { THEMES_B2, VOCAB_ROWS_B2 } from './vocab';

/** Niveau B2 : unités, leçons, défis, notions et vocabulaire. */
export const B2: LevelModule = {
  cefr: 'B2',
  units: [narrativeUnit, perfectFutureUnit, conditionalsUnit, passiveUnit, reportedUnit, deductionUnit, linkingUnit, patternsUnit],
  lessons: [
    narrative1, narrative2,
    perfectFuture1, perfectFuture2,
    conditionals1, conditionals2,
    passive1, passive2,
    reported1, reported2,
    deduction1, deduction2,
    linking1, linking2,
    patterns1, patterns2,
  ],
  checkpoints: CHECKPOINTS_B2,
  kcs: KCS_B2,
  themes: THEMES_B2,
  vocab: vocabFromRows('B2', VOCAB_ROWS_B2),
};
