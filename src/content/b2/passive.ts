import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const PT = 'b2.passive.tenses';
const PM = 'b2.passive.modals';
const CAUS = 'b2.passive.causative';
const IMP = 'b2.passive.impersonal';

export const passiveUnit: Unit = {
  id: 'b2-passive',
  cefr: 'B2',
  title: 'Le passif sous toutes ses formes',
  description: 'Passif à tous les temps et avec les modaux, forme causative (have / get something done), passif impersonnel (it is said that…).',
  lessonIds: ['b2-passive-1', 'b2-passive-2'],
  canDo: [
    'Je peux comprendre et rédiger des informations factuelles au passif, comme dans la presse ou un rapport.',
    'Je peux dire ce que je fais faire par d’autres (have / get something done) et rapporter des rumeurs ou des opinions générales.',
  ],
};

export const passive1: Lesson = {
  id: 'b2-passive-1',
  cefr: 'B2',
  unitId: 'b2-passive',
  title: 'Le passif à tous les temps',
  subtitle: 'be + participe passé, du présent aux modaux',
  kcIds: [PT, PM],
  estMinutes: 8,
  explanation: [
    {
      title: 'Principe',
      body: 'Le passif se forme avec be conjugué au temps voulu + participe passé. On l’utilise quand l’auteur de l’action est inconnu, évident ou peu important, et très souvent dans la presse et les écrits formels. L’agent s’introduit par by.',
      table: [
        ['present simple', 'is / are made'],
        ['present continuous', 'is / are being made'],
        ['past simple', 'was / were made'],
        ['past continuous', 'was / were being made'],
        ['present perfect', 'has / have been made'],
        ['past perfect', 'had been made'],
        ['future', 'will be made'],
      ],
      examples: [
        { en: 'The road is being repaired, so expect delays.', fr: 'La route est en travaux, attendez-vous à des retards.' },
        { en: 'Three people have been arrested.', fr: 'Trois personnes ont été arrêtées.' },
      ],
      tip: 'Le « on » français se traduit souvent par un passif : « On m’a dit que… » = I was told that… Et n’oublie pas being au continuous : « The road is repaired » ≠ « The road is being repaired » (en cours).',
    },
    {
      title: 'Passif avec un modal',
      table: [
        ['présent / futur', 'modal + be + participe', 'This form must be signed.'],
        ['passé', 'modal + have been + participe', 'The error should have been noticed.'],
      ],
      examples: [
        { en: 'Phones can’t be used during the exam.', fr: 'Les téléphones ne peuvent pas être utilisés pendant l’examen.' },
        { en: 'The flight might have been delayed by the storm.', fr: 'Le vol a peut-être été retardé par la tempête.' },
      ],
      tip: 'Jamais de to après un modal : « must to be signed » ✗ → « must be signed » ✓.',
    },
  ],
  exercises: exercises('b2-passive-1', 'B2', { kc: PT, tense: 'passive' })
    .cloze('The new bridge ___ next year.', ['will be built'],
      'Futur passif : will be + participe passé (build, built, built).', { hint: 'build', d: 0.9 })
    .cloze('Sorry, you can’t use this room — it ___ at the moment.', ['is being cleaned'],
      'Action en cours (at the moment) → present continuous passif : is being cleaned.', { hint: 'clean', d: 1.1 })
    .cloze('By the time the firefighters arrived, most of the building ___.', ['had been destroyed'],
      'Antériorité dans le passé → past perfect passif : had been destroyed.', { hint: 'destroy', d: 1.3 })
    .mcq('Over 200 jobs ___ since the factory opened.', ['have been created', 'have created', 'were creating'], 0,
      'since → present perfect ; les emplois subissent l’action → passif : have been created.', { d: 1.0 })
    .mcq('Your password ___ every three months.', ['must change', 'must be changed', 'must been changed'], 1,
      'Modal + be + participe passé : must be changed.', { kc: PM, d: 1.0 })
    .mcq('This report is full of mistakes. It ___ before it was sent.', ['should have checked', 'should have been checked', 'should be checked'], 1,
      'Reproche sur le passé, au passif → should have been + participe.', { kc: PM, d: 1.4 })
    .type('Mets au passif : « You can’t park cars here. » (Cars…)', ['Cars can’t be parked here.', 'Cars cannot be parked here.'],
      'Modal + be + participe : can’t be parked.', { kc: PM, d: 1.1 })
    .order('On m’a proposé un poste à Londres.', 'I have been offered a job in London.',
      'Le « on » français → passif avec la personne comme sujet : I have been offered.', { distractors: ['by', 'offer'], d: 1.2 })
    .listen('The museum is being renovated and won’t reopen until spring.', 'Pourquoi le musée est-il fermé ?',
      ['Il est en cours de rénovation', 'Il a été vendu', 'Il a été endommagé par une tempête'], 0,
      'is being renovated = est en train d’être rénové.', { d: 1.0 })
    .listen('Tickets must be bought online; they can’t be bought at the door.', 'Comment acheter les billets ?',
      ['Uniquement en ligne', 'À l’entrée', 'Par téléphone'], 0,
      'must be bought online ; can’t be bought at the door.', { kc: PM, d: 1.0 })
    .dictation('The results will be announced on Friday afternoon.', 'will be announced : futur passif.', { d: 0.9 })
    .tr('La réunion a été annulée.',
      ['The meeting has been cancelled.', 'The meeting was cancelled.', 'The meeting has been canceled.', 'The meeting was canceled.',
        'The meeting has been called off.', 'The meeting was called off.'],
      'Passif au present perfect ou au past simple. cancel = annuler (UK : cancelled, US : canceled).', { d: 0.9 })
    .tr('Ce problème aurait dû être réglé il y a des semaines.',
      ['This problem should have been solved weeks ago.', 'This problem should have been fixed weeks ago.', 'This problem should have been dealt with weeks ago.',
        'This problem should have been sorted out weeks ago.', 'This issue should have been solved weeks ago.', 'This issue should have been fixed weeks ago.',
        'This issue should have been dealt with weeks ago.'],
      'aurait dû être + participe → should have been + participe.', { kc: PM, d: 1.5 })
    .say('On construit un nouvel hôpital en ce moment.',
      ['A new hospital is being built at the moment', 'A new hospital is being built right now', 'A new hospital is currently being built', 'They are building a new hospital at the moment'],
      'Action en cours au passif → is being built.', { d: 1.2 })
    .answer('What changes have been made in your town or city in recent years?',
      'A new tram line has been built, and many old buildings have been renovated in the city centre.',
      'Décris les changements au passif : has / have been + participe.', { keywords: [['has been', 'have been', 'was', 'were']], minWords: 12, d: 1.3 })
    .build(),
};

