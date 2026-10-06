import type { Lesson } from '../types';
import { exercises } from '../builders';

export const participles1: Lesson = {
  id: 'c1-participles-1',
  cefr: 'C1',
  unitId: 'c1-participles',
  title: 'Propositions participiales',
  subtitle: 'Feeling unwell…, Having finished…, Written in 1990…',
  kcIds: ['c1.participle.adverbial', 'c1.participle.perfect'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Trois participes, trois sens',
      body: 'Une participiale remplace une subordonnée (because, when, after, as…) et rend le style plus dense, surtout à l’écrit.',
      table: [
        ['-ing : simultanéité ou cause (actif)', 'Feeling unwell, she left early.'],
        ['Having + participe : antériorité (actif)', 'Having read the report, he called the board.'],
        ['Participe passé : sens passif', 'Written in 1990, the novel still feels modern.'],
        ['Having been + participe : antériorité (passif)', 'Having been warned twice, he had no excuse.'],
        ['Négation : Not + participe', 'Not knowing the area, we got lost.'],
      ],
      examples: [
        { en: 'Having lived in Japan, she understood the culture.', fr: 'Ayant vécu au Japon, elle comprenait la culture.' },
        { en: 'Founded in 1885, the company is still family-owned.', fr: 'Fondée en 1885, l’entreprise appartient toujours à la même famille.' },
      ],
      tip: 'Le sujet de la participiale doit être celui de la principale. « Walking to work, the rain started » ✗ (la pluie ne marche pas !) → « Walking to work, I got caught in the rain » ✓. C’est le fameux « dangling participle ».',
    },
    {
      title: 'Avec une conjonction',
      table: [
        ['After / Before + -ing', 'After signing the contract, …'],
        ['While / When + -ing', 'While travelling in Peru, …'],
        ['On / Upon + -ing (= dès que)', 'On arriving, please report to reception.'],
        ['Once / If / Unless + participe passé', 'Once approved, the plan will be launched.'],
      ],
      tip: '« En arrivant » = On arriving / When I arrived, pas « In arriving ». « Après avoir mangé » = After eating / Having eaten, jamais « After to have eaten ».',
    },
  ],
  exercises: exercises('c1-participles-1', 'C1', { kc: 'c1.participle.adverbial' })
    .mcq('___ the instructions carefully, she assembled the desk in under an hour.', ['Having read', 'Read', 'Having been read', 'To have read'], 0,
      'Action antérieure, sens actif → Having + participe : Having read.', { kc: 'c1.participle.perfect', d: 2 })
    .mcq('___ in simple language, the guide is accessible to all patients.', ['Written', 'Writing', 'Having written', 'To write'], 0,
      'Le guide EST écrit → sens passif → participe passé : Written.', { d: 2 })
    .mcq('Which sentence is correct?', [
      'Arriving late, I found the doors already closed.',
      'Arriving late, the doors were already closed.',
      'Arrived late, I found the doors already closed.',
      'Having arrived late, the doors were already closed.',
    ], 0, 'Le sujet implicite de « Arriving late » doit être le sujet de la principale (I). Ce ne sont pas les portes qui arrivent en retard.', { d: 2.3, instruction: 'Quelle phrase est correcte ?' })
    .cloze('___ the area, we relied entirely on the GPS.', ['Not knowing'],
      'Négation d’une participiale : Not + -ing, placé en tête.', { hint: 'not / know', d: 2 })
    .cloze('___ rejected twice, the proposal was finally accepted on the third attempt.', ['Having been'],
      'Antériorité + sens passif → Having been + participe.', { kc: 'c1.participle.perfect', hint: 'be, antériorité', d: 2.4 })
    .cloze('___ arriving at the airport, passengers should go directly to gate B.', ['On', 'Upon'],
      'On / Upon + -ing = dès l’arrivée, en arrivant.', { d: 2.1 })
    .type('Réécris avec une participiale : After she had finished her degree, she moved to Montreal.', [
      'Having finished her degree, she moved to Montreal.',
      'After finishing her degree, she moved to Montreal.',
      'After having finished her degree, she moved to Montreal.',
      'On finishing her degree, she moved to Montreal.',
    ], 'had finished → Having finished (ou After finishing). Même sujet dans les deux propositions : she.', { kc: 'c1.participle.perfect', loose: true, d: 2.2, instruction: 'Transforme la phrase.' })
    .order('Ayant perdu ses clés, il a dû appeler un serrurier.', 'Having lost his keys, he had to call a locksmith.',
      'Having + participe passé pour l’action antérieure.', { kc: 'c1.participle.perfect', distractors: ['been', 'to'], d: 2 })
    .tr('Construit au XIXᵉ siècle, le pont a besoin d’être rénové.', [
      'Built in the 19th century, the bridge needs renovating.',
      'Built in the nineteenth century, the bridge needs renovating.',
      'Built in the 19th century, the bridge needs to be renovated.',
      'Built in the nineteenth century, the bridge needs to be renovated.',
      'Built in the 19th century, the bridge needs renovation.',
      'Built in the nineteenth century, the bridge needs renovation.',
      'Built in the 19th century, the bridge is in need of renovation.',
      'Built in the 1800s, the bridge needs renovating.',
      'Built in the 1800s, the bridge needs to be renovated.',
      'Built in the 19th century, the bridge needs restoring.',
      'Built in the 19th century, the bridge needs to be restored.',
      'Built in the nineteenth century, the bridge needs to be restored.',
    ], 'Participe passé en tête (sens passif) : Built in… « avoir besoin d’être rénové » = need renovating / need to be renovated.', { d: 2.2 })
    .tr('N’ayant reçu aucune réponse, nous avons relancé le client.', [
      'Having received no reply, we contacted the client again.',
      'Having received no response, we contacted the client again.',
      'Having received no answer, we contacted the client again.',
      'Not having received a reply, we contacted the client again.',
      'Not having received any reply, we contacted the client again.',
      'Having received no reply, we followed up with the client.',
      'Having received no response, we followed up with the client.',
      'Not having received a response, we followed up with the client.',
      'Not having received any response, we followed up with the client.',
      'Having received no reply, we chased the client.',
      'Having had no reply, we chased the client.',
      'Having received no reply, we sent the client a reminder.',
      'Having received no response, we sent the client a reminder.',
      'Having received no reply, we got back in touch with the client.',
    ], 'Having received no reply… ou Not having received a reply… « relancer » = follow up with, chase, send a reminder.', { kc: 'c1.participle.perfect', d: 2.5 })
    .mcq('What does the passage suggest about Okafor’s early failure?', [
      'It led indirectly to experience she valued highly',
      'It ended her hopes of becoming a diplomat',
      'It was caused by her lack of formal education',
      'It made her impatient with others',
    ], 0, '« Having failed her first entrance exam, she spent two years… an experience she later described as her real education » : l’échec a mené à une expérience précieuse.', {
      d: 2.4,
      passage: 'Born in a small mining town and educated largely by her grandmother, Ruth Okafor seemed an unlikely candidate for a career in diplomacy. Having failed her first entrance exam, she spent two years working in a translation agency, an experience she later described as her real education. Posted to Nairobi in 1998, she quickly earned a reputation for patience. Asked once what her secret was, she replied that she simply listened longer than everyone else in the room.',
    })
    .listen('Having checked the figures twice, the accountant was confident there were no mistakes.', 'Pourquoi le comptable était-il confiant ?', [
      'Il avait vérifié les chiffres deux fois',
      'Un collègue avait vérifié les chiffres',
      'Les chiffres étaient simples',
      'Il n’avait pas eu le temps de vérifier',
    ], 0, 'Having checked = ayant vérifié (action antérieure qui explique la confiance).', { kc: 'c1.participle.perfect', d: 2 })
    .dictation('Not wanting to disturb anyone, she left the office without saying goodbye.',
      'Not wanting… = ne voulant pas… (cause). without + -ing.', { d: 2.2 })
    .say('En arrivant à l’hôtel, nous avons découvert que notre réservation avait été annulée.', [
      'On arriving at the hotel, we discovered that our booking had been cancelled',
      'On arriving at the hotel, we found that our booking had been cancelled',
      'Upon arriving at the hotel, we found that our booking had been cancelled',
      'On arriving at the hotel, we found out our reservation had been cancelled',
      'Arriving at the hotel, we discovered that our reservation had been cancelled',
      'When we arrived at the hotel, we discovered that our booking had been cancelled',
      'When we arrived at the hotel, we found that our reservation had been cancelled',
    ], '« En arrivant » = On arriving / When we arrived. Jamais « In arriving ».', { d: 2.4 })
    .answer('Describe how you prepared for an important event (an exam, an interview, a trip). Use at least one participle clause.',
      'Having studied the company carefully, I felt confident at the interview, and knowing the questions in advance helped me a lot.',
      'Commence par Having + participe, ou utilise After / Before / While + -ing.',
      { keywords: [['having', 'knowing', 'feeling', 'wanting', 'after', 'before', 'while', 'not knowing']], minWords: 14, d: 2.6 })
    .build(),
};

