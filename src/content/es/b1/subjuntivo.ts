import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const FORM = 'es.b1.grammar.subjuntivo_form';
const WISH = 'es.b1.grammar.subjuntivo_wishes';
const CUANDO = 'es.b1.grammar.subjuntivo_cuando';

export const subjuntivo1: Lesson = {
  id: 'es-b1-subjuntivo-1',
  cefr: 'B1',
  unitId: 'es-b1-subjuntivo',
  title: 'Le subjonctif présent : la forme',
  subtitle: 'Quiero que vengas, espero que estés bien',
  kcIds: [FORM, WISH],
  estMinutes: 11,
  explanation: [
    {
      title: 'Former le subjonctif',
      body: 'On part de la 1re personne du présent (yo), on enlève le -o et on échange les voyelles : les verbes en -ar prennent -e, les verbes en -er et -ir prennent -a. Les irrégularités de yo se retrouvent partout.',
      table: [
        ['hablar (hablo)', 'hable, hables, hable, hablemos, habléis, hablen'],
        ['comer (como)', 'coma, comas, coma, comamos, comáis, coman'],
        ['tener (tengo)', 'tenga, tengas, tenga, tengamos, tengáis, tengan'],
        ['hacer, decir, salir, venir, conocer', 'haga, diga, salga, venga, conozca'],
        ['six irréguliers', 'ser → sea · ir → vaya · estar → esté · dar → dé · saber → sepa · haber → haya'],
      ],
      examples: [
        { en: 'Quiero que tengas cuidado.', fr: 'Je veux que tu fasses attention.' },
        { en: 'Necesitamos que vengáis pronto.', fr: 'Nous avons besoin que vous veniez tôt.' },
      ],
      tip: 'Diphtongues : querer → quiera, poder → pueda, mais queramos, podamos. Orthographe : buscar → busque, llegar → llegue, coger → coja.',
    },
    {
      title: 'Vouloir, demander, espérer que…',
      body: 'Après un verbe de volonté, de demande ou de souhait, si le sujet change, le verbe qui suit est au subjonctif. Si le sujet est le même, on garde l’infinitif.',
      table: [
        ['même sujet', 'Quiero ir. · Prefiero quedarme.'],
        ['sujet différent', 'Quiero que vayas. · Prefiero que te quedes.'],
        ['autres verbes', 'necesitar que, pedir que, esperar que, preferir que'],
      ],
      examples: [
        { en: 'Espero que os guste la comida.', fr: 'J’espère que la nourriture vous plaira.' },
        { en: 'Te pido que no se lo digas a nadie.', fr: 'Je te demande de ne le dire à personne.' },
      ],
      tip: 'Piège : « j’espère que » est suivi de l’indicatif en français, mais esperar que exige le subjonctif : J’espère que tu vas bien → Espero que estés bien.',
    },
  ],
  exercises: exercises('es-b1-subjuntivo-1', 'B1', { kc: FORM, tense: 'subjuntivo' })
    .mcq('Quiero que (tú) ___ conmigo al médico.', ['vengas', 'vienes', 'venir'], 0, 'Volonté + sujet différent → subjonctif : vengas.', { kc: [FORM, WISH], d: -0.5 })
    .mcq('Prefiero ___ en casa esta noche.', ['quedarme', 'que me quede', 'que me quedo'], 0, 'Même sujet (yo prefiero, yo me quedo) → infinitif.', { kc: WISH, d: -0.3 })
    .cloze('Espero que (vosotros) lo ___ bien en la fiesta.', ['paséis'], 'esperar que + subjonctif : paséis.', { kc: [FORM, WISH], hint: 'pasar', d: -0.4 })
    .cloze('Necesito que me ___ la verdad.', ['digas'], 'decir (digo) → digas.', { hint: 'decir, tú', d: -0.3 })
    .type('Donne le subjonctif présent de « ir » avec « nosotros ».', ['vayamos'], 'ir → vaya, vayamos (irrégulier).', { d: -0.3 })
    .type('Donne le subjonctif présent de « saber » avec « yo ».', ['sepa'], 'saber → sepa (irrégulier).', { d: -0.4 })
    .order('Je veux que tu sois heureux.', 'Quiero que seas feliz.', 'ser → seas ; feliz ne varie pas en genre.', { kc: [FORM, WISH], distractors: ['eres'], d: -0.5 })
    .tr('J’espère que tu vas bien.', ['Espero que estés bien.', 'Espero que tú estés bien.', 'Espero que te encuentres bien.', 'Espero que estés muy bien.'],
      'esperar que + subjonctif : estés (et non « estás »).', { kc: WISH, d: -0.4 })
    .tr('Mes parents veulent que nous venions dimanche.', [
      'Mis padres quieren que vengamos el domingo.', 'Mis padres quieren que vayamos el domingo.',
      'Mis padres quieren que vengamos este domingo.', 'Mis padres quieren que vayamos este domingo.',
    ], 'querer que + subjonctif : vengamos (ou vayamos si l’on va chez eux).', { kc: WISH, d: -0.3 })
    .listen('Os pido que apaguéis los móviles durante la reunión, por favor.', 'Que demande la personne ?',
      ['D’éteindre les portables', 'D’arriver à l’heure', 'De prendre des notes'], 0,
      'pedir que + subjonctif : apaguéis (apagar → apague).', { kc: WISH, d: -0.4 })
    .listen('El médico quiere que haga más ejercicio y que coma menos sal.', 'Que veut le médecin ?',
      ['Qu’il fasse plus d’exercice et mange moins salé', 'Qu’il dorme davantage', 'Qu’il arrête le café'], 0,
      'quiere que haga… y que coma… : deux subjonctifs.', { d: -0.4 })
    .dictation('Te pido que tengas paciencia conmigo.', 'tener (tengo) → tengas.', { d: -0.3 })
    .repeat('Espero que estéis bien y que os guste el regalo.', 'estar → estéis ; gustar → guste.', { kc: [FORM, WISH], d: -0.4 })
    .say('Je préfère que tu conduises.', ['Prefiero que conduzcas.', 'Prefiero que conduzcas tú.', 'Prefiero que tú conduzcas.'],
      'conducir (conduzco) → conduzcas.', { kc: [FORM, WISH], d: -0.2 })
    .answer('¿Qué esperas de tus próximas vacaciones?', 'Espero que haga buen tiempo, que el hotel sea tranquilo y que podamos descansar mucho.',
      'espero que + subjonctif : haga, sea, podamos…', { kc: [WISH, FORM], keywords: [['espero que', 'quiero que', 'ojalá', 'prefiero que']], minWords: 10, d: -0.2 })
    .build(),
};

