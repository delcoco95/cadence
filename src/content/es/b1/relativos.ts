import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const QUE = 'es.b1.grammar.relative_que_donde';
const LOQUE = 'es.b1.grammar.relative_lo_que';
const PREP = 'es.b1.grammar.relative_preposition';

export const relativos1: Lesson = {
  id: 'es-b1-relativos-1',
  cefr: 'B1',
  unitId: 'es-b1-relativos',
  title: 'Que, donde, lo que',
  subtitle: 'La chica que conocí, el barrio donde vivo, lo que dices',
  kcIds: [QUE, LOQUE],
  estMinutes: 10,
  explanation: [
    {
      title: 'que et donde',
      body: 'que remplace une personne ou une chose, sujet ou complément : il traduit à la fois « qui » et « que ». donde (ou en el que, en la que) traduit « où » pour un lieu.',
      table: [
        ['sujet (qui)', 'La chica que vive arriba es enfermera.'],
        ['complément (que)', 'La chica que conocí ayer es enfermera.'],
        ['lieu (où)', 'El barrio donde vivo es tranquilo.'],
      ],
      examples: [
        { en: 'Tengo un amigo que trabaja en Bilbao.', fr: 'J’ai un ami qui travaille à Bilbao.' },
        { en: 'Esta es la playa donde nos conocimos.', fr: 'C’est la plage où nous nous sommes rencontrés.' },
      ],
      tip: 'Pas de « quien » sujet sans virgule : « El chico quien me ayudó » ✗ → « El chico que me ayudó » ✓. Et le « où » temporel se dit que : el día que nos conocimos (le jour où…).',
    },
    {
      title: 'lo que = ce que, ce qui',
      body: 'Pour reprendre une idée et non un nom précis, on emploie lo que.',
      examples: [
        { en: 'Lo que necesito es descansar.', fr: 'Ce dont j’ai besoin, c’est de me reposer.' },
        { en: 'No entiendo lo que dices.', fr: 'Je ne comprends pas ce que tu dis.' },
      ],
      tip: '« Ce que » ne se dit jamais « que » seul ni « el que » : No sé lo que quieres (ou, en question indirecte, No sé qué quieres, avec accent).',
    },
  ],
  exercises: exercises('es-b1-relativos-1', 'B1', { kc: QUE })
    .mcq('El chico ___ me ayudó es el hermano de Lucía.', ['que', 'quien', 'donde'], 0, 'Sujet sans virgule → que.', { d: -0.5 })
    .mcq('No entiendo ___ quieres decir.', ['lo que', 'que', 'el que'], 0, '« ce que » → lo que.', { kc: LOQUE, d: -0.4 })
    .cloze('Este es el pueblo ___ nació mi abuela.', ['donde', 'en el que', 'en que', 'en el cual'], 'Lieu → donde (ou en el que).', { hint: 'où', d: -0.4 })
    .cloze('___ más me gusta de Madrid es el ambiente de los bares.', ['Lo que'], '« Ce qui me plaît le plus » → Lo que más me gusta.', { kc: LOQUE, d: -0.3 })
    .type('Relie avec « que » : « Tengo un amigo. Mi amigo vive en Bilbao. »', ['Tengo un amigo que vive en Bilbao.'], 'que remplace mi amigo (sujet).', { loose: true, d: -0.4 })
    .type('Relie avec « donde » : « Esta es la cafetería. Conocí a Pedro en esta cafetería. »', [
      'Esta es la cafetería donde conocí a Pedro.', 'Esta es la cafetería en la que conocí a Pedro.', 'Esta es la cafetería en que conocí a Pedro.',
    ], 'en esta cafetería → donde (ou en la que).', { loose: true, d: -0.2 })
    .order('Je ne comprends pas ce que tu dis.', 'No entiendo lo que dices.', '« ce que » → lo que.', { kc: LOQUE, distractors: ['el'], d: -0.4 })
    .tr('Le film que nous avons vu hier était très long.', [
      'La película que vimos ayer era muy larga.', 'La película que vimos ayer fue muy larga.', 'La peli que vimos ayer era muy larga.', 'La peli que vimos ayer fue muy larga.',
    ], 'que complément ; ayer → indefinido (vimos) ; la película est féminin.', { d: -0.3 })
    .tr('C’est tout ce que je sais.', ['Es todo lo que sé.', 'Eso es todo lo que sé.'], 'tout ce que → todo lo que.', { kc: LOQUE, d: -0.3 })
    .listen('El restaurante donde cenamos el sábado ha cerrado. Lo que más echo de menos es su tortilla.', 'Que regrette la personne ?',
      ['La tortilla du restaurant', 'Le serveur', 'La terrasse'], 0,
      'lo que más echo de menos = ce qui me manque le plus.', { kc: [QUE, LOQUE], d: -0.3 })
    .listen('Busco a la profesora que da clases de flamenco los jueves.', 'Qui cherche-t-on ?',
      ['La professeure de flamenco du jeudi', 'Une salle de danse', 'Un cours de guitare'], 0,
      'la profesora que da clases de flamenco = la professeure qui donne des cours de flamenco.', { d: -0.5 })
    .dictation('Lo que dijiste ayer me pareció muy interesante.', 'lo que = ce que.', { kc: LOQUE, d: -0.3 })
    .repeat('Vivo en un barrio donde hay muchos parques.', 'donde = où.', { d: -0.5 })
    .say('C’est la femme qui travaille avec ma sœur.', [
      'Es la mujer que trabaja con mi hermana.', 'Esa es la mujer que trabaja con mi hermana.', 'Esta es la mujer que trabaja con mi hermana.',
      'Es la señora que trabaja con mi hermana.', 'Esa es la señora que trabaja con mi hermana.',
    ], '« qui » sujet → que.', { d: -0.5 })
    .answer('¿Cómo es el lugar donde vives? ¿Qué es lo que más te gusta de él?', 'Vivo en un barrio donde hay muchas tiendas. Lo que más me gusta es que todo está cerca.',
      'Utilise donde, que et lo que.', { kc: [QUE, LOQUE], keywords: [['donde', 'que'], ['lo que']], minWords: 12, d: -0.2 })
    .build(),
};