export const participles2: Lesson = {
  id: 'c1-participles-2',
  cefr: 'C1',
  unitId: 'c1-participles',
  title: 'Relatives réduites et constructions absolues',
  subtitle: 'People living nearby…, With prices rising…, Weather permitting',
  kcIds: ['c1.participle.reduced_relative', 'c1.participle.absolute'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Les relatives réduites',
      body: 'On supprime le pronom relatif et l’auxiliaire pour alléger la phrase.',
      table: [
        ['who / which + verbe actif → -ing', 'Passengers travelling to Leeds should change here.'],
        ['who / which + be + participe → participe', 'The report published yesterday contains errors.'],
        ['the first / last / only + to + base', 'She was the first woman to win the award.'],
      ],
      examples: [
        { en: 'Anyone wishing to leave early should inform the organisers.', fr: 'Toute personne souhaitant partir plus tôt doit prévenir les organisateurs.' },
        { en: 'Most of the cars made here are exported.', fr: 'La plupart des voitures fabriquées ici sont exportées.' },
      ],
      tip: 'Le -ing décrit une action en cours ou une caractéristique. Pour un événement unique et terminé, garde la relative : The man who stole my bag (pas « the man stealing my bag », qui voudrait dire « en train de voler »).',
    },
    {
      title: 'Les constructions absolues',
      body: 'Un groupe nominal suivi d’un participe, sans verbe conjugué, donne le contexte de la phrase principale.',
      table: [
        ['Nom + participe / adverbe', 'The meeting over, everyone went home.'],
        ['With + nom + -ing / participe', 'With prices rising, households are cutting back.'],
        ['There being + nom', 'There being no further questions, the session was closed.'],
        ['Expressions figées', 'Weather permitting / All things considered / Generally speaking'],
      ],
      examples: [
        { en: 'All things considered, the trip was a success.', fr: 'Tout bien considéré, le voyage a été un succès.' },
      ],
      tip: '« Si le temps le permet » = weather permitting, sans article. « Toutes choses égales par ailleurs » = all (other) things being equal.',
    },
  ],
  exercises: exercises('c1-participles-2', 'C1', { kc: 'c1.participle.reduced_relative' })
    .mcq('Anyone ___ to attend the workshop should register by Friday.', ['wishing', 'wished', 'who wishing', 'to wish'], 0,
      'who wishes → wishing (relative réduite active).', { d: 1.9 })
    .mcq('The measures ___ last month have already had a visible effect.', ['introduced', 'introducing', 'were introduced', 'having introduced'], 0,
      'which were introduced → introduced (relative réduite passive).', { d: 2 })
    .cloze('She was the youngest person ever ___ the prize.', ['to win'],
      'Après the first / the youngest / the only → to + base.', { hint: 'win', d: 2 })
    .cloze('___ permitting, the ceremony will take place in the garden.', ['Weather'],
      'Weather permitting = si le temps le permet (construction absolue figée).', { kc: 'c1.participle.absolute', d: 2 })
    .cloze('With inflation ___, many families are struggling to pay their bills.', ['rising'],
      'With + nom + -ing : construction absolue de cause.', { kc: 'c1.participle.absolute', hint: 'rise', d: 2.1 })
    .cloze('___ no further business, the chair closed the meeting.', ['There being'],
      'There being + nom = comme il n’y avait…', { kc: 'c1.participle.absolute', hint: 'there / be', d: 2.6 })
    .type('Réduis la relative : The documents that were sent to you last week contain an error.', [
      'The documents sent to you last week contain an error.',
    ], 'that were sent → sent (participe passé, sens passif).', { loose: true, d: 2, instruction: 'Transforme la phrase.' })
    .type('Réécris avec une construction absolue (commence par « The work » ou « With the work ») : When the work was finished, the team went out to celebrate.', [
      'The work finished, the team went out to celebrate.',
      'The work done, the team went out to celebrate.',
      'The work completed, the team went out to celebrate.',
      'The work over, the team went out to celebrate.',
      'The work being finished, the team went out to celebrate.',
      'The work having been finished, the team went out to celebrate.',
      'With the work finished, the team went out to celebrate.',
      'With the work done, the team went out to celebrate.',
      'With the work completed, the team went out to celebrate.',
    ], 'Nom + participe, sans verbe conjugué : The work finished, …', { kc: 'c1.participle.absolute', loose: true, d: 2.7, instruction: 'Transforme la phrase.' })
    .order('Les candidats sélectionnés pour un entretien seront contactés par e-mail.', 'Candidates selected for interview will be contacted by email.',
      'who are selected → selected (relative réduite).', { distractors: ['who', 'selecting'], d: 2 })
    .tr('Les personnes souhaitant intervenir doivent lever la main.', [
      'People wishing to speak must raise their hand.',
      'People wishing to speak must raise their hands.',
      'People wishing to speak should raise their hand.',
      'People wishing to speak should raise their hands.',
      'People wanting to speak must raise their hand.',
      'People wishing to take the floor must raise their hand.',
      'Those wishing to speak must raise their hand.',
      'Those wishing to speak must raise their hands.',
      'Those wishing to speak should raise their hand.',
      'Those wishing to speak should raise their hands.',
      'Anyone wishing to speak must raise their hand.',
      'Anyone wishing to speak should raise their hand.',
      'People who wish to speak must raise their hand.',
      'People who wish to speak should raise their hands.',
      'People who want to speak must raise their hand.',
      'Anyone who wishes to speak should raise their hand.',
    ], '« souhaitant » = wishing (relative réduite). « intervenir » (dans un débat) = speak, take the floor ; pas « intervene ».', { d: 2.1 })
    .mcq('What is the researchers’ position?', [
      'They urge caution in interpreting the results',
      'They claim cycling lanes always reduce injuries',
      'They believe car ownership is irrelevant',
      'They reject the findings of the study',
    ], 0, '« caution against drawing simple conclusions » : les chercheurs appellent à la prudence.', {
      d: 2.3,
      passage: 'Data collected over a ten-year period suggests that cities investing heavily in cycling infrastructure see measurable falls in traffic-related injuries. The effect, however, is far from uniform. With car ownership remaining high, some suburbs recorded no improvement at all. Researchers involved in the study caution against drawing simple conclusions, all other things rarely being equal in urban policy.',
    })
    .listen('The negotiations finally over, both sides agreed to meet again in the spring.', 'Que s’est-il passé ?', [
      'Les négociations sont terminées et une nouvelle rencontre est prévue',
      'Les négociations ont échoué définitivement',
      'Les négociations commenceront au printemps',
      'Une des parties a refusé de revenir',
    ], 0, 'The negotiations (being) over = une fois les négociations terminées.', { kc: 'c1.participle.absolute', d: 2.2 })
    .dictation('Visitors arriving after six o’clock must use the side entrance.',
      'who arrive → arriving (relative réduite).', { d: 2 })
    .say('Toutes choses égales par ailleurs, les prix devraient baisser.', [
      'All things being equal, prices should fall',
      'All other things being equal, prices should fall',
      'Other things being equal, prices should fall',
      'All else being equal, prices should fall',
      'All things being equal, prices should go down',
      'All else being equal, prices should go down',
      'All things being equal, prices should drop',
      'All things being equal, prices ought to fall',
    ], 'Expression figée : all (other) things being equal.', { kc: 'c1.participle.absolute', d: 2.3 })
    .answer('Describe the people or things around you right now, using reduced relatives (for example “a man sitting…”, “a book written by…”).',
      'I can see a colleague sitting by the window, a pile of reports printed this morning and a plant given to me by my sister.',
      'Utilise des participes après les noms : sitting, standing, printed, written, given…',
      { keywords: [['sitting', 'standing', 'working', 'talking', 'reading', 'lying', 'printed', 'written', 'given', 'made', 'left', 'painted']], minWords: 14, d: 2.5 })
    .build(),
};
