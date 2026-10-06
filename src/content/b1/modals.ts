import type { Lesson } from '../types';
import { exercises } from '../builders';

const MC = 'b1.modals.deduction.must_cant';
const MM = 'b1.modals.deduction.might_could';
const OBL = 'b1.modals.obligation_review';
const ABLE = 'b1.modals.be_able_to';

export const modals1: Lesson = {
  id: 'b1-modals-1',
  cefr: 'B1',
  unitId: 'b1-modals',
  title: 'Déduire : must, might, can’t',
  subtitle: 'She must be tired · He can’t be serious',
  kcIds: [MC, MM],
  estMinutes: 8,
  explanation: [
    {
      title: 'Degré de certitude',
      table: [
        ['must + base', 'presque sûr que OUI : She must be at home — her lights are on.'],
        ['might / may / could + base', 'possible : He might be in a meeting.'],
        ['can’t + base', 'presque sûr que NON : That can’t be Tom — he’s in Spain.'],
      ],
      examples: [
        { en: 'You’ve been travelling all day. You must be exhausted.', fr: 'Tu voyages depuis ce matin. Tu dois être {épuisé|épuisée}.' },
        { en: 'Take an umbrella. It might rain later.', fr: 'Prends un parapluie. Il pourrait pleuvoir plus tard.' },
        { en: 'This can’t be the right address.', fr: 'Ça ne peut pas être la bonne adresse.' },
      ],
      tip: 'Le contraire de must (déduction) n’est pas mustn’t mais can’t : « Il ne doit pas être chez lui » → He can’t be at home. mustn’t exprime une interdiction.',
    },
  ],
  exercises: exercises('b1-modals-1', 'B1', { kc: MC, tense: 'modal' })
    .mcq('She’s been working for twelve hours. She ___ be exhausted.', ['must', 'can’t', 'might not'], 0, 'Déduction logique quasi certaine → must.', { d: -0.4 })
    .mcq('That ___ be Tom at the door — he’s in Spain this week.', ['can’t', 'must', 'mustn’t'], 0, 'Impossible (il est en Espagne) → can’t.', { d: -0.1 })
    .mcq('I’m not sure where Lisa is. She ___ be in the library.', ['might', 'must', 'can’t'], 0, 'I’m not sure → simple possibilité : might.', { kc: MM, d: -0.3 })
    .cloze('You’ve just eaten a huge meal. You ___ be hungry already!', ["can't", 'cannot'], 'Impossible → can’t.', { d: 0 })
    .cloze('Take an umbrella — it ___ rain later.', ['might', 'may', 'could'], 'Possibilité → might / may / could.', { kc: MM, hint: 'possibilité', d: -0.2 })
    .mcq('Il ne doit pas être chez lui : sa voiture n’est pas là.', ["He can't be at home: his car isn't there.", "He mustn't be at home: his car isn't there.", "He doesn't have to be at home: his car isn't there."], 0,
      'Déduction négative → can’t. mustn’t = interdiction.', { d: 0.4 })
    .order('Ce sont peut-être les clés de Julie.', "They might be Julie's keys.", 'Possibilité → might + be.', { kc: MM, distractors: ['must'], d: 0 })
    .type('Réécris avec must : I’m sure he’s the new manager.', ['He must be the new manager.'], 'I’m sure… → must be.', { loose: true, d: 0.3 })
    .tr('Tu dois plaisanter !', ['You must be joking!', 'You must be kidding!', "You've got to be joking!", "You've got to be kidding!"], 'Déduction → You must be joking!', { d: 0.3 })
    .tr('Ça pourrait être dangereux.', ['It could be dangerous.', 'It might be dangerous.', 'It may be dangerous.', 'That could be dangerous.', 'That might be dangerous.', 'This could be dangerous.', 'This might be dangerous.'],
      'Possibilité → could / might / may + be.', { kc: MM, d: 0.2 })
    .listen('Nobody’s answering. They must be out.', 'Que pense-t-elle ?', ['Ils sont sûrement sortis', 'Ils dorment peut-être', 'Ils ne veulent pas répondre'], 0,
      'must be out = ils doivent être sortis (quasi certain).', { d: -0.1 })
    .listen('My phone isn’t in my bag. It might be in the car.', 'Où est le téléphone ?', ['Peut-être dans la voiture', 'Sûrement dans le sac', 'Dans la voiture, c’est certain'], 0,
      'might = peut-être, sans certitude.', { kc: MM, d: 0 })
    .dictation('This can’t be the right address. There’s nothing here.', 'can’t be = ça ne peut pas être.', { accepted: ["This can't be the right address. There's nothing here."], d: 0.1 })
    .say('Il est peut-être malade.', ['He might be ill', 'He may be ill', 'He could be ill', 'He might be sick', 'He may be sick', 'He could be sick', 'Maybe he is ill', 'Maybe he is sick'],
      'Possibilité → He might be…', { kc: MM, d: 0.2 })
    .answer('Your neighbours’ lights are all off and their car has gone. What do you think?', 'They must be away for the weekend, or they might be at a restaurant. They can’t be at home.',
      'Fais des déductions : must, might, can’t.', { kc: [MC, MM], keywords: [['must', 'might', 'may', 'could', 'cannot']], minWords: 10, d: 0.6 })
    .build(),
};

