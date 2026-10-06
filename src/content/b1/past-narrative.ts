import type { Lesson } from '../types';
import { exercises } from '../builders';

const PC = 'b1.tense.past_continuous.form';
const VS = 'b1.tense.contrast.past_continuous_vs_simple';
const UT = 'b1.grammar.used_to';
const UTN = 'b1.grammar.used_to.negative_question';

export const pastNarrative1: Lesson = {
  id: 'b1-past-narrative-1',
  cefr: 'B1',
  unitId: 'b1-past-narrative',
  title: 'Past continuous et past simple',
  subtitle: 'I was cooking when the phone rang',
  kcIds: [PC, VS],
  estMinutes: 8,
  explanation: [
    {
      title: 'Forme du past continuous',
      table: [
        ['I / he / she / it', 'was working · wasn’t working'],
        ['you / we / they', 'were working · weren’t working'],
        ['question', 'What were you doing?'],
      ],
      examples: [
        { en: 'At 9 pm I was watching a series.', fr: 'À 21 h, je regardais une série.' },
        { en: 'What were you doing when I called?', fr: 'Que faisais-tu quand j’ai appelé ?' },
      ],
    },
    {
      title: 'Le décor et l’événement',
      body: 'Le past continuous décrit l’action en cours (le décor) ; le past simple, l’événement qui l’interrompt ou qui fait avancer l’histoire.',
      table: [
        ['when + past simple', 'I was having a shower when the doorbell rang.'],
        ['while + past continuous', 'While I was having a shower, the doorbell rang.'],
        ['deux actions en parallèle', 'While I was cooking, my flatmate was setting the table.'],
      ],
      examples: [
        { en: 'We were walking in the park when it started to rain.', fr: 'Nous nous promenions dans le parc quand il a commencé à pleuvoir.' },
      ],
      tip: 'L’imparfait français n’est pas toujours un past continuous : pour les états (I was tired, I knew) et les habitudes (I used to play), on n’utilise pas -ing.',
    },
  ],
  exercises: exercises('b1-past-narrative-1', 'B1', { kc: VS, tense: 'past_continuous' })
    .cloze('At 8 pm yesterday I ___ dinner.', ['was cooking'], 'Action en cours à un moment précis → was + -ing.', { kc: PC, hint: 'cook', d: -0.4 })
    .cloze('They ___ TV when the power went off.', ['were watching'], 'Action en cours, interrompue → were watching.', { hint: 'watch', d: -0.2 })
    .mcq('What ___ you doing when I called?', ['were', 'was', 'did'], 0, 'you → were + -ing.', { kc: PC, d: -0.4 })
    .mcq('I ___ my keys while I was running.', ['lost', 'was losing', 'have lost'], 0, 'L’événement ponctuel → past simple ; le décor → past continuous.', { d: 0 })
    .mcq('While she ___, someone stole her bag.', ['was shopping', 'shopped', 'is shopping'], 0, 'while + action en cours → past continuous.', { d: 0 })
    .mcq('I ___ in the garden when it started to rain, so I went inside.', ['was working', 'worked', 'work'], 0, 'Action en cours interrompue par la pluie → was working.', { d: 0.2 })
    .order('Il conduisait quand il a vu l’accident.', 'He was driving when he saw the accident.', 'Décor (was driving) + événement (saw).', { distractors: ['drove'], d: 0 })
    .type('Relie avec while : I was studying. My flatmate was playing music.', ['While I was studying, my flatmate was playing music.', 'My flatmate was playing music while I was studying.', 'I was studying while my flatmate was playing music.', 'While my flatmate was playing music, I was studying.'],
      'Deux actions en parallèle → while + past continuous des deux côtés.', { loose: true, d: 0.5 })
    .tr('Il pleuvait quand nous sommes arrivés.', ['It was raining when we arrived.', 'It was raining when we got there.', 'When we arrived, it was raining.', 'It was raining when we got here.'],
      'Décor (it was raining) + événement (we arrived).', { d: 0.3 })
    .tr('Que faisais-tu hier soir à 21 h ?', ['What were you doing at 9 pm last night?', 'What were you doing at 9 p.m. last night?', 'What were you doing at 9pm last night?', 'What were you doing last night at 9 pm?', 'What were you doing at 9 last night?', 'What were you doing at nine last night?', 'What were you doing at 9 pm yesterday evening?'],
      'Action en cours à une heure précise → What were you doing…?', { kc: PC, d: 0.4 })
    .listen('I was walking to work when I bumped into my old teacher.', 'Qu’est-il arrivé ?', ['Il a croisé son ancien professeur', 'Il est tombé en allant au travail', 'Il a raté son bus'], 0,
      'bump into someone = tomber sur quelqu’un, le croiser par hasard.', { d: -0.1 })
    .listen('While we were having dinner, the neighbours were arguing loudly.', 'Que faisaient les voisins ?', ['Ils se disputaient', 'Ils dînaient avec eux', 'Ils faisaient la fête'], 0,
      'were arguing = se disputaient (action en parallèle).', { kc: PC, d: 0 })
    .dictation('The sun was shining and the children were playing outside.', 'Le past continuous plante le décor d’une histoire.', { kc: PC, d: 0 })
    .say('Je dormais quand tu as appelé.', ['I was sleeping when you called', 'I was asleep when you called', 'I was sleeping when you rang'], 'Décor (was sleeping) + événement (called).', { d: 0.3 })
    .answer('What were you doing at this time yesterday?', 'At this time yesterday I was sitting in a meeting and I was taking notes.', 'I was + -ing pour une action en cours à un moment précis.',
      { kc: PC, keywords: [['was', 'were']], minWords: 8, d: 0.5 })
    .build(),
};

