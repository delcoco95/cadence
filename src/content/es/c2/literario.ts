import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const TENSES = 'es.c2.grammar.literary_tenses';
const FUTSUBJ = 'es.c2.grammar.future_subjunctive';
const STYLE = 'es.c2.reading.literary_style';
const LEX = 'es.c2.vocabulary.literary_lexis';

export const literario1: Lesson = {
  id: 'es-c2-literario-1',
  cefr: 'C2',
  unitId: 'es-c2-literario',
  title: 'Les temps littéraires',
  subtitle: 'apenas hubo terminado · la casa que construyera · donde fueres',
  kcIds: [TENSES, FUTSUBJ],
  estMinutes: 15,
  explanation: [
    {
      title: 'Prétérit antérieur et forme en -ra',
      body: 'Le pretérito anterior (hube + participe) ne s’emploie plus qu’à l’écrit soutenu, après apenas, en cuanto, no bien, una vez que, pour une action immédiatement antérieure. La forme en -ra du subjonctif imparfait peut, à l’écrit, garder sa valeur latine de plus-que-parfait de l’indicatif ; la presse l’emploie aussi comme simple passé.',
      table: [
        ['Apenas hubo terminado, se marchó.', 'À peine eut-il terminé qu’il partit.'],
        ['En cuanto hubieron cenado, salieron al jardín.', 'Dès qu’ils eurent dîné, ils sortirent au jardin.'],
        ['la casa que construyera su abuelo', 'la maison qu’avait construite son grand-père (= había construido)'],
        ['el que fuera ministro de Hacienda', 'celui qui fut ministre des Finances (presse)'],
      ],
      examples: [
        { en: 'No bien hubo cruzado el umbral, comprendió que algo había cambiado.', fr: 'À peine eut-il franchi le seuil qu’il comprit que quelque chose avait changé.' },
      ],
      tip: 'Seule la forme en -ra a cette valeur d’indicatif : *la casa que construyese su abuelo est incorrect dans ce sens.',
    },
    {
      title: 'Le futur du subjonctif',
      body: 'Disparu de la langue courante, le futur du subjonctif (-re : fuere, hiciere, hubiere) survit dans les textes juridiques, les formules figées et les proverbes. On le remplace aujourd’hui par le présent du subjonctif ou l’indicatif.',
      table: [
        ['Allá donde fueres, haz lo que vieres.', 'À Rome, fais comme les Romains (proverbe).'],
        ['El que infringiere esta norma será sancionado.', 'Quiconque enfreindra cette règle sera sanctionné (droit ancien).'],
        ['Sea lo que fuere…', 'Quoi qu’il en soit… (figé, = sea lo que sea)'],
        ['Si hubiere lugar…', 'S’il y a lieu…'],
      ],
      tip: 'On le reconnaît à la terminaison -re / -res / -reis (fuere, tuvieres, hiciereis). Ne l’employez pas à l’oral : ce serait affecté.',
    },
  ],
  exercises: exercises('es-c2-literario-1', 'C2', { kc: TENSES })
    .mcq('Apenas ___ el último invitado, la anfitriona se derrumbó en el sofá.', ['se hubo marchado', 'se habrá marchado', 'se haya marchado'], 0, 'apenas + pretérito anterior (hube + participe) : style littéraire.', { d: 2.5 })
    .mcq('Dans « Allá donde fueres, haz lo que vieres », fueres et vieres sont :', ['des futurs du subjonctif', 'des imparfaits du subjonctif', 'des conditionnels'], 0, 'Terminaison -re : futur du subjonctif (ir / ser, ver).', { kc: FUTSUBJ, d: 2.4 })
    .cloze('Regresó al pueblo donde ___ su infancia, cuarenta años atrás.', ['pasara', 'había pasado'], 'Forme en -ra à valeur de plus-que-parfait (= había pasado) ; la forme en -se est exclue ici.', { hint: 'pasar', d: 2.6 })
    .cloze('Sea lo que ___, no pienso firmar ese documento.', ['fuere', 'sea'], 'Formule figée : sea lo que fuere (futur du subjonctif) ou sea lo que sea.', { kc: FUTSUBJ, d: 2.4 })
    .type('Pretérito anterior de « cenar » (ellos) : « En cuanto ___ , salieron a pasear. »', ['hubieron cenado'], 'hube, hubiste, hubo, hubimos, hubisteis, hubieron + participe.', { d: 2.6 })
    .type('Modernise : « El que infringiere la ley será castigado. » → « El que ___ la ley será castigado. »', ['infrinja'], 'Futur du subjonctif → présent du subjonctif dans la langue actuelle.', { kc: FUTSUBJ, d: 2.5 })
    .order('À peine eut-il fini de parler que tous applaudirent.', 'Apenas hubo terminado de hablar, todos aplaudieron.', 'apenas + pretérito anterior ; pas de « que » en espagnol.', { distractors: ['que', 'había'], d: 2.5 })
    .tr('Il retourna dans la ville qu’il avait quittée enfant.', [
      ...alt(['Volvió ', 'Regresó '], ['a la ciudad que '], ['había dejado ', 'dejara ', 'había abandonado ', 'abandonara '], ['de niño.', 'siendo niño.', 'cuando era niño.']),
    ], 'Plus-que-parfait : había dejado, ou forme littéraire en -ra (dejara).', { d: 2.6 })
    .tr('Quoi qu’il en soit, la décision est prise.', [
      ...alt(['Sea como sea', 'Sea como fuere', 'Sea lo que sea', 'Sea lo que fuere', 'En cualquier caso', 'De todos modos'], [', la decisión está tomada.']),
    ], 'Formule figée avec futur du subjonctif : sea como fuere.', { kc: FUTSUBJ, d: 2.4 })
    .listen('Una vez que se hubo retirado la comitiva, el viejo guardián cerró las puertas del palacio y se quedó a solas con sus recuerdos.', '¿Cuándo cerró las puertas el guardián?', [
      'Justo después de que se fuera la comitiva', 'Antes de que llegara la comitiva', 'Mientras la comitiva estaba dentro',
    ], 0, 'una vez que se hubo retirado : action immédiatement antérieure.', { d: 2.5 })
    .listen('Artículo doce: si el arrendatario no abonare la renta en el plazo previsto, el contrato quedará resuelto de pleno derecho.', '¿Qué ocurre si el inquilino no paga a tiempo?', [
      'El contrato se rescinde automáticamente', 'Se le concede un nuevo plazo', 'Debe pagar una multa',
    ], 0, 'abonare : futur du subjonctif, typique des textes juridiques ; quedar resuelto = être résilié.', { kc: FUTSUBJ, d: 2.7 })
    .dictation('No bien hubo cruzado el umbral, comprendió que algo había cambiado.', 'no bien + pretérito anterior = à peine.', { d: 2.7 })
    .repeat('El que fuera alcalde de la villa durante dos décadas ha fallecido esta mañana.', 'Forme en -ra de la presse : el que fuera = celui qui fut.', { d: 2.5 })
    .say('Dès qu’ils eurent dîné, ils sortirent au jardin.', [
      ...alt(['En cuanto ', 'Apenas ', 'Tan pronto como ', 'Una vez que '], ['hubieron cenado, salieron al jardín.']),
      'En cuanto cenaron, salieron al jardín.', 'Después de cenar, salieron al jardín.',
    ], 'Style soutenu : en cuanto hubieron cenado ; à l’oral, en cuanto cenaron.', { d: 2.6 })
    .answer('Escribe el comienzo de un relato en estilo literario: un personaje regresa a un lugar de su pasado.',
      'Apenas hubo bajado del tren, Elena reconoció el olor de la estación. Allí estaba el banco donde su padre la esperara tantas tardes, ahora cubierto de hojas secas.',
      'Pretérito anterior (apenas hubo bajado) et forme en -ra (esperara) pour le passé antérieur.', {
        kc: [TENSES, STYLE], keywords: [['apenas', 'en cuanto', 'no bien', 'una vez que'], ['hubo', 'hubieron', 'esperara', 'había', 'fuera']], minWords: 22, d: 2.8,
      })
    .build(),
};

