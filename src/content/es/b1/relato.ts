import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const PLUS = 'es.b1.tense.pluscuamperfecto';
const SEQ = 'es.b1.tense.past_sequence';
const MARK = 'es.b1.function.narrative_markers';

export const relato1: Lesson = {
  id: 'es-b1-relato-1',
  cefr: 'B1',
  unitId: 'es-b1-relato',
  title: 'Le plus-que-parfait',
  subtitle: 'Cuando llegué, la película ya había empezado',
  kcIds: [PLUS],
  estMinutes: 10,
  explanation: [
    {
      title: 'había + participe',
      body: 'Le pluscuamperfecto se forme avec haber à l’imparfait et le participe passé, invariable. Les participes irréguliers sont les mêmes qu’au perfecto (hecho, dicho, visto, puesto, vuelto…).',
      table: [
        ['yo', 'había salido'],
        ['tú', 'habías visto'],
        ['él, ella, usted', 'había hecho'],
        ['nosotros', 'habíamos comido'],
        ['vosotros', 'habíais vuelto'],
        ['ellos, ellas, ustedes', 'habían dicho'],
      ],
      examples: [
        { en: 'Cuando llegamos, el tren ya había salido.', fr: 'Quand nous sommes arrivés, le train était déjà parti.' },
        { en: 'Me dijo que había perdido el móvil.', fr: 'Il m’a dit qu’il avait perdu son portable.' },
      ],
      tip: 'Toujours haber, même là où le français dit « être » : « era salido » ✗ → « había salido » ✓. Et pas d’accord : ella había salido.',
    },
    {
      title: 'Avant un moment du passé',
      body: 'Le pluscuamperfecto situe une action avant une autre action passée. Il s’emploie aussi pour une première fois : nunca había… = je n’avais jamais…',
      examples: [
        { en: 'Nunca había visto el mar hasta ese verano.', fr: 'Je n’avais jamais vu la mer avant cet été-là.' },
        { en: 'Cuando la llamé, ya se había acostado.', fr: 'Quand je l’ai appelée, elle s’était déjà couchée.' },
      ],
      tip: 'Les pronoms se placent devant había : ya se había acostado, no lo había visto. Rien ne s’intercale entre había et le participe.',
    },
  ],
  exercises: exercises('es-b1-relato-1', 'B1', { kc: PLUS, tense: 'pluscuamperfecto' })
    .mcq('Cuando llegamos a la estación, el tren ya ___.', ['había salido', 'salía', 'ha salido'], 0, 'Action antérieure à llegamos → había salido.', { d: -0.4 })
    .mcq('Antes de este viaje, nunca ___ en avión.', ['había volado', 'volé', 'he volado'], 0, 'Expérience antérieure à un moment passé → nunca había volado.', { d: -0.3 })
    .cloze('Cuando la llamé, Carmen ya se ___ a la cama.', ['había ido'], 'irse → se había ido.', { hint: 'ir', d: -0.2 })
    .cloze('No pude entrar porque ___ las llaves en la oficina.', ['había dejado', 'me había dejado'], 'Antérieur à no pude entrar → había dejado.', { hint: 'dejar, yo', d: -0.2 })
    .type('Conjugue « hacer » au plus-que-parfait avec « nosotros ».', ['habíamos hecho'], 'habíamos + hecho (participe irrégulier).', { d: -0.4 })
    .type('Conjugue « ver » au plus-que-parfait avec « vosotros ».', ['habíais visto'], 'habíais + visto.', { d: -0.3 })
    .order('Il n’avait jamais vu la neige.', 'Nunca había visto la nieve.', 'nunca + había + visto.', { distractors: ['ha'], d: -0.4 })
    .tr('Quand je suis {arrivé|arrivée}, tout le monde était parti.', [
      'Cuando llegué, todos se habían ido.', 'Cuando llegué, todo el mundo se había ido.', 'Cuando llegué, todos se habían marchado.',
      'Cuando llegué, todo el mundo se había marchado.', 'Cuando yo llegué, todos se habían ido.', 'Cuando llegué, ya se habían ido todos.', 'Cuando llegué, todos habían salido.',
    ], 'llegué (événement) ; se habían ido (antérieur).', { kc: [PLUS, SEQ], d: 0 })
    .tr('Elle m’a dit qu’elle avait perdu son portable.', [
      'Me dijo que había perdido el móvil.', 'Me dijo que había perdido su móvil.', 'Ella me dijo que había perdido el móvil.', 'Ella me dijo que había perdido su móvil.',
      'Me ha dicho que había perdido el móvil.', 'Me ha dicho que había perdido su móvil.',
    ], 'avait perdu → había perdido ; portable = móvil en Espagne.', { d: 0 })
    .listen('Cuando llegó la policía, los ladrones ya se habían escapado por la ventana.', 'Qu’est-il arrivé ?',
      ['Les voleurs étaient déjà partis quand la police est arrivée', 'La police a attrapé les voleurs', 'Les voleurs sont entrés par la porte'], 0,
      'ya se habían escapado = ils s’étaient déjà échappés.', { d: -0.3 })
    .listen('Nunca había probado el gazpacho hasta que fui a Córdoba. ¡Me encantó!', 'Où la personne a-t-elle goûté le gazpacho pour la première fois ?',
      ['À Cordoue', 'Chez sa grand-mère', 'Au restaurant de son quartier'], 0,
      'nunca había probado… hasta que fui a Córdoba.', { d: -0.4 })
    .dictation('Ya habíamos cenado cuando sonó el teléfono.', 'habíamos cenado (avant) ; sonó (événement).', { kc: [PLUS, SEQ], d: -0.3 })
    .repeat('No sabía que te habías cambiado de casa.', 'te habías cambiado : pronom devant había.', { d: -0.3 })
    .say('Nous n’avions pas encore fini.', [
      'Todavía no habíamos terminado.', 'Aún no habíamos terminado.', 'No habíamos terminado todavía.', 'Todavía no habíamos acabado.', 'Aún no habíamos acabado.',
      'No habíamos acabado todavía.', 'No habíamos terminado aún.',
    ], 'todavía no / aún no + habíamos terminado.', { d: -0.3 })
    .answer('Cuenta algo que hiciste por primera vez. ¿Lo habías hecho antes?', 'El año pasado fui a Lisboa. Nunca había viajado solo y al principio estaba un poco nervioso.',
      'Utilise nunca había… pour une première fois.', { kc: [PLUS, SEQ], keywords: [['había', 'habíamos', 'habías']], minWords: 12, d: 0.1 })
    .build(),
};

