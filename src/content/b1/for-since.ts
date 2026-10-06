import type { Lesson } from '../types';
import { exercises } from '../builders';

const FS = 'b1.tense.present_perfect.for_since';
const HL = 'b1.grammar.questions.how_long';
const PPC = 'b1.tense.present_perfect_continuous.form';
const USE = 'b1.tense.present_perfect_continuous.usage';

export const forSince1: Lesson = {
  id: 'b1-for-since-1',
  cefr: 'B1',
  unitId: 'b1-for-since',
  title: 'Depuis : for, since, How long…?',
  subtitle: 'Une situation qui a commencé dans le passé et qui dure encore',
  kcIds: [FS, HL],
  estMinutes: 8,
  explanation: [
    {
      title: '« Depuis » = present perfect',
      body: 'Quand une situation commence dans le passé et continue maintenant, l’anglais utilise le present perfect, là où le français utilise le présent.',
      table: [
        ['for + durée', 'for two years, for ages, for a long time'],
        ['since + point de départ', 'since 2019, since Monday, since I was a child'],
      ],
      examples: [
        { en: 'I’ve lived here for five years.', fr: 'J’habite ici depuis cinq ans.' },
        { en: 'She’s worked at the hospital since March.', fr: 'Elle travaille à l’hôpital depuis mars.' },
      ],
      tip: '« I live here since 2015 » ✗ : le présent ne marche pas avec « depuis ». → « I’ve lived here since 2015 » ✓.',
    },
    {
      title: 'How long…?',
      body: 'Pour demander « depuis combien de temps », on utilise How long + present perfect.',
      examples: [
        { en: 'How long have you known Sarah?', fr: 'Depuis combien de temps connais-tu Sarah ?' },
        { en: 'How long has he had that car?', fr: 'Depuis combien de temps a-t-il cette voiture ?' },
      ],
      tip: '« Since when do you…? » existe, mais sonne souvent agacé (« depuis quand tu… ?! »). Préfère How long have you…?',
    },
  ],
  exercises: exercises('b1-for-since-1', 'B1', { kc: FS, tense: 'present_perfect' })
    .mcq('I’ve worked here ___ 2019.', ['since', 'for', 'from'], 0, '2019 est un point de départ → since.', { d: -0.5 })
    .mcq('They’ve been married ___ ten years.', ['for', 'since', 'during'], 0, 'ten years est une durée → for.', { d: -0.5 })
    .cloze('We haven’t seen each other ___ last summer.', ['since'], 'last summer = point de départ → since.', { d: -0.3 })
    .cloze('She’s had that car ___ ages.', ['for'], 'for ages = depuis une éternité (durée).', { d: -0.2 })
    .mcq('Je vis ici depuis trois ans.', ['I’ve lived here for three years.', 'I live here for three years.', 'I’m living here since three years.'], 0,
      '« depuis » + situation qui dure → present perfect + for.', { d: 0 })
    .type('Écris la question en anglais : « Depuis combien de temps connais-tu Paul ? »', ['How long have you known Paul?'], 'How long + have + you + known (know → knew → known).', { kc: HL, loose: true, d: 0.3 })
    .order('Depuis combien de temps habites-tu ici ?', 'How long have you lived here?', 'How long + have + sujet + participe passé.', { kc: HL, distractors: ['do', 'since'], d: 0 })
    .cloze('How long ___ you had this phone?', ['have'], 'How long + have you had…?', { kc: HL, d: -0.2 })
    .tr('Je connais Julie depuis l’université.', ['I have known Julie since university.', "I've known Julie since university.", "I've known Julie since uni.", 'I have known Julie since college.', "I've known Julie since college."],
      'know est un verbe d’état → present perfect simple + since.', { d: 0.4 })
    .tr('Depuis combien de temps travailles-tu pour cette entreprise ?', ['How long have you worked for this company?', 'How long have you been working for this company?', 'How long have you worked at this company?', 'How long have you been working at this company?', 'How long have you worked for this firm?'],
      'How long have you worked… ? (ou been working).', { kc: HL, d: 0.5 })
    .listen('We’ve had our dog since she was a puppy.', 'Depuis quand ont-ils leur chienne ?', ['Depuis que c’était un chiot', 'Depuis cinq ans', 'Depuis l’été dernier'], 0,
      'since she was a puppy = depuis qu’elle était chiot.', { d: -0.2 })
    .listen('How long have you been in Madrid? — Only for a couple of days.', 'Depuis combien de temps est-elle à Madrid ?', ['Seulement quelques jours', 'Deux semaines', 'Deux mois'], 0,
      'a couple of days = deux ou trois jours.', { kc: HL, d: -0.1 })
    .dictation('I haven’t spoken to my brother for weeks.', 'Négation + for weeks = depuis des semaines.', { accepted: ["I haven't spoken to my brother for weeks."], d: 0 })
    .say('Je n’ai pas mangé depuis ce matin.', ["I haven't eaten since this morning", 'I have not eaten since this morning'], 'this morning = point de départ → since.', { d: 0.3 })
    .answer('How long have you lived in your current home?', 'I have lived in my current flat for four years and I really like it.', 'I have lived… for / since…', { kc: HL, keywords: [['for', 'since']], minWords: 8, d: 0.5 })
    .build(),
};

