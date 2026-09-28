import type { Lesson } from '../types';
import { exercises } from '../builders';

export const canCould: Lesson = {
  id: 'a2-modals-1',
  cefr: 'A2',
  unitId: 'a2-modals',
  title: 'Can / could',
  subtitle: 'Capacité, permission, demandes polies',
  kcIds: ['modals.can', 'modals.could_request'],
  estMinutes: 6,
  explanation: [
    {
      title: 'can + base verbale',
      table: [
        ['capacité', 'I can swim. She can’t (cannot) drive.'],
        ['permission', 'Can I open the window?'],
        ['demande', 'Can you help me?'],
        ['passé (capacité)', 'could / couldn’t : I couldn’t sleep last night.'],
        ['demande polie', 'Could you send me the file, please?'],
      ],
      tip: 'Les modaux ne prennent jamais de -s, de « to » ni d’auxiliaire do : « she cans » ✗, « I can to go » ✗, « do you can » ✗.',
    },
  ],
  exercises: exercises('a2-modals-1', 'A2', { kc: 'modals.can' })
    .mcq('She ___ speak three languages.', ['can', 'cans', 'can to'], 0, 'Modal : pas de -s, pas de to.', { d: -2 })
    .mcq('Choisis la question correcte.', ['Do you can help me?', 'Can you help me?', 'Can you to help me?'], 1, 'Question : Can + sujet + base.', { d: -1.5 })
    .mcq('I ___ find my keys yesterday.', ["can't", "couldn't", "don't can"], 1, 'Passé → couldn’t.')
    .mcq('Quelle demande est la plus polie ?', ['Send me the file.', 'Could you send me the file, please?', 'You send me the file.'], 1,
      'Could you… please? = demande polie, indispensable au travail.', { kc: 'modals.could_request' })
    .cloze('___ I use your phone, please?', ['Can', 'Could', 'May'], 'Permission → Can / Could / May I…?', { loose: true, d: -1 })
    .cloze('Sorry, I ___ come to the meeting tomorrow.', ["can't", 'cannot', "won't be able to"], 'Impossibilité → can’t / cannot.', { loose: true })
    .cloze('When I was a child, I ___ play the piano.', ['could'], 'Capacité passée → could.', { d: 0 })
    .order('Pourriez-vous parler plus lentement, s’il vous plaît ?', 'Could you speak more slowly, please?', 'Could you + base + please.', { kc: 'modals.could_request', distractors: ['can', 'to'] })
    .tr('Je ne sais pas nager.', ["I can't swim.", 'I cannot swim.', "I can't swim"], '« savoir faire » = can : I can’t swim.', { d: 0 })
    .tr('Est-ce que je peux payer par carte ?', ['Can I pay by card?', 'Could I pay by card?', 'May I pay by card?', 'Can I pay with a card?', 'Can I pay by credit card?'], 'pay by card = payer par carte.', { d: 0.3 })
    .listen('Sorry, could you repeat that? I couldn’t hear you.', 'Que demande la personne ?', ['De répéter', 'De parler plus fort', 'De rappeler plus tard'], 0,
      'could you repeat that = pourriez-vous répéter.', { kc: 'modals.could_request' })
    .repeat('Could you say that again, please?', 'Phrase de survie : pourriez-vous le redire, s’il vous plaît ?', { kc: 'modals.could_request' })
    .repeat('Sorry, I can’t hear you very well.', 'Utile en visio ou au téléphone.')
    .say('Est-ce que tu peux m’aider ?', ['Can you help me', 'Could you help me'], 'Can / Could you + help + me.')
    .answer('What can you do well? What can’t you do?', 'I can cook quite well and I can speak Spanish, but I can’t sing at all.',
      'Utilise can et can’t.', { keywords: [['can'], ["can't", 'cannot', 'can not']], minWords: 8 })
    .build(),
};

