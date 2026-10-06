import type { KcDef } from '../level';

/** Notions du niveau B1 (préfixe `b1.`), avec prérequis A2 ou B1. */
export const KCS_B1: Record<string, KcDef> = {
  // Unité 1 : present perfect
  'b1.tense.present_perfect.form': {
    label: 'Present perfect : have / has + participe passé', band: 'B1',
    pre: ['tense.past_simple.irregular', 'verbs.irregular.top30'],
    errorTags: ['missing_auxiliary', 'irregular_form', 'regularized_irregular', 'third_person_s'], lessonId: 'b1-present-perfect-1',
  },
  'b1.tense.present_perfect.experience': {
    label: 'Present perfect : expérience (ever, never, been / gone)', band: 'B1',
    pre: ['b1.tense.present_perfect.form'], errorTags: ['wrong_tense', 'word_order', 'wrong_choice'], lessonId: 'b1-present-perfect-1',
  },
  'b1.tense.present_perfect.just_already_yet': {
    label: 'Present perfect : just, already, yet', band: 'B1',
    pre: ['b1.tense.present_perfect.form'], errorTags: ['word_order', 'wrong_choice'], lessonId: 'b1-present-perfect-2',
  },
  'b1.tense.contrast.pp_vs_past': {
    label: 'Present perfect ou past simple ?', band: 'B1+',
    pre: ['b1.tense.present_perfect.experience', 'tense.past_simple.regular'], errorTags: ['wrong_tense'], lessonId: 'b1-present-perfect-2',
  },
  // Unité 2 : for / since, present perfect continuous
  'b1.tense.present_perfect.for_since': {
    label: 'Present perfect avec for / since (« depuis »)', band: 'B1',
    pre: ['b1.tense.present_perfect.form'], errorTags: ['wrong_tense', 'wrong_preposition'], lessonId: 'b1-for-since-1',
  },
  'b1.grammar.questions.how_long': {
    label: 'How long have you…? (durée jusqu’à maintenant)', band: 'B1',
    pre: ['b1.tense.present_perfect.for_since', 'grammar.questions.wh'], errorTags: ['wrong_tense', 'missing_auxiliary', 'word_order'], lessonId: 'b1-for-since-1',
  },
  'b1.tense.present_perfect_continuous.form': {
    label: 'Present perfect continuous : have been + -ing', band: 'B1+',
    pre: ['b1.tense.present_perfect.for_since', 'tense.present_continuous.form'], errorTags: ['missing_auxiliary', 'spelling'], lessonId: 'b1-for-since-2',
  },
  'b1.tense.present_perfect_continuous.usage': {
    label: 'Present perfect continuous ou simple ? (durée, trace, résultat)', band: 'B1+',
    pre: ['b1.tense.present_perfect_continuous.form'], errorTags: ['wrong_tense'], lessonId: 'b1-for-since-2',
  },
  // Unité 3 : raconter le passé
  'b1.tense.past_continuous.form': {
    label: 'Past continuous : was / were + -ing', band: 'B1',
    pre: ['tense.past_simple.irregular', 'tense.present_continuous.form'], errorTags: ['missing_auxiliary', 'wrong_auxiliary', 'spelling'], lessonId: 'b1-past-narrative-1',
  },
  'b1.tense.contrast.past_continuous_vs_simple': {
    label: 'Past continuous ou past simple ? (when / while)', band: 'B1',
    pre: ['b1.tense.past_continuous.form'], errorTags: ['wrong_tense'], lessonId: 'b1-past-narrative-1',
  },
  'b1.grammar.used_to': {
    label: 'used to : habitudes et états passés', band: 'B1',
    pre: ['tense.past_simple.regular'], errorTags: ['wrong_tense', 'spelling'], lessonId: 'b1-past-narrative-2',
  },
  'b1.grammar.used_to.negative_question': {
    label: 'didn’t use to / Did you use to…?', band: 'B1',
    pre: ['b1.grammar.used_to', 'tense.past_simple.negative'], errorTags: ['auxiliary_with_inflected_verb', 'missing_auxiliary'], lessonId: 'b1-past-narrative-2',
  },
  // Unité 4 : futur
  'b1.tense.future.arrangements': {
    label: 'Present continuous pour les rendez-vous fixés', band: 'B1',
    pre: ['tense.present_continuous.form', 'tense.future.going_to'], errorTags: ['wrong_tense', 'missing_auxiliary'], lessonId: 'b1-future-1',
  },
  'b1.tense.future.will_vs_going_to': {
    label: 'will ou going to ? (décision, intention, prédiction)', band: 'B1',
    pre: ['tense.future.will', 'tense.future.going_to'], errorTags: ['wrong_tense', 'modal_to'], lessonId: 'b1-future-1',
  },
  'b1.grammar.future_time_clauses': {
    label: 'when / as soon as / until + présent (sens futur)', band: 'B1',
    pre: ['b1.tense.future.will_vs_going_to'], errorTags: ['wrong_tense'], lessonId: 'b1-future-2',
  },
  // Unité 5 : conditionnels
  'b1.grammar.conditional.zero': {
    label: 'Conditionnel zéro : vérités générales', band: 'B1',
    pre: ['tense.present_simple.third_person_s'], errorTags: ['wrong_tense', 'third_person_s'], lessonId: 'b1-conditionals-1',
  },
  'b1.grammar.conditional.first': {
    label: 'Premier conditionnel : if + présent, will', band: 'B1',
    pre: ['b1.grammar.conditional.zero', 'tense.future.will'], errorTags: ['wrong_tense'], lessonId: 'b1-conditionals-1',
  },
  'b1.grammar.conditional.unless': {
    label: 'unless (= if … not)', band: 'B1+',
    pre: ['b1.grammar.conditional.first'], errorTags: ['wrong_choice', 'wrong_tense'], lessonId: 'b1-conditionals-1',
  },
  'b1.grammar.conditional.second': {
    label: 'Deuxième conditionnel : if + prétérit, would', band: 'B1',
    pre: ['b1.grammar.conditional.first', 'tense.past_simple.irregular'], errorTags: ['wrong_tense', 'modal_to'], lessonId: 'b1-conditionals-2',
  },
  'b1.grammar.conditional.first_vs_second': {
    label: 'Réel ou imaginaire ? Premier ou deuxième conditionnel', band: 'B1+',
    pre: ['b1.grammar.conditional.second'], errorTags: ['wrong_tense'], lessonId: 'b1-conditionals-2',
  },
  // Unité 6 : passif et relatives
  'b1.grammar.passive.present': {
    label: 'Passif au présent : is / are + participe passé', band: 'B1',
    pre: ['b1.tense.present_perfect.form'], errorTags: ['missing_auxiliary', 'irregular_form', 'wrong_tense'], lessonId: 'b1-passive-relatives-1',
  },
  'b1.grammar.passive.past': {
    label: 'Passif au passé : was / were + participe passé (by…)', band: 'B1',
    pre: ['b1.grammar.passive.present'], errorTags: ['missing_auxiliary', 'irregular_form', 'wrong_preposition'], lessonId: 'b1-passive-relatives-1',
  },
  'b1.grammar.relative.defining': {
    label: 'Relatives : who, which, that', band: 'B1',
    pre: ['grammar.pronouns'], errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'b1-passive-relatives-2',
  },
  'b1.grammar.relative.where_whose': {
    label: 'Relatives : where et whose', band: 'B1+',
    pre: ['b1.grammar.relative.defining'], errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'b1-passive-relatives-2',
  },
  // Unité 7 : modaux
  'b1.modals.deduction.must_cant': {
    label: 'Déduction certaine : must / can’t', band: 'B1+',
    pre: ['modals.must_have_to', 'modals.can'], errorTags: ['wrong_choice', 'modal_to'], lessonId: 'b1-modals-1',
  },
  'b1.modals.deduction.might_could': {
    label: 'Possibilité : might / may / could', band: 'B1',
    pre: ['modals.can'], errorTags: ['wrong_choice', 'modal_to'], lessonId: 'b1-modals-1',
  },
  'b1.modals.obligation_review': {
    label: 'should, have to, don’t have to, mustn’t', band: 'B1',
    pre: ['modals.must_have_to', 'modals.should'], errorTags: ['wrong_choice', 'modal_to', 'third_person_s'], lessonId: 'b1-modals-2',
  },
  'b1.modals.be_able_to': {
    label: 'be able to : la capacité à tous les temps', band: 'B1',
    pre: ['modals.can'], errorTags: ['modal_to', 'wrong_tense'], lessonId: 'b1-modals-2',
  },
  // Unité 8 : discours rapporté, constructions verbales, phrasal verbs
  'b1.grammar.reported.statements': {
    label: 'Discours rapporté : concordance des temps', band: 'B1+',
    pre: ['tense.past_simple.irregular', 'tense.future.will'], errorTags: ['wrong_tense', 'wrong_pronoun'], lessonId: 'b1-reported-verbs-1',
  },
  'b1.grammar.reported.say_tell': {
    label: 'say ou tell ?', band: 'B1',
    pre: ['grammar.pronouns'], errorTags: ['wrong_choice', 'wrong_preposition'], lessonId: 'b1-reported-verbs-1',
  },
  'b1.grammar.verb_patterns': {
    label: 'Verbe + -ing ou verbe + to (enjoy, decide, avoid…)', band: 'B1',
    pre: ['tense.present_simple.form'], errorTags: ['wrong_choice', 'modal_to'], lessonId: 'b1-reported-verbs-2',
  },
  'b1.vocab.phrasal_verbs': {
    label: 'Phrasal verbs courants (look after, give up, find out…)', band: 'B1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_preposition'], lessonId: 'b1-reported-verbs-2',
  },
};
