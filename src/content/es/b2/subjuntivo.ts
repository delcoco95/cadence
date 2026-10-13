import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const IMPF = 'es.b2.grammar.imperfect_subjunctive';
const CONC = 'es.b2.grammar.sequence_of_tenses';
const PERF = 'es.b2.grammar.perfect_subjunctive';
const OJALA = 'es.b2.grammar.ojala_como_si';

const IMPF_FORMS = [
  'estudiara', 'estudiase', 'volviera', 'volviese', 'hiciera', 'hiciese', 'fuera', 'fuese', 'trabajara', 'trabajase',
  'ayudara', 'ayudase', 'tuviera', 'tuviese', 'sacara', 'sacase', 'aprendiera', 'aprendiese', 'llegara', 'llegase',
  'leyera', 'leyese', 'preguntara', 'preguntase', 'pidiera', 'pidiese',
];

export const subjuntivo1: Lesson = {
  id: 'es-b2-subjuntivo-1',
  cefr: 'B2',
  unitId: 'es-b2-subjuntivo',
  title: 'Subjonctif imparfait et concordance',
  subtitle: 'Quería que vinieras · me gustaría que hablarais',
  kcIds: [IMPF, CONC],
  estMinutes: 12,
  explanation: [
    {
      title: 'Former le subjonctif imparfait',
      body: 'On part de la 3e personne du pluriel de l’indefinido, on enlève -ron et on ajoute -ra ou -se. Les deux séries sont correctes et interchangeables ; -ra est la plus fréquente à l’oral.',
      table: [
        ['indefinido (ellos)', 'subjonctif imparfait'],
        ['hablaron', 'hablara / hablase, hablaras, hablara, habláramos, hablarais, hablaran'],
        ['tuvieron', 'tuviera / tuviese, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran'],
        ['fueron (ser, ir)', 'fuera / fuese, fueras, fuera, fuéramos, fuerais, fueran'],
        ['dijeron · pidieron · leyeron', 'dijera · pidiera · leyera'],
      ],
      examples: [
        { en: 'Si tuviera tiempo, aprendería a tocar el piano.', fr: 'Si j’avais le temps, j’apprendrais à jouer du piano.' },
        { en: 'Nos pidió que fuéramos puntuales.', fr: 'Il nous a demandé d’être ponctuels.' },
      ],
      tip: 'Tous les irréguliers de l’indefinido se retrouvent : hicieron → hiciera, pudieron → pudiera. Accent écrit à la 1re personne du pluriel : habláramos, tuviésemos.',
    },
    {
      title: 'La concordance des temps',
      body: 'Quand le verbe principal est au passé (imparfait, indefinido, plus-que-parfait) ou au conditionnel, le subjonctif de la subordonnée passe à l’imparfait.',
      table: [
        ['présent, futur, impératif', 'Quiero que vengas.'],
        ['passé', 'Quería que vinieras. · Me pidió que viniera.'],
        ['conditionnel', 'Me gustaría que vinieras.'],
      ],
      examples: [
        { en: 'Mis padres no querían que saliera por la noche.', fr: 'Mes parents ne voulaient pas que je sorte le soir.' },
        { en: 'Me gustaría que hablarais más despacio.', fr: 'J’aimerais que vous parliez plus lentement.' },
      ],
      tip: 'Le français oral a abandonné l’imparfait du subjonctif (« qu’il vînt ») et garde le présent : « je voulais que tu viennes ». L’espagnol, lui, applique la concordance : quería que vinieras, jamais « quería que vengas ». Et « demander de faire » se dit pedir que + subjonctif quand les sujets diffèrent.',
    },
  ],
  exercises: exercises('es-b2-subjuntivo-1', 'B2', { kc: IMPF, tense: 'subjuntivo' })
    .mcq('Mis padres querían que (yo) ___ Medicina.', ['estudiara', 'estudie', 'estudiaba'], 0, 'querían (passé) → subjonctif imparfait : estudiara.', { kc: CONC, d: 0.5 })
    .mcq('Me gustaría que ___ (vosotros) a la cena del sábado.', ['vinierais', 'vengáis', 'veníais'], 0, 'me gustaría (conditionnel) → subjonctif imparfait : vinierais (venir → vinieron → viniera).', { kc: CONC, d: 0.6 })
    .cloze('El profesor nos pidió que ___ el móvil durante el examen.', ['apagáramos', 'apagásemos'], 'pidió (passé) → subjonctif imparfait, nosotros : apagáramos ou apagásemos (accent écrit).', { kc: CONC, hint: 'apagar, nosotros', d: 0.7 })
    .cloze('Si ___ más tiempo, aprendería a tocar la guitarra.', ['tuviera', 'tuviese'], 'tener → tuvieron → tuviera / tuviese.', { hint: 'tener, yo', d: 0.5 })
    .type('Conjugue « hacer » au subjonctif imparfait avec « ellos » (forme en -ra).', ['hicieran'], 'hicieron → hicieran.', { d: 0.6 })
    .type('Conjugue « decir » au subjonctif imparfait avec « nosotros » (forme en -ra).', ['dijéramos'], 'dijeron → dijéramos, avec accent écrit.', { d: 0.9 })
    .order('Je voulais que tu me dises la vérité.', 'Quería que me dijeras la verdad.', 'quería (passé) → me dijeras.', { kc: CONC, distractors: ['digas'], d: 0.7 })
    .tr('Elle nous a demandé de venir plus tôt.', [
      'Nos pidió que viniéramos antes.', 'Nos pidió que viniésemos antes.', 'Ella nos pidió que viniéramos antes.', 'Ella nos pidió que viniésemos antes.',
      'Nos pidió que viniéramos más temprano.', 'Nos pidió que viniésemos más temprano.', 'Nos pidió que llegáramos antes.', 'Nos pidió que llegásemos antes.',
    ], '« demander de + infinitif » → pedir que + subjonctif ; pidió (passé) → viniéramos.', { kc: CONC, d: 0.8 })
    .tr('J’aimerais que vous parliez plus lentement.', [
      'Me gustaría que hablarais más despacio.', 'Me gustaría que hablaseis más despacio.',
      'Me gustaría que hablara más despacio.', 'Me gustaría que hablase más despacio.', 'Me gustaría que usted hablara más despacio.',
      'Me gustaría que hablaran más despacio.', 'Me gustaría que hablasen más despacio.', 'Me gustaría que ustedes hablaran más despacio.',
    ], 'me gustaría + subjonctif imparfait : hablarais (vosotros), hablara (usted), hablaran (ustedes).', { kc: CONC, d: 0.7 })
    .listen('Cuando era pequeño, mi madre no dejaba que viera la tele antes de terminar los deberes.', '¿Qué no le permitía su madre?', [
      'Ver la tele antes de terminar los deberes', 'Salir a jugar después de cenar', 'Hacer los deberes delante de la tele',
    ], 0, 'no dejaba que viera : imparfait → subjonctif imparfait.', { kc: CONC, d: 0.5 })
    .listen('Le dije a Pablo que me llamara cuando llegara al hotel, pero todavía no me ha llamado.', '¿Qué le pidió a Pablo?', [
      'Que llamara al llegar al hotel', 'Que reservara el hotel', 'Que no llamara tan tarde',
    ], 0, 'le dije que me llamara cuando llegara : ordre rapporté au passé → subjonctif imparfait.', { kc: CONC, d: 0.7 })
    .dictation('Nos recomendaron que visitáramos el museo por la mañana.', 'recomendaron (passé) → visitáramos.', { kc: CONC, d: 0.8 })
    .repeat('Si pudiera, viviría cerca del mar.', 'pudiera : poder → pudieron → pudiera.', { d: 0.5 })
    .say('Il fallait que tu le saches.', [
      'Era necesario que lo supieras.', 'Era necesario que lo supieses.', 'Hacía falta que lo supieras.', 'Hacía falta que lo supieses.', 'Tenías que saberlo.', 'Lo tenías que saber.',
    ], 'Expression impersonnelle au passé → subjonctif imparfait : supieras (saber → supieron).', { kc: CONC, d: 0.8 })
    .answer('¿Qué querían tus padres que hicieras cuando eras adolescente?', 'Mis padres querían que estudiara mucho y que volviera a casa antes de las once, pero yo prefería salir con mis amigos.',
      'querían que + subjonctif imparfait : estudiara, volviera, hiciera…', { kc: CONC, keywords: [IMPF_FORMS], minWords: 12, d: 0.9 })
    .build(),
};

