import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const AUNQUE = 'es.b2.grammar.aunque_mood';
const CONC = 'es.b2.grammar.concessive_connectors';
const COND = 'es.b2.grammar.conditional_connectors';
const NEG = 'es.b2.grammar.negative_conditional_connectors';

export const concesivas1: Lesson = {
  id: 'es-b2-concesivas-1',
  cefr: 'B2',
  unitId: 'es-b2-concesivas',
  title: 'Aunque + indicatif ou subjonctif',
  subtitle: 'Aunque llueve / aunque llueva · a pesar de · por mucho que',
  kcIds: [AUNQUE, CONC],
  estMinutes: 12,
  explanation: [
    {
      title: 'Aunque : fait réel ou hypothèse ?',
      body: 'aunque + indicatif présente un fait réel, une information nouvelle. aunque + subjonctif présente une hypothèse, ou un fait connu qu’on juge sans importance.',
      table: [
        ['Aunque llueve, salimos.', 'Bien qu’il pleuve (c’est un fait), on sort.'],
        ['Aunque llueva, saldremos.', 'Même s’il pleut (peut-être), on sortira.'],
        ['Aunque me lo pidiera, no lo haría.', 'Même s’il me le demandait, je ne le ferais pas.'],
        ['Aunque me lo hubieras dicho, no habría ido.', 'Même si tu me l’avais dit, je n’y serais pas allé.'],
      ],
      examples: [
        { en: 'Aunque estaba cansada, terminé el informe.', fr: 'Bien que je sois fatiguée, j’ai fini le rapport.' },
        { en: 'Aunque no quieras, tienes que venir.', fr: 'Même si tu ne veux pas, tu dois venir.' },
      ],
      tip: 'Piège croisé : « bien que » + subjonctif en français correspond souvent à aunque + INDICATIF (fait réel) ; « même si » + indicatif correspond à aunque + SUBJONCTIF (hypothèse).',
    },
    {
      title: 'A pesar de, por mucho que',
      body: 'a pesar de + nom ou infinitif ; a pesar de que suit la même logique qu’aunque. por mucho que / por más que = avoir beau.',
      table: [
        ['A pesar del frío, salimos.', 'Malgré le froid, nous sommes sortis.'],
        ['A pesar de ser rico, vive con sencillez.', 'Bien qu’il soit riche, il vit simplement.'],
        ['Por mucho que estudie, no aprueba.', 'Il a beau étudier, il ne réussit pas.'],
      ],
      examples: [
        { en: 'A pesar de todo, seguimos siendo amigos.', fr: 'Malgré tout, nous sommes toujours amis.' },
        { en: 'Por más que se lo digo, no me hace caso.', fr: 'J’ai beau le lui dire, il ne m’écoute pas.' },
      ],
      tip: 'a pesar de + que pour introduire un verbe conjugué : a pesar de que hacía frío. Sans que : a pesar del frío (de + el → del).',
    },
  ],
  exercises: exercises('es-b2-concesivas-1', 'B2', { kc: AUNQUE, tense: 'subjuntivo' })
    .mcq('No sé qué tiempo hará, pero aunque ___, iremos a la playa.', ['llueva', 'llueve', 'lloverá'], 0, 'On ne sait pas s’il pleuvra → hypothèse → subjonctif : llueva.', { d: 0.6 })
    .mcq('___ mal tiempo, el partido se jugó con normalidad.', ['A pesar del', 'Aunque el', 'Por mucho'], 0, 'Devant un nom : a pesar de + el → a pesar del.', { kc: CONC, d: 0.5 })
    .cloze('Aunque ___ cansada, terminé el informe antes de irme.', ['estaba'], 'Fait réel au passé → indicatif : estaba.', { hint: 'estar, yo', d: 0.7 })
    .cloze('Por mucho que ___, no consigo aprobar el examen de conducir.', ['estudio', 'estudie'], 'por mucho que + indicatif (fait constaté) ou subjonctif (valeur générale).', { kc: CONC, hint: 'estudiar, yo', d: 0.8 })
    .type('Complète (hypothèse) : « Aunque (tú / tener) ___ razón, no deberías hablarle así. »', ['tengas'], 'On ne tranche pas sur le fait → subjonctif : tengas.', { d: 0.7 })
    .type('Complète : « Nos fuimos a la montaña a pesar de que (hacer) ___ mucho frío. »', ['hacía', 'hizo', 'hiciera', 'hiciese'], 'Fait réel → indicatif (hacía) ; le subjonctif imparfait est possible si on le présente comme sans importance.', { kc: CONC, d: 0.7 })
    .order('Même si tu ne veux pas, tu dois venir.', 'Aunque no quieras, tienes que venir.', '« même si » → aunque + subjonctif.', { distractors: ['quieres'], d: 0.6 })
    .tr('Même s’il me le demandait, je ne le ferais pas.', [
      'Aunque me lo pidiera, no lo haría.', 'Aunque me lo pidiese, no lo haría.', 'Aunque él me lo pidiera, no lo haría.', 'Aunque él me lo pidiese, no lo haría.',
      'No lo haría aunque me lo pidiera.', 'No lo haría aunque me lo pidiese.', 'Aunque me lo pidiera, yo no lo haría.',
    ], 'Hypothèse peu probable → aunque + subjonctif imparfait, conditionnel dans la principale.', { d: 0.9 })
    .tr('Bien qu’il soit riche, il vit très simplement.', [
      'Aunque es rico, vive de forma muy sencilla.', 'Aunque es rico, vive de manera muy sencilla.', 'Aunque es rico, vive con mucha sencillez.', 'Aunque es rico, vive muy sencillamente.',
      'A pesar de que es rico, vive de forma muy sencilla.', 'A pesar de ser rico, vive de forma muy sencilla.', 'A pesar de ser rico, vive con mucha sencillez.',
      'Aunque sea rico, vive de forma muy sencilla.',
    ], 'Fait réel → aunque + indicatif (es rico), malgré le subjonctif français.', { kc: [AUNQUE, CONC], d: 0.9 })
    .listen('Aunque el piso es pequeño, tiene mucha luz y está en un barrio muy tranquilo, así que lo vamos a alquilar.', '¿Qué van a hacer?', [
      'Alquilar el piso', 'Buscar un piso más grande', 'Mudarse a otro barrio',
    ], 0, 'aunque es pequeño : fait réel → indicatif.', { d: 0.6 })
    .listen('Por mucho que me lo expliques, no voy a cambiar de opinión: no pienso votar a ese partido.', '¿Qué dice la persona?', [
      'Que no va a cambiar de opinión', 'Que necesita más explicaciones', 'Que va a votar a ese partido',
    ], 0, 'por mucho que me lo expliques = tu auras beau me l’expliquer.', { kc: CONC, d: 0.7 })
    .dictation('Aunque no me guste, tendré que aceptarlo.', 'aunque + subjonctif : no me guste.', { d: 0.6 })
    .repeat('A pesar de todo, seguimos siendo amigos.', 'a pesar de + pronom : a pesar de todo.', { kc: CONC, d: 0.5 })
    .say('J’ai beau lui dire, il ne m’écoute pas.', [
      'Por mucho que se lo digo, no me escucha.', 'Por mucho que se lo diga, no me escucha.', 'Por más que se lo digo, no me escucha.', 'Por más que se lo diga, no me escucha.',
      'Por mucho que se lo digo, no me hace caso.', 'Por mucho que se lo diga, no me hace caso.', 'Por más que se lo digo, no me hace caso.', 'Por más que se lo diga, no me hace caso.',
    ], 'avoir beau → por mucho que / por más que ; lui + le → se lo.', { kc: CONC, d: 0.9 })
    .answer('¿Hay algo que harías aunque fuera difícil o peligroso?', 'Aunque fuera muy difícil, me gustaría dar la vuelta al mundo en bicicleta, porque me encanta la aventura.',
      'aunque + subjonctif imparfait pour une hypothèse.', { keywords: [['aunque', 'a pesar de', 'por mucho que', 'por más que']], minWords: 12, d: 0.9 })
    .build(),
};

