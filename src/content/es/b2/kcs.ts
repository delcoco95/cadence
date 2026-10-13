import type { KcDef } from '../../level';

/** Notions du niveau B2 d'espagnol (préfixe `es.b2.`), prérequis pris dans le même niveau. */
export const KCS_B2: Record<string, KcDef> = {
  // Unité 1 : subjonctif (2)
  'es.b2.grammar.imperfect_subjunctive': {
    label: 'Subjonctif imparfait : formes en -ra et en -se (hablara / hablase, tuviera, fuera)', band: 'B2',
    errorTags: ['subjunctive', 'irregular_form', 'spelling'], lessonId: 'es-b2-subjuntivo-1',
  },
  'es.b2.grammar.sequence_of_tenses': {
    label: 'Concordance des temps : quería que vinieras, me gustaría que hablarais', band: 'B2',
    pre: ['es.b2.grammar.imperfect_subjunctive'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-subjuntivo-1',
  },
  'es.b2.grammar.perfect_subjunctive': {
    label: 'Subjonctif passé : me alegro de que hayas venido, cuando hayas terminado', band: 'B2',
    errorTags: ['subjunctive', 'wrong_auxiliary', 'wrong_tense'], lessonId: 'es-b2-subjuntivo-2',
  },
  'es.b2.grammar.ojala_como_si': {
    label: 'ojalá + présent / imparfait / plus-que-parfait du subjonctif ; como si + subjonctif', band: 'B2+',
    pre: ['es.b2.grammar.imperfect_subjunctive'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-subjuntivo-2',
  },
  // Unité 2 : irréel du passé
  'es.b2.grammar.conditional_perfect': {
    label: 'Conditionnel passé : habría + participe (regret, conseil après coup)', band: 'B2',
    errorTags: ['wrong_auxiliary', 'wrong_tense', 'irregular_form'], lessonId: 'es-b2-hipotesis-1',
  },
  'es.b2.grammar.past_unreal_conditional': {
    label: 'Irréel du passé : si hubiera / hubiese + participe, habría + participe', band: 'B2',
    pre: ['es.b2.grammar.conditional_perfect', 'es.b2.grammar.imperfect_subjunctive'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-hipotesis-1',
  },
  'es.b2.grammar.mixed_conditionals': {
    label: 'Hypothèses mixtes : si hubiera estudiado, ahora sería… ; si fuera…, habría…', band: 'B2+',
    pre: ['es.b2.grammar.past_unreal_conditional'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-hipotesis-2',
  },
  'es.b2.grammar.de_infinitive_reproach': {
    label: 'de + infinitif passé (de haberlo sabido) ; reproche : deberías haber + participe', band: 'B2+',
    pre: ['es.b2.grammar.past_unreal_conditional'], errorTags: ['wrong_tense', 'clitic_pronoun', 'word_order'], lessonId: 'es-b2-hipotesis-2',
  },
  // Unité 3 : subordonnées
  'es.b2.grammar.temporal_subjunctive': {
    label: 'Temporelles : cuando, en cuanto, hasta que + subjonctif pour le futur, indicatif sinon', band: 'B2',
    errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-temporales-1',
  },
  'es.b2.grammar.subjunctive_conjunctions': {
    label: 'antes de que, para que, sin que + subjonctif ; infinitif si même sujet', band: 'B2',
    pre: ['es.b2.grammar.temporal_subjunctive'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-b2-temporales-1',
  },
  'es.b2.grammar.relative_subjunctive': {
    label: 'Relatives : antécédent connu (indicatif) ou recherché / inexistant (subjonctif)', band: 'B2',
    errorTags: ['subjunctive', 'wrong_preposition'], lessonId: 'es-b2-temporales-2',
  },
  'es.b2.grammar.free_relative_subjunctive': {
    label: 'Relatives libres : el que quieras, lo que digas, donde prefieras, como quieras', band: 'B2+',
    pre: ['es.b2.grammar.relative_subjunctive'], errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-b2-temporales-2',
  },
  // Unité 4 : discours indirect
  'es.b2.grammar.reported_statements': {
    label: 'Discours rapporté au passé : dijo que estaba, había terminado, iría', band: 'B2',
    errorTags: ['wrong_tense'], lessonId: 'es-b2-estilo-indirecto-1',
  },
  'es.b2.grammar.reported_deixis': {
    label: 'Repères rapportés : hoy → ese día, mañana → al día siguiente, aquí → allí, venir → ir', band: 'B2',
    pre: ['es.b2.grammar.reported_statements'], errorTags: ['wrong_choice', 'vocabulary_missing'], lessonId: 'es-b2-estilo-indirecto-1',
  },
  'es.b2.grammar.reported_questions': {
    label: 'Questions indirectes : preguntó si…, preguntó dónde / qué / cuándo…', band: 'B2',
    pre: ['es.b2.grammar.reported_statements'], errorTags: ['wrong_tense', 'word_order', 'spelling'], lessonId: 'es-b2-estilo-indirecto-2',
  },
  'es.b2.grammar.reported_commands': {
    label: 'Ordres rapportés : me dijo que viniera, me pidió que…, me aconsejó que…', band: 'B2+',
    pre: ['es.b2.grammar.reported_statements', 'es.b2.grammar.sequence_of_tenses'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-estilo-indirecto-2',
  },
  // Unité 5 : passif et impersonnel
  'es.b2.grammar.passive_ser': {
    label: 'Passif : ser + participe accordé + por', band: 'B2',
    errorTags: ['gender_agreement', 'wrong_preposition', 'irregular_form'], lessonId: 'es-b2-pasiva-1',
  },
  'es.b2.grammar.estar_participle': {
    label: 'estar + participe : état résultant (está cerrado) ou ser : action', band: 'B2',
    pre: ['es.b2.grammar.passive_ser'], errorTags: ['ser_estar', 'gender_agreement'], lessonId: 'es-b2-pasiva-1',
  },
  'es.b2.grammar.passive_se': {
    label: 'Passive réfléchie : se vende piso, se venden pisos (accord du verbe)', band: 'B2',
    errorTags: ['plural_form', 'clitic_pronoun'], lessonId: 'es-b2-pasiva-2',
  },
  'es.b2.grammar.impersonal_se': {
    label: 'se impersonnel (se vive bien, se busca a…) ; uno, la gente, 3e personne du pluriel', band: 'B2+',
    pre: ['es.b2.grammar.passive_se'], errorTags: ['clitic_pronoun', 'wrong_pronoun'], lessonId: 'es-b2-pasiva-2',
  },
  // Unité 6 : périphrases
  'es.b2.grammar.llevar_gerund': {
    label: 'llevar + durée + gérondif (llevo tres años viviendo aquí) ; llevar sin + infinitif', band: 'B2',
    errorTags: ['wrong_preposition', 'wrong_tense', 'irregular_form'], lessonId: 'es-b2-perifrasis-1',
  },
  'es.b2.grammar.seguir_gerund': {
    label: 'seguir + gérondif (toujours, continuer à) ; seguir sin + infinitif', band: 'B2',
    errorTags: ['wrong_preposition', 'irregular_form'], lessonId: 'es-b2-perifrasis-1',
  },
  'es.b2.grammar.phase_periphrases': {
    label: 'Périphrases de phase : acabar de, dejar de, ponerse a, echarse a, estar a punto de', band: 'B2',
    errorTags: ['wrong_preposition', 'wrong_choice'], lessonId: 'es-b2-perifrasis-2',
  },
  'es.b2.grammar.volver_a_soler': {
    label: 'volver a + infinitif (refaire) ; soler + infinitif (avoir l’habitude de)', band: 'B2',
    pre: ['es.b2.grammar.phase_periphrases'], errorTags: ['wrong_preposition', 'clitic_pronoun'], lessonId: 'es-b2-perifrasis-2',
  },
  // Unité 7 : concession et condition
  'es.b2.grammar.aunque_mood': {
    label: 'aunque + indicatif (fait réel) ou subjonctif (hypothèse, fait sans importance)', band: 'B2+',
    errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-concesivas-1',
  },
  'es.b2.grammar.concessive_connectors': {
    label: 'a pesar de (que), por mucho que, por más que', band: 'B2',
    pre: ['es.b2.grammar.aunque_mood'], errorTags: ['wrong_preposition', 'subjunctive'], lessonId: 'es-b2-concesivas-1',
  },
  'es.b2.grammar.conditional_connectors': {
    label: 'con tal de que, siempre que, siempre y cuando, a condición de que + subjonctif', band: 'B2',
    errorTags: ['subjunctive', 'wrong_choice'], lessonId: 'es-b2-concesivas-2',
  },
  'es.b2.grammar.negative_conditional_connectors': {
    label: 'a no ser que, a menos que, salvo que, en caso de que, como + subjonctif ; por si + indicatif', band: 'B2+',
    pre: ['es.b2.grammar.conditional_connectors'], errorTags: ['subjunctive', 'wrong_tense'], lessonId: 'es-b2-concesivas-2',
  },
  // Unité 8 : verbes de changement
  'es.b2.vocabulary.change_ponerse_quedarse': {
    label: 'Devenir (passager ou subi) : ponerse nervioso, quedarse sordo / embarazada / dormido', band: 'B2', domain: 'vocabulary',
    errorTags: ['wrong_choice', 'gender_agreement'], lessonId: 'es-b2-cambio-1',
  },
  'es.b2.vocabulary.change_volverse_hacerse': {
    label: 'Devenir (profond ou voulu) : volverse loco, hacerse rico / médico', band: 'B2+', domain: 'vocabulary',
    pre: ['es.b2.vocabulary.change_ponerse_quedarse'], errorTags: ['wrong_choice'], lessonId: 'es-b2-cambio-1',
  },
  'es.b2.vocabulary.change_convertirse_llegar': {
    label: 'convertirse en + nom, llegar a ser, acabar + gérondif (finir par)', band: 'B2', domain: 'vocabulary',
    pre: ['es.b2.vocabulary.change_volverse_hacerse'], errorTags: ['wrong_preposition', 'wrong_choice'], lessonId: 'es-b2-cambio-2',
  },
  'es.b2.vocabulary.diminutives_augmentatives': {
    label: 'Suffixes : -ito, -cito, -illo (diminutifs), -azo, -ón (augmentatifs), -ucho (péjoratif)', band: 'B2', domain: 'vocabulary',
    errorTags: ['spelling', 'vocabulary_missing'], lessonId: 'es-b2-cambio-2',
  },
};