export const subjuntivo2: Lesson = {
  id: 'es-b2-subjuntivo-2',
  cefr: 'B2',
  unitId: 'es-b2-subjuntivo',
  title: 'Subjonctif passé, ojalá et como si',
  subtitle: 'Me alegro de que hayas venido · como si fuera el jefe',
  kcIds: [PERF, OJALA],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le subjonctif passé (pretérito perfecto de subjuntivo)',
      body: 'haya, hayas, haya, hayamos, hayáis, hayan + participe. Il exprime une action accomplie, vue depuis le présent, dans un contexte qui demande le subjonctif.',
      table: [
        ['sentiment', 'Me alegro de que hayas venido.'],
        ['doute', 'No creo que lo haya terminado.'],
        ['futur accompli', 'Cuando hayas terminado, llámame.'],
      ],
      examples: [
        { en: 'Es una pena que no hayáis podido venir.', fr: 'C’est dommage que vous n’ayez pas pu venir.' },
        { en: 'Espero que hayas dormido bien.', fr: 'J’espère que tu as bien dormi.' },
      ],
      tip: 'Toujours haber, jamais ser : « je suis content que tu sois venu » → me alegro de que hayas venido. Le participe reste invariable.',
    },
    {
      title: 'Ojalá et como si',
      body: 'ojalá + subjonctif présent : souhait possible. + imparfait : souhait improbable ou irréel au présent. + plus-que-parfait (hubiera / hubiese + participe) : regret sur le passé. como si est toujours suivi du subjonctif imparfait ou plus-que-parfait.',
      table: [
        ['Ojalá haga sol mañana.', 'Pourvu qu’il fasse beau demain.'],
        ['Ojalá tuviera más tiempo.', 'Si seulement j’avais plus de temps.'],
        ['Ojalá hubiera estudiado más.', 'Si seulement j’avais travaillé davantage.'],
        ['Habla como si fuera el jefe.', 'Il parle comme s’il était le chef.'],
      ],
      examples: [
        { en: 'Me miraba como si no me conociera.', fr: 'Il me regardait comme s’il ne me connaissait pas.' },
        { en: 'Ojalá me lo hubieras dicho antes.', fr: 'Si seulement tu me l’avais dit plus tôt.' },
      ],
      tip: 'Après « comme si », le français met l’indicatif imparfait ; l’espagnol exige le subjonctif : como si fuera (jamais « como si era »).',
    },
  ],
  exercises: exercises('es-b2-subjuntivo-2', 'B2', { kc: PERF, tense: 'subjuntivo' })
    .mcq('Me alegro mucho de que ___ a la fiesta.', ['hayas venido', 'has venido', 'hayas venida'], 0, 'Sentiment → subjonctif passé : hayas venido (participe invariable).', { d: 0.4 })
    .mcq('Pourquoi Clara écrit-elle qu’elle vit « como si viviera la vida de otra persona » ?', [
      'Parce qu’elle fait un métier choisi par ses parents', 'Parce qu’elle a déménagé à Grenade', 'Parce qu’Inés a pris sa place au bureau',
    ], 0, 'Mis padres querían que yo fuera abogada… en un despacho que no me gusta. Noter como si viviera (subjonctif imparfait) et ojalá hubiera tenido (regret).', {
      kc: [OJALA, CONC], d: 0.8,
      passage: 'Querida Inés:\nMe alegro mucho de que hayas encontrado trabajo en Granada. Cuando me lo contaste, no me sorprendió: siempre te dije que buscaras algo relacionado con el arte. Mis padres, en cambio, querían que yo fuera abogada, y aquí estoy, en un despacho que no me gusta. A veces me siento como si viviera la vida de otra persona. Ojalá hubiera tenido tu valor hace diez años. Espero que nos veamos pronto.\nUn abrazo,\nClara',
    })
    .cloze('No creo que Marta ___ ya el informe; esta mañana ni lo había empezado.', ['haya terminado', 'haya acabado'], 'No creo que + action passée → subjonctif passé : haya terminado.', { hint: 'terminar', d: 0.7 })
    .cloze('Ojalá ___ buen tiempo mañana para la excursión.', ['haga'], 'Souhait possible → ojalá + subjonctif présent : haga.', { kc: OJALA, hint: 'hacer', d: 0.4 })
    .type('Conjugue « ver » au subjonctif passé avec « vosotros ».', ['hayáis visto'], 'hayáis + participe irrégulier visto.', { d: 0.6 })
    .type('Conjugue « saber » au subjonctif plus-que-parfait avec « yo » (forme en -ra).', ['hubiera sabido'], 'hubiera (ou hubiese) + participe : hubiera sabido.', { kc: OJALA, d: 0.9 })
    .order('Il me regardait comme s’il ne me connaissait pas.', 'Me miraba como si no me conociera.', 'como si + subjonctif imparfait : conociera.', { kc: OJALA, distractors: ['conocía'], d: 0.7 })
    .tr('C’est dommage que tu n’aies pas pu venir.', [
      'Es una pena que no hayas podido venir.', 'Qué pena que no hayas podido venir.', 'Es una lástima que no hayas podido venir.', 'Qué lástima que no hayas podido venir.',
      'Lástima que no hayas podido venir.', 'Una pena que no hayas podido venir.', 'Es una pena que no pudieras venir.', 'Qué pena que no pudieras venir.',
      'Es una lástima que no pudieras venir.', 'Qué lástima que no pudieras venir.',
    ], 'es una pena que + subjonctif passé : hayas podido (pudieras si l’on situe le fait dans un passé clos).', { d: 0.7 })
    .tr('Si seulement j’avais su la vérité !', [
      'Ojalá hubiera sabido la verdad.', 'Ojalá hubiese sabido la verdad.', 'Ojalá yo hubiera sabido la verdad.', 'Ojalá yo hubiese sabido la verdad.',
      'Ojalá hubiera conocido la verdad.', 'Ojalá hubiese conocido la verdad.',
    ], 'Regret sur le passé → ojalá + subjonctif plus-que-parfait.', { kc: OJALA, d: 1.0 })
    .listen('Espero que hayáis llegado bien. Llamadme cuando hayáis dejado las maletas en el hotel.', '¿Cuándo tienen que llamar?', [
      'Después de dejar las maletas en el hotel', 'Antes de salir del aeropuerto', 'Mañana por la mañana',
    ], 0, 'cuando hayáis dejado = quand vous aurez déposé : subjonctif passé à valeur de futur antérieur.', { d: 0.6 })
    .listen('Ojalá me hubieras avisado antes: ya he quedado con mis primos y no puedo ir al concierto.', '¿Por qué no puede ir al concierto?', [
      'Porque ya ha quedado con sus primos', 'Porque no tiene entrada', 'Porque está enfermo',
    ], 0, 'Ojalá me hubieras avisado = si seulement tu m’avais prévenu.', { kc: OJALA, d: 0.8 })
    .dictation('Es posible que hayan perdido el tren.', 'Es posible que + subjonctif passé : hayan perdido.', { d: 0.6 })
    .repeat('Ojalá tuviéramos más tiempo libre.', 'Souhait irréel au présent → ojalá + subjonctif imparfait.', { kc: OJALA, d: 0.5 })
    .say('J’espère que tu as bien dormi.', [
      'Espero que hayas dormido bien.', 'Espero que hayas descansado bien.', 'Espero que hayas descansado.', 'Espero que haya dormido bien.', 'Espero que haya descansado bien.',
    ], 'esperar que + subjonctif : hayas dormido (et non « has dormido »).', { d: 0.5 })
    .answer('Un amigo acaba de conseguir algo importante. ¿Qué le dices?', 'Me alegro mucho de que hayas aprobado el examen. Estoy muy orgulloso de que hayas trabajado tanto este año.',
      'me alegro de que / estoy orgulloso de que + subjonctif passé.', { keywords: [['hayas', 'haya', 'hayáis', 'hayan']], minWords: 12, d: 0.8 })
    .build(),
};
