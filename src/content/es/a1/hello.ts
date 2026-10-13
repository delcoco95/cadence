import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const SOUNDS = 'es.a1.pronunciation.sounds';
const GREET = 'es.a1.function.greetings';
const PRON = 'es.a1.grammar.subject_pronouns';
const SER = 'es.a1.grammar.ser_present';

export const hello1: Lesson = {
  id: 'es-a1-hello-1',
  cefr: 'A1',
  unitId: 'es-a1-hello',
  title: 'Saluer et se présenter',
  subtitle: 'Hola, buenos días, me llamo… · les sons de l’espagnol',
  kcIds: [GREET, SOUNDS],
  estMinutes: 8,
  explanation: [
    {
      title: 'Saluer, prendre congé, se présenter',
      table: [
        ['Hola', 'salut, bonjour (à tout moment)'],
        ['Buenos días', 'bonjour (jusqu’au déjeuner, vers 14 h)'],
        ['Buenas tardes', 'bonjour, bonsoir (l’après-midi, jusqu’à 20-21 h)'],
        ['Buenas noches', 'bonsoir (en arrivant le soir), bonne nuit'],
        ['Adiós · Hasta luego · Hasta mañana', 'au revoir · à plus tard · à demain'],
        ['Me llamo… · ¿Cómo te llamas?', 'je m’appelle… · comment tu t’appelles ?'],
        ['Encantado / Encantada · Mucho gusto', 'enchanté / enchantée'],
      ],
      examples: [
        { en: '¡Hola! ¿Qué tal?', fr: 'Salut ! Ça va ?' },
        { en: 'Buenos días. Me llamo Lucía. ¿Y tú?', fr: 'Bonjour. Je m’appelle Lucía. Et toi ?' },
        { en: 'Encantado, Lucía.', fr: 'Enchanté, Lucía.' },
      ],
      tip: 'À l’écrit, une question ou une exclamation s’ouvre aussi par un signe à l’envers : ¿Qué tal? ¡Hola! Et « Buenos días » est toujours au pluriel.',
    },
    {
      title: 'Les sons à connaître',
      body: 'L’espagnol se lit presque comme il s’écrit : toutes les lettres se prononcent, y compris le e final (noche se dit « notché »). L’accent écrit indique la syllabe forte : café, también.',
      table: [
        ['j, et g devant e / i', 'son raclé au fond de la gorge (la jota) : jamón, Jorge, gente'],
        ['g devant a / o / u', 'g dur comme dans « gare » : gato, amigo'],
        ['ll', 'comme « y » dans « yoyo » : me llamo, calle'],
        ['ñ', 'comme « gn » dans « montagne » : España, mañana'],
        ['c devant e / i, et z', 'langue entre les dents, comme le « th » anglais (en Espagne) : gracias, cero, zumo'],
        ['r · rr et r initial', 'r roulé bref : pero (mais) · roulé long : perro (chien), Roma'],
        ['h · v · ch', 'h muet : hola · v se prononce b : vale · ch = « tch » : noche'],
      ],
      examples: [
        { en: 'Me llamo Jorge y vivo en España.', fr: 'Je m’appelle Jorge et j’habite en Espagne.' },
        { en: 'Gracias, hasta mañana.', fr: 'Merci, à demain.' },
      ],
      tip: 'Le e se prononce toujours « é » et le s final s’entend : « noches » se dit « notchés », « gracias » à peu près « grathiass ». Le h ne se prononce jamais : « hasta » se dit « asta ».',
    },
  ],
  exercises: exercises('es-a1-hello-1', 'A1', { kc: GREET })
    .mcq('Il est 10 h du matin. Tu entres dans une boutique. Tu dis :', ['Buenos días.', 'Buenas noches.', 'Buenas tardes.'], 0,
      'Le matin, jusqu’au déjeuner : Buenos días.', { d: -2.6 })
    .cloze('¡Hola! Me ___ Pablo.', ['llamo'], 'Me llamo… = je m’appelle…', { hint: 's’appeler', d: -2.5 })
    .mcq('Dans « gente », le g se prononce comme…', ['la jota, un son raclé', 'le g de « gâteau »', 'le j de « jour »'], 0,
      'Devant e et i, le g se prononce comme la jota : gente, Gibraltar.', { kc: SOUNDS, d: -2.2 })
    .mcq('Quel mot contient le son « gn » de « montagne » ?', ['mañana', 'llamo', 'gracias'], 0,
      'ñ se prononce « gn » : mañana, España.', { kc: SOUNDS, d: -2.4 })
    .type('Comment dit-on « merci » en espagnol ?', ['gracias', 'muchas gracias'], 'gracias = merci ; muchas gracias = merci beaucoup.', { loose: true, d: -2.7 })
    .type('Écris « au revoir » en espagnol.', ['adiós', 'hasta luego', 'hasta pronto'], 'adiós = au revoir ; hasta luego = à plus tard, très courant en Espagne.', { loose: true, d: -2.5 })
    .order('Bonjour, je m’appelle Marta.', 'Hola, me llamo Marta.', 'me llamo : le pronom me se place avant le verbe.', { distractors: ['llama'], d: -2.4 })
    .tr('Bonjour, ça va ?', ['Hola, ¿qué tal?', 'Buenos días, ¿qué tal?', 'Hola, ¿cómo estás?', 'Buenos días, ¿cómo estás?', 'Hola, ¿cómo está?', 'Buenos días, ¿cómo está?', 'Hola, ¿cómo está usted?', 'Buenos días, ¿cómo está usted?'],
      '¿Qué tal? est la formule la plus courante ; ¿Cómo estás? (tú) ou ¿Cómo está usted? (vouvoiement).', { d: -2.3 })
    .tr('{Enchanté|Enchantée} !', ['¡Encantado!', '¡Encantada!', '¡Mucho gusto!'],
      'Un homme dit encantado, une femme encantada ; mucho gusto convient à tout le monde.', { d: -2.2 })
    .listen('Buenas tardes. Me llamo Carmen. ¿Y tú?', 'Comment s’appelle la femme ?', ['Carmen', 'Carla', 'Marta'], 0,
      'Me llamo Carmen = je m’appelle Carmen.', { d: -2.6 })
    .listen('Adiós, ¡hasta mañana!', 'Quand vont-ils se revoir ?', ['Demain', 'Ce soir', 'La semaine prochaine'], 0,
      'Hasta mañana = à demain.', { d: -2.4 })
    .dictation('Buenas noches, hasta mañana.', 'Buenas noches (bonsoir, bonne nuit) ; hasta mañana (à demain). Le h de hasta est muet.', { d: -2.0 })
    .repeat('Me llamo Jorge y vivo en España.', 'Jorge : deux jotas raclées ; ll comme « y » ; ñ comme « gn ».', { kc: SOUNDS, d: -2.1 })
    .say('Bonsoir, comment tu t’appelles ?', ['Buenas noches, ¿cómo te llamas?', 'Buenas tardes, ¿cómo te llamas?', 'Hola, buenas noches, ¿cómo te llamas?', 'Hola, buenas tardes, ¿cómo te llamas?'],
      'Bonsoir → buenas tardes (avant 20-21 h) ou buenas noches ; tu → ¿cómo te llamas?', { d: -2.0 })
    .repeat('Necesito un zumo de naranja, por favor.', 'En Espagne, le c de necesito et le z de zumo se prononcent langue entre les dents.', { kc: SOUNDS, d: -2.0 })
    .build(),
};

