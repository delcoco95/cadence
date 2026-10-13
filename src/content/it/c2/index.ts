import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { sfumature1, sfumature2 } from './sfumature';
import { letterario1, letterario2 } from './letterario';
import { idiomi1, idiomi2 } from './idiomi';
import { giornalistico1, giornalistico2 } from './giornalistico';
import { accademico1, accademico2 } from './accademico';
import { parlato1, parlato2 } from './parlato';
import { retorica1, retorica2 } from './retorica';
import { precisione1, precisione2 } from './precisione';
import { CHECKPOINTS_C2, CAN_DO_C2 } from './checkpoints';
import { KCS_C2 } from './kcs';
import { THEMES_C2, VOCAB_C2 } from './vocab';

const LESSONS_C2: Lesson[] = [
  sfumature1, sfumature2,
  letterario1, letterario2,
  idiomi1, idiomi2,
  giornalistico1, giornalistico2,
  accademico1, accademico2,
  parlato1, parlato2,
  retorica1, retorica2,
  precisione1, precisione2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'C2', title, description,
  lessonIds: LESSONS_C2.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_C2[id],
});

const UNITS_C2: Unit[] = [
  unit('it-c2-sfumature', 'Nuances modales', 'Futur et conditionnel épistémiques, atténuation et prudence.'),
  unit('it-c2-letterario', 'Langue littéraire', 'Trapassato remoto, participe absolu, lexique et syntaxe du style soutenu.'),
  unit('it-c2-idiomi', 'Idiomes et proverbes', 'Idiomes imagés, proverbes et allusions proverbiales.'),
  unit('it-c2-giornalistico', 'Langue des médias', 'Titres de presse, lexique journalistique, style nominal et verbes introducteurs.'),
  unit('it-c2-accademico', 'Langue académique', 'Structurer, effacer le « je », citer, concéder et réfuter.'),
  unit('it-c2-parlato', 'Italien parlé', 'allora, cioè, insomma, mica ; variétés régionales (reconnaissance).'),
  unit('it-c2-retorica', 'Rhétorique', 'Figures de style, procédés persuasifs, ironie et sous-entendus.'),
  unit('it-c2-precisione', 'Précision lexicale', 'Faux amis avec le français, paronymes et verbe exact.'),
];

/** Niveau C2 du cours d'italien : unités, leçons, défis, notions et vocabulaire. */
export const C2: LevelModule = {
  cefr: 'C2',
  units: UNITS_C2,
  lessons: LESSONS_C2,
  checkpoints: CHECKPOINTS_C2,
  kcs: KCS_C2,
  themes: THEMES_C2,
  vocab: VOCAB_C2,
};
