import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const REFL = 'es.a1.verbs.reflexive';
const FREQ = 'es.a1.function.frequency';
const GUSTAR = 'es.a1.grammar.gustar';
const AGREE = 'es.a1.function.agree_disagree';

export const daily1: Lesson = {
  id: 'es-a1-daily-1',
  cefr: 'A1',
  unitId: 'es-a1-daily',
  title: 'Ma routine',
  subtitle: 'Me levanto, me ducho… · siempre, a veces, nunca',
  kcIds: [REFL, FREQ],
  estMinutes: 8,
  explanation: [
    {
      title: 'Les verbes pronominaux',
      body: 'Le pronom se place avant le verbe conjugué, ou s’attache à la fin de l’infinitif (Voy a ducharme).',
      table: [
        ['yo me levanto', 'nosotros nos levantamos'],
        ['tú te levantas', 'vosotros os levantáis'],
        ['él / ella / usted se levanta', 'ellos / ellas / ustedes se levantan'],
      ],
      examples: [
        { en: 'Me levanto a las siete.', fr: 'Je me lève à sept heures.' },
        { en: '¿A qué hora os acostáis?', fr: 'À quelle heure vous vous couchez ?' },
        { en: 'Me lavo los dientes.', fr: 'Je me brosse les dents.' },
      ],
      tip: 'Verbes courants : despertarse (ie), levantarse, ducharse, vestirse, acostarse (ue), llamarse. N’oublie pas le pronom : « Levanto a las siete » ✗ → « Me levanto » ✓. Avec les parties du corps, on met l’article, pas le possessif : los dientes.',
    },
    {
      title: 'La fréquence',
      table: [
        ['siempre', 'toujours'],
        ['normalmente · a menudo', 'normalement · souvent'],
        ['a veces', 'parfois'],
        ['casi nunca · nunca', 'presque jamais · jamais'],
        ['todos los días · una vez a la semana', 'tous les jours · une fois par semaine'],
      ],
      examples: [
        { en: 'Nunca bebo café.', fr: 'Je ne bois jamais de café.' },
        { en: 'No bebo nunca café.', fr: 'Je ne bois jamais de café.' },
      ],
      tip: 'nunca avant le verbe → pas de no : « Nunca no bebo » ✗. Après le verbe → no devant : « No bebo nunca ».',
    },
  ],
  exercises: exercises('es-a1-daily-1', 'A1', { kc: REFL })
    .cloze('Yo ___ levanto a las siete.', ['me'], 'yo → me levanto.', { d: -2.3 })
    .cloze('¿A qué hora ___ acostáis vosotros?', ['os'], 'vosotros → os acostáis.', { d: -1.7 })
    .mcq('Mi hermano ___ por la noche.', ['se ducha', 'me ducha', 'ducha'], 0, 'él → se ducha.', { d: -2.0 })
    .mcq('« Je ne bois jamais de café. »', ['Nunca bebo café.', 'Nunca no bebo café.', 'Bebo nunca café.'], 0,
      'nunca avant le verbe, sans no.', { kc: FREQ, d: -1.8 })
    .type('Conjugue despertarse au présent avec yo.', ['me despierto', 'yo me despierto'], 'e → ie et pronom me : me despierto.', { d: -1.6 })
    .type('Écris le contraire de « siempre ».', ['nunca', 'jamás'], 'siempre (toujours) ≠ nunca (jamais).', { kc: FREQ, loose: true, d: -2.2 })
    .order('Je me brosse les dents après le petit-déjeuner.', 'Me lavo los dientes después del desayuno.', 'Article et non possessif : los dientes.', { distractors: ['mis'], d: -1.6 })
    .tr('Nous nous levons tôt.', ['Nos levantamos temprano.', 'Nosotros nos levantamos temprano.', 'Nosotras nos levantamos temprano.', 'Nos levantamos pronto.'],
      'nosotros → nos levantamos ; tôt = temprano (ou pronto en Espagne).', { d: -1.8 })
    .tr('Je vais parfois à la salle de sport.', ['A veces voy al gimnasio.', 'Voy al gimnasio a veces.', 'A veces yo voy al gimnasio.'], 'a veces = parfois.', { kc: FREQ, d: -1.7 })
    .listen('Normalmente me despierto a las siete, me ducho y desayuno en casa.', 'Où prend-il son petit-déjeuner ?', ['À la maison', 'Au bureau', 'Au café'], 0,
      'desayuno en casa = je prends mon petit-déjeuner à la maison.', { d: -1.7 })
    .listen('Los domingos casi nunca me levanto antes de las diez.', 'Que fait-il le dimanche ?', ['Il se lève presque toujours après 10 h', 'Il se lève tôt', 'Il travaille le matin'], 0,
      'casi nunca… antes de las diez = presque jamais avant dix heures.', { kc: [FREQ, REFL], d: -1.6 })
    .dictation('Siempre me acuesto a las once.', 'acostarse → me acuesto (o → ue).', { kc: [REFL, FREQ], d: -1.7 })
    .repeat('Me levanto, me ducho y me visto en diez minutos.', 'me + verbe, trois fois.', { d: -1.9 })
    .say('À quelle heure tu te lèves ?', ['¿A qué hora te levantas?', '¿A qué hora te levantas tú?', '¿Tú a qué hora te levantas?'], 'tú → te levantas.', { d: -1.8 })
    .say('Je ne regarde jamais la télé.', ['Nunca veo la tele.', 'No veo nunca la tele.', 'Nunca veo la televisión.', 'No veo nunca la televisión.'],
      'nunca + verbe, ou no + verbe + nunca. ver → veo.', { kc: FREQ, d: -1.6 })
    .build(),
};

