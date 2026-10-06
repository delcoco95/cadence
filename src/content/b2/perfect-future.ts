import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const PPC = 'b2.tense.present_perfect_continuous';
const VS = 'b2.tense.pp_simple_vs_continuous';
const FC = 'b2.tense.future_continuous';
const FP = 'b2.tense.future_perfect';

export const perfectFutureUnit: Unit = {
  id: 'b2-perfect-future',
  cefr: 'B2',
  title: 'Durées et projections',
  description: 'Present perfect continuous ou simple, future continuous et future perfect : parler de ce qui dure et se projeter.',
  lessonIds: ['b2-perfect-future-1', 'b2-perfect-future-2'],
  canDo: [
    'Je peux dire depuis combien de temps je fais quelque chose et distinguer une activité en cours d’un résultat.',
    'Je peux décrire ce que je serai en train de faire ou ce que j’aurai accompli à un moment futur.',
  ],
};

export const perfectFuture1: Lesson = {
  id: 'b2-perfect-future-1',
  cefr: 'B2',
  unitId: 'b2-perfect-future',
  title: 'Present perfect continuous',
  subtitle: 'Activité qui dure jusqu’à maintenant, ou résultat ?',
  kcIds: [PPC, VS],
  estMinutes: 8,
  explanation: [
    {
      title: 'have / has been + -ing',
      body: 'On l’emploie pour une activité commencée dans le passé qui continue maintenant, ou qui vient de s’arrêter et dont on voit encore les effets.',
      table: [
        ['affirmation', 'I have (I’ve) been working / she has (she’s) been working'],
        ['négation', 'I haven’t been sleeping well.'],
        ['question', 'How long have you been waiting?'],
      ],
      examples: [
        { en: 'I’ve been learning Spanish for two years.', fr: 'J’apprends l’espagnol depuis deux ans.' },
        { en: 'It’s been raining since this morning.', fr: 'Il pleut depuis ce matin.' },
        { en: 'You look tired. Have you been working late?', fr: 'Tu as l’air {fatigué|fatiguée}. Tu as travaillé tard ?' },
      ],
      tip: 'Le présent français + « depuis » se traduit par un present perfect : « J’habite ici depuis 2019 » = I’ve been living (I’ve lived) here since 2019, jamais « I live here since 2019 » ✗.',
    },
    {
      title: 'Simple ou continuous ?',
      table: [
        ['résultat, quantité, action achevée', 'I’ve written three emails.'],
        ['activité, durée, action pas forcément finie', 'I’ve been writing emails all morning.'],
        ['verbes d’état (know, like, own, believe)', 'toujours simple : I’ve known her for years.'],
      ],
      tip: 'for + durée (for two hours), since + point de départ (since Monday). « Depuis » ne se traduit jamais par from ici.',
    },
  ],
  exercises: exercises('b2-perfect-future-1', 'B2', { kc: PPC, tense: 'present_perfect_continuous' })
    .cloze('I ___ English for three years, and I still find phrasal verbs hard.', ['have been learning'],
      'Activité commencée il y a trois ans et toujours en cours → have been learning.', { hint: 'learn', d: 0.9 })
    .type('Pose la question : « Tu travailles ici depuis combien de temps ? » (How long…)', ['How long have you been working here?', 'How long have you worked here?'],
      'How long + present perfect (continuous de préférence) : How long have you been working here?', { d: 1.0 })
    .mcq('She ___ three reports since this morning.', ['has been writing', 'has written', 'is writing'], 1,
      'Une quantité achevée (three reports) → present perfect simple.', { kc: VS, d: 1.2, tense: 'present_perfect' })
    .mcq('Qu’est-ce que l’équipe fait depuis un certain temps, sans avoir fini ?',
      ['Tester un nouveau système de batteries', 'Équiper toutes les écoles de la région', 'Préparer un déménagement à Lisbonne'], 0,
      '« we’ve been testing a new battery system » : activité en cours (continuous). Les quarante écoles équipées sont un résultat (has installed).',
      {
        kc: [PPC, VS],
        d: 1.3,
        passage:
          'Hi everyone, quick update! I’ve been working at GreenGrid for eighteen months now, and I’ve learned more than in my previous five years. Since January, our team has installed solar panels on forty schools, and we’ve been testing a new battery system that could cut costs by a third. By the end of next year, we will have equipped every school in the region. I’ll be presenting the project at the Lisbon Energy Forum in May, so come and say hello!',
      })
    .mcq('I ___ him since we were at school.', ['have been knowing', 'have known', 'know'], 1,
      'know est un verbe d’état : pas de forme continue → have known.', { kc: VS, d: 1.1, tense: 'present_perfect' })
    .cloze('I ___ the whole book, so you can borrow it now.', ['have read'],
      'Action terminée dont le résultat compte (le livre est fini) → present perfect simple.', { kc: VS, hint: 'read', d: 1.1, tense: 'present_perfect' })
    .order('Depuis combien de temps apprends-tu à conduire ?', 'How long have you been learning to drive?',
      'How long + have + sujet + been + -ing.', { distractors: ['since', 'are'], d: 1.0 })
    .listen('I’ve been trying to call you all morning. Is your phone switched off?', 'Que dit la personne ?',
      ['Elle essaie de l’appeler depuis ce matin', 'Elle a réussi à l’appeler ce matin', 'Elle l’appellera plus tard'], 0,
      'I’ve been trying… all morning = j’essaie depuis ce matin.', { d: 0.9 })
    .listen('We’ve painted the living room, but we haven’t started the bedroom yet.', 'Où en sont les travaux ?',
      ['Le salon est fini, la chambre pas commencée', 'Les deux pièces sont finies', 'Ils peignent encore le salon'], 0,
      'have painted = c’est terminé ; haven’t started yet = pas encore commencé.', { kc: VS, d: 1.1 })
    .dictation('It has been snowing since Monday, and the roads are still closed.', 'has been snowing + since Monday.',
      { accepted: ['It has been snowing since Monday, and the roads are still closed.', 'It’s been snowing since Monday, and the roads are still closed.'], d: 1.1 })
    .tr('J’habite ici depuis cinq ans.',
      ['I have been living here for five years.', 'I have lived here for five years.', 'I’ve been living here for five years.', 'I’ve lived here for five years.',
        'I have been living here for 5 years.', 'I have lived here for 5 years.'],
      'Présent + depuis + durée → present perfect (continuous) + for.', { d: 1.1 })
    .tr('Elle a passé trois appels depuis le déjeuner.',
      ['She has made three calls since lunch.', 'She has made three phone calls since lunch.', 'She’s made three calls since lunch.',
        'She has made 3 calls since lunch.', 'She has made three calls since lunchtime.'],
      'Quantité achevée → present perfect simple. « passer un appel » = make a call.', { kc: VS, d: 1.2, tense: 'present_perfect' })
    .say('Il pleut depuis ce matin.', ['It has been raining since this morning', 'It’s been raining since this morning', 'It has rained since this morning'],
      'has been raining + since (point de départ).', { d: 1.0 })
    .say('Ça fait des semaines que je dors mal.',
      ['I have been sleeping badly for weeks', 'I’ve been sleeping badly for weeks', 'I haven’t been sleeping well for weeks', 'I have not been sleeping well for weeks', 'I have slept badly for weeks'],
      '« Ça fait… que » + présent = present perfect continuous + for.', { d: 1.3 })
    .answer('What have you been doing lately to improve your English?',
      'Lately I have been watching series in English and I have been reading articles on my phone every day.',
      'Décris des activités récentes et répétées avec have been + -ing.', { keywords: [['have been', 'been']], minWords: 12, d: 1.2 })
    .build(),
};