export const literario2: Lesson = {
  id: 'es-c2-literario-2',
  cefr: 'C2',
  unitId: 'es-c2-literario',
  title: 'Le style soutenu',
  subtitle: 'la blanca nieve · hipérbaton · acaso, otrora, sendos, por doquier',
  kcIds: [STYLE, LEX],
  estMinutes: 15,
  explanation: [
    {
      title: 'Ordre des mots et épithète',
      body: 'La prose littéraire antépose volontiers l’adjectif (épithète de nature : la blanca nieve, el oscuro bosque) et pratique l’hyperbate (ordre inversé). À l’écrit archaïsant, le pronom peut se placer après le verbe conjugué (díjole, veíase).',
      table: [
        ['las mansas aguas del río', 'les eaux paisibles du fleuve (qualité inhérente)'],
        ['un pobre hombre / un hombre pobre', 'un pauvre type / un homme sans argent'],
        ['De la vieja casa en el desván, dormía el baúl.', 'Hyperbate : Dans le grenier de la vieille maison dormait la malle.'],
        ['Díjole entonces que callara.', 'Il lui dit alors de se taire (archaïsant = le dijo).'],
      ],
      tip: 'L’adjectif antéposé n’ajoute pas d’information distinctive : il colore. « La blanca nieve » ne s’oppose à aucune autre neige.',
    },
    {
      title: 'Lexique littéraire',
      table: [
        ['acaso', 'peut-être ; ¿acaso…? = est-ce que par hasard… ?'],
        ['otrora', 'jadis, autrefois'],
        ['mas (sans accent)', 'mais (littéraire)'],
        ['empero', 'cependant (très soutenu)'],
        ['sendos, sendas', 'chacun un (Llevaban sendos paraguas.)'],
        ['por doquier', 'partout'],
        ['cuán', 'combien, comme (¡Cuán lejos queda!)'],
        ['yacer', 'gésir, être étendu'],
      ],
      tip: 'sendos ne veut pas dire « les deux » ni « énormes » : « Los dos hermanos llevaban sendos paraguas » = chacun portait un parapluie.',
    },
  ],
  exercises: exercises('es-c2-literario-2', 'C2', { kc: STYLE })
    .mcq('« Era un pobre hombre » signifie :', ['C’était un pauvre type (digne de pitié).', 'C’était un homme sans argent.', 'C’était un homme âgé.'], 0, 'Antéposé, pobre = digne de pitié ; postposé = sans argent.', { d: 2.2 })
    .mcq('¿Qué recuerda el narrador con más intensidad?', [
      'Las tardes en que su abuela le contaba historias', 'El día en que vendieron la casa', 'Los viajes que hizo de joven',
    ], 0, 'Le passage évoque « aquellas tardes en que la abuela, con su voz queda, desgranaba historias ».', {
      kc: LEX, d: 2.7,
      passage: 'Otrora se alzaba en aquella loma la casa de mis mayores, cuyas blancas paredes divisábanse desde el camino. Hoy apenas quedan unas piedras dispersas, y la hiedra crece por doquier. Mas no es la casa lo que añoro, sino aquellas tardes en que la abuela, con su voz queda, desgranaba historias mientras mis primos y yo, con sendas tazas de chocolate, la escuchábamos sin pestañear. ¡Cuán lejos quedan ya!',
    })
    .cloze('Los dos novios llegaron con ___ ramos de flores, uno cada uno.', ['sendos'], 'sendos = un pour chacun.', { kc: LEX, d: 2.5 })
    .cloze('Quiso protestar, ___ las palabras no le salían.', ['mas', 'pero', 'empero'], 'mas (sans accent) = pero, registre littéraire.', { kc: LEX, d: 2.3 })
    .type('Remets le pronom à sa place moderne : « Díjole que se fuera. » → « ___ dijo que se fuera. »', ['Le'], 'Enclise archaïsante sur un verbe conjugué : díjole = le dijo.', { d: 2.4 })
    .type('Adverbe littéraire signifiant « jadis » : « Esta plaza, ___ llena de vida, está hoy desierta. »', ['otrora', 'antaño'], 'otrora / antaño = autrefois.', { kc: LEX, d: 2.6 })
    .order('Les eaux paisibles du fleuve reflétaient la lune.', 'Las mansas aguas del río reflejaban la luna.', 'Épithète antéposée : las mansas aguas.', { distractors: ['tranquilas', 'reflejaba'], d: 2.3 })
    .tr('Est-ce que par hasard tu ne le savais pas ?', ['¿Acaso no lo sabías?', '¿Es que no lo sabías?', '¿Acaso tú no lo sabías?', '¿No lo sabías acaso?'],
      'acaso dans une question = « est-ce que par hasard », souvent rhétorique.', { kc: LEX, d: 2.4 })
    .tr('Les deux soldats portaient chacun un fusil.', ['Los dos soldados llevaban sendos fusiles.', 'Ambos soldados llevaban sendos fusiles.', 'Los dos soldados llevaban un fusil cada uno.', 'Cada uno de los dos soldados llevaba un fusil.', 'Los soldados llevaban sendos fusiles.'],
      'sendos fusiles = un fusil chacun.', { kc: LEX, d: 2.5 })
    .listen('En el silencio de la noche, solo se oía el lento murmullo de las oscuras aguas, que lamían con desgana los viejos muros del convento.', '¿Qué efecto produce la anteposición de los adjetivos?', [
      'Da un tono poético y subraya cualidades', 'Distingue unas aguas de otras', 'Indica que el texto es técnico',
    ], 0, 'lento murmullo, oscuras aguas, viejos muros : épithètes de nature, effet poétique.', { d: 2.5 })
    .listen('Yacía el caballero sobre la hierba, herido, mas no vencido, y con voz apenas audible pidió que avisaran a su hermano.', '¿Cómo estaba el caballero?', [
      'Tendido y herido, pero no derrotado', 'Muerto en el campo', 'De pie y furioso',
    ], 0, 'yacer = être étendu ; mas no vencido = mais pas vaincu.', { kc: LEX, d: 2.6 })
    .dictation('¡Cuán lejos quedan ya aquellos días de verano!', 'cuán = combien (exclamatif littéraire), avec accent.', { kc: LEX, d: 2.4 })
    .repeat('Otrora se alzaba en aquella loma la casa de mis mayores.', 'otrora, alzarse, mis mayores (mes aïeux) : registre littéraire.', { d: 2.4 })
    .say('C’était un grand écrivain, mais un homme bien seul.', [
      ...alt(['Era un gran escritor', 'Fue un gran escritor'], [', pero un hombre muy solo.', ', mas un hombre muy solo.', ', pero un hombre muy solitario.', ', pero un hombre bastante solo.']),
    ], 'gran antéposé = grand (valeur), grande postposé = grand (taille).', { d: 2.3 })
    .answer('Describe un paisaje que te guste con un estilo literario: adjetivos antepuestos y algún término culto.',
      'Al atardecer, las mansas aguas del lago reflejan las altas cumbres nevadas, y por doquier se extiende un silencio antiguo que solo rompe, de tarde en tarde, el canto lejano de algún pájaro.',
      'Épithètes antéposées (mansas aguas, altas cumbres) et lexique soutenu (por doquier).', {
        kc: [STYLE, LEX], keywords: [['mansas', 'altas', 'oscuras', 'blancas', 'viejos', 'viejas', 'lento', 'verdes', 'dorado', 'dorada'], ['por doquier', 'otrora', 'antaño', 'cuán', 'acaso', 'mas', 'sendos', 'yacía']], minWords: 22, d: 2.8,
      })
    .build(),
};
