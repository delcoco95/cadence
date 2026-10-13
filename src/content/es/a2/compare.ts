import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const COMP = 'es.a2.grammar.comparatives';
const SUP = 'es.a2.grammar.superlatives';
const IMP = 'es.a2.grammar.imperative_affirmative';

export const compare1: Lesson = {
  id: 'es-a2-compare-1',
  cefr: 'A2',
  unitId: 'es-a2-compare',
  title: 'Comparatifs et superlatifs',
  subtitle: 'Más grande que · tan caro como · el mejor de',
  kcIds: [COMP, SUP],
  estMinutes: 9,
  explanation: [
    {
      title: 'Comparer',
      body: 'Supériorité et infériorité : más / menos… que. Égalité : tan + adjectif ou adverbe + como, tanto, tanta, tantos, tantas + nom + como, verbe + tanto como.',
      table: [
        ['plus… que · moins… que', 'Madrid es más grande que Sevilla. Es menos caro que el otro.'],
        ['aussi… que', 'Es tan alto como su padre.'],
        ['autant de… que', 'Tengo tantos libros como tú.'],
        ['irréguliers', 'mejor, peor, mayor (plus âgé), menor (plus jeune)'],
      ],
      examples: [
        { en: 'El tren es más cómodo que el autobús.', fr: 'Le train est plus confortable que le bus.' },
        { en: 'Mi hermana es mayor que yo.', fr: 'Ma sœur est plus âgée que moi.' },
      ],
      tip: '« aussi… que » → tan… como (et non « que ») : tan caro como. Devant un nombre, « plus de » → más de : más de diez personas.',
    },
    {
      title: 'Le superlatif',
      body: 'Superlatif relatif : el, la, los, las + (nom) + más / menos + adjectif + de. Superlatif absolu : adjectif + -ísimo (très, extrêmement).',
      table: [
        ['relatif', 'la ciudad más bonita del mundo · el mejor restaurante de la ciudad'],
        ['absolu', 'guapo → guapísimo · bueno → buenísimo · rico → riquísimo · largo → larguísimo'],
      ],
      examples: [
        { en: 'Es el museo más visitado de España.', fr: 'C’est le musée le plus visité d’Espagne.' },
        { en: 'El gazpacho de tu madre está buenísimo.', fr: 'Le gazpacho de ta mère est délicieux.' },
      ],
      tip: 'On ne répète pas l’article : « la ciudad la más bonita » ✗ → « la ciudad más bonita » ✓. Et le complément se construit avec de, comme en français (« du monde » = del mundo).',
    },
  ],
  exercises: exercises('es-a2-compare-1', 'A2', { kc: COMP })
    .mcq('Madrid es ___ grande que Sevilla.', ['más', 'tan', 'tanto'], 0, 'Supériorité → más… que.', { d: -1.5 })
    .mcq('Mi hermano tiene treinta años y yo veinticinco: él es ___ que yo.', ['mayor', 'más viejo de', 'menor'], 0, 'Plus âgé → mayor que.', { d: -1.1 })
    .cloze('Este hotel es tan caro ___ el otro.', ['como'], 'Égalité → tan… como.', { d: -1.2 })
    .cloze('Es la playa más bonita ___ la región.', ['de'], 'Superlatif → de : la más bonita de la región.', { kc: SUP, d: -1.0 })
    .type('Écris le superlatif absolu de « rico » (masculin singulier).', ['riquísimo'], 'rico → riquísimo (c → qu devant i).', { kc: SUP, d: -0.9 })
    .type('Complète : « Hoy hace ___ calor como ayer. »', ['tanto'], 'Devant un nom (calor, masculin) → tanto… como.', { d: -0.8 })
    .order('C’est le meilleur restaurant de la ville.', 'Es el mejor restaurante de la ciudad.', 'mejor (irrégulier) + de.', { kc: SUP, distractors: ['más', 'en'], d: -1.0 })
    .tr('Le train est plus rapide que le bus.', ['El tren es más rápido que el autobús.', 'El tren es más rápido que el bus.'], 'más + adjectif + que.', { d: -1.3 })
    .tr('Ma sœur est la plus petite de la famille.', [
      'Mi hermana es la más pequeña de la familia.', 'Mi hermana es la menor de la familia.', 'Mi hermana es la más baja de la familia.',
    ], 'la más pequeña (ou la menor pour l’âge, la más baja pour la taille) + de.', { kc: SUP, d: -0.9 })
    .listen('Este piso es más barato que el otro, pero es mucho más pequeño y no tiene terraza.', 'Quel est l’inconvénient de cet appartement ?', ['Il est plus petit et sans terrasse', 'Il est plus cher', 'Il est loin du centre'], 0,
      'más barato (avantage), mucho más pequeño y no tiene terraza (inconvénients).', { d: -1.0 })
    .listen('De todas las ciudades que he visitado, Granada es la que más me ha gustado. La Alhambra es impresionante.', 'Quelle ville a-t-elle préférée ?', ['Grenade', 'Séville', 'Cordoue'], 0,
      'la que más me ha gustado = celle qui m’a le plus plu.', { kc: SUP, d: -0.9 })
    .dictation('Mi coche es menos moderno que el tuyo, pero gasta menos.', 'menos… que ; el tuyo.', { d: -0.9 })
    .repeat('Este gazpacho está buenísimo, el mejor del verano.', 'buenísimo (absolu) ; el mejor del (relatif).', { kc: SUP, d: -1.1 })
    .say('Je suis aussi {grand|grande} que mon père.', ['Soy tan alto como mi padre.', 'Soy tan alta como mi padre.', 'Yo soy tan alto como mi padre.', 'Yo soy tan alta como mi padre.'],
      'Égalité → tan + adjectif + como.', { d: -1.0 })
    .answer('Compara tu ciudad con otra ciudad que conoces.', 'Mi ciudad es más pequeña que Madrid, pero es más tranquila y tiene menos tráfico. La comida es tan buena como allí.',
      'más / menos… que, tan… como.', { keywords: [['más', 'menos', 'tan', 'tanto', 'mejor', 'peor']], minWords: 12, d: -0.7 })
    .build(),
};

