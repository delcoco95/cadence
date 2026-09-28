import type { Lesson } from '../types';
import { exercises } from '../builders';

export const whQuestions: Lesson = {
  id: 'a2-questions-1',
  cefr: 'A2',
  unitId: 'a2-questions',
  title: 'Poser des questions',
  subtitle: 'What, where, when, who, why, how…',
  kcIds: ['grammar.questions.wh', 'grammar.questions.subject'],
  estMinutes: 7,
  explanation: [
    {
      title: 'Les mots interrogatifs',
      table: [
        ['What', 'quoi / quel : What do you do?'],
        ['Where', 'où : Where do you live?'],
        ['When', 'quand : When does the meeting start?'],
        ['Who', 'qui : Who is your manager?'],
        ['Why', 'pourquoi : Why are you late? — Because…'],
        ['How', 'comment : How do you go to work?'],
        ['How much / How many', 'combien (indénombrable / dénombrable)'],
        ['How long / How often / How old', 'combien de temps / à quelle fréquence / quel âge'],
        ['Which', 'lequel / quel (choix limité) : Which one do you prefer?'],
      ],
    },
    {
      title: 'Structure',
      body: 'Mot interrogatif + auxiliaire (do/does/did/is/are/can…) + sujet + verbe.',
      examples: [
        { en: 'Where did you go?', fr: 'Où es-tu allé ?' },
        { en: 'What are you doing?', fr: 'Qu’est-ce que tu fais ?' },
      ],
      tip: 'Quand « who » ou « what » est le SUJET, pas d’auxiliaire : « Who called you? » (qui t’a appelé ?) mais « Who did you call? » (qui as-tu appelé ?).',
    },
  ],
  exercises: exercises('a2-questions-1', 'A2', { kc: 'grammar.questions.wh' })
    .mcq('___ do you live? — In Lyon.', ['What', 'Where', 'When'], 1, 'Lieu → Where.', { d: -2 })
    .mcq('___ is your birthday? — In May.', ['When', 'Where', 'Who'], 0, 'Moment → When.', { d: -2 })
    .mcq('___ are you late? — Because I missed the bus.', ['How', 'Why', 'What'], 1, 'Cause → Why … ? — Because…', { d: -1.5 })
    .mcq('___ brothers and sisters do you have?', ['How much', 'How many', 'How often'], 1, 'Dénombrable → How many.')
    .mcq('___ does the ticket cost?', ['How many', 'How much', 'How long'], 1, 'Prix → How much.')
    .mcq('___ do you go to the gym? — Twice a week.', ['How often', 'How long', 'How much'], 0, 'Fréquence → How often.')
    .mcq('Qui t’a appelé ?', ['Who did call you?', 'Who called you?', 'Who you called?'], 1, 'Who est le sujet → pas de did : Who called you?', { kc: 'grammar.questions.subject', d: 0.5 })
    .cloze('What ___ you do last weekend?', ['did'], 'Passé → did + base.', { d: -0.5 })
    .cloze('Where ___ she work?', ['does'], 'She au présent → does.')
    .cloze('How ___ is your son? — He’s seven.', ['old'], 'L’âge → How old.', { d: -1 })
    .order('Combien de temps dure le trajet ?', 'How long does the journey take?', 'Durée → How long + does … take.', { distractors: ['much', 'is'], d: 0 })
    .order('Quel ordinateur est le tien ?', 'Which computer is yours?', 'Choix parmi plusieurs → Which.', { d: 0 })
    .tr('Que fais-tu ce soir ?', ['What are you doing tonight?', 'What are you doing this evening?', 'What are you doing this evening'], 'Projet proche → present continuous : What are you doing…?', { d: 0.3 })
    .tr('Pourquoi est-ce que tu apprends l’anglais ?', ['Why are you learning English?', 'Why do you learn English?'], 'Why + are you learning / do you learn.', { d: 0.3 })
    .listen('How long have you worked here?', 'Que demande-t-on ?', ['Depuis combien de temps tu travailles ici', 'Combien tu gagnes', 'À quelle heure tu travailles'], 0,
      'How long = combien de temps.')
    .listen('Who did you meet at the conference?', 'Que veut-on savoir ?', ['Qui tu as rencontré', 'Qui t’a rencontré', 'Où était la conférence'], 0,
      'Who did you meet = qui as-tu rencontré (who est complément, donc did).', { kc: 'grammar.questions.subject' })
    .repeat('Where are you from? How long are you staying?', 'Deux questions très utiles en voyage.')
    .say('À quelle heure commence la réunion ?', ['What time does the meeting start', 'When does the meeting start', 'What time is the meeting'], 'What time + does + the meeting + start.')
    .say('Combien ça coûte ?', ['How much is it', 'How much does it cost', 'How much is this', 'How much does this cost'], 'Prix → How much.')
    .answer('Imagine you meet a new colleague. Ask them three questions.', 'Where do you live? How long have you worked here? What do you do in your free time?',
      'Pose trois questions différentes avec what, where, how…', { keywords: [['what', 'where', 'when', 'who', 'why', 'how', 'which']], minWords: 10 })
    .build(),
};

