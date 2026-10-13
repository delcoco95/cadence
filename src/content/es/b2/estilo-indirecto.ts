import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const STMT = 'es.b2.grammar.reported_statements';
const DEIX = 'es.b2.grammar.reported_deixis';
const QUEST = 'es.b2.grammar.reported_questions';
const CMD = 'es.b2.grammar.reported_commands';

const IMPF_FORMS = [
  'fuera', 'fuese', 'leyera', 'leyese', 'hiciera', 'hiciese', 'estudiara', 'estudiase', 'ayudara', 'ayudase', 'llegara', 'llegase',
  'comiera', 'comiese', 'tuviera', 'tuviese', 'dijera', 'dijese', 'respetara', 'respetase', 'ordenara', 'ordenase', 'volviera', 'volviese',
];

export const estiloIndirecto1: Lesson = {
  id: 'es-b2-estilo-indirecto-1',
  cefr: 'B2',
  unitId: 'es-b2-estilo-indirecto',
  title: 'Rapporter des paroles au passé',
  subtitle: 'Dijo que estaba cansada · al día siguiente',
  kcIds: [STMT, DEIX],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le changement des temps',
      body: 'Quand le verbe introducteur est au passé (dijo, contó, explicó, aseguró), les temps reculent comme en français.',
      table: [
        ['«Estoy cansada.»', 'Dijo que estaba cansada.'],
        ['«He terminado.» / «Terminé.»', 'Dijo que había terminado.'],
        ['«Iré.» / «Voy a ir.»', 'Dijo que iría. / Dijo que iba a ir.'],
        ['«Estaba enfermo.» / «Iría.»', 'pas de changement : estaba, iría'],
      ],
      examples: [
        { en: 'Me contó que había dejado su trabajo.', fr: 'Il m’a raconté qu’il avait quitté son travail.' },
        { en: 'Nos aseguraron que todo saldría bien.', fr: 'Ils nous ont assuré que tout se passerait bien.' },
      ],
      tip: 'À l’oral, on garde parfois le temps d’origine si l’information est toujours vraie (Me dijo que viene mañana), comme en français familier. À l’écrit et au niveau B2, on applique la concordance.',
    },
    {
      title: 'Les repères de temps et de lieu',
      body: 'Les mots qui renvoient au moment ou au lieu de la parole changent aussi.',
      table: [
        ['hoy · ayer · mañana', 'ese día / aquel día · el día anterior · al día siguiente'],
        ['aquí · este', 'allí / ahí · ese / aquel'],
        ['venir · traer', 'ir · llevar (selon le lieu de celui qui rapporte)'],
      ],
      examples: [
        { en: 'Dijo que vendría al día siguiente.', fr: 'Elle a dit qu’elle viendrait le lendemain.' },
        { en: 'Explicó que vivía allí desde 2010.', fr: 'Il a expliqué qu’il vivait là-bas depuis 2010.' },
      ],
      tip: 'Variez les verbes introducteurs : contar (raconter), explicar, comentar, asegurar, reconocer (admettre), añadir (ajouter), responder.',
    },
  ],
  exercises: exercises('es-b2-estilo-indirecto-1', 'B2', { kc: STMT, tense: 'estilo indirecto' })
    .mcq('¿Qué dijo la alcaldesa sobre los impuestos?', ['Que no tenía intención de subirlos', 'Que los subiría el mes siguiente', 'Que bajarían para los jóvenes'], 0,
      'respondió que no tenía intención de hacerlo. Repérer la concordance : había aprobado, serían, estaba, acabarían.', {
        kc: [STMT, QUEST], d: 0.8,
        passage: 'Entrevista a la alcaldesa\nEn la entrevista de ayer, la alcaldesa explicó que el ayuntamiento había aprobado un nuevo plan de transporte y que, a partir del mes siguiente, los autobuses serían gratuitos para los menores de dieciocho años. También reconoció que el carril bici todavía no estaba terminado, pero aseguró que las obras acabarían antes del verano. Cuando un periodista le preguntó si subirían los impuestos, respondió que no tenía intención de hacerlo.',
      })
    .mcq('«Te llamaré mañana», me dijo. → Me dijo que me ___ al día siguiente.', ['llamaría', 'llamará', 'llamara'], 0, 'Futur → conditionnel : llamaría.', { d: 0.6 })
    .cloze('«Hemos vendido la casa», nos contaron. → Nos contaron que ___ la casa.', ['habían vendido'], 'Perfecto → plus-que-parfait : habían vendido.', { d: 0.6 })
    .cloze('«Vivo aquí desde 2010», explicó. → Explicó que vivía ___ desde 2010.', ['allí', 'ahí'], 'aquí → allí (ou ahí).', { kc: DEIX, d: 0.6 })
    .type('Rapporte : « Voy a cambiar de trabajo », me dijo Luis. → Luis me dijo que ___ a cambiar de trabajo.', ['iba'], 'voy a → iba a.', { d: 0.5 })
    .type('Rapporte : « Hoy no puedo salir », dijo. → Dijo que ___ día no podía salir.', ['ese', 'aquel'], 'hoy → ese día / aquel día.', { kc: DEIX, d: 0.7 })
    .order('Elle a dit qu’elle viendrait le lendemain.', 'Dijo que vendría al día siguiente.', 'Futur → conditionnel (vendría) ; mañana → al día siguiente.', { kc: [STMT, DEIX], distractors: ['vendrá'], d: 0.6 })
    .tr('Il m’a dit qu’il avait perdu son portable.', [
      'Me dijo que había perdido el móvil.', 'Me dijo que había perdido su móvil.', 'Él me dijo que había perdido el móvil.', 'Él me dijo que había perdido su móvil.',
      'Me dijo que había perdido el teléfono.', 'Me dijo que había perdido su teléfono.', 'Me dijo que se le había perdido el móvil.',
    ], 'Plus-que-parfait comme en français : había perdido. Portable → el móvil.', { d: 0.6 })
    .tr('Ils nous ont assuré que tout irait bien.', [
      'Nos aseguraron que todo iría bien.', 'Ellos nos aseguraron que todo iría bien.', 'Nos aseguraron que todo saldría bien.', 'Ellos nos aseguraron que todo saldría bien.',
      'Nos han asegurado que todo iría bien.', 'Nos han asegurado que todo saldría bien.', 'Ellas nos aseguraron que todo iría bien.',
    ], 'Futur dans le passé → conditionnel : iría / saldría.', { d: 0.7 })
    .listen('Ayer hablé con Marta. Me contó que había dejado su trabajo y que el mes siguiente se iría a vivir a Lisboa con su novio.', '¿Qué piensa hacer Marta?', [
      'Irse a vivir a Lisboa', 'Buscar trabajo en Madrid', 'Casarse con su novio',
    ], 0, 'se iría a vivir a Lisboa : conditionnel = futur dans le passé.', { d: 0.7 })
    .listen('El técnico me aseguró que vendría esa misma tarde, pero al final no apareció hasta el día siguiente.', '¿Cuándo llegó el técnico?', [
      'Al día siguiente', 'Esa misma tarde', 'No llegó nunca',
    ], 0, 'no apareció hasta el día siguiente = il n’est venu que le lendemain.', { kc: DEIX, d: 0.7 })
    .dictation('Nos explicó que no había podido venir porque estaba enfermo.', 'había podido (plus-que-parfait), estaba (imparfait).', { d: 0.7 })
    .repeat('Me dijo que me esperaría en la estación.', 'esperaría : futur dans le passé.', { d: 0.5 })
    .say('Elle m’a dit qu’elle était fatiguée.', ['Me dijo que estaba cansada.', 'Ella me dijo que estaba cansada.', 'Me dijo que estaba agotada.'],
      'Présent → imparfait : estaba cansada (estar pour un état).', { d: 0.4 })
    .answer('Piensa en una conversación reciente con un amigo o una amiga. ¿Qué te contó?', 'Mi amigo Jorge me contó que había encontrado un piso nuevo y que se mudaría el mes siguiente con su pareja.',
      'contó que + plus-que-parfait / conditionnel.', {
        keywords: [['dijo', 'contó', 'explicó', 'comentó', 'aseguró'], ['había', 'estaba', 'era', 'iba', 'tenía', 'sería', 'haría', 'iría', 'podía', 'quería', 'mudaría']], minWords: 12, d: 0.8,
      })
    .build(),
};