export const relativos2: Lesson = {
  id: 'es-b1-relativos-2',
  cefr: 'B1',
  unitId: 'es-b1-relativos',
  title: 'Relatifs après une préposition',
  subtitle: 'El que, la que, con quien, del que',
  kcIds: [PREP],
  estMinutes: 11,
  explanation: [
    {
      title: 'Préposition + article + que',
      body: 'Après une préposition, on emploie el que, la que, los que, las que (choses et personnes) ou quien, quienes (personnes seulement). L’article s’accorde avec le nom repris.',
      table: [
        ['para la que', 'la empresa para la que trabajo'],
        ['con el que / con quien', 'el amigo con el que (con quien) viajé'],
        ['por la que', 'la razón por la que me fui'],
        ['del que (dont)', 'el libro del que te hablé'],
      ],
      examples: [
        { en: 'Es la ciudad en la que nací.', fr: 'C’est la ville dans laquelle je suis {né|née}.' },
        { en: 'Ana es la persona en quien más confío.', fr: 'Ana est la personne en qui j’ai le plus confiance.' },
      ],
      tip: '« dont » n’existe pas en espagnol : on part de la préposition du verbe. hablar de → el libro del que te hablé ; estar orgulloso de → el trabajo del que estoy orgulloso.',
    },
    {
      title: 'el que, quien = celui qui',
      body: 'Sans nom devant, el que, la que, los que (ou quien, quienes) signifient « celui qui, celle qui, ceux qui ».',
      examples: [
        { en: 'El que lleva gafas es mi primo.', fr: 'Celui qui porte des lunettes, c’est mon cousin.' },
        { en: 'Quien mucho abarca poco aprieta.', fr: 'Qui trop embrasse mal étreint.' },
      ],
      tip: '« Celui qui » ne se dit pas « aquel quien » : el que ou quien.',
    },
  ],
  exercises: exercises('es-b1-relativos-2', 'B1', { kc: PREP })
    .mcq('Ese es el chico ___ te hablé ayer.', ['del que', 'que', 'de que'], 0, 'hablar de alguien → del que (de + el que).', { d: 0 })
    .cloze('Marta es la amiga con ___ voy al cine los viernes.', ['la que', 'quien', 'la cual'], 'Après con : la que (accord avec la amiga) ou quien.', { d: -0.2 })
    .cloze('No sé la razón por ___ se fue.', ['la que', 'la cual'], 'la razón por la que = la raison pour laquelle.', { d: 0.1 })
    .mcq('Qu’est-ce que l’auteur cherche avant tout chez son futur colocataire ?',
      ['Quelqu’un d’ordonné, prêt à cuisiner le dimanche', 'Un étudiant en médecine', 'Quelqu’un qui a une voiture'], 0,
      'Lo que busco es alguien ordenado, al que no le moleste cocinar para todos los domingos.',
      {
        kc: [PREP, LOQUE], d: -0.1,
        passage: 'Anuncio en el tablón de la facultad\nBusco compañero o compañera de piso. El piso en el que vivo está a diez minutos de la universidad y tiene una terraza desde la que se ve todo el casco antiguo. Las personas con las que lo comparto ahora son dos estudiantes de Medicina muy tranquilas. Lo que busco es alguien ordenado, al que no le moleste cocinar para todos los domingos. Si te interesa, llámame por las tardes.',
      })
    .type('Relie avec « con el que » : « Este es el ordenador. Trabajo con este ordenador. »', [
      'Este es el ordenador con el que trabajo.', 'Este es el ordenador con el cual trabajo.',
    ], 'con este ordenador → con el que.', { loose: true, d: 0 })
    .type('Complète : « ___ lleva gafas es mi primo Jorge. » (celui qui)', ['El que', 'Quien'], 'celui qui → el que (ou quien).', { d: -0.1 })
    .order('C’est la raison pour laquelle je suis {venu|venue}.', 'Esa es la razón por la que he venido.', 'por la que = pour laquelle.', { distractors: ['donde'], d: 0.1 })
    .tr('Le livre dont je t’ai parlé est très bon.', [
      'El libro del que te hablé es muy bueno.', 'El libro del que te he hablado es muy bueno.', 'El libro del cual te hablé es muy bueno.', 'El libro del cual te he hablado es muy bueno.',
    ], 'hablar de → del que.', { d: 0.2 })
    .tr('Ceux qui veulent venir doivent réserver.', [
      'Los que quieran venir tienen que reservar.', 'Los que quieren venir tienen que reservar.', 'Los que quieran venir deben reservar.', 'Los que quieren venir deben reservar.',
      'Quienes quieran venir tienen que reservar.', 'Quienes quieren venir tienen que reservar.', 'Quienes quieran venir deben reservar.', 'Quienes quieren venir deben reservar.',
    ], 'ceux qui → los que / quienes (quieran : personnes encore inconnues).', { d: 0.3 })
    .listen('Te presento a Pablo, el compañero con quien hice el Camino de Santiago el verano pasado.', 'Qui est Pablo ?',
      ['Celui avec qui la personne a fait le chemin de Saint-Jacques', 'Son professeur', 'Son voisin'], 0,
      'con quien = avec qui.', { d: -0.2 })
    .listen('La calle en la que vivía de pequeña ya no existe: ahora hay un centro comercial.', 'Qu’y a-t-il aujourd’hui à la place de sa rue ?',
      ['Un centre commercial', 'Un parc', 'Une école'], 0,
      'la calle en la que vivía = la rue où j’habitais.', { d: -0.2 })
    .dictation('Los amigos con los que viajé son de Valencia.', 'con los que : accord avec los amigos.', { d: 0 })
    .repeat('Quien tiene un amigo tiene un tesoro.', 'quien = celui qui (proverbe).', { d: -0.3 })
    .say('C’est l’entreprise pour laquelle je travaille.', [
      'Es la empresa para la que trabajo.', 'Esta es la empresa para la que trabajo.', 'Esa es la empresa para la que trabajo.', 'Es la empresa para la cual trabajo.',
      'Es la empresa en la que trabajo.', 'Esta es la empresa en la que trabajo.', 'Es la empresa donde trabajo.', 'Esta es la empresa donde trabajo.',
    ], 'trabajar para → para la que.', { d: 0 })
    .answer('Describe a una persona con la que te llevas muy bien.', 'Mi hermana es la persona con la que mejor me llevo. Es alguien en quien confío y con quien hablo todos los días.',
      'Utilise con la que, con quien, en quien…', {
        keywords: [['con la que', 'con el que', 'con quien', 'en quien', 'en la que', 'a la que', 'al que', 'de la que', 'del que', 'a quien']], minWords: 12, d: 0.1,
      })
    .build(),
};
