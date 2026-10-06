import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const IDIOM = 'c2.figurative.idioms';
const META = 'c2.figurative.metaphor';
const UNDER = 'c2.figurative.understatement';
const EUPH = 'c2.figurative.euphemism';

export const figurativeUnit: Unit = {
  id: 'c2-figurative',
  cefr: 'C2',
  title: 'Langage imagé et implicite',
  description: 'Expressions idiomatiques, métaphores, litote, ironie et euphémisme : comprendre ce qui est dit sans être dit.',
  lessonIds: ['c2-figurative-1', 'c2-figurative-2'],
  canDo: [
    'Je peux comprendre et employer à propos des expressions idiomatiques et des métaphores courantes.',
    'Je peux percevoir l’ironie, la litote et l’euphémisme, et les utiliser pour nuancer mon propos.',
  ],
};

export const figurative1: Lesson = {
  id: 'c2-figurative-1',
  cefr: 'C2',
  unitId: 'c2-figurative',
  title: 'Expressions idiomatiques et métaphores',
  subtitle: 'Back to square one, food for thought, shoot down an idea',
  kcIds: [IDIOM, META],
  estMinutes: 10,
  explanation: [
    {
      title: 'Des idiomes à connaître',
      table: [
        ['a blessing in disguise', 'un mal pour un bien'],
        ['the elephant in the room', 'le sujet que tout le monde évite'],
        ['cut corners', 'bâcler pour gagner du temps ou de l’argent'],
        ['bite off more than you can chew', 'avoir les yeux plus gros que le ventre'],
        ['back to square one', 'retour à la case départ'],
        ['a storm in a teacup', 'une tempête dans un verre d’eau'],
        ['on the same page', 'sur la même longueur d’onde'],
        ['reinvent the wheel', 'réinventer la roue'],
        ['get the ball rolling', 'lancer les choses'],
      ],
      examples: [
        { en: 'Missing the train was a blessing in disguise: I met my future business partner on the next one.', fr: 'Rater le train a été un mal pour un bien : j’ai rencontré mon futur associé dans le suivant.' },
        { en: 'Let’s make sure we’re all on the same page before we call the client.', fr: 'Assurons-nous d’être tous d’accord avant d’appeler le client.' },
      ],
      tip: 'Un idiome est figé : on ne change ni l’article, ni le nombre, ni le mot clé (« the elephant in the house » ✗). Méfie-toi des équivalents trompeurs : « avoir les yeux plus gros que le ventre » se dit avec chew (mâcher), pas avec eyes.',
    },
    {
      title: 'Les métaphores conceptuelles',
      body: 'Beaucoup d’expressions anglaises reposent sur une même image de fond. La repérer aide à deviner le sens d’expressions nouvelles.',
      table: [
        ['ARGUMENT = GUERRE / BÂTIMENT', 'defend a position, shoot down an idea, demolish an argument, a solid case'],
        ['IDÉES = NOURRITURE', 'food for thought, a half-baked plan, digest information'],
        ['IDÉES = PLANTES', 'plant the seed, an idea takes root, bear fruit, blossom'],
        ['TEMPS = ARGENT', 'spend, save, waste, invest time'],
      ],
      examples: [
        { en: 'The report gave the committee plenty of food for thought.', fr: 'Le rapport a donné au comité matière à réflexion.' },
        { en: 'Her proposal was shot down in the first five minutes.', fr: 'Sa proposition a été descendue en flammes dans les cinq premières minutes.' },
      ],
      tip: 'Le français partage certaines images (« défendre une position »), mais pas toutes : « une idée à moitié cuite » ne se dit pas, alors que « a half-baked idea » est très courant en anglais.',
    },
  ],
  exercises: exercises('c2-figurative-1', 'C2', { kc: IDIOM })
    .mcq('« Losing that contract turned out to be a blessing in disguise. » What does « a blessing in disguise » mean here?',
      ['A hidden disaster', 'Something that seemed bad but proved beneficial', 'A secret gift from a client', 'A lucky guess'], 1,
      'a blessing in disguise = un mal pour un bien.', { d: 3.0 })
    .cloze('Nobody mentioned the budget cuts at the meeting; they were the elephant in the ___.', ['room'],
      'the elephant in the room = le sujet évident que tout le monde évite.', { d: 3.0 })
    .cloze('The supplier clearly cut ___ on the materials, and the shelves collapsed within a week.', ['corners'],
      'cut corners = bâcler pour économiser.', { d: 3.0 })
    .mcq('With three part-time jobs and a degree to finish, I think she has bitten off more than she can ___.',
      ['chew', 'swallow', 'eat', 'bite'], 0,
      'bite off more than you can chew = avoir les yeux plus gros que le ventre, en prendre trop.', { d: 3.0 })
    .cloze('The new manager rejected all our proposals, so we’re back to square ___.', ['one'],
      'back to square one = retour à la case départ.', { d: 3.0 })
    .mcq('Which phrase reflects the metaphor « IDEAS ARE FOOD »?',
      ['a half-baked plan', 'to shoot down a proposal', 'to save time', 'to defend a position'], 0,
      'half-baked (à moitié cuit) traite l’idée comme un plat. shoot down et defend relèvent de la guerre, save time de l’argent.', { kc: META, d: 3.1 })
    .mcq('In « She demolished every argument her opponent put forward », how is an argument presented?',
      ['As a building that can be knocked down', 'As a journey', 'As a liquid', 'As a plant'], 0,
      'demolish = démolir : l’argument est un édifice (on parle aussi de « solid case », « build an argument »).', { kc: META, d: 3.1 })
    .order('Ce documentaire nous donne largement matière à réflexion.', 'This documentary gives us plenty of food for thought.',
      'food for thought = matière à réflexion (IDÉES = NOURRITURE).', { kc: META, distractors: ['meal', 'to'], d: 3.0 })
    .tr('C’est une tempête dans un verre d’eau.',
      ['It’s a storm in a teacup.', 'It is a storm in a teacup.', 'It’s a tempest in a teapot.', 'It is much ado about nothing.'],
      'Britannique : a storm in a teacup ; américain : a tempest in a teapot.', { d: 3.0 })
    .tr('Il faut qu’on soit sur la même longueur d’onde avant la réunion.',
      ['We need to be on the same page before the meeting.', 'We need to be on the same wavelength before the meeting.', 'We have to be on the same page before the meeting.', 'We have to be on the same wavelength before the meeting.', 'We must be on the same page before the meeting.'],
      'on the same page (accord sur un plan) ou on the same wavelength (affinité de pensée).', { d: 3.1 })
    .mcq('Which metaphor dominates the description of the project’s growth?',
      ['A plant growing from a seed', 'A war being won', 'A machine being repaired', 'A journey by sea'], 0,
      'planted the seed, blossomed, roots : le projet est décrit comme une plante. pipe dream, spread like wildfire et tip of the iceberg sont des idiomes ponctuels.',
      {
        kc: META, d: 3.2,
        passage: 'When the two founders first floated the idea of a repair café, most of their friends dismissed it as a pipe dream. Undeterred, they planted the seed with a single Saturday workshop in a community hall. Word spread like wildfire, and within a year the project had blossomed into a network of twelve cafés. “The early complaints were just the tip of the iceberg,” one founder admits, “but every problem we solved made the roots a little deeper.”',
      })
    .listen('Let’s not reinvent the wheel; last year’s template will do the job perfectly.', 'Que propose le locuteur ?',
      ['Créer un nouveau modèle de zéro', 'Réutiliser le modèle de l’an dernier', 'Acheter du nouveau matériel', 'Reporter le travail'], 1,
      'reinvent the wheel = refaire inutilement ce qui existe déjà.', { d: 3.0 })
    .listen('Her proposal was shot down within minutes, but she came back the next week with a much stronger case.', 'Qu’est-il arrivé à sa proposition au début ?',
      ['Elle a été rejetée très vite', 'Elle a été adoptée sans débat', 'Elle a été égarée', 'Elle a été reportée'], 0,
      'shot down = rejetée sans ménagement (métaphore guerrière) ; a stronger case = un dossier plus solide.', { kc: META, d: 3.0 })
    .say('Lançons les choses avec un rapide tour de table.',
      ['Let’s get the ball rolling with a quick round of introductions', 'Let us get the ball rolling with a quick round of introductions', 'Let’s kick things off with a quick round of introductions', 'Let’s get things started with a quick round of introductions'],
      'get the ball rolling / kick things off = lancer les choses.', { d: 3.1 })
    .answer('Describe a project or idea that grew over time, using at least one idiom or metaphor (plant the seed, snowball, get the ball rolling, take off…).',
      'Our book club started as a half-baked idea over coffee, but once we got the ball rolling, it snowballed into a group of forty readers who meet every month.',
      'Raconte la croissance avec des images : plant the seed, get the ball rolling, snowball, take off, blossom.',
      { kc: META, d: 3.3, minWords: 15, keywords: [['half-baked', 'ball rolling', 'snowballed', 'snowball', 'seed', 'took off', 'take off', 'blossomed', 'tip of the iceberg']] })
    .build(),
};

