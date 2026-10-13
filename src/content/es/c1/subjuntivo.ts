import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const MOOD = 'es.c1.grammar.negated_opinion_mood';
const DOUBLE = 'es.c1.grammar.double_meaning_verbs';
const INDEF = 'es.c1.grammar.indefinite_relatives';
const REDUP = 'es.c1.grammar.reduplicative_subjunctive';

export const subjuntivo1: Lesson = {
  id: 'es-c1-subjuntivo-1',
  cefr: 'C1',
  unitId: 'es-c1-subjuntivo',
  title: 'Indicatif ou subjonctif : les cas fins',
  subtitle: 'No creo que · no es que · que + subjonctif · decir, sentir, entender',
  kcIds: [MOOD, DOUBLE],
  estMinutes: 14,
  explanation: [
    {
      title: 'Opinion niée, « no es que », « que » en tête',
      body: 'creer, pensar, parecer + indicatif à l’affirmative, + subjonctif à la négative. no es que + subjonctif rejette une explication, souvent suivi de sino que / es que + indicatif. Une subordonnée en que placée en tête de phrase passe au subjonctif, même pour un fait réel ; el hecho de que préfère aussi le subjonctif.',
      table: [
        ['Creo que tiene razón.', 'Je crois qu’il a raison.'],
        ['No creo que tenga razón.', 'Je ne crois pas qu’il ait raison.'],
        ['No es que no quiera, es que no puedo.', 'Ce n’est pas que je ne veuille pas, c’est que je ne peux pas.'],
        ['Que no me hayas llamado me duele.', 'Que tu ne m’aies pas appelé me fait de la peine.'],
        ['El hecho de que sea rico no le da derecho a todo.', 'Qu’il soit riche ne lui donne pas tous les droits.'],
      ],
      examples: [
        { en: 'No me parece que sea el mejor momento.', fr: 'Il ne me semble pas que ce soit le meilleur moment.' },
        { en: 'No digo que mientas, sino que te equivocas.', fr: 'Je ne dis pas que tu mens, mais que tu te trompes.' },
      ],
      tip: 'Une question négative qui suggère (« ¿No crees que es tarde? » = tu ne trouves pas qu’il est tard ?) garde normalement l’indicatif : ce n’est pas un vrai doute.',
    },
    {
      title: 'Verbes à double sens',
      body: 'Certains verbes changent de sens selon le mode. Avec l’indicatif, on informe ou on constate ; avec le subjonctif, on ordonne, on regrette ou on juge.',
      table: [
        ['decir que + indicatif', 'dire, informer : Dice que viene mañana.'],
        ['decir que + subjonctif', 'dire de, ordonner : Dice que vengas mañana.'],
        ['sentir que + indicatif', 'sentir, percevoir : Siento que algo va mal.'],
        ['sentir que + subjonctif', 'regretter : Siento que estés enfermo.'],
        ['entender / comprender que + indicatif', 'se rendre compte : Entendí que no me quería.'],
        ['entender / comprender que + subjonctif', 'trouver normal : Entiendo que estés enfadado.'],
      ],
      examples: [
        { en: 'El médico me ha dicho que tome menos sal.', fr: 'Le médecin m’a dit de prendre moins de sel.' },
        { en: 'Siento mucho que no podáis venir.', fr: 'Je suis vraiment désolé que vous ne puissiez pas venir.' },
      ],
      tip: '« Je suis désolé que » = siento que / lamento que + subjonctif. Mais « je sens que » + indicatif : ne mettez pas le subjonctif par réflexe après sentir.',
    },
  ],
  exercises: exercises('es-c1-subjuntivo-1', 'C1', { kc: MOOD, tense: 'subjuntivo' })
    .mcq('Conozco bien a Marta y no creo que ___ la verdad.', ['diga', 'dice', 'dirá'], 0, 'Opinion niée → subjonctif : no creo que diga.', { d: 1.4 })
    .mcq('No es que no ___ ayudarte, es que hoy no tengo ni un minuto.', ['quiera', 'quiero', 'querré'], 0, 'no es que + subjonctif pour écarter une explication.', { d: 1.6 })
    .cloze('Que no me ___ ni una sola vez en todo el mes me parece increíble.', ['hayas llamado'], 'Subordonnée en que en tête de phrase → subjonctif, ici passé (fait accompli, principale au présent).', { hint: 'llamar, tú', d: 1.9 })
    .cloze('El médico me ha dicho que ___ menos sal; si no, tendré problemas de tensión.', ['tome'], 'decir que + subjonctif = conseil, ordre : que tome.', { kc: DOUBLE, hint: 'tomar, yo', d: 1.7 })
    .type('Complète : « Siento mucho que no (poder, vosotros) ___ venir a la boda. »', ['podáis', 'hayáis podido'], 'sentir que = regretter → subjonctif : podáis (ou hayáis podido si la noce a déjà eu lieu).', { kc: DOUBLE, d: 1.6 })
    .type('Complète (on perçoit quelque chose) : « Siento que algo no (ir) ___ bien entre nosotros. »', ['va'], 'sentir que = percevoir → indicatif : va.', { kc: DOUBLE, d: 1.8 })
    .order('Ce n’est pas que je ne veuille pas, c’est que je ne peux pas.', 'No es que no quiera, es que no puedo.', 'no es que + subjonctif (quiera), es que + indicatif (puedo).', { distractors: ['quiero'], d: 1.6 })
    .tr('Je ne pense pas qu’ils arrivent à l’heure.', [
      ...alt(['No creo que ', 'No pienso que '], ['lleguen a tiempo.', 'lleguen a la hora.', 'lleguen puntuales.', 'vayan a llegar a tiempo.']),
      'No creo que ellos lleguen a tiempo.', 'Creo que no llegarán a tiempo.', 'Creo que no van a llegar a tiempo.',
    ], 'no creo que + subjonctif (lleguen) ; creo que no + indicatif est aussi possible.', { d: 1.5 })
    .tr('Je comprends que tu sois {fâché|fâchée}, mais ce n’est pas ma faute.', alt(['Entiendo', 'Comprendo'], [' que estés '], ['enfadado', 'enfadada', 'molesto', 'molesta'], [', pero no es '], ['culpa mía.', 'mi culpa.']),
      'entender / comprender que = trouver normal → subjonctif : estés.', { kc: DOUBLE, d: 1.8 })
    .listen('No es que el piso sea caro, es que no tiene ascensor y mi abuela no puede subir escaleras.', '¿Cuál es el verdadero problema del piso?', [
      'Que no tiene ascensor', 'Que es demasiado caro', 'Que está lejos de la abuela',
    ], 0, 'no es que sea caro écarte le prix ; la vraie raison suit : es que no tiene ascensor.', { d: 1.6 })
    .listen('Te digo que vengas ahora mismo, no que me llames cuando puedas.', '¿Qué quiere la persona que habla?', [
      'Que el otro venga inmediatamente', 'Que el otro la llame más tarde', 'Que el otro le cuente la verdad',
    ], 0, 'decir que + subjonctif (vengas) = ordre.', { kc: DOUBLE, d: 1.7 })
    .dictation('Que no hayas dicho nada me parece muy raro.', 'que en tête de phrase → subjonctif : hayas dicho.', { d: 1.8 })
    .repeat('No niego que tenga razón, pero no me convence.', 'no negar que + subjonctif : le locuteur concède sans adhérer.', { d: 1.5 })
    .say('Je suis {désolé|désolée} que tu sois malade.', alt(['Siento ', 'Siento mucho ', 'Lamento ', 'Lamento mucho '], ['que estés '], ['enfermo.', 'enferma.']),
      'sentir / lamentar que = regretter → subjonctif : estés.', { kc: DOUBLE, d: 1.5 })
    .answer('¿Hay alguna idea muy extendida que tú no compartas? Explica por qué no crees que sea cierta.',
      'No creo que el dinero dé la felicidad, porque conozco a gente rica que vive muy angustiada y a gente humilde que es feliz con muy poco.',
      'no creo que / no es que / dudo que + subjonctif.', { keywords: [['no creo que', 'no pienso que', 'no es que', 'no me parece que', 'dudo que', 'no digo que']], minWords: 15, d: 2.0 })
    .build(),
};

