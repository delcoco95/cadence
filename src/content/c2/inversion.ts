import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const NEG = 'c2.inversion.negative';
const TIME = 'c2.inversion.time';
const SO = 'c2.inversion.so_such';
const FRONT = 'c2.inversion.fronting';

export const inversionUnit: Unit = {
  id: 'c2-inversion',
  cefr: 'C2',
  title: 'Inversion et mise en relief',
  description: 'Inversion après une expression négative ou restrictive, So… / Such… that, inversion conditionnelle, antéposition et formules figées.',
  lessonIds: ['c2-inversion-1', 'c2-inversion-2'],
  canDo: [
    'Je peux mettre une idée en relief à l’écrit comme à l’oral soutenu grâce à l’inversion (Never have I…, Little did they know…).',
    'Je peux employer avec justesse des formules figées comme come what may ou be that as it may.',
  ],
};

export const inversion1: Lesson = {
  id: 'c2-inversion-1',
  cefr: 'C2',
  unitId: 'c2-inversion',
  title: 'Inversion après une négation ou une restriction',
  subtitle: 'Never have I…, Little did they know…, No sooner… than',
  kcIds: [NEG, TIME],
  estMinutes: 10,
  explanation: [
    {
      title: 'Le principe',
      body: 'Quand une phrase commence par une expression négative ou restrictive, l’anglais soutenu inverse le sujet et l’auxiliaire, comme dans une question. L’effet est dramatique, emphatique : on l’entend dans les discours, les récits et l’écrit soigné.',
      table: [
        ['Never (before)', 'Never before have I seen such a crowd.'],
        ['Little', 'Little did they know what lay ahead.'],
        ['Rarely / Seldom', 'Seldom do we get a chance like this.'],
        ['Under no circumstances / On no account', 'Under no circumstances should you open this valve.'],
        ['Not only… but (also)', 'Not only is it cheaper, but it is also faster.'],
        ['Not once', 'Not once did she complain.'],
      ],
      examples: [
        { en: 'Little did we suspect that the quiet neighbour was a famous novelist.', fr: 'Nous étions loin de nous douter que le voisin discret était un romancier célèbre.' },
        { en: 'Not only did the team win, but they also broke the record.', fr: 'Non seulement l’équipe a gagné, mais elle a aussi battu le record.' },
      ],
      tip: 'Sans auxiliaire, on ajoute do / does / did : « Little they knew » ✗ → « Little did they know » ✓. Le français connaît l’inversion (« À peine était-il arrivé… »), mais pas après « jamais » : « Jamais je n’ai vu » se dit « Never have I seen ».',
    },
    {
      title: 'Expressions de temps et de restriction',
      table: [
        ['Hardly / Scarcely… when', 'Hardly had I sat down when the phone rang.'],
        ['No sooner… than', 'No sooner had we left than it started to snow.'],
        ['Not until… + inversion dans la principale', 'Not until I read the letter did I understand.'],
        ['Only when / after / then… + inversion dans la principale', 'Only then did she realise her mistake.'],
      ],
      examples: [
        { en: 'No sooner had the film started than the power went out.', fr: 'À peine le film avait-il commencé que le courant a été coupé.' },
        { en: 'Only after the meeting did I see your message.', fr: 'Ce n’est qu’après la réunion que j’ai vu ton message.' },
      ],
      tip: 'Deux pièges : No sooner va avec THAN, Hardly / Scarcely avec WHEN. Et avec Not until / Only when, l’inversion se fait dans la proposition principale, pas dans la subordonnée : « Only when the results came in did we realise… ».',
    },
  ],
  exercises: exercises('c2-inversion-1', 'C2', { kc: NEG })
    .mcq('Little ___ that the small café would one day become a national chain.',
      ['they knew', 'did they know', 'knew they', 'do they know'], 1,
      'Little en tête (sens négatif) + inversion avec l’auxiliaire did : Little did they know.', { d: 3.0 })
    .cloze('Never before ___ such a spectacular sunrise over the bay.', ['have I seen'],
      'Never before + present perfect inversé : have I seen.', { hint: 'I / see, au present perfect', d: 3.1 })
    .cloze('Under no circumstances ___ leave the laboratory door open.', ['should you'],
      'Under no circumstances + modal + sujet : should you.', { hint: 'you / should', d: 3.0 })
    .type('Réécris en commençant par « Not only » : « The app is cheaper, and it is also far easier to use. »',
      ['Not only is the app cheaper, but it is also far easier to use.', 'Not only is the app cheaper, it is also far easier to use.', 'Not only is the app cheaper, but it is far easier to use as well.'],
      'Not only + be + sujet (is the app), puis but (also) dans la seconde partie, sans inversion.', { d: 3.3 })
    .mcq('No sooner had we sat down to eat ___ the doorbell rang.',
      ['when', 'than', 'that', 'then'], 1,
      'No sooner… THAN : c’est un comparatif à l’origine (« pas plus tôt que »).', { kc: TIME, d: 3.0 })
    .cloze('Hardly ___ the stage when the audience burst into applause.', ['had she reached'],
      'Hardly + past perfect inversé (had she reached)… when + past simple.', { kc: TIME, hint: 'she / reach, au past perfect', d: 3.2 })
    .type('Réécris en commençant par « Not until » : « We only understood the instructions when the guide explained them in French. »',
      ['Not until the guide explained them in French did we understand the instructions.', 'Not until the guide had explained them in French did we understand the instructions.'],
      'Not until + subordonnée sans inversion, puis inversion dans la principale : did we understand.', { kc: TIME, d: 3.6 })
    .mcq('Which sentence is correct?',
      ['Only when the results came in we realised our mistake.', 'Only when did the results come in we realised our mistake.', 'Only when the results came in did we realise our mistake.', 'Only when the results came in realised we our mistake.'], 2,
      'Avec Only when, l’inversion (did we realise) se fait dans la principale, pas dans la subordonnée.', { kc: TIME, d: 3.3 })
    .order('Rarement ai-je goûté un pain aussi délicieux.', 'Rarely have I tasted such delicious bread.',
      'Rarely + have + sujet + participe. Devant un nom indénombrable précédé d’un adjectif : such (pas so).', { distractors: ['did', 'so'], d: 3.1 })
    .tr('Ils ne se doutaient guère de ce qui les attendait.',
      ['Little did they know what was waiting for them.', 'Little did they know what awaited them.', 'Little did they suspect what was waiting for them.', 'Little did they suspect what awaited them.'],
      '« Ne… guère se douter » se rend élégamment par Little did they know / suspect.', { d: 3.3 })
    .tr('À peine étions-nous arrivés qu’il a commencé à pleuvoir.',
      ['Hardly had we arrived when it started to rain.', 'No sooner had we arrived than it started to rain.', 'Scarcely had we arrived when it started to rain.', 'Hardly had we arrived when it began to rain.', 'No sooner had we arrived than it began to rain.'],
      '« À peine… que » = Hardly / Scarcely… when, ou No sooner… than, avec le past perfect inversé.', { kc: TIME, d: 3.4 })
    .listen('Not once did the guide mention that the museum would be closed on Mondays.', 'Qu’a dit le guide au sujet de la fermeture du lundi ?',
      ['Il l’a mentionnée une seule fois', 'Il ne l’a jamais mentionnée', 'Il l’a répétée plusieurs fois', 'Il a dit que le musée ouvrait le lundi'], 1,
      '« Not once did… » = pas une seule fois : le guide n’en a jamais parlé.', { d: 3.1 })
    .listen('Only after the last guest had left did we notice the cake still sitting in the fridge.', 'Quand ont-ils remarqué le gâteau ?',
      ['Avant l’arrivée des invités', 'Pendant le repas', 'Après le départ du dernier invité', 'Le lendemain matin'], 2,
      '« Only after the last guest had left » : ce n’est qu’après le départ du dernier invité.', { kc: TIME, d: 3.2 })
    .say('Jamais je n’aurais imaginé vivre à l’étranger.',
      ['Never would I have imagined living abroad', 'Never did I imagine living abroad', 'Never had I imagined living abroad', 'Never would I have imagined that I would live abroad'],
      'Never en tête + inversion : Never would I have imagined…', { d: 3.3 })
    .answer('Describe a surprising experience while travelling, using at least one inverted structure (Never have I…, Little did I know…, No sooner had I…).',
      'Little did I know, when I boarded the night train to Vienna, that I would share my compartment with a famous violinist who played for us all evening.',
      'Commence par une expression négative ou restrictive et inverse sujet et auxiliaire.',
      { d: 3.4, minWords: 15, keywords: [['little did', 'never have', 'never had', 'never did', 'no sooner', 'hardly had', 'scarcely had', 'not only', 'rarely have', 'seldom have', 'only when', 'only after', 'not until']] })
    .build(),
};

