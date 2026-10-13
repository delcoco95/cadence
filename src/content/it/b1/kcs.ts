import type { KcDef } from '../../level';

/** Notions du niveau B1 d'italien (préfixe `it.b1.`), prérequis internes au niveau. */
export const KCS_B1: Record<string, KcDef> = {
  // Unité 1 : conditionnel
  'it.b1.tense.conditional_form': {
    label: 'Conditionnel présent régulier (parlerei, prenderemmo)', band: 'B1', domain: 'grammar',
    errorTags: ['wrong_tense', 'spelling'], lessonId: 'it-b1-condizionale-1',
  },
  'it.b1.function.polite_requests': {
    label: 'Demander poliment et exprimer un souhait (vorrei, potrebbe, mi piacerebbe)', band: 'B1', domain: 'function',
    pre: ['it.b1.tense.conditional_form'], errorTags: ['wrong_choice', 'wrong_tense'], lessonId: 'it-b1-condizionale-1',
  },
  'it.b1.tense.conditional_irregular': {
    label: 'Conditionnel irrégulier (sarei, avrei, andrei, verrei, berrei)', band: 'B1', domain: 'grammar',
    pre: ['it.b1.tense.conditional_form'], errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'it-b1-condizionale-2',
  },
  'it.b1.function.advice': {
    label: 'Conseiller : dovresti, al posto tuo, sarebbe meglio', band: 'B1', domain: 'function',
    pre: ['it.b1.tense.conditional_irregular'], errorTags: ['wrong_tense', 'modal_to'], lessonId: 'it-b1-condizionale-2',
  },
  // Unité 2 : subjonctif présent
  'it.b1.mood.subjunctive_form': {
    label: 'Subjonctif présent régulier (parli, prenda, parta, finisca)', band: 'B1', domain: 'grammar',
    errorTags: ['subjunctive', 'spelling'], lessonId: 'it-b1-congiuntivo-1',
  },
  'it.b1.mood.subjunctive_opinion': {
    label: 'Subjonctif après penso che, credo che, mi sembra che', band: 'B1', domain: 'grammar',
    pre: ['it.b1.mood.subjunctive_form'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-b1-congiuntivo-1',
  },
  'it.b1.mood.subjunctive_irregular': {
    label: 'Subjonctif irrégulier (sia, abbia, faccia, vada, venga, possa)', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.mood.subjunctive_form'], errorTags: ['irregular_form', 'subjunctive'], lessonId: 'it-b1-congiuntivo-2',
  },
  'it.b1.mood.subjunctive_will': {
    label: 'Subjonctif après voglio che, spero che, è importante che, bisogna che', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.mood.subjunctive_irregular', 'it.b1.mood.subjunctive_opinion'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'it-b1-congiuntivo-2',
  },
  // Unité 3 : pronoms combinés
  'it.b1.pronouns.combined_forms': {
    label: 'Pronoms combinés : me lo, te la, ce li, ve le', band: 'B1', domain: 'grammar',
    errorTags: ['clitic_pronoun', 'word_order'], lessonId: 'it-b1-pronomi-combinati-1',
  },
  'it.b1.pronouns.glielo': {
    label: 'glielo, gliela, glieli, gliele (à lui, à elle, à vous)', band: 'B1', domain: 'grammar',
    pre: ['it.b1.pronouns.combined_forms'], errorTags: ['clitic_pronoun', 'spelling'], lessonId: 'it-b1-pronomi-combinati-1',
  },
  'it.b1.pronouns.combined_position': {
    label: 'Place des pronoms : dimmelo, devo dirtelo, me lo dia', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.pronouns.glielo'], errorTags: ['clitic_pronoun', 'word_order'], lessonId: 'it-b1-pronomi-combinati-2',
  },
  'it.b1.pronouns.combined_ne': {
    label: 'Combinaisons avec ne : me ne, gliene, ce n’è, ce ne sono', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.pronouns.combined_forms'], errorTags: ['clitic_pronoun'], lessonId: 'it-b1-pronomi-combinati-2',
  },
  // Unité 4 : relatives
  'it.b1.grammar.relative_che': {
    label: 'Relatif che (qui, que)', band: 'B1', domain: 'grammar',
    errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'it-b1-relative-1',
  },
  'it.b1.grammar.relative_cui': {
    label: 'Préposition + cui ; il cui (dont)', band: 'B1', domain: 'grammar',
    pre: ['it.b1.grammar.relative_che'], errorTags: ['wrong_preposition', 'wrong_pronoun'], lessonId: 'it-b1-relative-1',
  },
  'it.b1.grammar.relative_quale': {
    label: 'il quale, la quale, del quale, alle quali…', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.grammar.relative_cui'], errorTags: ['gender_agreement', 'article_wrong'], lessonId: 'it-b1-relative-2',
  },
  'it.b1.grammar.relative_chi': {
    label: 'chi (celui qui), quello che / ciò che (ce que)', band: 'B1', domain: 'grammar',
    pre: ['it.b1.grammar.relative_che'], errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'it-b1-relative-2',
  },
  // Unité 5 : raconter
  'it.b1.tense.trapassato': {
    label: 'Trapassato prossimo (avevo fatto, ero partito)', band: 'B1', domain: 'grammar',
    errorTags: ['wrong_tense', 'wrong_auxiliary', 'gender_agreement'], lessonId: 'it-b1-racconto-1',
  },
  'it.b1.tense.past_sequence': {
    label: 'Enchaîner passato prossimo, imperfetto et trapassato', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.tense.trapassato'], errorTags: ['wrong_tense'], lessonId: 'it-b1-racconto-1',
  },
  'it.b1.tense.passato_remoto_recognition': {
    label: 'Reconnaître le passato remoto (fu, nacque, disse, visse)', band: 'B1', domain: 'grammar',
    errorTags: ['irregular_form', 'listening_misunderstanding'], lessonId: 'it-b1-racconto-2',
  },
  'it.b1.function.storytelling': {
    label: 'Raconter : mentre, all’improvviso, a un certo punto, alla fine', band: 'B1', domain: 'function',
    pre: ['it.b1.tense.past_sequence'], errorTags: ['wrong_tense', 'vocabulary_missing'], lessonId: 'it-b1-racconto-2',
  },
  // Unité 6 : impersonnel et passif
  'it.b1.grammar.si_impersonale': {
    label: 'si impersonnel (si vive, si è stanchi, ci si alza)', band: 'B1', domain: 'grammar',
    errorTags: ['wrong_pronoun', 'gender_agreement'], lessonId: 'it-b1-impersonale-1',
  },
  'it.b1.grammar.si_passivante': {
    label: 'si passivant : accord du verbe (si vendono case)', band: 'B1', domain: 'grammar',
    pre: ['it.b1.grammar.si_impersonale'], errorTags: ['plural_form', 'wrong_choice'], lessonId: 'it-b1-impersonale-1',
  },
  'it.b1.grammar.passive_essere_venire': {
    label: 'Passif avec essere ou venire, complément d’agent da', band: 'B1+', domain: 'grammar',
    errorTags: ['wrong_auxiliary', 'wrong_preposition', 'gender_agreement'], lessonId: 'it-b1-impersonale-2',
  },
  'it.b1.grammar.passive_compound': {
    label: 'Passif aux temps composés (è stato costruito)', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.grammar.passive_essere_venire'], errorTags: ['wrong_auxiliary', 'gender_agreement'], lessonId: 'it-b1-impersonale-2',
  },
  // Unité 7 : hypothèses
  'it.b1.grammar.hypothesis_real': {
    label: 'Hypothèse réelle : se + présent / futur', band: 'B1', domain: 'grammar',
    errorTags: ['wrong_tense'], lessonId: 'it-b1-ipotesi-1',
  },
  'it.b1.mood.imperfect_subjunctive': {
    label: 'Subjonctif imparfait (parlassi, fossi, avessi, facessi)', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.mood.subjunctive_form'], errorTags: ['subjunctive', 'irregular_form'], lessonId: 'it-b1-ipotesi-1',
  },
  'it.b1.grammar.hypothesis_possible': {
    label: 'Hypothèse possible : se + subjonctif imparfait, conditionnel', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.mood.imperfect_subjunctive', 'it.b1.tense.conditional_form', 'it.b1.grammar.hypothesis_real'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-b1-ipotesi-2',
  },
  // Unité 8 : relier et rapporter
  'it.b1.discourse.cause_consequence': {
    label: 'Cause et conséquence : perché, siccome, dato che, quindi', band: 'B1', domain: 'function',
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'it-b1-discorso-1',
  },
  'it.b1.discourse.contrast_concession': {
    label: 'Opposition et concession : però, invece, mentre, anche se', band: 'B1', domain: 'function',
    errorTags: ['wrong_choice'], lessonId: 'it-b1-discorso-1',
  },
  'it.b1.discourse.reported_statements': {
    label: 'Discours rapporté au présent : dice che…, dice di + infinitif', band: 'B1', domain: 'grammar',
    errorTags: ['wrong_pronoun', 'wrong_tense'], lessonId: 'it-b1-discorso-2',
  },
  'it.b1.discourse.reported_questions': {
    label: 'Questions rapportées : chiede se…, vuole sapere dove…', band: 'B1+', domain: 'grammar',
    pre: ['it.b1.discourse.reported_statements'], errorTags: ['word_order', 'wrong_choice'], lessonId: 'it-b1-discorso-2',
  },
};
