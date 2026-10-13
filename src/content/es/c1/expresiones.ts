import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const BODY = 'es.c1.vocabulary.body_idioms';
const FOOD = 'es.c1.vocabulary.food_animal_idioms';
const VERB = 'es.c1.vocabulary.verb_idioms';
const LOC = 'es.c1.vocabulary.adverbial_locutions';

export const expresiones1: Lesson = {
  id: 'es-c1-expresiones-1',
  cefr: 'C1',
  unitId: 'es-c1-expresiones',
  title: 'Le corps, la table et les animaux',
  subtitle: 'Tomar el pelo · meter la pata · ser pan comido · dar gato por liebre',
  kcIds: [BODY, FOOD],
  estMinutes: 13,
  explanation: [
    {
      title: 'Expressions avec le corps',
      body: 'Les expressions idiomatiques ne se traduisent pas mot à mot : il faut les apprendre en bloc, avec leur équivalent français.',
      table: [
        ['tomar el pelo a alguien', 'faire marcher quelqu’un, se moquer de lui'],
        ['meter la pata', 'faire une gaffe'],
        ['costar un ojo de la cara', 'coûter les yeux de la tête'],
        ['no tener pelos en la lengua', 'ne pas avoir sa langue dans sa poche'],
        ['echar una mano', 'donner un coup de main'],
        ['hablar por los codos', 'être un vrai moulin à paroles'],
        ['estar hasta las narices', 'en avoir ras le bol'],
        ['no pegar ojo', 'ne pas fermer l’œil'],
      ],
      examples: [
        { en: '¿Me estás tomando el pelo?', fr: 'Tu te moques de moi ?' },
        { en: 'Metí la pata al preguntarle por su exmujer.', fr: 'J’ai fait une gaffe en lui parlant de son ex-femme.' },
      ],
      tip: 'Proches mais pas identiques : un seul œil en espagnol (un ojo de la cara), et pas de langue mais des poils sur la langue (pelos en la lengua).',
    },
    {
      title: 'Nourriture et animaux',
      body: 'La cuisine et les animaux fournissent beaucoup d’images, souvent différentes du français.',
      table: [
        ['ser pan comido', 'être du gâteau, simple comme bonjour'],
        ['dar calabazas', 'éconduire, recaler (à un examen)'],
        ['importar un pimiento / un bledo / un comino', 'se ficher complètement de'],
        ['ponerse rojo como un tomate', 'rougir comme une tomate'],
        ['dar gato por liebre', 'rouler quelqu’un, tromper sur la marchandise'],
        ['buscarle tres pies al gato', 'chercher la petite bête'],
        ['estar como pez en el agua', 'être comme un poisson dans l’eau'],
        ['estar como una cabra', 'être complètement fou, timbré'],
      ],
      tip: '« Chercher la petite bête » se dit avec un chat à trois pattes (buscarle tres pies al gato) ; « avoir d’autres chats à fouetter » n’a pas d’équivalent animal : tener cosas más importantes que hacer.',
    },
  ],
  exercises: exercises('es-c1-expresiones-1', 'C1', { kc: BODY })
    .mcq('¿Me estás tomando el ___? No puede ser verdad que te hayan dado el premio.', ['pelo', 'brazo', 'ojo'], 0, 'tomar el pelo = faire marcher, se moquer de.', { d: 1.4 })
    .mcq('No te preocupes por el examen de mañana: para ti será ___.', ['pan comido', 'pan duro', 'un pimiento'], 0, 'ser pan comido = être très facile.', { kc: FOOD, d: 1.5 })
    .cloze('El piso es precioso, pero cuesta un ojo de la ___.', ['cara'], 'costar un ojo de la cara = coûter les yeux de la tête.', { d: 1.5 })
    .cloze('Lo que digan los demás me importa un ___.', ['pimiento', 'bledo', 'comino', 'rábano', 'pepino'], 'importar un pimiento / un bledo / un comino = se ficher complètement de.', { kc: FOOD, d: 1.7 })
    .type('Expression espagnole pour « faire une gaffe » (infinitif) : ___', ['meter la pata'], 'meter la pata = faire une gaffe.', { d: 1.6 })
    .type('Complète : « Ese vendedor nos dio ___ por liebre: el reloj era falso. »', ['gato'], 'dar gato por liebre = rouler quelqu’un, tromper sur la marchandise.', { kc: FOOD, d: 1.8 })
    .order('Elle n’a pas sa langue dans sa poche.', 'No tiene pelos en la lengua.', 'no tener pelos en la lengua = dire ce qu’on pense sans détour.', { distractors: ['boca'], d: 1.6 })
    .tr('Je n’ai pas fermé l’œil de la nuit.', ['No he pegado ojo en toda la noche.', 'No pegué ojo en toda la noche.', 'No he pegado ojo esta noche.', 'No he podido pegar ojo en toda la noche.', 'No pude pegar ojo en toda la noche.', 'No he pegado ojo en toda la noche, la verdad.'],
      'ne pas fermer l’œil = no pegar ojo.', { d: 1.7 })
    .tr('Au travail, il est comme un poisson dans l’eau.', ['En el trabajo está como pez en el agua.', 'En el trabajo se siente como pez en el agua.', 'En el trabajo está como un pez en el agua.', 'En el trabajo se siente como un pez en el agua.', 'Está como pez en el agua en el trabajo.', 'Se siente como pez en el agua en el trabajo.', 'En el trabajo, él está como pez en el agua.'],
      'estar / sentirse como pez en el agua (souvent sans article).', { kc: FOOD, d: 1.6 })
    .listen('Mi compañera de piso habla por los codos: me cuenta su vida entera cada vez que coincidimos en la cocina.', '¿Cómo es la compañera de piso?', [
      'Muy habladora', 'Muy tímida', 'Muy desordenada',
    ], 0, 'hablar por los codos = parler sans arrêt.', { d: 1.5 })
    .listen('Le pidió salir a Elena delante de todos y ella le dio calabazas; el pobre se puso rojo como un tomate.', '¿Qué pasó?', [
      'Elena lo rechazó y él pasó mucha vergüenza', 'Elena aceptó salir con él', 'Él se enfadó con Elena',
    ], 0, 'dar calabazas = éconduire ; ponerse rojo como un tomate = rougir de honte.', { kc: FOOD, d: 1.7 })
    .dictation('Estoy hasta las narices de tanto ruido.', 'estar hasta las narices = en avoir ras le bol.', { d: 1.6 })
    .repeat('¿Me echas una mano con la mudanza?', 'echar una mano = donner un coup de main.', { d: 1.4 })
    .say('Ne cherche pas la petite bête.', ['No le busques tres pies al gato.', 'No busques tres pies al gato.', 'No le busques los tres pies al gato.', 'No le busques cinco pies al gato.', 'No le busques tres pies al gato, anda.'],
      'chercher la petite bête = buscarle tres pies al gato.', { kc: FOOD, d: 1.8 })
    .answer('Cuenta una situación en la que metiste la pata o en la que alguien te tomó el pelo.',
      'Una vez metí la pata en una cena: le pregunté a una amiga cuándo nacía su bebé y resultó que no estaba embarazada. Me puse rojo como un tomate.',
      'Raconte avec meter la pata, tomar el pelo, ponerse rojo como un tomate…', { kc: [BODY, FOOD], keywords: [['pata', 'pelo', 'tomate', 'calabazas', 'narices']], minWords: 18, d: 1.9 })
    .build(),
};