export const concesivas2: Lesson = {
  id: 'es-b2-concesivas-2',
  cefr: 'B2',
  unitId: 'es-b2-concesivas',
  title: 'Exprimer une condition',
  subtitle: 'Con tal de que · siempre que · a no ser que · en caso de que',
  kcIds: [COND, NEG],
  estMinutes: 12,
  explanation: [
    {
      title: 'À condition que',
      body: 'con tal de que, siempre que, siempre y cuando, a condición de que + subjonctif. Même sujet : con tal de + infinitif.',
      table: [
        ['Te lo presto con tal de que me lo devuelvas.', 'Je te le prête pourvu que tu me le rendes.'],
        ['Puedes salir siempre y cuando vuelvas pronto.', 'Tu peux sortir à condition de rentrer tôt.'],
        ['siempre que + indicatif', 'chaque fois que : Siempre que voy, llueve.'],
      ],
      examples: [
        { en: 'Iré con tal de que vengas tú también.', fr: 'J’irai pourvu que tu viennes aussi.' },
        { en: 'Siempre que vamos a Valencia, comemos paella.', fr: 'Chaque fois que nous allons à Valence, nous mangeons une paella.' },
      ],
      tip: 'siempre que change de sens selon le mode : + subjonctif = à condition que ; + indicatif = chaque fois que.',
    },
    {
      title: 'À moins que, au cas où',
      body: 'a no ser que, a menos que, salvo que (à moins que) et en caso de que (au cas où) + subjonctif. como + subjonctif exprime une menace ou un avertissement.',
      table: [
        ['Iremos, a no ser que llueva.', 'Nous irons, à moins qu’il ne pleuve.'],
        ['En caso de que tengas un problema, llámame.', 'Au cas où tu aurais un problème, appelle-moi.'],
        ['Como llegues tarde, me voy.', 'Si tu arrives en retard, je pars.'],
        ['por si + indicatif', 'au cas où : Coge el paraguas por si llueve.'],
      ],
      examples: [
        { en: 'No te lo diré a menos que me lo pidas.', fr: 'Je ne te le dirai pas à moins que tu me le demandes.' },
        { en: 'Como rompáis algo, lo pagáis.', fr: 'Si vous cassez quelque chose, vous le payez.' },
      ],
      tip: '« Au cas où » + conditionnel en français → en caso de que + subjonctif, ou por si + indicatif. Jamais de conditionnel, et pas de « ne » explétif après a no ser que.',
    },
  ],
  exercises: exercises('es-b2-concesivas-2', 'B2', { kc: COND, tense: 'subjuntivo' })
    .mcq('Te dejo el coche con tal de que me lo ___ lleno.', ['devuelvas', 'devuelves', 'devolverás'], 0, 'con tal de que → subjonctif : devuelvas.', { d: 0.6 })
    .mcq('¿Cuándo se puede tener un animal en la residencia?', ['Solo si es un perro guía', 'Siempre que no haga ruido', 'Si se avisa a recepción'], 0,
      'a no ser que se trate de un perro guía = à moins qu’il s’agisse d’un chien guide. Toutes les conditions du règlement sont au subjonctif.', {
        kc: [COND, NEG], d: 0.8,
        passage: 'Normas de la residencia de estudiantes\nLos residentes pueden recibir visitas siempre que estas abandonen el edificio antes de las once de la noche. Se permite cocinar en las habitaciones con tal de que se usen los aparatos autorizados. En caso de que se produzca una avería, hay que avisar inmediatamente a recepción. Está prohibido tener animales, a no ser que se trate de un perro guía.',
      })
    .cloze('En caso de que ___ algún problema, llámame al móvil.', ['tengas'], 'en caso de que → subjonctif : tengas.', { kc: NEG, hint: 'tener, tú', d: 0.6 })
    .cloze('Siempre que ___ a Valencia, comemos paella en la playa.', ['vamos'], 'Habitude → siempre que + indicatif (chaque fois que).', { hint: 'ir, nosotros', d: 0.8 })
    .type('Complète : « Puedes salir esta noche siempre y cuando (volver) ___ antes de la una. »', ['vuelvas'], 'siempre y cuando → subjonctif : vuelvas.', { d: 0.6 })
    .type('Complète (menace) : « Como (vosotros / romper) ___ algo, lo pagáis. »', ['rompáis'], 'como + subjonctif = avertissement : rompáis.', { kc: NEG, d: 0.9 })
    .order('Je viendrai à moins qu’il pleuve.', 'Vendré a menos que llueva.', 'a menos que → subjonctif : llueva.', { kc: NEG, distractors: ['llueve'], d: 0.6 })
    .tr('Je te le prête à condition que tu en prennes soin.', [
      'Te lo presto con tal de que lo cuides.', 'Te lo presto siempre que lo cuides.', 'Te lo presto siempre y cuando lo cuides.', 'Te lo presto a condición de que lo cuides.',
      'Te la presto con tal de que la cuides.', 'Te la presto siempre que la cuides.', 'Te la presto siempre y cuando la cuides.', 'Te la presto a condición de que la cuides.',
      'Te lo dejo con tal de que lo cuides.', 'Te lo dejo siempre que lo cuides.',
    ], 'con tal de que / siempre que + subjonctif ; prendre soin de → cuidar.', { d: 0.8 })
    .tr('Prends un parapluie au cas où il pleuvrait.', [
      'Coge un paraguas por si llueve.', 'Coge el paraguas por si llueve.', 'Llévate un paraguas por si llueve.', 'Llévate el paraguas por si llueve.',
      'Coge un paraguas en caso de que llueva.', 'Coge el paraguas en caso de que llueva.', 'Llévate un paraguas en caso de que llueva.', 'Llévate el paraguas en caso de que llueva.',
      'Toma un paraguas por si llueve.', 'Coja un paraguas por si llueve.',
    ], 'por si + indicatif ou en caso de que + subjonctif ; jamais de conditionnel.', { kc: NEG, d: 0.8 })
    .listen('Os dejo ir al concierto siempre que me mandéis un mensaje al llegar y volváis juntos.', '¿Con qué condición pueden ir al concierto?', [
      'Si mandan un mensaje y vuelven juntos', 'Si vuelven antes de medianoche', 'Si van con un adulto',
    ], 0, 'siempre que mandéis… y volváis : condition → subjonctif.', { d: 0.7 })
    .listen('Salvo que haya un cambio de última hora, la reunión será el jueves a las diez en la sala grande.', '¿Cuándo será la reunión?', [
      'El jueves a las diez, salvo cambios', 'El jueves a las doce', 'Todavía no se sabe',
    ], 0, 'salvo que haya = sauf s’il y a.', { kc: NEG, d: 0.7 })
    .dictation('No te lo diré a no ser que me prometas guardar el secreto.', 'a no ser que + subjonctif : prometas.', { kc: NEG, d: 0.8 })
    .repeat('Puedes quedarte con tal de que no hagas ruido.', 'con tal de que + subjonctif : hagas.', { d: 0.5 })
    .say('Au cas où tu aurais besoin de quelque chose, appelle-moi.', [
      'En caso de que necesites algo, llámame.', 'Llámame en caso de que necesites algo.', 'Si necesitas algo, llámame.', 'Llámame si necesitas algo.',
      'En caso de que necesite algo, llámeme.', 'Si necesita algo, llámeme.',
    ], 'en caso de que + subjonctif (necesites), ou simplement si + indicatif.', { kc: NEG, d: 0.7 })
    .answer('¿En qué condiciones aceptarías un trabajo en el extranjero?', 'Aceptaría un trabajo en el extranjero siempre que el sueldo fuera bueno y con tal de que mi familia pudiera venir conmigo.',
      'Conditionnel + siempre que / con tal de que + subjonctif imparfait.', {
        keywords: [['siempre que', 'con tal de que', 'a condición de que', 'siempre y cuando', 'a no ser que', 'a menos que', 'salvo que', 'en caso de que']], minWords: 12, d: 1.0,
      })
    .build(),
};
