import type { KcDef } from '../../level';

/** Notions du niveau A1 d'italien (préfixe `it.a1.`), prérequis internes au niveau. */
export const KCS_A1: Record<string, KcDef> = {
  // Unité 1 : premiers mots
  'it.a1.function.greetings': {
    label: 'Saluer, se présenter, prendre congé (ciao, buongiorno, mi chiamo)', band: 'A1', domain: 'function',
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'it-a1-hello-1',
  },
  'it.a1.pronunciation.sounds': {
    label: 'Prononciation : c / g, ch / gh, gli, gn, sc, consonnes doubles', band: 'A1', domain: 'pronunciation',
    errorTags: ['pronunciation_intelligibility', 'spelling'], lessonId: 'it-a1-hello-1',
  },
  'it.a1.grammar.essere': {
    label: 'Le verbe essere au présent, nationalités', band: 'A1', domain: 'grammar',
    pre: ['it.a1.function.greetings'], errorTags: ['irregular_form', 'spelling', 'gender_agreement'], lessonId: 'it-a1-hello-2',
  },
  'it.a1.grammar.subject_pronouns': {
    label: 'Pronoms sujets, sujet omis, vouvoiement avec Lei', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.essere'], errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'it-a1-hello-2',
  },
  // Unité 2 : noms et articles indéfinis
  'it.a1.grammar.noun_gender': {
    label: 'Genre des noms (-o, -a, -e)', band: 'A1', domain: 'grammar',
    errorTags: ['gender_agreement'], lessonId: 'it-a1-nouns-1',
  },
  'it.a1.grammar.noun_plural': {
    label: 'Pluriel des noms (-i, -e, invariables, -che / -ghe)', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.noun_gender'], errorTags: ['plural_form', 'spelling'], lessonId: 'it-a1-nouns-1',
  },
  'it.a1.grammar.indefinite_articles': {
    label: 'Articles indéfinis : un, uno, una, un’', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.noun_gender'], errorTags: ['article_wrong', 'gender_agreement', 'spelling'], lessonId: 'it-a1-nouns-2',
  },
  // Unité 3 : articles définis
  'it.a1.grammar.definite_articles': {
    label: 'Articles définis : il, lo, la, l’, i, gli, le', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.noun_plural', 'it.a1.grammar.indefinite_articles'], errorTags: ['article_wrong', 'article_missing', 'gender_agreement'], lessonId: 'it-a1-articles-1',
  },
  'it.a1.grammar.c_e_ci_sono': {
    label: 'Il y a : c’è / ci sono ; dov’è / dove sono', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.definite_articles', 'it.a1.grammar.essere'], errorTags: ['wrong_choice', 'plural_form'], lessonId: 'it-a1-articles-2',
  },
  // Unité 4 : avoir et décrire
  'it.a1.grammar.avere': {
    label: 'Le verbe avere : possession, âge, avere fame / freddo…', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.subject_pronouns'], errorTags: ['irregular_form', 'spelling', 'wrong_choice'], lessonId: 'it-a1-avere-1',
  },
  'it.a1.grammar.adjective_agreement': {
    label: 'Accord et place des adjectifs, couleurs', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.noun_plural'], errorTags: ['gender_agreement', 'plural_form', 'word_order'], lessonId: 'it-a1-avere-2',
  },
  'it.a1.grammar.molto': {
    label: 'molto : très (invariable) ou beaucoup de (accordé)', band: 'A2', domain: 'grammar',
    pre: ['it.a1.grammar.adjective_agreement'], errorTags: ['gender_agreement', 'wrong_choice'], lessonId: 'it-a1-avere-2',
  },
  // Unité 5 : présent en -are
  'it.a1.grammar.present_are': {
    label: 'Présent des verbes en -are (-care, -gare, -iare)', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.subject_pronouns'], errorTags: ['wrong_tense', 'spelling'], lessonId: 'it-a1-present-are-1',
  },
  'it.a1.grammar.negation': {
    label: 'La négation avec non', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.present_are'], errorTags: ['word_order'], lessonId: 'it-a1-present-are-1',
  },
  'it.a1.grammar.questions': {
    label: 'Questions et mots interrogatifs (dove, quando, perché, quanto…)', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.present_are'], errorTags: ['word_order', 'wrong_choice', 'gender_agreement'], lessonId: 'it-a1-present-are-2',
  },
  // Unité 6 : présent en -ere / -ire, irréguliers
  'it.a1.grammar.present_ere_ire': {
    label: 'Présent des verbes en -ere et -ire (dont -isc-)', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.present_are'], errorTags: ['wrong_tense', 'irregular_form', 'spelling'], lessonId: 'it-a1-present-ere-ire-1',
  },
  'it.a1.grammar.irregular_present': {
    label: 'Présent irrégulier : fare, andare, venire', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.present_ere_ire'], errorTags: ['irregular_form', 'regularized_irregular', 'wrong_preposition'], lessonId: 'it-a1-present-ere-ire-2',
  },
  'it.a1.grammar.modal_verbs': {
    label: 'volere, potere, dovere + infinitif ; vorrei', band: 'A2', domain: 'grammar',
    pre: ['it.a1.grammar.present_ere_ire'], errorTags: ['irregular_form', 'modal_to', 'wrong_preposition'], lessonId: 'it-a1-present-ere-ire-2',
  },
  // Unité 7 : nombres et temps
  'it.a1.vocabulary.numbers': {
    label: 'Les nombres de 0 à 1000', band: 'A1', domain: 'vocabulary',
    errorTags: ['spelling', 'listening_misunderstanding'], lessonId: 'it-a1-time-1',
  },
  'it.a1.function.telling_time': {
    label: 'Demander et dire l’heure (sono le…, è l’una, alle…)', band: 'A1', domain: 'function',
    pre: ['it.a1.vocabulary.numbers', 'it.a1.grammar.definite_articles'], errorTags: ['article_wrong', 'wrong_preposition', 'wrong_choice'], lessonId: 'it-a1-time-1',
  },
  'it.a1.vocabulary.days_months': {
    label: 'Jours, mois, saisons et dates', band: 'A1', domain: 'vocabulary',
    pre: ['it.a1.vocabulary.numbers'], errorTags: ['vocabulary_missing', 'spelling', 'article_wrong'], lessonId: 'it-a1-time-2',
  },
  'it.a1.grammar.basic_prepositions': {
    label: 'Prépositions a, in, di, da (lieu, origine, chez, depuis)', band: 'A2', domain: 'grammar',
    pre: ['it.a1.grammar.irregular_present'], errorTags: ['wrong_preposition'], lessonId: 'it-a1-time-2',
  },
  // Unité 8 : ma journée
  'it.a1.grammar.reflexive_verbs': {
    label: 'Verbes pronominaux au présent (mi alzo, ci vestiamo)', band: 'A1', domain: 'grammar',
    pre: ['it.a1.grammar.present_are', 'it.a1.grammar.present_ere_ire'], errorTags: ['clitic_pronoun', 'wrong_pronoun'], lessonId: 'it-a1-daily-1',
  },
  'it.a1.function.frequency': {
    label: 'Exprimer la fréquence (sempre, spesso, non… mai)', band: 'A1', domain: 'function',
    pre: ['it.a1.grammar.negation'], errorTags: ['word_order', 'vocabulary_missing'], lessonId: 'it-a1-daily-1',
  },
  'it.a1.grammar.piacere': {
    label: 'piacere : mi piace / mi piacciono, anche a me', band: 'A2', domain: 'grammar',
    pre: ['it.a1.grammar.reflexive_verbs'], errorTags: ['clitic_pronoun', 'plural_form', 'wrong_pronoun'], lessonId: 'it-a1-daily-2',
  },
};