export const perfectFuture2: Lesson = {
  id: 'b2-perfect-future-2',
  cefr: 'B2',
  unitId: 'b2-perfect-future',
  title: 'Future continuous et future perfect',
  subtitle: 'Ce que je serai en train de faire, ce que j’aurai fait',
  kcIds: [FC, FP],
  estMinutes: 8,
  explanation: [
    {
      title: 'will be + -ing : en cours à un moment futur',
      body: 'Le future continuous décrit une action en cours à un moment précis du futur. Il sert aussi à poser une question polie sur les projets de quelqu’un.',
      examples: [
        { en: 'This time next week, I’ll be lying on a beach.', fr: 'La semaine prochaine à cette heure-ci, je serai {allongé|allongée} sur une plage.' },
        { en: 'Will you be using the car tonight?', fr: 'Tu comptes prendre la voiture ce soir ?' },
      ],
    },
    {
      title: 'will have + participe passé : terminé avant un moment futur',
      table: [
        ['by + date / heure', 'By Friday, I’ll have finished the report.'],
        ['by the time + présent simple', 'By the time you arrive, we’ll have eaten.'],
        ['durée jusqu’à un moment futur', 'In June, I’ll have worked here for ten years.'],
      ],
      examples: [
        { en: 'By 2030, the city will have built a new metro line.', fr: 'D’ici 2030, la ville aura construit une nouvelle ligne de métro.' },
      ],
      tip: 'Après when, by the time, as soon as, l’anglais met le PRÉSENT là où le français met le futur : « quand tu arriveras » = when you arrive, jamais « when you will arrive » ✗.',
    },
  ],
  exercises: exercises('b2-perfect-future-2', 'B2', { kc: FC, tense: 'future_continuous' })
    .cloze('This time tomorrow, I ___ on a beach in Crete.', ['will be lying'],
      'Action en cours à un moment futur précis → will be + -ing (lie → lying).', { hint: 'lie', d: 1.0 })
    .cloze('By the end of the year, we ___ the new office.', ['will have opened'],
      'By + moment futur → action terminée avant : will have opened.', { kc: FP, hint: 'open', d: 1.1, tense: 'future_perfect' })
    .mcq('Don’t call at eight tomorrow — we ___ dinner with my in-laws.', ['will be having', 'have had', 'had'], 0,
      'À 20 h demain, le dîner sera en cours → will be having.', { d: 1.0 })
    .mcq('By the time you get home, I ___ the kitchen.', ['will clean', 'will have cleaned', 'have been cleaning'], 1,
      'By the time → l’action sera terminée avant ton retour : will have cleaned.', { kc: FP, d: 1.1, tense: 'future_perfect' })
    .mcq('By the time you ___, the meeting will have finished.', ['will arrive', 'arrive', 'will have arrived'], 1,
      'Après by the time, présent simple même pour le futur : arrive.', { kc: FP, d: 1.2, tense: 'future_perfect' })
    .cloze('In June, I ___ here for ten years.', ['will have worked', 'will have been working'],
      'Durée calculée jusqu’à un moment futur → will have worked (ou will have been working).', { kc: FP, hint: 'work', d: 1.5, tense: 'future_perfect' })
    .type('Demande poliment à un collègue s’il utilisera la salle de réunion cet après-midi (Will you…?).',
      ['Will you be using the meeting room this afternoon?', 'Will you be using the conference room this afternoon?'],
      'Will you be + -ing : question polie sur les projets de quelqu’un, sans rien imposer.', { d: 1.3 })
    .order('D’ici vendredi, j’aurai terminé le rapport.', 'By Friday I will have finished the report.',
      'By + moment → will have + participe passé. « d’ici » = by, pas until.', { kc: FP, distractors: ['until', 'finish'], d: 1.1, tense: 'future_perfect' })
    .listen('Don’t worry about the plants. I’ll be passing your house every day anyway.', 'Pourquoi peut-il s’occuper des plantes ?',
      ['Il passera devant la maison tous les jours de toute façon', 'Il habite dans la maison', 'Il a promis de déménager'], 0,
      'I’ll be passing… anyway : action qui aura lieu de toute façon, dans le cours normal des choses.', { d: 1.1 })
    .listen('By the time the film comes out, the actors will have finished filming the sequel.', 'Que se sera-t-il passé à la sortie du film ?',
      ['Le tournage de la suite sera terminé', 'La suite sortira le même jour', 'Les acteurs commenceront la suite'], 0,
      'will have finished filming = auront terminé le tournage.', { kc: FP, d: 1.3 })
    .dictation('At nine o’clock tonight, I will be flying over the Atlantic.', 'will be flying : action en cours à 21 h.',
      { accepted: ['At nine o’clock tonight, I will be flying over the Atlantic.', 'At nine o’clock tonight, I’ll be flying over the Atlantic.', 'At 9 o’clock tonight, I will be flying over the Atlantic.'], d: 1.1 })
    .tr('Quand tu recevras ce message, je serai déjà {parti|partie}.',
      ['By the time you get this message, I will have already left.', 'When you get this message, I will already have left.', 'When you get this message, I will have already left.',
        'When you receive this message, I will already have left.', 'When you receive this message, I will have already left.', 'By the time you get this message, I will have left.',
        'By the time you receive this message, I will have left.'],
      'when / by the time + présent (get), puis will have left.', { kc: FP, d: 1.5, tense: 'future_perfect' })
    .tr('Demain à cette heure-ci, je serai en train de passer mon entretien.',
      ['This time tomorrow, I will be having my interview.', 'This time tomorrow, I will be doing my interview.', 'At this time tomorrow, I will be having my interview.',
        'This time tomorrow, I will be in my interview.', 'This time tomorrow, I’ll be having my interview.'],
      '« être en train de » à un moment futur → will be + -ing.', { d: 1.3 })
    .say('D’ici 2030, nous aurons réduit nos émissions de moitié.',
      ['By 2030 we will have cut our emissions by half', 'By 2030 we will have halved our emissions', 'By 2030 we will have reduced our emissions by half', 'By 2030 we’ll have cut our emissions by half'],
      'd’ici + date = by ; action achevée avant → will have + participe.', { kc: FP, d: 1.5, tense: 'future_perfect' })
    .answer('Where do you think you will be, and what will you have achieved, five years from now?',
      'In five years I will be living abroad and I will have finished my degree in engineering.',
      'Utilise will be + -ing (situation en cours) et will have + participe (accomplissement).',
      { kc: [FP, FC], keywords: [['will be'], ['will have']], minWords: 12, d: 1.4 })
    .build(),
};
