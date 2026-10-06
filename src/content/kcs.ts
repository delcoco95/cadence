import type { CefrBand, ErrorTag } from './types';
import { THEMES } from './vocab/a2';
import { LEVELS } from './levels';
import type { KcDef } from './level';

/**
 * Registre des notions (knowledge components). Toute notion citée par un exercice
 * doit exister ici ; le validateur vérifie aussi les prérequis (sans cycle).
 */
export interface KnowledgeComponent {
  id: string;
  label: string;
  domain: 'grammar' | 'vocabulary' | 'function' | 'pronunciation' | 'listening' | 'reading' | 'speaking' | 'writing';
  band: CefrBand;
  prerequisites: string[];
  related?: string[];
  errorTags?: ErrorTag[];
  /** Leçon dont l'explication sert de rappel en remédiation */
  lessonId?: string;
}

type Def = Omit<KnowledgeComponent, 'id' | 'domain' | 'prerequisites'> & { pre?: string[]; domain?: KnowledgeComponent['domain'] };

const GRAMMAR: Record<string, Def> = {
  'grammar.articles': { label: 'Articles a / an / the', band: 'A2', errorTags: ['article_missing', 'article_wrong'], lessonId: 'a2-basics-1' },
  'grammar.plurals': { label: 'Pluriels (réguliers et irréguliers)', band: 'A2', errorTags: ['plural_form'], lessonId: 'a2-basics-1' },
  'grammar.pronouns': { label: 'Pronoms sujets et compléments', band: 'A2', errorTags: ['wrong_pronoun'], lessonId: 'a2-basics-2' },
  'grammar.possessives': { label: 'Possessifs (my, mine, ’s)', band: 'A2', pre: ['grammar.pronouns'], errorTags: ['wrong_pronoun'], lessonId: 'a2-basics-2' },
  'grammar.there_is': { label: 'There is / there are', band: 'A2', errorTags: ['wrong_auxiliary'], lessonId: 'a2-basics-3' },
  'grammar.prepositions.place': { label: 'Prépositions de lieu', band: 'A2', errorTags: ['wrong_preposition'], lessonId: 'a2-basics-3' },
  'tense.present_simple.form': { label: 'Present simple : forme', band: 'A2', lessonId: 'a2-ps-1' },
  'tense.present_simple.third_person_s': {
    label: 'Present simple : le -s de he/she/it', band: 'A2', pre: ['tense.present_simple.form'],
    errorTags: ['third_person_s'], lessonId: 'a2-ps-1',
  },
  'tense.present_simple.usage': { label: 'Present simple : habitudes et adverbes de fréquence', band: 'A2', pre: ['tense.present_simple.form'], errorTags: ['word_order', 'wrong_tense'], lessonId: 'a2-ps-1' },
  'grammar.auxiliary.do': { label: 'L’auxiliaire do', band: 'A2', pre: ['tense.present_simple.form'], errorTags: ['missing_auxiliary', 'wrong_auxiliary'], lessonId: 'a2-ps-2' },
  'tense.present_simple.negative': {
    label: 'Present simple : don’t / doesn’t', band: 'A2', pre: ['grammar.auxiliary.do', 'tense.present_simple.third_person_s'],
    errorTags: ['auxiliary_with_inflected_verb', 'wrong_auxiliary'], lessonId: 'a2-ps-2',
  },
  'tense.present_simple.question': {
    label: 'Present simple : questions avec do / does', band: 'A2', pre: ['grammar.auxiliary.do'],
    errorTags: ['missing_auxiliary', 'auxiliary_with_inflected_verb', 'word_order'], lessonId: 'a2-ps-2',
  },
  'tense.present_continuous.form': { label: 'Present continuous : be + -ing', band: 'A2', pre: ['tense.present_simple.form'], errorTags: ['missing_auxiliary', 'spelling'], lessonId: 'a2-pc-1' },
  'tense.present_continuous.usage': { label: 'Present continuous : action en cours', band: 'A2', pre: ['tense.present_continuous.form'], errorTags: ['wrong_tense'], lessonId: 'a2-pc-1' },
  'tense.contrast.simple_vs_continuous': {
    label: 'Present simple ou continuous ?', band: 'A2+', pre: ['tense.present_simple.usage', 'tense.present_continuous.usage'],
    errorTags: ['wrong_tense'], lessonId: 'a2-pc-1',
  },
  'grammar.questions.wh': { label: 'Questions avec what, where, how…', band: 'A2', pre: ['grammar.auxiliary.do'], errorTags: ['missing_auxiliary', 'word_order'], lessonId: 'a2-questions-1' },
  'grammar.questions.subject': { label: 'Questions sur le sujet (Who called?)', band: 'A2+', pre: ['grammar.questions.wh'], errorTags: ['wrong_auxiliary'], lessonId: 'a2-questions-1' },
  'tense.past_simple.regular': { label: 'Past simple : verbes réguliers (-ed)', band: 'A2', pre: ['tense.present_simple.form'], errorTags: ['wrong_tense', 'spelling'], lessonId: 'a2-past-1' },
  'tense.past_simple.negative': { label: 'Past simple : didn’t + base', band: 'A2', pre: ['tense.past_simple.regular', 'grammar.auxiliary.do'], errorTags: ['auxiliary_with_inflected_verb'], lessonId: 'a2-past-1' },
  'tense.past_simple.question': { label: 'Past simple : questions avec did', band: 'A2', pre: ['tense.past_simple.regular', 'grammar.auxiliary.do'], errorTags: ['missing_auxiliary', 'auxiliary_with_inflected_verb'], lessonId: 'a2-past-1' },
  'tense.past_simple.irregular': {
    label: 'Past simple : verbes irréguliers en contexte', band: 'A2', pre: ['tense.past_simple.regular', 'verbs.irregular.top30'],
    errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'a2-past-2',
  },
  'verbs.irregular.top30': { label: 'Verbes irréguliers essentiels', band: 'A2', errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'a2-past-2' },
  'verbs.irregular': { label: 'Verbes irréguliers', band: 'A2', related: ['verbs.irregular.top30'], errorTags: ['irregular_form', 'regularized_irregular'] },
  'tense.future.going_to': { label: 'Futur : be going to', band: 'A2', pre: ['tense.present_continuous.form'], errorTags: ['missing_auxiliary', 'wrong_tense'], lessonId: 'a2-future-1' },
  'tense.future.will': { label: 'Futur : will', band: 'A2', errorTags: ['modal_to', 'wrong_tense'], lessonId: 'a2-future-1' },
  'grammar.comparatives': { label: 'Comparatifs', band: 'A2', errorTags: ['spelling'], lessonId: 'a2-compare-1' },
  'grammar.superlatives': { label: 'Superlatifs', band: 'A2', pre: ['grammar.comparatives', 'grammar.articles'], errorTags: ['article_missing'], lessonId: 'a2-compare-1' },
  'grammar.countable': { label: 'Dénombrables et indénombrables', band: 'A2', pre: ['grammar.plurals'], errorTags: ['countable_uncountable', 'plural_form'], lessonId: 'a2-quant-1' },
  'grammar.quantifiers': { label: 'some / any / much / many', band: 'A2', pre: ['grammar.countable'], errorTags: ['countable_uncountable'], lessonId: 'a2-quant-1' },
  'modals.can': { label: 'can / could : capacité et permission', band: 'A2', errorTags: ['modal_to', 'third_person_s', 'missing_auxiliary'], lessonId: 'a2-modals-1' },
  'modals.could_request': { label: 'Demandes polies (Could you…?)', band: 'A2', pre: ['modals.can'], errorTags: ['modal_to'], lessonId: 'a2-modals-1' },
  'modals.must_have_to': { label: 'Obligation : must / have to', band: 'A2+', pre: ['modals.can'], errorTags: ['modal_to', 'third_person_s'], lessonId: 'a2-modals-2' },
  'modals.should': { label: 'Conseil : should', band: 'A2', pre: ['modals.can'], errorTags: ['modal_to'], lessonId: 'a2-modals-2' },
  'grammar.prepositions.time': { label: 'Prépositions de temps (in / on / at)', band: 'A2', errorTags: ['wrong_preposition'], lessonId: 'a2-prep-1' },
};

