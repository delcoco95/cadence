import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const CAUSE = 'es.b1.function.connectors_cause';
const CONTRAST = 'es.b1.function.connectors_contrast';
const REPORT = 'es.b1.grammar.reported_speech';

export const conectores1: Lesson = {
  id: 'es-b1-conectores-1',
  cefr: 'B1',
  unitId: 'es-b1-conectores',
  title: 'Relier ses idées',
  subtitle: 'Como, así que, aunque, sin embargo, sino',
  kcIds: [CAUSE, CONTRAST],
  estMinutes: 10,
  explanation: [
    {
      title: 'Cause et conséquence',
      body: 'porque suit la principale ; como, qui exprime aussi la cause, se place en tête de phrase. ya que et puesto que équivalent à « puisque ». Pour la conséquence : así que, por eso, por lo tanto.',
      table: [
        ['parce que', 'No vino porque estaba enfermo.'],
        ['comme (en tête)', 'Como estaba enfermo, no vino.'],
        ['puisque', 'Ya que estás aquí, ayúdame.'],
        ['donc, alors', 'Estaba enfermo, así que no vino.'],
        ['c’est pour ça', 'Estaba enfermo; por eso no vino.'],
      ],
      examples: [
        { en: 'Como no tenía dinero, no fui al concierto.', fr: 'Comme je n’avais pas d’argent, je ne suis pas allé au concert.' },
        { en: 'Hacía frío, así que nos quedamos en casa.', fr: 'Il faisait froid, alors nous sommes restés à la maison.' },
      ],
      tip: 'Ne confonds pas porque (parce que) et por qué (pourquoi, en deux mots avec accent). Et « donc » à l’oral se dit así que.',
    },
    {
      title: 'Opposition et addition',
      body: 'pero (mais), sino (mais, après une négation, pour corriger), aunque (bien que, même si), sin embargo (cependant), mientras que (alors que), además (en plus).',
      table: [
        ['correction', 'No es francés, sino belga.'],
        ['concession (fait réel)', 'Aunque llueve, salgo.'],
        ['cependant', 'Es caro; sin embargo, merece la pena.'],
        ['contraste', 'Yo trabajo, mientras que él estudia.'],
      ],
      examples: [
        { en: 'No quiero té, sino café.', fr: 'Je ne veux pas de thé, mais du café.' },
        { en: 'Aunque está cansada, va a venir.', fr: 'Bien qu’elle soit fatiguée, elle va venir.' },
      ],
      tip: '« bien que » est suivi du subjonctif en français, mais aunque + indicatif présente un fait réel : Aunque está cansada (elle l’est vraiment).',
    },
  ],
  exercises: exercises('es-b1-conectores-1', 'B1', { kc: CAUSE })
    .mcq('___ no tenía coche, fui en autobús.', ['Como', 'Porque', 'Así que'], 0, 'Cause en tête de phrase → como.', { d: -0.3 })
    .mcq('No es mexicano, ___ colombiano.', ['sino', 'pero', 'sin embargo'], 0, 'Correction après une négation → sino.', { kc: CONTRAST, d: -0.2 })
    .cloze('Estaba muy cansada, ___ me acosté pronto.', ['así que', 'por eso', 'por lo tanto', 'y por eso'], 'Conséquence → así que / por eso.', { hint: 'alors', d: -0.4 })
    .cloze('Me gusta mucho mi trabajo; ___, el sueldo es bastante bajo.', ['sin embargo', 'no obstante'], 'Opposition → sin embargo (cependant).', { kc: CONTRAST, hint: 'cependant', d: -0.1 })
    .type('Relie avec « aunque » : « Llueve. Vamos a salir. »', [
      'Aunque llueve, vamos a salir.', 'Vamos a salir aunque llueve.', 'Aunque está lloviendo, vamos a salir.', 'Vamos a salir aunque está lloviendo.',
      'Aunque llueva, vamos a salir.', 'Vamos a salir aunque llueva.',
    ], 'aunque + indicatif pour un fait réel.', { kc: CONTRAST, loose: true, d: -0.2 })
    .type('Relie avec « como » (cause) : « Hacía calor. Fuimos a la piscina. »', ['Como hacía calor, fuimos a la piscina.'], 'como en tête de phrase.', { loose: true, d: -0.2 })
    .order('Il ne vient pas parce qu’il est malade.', 'No viene porque está enfermo.', 'porque après la principale.', { distractors: ['como'], d: -0.5 })
    .tr('Je n’ai pas faim, alors je ne vais pas dîner.', [
      'No tengo hambre, así que no voy a cenar.', 'No tengo hambre, así que no ceno.', 'No tengo hambre, así que no cenaré.', 'No tengo hambre, por eso no voy a cenar.',
      'No tengo hambre y por eso no voy a cenar.', 'No tengo hambre, así que no voy a cenar nada.',
    ], 'alors → así que.', { d: -0.3 })
    .tr('Mon frère aime le foot, alors que moi je préfère le tennis.', [
      'A mi hermano le gusta el fútbol, mientras que yo prefiero el tenis.', 'A mi hermano le gusta el fútbol, mientras que a mí me gusta más el tenis.',
      'A mi hermano le gusta el fútbol, en cambio yo prefiero el tenis.', 'A mi hermano le gusta el fútbol, pero yo prefiero el tenis.',
      'A mi hermano le encanta el fútbol, mientras que yo prefiero el tenis.',
    ], 'alors que (contraste) → mientras que.', { kc: CONTRAST, d: 0 })
    .listen('Como el museo estaba cerrado, dimos una vuelta por el casco antiguo y además comimos en un sitio buenísimo.', 'Pourquoi ont-ils fait un tour dans la vieille ville ?',
      ['Le musée était fermé', 'Il faisait beau', 'Un ami le leur avait conseillé'], 0,
      'como el museo estaba cerrado = comme le musée était fermé.', { d: -0.3 })
    .listen('El hotel no estaba mal; sin embargo, el desayuno era carísimo y las habitaciones eran pequeñas.', 'Quel était le problème de l’hôtel ?',
      ['Le petit déjeuner très cher et les petites chambres', 'Le bruit', 'L’emplacement'], 0,
      'sin embargo introduit les défauts.', { kc: CONTRAST, d: -0.2 })
    .dictation('No vamos a la playa, sino a la montaña.', 'no… sino = pas… mais.', { kc: CONTRAST, d: -0.3 })
    .repeat('Ya que estás aquí, ¿me ayudas con la mudanza?', 'ya que = puisque.', { d: -0.3 })
    .say('Bien qu’il soit tard, je vais t’appeler.', [
      'Aunque es tarde, te voy a llamar.', 'Aunque es tarde, voy a llamarte.', 'Aunque es tarde, te llamo.', 'Aunque es tarde, te llamaré.',
      'Aunque sea tarde, te voy a llamar.', 'Aunque sea tarde, voy a llamarte.', 'Aunque sea tarde, te llamo.',
      'Te voy a llamar aunque es tarde.', 'Te voy a llamar aunque sea tarde.',
    ], 'Fait réel → aunque es tarde (aunque sea est aussi possible).', { kc: CONTRAST, d: 0 })
    .answer('¿Prefieres vivir en una ciudad o en el campo? ¿Por qué?', 'Prefiero vivir en la ciudad porque hay más cosas que hacer, aunque a veces hay demasiado ruido.',
      'Justifie (porque, como, por eso) et nuance (aunque, pero, sin embargo).', {
        kc: [CAUSE, CONTRAST], keywords: [['porque', 'como', 'ya que', 'así que', 'por eso'], ['aunque', 'pero', 'sin embargo', 'mientras que', 'además']], minWords: 12, d: 0,
      })
    .build(),
};