export const subjuntivo2: Lesson = {
  id: 'es-b1-subjuntivo-2',
  cefr: 'B1',
  unitId: 'es-b1-subjuntivo',
  title: 'Ojalá, es importante que, cuando',
  subtitle: 'Souhaits, jugements et futur après cuando',
  kcIds: [WISH, CUANDO],
  estMinutes: 11,
  explanation: [
    {
      title: 'Ojalá et les jugements',
      body: 'ojalá (pourvu que, j’espère que) est toujours suivi du subjonctif. Les jugements de valeur aussi : es importante que, es necesario que, es mejor que, es normal que. En revanche, ce qui est présenté comme vrai reste à l’indicatif.',
      table: [
        ['souhait', 'Ojalá (que) haga sol.'],
        ['jugement', 'Es importante que descanses.'],
        ['constat', 'Es verdad que hace frío. · Está claro que tiene razón.'],
      ],
      examples: [
        { en: 'Ojalá nos veamos pronto.', fr: 'J’espère qu’on se verra bientôt.' },
        { en: 'Es mejor que vayas en tren.', fr: 'Il vaut mieux que tu y ailles en train.' },
      ],
      tip: 'Sans sujet précis, on garde l’infinitif : Es importante dormir bien. Avec un sujet : Es importante que duermas bien.',
    },
    {
      title: 'cuando + subjonctif pour le futur',
      body: 'Quand cuando introduit une action future, le verbe est au subjonctif présent. Pour une habitude ou un fait passé, on garde l’indicatif. Dans une question, ¿cuándo? est suivi de l’indicatif.',
      table: [
        ['futur', 'Cuando llegue, te llamaré. / te llamo.'],
        ['habitude', 'Cuando llego a casa, me ducho.'],
        ['passé', 'Cuando llegué, ya era tarde.'],
        ['question', '¿Cuándo vienes?'],
      ],
      examples: [
        { en: 'Cuando tenga tiempo, aprenderé a nadar.', fr: 'Quand j’aurai le temps, j’apprendrai à nager.' },
        { en: 'Cuando era pequeña, vivía en Cádiz.', fr: 'Quand j’étais petite, je vivais à Cadix.' },
      ],
      tip: 'Grand piège : le français met le futur après « quand » (quand je serai grand), l’espagnol jamais. « Cuando seré mayor » ✗ → « Cuando sea mayor » ✓.',
    },
  ],
  exercises: exercises('es-b1-subjuntivo-2', 'B1', { kc: CUANDO, tense: 'subjuntivo' })
    .mcq('Cuando ___ a Madrid, te llamaré.', ['llegue', 'llegaré', 'llego'], 0, 'Action future après cuando → subjonctif : llegue.', { d: -0.3 })
    .mcq('Cuando ___ a casa, siempre me ducho.', ['llego', 'llegue', 'llegaré'], 0, 'Habitude (siempre) → indicatif : llego.', { d: -0.1 })
    .cloze('Ojalá ___ buen tiempo este fin de semana.', ['haga'], 'ojalá + subjonctif : haga (hacer).', { kc: WISH, hint: 'hacer', d: -0.5 })
    .mcq('Que fera Elena à son retour ?', ['Elle invitera Dani à dîner', 'Elle arrosera les plantes', 'Elle réparera le chauffage'], 0,
      'Cuando vuelva, te invito a cenar.',
      {
        kc: [CUANDO, WISH], d: -0.3,
        passage: 'Correo de Elena a su compañero de piso\nHola, Dani: Mañana me voy a Valencia una semana. Es importante que riegues las plantas cada dos días y que no dejes la ventana del salón abierta, porque entra agua cuando llueve. Cuando llegue el paquete de Correos, déjalo en mi habitación, por favor. Ojalá no haya problemas con la calefacción esta vez. Cuando vuelva, te invito a cenar. ¡Gracias! Elena',
      })
    .type('Complète avec le verbe au bon mode : « Cuando (yo, tener) tiempo, aprenderé a tocar la guitarra. » Écris seulement le verbe.', ['tenga'],
      'Futur après cuando → subjonctif : tenga.', { d: -0.2 })
    .type('Complète : « Es importante que (vosotros, llegar) puntuales. » Écris seulement le verbe.', ['lleguéis'],
      'es importante que + subjonctif ; llegar → lleguéis (g → gu).', { kc: WISH, d: -0.1 })
    .order('Quand je serai à la retraite, je vivrai près de la mer.', 'Cuando me jubile viviré cerca del mar.', 'Futur après cuando → subjonctif : me jubile.',
      { distractors: ['jubilaré'], d: 0 })
    .tr('Appelle-moi quand tu arriveras.', ['Llámame cuando llegues.', 'Llámame cuando tú llegues.', 'Cuando llegues, llámame.'],
      '« quand tu arriveras » → cuando llegues (subjonctif, pas de futur).', { d: -0.2 })
    .tr('Pourvu qu’il ne pleuve pas demain !', ['¡Ojalá no llueva mañana!', '¡Ojalá que no llueva mañana!', '¡Ojalá mañana no llueva!', '¡Ojalá que mañana no llueva!'],
      'ojalá (que) + subjonctif : llueva.', { kc: WISH, d: -0.3 })
    .listen('Cuando termine la carrera, me gustaría trabajar un año en el extranjero.', 'Que veut faire la personne après ses études ?',
      ['Travailler un an à l’étranger', 'Commencer un master', 'Voyager en Amérique du Sud'], 0,
      'cuando termine la carrera = quand elle aura fini ses études.', { d: -0.3 })
    .listen('Es mejor que vayas en metro: a estas horas hay mucho tráfico.', 'Pourquoi conseille-t-on le métro ?',
      ['Il y a beaucoup de circulation', 'Le métro est moins cher', 'Il n’y a pas de bus'], 0,
      'es mejor que vayas… hay mucho tráfico.', { kc: WISH, d: -0.4 })
    .dictation('Cuando tengáis un momento, mirad vuestro correo.', 'cuando + subjonctif : tengáis.', { d: -0.1 })
    .repeat('Ojalá podamos vernos pronto.', 'ojalá + subjonctif : podamos.', { kc: WISH, d: -0.5 })
    .say('Quand je trouverai du travail, je louerai un appartement.', [
      'Cuando encuentre trabajo, alquilaré un piso.', 'Cuando encuentre trabajo, voy a alquilar un piso.', 'Cuando encuentre trabajo, alquilaré un apartamento.',
      'Cuando encuentre un trabajo, alquilaré un piso.', 'Cuando encuentre un trabajo, voy a alquilar un piso.', 'Alquilaré un piso cuando encuentre trabajo.',
    ], 'cuando encuentre (subjonctif) + futur ou ir a.', { d: 0 })
    .answer('¿Qué vas a hacer cuando tengas vacaciones?', 'Cuando tenga vacaciones, iré a la playa con mis amigos y leeré muchos libros.',
      'cuando + subjonctif (tenga, termine, pueda…), puis futur.', {
        keywords: [['cuando'], ['tenga', 'llegue', 'termine', 'pueda', 'esté', 'vaya', 'tengamos', 'empiece', 'acabe']], minWords: 10, d: 0,
      })
    .build(),
};
