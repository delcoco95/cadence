import type { KcDef } from '../../level';

/** Notions du niveau C2 d'espagnol (préfixe `es.c2.`), prérequis pris dans le même niveau. */
export const KCS_C2: Record<string, KcDef> = {
  // Unité 1 : nuances modales
  'es.c2.grammar.epistemic_mood': {
    label: 'Mode et certitude : quizá / tal vez + indicatif ou subjonctif, a lo mejor / igual + indicatif, puede que + subjonctif', band: 'C2',
    errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-c2-matices-1',
  },
  'es.c2.grammar.deber_de': {
    label: 'deber de + infinitif (supposition) et deber + infinitif (obligation)', band: 'C2',
    pre: ['es.c2.grammar.epistemic_mood'], errorTags: ['wrong_preposition', 'wrong_choice'], lessonId: 'es-c2-matices-1',
  },
  'es.c2.function.hedging': {
    label: 'Atténuation : imparfait de politesse, yo diría que, no sé si, venir a + infinitif', band: 'C2', domain: 'function',
    errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'es-c2-matices-2',
  },
  'es.c2.function.evidentials': {
    label: 'Évidentiels : por lo visto, al parecer, según parece, se ve que', band: 'C2', domain: 'function',
    pre: ['es.c2.function.hedging'], errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'es-c2-matices-2',
  },
  // Unité 2 : langue littéraire
  'es.c2.grammar.literary_tenses': {
    label: 'Temps littéraires : pretérito anterior (hubo terminado), forme en -ra à valeur de plus-que-parfait', band: 'C2',
    errorTags: ['wrong_tense', 'irregular_form'], lessonId: 'es-c2-literario-1',
  },
  'es.c2.grammar.future_subjunctive': {
    label: 'Futur du subjonctif (fuere, hubiere) : textes juridiques, formules figées, proverbes', band: 'C2',
    pre: ['es.c2.grammar.literary_tenses'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-c2-literario-1',
  },
  'es.c2.reading.literary_style': {
    label: 'Style soutenu : épithète antéposée, hyperbate, enclise archaïsante (díjole)', band: 'C2', domain: 'reading',
    errorTags: ['word_order', 'clitic_pronoun'], lessonId: 'es-c2-literario-2',
  },
  'es.c2.vocabulary.literary_lexis': {
    label: 'Lexique littéraire : acaso, otrora, mas, empero, sendos, por doquier, cuán, yacer', band: 'C2', domain: 'vocabulary',
    pre: ['es.c2.reading.literary_style'], errorTags: ['vocabulary_missing', 'spelling'], lessonId: 'es-c2-literario-2',
  },
  // Unité 3 : idiomes et proverbes
  'es.c2.vocabulary.idioms': {
    label: 'Modismos avancés : irse por los cerros de Úbeda, dar gato por liebre, pagar el pato, estar en el ajo', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c2-modismos-1',
  },
  'es.c2.vocabulary.idiom_equivalents': {
    label: 'Équivalences d’images avec le français : echar leña al fuego, cuando las ranas críen pelo', band: 'C2', domain: 'vocabulary',
    pre: ['es.c2.vocabulary.idioms'], errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c2-modismos-1',
  },
  'es.c2.vocabulary.proverbs': {
    label: 'Refranes courants : más vale pájaro en mano, no hay mal que por bien no venga…', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'word_order'], lessonId: 'es-c2-modismos-2',
  },
  'es.c2.function.proverb_allusion': {
    label: 'Faire allusion à un refrán : citation tronquée, como dice el refrán, nunca mejor dicho', band: 'C2', domain: 'function',
    pre: ['es.c2.vocabulary.proverbs'], errorTags: ['wrong_choice', 'listening_misunderstanding'], lessonId: 'es-c2-modismos-2',
  },
  // Unité 4 : langue des médias
  'es.c2.reading.headlines': {
    label: 'Titres de presse : présent pour le passé, participe sans auxiliaire, verbe en tête', band: 'C2', domain: 'reading',
    errorTags: ['wrong_tense', 'word_order'], lessonId: 'es-c2-periodistico-1',
  },
  'es.c2.grammar.rumor_conditional': {
    label: 'Conditionnel de rumeur (habría firmado), presunto, según fuentes', band: 'C2',
    pre: ['es.c2.reading.headlines'], errorTags: ['wrong_tense', 'wrong_choice'], lessonId: 'es-c2-periodistico-1',
  },
  'es.c2.writing.nominal_style': {
    label: 'Style nominal : tras la aprobación de, ante, pese a, llevar a cabo', band: 'C2', domain: 'writing',
    errorTags: ['wrong_preposition', 'vocabulary_missing'], lessonId: 'es-c2-periodistico-2',
  },
  'es.c2.vocabulary.reporting_verbs': {
    label: 'Verbes introducteurs : matizar, desmentir, reconocer, advertir de, denunciar', band: 'C2', domain: 'vocabulary',
    pre: ['es.c2.writing.nominal_style'], errorTags: ['wrong_choice', 'irregular_form'], lessonId: 'es-c2-periodistico-2',
  },
  // Unité 5 : langue académique
  'es.c2.writing.academic_impersonal': {
    label: 'Écrit académique impersonnel : se, pluriel de modestie, cabe / conviene + infinitif', band: 'C2', domain: 'writing',
    errorTags: ['gender_agreement', 'wrong_choice'], lessonId: 'es-c2-academico-1',
  },
  'es.c2.function.academic_connectors': {
    label: 'Connecteurs soutenus : habida cuenta de, en aras de, a la luz de, en virtud de', band: 'C2', domain: 'function',
    pre: ['es.c2.writing.academic_impersonal'], errorTags: ['wrong_preposition', 'vocabulary_missing'], lessonId: 'es-c2-academico-1',
  },
  'es.c2.writing.citing_concluding': {
    label: 'Citer et conclure : como señala, en palabras de, en suma, queda por dilucidar', band: 'C2', domain: 'writing',
    errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'es-c2-academico-2',
  },
  'es.c2.grammar.dequeismo': {
    label: 'Dequeísmo et queísmo : pienso que, me di cuenta de que, estoy seguro de que', band: 'C2',
    pre: ['es.c2.writing.citing_concluding'], errorTags: ['wrong_preposition'], lessonId: 'es-c2-academico-2',
  },
  // Unité 6 : espagnol parlé
  'es.c2.function.discourse_markers': {
    label: 'Marqueurs du discours : vale, o sea, pues, venga, es que, qué va, que répétitif', band: 'C2', domain: 'function',
    errorTags: ['wrong_choice', 'listening_misunderstanding'], lessonId: 'es-c2-coloquial-1',
  },
  'es.c2.vocabulary.colloquial_spain': {
    label: 'Lexique familier d’Espagne : molar, guay, currar, pasta, majo, cutre, mogollón', band: 'C2', domain: 'vocabulary',
    pre: ['es.c2.function.discourse_markers'], errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c2-coloquial-1',
  },
  'es.c2.listening.latam_variants': {
    label: 'Reconnaître l’espagnol d’Amérique : lexique (computadora, celular, manejar), usages', band: 'C2', domain: 'listening',
    errorTags: ['listening_misunderstanding', 'vocabulary_missing'], lessonId: 'es-c2-coloquial-2',
  },
  'es.c2.grammar.voseo_ustedes': {
    label: 'ustedes à la place de vosotros, voseo (vos tenés, vení)', band: 'C2',
    pre: ['es.c2.listening.latam_variants'], errorTags: ['wrong_pronoun', 'irregular_form'], lessonId: 'es-c2-coloquial-2',
  },
  // Unité 7 : rhétorique
  'es.c2.reading.rhetorical_figures': {
    label: 'Figures : métaphore, métonymie, hyperbole, antithèse, anaphore, chiasme, question rhétorique', band: 'C2', domain: 'reading',
    errorTags: ['wrong_choice'], lessonId: 'es-c2-retorica-1',
  },
  'es.c2.function.understatement': {
    label: 'Litote et euphémisme : no es precisamente…, no está nada mal, ajuste de plantilla', band: 'C2', domain: 'function',
    pre: ['es.c2.reading.rhetorical_figures'], errorTags: ['wrong_choice', 'listening_misunderstanding'], lessonId: 'es-c2-retorica-1',
  },
  'es.c2.function.irony': {
    label: 'Ironie : ¡lo que faltaba!, ¡menudo…!, ya, claro, muy bonito, sí señor', band: 'C2', domain: 'function',
    errorTags: ['listening_misunderstanding', 'wrong_choice'], lessonId: 'es-c2-retorica-2',
  },
  'es.c2.function.implicature': {
    label: 'Sous-entendus : tú verás, allá tú, ahí lo dejo, con lo que…', band: 'C2', domain: 'function',
    pre: ['es.c2.function.irony'], errorTags: ['listening_misunderstanding', 'wrong_choice'], lessonId: 'es-c2-retorica-2',
  },
  // Unité 8 : précision lexicale
  'es.c2.vocabulary.false_friends': {
    label: 'Faux amis (noms, adjectifs) : embarazada, constipado, largo, éxito, suceso, carpeta', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c2-precision-1',
  },
  'es.c2.vocabulary.false_friend_verbs': {
    label: 'Faux amis (verbes) : quitar, contestar, despedir, molestar, pretender, presumir', band: 'C2', domain: 'vocabulary',
    pre: ['es.c2.vocabulary.false_friends'], errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'es-c2-precision-1',
  },
  'es.c2.vocabulary.paronyms': {
    label: 'Paronymes : actitud / aptitud, infligir / infringir, prever / proveer, perjuicio / prejuicio', band: 'C2', domain: 'vocabulary',
    errorTags: ['spelling', 'wrong_choice'], lessonId: 'es-c2-precision-2',
  },
  'es.c2.grammar.homophones_spelling': {
    label: 'Homophones : porque / por qué / porqué, sino / si no, a ver / haber, hay / ahí / ay', band: 'C2',
    pre: ['es.c2.vocabulary.paronyms'], errorTags: ['spelling'], lessonId: 'es-c2-precision-2',
  },
};