export const KCS: KnowledgeComponent[] = [
  ...Object.entries(GRAMMAR).map(([id, d]) => ({
    id, label: d.label, band: d.band, domain: d.domain ?? ('grammar' as const),
    prerequisites: d.pre ?? [], related: d.related, errorTags: d.errorTags, lessonId: d.lessonId,
  })),
  ...Object.entries(THEMES).map(([k, v]) => ({
    id: `vocab.${k}`, label: `Vocabulaire : ${v.toLowerCase()}`, band: 'A2' as const, domain: 'vocabulary' as const,
    prerequisites: [], errorTags: ['vocabulary_missing', 'spelling'] as ErrorTag[],
  })),
  ...LEVELS.flatMap((level) => [
    ...Object.entries(level.kcs as Record<string, KcDef>).map(([id, d]) => ({
      id, label: d.label, band: d.band, domain: d.domain ?? ('grammar' as const),
      prerequisites: d.pre ?? [], related: d.related, errorTags: d.errorTags, lessonId: d.lessonId,
    })),
    ...Object.entries(level.themes).map(([k, v]) => ({
      id: `vocab.${k}`, label: `Vocabulaire : ${v.toLowerCase()}`, band: level.cefr as CefrBand, domain: 'vocabulary' as const,
      prerequisites: [], errorTags: ['vocabulary_missing', 'spelling'] as ErrorTag[],
    })),
  ]),
];

export const kcById = new Map(KCS.map((k) => [k.id, k]));
export const KC_LABELS: Record<string, string> = Object.fromEntries(KCS.map((k) => [k.id, k.label]));
export const kcLabel = (id: string) => KC_LABELS[id] ?? id;
