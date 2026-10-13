import type { KcDef } from '../../level';

/** Notions du niveau C1 d'italien (préfixe `it.c1.`), prérequis internes au niveau. */
export const KCS_C1: Record<string, KcDef> = {
  // Unité 1 : subjonctif avancé
  'it.c1.grammar.subjunctive_relatives': {
    label: 'Relative au subjonctif : cerco qualcuno che sappia, non c’è nessuno che possa', band: 'C1', domain: 'grammar',
    errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-c1-congiuntivo-1',
  },
  'it.c1.grammar.subjunctive_superlatives': {
    label: 'Subjonctif après superlatif et unico, solo, primo : il più bello che abbia mai visto', band: 'C1', domain: 'grammar',
    pre: ['it.c1.grammar.subjunctive_relatives'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-c1-congiuntivo-1',
  },
  'it.c1.grammar.indefinite_subjunctive': {
    label: 'Indéfinis + subjonctif : chiunque, qualunque, dovunque, comunque', band: 'C1', domain: 'grammar',
    errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'it-c1-congiuntivo-2',
  },
  'it.c1.grammar.subjunctive_fine_values': {
    label: 'Valeurs fines du subjonctif : il fatto che, non è che, che en tête, non so se', band: 'C1', domain: 'grammar',
    pre: ['it.c1.grammar.subjunctive_relatives'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-c1-congiuntivo-2',
  },
  // Unité 2 : supposer
  'it.c1.grammar.future_probability': {
    label: 'Futur de probabilité : sarà a casa, avrà trent’anni, sarà anche vero', band: 'C1', domain: 'grammar',
    errorTags: ['wrong_tense'], lessonId: 'it-c1-futuro-1',
  },
  'it.c1.grammar.future_perfect_supposition': {
    label: 'Futur antérieur de supposition : sarà già uscito, avrà perso il treno', band: 'C1', domain: 'grammar',
    pre: ['it.c1.grammar.future_probability'], errorTags: ['wrong_tense', 'wrong_auxiliary', 'gender_agreement'], lessonId: 'it-c1-futuro-1',
  },
  'it.c1.grammar.future_perfect_anteriority': {
    label: 'Futur antérieur d’antériorité : quando avrai finito, appena sarò arrivato', band: 'C1', domain: 'grammar',
    errorTags: ['wrong_tense', 'wrong_auxiliary'], lessonId: 'it-c1-futuro-2',
  },
  'it.c1.grammar.full_sequence': {
    label: 'Concordance complète : pensavo che sarebbe venuto (futur dans le passé)', band: 'C1', domain: 'grammar',
    pre: ['it.c1.grammar.future_perfect_anteriority'], errorTags: ['wrong_tense', 'subjunctive'], lessonId: 'it-c1-futuro-2',
  },
  // Unité 3 : registre formel
  'it.c1.function.formal_address': {
    label: 'Le Lei de politesse : La ringrazio, Le scrivo, si accomodi', band: 'C1', domain: 'function',
    errorTags: ['wrong_pronoun', 'clitic_pronoun'], lessonId: 'it-c1-registro-1',
  },
  'it.c1.writing.formal_correspondence': {
    label: 'Lettre et courriel formels : Gentile, in riferimento a, in attesa di un Suo riscontro', band: 'C1', domain: 'writing',
    pre: ['it.c1.function.formal_address'], errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'it-c1-registro-1',
  },
  'it.c1.vocabulary.bureaucratic_language': {
    label: 'Langue administrative : compilare, inoltrare, pervenire, entro e non oltre', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c1-registro-2',
  },
  'it.c1.grammar.formal_impersonal': {
    label: 'Tournures impersonnelles formelles : si prega di, è fatto divieto di, sono pregati di', band: 'C1', domain: 'grammar',
    pre: ['it.c1.vocabulary.bureaucratic_language'], errorTags: ['wrong_preposition', 'wrong_choice'], lessonId: 'it-c1-registro-2',
  },
  // Unité 4 : passato remoto
  'it.c1.grammar.passato_remoto_regular': {
    label: 'Passato remoto régulier : parlò, credette, partì', band: 'C1', domain: 'grammar',
    errorTags: ['spelling', 'wrong_tense'], lessonId: 'it-c1-passato-remoto-1',
  },
  'it.c1.grammar.passato_remoto_irregular': {
    label: 'Passato remoto irrégulier (schéma 1-3-3) : ebbe, fu, disse, nacque, vide', band: 'C1', domain: 'grammar',
    pre: ['it.c1.grammar.passato_remoto_regular'], errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'it-c1-passato-remoto-1',
  },
  'it.c1.grammar.narrative_tenses': {
    label: 'Temps du récit écrit : passato remoto, imperfetto, trapassato remoto (ebbe finito)', band: 'C1', domain: 'grammar',
    pre: ['it.c1.grammar.passato_remoto_irregular'], errorTags: ['wrong_tense', 'wrong_auxiliary'], lessonId: 'it-c1-passato-remoto-2',
  },
  // Unité 5 : cohésion
  'it.c1.grammar.formal_connectors': {
    label: 'Connecteurs : pertanto, tuttavia, ciononostante, infatti, bensì, anzi, eppure', band: 'C1', domain: 'grammar',
    errorTags: ['wrong_choice'], lessonId: 'it-c1-coesione-1',
  },
  'it.c1.grammar.anaphora_reference': {
    label: 'Reprises : il che, ciò, quest’ultimo, il primo… il secondo, tale', band: 'C1', domain: 'grammar',
    errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'it-c1-coesione-2',
  },
  'it.c1.vocabulary.nominalization': {
    label: 'Nominalisation : l’aumento, la chiusura, la crescita, il rinvio', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'article_wrong'], lessonId: 'it-c1-coesione-2',
  },
  // Unité 6 : expressions idiomatiques
  'it.c1.vocabulary.idioms_body_food': {
    label: 'Idiomes du corps et de la table : in bocca al lupo, essere in gamba, a fagiolo', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c1-espressioni-1',
  },
  'it.c1.vocabulary.idioms_everyday': {
    label: 'Locutions du quotidien : essere al verde, prendere un granchio, non vedere l’ora', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c1-espressioni-2',
  },
  'it.c1.vocabulary.idiomatic_pronominal_verbs': {
    label: 'Verbes à pronoms figés : farla franca, darsela a gambe, avercela con, passarla liscia', band: 'C1', domain: 'vocabulary',
    pre: ['it.c1.vocabulary.idioms_everyday'], errorTags: ['clitic_pronoun', 'gender_agreement', 'wrong_auxiliary'], lessonId: 'it-c1-espressioni-2',
  },
  // Unité 7 : argumenter
  'it.c1.function.hedging': {
    label: 'Nuancer : magari, a quanto pare, non è detto che, tutto sommato', band: 'C1', domain: 'function',
    errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'it-c1-argomentare-1',
  },
  'it.c1.grammar.hypothetical_connectors': {
    label: 'Envisager : qualora, ammesso che, semmai, se dovesse + infinitif', band: 'C1', domain: 'grammar',
    errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-c1-argomentare-1',
  },
  'it.c1.function.concede_refute': {
    label: 'Concéder et réfuter : sarà pure, resta il fatto che, non tanto… quanto, non che', band: 'C1', domain: 'function',
    pre: ['it.c1.function.hedging'], errorTags: ['wrong_choice', 'subjunctive'], lessonId: 'it-c1-argomentare-2',
  },
  // Unité 8 : mise en relief
  'it.c1.grammar.dislocation': {
    label: 'Dislocations avec reprise : il caffè lo prendo amaro, di soldi non ne ho', band: 'C1', domain: 'grammar',
    errorTags: ['clitic_pronoun', 'word_order'], lessonId: 'it-c1-enfasi-1',
  },
  'it.c1.grammar.marked_order': {
    label: 'Sujet postposé et focalisation : pago io, l’ha detto lui, questo sì che', band: 'C1', domain: 'grammar',
    errorTags: ['word_order', 'wrong_pronoun'], lessonId: 'it-c1-enfasi-1',
  },
  'it.c1.grammar.cleft_sentences': {
    label: 'Phrases clivées : è stato lui a, sono io che, quello che conta è', band: 'C1', domain: 'grammar',
    pre: ['it.c1.grammar.marked_order'], errorTags: ['word_order', 'wrong_preposition'], lessonId: 'it-c1-enfasi-2',
  },
};
