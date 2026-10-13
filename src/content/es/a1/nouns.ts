import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const GENDER = 'es.a1.grammar.noun_gender';
const INDEF = 'es.a1.grammar.indefinite_articles';
const PLURAL = 'es.a1.grammar.plural';

export const nouns1: Lesson = {
  id: 'es-a1-nouns-1',
  cefr: 'A1',
  unitId: 'es-a1-nouns',
  title: 'Masculin ou féminin ? un, una',
  subtitle: 'Le genre des noms et l’article indéfini',
  kcIds: [GENDER, INDEF],
  estMinutes: 8,
  explanation: [
    {
      title: 'Le genre des noms',
      body: 'Tout nom est masculin ou féminin. La terminaison aide beaucoup, mais certains noms sont à apprendre avec leur article.',
      table: [
        ['-o → masculin', 'un libro, un vaso · exceptions : una mano, una foto, una moto, una radio'],
        ['-a → féminin', 'una casa, una mesa · exceptions : un día, un mapa, un problema, un idioma'],
        ['-ción, -sión, -dad, -tad → féminin', 'una canción, una ciudad, una amistad'],
        ['-e ou consonne → à apprendre', 'un coche, una noche, un hotel, una flor'],
      ],
      examples: [
        { en: 'un día y una noche', fr: 'un jour et une nuit' },
        { en: 'un problema y una solución', fr: 'un problème et une solution' },
      ],
      tip: 'Attention aux noms dont le genre change d’une langue à l’autre : el coche (la voiture), el color (la couleur), el equipo (l’équipe), mais la leche (le lait), la sal (le sel), la nariz (le nez).',
    },
    {
      title: 'L’article indéfini : un, una',
      table: [
        ['masculin', 'un café, un hotel'],
        ['féminin', 'una cerveza, una ciudad'],
      ],
      examples: [
        { en: 'Un café con leche, por favor.', fr: 'Un café au lait, s’il vous plaît.' },
        { en: 'Es una canción muy bonita.', fr: 'C’est une très jolie chanson.' },
        { en: 'Otro café, por favor.', fr: 'Un autre café, s’il vous plaît.' },
      ],
      tip: 'otro / otra (un autre, une autre) s’emploie sans article : « un otro café » ✗ → « otro café » ✓.',
    },
  ],
  exercises: exercises('es-a1-nouns-1', 'A1', { kc: INDEF })
    .mcq('Complète : ___ coche', ['un', 'una'], 0, 'coche est masculin en espagnol (alors que « voiture » est féminin) : un coche.', { kc: [GENDER, INDEF], d: -2.2 })
    .mcq('Quel nom est féminin en espagnol ?', ['ciudad', 'día', 'problema'], 0,
      'Les noms en -dad sont féminins : una ciudad. día et problema sont masculins malgré leur -a.', { kc: GENDER, d: -2.0 })
    .cloze('Es ___ canción muy bonita.', ['una'], 'Les noms en -ción sont féminins : una canción.', { d: -2.2 })
    .mcq('« Un autre thé, s’il vous plaît. »', ['Otro té, por favor.', 'Un otro té, por favor.', 'Una otra té, por favor.'], 0,
      'otro s’emploie sans article indéfini.', { d: -1.8 })
    .type('Écris l’article indéfini qui convient : ___ mano', ['una'], 'mano finit en -o mais elle est féminine : una mano.', { kc: GENDER, d: -1.9 })
    .type('Écris « une voiture » en espagnol.', ['un coche'], 'En Espagne, la voiture se dit el coche, un nom masculin.', { kc: [GENDER, INDEF], loose: true, d: -2.0 })
    .order('C’est un problème difficile.', 'Es un problema difícil.', 'problema est masculin : un problema. L’adjectif se place après le nom.', { kc: [GENDER, INDEF], distractors: ['una'], d: -1.9 })
    .tr('Un café et un jus d’orange, s’il te plaît.', ['Un café y un zumo de naranja, por favor.', 'Por favor, un café y un zumo de naranja.', 'Quiero un café y un zumo de naranja, por favor.'],
      'En Espagne, le jus se dit el zumo (masculin) : un zumo de naranja.', { d: -2.0 })
    .tr('C’est une photo.', ['Es una foto.', 'Es una fotografía.'], 'foto est l’abréviation de fotografía : elle reste féminine, una foto.', { kc: [GENDER, INDEF], d: -1.9 })
    .listen('Para mí, un té y una tostada, por favor.', 'Qu’est-ce que la cliente commande ?', ['Un thé et une tartine grillée', 'Un café et un croissant', 'Un thé et un jus de fruits'], 0,
      'un té = un thé ; una tostada = une tartine grillée, typique du petit-déjeuner espagnol.', { d: -2.0 })
    .listen('Es un mapa de la ciudad.', 'Qu’est-ce que c’est ?', ['Un plan de la ville', 'Une carte postale', 'Un musée de la ville'], 0,
      'un mapa (masculin malgré le -a) = un plan, une carte.', { kc: GENDER, d: -2.0 })
    .dictation('Es una casa con un jardín.', 'una casa (féminin), un jardín (masculin).', { d: -2.0 })
    .repeat('Un café con leche y una tostada, por favor.', 'leche : ch = « tch » ; le e final se prononce.', { d: -2.4 })
    .say('une table et une chaise', ['una mesa y una silla'], 'mesa et silla sont féminins, comme en français.', { d: -2.2 })
    .say('Un sandwich et une salade, s’il vous plaît.', ['Un bocadillo y una ensalada, por favor.', 'Un sándwich y una ensalada, por favor.', 'Un bocata y una ensalada, por favor.'],
      'un bocadillo = un sandwich dans une baguette ; un sándwich = sandwich de pain de mie.', { d: -2.0 })
    .build(),
};

