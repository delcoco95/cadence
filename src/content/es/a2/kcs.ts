import type { KcDef } from '../../level';

/** Notions du niveau A2 d'espagnol (préfixe `es.a2.`), prérequis pris dans le même niveau. */
export const KCS_A2: Record<string, KcDef> = {
  // Unité 1 : ser ou estar
  'es.a2.grammar.ser_uses': {
    label: 'ser : identité, origine, profession, caractère, matière, heure', band: 'A2',
    errorTags: ['ser_estar', 'irregular_form'], lessonId: 'es-a2-ser-estar-1',
  },
  'es.a2.grammar.estar_uses': {
    label: 'estar : état passager, humeur, lieu, résultat', band: 'A2',
    pre: ['es.a2.grammar.ser_uses'], errorTags: ['ser_estar', 'irregular_form'], lessonId: 'es-a2-ser-estar-1',
  },
  'es.a2.grammar.ser_estar_adjectives': {
    label: 'Adjectifs qui changent de sens avec ser ou estar (listo, aburrido, malo…)', band: 'A2+',
    pre: ['es.a2.grammar.estar_uses'], errorTags: ['ser_estar', 'gender_agreement'], lessonId: 'es-a2-ser-estar-2',
  },
  'es.a2.grammar.hay_esta': {
    label: 'hay (existence) ou está / están (localisation)', band: 'A2',
    pre: ['es.a2.grammar.estar_uses'], errorTags: ['ser_estar', 'article_wrong'], lessonId: 'es-a2-ser-estar-2',
  },
  // Unité 2 : possessifs et démonstratifs
  'es.a2.grammar.possessive_short': {
    label: 'Possessifs atones : mi, tu, su, nuestro, vuestro', band: 'A2',
    errorTags: ['gender_agreement', 'article_wrong', 'wrong_pronoun'], lessonId: 'es-a2-possessives-1',
  },
  'es.a2.grammar.possessive_long': {
    label: 'Possessifs toniques : mío, tuyo, suyo ; el mío, la tuya', band: 'A2+',
    pre: ['es.a2.grammar.possessive_short'], errorTags: ['gender_agreement', 'article_wrong'], lessonId: 'es-a2-possessives-1',
  },
  'es.a2.grammar.demonstratives': {
    label: 'Démonstratifs : este, ese, aquel ; esto, eso, aquello', band: 'A2',
    errorTags: ['gender_agreement', 'wrong_choice', 'spelling'], lessonId: 'es-a2-possessives-2',
  },
  // Unité 3 : pretérito perfecto
  'es.a2.tense.perfecto_form': {
    label: 'Pretérito perfecto : haber + participe en -ado / -ido', band: 'A2',
    errorTags: ['wrong_auxiliary', 'missing_auxiliary', 'spelling'], lessonId: 'es-a2-perfecto-1',
  },
  'es.a2.tense.perfecto_irregular': {
    label: 'Participes irréguliers : hecho, dicho, visto, puesto, escrito, vuelto, abierto, roto', band: 'A2',
    pre: ['es.a2.tense.perfecto_form'], errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'es-a2-perfecto-1',
  },
  'es.a2.tense.perfecto_usage': {
    label: 'Perfecto : hoy, esta semana, ya, todavía no, alguna vez, nunca', band: 'A2',
    pre: ['es.a2.tense.perfecto_form'], errorTags: ['wrong_tense', 'word_order'], lessonId: 'es-a2-perfecto-2',
  },
  // Unité 4 : pretérito indefinido
  'es.a2.tense.indefinido_regular': {
    label: 'Pretérito indefinido des verbes réguliers (hablé, comí, viví)', band: 'A2',
    errorTags: ['spelling', 'wrong_tense'], lessonId: 'es-a2-indefinido-1',
  },
  'es.a2.tense.perfecto_vs_indefinido': {
    label: 'Perfecto ou indefinido ? (hoy / ayer, este año / el año pasado)', band: 'A2+',
    pre: ['es.a2.tense.indefinido_regular', 'es.a2.tense.perfecto_usage'], errorTags: ['wrong_tense'], lessonId: 'es-a2-indefinido-1',
  },
  'es.a2.tense.indefinido_irregular': {
    label: 'Indefinido irrégulier : fui, hice, tuve, estuve, dije, vine, pude, puse', band: 'A2+',
    pre: ['es.a2.tense.indefinido_regular'], errorTags: ['irregular_form', 'regularized_irregular', 'spelling'], lessonId: 'es-a2-indefinido-2',
  },
  // Unité 5 : imperfecto
  'es.a2.tense.imperfecto_form': {
    label: 'Imperfecto : -aba / -ía, et les trois irréguliers ser, ir, ver', band: 'A2',
    errorTags: ['irregular_form', 'spelling'], lessonId: 'es-a2-imperfecto-1',
  },
  'es.a2.tense.imperfecto_usage': {
    label: 'Imperfecto : habitudes passées, descriptions, antes / de pequeño', band: 'A2',
    pre: ['es.a2.tense.imperfecto_form'], errorTags: ['wrong_tense'], lessonId: 'es-a2-imperfecto-1',
  },
  'es.a2.tense.imperfecto_vs_indefinido': {
    label: 'Imperfecto ou indefinido ? (décor et événement)', band: 'A2+',
    pre: ['es.a2.tense.imperfecto_usage', 'es.a2.tense.indefinido_irregular'], errorTags: ['wrong_tense'], lessonId: 'es-a2-imperfecto-2',
  },
  // Unité 6 : pronoms compléments
  'es.a2.grammar.direct_object_pronouns': {
    label: 'Pronoms COD : lo, la, los, las', band: 'A2',
    errorTags: ['clitic_pronoun', 'gender_agreement', 'wrong_pronoun'], lessonId: 'es-a2-pronouns-1',
  },
  'es.a2.grammar.pronoun_position': {
    label: 'Place des pronoms : avant le verbe conjugué, collés à l’infinitif ou au gérondif', band: 'A2',
    pre: ['es.a2.grammar.direct_object_pronouns'], errorTags: ['clitic_pronoun', 'word_order'], lessonId: 'es-a2-pronouns-1',
  },
  'es.a2.grammar.indirect_object_pronouns': {
    label: 'Pronoms COI : le, les (me, te, nos, os)', band: 'A2',
    pre: ['es.a2.grammar.direct_object_pronouns'], errorTags: ['clitic_pronoun', 'wrong_pronoun'], lessonId: 'es-a2-pronouns-2',
  },
  'es.a2.grammar.se_lo': {
    label: 'Double pronom : me lo, te la, se lo (le / les + lo → se lo)', band: 'A2+',
    pre: ['es.a2.grammar.indirect_object_pronouns', 'es.a2.grammar.pronoun_position'], errorTags: ['clitic_pronoun', 'word_order'], lessonId: 'es-a2-pronouns-2',
  },
  // Unité 7 : futur et obligation
  'es.a2.tense.ir_a': {
    label: 'ir a + infinitif : projets et intentions', band: 'A2',
    errorTags: ['wrong_preposition', 'irregular_form'], lessonId: 'es-a2-future-1',
  },
  'es.a2.tense.futuro_simple': {
    label: 'Futur simple : hablaré, comeré ; tendré, haré, podré, saldré, vendré', band: 'A2+',
    pre: ['es.a2.tense.ir_a'], errorTags: ['irregular_form', 'spelling', 'wrong_tense'], lessonId: 'es-a2-future-1',
  },
  'es.a2.grammar.obligation': {
    label: 'Obligation : tener que, hay que, deber + infinitif', band: 'A2',
    errorTags: ['wrong_preposition', 'wrong_choice'], lessonId: 'es-a2-future-2',
  },
  'es.a2.grammar.estar_gerundio': {
    label: 'estar + gérondif : action en cours (estoy trabajando)', band: 'A2',
    errorTags: ['ser_estar', 'irregular_form', 'spelling'], lessonId: 'es-a2-future-2',
  },
  // Unité 8 : comparer et conseiller
  'es.a2.grammar.comparatives': {
    label: 'Comparatifs : más / menos… que, tan… como, tanto como, mejor, peor, mayor, menor', band: 'A2',
    errorTags: ['wrong_choice', 'wrong_preposition', 'irregular_form'], lessonId: 'es-a2-compare-1',
  },
  'es.a2.grammar.superlatives': {
    label: 'Superlatifs : el más… de, -ísimo', band: 'A2',
    pre: ['es.a2.grammar.comparatives'], errorTags: ['wrong_preposition', 'article_wrong', 'spelling'], lessonId: 'es-a2-compare-1',
  },
  'es.a2.grammar.imperative_affirmative': {
    label: 'Impératif affirmatif : tú, vosotros, usted, ustedes (+ pronoms enclitiques)', band: 'A2+',
    errorTags: ['irregular_form', 'clitic_pronoun', 'spelling'], lessonId: 'es-a2-compare-2',
  },
};
