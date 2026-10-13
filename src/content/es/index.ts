import { courseFromLevels, type Course } from '../course';
import { A1 } from './a1';
import { A2 } from './a2';
import { B1 } from './b1';
import { B2 } from './b2';
import { C1 } from './c1';
import { C2 } from './c2';
import { VERBS } from './verbs';
import { PLACEMENT } from './placement';

/** Cours d'espagnol, de A1 à C2. */
export const SPANISH: Course = courseFromLevels({
  lang: 'es',
  levels: [A1, A2, B1, B2, C1, C2],
  kcs: {
    'verbs.irregular': { label: 'Verbes irréguliers', band: 'A1', errorTags: ['irregular_form'] },
  },
  verbs: VERBS,
  placement: PLACEMENT,
  placementUnitLevels: ['A1', 'A2'],
  motivationThemes: {
    travel: ['a1_ph_travel', 'a2_ph_travel', 'a1_travel', 'a2_travel', 'a1_city', 'a1_food', 'a2_shopping', 'b1_travel'],
    work: ['a2_ph_work', 'a2_work', 'b1_work', 'b2_work', 'b2_economy'],
    studies: ['a2_ph_studies', 'b1_studies', 'b2_science'],
    culture: ['a2_ph_culture', 'a2_leisure', 'b1_media', 'b2_culture'],
    people: ['a1_ph_people', 'a2_ph_people', 'a1_greetings', 'a1_family', 'a2_feelings', 'b1_relationships'],
    brain: [],
  },
});
