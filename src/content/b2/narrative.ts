import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const PC = 'b2.narrative.past_continuous';
const PP = 'b2.narrative.past_perfect';
const PPC = 'b2.narrative.past_perfect_continuous';
const SEQ = 'b2.narrative.sequencing';

export const narrativeUnit: Unit = {
  id: 'b2-narrative',
  cefr: 'B2',
  title: 'Raconter une histoire',
  description: 'Past continuous, past perfect simple et continuous : situer les actions les unes par rapport aux autres dans un récit.',
  lessonIds: ['b2-narrative-1', 'b2-narrative-2'],
  canDo: [
    'Je peux raconter un événement passé en distinguant le décor, les actions principales et ce qui s’était passé avant.',
    'Je peux enchaîner les étapes d’un récit avec by the time, as soon as, eventually ou in the end.',
  ],
};

export const narrative1: Lesson = {
  id: 'b2-narrative-1',
  cefr: 'B2',
  unitId: 'b2-narrative',
  title: 'Past continuous et past perfect',
  subtitle: 'Le décor, l’action, et ce qui s’était passé avant',
  kcIds: [PC, PP],
  estMinutes: 8,
  explanation: [
    {
      title: 'Les trois temps du récit',
      body: 'Un bon récit en anglais combine trois temps : le past simple fait avancer l’histoire, le past continuous plante le décor ou montre une action en cours, le past perfect renvoie à ce qui s’était passé AVANT.',
      table: [
        ['past simple', 'actions principales, dans l’ordre', 'I opened the door.'],
        ['past continuous (was / were + -ing)', 'décor, action en cours, interrompue', 'It was raining.'],
        ['past perfect (had + participe passé)', 'action antérieure à un moment passé', 'Someone had broken the window.'],
      ],
      examples: [
        { en: 'I was walking home when I heard a strange noise.', fr: 'Je rentrais à pied quand j’ai entendu un bruit étrange.' },
        { en: 'When we arrived, the concert had already started.', fr: 'Quand nous sommes arrivés, le concert avait déjà commencé.' },
        { en: 'She was nervous because she had never spoken in public.', fr: 'Elle était nerveuse car elle n’avait jamais parlé en public.' },
      ],
    },
    {
      title: 'Past perfect : quand est-il indispensable ?',
      body: 'On l’utilise quand l’ordre des événements n’est pas évident et qu’on remonte en arrière. Si on raconte dans l’ordre (and then, after that), le past simple suffit.',
      table: [
        ['When I arrived, she left.', 'elle part au moment où j’arrive'],
        ['When I arrived, she had left.', 'elle était déjà partie avant mon arrivée'],
      ],
      tip: 'Le plus-que-parfait français (« j’avais fini ») correspond bien au past perfect. Mais l’imparfait ne se traduit pas toujours par le past continuous : pour une habitude passée, « je jouais au tennis le samedi » = I played (ou I used to play) tennis on Saturdays.',
    },
    {
      title: 'Action en cours interrompue',
      body: 'while + past continuous pour l’action longue, when + past simple pour l’action courte qui l’interrompt.',
      examples: [
        { en: 'While she was giving her speech, her phone rang.', fr: 'Pendant qu’elle faisait son discours, son téléphone a sonné.' },
      ],
      tip: 'Les verbes d’état (know, believe, own, want) ne se mettent pas au continuous : « I was knowing » ✗ → « I knew » ✓.',
    },
  ],
  exercises: exercises('b2-narrative-1', 'B2', { kc: PP, tense: 'past_perfect' })
    .mcq('When I got to the station, the train ___, so I had to wait an hour for the next one.', ['has left', 'had left', 'leaves'], 1,
      'Le train était parti AVANT mon arrivée → past perfect : had left.', { d: 0.8 })
    .cloze('She was exhausted because she ___ all night.', ['hadn’t slept', 'had not slept'],
      'Cause antérieure à « was exhausted » → past perfect négatif : hadn’t slept (sleep, slept, slept).', { hint: 'not sleep', d: 1.0 })
    .cloze('I ___ home when the storm started.', ['was driving'],
      'Action longue en cours, interrompue par « the storm started » → past continuous.', { kc: PC, hint: 'drive', d: 0.8, tense: 'past_continuous' })
    .cloze('By the time the police arrived, the thieves ___.', ['had escaped'],
      'By the time + past simple → l’autre action est terminée avant : had escaped.', { hint: 'escape', d: 1.0 })
    .mcq('While we ___ dinner, the lights suddenly went out.', ['have', 'were having', 'had had'], 1,
      'while + action en cours au moment de la coupure → were having.', { kc: PC, d: 0.8, tense: 'past_continuous' })
    .type('Mets au past perfect : « They / never / see / snow before. »', ['They had never seen snow before.', 'They’d never seen snow before.'],
      'had + never + participe passé (see, saw, seen).', { d: 1.1 })
    .order('Je ne l’avais jamais rencontrée avant cette soirée.', 'I had never met her before that evening.',
      'had + never + participe passé : had never met.', { distractors: ['have', 'meet'], d: 1.0 })
    .mcq('Qu’est-ce qui s’est passé AVANT que les randonneurs appellent les secours ?',
      ['La température était passée sous zéro', 'Les secouristes les avaient soignés', 'Ils s’étaient abrités dans un refuge'], 0,
      '« By the time they called for help, the temperature had dropped below zero » : le past perfect situe la chute de température avant l’appel.',
      {
        d: 1.2,
        passage:
          'Two hikers who had set off to climb Ben Nevis on Saturday morning were rescued late that night. According to the rescue team, the pair had ignored a weather warning and had not taken torches. By the time they called for help, the temperature had dropped below zero and thick fog was covering the summit. “They were sitting behind a rock, shivering, when we found them,” said one volunteer. Both were treated for mild hypothermia.',
      })
    .listen('When I got to the office, everyone had already gone home.', 'Que s’est-il passé ?',
      ['Tout le monde était déjà parti quand il est arrivé', 'Tout le monde est parti au moment où il est arrivé', 'Il est parti avant tout le monde'], 0,
      'had already gone = étaient déjà partis, avant son arrivée.', { d: 1.0 })
    .listen('I was waiting for the bus when I saw my old teacher across the street.', 'Que faisait-il quand il a vu son ancien professeur ?',
      ['Il attendait le bus', 'Il traversait la rue', 'Il descendait du bus'], 0,
      'was waiting = action en cours ; saw = action courte qui survient.', { kc: PC, d: 0.8 })
    .dictation('She realised she had left her passport at the hotel.', 'realise (UK) / realize (US) ; had left = avait laissé.',
      { accepted: ['She realised she had left her passport at the hotel.', 'She realized she had left her passport at the hotel.', 'She realised she’d left her passport at the hotel.'], d: 1.1 })
    .tr('Quand je suis {arrivé|arrivée}, le film avait déjà commencé.',
      ['When I arrived, the film had already started.', 'When I arrived, the movie had already started.', 'When I arrived, the film had already begun.',
        'When I got there, the film had already started.', 'The film had already started when I arrived.', 'The movie had already started when I arrived.'],
      'Le film a commencé avant l’arrivée → had already started. already se place entre had et le participe.', { d: 1.1 })
    .tr('Il pleuvait et les gens couraient pour s’abriter.',
      ['It was raining and people were running for shelter.', 'It was raining and people were running for cover.',
        'It was raining and people were running to take shelter.', 'It was raining and people were running to find shelter.'],
      'Deux actions de décor simultanées → past continuous pour les deux.', { kc: PC, d: 1.0 })
    .say('Je n’avais jamais pris l’avion avant l’année dernière.',
      ['I had never flown before last year', 'I’d never flown before last year', 'I had never taken a plane before last year', 'I had never been on a plane before last year'],
      'had never + participe passé : fly, flew, flown.', { d: 1.2 })
    .answer('Describe a time when something went wrong on a trip. What had happened before?',
      'When we reached the airport, we realised that our flight had been cancelled because the crew had gone on strike.',
      'Utilise le past simple pour les actions et le past perfect (had + participe) pour ce qui s’était passé avant.',
      { kc: [PP, PC], keywords: [['had'], ['when', 'by the time', 'because', 'before']], minWords: 12, d: 1.3 })
    .build(),
};

