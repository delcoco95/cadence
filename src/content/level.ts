import type { Cefr, CefrBand, ErrorTag, Exercise, IrregularVerb, Lesson, Unit, VocabEntry } from './types';

/**
 * Module d'un niveau du parcours : tout son contenu, autonome.
 * En anglais, le niveau A2, historique, est déclaré directement dans content/english.ts et content/kcs.ts.
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

/** [mot dans la langue apprise, français, exemple ?, traduction de l'exemple ?] */
export type VocabRow = [string, string, string?, string?];

export interface LevelModule {
  cefr: Cefr;
  units: Unit[];
  lessons: Lesson[];
  /** unitId → items d'évaluation du défi de fin d'unité (role: 'assessment') */
  checkpoints: Record<string, Exercise[]>;
  kcs: Record<string, KcDef>;
  /** Thèmes de vocabulaire : clé unique dans le cours, préfixée par le niveau (ex. 'b1_work') → libellé français */
  themes: Record<string, string>;
  vocab: VocabEntry[];
}

const slug = (s: string) =>
  s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/**
 * Vocabulaire d'un niveau à partir de lignes [mot, fr, exemple, traduction] groupées par thème.
 * `idPrefix` : langue du cours ('it', 'es') ; l'anglais n'en a pas.
 */
export function vocabFromRows(cefr: Cefr, rows: Record<string, VocabRow[]>, idPrefix?: string): VocabEntry[] {
  return Object.entries(rows).flatMap(([theme, list]) =>
    list.map(([en, fr, example, exampleFr]) => ({
      id: `${idPrefix ? `${idPrefix}-` : ''}${cefr.toLowerCase()}-${theme}-${slug(en)}`,
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

/** [infinitif, 1re forme, participe passé, français] : voir LanguageInfo.verbs pour le sens de la 1re forme. */
export type VerbRow = [string, string, string, string];

/** Verbes irréguliers d'un cours, du plus au moins fréquent ; `levels[i]` = niveau du i-ème verbe. */
export function verbsFromRows(idPrefix: string, rows: VerbRow[], levelOf: (index: number) => Cefr): IrregularVerb[] {
  return rows.map(([base, past, participle, fr], i) => ({
    id: `${idPrefix}-${slug(base)}`,
    base,
    past,
    participle,
    fr,
    cefr: levelOf(i),
  }));
}