export const figurative2: Lesson = {
  id: 'c2-figurative-2',
  cefr: 'C2',
  unitId: 'c2-figurative',
  title: 'Litote, ironie et euphémisme',
  subtitle: 'Not bad at all, a bit of a challenge, between jobs',
  kcIds: [UNDER, EUPH],
  estMinutes: 10,
  explanation: [
    {
      title: 'La litote (understatement) et l’ironie',
      body: 'L’anglais, surtout britannique, aime dire moins pour signifier plus. L’ironie dit l’inverse de ce qu’on pense, souvent sur un ton neutre.',
      table: [
        ['ce qu’on dit', 'ce qu’on veut dire'],
        ['It was a bit of a challenge.', 'C’était très difficile.'],
        ['Not bad at all.', 'C’est vraiment bien.'],
        ['It’s not exactly cheap.', 'C’est cher.'],
        ['Not the brightest idea.', 'Une très mauvaise idée.'],
        ['I could do with a coffee.', 'J’ai vraiment besoin d’un café.'],
        ['Lovely weather! (sous la pluie)', 'Quel temps affreux ! (ironie)'],
      ],
      examples: [
        { en: 'Climbing the last hill in the rain was a bit of a challenge.', fr: 'Grimper la dernière côte sous la pluie a été une sacrée épreuve.' },
        { en: 'Well, that went well, didn’t it? (après un échec)', fr: 'Eh bien, ça s’est vraiment bien passé, hein ? (ironique)' },
      ],
      tip: 'En anglais britannique, « quite good » veut souvent dire « assez bien, sans plus », et « interesting » peut être une critique polie. Fie-toi à l’intonation et au contexte plutôt qu’au sens littéral.',
    },
    {
      title: 'L’euphémisme',
      body: 'On adoucit une réalité délicate ou peu flatteuse. Il faut savoir les décoder, notamment dans le monde professionnel et la publicité.',
      table: [
        ['between jobs', 'sans emploi'],
        ['pre-owned / pre-loved', 'd’occasion'],
        ['let go / restructuring', 'licencié / suppressions de postes'],
        ['economical with the truth', 'qui ment par omission'],
        ['cosy, full of character (petite annonce)', 'petit, ancien'],
        ['in need of some modernisation', 'à rénover'],
      ],
      examples: [
        { en: 'He’s between jobs at the moment, so he’s helping out at his parents’ café.', fr: 'Il est entre deux emplois pour l’instant, alors il donne un coup de main au café de ses parents.' },
      ],
      tip: 'Le français a ses propres euphémismes (« demandeur d’emploi », « plan de sauvegarde de l’emploi »), mais ils ne se traduisent pas mot à mot. Retiens les formules anglaises comme des blocs.',
    },
  ],
  exercises: exercises('c2-figurative-2', 'C2', { kc: UNDER })
    .mcq('After running his first marathon, Tom said: « Well, that was a bit of a challenge. » What does he really mean?',
      ['It was extremely hard', 'It was slightly annoying', 'It was rather boring', 'It was surprisingly easy'], 0,
      'a bit of a challenge est une litote : l’épreuve a été très dure.', { d: 3.0 })
    .mcq('It is pouring with rain as you set off for a picnic. Your friend says: « Perfect weather for it! » This is an example of:',
      ['irony', 'hedging', 'nominalisation', 'euphemism'], 0,
      'L’ami dit le contraire de ce qu’il pense : c’est de l’ironie.', { d: 3.0 })
    .cloze('The hotel was not ___ cheap: two hundred euros a night for a tiny room.', ['exactly'],
      'not exactly cheap = pas vraiment donné, donc cher (litote).', { hint: 'litote : « pas vraiment »', d: 3.1 })
    .cloze('He’s currently ___ jobs, so he has time to volunteer at the library.', ['between'],
      'between jobs = entre deux emplois, euphémisme pour « sans emploi ».', { kc: EUPH, d: 3.0 })
    .mcq('In an estate agent’s advert, a flat described as « cosy, full of character and in need of some modernisation » is probably:',
      ['spacious and brand new', 'small, old and needing work', 'luxurious and expensive', 'in a very noisy area'], 1,
      'cosy = petit, full of character = ancien, in need of modernisation = à rénover.', { kc: EUPH, d: 3.2 })
    .type('Remplace « used » par l’euphémisme commercial habituel : « We sell high-quality used cars. »',
      ['We sell high-quality pre-owned cars.', 'We sell high quality pre-owned cars.'],
      'pre-owned (« ayant déjà eu un propriétaire ») est l’euphémisme commercial de used.', { kc: EUPH, d: 3.1 })
    .order('Ce n’était pas l’idée la plus brillante du siècle.', 'It was not the brightest idea of the century.',
      'not the brightest idea : litote pour une mauvaise idée.', { distractors: ['most', 'bright'], d: 3.0 })
    .tr('Je boirais bien un café.',
      ['I could do with a coffee.', 'I could really do with a coffee.', 'I wouldn’t mind a coffee.', 'I could use a coffee.', 'I would love a coffee.'],
      'I could do with… / I wouldn’t mind… : façons britanniques mesurées d’exprimer une envie forte.', { d: 3.0 })
    .tr('L’entreprise a dû se séparer de vingt employés.',
      ['The company had to let twenty employees go.', 'The company had to let go of twenty employees.', 'The company had to let twenty staff go.', 'The company had to lay off twenty employees.', 'The company had to let 20 employees go.', 'The company had to lay off 20 employees.'],
      '« Se séparer de » (euphémisme) = let someone go.', { kc: EUPH, d: 3.2 })
    .mcq('What is the reviewer’s real opinion of the bistro?',
      ['Enthusiastic: the evening was a delight', 'Negative, expressed through irony and understatement', 'Neutral: a purely factual description', 'Mixed: excellent food but slow service'], 1,
      'a mere forty minutes, ample opportunity to admire the décor, pleasantly lukewarm, a man of few words, The bill was memorable : chaque compliment apparent est ironique.',
      {
        d: 3.4,
        passage: 'I had been told the new bistro was “an experience”, and it certainly was. Our table was ready a mere forty minutes after the time we had booked, which gave us ample opportunity to admire the décor. The soup arrived pleasantly lukewarm, and the waiter, clearly a man of few words, managed the entire evening without once making eye contact. The bill, at least, was memorable.',
      })
    .listen('The view from the top was, shall we say, not entirely unimpressive.', 'Qu’a pensé le locuteur de la vue ?',
      ['Elle était décevante', 'Elle était très impressionnante', 'Il n’a rien vu à cause du brouillard', 'Elle était trop lointaine'], 1,
      'Double négation (not… unimpressive) : litote typique, la vue était superbe.', { d: 3.3 })
    .listen('The company is going through a period of restructuring, and some roles may be affected.', 'Que laisse entendre ce message ?',
      ['Que l’entreprise recrute massivement', 'Que des postes pourraient être supprimés', 'Que les bureaux vont être rénovés', 'Que les salaires vont augmenter'], 1,
      'restructuring + some roles may be affected : euphémisme pour des suppressions de postes.', { kc: EUPH, d: 3.1 })
    .say('Ce n’est pas vraiment donné.',
      ['It is not exactly cheap', 'It is not exactly a bargain', 'It does not come cheap', 'It is not what you would call cheap'],
      'not exactly cheap : litote pour « cher ».', { d: 3.0 })
    .answer('Describe a difficult day (a long journey, a tough exam, a chaotic move) using British understatement.',
      'Moving house in the middle of a heatwave was a bit of a challenge, and carrying the piano up four flights of stairs was not exactly my idea of fun.',
      'Minimise avec a bit of, not exactly, slightly, rather, not entirely… pour faire entendre l’inverse.',
      { d: 3.3, minWords: 15, keywords: [['a bit of', 'not exactly', 'not the', 'slightly', 'rather', 'not entirely', 'not ideal', 'not great']] })
    .build(),
};