export const hello2: Lesson = {
  id: 'es-a1-hello-2',
  cefr: 'A1',
  unitId: 'es-a1-hello',
  title: 'Pronoms sujets et verbe ser',
  subtitle: 'Yo soy, tú eres… · dire qui on est, d’où l’on vient, ce qu’on fait',
  kcIds: [PRON, SER],
  estMinutes: 8,
  explanation: [
    {
      title: 'Les pronoms sujets',
      body: 'La terminaison du verbe indique déjà la personne : on omet le plus souvent le pronom (Soy francés). On l’emploie pour insister ou opposer (Yo soy francés, ella es española).',
      table: [
        ['yo', 'je'],
        ['tú · usted', 'tu · vous (politesse, une personne)'],
        ['él · ella', 'il · elle'],
        ['nosotros · nosotras', 'nous (groupe mixte ou masculin · féminin)'],
        ['vosotros · vosotras', 'vous (plusieurs personnes que l’on tutoie)'],
        ['ellos · ellas · ustedes', 'ils · elles · vous (politesse, plusieurs personnes)'],
      ],
      examples: [
        { en: 'Soy Marie. ¿Y tú?', fr: 'Je suis Marie. Et toi ?' },
        { en: '¿Usted es el señor Ruiz?', fr: 'Vous êtes monsieur Ruiz ?' },
      ],
      tip: 'Le « vous » français a trois traductions : vosotros (des amis, de la famille), usted (une personne que l’on vouvoie), ustedes (plusieurs personnes que l’on vouvoie). usted et ustedes se conjuguent comme él et ellos.',
    },
    {
      title: 'Le verbe ser (être)',
      body: 'ser sert à dire l’identité, la nationalité, l’origine (ser de…) et la profession.',
      table: [
        ['yo soy', 'nosotros / nosotras somos'],
        ['tú eres', 'vosotros / vosotras sois'],
        ['él / ella / usted es', 'ellos / ellas / ustedes son'],
      ],
      examples: [
        { en: 'Soy francesa, de Lyon.', fr: 'Je suis française, de Lyon.' },
        { en: '¿De dónde eres?', fr: 'D’où es-tu ?' },
        { en: 'Somos estudiantes.', fr: 'Nous sommes étudiants.' },
        { en: 'Ella es médica.', fr: 'Elle est médecin.' },
      ],
      tip: 'Pas d’article devant une profession : « Soy un profesor » ✗ → « Soy profesor » ✓. Les nationalités s’écrivent sans majuscule : francés, francesa.',
    },
  ],
  exercises: exercises('es-a1-hello-2', 'A1', { kc: SER })
    .cloze('¿Tú ___ español?', ['eres'], 'tú → eres.', { hint: 'ser', d: -2.4 })
    .mcq('Tu parles à deux amis : « Vous êtes français ? »', ['¿Sois franceses?', '¿Son franceses?', '¿Es francés?'], 0,
      'Des amis que l’on tutoie → vosotros sois.', { kc: [PRON, SER], d: -2.0 })
    .mcq('Tu parles poliment à une dame âgée : « Vous êtes de Séville ? »', ['¿Es usted de Sevilla?', '¿Eres de Sevilla?', '¿Sois de Sevilla?'], 0,
      'Vouvoiement d’une personne → usted, conjugué comme él : es.', { kc: [PRON, SER], d: -1.9 })
    .type('Conjugue ser au présent avec ellos.', ['son', 'ellos son'], 'ellos / ellas / ustedes son.', { d: -2.3 })
    .type('Quel pronom sujet remplace « Marta y Lucía » ?', ['ellas'], 'Deux femmes → ellas. Un groupe mixte → ellos.', { kc: PRON, d: -2.2 })
    .mcq('Qu’est-ce qu’Elena fait comme métier ?', ['Elle est médecin', 'Elle est ingénieure', 'Elle est professeure'], 0,
      'Ella es médica = elle est médecin. C’est Thomas qui est ingénieur.',
      { passage: 'Hola, me llamo Thomas. Soy francés, de Burdeos, y soy ingeniero. Mi amiga se llama Elena. Ella es española, de Valencia, y es médica. Somos compañeros de piso.', d: -1.8 })
    .order('Vous êtes de Barcelone ? (à des amis)', '¿Vosotros sois de Barcelona?', 'vosotros → sois ; ser de + ville = être de.', { kc: [PRON, SER], distractors: ['son'], d: -1.9 })
    .tr('Je suis {français|française}.', ['Soy francés.', 'Soy francesa.', 'Yo soy francés.', 'Yo soy francesa.'],
      'Soy francés (homme), soy francesa (femme). Le pronom yo est facultatif.', { d: -2.2 })
    .tr('Elle est médecin.', ['Es médica.', 'Ella es médica.', 'Es médico.', 'Ella es médico.', 'Es doctora.', 'Ella es doctora.'],
      'Profession sans article : es médica.', { d: -2.0 })
    .listen('¿De dónde sois? — Somos de Toulouse, en Francia.', 'D’où viennent-ils ?', ['De Toulouse', 'De Tolède', 'De Lyon'], 0,
      'Somos de Toulouse = nous sommes de Toulouse.', { d: -2.0 })
    .listen('Perdone, ¿es usted el señor García?', 'Comment la femme s’adresse-t-elle à M. García ?', ['Elle le vouvoie', 'Elle le tutoie', 'Elle parle de lui à quelqu’un d’autre'], 0,
      'Perdone et usted : c’est le vouvoiement. usted se conjugue comme él (es).', { kc: PRON, d: -1.8 })
    .dictation('Somos estudiantes de español.', 'nosotros → somos ; estudiantes de español.', { d: -2.0 })
    .repeat('Soy de Francia, pero vivo en Madrid.', 'pero : r bref ; vivo se dit « bibo ».', { d: -2.2 })
    .say('Tu es d’où ?', ['¿De dónde eres?', '¿De dónde eres tú?', '¿Tú de dónde eres?'], '¿De dónde eres? : la préposition de se place en tête.', { kc: [PRON, SER], d: -1.9 })
    .say('Nous sommes étudiants.', ['Somos estudiantes.', 'Nosotros somos estudiantes.', 'Nosotras somos estudiantes.'], 'nosotros → somos, et pas d’article.', { d: -2.2 })
    .build(),
};
