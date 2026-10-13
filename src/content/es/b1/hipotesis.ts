import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const REAL = 'es.b1.grammar.si_real';
const IMPSUBJ = 'es.b1.grammar.imperfecto_subjuntivo';
const UNREAL = 'es.b1.grammar.si_unreal';

export const hipotesis1: Lesson = {
  id: 'es-b1-hipotesis-1',
  cefr: 'B1',
  unitId: 'es-b1-hipotesis',
  title: 'Si + présent et subjonctif imparfait',
  subtitle: 'Si llueve, me quedo ; tuviera, fuera, pudiera',
  kcIds: [REAL, IMPSUBJ],
  estMinutes: 11,
  explanation: [
    {
      title: 'Hypothèse possible : si + présent',
      body: 'Pour une condition réalisable, si est suivi du présent de l’indicatif ; la conséquence est au présent, au futur ou à l’impératif.',
      table: [
        ['si + présent → présent', 'Si tengo tiempo, te llamo.'],
        ['si + présent → futur', 'Si tengo tiempo, te llamaré.'],
        ['si + présent → impératif', 'Si llueve, coge el paraguas.'],
      ],
      examples: [
        { en: 'Si quieres, te acompaño.', fr: 'Si tu veux, je t’accompagne.' },
        { en: 'Si no salimos ya, perderemos el tren.', fr: 'Si nous ne partons pas tout de suite, nous raterons le train.' },
      ],
      tip: 'Comme en français, pas de futur après si : « Si tendré tiempo » ✗. Et pas de subjonctif présent non plus : « Si tenga tiempo » ✗ → « Si tengo tiempo » ✓.',
    },
    {
      title: 'Le subjonctif imparfait',
      body: 'On part de la 3e personne du pluriel de l’indefinido, on enlève -ron et on ajoute -ra ou -se. Les irrégularités de l’indefinido se retrouvent donc partout.',
      table: [
        ['hablaron', 'hablara / hablase'],
        ['tuvieron', 'tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran'],
        ['fueron (ser, ir)', 'fuera / fuese'],
        ['pudieron, hicieron, dijeron', 'pudiera, hiciera, dijera'],
        ['estuvieron, quisieron, supieron', 'estuviera, quisiera, supiera'],
      ],
      examples: [
        { en: 'Si tuviera tiempo, leería más.', fr: 'Si j’avais le temps, je lirais plus.' },
        { en: 'Si fuéramos más jóvenes, iríamos al festival.', fr: 'Si nous étions plus jeunes, nous irions au festival.' },
      ],
      tip: 'Les formes en -ra et en -se sont équivalentes ; -ra est la plus courante à l’oral. Attention à l’accent de nosotros : tuviéramos, fuéramos.',
    },
  ],
  exercises: exercises('es-b1-hipotesis-1', 'B1', { kc: REAL })
    .mcq('Si mañana ___ buen tiempo, iremos a la playa.', ['hace', 'hará', 'haga'], 0, 'Condition possible → si + présent : hace.', { d: -0.4 })
    .mcq('Si (tú) ___ a Madrid, avísame.', ['vienes', 'vendrás', 'vengas'], 0, 'si + présent, puis impératif.', { d: -0.4 })
    .cloze('Si no ___ ahora, perderemos el tren.', ['salimos'], 'si + présent → futur : si no salimos…', { hint: 'salir, nosotros', d: -0.3 })
    .cloze('Si ___ más tiempo, aprendería a tocar el piano.', ['tuviera', 'tuviese'], 'tener → tuvieron → tuviera / tuviese.', { kc: IMPSUBJ, hint: 'tener, yo', d: 0 })
    .type('Donne le subjonctif imparfait (forme en -ra) de « hacer » avec « yo ».', ['hiciera'], 'hicieron → hiciera.', { kc: IMPSUBJ, d: -0.1 })
    .type('Donne le subjonctif imparfait (forme en -ra) de « ir » avec « nosotros ».', ['fuéramos'], 'fueron → fuéramos (accent écrit).', { kc: IMPSUBJ, d: 0.2 })
    .order('Si tu as faim, mange quelque chose.', 'Si tienes hambre, come algo.', 'si + présent → impératif.', { distractors: ['comes'], d: -0.4 })
    .tr('Si tu veux, je t’accompagne.', ['Si quieres, te acompaño.', 'Si tú quieres, te acompaño.', 'Si quieres, yo te acompaño.', 'Te acompaño si quieres.', 'Si quieres, voy contigo.'],
      'si + présent → présent.', { d: -0.4 })
    .tr('S’il pleut demain, nous resterons à la maison.', [
      'Si mañana llueve, nos quedaremos en casa.', 'Si llueve mañana, nos quedaremos en casa.', 'Si mañana llueve, nos quedamos en casa.', 'Si llueve mañana, nos quedamos en casa.',
      'Si mañana llueve, vamos a quedarnos en casa.', 'Si llueve mañana, vamos a quedarnos en casa.', 'Nos quedaremos en casa si llueve mañana.', 'Nos quedaremos en casa si mañana llueve.',
    ], 'si llueve (présent) → nos quedaremos (futur).', { d: -0.3 })
    .listen('Si llegas antes que yo, las llaves están debajo del felpudo.', 'Où sont les clés ?', ['Sous le paillasson', 'Dans la boîte aux lettres', 'Chez la voisine'], 0,
      'debajo del felpudo = sous le paillasson.', { d: -0.3 })
    .listen('Si pudiera, viviría en una casa en el campo con un huerto y muchos animales.', 'Que ferait la personne si elle pouvait ?',
      ['Vivre à la campagne', 'Faire le tour du monde', 'Ouvrir un restaurant'], 0,
      'si pudiera = si je pouvais ; viviría en el campo.', { kc: IMPSUBJ, d: -0.2 })
    .dictation('Si os apetece, podemos ir al cine esta noche.', 'si + présent : os apetece.', { d: -0.3 })
    .repeat('Si tuviéramos más dinero, viajaríamos más.', 'tuviéramos (accent) + conditionnel.', { kc: IMPSUBJ, d: 0 })
    .say('Si tu es {fatigué|fatiguée}, va te coucher.', [
      'Si estás cansado, vete a la cama.', 'Si estás cansada, vete a la cama.', 'Si estás cansado, acuéstate.', 'Si estás cansada, acuéstate.',
      'Si estás cansado, vete a dormir.', 'Si estás cansada, vete a dormir.',
    ], 'si + présent → impératif.', { d: -0.3 })
    .answer('¿Qué haces si no puedes dormir por la noche?', 'Si no puedo dormir, me levanto, leo un rato y bebo un vaso de leche caliente.',
      'si + présent → présent.', { keywords: [['si']], minWords: 10, d: -0.3 })
    .build(),
};