export const conectores2: Lesson = {
  id: 'es-b1-conectores-2',
  cefr: 'B1',
  unitId: 'es-b1-conectores',
  title: 'Rapporter des paroles',
  subtitle: 'Dice que…, pregunta si…, dice que vengas',
  kcIds: [REPORT],
  estMinutes: 11,
  explanation: [
    {
      title: 'Dire et demander',
      body: 'Quand le verbe introducteur est au présent (dice, explica, pregunta), le temps ne change pas, mais les personnes, les pronoms et les possessifs s’adaptent. Question fermée → si ; question ouverte → le mot interrogatif garde son accent.',
      table: [
        ['« Estoy cansada. »', 'Dice que está cansada.'],
        ['« ¿Vienes? »', 'Pregunta si vienes.'],
        ['« ¿Dónde vivís? »', 'Pregunta dónde vivimos.'],
        ['« Mi coche no funciona. »', 'Dice que su coche no funciona.'],
      ],
      examples: [
        { en: 'Luis dice que llega a las ocho.', fr: 'Luis dit qu’il arrive à huit heures.' },
        { en: 'Mi madre pregunta cuándo volvéis.', fr: 'Ma mère demande quand vous rentrez.' },
      ],
      tip: 'À l’oral, on entend souvent « pregunta que si vienes » : c’est courant en Espagne, mais pregunta si vienes suffit.',
    },
    {
      title: 'Rapporter un ordre ou une demande',
      body: 'Un impératif rapporté devient que + subjonctif : « Ven » → Dice que vengas. Même chose avec pedir que.',
      examples: [
        { en: 'El profesor dice que leamos el capítulo tres.', fr: 'Le professeur dit de lire le chapitre trois.' },
        { en: 'Me pide que la ayude con la mudanza.', fr: 'Elle me demande de l’aider pour le déménagement.' },
      ],
      tip: 'Piège : le français dit « il dit de venir » (infinitif) ; l’espagnol, « dice que vengas » (subjonctif). Comparer : Dice que vienes (il dit que tu viens, une information) et Dice que vengas (il te dit de venir, un ordre).',
    },
  ],
  exercises: exercises('es-b1-conectores-2', 'B1', { kc: REPORT })
    .mcq('Laura: «¿Vienes a cenar?» → Laura pregunta ___ vas a cenar.', ['si', 'que', 'qué'], 0, 'Question fermée → pregunta si.', { d: -0.2 })
    .cloze('Mamá: «Recoged la habitación». → Mamá dice que ___ la habitación.', ['recojáis'], 'Ordre rapporté → que + subjonctif : recojáis (recoger → recoja).', { hint: 'recoger, vosotros', d: 0.2 })
    .cloze('Pablo: «Estoy en el bar». → Pablo dice que ___ en el bar.', ['está'], 'Information → indicatif, 3e personne : está.', { d: -0.4 })
    .mcq('Que demande le propriétaire du restaurant ?', ['De réserver avant jeudi et de payer un acompte', 'De venir avant neuf heures', 'De choisir les plats à l’avance'], 0,
      'El dueño dice que reservemos antes del jueves y que paguemos una señal.',
      {
        d: 0,
        passage: 'Mensajes del grupo «Cena de clase»\nMarta: Hola a todos. El restaurante dice que solo tiene mesa para el sábado a las nueve. ¿Os va bien?\nIker: A mí sí. Mi novia pregunta si puede venir también.\nMarta: Claro. El dueño dice que reservemos antes del jueves y que paguemos una señal de diez euros por persona.\nIker: Vale. Mi novia dice que es vegetariana y pregunta si hay platos sin carne.\nMarta: Sí, sí, la carta tiene varios.',
      })
    .type('Rapporte : Ana : « Tengo frío. » → « Ana dice que ___ frío. »', ['tiene'], 'tengo → tiene (3e personne).', { d: -0.4 })
    .type('Luis nous demande : « ¿Dónde vivís? » → « Luis nos pregunta ___. »', ['dónde vivimos'], 'vivís → vivimos (c’est nous qui répondons) ; dónde garde l’accent.', { loose: true, d: 0.1 })
    .order('Il me demande si je veux un café.', 'Me pregunta si quiero un café.', 'Question fermée → si.', { distractors: ['que'], d: -0.2 })
    .tr('Ma mère dit de l’appeler ce soir.', [
      'Mi madre dice que la llame esta noche.', 'Mi madre dice que la llames esta noche.', 'Mi madre dice que la llamemos esta noche.', 'Mi madre dice que la llaméis esta noche.',
    ], 'Ordre rapporté → que + subjonctif (et non « dice de llamarla »).', { d: 0.3 })
    .tr('Le professeur dit que l’examen est facile.', ['El profesor dice que el examen es fácil.', 'La profesora dice que el examen es fácil.', 'El profe dice que el examen es fácil.'],
      'Information → dice que + indicatif.', { d: -0.4 })
    .listen('Te ha llamado Jaime. Dice que el partido es a las seis y que lleves la camiseta azul.', 'Que doit faire la personne à qui l’on parle ?',
      ['Apporter le maillot bleu', 'Appeler Jaime avant six heures', 'Acheter les billets'], 0,
      'dice que lleves = il dit d’apporter (ordre rapporté).', { d: 0 })
    .listen('Mi jefe me pregunta cuándo puedo empezar y si tengo coche.', 'Que veut savoir le chef ?',
      ['Quand la personne peut commencer et si elle a une voiture', 'Combien elle veut gagner', 'Où elle habite'], 0,
      'pregunta cuándo… y si…', { d: -0.2 })
    .dictation('Dicen en la radio que mañana va a nevar en el norte.', 'dicen que + indicatif (information).', { d: -0.2 })
    .repeat('Me pide que le ayude con los deberes.', 'pedir que + subjonctif : ayude.', { d: 0 })
    .say('Elle dit qu’elle ne peut pas venir.', ['Dice que no puede venir.', 'Ella dice que no puede venir.'], 'Information → dice que + indicatif.', { d: -0.4 })
    .answer('¿Qué te dicen normalmente tus padres o tus amigos cuando les pides un consejo?', 'Mis padres dicen que tenga paciencia y mis amigos me dicen que no me preocupe tanto.',
      'dicen que / me dicen que + subjonctif pour un conseil.', { keywords: [['dicen que', 'dice que', 'me dicen', 'me piden', 'me preguntan', 'me dice']], minWords: 12, d: 0.2 })
    .build(),
};
