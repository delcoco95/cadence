import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { hello1, hello2 } from './hello';
import { nouns1, nouns2 } from './nouns';
import { articles1, articles2 } from './articles';
import { avere1, avere2 } from './avere';
import { presentAre1, presentAre2 } from './present-are';
import { presentEreIre1, presentEreIre2 } from './present-ere-ire';
import { time1, time2 } from './time';
import { daily1, daily2 } from './daily';
import { CHECKPOINTS_A1, CAN_DO_A1 } from './checkpoints';
import { KCS_A1 } from './kcs';
import { THEMES_A1, VOCAB_A1 } from './vocab';

const LESSONS_A1: Lesson[] = [
  hello1, hello2,
  nouns1, nouns2,
  articles1, articles2,
  avere1, avere2,
  presentAre1, presentAre2,
  presentEreIre1, presentEreIre2,
  time1, time2,
  daily1, daily2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'A1', title, description,
  lessonIds: LESSONS_A1.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_A1[id],
});

const UNITS_A1: Unit[] = [
  unit('it-a1-hello', 'Premiers mots', 'Saluer, se présenter, essere, pronoms sujets, prononciation.'),
  unit('it-a1-nouns', 'Noms et articles indéfinis', 'Genre et nombre des noms ; un, uno, una, un’.'),
  unit('it-a1-articles', 'Articles définis', 'il, lo, la, l’, i, gli, le ; c’è / ci sono.'),
  unit('it-a1-avere', 'Avoir et décrire', 'avere, l’âge, accord des adjectifs, couleurs, molto.'),
  unit('it-a1-present-are', 'Présent en -are', 'Conjugaison, négation avec non, questions et mots interrogatifs.'),
  unit('it-a1-present-ere-ire', 'Présent en -ere et -ire', '-isc-, fare, andare, venire, volere, potere, dovere.'),
  unit('it-a1-time', 'Nombres et temps', 'Nombres, heure, jours, mois ; prépositions a, in, di, da.'),
  unit('it-a1-daily', 'Ma journée', 'Verbes pronominaux, piacere, fréquence.'),
];

/** Niveau A1 du cours d'italien : unités, leçons, défis, notions et vocabulaire. */
export const A1: LevelModule = {
  cefr: 'A1',
  units: UNITS_A1,
  lessons: LESSONS_A1,
  checkpoints: CHECKPOINTS_A1,
  kcs: KCS_A1,
  themes: THEMES_A1,
  vocab: VOCAB_A1,
};
