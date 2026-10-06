import type { Exercise, IrregularVerb, VocabEntry } from '../content/types';
import { seededShuffle } from './exercise';
import type { IntroCard } from './session';
import { THEMES } from '../content/vocab/a2';

/** Exercices générés à partir des données (vocabulaire, verbes irréguliers) : pas de saisie à la main. */

export type VocabMode = 'en_fr' | 'listen' | 'fr_en' | 'cloze' | 'say';

/** Progression des modes : reconnaissance → écoute → production écrite → production orale. */
export function vocabModeFor(reps: number, seed: string, speaking: boolean): VocabMode {
  if (reps === 0) return 'en_fr';
  if (reps === 1) return 'listen';
  const modes: VocabMode[] = ['fr_en', 'cloze', 'fr_en', 'listen'];
  if (speaking) modes.push('say', 'say');
  return seededShuffle(modes, seed)[0];
}

function distractors(entry: VocabEntry, pool: VocabEntry[], seed: string, key: 'fr' | 'en'): string[] {
  const sameTheme = pool.filter((v) => v.id !== entry.id && v.theme === entry.theme && v[key] !== entry[key]);
  const others = pool.filter((v) => v.id !== entry.id && v.theme !== entry.theme && v[key] !== entry[key]);
  const picked = [...seededShuffle(sameTheme, seed), ...seededShuffle(others, seed)].slice(0, 3);
  return picked.map((v) => v[key]);
}

