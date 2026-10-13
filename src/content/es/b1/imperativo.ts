import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const NEG = 'es.b1.grammar.imperative_negative';
const USTED = 'es.b1.grammar.imperative_usted';
const PRON = 'es.b1.grammar.imperative_pronouns';

export const imperativo1: Lesson = {
  id: 'es-b1-imperativo-1',
  cefr: 'B1',
  unitId: 'es-b1-imperativo',
  title: 'L’impératif négatif',
  subtitle: 'No hables, no vengáis, no se preocupe',
  kcIds: [NEG, USTED],
  estMinutes: 10,
  explanation: [
    {
      title: 'no + subjonctif présent',
      body: 'L’impératif négatif reprend le subjonctif présent, à toutes les personnes. Il ne ressemble donc pas à l’impératif affirmatif de tú et de vosotros.',
      table: [
        ['verbe', 'tú · vosotros · usted · ustedes'],
        ['hablar', 'no hables · no habléis · no hable · no hablen'],
        ['comer', 'no comas · no comáis · no coma · no coman'],
        ['ir', 'no vayas · no vayáis · no vaya · no vayan'],
        ['hacer, ser', 'no hagas, no hagáis · no seas, no seáis'],
      ],
      examples: [
        { en: 'No llegues tarde, por favor.', fr: 'N’arrive pas en retard, s’il te plaît.' },
        { en: 'No hagáis ruido, que el bebé duerme.', fr: 'Ne faites pas de bruit, le bébé dort.' },
      ],
      tip: 'On ne met jamais no devant l’impératif affirmatif : « No ven » ✗ → « No vengas » ✓ ; « No comed » ✗ → « No comáis » ✓.',
    },
    {
      title: 'Usted et ustedes',
      body: 'Pour vouvoyer, l’impératif est au subjonctif, à l’affirmatif comme au négatif : pase, siga, espere ; no espere, no se preocupe.',
      examples: [
        { en: 'Siga recto y gire a la izquierda.', fr: 'Continuez tout droit et tournez à gauche.' },
        { en: 'No se preocupen, llegamos a tiempo.', fr: 'Ne vous inquiétez pas, nous arrivons à temps.' },
      ],
      tip: 'En Espagne, « vous » adressé à plusieurs amis se dit vosotros (no os preocupéis) ; ustedes est réservé au vouvoiement d’un groupe.',
    },
  ],
  exercises: exercises('es-b1-imperativo-1', 'B1', { kc: NEG, tense: 'imperativo' })
    .mcq('¡No ___ la puerta! Hace frío.', ['abras', 'abre', 'abres'], 0, 'Négatif → subjonctif : no abras.', { d: -0.5 })
    .mcq('Señor, ___ aquí, por favor. El doctor viene enseguida.', ['espere', 'espera', 'esperad'], 0, 'usted → subjonctif : espere.', { kc: USTED, d: -0.4 })
    .cloze('Chicos, no ___ tanto ruido, que el bebé está durmiendo.', ['hagáis'], 'vosotros, négatif : no hagáis (hacer → haga).', { hint: 'hacer, vosotros', d: -0.3 })
    .cloze('No ___ nervioso, todo va a salir bien.', ['estés'], 'tú, négatif : no estés (estar → esté).', { hint: 'estar, tú', d: -0.4 })
    .type('Mets à la forme négative : « Ven mañana. »', ['No vengas mañana.', 'Mañana no vengas.'], 'ven → no vengas.', { loose: true, d: -0.4 })
    .type('Mets à la forme négative : « Id al centro en coche. »', ['No vayáis al centro en coche.'], 'id (vosotros) → no vayáis.', { loose: true, d: -0.2 })
    .order('Ne sois pas si pessimiste !', '¡No seas tan pesimista!', 'ser → no seas ; si (intensif) = tan.', { distractors: ['eres'], d: -0.4 })
    .tr('Ne dites rien à Marta.', [
      'No le digáis nada a Marta.', 'No digáis nada a Marta.', 'No le diga nada a Marta.', 'No diga nada a Marta.',
      'No le digan nada a Marta.', 'No digan nada a Marta.', 'A Marta no le digáis nada.', 'A Marta no le diga nada.', 'A Marta no le digan nada.',
    ], 'vous → no digáis (vosotros), no diga / no digan (usted, ustedes).', { kc: [NEG, USTED], d: -0.2 })
    .tr('Ne t’inquiète pas, je t’aide.', ['No te preocupes, te ayudo.', 'No te preocupes, yo te ayudo.', 'No te preocupes, que te ayudo.', 'No te preocupes, ya te ayudo yo.'],
      'preocuparse → no te preocupes.', { d: -0.3 })
    .listen('Por favor, no pisen el césped y no den de comer a los patos.', 'Qu’est-il interdit de faire ?',
      ['Marcher sur la pelouse et nourrir les canards', 'Faire du vélo et courir', 'Pique-niquer et crier'], 0,
      'no pisen, no den : impératif négatif de ustedes.', { kc: USTED, d: -0.3 })
    .listen('No vayas por la autopista, que hay un atasco enorme. Coge la carretera nacional.', 'Quel conseil donne-t-on ?',
      ['Éviter l’autoroute et prendre la nationale', 'Prendre le train', 'Partir plus tard'], 0,
      'no vayas por la autopista ; coge la carretera nacional.', { d: -0.3 })
    .dictation('No comáis tanto antes de nadar.', 'vosotros, négatif : no comáis.', { d: -0.3 })
    .repeat('Pase, pase, no se quede en la puerta.', 'usted : pase, no se quede.', { kc: USTED, d: -0.3 })
    .say('Ne bois pas trop de café.', ['No bebas tanto café.', 'No bebas demasiado café.', 'No tomes tanto café.', 'No tomes demasiado café.'],
      'beber → no bebas ; tomar → no tomes.', { d: -0.5 })
    .answer('Un amigo viene a visitar tu ciudad. ¿Qué no debe hacer?', 'No vayas al centro en coche, no comas en los restaurantes de la plaza y no salgas sin paraguas.',
      'Enchaîne des impératifs négatifs : no vayas, no comas, no salgas…', {
        keywords: [['vayas', 'comas', 'salgas', 'hagas', 'cojas', 'olvides', 'compres', 'bebas', 'pongas', 'tomes', 'dejes', 'lleves', 'alquiles', 'visites', 'pierdas']],
        minWords: 10, d: -0.2,
      })
    .build(),
};

