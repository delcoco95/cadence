import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const U = 'b2.habits.used_to';
const BG = 'b2.habits.be_get_used_to';
const VM = 'b2.verbs.meaning_change';
const COL = 'b2.lexis.collocations';

export const patternsUnit: Unit = {
  id: 'b2-patterns',
  cefr: 'B2',
  title: 'Habitudes et constructions verbales',
  description: 'used to, be used to, get used to ; verbes qui changent de sens avec -ing ou to (stop, remember, try…) ; collocations et verbes à particule courants.',
  lessonIds: ['b2-patterns-1', 'b2-patterns-2'],
  canDo: [
    'Je peux parler de mes anciennes habitudes et de ce à quoi je me suis habitué ou dois m’habituer.',
    'Je peux employer correctement stop, remember, try + -ing ou to, et des collocations courantes (make a decision, meet a deadline…).',
  ],
};

const EXPAT =
  'When I first moved from Lyon to Copenhagen, I found it hard to get used to the darkness. In December the sun sets before four, and I used to feel exhausted by mid-afternoon. I also wasn’t used to cycling everywhere, especially in the snow. Three years later, I’m used to the long winters, and I actually love the cosy evenings the Danes call hygge. What I still can’t get used to is the price of a coffee!';

export const patterns1: Lesson = {
  id: 'b2-patterns-1',
  cefr: 'B2',
  unitId: 'b2-patterns',
  title: 'used to, be used to, get used to',
  subtitle: 'Anciennes habitudes, habitudes prises et à prendre',
  kcIds: [U, BG],
  estMinutes: 8,
  explanation: [
    {
      title: 'used to + base : c’était comme ça avant',
      body: 'Habitude ou état passé qui n’est plus vrai aujourd’hui. Pour des actions répétées (pas des états), would est aussi possible dans un récit.',
      table: [
        ['affirmation', 'I used to live in Rome.'],
        ['négation', 'I didn’t use to like coffee.'],
        ['question', 'Did you use to play an instrument?'],
      ],
      examples: [
        { en: 'We used to spend every summer by the sea.', fr: 'Nous passions tous les étés au bord de la mer.' },
        { en: 'On Sundays, my grandfather would tell us stories.', fr: 'Le dimanche, mon grand-père nous racontait des histoires.' },
      ],
      tip: 'used to n’existe qu’au passé. Pour une habitude présente, on dit I usually…, jamais « I use to » ✗. Après did / didn’t, on écrit use to (sans d).',
    },
    {
      title: 'be used to / get used to + -ing ou nom',
      table: [
        ['be used to', 'être habitué à', 'I’m used to working nights.'],
        ['get used to', 's’habituer à', 'You’ll get used to the noise.'],
      ],
      examples: [
        { en: 'She isn’t used to driving on the left.', fr: 'Elle n’est pas habituée à conduire à gauche.' },
        { en: 'I’m slowly getting used to my new job.', fr: 'Je m’habitue peu à peu à mon nouveau travail.' },
      ],
      tip: 'Ici, to est une préposition : il est suivi d’un nom ou d’un -ing. « I’m used to work » ✗ → « I’m used to working » ✓.',
    },
  ],
  exercises: exercises('b2-patterns-1', 'B2', { kc: U })
    .cloze('I ___ like olives, but now I love them.', ['didn’t use to', 'did not use to', 'never used to'],
      'Négation de used to : didn’t use to (sans d après did).', { hint: 'not', d: 1.1 })
    .mcq('I’ve lived in Scotland for ten years, so I’m used to ___ in the rain.', ['drive', 'driving', 'drove'], 1,
      'be used to + -ing : to est ici une préposition.', { kc: BG, d: 1.0 })
    .mcq('It took me months to ___ used to the night shifts.', ['get', 'be', 'use'], 0,
      'Le processus d’adaptation → get used to.', { kc: BG, d: 1.1 })
    .cloze('Don’t worry, you’ll soon get used to ___ on the left.', ['driving'],
      'get used to + -ing.', { kc: BG, hint: 'drive', d: 1.0 })
    .mcq('Ma nouvelle collègue n’est pas habituée à travailler en open space.',
      ['She isn’t used to working in an open-plan office.', 'She didn’t use to work in an open-plan office.', 'She isn’t used to work in an open-plan office.'], 0,
      'être habitué à → be used to + -ing. didn’t use to parlerait d’une ancienne habitude.', { kc: BG, d: 1.2 })
    .type('Pose la question : « Avant, tu habitais à Lyon ? » (Did…)', ['Did you use to live in Lyon?'],
      'Question : Did + sujet + use to + base (pas « used to » après did).', { d: 1.0 })
    .order('Je ne m’habituerai jamais à me lever à cinq heures.', 'I will never get used to getting up at five.',
      'get used to + -ing : getting up.', { kc: BG, distractors: ['use', 'be'], d: 1.4 })
    .mcq('À quoi l’auteure ne s’est-elle toujours pas habituée ?',
      ['Au prix du café', 'À l’obscurité en hiver', 'À faire du vélo sous la neige'], 0,
      '« What I still can’t get used to is the price of a coffee! »', { kc: BG, d: 1.3, passage: EXPAT })
    .listen('My dad used to take us fishing every Sunday when we were kids.', 'Que dit-il de son père ?',
      ['Il les emmenait pêcher chaque dimanche autrefois', 'Il les emmène pêcher chaque dimanche', 'Il n’aimait pas la pêche'], 0,
      'used to take = emmenait (habitude passée, terminée).', { d: 0.9 })
    .listen('I’m still getting used to my new glasses; everything looks a bit strange.', 'Quelle est la situation ?',
      ['Il est en train de s’habituer à ses nouvelles lunettes', 'Il a perdu ses lunettes', 'Il porte des lunettes depuis longtemps'], 0,
      'getting used to = en train de s’habituer.', { kc: BG, d: 1.1 })
    .dictation('She isn’t used to speaking in front of large audiences.', 'be used to + -ing : speaking.',
      { kc: BG, accepted: ['She isn’t used to speaking in front of large audiences.', 'She is not used to speaking in front of large audiences.'], d: 1.1 })
    .tr('Avant, je fumais un paquet par jour.',
      ['I used to smoke a pack a day.', 'I used to smoke a packet a day.', 'I used to smoke a pack of cigarettes a day.', 'I used to smoke a packet of cigarettes a day.',
        'I used to smoke one pack a day.'],
      'Habitude passée révolue → used to + base.', { d: 1.0 })
    .tr('Je suis {habitué|habituée} à travailler sous pression.', ['I’m used to working under pressure.', 'I am used to working under pressure.'],
      'être habitué à + verbe → be used to + -ing.', { kc: BG, d: 1.0 })
    .say('Tu vas t’habituer à la nourriture.', ['You’ll get used to the food', 'You will get used to the food', 'You’re going to get used to the food'],
      's’habituer à → get used to + nom.', { kc: BG, d: 1.0 })
    .answer('What did you use to do as a child that you don’t do any more?',
      'When I was a child, I used to play football every day after school, but now I never have time.',
      'Parle d’habitudes révolues avec used to (ou would).', { keywords: [['used to', 'would']], minWords: 12, d: 1.1 })
    .build(),
};

