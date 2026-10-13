import type { KcDef } from '../../level';

/** Notions du niveau C1 d'espagnol (préfixe `es.c1.`), prérequis pris dans le même niveau. */
export const KCS_C1: Record<string, KcDef> = {
  // Unité 1 : subjonctif avancé
  'es.c1.grammar.negated_opinion_mood': {
    label: 'Mode après opinion niée, no es que…, que + subjonctif en tête, el hecho de que', band: 'C1',
    errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-c1-subjuntivo-1',
  },
  'es.c1.grammar.double_meaning_verbs': {
    label: 'Verbes à double sens : decir, sentir, entender, comprender que + indicatif ou subjonctif', band: 'C1',
    pre: ['es.c1.grammar.negated_opinion_mood'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-c1-subjuntivo-1',
  },
  'es.c1.grammar.indefinite_relatives': {
    label: 'quienquiera que, cualquiera que, dondequiera que, sea cual sea + subjonctif', band: 'C1',
    errorTags: ['subjunctive', 'spelling', 'wrong_choice'], lessonId: 'es-c1-subjuntivo-2',
  },
  'es.c1.grammar.reduplicative_subjunctive': {
    label: 'Subjonctif redoublé (pase lo que pase, digan lo que digan) ; por muy / por mucho… que', band: 'C1',
    pre: ['es.c1.grammar.indefinite_relatives'], errorTags: ['subjunctive', 'word_order'], lessonId: 'es-c1-subjuntivo-2',
  },
  // Unité 2 : supposer
  'es.c1.grammar.future_of_probability': {
    label: 'Futur de probabilité (estará en casa, tendrá cuarenta años) ; deber de + infinitif', band: 'C1',
    errorTags: ['wrong_tense', 'irregular_form'], lessonId: 'es-c1-probabilidad-1',
  },
  'es.c1.grammar.conditional_of_probability': {
    label: 'Conditionnel de probabilité sur le passé (serían las tres, tendría veinte años)', band: 'C1',
    pre: ['es.c1.grammar.future_of_probability'], errorTags: ['wrong_tense', 'irregular_form'], lessonId: 'es-c1-probabilidad-1',
  },
  'es.c1.grammar.future_perfect': {
    label: 'Futur antérieur (ya habré terminado, habrá salido) et conditionnel passé de probabilité', band: 'C1',
    pre: ['es.c1.grammar.future_of_probability'], errorTags: ['wrong_tense', 'wrong_auxiliary', 'subjunctive'], lessonId: 'es-c1-probabilidad-2',
  },
  'es.c1.grammar.concessive_future': {
    label: 'Futur et conditionnel concessifs : será muy listo, pero…', band: 'C1',
    pre: ['es.c1.grammar.future_of_probability'], errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'es-c1-probabilidad-2',
  },
  // Unité 3 : registre formel
  'es.c1.function.formal_usted': {
    label: 'usted / ustedes : 3e personne, pronoms le, se, su, impératif de politesse', band: 'C1', domain: 'function',
    errorTags: ['wrong_pronoun', 'clitic_pronoun'], lessonId: 'es-c1-registro-1',
  },
  'es.c1.function.formal_letter': {
    label: 'Lettre formelle : Estimado/a…:, me dirijo a usted, quedo a la espera, atentamente', band: 'C1', domain: 'function',
    pre: ['es.c1.function.formal_usted'], errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'es-c1-registro-1',
  },
  'es.c1.grammar.polite_requests': {
    label: 'Demandes formelles : le agradecería que + subjonctif imparfait, le ruego que, sería tan amable de', band: 'C1',
    pre: ['es.c1.function.formal_usted'], errorTags: ['subjunctive', 'wrong_tense', 'wrong_preposition'], lessonId: 'es-c1-registro-2',
  },
  'es.c1.vocabulary.administrative_language': {
    label: 'Langue administrative : solicitar, adjuntar, cumplimentar, el plazo, el trámite, la instancia', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c1-registro-2',
  },
  // Unité 4 : cohésion
  'es.c1.grammar.contrast_connectors': {
    label: 'Opposition : sin embargo, no obstante, en cambio, por el contrario, ahora bien, aun así', band: 'C1',
    errorTags: ['wrong_choice'], lessonId: 'es-c1-coherencia-1',
  },
  'es.c1.grammar.consequence_connectors': {
    label: 'Conséquence : por consiguiente, por (lo) tanto, así pues, de modo que ; de ahí que + subjonctif', band: 'C1',
    errorTags: ['wrong_choice', 'subjunctive'], lessonId: 'es-c1-coherencia-1',
  },
  'es.c1.grammar.nominalisation': {
    label: 'Nominalisation : la subida, el aumento, la toma de decisiones, la puesta en marcha', band: 'C1',
    errorTags: ['vocabulary_missing', 'gender_agreement', 'spelling'], lessonId: 'es-c1-coherencia-2',
  },
  'es.c1.grammar.additive_reformulation': {
    label: 'Structurer et reformuler : asimismo, es más, por un lado… por otro, es decir, en definitiva', band: 'C1',
    pre: ['es.c1.grammar.contrast_connectors'], errorTags: ['wrong_choice', 'spelling'], lessonId: 'es-c1-coherencia-2',
  },
  // Unité 5 : expressions idiomatiques
  'es.c1.vocabulary.body_idioms': {
    label: 'Expressions avec le corps : tomar el pelo, meter la pata, no pegar ojo, echar una mano', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c1-expresiones-1',
  },
  'es.c1.vocabulary.food_animal_idioms': {
    label: 'Expressions (nourriture, animaux) : ser pan comido, dar gato por liebre, estar como pez en el agua', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c1-expresiones-1',
  },
  'es.c1.vocabulary.verb_idioms': {
    label: 'Locutions verbales : tirar la toalla, ir al grano, ponerse las pilas, salirse con la suya', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c1-expresiones-2',
  },
  'es.c1.vocabulary.adverbial_locutions': {
    label: 'Locutions adverbiales : por los pelos, a regañadientes, a la larga, de sobra, sobre la marcha', band: 'C1', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_preposition'], lessonId: 'es-c1-expresiones-2',
  },
  // Unité 6 : argumenter
  'es.c1.function.hedging': {
    label: 'Nuancer : a mi juicio, en cierta medida ; certitude + indicatif, probabilité (es probable que) + subjonctif', band: 'C1', domain: 'function',
    errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-c1-argumentar-1',
  },
  'es.c1.function.conceding': {
    label: 'Concéder : si bien + indicatif, es cierto que… pero, bien es verdad que, con todo', band: 'C1', domain: 'function',
    pre: ['es.c1.function.hedging'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-c1-argumentar-1',
  },
  'es.c1.function.refuting': {
    label: 'Réfuter : no es cierto que + subjonctif, nada más lejos de la realidad, lejos de, en absoluto', band: 'C1', domain: 'function',
    pre: ['es.c1.function.conceding'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-c1-argumentar-2',
  },
  'es.c1.grammar.sino_pero': {
    label: 'pero, sino, sino que ; no solo… sino también', band: 'C1',
    errorTags: ['wrong_choice'], lessonId: 'es-c1-argumentar-2',
  },
  // Unité 7 : mise en relief
  'es.c1.grammar.neuter_lo_adjective': {
    label: 'lo + adjectif (lo importante, lo peor) ; lo de + nom', band: 'C1',
    errorTags: ['article_wrong', 'gender_agreement'], lessonId: 'es-c1-enfasis-1',
  },
  'es.c1.grammar.lo_adjective_que': {
    label: 'lo + adjectif / adverbe + que (lo caras que son, lo bien que habla) ; ¡lo que has crecido!', band: 'C1',
    pre: ['es.c1.grammar.neuter_lo_adjective'], errorTags: ['gender_agreement', 'plural_form', 'article_wrong'], lessonId: 'es-c1-enfasis-1',
  },
  'es.c1.grammar.cleft_sentences': {
    label: 'Clivées : fue ella quien, es aquí donde, fue entonces cuando, lo que… es', band: 'C1',
    errorTags: ['wrong_choice', 'wrong_tense', 'word_order'], lessonId: 'es-c1-enfasis-2',
  },
  'es.c1.grammar.clitic_dislocation': {
    label: 'Complément en tête repris par un pronom : el libro lo compré, a tu hermana la vi', band: 'C1',
    errorTags: ['clitic_pronoun', 'word_order'], lessonId: 'es-c1-enfasis-2',
  },
  // Unité 8 : phrase complexe
  'es.c1.grammar.absolute_participle': {
    label: 'Participe absolu : terminada la reunión, una vez firmado el contrato, dicho esto', band: 'C1',
    errorTags: ['gender_agreement', 'word_order', 'irregular_form'], lessonId: 'es-c1-oraciones-1',
  },
  'es.c1.grammar.gerund_clauses': {
    label: 'Gérondif (cause, condition, manière), gérondif composé ; emplois fautifs', band: 'C1',
    errorTags: ['wrong_choice', 'wrong_tense'], lessonId: 'es-c1-oraciones-1',
  },
  'es.c1.grammar.compound_infinitive': {
    label: 'Infinitif composé : después de / por / sin haber + participe ; de haberlo sabido', band: 'C1',
    errorTags: ['wrong_auxiliary', 'clitic_pronoun', 'wrong_preposition'], lessonId: 'es-c1-oraciones-2',
  },
  'es.c1.grammar.infinitive_constructions': {
    label: 'al, nada más, de, con (solo) + infinitif : temps, condition, concession', band: 'C1',
    pre: ['es.c1.grammar.compound_infinitive'], errorTags: ['wrong_preposition', 'wrong_choice'], lessonId: 'es-c1-oraciones-2',
  },
};
