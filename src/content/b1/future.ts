import type { Lesson } from '../types';
import { exercises } from '../builders';

const ARR = 'b1.tense.future.arrangements';
const WG = 'b1.tense.future.will_vs_going_to';
const TC = 'b1.grammar.future_time_clauses';

export const future1: Lesson = {
  id: 'b1-future-1',
  cefr: 'B1',
  unitId: 'b1-future',
  title: 'will, going to, present continuous',
  subtitle: 'Décisions, projets et rendez-vous',
  kcIds: [ARR, WG],
  estMinutes: 8,
  explanation: [
    {
      title: 'Trois façons de parler du futur',
      table: [
        ['will', 'décision sur le moment, offre, promesse, opinion : I’ll help you. I think it’ll be fine.'],
        ['be going to', 'intention déjà décidée, prédiction avec un indice : I’m going to apply. Look, it’s going to rain.'],
        ['present continuous', 'rendez-vous fixé (date, heure, autre personne) : I’m meeting Tom at six.'],
      ],
      examples: [
        { en: 'The phone’s ringing. — I’ll get it!', fr: 'Le téléphone sonne. — J’y vais !' },
        { en: 'We’re going to repaint the kitchen this summer.', fr: 'Nous allons repeindre la cuisine cet été.' },
        { en: 'I’m having lunch with a client tomorrow.', fr: 'Je déjeune avec un client demain.' },
      ],
      tip: '« Je vais » ne se traduit pas toujours par going to : une décision prise à l’instant se dit avec will (« Je vais te le chercher » → I’ll get it for you).',
    },
  ],
  exercises: exercises('b1-future-1', 'B1', { kc: WG, tense: 'future' })
    .mcq('"Are you free on Thursday?" — "Sorry, I ___ my parents up at the airport."', ['’m picking', 'pick', '’ll picking'], 0, 'Rendez-vous déjà organisé → present continuous.', { kc: ARR, d: 0 })
    .mcq('"The printer isn’t working." — "Don’t worry, I ___ have a look."', ['’ll', '’m going to', '’m'], 0, 'Décision prise à l’instant, offre d’aide → will.', { d: -0.3 })
    .mcq('Look at the traffic! We ___ miss our flight.', ['are going to', 'are', 'go to'], 0, 'Prédiction avec un indice visible → going to.', { d: -0.2 })
    .mcq('I’ve made up my mind: I ___ apply for that job.', ['am going to', 'will be', 'going to'], 0, 'Intention déjà décidée → am going to.', { d: -0.1 })
    .cloze('What time ___ you leaving tomorrow?', ['are'], 'Programme fixé → What time are you leaving?', { kc: ARR, d: -0.3 })
    .cloze('I think it ___ be a great party.', ['will', "'ll"], 'Opinion sur le futur (I think…) → will.', { d: -0.4 })
    .order('Nous dînons chez Marc samedi soir.', "We're having dinner at Marc's on Saturday evening.", 'Rendez-vous fixé → present continuous.', { kc: ARR, distractors: ['will'], d: 0.1 })
    .cloze('It’s cold in here. — OK, I ___ close the window.', ["'ll", 'will'], 'Réaction spontanée → I’ll.', { d: -0.2 })
    .tr('Je vais commencer un nouveau travail en septembre.', ["I'm going to start a new job in September.", 'I am going to start a new job in September.', "I'm starting a new job in September.", 'I am starting a new job in September.', "I'll start a new job in September.", 'I will start a new job in September.'],
      'Projet décidé → going to, ou present continuous si c’est organisé.', { kc: ARR, d: 0.3 })
    .tr('Ne t’inquiète pas, je ne le dirai à personne.', ["Don't worry, I won't tell anyone.", "Don't worry, I will not tell anyone.", "Don't worry, I won't tell anybody.", "Don't worry. I won't tell anyone."],
      'Promesse → will / won’t.', { d: 0.4 })
    .listen('I can’t come to the gym tonight — I’m seeing a client at six.', 'Pourquoi ne vient-il pas à la salle ?', ['Il a rendez-vous avec un client à 18 h', 'Il va chez le médecin', 'Il garde ses enfants'], 0,
      'I’m seeing a client at six = rendez-vous fixé.', { kc: ARR, d: -0.1 })
    .listen('Careful! That glass is going to fall.', 'Que se passe-t-il ?', ['Un verre est sur le point de tomber', 'Un verre est tombé', 'Quelqu’un va servir à boire'], 0,
      'Indice visible → is going to fall.', { d: -0.2 })
    .dictation('We’re flying to Dublin on Friday morning.', 'Voyage réservé → present continuous.', { kc: ARR, accepted: ["We're flying to Dublin on Friday morning."], d: 0 })
    .say('Qu’est-ce que tu fais ce week-end ?', ['What are you doing this weekend', 'What are you doing at the weekend', 'What are you doing on the weekend', 'What are you going to do this weekend'],
      'Programme → What are you doing…?', { kc: ARR, d: 0.2 })
    .answer('What are your plans for next weekend?', 'Next weekend I am going to visit my sister and on Sunday I am playing tennis with a friend.',
      'going to pour les intentions, present continuous pour ce qui est organisé.', { kc: ARR, keywords: [['going to', 'am playing', 'am meeting', 'am seeing', 'will']], minWords: 10, d: 0.5 })
    .build(),
};

