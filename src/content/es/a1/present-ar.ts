import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const AR = 'es.a1.verbs.present_ar';
const NEG = 'es.a1.grammar.negation';
const Q = 'es.a1.grammar.questions';
const QW = 'es.a1.grammar.question_words';

export const presentAr1: Lesson = {
  id: 'es-a1-present-ar-1',
  cefr: 'A1',
  unitId: 'es-a1-present-ar',
  title: 'Le présent des verbes en -ar',
  subtitle: 'Hablo, trabajas, escucha… · la négation avec no',
  kcIds: [AR, NEG],
  estMinutes: 8,
  explanation: [
    {
      title: 'Conjugaison : hablar (parler)',
      body: 'On enlève -ar et on ajoute la terminaison. Elle suffit à indiquer la personne.',
      table: [
        ['yo hablo', 'nosotros hablamos'],
        ['tú hablas', 'vosotros habláis'],
        ['él / ella / usted habla', 'ellos / ellas / ustedes hablan'],
      ],
      examples: [
        { en: 'Trabajo en un hospital.', fr: 'Je travaille dans un hôpital.' },
        { en: '¿Habláis inglés?', fr: 'Vous parlez anglais ?' },
        { en: 'Mi madre escucha la radio.', fr: 'Ma mère écoute la radio.' },
      ],
      tip: 'Verbes courants : trabajar (travailler), estudiar (étudier), escuchar (écouter), comprar (acheter), cocinar (cuisiner), necesitar (avoir besoin de), buscar (chercher), tomar (prendre). Le pronom sujet est facultatif : « Trabajo », pas forcément « Yo trabajo ».',
    },
    {
      title: 'La négation : no',
      body: 'no se place juste avant le verbe. Il n’y a pas de deuxième mot comme « pas ».',
      examples: [
        { en: 'No hablo alemán.', fr: 'Je ne parle pas allemand.' },
        { en: '¿Fumas? — No, no fumo.', fr: 'Tu fumes ? — Non, je ne fume pas.' },
      ],
      tip: '« Hablo no » ✗ → « No hablo » ✓. Pour répondre, on dit souvent deux fois no : le premier = « non », le second = « ne… pas ».',
    },
  ],
  exercises: exercises('es-a1-present-ar-1', 'A1', { kc: AR })
    .cloze('Yo ___ en un hospital.', ['trabajo'], 'yo → -o : trabajo.', { hint: 'trabajar', d: -2.4 })
    .cloze('Vosotros ___ muy bien español.', ['habláis'], 'vosotros → -áis : habláis.', { hint: 'hablar', d: -1.8 })
    .mcq('Mi madre ___ la radio por la mañana.', ['escucha', 'escuchas', 'escucho'], 0, 'Mi madre = ella → escucha.', { d: -2.0 })
    .mcq('« Je ne parle pas allemand. »', ['No hablo alemán.', 'Hablo no alemán.', 'No hablo no alemán.'], 0,
      'no avant le verbe, et rien après.', { kc: NEG, d: -2.2 })
    .type('Conjugue estudiar au présent avec nosotros.', ['estudiamos', 'nosotros estudiamos'], 'nosotros → -amos : estudiamos.', { d: -2.0 })
    .type('Conjugue cocinar au présent avec ellos.', ['cocinan', 'ellos cocinan'], 'ellos → -an : cocinan.', { d: -2.0 })
    .order('Nous ne travaillons pas le samedi.', 'No trabajamos los sábados.', 'no + verbe ; los sábados = le samedi (chaque samedi).', { kc: [NEG, AR], distractors: ['trabajan'], d: -1.8 })
    .tr('Tu parles anglais ?', ['¿Hablas inglés?', '¿Tú hablas inglés?'], 'tú → hablas ; la question garde l’ordre de la phrase.', { d: -2.2 })
    .tr('Elle ne fume pas.', ['No fuma.', 'Ella no fuma.'], 'no + fuma.', { kc: NEG, d: -2.2 })
    .listen('Trabajo en una tienda y estudio inglés por la noche.', 'Que fait-il le soir ?', ['Il étudie l’anglais', 'Il travaille dans un magasin', 'Il fait la cuisine'], 0,
      'estudio inglés por la noche = j’étudie l’anglais le soir.', { d: -1.8 })
    .listen('¿Cocinas tú? — No, no cocino nunca. Cocina mi pareja.', 'Qui fait la cuisine ?', ['Son ou sa partenaire', 'Lui-même', 'Personne'], 0,
      'No cocino nunca = je ne cuisine jamais ; mi pareja = mon compagnon ou ma compagne.', { kc: [NEG, AR], d: -1.7 })
    .dictation('Mis amigos hablan francés y español.', 'ellos → hablan.', { d: -1.9 })
    .repeat('No hablo muy bien, pero escucho mucho.', 'no avant le verbe ; escucho : la syllabe forte est cu.', { kc: [NEG, AR], d: -2.0 })
    .say('Je cherche la gare.', ['Busco la estación.', 'Yo busco la estación.', 'Estoy buscando la estación.'], 'buscar → busco (sans préposition : chercher quelque chose).', { d: -2.0 })
    .say('Je n’ai pas besoin d’aide, merci.', ['No necesito ayuda, gracias.', 'No necesito ayuda, muchas gracias.'], 'necesitar + nom, sans « de ».', { kc: [NEG, AR], d: -1.8 })
    .build(),
};

