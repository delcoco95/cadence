import type { KcDef } from '../level';

/** Notions du niveau C2. Les prérequis pointent vers des notions A2 ou C2 uniquement. */
export const KCS_C2: Record<string, KcDef> = {
  // Unité 1 : temps et aspect
  'c2.aspect.distancing': {
    label: 'Passé de distance pour la politesse (I was wondering…, Did you want…?)',
    band: 'C2', pre: ['tense.past_simple.regular', 'modals.could_request'],
    errorTags: ['wrong_tense', 'word_order'], lessonId: 'c2-aspect-1', domain: 'function',
  },
  'c2.aspect.historic_present': {
    label: 'Présent de narration (anecdotes, résumés, titres de presse)',
    band: 'C2', pre: ['tense.present_simple.usage', 'tense.past_simple.irregular'],
    errorTags: ['wrong_tense'], lessonId: 'c2-aspect-1',
  },
  'c2.aspect.future_in_past': {
    label: 'Futur dans le passé (was going to, would, was to have done, was about to)',
    band: 'C2', pre: ['tense.future.going_to', 'tense.future.will'],
    errorTags: ['wrong_tense', 'wrong_auxiliary'], lessonId: 'c2-aspect-2',
  },
  'c2.aspect.stative_dynamic': {
    label: 'Verbes d’état employés dynamiquement (be being, I’m seeing, I’m thinking of)',
    band: 'C2', pre: ['tense.contrast.simple_vs_continuous'],
    errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'c2-aspect-2',
  },

  // Unité 2 : inversion et mise en relief
  'c2.inversion.negative': {
    label: 'Inversion après une expression négative (Never have I…, Little did they know…)',
    band: 'C2', pre: ['grammar.auxiliary.do', 'grammar.questions.wh'],
    errorTags: ['word_order', 'missing_auxiliary'], lessonId: 'c2-inversion-1',
  },
  'c2.inversion.time': {
    label: 'Inversion temporelle et restrictive (Hardly… when, No sooner… than, Only when…)',
    band: 'C2', pre: ['c2.inversion.negative'],
    errorTags: ['word_order', 'wrong_choice', 'wrong_tense'], lessonId: 'c2-inversion-1',
  },
  'c2.inversion.so_such': {
    label: 'So + adjectif + inversion, Such was… that',
    band: 'C2', pre: ['c2.inversion.negative'],
    errorTags: ['word_order'], lessonId: 'c2-inversion-2',
  },
  'c2.inversion.fronting': {
    label: 'Inversion conditionnelle, antéposition et formules figées (Had I known, Come what may)',
    band: 'C2', pre: ['c2.inversion.negative'],
    errorTags: ['word_order', 'wrong_choice'], lessonId: 'c2-inversion-2',
  },

  // Unité 3 : modalité et position
  'c2.modality.likelihood': {
    label: 'Probabilité nuancée (may well, be bound to, can’t possibly)',
    band: 'C2', pre: ['modals.can', 'modals.must_have_to'],
    errorTags: ['wrong_choice', 'modal_to'], lessonId: 'c2-stance-1',
  },
  'c2.modality.pragmatic': {
    label: 'Modaux pragmatiques (might as well, could hardly, I would have thought, You might have…)',
    band: 'C2', pre: ['modals.could_request', 'modals.should'],
    errorTags: ['wrong_choice', 'wrong_auxiliary'], lessonId: 'c2-stance-1', domain: 'function',
  },
  'c2.modality.dare_need': {
    label: 'Dare et need modaux (Need I say more?, She dared not, needn’t have)',
    band: 'C2', pre: ['modals.must_have_to'],
    errorTags: ['modal_to', 'third_person_s', 'missing_auxiliary'], lessonId: 'c2-stance-2',
  },
  'c2.modality.stance_adverbs': {
    label: 'Adverbes de position (arguably, admittedly, presumably, supposedly)',
    band: 'C2', pre: ['c2.modality.likelihood'],
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'c2-stance-2', domain: 'vocabulary',
  },

  // Unité 4 : registre académique
  'c2.academic.nominalisation': {
    label: 'Nominalisation et prépositions associées (a rise in, reliance on)',
    band: 'C2', pre: ['grammar.articles'],
    errorTags: ['wrong_preposition', 'vocabulary_missing'], lessonId: 'c2-academic-1', domain: 'writing',
  },
  'c2.academic.noun_phrases': {
    label: 'Groupes nominaux complexes (pré- et post-modification)',
    band: 'C2', pre: ['c2.academic.nominalisation'],
    errorTags: ['word_order', 'plural_form'], lessonId: 'c2-academic-1', domain: 'writing',
  },
  'c2.academic.hedging': {
    label: 'Atténuer une affirmation (suggest, appear to, it could be argued)',
    band: 'C2', pre: ['c2.modality.likelihood'],
    errorTags: ['wrong_choice'], lessonId: 'c2-academic-2', domain: 'writing',
  },
  'c2.academic.boosting': {
    label: 'Renforcer une affirmation (clearly, undoubtedly, demonstrate)',
    band: 'C2', pre: ['c2.academic.hedging'],
    errorTags: ['wrong_choice'], lessonId: 'c2-academic-2', domain: 'writing',
  },

  // Unité 5 : cohésion et concession
  'c2.cohesion.ellipsis': {
    label: 'Ellipse (she did, I’d love to, than expected, if so)',
    band: 'C2', pre: ['grammar.auxiliary.do'],
    errorTags: ['missing_auxiliary', 'modal_to'], lessonId: 'c2-cohesion-1',
  },
  'c2.cohesion.substitution': {
    label: 'Substitution (I think so, I hope not, do so, ones, that of, the former)',
    band: 'C2', pre: ['grammar.pronouns'],
    errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'c2-cohesion-1',
  },
  'c2.concession.advanced': {
    label: 'Concession soutenue (much as, for all, granted, albeit)',
    band: 'C2', pre: ['c2.cohesion.substitution'],
    errorTags: ['wrong_choice', 'wrong_preposition'], lessonId: 'c2-cohesion-2', domain: 'function',
  },
  'c2.concession.fronted': {
    label: 'Concession par antéposition (Tired as she was, Try as I might)',
    band: 'C2', pre: ['c2.concession.advanced', 'c2.inversion.negative'],
    errorTags: ['word_order'], lessonId: 'c2-cohesion-2',
  },

  // Unité 6 : langage imagé
  'c2.figurative.idioms': {
    label: 'Expressions idiomatiques avancées',
    band: 'C2', pre: [],
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'c2-figurative-1', domain: 'vocabulary',
  },
  'c2.figurative.metaphor': {
    label: 'Métaphores conceptuelles (food for thought, shoot down an idea)',
    band: 'C2', pre: ['c2.figurative.idioms'],
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'c2-figurative-1', domain: 'reading',
  },
  'c2.figurative.understatement': {
    label: 'Litote et ironie (a bit of a challenge, not exactly cheap)',
    band: 'C2', pre: ['c2.figurative.idioms'],
    errorTags: ['listening_misunderstanding', 'wrong_choice'], lessonId: 'c2-figurative-2', domain: 'function',
  },
  'c2.figurative.euphemism': {
    label: 'Euphémismes courants (between jobs, pre-owned, let go)',
    band: 'C2', pre: ['c2.figurative.idioms'],
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'c2-figurative-2', domain: 'vocabulary',
  },

  // Unité 7 : précision lexicale
  'c2.lexis.affixes': {
    label: 'Préfixes porteurs de sens (mis-, counter-, out-, over-, under-)',
    band: 'C2', pre: [],
    errorTags: ['spelling', 'vocabulary_missing'], lessonId: 'c2-lexis-1', domain: 'vocabulary',
  },
  'c2.lexis.word_families': {
    label: 'Suffixes et familles de mots (awareness, reliability, clarify)',
    band: 'C2', pre: ['c2.lexis.affixes'],
    errorTags: ['spelling', 'vocabulary_missing'], lessonId: 'c2-lexis-1', domain: 'vocabulary',
  },
  'c2.lexis.connotation': {
    label: 'Quasi-synonymes et connotation (thrifty / stingy, assertive / pushy)',
    band: 'C2', pre: [],
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'c2-lexis-2', domain: 'vocabulary',
  },
  'c2.lexis.collocation': {
    label: 'Collocations précises (meet a deadline, bitterly cold, strike a balance)',
    band: 'C2', pre: [],
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'c2-lexis-2', domain: 'vocabulary',
  },

  // Unité 8 : phrasal verbs, expressions et registres
  'c2.phrasal.advanced': {
    label: 'Phrasal verbs avancés (iron out, gloss over, live up to, factor in)',
    band: 'C2', pre: [],
    errorTags: ['wrong_preposition', 'word_order', 'vocabulary_missing'], lessonId: 'c2-register-1', domain: 'vocabulary',
  },
  'c2.phrasal.fixed_expressions': {
    label: 'Expressions figées et binômes (by and large, touch and go, for the time being)',
    band: 'C2', pre: [],
    errorTags: ['vocabulary_missing', 'word_order'], lessonId: 'c2-register-1', domain: 'vocabulary',
  },
  'c2.register.shifting': {
    label: 'Passer du registre familier au registre soutenu',
    band: 'C2', pre: ['c2.phrasal.advanced'],
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'c2-register-2', domain: 'writing',
  },
  'c2.register.discourse_markers': {
    label: 'Marqueurs du discours oral (mind you, as it happens, having said that)',
    band: 'C2', pre: [],
    errorTags: ['wrong_choice'], lessonId: 'c2-register-2', domain: 'speaking',
  },
};
