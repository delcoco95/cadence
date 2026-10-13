import type { KcDef } from '../../level';

/** Notions du niveau B1 d'espagnol (préfixe `es.b1.`), prérequis pris dans le même niveau. */
export const KCS_B1: Record<string, KcDef> = {
  // Unité 1 : conditionnel
  'es.b1.grammar.condicional_form': {
    label: 'Conditionnel : hablaría, comería ; tendría, haría, podría, diría, saldría, vendría', band: 'B1',
    errorTags: ['irregular_form', 'spelling', 'wrong_tense'], lessonId: 'es-b1-condicional-1',
  },
  'es.b1.function.condicional_politeness': {
    label: 'Politesse et souhaits : ¿podrías…?, ¿te importaría…?, me gustaría, querría', band: 'B1',
    pre: ['es.b1.grammar.condicional_form'], errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'es-b1-condicional-1', domain: 'function',
  },
  'es.b1.function.condicional_advice': {
    label: 'Conseiller : deberías, tendrías que, yo que tú / yo en tu lugar, lo mejor sería', band: 'B1',
    pre: ['es.b1.grammar.condicional_form'], errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'es-b1-condicional-2', domain: 'function',
  },
  // Unité 2 : subjonctif présent
  'es.b1.grammar.subjuntivo_form': {
    label: 'Subjonctif présent : hable, coma, viva ; tenga, haga, diga ; sea, vaya, esté, sepa, haya', band: 'B1',
    errorTags: ['subjunctive', 'irregular_form', 'spelling'], lessonId: 'es-b1-subjuntivo-1',
  },
  'es.b1.grammar.subjuntivo_wishes': {
    label: 'Volonté, souhait, jugement + subjonctif : quiero que, espero que, es importante que, ojalá', band: 'B1',
    pre: ['es.b1.grammar.subjuntivo_form'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b1-subjuntivo-1',
  },
  'es.b1.grammar.subjuntivo_cuando': {
    label: 'cuando + subjonctif pour le futur (cuando llegue) ; cuando + indicatif pour l’habitude', band: 'B1+',
    pre: ['es.b1.grammar.subjuntivo_form'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b1-subjuntivo-2',
  },
  // Unité 3 : impératif négatif
  'es.b1.grammar.imperative_negative': {
    label: 'Impératif négatif : no + subjonctif (no hables, no vengáis, no vayas)', band: 'B1',
    pre: ['es.b1.grammar.subjuntivo_form'], errorTags: ['subjunctive', 'irregular_form', 'wrong_tense'], lessonId: 'es-b1-imperativo-1',
  },
  'es.b1.grammar.imperative_usted': {
    label: 'Impératif de usted et ustedes : pase, siga, no se preocupe', band: 'B1',
    pre: ['es.b1.grammar.subjuntivo_form'], errorTags: ['subjunctive', 'wrong_pronoun', 'irregular_form'], lessonId: 'es-b1-imperativo-1',
  },
  'es.b1.grammar.imperative_pronouns': {
    label: 'Impératif et pronoms : dímelo / no me lo digas, siéntate / no te sientes, sentaos', band: 'B1+',
    pre: ['es.b1.grammar.imperative_negative'], errorTags: ['clitic_pronoun', 'word_order', 'spelling'], lessonId: 'es-b1-imperativo-2',
  },
  // Unité 4 : relatives
  'es.b1.grammar.relative_que_donde': {
    label: 'Relatifs que (qui / que) et donde (où)', band: 'B1',
    errorTags: ['wrong_pronoun', 'wrong_choice'], lessonId: 'es-b1-relativos-1',
  },
  'es.b1.grammar.relative_lo_que': {
    label: 'lo que : ce que, ce qui', band: 'B1',
    pre: ['es.b1.grammar.relative_que_donde'], errorTags: ['wrong_pronoun', 'article_wrong'], lessonId: 'es-b1-relativos-1',
  },
  'es.b1.grammar.relative_preposition': {
    label: 'Préposition + el que / la que / quien ; el que = celui qui ; del que = dont', band: 'B1+',
    pre: ['es.b1.grammar.relative_que_donde'], errorTags: ['wrong_preposition', 'article_wrong', 'gender_agreement'], lessonId: 'es-b1-relativos-2',
  },
  // Unité 5 : raconter
  'es.b1.tense.pluscuamperfecto': {
    label: 'Plus-que-parfait : había + participe (había salido, nunca había visto)', band: 'B1',
    errorTags: ['wrong_auxiliary', 'irregular_form', 'wrong_tense'], lessonId: 'es-b1-relato-1',
  },
  'es.b1.tense.past_sequence': {
    label: 'Enchaîner les temps du récit : indefinido, imperfecto, pluscuamperfecto', band: 'B1+',
    pre: ['es.b1.tense.pluscuamperfecto'], errorTags: ['wrong_tense'], lessonId: 'es-b1-relato-2',
  },
  'es.b1.function.narrative_markers': {
    label: 'Connecteurs du récit : al principio, de repente, entonces, luego, al final, al día siguiente', band: 'B1',
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'es-b1-relato-2', domain: 'function',
  },
  // Unité 6 : por ou para
  'es.b1.grammar.para': {
    label: 'para : but, destination, destinataire, échéance, opinion', band: 'B1',
    errorTags: ['wrong_preposition'], lessonId: 'es-b1-por-para-1',
  },
  'es.b1.grammar.por': {
    label: 'por : cause, lieu traversé, moyen, prix, moment de la journée, agent ; por eso, por cierto', band: 'B1',
    pre: ['es.b1.grammar.para'], errorTags: ['wrong_preposition'], lessonId: 'es-b1-por-para-1',
  },
  'es.b1.grammar.verb_prepositions': {
    label: 'Verbes à préposition : pensar en, soñar con, casarse con, acordarse de, tardar en, quedar con', band: 'B1+',
    errorTags: ['wrong_preposition'], lessonId: 'es-b1-por-para-2',
  },
  // Unité 7 : hypothèses
  'es.b1.grammar.si_real': {
    label: 'si + présent → présent, futur ou impératif (jamais de futur ni de subjonctif après si)', band: 'B1',
    errorTags: ['wrong_tense', 'subjunctive'], lessonId: 'es-b1-hipotesis-1',
  },
  'es.b1.grammar.imperfecto_subjuntivo': {
    label: 'Subjonctif imparfait : hablara / hablase, tuviera, fuera, pudiera, hiciera', band: 'B1+',
    pre: ['es.b1.grammar.si_real'], errorTags: ['subjunctive', 'irregular_form', 'spelling'], lessonId: 'es-b1-hipotesis-1',
  },
  'es.b1.grammar.si_unreal': {
    label: 'si + subjonctif imparfait → conditionnel ; como si ; me gustaría que', band: 'B1+',
    pre: ['es.b1.grammar.imperfecto_subjuntivo', 'es.b1.grammar.condicional_form'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b1-hipotesis-2',
  },
  // Unité 8 : relier et rapporter
  'es.b1.function.connectors_cause': {
    label: 'Cause et conséquence : porque, como, ya que, así que, por eso, por lo tanto', band: 'B1',
    errorTags: ['wrong_choice', 'word_order'], lessonId: 'es-b1-conectores-1', domain: 'function',
  },
  'es.b1.function.connectors_contrast': {
    label: 'Opposition et addition : pero, sino, aunque, sin embargo, mientras que, además', band: 'B1',
    errorTags: ['wrong_choice'], lessonId: 'es-b1-conectores-1', domain: 'function',
  },
  'es.b1.grammar.reported_speech': {
    label: 'Discours rapporté au présent : dice que, pregunta si / dónde, dice que + subjonctif (ordre)', band: 'B1+',
    pre: ['es.b1.grammar.subjuntivo_form'], errorTags: ['wrong_pronoun', 'subjunctive', 'wrong_tense'], lessonId: 'es-b1-conectores-2',
  },
};
