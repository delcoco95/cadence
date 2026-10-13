import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const NUM = 'es.a1.vocabulary.numbers';
const HOUR = 'es.a1.function.telling_time';
const DAYS = 'es.a1.vocabulary.days_months';
const PREP = 'es.a1.grammar.prepositions_time';

export const time1: Lesson = {
  id: 'es-a1-time-1',
  cefr: 'A1',
  unitId: 'es-a1-time',
  title: 'Les nombres et l’heure',
  subtitle: 'De cero a cien · ¿Qué hora es?',
  kcIds: [NUM, HOUR],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les nombres',
      table: [
        ['0-10', 'cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez'],
        ['11-15', 'once, doce, trece, catorce, quince'],
        ['16-29 (en un mot)', 'dieciséis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, veintidós, veintitrés…'],
        ['dizaines', 'treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien'],
        ['31-99 (avec y)', 'treinta y uno, cuarenta y cinco, noventa y nueve'],
      ],
      examples: [
        { en: 'Son cuarenta y ocho euros.', fr: 'Ça fait quarante-huit euros.' },
        { en: 'Tengo veintiún años.', fr: 'J’ai vingt et un ans.' },
      ],
      tip: 'Pas de calcul à la française : 70 = setenta, 80 = ochenta, 90 = noventa. Devant un nom masculin, uno devient un : veintiún años, treinta y un euros.',
    },
    {
      title: 'Dire l’heure',
      table: [
        ['¿Qué hora es?', 'Quelle heure est-il ?'],
        ['Es la una. · Son las dos.', 'Il est une heure. · Il est deux heures.'],
        ['y cuarto · y media', 'et quart · et demie'],
        ['menos cuarto · menos diez', 'moins le quart · moins dix'],
        ['de la mañana · de la tarde · de la noche', 'du matin · de l’après-midi · du soir'],
        ['¿A qué hora…? — A las ocho.', 'À quelle heure… ? — À huit heures.'],
      ],
      examples: [
        { en: 'Son las tres y media.', fr: 'Il est trois heures et demie.' },
        { en: 'Son las cinco menos cuarto.', fr: 'Il est cinq heures moins le quart.' },
      ],
      tip: 'L’article est obligatoire : « Son tres » ✗ → « Son las tres » ✓. Une heure est au singulier : Es la una. Après la demie, on compte à partir de l’heure suivante : 4 h 40 = las cinco menos veinte.',
    },
  ],
  exercises: exercises('es-a1-time-1', 'A1', { kc: NUM })
    .mcq('Comment dit-on 80 ?', ['ochenta', 'ochocientos', 'dieciocho'], 0, '80 = ochenta (ochocientos = 800, dieciocho = 18).', { d: -2.0 })
    .type('Écris en lettres : 17', ['diecisiete'], '16 à 19 s’écrivent en un mot : dieci- + chiffre.', { loose: true, d: -1.8 })
    .type('Écris en lettres : 45', ['cuarenta y cinco'], 'À partir de 31 : dizaine + y + chiffre.', { loose: true, d: -1.7 })
    .mcq('« Il est une heure. »', ['Es la una.', 'Son la una.', 'Es una hora.'], 0, 'Une heure → singulier : es la una.', { kc: HOUR, d: -2.0 })
    .cloze('Son las tres y ___.', ['media'], 'et demie = y media.', { kc: HOUR, hint: '3 h 30', d: -2.2 })
    .mcq('4 h 45 :', ['Son las cinco menos cuarto.', 'Son las cuatro menos cuarto.', 'Es la cinco menos cuarto.'], 0,
      'Après la demie, on part de l’heure suivante : cinq heures moins le quart.', { kc: HOUR, d: -1.7 })
    .order('Le cours commence à neuf heures et demie.', 'La clase empieza a las nueve y media.', 'à + heure → a las…', { kc: HOUR, distractors: ['en'], d: -1.7 })
    .tr('Quelle heure est-il ?', ['¿Qué hora es?', '¿Qué hora tienes?', '¿Tienes hora?', '¿Qué hora tiene?', '¿Tiene hora?'],
      '¿Qué hora es? ; pour le demander à quelqu’un : ¿Tienes hora? (tú), ¿Tiene hora? (usted).', { kc: HOUR, d: -2.2 })
    .tr('J’ai vingt et un ans.', ['Tengo veintiún años.', 'Tengo 21 años.', 'Yo tengo veintiún años.'], 'veintiuno → veintiún devant años.', { d: -1.7 })
    .listen('Son cuarenta y ocho euros, por favor.', 'Combien faut-il payer ?', ['48 €', '58 €', '84 €'], 0, 'cuarenta y ocho = 48.', { d: -1.8 })
    .listen('El tren a Málaga sale a las siete y cuarto.', 'À quelle heure part le train ?', ['7 h 15', '7 h 45', '6 h 45'], 0,
      'a las siete y cuarto = à sept heures et quart.', { kc: HOUR, d: -1.8 })
    .dictation('Son las once menos veinte.', '10 h 40 = onze heures moins vingt.', { kc: HOUR, d: -1.7 })
    .repeat('Doce, trece, catorce, quince, dieciséis.', 'c devant e / i : langue entre les dents.', { d: -2.2 })
    .say('Il est deux heures et quart.', ['Son las dos y cuarto.'], 'son las dos + y cuarto.', { kc: HOUR, d: -2.0 })
    .say('Ça fait soixante-dix euros.', ['Son setenta euros.', 'Setenta euros.'], '70 = setenta.', { d: -1.8 })
    .build(),
};

