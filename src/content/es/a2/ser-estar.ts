import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const SER = 'es.a2.grammar.ser_uses';
const EST = 'es.a2.grammar.estar_uses';
const ADJ = 'es.a2.grammar.ser_estar_adjectives';
const HAY = 'es.a2.grammar.hay_esta';

export const serEstar1: Lesson = {
  id: 'es-a2-ser-estar-1',
  cefr: 'A2',
  unitId: 'es-a2-ser-estar',
  title: 'Ser ou estar : les grands emplois',
  subtitle: 'Soy profesor, estoy cansado, estamos en Madrid',
  kcIds: [SER, EST],
  estMinutes: 9,
  explanation: [
    {
      title: 'ser : ce que l’on est',
      body: 'ser définit : identité, nationalité et origine, profession, caractère, description physique, matière, possession, heure et date.',
      table: [
        ['présent', 'soy · eres · es · somos · sois · son'],
        ['identité, origine', 'Soy Ana. Somos de Lyon.'],
        ['profession', 'Mi padre es enfermero.'],
        ['caractère, description', 'Es simpática y muy alta.'],
        ['matière, possession', 'La mesa es de madera. El coche es de Juan.'],
        ['heure, date', 'Son las tres. Hoy es lunes.'],
      ],
      examples: [
        { en: 'Somos franceses, pero vivimos en Barcelona.', fr: 'Nous sommes français, mais nous vivons à Barcelone.' },
        { en: 'Este verano soy camarero en un hotel.', fr: 'Cet été, je suis serveur dans un hôtel.' },
      ],
      tip: 'La profession se dit toujours avec ser, même si le travail est temporaire, et sans article : « Soy un médico » ✗ → « Soy médico » ✓.',
    },
    {
      title: 'estar : comment et où l’on est',
      body: 'estar situe et décrit un état : lieu, état physique ou émotionnel, résultat d’un changement, et les adverbes bien / mal.',
      table: [
        ['présent', 'estoy · estás · está · estamos · estáis · están'],
        ['lieu', 'Estamos en la playa. Sevilla está en Andalucía.'],
        ['état, humeur', 'Estoy cansada. Están nerviosos.'],
        ['bien / mal', '¿Qué tal estás? — Estoy bien.'],
      ],
      examples: [
        { en: 'Mis padres están de vacaciones en Asturias.', fr: 'Mes parents sont en vacances dans les Asturies.' },
        { en: 'La ventana está abierta.', fr: 'La fenêtre est ouverte.' },
      ],
      tip: 'Le lieu se dit toujours avec estar, même pour une ville ou un pays : « Madrid es en España » ✗ → « Madrid está en España » ✓.',
    },
  ],
  exercises: exercises('es-a2-ser-estar-1', 'A2', { kc: SER, tense: 'present' })
    .mcq('Mi hermana ___ médica en un hospital de Sevilla.', ['es', 'está', 'hay'], 0, 'Profession → ser : es médica (sans article).', { d: -1.5 })
    .mcq('¿Dónde ___ las llaves del coche?', ['están', 'son', 'hay'], 0, 'Localisation d’objets précis (las llaves) → estar : están.', { kc: EST, d: -1.4 })
    .cloze('Hoy no quiero salir: ___ muy cansado.', ['estoy'], 'État passager → estar : estoy cansado.', { kc: EST, hint: 'yo', d: -1.4 })
    .cloze('La mesa del comedor ___ de madera.', ['es'], 'Matière → ser de : es de madera.', { hint: 'ser ou estar', d: -1.2 })
    .type('Conjugue estar au présent avec « nosotros ».', ['estamos'], 'estar : estoy, estás, está, estamos, estáis, están.', { kc: EST, d: -1.5 })
    .type('Complète avec ser ou estar conjugué : « Vosotros ___ franceses, ¿verdad? »', ['sois'], 'Nationalité → ser ; vosotros sois (sans accent).', { d: -1.0 })
    .order('Mes parents sont à la maison.', 'Mis padres están en casa.', 'Lieu → estar : están en casa.', { kc: EST, distractors: ['son'], d: -1.2 })
    .tr('Nous sommes {contents|contentes} parce que c’est vendredi.', [
      'Estamos contentos porque es viernes.', 'Estamos contentas porque es viernes.',
      'Nosotros estamos contentos porque es viernes.', 'Nosotras estamos contentas porque es viernes.',
      'Estamos contentos porque hoy es viernes.', 'Estamos contentas porque hoy es viernes.',
    ], 'Humeur → estar (estamos contentos) ; le jour → ser (es viernes).', { kc: [EST, SER], d: -0.9 })
    .tr('Madrid est au centre de l’Espagne.', ['Madrid está en el centro de España.', 'Madrid se encuentra en el centro de España.'],
      'Situer une ville → estar, jamais ser.', { kc: EST, d: -1.0 })
    .listen('Hola, soy Lucía. Soy de Valencia, pero ahora estoy en Londres por trabajo.', 'Où est Lucía en ce moment ?', ['À Londres', 'À Valence', 'À Madrid'], 0,
      'Soy de Valencia = origine (ser) ; estoy en Londres = lieu actuel (estar).', { kc: [SER, EST], d: -1.2 })
    .listen('¿Qué tal está tu madre? — Está mejor, gracias, pero todavía está en el hospital.', 'Comment va sa mère ?', ['Mieux, mais elle est encore à l’hôpital', 'Très mal, elle est à l’hôpital', 'Bien, elle est sortie de l’hôpital'], 0,
      'Está mejor = elle va mieux ; todavía está en el hospital = elle est encore à l’hôpital.', { kc: EST, d: -1.0 })
    .dictation('Mi novio es muy simpático, pero hoy está de mal humor.', 'Caractère → es simpático ; humeur du jour → está de mal humor.', { kc: [SER, EST], d: -0.9 })
    .repeat('Somos de Bilbao, pero estamos de vacaciones en Málaga.', 'Origine avec ser, situation du moment avec estar (estar de vacaciones).', { kc: [SER, EST], d: -1.3 })
    .say('Où es-tu ?', ['¿Dónde estás?', '¿Dónde estás tú?', '¿Tú dónde estás?'], 'Lieu → estar : ¿Dónde estás?', { kc: EST, d: -1.4 })
    .answer('Preséntate: ¿quién eres, de dónde eres y cómo estás hoy?', 'Soy Marc, soy francés y soy profesor. Hoy estoy un poco cansado, pero estoy contento.',
      'Identité, origine et métier avec ser (soy) ; état du jour avec estar (estoy).', { kc: [SER, EST], keywords: [['soy', 'es'], ['estoy', 'está']], minWords: 10, d: -0.7 })
    .build(),
};

