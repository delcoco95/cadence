import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const HEDGE = 'es.c1.function.hedging';
const CONCEDE = 'es.c1.function.conceding';
const REFUTE = 'es.c1.function.refuting';
const SINO = 'es.c1.grammar.sino_pero';

export const argumentar1: Lesson = {
  id: 'es-c1-argumentar-1',
  cefr: 'C1',
  unitId: 'es-c1-argumentar',
  title: 'Nuancer et concéder',
  subtitle: 'A mi juicio · puede que · es probable que · si bien · bien es cierto que',
  kcIds: [HEDGE, CONCEDE],
  estMinutes: 13,
  explanation: [
    {
      title: 'Nuancer son opinion',
      body: 'Pour présenter un avis : a mi juicio, a mi entender, desde mi punto de vista, me inclino a pensar que + indicatif. La certitude prend l’indicatif (no cabe duda de que, es evidente que) ; la probabilité et le doute prennent le subjonctif (puede que, es probable que, cabe la posibilidad de que).',
      table: [
        ['No cabe duda de que es un reto.', 'Il ne fait aucun doute que c’est un défi.'],
        ['Es probable que se aplace.', 'Il est probable que ce soit reporté.'],
        ['Puede que tengas razón.', 'Tu as peut-être raison.'],
        ['Hasta cierto punto / en cierta medida', 'Jusqu’à un certain point / dans une certaine mesure'],
      ],
      examples: [
        { en: 'Me inclino a pensar que tienen razón.', fr: 'J’ai tendance à penser qu’ils ont raison.' },
      ],
      tip: 'Piège : « il est probable que » + indicatif en français, mais es probable que + SUBJONCTIF en espagnol (es probable que llueva).',
    },
    {
      title: 'Concéder pour mieux argumenter',
      body: 'si bien + indicatif = bien que (fait admis). es cierto que / es verdad que… pero, bien es cierto que…, reconozco que… ; con todo et aun así relancent l’argument.',
      table: [
        ['Si bien tiene experiencia, le falta formación.', 'Bien qu’il ait de l’expérience, il manque de formation.'],
        ['Es cierto que es caro, pero merece la pena.', 'Certes, c’est cher, mais ça en vaut la peine.'],
        ['Bien es verdad que nadie es perfecto.', 'Il est vrai que personne n’est parfait.'],
        ['Reconozco que tiene ventajas; con todo…', 'Je reconnais que cela a des avantages ; néanmoins…'],
      ],
      tip: '« Bien que » + subjonctif → si bien + INDICATIF. « Bien que » ne se calque pas : *bien que n’existe pas en espagnol.',
    },
  ],
  exercises: exercises('es-c1-argumentar-1', 'C1', { kc: HEDGE })
    .mcq('Es probable que la reunión se ___ hasta la semana que viene.', ['aplace', 'aplaza', 'aplazará'], 0, 'es probable que + subjonctif (contrairement au français).', { d: 1.5 })
    .mcq('___ el proyecto tiene puntos débiles, merece nuestro apoyo.', ['Si bien', 'Bien que', 'A pesar'], 0, 'si bien + indicatif = bien que. « Bien que » est un gallicisme.', { kc: CONCEDE, d: 1.6 })
    .cloze('No cabe duda de que el cambio climático ___ un reto global.', ['es', 'constituye', 'supone', 'representa'], 'Certitude → indicatif : no cabe duda de que es.', { hint: 'ser ou synonyme', d: 1.5 })
    .cloze('Si bien la propuesta ___ interesante, resulta demasiado cara.', ['es', 'parece'], 'si bien + indicatif : es.', { kc: CONCEDE, hint: 'ser', d: 1.7 })
    .type('Complète : « Cabe la posibilidad de que el vuelo (salir) ___ con retraso. »', ['salga'], 'cabe la posibilidad de que + subjonctif : salga.', { d: 1.7 })
    .type('Complète (indicatif ou subjonctif ?) : « Si bien (tener, él) ___ experiencia, le falta formación. »', ['tiene'], 'si bien → indicatif : tiene.', { kc: CONCEDE, d: 1.8 })
    .order('Dans une certaine mesure, je suis d’accord avec vous.', 'En cierta medida, estoy de acuerdo con usted.', 'en cierta medida = dans une certaine mesure.', { distractors: ['vosotros'], d: 1.5 })
    .tr('Il est possible que les chiffres soient faux.', [
      ...alt(['Es posible que ', 'Puede que ', 'Cabe la posibilidad de que '], ['las cifras sean falsas.', 'las cifras sean erróneas.', 'las cifras estén mal.', 'los datos sean falsos.', 'los datos sean erróneos.', 'los datos estén mal.']),
    ], 'es posible que / puede que + subjonctif ; accord : las cifras falsas, los datos falsos.', { d: 1.6 })
    .tr('Certes, la mesure est impopulaire, mais elle est nécessaire.', [
      ...alt(['Es cierto que ', 'Es verdad que ', 'Bien es cierto que ', 'Bien es verdad que '], ['la medida es impopular, pero '], ['es necesaria.', 'resulta necesaria.']),
      'Si bien la medida es impopular, es necesaria.', 'Si bien es impopular, la medida es necesaria.', 'La medida es impopular, es cierto, pero es necesaria.',
    ], 'certes… mais → es cierto que… pero / si bien…', { kc: CONCEDE, d: 1.8 })
    .listen('A mi juicio, la subida de impuestos es necesaria, aunque hasta cierto punto entiendo a quienes se oponen.', '¿Cuál es la postura del hablante?', [
      'Apoya la subida, pero comprende a los críticos', 'Rechaza totalmente la subida', 'No tiene opinión',
    ], 0, 'a mi juicio (opinion) + hasta cierto punto (nuance).', { d: 1.6 })
    .listen('Reconozco que el nuevo sistema tiene ventajas; con todo, sigo pensando que llega en mal momento.', '¿Qué piensa el hablante del nuevo sistema?', [
      'Que tiene ventajas, pero llega en mal momento', 'Que no tiene ninguna ventaja', 'Que llega en el momento perfecto',
    ], 0, 'reconozco que… ; con todo = néanmoins.', { kc: CONCEDE, d: 1.7 })
    .dictation('Me inclino a pensar que tienen razón.', 'me inclino a pensar que + indicatif.', { d: 1.5 })
    .repeat('Bien es verdad que nadie es perfecto.', 'bien es verdad que : concession soutenue.', { kc: CONCEDE, d: 1.5 })
    .say('Il est probable qu’il pleuve demain.', ['Es probable que llueva mañana.', 'Es probable que mañana llueva.', 'Lo más probable es que llueva mañana.', 'Lo más probable es que mañana llueva.', 'Probablemente llueva mañana.', 'Probablemente lloverá mañana.', 'Seguramente llueva mañana.', 'Seguramente lloverá mañana.'],
      'es probable que + subjonctif : llueva.', { d: 1.5 })
    .answer('¿Crees que las redes sociales han mejorado la comunicación? Matiza tu opinión.',
      'A mi juicio, las redes sociales han acercado a mucha gente; si bien es cierto que también han favorecido la desinformación, puede que con más educación digital ese problema se reduzca.',
      'Opinion nuancée : a mi juicio, si bien, puede que + subjonctif.', { kc: [HEDGE, CONCEDE], keywords: [['a mi juicio', 'desde mi punto de vista', 'a mi entender', 'en mi opinión', 'si bien', 'puede que', 'es posible que', 'hasta cierto punto', 'en cierta medida']], minWords: 20, d: 2.0 })
    .build(),
};

