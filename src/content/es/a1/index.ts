import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { hello1, hello2 } from './hello';
import { nouns1, nouns2 } from './nouns';
import { articles1, articles2 } from './articles';
import { tener1, tener2 } from './tener';
import { presentAr1, presentAr2 } from './present-ar';
import { presentErIr1, presentErIr2 } from './present-er-ir';
import { time1, time2 } from './time';
import { daily1, daily2 } from './daily';
import { CHECKPOINTS_A1, CAN_DO_A1 } from './checkpoints';
import { KCS_A1 } from './kcs';
import { THEMES_A1, VOCAB_A1 } from './vocab';

const LESSONS_A1: Lesson[] = [
  hello1, hello2,
  nouns1, nouns2,
  articles1, articles2,
  tener1, tener2,
  presentAr1, presentAr2,
  presentErIr1, presentErIr2,
  time1, time2,
  daily1, daily2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'A1', title, description,
  lessonIds: LESSONS_A1.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_A1[id],
});

const UNITS_A1: Unit[] = [
  unit('es-a1-hello', 'Premiers mots', 'Saluer, se présenter, ser, pronoms sujets, prononciation (j, g, ll, ñ, c / z, r / rr).'),
  unit('es-a1-nouns', 'Noms et articles indéfinis', 'Genre et nombre des noms, un, una, unos, unas.'),
  unit('es-a1-articles', 'Articles définis', 'el, la, los, las, al et del, hay, estar pour situer.'),
  unit('es-a1-tener', 'Avoir et décrire', 'tener, l’âge, l’accord des adjectifs, les couleurs, muy et mucho.'),
  unit('es-a1-present-ar', 'Présent en -ar', 'Conjugaison, négation, questions, mots interrogatifs.'),
  unit('es-a1-present-er-ir', 'Présent en -er et -ir', 'Diphtongues (e → ie, o → ue), ir, hacer, poder, querer.'),
  unit('es-a1-time', 'Nombres et temps', 'Nombres, heure, jours, mois, prépositions a, en, de.'),
  unit('es-a1-daily', 'Ma journée', 'Verbes pronominaux (me llamo, me levanto), gustar, fréquence.'),
];

/** Niveau A1 du cours d'espagnol : unités, leçons, défis, notions et vocabulaire. */
export const A1: LevelModule = {
  cefr: 'A1',
  units: UNITS_A1,
  lessons: LESSONS_A1,
  checkpoints: CHECKPOINTS_A1,
  kcs: KCS_A1,
  themes: THEMES_A1,
  vocab: VOCAB_A1,
};