export const hipotesis2: Lesson = {
  id: 'es-b1-hipotesis-2',
  cefr: 'B1',
  unitId: 'es-b1-hipotesis',
  title: 'Si tuviera…, haría…',
  subtitle: 'Hypothèse irréelle, como si, me gustaría que',
  kcIds: [UNREAL, IMPSUBJ],
  estMinutes: 11,
  explanation: [
    {
      title: 'si + subjonctif imparfait → conditionnel',
      body: 'Pour une situation imaginaire ou peu probable dans le présent ou l’avenir : si + subjonctif imparfait, puis conditionnel. La proposition avec si peut venir en premier ou en second.',
      table: [
        ['si + subj. imparfait', 'conditionnel'],
        ['Si tuviera dinero,', 'viajaría más.'],
        ['Si yo fuera tú,', 'no lo haría.'],
        ['Viajaría más', 'si tuviera dinero.'],
      ],
      examples: [
        { en: 'Si viviera en la costa, iría a la playa cada día.', fr: 'Si je vivais sur la côte, j’irais à la plage tous les jours.' },
        { en: 'Si no lloviera, saldríamos.', fr: 'S’il ne pleuvait pas, nous sortirions.' },
      ],
      tip: 'Le français dit « si j’avais » (imparfait de l’indicatif) ; l’espagnol exige le subjonctif imparfait : « Si tenía dinero » ✗ → « Si tuviera dinero » ✓. Et jamais de conditionnel après si : « Si tendría » ✗.',
    },
    {
      title: 'como si, me gustaría que',
      body: 'Le subjonctif imparfait s’emploie aussi après como si (comme si) et après un verbe de souhait au conditionnel (me gustaría que, preferiría que).',
      examples: [
        { en: 'Habla como si fuera el jefe.', fr: 'Il parle comme s’il était le chef.' },
        { en: 'Me gustaría que vinieras a la fiesta.', fr: 'J’aimerais que tu viennes à la fête.' },
      ],
      tip: '« comme si » + imparfait en français → como si + subjonctif imparfait, jamais l’indicatif.',
    },
  ],
  exercises: exercises('es-b1-hipotesis-2', 'B1', { kc: UNREAL, tense: 'condicional' })
    .mcq('Si ___ más tiempo libre, haría más deporte.', ['tuviera', 'tenía', 'tendría'], 0, 'Hypothèse irréelle → si + subjonctif imparfait : tuviera.', { d: 0 })
    .cloze('Si me tocara la lotería, ___ la vuelta al mundo.', ['daría'], 'Conséquence → conditionnel : daría.', { hint: 'dar, yo', d: 0.1 })
    .cloze('Habla como si lo ___ todo.', ['supiera', 'supiese'], 'como si + subjonctif imparfait : supiera.', { kc: IMPSUBJ, hint: 'saber', d: 0.3 })
    .mcq('Qui continuerait à travailler ?', ['Marina', 'Raúl', 'Sergio'], 0,
      'Marina : Yo seguiría trabajando, pero menos horas.',
      {
        d: 0,
        passage: 'Encuesta: ¿Qué harías si no tuvieras que trabajar?\nRaúl, 34 años: Si no tuviera que trabajar, me iría a vivir a un pueblo de Asturias y abriría una pequeña librería.\nMarina, 27 años: Yo seguiría trabajando, pero menos horas. Si pudiera elegir, trabajaría tres días a la semana y dedicaría el resto del tiempo a pintar.\nSergio, 45 años: Si fuera rico, compraría un barco y pasaría los veranos navegando por el Mediterráneo con mis hijos.',
      })
    .type('Complète : « Si (yo, ser) tú, no aceptaría ese trabajo. » Écris seulement le verbe.', ['fuera', 'fuese'], 'si yo fuera tú = à ta place.', { kc: [UNREAL, IMPSUBJ], d: 0.1 })
    .type('Complète : « Si (vosotros, vivir) en Madrid, os veríamos más a menudo. » Écris seulement le verbe.', ['vivierais', 'vivieseis'],
      'vivieron → vivierais / vivieseis.', { kc: [UNREAL, IMPSUBJ], d: 0.3 })
    .order('Si je pouvais, je t’aiderais.', 'Si pudiera, te ayudaría.', 'si + pudiera → ayudaría.', { distractors: ['podría'], d: 0 })
    .tr('Si j’avais une voiture, j’irais à la montagne.', [
      'Si tuviera coche, iría a la montaña.', 'Si tuviera un coche, iría a la montaña.', 'Si tuviese coche, iría a la montaña.', 'Si tuviese un coche, iría a la montaña.',
      'Iría a la montaña si tuviera coche.', 'Iría a la montaña si tuviera un coche.', 'Si yo tuviera coche, iría a la montaña.', 'Si tuviera coche, me iría a la montaña.',
    ], 'si + tuviera → iría (et non « si tenía »).', { d: 0.2 })
    .tr('J’aimerais que tu viennes avec nous.', [
      'Me gustaría que vinieras con nosotros.', 'Me gustaría que vinieses con nosotros.', 'Me gustaría que vinieras con nosotras.', 'Me gustaría que vinieses con nosotras.',
      'Me encantaría que vinieras con nosotros.', 'Me encantaría que vinieras con nosotras.',
    ], 'me gustaría que + subjonctif imparfait : vinieras.', { kc: IMPSUBJ, d: 0.3 })
    .listen('Si viviera más cerca del trabajo, iría andando y no perdería una hora en el metro.', 'Quel est le problème de la personne ?',
      ['Elle habite loin de son travail', 'Elle n’aime pas marcher', 'Le métro est en grève'], 0,
      'si viviera más cerca = si j’habitais plus près.', { d: 0 })
    .listen('Si yo fuera tú, hablaría con el profesor antes del examen.', 'Que conseille-t-on ?',
      ['Parler au professeur avant l’examen', 'Réviser davantage', 'Changer de cours'], 0,
      'si yo fuera tú = à ta place.', { d: -0.1 })
    .dictation('Si supiera cocinar, os invitaría a cenar.', 'supiera (saber) + invitaría.', { kc: [UNREAL, IMPSUBJ], d: 0.2 })
    .repeat('Si no lloviera, saldríamos a dar un paseo.', 'lloviera + saldríamos.', { d: 0 })
    .say('Si j’étais riche, je ne travaillerais pas.', [
      'Si fuera rico, no trabajaría.', 'Si fuera rica, no trabajaría.', 'Si fuese rico, no trabajaría.', 'Si fuese rica, no trabajaría.',
      'Si yo fuera rico, no trabajaría.', 'Si yo fuera rica, no trabajaría.', 'No trabajaría si fuera rico.', 'No trabajaría si fuera rica.',
    ], 'si fuera → no trabajaría.', { d: 0.1 })
    .answer('¿Qué harías si pudieras vivir en cualquier país?', 'Si pudiera vivir en cualquier país, viviría en Japón porque me encanta su cultura y su comida.',
      'si + subjonctif imparfait, puis conditionnel.', {
        kc: [UNREAL, IMPSUBJ], keywords: [['si'], ['viviría', 'iría', 'me iría', 'elegiría', 'trabajaría', 'aprendería', 'compraría', 'estaría']], minWords: 12, d: 0.2,
      })
    .build(),
};
