import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const CONTRAST = 'es.c1.grammar.contrast_connectors';
const CONSEQ = 'es.c1.grammar.consequence_connectors';
const NOMIN = 'es.c1.grammar.nominalisation';
const ADD = 'es.c1.grammar.additive_reformulation';

export const coherencia1: Lesson = {
  id: 'es-c1-coherencia-1',
  cefr: 'C1',
  unitId: 'es-c1-coherencia',
  title: 'Opposer et conclure',
  subtitle: 'No obstante · en cambio · ahora bien · por consiguiente · de ahí que',
  kcIds: [CONTRAST, CONSEQ],
  estMinutes: 13,
  explanation: [
    {
      title: 'Opposer, nuancer',
      body: 'sin embargo et no obstante (plus soutenu) = cependant. en cambio compare deux éléments (en revanche) ; por el contrario corrige ou oppose franchement (au contraire). ahora bien = cela dit ; aun así = malgré cela.',
      table: [
        ['No obstante, conviene ser prudentes.', 'Néanmoins, il convient d’être prudent.'],
        ['Él es extrovertido; ella, en cambio, es tímida.', 'Il est extraverti ; elle, en revanche, est timide.'],
        ['No es aburrido; por el contrario, es apasionante.', 'Ce n’est pas ennuyeux ; au contraire, c’est passionnant.'],
        ['Es ambicioso. Ahora bien, ¿quién lo paga?', 'C’est ambitieux. Cela dit, qui paie ?'],
        ['Llovía; aun así, salimos.', 'Il pleuvait ; malgré cela, nous sommes sortis.'],
      ],
      tip: '« Par contre » → en cambio. no obstante est aussi une préposition soutenue : no obstante las dificultades (malgré les difficultés).',
    },
    {
      title: 'Exprimer la conséquence',
      body: 'por (lo) tanto, por consiguiente, en consecuencia, así pues introduisent une conclusion ; por ende est très soutenu. de modo que / de manera que + indicatif = si bien que. de ahí que + subjonctif = d’où le fait que.',
      table: [
        ['Ha llovido poco; por consiguiente, hay restricciones.', 'Il a peu plu ; par conséquent, il y a des restrictions.'],
        ['Así pues, la propuesta queda aprobada.', 'Ainsi, la proposition est adoptée.'],
        ['No estudió, de modo que suspendió.', 'Il n’a pas étudié, si bien qu’il a échoué.'],
        ['Nadie le avisó; de ahí que llegara tarde.', 'Personne ne l’avait prévenu ; d’où son retard.'],
      ],
      tip: 'de ahí que impose le subjonctif même pour un fait réel. Le français « d’où » + nom (d’où son retard) devient souvent de ahí que + verbe conjugué.',
    },
  ],
  exercises: exercises('es-c1-coherencia-1', 'C1', { kc: CONTRAST })
    .mcq('Mi hermano es muy extrovertido; yo, ___, soy bastante tímido.', ['en cambio', 'por consiguiente', 'es decir'], 0, 'Comparaison de deux éléments → en cambio (en revanche).', { d: 1.4 })
    .mcq('Las lluvias han sido escasas este invierno; ___, los embalses están a mínimos.', ['por consiguiente', 'no obstante', 'en cambio'], 0, 'Conséquence → por consiguiente.', { kc: CONSEQ, d: 1.5 })
    .cloze('La empresa no ha cumplido los plazos; de ahí que el cliente ___ cancelado el contrato.', ['haya'], 'de ahí que + subjonctif, même pour un fait réel : haya cancelado.', { kc: CONSEQ, hint: 'haber', d: 1.9 })
    .cloze('El proyecto es ambicioso. ___ bien, no tenemos presupuesto para llevarlo a cabo.', ['Ahora'], 'ahora bien = cela dit, toutefois.', { d: 1.7 })
    .type('Connecteur soutenu synonyme de « sin embargo » (deux mots) : ___', ['no obstante', 'con todo'], 'no obstante (ou con todo) = néanmoins.', { d: 1.6 })
    .type('Complète : « Nadie le avisó del cambio de horario; de ahí que (llegar) ___ tarde a la reunión. »', ['llegara', 'llegase'], 'de ahí que + subjonctif ; contexte passé → imparfait : llegara.', { kc: CONSEQ, d: 2.0 })
    .order('Il a beaucoup plu ; malgré cela, nous sommes sortis.', 'Llovió mucho; aun así, salimos.', 'aun así = malgré cela (sans accent sur aun : « même »).', { distractors: ['aunque'], d: 1.6 })
    .tr('Mon frère adore le sport ; ma sœur, en revanche, le déteste.', alt(['Mi hermano adora el deporte; ', 'A mi hermano le encanta el deporte; '], ['mi hermana, en cambio, ', 'mi hermana, por el contrario, ', 'en cambio, mi hermana ', 'mi hermana, sin embargo, '], ['lo odia.', 'lo detesta.']),
      'en revanche → en cambio ; ma sœur est sujet de odiar : mi hermana lo odia.', { d: 1.6 })
    .tr('Le budget a été réduit ; par conséquent, le projet sera reporté.', alt(['El presupuesto se ha reducido; ', 'Han reducido el presupuesto; ', 'Se ha reducido el presupuesto; ', 'El presupuesto ha sido reducido; ', 'Se redujo el presupuesto; '], ['por consiguiente', 'por lo tanto', 'por tanto', 'en consecuencia', 'así pues'], [', el proyecto se aplazará.', ', el proyecto será aplazado.', ', se aplazará el proyecto.', ', el proyecto se pospondrá.']),
      'par conséquent → por consiguiente, por (lo) tanto, en consecuencia.', { kc: CONSEQ, d: 1.8 })
    .listen('El hotel tenía unas vistas preciosas. Ahora bien, el servicio dejaba mucho que desear y la habitación estaba sucia.', '¿Qué opina el hablante del hotel?', [
      'Le gustaron las vistas, pero no el servicio', 'Todo le pareció perfecto', 'No le gustaron las vistas',
    ], 0, 'ahora bien introduit la restriction ; dejar mucho que desear = laisser à désirer.', { d: 1.5 })
    .listen('Los precios del alquiler han subido un treinta por ciento en dos años; por consiguiente, muchos jóvenes se ven obligados a seguir viviendo con sus padres.', '¿Cuál es la consecuencia de la subida de los alquileres?', [
      'Muchos jóvenes siguen en casa de sus padres', 'Los jóvenes compran más pisos', 'Los propietarios bajan los precios',
    ], 0, 'por consiguiente introduit la conséquence.', { kc: CONSEQ, d: 1.6 })
    .dictation('No obstante, conviene ser prudentes.', 'no obstante, en deux mots.', { d: 1.5 })
    .repeat('Así pues, la propuesta queda aprobada por unanimidad.', 'así pues : conclusion formelle.', { kc: CONSEQ, d: 1.5 })
    .say('Cependant, il reste beaucoup à faire.', alt(['Sin embargo, ', 'No obstante, '], ['queda mucho por hacer.', 'aún queda mucho por hacer.', 'todavía queda mucho por hacer.', 'queda mucho que hacer.']),
      'cependant → sin embargo / no obstante ; il reste à faire = queda por hacer.', { d: 1.5 })
    .answer('¿Qué ventajas e inconvenientes tiene vivir en una gran ciudad? Usa al menos un conector de contraste.',
      'Vivir en una gran ciudad ofrece muchas oportunidades culturales y laborales; sin embargo, la vivienda es carísima y, por consiguiente, mucha gente tiene que vivir lejos del centro.',
      'Connecteurs de contraste et de conséquence.', { kc: [CONTRAST, CONSEQ], keywords: [['sin embargo', 'no obstante', 'en cambio', 'ahora bien', 'aun así', 'por el contrario', 'con todo']], minWords: 18, d: 1.9 })
    .build(),
};

