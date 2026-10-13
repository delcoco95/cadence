import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const FORM = 'es.a2.tense.imperfecto_form';
const USE = 'es.a2.tense.imperfecto_usage';
const VS = 'es.a2.tense.imperfecto_vs_indefinido';

export const imperfecto1: Lesson = {
  id: 'es-a2-imperfecto-1',
  cefr: 'A2',
  unitId: 'es-a2-imperfecto',
  title: 'L’imparfait : habitudes et descriptions',
  subtitle: 'De pequeño vivía en un pueblo',
  kcIds: [FORM, USE],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les formes',
      body: 'L’imperfecto est très régulier : -aba pour les verbes en -ar, -ía pour les verbes en -er et -ir. Seuls trois verbes sont irréguliers : ser, ir, ver.',
      table: [
        ['', 'hablar · comer / vivir'],
        ['yo, él, ella, usted', 'hablaba · comía'],
        ['tú', 'hablabas · comías'],
        ['nosotros', 'hablábamos · comíamos'],
        ['vosotros', 'hablabais · comíais'],
        ['ellos, ellas, ustedes', 'hablaban · comían'],
        ['ser · ir · ver', 'era · iba · veía (eras, ibas, veías…)'],
      ],
      examples: [
        { en: 'Mi abuelo trabajaba en el campo.', fr: 'Mon grand-père travaillait aux champs.' },
        { en: 'Cuando éramos niños, íbamos al colegio andando.', fr: 'Quand nous étions enfants, nous allions à l’école à pied.' },
      ],
      tip: 'La 1re et la 3e personne du singulier sont identiques (yo hablaba / él hablaba) : on exprime le sujet si besoin. Accent écrit sur hablábamos, et sur toutes les formes en -ía.',
    },
    {
      title: 'Les emplois',
      body: 'Comme l’imparfait français : habitudes passées et descriptions (personnes, lieux, temps, heure, âge).',
      table: [
        ['habitude', 'antes, de pequeño, siempre, todos los veranos, a menudo'],
        ['description', 'La casa era grande. Hacía calor. Eran las diez.'],
        ['âge', 'Tenía ocho años.'],
        ['il y avait', 'había (de hay)'],
      ],
      examples: [
        { en: 'De pequeña, pasaba los veranos en Galicia.', fr: 'Petite, je passais les étés en Galice.' },
        { en: 'En mi pueblo no había cine.', fr: 'Dans mon village, il n’y avait pas de cinéma.' },
      ],
      tip: '« Quand j’étais petit » → Cuando era pequeño ou De pequeño. « Il y avait » → había, invariable : había dos bares (jamais « habían »).',
    },
  ],
  exercises: exercises('es-a2-imperfecto-1', 'A2', { kc: FORM, tense: 'imperfecto' })
    .mcq('De pequeño, yo ___ en un pueblo de Cuenca.', ['vivía', 'viví', 'vivo'], 0, 'De pequeño (époque, habitude) → imperfecto : vivía.', { kc: USE, d: -1.3 })
    .mcq('Antes mis padres ___ al cine todos los domingos.', ['iban', 'fueron', 'ibamos'], 0, 'Habitude (todos los domingos) → iban.', { kc: [FORM, USE], d: -1.2 })
    .cloze('Cuando ___ niños, jugábamos en la calle.', ['éramos'], 'ser, nosotros → éramos (accent).', { hint: 'ser, nosotros', d: -1.0 })
    .cloze('Mi abuela siempre ___ croquetas los domingos.', ['hacía'], 'Habitude → hacía.', { kc: USE, hint: 'hacer', d: -1.2 })
    .type('Conjugue « estudiar » à l’imperfecto avec « nosotros ».', ['estudiábamos'], '-ar, nosotros → -ábamos, avec accent.', { d: -1.0 })
    .type('Conjugue « ver » à l’imperfecto avec « yo ».', ['veía'], 'ver est irrégulier : veía.', { d: -1.1 })
    .order('Avant, je travaillais dans une banque.', 'Antes trabajaba en un banco.', 'antes (habitude passée) → trabajaba.', { kc: USE, distractors: ['trabajé'], d: -1.2 })
    .tr('Quand j’avais dix ans, j’avais un chien.', [
      'Cuando tenía diez años, tenía un perro.', 'Cuando yo tenía diez años, tenía un perro.', 'A los diez años tenía un perro.', 'Cuando tenía diez años, yo tenía un perro.',
    ], 'Âge et situation passés → tenía.', { kc: USE, d: -0.9 })
    .tr('La maison était grande et il y avait un jardin.', [
      'La casa era grande y había un jardín.', 'La casa era grande y tenía un jardín.', 'La casa era grande y tenía jardín.', 'La casa era grande y había jardín.',
    ], 'Description → era ; il y avait → había.', { kc: USE, d: -0.9 })
    .listen('Cuando era joven, mi padre trabajaba en un barco y viajaba por todo el mundo.', 'Que faisait son père quand il était jeune ?', ['Il travaillait sur un bateau', 'Il était professeur', 'Il travaillait dans un aéroport'], 0,
      'trabajaba en un barco = il travaillait sur un bateau.', { kc: USE, d: -1.1 })
    .listen('En mi colegio no había comedor, así que comíamos en casa todos los días.', 'Où mangeaient-ils le midi ?', ['À la maison', 'À la cantine', 'Au restaurant'], 0,
      'no había comedor = il n’y avait pas de cantine ; comíamos en casa.', { d: -1.0 })
    .dictation('Todos los veranos íbamos a la playa con mis tíos.', 'ir → íbamos (accent).', { d: -1.0 })
    .repeat('De niña, leía mucho y veía poco la tele.', 'leía, veía : l’accent sur le í sépare les voyelles.', { d: -1.2 })
    .say('Avant, nous habitions à Bilbao.', ['Antes vivíamos en Bilbao.', 'Antes nosotros vivíamos en Bilbao.', 'Antes nosotras vivíamos en Bilbao.', 'Vivíamos en Bilbao antes.'],
      'antes → imperfecto : vivíamos.', { kc: [FORM, USE], d: -1.2 })
    .answer('¿Cómo era tu vida cuando eras pequeño o pequeña? ¿Qué hacías los fines de semana?', 'Cuando era pequeño vivía en un pueblo. Los fines de semana jugaba al fútbol con mis amigos y visitaba a mis abuelos.',
      'Habitudes et description → imperfecto : vivía, jugaba, visitaba.', { kc: USE, keywords: [['era', 'vivía', 'jugaba', 'iba', 'tenía', 'hacía', 'visitaba', 'veía']], minWords: 12, d: -0.7 })
    .build(),
};

