import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const DEF = 'es.a1.grammar.definite_articles';
const ALDEL = 'es.a1.grammar.al_del';
const HAY = 'es.a1.grammar.hay';
const ESTAR = 'es.a1.grammar.estar_location';

export const articles1: Lesson = {
  id: 'es-a1-articles-1',
  cefr: 'A1',
  unitId: 'es-a1-articles',
  title: 'el, la, los, las',
  subtitle: 'L’article défini et les contractions al, del',
  kcIds: [DEF, ALDEL],
  estMinutes: 8,
  explanation: [
    {
      title: 'L’article défini',
      table: [
        ['', 'singulier', 'pluriel'],
        ['masculin', 'el libro', 'los libros'],
        ['féminin', 'la casa', 'las casas'],
      ],
      examples: [
        { en: 'el hotel y la estación', fr: 'l’hôtel et la gare' },
        { en: 'Las llaves están en la mesa.', fr: 'Les clés sont sur la table.' },
        { en: 'El agua está fría.', fr: 'L’eau est froide.' },
      ],
      tip: 'Pas d’élision en espagnol : « l’hôtel » → el hotel, « l’amie » → la amiga. Exception à connaître : les noms féminins qui commencent par un a accentué prennent el au singulier (el agua, el aula) mais restent féminins (el agua fría).',
    },
    {
      title: 'Les contractions al et del',
      body: 'Il n’existe que deux contractions : a + el = al, de + el = del. Avec la, los, las, rien ne change.',
      table: [
        ['a + el → al', 'Voy al cine. (au cinéma)'],
        ['de + el → del', 'la casa del profesor (du professeur)'],
        ['a la, a los, a las', 'Voy a la playa. · a los niños (aux enfants)'],
        ['de la, de los, de las', 'el coche de los vecinos (des voisins)'],
      ],
      examples: [
        { en: 'Es el coche del profesor.', fr: 'C’est la voiture du professeur.' },
        { en: 'Voy al mercado con mi madre.', fr: 'Je vais au marché avec ma mère.' },
      ],
      tip: 'Ne confonds pas el (article, sans accent) et él (pronom « il ») : el libro de él = son livre à lui.',
    },
  ],
  exercises: exercises('es-a1-articles-1', 'A1', { kc: DEF })
    .cloze('___ agua está muy fría.', ['El'], 'agua est féminin, mais commence par un a accentué : el agua (et fría reste au féminin).', { d: -1.7 })
    .cloze('Es el coche ___ profesor.', ['del'], 'de + el = del.', { kc: ALDEL, d: -2.0 })
    .cloze('Voy ___ museo con Ana.', ['al'], 'a + el = al.', { kc: ALDEL, d: -2.0 })
    .mcq('« C’est la maison des voisins. »', ['Es la casa de los vecinos.', 'Es la casa del vecinos.', 'Es la casa dels vecinos.'], 0,
      'del n’existe qu’au masculin singulier. Au pluriel : de los.', { kc: ALDEL, d: -1.8 })
    .type('Écris l’article défini : ___ manos', ['las'], 'mano est féminin : la mano, las manos.', { d: -1.8 })
    .type('Écris l’article défini : ___ hotel (l’hôtel)', ['el'], 'Pas d’élision : el hotel.', { d: -2.2 })
    .order('La gare est près du centre.', 'La estación está cerca del centro.', 'cerca de + el centro → cerca del centro.', { kc: [DEF, ALDEL], distractors: ['al'], d: -1.8 })
    .tr('le livre de l’étudiante', ['el libro de la estudiante', 'el libro de la alumna'], 'de + la ne se contracte pas : de la estudiante.', { d: -1.9 })
    .tr('Je vais au marché.', ['Voy al mercado.', 'Yo voy al mercado.'], 'a + el mercado → al mercado.', { kc: ALDEL, d: -1.8 })
    .listen('Las llaves están en la mesa del salón.', 'Où sont les clés ?', ['Sur la table du salon', 'Dans la cuisine', 'Sur le canapé'], 0,
      'en la mesa del salón = sur la table du salon.', { d: -1.8 })
    .listen('Perdone, ¿el autobús al aeropuerto?', 'Que cherche la personne ?', ['Le bus pour l’aéroport', 'Le bus pour la gare', 'Un taxi pour l’aéroport'], 0,
      'al aeropuerto = a + el aeropuerto.', { kc: ALDEL, d: -1.8 })
    .dictation('El libro del profesor está en la mesa.', 'el libro, del profesor (de + el), la mesa.', { kc: [DEF, ALDEL], d: -1.8 })
    .repeat('El hotel está al lado de la estación.', 'hotel : h muet ; al lado de = à côté de.', { kc: [DEF, ALDEL], d: -2.0 })
    .say('les amis de Pedro', ['los amigos de Pedro'], 'amigo est masculin pluriel → los amigos.', { d: -2.2 })
    .say('la voiture du père', ['el coche del padre'], 'coche est masculin (el coche) ; de + el padre → del padre.', { kc: [DEF, ALDEL], d: -1.8 })
    .build(),
};