export const narrative2: Lesson = {
  id: 'b2-narrative-2',
  cefr: 'B2',
  unitId: 'b2-narrative',
  title: 'Past perfect continuous et enchaînement du récit',
  subtitle: 'Ce qui durait depuis un moment, et les mots pour enchaîner',
  kcIds: [PPC, SEQ],
  estMinutes: 8,
  explanation: [
    {
      title: 'had been + -ing',
      body: 'Le past perfect continuous insiste sur la DURÉE d’une activité qui se prolongeait jusqu’à un moment du passé, ou qui en explique le résultat visible.',
      table: [
        ['forme', 'had been + verbe en -ing'],
        ['durée', 'She had been working there for ten years when she left.'],
        ['cause visible', 'The ground was wet. It had been raining.'],
      ],
      examples: [
        { en: 'We had been driving for hours when we saw the sign.', fr: 'Nous roulions depuis des heures quand nous avons vu le panneau.' },
        { en: 'His hands were dirty because he had been fixing his bike.', fr: 'Il avait les mains sales parce qu’il avait réparé son vélo.' },
      ],
      tip: 'Piège classique : « Il attendait depuis deux heures » ne se dit pas « He was waiting since two hours » ✗ mais « He had been waiting for two hours » ✓. Durée → for, point de départ → since.',
    },
    {
      title: 'Simple ou continuous ?',
      table: [
        ['had done : résultat, quantité, action terminée', 'I had written three emails.'],
        ['had been doing : activité, durée', 'I had been writing emails all morning.'],
      ],
    },
    {
      title: 'Enchaîner les étapes',
      table: [
        ['by the time + past simple', 'à ce moment-là, l’autre action était déjà finie (past perfect)'],
        ['as soon as / once', 'dès que'],
        ['eventually / in the end', 'finalement, au bout du compte'],
        ['meanwhile', 'pendant ce temps'],
        ['afterwards', 'ensuite, après coup'],
      ],
      examples: [
        { en: 'By the time I found my keys, the taxi had gone.', fr: 'Le temps que je trouve mes clés, le taxi était parti.' },
        { en: 'We waited for hours, but eventually the doors opened.', fr: 'Nous avons attendu des heures, mais les portes ont fini par s’ouvrir.' },
      ],
      tip: 'Faux ami : eventually = finalement, pas « éventuellement » (qui se dit possibly ou perhaps).',
    },
  ],
  exercises: exercises('b2-narrative-2', 'B2', { kc: PPC, tense: 'past_perfect_continuous' })
    .cloze('We ___ for over an hour when the waiter finally took our order.', ['had been waiting'],
      'Durée (for over an hour) jusqu’à un moment passé → had been waiting.', { hint: 'wait', d: 1.1 })
    .cloze('His clothes were covered in paint because he ___ the kitchen all morning.', ['had been decorating'],
      'Activité prolongée qui explique un résultat visible → had been decorating.', { hint: 'decorate', d: 1.2 })
    .mcq('She ___ at the company for ten years when she decided to start her own business.', ['has been working', 'had been working', 'is working'], 1,
      'Durée jusqu’à un moment du passé (when she decided) → had been working.', { d: 1.0 })
    .mcq('By midnight, I ___ three chapters of the report.', ['had been writing', 'had written', 'was writing'], 1,
      'Une quantité terminée (three chapters) → résultat → past perfect simple : had written.', { kc: [PPC, PP], d: 1.3, tense: 'past_perfect' })
    .mcq('We got lost twice, but ___ we found the hotel.', ['eventually', 'possibly', 'actually'], 0,
      'eventually = finalement, au bout du compte. Faux ami avec « éventuellement ».', { kc: SEQ, d: 0.9 })
    .cloze('___ the time we reached the beach, the sun had set.', ['By'],
      'By the time + past simple, puis past perfect pour l’action déjà terminée.', { kc: SEQ, d: 0.9 })
    .order('Ils se disputaient depuis des mois avant de se séparer.', 'They had been arguing for months before they split up.',
      'Durée → had been + -ing ; for + durée (pas since).', { distractors: ['since', 'were'], d: 1.3 })
    .mcq('Pourquoi les passagers n’étaient-ils pas surpris par la panne ?',
      ['Le chauffeur se plaignait du moteur depuis le déjeuner', 'Le bus était déjà tombé en panne le matin', 'Un fermier les avait prévenus'], 0,
      '« The driver had been complaining about the engine since lunchtime » : activité qui durait avant la panne.',
      {
        kc: [PPC, SEQ],
        d: 1.3,
        passage:
          'I had been travelling for nearly fourteen hours when the bus finally broke down in the middle of nowhere. At first, nobody seemed worried. The driver had been complaining about the engine since lunchtime, so we had expected something like this. Eventually, a farmer stopped and offered to take three of us to the nearest town. By the time a replacement bus arrived the next morning, I had already found a room, had a shower and eaten the best breakfast of my life.',
      })
    .listen('I’d been looking forward to the concert for weeks, but in the end it was cancelled.', 'Qu’est-il arrivé au concert ?',
      ['Il a finalement été annulé', 'Il a été reporté de quelques semaines', 'Il a été décevant'], 0,
      'in the end = finalement ; was cancelled = a été annulé.', { kc: SEQ, d: 1.0 })
    .listen('Her eyes were red because she had been crying.', 'Pourquoi avait-elle les yeux rouges ?',
      ['Elle avait pleuré', 'Elle était fatiguée', 'Elle avait une allergie'], 0,
      'had been crying : activité récente qui explique un résultat visible.', { d: 0.9 })
    .dictation('They had been living in Lisbon for two years before they moved to Berlin.', 'had been living + for two years : durée avant le déménagement.',
      { accepted: ['They had been living in Lisbon for two years before they moved to Berlin.', 'They’d been living in Lisbon for two years before they moved to Berlin.', 'They had been living in Lisbon for 2 years before they moved to Berlin.'], d: 1.2 })
    .tr('Elle attendait depuis vingt minutes quand le bus est arrivé.',
      ['She had been waiting for twenty minutes when the bus arrived.', 'She had been waiting for 20 minutes when the bus arrived.',
        'She had been waiting for twenty minutes when the bus came.', 'She had been waiting for 20 minutes when the bus came.'],
      'Imparfait + depuis, dans un récit passé → had been + -ing + for.', { d: 1.4 })
    .tr('Dès que le patron est parti, tout le monde s’est détendu.',
      ['As soon as the boss left, everyone relaxed.', 'As soon as the boss had left, everyone relaxed.', 'As soon as the boss left, everybody relaxed.',
        'Once the boss left, everyone relaxed.', 'Once the boss had left, everyone relaxed.', 'As soon as the boss had left, everybody relaxed.'],
      'dès que = as soon as (ou once). Le past perfect est possible pour souligner l’antériorité.', { kc: SEQ, d: 1.2 })
    .say('J’étais {fatigué|fatiguée} parce que j’avais travaillé toute la journée.',
      ['I was tired because I had been working all day', 'I was tired because I’d been working all day', 'I was tired because I had worked all day',
        'I was exhausted because I had been working all day'],
      'Activité prolongée qui explique la fatigue → had been working all day.', { d: 1.2 })
    .answer('Tell a short story about a day when everything went wrong. Use “by the time” or “eventually”.',
      'By the time I got to work, I had been stuck in traffic for two hours, and eventually my boss sent me home.',
      'Combine past simple, past perfect (continuous) et un connecteur de récit.',
      { kc: [SEQ, PPC], keywords: [['had been', 'had'], ['by the time', 'eventually', 'in the end', 'as soon as']], minWords: 14, d: 1.4 })
    .build(),
};