/** Variantes acceptées : « to go » ↔ « go », plusieurs formes séparées par « / ». */
export function englishVariants(en: string): string[] {
  const forms = en.split('/').map((s) => s.trim());
  return forms.flatMap((f) => (f.startsWith('to ') ? [f, f.slice(3)] : [f]));
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function findInExample(entry: VocabEntry): RegExpMatchArray | null {
  if (!entry.example) return null;
  const word = englishVariants(entry.en).at(-1)!;
  return entry.example.match(new RegExp(`\\b${escapeRe(word)}\\b`, 'i'));
}

export function vocabExercise(entry: VocabEntry, pool: VocabEntry[], mode: VocabMode, seed = entry.id): Exercise {
  const common = {
    cefr: entry.cefr,
    kcIds: [`vocab.${entry.theme}`],
    themeIds: [entry.theme],
    vocab: [entry.id],
    speak: entry.example ?? entry.en,
  };
  const explanation =
    `${entry.en} = ${entry.fr}` +
    (entry.example ? `. Exemple : ${entry.example}${entry.exampleFr ? ` (${entry.exampleFr})` : ''}` : '');
  const clozeMatch = mode === 'cloze' ? findInExample(entry) : null;
  const effective: VocabMode = mode === 'cloze' && !clozeMatch ? 'fr_en' : mode;

  switch (effective) {
    case 'en_fr': {
      const options = seededShuffle([entry.fr, ...distractors(entry, pool, seed, 'fr')], seed);
      return {
        ...common, id: `gen-v-${entry.id}-en_fr`, type: 'mcq', skill: 'vocabulary', difficulty: -2,
        instruction: 'Que signifie ce mot ?', question: entry.en, options, answer: options.indexOf(entry.fr), explanation,
      };
    }
    case 'listen': {
      const options = seededShuffle([entry.fr, ...distractors(entry, pool, seed, 'fr')], seed);
      return {
        ...common, id: `gen-v-${entry.id}-listen`, type: 'listen_mcq', skill: 'listening', difficulty: -1.5,
        instruction: 'Écoute et choisis le sens.', audio: entry.en, question: 'Qu’as-tu entendu ?',
        options, answer: options.indexOf(entry.fr), explanation,
      };
    }
    case 'fr_en':
      return {
        ...common, id: `gen-v-${entry.id}-fr_en`, type: 'type_answer', skill: 'vocabulary', difficulty: -1,
        instruction: 'Comment dit-on en anglais ?', question: entry.fr, accepted: englishVariants(entry.en), explanation,
      };
    case 'cloze':
      return {
        ...common, id: `gen-v-${entry.id}-cloze`, type: 'cloze', skill: 'vocabulary', difficulty: -0.8,
        instruction: 'Complète avec le mot qui correspond.',
        sentence: entry.example!.replace(clozeMatch![0], '___'), hint: entry.fr, accepted: [clozeMatch![0]], explanation,
      };
    case 'say':
      return {
        ...common, id: `gen-v-${entry.id}-say`, type: 'speak', mode: 'translate', skill: 'speaking', difficulty: -1,
        instruction: 'Dis-le en anglais.', prompt: entry.fr, accepted: englishVariants(entry.en), explanation,
      };
  }
}

export type IrregularMode = 'past' | 'participle' | 'three' | 'say';

export function irregularModeFor(reps: number, seed: string, speaking: boolean): IrregularMode {
  if (reps === 0) return 'past';
  const modes: IrregularMode[] = ['past', 'participle', 'three', 'three'];
  if (speaking) modes.push('say');
  return seededShuffle(modes, seed)[0];
}

const forms = (s: string) => s.split('/').map((f) => f.trim());

export function irregularExercise(v: IrregularVerb, mode: IrregularMode): Exercise {
  const common = {
    cefr: v.cefr, skill: 'grammar' as const, kcIds: ['verbs.irregular'], tense: 'irregular',
    speak: `${v.base}, ${spoken(v.past)}, ${spoken(v.participle)}`,
    explanation: `${v.base} (${v.fr}) → ${v.past} → ${v.participle}`,
  };
  const pairs = (prefix = '') => forms(v.past).flatMap((p) => forms(v.participle).map((pp) => `${prefix}${p} ${pp}`));
  switch (mode) {
    case 'past':
      return {
        ...common, id: `gen-irr-${v.id}-past`, type: 'type_answer', difficulty: -1, strict: true,
        instruction: 'Écris le past simple.', question: `${v.base} (${v.fr}) → ___`, accepted: forms(v.past),
      };
    case 'participle':
      return {
        ...common, id: `gen-irr-${v.id}-pp`, type: 'type_answer', difficulty: -0.5, strict: true,
        instruction: 'Écris le participe passé.', question: `${v.base} (${v.fr}) → ${v.past} → ___`,
        accepted: forms(v.participle),
      };
    case 'three':
      return {
        ...common, id: `gen-irr-${v.id}-three`, type: 'type_answer', difficulty: 0, strict: true,
        instruction: 'Écris le past simple puis le participe passé, séparés par un espace.',
        question: `${v.base} (${v.fr}) → ___ → ___`, accepted: pairs(),
      };
    case 'say':
      return {
        ...common, id: `gen-irr-${v.id}-say`, type: 'speak', mode: 'translate', skill: 'speaking', difficulty: 0,
        instruction: 'Dis les trois formes à voix haute.', prompt: `${v.base} (${v.fr}) → … → …`,
        accepted: pairs(`${v.base} `),
      };
  }
}

/** Fiche de présentation d'un nouveau mot. */
export const vocabIntro = (v: VocabEntry): IntroCard => ({
  label: `Nouveau mot · ${THEMES[v.theme] ?? v.theme}`,
  title: v.en,
  subtitle: v.fr,
  lines: v.example ? [{ en: v.example, fr: v.exampleFr }] : undefined,
  speak: v.example ? `${v.en}. ${v.example}` : v.en,
});

/** « was/were » se lit « was or were » (sans espaces, la synthèse disait « wasorwere »). */
const spoken = (forms: string) => forms.split('/').map((f) => f.trim()).join(' or ');

/** Fiche de présentation d'un verbe irrégulier. */
export const irregularIntro = (v: IrregularVerb): IntroCard => ({
  label: 'Verbe irrégulier',
  title: `${v.base} → ${v.past} → ${v.participle}`,
  subtitle: v.fr,
  lines: [{ en: `base : ${v.base}` }, { en: `past simple : ${v.past}` }, { en: `participe passé : ${v.participle}` }],
  speak: `${v.base}, ${spoken(v.past)}, ${spoken(v.participle)}`,
});