export const estiloIndirecto2: Lesson = {
  id: 'es-b2-estilo-indirecto-2',
  cefr: 'B2',
  unitId: 'es-b2-estilo-indirecto',
  title: 'Rapporter des questions et des ordres',
  subtitle: 'Me preguntó si tenía hambre · me dijo que viniera',
  kcIds: [QUEST, CMD],
  estMinutes: 12,
  explanation: [
    {
      title: 'Les questions indirectes',
      body: 'Question fermée → si. Question ouverte → le mot interrogatif, qui garde son accent. Les temps reculent comme pour les affirmations.',
      table: [
        ['«¿Tienes hambre?»', 'Me preguntó si tenía hambre.'],
        ['«¿Dónde vives?»', 'Me preguntó dónde vivía.'],
        ['«¿Cuándo vais a volver?»', 'Nos preguntó cuándo íbamos a volver.'],
      ],
      examples: [
        { en: 'Le pregunté qué pensaba hacer.', fr: 'Je lui ai demandé ce qu’il comptait faire.' },
        { en: 'Quería saber cuánto costaba.', fr: 'Il voulait savoir combien ça coûtait.' },
      ],
      tip: 'Pas d’inversion et accent conservé : preguntó dónde vivía. À l’oral, on entend souvent « me preguntó que si… » ; à l’écrit, si seul. « ce que » dans une question → qué : No sé qué quiere.',
    },
    {
      title: 'Les ordres et les demandes',
      body: 'Un impératif rapporté devient un subjonctif : présent si le verbe introducteur est au présent, imparfait s’il est au passé.',
      table: [
        ['«Ven.»', 'Dice que vengas. · Me dijo que viniera.'],
        ['«No toquéis nada.»', 'Nos dijo que no tocáramos nada.'],
        ['pedir, aconsejar, recomendar, rogar', 'Me pidió que la ayudara.'],
      ],
      examples: [
        { en: 'El médico me aconsejó que hiciera deporte.', fr: 'Le médecin m’a conseillé de faire du sport.' },
        { en: 'Nos pidieron que no hiciéramos ruido.', fr: 'Ils nous ont demandé de ne pas faire de bruit.' },
      ],
      tip: '« Il m’a dit de venir » → Me dijo que viniera (pas « de venir »). Attention au double sens de decir : dijo que estaba en casa (information, indicatif) / dijo que estuviera en casa (ordre, subjonctif).',
    },
  ],
  exercises: exercises('es-b2-estilo-indirecto-2', 'B2', { kc: QUEST, tense: 'estilo indirecto' })
    .mcq('«¿Dónde vives?», me preguntó. → Me preguntó dónde ___.', ['vivía', 'vivo', 'viviera'], 0, 'Présent → imparfait : vivía ; dónde garde son accent.', { d: 0.5 })
    .mcq('«Cierra la ventana», me dijo mi madre. → Mi madre me dijo que ___ la ventana.', ['cerrara', 'cerraba', 'cierro'], 0, 'Ordre rapporté au passé → subjonctif imparfait : cerrara.', { kc: CMD, d: 0.6 })
    .cloze('«¿Has visto a Pedro?», le preguntó. → Le preguntó ___ había visto a Pedro.', ['si'], 'Question fermée → si.', { d: 0.5 })
    .cloze('Me dijo que no ___ tarde, que la cena era a las nueve.', ['llegara', 'llegase'], 'Ordre (no llegues tarde) rapporté au passé → no llegara.', { kc: CMD, hint: 'llegar', d: 0.7 })
    .type('Rapporte : « ¿Cuándo vais a volver? », nos preguntó. → Nos preguntó cuándo ___ a volver.', ['íbamos'], 'vais a → íbamos a (on rapporte avec nosotros).', { d: 0.7 })
    .type('Rapporte : « Traedme el informe », nos pidió la jefa. → La jefa nos pidió que le ___ el informe.', ['lleváramos', 'llevásemos', 'trajéramos', 'trajésemos'],
      'Impératif → subjonctif imparfait. traer devient souvent llevar quand on n’est plus à l’endroit de la jefa.', { kc: CMD, d: 1.0 })
    .order('Le médecin m’a conseillé de faire du sport.', 'El médico me aconsejó que hiciera deporte.', 'aconsejar que + subjonctif imparfait.', { kc: CMD, distractors: ['hacía'], d: 0.7 })
    .tr('Elle m’a demandé si j’avais faim.', ['Me preguntó si tenía hambre.', 'Ella me preguntó si tenía hambre.'], 'Question fermée → si ; avoir faim → tener hambre.', { d: 0.5 })
    .tr('Il nous a dit de l’attendre devant le cinéma.', [
      'Nos dijo que lo esperáramos delante del cine.', 'Nos dijo que lo esperásemos delante del cine.', 'Nos dijo que le esperáramos delante del cine.',
      'Nos dijo que le esperásemos delante del cine.', 'Nos dijo que la esperáramos delante del cine.', 'Nos dijo que la esperásemos delante del cine.',
      'Nos dijo que lo esperáramos en la puerta del cine.', 'Él nos dijo que lo esperáramos delante del cine.',
    ], '« dire de faire » → decir que + subjonctif imparfait : esperáramos.', { kc: CMD, d: 0.9 })
    .listen('La recepcionista nos preguntó si queríamos una habitación con vistas al mar y nos recomendó que reserváramos la cena con antelación.', '¿Qué les recomendó la recepcionista?', [
      'Reservar la cena con antelación', 'Cambiar de habitación', 'Ir a la playa por la mañana',
    ], 0, 'preguntó si queríamos (question) ; recomendó que reserváramos (conseil → subjonctif).', { kc: [QUEST, CMD], d: 0.8 })
    .listen('Mi padre siempre me decía que estudiara algo útil, pero yo le contestaba que prefería ser músico.', '¿Qué quería ser el hijo?', ['Músico', 'Médico', 'Abogado'], 0,
      'me decía que estudiara (conseil → subjonctif) ; le contestaba que prefería (information → indicatif).', { kc: CMD, d: 0.7 })
    .dictation('Le pregunté qué pensaba hacer después de la carrera.', 'qué garde son accent ; pensaba : imparfait.', { d: 0.7 })
    .repeat('Nos pidieron que no hiciéramos ruido.', 'pedir que + subjonctif imparfait : hiciéramos.', { kc: CMD, d: 0.6 })
    .say('Ils m’ont demandé où j’habitais.', ['Me preguntaron dónde vivía.', 'Ellos me preguntaron dónde vivía.', 'Ellas me preguntaron dónde vivía.'],
      'preguntar dónde + imparfait.', { d: 0.5 })
    .answer('¿Qué te pedían tus padres o tus profesores cuando eras niño o niña?', 'Mis padres me pedían que fuera educado y mis profesores me decían que leyera mucho y que hiciera los deberes.',
      'pedían que / decían que + subjonctif imparfait.', { kc: CMD, keywords: [IMPF_FORMS], minWords: 12, d: 0.9 })
    .build(),
};