export const imperfecto2: Lesson = {
  id: 'es-a2-imperfecto-2',
  cefr: 'A2',
  unitId: 'es-a2-imperfecto',
  title: 'Imperfecto ou indefinido ?',
  subtitle: 'Llovía cuando salí de casa',
  kcIds: [VS, USE],
  estMinutes: 10,
  explanation: [
    {
      title: 'Le décor et l’événement',
      body: 'Dans un récit, l’imperfecto pose le décor (circonstances, description, action en cours) et l’indefinido fait avancer l’histoire (événements ponctuels, actions terminées).',
      table: [
        ['imperfecto : décor, action en cours', 'Llovía. Estaba en casa. Leía.'],
        ['indefinido : événement', 'De repente, sonó el teléfono.'],
        ['les deux ensemble', 'Dormía cuando sonó el teléfono.'],
      ],
      examples: [
        { en: 'Hacía sol y la playa estaba llena, así que nos fuimos al río.', fr: 'Il faisait beau et la plage était pleine, alors nous sommes allés à la rivière.' },
        { en: 'Cuando llegué, todos estaban cenando.', fr: 'Quand je suis arrivé, tout le monde était en train de dîner.' },
      ],
      tip: 'C’est la même logique que l’imparfait et le passé composé en français. Mais une durée délimitée, même longue, se met à l’indefinido : Viví tres años en Roma (et non « vivía »).',
    },
    {
      title: 'Les indices',
      body: 'Certains mots orientent le choix, même si c’est toujours le sens qui décide.',
      table: [
        ['plutôt imperfecto', 'siempre, a menudo, todos los días, antes, mientras'],
        ['plutôt indefinido', 'ayer, un día, de repente, en 2010, durante dos años'],
      ],
      examples: [
        { en: 'Mientras yo cocinaba, mi hermano puso la mesa.', fr: 'Pendant que je cuisinais, mon frère a mis la table.' },
        { en: 'Un día, de repente, decidí cambiar de trabajo.', fr: 'Un jour, tout à coup, j’ai décidé de changer de travail.' },
      ],
      tip: 'mientras + imperfecto pour l’action de fond ; de repente annonce presque toujours un indefinido.',
    },
  ],
  exercises: exercises('es-a2-imperfecto-2', 'A2', { kc: VS, tense: 'past' })
    .mcq('Mientras yo ___ la cena, sonó el teléfono.', ['preparaba', 'preparé', 'he preparado'], 0, 'Action en cours (mientras) → preparaba ; l’événement : sonó.', { d: -1.0 })
    .mcq('Ayer ___ a mi profesora en el metro.', ['vi', 'veía', 'he visto'], 0, 'Événement ponctuel, ayer → indefinido : vi.', { d: -1.1 })
    .cloze('Hacía mucho frío, así que (nosotros) ___ en casa.', ['nos quedamos'], 'Décor : hacía frío ; décision ponctuelle : nos quedamos.', { hint: 'quedarse', d: -0.8 })
    .mcq('Qui était à la porte ?', ['Sa voisine', 'Son frère', 'Un voleur'], 0,
      'Abrí despacio… y era mi vecina, que venía a pedirme velas.',
      {
        d: -0.8,
        passage: 'Un susto\nEra una noche de invierno. Llovía mucho y yo estaba solo en casa. Leía un libro en el sofá cuando, de repente, se apagaron todas las luces. Me levanté, busqué una linterna en la cocina y oí un ruido en la puerta. ¡Qué miedo! Abrí despacio… y era mi vecina, que venía a pedirme velas.',
      })
    .type('Écris le verbe au bon temps : « Cuando (yo, ser) pequeño, no me gustaban las verduras. »', ['era'], 'Description d’une époque → era.', { kc: [VS, USE], d: -1.0 })
    .type('Écris le verbe au bon temps : « Ayer (nosotros, ir) al museo del Prado. »', ['fuimos'], 'ayer, événement → indefinido : fuimos.', { d: -1.0 })
    .order('Je dormais quand tu m’as {appelé|appelée}.', 'Dormía cuando me llamaste.', 'Action en cours → dormía ; événement → llamaste.', { distractors: ['dormí'], d: -0.9 })
    .tr('Il faisait beau et nous sommes {allés|allées} à la plage.', [
      'Hacía buen tiempo y fuimos a la playa.', 'Hacía sol y fuimos a la playa.', 'Hacía buen tiempo y nos fuimos a la playa.', 'Hacía sol y nos fuimos a la playa.',
    ], 'Décor (météo) → hacía ; événement → fuimos.', { d: -0.8 })
    .tr('Elle a vécu deux ans à Séville.', [
      'Vivió dos años en Sevilla.', 'Ella vivió dos años en Sevilla.', 'Vivió durante dos años en Sevilla.', 'Ella vivió durante dos años en Sevilla.',
      'Ha vivido dos años en Sevilla.', 'Ella ha vivido dos años en Sevilla.',
    ], 'Durée délimitée → vivió (jamais vivía ici).', { d: -0.7 })
    .listen('Cuando conocí a mi mujer, yo tenía veinte años y estudiaba en Salamanca.', 'Que faisait-il quand il a rencontré sa femme ?', ['Il étudiait à Salamanque', 'Il travaillait à Madrid', 'Il voyageait en Europe'], 0,
      'conocí (événement) ; tenía, estudiaba (situation).', { d: -0.9 })
    .listen('Íbamos por la autopista cuando, de repente, vimos un accidente y paramos para ayudar.', 'Qu’ont-ils fait ?', ['Ils se sont arrêtés pour aider', 'Ils ont appelé la police sans s’arrêter', 'Ils ont fait demi-tour'], 0,
      'paramos para ayudar = nous nous sommes arrêtés pour aider.', { d: -0.8 })
    .dictation('Estaba en la ducha cuando llegaron mis amigos.', 'estaba (en cours) / llegaron (événement).', { d: -0.9 })
    .repeat('Era tarde, hacía frío y no había nadie en la calle.', 'Description d’une scène → imperfecto.', { kc: USE, d: -1.1 })
    .say('Je regardais la télé quand mon frère est arrivé.', [
      'Veía la tele cuando llegó mi hermano.', 'Veía la tele cuando mi hermano llegó.', 'Estaba viendo la tele cuando llegó mi hermano.',
      'Estaba viendo la tele cuando mi hermano llegó.', 'Yo veía la tele cuando llegó mi hermano.', 'Veía la televisión cuando llegó mi hermano.',
      'Estaba viendo la televisión cuando llegó mi hermano.',
    ], 'Action en cours → veía / estaba viendo ; arrivée → llegó.', { d: -0.8 })
    .answer('Cuenta una anécdota: ¿dónde estabas y qué pasó?', 'Un día estaba en el metro y vi a un actor famoso. Era muy simpático y nos hicimos una foto juntos.',
      'Le décor à l’imperfecto (estaba, era), les événements à l’indefinido (vi, nos hicimos).',
      { keywords: [['estaba', 'era', 'había', 'hacía', 'estábamos'], ['vi', 'fui', 'pasó', 'llegó', 'encontré', 'hicimos', 'conocí', 'vimos']], minWords: 12, d: -0.6 })
    .build(),
};
