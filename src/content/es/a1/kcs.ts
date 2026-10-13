import type { KcDef } from '../../level';

/** Notions du niveau A1 d'espagnol (préfixe `es.a1.`), prérequis A1 uniquement. */
export const KCS_A1: Record<string, KcDef> = {
  // Unité 1 : premiers mots
  'es.a1.pronunciation.sounds': {
    label: 'Prononciation : j, g, ll, ñ, c / z, r / rr, h muet', band: 'A1', domain: 'pronunciation',
    errorTags: ['pronunciation_intelligibility', 'spelling'], lessonId: 'es-a1-hello-1',
  },
  'es.a1.function.greetings': {
    label: 'Saluer, prendre congé, se présenter (me llamo…)', band: 'A1', domain: 'function',
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'es-a1-hello-1',
  },
  'es.a1.grammar.subject_pronouns': {
    label: 'Pronoms sujets : tú, usted, vosotros, ustedes', band: 'A1',
    errorTags: ['wrong_pronoun'], lessonId: 'es-a1-hello-2',
  },
  'es.a1.grammar.ser_present': {
    label: 'ser au présent : identité, origine, profession', band: 'A1',
    pre: ['es.a1.grammar.subject_pronouns'], errorTags: ['irregular_form', 'ser_estar'], lessonId: 'es-a1-hello-2',
  },
  // Unité 2 : noms et articles indéfinis
  'es.a1.grammar.noun_gender': {
    label: 'Genre des noms (-o, -a, -dad, -ción, exceptions)', band: 'A1',
    errorTags: ['gender_agreement', 'article_wrong'], lessonId: 'es-a1-nouns-1',
  },
  'es.a1.grammar.indefinite_articles': {
    label: 'Articles indéfinis : un, una, unos, unas (et otro sans article)', band: 'A1',
    pre: ['es.a1.grammar.noun_gender'], errorTags: ['article_wrong', 'article_missing', 'gender_agreement'], lessonId: 'es-a1-nouns-1',
  },
  'es.a1.grammar.plural': {
    label: 'Pluriel des noms : -s, -es, -z → -ces', band: 'A1',
    pre: ['es.a1.grammar.noun_gender'], errorTags: ['plural_form', 'spelling'], lessonId: 'es-a1-nouns-2',
  },
  // Unité 3 : articles définis, hay
  'es.a1.grammar.definite_articles': {
    label: 'Articles définis : el, la, los, las (el agua)', band: 'A1',
    pre: ['es.a1.grammar.noun_gender'], errorTags: ['article_wrong', 'gender_agreement'], lessonId: 'es-a1-articles-1',
  },
  'es.a1.grammar.al_del': {
    label: 'Contractions al (a + el) et del (de + el)', band: 'A1',
    pre: ['es.a1.grammar.definite_articles'], errorTags: ['article_wrong', 'wrong_preposition'], lessonId: 'es-a1-articles-1',
  },
  'es.a1.grammar.hay': {
    label: 'hay : il y a (sans article défini)', band: 'A1',
    pre: ['es.a1.grammar.indefinite_articles'], errorTags: ['article_wrong', 'ser_estar'], lessonId: 'es-a1-articles-2',
  },
  'es.a1.grammar.estar_location': {
    label: 'estar pour situer : ¿Dónde está…?', band: 'A1',
    pre: ['es.a1.grammar.definite_articles'], errorTags: ['ser_estar', 'irregular_form'], lessonId: 'es-a1-articles-2',
  },
  // Unité 4 : tener et la description
  'es.a1.verbs.tener': {
    label: 'tener au présent (tengo, tienes…)', band: 'A1',
    pre: ['es.a1.grammar.subject_pronouns'], errorTags: ['irregular_form'], lessonId: 'es-a1-tener-1',
  },
  'es.a1.function.tener_expressions': {
    label: 'tener … años, tener hambre / sed / frío / calor / prisa', band: 'A1',
    pre: ['es.a1.verbs.tener'], errorTags: ['wrong_choice', 'wrong_auxiliary'], lessonId: 'es-a1-tener-1',
  },
  'es.a1.grammar.adjective_agreement': {
    label: 'Accord des adjectifs et couleurs', band: 'A1',
    pre: ['es.a1.grammar.noun_gender', 'es.a1.grammar.plural'], errorTags: ['gender_agreement', 'plural_form'], lessonId: 'es-a1-tener-2',
  },
  'es.a1.grammar.muy_mucho': {
    label: 'muy ou mucho / mucha / muchos / muchas', band: 'A2',
    pre: ['es.a1.grammar.adjective_agreement'], errorTags: ['wrong_choice', 'gender_agreement'], lessonId: 'es-a1-tener-2',
  },
  // Unité 5 : présent en -ar
  'es.a1.verbs.present_ar': {
    label: 'Présent des verbes en -ar', band: 'A1',
    pre: ['es.a1.grammar.subject_pronouns'], errorTags: ['spelling', 'wrong_pronoun'], lessonId: 'es-a1-present-ar-1',
  },
  'es.a1.grammar.negation': {
    label: 'Négation : no + verbe', band: 'A1',
    pre: ['es.a1.verbs.present_ar'], errorTags: ['word_order'], lessonId: 'es-a1-present-ar-1',
  },
  'es.a1.grammar.questions': {
    label: 'Questions fermées : intonation, ¿…?, inversion', band: 'A1',
    pre: ['es.a1.verbs.present_ar'], errorTags: ['word_order', 'spelling'], lessonId: 'es-a1-present-ar-2',
  },
  'es.a1.grammar.question_words': {
    label: 'Mots interrogatifs : qué, dónde, cuándo, cómo, cuánto, por qué', band: 'A1',
    pre: ['es.a1.grammar.questions'], errorTags: ['wrong_choice', 'spelling'], lessonId: 'es-a1-present-ar-2',
  },
  // Unité 6 : présent en -er et -ir
  'es.a1.verbs.present_er_ir': {
    label: 'Présent des verbes en -er et -ir', band: 'A1',
    pre: ['es.a1.verbs.present_ar'], errorTags: ['spelling', 'wrong_preposition'], lessonId: 'es-a1-present-er-ir-1',
  },
  'es.a1.verbs.stem_change': {
    label: 'Diphtongues : e → ie (quiero), o → ue (puedo)', band: 'A2',
    pre: ['es.a1.verbs.present_er_ir'], errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'es-a1-present-er-ir-2',
  },
  'es.a1.verbs.ir_hacer': {
    label: 'ir (voy a…) et hacer (hago, hace calor)', band: 'A1',
    pre: ['es.a1.verbs.present_er_ir', 'es.a1.grammar.al_del'], errorTags: ['irregular_form', 'wrong_preposition'], lessonId: 'es-a1-present-er-ir-2',
  },
  // Unité 7 : nombres et temps
  'es.a1.vocabulary.numbers': {
    label: 'Nombres de 0 à 100', band: 'A1', domain: 'vocabulary',
    errorTags: ['spelling', 'listening_misunderstanding'], lessonId: 'es-a1-time-1',
  },
  'es.a1.function.telling_time': {
    label: 'Dire l’heure : es la una, son las…, y media, menos cuarto', band: 'A1', domain: 'function',
    pre: ['es.a1.vocabulary.numbers'], errorTags: ['article_missing', 'wrong_choice'], lessonId: 'es-a1-time-1',
  },
  'es.a1.vocabulary.days_months': {
    label: 'Jours, mois, moments de la journée', band: 'A1', domain: 'vocabulary',
    errorTags: ['article_wrong', 'spelling'], lessonId: 'es-a1-time-2',
  },
  'es.a1.grammar.prepositions_time': {
    label: 'Situer dans le temps : a las…, en julio, el lunes, por la mañana', band: 'A1',
    pre: ['es.a1.function.telling_time', 'es.a1.vocabulary.days_months'], errorTags: ['wrong_preposition', 'article_wrong'], lessonId: 'es-a1-time-2',
  },
  // Unité 8 : ma journée
  'es.a1.verbs.reflexive': {
    label: 'Verbes pronominaux : me levanto, te duchas, se acuesta', band: 'A1',
    pre: ['es.a1.verbs.present_ar'], errorTags: ['clitic_pronoun', 'wrong_pronoun'], lessonId: 'es-a1-daily-1',
  },
  'es.a1.function.frequency': {
    label: 'Fréquence : siempre, a veces, nunca (nunca + verbe)', band: 'A1', domain: 'function',
    pre: ['es.a1.grammar.negation'], errorTags: ['word_order', 'wrong_choice'], lessonId: 'es-a1-daily-1',
  },
  'es.a1.grammar.gustar': {
    label: 'gustar : me gusta / me gustan, le gusta', band: 'A1',
    pre: ['es.a1.grammar.definite_articles'], errorTags: ['clitic_pronoun', 'article_missing', 'plural_form'], lessonId: 'es-a1-daily-2',
  },
  'es.a1.function.agree_disagree': {
    label: 'Réagir : a mí también, a mí tampoco, a mí sí / no', band: 'A2', domain: 'function',
    pre: ['es.a1.grammar.gustar'], errorTags: ['wrong_choice', 'wrong_pronoun'], lessonId: 'es-a1-daily-2',
  },
};