export const obligation: Lesson = {
  id: 'a2-modals-2',
  cefr: 'A2',
  unitId: 'a2-modals',
  title: 'Obligation et conseil',
  subtitle: 'must / have to / don’t have to / should',
  kcIds: ['modals.must_have_to', 'modals.should'],
  estMinutes: 7,
  explanation: [
    {
      title: 'Le sens exact',
      table: [
        ['have to / must', 'obligation : I have to wear a badge.'],
        ['mustn’t', 'interdiction : You mustn’t smoke here.'],
        ['don’t have to', 'absence d’obligation : You don’t have to come (pas obligé).'],
        ['should / shouldn’t', 'conseil : You should rest.'],
      ],
      tip: 'Grand piège : « mustn’t » = interdit ; « don’t have to » = pas obligé. Ce n’est pas du tout la même chose !',
    },
    {
      title: 'Formes',
      body: 'have to se conjugue comme un verbe normal : she has to, did you have to…?, I had to (passé de must et have to).',
    },
  ],
  exercises: exercises('a2-modals-2', 'A2', { kc: 'modals.must_have_to' })
    .mcq('You ___ smoke in the hospital. It’s forbidden.', ["mustn't", "don't have to", "shouldn't to"], 0, 'Interdiction → mustn’t.', { d: -0.5 })
    .mcq('It’s Sunday, so I ___ get up early.', ["mustn't", "don't have to"], 1, 'Pas d’obligation → don’t have to.', { d: 0 })
    .mcq('You look tired. You ___ go to bed.', ['should', 'must to', 'have'], 0, 'Conseil → should.', { kc: 'modals.should', d: -1 })
    .mcq('She ___ work on Saturdays.', ['have to', 'has to', 'must to'], 1, 'she → has to.')
    .mcq('Yesterday I ___ stay late at work.', ['must', 'had to', 'have to'], 1, 'Passé de l’obligation → had to (must n’a pas de passé).', { d: 0 })
    .cloze('You ___ eat so much sugar. It’s bad for you.', ["shouldn't", 'should not'], 'Conseil négatif → shouldn’t.', { kc: 'modals.should' })
    .cloze('___ you have to wear a suit at work?', ['Do'], 'have to se conjugue avec do dans les questions.', { d: 0 })
    .cloze('Employees ___ wear their badge at all times.', ['must', 'have to'], 'Règle / obligation → must ou have to.', { loose: true })
    .order('Tu n’es pas obligé de venir.', "You don't have to come.", 'Pas d’obligation → don’t have to.', { distractors: ["mustn't"] })
    .tr('Tu devrais apprendre l’anglais tous les jours.', ['You should learn English every day.', 'You should study English every day.'], 'Conseil → should + base.', { kc: 'modals.should' })
    .tr('Je dois finir ce rapport avant vendredi.', ['I have to finish this report before Friday.', 'I must finish this report before Friday.', 'I have to finish this report by Friday.', 'I must finish this report by Friday.', "I've got to finish this report by Friday."],
      'Obligation → have to / must. « avant vendredi » (date limite) = by Friday.', { d: 0.3 })
    .listen('You don’t have to pay. The museum is free on Sundays.', 'Faut-il payer le dimanche ?', ['Non, c’est gratuit', 'Oui, c’est obligatoire', 'Seulement les enfants'], 0,
      'don’t have to = ne pas être obligé.', { d: 0 })
    .listen('You mustn’t use your phone during the exam.', 'Qu’est-ce qui est dit ?', ['Le téléphone est interdit', 'Le téléphone n’est pas obligatoire', 'Il faut apporter son téléphone'], 0,
      'mustn’t = interdiction.', { d: 0 })
    .repeat('You should see a doctor. You don’t have to wait.', 'should (conseil) et don’t have to (pas obligé).', { kc: 'modals.should' })
    .say('Tu ne devrais pas travailler autant.', ["You shouldn't work so much", 'You should not work so much', "You shouldn't work that much"], 'Conseil négatif → shouldn’t.', { kc: 'modals.should' })
    .answer('What do you have to do at work or at school every day?', 'Every day I have to check my emails, and I have to attend a meeting at ten.',
      'Utilise have to / has to.', { keywords: [['have to', 'has to', 'must']], minWords: 8 })
    .answer('A friend wants to learn English fast. What advice can you give?', 'You should practise every day and you should watch series in English.',
      'Donne des conseils avec should.', { keywords: [['should']], kc: 'modals.should', minWords: 8 })
    .build(),
};

