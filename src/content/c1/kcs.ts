import type { KcDef } from '../level';

/** Notions du niveau C1 ; les prérequis renvoient aux notions A2 ou à d'autres notions C1. */
export const KCS_C1: Record<string, KcDef> = {
  'c1.inversion.negative_adverbials': {
    label: 'Inversion après un adverbe négatif (Never have I…, Not only…)', band: 'C1', pre: ['grammar.questions.wh'],
    errorTags: ['word_order', 'missing_auxiliary', 'auxiliary_with_inflected_verb'], lessonId: 'c1-inversion-1',
  },
  'c1.inversion.time_clauses': {
    label: 'Inversion temporelle (Hardly… when, No sooner… than, Not until…)', band: 'C1', pre: ['c1.inversion.negative_adverbials'],
    errorTags: ['word_order', 'wrong_choice', 'wrong_tense'], lessonId: 'c1-inversion-1',
  },
  'c1.inversion.conditional': {
    label: 'Inversion conditionnelle (Should you…, Had I known…, Were it not for…)', band: 'C1', pre: ['c1.inversion.negative_adverbials'],
    errorTags: ['word_order', 'wrong_auxiliary'], lessonId: 'c1-inversion-2',
  },
  'c1.inversion.so_such': {
    label: 'Inversion après so, such et only by', band: 'C1', pre: ['c1.inversion.negative_adverbials'],
    errorTags: ['word_order'], lessonId: 'c1-inversion-2',
  },
  'c1.cleft.it': {
    label: 'Phrases clivées en It is / was… that', band: 'C1', pre: ['grammar.pronouns'],
    errorTags: ['wrong_pronoun', 'word_order', 'wrong_tense'], lessonId: 'c1-cleft-1',
  },
  'c1.cleft.wh': {
    label: 'Pseudo-clivées (What I need is…, All I did was…)', band: 'C1', pre: ['c1.cleft.it'],
    errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'c1-cleft-2',
  },
  'c1.fronting': {
    label: 'Antéposition (Much as…, Strange as it may seem, Try as she might)', band: 'C1', pre: ['c1.cleft.wh'],
    errorTags: ['word_order'], lessonId: 'c1-cleft-2',
  },
  'c1.passive.reporting_it': {
    label: 'Passif impersonnel (It is said / believed that…)', band: 'C1', pre: ['tense.past_simple.irregular'],
    errorTags: ['missing_auxiliary', 'wrong_tense'], lessonId: 'c1-passive-1',
  },
  'c1.passive.reporting_personal': {
    label: 'Passif personnel (He is said to have…, There are thought to be…)', band: 'C1', pre: ['c1.passive.reporting_it'],
    errorTags: ['wrong_tense', 'word_order'], lessonId: 'c1-passive-1',
  },
  'c1.passive.advanced_forms': {
    label: 'Passif à toutes les formes (should have been done, being done)', band: 'C1', pre: ['tense.past_simple.irregular'],
    errorTags: ['wrong_auxiliary', 'wrong_tense', 'irregular_form'], lessonId: 'c1-passive-2',
  },
  'c1.passive.causative': {
    label: 'Faire faire : have / get something done, need + -ing', band: 'C1', pre: ['c1.passive.advanced_forms'],
    errorTags: ['word_order', 'irregular_form'], lessonId: 'c1-passive-2',
  },
  'c1.cond.mixed': {
    label: 'Conditionnels mixtes', band: 'C1', pre: ['tense.past_simple.irregular', 'tense.future.will'],
    errorTags: ['wrong_tense'], lessonId: 'c1-conditionals-1',
  },
  'c1.cond.alternatives': {
    label: 'Alternatives à if (provided, unless, otherwise, but for, in case)', band: 'C1', pre: ['c1.cond.mixed'],
    errorTags: ['wrong_choice', 'wrong_tense'], lessonId: 'c1-conditionals-1',
  },
  'c1.subjunctive.mandative': {
    label: 'Subjonctif après suggest, insist, essential…', band: 'C1', pre: ['c1.cond.mixed'],
    errorTags: ['third_person_s', 'modal_to'], lessonId: 'c1-conditionals-2',
  },
  'c1.unreal.past': {
    label: 'Irréel : it’s high time, wish / if only, as if', band: 'C1', pre: ['c1.cond.mixed'],
    errorTags: ['wrong_tense'], lessonId: 'c1-conditionals-2',
  },
  'c1.participle.adverbial': {
    label: 'Propositions participiales (Feeling…, Written in…)', band: 'C1', pre: ['tense.present_continuous.form'],
    errorTags: ['word_order', 'wrong_choice'], lessonId: 'c1-participles-1',
  },
  'c1.participle.perfect': {
    label: 'Participe parfait (Having done, Having been done)', band: 'C1', pre: ['c1.participle.adverbial'],
    errorTags: ['wrong_tense', 'irregular_form'], lessonId: 'c1-participles-1',
  },
  'c1.participle.reduced_relative': {
    label: 'Relatives réduites (people living…, the report published…)', band: 'C1', pre: ['c1.participle.adverbial'],
    errorTags: ['wrong_choice', 'missing_auxiliary'], lessonId: 'c1-participles-2',
  },
  'c1.participle.absolute': {
    label: 'Constructions absolues (With prices rising…, Weather permitting)', band: 'C1', pre: ['c1.participle.adverbial'],
    errorTags: ['word_order', 'wrong_choice'], lessonId: 'c1-participles-2',
  },
  'c1.modal.need_past': {
    label: 'needn’t have ou didn’t need to ?', band: 'C1', pre: ['modals.must_have_to'],
    errorTags: ['wrong_tense', 'modal_to'], lessonId: 'c1-modality-1',
  },
  'c1.modal.deduction_past': {
    label: 'Modaux au passé : must / can’t / might / should have', band: 'C1', pre: ['modals.must_have_to', 'modals.should', 'modals.can'],
    errorTags: ['wrong_tense', 'irregular_form'], lessonId: 'c1-modality-1',
  },
  'c1.modal.expectation': {
    label: 'be supposed to, be bound to, would rather + prétérit', band: 'C1', pre: ['c1.modal.deduction_past'],
    errorTags: ['wrong_tense', 'modal_to'], lessonId: 'c1-modality-1',
  },
  'c1.hedging.verbs': {
    label: 'Nuancer avec les verbes (appear, seem, tend to, may well)', band: 'C1', pre: ['c1.modal.deduction_past'],
    errorTags: ['wrong_choice', 'modal_to'], lessonId: 'c1-modality-2', domain: 'writing',
  },
  'c1.hedging.adverbs': {
    label: 'Nuancer avec adverbes et expressions (arguably, likely, to some extent)', band: 'C1', pre: ['c1.hedging.verbs'],
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'c1-modality-2', domain: 'writing',
  },
  'c1.cohesion.substitution': {
    label: 'Substitution (so / not, do so, one / ones, the latter)', band: 'C1', pre: ['grammar.pronouns'],
    errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'c1-cohesion-1',
  },
  'c1.cohesion.ellipsis': {
    label: 'Ellipse (I’d love to, she did, than I do)', band: 'C1', pre: ['grammar.auxiliary.do'],
    errorTags: ['missing_auxiliary', 'wrong_auxiliary'], lessonId: 'c1-cohesion-1',
  },
  'c1.linkers.advanced': {
    label: 'Connecteurs soutenus (albeit, hence, insofar as, notwithstanding)', band: 'C1', pre: ['c1.cohesion.substitution'],
    errorTags: ['wrong_choice'], lessonId: 'c1-cohesion-2', domain: 'writing',
  },
  'c1.nominalisation': {
    label: 'Nominalisation et prépositions des noms (a rise in, an impact on)', band: 'C1', pre: ['c1.linkers.advanced'],
    errorTags: ['wrong_preposition', 'vocabulary_missing'], lessonId: 'c1-cohesion-2', domain: 'writing',
  },
  'c1.register.formality': {
    label: 'Registre formel et informel', band: 'C1',
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'c1-register-1', domain: 'function',
  },
  'c1.collocations': {
    label: 'Collocations (heavy rain, deeply concerned, meet a deadline)', band: 'C1',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'c1-register-1', domain: 'vocabulary',
  },
  'c1.phrasal_verbs': {
    label: 'Verbes à particule aux sens nuancés', band: 'C1',
    errorTags: ['wrong_preposition', 'vocabulary_missing'], lessonId: 'c1-register-2', domain: 'vocabulary',
  },
  'c1.idioms': {
    label: 'Expressions idiomatiques', band: 'C1', pre: ['c1.collocations'],
    errorTags: ['vocabulary_missing'], lessonId: 'c1-register-2', domain: 'vocabulary',
  },
};