export const inversion2: Lesson = {
  id: 'c2-inversion-2',
  cefr: 'C2',
  unitId: 'c2-inversion',
  title: 'So… that, Such… that, antéposition et formules figées',
  subtitle: 'So great was…, Had I known…, Come what may',
  kcIds: [SO, FRONT],
  estMinutes: 10,
  explanation: [
    {
      title: 'So… that et Such… that avec inversion',
      table: [
        ['So + adjectif + be + sujet + that', 'So great was the demand that the shop closed early.'],
        ['So + adverbe + auxiliaire + sujet + that', 'So quickly did the tickets sell that many fans missed out.'],
        ['Such + be + groupe nominal + that', 'Such was the noise that we couldn’t hear ourselves think.'],
      ],
      examples: [
        { en: 'So beautiful was the melody that the audience fell silent.', fr: 'La mélodie était si belle que le public s’est tu.' },
        { en: 'Such was her talent that she was offered a scholarship at sixteen.', fr: 'Son talent était tel qu’on lui a offert une bourse à seize ans.' },
      ],
      tip: '« Such was… » correspond au français « tel était… » : le verbe be vient juste après such. Évite « So great the demand was that… » : l’inversion est obligatoire dès que So + adjectif est en tête.',
    },
    {
      title: 'Inversion conditionnelle et antéposition',
      body: 'Dans un registre soutenu, on supprime if en inversant : Had I known (= If I had known), Were it not for (= If it were not for), Should you need (= If you should need). Après un complément de lieu en tête, on peut aussi inverser le sujet et un verbe de position ou de mouvement.',
      table: [
        ['Had + sujet + p.p.', 'Had I known, I would have come earlier.'],
        ['Were + sujet + to / Were it not for', 'Were it not for the rain, we would be outside.'],
        ['Should + sujet + base', 'Should you need anything, just ask.'],
        ['lieu + verbe + sujet', 'At the end of the path stood a tiny chapel.'],
      ],
      examples: [
        { en: 'Should you have any questions, please contact our front desk.', fr: 'Si vous avez des questions, veuillez contacter notre accueil.' },
      ],
    },
    {
      title: 'Formules figées (anciens subjonctifs)',
      table: [
        ['Come what may', 'quoi qu’il arrive'],
        ['Be that as it may', 'quoi qu’il en soit (concède, puis relativise)'],
        ['Suffice it to say (that)', 'disons simplement que'],
        ['Far be it from me to…', 'loin de moi l’idée de…'],
        ['So be it', 'soit, qu’il en soit ainsi'],
      ],
      examples: [
        { en: 'Suffice it to say that the second rehearsal went much better.', fr: 'Disons simplement que la deuxième répétition s’est beaucoup mieux passée.' },
      ],
      tip: '« Far be it from me to… » précède presque toujours un conseil ou une critique : c’est une fausse modestie, souvent légèrement ironique. Et « Be that as it may » ne signifie pas « peut-être » : il reconnaît un argument pour mieux le dépasser.',
    },
  ],
  exercises: exercises('c2-inversion-2', 'C2', { kc: SO })
    .mcq('So popular ___ that extra performances were added.',
      ['the show was', 'was the show', 'the show is being', 'did the show'], 1,
      'So + adjectif en tête + inversion avec be : So popular was the show.', { d: 3.0 })
    .cloze('___ the demand for tickets that the website crashed within minutes.', ['Such was'],
      'Such + be + groupe nominal + that : Such was the demand…', { hint: 'such + be, au passé', d: 3.1 })
    .type('Réécris en commençant par « So » : « The view was so breathtaking that we forgot to take photos. »',
      ['So breathtaking was the view that we forgot to take photos.', 'So breathtaking was the view that we forgot to take any photos.'],
      'So + adjectif + was + sujet + that.', { d: 3.3 })
    .type('Réécris en commençant par « Such » : « Her enthusiasm was so great that everyone volunteered. »',
      ['Such was her enthusiasm that everyone volunteered.'],
      'Such was + groupe nominal + that : l’adjectif great disparaît, such en porte l’idée.', { d: 3.3 })
    .cloze('___ I known about the delay, I would have taken a later train.', ['Had'],
      'Inversion conditionnelle : Had I known = If I had known.', { kc: FRONT, hint: 'inversion conditionnelle', d: 3.0 })
    .cloze('___ it not for her careful planning, the trip would have been a disaster.', ['Were'],
      'Were it not for… = If it were not for… : sans son organisation, le voyage aurait été un désastre.', { kc: FRONT, hint: 'be', d: 3.1 })
    .mcq('Which formula means « quoi qu’il en soit » and concedes a point before moving on?',
      ['Come what may', 'Be that as it may', 'So be it', 'Suffice it to say'], 1,
      'Be that as it may = quoi qu’il en soit. Come what may = quoi qu’il arrive ; So be it = soit ; Suffice it to say = disons simplement.', { kc: FRONT, d: 3.0 })
    .order('Au sommet de la colline se dressait un vieux moulin.', 'At the top of the hill stood an old windmill.',
      'Complément de lieu en tête + verbe de position + sujet : inversion stylistique, sans auxiliaire.', { kc: FRONT, distractors: ['was', 'did'], d: 3.1 })
    .tr('Si vous avez besoin d’aide, n’hésitez pas à m’appeler.',
      ['Should you need any help, do not hesitate to call me.', 'Should you need help, do not hesitate to call me.', 'Should you need any help, feel free to call me.', 'Should you need any help, please do not hesitate to call me.'],
      'Should + sujet + base = If you need… dans un registre soutenu (courriers, consignes).', { kc: FRONT, d: 3.2, instruction: 'Traduis en anglais, avec une inversion en Should.' })
    .tr('Sa curiosité était telle qu’elle a lu le livre en une nuit.',
      ['Such was her curiosity that she read the book in one night.', 'So great was her curiosity that she read the book in one night.', 'Such was her curiosity that she read the book in a single night.', 'So great was her curiosity that she read the book in a single night.'],
      '« Tel était… que » = Such was… that, ou So great was… that.', { d: 3.4 })
    .listen('Far be it from me to tell you how to run your kitchen, but that oven seems rather hot.', 'Quelle est l’intention du locuteur ?',
      ['Il refuse catégoriquement de donner son avis', 'Il donne un conseil tout en feignant de ne pas vouloir s’en mêler', 'Il félicite le cuisinier pour son four', 'Il demande comment fonctionne le four'], 1,
      '« Far be it from me to… but… » introduit un conseil sous couvert de modestie.', { kc: FRONT, d: 3.4 })
    .listen('Such was the silence in the hall that you could hear the clock ticking.', 'Qu’est-ce qui est mis en relief ?',
      ['Le bruit dans la salle', 'L’intensité du silence', 'La panne de l’horloge', 'Le retard du public'], 1,
      '« Such was the silence… that » insiste sur un silence si profond qu’on entendait l’horloge.', { d: 3.0 })
    .mcq('What does the speaker’s use of « Be that as it may » suggest?',
      ['She fully agrees that the choir should become professional', 'She acknowledges a criticism without letting it change her position', 'She is unsure whether the choir will continue', 'She is apologising for the size of the choir'], 1,
      '« Be that as it may » reconnaît l’argument (la chorale serait trop grande) pour aussitôt le dépasser : la porte restera ouverte.',
      {
        kc: FRONT, d: 3.4,
        passage: 'Ladies and gentlemen, when our small choir first gathered in a borrowed classroom twelve years ago, little did we imagine that we would one day perform in this hall. Such has been your generosity that we have been able to fund music lessons for over two hundred children. Some have suggested that the choir has grown too large to remain a community project. Be that as it may, our door will stay open to anyone who loves to sing, come what may.',
      })
    .say('Quoi qu’il arrive, nous finirons ce projet.',
      ['Come what may, we will finish this project', 'Come what may, we will finish the project', 'Come what may, we are going to finish this project', 'Whatever happens, we will finish this project'],
      'Come what may = quoi qu’il arrive, en tête ou en fin de phrase.', { kc: FRONT, d: 3.1 })
    .answer('Describe an event (a concert, a match, a festival) that impressed you, using « So… that » or « Such was… that » with inversion.',
      'Such was the energy at the festival that nobody wanted to leave, and so loud was the final concert that I could still hear it the next morning.',
      'Mets l’intensité en relief : Such was + nom + that, ou So + adjectif + was + sujet + that.',
      { d: 3.4, minWords: 15, keywords: [['such was', 'such were', 'such is', 'so great', 'so loud', 'so impressive', 'so beautiful', 'so strong', 'so intense'], ['that']] })
    .build(),
};