export const subjuntivo2: Lesson = {
  id: 'es-c1-subjuntivo-2',
  cefr: 'C1',
  unitId: 'es-c1-subjuntivo',
  title: 'Quienquiera que, pase lo que pase',
  subtitle: 'Quienquiera · cualquiera · sea cual sea · por muy… que',
  kcIds: [INDEF, REDUP],
  estMinutes: 14,
  explanation: [
    {
      title: 'Relatifs indéfinis + subjonctif',
      body: 'quienquiera que (qui que ce soit qui), cualquiera que (n’importe qui / quel que soit), dondequiera que (où que), comoquiera que (de quelque manière que) se construisent avec le subjonctif. sea cual sea + nom = quel que soit.',
      table: [
        ['Quienquiera que llame, dile que no estoy.', 'Qui que ce soit qui appelle, dis-lui que je ne suis pas là.'],
        ['Cualquiera que lo conozca te dirá lo mismo.', 'Quiconque le connaît te dira la même chose.'],
        ['cualquier + nom / un nom + cualquiera', 'cualquier día (n’importe quel jour) / un día cualquiera (un jour ordinaire)'],
        ['Sea cual sea tu decisión, te apoyaré.', 'Quelle que soit ta décision, je te soutiendrai.'],
        ['Sean cuales sean los motivos, no lo acepto.', 'Quels que soient les motifs, je ne l’accepte pas.'],
      ],
      examples: [
        { en: 'Dondequiera que vayas, encontrarás gente amable.', fr: 'Où que tu ailles, tu trouveras des gens aimables.' },
        { en: 'Para cualquier duda que tengáis, dirigíos al tutor.', fr: 'Pour toute question, adressez-vous au tuteur.' },
      ],
      tip: 'cualquier perd son -a devant un nom (cualquier persona), jamais devant que : « cualquiera que », pas « cualquier que ». Le pluriel cualesquiera / quienesquiera existe mais reste très soutenu.',
    },
    {
      title: 'Subjonctif redoublé et « por muy… que »',
      body: 'La structure verbe + relatif + même verbe au subjonctif exprime l’indifférence : quoi que, où que, quel que soit. por muy / más + adjectif ou adverbe + que + subjonctif = si… que, avoir beau.',
      table: [
        ['Pase lo que pase, te llamo.', 'Quoi qu’il arrive, je t’appelle.'],
        ['Digan lo que digan, me presento.', 'Quoi qu’on dise, je me présente.'],
        ['Vayas donde vayas, te seguiré.', 'Où que tu ailles, je te suivrai.'],
        ['Cueste lo que cueste, lo terminaremos.', 'Coûte que coûte, nous le terminerons.'],
        ['Por muy cansado que esté, siempre ayuda.', 'Si fatigué qu’il soit, il aide toujours.'],
      ],
      examples: [
        { en: 'Sea como sea, hay que tomar una decisión hoy.', fr: 'Quoi qu’il en soit, il faut prendre une décision aujourd’hui.' },
        { en: 'Por poco que coma, siempre engorda.', fr: 'Il a beau manger peu, il grossit toujours.' },
      ],
      tip: '« Quoi qu’il arrive » ne se traduit pas mot à mot : on répète le verbe (pase lo que pase). Le temps suit la concordance : pasara lo que pasara dans un récit au passé.',
    },
  ],
  exercises: exercises('es-c1-subjuntivo-2', 'C1', { kc: INDEF, tense: 'subjuntivo' })
    .mcq('___ que llame, dile que estoy en una reunión.', ['Quienquiera', 'Quienquier', 'Cualquier'], 0,
      'quienquiera que + subjonctif = qui que ce soit qui. (Cualquiera que serait aussi correct, mais cualquier ne s’emploie que devant un nom.)', { d: 1.6 })
    .mcq('¿Quién puede inscribirse en el intercambio?', [
      'Cualquier alumno, sea cual sea su nivel', 'Solo los alumnos de nivel avanzado', 'Solo los alumnos que hablen dos lenguas',
    ], 0, 'sea cual sea vuestro nivel, quienquiera que desee inscribirse : aucune condition de niveau.', {
      kc: [INDEF, REDUP], d: 1.8,
      passage: 'Carta de la directora de la Escuela de Idiomas de Valdemora\nQueridos alumnos: sea cual sea vuestro nivel, os animo a participar en el intercambio de primavera. Vengáis de donde vengáis y habléis la lengua que habléis, encontraréis aquí un lugar de encuentro. Quienquiera que desee inscribirse puede hacerlo en secretaría hasta el 15 de marzo. Por muy ocupados que estéis, os aseguro que merece la pena: pase lo que pase, la experiencia os enriquecerá. Para cualquier duda que tengáis, dirigíos a vuestro tutor.',
    })
    .cloze('Mañana salimos a las seis, ___ lo que pase.', ['pase'], 'Subjonctif redoublé : pase lo que pase = quoi qu’il arrive.', { kc: REDUP, hint: 'pasar', d: 1.5 })
    .cloze('Por muy cansado que ___, siempre saca tiempo para sus hijos.', ['esté', 'está'], 'por muy + adjectif + que : subjonctif habituel (esté) ; l’indicatif, plus rare, insiste sur un fait constaté.', { kc: REDUP, hint: 'estar, él', d: 1.8 })
    .type('Complète : « (ser) ___ cual sea el resultado, estaremos orgullosos de vosotros. »', ['Sea'], 'sea cual sea + nom singulier = quel que soit.', { d: 1.7 })
    .type('Complète : « Digan lo que (decir) ___, yo pienso presentarme a las elecciones. »', ['digan'], 'Même verbe, même forme : digan lo que digan.', { kc: REDUP, d: 1.6 })
    .order('Où que tu ailles, je te suivrai.', 'Vayas donde vayas, te seguiré.', 'Subjonctif redoublé avec donde : vayas donde vayas.', { kc: REDUP, distractors: ['vas'], d: 1.7 })
    .tr('Quel que soit le prix, je l’achèterai.', [
      ...alt(['Sea cual sea el precio', 'Cualquiera que sea el precio', 'Cueste lo que cueste'], [', '], ['lo compraré.', 'la compraré.', 'me lo compraré.', 'me la compraré.', 'lo voy a comprar.', 'la voy a comprar.']),
      'Lo compraré cueste lo que cueste.', 'Lo compraré sea cual sea el precio.', 'La compraré cueste lo que cueste.', 'La compraré sea cual sea el precio.',
    ], 'quel que soit = sea cual sea / cualquiera que sea ; coûte que coûte = cueste lo que cueste.', { kc: [INDEF, REDUP], d: 1.9 })
    .tr('Quiconque veut participer doit s’inscrire avant vendredi.', alt(['Quienquiera que quiera', 'Cualquiera que quiera', 'Quien quiera', 'Todo el que quiera', 'Todo aquel que quiera'], [' participar '], ['debe', 'tiene que'], [' inscribirse antes del viernes.', ' apuntarse antes del viernes.']),
      'quienquiera que / cualquiera que / quien + subjonctif pour une personne indéterminée.', { d: 2.0 })
    .listen('Vengas cuando vengas, avísame antes, porque esta semana trabajo de noche y duermo por las mañanas.', '¿Qué le pide al otro?', [
      'Que le avise antes de venir', 'Que venga por la mañana', 'Que no venga esta semana',
    ], 0, 'vengas cuando vengas = quel que soit le moment où tu viens.', { kc: REDUP, d: 1.7 })
    .listen('Cualquier persona que haya perdido un objeto en el tren puede reclamarlo en la oficina de la estación durante un mes.', '¿Cuánto tiempo hay para reclamar un objeto perdido?', [
      'Un mes', 'Una semana', 'Un año',
    ], 0, 'cualquier persona que haya perdido : antécédent indéterminé → subjonctif.', { d: 1.5 })
    .dictation('Pase lo que pase, no pienso tirar la toalla.', 'pase lo que pase ; tirar la toalla = jeter l’éponge.', { kc: REDUP, d: 1.6 })
    .repeat('Por mucho que insistas, no voy a cambiar de opinión.', 'por mucho que + subjonctif = tu auras beau insister.', { kc: REDUP, d: 1.5 })
    .say('Quoi qu’il arrive, appelle-moi.', ['Pase lo que pase, llámame.', 'Llámame pase lo que pase.', 'Ocurra lo que ocurra, llámame.', 'Suceda lo que suceda, llámame.', 'Llámame ocurra lo que ocurra.'],
      'quoi qu’il arrive → pase lo que pase (verbe redoublé).', { kc: REDUP, d: 1.6 })
    .answer('¿Qué principio o costumbre mantienes pase lo que pase?',
      'Pase lo que pase, llamo a mi abuela todos los domingos, y por muy cansada que esté, nunca me acuesto sin leer un rato.',
      'pase lo que pase, por muy… que, sea como sea.', { kc: [REDUP, INDEF], keywords: [['pase lo que pase', 'sea como sea', 'por muy', 'cueste lo que cueste', 'digan lo que digan', 'haga lo que haga', 'sea cual sea']], minWords: 15, d: 2.0 })
    .build(),
};