export const serEstar2: Lesson = {
  id: 'es-a2-ser-estar-2',
  cefr: 'A2',
  unitId: 'es-a2-ser-estar',
  title: 'Adjectifs piégés · hay ou está',
  subtitle: 'Es listo / está listo · ¿Dónde hay una farmacia?',
  kcIds: [ADJ, HAY],
  estMinutes: 9,
  explanation: [
    {
      title: 'Un adjectif, deux sens',
      body: 'Avec ser, l’adjectif décrit une qualité ; avec estar, un état ou une impression du moment. Certains adjectifs changent alors de sens.',
      table: [
        ['ser listo · estar listo', 'être intelligent · être prêt'],
        ['ser aburrido · estar aburrido', 'être ennuyeux · s’ennuyer'],
        ['ser malo · estar malo', 'être méchant, mauvais · être malade'],
        ['ser rico · estar rico', 'être riche · être délicieux'],
        ['ser verde · estar verde', 'être vert (couleur) · ne pas être mûr'],
      ],
      examples: [
        { en: 'Tu hijo es muy listo.', fr: 'Ton fils est très intelligent.' },
        { en: '¿Estás listo? Nos vamos.', fr: 'Tu es prêt ? On y va.' },
        { en: 'Esta tortilla está muy rica.', fr: 'Cette omelette est délicieuse.' },
      ],
      tip: '« Je m’ennuie » se dit Estoy aburrido / aburrida. « Soy aburrido » veut dire « je suis ennuyeux » !',
    },
    {
      title: 'hay ou está / están',
      body: 'hay (il y a, invariable) signale l’existence de quelque chose de non identifié. está / están situe quelque chose de précis, déjà connu.',
      table: [
        ['hay + un, una, unos, des nombres, mucho, sans article', 'Hay una farmacia en esta calle. Hay dos bancos.'],
        ['el, la, los, las, mi, tu, un nom propre + está / están', 'La farmacia está en esta calle. Mis gafas están aquí.'],
      ],
      examples: [
        { en: '¿Hay un supermercado cerca?', fr: 'Il y a un supermarché près d’ici ?' },
        { en: '¿Dónde está el supermercado?', fr: 'Où est le supermarché ?' },
      ],
      tip: 'Jamais d’article défini après hay : « Hay el metro aquí » ✗ → « El metro está aquí » ✓.',
    },
  ],
  exercises: exercises('es-a2-ser-estar-2', 'A2', { kc: ADJ, tense: 'present' })
    .mcq('Esta paella ___ muy rica.', ['está', 'es', 'hay'], 0, 'estar rico = être délicieux (goût du plat qu’on mange).', { d: -1.0 })
    .mcq('En mi barrio ___ dos supermercados y un mercado.', ['hay', 'están', 'son'], 0, 'Existence + nombre → hay.', { kc: HAY, d: -1.4 })
    .cloze('Venga, nos vamos. ¿___ listos?', ['estáis'], 'estar listo = être prêt ; vosotros → estáis.', { hint: 'vosotros', d: -0.9 })
    .mcq('Qu’est-ce qui se trouve à dix minutes à pied ?', ['Le supermarché', 'La cathédrale', 'La pharmacie'], 0,
      'El supermercado está un poco más lejos, a diez minutos andando.',
      {
        kc: HAY, d: -0.9,
        passage: 'Apartamento en el centro de Granada\nEl piso está en una calle tranquila, a cinco minutos de la catedral. Es pequeño pero muy luminoso. En el salón hay un sofá cama y una televisión. La cocina está completamente equipada. Cerca del edificio hay dos bares y una farmacia. El supermercado está un poco más lejos, a diez minutos andando.',
      })
    .type('Complète avec ser ou estar conjugué : « Mi primo saca muy buenas notas, ___ muy listo. »', ['es'], 'Qualité (intelligent) → ser listo.', { d: -1.0 })
    .type('Corrige la phrase : « Hay el banco al lado del hotel. »', ['El banco está al lado del hotel.', 'Al lado del hotel está el banco.'],
      'el banco est précis → está ; hay ne prend jamais l’article défini.', { kc: HAY, loose: true, d: -0.8 })
    .order('Il y a une pharmacie près d’ici ?', '¿Hay una farmacia cerca de aquí?', 'Existence d’un lieu non identifié → hay una.', { kc: HAY, distractors: ['está'], d: -1.1 })
    .tr('Le film est ennuyeux et je m’ennuie.', [
      'La película es aburrida y estoy aburrido.', 'La película es aburrida y estoy aburrida.',
      'La película es aburrida y yo estoy aburrido.', 'La película es aburrida y yo estoy aburrida.',
      'La película es aburrida y me aburro.', 'La película es aburrida y yo me aburro.',
    ], 'ser aburrido = ennuyeux ; estar aburrido = s’ennuyer.', { d: -0.7 })
    .tr('Où sont les toilettes, s’il vous plaît ?', [
      '¿Dónde están los servicios, por favor?', '¿Dónde están los aseos, por favor?', '¿Dónde están los baños, por favor?',
      '¿Dónde está el baño, por favor?', '¿Dónde está el servicio, por favor?', '¿Dónde está el aseo, por favor?',
    ], 'Objet précis (les toilettes) → está / están.', { kc: HAY, d: -1.0 })
    .listen('Perdone, ¿hay un cajero por aquí? — Sí, hay uno en la plaza, al lado del banco.', 'Où est le distributeur ?', ['Sur la place, à côté de la banque', 'À l’intérieur de la banque', 'Il n’y en a pas dans le quartier'], 0,
      'hay uno en la plaza = il y en a un sur la place ; al lado del banco = à côté de la banque.', { kc: HAY, d: -1.0 })
    .listen('Mi abuela está muy bien para su edad: es muy activa y siempre está de buen humor.', 'Comment est la grand-mère ?', ['Active et de bonne humeur', 'Malade et fatiguée', 'Sérieuse et un peu triste'], 0,
      'es muy activa = caractère ; está de buen humor = humeur.', { d: -0.9 })
    .dictation('En la nevera hay leche, pero los huevos están en la mesa.', 'hay leche (existence) ; los huevos están (objets précis).', { kc: HAY, d: -0.8 })
    .repeat('El café está frío y la sopa está muy salada.', 'Impression du moment (température, goût) → estar.', { d: -1.2 })
    .say('Je suis {prêt|prête}.', ['Estoy listo.', 'Estoy lista.', 'Ya estoy listo.', 'Ya estoy lista.', 'Yo estoy listo.', 'Yo estoy lista.', 'Estoy preparado.', 'Estoy preparada.'],
      'Être prêt → estar listo (ser listo = être intelligent).', { d: -1.2 })
    .answer('¿Cómo es tu barrio? ¿Qué hay cerca de tu casa?', 'Mi barrio es tranquilo y bastante bonito. Cerca de mi casa hay una panadería, un parque y una estación de metro.',
      'Description avec ser (es tranquilo), existence avec hay (hay una panadería).', { kc: [HAY, SER], keywords: [['es'], ['hay']], minWords: 12, d: -0.7 })
    .build(),
};
