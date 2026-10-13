import type { KcDef } from '../../level';

/** Notions du niveau C2 d'italien (préfixe `it.c2.`), prérequis internes au niveau. */
export const KCS_C2: Record<string, KcDef> = {
  // Unité 1 : nuances modales
  'it.c2.grammar.epistemic_future': {
    label: 'Futur épistémique et concessif : sarà, avrà perso, sarà anche vero, ma…', band: 'C2', domain: 'grammar',
    errorTags: ['wrong_tense', 'gender_agreement'], lessonId: 'it-c2-sfumature-1',
  },
  'it.c2.grammar.hearsay_conditional': {
    label: 'Conditionnel de l’information non confirmée : sarebbe fuggito, secondo fonti…', band: 'C2', domain: 'grammar',
    pre: ['it.c2.grammar.epistemic_future'], errorTags: ['wrong_tense', 'wrong_auxiliary', 'gender_agreement'], lessonId: 'it-c2-sfumature-1',
  },
  'it.c2.function.mitigation': {
    label: 'Atténuer : volevo, direi che, mi permetto di, non è che + subjonctif', band: 'C2', domain: 'function',
    errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'it-c2-sfumature-2',
  },
  'it.c2.function.hedging': {
    label: 'Prudence épistémique : sembrerebbe che, non è escluso che, a quanto pare', band: 'C2', domain: 'function',
    pre: ['it.c2.function.mitigation'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'it-c2-sfumature-2',
  },
  // Unité 2 : langue littéraire
  'it.c2.grammar.trapassato_remoto': {
    label: 'Trapassato remoto : appena ebbe finito, dopo che fu partita', band: 'C2', domain: 'grammar',
    errorTags: ['wrong_tense', 'wrong_auxiliary', 'irregular_form'], lessonId: 'it-c2-letterario-1',
  },
  'it.c2.grammar.absolute_participle': {
    label: 'Participe absolu : terminata la cena, partiti gli ospiti, detto ciò', band: 'C2', domain: 'grammar',
    pre: ['it.c2.grammar.trapassato_remoto'], errorTags: ['gender_agreement', 'word_order'], lessonId: 'it-c2-letterario-1',
  },
  'it.c2.vocabulary.literary_lexicon': {
    label: 'Lexique littéraire : egli, codesto, allorché, giacché, ove, sovente, alquanto', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-letterario-2',
  },
  'it.c2.grammar.literary_syntax': {
    label: 'Syntaxe soutenue : vendesi, trattasi, non v’è, inversion, gérondif absolu', band: 'C2', domain: 'grammar',
    pre: ['it.c2.vocabulary.literary_lexicon'], errorTags: ['word_order', 'clitic_pronoun'], lessonId: 'it-c2-letterario-2',
  },
  // Unité 3 : idiomes et proverbes
  'it.c2.vocabulary.idioms_imagery': {
    label: 'Idiomes imagés : due piccioni con una fava, mosca bianca, menare il can per l’aia', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-idiomi-1',
  },
  'it.c2.vocabulary.idioms_attitude': {
    label: 'Idiomes de comportement : fare il pesce in barile, avere la coda di paglia, salvare capra e cavoli', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-idiomi-1',
  },
  'it.c2.vocabulary.proverbs': {
    label: 'Proverbes : tra il dire e il fare, l’abito non fa il monaco, chi dorme non piglia pesci', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-idiomi-2',
  },
  'it.c2.function.proverb_allusion': {
    label: 'Proverbes cités à moitié et détournés : chi la fa…, paese che vai…, detto fatto', band: 'C2', domain: 'function',
    pre: ['it.c2.vocabulary.proverbs'], errorTags: ['vocabulary_missing', 'listening_misunderstanding'], lessonId: 'it-c2-idiomi-2',
  },
  // Unité 4 : langue des médias
  'it.c2.reading.headline_style': {
    label: 'Titres de presse : ellipse, ordre verbe-sujet, « Manovra, via libera del Senato »', band: 'C2', domain: 'reading',
    errorTags: ['word_order', 'article_wrong'], lessonId: 'it-c2-giornalistico-1',
  },
  'it.c2.vocabulary.press_lexicon': {
    label: 'Lexique journalistique : varare, slittare, la stangata, il braccio di ferro, il blitz', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-giornalistico-1',
  },
  'it.c2.grammar.nominal_style': {
    label: 'Style nominal : dopo l’approvazione, a seguito di, in vista di, al termine di', band: 'C2', domain: 'grammar',
    pre: ['it.c2.reading.headline_style'], errorTags: ['wrong_preposition', 'article_wrong'], lessonId: 'it-c2-giornalistico-2',
  },
  'it.c2.function.press_reporting': {
    label: 'Verbes introducteurs et sources : ribadire, ammettere, replicare, secondo quanto riferito', band: 'C2', domain: 'function',
    errorTags: ['wrong_choice', 'wrong_tense'], lessonId: 'it-c2-giornalistico-2',
  },
  // Unité 5 : langue académique
  'it.c2.writing.academic_structure': {
    label: 'Structurer un texte académique : il presente lavoro, in primo luogo, alla luce di, ne consegue', band: 'C2', domain: 'writing',
    errorTags: ['wrong_choice', 'wrong_preposition'], lessonId: 'it-c2-accademico-1',
  },
  'it.c2.grammar.academic_impersonal': {
    label: 'Impersonnel académique : si ritiene che, va sottolineato, occorre, si procederà', band: 'C2', domain: 'grammar',
    errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'it-c2-accademico-1',
  },
  'it.c2.writing.academic_argument': {
    label: 'Citer et argumenter : pur riconoscendo, a differenza di, non si può non rilevare', band: 'C2', domain: 'writing',
    pre: ['it.c2.writing.academic_structure'], errorTags: ['wrong_choice', 'subjunctive'], lessonId: 'it-c2-accademico-2',
  },
  'it.c2.vocabulary.academic_lexicon': {
    label: 'Lexique de la recherche : avvalorare, confutare, evidenziare, esiguo, il campione', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-accademico-2',
  },
  // Unité 6 : italien parlé
  'it.c2.speaking.discourse_markers': {
    label: 'Marqueurs du discours : allora, cioè, insomma, praticamente, dai, boh', band: 'C2', domain: 'speaking',
    errorTags: ['wrong_choice', 'listening_misunderstanding'], lessonId: 'it-c2-parlato-1',
  },
  'it.c2.grammar.colloquial_structures': {
    label: 'Tournures familières : mica, manco, che causal, mica male', band: 'C2', domain: 'grammar',
    errorTags: ['word_order', 'wrong_choice'], lessonId: 'it-c2-parlato-1',
  },
  'it.c2.listening.regional_varieties': {
    label: 'Variétés régionales (reconnaissance) : la Giulia, tengo fame, annamo, passato remoto méridional', band: 'C2', domain: 'listening',
    pre: ['it.c2.speaking.discourse_markers'], errorTags: ['listening_misunderstanding', 'wrong_choice'], lessonId: 'it-c2-parlato-2',
  },
  'it.c2.vocabulary.regionalisms': {
    label: 'Régionalismes lexicaux : anguria / cocomero, gruccia / stampella, marinare la scuola', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'listening_misunderstanding'], lessonId: 'it-c2-parlato-2',
  },
  // Unité 7 : rhétorique
  'it.c2.reading.figures_of_speech': {
    label: 'Figures de style : litote, hyperbole, métaphore, métonymie, oxymore', band: 'C2', domain: 'reading',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-retorica-1',
  },
  'it.c2.function.persuasive_rhetoric': {
    label: 'Procédés persuasifs : question rhétorique, prétérition, anaphore, climax', band: 'C2', domain: 'function',
    pre: ['it.c2.reading.figures_of_speech'], errorTags: ['wrong_choice'], lessonId: 'it-c2-retorica-1',
  },
  'it.c2.function.irony': {
    label: 'Ironie : bravo, complimenti ; ci mancava solo questa ; sai che novità', band: 'C2', domain: 'function',
    errorTags: ['listening_misunderstanding', 'wrong_choice'], lessonId: 'it-c2-retorica-2',
  },
  'it.c2.function.implicature': {
    label: 'Sous-entendus : fai come vuoi, se lo dici tu, vedremo, non per dire', band: 'C2', domain: 'function',
    pre: ['it.c2.function.irony'], errorTags: ['listening_misunderstanding', 'wrong_choice'], lessonId: 'it-c2-retorica-2',
  },
  // Unité 8 : précision lexicale
  'it.c2.vocabulary.false_friends_nouns': {
    label: 'Faux amis (noms, adjectifs) : morbido, i parenti, la camera, il burro, la firma', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-precisione-1',
  },
  'it.c2.vocabulary.false_friends_verbs': {
    label: 'Faux amis (verbes) : fermare, salire, pretendere, intendere, rimandare', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-precisione-1',
  },
  'it.c2.vocabulary.paronyms': {
    label: 'Paronymes et genre distinctif : rilevare / rivelare, il fine / la fine', band: 'C2', domain: 'vocabulary',
    pre: ['it.c2.vocabulary.false_friends_nouns'], errorTags: ['wrong_choice', 'article_wrong', 'spelling'], lessonId: 'it-c2-precisione-2',
  },
  'it.c2.vocabulary.precise_verbs': {
    label: 'Verbe exact : stipulare, redigere, svolgere, rilasciare, conferire', band: 'C2', domain: 'vocabulary',
    errorTags: ['vocabulary_missing', 'wrong_choice'], lessonId: 'it-c2-precisione-2',
  },
};