export const argumentar2: Lesson = {
  id: 'es-c1-argumentar-2',
  cefr: 'C1',
  unitId: 'es-c1-argumentar',
  title: 'Réfuter',
  subtitle: 'Nada más lejos de la realidad · en absoluto · no es que…, sino que…',
  kcIds: [REFUTE, SINO],
  estMinutes: 13,
  explanation: [
    {
      title: 'Contredire avec élégance',
      body: 'no es cierto / no es verdad que + subjonctif ; nada más lejos de la realidad (rien n’est plus faux) ; lejos de + infinitif (loin de) ; carecer de fundamento (être sans fondement) ; en absoluto, de ningún modo, de ninguna manera (pas du tout).',
      table: [
        ['No es cierto que la ley perjudique a nadie.', 'Il n’est pas vrai que la loi nuise à quiconque.'],
        ['Nada más lejos de la realidad.', 'Rien n’est plus éloigné de la réalité.'],
        ['Lejos de mejorar, la situación ha empeorado.', 'Loin de s’améliorer, la situation s’est aggravée.'],
        ['Esa acusación carece de fundamento.', 'Cette accusation est sans fondement.'],
        ['—¿Te molesta? —En absoluto.', '— Ça te dérange ? — Pas du tout.'],
      ],
      tip: 'Faux ami majeur : en absoluto = pas du tout (sens négatif). « Absolument ! » se dit totalmente, desde luego ou por supuesto.',
    },
    {
      title: 'Pero, sino, sino que',
      body: 'Après une négation, sino corrige (non pas A mais B). Devant un verbe conjugué : sino que. pero ajoute une restriction sans corriger. no solo… sino (también) = non seulement… mais aussi.',
      table: [
        ['No vino en tren, sino en autobús.', 'Il n’est pas venu en train, mais en bus.'],
        ['No se lo dije, sino que se lo escribí.', 'Je ne le lui ai pas dit, je le lui ai écrit.'],
        ['No es caro, pero no me gusta.', 'Ce n’est pas cher, mais ça ne me plaît pas.'],
        ['No solo habla inglés, sino también chino.', 'Il parle non seulement anglais, mais aussi chinois.'],
      ],
      tip: 'Le français « mais » couvre pero et sino. Test : si « mais » peut se remplacer par « mais plutôt / au contraire » après une négation, c’est sino.',
    },
  ],
  exercises: exercises('es-c1-argumentar-2', 'C1', { kc: REFUTE })
    .mcq('—¿Estás de acuerdo con la propuesta? —En ___: me parece injusta.', ['absoluto', 'absolutamente', 'total'], 0, 'en absoluto = pas du tout.', { d: 1.5 })
    .mcq('¿Qué sostiene la autora de la carta?', [
      'Que los jóvenes no leen menos, sino de otra forma', 'Que los jóvenes han dejado de leer', 'Que las bibliotecas reciben más visitas que nunca',
    ], 0, 'No es que los jóvenes lean menos, sino que leen de otra manera.', {
      kc: [REFUTE, SINO], d: 1.9,
      passage: 'Carta al director\nEn su edición del martes, un columnista afirmaba que los jóvenes de hoy no leen. Nada más lejos de la realidad. No es que los jóvenes lean menos, sino que leen de otra manera: en pantallas, en foros, en novelas gráficas. Lejos de abandonar la lectura, muchos la han convertido en una actividad social. Es cierto que las bibliotecas reciben menos visitas, pero no es verdad que eso demuestre un desinterés por los libros: la biblioteca municipal de Castrillo, sin ir más lejos, presta hoy más libros electrónicos que nunca.\nInés Ruiz, Castrillo',
    })
    .cloze('No solo habla inglés, ___ también chino.', ['sino'], 'no solo… sino también.', { kc: SINO, d: 1.5 })
    .cloze('Esa acusación carece de ___.', ['fundamento', 'base'], 'carecer de fundamento = être sans fondement.', { d: 1.6 })
    .type('Complète avec pero, sino ou sino que : « No se lo dije, ___ se lo escribí en un correo. »', ['sino que'], 'Correction devant un verbe conjugué → sino que.', { kc: SINO, d: 1.8 })
    .type('Complète : « No es verdad que el proyecto (ser) ___ un fracaso. »', ['sea', 'haya sido'], 'no es verdad que + subjonctif : sea / haya sido.', { d: 1.7 })
    .order('Loin d’améliorer la situation, la réforme l’a aggravée.', 'Lejos de mejorar la situación, la reforma la ha empeorado.', 'lejos de + infinitif ; la (situación) ha empeorado.', { distractors: ['lo'], d: 1.7 })
    .tr('Ce n’est pas un problème technique, mais politique.', ['No es un problema técnico, sino político.', 'No se trata de un problema técnico, sino político.', 'No es un problema técnico, sino un problema político.', 'No es un problema técnico, sino uno político.', 'El problema no es técnico, sino político.', 'No se trata de un problema técnico, sino de uno político.'],
      'Correction après négation → sino.', { kc: SINO, d: 1.6 })
    .tr('Je ne suis pas du tout d’accord.', ['No estoy en absoluto de acuerdo.', 'No estoy de acuerdo en absoluto.', 'No estoy nada de acuerdo.', 'No estoy para nada de acuerdo.', 'No estoy de acuerdo para nada.'],
      'pas du tout = en absoluto, nada, para nada.', { d: 1.6 })
    .listen('Se ha dicho que la nueva ley perjudica a los autónomos. Nada más lejos de la realidad: les reduce los impuestos durante los dos primeros años.', '¿Qué defiende el hablante?', [
      'Que la ley beneficia a los autónomos', 'Que la ley perjudica a los autónomos', 'Que la ley sube los impuestos',
    ], 0, 'nada más lejos de la realidad : réfutation totale.', { d: 1.7 })
    .listen('El problema no es que falte dinero, sino que se gasta mal: se invierte en obras innecesarias y no en educación.', '¿Cuál es el problema según el hablante?', [
      'Que el dinero se gasta mal', 'Que no hay dinero', 'Que se invierte demasiado en educación',
    ], 0, 'no es que falte (subjonctif), sino que se gasta (indicatif).', { kc: SINO, d: 1.7 })
    .dictation('Esa afirmación carece de todo fundamento.', 'carecer de fundamento.', { d: 1.6 })
    .repeat('No lo hizo por dinero, sino por amor.', 'no… sino : correction.', { kc: SINO, d: 1.4 })
    .say('Ce n’est pas qu’il soit paresseux, c’est qu’il est fatigué.', alt(['No es que sea ', 'No es que él sea '], ['vago, ', 'perezoso, '], ['es que está cansado.', 'sino que está cansado.']),
      'no es que + subjonctif, es que / sino que + indicatif.', { kc: [REFUTE, SINO], d: 1.8 })
    .answer('Elige un tópico (sobre tu país, tu profesión o tu generación) y refútalo con argumentos.',
      'Se dice que los franceses son antipáticos, pero nada más lejos de la realidad: no es que sean fríos, sino que son más reservados al principio.',
      'Réfutation : nada más lejos de la realidad, no es que…, sino que…', { kc: [REFUTE, SINO], keywords: [['nada más lejos', 'no es cierto', 'no es verdad', 'sino', 'lejos de', 'en absoluto', 'carece de']], minWords: 18, d: 2.0 })
    .build(),
};