export const pastNarrative2: Lesson = {
  id: 'b1-past-narrative-2',
  cefr: 'B1',
  unitId: 'b1-past-narrative',
  title: 'used to : les habitudes passées',
  subtitle: 'I used to live in Marseille',
  kcIds: [UT, UTN],
  estMinutes: 8,
  explanation: [
    {
      title: 'Forme et sens',
      body: 'used to + base verbale = une habitude ou un état du passé qui n’est plus vrai aujourd’hui.',
      table: [
        ['affirmation', 'I used to play the piano.'],
        ['négation', 'I didn’t use to like olives.'],
        ['question', 'Did you use to live in Paris?'],
      ],
      examples: [
        { en: 'I used to smoke, but I stopped five years ago.', fr: 'Avant, je fumais, mais j’ai arrêté il y a cinq ans.' },
        { en: 'There used to be a bakery on this corner.', fr: 'Il y avait une boulangerie à ce coin de rue.' },
        { en: 'Did you use to walk to school?', fr: 'Tu allais à l’école à pied ?' },
      ],
      tip: 'Après did / didn’t, on écrit use (sans d) : « Did you used to » ✗ → « Did you use to » ✓.',
    },
    {
      title: 'Pièges',
      table: [
        ['habitude présente', 'I usually cycle to work. (pas « I use to »)'],
        ['action unique datée', 'I went to Rome in 2015. (pas « used to go »)'],
      ],
      tip: 'used to n’existe qu’au passé. Pour une habitude actuelle, utilise le present simple + usually.',
    },
  ],
  exercises: exercises('b1-past-narrative-2', 'B1', { kc: UT, tense: 'used_to' })
    .cloze('I ___ to live in Marseille, but now I live in Lille.', ['used'], 'Situation passée terminée → used to.', { d: -0.5 })
    .mcq('When I was a child, I ___ eat vegetables.', ["didn't use to", "didn't used to", "wasn't use to"], 0, 'didn’t + use to (sans d).', { kc: UTN, d: 0 })
    .mcq('___ you use to play an instrument?', ['Did', 'Do', 'Were'], 0, 'Question → Did you use to…?', { kc: UTN, d: -0.3 })
    .mcq('Quelle phrase décrit une habitude ACTUELLE ?', ['I usually cycle to work.', 'I used to cycle to work.', 'I use to cycle to work.'], 0,
      'used to = passé uniquement. Habitude actuelle → present simple + usually.', { d: 0.3 })
    .cloze('There ___ to be a cinema here, but it closed.', ['used'], 'There used to be = il y avait (autrefois).', { d: 0 })
    .order('Elle ne portait pas de lunettes avant.', "She didn't use to wear glasses.", 'didn’t use to + base.', { kc: UTN, distractors: ['used'], d: 0.2 })
    .type('Réécris avec used to : When I was a student, I worked in a bar every weekend.', ['When I was a student, I used to work in a bar every weekend.', 'I used to work in a bar every weekend when I was a student.'],
      'worked (habitude passée) → used to work.', { loose: true, d: 0.3 })
    .tr('Avant, je fumais, mais j’ai arrêté.', ['I used to smoke, but I stopped.', 'I used to smoke, but I quit.', 'I used to smoke, but I gave up.', "I used to smoke, but I've stopped.", "I used to smoke, but I've quit.", "I used to smoke, but I've given up."],
      '« Avant, je… » → I used to…', { d: 0.3 })
    .tr('Est-ce que tu habitais à la campagne quand tu étais enfant ?', ['Did you use to live in the countryside when you were little?', 'Did you use to live in the countryside when you were a child?', 'Did you use to live in the countryside when you were young?', 'Did you use to live in the country when you were little?', 'Did you use to live in the country when you were a child?', 'Did you live in the countryside when you were little?', 'Did you live in the countryside when you were a child?'],
      'Did you use to + base.', { kc: UTN, d: 0.5 })
    .listen('My grandfather used to walk five kilometres to school every day.', 'Que faisait le grand-père ?', ['Il marchait 5 km pour aller à l’école', 'Il était instituteur', 'Il court 5 km chaque jour'], 0,
      'used to walk = il marchait (habitude passée).', { d: -0.2 })
    .listen('I didn’t use to like coffee, but now I drink three cups a day.', 'Et maintenant ?', ['Elle boit trois cafés par jour', 'Elle n’aime toujours pas le café', 'Elle a arrêté le café'], 0,
      'didn’t use to like = avant, je n’aimais pas ; but now… = mais maintenant.', { kc: UTN, d: 0 })
    .mcq('Qu’est devenu le vieux port ?', ['Un quartier de restaurants et de galeries', 'Toujours un port de pêche actif', 'Une zone industrielle abandonnée'], 0,
      'the warehouses have become restaurants and art galleries.',
      { passage: 'From a local history blog:\nFifty years ago, the old port used to be the busiest part of town. Fishermen used to sell their catch on the quay every morning. Today, the warehouses have become restaurants and art galleries, and tourists have replaced the fishermen.', d: 0.3 })
    .dictation('We used to spend every summer at my aunt’s house by the sea.', 'used to spend = nous passions (chaque été).', { accepted: ["We used to spend every summer at my aunt's house by the sea."], d: 0.1 })
    .say('Avant, je n’aimais pas le sport.', ["I didn't use to like sport", "I didn't use to like sports", 'I did not use to like sport', "I didn't like sport before", "I didn't use to like sport before"],
      'didn’t use to + like.', { kc: UTN, d: 0.3 })
    .answer('What did you use to do when you were a teenager that you don’t do now?', 'When I was a teenager I used to play video games every night, but now I prefer reading.',
      'I used to… but now…', { keywords: [['used to', 'use to']], minWords: 10, d: 0.6 })
    .build(),
};