export const forSince2: Lesson = {
  id: 'b1-for-since-2',
  cefr: 'B1',
  unitId: 'b1-for-since',
  title: 'Present perfect continuous',
  subtitle: 'I’ve been waiting for ages!',
  kcIds: [PPC, USE],
  estMinutes: 8,
  explanation: [
    {
      title: 'Forme',
      table: [
        ['affirmation', 'I have (’ve) been working · she has (’s) been working'],
        ['négation', 'I haven’t been sleeping well'],
        ['question', 'How long have you been waiting?'],
      ],
      examples: [
        { en: 'It’s been raining all day.', fr: 'Il pleut depuis ce matin.' },
        { en: 'We’ve been looking for a flat for months.', fr: 'Nous cherchons un appartement depuis des mois.' },
      ],
    },
    {
      title: 'Continuous ou simple ?',
      table: [
        ['continuous : l’activité, la durée', 'I’ve been writing emails all morning.'],
        ['continuous : une trace visible', 'You’re wet! — I’ve been running.'],
        ['simple : le résultat, une quantité', 'I’ve written six emails.'],
        ['simple : verbes d’état', 'I’ve known her for years. (pas « been knowing »)'],
      ],
      tip: 'Les verbes d’état (know, like, want, believe, have = posséder) ne se mettent pas au continuous : « I’ve been knowing him » ✗.',
    },
  ],
  exercises: exercises('b1-for-since-2', 'B1', { kc: PPC, tense: 'present_perfect_continuous' })
    .cloze('I’ve been ___ for you for twenty minutes!', ['waiting'], 'have been + -ing.', { hint: 'wait', d: -0.4 })
    .cloze('It ___ raining since this morning.', ['has been', "'s been"], 'It + has been + -ing.', { hint: 'be (auxiliaire)', d: -0.1 })
    .mcq('I’ve ___ three emails this morning.', ['written', 'been writing', 'writing'], 0, 'Une quantité (three emails) → present perfect simple.', { kc: USE, d: 0.3 })
    .mcq('She’s tired because she ___ all day.', ['has been working', 'has been work', 'is working since'], 0, 'Activité qui explique son état → has been working.', { kc: USE, d: 0 })
    .mcq('I ___ Sam for ten years.', ['have known', 'have been knowing', 'am knowing'], 0, 'know est un verbe d’état → present perfect simple.', { kc: USE, d: 0.4 })
    .order('Depuis combien de temps apprends-tu l’anglais ?', 'How long have you been learning English?', 'How long + have you been + -ing.', { distractors: ['since'], d: 0.1 })
    .type('Mets au present perfect continuous : They / play / tennis / for two hours.', ['They have been playing tennis for two hours.', "They've been playing tennis for two hours."], 'They have been playing…', { loose: true, d: 0.3 })
    .tr('Il pleut depuis trois jours.', ["It's been raining for three days.", 'It has been raining for three days.', 'It has rained for three days.', "It's rained for three days."],
      'Durée d’une activité → It’s been raining for…', { kc: USE, d: 0.4 })
    .tr('J’attends le bus depuis vingt minutes.', ["I've been waiting for the bus for twenty minutes.", 'I have been waiting for the bus for twenty minutes.', "I've been waiting for the bus for 20 minutes.", 'I have been waiting for the bus for 20 minutes.'],
      'wait FOR the bus + for twenty minutes (durée).', { d: 0.4 })
    .listen('Sorry I’m so dirty, I’ve been fixing my bike all afternoon.', 'Pourquoi est-il sale ?', ['Il a réparé son vélo tout l’après-midi', 'Il a fait du jardinage', 'Il est tombé de vélo'], 0,
      'Trace visible d’une activité → I’ve been fixing my bike.', { kc: USE, d: -0.1 })
    .listen('I’ve been reading this novel for a month and I’ve only read half of it.', 'Où en est-elle dans le roman ?', ['À la moitié', 'Elle l’a fini', 'Elle ne l’a pas commencé'], 0,
      'I’ve only read half = je n’en ai lu que la moitié (résultat → simple).', { kc: USE, d: 0.3 })
    .mcq('Combien de bugs restent à corriger ?', ['Quatre', 'Huit', 'Douze'], 0, 'Douze trouvés, huit corrigés → il en reste quatre.',
      { kc: USE, passage: 'Hi team,\nWe’ve been testing the new booking app since Monday. So far we’ve found twelve bugs and we’ve fixed eight of them. We’ll keep testing until Friday.\nThanks, Laura', d: 0.2 })
    .dictation('We’ve been living in this town since our son was born.', 'have been living + since…', { accepted: ["We've been living in this town since our son was born."], d: 0.2 })
    .say('Je travaille sur ce projet depuis janvier.', ["I've been working on this project since January", 'I have been working on this project since January', "I've worked on this project since January", 'I have worked on this project since January'],
      '« depuis » + activité → I’ve been working… since January.', { kc: USE, d: 0.4 })
    .answer('What have you been doing recently in your free time?', 'Recently I have been learning to cook Indian food and I have been running twice a week.',
      'I have been + -ing pour des activités récentes qui durent.', { keywords: [['been']], minWords: 10, d: 0.6 })
    .build(),
};
