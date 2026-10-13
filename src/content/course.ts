import type { Cefr, CefrBand, Exercise, IrregularVerb, Lang, Lesson, Unit, VocabEntry } from './types';
import type { KcDef, LevelModule } from './level';
import { levelKcs, type KnowledgeComponent } from './kcs';
import type { PlacementExercise } from './placement';
import type { Motivation } from '../db/db';

/** Un cours complet dans une langue : parcours, notions, lexique, verbes et test de niveau. */
export interface Course {
  lang: Lang;
  /** Niveaux du parcours, dans l'ordre */
  levels: Cefr[];
  units: Unit[];
  lessons: Lesson[];
  /** unitId → items du défi de fin d'unité */
  checkpoints: Record<string, Exercise[]>;
  kcs: KnowledgeComponent[];
  /** Thèmes de vocabulaire → libellé français */
  themes: Record<string, string>;
  /** Vocabulaire, dans l'ordre d'apprentissage */
  vocab: VocabEntry[];
  verbs: IrregularVerb[];
  placement: PlacementExercise[];
  /** Niveaux dont les items du test portent leur unité (dispense unité par unité) */
  placementUnitLevels: Cefr[];
  /** Thèmes de vocabulaire liés à chaque objectif, du plus au moins utile */
  motivationThemes: Record<Motivation, string[]>;
}

/** Notions communes à tout le cours (verbes irréguliers…), déclarées hors des niveaux. */
const courseKcs = (defs: Record<string, KcDef>): KnowledgeComponent[] =>
  Object.entries(defs).map(([id, d]) => ({
    id, label: d.label, band: d.band as CefrBand, domain: d.domain ?? ('grammar' as const),
    prerequisites: d.pre ?? [], related: d.related, errorTags: d.errorTags, lessonId: d.lessonId,
  }));

/** Assemble un cours à partir de ses modules de niveau (italien, espagnol). */
export function courseFromLevels(c: {
  lang: Lang;
  levels: LevelModule[];
  kcs: Record<string, KcDef>;
  verbs: IrregularVerb[];
  placement: PlacementExercise[];
  placementUnitLevels: Cefr[];
  motivationThemes: Record<Motivation, string[]>;
}): Course {
  return {
    lang: c.lang,
    levels: c.levels.map((l) => l.cefr),
    units: c.levels.flatMap((l) => l.units),
    lessons: c.levels.flatMap((l) => l.lessons),
    checkpoints: Object.assign({}, ...c.levels.map((l) => l.checkpoints)),
    kcs: [...courseKcs(c.kcs), ...c.levels.flatMap(levelKcs)],
    themes: Object.assign({}, ...c.levels.map((l) => l.themes)),
    vocab: c.levels.flatMap((l) => l.vocab),
    verbs: c.verbs,
    placement: c.placement,
    placementUnitLevels: c.placementUnitLevels,
    motivationThemes: c.motivationThemes,
  };
}
