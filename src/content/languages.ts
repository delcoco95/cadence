import type { Lang } from './types';

/** Tout ce qui change d'une langue apprise à l'autre, en dehors du contenu des cours. */
export interface LanguageInfo {
  lang: Lang;
  /** « anglais » : s'emploie après « l' » et « d' » (les trois langues commencent par une voyelle) */
  name: string;
  /** « Anglais » */
  label: string;
  /** Phrase d'écoute du choix de voix (incluse dans le corpus généré) */
  voiceSample: string;
  /** Zone de saisie d'une traduction vers la langue apprise */
  placeholder: string;
  /** Liaison entre deux variantes lues à voix haute : « was or were » */
  or: string;
  /** Consignes des exercices écrits par les constructeurs et les générateurs */
  instructions: {
    translate: string;
    say: string;
    howToSay: string;
    sayShort: string;
  };
  /** Les deux formes apprises pour chaque verbe irrégulier */
  verbs: {
    label: string;
    past: string;
    pastInstruction: string;
    participleInstruction: string;
    threeInstruction: string;
    sayInstruction: string;
  };
}

export const LANGUAGES: Record<Lang, LanguageInfo> = {
  en: {
    lang: 'en',
    name: 'anglais',
    label: 'Anglais',
    voiceSample: 'Hello! Welcome to Cadence. Let’s learn English together.',
    placeholder: 'In English…',
    or: 'or',
    instructions: {
      translate: 'Traduis en anglais.',
      say: 'Dis-le en anglais, à voix haute.',
      howToSay: 'Comment dit-on en anglais ?',
      sayShort: 'Dis-le en anglais.',
    },
    verbs: {
      label: 'past simple',
      past: 'past simple',
      pastInstruction: 'Écris le past simple.',
      participleInstruction: 'Écris le participe passé.',
      threeInstruction: 'Écris le past simple puis le participe passé, séparés par un espace.',
      sayInstruction: 'Dis les trois formes à voix haute.',
    },
  },
  it: {
    lang: 'it',
    name: 'italien',
    label: 'Italien',
    voiceSample: 'Ciao! Benvenuto su Cadence. Impariamo l’italiano insieme.',
    placeholder: 'In italiano…',
    or: 'o',
    instructions: {
      translate: 'Traduis en italien.',
      say: 'Dis-le en italien, à voix haute.',
      howToSay: 'Comment dit-on en italien ?',
      sayShort: 'Dis-le en italien.',
    },
    verbs: {
      label: 'présent (io)',
      past: 'présent (io)',
      pastInstruction: 'Écris le présent à la 1re personne (io).',
      participleInstruction: 'Écris le participe passé.',
      threeInstruction: 'Écris le présent (io) puis le participe passé, séparés par un espace.',
      sayInstruction: 'Dis l’infinitif, le présent (io) et le participe passé à voix haute.',
    },
  },
  es: {
    lang: 'es',
    name: 'espagnol',
    label: 'Espagnol',
    voiceSample: '¡Hola! Bienvenido a Cadence. Aprendamos español juntos.',
    placeholder: 'En español…',
    or: 'o',
    instructions: {
      translate: 'Traduis en espagnol.',
      say: 'Dis-le en espagnol, à voix haute.',
      howToSay: 'Comment dit-on en espagnol ?',
      sayShort: 'Dis-le en espagnol.',
    },
    verbs: {
      label: 'présent (yo)',
      past: 'présent (yo)',
      pastInstruction: 'Écris le présent à la 1re personne (yo).',
      participleInstruction: 'Écris le participe passé.',
      threeInstruction: 'Écris le présent (yo) puis le participe passé, séparés par un espace.',
      sayInstruction: 'Dis l’infinitif, le présent (yo) et le participe passé à voix haute.',
    },
  },
};
