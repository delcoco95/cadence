import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const TEMP = 'es.b2.grammar.temporal_subjunctive';
const CONJ = 'es.b2.grammar.subjunctive_conjunctions';
const REL = 'es.b2.grammar.relative_subjunctive';
const FREE = 'es.b2.grammar.free_relative_subjunctive';

export const temporales1: Lesson = {
  id: 'es-b2-temporales-1',
  cefr: 'B2',
  unitId: 'es-b2-temporales',
  title: 'Subjonctif dans les temporelles',
  subtitle: 'Cuando llegues · en cuanto sepa · antes de que empiece',
  kcIds: [TEMP, CONJ],
  estMinutes: 12,
  explanation: [
    {
      title: 'Cuando + subjonctif pour parler du futur',
      body: 'Avec cuando, en cuanto, tan pronto como, hasta que, mientras, después de que : subjonctif si l’action est à venir, indicatif si elle est habituelle ou passée.',
      table: [
        ['futur → subjonctif', 'Cuando llegues, llámame.'],
        ['habitude → indicatif', 'Cuando llego a casa, me ducho.'],
        ['passé → indicatif', 'Cuando llegué, ya se habían ido.'],
        ['futur dans le passé → subj. imparfait', 'Me dijo que me llamaría cuando llegara.'],
      ],
      examples: [
        { en: 'En cuanto termine la reunión, te escribo.', fr: 'Dès que la réunion sera finie, je t’écris.' },
        { en: 'No me iré hasta que me digas la verdad.', fr: 'Je ne partirai pas tant que tu ne m’auras pas dit la vérité.' },
      ],
      tip: 'Le français met le futur après « quand » : « quand tu arriveras ». L’espagnol interdit le futur ici : cuando llegues, jamais « cuando llegarás ».',
    },
    {
      title: 'Conjonctions toujours suivies du subjonctif',
      body: 'antes de que, para que, sin que demandent toujours le subjonctif, quel que soit le temps. Si le sujet est le même, on emploie l’infinitif.',
      table: [
        ['sujets différents', 'Salimos antes de que empiece a llover. · Te lo explico para que lo entiendas.'],
        ['même sujet', 'Desayuno antes de salir. · Estudio para aprobar.'],
        ['au passé', 'Se fue sin que nadie la viera.'],
      ],
      examples: [
        { en: 'Os dejo las llaves para que podáis entrar.', fr: 'Je vous laisse les clés pour que vous puissiez entrer.' },
        { en: 'Llámame antes de que sea demasiado tarde.', fr: 'Appelle-moi avant qu’il ne soit trop tard.' },
      ],
      tip: 'Pas de « ne » explétif en espagnol : « avant qu’il ne parte » → antes de que se vaya. Et au passé, la concordance s’applique : sin que nadie la viera.',
    },
  ],
  exercises: exercises('es-b2-temporales-1', 'B2', { kc: TEMP, tense: 'subjuntivo' })
    .mcq('Cuando ___ a Madrid, te llamaré.', ['llegue', 'llegaré', 'llego'], 0, 'Action future après cuando → subjonctif : llegue.', { d: 0.4 })
    .mcq('Cuando ___ pequeña, vivía en un pueblo de Teruel.', ['era', 'sea', 'fuera'], 0, 'Passé → indicatif : cuando era pequeña.', { d: 0.5 })
    .cloze('No me iré hasta que me ___ la verdad.', ['digas'], 'hasta que + action future → subjonctif : digas.', { hint: 'decir, tú', d: 0.6 })
    .cloze('Te lo explico otra vez para que lo ___ bien.', ['entiendas'], 'para que → toujours subjonctif : entiendas.', { kc: CONJ, hint: 'entender, tú', d: 0.6 })
    .type('Complète : « Avísame en cuanto (tú / saber) ___ algo. »', ['sepas'], 'en cuanto + futur → subjonctif : sepas.', { d: 0.7 })
    .type('Complète : « Salimos antes de que (empezar) ___ a llover. »', ['empiece', 'empezara', 'empezase'], 'antes de que → toujours subjonctif : empiece (présent) ou empezara (si salimos est au passé).', { kc: CONJ, d: 0.8 })
    .order('Appelle-moi quand tu seras à la maison.', 'Llámame cuando estés en casa.', 'cuando + futur → subjonctif : estés.', { distractors: ['estarás'], d: 0.5 })
    .tr('Quand je serai à la retraite, je voyagerai beaucoup.', [
      'Cuando me jubile, viajaré mucho.', 'Cuando esté jubilado, viajaré mucho.', 'Cuando esté jubilada, viajaré mucho.', 'Cuando me jubile, voy a viajar mucho.',
      'Viajaré mucho cuando me jubile.', 'Cuando yo me jubile, viajaré mucho.', 'Cuando esté jubilado, voy a viajar mucho.', 'Cuando esté jubilada, voy a viajar mucho.',
    ], 'cuando + subjonctif (me jubile), puis futur dans la principale.', { d: 0.6 })
    .tr('Elle est partie sans que personne ne la voie.', [
      'Se fue sin que nadie la viera.', 'Se fue sin que nadie la viese.', 'Ella se fue sin que nadie la viera.', 'Ella se fue sin que nadie la viese.',
      'Se marchó sin que nadie la viera.', 'Se marchó sin que nadie la viese.', 'Salió sin que nadie la viera.', 'Salió sin que nadie la viese.',
    ], 'sin que + subjonctif, au passé → imparfait : viera. Pas de « no » explétif.', { kc: CONJ, d: 0.9 })
    .listen('Mientras estés en casa de tus abuelos, tienes que ayudarlos en todo lo que necesiten.', '¿Qué tiene que hacer mientras está con sus abuelos?', [
      'Ayudarlos en todo', 'Llamar a sus padres cada día', 'Estudiar para los exámenes',
    ], 0, 'mientras estés : période future → subjonctif.', { d: 0.6 })
    .listen('Os dejo las llaves para que podáis entrar antes de que vuelva del trabajo.', '¿Para qué les deja las llaves?', [
      'Para que puedan entrar antes de que vuelva del trabajo', 'Para que cierren la puerta al salir', 'Para que se las den al portero',
    ], 0, 'para que podáis, antes de que vuelva : toujours subjonctif.', { kc: CONJ, d: 0.7 })
    .dictation('En cuanto termine la reunión, os mando el documento.', 'en cuanto + subjonctif : termine.', { d: 0.7 })
    .repeat('Seguiremos esperando hasta que lleguen todos.', 'hasta que + subjonctif : lleguen.', { d: 0.5 })
    .say('Je te le dirai quand je le saurai.', [
      'Te lo diré cuando lo sepa.', 'Te lo diré cuando yo lo sepa.', 'Cuando lo sepa, te lo diré.', 'Te lo digo cuando lo sepa.', 'Cuando lo sepa, te lo digo.', 'Se lo diré cuando lo sepa.',
    ], '« quand je le saurai » → cuando lo sepa (subjonctif, pas de futur).', { d: 0.6 })
    .answer('¿Qué harás cuando termines tus estudios o tu proyecto actual?', 'Cuando termine este proyecto, me tomaré unas vacaciones y, en cuanto vuelva, buscaré un trabajo nuevo.',
      'cuando / en cuanto + subjonctif pour le futur.', { keywords: [['termine', 'acabe', 'tenga', 'pueda', 'vuelva', 'sea', 'esté', 'llegue', 'consiga', 'encuentre', 'me jubile']], minWords: 12, d: 0.8 })
    .build(),
};

