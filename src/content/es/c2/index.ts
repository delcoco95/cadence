import type { LevelModule } from '../../level';
import type { Lesson, Unit } from '../../types';
import { matices1, matices2 } from './matices';
import { literario1, literario2 } from './literario';
import { modismos1, modismos2 } from './modismos';
import { periodistico1, periodistico2 } from './periodistico';
import { academico1, academico2 } from './academico';
import { coloquial1, coloquial2 } from './coloquial';
import { retorica1, retorica2 } from './retorica';
import { precision1, precision2 } from './precision';
import { CHECKPOINTS_C2, CAN_DO_C2 } from './checkpoints';
import { KCS_C2 } from './kcs';
import { THEMES_C2, VOCAB_C2 } from './vocab';

const LESSONS_C2: Lesson[] = [
  matices1, matices2,
  literario1, literario2,
  modismos1, modismos2,
  periodistico1, periodistico2,
  academico1, academico2,
  coloquial1, coloquial2,
  retorica1, retorica2,
  precision1, precision2,
];

const unit = (id: string, title: string, description: string): Unit => ({
  id, cefr: 'C2', title, description,
  lessonIds: LESSONS_C2.filter((l) => l.unitId === id).map((l) => l.id),
  canDo: CAN_DO_C2[id],
});

const UNITS_C2: Unit[] = [
  unit('es-c2-matices', 'Nuances modales', 'Mode et certitude (quizá, a lo mejor, puede que), deber de, atténuation, évidentiels (por lo visto, se ve que).'),
  unit('es-c2-literario', 'Langue littéraire', 'Pretérito anterior, forme en -ra, futur du subjonctif ; épithète, hyperbate, lexique soutenu.'),
  unit('es-c2-modismos', 'Idiomes et proverbes', 'Modismos avancés, équivalences avec le français, refranes et allusions tronquées.'),
  unit('es-c2-periodistico', 'Langue des médias', 'Titres, conditionnel de rumeur, style nominal, verbes introducteurs.'),
  unit('es-c2-academico', 'Langue académique', 'Impersonnalité, connecteurs soutenus, citer et conclure, dequeísmo et queísmo.'),
  unit('es-c2-coloquial', 'Espagnol parlé', 'vale, o sea, pues, venga, lexique familier d’Espagne ; ustedes, voseo et lexique d’Amérique.'),
  unit('es-c2-retorica', 'Rhétorique', 'Figures de style, litote et euphémisme, ironie et sous-entendus.'),
  unit('es-c2-precision', 'Précision lexicale', 'Faux amis du français, paronymes, homophones (sino / si no, porque / por qué).'),
];

/** Niveau C2 du cours d'espagnol : unités, leçons, défis, notions et vocabulaire. */
export const C2: LevelModule = {
  cefr: 'C2',
  units: UNITS_C2,
  lessons: LESSONS_C2,
  checkpoints: CHECKPOINTS_C2,
  kcs: KCS_C2,
  themes: THEMES_C2,
  vocab: VOCAB_C2,
};