export const daily2: Lesson = {
  id: 'es-a1-daily-2',
  cefr: 'A1',
  unitId: 'es-a1-daily',
  title: 'Ce que j’aime',
  subtitle: 'Me gusta, me gustan · a mí también, a mí tampoco',
  kcIds: [GUSTAR, AGREE],
  estMinutes: 8,
  explanation: [
    {
      title: 'gustar',
      body: 'gustar fonctionne comme « plaire » : la chose aimée est le sujet. gusta + nom singulier ou infinitif, gustan + nom pluriel.',
      table: [
        ['(a mí) me gusta / gustan', 'j’aime'],
        ['(a ti) te gusta / gustan', 'tu aimes'],
        ['(a él, a ella, a usted) le gusta / gustan', 'il, elle aime · vous aimez'],
        ['(a nosotros) nos gusta / gustan', 'nous aimons'],
        ['(a vosotros) os gusta / gustan', 'vous aimez'],
        ['(a ellos, a ellas, a ustedes) les gusta / gustan', 'ils, elles aiment · vous aimez'],
      ],
      examples: [
        { en: 'Me gusta el café.', fr: 'J’aime le café.' },
        { en: 'Me gustan los gatos.', fr: 'J’aime les chats.' },
        { en: 'A mi padre le gusta cocinar.', fr: 'Mon père aime cuisiner.' },
        { en: 'Me encanta viajar.', fr: 'J’adore voyager.' },
      ],
      tip: '« Yo gusto el chocolate » ✗ → « Me gusta el chocolate » ✓. Et l’article défini reste : « Me gusta café » ✗. encantar (adorer) se construit de la même façon.',
    },
    {
      title: 'Réagir',
      table: [
        ['Me gusta… → A mí también.', 'Moi aussi.'],
        ['Me gusta… → A mí no.', 'Pas moi.'],
        ['No me gusta… → A mí tampoco.', 'Moi non plus.'],
        ['No me gusta… → A mí sí.', 'Moi si.'],
      ],
      examples: [
        { en: 'Me encanta el cine. — A mí también.', fr: 'J’adore le cinéma. — Moi aussi.' },
        { en: 'No me gusta el pescado. — A mí tampoco.', fr: 'Je n’aime pas le poisson. — Moi non plus.' },
      ],
      tip: 'Après une phrase négative, « moi non plus » = a mí tampoco, jamais « a mí también ».',
    },
  ],
  exercises: exercises('es-a1-daily-2', 'A1', { kc: GUSTAR })
    .mcq('Me ___ los gatos.', ['gustan', 'gusta', 'gusto'], 0, 'los gatos est pluriel → gustan.', { d: -2.0 })
    .cloze('A mi padre ___ gusta el fútbol.', ['le'], 'a mi padre → le gusta.', { d: -1.8 })
    .mcq('« No me gusta el pescado. » — « Moi non plus. »', ['A mí tampoco.', 'A mí también.', 'A mí sí.'], 0,
      'Après une négation : a mí tampoco.', { kc: AGREE, d: -1.6 })
    .type('Complète avec gustar : A nosotros nos ___ las películas de terror.', ['gustan'], 'las películas est pluriel → gustan.', { d: -1.7 })
    .type('Quel pronom ? A ellos ___ gusta viajar.', ['les'], 'a ellos → les gusta.', { d: -1.7 })
    .order('J’aime beaucoup la musique espagnole.', 'Me gusta mucho la música española.', 'me gusta + mucho ; article défini devant música.', { distractors: ['gusto'], d: -1.7 })
    .tr('Elle n’aime pas les tomates.', ['No le gustan los tomates.', 'A ella no le gustan los tomates.'], 'no + le gustan + los tomates.', { d: -1.6 })
    .tr('J’adore voyager.', ['Me encanta viajar.', 'A mí me encanta viajar.'], 'encantar se construit comme gustar : me encanta + infinitif.', { d: -1.8 })
    .listen('¿Te gusta el flamenco? — Sí, mucho. — Pues a mí no.', 'La troisième réplique : aime-t-elle le flamenco ?', ['Non', 'Oui, beaucoup', 'Un peu'], 0,
      'a mí no = pas moi.', { kc: AGREE, d: -1.6 })
    .listen('A mis hijos les encantan los videojuegos, pero no les gusta leer.', 'Qu’est-ce que les enfants n’aiment pas ?', ['Lire', 'Les jeux vidéo', 'Le sport'], 0,
      'no les gusta leer = ils n’aiment pas lire.', { d: -1.6 })
    .mcq('Qu’est-ce qu’Andrés n’aime pas ?', ['Les tâches ménagères', 'Cuisiner', 'Le padel'], 0,
      'no me gustan nada las tareas de casa = je n’aime pas du tout les tâches ménagères.',
      { kc: [GUSTAR, 'es.a1.verbs.reflexive'], passage: 'Me llamo Andrés y vivo en Gijón. Entre semana me levanto a las seis y media porque trabajo en un hospital. Por la tarde, a veces juego al pádel con mis amigos. Me gusta mucho cocinar, pero no me gustan nada las tareas de casa. Los fines de semana nunca me levanto temprano.', d: -1.6 })
    .dictation('Nos gustan mucho las fiestas de verano.', 'las fiestas est pluriel → nos gustan.', { d: -1.6 })
    .repeat('Me gusta el café, pero me gustan más los zumos.', 'gusta (singulier) puis gustan (pluriel).', { d: -1.9 })
    .say('Moi non plus. (réponse à « No me gusta el café »)', ['A mí tampoco.', 'Yo tampoco.'], 'Après une négation → a mí tampoco.', { kc: AGREE, d: -1.7 })
    .say('Tu aimes le chocolat ?', ['¿Te gusta el chocolate?', '¿A ti te gusta el chocolate?'], 'te gusta + el chocolate.', { d: -1.9 })
    .build(),
};