export const prepositionsTime: Lesson = {
  id: 'a2-prep-1',
  cefr: 'A2',
  unitId: 'a2-prepositions',
  title: 'In, on, at',
  subtitle: 'Prépositions de temps et de lieu',
  kcIds: ['grammar.prepositions.time', 'grammar.prepositions.place'],
  estMinutes: 6,
  explanation: [
    {
      title: 'Le temps : du plus grand au plus précis',
      table: [
        ['in', 'mois, années, saisons, parties de la journée : in May, in 2025, in summer, in the morning'],
        ['on', 'jours et dates : on Monday, on 3 June, on my birthday'],
        ['at', 'heures et moments précis : at 8 o’clock, at noon, at night, at the weekend (UK)'],
      ],
      tip: 'Pas de préposition avant next, last, this, every : « next Monday », « last year ».',
    },
    {
      title: 'Le lieu',
      table: [
        ['in', 'à l’intérieur, villes, pays : in the office, in London'],
        ['at', 'un point, une adresse, un événement : at home, at work, at the station, at a party'],
        ['on', 'une surface, un étage, les transports publics : on the table, on the second floor, on the bus'],
      ],
    },
  ],
  exercises: exercises('a2-prep-1', 'A2', { kc: 'grammar.prepositions.time' })
    .mcq('The meeting is ___ Monday.', ['in', 'on', 'at'], 1, 'Jour → on.', { d: -2 })
    .mcq('I was born ___ 1995.', ['in', 'on', 'at'], 0, 'Année → in.', { d: -2 })
    .mcq('The train leaves ___ 7:45.', ['in', 'on', 'at'], 2, 'Heure → at.', { d: -2 })
    .mcq('I usually read ___ the evening.', ['in', 'on', 'at'], 0, 'Partie de la journée → in the evening (mais at night).', { d: -1 })
    .mcq('See you ___ next week!', ['in', 'on', '—'], 2, 'Pas de préposition avant next / last / this / every.', { d: 0 })
    .mcq('She’s ___ work until 6.', ['in', 'at', 'on'], 1, 'at work, at home, at school.', { kc: 'grammar.prepositions.place', d: -1 })
    .mcq('I’m ___ the bus, I’ll be there in 10 minutes.', ['in', 'on', 'at'], 1, 'Transport public → on the bus / on the train.', { kc: 'grammar.prepositions.place', d: 0 })
    .cloze('My birthday is ___ 14 July.', ['on'], 'Date → on.')
    .cloze('We go skiing ___ winter.', ['in'], 'Saison → in.')
    .cloze('I can’t sleep ___ night.', ['at'], 'Exception : at night.', { d: -0.5 })
    .cloze('My office is ___ the third floor.', ['on'], 'Étage → on.', { kc: 'grammar.prepositions.place' })
    .cloze('He lives ___ Manchester.', ['in'], 'Ville → in.', { kc: 'grammar.prepositions.place', d: -1.5 })
    .tr('Je commence à 9 heures le lundi.', ['I start at 9 on Mondays.', "I start at 9 o'clock on Mondays.", 'On Mondays I start at 9.', "On Mondays I start at nine.", 'I start at nine on Mondays.', 'I start at 9 am on Mondays.'],
      'at + heure, on + jour.', { d: 0.3 })
    .tr('On se voit ce week-end ?', ['Shall we meet this weekend?', 'Are we meeting this weekend?', 'Can we meet this weekend?', 'See you this weekend?', 'Do you want to meet this weekend?'],
      '« this weekend » : pas de préposition.', { d: 0.5 })
    .listen('The shop opens at nine in the morning, but it’s closed on Sundays.', 'Quand le magasin est-il fermé ?', ['Le dimanche', 'Le matin', 'Le samedi'], 0, 'on Sundays = le dimanche.')
    .dictation('I’ll see you on Friday at six.', 'on + jour, at + heure.', { accepted: ["I'll see you on Friday at six.", "I'll see you on Friday at 6.", 'I will see you on Friday at six.'] })
    .repeat('In the morning, on Monday, at eight o’clock.', 'Du plus large (in) au plus précis (at).')
    .say('J’ai une réunion à 15 heures.', ['I have a meeting at 3 pm', 'I have a meeting at three', "I have a meeting at 3 o'clock", "I've got a meeting at 3 pm", 'I have a meeting at 3', 'I have a meeting at three pm', 'I have a meeting at fifteen'],
      'at + heure. En anglais parlé, on dit souvent 3 pm plutôt que 15:00.')
    .answer('Describe your typical Monday. What do you do and when?', 'On Mondays I get up at seven, I start work at nine and in the evening I go to the gym.',
      'Utilise on, at et in pour situer tes activités.', { keywords: [['on'], ['at'], ['in']], minWords: 12 })
    .build(),
};
