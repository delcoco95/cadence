import type { Cefr, CefrBand, ErrorTag, Exercise, Lesson, Unit, VocabEntry } from './types';

/**
 * Module d'un niveau du parcours (B1, B2, C1, C2) : tout son contenu, autonome.
 * Le niveau A2, historique, est déclaré directement dans content/index.ts et content/kcs.ts.
 */

/** Notion (knowledge component) déclarée par un niveau ; l'identifiant est la clé de l'objet. */
export interface KcDef {
  label: string;
  band: CefrBand;
  /** Notions prérequises (y compris d'un niveau inférieur) */
  pre?: string[];
  related?: string[];
  errorTags?: ErrorTag[];
  /** Leçon dont l'explication sert de rappel */
  lessonId?: string;
  domain?: 'grammar' | 'vocabulary' | 'function' | 'pronunciation' | 'listening' | 'reading' | 'speaking' | 'writing';
}

/** [anglais, français, exemple ?, traduction de l'exemple ?] */
export type VocabRow = [string, string, string?, string?];

export interface LevelModule {
  cefr: Cefr;
  units: Unit[];
  lessons: Lesson[];
  /** unitId → items d'évaluation du défi de fin d'unité (role: 'assessment') */
  checkpoints: Record<string, Exercise[]>;
  kcs: Record<string, KcDef>;
  /** Thèmes de vocabulaire : clé unique préfixée par le niveau (ex. 'b1_work') → libellé français */
  themes: Record<string, string>;
  vocab: VocabEntry[];
}

const slug = (s: string) =>
  s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Vocabulaire d'un niveau à partir de lignes [en, fr, exemple, traduction] groupées par thème. */
export function vocabFromRows(cefr: Cefr, rows: Record<string, VocabRow[]>): VocabEntry[] {
  return Object.entries(rows).flatMap(([theme, list]) =>
    list.map(([en, fr, example, exampleFr]) => ({
      id: `${cefr.toLowerCase()}-${theme}-${slug(en)}`,
      en,
      fr,
      cefr,
      theme,
      example,
      exampleFr,
    })),
  );
}

/** Marque les items d'un défi comme items d'évaluation (jamais montrés en pratique). */
export const assessment = (list: Exercise[]): Exercise[] => list.map((e) => ({ ...e, role: 'assessment' as const }));