export const futureForms: Lesson = {
  id: 'a2-future-1',
  cefr: 'A2',
  unitId: 'a2-future',
  title: 'Futur : going to et will',
  subtitle: 'Projets, prédictions et décisions',
  kcIds: ['tense.future.going_to', 'tense.future.will'],
  estMinutes: 7,
  explanation: [
    {
      title: 'be going to + base',
      body: 'Projet déjà décidé, ou prédiction basée sur ce qu’on voit.',
      examples: [
        { en: 'I’m going to visit my parents this weekend.', fr: 'Je vais rendre visite à mes parents ce week-end.' },
        { en: 'Look at those clouds. It’s going to rain.', fr: 'Regarde ces nuages. Il va pleuvoir.' },
      ],
    },
    {
      title: 'will + base',
      body: 'Décision prise au moment où on parle, promesse, offre, prédiction/opinion.',
      examples: [
        { en: 'The phone is ringing. — I’ll answer it.', fr: 'Le téléphone sonne. — Je réponds.' },
        { en: 'I think it will be difficult.', fr: 'Je pense que ce sera difficile.' },
      ],
      table: [
        ['affirmation', 'I’ll / she’ll / they’ll work'],
        ['négation', 'won’t (= will not) work'],
        ['question', 'Will you help me?'],
      ],
      tip: 'Après will, jamais de « to » : « I will to go » ✗ → « I will go » ✓.',
    },
  ],
  exercises: exercises('a2-future-1', 'A2', { kc: 'tense.future.will', tense: 'future' })
    .mcq('I’ve decided: I ___ a new laptop next month.', ['will buy', 'am going to buy', 'buy'], 1, 'Décision déjà prise → going to.', { kc: 'tense.future.going_to' })
    .mcq('Somebody is at the door. — OK, I ___ open it.', ['am going to', 'will', 'will to'], 1, 'Décision sur le moment → I will (I’ll).', { d: -0.5 })
    .mcq('Look! That glass ___ fall!', ['is going to', 'will', 'goes to'], 0, 'Prédiction basée sur ce qu’on voit → is going to.', { kc: 'tense.future.going_to' })
    .mcq('I promise I ___ tell anyone.', ['won’t', 'don’t', 'am not going'], 0, 'Promesse → will / won’t.')
    .mcq('Choisis la phrase correcte.', ['She will to call you.', 'She will call you.', 'She wills call you.'], 1, 'will + base verbale, sans to ni -s.', { d: -1.5 })
    .cloze('We ___ (go) to Spain this summer. We booked the flights.', ["are going to go", "'re going to go", 'are going'], 'Projet organisé → going to (ou present continuous).', { kc: 'tense.future.going_to', loose: true, d: 0 })
    .cloze('I think the meeting ___ be long.', ['will'], 'Opinion / prédiction avec « I think » → will.')
    .cloze('Don’t worry, I ___ help you with the report.', ['will', "'ll"], 'Offre / promesse → will.')
    .cloze('They ___ (not / come) tomorrow, they’re ill.', ["aren't going to come", 'are not going to come', "won't come", 'will not come'], 'Négation : aren’t going to / won’t.', { loose: true, d: 0 })
    .order('Qu’est-ce que tu vas faire ce week-end ?', 'What are you going to do this weekend?', 'Question avec going to : What + are you going to + base.', { kc: 'tense.future.going_to', distractors: ['will'] })
    .tr('Je vais appeler le client demain.', ["I'm going to call the client tomorrow.", 'I am going to call the client tomorrow.', "I'll call the client tomorrow.", 'I will call the client tomorrow.', "I'm going to call the customer tomorrow.", "I'll call the customer tomorrow."],
      'Projet → going to (will est aussi accepté).', { kc: 'tense.future.going_to' })
    .tr('Il ne pleuvra pas demain.', ["It won't rain tomorrow.", 'It will not rain tomorrow.', "It isn't going to rain tomorrow.", "It's not going to rain tomorrow."], 'won’t = will not.', { d: 0 })
    .listen('I’m going to start a new job in January.', 'Quand commence-t-il son nouveau travail ?', ['En janvier', 'Demain', 'En juin'], 0, 'going to = projet décidé.', { kc: 'tense.future.going_to' })
    .listen('I’m hungry. — I’ll make you a sandwich.', 'Que propose la personne ?', ['Faire un sandwich', 'Aller au restaurant', 'Commander une pizza'], 0, 'I’ll = décision sur le moment.')
    .repeat('I’ll call you back in five minutes.', 'Phrase très utile au téléphone : I’ll call you back = je te rappelle.')
    .say('Je vais apprendre l’anglais tous les jours.', ["I'm going to learn English every day", 'I am going to learn English every day', "I'll learn English every day", 'I will learn English every day'],
      'Projet → going to.', { kc: 'tense.future.going_to' })
    .answer('What are you going to do next weekend?', 'Next weekend I’m going to visit my family and I’m going to cook a big dinner.',
      'Parle de tes projets avec « I’m going to… ».', { keywords: [['going to']], kc: 'tense.future.going_to', minWords: 8 })
    .answer('How do you think your life will be in ten years?', 'In ten years I think I will speak English fluently and I will work abroad.',
      'Fais des prédictions avec will.', { keywords: [['will', "'ll", "won't"]], minWords: 8, d: 0.5 })
    .build(),
};