export const future2: Lesson = {
  id: 'b1-future-2',
  cefr: 'B1',
  unitId: 'b1-future',
  title: 'when, as soon as, until… + présent',
  subtitle: 'I’ll call you when I arrive',
  kcIds: [TC],
  estMinutes: 7,
  explanation: [
    {
      title: 'Pas de will après when',
      body: 'Après les conjonctions de temps, l’anglais utilise le présent même si l’action est future. will reste dans la proposition principale.',
      table: [
        ['when', 'I’ll call you when I get home.'],
        ['as soon as', 'We’ll start as soon as everyone arrives.'],
        ['before / after', 'Have breakfast before you leave.'],
        ['until', 'Wait here until I come back.'],
        ['once', 'Once you’ve finished, you can go.'],
      ],
      examples: [
        { en: 'I’ll send you the file as soon as I find it.', fr: 'Je t’enverrai le fichier dès que je le trouverai.' },
        { en: 'When she gets her degree, she’ll move to London.', fr: 'Quand elle aura son diplôme, elle partira à Londres.' },
      ],
      tip: 'Le français met un futur (« quand je serai ») ; l’anglais met un présent : « when I will be » ✗ → « when I am » ✓.',
    },
  ],
  exercises: exercises('b1-future-2', 'B1', { kc: TC, tense: 'future' })
    .mcq('I’ll call you when I ___ home.', ['get', 'will get', 'got'], 0, 'Après when (sens futur) → présent.', { d: -0.4 })
    .mcq('As soon as the meeting ___, we’ll go for lunch.', ['finishes', 'will finish', 'finished'], 0, 'as soon as + présent.', { d: -0.2 })
    .cloze('We’ll wait here until the rain ___.', ['stops'], 'until + présent : the rain stops.', { hint: 'stop', d: -0.2 })
    .cloze('She ___ be very happy when she sees the results.', ['will', "'ll"], 'La principale garde will ; la subordonnée (when she sees) reste au présent.', { d: -0.1 })
    .mcq('Quelle phrase est correcte ?', ['Text me when you arrive at the station.', 'Text me when you will arrive at the station.', 'Text me when you arrived at the station.'], 0,
      'when + présent pour une action future.', { d: 0 })
    .order('Je t’enverrai les photos dès que je rentrerai.', "I'll send you the photos as soon as I get back.", 'as soon as + présent (get back).', { distractors: ['will'], d: 0.2 })
    .type('Relie avec after : I finish my degree. I’ll travel around Asia.', ["After I finish my degree, I'll travel around Asia.", 'After I finish my degree, I will travel around Asia.', "I'll travel around Asia after I finish my degree.", 'I will travel around Asia after I finish my degree.', "After I've finished my degree, I'll travel around Asia.", "I'll travel around Asia after I've finished my degree."],
      'after + présent, will dans la principale.', { loose: true, d: 0.5 })
    .tr('Quand je serai à Londres, je visiterai le British Museum.', ["When I'm in London, I'll visit the British Museum.", 'When I am in London, I will visit the British Museum.', "I'll visit the British Museum when I'm in London.", 'I will visit the British Museum when I am in London.', "When I'm in London, I'm going to visit the British Museum.", "When I get to London, I'll visit the British Museum."],
      '« quand je serai » → when I’m (présent).', { d: 0.4 })
    .tr('Préviens-moi dès que tu as des nouvelles.', ['Let me know as soon as you have news.', 'Let me know as soon as you have any news.', 'Let me know as soon as you hear anything.', 'Let me know as soon as you hear something.', 'Let me know as soon as you hear any news.', 'Let me know as soon as you get news.', 'Tell me as soon as you have news.', 'Tell me as soon as you have any news.'],
      'Let me know = préviens-moi ; as soon as + présent.', { d: 0.5 })
    .listen('Once the contract is signed, we’ll start the work.', 'Quand commenceront-ils les travaux ?', ['Une fois le contrat signé', 'Avant la signature', 'La semaine prochaine'], 0,
      'once = une fois que, dès que.', { d: -0.1 })
    .listen('I won’t buy a car until I find a job near home.', 'Que dit-il ?', ['Il achètera une voiture seulement après avoir trouvé un travail près de chez lui', 'Il a déjà acheté une voiture', 'Il cherche une voiture pour aller au travail'], 0,
      'not… until = pas avant que.', { d: 0.3 })
    .mcq('Quand la piscine rouvrira-t-elle ?', ['Jeudi matin', 'Ce soir à 21 h', 'Dès votre arrivée'], 0, 'closed until Thursday morning = fermée jusqu’à jeudi matin.',
      { kc: [TC, WG], passage: 'Dear guests,\nThe swimming pool will be closed for cleaning until Thursday morning. When it reopens, opening hours will be 7 am to 9 pm. You will receive a pool towel as soon as you check in.\nThe Management', d: 0 })
    .dictation('We’ll start dinner as soon as everyone arrives.', 'as soon as + présent (arrives).', { accepted: ["We'll start dinner as soon as everyone arrives."], d: 0.1 })
    .say('Je te rappelle quand j’arrive à la gare.', ["I'll call you back when I get to the station", 'I will call you back when I get to the station', "I'll call you when I get to the station", "I'll call you back when I arrive at the station", "I'll call you when I arrive at the station", "I'll ring you when I get to the station"],
      'Promesse → I’ll ; when + présent.', { kc: [TC, WG], d: 0.3 })
    .answer('What will you do as soon as you finish work today?', 'As soon as I finish work today, I will go to the gym and then I will cook dinner.',
      'as soon as + présent, puis will.', { kc: [TC, WG], keywords: [['as soon as', 'when', 'after'], ['will']], minWords: 10, d: 0.5 })
    .build(),
};