export const imperativo2: Lesson = {
  id: 'es-b1-imperativo-2',
  cefr: 'B1',
  unitId: 'es-b1-imperativo',
  title: 'Impératif et pronoms',
  subtitle: 'Dímelo, no me lo digas ; siéntate, sentaos',
  kcIds: [PRON, USTED],
  estMinutes: 11,
  explanation: [
    {
      title: 'Affirmatif : pronoms collés, négatif : pronoms devant',
      body: 'À l’impératif affirmatif, les pronoms se collent à la fin du verbe, avec un accent écrit pour garder la place de l’accent tonique. Au négatif, ils se placent entre no et le verbe.',
      table: [
        ['affirmatif', 'négatif'],
        ['dímelo', 'no me lo digas'],
        ['siéntate', 'no te sientes'],
        ['cómpralo', 'no lo compres'],
        ['dáselo', 'no se lo des'],
        ['siéntese (usted)', 'no se siente'],
      ],
      examples: [
        { en: 'Cuéntamelo todo.', fr: 'Raconte-moi tout.' },
        { en: 'No se lo digas a tu hermana.', fr: 'Ne le dis pas à ta sœur.' },
      ],
      tip: 'L’ordre est l’inverse du français « dis-le-moi » : la personne d’abord, la chose ensuite (me lo, te la). Et le, les devant lo, la deviennent se : dáselo.',
    },
    {
      title: 'Vosotros + os',
      body: 'Avec un verbe pronominal, l’impératif de vosotros perd son -d devant os : sentad + os → sentaos, levantad + os → levantaos. Seule exception : idos (aller).',
      examples: [
        { en: 'Sentaos, por favor.', fr: 'Asseyez-vous, s’il vous plaît.' },
        { en: 'Niños, lavaos las manos.', fr: 'Les enfants, lavez-vous les mains.' },
      ],
      tip: 'À l’oral, on entend souvent « sentaros » ou « callaros », mais la forme correcte est sentaos, callaos.',
    },
  ],
  exercises: exercises('es-b1-imperativo-2', 'B1', { kc: PRON, tense: 'imperativo' })
    .mcq('Si no te gusta la chaqueta, no ___.', ['la compres', 'cómprala', 'la compras'], 0, 'Négatif → pronom devant le verbe au subjonctif : no la compres.', { d: -0.3 })
    .mcq('¿El informe? ___ antes del viernes, por favor.', ['Mándamelo', 'Me lo mandas', 'Mándame lo'], 0, 'Affirmatif (tú) → pronoms collés : mándamelo.', { d: -0.2 })
    .cloze('Niños, ___ ya, que es tarde.', ['acostaos'], 'acostad + os → acostaos (le -d tombe).', { hint: 'acostarse, vosotros', d: 0.1 })
    .cloze('¡No ___ digas a nadie! Es un secreto.', ['se lo'], 'le + lo → se lo, devant le verbe au négatif.', { hint: 'le + lo', d: -0.1 })
    .type('Mets à l’affirmatif : « No te sientes ahí. »', ['Siéntate ahí.'], 'no te sientes → siéntate (pronom collé, accent écrit).', { loose: true, d: -0.2 })
    .type('Mets au négatif : « Dáselo a tu hermano. »', ['No se lo des a tu hermano.', 'A tu hermano no se lo des.'], 'dáselo → no se lo des.', { loose: true, d: 0 })
    .order('Ne me le dis pas maintenant.', 'No me lo digas ahora.', 'Négatif : no + me lo + subjonctif.', { distractors: ['dime'], d: -0.2 })
    .tr('Lève-toi, il est huit heures !', ['¡Levántate, son las ocho!', '¡Levántate, que son las ocho!', '¡Venga, levántate, son las ocho!', '¡Levántate, que ya son las ocho!'],
      'levantarse → levántate (accent écrit).', { d: -0.3 })
    .tr('Asseyez-vous, s’il vous plaît.', [
      'Siéntese, por favor.', 'Siéntense, por favor.', 'Sentaos, por favor.', 'Por favor, siéntese.', 'Por favor, siéntense.', 'Por favor, sentaos.',
      'Tome asiento, por favor.', 'Tomen asiento, por favor.',
    ], 'usted → siéntese ; ustedes → siéntense ; vosotros → sentaos.', { kc: [PRON, USTED], d: -0.2 })
    .listen('¿Las llaves? No las dejes en la mesa, dámelas a mí, que mañana salgo yo primero.', 'Que doit-on faire des clés ?',
      ['Les donner à la personne qui parle', 'Les laisser sur la table', 'Les cacher'], 0,
      'no las dejes en la mesa, dámelas = ne les laisse pas sur la table, donne-les-moi.', { d: -0.1 })
    .listen('Dígame su nombre y su fecha de nacimiento, por favor, y espere en la sala.', 'Que doit faire la personne ?',
      ['Donner son nom et sa date de naissance, puis attendre', 'Remplir un formulaire', 'Revenir demain'], 0,
      'dígame, espere : impératif de usted.', { kc: [USTED, PRON], d: -0.3 })
    .dictation('Ponte el abrigo y no te olvides de las llaves.', 'ponte (affirmatif) ; no te olvides (négatif).', { d: -0.1 })
    .repeat('Tráemelo mañana, por favor.', 'trae + me + lo → tráemelo.', { d: -0.2 })
    .say('Ne vous inquiétez pas.', ['No os preocupéis.', 'No se preocupe.', 'No se preocupen.'], 'vosotros → no os preocupéis ; usted → no se preocupe ; ustedes → no se preocupen.',
      { kc: [PRON, USTED], d: -0.3 })
    .answer('Un amigo va a cuidar tu casa una semana. Dale tres instrucciones.', 'Riega las plantas, dale de comer al gato y no te olvides de cerrar la puerta con llave.',
      'Impératif avec pronoms : dale, riégalas, no te olvides, no la dejes…', {
        keywords: [['dale', 'riégalas', 'no te olvides', 'no lo', 'no la', 'no los', 'no las', 'no se lo', 'ciérrala', 'sácala', 'sácalo', 'llámame', 'ponle', 'dásela']],
        minWords: 12, d: 0,
      })
    .build(),
};