export const temporales2: Lesson = {
  id: 'es-b2-temporales-2',
  cefr: 'B2',
  unitId: 'es-b2-temporales',
  title: 'Subjonctif dans les relatives',
  subtitle: 'Busco a alguien que sepa · el que quieras · como quieras',
  kcIds: [REL, FREE],
  estMinutes: 12,
  explanation: [
    {
      title: 'Antécédent connu ou inconnu',
      body: 'Si l’on parle d’une chose ou d’une personne qui existe et qu’on connaît : indicatif. Si elle est recherchée, hypothétique ou inexistante : subjonctif.',
      table: [
        ['connu → indicatif', 'Tengo una vecina que habla ruso.'],
        ['recherché → subjonctif', 'Busco un piso que tenga terraza.'],
        ['inexistant → subjonctif', 'No conozco a nadie que hable ruso.'],
      ],
      examples: [
        { en: '¿Hay alguien aquí que sepa cambiar una rueda?', fr: 'Il y a quelqu’un ici qui sait changer une roue ?' },
        { en: 'No hay nada que me guste en esta tienda.', fr: 'Il n’y a rien qui me plaise dans ce magasin.' },
      ],
      tip: 'Le français hésite (« qui sait » / « qui sache ») ; l’espagnol est systématique. Le a personnel disparaît devant une personne indéterminée : Busco una secretaria que hable alemán, mais Busco a la secretaria que habla alemán (une personne précise). alguien et nadie gardent le a.',
    },
    {
      title: 'Relatives libres : el que quieras, lo que digas',
      body: 'el que, lo que, donde, como, cuando, quien + subjonctif = « n’importe lequel, peu importe ». Avec l’indicatif, on désigne quelque chose de précis.',
      table: [
        ['Haz lo que quieras.', 'Fais ce que tu veux (peu importe quoi).'],
        ['Haz lo que te digo.', 'Fais ce que je te dis (précis).'],
        ['Siéntate donde prefieras.', 'Assieds-toi où tu préfères.'],
        ['Quien quiera venir, que se apunte.', 'Que celui qui veut venir s’inscrive.'],
      ],
      examples: [
        { en: 'Coge el que quieras.', fr: 'Prends celui que tu veux.' },
        { en: 'Nos vemos cuando te venga bien.', fr: 'On se voit quand ça t’arrange.' },
      ],
      tip: '« Comme tu veux » se dit como quieras (subjonctif !), jamais « como quieres » pour laisser le choix.',
    },
  ],
  exercises: exercises('es-b2-temporales-2', 'B2', { kc: REL, tense: 'subjuntivo' })
    .mcq('Buscamos un piso que ___ cerca del metro.', ['esté', 'está', 'estaba'], 0, 'Piso recherché, pas encore trouvé → subjonctif : esté.', { d: 0.5 })
    .mcq('¿Qué condición tiene que cumplir el nuevo compañero de piso?', ['No fumar y ser ordenado', 'Estudiar lo mismo que ellos', 'Tener coche'], 0,
      'Preferimos a una persona que no fume y que sea ordenada : personne inconnue → subjonctif. En revanche, una terraza que da al parque : réalité connue → indicatif.', {
        kc: [REL, FREE], d: 0.8,
        passage: 'Se busca compañero de piso\nSomos dos estudiantes de Salamanca y buscamos a alguien que quiera compartir piso a partir de septiembre. El piso tiene tres habitaciones, una terraza que da al parque y una cocina que acabamos de reformar. Preferimos a una persona que no fume y que sea ordenada. No importa lo que estudies: lo importante es que te guste la convivencia. Si te interesa, escríbenos cuando quieras.',
      })
    .cloze('No hay nadie en mi familia que ___ cocinar como mi abuela.', ['sepa'], 'Antécédent inexistant (nadie) → subjonctif : sepa.', { hint: 'saber', d: 0.6 })
    .cloze('Puedes sentarte donde ___; hay sitio de sobra.', ['quieras'], 'donde + subjonctif = n’importe où.', { kc: FREE, hint: 'querer, tú', d: 0.6 })
    .type('Complète : « ¿Conoces algún restaurante que (abrir) ___ los domingos por la noche? »', ['abra'], 'Restaurant dont on ignore l’existence → subjonctif : abra.', { d: 0.7 })
    .type('Complète : « Haz lo que (tú / querer) ___, yo no me meto. »', ['quieras'], 'lo que + subjonctif = peu importe ce que.', { kc: FREE, d: 0.6 })
    .order('Je cherche quelqu’un qui puisse m’aider.', 'Busco a alguien que pueda ayudarme.', 'Personne indéterminée → subjonctif : pueda. alguien garde le a.', { distractors: ['puede'], d: 0.6 })
    .tr('Il n’y a rien qui me plaise dans ce magasin.', [
      'No hay nada que me guste en esta tienda.', 'En esta tienda no hay nada que me guste.', 'No hay nada que me guste en esa tienda.', 'En esa tienda no hay nada que me guste.',
    ], 'Antécédent inexistant (nada) → subjonctif : guste.', { d: 0.7 })
    .tr('Prends celui que tu veux.', [
      'Coge el que quieras.', 'Toma el que quieras.', 'Elige el que quieras.', 'Coge la que quieras.', 'Toma la que quieras.', 'Elige la que quieras.',
      'Coge el que tú quieras.', 'Coja el que quiera.', 'Tome el que quiera.',
    ], 'el que + subjonctif = n’importe lequel.', { kc: FREE, d: 0.7 })
    .listen('Necesitamos a alguien que tenga experiencia en ventas y que pueda viajar a menudo. No importa que no hable inglés.', '¿Qué no es imprescindible para el puesto?', [
      'Hablar inglés', 'Tener experiencia en ventas', 'Poder viajar a menudo',
    ], 0, 'No importa que no hable inglés = peu importe qu’il ne parle pas anglais.', { d: 0.8 })
    .listen('Vale, nos vemos cuando quieras: el sábado, el domingo, como mejor te venga.', '¿Cuándo van a verse?', [
      'Cuando le venga bien a la otra persona', 'El sábado por la mañana', 'El domingo sin falta',
    ], 0, 'cuando quieras, como mejor te venga : relatives libres au subjonctif.', { kc: FREE, d: 0.7 })
    .dictation('Quien quiera venir con nosotros, que se apunte antes del viernes.', 'quien + subjonctif = toute personne qui.', { kc: FREE, d: 0.8 })
    .repeat('Busco un trabajo que me permita viajar.', 'Travail recherché → subjonctif : permita.', { d: 0.5 })
    .say('Fais comme tu veux.', [
      'Haz lo que quieras.', 'Haz como quieras.', 'Hazlo como quieras.', 'Como quieras.', 'Haga lo que quiera.', 'Haga como quiera.', 'Hágalo como quiera.',
    ], 'como quieras / lo que quieras : subjonctif pour laisser le choix.', { kc: FREE, d: 0.5 })
    .answer('Si te mudaras mañana, ¿cómo sería la casa ideal que buscarías?', 'Buscaría una casa que tuviera jardín, que estuviera cerca del mar y que no fuera demasiado cara.',
      'Antécédent recherché + conditionnel → subjonctif imparfait : tuviera, estuviera, fuera.', {
        keywords: [['tuviera', 'tuviese', 'estuviera', 'estuviese', 'fuera', 'fuese', 'tenga', 'esté', 'sea', 'diera', 'diese', 'hubiera', 'hubiese']], minWords: 12, d: 1.0,
      })
    .build(),
};
