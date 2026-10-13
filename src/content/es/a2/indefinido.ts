import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const REG = 'es.a2.tense.indefinido_regular';
const VS = 'es.a2.tense.perfecto_vs_indefinido';
const IRR = 'es.a2.tense.indefinido_irregular';

export const indefinido1: Lesson = {
  id: 'es-a2-indefinido-1',
  cefr: 'A2',
  unitId: 'es-a2-indefinido',
  title: 'Pretérito indefinido : verbes réguliers',
  subtitle: 'Ayer hablé, comí y salí · perfecto ou indefinido ?',
  kcIds: [REG, VS],
  estMinutes: 10,
  explanation: [
    {
      title: 'Les formes régulières',
      body: 'L’indefinido raconte une action terminée dans le passé. Les verbes en -er et en -ir ont les mêmes terminaisons.',
      table: [
        ['', 'hablar · comer · vivir'],
        ['yo', 'hablé · comí · viví'],
        ['tú', 'hablaste · comiste · viviste'],
        ['él, ella, usted', 'habló · comió · vivió'],
        ['nosotros', 'hablamos · comimos · vivimos'],
        ['vosotros', 'hablasteis · comisteis · vivisteis'],
        ['ellos, ellas, ustedes', 'hablaron · comieron · vivieron'],
      ],
      examples: [
        { en: 'Ayer cené con mis primos.', fr: 'Hier, j’ai dîné avec mes cousins.' },
        { en: 'Mis abuelos vivieron muchos años en Francia.', fr: 'Mes grands-parents ont vécu de nombreuses années en France.' },
      ],
      tip: 'L’accent change tout : hablo (je parle) / habló (il a parlé). À la 1re personne, l’orthographe s’adapte : llegar → llegué, buscar → busqué, empezar → empecé.',
    },
    {
      title: 'Perfecto ou indefinido ?',
      body: 'En Espagne, le choix dépend de la période : encore en cours → perfecto ; terminée → indefinido.',
      table: [
        ['perfecto (période en cours)', 'hoy, esta mañana, esta semana, este año, ya, nunca'],
        ['indefinido (période terminée)', 'ayer, anoche, el lunes pasado, la semana pasada, en 2019, hace tres días'],
      ],
      examples: [
        { en: 'Hoy he comido en casa, pero ayer comí en un restaurante.', fr: 'Aujourd’hui j’ai mangé à la maison, mais hier j’ai mangé au restaurant.' },
        { en: 'Llegamos a Madrid hace dos años.', fr: 'Nous sommes arrivés à Madrid il y a deux ans.' },
      ],
      tip: 'Le français dit « j’ai mangé » dans les deux cas. En espagnol, « Hier, j’ai mangé » → Ayer comí (et non « ayer he comido »). hace + durée = il y a.',
    },
  ],
  exercises: exercises('es-a2-indefinido-1', 'A2', { kc: REG, tense: 'indefinido' })
    .mcq('Ayer ___ con mi hermana por teléfono.', ['hablé', 'he hablado', 'hablo'], 0, 'ayer (période terminée) → indefinido : hablé.', { kc: VS, d: -1.3 })
    .mcq('El verano pasado mis amigos ___ un piso en la costa.', ['alquilaron', 'han alquilado', 'alquilan'], 0, 'el verano pasado → indefinido : alquilaron.', { kc: VS, d: -1.0 })
    .cloze('Anoche (nosotros) ___ en un restaurante japonés.', ['cenamos'], 'nosotros : cenamos (même forme qu’au présent, le contexte tranche).', { hint: 'cenar', d: -1.3 })
    .cloze('Mi abuelo ___ en 1950.', ['nació'], 'nacer → nació (accent sur le o).', { hint: 'nacer', d: -1.2 })
    .type('Conjugue « comprar » à l’indefinido avec « yo ».', ['compré'], '-ar, yo → -é : compré.', { d: -1.4 })
    .type('Conjugue « llegar » à l’indefinido avec « yo ».', ['llegué'], 'llegar → llegué : on ajoute u pour garder le son [g].', { d: -0.9 })
    .order('Ils ont vécu trois ans à Barcelone.', 'Vivieron tres años en Barcelona.', 'Durée délimitée et terminée → indefinido : vivieron.', { kc: [REG, VS], distractors: ['han'], d: -1.0 })
    .tr('Hier, j’ai travaillé jusqu’à huit heures.', [
      'Ayer trabajé hasta las ocho.', 'Ayer yo trabajé hasta las ocho.', 'Trabajé hasta las ocho ayer.', 'Ayer estuve trabajando hasta las ocho.',
    ], 'ayer → indefinido : trabajé.', { kc: VS, d: -1.0 })
    .tr('Elle a acheté une voiture il y a deux mois.', [
      'Compró un coche hace dos meses.', 'Ella compró un coche hace dos meses.', 'Se compró un coche hace dos meses.',
      'Ella se compró un coche hace dos meses.', 'Hace dos meses compró un coche.', 'Hace dos meses se compró un coche.',
    ], 'hace dos meses → indefinido : compró.', { kc: [REG, VS], d: -0.9 })
    .listen('El sábado pasado salimos con unos amigos, cenamos en el centro y volvimos a casa a las tres.', 'À quelle heure sont-ils rentrés ?', ['À trois heures', 'À une heure', 'À onze heures'], 0,
      'volvimos a casa a las tres = nous sommes rentrés à trois heures.', { d: -1.1 })
    .listen('Hoy no he visto a Luis, pero ayer comí con él y me habló de su nuevo trabajo.', 'Quand a-t-il déjeuné avec Luis ?', ['Hier', 'Aujourd’hui', 'La semaine dernière'], 0,
      'Hoy no he visto (perfecto) / ayer comí (indefinido).', { kc: VS, d: -0.9 })
    .dictation('La semana pasada visité a mis abuelos y comí con ellos.', 'la semana pasada → indefinido : visité, comí.', { kc: [REG, VS], d: -1.0 })
    .repeat('Ayer llegué tarde y no cené.', 'llegué, cené : accent sur la dernière syllabe.', { d: -1.2 })
    .say('Je suis {né|née} en 1990.', ['Nací en 1990.', 'Yo nací en 1990.', 'Nací en mil novecientos noventa.', 'Yo nací en mil novecientos noventa.'],
      'Date passée → indefinido : nací.', { kc: [REG, VS], d: -1.2 })
    .answer('¿Qué tal el fin de semana pasado? ¿Dónde cenaste y con quién hablaste?', 'El fin de semana pasado cené en casa de unos amigos. Hablé mucho con mi amiga Laura y volví a casa tarde.',
      'el fin de semana pasado → indefinido : cené, hablé, volví.',
      { kc: [REG, VS], keywords: [['cené', 'comí', 'hablé', 'visité', 'salí', 'volví', 'trabajé', 'compré', 'cenamos', 'salimos']], minWords: 12, d: -0.8 })
    .build(),
};