export const presentAr2: Lesson = {
  id: 'es-a1-present-ar-2',
  cefr: 'A1',
  unitId: 'es-a1-present-ar',
  title: 'Poser des questions',
  subtitle: '¿…? · qué, dónde, cuándo, cómo, cuánto, por qué',
  kcIds: [Q, QW],
  estMinutes: 8,
  explanation: [
    {
      title: 'Les questions fermées',
      body: 'On garde l’ordre de la phrase affirmative et on monte la voix à la fin. On peut aussi placer le sujet après le verbe. À l’écrit : ¿ au début, ? à la fin.',
      examples: [
        { en: '¿Trabajas aquí?', fr: 'Tu travailles ici ?' },
        { en: '¿Habla usted francés?', fr: 'Vous parlez français ?' },
      ],
      tip: 'Pas d’équivalent de « est-ce que » : « ¿Es que trabajas aquí? » ✗ → « ¿Trabajas aquí? » ✓.',
    },
    {
      title: 'Les mots interrogatifs',
      body: 'Ils portent toujours un accent écrit et se placent en tête ; le sujet vient après le verbe.',
      table: [
        ['¿qué?', 'que, quoi, quel'],
        ['¿quién? ¿quiénes?', 'qui'],
        ['¿dónde?', 'où'],
        ['¿cuándo?', 'quand'],
        ['¿cómo?', 'comment'],
        ['¿cuánto, cuánta, cuántos, cuántas?', 'combien (s’accorde avec le nom)'],
        ['¿por qué? → porque', 'pourquoi ? → parce que'],
      ],
      examples: [
        { en: '¿Dónde trabaja tu hermana?', fr: 'Où travaille ta sœur ?' },
        { en: '¿Cuántos hermanos tienes?', fr: 'Combien de frères et sœurs as-tu ?' },
        { en: '¿Por qué estudias español? — Porque trabajo en Madrid.', fr: 'Pourquoi tu étudies l’espagnol ? — Parce que je travaille à Madrid.' },
      ],
      tip: '¿Por qué? s’écrit en deux mots avec accent ; la réponse porque, en un mot, sans accent.',
    },
  ],
  exercises: exercises('es-a1-present-ar-2', 'A1', { kc: QW })
    .mcq('¿___ estudias español? — Porque trabajo en Madrid.', ['Por qué', 'Porque', 'Qué'], 0,
      'Question « pourquoi » → por qué (deux mots, accent).', { d: -2.0 })
    .cloze('¿___ hermanos tienes?', ['Cuántos'], 'hermanos est masculin pluriel → cuántos.', { hint: 'combien', d: -1.8 })
    .mcq('Comment écrire « Tu travailles ici ? »', ['¿Trabajas aquí?', '¿Es que trabajas aquí?', '¿Qué trabajas aquí?'], 0,
      'Même ordre que l’affirmation, entre ¿ et ? ; pas de « est-ce que ».', { kc: Q, d: -2.0 })
    .type('Écris le mot interrogatif « quand ».', ['cuándo'], 'cuándo, avec accent écrit dans une question.', { d: -2.2 })
    .type('Écris « Qui est-ce ? » en espagnol.', ['¿Quién es?'], 'quién = qui ; es = c’est.', { d: -2.0 })
    .order('Où travaille ta sœur ?', '¿Dónde trabaja tu hermana?', 'Mot interrogatif + verbe + sujet.', { distractors: ['trabajas'], d: -1.8 })
    .tr('Vous parlez français ? (à un inconnu, poliment)', ['¿Habla usted francés?', '¿Usted habla francés?', '¿Habla francés?'],
      'Vouvoiement → usted habla.', { kc: Q, d: -1.9 })
    .tr('Combien coûte le billet ?', ['¿Cuánto cuesta el billete?', '¿Cuánto vale el billete?', '¿Cuánto cuesta la entrada?', '¿Cuánto vale la entrada?'],
      'el billete = billet de transport ; la entrada = billet de spectacle.', { d: -1.7 })
    .listen('¿A qué hora llega el tren de Valencia?', 'Que demande-t-elle ?', ['L’heure d’arrivée du train', 'Le prix du billet', 'Le quai du train'], 0,
      '¿A qué hora llega…? = à quelle heure arrive… ?', { d: -1.8 })
    .listen('¿Usted trabaja aquí? — Sí, ¿qué necesita?', 'Que fait la personne qui répond ?', ['Elle dit qu’elle travaille ici et propose son aide', 'Elle dit qu’elle ne travaille pas ici', 'Elle cherche un travail'], 0,
      'Sí, ¿qué necesita? = oui, de quoi avez-vous besoin ?', { kc: Q, d: -1.7 })
    .mcq('Pourquoi Claire étudie-t-elle l’espagnol ?', ['Pour son travail avec des clients de Séville', 'Parce qu’elle habite à Séville', 'Pour voyager en Amérique du Sud'], 0,
      'Porque trabaja con clientes de Sevilla = parce qu’elle travaille avec des clients de Séville.',
      { passage: 'Escuela de idiomas Sol · Ficha de inscripción\n¿Cómo se llama? Claire Dubois.\n¿De dónde es? De Nantes, Francia.\n¿Qué idiomas habla? Francés e inglés.\n¿Por qué estudia español? Porque trabaja con clientes de Sevilla.', d: -1.7 })
    .dictation('¿Cuándo llegáis a Madrid?', 'cuándo avec accent ; vosotros → llegáis.', { kc: [QW, Q], d: -1.7 })
    .repeat('¿Qué estudias y dónde trabajas?', 'La voix monte à la fin de la question.', { kc: [QW, Q], d: -2.0 })
    .say('Comment ça s’écrit ?', ['¿Cómo se escribe?'], '¿Cómo se escribe? : formule très utile pour épeler un nom.', { d: -1.8 })
    .say('Qu’est-ce que tu cherches ?', ['¿Qué buscas?', '¿Tú qué buscas?', '¿Qué estás buscando?'], 'Qu’est-ce que… ? → ¿Qué…? tout simplement.', { kc: [QW, Q], d: -1.8 })
    .build(),
};
