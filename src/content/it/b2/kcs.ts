import type { KcDef } from '../../level';

/** Notions du niveau B2 d'italien (préfixe `it.b2.`), prérequis internes au niveau. */
export const KCS_B2: Record<string, KcDef> = {
  // Unité 1 : subjonctif (2)
  'it.b2.grammar.subjunctive_past': {
    label: 'Congiuntivo passato : penso che sia partito, che abbia capito', band: 'B2', domain: 'grammar',
    errorTags: ['subjunctive', 'wrong_auxiliary', 'gender_agreement'], lessonId: 'it-b2-congiuntivo-1',
  },
  'it.b2.grammar.subjunctive_imperfect': {
    label: 'Congiuntivo imperfetto : volevo che tu venissi, vorrei che fosse', band: 'B2', domain: 'grammar',
    errorTags: ['subjunctive', 'wrong_tense', 'irregular_form'], lessonId: 'it-b2-congiuntivo-1',
  },
  'it.b2.grammar.subjunctive_pluperfect': {
    label: 'Congiuntivo trapassato : pensavo che fosse già partito', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.subjunctive_imperfect', 'it.b2.grammar.subjunctive_past'], errorTags: ['subjunctive', 'wrong_tense', 'wrong_auxiliary'], lessonId: 'it-b2-congiuntivo-2',
  },
  'it.b2.grammar.sequence_of_tenses': {
    label: 'Concordance des temps au subjonctif et futur dans le passé', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.subjunctive_pluperfect'], errorTags: ['wrong_tense', 'subjunctive'], lessonId: 'it-b2-congiuntivo-2',
  },
  // Unité 2 : irréel du passé
  'it.b2.grammar.unreal_past_conditional': {
    label: 'Période hypothétique irréelle : se avessi saputo, sarei venuto', band: 'B2', domain: 'grammar',
    pre: ['it.b2.grammar.subjunctive_pluperfect', 'it.b2.grammar.conditional_past'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-b2-ipotesi-1',
  },
  'it.b2.grammar.mixed_conditionals': {
    label: 'Hypothèses mixtes : se avessi studiato, ora farei il medico', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.unreal_past_conditional'], errorTags: ['wrong_tense', 'subjunctive'], lessonId: 'it-b2-ipotesi-2',
  },
  'it.b2.function.wishes_as_if': {
    label: 'Souhaits et regrets : magari, se solo, come se + subjonctif', band: 'B2', domain: 'function',
    pre: ['it.b2.grammar.subjunctive_imperfect', 'it.b2.grammar.subjunctive_pluperfect'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-b2-ipotesi-2',
  },
  // Unité 3 : conditionnel passé
  'it.b2.grammar.conditional_past': {
    label: 'Condizionale passato : regret, reproche (avrei voluto, avresti dovuto)', band: 'B2', domain: 'grammar',
    errorTags: ['wrong_auxiliary', 'spelling', 'clitic_pronoun'], lessonId: 'it-b2-condizionale-passato-1',
  },
  'it.b2.grammar.future_in_the_past': {
    label: 'Futur dans le passé : ha detto che sarebbe venuto', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.conditional_past'], errorTags: ['wrong_tense'], lessonId: 'it-b2-condizionale-passato-2',
  },
  'it.b2.function.unconfirmed_news': {
    label: 'Information non confirmée : secondo la polizia, sarebbe fuggito', band: 'B2', domain: 'function',
    pre: ['it.b2.grammar.conditional_past'], errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'it-b2-condizionale-passato-2',
  },
  // Unité 4 : discours indirect
  'it.b2.grammar.reported_statements': {
    label: 'Discours indirect au passé : concordance des temps', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.future_in_the_past', 'it.b2.grammar.sequence_of_tenses'], errorTags: ['wrong_tense', 'wrong_pronoun'], lessonId: 'it-b2-indiretto-1',
  },
  'it.b2.grammar.reported_time_place': {
    label: 'Repères décalés : il giorno dopo, quel giorno, lì', band: 'B2', domain: 'grammar',
    pre: ['it.b2.grammar.reported_statements'], errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'it-b2-indiretto-1',
  },
  'it.b2.grammar.reported_questions': {
    label: 'Questions rapportées : mi ha chiesto se ero / fossi libero', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.reported_statements'], errorTags: ['wrong_tense', 'subjunctive', 'word_order'], lessonId: 'it-b2-indiretto-2',
  },
  'it.b2.grammar.reported_commands': {
    label: 'Ordres rapportés : mi ha detto di aspettare', band: 'B2', domain: 'grammar',
    pre: ['it.b2.grammar.reported_statements'], errorTags: ['wrong_preposition', 'clitic_pronoun'], lessonId: 'it-b2-indiretto-2',
  },
  // Unité 5 : passif
  'it.b2.grammar.passive_venire': {
    label: 'Passif avec essere et venire, complément d’agent avec da', band: 'B2', domain: 'grammar',
    errorTags: ['wrong_auxiliary', 'gender_agreement', 'wrong_preposition'], lessonId: 'it-b2-passivo-1',
  },
  'it.b2.grammar.passive_andare': {
    label: 'andare + participe : obligation (va fatto) et perte (è andato perso)', band: 'B2', domain: 'grammar',
    pre: ['it.b2.grammar.passive_venire'], errorTags: ['wrong_auxiliary', 'gender_agreement'], lessonId: 'it-b2-passivo-2',
  },
  'it.b2.grammar.si_passivante': {
    label: 'si passivant : si vendono case, si sono vendute', band: 'B2', domain: 'grammar',
    pre: ['it.b2.grammar.passive_venire'], errorTags: ['plural_form', 'gender_agreement', 'wrong_auxiliary'], lessonId: 'it-b2-passivo-2',
  },
  // Unité 6 : formes implicites
  'it.b2.grammar.gerund_clauses': {
    label: 'Gerundio présent et passé : temps, cause, moyen, hypothèse, pur', band: 'B2', domain: 'grammar',
    errorTags: ['wrong_preposition', 'wrong_auxiliary', 'clitic_pronoun'], lessonId: 'it-b2-forme-implicite-1',
  },
  'it.b2.grammar.participle_clauses': {
    label: 'Participe passé seul : finita la cena, arrivati a casa', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.gerund_clauses'], errorTags: ['gender_agreement', 'word_order'], lessonId: 'it-b2-forme-implicite-2',
  },
  'it.b2.grammar.past_infinitive': {
    label: 'Infinitif passé : dopo aver mangiato, per essere arrivato', band: 'B2', domain: 'grammar',
    errorTags: ['wrong_auxiliary', 'gender_agreement', 'clitic_pronoun'], lessonId: 'it-b2-forme-implicite-2',
  },
  // Unité 7 : concession et condition
  'it.b2.grammar.concessive_clauses': {
    label: 'Concession : sebbene, benché, nonostante + subjonctif ; anche se + indicatif', band: 'B2', domain: 'grammar',
    pre: ['it.b2.grammar.subjunctive_imperfect'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'it-b2-connettivi-1',
  },
  'it.b2.grammar.conditional_conjunctions': {
    label: 'Condition : purché, a patto che, a meno che, qualora + subjonctif', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.grammar.subjunctive_imperfect', 'it.b2.grammar.sequence_of_tenses'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-b2-connettivi-2',
  },
  'it.b2.grammar.purpose_time_conjunctions': {
    label: 'But et antériorité : affinché, perché, prima che, senza che + subjonctif', band: 'B2', domain: 'grammar',
    pre: ['it.b2.grammar.subjunctive_imperfect'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'it-b2-connettivi-2',
  },
  // Unité 8 : verbes idiomatiques et suffixes
  'it.b2.vocabulary.pronominal_verbs': {
    label: 'Verbes pronominaux idiomatiques : andarsene, farcela, cavarsela, prendersela', band: 'B2', domain: 'vocabulary',
    errorTags: ['clitic_pronoun', 'vocabulary_missing'], lessonId: 'it-b2-lessico-1',
  },
  'it.b2.grammar.pronominal_verbs_compound': {
    label: 'Ces verbes aux temps composés : me la sono cavata, ce l’ho fatta', band: 'B2+', domain: 'grammar',
    pre: ['it.b2.vocabulary.pronominal_verbs'], errorTags: ['wrong_auxiliary', 'gender_agreement', 'clitic_pronoun'], lessonId: 'it-b2-lessico-1',
  },
  'it.b2.vocabulary.metterci_volerci': {
    label: 'metterci et volerci : ci metto un’ora, ci vogliono due ore', band: 'B2', domain: 'vocabulary',
    errorTags: ['wrong_choice', 'plural_form', 'wrong_auxiliary'], lessonId: 'it-b2-lessico-2',
  },
  'it.b2.vocabulary.suffixes': {
    label: 'Suffixes : -ino, -etto, -one, -accio, et faux suffixés', band: 'B2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-b2-lessico-2',
  },
};