const HOARD =
  'Ancient coins found in farmer’s field. A hoard of more than 300 Roman coins has been discovered in a field near York. The coins are thought to have been buried around AD 250, possibly to protect them during a period of unrest. The farmer who owns the land had the field surveyed last year, but nothing was found at the time. It is believed that heavy rain this winter brought the coins closer to the surface. The hoard will be examined by experts at the British Museum before its value is estimated.';

export const passive2: Lesson = {
  id: 'b2-passive-2',
  cefr: 'B2',
  unitId: 'b2-passive',
  title: 'Forme causative et passif impersonnel',
  subtitle: 'Faire faire, et « on dit que… »',
  kcIds: [CAUS, IMP],
  estMinutes: 8,
  explanation: [
    {
      title: 'have / get something done',
      body: 'Pour un service que quelqu’un d’autre fait pour toi. get est plus familier. La même structure décrit aussi une mésaventure subie.',
      table: [
        ['structure', 'have / get + objet + participe passé'],
        ['service', 'I’m having my car repaired.'],
        ['mésaventure', 'She had her bag stolen.'],
      ],
      examples: [
        { en: 'We got the house painted last summer.', fr: 'Nous avons fait repeindre la maison l’été dernier.' },
        { en: 'I need to have my eyes tested.', fr: 'Je dois me faire contrôler la vue.' },
      ],
      tip: '« Faire + infinitif » ne se traduit pas par make dans ce sens : « Je fais réparer ma voiture » = I’m having my car repaired. Et l’ordre compte : « I had cut my hair » = je m’étais coupé les cheveux moi-même ; « I had my hair cut » = je me suis fait couper les cheveux.',
    },
    {
      title: 'Passif impersonnel : rapporter une opinion générale',
      table: [
        ['It + passif + that…', 'It is said that he is very rich.'],
        ['sujet + passif + to + base (présent)', 'He is said to be very rich.'],
        ['sujet + passif + to have + participe (passé)', 'He is said to have made a fortune.'],
      ],
      examples: [
        { en: 'It is believed that the fire started in the kitchen.', fr: 'On pense que l’incendie a démarré dans la cuisine.' },
        { en: 'The painting is thought to have been stolen in 1975.', fr: 'Le tableau aurait été volé en 1975.' },
      ],
      tip: 'Le conditionnel journalistique français (« le suspect aurait quitté le pays ») se rend très bien par cette structure : The suspect is believed to have left the country.',
    },
  ],
  exercises: exercises('b2-passive-2', 'B2', { kc: CAUS, tense: 'passive' })
    .cloze('We had our kitchen ___ last year by a local company.', ['redesigned'],
      'have + objet + participe passé : had our kitchen redesigned.', { hint: 'redesign', d: 0.9 })
    .mcq('Ma voiture fait un bruit étrange : je dois la faire réviser.',
      ['I need to get my car serviced.', 'I need to make my car service.', 'I need to get serviced my car.'], 0,
      'get + objet + participe passé. L’objet se place AVANT le participe.', { d: 1.0 })
    .type('Mets à la forme causative : « A professional is painting our house. » (We’re having…)', ['We’re having our house painted.', 'We are having our house painted.'],
      'be having + objet + participe : we’re having our house painted.', { d: 1.2 })
    .cloze('It ___ that the company will cut 500 jobs.', ['is reported', 'has been reported'],
      'It + passif + that : It is reported that…', { kc: IMP, hint: 'report', d: 1.2 })
    .cloze('The painting is thought ___ stolen in the 1970s.', ['to have been'],
      'Fait passé + passif → is thought to have been + participe.', { kc: IMP, d: 1.6 })
    .order('On dit que ce restaurant est le meilleur de la ville.', 'This restaurant is said to be the best in the city.',
      'Sujet + is said + to be. « le meilleur de la ville » = the best in the city (pas of).', { kc: IMP, distractors: ['says', 'of'], d: 1.3 })
    .mcq('Selon l’article, pourquoi les pièces sont-elles apparues cette année ?',
      ['De fortes pluies les ont rapprochées de la surface', 'Le fermier a fait creuser le champ', 'Des experts du British Museum les ont cherchées'], 0,
      '« It is believed that heavy rain this winter brought the coins closer to the surface. »',
      { kc: [IMP, PT], d: 1.4, passage: HOARD })
    .mcq('Que s’est-il passé l’année dernière ?',
      ['Le fermier a fait inspecter son champ, sans résultat', 'Le trésor a été estimé', 'Les pièces ont été volées'], 0,
      '« The farmer had the field surveyed last year, but nothing was found » : forme causative (had + objet + participe).',
      { d: 1.3, passage: HOARD })
    .listen('I’m getting the boiler fixed on Monday, so we’ll have hot water again.', 'Que va-t-il se passer lundi ?',
      ['Quelqu’un va réparer la chaudière', 'Il va réparer la chaudière lui-même', 'Ils vont acheter une nouvelle chaudière'], 0,
      'get the boiler fixed = faire réparer la chaudière par un professionnel.', { d: 1.0 })
    .listen('The new minister is said to be very close to the president.', 'Que dit-on du ministre ?',
      ['Il serait très proche du président', 'Il a critiqué le président', 'Il va remplacer le président'], 0,
      'is said to be = serait, d’après ce qu’on dit.', { kc: IMP, d: 1.3 })
    .dictation('It is believed that the fire was started deliberately.', 'It is believed that… = on pense que…',
      { kc: IMP, accepted: ['It is believed that the fire was started deliberately.', 'It’s believed that the fire was started deliberately.'], d: 1.2 })
    .tr('Je me suis fait couper les cheveux samedi.',
      ['I had my hair cut on Saturday.', 'I got my hair cut on Saturday.', 'I had my hair cut last Saturday.', 'I got my hair cut last Saturday.'],
      'Se faire couper les cheveux = have / get one’s hair cut (cut, cut, cut).', { d: 1.1 })
    .tr('On pense que le prix de l’énergie va augmenter.',
      ['It is thought that energy prices will rise.', 'It is thought that the price of energy will rise.', 'It is thought that energy prices are going to rise.',
        'It is thought that energy prices will go up.', 'It is believed that energy prices will rise.', 'It is believed that the price of energy will rise.',
        'It is expected that energy prices will rise.', 'Energy prices are expected to rise.'],
      'Opinion générale → It is thought that… (ou Energy prices are expected to rise).', { kc: IMP, d: 1.4 })
    .say('Nous devons faire réparer le toit avant l’hiver.',
      ['We need to have the roof repaired before winter', 'We need to get the roof repaired before winter', 'We need to get the roof fixed before winter',
        'We need to have the roof fixed before winter', 'We have to have the roof repaired before winter', 'We must get the roof repaired before the winter'],
      'faire réparer = have / get + objet + repaired.', { d: 1.3 })
    .answer('What services do you usually pay someone to do for you?',
      'I usually have my car serviced once a year and I get my hair cut every two months.',
      'Utilise have / get + objet + participe passé.',
      { keywords: [['have', 'get', 'had', 'got'], ['serviced', 'cut', 'repaired', 'cleaned', 'fixed', 'done', 'delivered', 'painted', 'checked', 'ironed']], minWords: 12, d: 1.3 })
    .build(),
};