export const relato2: Lesson = {
  id: 'es-b1-relato-2',
  cefr: 'B1',
  unitId: 'es-b1-relato',
  title: 'Raconter une histoire',
  subtitle: 'Indefinido, imperfecto, pluscuamperfecto et connecteurs',
  kcIds: [SEQ, MARK],
  estMinutes: 11,
  explanation: [
    {
      title: 'Trois temps pour raconter',
      body: 'Dans un récit, l’indefinido fait avancer l’histoire, l’imperfecto décrit le décor ou une action en cours, le pluscuamperfecto remonte à ce qui s’était passé avant.',
      table: [
        ['indefinido', 'événements : sonó el timbre, abrí la puerta'],
        ['imperfecto', 'décor, action en cours : era sábado, llovía, estaba leyendo'],
        ['pluscuamperfecto', 'avant : había perdido las llaves'],
      ],
      examples: [
        { en: 'Era sábado y llovía. Estaba leyendo cuando sonó el timbre.', fr: 'C’était samedi et il pleuvait. Je lisais quand on a sonné.' },
        { en: 'Era mi vecino, que había perdido sus llaves.', fr: 'C’était mon voisin, qui avait perdu ses clés.' },
      ],
      tip: 'Le passé composé d’un récit français (on a sonné) se traduit par l’indefinido (sonó), pas par le perfecto.',
    },
    {
      title: 'Les connecteurs du récit',
      body: 'Ils organisent la chronologie et rendent le récit vivant.',
      table: [
        ['début', 'al principio, primero'],
        ['suite', 'luego, después, entonces, un rato después, al día siguiente'],
        ['surprise', 'de repente, de pronto'],
        ['simultanéité', 'mientras'],
        ['fin', 'al final, por fin, finalmente'],
      ],
      examples: [
        { en: 'De repente, se fue la luz.', fr: 'Soudain, il y a eu une coupure de courant.' },
        { en: 'Al final, nos quedamos en casa.', fr: 'Finalement, nous sommes restés à la maison.' },
      ],
      tip: 'De repente annonce presque toujours un indefinido. « Après avoir mangé » se dit después de comer (infinitif simple).',
    },
  ],
  exercises: exercises('es-b1-relato-2', 'B1', { kc: SEQ, tense: 'pasado' })
    .mcq('Ayer se fue la luz en mitad de la ducha. → ___ cuando se fue la luz.', ['Me estaba duchando', 'Me duché', 'Me ducharé'], 0,
      'Action en cours interrompue → estaba + gérondif (imperfecto).', { d: -0.3 })
    .cloze('Era tarde y ___ mucho frío, así que volvimos a casa.', ['hacía'], 'Décor (météo) → imperfecto : hacía.', { hint: 'hacer', d: -0.3 })
    .cloze('___, se oyó un ruido enorme en la cocina.', ['De repente', 'De pronto', 'De golpe'], 'soudain = de repente / de pronto.', { kc: MARK, hint: 'soudain', d: -0.4 })
    .mcq('Pourquoi le narrateur et sa sœur n’avaient-ils pas de parapluie ?',
      ['Ils les avaient laissés à l’hôtel', 'Ils les avaient perdus', 'Il ne pleut jamais à Grenade'], 0,
      'No llevábamos paraguas porque los habíamos dejado en el hotel.',
      {
        kc: [SEQ, PLUS], d: -0.2,
        passage: 'Una noche en Granada\nEl verano pasado fui a Granada con mi hermana. La primera noche, mientras paseábamos por el Albaicín, empezó a llover muchísimo. No llevábamos paraguas porque los habíamos dejado en el hotel. Entramos en un pequeño bar donde un señor mayor tocaba la guitarra. Al principio éramos los únicos clientes, pero un rato después el bar estaba lleno. Al final, nos quedamos allí hasta las dos de la mañana. Fue la mejor noche del viaje.',
      })
    .type('Mets le verbe au bon temps : « Cuando (nosotros, llegar) a la playa, ya había empezado a llover. » Écris seulement le verbe.', ['llegamos'],
      'Événement → indefinido : llegamos.', { d: -0.2 })
    .type('Mets le verbe au bon temps : « De niño, (yo, pasar) los veranos en el pueblo de mis abuelos. » Écris seulement le verbe.', ['pasaba'],
      'Habitude passée → imperfecto : pasaba.', { d: -0.3 })
    .order('Au début, je ne comprenais rien.', 'Al principio no entendía nada.', 'al principio + imperfecto (état).', { kc: MARK, distractors: ['finalmente'], d: -0.3 })
    .tr('Je dormais quand le téléphone a sonné.', [
      'Estaba durmiendo cuando sonó el teléfono.', 'Dormía cuando sonó el teléfono.', 'Yo estaba durmiendo cuando sonó el teléfono.', 'Yo dormía cuando sonó el teléfono.',
    ], 'Action en cours (estaba durmiendo) + événement (sonó).', { d: -0.2 })
    .tr('Finalement, nous avons décidé de rester à la maison.', [
      'Al final, decidimos quedarnos en casa.', 'Finalmente, decidimos quedarnos en casa.', 'Al final, hemos decidido quedarnos en casa.', 'Finalmente, hemos decidido quedarnos en casa.',
    ], 'al final / finalmente ; quedarse en casa.', { kc: [MARK, SEQ], d: -0.2 })
    .listen('Iba en bici por el parque cuando un perro se cruzó delante de mí. Me caí, pero por suerte no me hice daño.', 'Que s’est-il passé ?',
      ['La personne est tombée de vélo à cause d’un chien', 'Un chien l’a mordue', 'On lui a volé son vélo'], 0,
      'iba en bici (décor) ; un perro se cruzó, me caí (événements).', { d: -0.2 })
    .listen('Primero fuimos al museo, luego comimos en una terraza y, por la tarde, dimos un paseo por el río.', 'Qu’ont-ils fait en premier ?',
      ['Ils sont allés au musée', 'Ils ont déjeuné en terrasse', 'Ils se sont promenés au bord du fleuve'], 0,
      'primero = d’abord ; luego = ensuite.', { kc: MARK, d: -0.4 })
    .dictation('Al día siguiente nos despertamos tarde y no había nadie en casa.', 'al día siguiente = le lendemain.', { kc: [MARK, SEQ], d: -0.2 })
    .repeat('De repente, se abrió la puerta y entró un hombre que no conocíamos.', 'de repente + indefinido.', { kc: MARK, d: -0.2 })
    .say('Il pleuvait, alors nous sommes restés à l’hôtel.', [
      'Llovía, así que nos quedamos en el hotel.', 'Estaba lloviendo, así que nos quedamos en el hotel.', 'Como llovía, nos quedamos en el hotel.',
      'Llovía y por eso nos quedamos en el hotel.', 'Llovía, por eso nos quedamos en el hotel.',
    ], 'llovía (décor) ; nos quedamos (événement).', { d: -0.2 })
    .answer('Cuenta una anécdota de un viaje: ¿dónde estabas y qué pasó?', 'Estaba en Madrid con unos amigos. De repente empezó a llover y entramos en un bar donde había un concierto.',
      'Mélange décor (imperfecto) et événements (indefinido), avec des connecteurs.', {
        kc: [SEQ, MARK], keywords: [['estaba', 'era', 'había', 'hacía', 'llovía', 'íbamos', 'estábamos'], ['de repente', 'entonces', 'al final', 'luego', 'después', 'cuando', 'al principio']],
        minWords: 15, d: 0.2,
      })
    .build(),
};