export const compare2: Lesson = {
  id: 'es-a2-compare-2',
  cefr: 'A2',
  unitId: 'es-a2-compare',
  title: 'L’impératif affirmatif',
  subtitle: 'Habla, hablad, hable · dímelo, sentaos',
  kcIds: [IMP],
  estMinutes: 10,
  explanation: [
    {
      title: 'Les formes',
      body: 'tú : 3e personne du singulier du présent. vosotros : infinitif avec -d à la place du -r. usted, ustedes : on change de voyelle (-ar → -e, -er / -ir → -a).',
      table: [
        ['', 'hablar · comer · escribir'],
        ['tú', 'habla · come · escribe'],
        ['vosotros', 'hablad · comed · escribid'],
        ['usted', 'hable · coma · escriba'],
        ['ustedes', 'hablen · coman · escriban'],
        ['irréguliers (tú)', 'ten, ven, pon, sal, haz, di, ve, sé'],
      ],
      examples: [
        { en: 'Abrid el libro en la página diez.', fr: 'Ouvrez le livre à la page dix.' },
        { en: 'Siga todo recto y gire a la izquierda.', fr: 'Continuez tout droit et tournez à gauche.' },
      ],
      tip: 'Avec un inconnu (dans la rue, au magasin), on vouvoie avec usted : Perdone, siga recto. Le vosotros sert à tutoyer plusieurs personnes : « Ouvrez ! » à des amis → ¡Abrid!',
    },
    {
      title: 'Les pronoms se collent',
      body: 'À l’impératif affirmatif, les pronoms se collent au verbe, et un accent écrit apparaît souvent. Avec vosotros, le -d tombe devant os.',
      table: [
        ['tú', 'dime · cómpralo · siéntate · dámelo'],
        ['vosotros', 'sentaos · levantaos · decídmelo'],
        ['usted', 'siéntese · dígame'],
      ],
      examples: [
        { en: 'Llámame cuando llegues a casa.', fr: 'Appelle-moi quand tu arrives à la maison.' },
        { en: 'Chicos, sentaos, por favor.', fr: 'Les enfants, asseyez-vous, s’il vous plaît.' },
      ],
      tip: '« Asseyez-vous » à un groupe d’amis → sentaos (et non « sentados », qui veut dire « assis »).',
    },
  ],
  exercises: exercises('es-a2-compare-2', 'A2', { kc: IMP, tense: 'imperative' })
    .mcq('(tú) ___ la puerta, por favor, hace frío.', ['Cierra', 'Cierras', 'Cerrad'], 0, 'tú → 3e personne du présent : cierra.', { d: -1.2 })
    .mcq('Chicos, ___ los libros en la página veinte.', ['abrid', 'abrís', 'abre'], 0, 'vosotros → infinitif avec -d : abrid.', { d: -1.0 })
    .cloze('Perdone, ¿la estación? — ___ todo recto y gire a la derecha.', ['siga'], 'usted → siga (seguir), comme gire.', { hint: 'seguir, usted', d: -0.8 })
    .mcq('Quand l’entrée du Prado est-elle gratuite, d’après le texte ?', ['En fin d’après-midi, de 18 h à 20 h', 'Le matin', 'Le dimanche toute la journée'], 0,
      'de lunes a sábado, de seis a ocho de la tarde, la entrada es gratis.',
      {
        kc: [IMP, COMP], d: -0.8,
        passage: 'Consejos para tu primera visita a Madrid\nCompra la tarjeta de transporte en cualquier estación de metro: es más barata que los billetes sueltos. Visita el Museo del Prado por la tarde: de lunes a sábado, de seis a ocho, la entrada es gratis. Prueba el bocadillo de calamares en la Plaza Mayor y, si hace calor, descansa en el parque del Retiro. Y sobre todo, cena tarde, como los madrileños: antes de las nueve los restaurantes están vacíos.',
      })
    .type('Donne l’impératif de « hacer » pour « tú ».', ['haz'], 'hacer → haz (irrégulier).', { d: -1.0 })
    .type('Donne l’impératif de « sentarse » pour « vosotros ».', ['sentaos'], 'sentad + os → sentaos (le -d tombe).', { d: -0.6 })
    .order('Dis-moi la vérité.', 'Dime la verdad.', 'decir → di ; pronom collé : dime.', { distractors: ['me', 'Di'], d: -1.0 })
    .tr('Prenez un taxi, c’est plus rapide.', [
      'Tome un taxi, es más rápido.', 'Coja un taxi, es más rápido.', 'Tomen un taxi, es más rápido.', 'Cojan un taxi, es más rápido.',
      'Tomad un taxi, es más rápido.', 'Coged un taxi, es más rápido.',
    ], '« vous » → usted (tome), ustedes (tomen) ou vosotros (tomad).', { kc: [IMP, COMP], d: -0.7 })
    .tr('Appelle-moi ce soir.', ['Llámame esta noche.', 'Llámame esta tarde.'], 'Pronom collé + accent : llámame.', { d: -1.0 })
    .listen('Para llegar al hotel, sal de la estación, cruza la plaza y toma la segunda calle a la izquierda.', 'Quelle rue faut-il prendre ?', ['La deuxième à gauche', 'La première à droite', 'La deuxième à droite'], 0,
      'toma la segunda calle a la izquierda.', { d: -1.0 })
    .listen('Si te duele la garganta, bebe agua caliente con miel y descansa.', 'Quel conseil donne-t-on ?', ['Boire de l’eau chaude avec du miel', 'Aller chez le médecin', 'Prendre de l’aspirine'], 0,
      'bebe agua caliente con miel = bois de l’eau chaude avec du miel.', { d: -1.0 })
    .dictation('Pasad, sentaos y poneos cómodos.', 'vosotros : pasad ; sentaos, poneos (le -d tombe devant os).', { d: -0.6 })
    .repeat('Ten cuidado y escríbeme al llegar.', 'tener → ten ; escribe + me → escríbeme.', { d: -1.0 })
    .say('Viens ici !', ['Ven aquí.', 'Ven acá.'], 'venir → ven (irrégulier).', { d: -1.3 })
    .answer('Un amigo va a visitar tu ciudad. Dale tres consejos.', 'Visita el casco antiguo, prueba la comida típica en el mercado y pasea por el río al atardecer.',
      'Impératif tú : visita, prueba, pasea.', { keywords: [['visita', 'prueba', 'come', 'pasea', 've', 'toma', 'compra', 'haz', 'sube', 'bebe']], minWords: 10, d: -0.6 })
    .build(),
};