export const time2: Lesson = {
  id: 'es-a1-time-2',
  cefr: 'A1',
  unitId: 'es-a1-time',
  title: 'Jours, mois et moments',
  subtitle: 'El lunes, en julio, por la mañana, a las ocho',
  kcIds: [DAYS, PREP],
  estMinutes: 8,
  explanation: [
    {
      title: 'Jours, mois, moments de la journée',
      table: [
        ['jours (masculins)', 'lunes, martes, miércoles, jueves, viernes, sábado, domingo'],
        ['mois', 'enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre'],
        ['moments', 'por la mañana, a mediodía, por la tarde, por la noche'],
      ],
      examples: [
        { en: 'Hoy es lunes.', fr: 'Aujourd’hui, on est lundi.' },
        { en: 'El lunes voy al médico.', fr: 'Lundi (ce lundi-là), je vais chez le médecin.' },
        { en: 'Los lunes trabajo.', fr: 'Le lundi (chaque lundi), je travaille.' },
      ],
      tip: 'Jours et mois s’écrivent sans majuscule. el lunes = ce lundi-là ; los lunes = tous les lundis.',
    },
    {
      title: 'Situer dans le temps',
      table: [
        ['a las + heure', 'a las ocho (à huit heures)'],
        ['el + jour · el + date', 'el viernes · el 14 de julio'],
        ['en + mois, année, saison', 'en julio, en 2025, en verano'],
        ['por la + moment', 'por la mañana, por la tarde, por la noche'],
        ['de… a…', 'de lunes a viernes, de nueve a cinco'],
      ],
      examples: [
        { en: 'Mi cumpleaños es el 3 de marzo.', fr: 'Mon anniversaire est le 3 mars.' },
        { en: 'Nos vamos de vacaciones en agosto.', fr: 'Nous partons en vacances en août.' },
      ],
      tip: '« le matin » → por la mañana (« en la mañana » s’entend en Amérique latine, pas en Espagne). Et « à 8 h » → a las ocho, avec l’article.',
    },
  ],
  exercises: exercises('es-a1-time-2', 'A1', { kc: PREP })
    .cloze('La tienda abre ___ las diez.', ['a'], 'à + heure → a las diez.', { d: -2.0 })
    .cloze('Hoy es lunes, mañana es ___.', ['martes'], 'Après lunes vient martes.', { kc: DAYS, d: -2.2 })
    .mcq('Trabajo ___ lunes a viernes.', ['de', 'en', 'por'], 0, 'du… au… → de… a…', { d: -1.8 })
    .type('Écris « mercredi » en espagnol.', ['miércoles'], 'miércoles, avec un accent sur le é.', { kc: DAYS, d: -1.8 })
    .type('Complète : Estudio ___ la tarde. (l’après-midi)', ['por'], 'Moment de la journée → por la tarde.', { d: -1.8 })
    .order('Le samedi matin, je vais au marché.', 'Los sábados por la mañana voy al mercado.', 'Habitude → los sábados ; le matin → por la mañana.', { kc: [PREP, DAYS], distractors: ['en'], d: -1.6 })
    .tr('Mon anniversaire est le 3 mars.', ['Mi cumpleaños es el 3 de marzo.', 'Mi cumpleaños es el tres de marzo.'], 'Date : el + jour + de + mois.', { kc: [PREP, DAYS], d: -1.7 })
    .tr('On se voit vendredi soir.', ['Nos vemos el viernes por la noche.', 'Nos vemos el viernes por la tarde.'], 'el viernes (ce vendredi-là) + por la noche.', { d: -1.7 })
    .listen('El museo abre de martes a domingo, de diez de la mañana a ocho de la tarde. Los lunes está cerrado.', 'Quand le musée est-il fermé ?', ['Le lundi', 'Le dimanche', 'Le mardi'], 0,
      'Los lunes está cerrado = il est fermé le lundi.', { kc: [PREP, DAYS], d: -1.7 })
    .listen('Nos vamos de vacaciones en agosto, como siempre.', 'Quand partent-ils en vacances ?', ['En août', 'En avril', 'En octobre'], 0,
      'agosto = août (abril = avril).', { kc: DAYS, d: -1.8 })
    .mcq('Le samedi, la bibliothèque est ouverte…', ['de 10 h à 14 h', 'de 9 h à 21 h', 'toute la journée'], 0, 'Sábados, de 10:00 a 14:00.',
      { passage: 'Biblioteca municipal · Horario\nDe lunes a viernes: de 9:00 a 21:00.\nSábados: de 10:00 a 14:00.\nDomingos y festivos: cerrado.\nEn agosto: solo por la mañana.', d: -1.7 })
    .dictation('El sábado por la noche cenamos en casa de Pablo.', 'el sábado (ce samedi-là), por la noche.', { d: -1.6 })
    .repeat('Enero, febrero, marzo, abril, mayo y junio.', 'Le j de junio est une jota raclée ; le r de enero et febrero est bref.', { kc: DAYS, d: -2.3 })
    .say('Le lundi, je travaille.', ['Los lunes trabajo.', 'Trabajo los lunes.', 'Los lunes yo trabajo.', 'Yo trabajo los lunes.'], 'Chaque lundi → los lunes.', { kc: [PREP, DAYS], d: -1.7 })
    .say('à huit heures du matin', ['a las ocho de la mañana'], 'a las + heure + de la mañana.', { kc: [PREP, HOUR], d: -2.0 })
    .build(),
};