export const nouns2: Lesson = {
  id: 'es-a1-nouns-2',
  cefr: 'A1',
  unitId: 'es-a1-nouns',
  title: 'Le pluriel · unos, unas',
  subtitle: 'Des livres, des fleurs, quelques amis',
  kcIds: [PLURAL, INDEF],
  estMinutes: 8,
  explanation: [
    {
      title: 'Former le pluriel',
      table: [
        ['voyelle → + s', 'casa → casas · coche → coches · café → cafés'],
        ['consonne → + es', 'ciudad → ciudades · flor → flores · hotel → hoteles'],
        ['-z → -ces', 'lápiz → lápices · vez → veces'],
        ['-ción → -ciones', 'canción → canciones (l’accent écrit disparaît)'],
      ],
      examples: [
        { en: 'dos ciudades y tres pueblos', fr: 'deux villes et trois villages' },
        { en: 'Dos cafés, por favor.', fr: 'Deux cafés, s’il vous plaît.' },
      ],
      tip: 'Le s du pluriel se prononce toujours : « casas » se dit « cassass ». Et après une consonne, on ajoute -es : « ciudads » ✗ → « ciudades » ✓.',
    },
    {
      title: 'unos, unas',
      body: 'unos / unas correspondent à « des » ou « quelques ». Devant un nombre, unos signifie « environ ».',
      table: [
        ['un libro → unos libros', 'un livre → des livres'],
        ['una flor → unas flores', 'une fleur → des fleurs'],
        ['unos veinte euros', 'environ vingt euros'],
      ],
      examples: [
        { en: 'Son unas flores para ti.', fr: 'Ce sont des fleurs pour toi.' },
        { en: 'Quiero tomates y cebollas.', fr: 'Je veux des tomates et des oignons.' },
      ],
      tip: 'Le « des » français disparaît souvent en espagnol : « Je veux des tomates » → « Quiero tomates ». unos / unas insiste sur « quelques ».',
    },
  ],
  exercises: exercises('es-a1-nouns-2', 'A1', { kc: PLURAL })
    .type('Écris le pluriel de « ciudad ».', ['ciudades'], 'Consonne finale → + es : ciudades.', { d: -2.0 })
    .type('Écris le pluriel de « lápiz ».', ['lápices'], '-z devient -ces au pluriel : lápices.', { d: -1.7 })
    .mcq('Quel est le pluriel de « canción » ?', ['canciones', 'cancións', 'canciónes'], 0,
      '-ción → -ciones, sans accent écrit.', { d: -1.7 })
    .cloze('Compro ___ manzanas y un melón.', ['unas'], 'manzana est féminin → unas manzanas (des pommes).', { kc: [INDEF, PLURAL], d: -2.0 })
    .mcq('Comment dit-on « des fleurs » ?', ['unas flores', 'unos flores', 'unas flors'], 0,
      'flor est féminin, comme fleur : unas flores, avec -es après la consonne.', { kc: [INDEF, PLURAL], d: -2.0 })
    .order('Je veux deux bières et des olives.', 'Quiero dos cervezas y unas aceitunas.', 'aceituna (féminin) = olive en Espagne ; des → unas.', { kc: [INDEF, PLURAL], distractors: ['unos'], d: -1.9 })
    .tr('deux sandwichs et trois cafés', ['dos bocadillos y tres cafés', 'dos sándwiches y tres cafés', 'dos sándwichs y tres cafés', 'dos bocatas y tres cafés'],
      'café finit par une voyelle → cafés.', { d: -1.9 })
    .tr('Ce sont des fleurs pour toi.', ['Son flores para ti.', 'Son unas flores para ti.'], 'unas est facultatif ici : son (unas) flores.', { kc: [INDEF, PLURAL], d: -1.8 })
    .listen('Quiero dos kilos de tomates y unas naranjas.', 'Qu’achète-t-il ?', ['Deux kilos de tomates et des oranges', 'Deux tomates et un kilo d’oranges', 'Des tomates et deux oranges'], 0,
      'dos kilos de tomates y unas naranjas = deux kilos de tomates et des oranges.', { d: -1.9 })
    .listen('En la clase hay unos estudiantes franceses y unas chicas italianas.', 'Qui sont les filles de la classe ?', ['Des Italiennes', 'Des Françaises', 'Des Espagnoles'], 0,
      'unas chicas italianas = des filles italiennes.', { kc: [INDEF, PLURAL], d: -1.7 })
    .mcq('Combien de yaourts faut-il acheter ?', ['Trois', 'Deux', 'Un'], 0, 'tres yogures = trois yaourts.',
      { passage: 'Lista de la compra: unos tomates, dos cebollas, unas naranjas, un pan y tres yogures. ¡Y unas flores para mamá!', d: -2.0 })
    .dictation('Dos cafés y unas tostadas, por favor.', 'cafés (voyelle + s), unas tostadas (féminin pluriel).', { d: -2.0 })
    .repeat('Unas naranjas y dos limones, por favor.', 'naranjas : la jota ; limones : le s final se prononce.', { d: -2.4 })
    .say('des livres et des revues', ['unos libros y unas revistas', 'libros y revistas'], 'libro est masculin (unos), revista féminin (unas).', { kc: [INDEF, PLURAL], d: -1.9 })
    .say('Deux bières, s’il vous plaît.', ['Dos cervezas, por favor.', 'Dos cañas, por favor.'], 'una cerveza → dos cervezas ; una caña = une bière pression.', { d: -2.3 })
    .build(),
};