export const patterns2: Lesson = {
  id: 'b2-patterns-2',
  cefr: 'B2',
  unitId: 'b2-patterns',
  title: 'Verbes à double sens et collocations',
  subtitle: 'stop, remember, try + -ing ou to ; make, meet, put off…',
  kcIds: [VM, COL],
  estMinutes: 8,
  explanation: [
    {
      title: 'Le sens change avec -ing ou to',
      table: [
        ['stop doing', 'arrêter de faire', 'He stopped smoking.'],
        ['stop to do', 's’arrêter pour faire', 'He stopped to smoke.'],
        ['remember doing', 'se souvenir d’avoir fait', 'I remember locking the door.'],
        ['remember to do', 'penser à faire', 'Remember to lock the door.'],
        ['forget to do', 'oublier de faire', 'I forgot to call her.'],
        ['try doing', 'essayer (pour voir si ça marche)', 'Try restarting your computer.'],
        ['try to do', 's’efforcer de, tenter de', 'I tried to open the jar, but I couldn’t.'],
        ['regret doing / regret to say', 'regretter d’avoir fait / avoir le regret de', 'I regret leaving. / We regret to inform you…'],
      ],
      tip: 'Repère le temps : -ing renvoie souvent à une action antérieure ou en cours (je me souviens de l’avoir fait), to à une action à venir (penser à le faire).',
    },
    {
      title: 'Collocations et verbes à particule',
      body: 'À B2, la précision lexicale compte autant que la grammaire. Apprends les mots par groupes.',
      table: [
        ['make a decision / a mistake / progress', 'prendre une décision / faire une erreur / progresser'],
        ['meet a deadline', 'respecter une échéance'],
        ['carry out (a survey, research)', 'réaliser, mener'],
        ['put off', 'reporter, repousser'],
        ['look into', 'examiner, se pencher sur'],
        ['come up with', 'trouver, imaginer (une idée)'],
      ],
      tip: 'make ou do ? make pour créer ou décider (make a plan, make a decision), do pour une tâche ou une activité (do research, do the shopping). « faire une erreur » = make a mistake, jamais « do a mistake » ✗.',
    },
  ],
  exercises: exercises('b2-patterns-2', 'B2', { kc: VM })
    .mcq('We were tired, so we stopped ___ a coffee at a service station.', ['having', 'to have', 'have'], 1,
      'stop to do = s’arrêter POUR faire quelque chose.', { d: 1.0 })
    .cloze('Did you remember ___ the door before you left?', ['to lock'],
      'remember to do = penser à faire (action à accomplir).', { hint: 'lock', d: 0.9 })
    .cloze('My laptop wouldn’t start, so I tried ___ it off and on again.', ['turning'],
      'try doing = essayer une solution pour voir si elle marche.', { hint: 'turn', d: 1.3 })
    .mcq('We regret ___ you that your application has been unsuccessful.', ['informing', 'to inform', 'inform'], 1,
      'regret to inform = avoir le regret d’annoncer (formule formelle).', { d: 1.4 })
    .mcq('We need to ___ a decision by the end of the week.', ['do', 'make', 'give'], 1,
      'Collocation : make a decision (take a decision existe aussi en anglais britannique).', { kc: COL, d: 0.9 })
    .mcq('The meeting has been ___ until next Thursday.', ['put off', 'put out', 'put up'], 0,
      'put off = reporter. put out = éteindre ; put up = installer, héberger.', { kc: COL, d: 1.1 })
    .type('Quel verbe à particule signifie « réaliser, mener (une étude, une enquête) » ? (carry…)', ['carry out'],
      'carry out a survey / an investigation / research.', { kc: COL, d: 1.2 })
    .order('N’oublie pas d’envoyer la facture au client.', 'Don’t forget to send the invoice to the client.',
      'forget to do = oublier de faire.', { distractors: ['sending', 'remember'], d: 1.0 })
    .listen('I remember meeting her at a conference in Berlin, but I can’t remember her name.', 'De quoi se souvient-il ?',
      ['De l’avoir rencontrée à Berlin', 'De son nom', 'Qu’il devait la rappeler'], 0,
      'remember meeting = se souvenir d’avoir rencontré.', { d: 1.2 })
    .listen('The company is looking into the complaint and will get back to you within a week.', 'Que va faire l’entreprise ?',
      ['Examiner la plainte et répondre sous une semaine', 'Rembourser le client immédiatement', 'Transmettre la plainte à un avocat'], 0,
      'look into = examiner ; get back to someone = recontacter quelqu’un.', { kc: COL, d: 1.2 })
    .dictation('We stopped to take photos of the view.', 'stop to do = s’arrêter pour faire.', { d: 0.9 })
    .tr('Je me souviens d’avoir fermé la fenêtre.',
      ['I remember closing the window.', 'I remember shutting the window.', 'I remember having closed the window.', 'I remember that I closed the window.'],
      'se souvenir d’avoir fait → remember + -ing.', { d: 1.2 })
    .tr('Il faut respecter la date limite.',
      ['We have to meet the deadline.', 'We must meet the deadline.', 'We need to meet the deadline.', 'We’ve got to meet the deadline.',
        'You have to meet the deadline.', 'The deadline must be met.'],
      'respecter une date limite = meet a deadline (pas « respect »).', { kc: COL, d: 1.2 })
    .say('Il s’est arrêté pour acheter du pain.', ['He stopped to buy bread', 'He stopped to buy some bread', 'He stopped to get some bread', 'He stopped to get bread'],
      's’arrêter pour faire → stop to do.', { d: 1.0 })
    .answer('Have you ever tried doing something completely new? What happened?',
      'Last year I tried doing a pottery class, and I came up with some strange but beautiful bowls.',
      'Utilise try + -ing et, si possible, un verbe à particule (come up with, carry on, give up…).',
      { kc: [VM, COL], keywords: [['tried', 'try']], minWords: 12, d: 1.3 })
    .build(),
};