export const expresiones2: Lesson = {
  id: 'es-c1-expresiones-2',
  cefr: 'C1',
  unitId: 'es-c1-expresiones',
  title: 'Locutions verbales et adverbiales',
  subtitle: 'Tirar la toalla · ir al grano · ponerse las pilas · por los pelos',
  kcIds: [VERB, LOC],
  estMinutes: 13,
  explanation: [
    {
      title: 'Locutions verbales',
      body: 'Ces locutions se conjuguent normalement : tiró la toalla, se ha puesto las pilas, nos salimos con la nuestra.',
      table: [
        ['tirar la toalla', 'jeter l’éponge'],
        ['echar leña al fuego', 'jeter de l’huile sur le feu'],
        ['dar en el clavo', 'mettre dans le mille'],
        ['ir al grano / irse por las ramas', 'aller droit au but / tourner autour du pot'],
        ['ponerse las pilas', 'se secouer, se mettre au travail'],
        ['salirse con la suya', 'arriver à ses fins'],
        ['quedarse de piedra', 'rester sidéré, médusé'],
        ['hacer la vista gorda', 'fermer les yeux (sur une faute)'],
        ['consultarlo con la almohada', 'la nuit porte conseil'],
      ],
      tip: 'Les images changent : une serviette (toalla) et non une éponge, du bois (leña) et non de l’huile. salirse con la suya s’accorde avec le sujet : me salí con la mía, nos salimos con la nuestra.',
    },
    {
      title: 'Locutions adverbiales',
      body: 'Elles nuancent le récit et remplacent avantageusement un adverbe en -mente.',
      table: [
        ['por los pelos', 'de justesse'],
        ['a regañadientes', 'à contrecœur'],
        ['de buenas a primeras', 'tout à coup, de but en blanc'],
        ['a la larga', 'à la longue'],
        ['de sobra', 'largement, parfaitement (lo sé de sobra)'],
        ['a ciegas', 'à l’aveugle, à l’aveuglette'],
        ['sobre la marcha', 'en cours de route, en improvisant'],
      ],
      tip: 'Piège : por los pelos = de justesse, mais traído por los pelos = tiré par les cheveux (forcé, peu crédible).',
    },
  ],
  exercises: exercises('es-c1-expresiones-2', 'C1', { kc: VERB })
    .mcq('Después de tres intentos fallidos, decidió tirar la ___ y dejar la carrera.', ['toalla', 'esponja', 'camiseta'], 0, 'tirar la toalla = jeter l’éponge.', { d: 1.4 })
    .mcq('¿Cómo aprobó Álex?', ['Con una nota justa: casi suspende', 'Con la mejor nota de su promoción', 'No aprobó: se rindió'], 0,
      'aprobó por los pelos = de justesse.', {
        kc: [LOC, VERB], d: 1.9,
        passage: 'Columna de opinión: «Elogio de la paciencia»\nEl mes pasado, mi sobrino Álex estuvo a punto de tirar la toalla con las oposiciones. Llevaba dos años estudiando y, de buenas a primeras, anunció que lo dejaba. Su madre puso el grito en el cielo, lo cual solo sirvió para echar leña al fuego. Yo preferí ir al grano: le pregunté qué le pasaba de verdad. Resultó que no dormía y estudiaba a ciegas, sin ningún plan. Diseñamos uno juntos y, aunque lo aceptó a regañadientes, se puso las pilas. Ayer aprobó, por los pelos, pero aprobó.',
      })
    .cloze('Deja de irte por las ___ y dime qué ha pasado.', ['ramas'], 'irse por las ramas = tourner autour du pot.', { d: 1.6 })
    .cloze('Cogimos el último tren por los ___: las puertas se cerraron justo detrás de nosotros.', ['pelos'], 'por los pelos = de justesse.', { kc: LOC, d: 1.5 })
    .type('Expression pour « aller droit au but » (infinitif) : ___', ['ir al grano'], 'ir al grano = aller droit au but.', { d: 1.5 })
    .type('Locution adverbiale pour « à contrecœur » : ___', ['a regañadientes', 'de mala gana', 'a disgusto'], 'a regañadientes (ou de mala gana) = à contrecœur.', { kc: LOC, d: 1.8 })
    .order('Avec ce commentaire, tu as mis dans le mille.', 'Con ese comentario has dado en el clavo.', 'dar en el clavo = mettre dans le mille.', { distractors: ['puesto'], d: 1.6 })
    .tr('Le directeur a fermé les yeux sur le retard.', ['El director hizo la vista gorda con el retraso.', 'El director ha hecho la vista gorda con el retraso.', 'El director hizo la vista gorda ante el retraso.', 'El director ha hecho la vista gorda ante el retraso.'],
      'fermer les yeux (tolérer) = hacer la vista gorda.', { d: 1.8 })
    .tr('À la longue, cette décision nous coûtera cher.', [
      'A la larga, esta decisión nos saldrá cara.', 'A la larga, esta decisión nos costará cara.', 'A la larga, esta decisión nos costará caro.', 'A la larga, esta decisión nos va a salir cara.',
      'A la larga, esa decisión nos saldrá cara.', 'A la larga, esa decisión nos costará cara.', 'A la larga, esa decisión nos costará caro.', 'A largo plazo, esta decisión nos saldrá cara.',
      'A largo plazo, esta decisión nos costará cara.', 'A largo plazo, esta decisión nos costará caro.',
    ], 'à la longue = a la larga ; coûter cher = salir caro/a, costar caro.', { kc: LOC, d: 1.8 })
    .listen('Cuando le dijeron que la empresa cerraba, se quedó de piedra: nadie le había avisado de nada.', '¿Cómo reaccionó?', [
      'Se quedó muy sorprendido', 'Se puso a gritar', 'Se alegró mucho',
    ], 0, 'quedarse de piedra = rester sidéré.', { d: 1.5 })
    .listen('No te agobies con el viaje: no hace falta planearlo todo, ya iremos decidiendo sobre la marcha.', '¿Qué propone el hablante?', [
      'Improvisar durante el viaje', 'Planearlo todo con antelación', 'Cancelar el viaje',
    ], 0, 'sobre la marcha = en cours de route, en improvisant.', { kc: LOC, d: 1.6 })
    .dictation('Si quieres aprobar, tendrás que ponerte las pilas.', 'ponerse las pilas = se secouer.', { d: 1.6 })
    .repeat('Lo sé de sobra, no hace falta que me lo repitas.', 'de sobra = parfaitement.', { kc: LOC, d: 1.5 })
    .say('La nuit porte conseil : je te réponds demain.', [
      'Lo consultaré con la almohada y te contesto mañana.', 'Lo consultaré con la almohada y mañana te contesto.', 'Lo consulto con la almohada y te contesto mañana.',
      'Lo consulto con la almohada y mañana te respondo.', 'Lo consultaré con la almohada y te respondo mañana.', 'Lo voy a consultar con la almohada y te contesto mañana.',
      'Lo consultaré con la almohada y te responderé mañana.', 'Lo consultaré con la almohada y te contestaré mañana.', 'Lo consulto con la almohada y te digo algo mañana.',
    ], 'la nuit porte conseil → consultarlo con la almohada.', { d: 1.7 })
    .answer('¿Alguna vez has estado a punto de tirar la toalla? ¿Qué te ayudó a seguir?',
      'Sí, el primer año de carrera estuve a punto de tirar la toalla, pero mi mejor amiga me animó a ponerme las pilas y al final aprobé todo por los pelos.',
      'Locutions : tirar la toalla, ponerse las pilas, por los pelos…', { kc: [VERB, LOC], keywords: [['toalla', 'pilas', 'pelos', 'regañadientes', 'grano']], minWords: 18, d: 1.9 })
    .build(),
};