export const coherencia2: Lesson = {
  id: 'es-c1-coherencia-2',
  cefr: 'C1',
  unitId: 'es-c1-coherencia',
  title: 'Nominaliser et structurer',
  subtitle: 'La subida de los precios · la toma de decisiones · asimismo · es decir',
  kcIds: [NOMIN, ADD],
  estMinutes: 13,
  explanation: [
    {
      title: 'La nominalisation',
      body: 'Le style écrit soutenu (presse, rapports) transforme les verbes en noms : la phrase devient plus dense et plus impersonnelle.',
      table: [
        ['subir → la subida', 'Los precios suben → la subida de los precios'],
        ['aumentar → el aumento', 'el aumento del paro'],
        ['reducir → la reducción', 'la reducción de plazas'],
        ['llegar → la llegada', 'la llegada del tren'],
        ['decidir → la toma de decisiones', 'la prise de décision'],
        ['poner en marcha → la puesta en marcha', 'le lancement, la mise en place'],
        ['tomar conciencia → la toma de conciencia', 'la prise de conscience'],
      ],
      examples: [
        { en: 'La construcción del hospital comenzará en primavera.', fr: 'La construction de l’hôpital commencera au printemps.' },
      ],
      tip: 'Attention au genre : el análisis, el aumento, el descenso (masculins) ; la subida, la bajada, la llegada (féminins en -ada). « Prise de » se rend par la toma de, « mise en » par la puesta en.',
    },
    {
      title: 'Structurer et reformuler',
      body: 'Pour organiser un texte : en primer lugar, por un lado… por otro (lado), asimismo, además, es más, por último. Pour reformuler ou conclure : es decir, o sea, esto es, mejor dicho, en definitiva, en resumen.',
      table: [
        ['asimismo', 'de même, en outre (soutenu)'],
        ['es más', 'qui plus est, bien plus'],
        ['es decir / o sea / esto es', 'c’est-à-dire'],
        ['mejor dicho', 'plus exactement'],
        ['en definitiva / en resumen', 'en définitive / en résumé'],
      ],
      tip: 'asimismo en un mot = en outre ; así mismo en deux mots = de la même manière. Et es más ne signifie pas « c’est plus » mais « qui plus est ».',
    },
  ],
  exercises: exercises('es-c1-coherencia-2', 'C1', { kc: NOMIN })
    .mcq('«Los precios han subido mucho» → «___ de los precios ha sido notable.»', ['La subida', 'El subido', 'La subidura'], 0, 'subir → la subida.', { d: 1.4 })
    .mcq('¿Qué problema menciona el informe?', [
      'Las quejas de los comerciantes por la falta de aparcamiento', 'El descenso del uso de la bicicleta', 'Los retrasos del nuevo tranvía',
    ], 0, 'la reducción de las plazas de aparcamiento ha provocado quejas entre los comerciantes.', {
      kc: [ADD, NOMIN], d: 1.8,
      passage: 'Informe anual del Observatorio de Movilidad de Montealto\nEn primer lugar, cabe destacar el aumento del uso de la bicicleta, que ha crecido un 18 % respecto al año anterior. Asimismo, la puesta en marcha de la nueva línea de tranvía ha supuesto un descenso notable del tráfico en el centro. Por otro lado, la reducción de las plazas de aparcamiento ha provocado quejas entre los comerciantes. En definitiva, la ciudad avanza hacia un modelo más sostenible, si bien la toma de decisiones deberá contar en adelante con todos los sectores afectados.',
    })
    .cloze('La ___ de decisiones corresponde al consejo de administración.', ['toma'], 'la toma de decisiones = la prise de décision.', { d: 1.6 })
    .cloze('El plan es caro; ___, nadie garantiza que funcione.', ['es más', 'además', 'encima'], 'es más / además = qui plus est (encima, plus familier).', { kc: ADD, hint: 'qui plus est', d: 1.7 })
    .type('Nominalise : « reducir » → la ___', ['reducción'], 'reducir → la reducción.', { d: 1.4 })
    .type('Connecteur soutenu en un mot signifiant « de même, en outre » : ___', ['asimismo', 'igualmente'], 'asimismo (en un mot) = en outre.', { kc: ADD, d: 1.7 })
    .order('L’arrivée du train a été retardée d’une heure.', 'La llegada del tren se retrasó una hora.', 'llegar → la llegada.', { distractors: ['llegó'], d: 1.5 })
    .tr('L’augmentation du chômage inquiète le gouvernement.', alt(['El aumento del ', 'La subida del ', 'El incremento del '], ['paro', 'desempleo'], [' preocupa al Gobierno.', ' inquieta al Gobierno.']),
      'Nominalisation : el aumento / el incremento del paro.', { d: 1.6 })
    .tr('Autrement dit, nous devons tout recommencer.', alt(['Es decir', 'O sea', 'Dicho de otro modo', 'Dicho de otra manera', 'En otras palabras', 'Esto es'], [', tenemos que ', ', debemos ', ', hemos de '], ['empezar todo de nuevo.', 'volver a empezar.', 'empezarlo todo de nuevo.', 'empezar de cero.', 'volver a empezarlo todo.']),
      'autrement dit → es decir, dicho de otro modo, en otras palabras.', { kc: ADD, d: 1.8 })
    .listen('La construcción del nuevo hospital comenzará en primavera y su apertura está prevista para finales de 2028.', '¿Cuándo abrirá el hospital?', [
      'A finales de 2028', 'En primavera', 'Todavía no se sabe',
    ], 0, 'la apertura (de abrir) está prevista para finales de 2028.', { d: 1.5 })
    .listen('Por un lado, el teletrabajo ahorra tiempo de transporte; por otro, puede aislar a los empleados. En definitiva, todo depende de cómo se organice.', '¿Cuál es la conclusión del hablante?', [
      'Que depende de la organización', 'Que el teletrabajo es siempre negativo', 'Que hay que volver a la oficina',
    ], 0, 'en definitiva introduit la conclusion.', { kc: ADD, d: 1.6 })
    .dictation('La puesta en marcha del proyecto se ha retrasado.', 'la puesta en marcha = le lancement.', { d: 1.6 })
    .repeat('En definitiva, se trata de una decisión acertada.', 'en definitiva : conclusion.', { kc: ADD, d: 1.5 })
    .say('La baisse des prix a surpris tout le monde.', alt(['La bajada de los precios', 'La bajada de precios', 'El descenso de los precios', 'La caída de los precios', 'La caída de precios'], [' sorprendió a todo el mundo.', ' ha sorprendido a todo el mundo.', ' sorprendió a todos.', ' ha sorprendido a todos.']),
      'Nominalisation : la bajada / el descenso de los precios.', { d: 1.6 })
    .answer('Resume en dos o tres frases un cambio importante en tu ciudad o en tu trabajo, usando sustantivos como «aumento», «llegada» o «reducción».',
      'En los últimos años, la llegada de muchas empresas tecnológicas ha provocado un aumento de los alquileres y, asimismo, una reducción del comercio tradicional en el centro.',
      'Nominalisation et connecteurs d’addition.', { kc: [NOMIN, ADD], keywords: [['aumento', 'llegada', 'reducción', 'subida', 'descenso', 'construcción', 'creación', 'apertura', 'cierre', 'desaparición', 'crecimiento', 'bajada']], minWords: 18, d: 1.9 })
    .build(),
};