export const indefinido2: Lesson = {
  id: 'es-a2-indefinido-2',
  cefr: 'A2',
  unitId: 'es-a2-indefinido',
  title: 'Indefinido : verbes irréguliers',
  subtitle: 'Fui, hice, tuve, estuve, dije, vine',
  kcIds: [IRR, VS],
  estMinutes: 10,
  explanation: [
    {
      title: 'Les irréguliers les plus fréquents',
      body: 'ser et ir ont les mêmes formes. Beaucoup de verbes ont un radical irrégulier et des terminaisons sans accent : -e, -iste, -o, -imos, -isteis, -ieron.',
      table: [
        ['ser / ir', 'fui, fuiste, fue, fuimos, fuisteis, fueron'],
        ['hacer', 'hice, hiciste, hizo, hicimos, hicisteis, hicieron'],
        ['tener → tuv-', 'tuve, tuviste, tuvo…'],
        ['estar → estuv-', 'estuve, estuviste, estuvo…'],
        ['poder → pud- · poner → pus-', 'pude, pudo · puse, puso'],
        ['venir → vin- · querer → quis-', 'vine, vino · quise, quiso'],
        ['decir → dij- · traer → traj-', 'dije, dijeron · traje, trajeron'],
        ['dar', 'di, diste, dio, dimos, disteis, dieron'],
      ],
      examples: [
        { en: 'El año pasado fuimos a Lanzarote.', fr: 'L’année dernière, nous sommes allés à Lanzarote.' },
        { en: '¿Qué hiciste el domingo?', fr: 'Qu’est-ce que tu as fait dimanche ?' },
      ],
      tip: 'Ces formes ne prennent pas d’accent : tuve, hizo, vino (et non « tuvé », « hizó »). Après j, la 3e personne du pluriel est en -eron : dijeron, trajeron (pas « dijieron »).',
    },
    {
      title: 'Changement de voyelle à la 3e personne',
      body: 'Les verbes en -ir qui changent au présent (pedir, dormir, sentir…) changent aussi à la 3e personne de l’indefinido : e → i, o → u. leer, oír, construir prennent un y.',
      table: [
        ['pedir', 'pedí, pediste, pidió, pedimos, pedisteis, pidieron'],
        ['dormir', 'dormí, dormiste, durmió, dormimos, dormisteis, durmieron'],
        ['leer', 'leí, leíste, leyó, leímos, leísteis, leyeron'],
      ],
      examples: [
        { en: 'Mi padre durmió toda la tarde.', fr: 'Mon père a dormi tout l’après-midi.' },
        { en: 'Pidieron una botella de agua.', fr: 'Ils ont commandé une bouteille d’eau.' },
      ],
      tip: 'fue peut venir de ser ou de ir : Fue a Roma (il est allé), Fue un viaje precioso (ce fut un voyage magnifique). Le contexte tranche.',
    },
  ],
  exercises: exercises('es-a2-indefinido-2', 'A2', { kc: IRR, tense: 'indefinido' })
    .mcq('El año pasado (nosotros) ___ de vacaciones a Asturias.', ['fuimos', 'fueron', 'vamos'], 0, 'ir, nosotros → fuimos.', { d: -1.3 })
    .mcq('¿Qué ___ (tú) ayer por la tarde?', ['hiciste', 'hacías', 'haciste'], 0, 'hacer → hiciste (radical hic-).', { d: -1.1 })
    .cloze('Mis primos ___ a mi casa el domingo pasado.', ['vinieron'], 'venir → vin- : vinieron.', { hint: 'venir', d: -0.9 })
    .mcq('Pourquoi sont-ils rentrés plus tôt que prévu ?', ['Parce qu’il a plu toute la journée', 'Parce que Marta était malade', 'Parce que le train était complet'], 0,
      'El domingo llovió todo el día, así que volvimos a Madrid antes de lo previsto.',
      {
        kc: [IRR, REG], d: -0.8,
        passage: 'Un fin de semana en Salamanca\nEl viernes pasado Marta y yo fuimos a Salamanca en tren. Llegamos por la tarde y dimos un paseo por la Plaza Mayor. El sábado hicimos una visita guiada a la universidad, una de las más antiguas de Europa. Por la noche cenamos tapas y Marta pidió unas patatas meneadas, un plato típico de la zona. El domingo llovió todo el día, así que volvimos a Madrid antes de lo previsto.',
      })
    .type('Conjugue « tener » à l’indefinido avec « él ».', ['tuvo'], 'tener → tuv- + o : tuvo (sans accent).', { d: -1.1 })
    .type('Conjugue « decir » à l’indefinido avec « ellos ».', ['dijeron'], 'Après j : -eron → dijeron.', { d: -0.8 })
    .order('Hier, j’ai fait les courses au supermarché.', 'Ayer hice la compra en el supermercado.', 'hacer → hice ; hacer la compra = faire les courses.', { distractors: ['hizo'], d: -1.0 })
    .tr('Hier, il est allé à la plage avec ses amis.', [
      'Ayer fue a la playa con sus amigos.', 'Ayer él fue a la playa con sus amigos.', 'Ayer se fue a la playa con sus amigos.',
      'Fue a la playa con sus amigos ayer.', 'Ayer él se fue a la playa con sus amigos.',
    ], 'ir → fue.', { kc: [IRR, VS], d: -1.0 })
    .tr('La semaine dernière, j’ai eu beaucoup de travail.', [
      'La semana pasada tuve mucho trabajo.', 'La semana pasada yo tuve mucho trabajo.', 'Tuve mucho trabajo la semana pasada.',
    ], 'la semana pasada → indefinido : tuve.', { kc: [IRR, VS], d: -0.9 })
    .listen('¿Dónde estuviste ayer? Te llamé tres veces. — Estuve en casa de mi madre y no oí el móvil.', 'Pourquoi n’a-t-il pas répondu ?', ['Il n’a pas entendu son portable', 'Il n’avait plus de batterie', 'Il dormait'], 0,
      'no oí el móvil = je n’ai pas entendu le portable.', { d: -0.9 })
    .listen('Mi hermano pidió una paella, pero el camarero le trajo una ensalada.', 'Qu’est-ce que le frère a reçu ?', ['Une salade', 'Une paella', 'Rien du tout'], 0,
      'pidió (pedir) une paella, mais le serveur lui trajo (traer) une salade.', { d: -0.8 })
    .dictation('El domingo pasado hizo muy buen tiempo y fuimos a la sierra.', 'hizo (hacer), fuimos (ir).', { d: -0.9 })
    .repeat('Fue un viaje precioso: vimos el mar y comimos muy bien.', 'fue (ser), vimos (ver, sans accent), comimos.', { d: -1.1 })
    .say('Hier, ils sont venus en voiture.', ['Ayer vinieron en coche.', 'Ayer ellos vinieron en coche.', 'Ayer ellas vinieron en coche.', 'Vinieron en coche ayer.'],
      'venir → vinieron ; voiture = coche en Espagne.', { d: -1.0 })
    .answer('¿Qué hiciste el verano pasado? ¿Adónde fuiste?', 'El verano pasado fui a Portugal con mi familia. Estuvimos dos semanas en Lisboa e hicimos muchas excursiones.',
      'fui, estuvimos, hicimos : irréguliers à l’indefinido.', { keywords: [['fui', 'fuimos', 'estuve', 'estuvimos', 'hice', 'hicimos', 'tuve', 'tuvimos']], minWords: 12, d: -0.7 })
    .build(),
};
