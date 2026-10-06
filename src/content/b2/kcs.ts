import type { KcDef } from '../level';

/** Notions du niveau B2. Les prérequis pointent vers des notions A2 ou B2 uniquement. */
export const KCS_B2: Record<string, KcDef> = {
  // Unité 1 : temps du récit
  'b2.narrative.past_continuous': {
    label: 'Past continuous dans un récit (arrière-plan, action interrompue)',
    band: 'B2', pre: ['tense.past_simple.irregular', 'tense.present_continuous.form'],
    errorTags: ['wrong_tense', 'missing_auxiliary'], lessonId: 'b2-narrative-1',
  },
  'b2.narrative.past_perfect': {
    label: 'Past perfect simple (antériorité dans le passé)',
    band: 'B2', pre: ['tense.past_simple.irregular'],
    errorTags: ['wrong_tense', 'irregular_form', 'wrong_auxiliary'], lessonId: 'b2-narrative-1',
  },
  'b2.narrative.past_perfect_continuous': {
    label: 'Past perfect continuous (durée avant un moment passé)',
    band: 'B2', pre: ['b2.narrative.past_perfect', 'b2.narrative.past_continuous'],
    errorTags: ['wrong_tense', 'missing_auxiliary'], lessonId: 'b2-narrative-2',
  },
  'b2.narrative.sequencing': {
    label: 'Enchaîner un récit (by the time, as soon as, after, eventually…)',
    band: 'B2', pre: ['b2.narrative.past_perfect'],
    errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'b2-narrative-2', domain: 'function',
  },

  // Unité 2 : present perfect continuous, futur continu et futur antérieur
  'b2.tense.present_perfect_continuous': {
    label: 'Present perfect continuous (activité qui dure jusqu’à maintenant)',
    band: 'B2', pre: ['tense.present_continuous.form'],
    errorTags: ['wrong_tense', 'missing_auxiliary', 'wrong_preposition'], lessonId: 'b2-perfect-future-1',
  },
  'b2.tense.pp_simple_vs_continuous': {
    label: 'Present perfect simple ou continuous (résultat ou activité)',
    band: 'B2+', pre: ['b2.tense.present_perfect_continuous'],
    errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'b2-perfect-future-1',
  },
  'b2.tense.future_continuous': {
    label: 'Future continuous (will be + -ing)',
    band: 'B2', pre: ['tense.future.will', 'tense.present_continuous.form'],
    errorTags: ['wrong_tense', 'missing_auxiliary'], lessonId: 'b2-perfect-future-2',
  },
  'b2.tense.future_perfect': {
    label: 'Future perfect (will have + participe passé)',
    band: 'B2', pre: ['tense.future.will', 'tense.past_simple.irregular'],
    errorTags: ['wrong_tense', 'irregular_form', 'wrong_preposition'], lessonId: 'b2-perfect-future-2',
  },

  // Unité 3 : conditionnels et souhaits
  'b2.conditionals.third': {
    label: 'Troisième conditionnel (if + past perfect, would have + p.p.)',
    band: 'B2', pre: ['b2.narrative.past_perfect'],
    errorTags: ['wrong_tense', 'wrong_auxiliary'], lessonId: 'b2-conditionals-1',
  },
  'b2.conditionals.mixed': {
    label: 'Conditionnels mixtes (passé → présent, présent → passé)',
    band: 'B2+', pre: ['b2.conditionals.third'],
    errorTags: ['wrong_tense'], lessonId: 'b2-conditionals-1',
  },
  'b2.wishes.wish_if_only': {
    label: 'Regrets et souhaits : wish / if only',
    band: 'B2', pre: ['b2.conditionals.third'],
    errorTags: ['wrong_tense', 'wrong_auxiliary'], lessonId: 'b2-conditionals-2',
  },
  'b2.wishes.would_rather': {
    label: 'Préférences : I’d rather / I’d rather you…',
    band: 'B2', pre: ['tense.past_simple.regular'],
    errorTags: ['wrong_tense', 'modal_to'], lessonId: 'b2-conditionals-2',
  },

  // Unité 4 : le passif
  'b2.passive.tenses': {
    label: 'Le passif à tous les temps',
    band: 'B2', pre: ['tense.past_simple.irregular', 'tense.present_continuous.form'],
    errorTags: ['missing_auxiliary', 'irregular_form', 'wrong_tense'], lessonId: 'b2-passive-1',
  },
  'b2.passive.modals': {
    label: 'Le passif avec les modaux (must be done, should have been done)',
    band: 'B2', pre: ['b2.passive.tenses', 'modals.must_have_to', 'modals.should'],
    errorTags: ['missing_auxiliary', 'modal_to'], lessonId: 'b2-passive-1',
  },
  'b2.passive.causative': {
    label: 'Forme causative : have / get something done',
    band: 'B2', pre: ['b2.passive.tenses'],
    errorTags: ['word_order', 'irregular_form'], lessonId: 'b2-passive-2',
  },
  'b2.passive.impersonal': {
    label: 'Passif impersonnel : it is said that… / he is thought to…',
    band: 'B2+', pre: ['b2.passive.tenses'],
    errorTags: ['word_order', 'wrong_tense'], lessonId: 'b2-passive-2',
  },

  // Unité 5 : discours rapporté
  'b2.reported.questions': {
    label: 'Questions rapportées (asked if / wanted to know where…)',
    band: 'B2', pre: ['grammar.questions.wh'],
    errorTags: ['word_order', 'wrong_tense', 'missing_auxiliary'], lessonId: 'b2-reported-1',
  },
  'b2.reported.commands': {
    label: 'Ordres et demandes rapportés (told / asked someone to…)',
    band: 'B2', pre: ['tense.past_simple.irregular'],
    errorTags: ['modal_to', 'word_order'], lessonId: 'b2-reported-1',
  },
  'b2.reported.verbs': {
    label: 'Verbes introducteurs (suggest, deny, admit, warn, refuse…)',
    band: 'B2+', pre: ['b2.reported.commands'],
    errorTags: ['modal_to', 'wrong_choice', 'wrong_preposition'], lessonId: 'b2-reported-2',
  },

  // Unité 6 : modaux au passé
  'b2.modals.past_deduction': {
    label: 'Déduction au passé : must have / can’t have',
    band: 'B2', pre: ['modals.must_have_to', 'modals.can'],
    errorTags: ['wrong_auxiliary', 'irregular_form', 'modal_to'], lessonId: 'b2-deduction-1',
  },
  'b2.modals.past_speculation': {
    label: 'Hypothèse au passé : might / may / could have',
    band: 'B2', pre: ['b2.modals.past_deduction'],
    errorTags: ['wrong_auxiliary', 'irregular_form'], lessonId: 'b2-deduction-1',
  },
  'b2.modals.past_criticism': {
    label: 'Reproche et regret : should have / shouldn’t have / could have',
    band: 'B2', pre: ['modals.should'],
    errorTags: ['wrong_auxiliary', 'irregular_form', 'modal_to'], lessonId: 'b2-deduction-2',
  },
  'b2.modals.needn_have': {
    label: 'needn’t have done ou didn’t need to',
    band: 'B2+', pre: ['b2.modals.past_criticism'],
    errorTags: ['wrong_choice', 'wrong_tense'], lessonId: 'b2-deduction-2',
  },

  // Unité 7 : relatives et connecteurs
  'b2.relative.non_defining': {
    label: 'Relatives explicatives (non-defining) : which, who, whose, where',
    band: 'B2', pre: ['grammar.pronouns'],
    errorTags: ['wrong_pronoun', 'word_order'], lessonId: 'b2-linking-1',
  },
  'b2.relative.reduced': {
    label: 'Relatives réduites (participes en -ing / -ed)',
    band: 'B2+', pre: ['b2.relative.non_defining'],
    errorTags: ['wrong_pronoun', 'irregular_form'], lessonId: 'b2-linking-1',
  },
  'b2.linking.concession': {
    label: 'Concession : although, even though, despite, in spite of',
    band: 'B2', pre: ['tense.present_continuous.usage'],
    errorTags: ['wrong_choice', 'wrong_preposition'], lessonId: 'b2-linking-2', domain: 'function',
  },
  'b2.linking.contrast': {
    label: 'Contraste : whereas, while, however, nevertheless',
    band: 'B2', pre: ['b2.linking.concession'],
    errorTags: ['wrong_choice', 'word_order'], lessonId: 'b2-linking-2', domain: 'function',
  },

  // Unité 8 : habitudes, structures verbales, collocations
  'b2.habits.used_to': {
    label: 'used to + base (habitude passée révolue)',
    band: 'B2', pre: ['tense.past_simple.negative'],
    errorTags: ['wrong_auxiliary', 'modal_to'], lessonId: 'b2-patterns-1',
  },
  'b2.habits.be_get_used_to': {
    label: 'be used to / get used to + -ing (être habitué, s’habituer)',
    band: 'B2', pre: ['b2.habits.used_to'],
    errorTags: ['modal_to', 'wrong_choice'], lessonId: 'b2-patterns-1',
  },
  'b2.verbs.meaning_change': {
    label: 'Verbes à double construction : stop, remember, forget, try, regret + -ing ou to',
    band: 'B2+', pre: ['b2.habits.be_get_used_to'],
    errorTags: ['modal_to', 'wrong_choice'], lessonId: 'b2-patterns-2',
  },
  'b2.lexis.collocations': {
    label: 'Collocations et verbes à particule courants',
    band: 'B2', pre: [],
    errorTags: ['vocabulary_missing', 'wrong_preposition', 'wrong_choice'], lessonId: 'b2-patterns-2', domain: 'vocabulary',
  },
};