export const modals2: Lesson = {
  id: 'b1-modals-2',
  cefr: 'B1',
  unitId: 'b1-modals',
  title: 'Obligation, conseil, capacité',
  subtitle: 'should, have to, mustn’t, be able to',
  kcIds: [OBL, ABLE],
  estMinutes: 8,
  explanation: [
    {
      title: 'Conseil et obligation',
      table: [
        ['should', 'conseil : You should see a doctor.'],
        ['have to', 'obligation (règle extérieure) : I have to wear a uniform.'],
        ['must', 'obligation forte, personnelle ou écrite : I must call my mum. Passengers must wear seat belts.'],
        ['don’t have to', 'pas nécessaire : You don’t have to come.'],
        ['mustn’t', 'interdit : You mustn’t park here.'],
      ],
      examples: [
        { en: 'You don’t have to pay — it’s free.', fr: 'Tu n’es pas obligé de payer, c’est gratuit.' },
        { en: 'You mustn’t touch that — it’s hot!', fr: 'Il ne faut pas toucher ça, c’est chaud !' },
      ],
      tip: 'don’t have to ≠ mustn’t. « Tu n’es pas obligé » → don’t have to ; « tu n’as pas le droit » → mustn’t.',
    },
    {
      title: 'be able to',
      body: 'can n’a ni futur ni infinitif ni present perfect : on le remplace par be able to.',
      table: [
        ['futur', 'I’ll be able to help you tomorrow.'],
        ['present perfect', 'I haven’t been able to sleep.'],
        ['après un autre verbe', 'I’d like to be able to dance.'],
        ['réussite ponctuelle au passé', 'He was able to open the door. (≈ managed to)'],
      ],
      tip: '« I will can » ✗ → « I will be able to » ✓.',
    },
  ],
  exercises: exercises('b1-modals-2', 'B1', { kc: OBL, tense: 'modal' })
    .mcq('You ___ wear a suit — the dress code is casual.', ["don't have to", "mustn't", "shouldn't to"], 0, 'Pas nécessaire → don’t have to.', { d: -0.2 })
    .mcq('You ___ use your phone during the exam. It’s forbidden.', ["mustn't", "don't have to", "needn't to"], 0, 'Interdit → mustn’t.', { d: -0.3 })
    .mcq('I think you ___ see a doctor about that cough.', ['should', 'must to', 'have'], 0, 'Conseil → should + base, sans to.', { d: -0.5 })
    .cloze('Nurses often ___ to work at night.', ['have'], 'Obligation liée au métier → have to.', { d: -0.3 })
    .mcq('I hope I ___ come to your wedding.', ['will be able to', 'will can', 'can to'], 0, 'can n’a pas de futur → will be able to.', { kc: ABLE, d: -0.1 })
    .cloze('I’m sorry, I haven’t been ___ to finish the report.', ['able'], 'Present perfect de can → have been able to.', { kc: ABLE, d: 0 })
    .mcq('After hours of trying, he ___ open the door.', ['was able to', 'could', 'can'], 0,
      'Réussite ponctuelle au passé → was able to (ou managed to). could exprime une capacité générale.', { kc: ABLE, d: 0.6 })
    .order('Je ne pourrai pas venir demain.', "I won't be able to come tomorrow.", 'Futur de can → won’t be able to.', { kc: ABLE, distractors: ['can'], d: 0.1 })
    .tr('Tu n’es pas obligé de m’attendre.', ["You don't have to wait for me.", 'You do not have to wait for me.', "You don't need to wait for me.", "You needn't wait for me."],
      'Absence d’obligation → don’t have to.', { d: 0.3 })
    .tr('J’aimerais être capable de parler couramment.', ['I would like to be able to speak fluently.', "I'd like to be able to speak fluently.", 'I would love to be able to speak fluently.', "I'd love to be able to speak fluently.", 'I want to be able to speak fluently.'],
      'Après would like → to be able to.', { kc: ABLE, d: 0.5 })
    .listen('You don’t have to book in advance, but you must arrive before ten.', 'Qu’est-ce qui est obligatoire ?', ['Arriver avant 10 h', 'Réserver à l’avance', 'Payer en espèces'], 0,
      'don’t have to book = pas besoin de réserver ; must arrive = obligatoire.', { d: 0.1 })
    .listen('I’ve been able to sleep much better since I moved to the countryside.', 'Qu’est-ce qui a changé ?', ['Il dort mieux', 'Il dort moins', 'Il travaille à la campagne'], 0,
      'I’ve been able to sleep better = j’arrive à mieux dormir.', { kc: ABLE, d: 0 })
    .mcq('Selon le règlement, qu’est-ce qui n’est PAS obligatoire ?', ['Réserver les cours', 'Montrer sa carte', 'Avoir 16 ans pour la salle de musculation'], 0,
      'You don’t have to book classes = pas obligatoire.',
      { passage: 'Gym rules:\nMembers must show their card at reception. You don’t have to book classes, but places are limited. Children under 16 mustn’t use the weights room. You should bring a towel.', d: 0.3 })
    .say('Tu devrais te reposer.', ['You should rest', 'You should get some rest', 'You should have a rest', 'You should take a rest', 'You ought to rest'], 'Conseil → should + base.', { d: 0 })
    .answer('What are some rules at your workplace or school? What do you have to do, and what mustn’t you do?', 'At work we have to wear a badge and we mustn’t share our passwords, but we don’t have to wear a suit.',
      'have to / must / mustn’t / don’t have to.', { keywords: [['have to', 'must'], ['not']], minWords: 12, d: 0.6 })
    .build(),
};