export const articles2: Lesson = {
  id: 'es-a1-articles-2',
  cefr: 'A1',
  unitId: 'es-a1-articles',
  title: 'hay et estar',
  subtitle: 'Il y a… · Où est… ? · situer dans l’espace',
  kcIds: [HAY, ESTAR],
  estMinutes: 8,
  explanation: [
    {
      title: 'hay : il y a',
      body: 'hay est invariable. Il présente quelque chose de nouveau, non identifié : avec un, una, unos, unas, un nombre, mucho, ou un nom sans article.',
      examples: [
        { en: 'Hay un banco en la plaza.', fr: 'Il y a une banque sur la place.' },
        { en: '¿Hay una farmacia por aquí?', fr: 'Il y a une pharmacie par ici ?' },
        { en: 'No hay pan.', fr: 'Il n’y a pas de pain.' },
      ],
      tip: 'Jamais d’article défini après hay : « Hay el banco » ✗. Pour une chose précise, on demande où elle est avec estar : « ¿Dónde está el banco? »',
    },
    {
      title: 'estar pour situer',
      table: [
        ['yo estoy', 'nosotros estamos'],
        ['tú estás', 'vosotros estáis'],
        ['él / ella / usted está', 'ellos / ellas / ustedes están'],
      ],
      body: 'Pour dire où se trouve une personne ou une chose connue, on utilise estar (et non ser). Repères : cerca de (près de), lejos de (loin de), al lado de (à côté de), enfrente de (en face de), entre (entre), en (dans, sur).',
      examples: [
        { en: '¿Dónde está la estación?', fr: 'Où est la gare ?' },
        { en: 'El cine está al lado de la plaza.', fr: 'Le cinéma est à côté de la place.' },
        { en: '¿Dónde están los servicios?', fr: 'Où sont les toilettes ?' },
      ],
      tip: 'Quelque chose d’indéfini → hay un… ; quelque chose de défini → el… está. « Hay un museo en el centro » mais « El museo está en el centro ».',
    },
  ],
  exercises: exercises('es-a1-articles-2', 'A1', { kc: HAY })
    .mcq('El Museo del Prado ___ en Madrid.', ['está', 'hay', 'es'], 0, 'Situer un lieu précis → estar : está en Madrid.', { kc: ESTAR, d: -2.0 })
    .cloze('Perdone, ¿___ una farmacia por aquí?', ['hay'], 'une pharmacie (indéfini) → hay.', { d: -2.0 })
    .cloze('¿Dónde ___ los servicios?', ['están'], 'los servicios (défini, pluriel) → están. En Espagne, los servicios ou el baño = les toilettes.', { kc: ESTAR, d: -1.8 })
    .type('Conjugue estar au présent avec nosotros.', ['estamos', 'nosotros estamos'], 'nosotros estamos.', { kc: ESTAR, d: -2.0 })
    .type('Conjugue estar au présent avec vosotros.', ['estáis', 'vosotros estáis'], 'vosotros estáis, avec un accent sur le á.', { kc: ESTAR, d: -1.8 })
    .mcq('Qu’est-ce qu’il n’y a pas dans sa rue ?', ['Un cinéma', 'Une boulangerie', 'Un supermarché'], 0,
      'No hay cine = il n’y a pas de cinéma, mais il est tout près.',
      { passage: 'Vivo en un barrio tranquilo de Salamanca. En mi calle hay una panadería, un bar y dos supermercados. No hay cine, pero el cine está cerca, al lado de la plaza Mayor. La estación de tren está un poco lejos.', d: -1.7 })
    .order('La banque est à côté de la pharmacie.', 'El banco está al lado de la farmacia.', 'La banque (définie) → está ; al lado de = à côté de.', { kc: ESTAR, distractors: ['hay'], d: -1.8 })
    .tr('Il n’y a pas de pain.', ['No hay pan.', 'No queda pan.'], 'No hay + nom sans article.', { d: -1.8 })
    .tr('Où est la gare ?', ['¿Dónde está la estación?', '¿Dónde está la estación de tren?'], 'la gare (définie) → ¿Dónde está…?', { kc: ESTAR, d: -2.0 })
    .listen('Hay un supermercado enfrente del hotel, pero la farmacia está lejos.', 'Qu’est-ce qui est en face de l’hôtel ?', ['Un supermarché', 'La pharmacie', 'Une banque'], 0,
      'enfrente del hotel = en face de l’hôtel. La pharmacie est loin.', { kc: [HAY, ESTAR], d: -1.7 })
    .listen('¿Los servicios? Están al fondo, a la derecha.', 'Où sont les toilettes ?', ['Au fond, à droite', 'Au fond, à gauche', 'À l’étage'], 0,
      'al fondo = au fond ; a la derecha = à droite.', { kc: ESTAR, d: -1.7 })
    .dictation('Hay muchos bares en esta calle.', 'hay + muchos bares (sans article défini).', { d: -1.8 })
    .repeat('¿Hay un cajero automático cerca de aquí?', 'un cajero automático = un distributeur de billets. La jota de cajero est raclée.', { d: -2.0 })
    .say('Il y a un problème.', ['Hay un problema.'], 'hay + un problema (masculin).', { d: -2.2 })
    .say('Où sont les clés ?', ['¿Dónde están las llaves?'], 'Des clés précises → están. llaves : ll comme « y ».', { kc: ESTAR, d: -1.9 })
    .build(),
};
