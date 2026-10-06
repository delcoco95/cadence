import type { Cefr, ListenMcqExercise, McqExercise } from './types';
import { bandCenter, type PlacementBand, type PlacementItemMeta, type PlacementSection } from '../core/placement';

/**
 * Banque d'items du test de placement.
 * Formats repris des tests de placement officiels (Cambridge English Placement Test, Oxford Placement Test,
 * EF SET) : phrase à compléter (« Use of English »), vocabulaire en contexte, documents courts de la vie
 * réelle (message, affiche, annonce, article) et écoute. Les items sont ORIGINAUX : aucun item de ces tests
 * n'est reproduit. Chaque item est calibré sur une bande CECRL ; sa difficulté logit est le milieu de la bande.
 * Ces items sont réservés à l'évaluation : ils n'apparaissent jamais en pratique.
 */

export type PlacementExercise = (McqExercise | ListenMcqExercise) & { placement: PlacementItemMeta };

interface Raw {
  band: PlacementBand;
  q: string;
  o: string[];
  /** Index de la bonne réponse */
  a: number;
  why: string;
  unit?: string;
  passage?: string;
  audio?: string;
}

const INSTRUCTIONS: Record<PlacementSection, string> = {
  grammar: 'Choisis ce qui complète la phrase.',
  vocabulary: 'Choisis le mot qui convient.',
  reading: 'Lis le document, puis réponds.',
  listening: 'Écoute, puis réponds.',
};

const cefrOf = (band: PlacementBand): Cefr => (band.startsWith('C') ? 'C1' : band.startsWith('B2') ? 'B2' : band.startsWith('B1') ? 'B1' : 'A2');

function build(section: PlacementSection, items: Raw[]): PlacementExercise[] {
  return items.map((r, i) => {
    const id = `pl-${section}-${String(i + 1).padStart(2, '0')}`;
    const b = bandCenter(r.band);
    const placement: PlacementItemMeta = { id, section, b, guess: 1 / r.o.length, unitId: r.unit };
    const base = {
      id,
      cefr: cefrOf(r.band),
      skill: section,
      kcIds: [],
      difficulty: b,
      role: 'assessment' as const,
      instruction: INSTRUCTIONS[section],
      explanation: r.why,
      options: r.o,
      answer: r.a,
      placement,
    };
    if (section === 'listening') {
      return { ...base, type: 'listen_mcq', audio: r.audio!, question: r.q, speak: r.audio };
    }
    return { ...base, type: 'mcq', question: r.q, passage: r.passage };
  });
}

const GRAMMAR: Raw[] = [
  { band: 'A1', q: 'She ___ a teacher.', o: ['is', 'are', 'am', 'be'], a: 0, why: 'he / she / it → is.' },
  { band: 'A1', q: 'There ___ two books on the table.', o: ['is', 'are', 'be', 'has'], a: 1, why: 'Pluriel → there are.', unit: 'a2-basics' },
  { band: 'A1', q: 'I’d like ___ apple, please.', o: ['a', 'an', 'the', 'some'], a: 1, why: 'Son voyelle → an apple.', unit: 'a2-basics' },
  { band: 'A1', q: 'This is Tom. ___ car is red.', o: ['His', 'He', 'Him', 'He’s'], a: 0, why: 'Possessif masculin → his.', unit: 'a2-basics' },
  { band: 'A2', q: 'My brother ___ in a bank.', o: ['work', 'works', 'working', 'is work'], a: 1, why: 'he → works (-s du present simple).', unit: 'a2-present-simple' },
  { band: 'A2', q: '___ your sister like coffee?', o: ['Do', 'Does', 'Is', 'Has'], a: 1, why: 'Question au present simple avec he / she → does.', unit: 'a2-present-simple' },
  { band: 'A2', q: 'Be quiet! The baby ___.', o: ['sleeps', 'is sleeping', 'sleep', 'slept'], a: 1, why: 'Action en cours → present continuous.', unit: 'a2-present-continuous' },
  { band: 'A2', q: 'Where ___ you go last summer?', o: ['did', 'do', 'were', 'have'], a: 0, why: 'Question au passé → did.', unit: 'a2-past-simple' },
  { band: 'A2', q: 'We ___ to the cinema yesterday.', o: ['go', 'goes', 'went', 'gone'], a: 2, why: 'go → went au past simple.', unit: 'a2-past-simple' },
  { band: 'A2', q: 'I’m ___ to visit my grandparents next weekend.', o: ['going', 'go', 'will', 'went'], a: 0, why: 'Projet → be going to.', unit: 'a2-future' },
  { band: 'A2', q: 'This film is ___ than the book.', o: ['more interesting', 'interestinger', 'most interesting', 'as interesting'], a: 0, why: 'Adjectif long → more … than.', unit: 'a2-compare' },
  { band: 'A2', q: 'How ___ water do you drink every day?', o: ['much', 'many', 'lot', 'few'], a: 0, why: 'water est indénombrable → how much.', unit: 'a2-quantities' },
  { band: 'A2', q: 'You ___ wear a seatbelt. It’s the law.', o: ['must', 'can', 'might', 'would'], a: 0, why: 'Obligation → must.', unit: 'a2-modals' },
  { band: 'A2', q: 'The meeting is ___ Monday morning.', o: ['in', 'on', 'at', 'to'], a: 1, why: 'Jours → on Monday.', unit: 'a2-prepositions' },
  { band: 'A2+', q: '___ called you this morning?', o: ['Who', 'Who did', 'Whom did', 'Which did'], a: 0, why: 'Question sur le sujet : pas d’auxiliaire.', unit: 'a2-questions' },
  { band: 'A2+', q: 'He didn’t ___ my message.', o: ['see', 'saw', 'seen', 'sees'], a: 0, why: 'didn’t + base verbale.', unit: 'a2-past-simple' },
  { band: 'A2+', q: 'Have you ever ___ to Japan?', o: ['been', 'go', 'went', 'be'], a: 0, why: 'Present perfect : have + been.' },
  { band: 'A2+', q: 'I usually walk to work, but today I ___ the bus.', o: ['’m taking', 'take', 'took', 'takes'], a: 0, why: 'Exception temporaire → present continuous.', unit: 'a2-present-continuous' },
  { band: 'B1', q: 'I ___ here since 2019.', o: ['have lived', 'live', 'am living', 'lived'], a: 0, why: 'since + durée qui continue → present perfect.' },
  { band: 'B1', q: 'If it rains tomorrow, we ___ at home.', o: ['will stay', 'would stay', 'stayed', 'stay will'], a: 0, why: 'Premier conditionnel : if + présent, will + base.' },
  { band: 'B1', q: 'The house ___ in 1920.', o: ['was built', 'built', 'has build', 'is building'], a: 0, why: 'Passif au passé : was + participe.' },
  { band: 'B1', q: 'If I ___ more time, I would learn the piano.', o: ['had', 'have', 'would have', 'will have'], a: 0, why: 'Deuxième conditionnel : if + prétérit.' },
  { band: 'B1+', q: 'When I arrived, the film ___ already started.', o: ['had', 'has', 'was', 'did'], a: 0, why: 'Antériorité dans le passé → past perfect.' },
  { band: 'B1+', q: 'She asked me where I ___.', o: ['lived', 'do live', 'did live', 'live'], a: 0, why: 'Discours indirect : pas d’inversion, concordance des temps.' },
  { band: 'B1+', q: 'I’m not used to ___ up so early.', o: ['getting', 'get', 'got', 'have got'], a: 0, why: 'be used to + -ing.' },
  { band: 'B2', q: 'You ___ have told me! I would have helped.', o: ['should', 'must', 'can', 'will'], a: 0, why: 'Reproche sur le passé → should have + participe.' },
  { band: 'B2', q: 'By the time you read this, I ___ the country.', o: ['will have left', 'will leave', 'have left', 'am leaving'], a: 0, why: 'Action achevée avant un moment futur → futur antérieur.' },
  { band: 'B2', q: 'I wish I ___ that to her yesterday.', o: ['hadn’t said', 'didn’t say', 'wouldn’t say', 'haven’t said'], a: 0, why: 'Regret sur le passé : wish + past perfect.' },
  { band: 'B2+', q: 'It’s high time we ___ a decision.', o: ['made', 'make', 'will make', 'are making'], a: 0, why: 'It’s high time + prétérit.' },
  { band: 'B2+', q: 'Not only ___ late, but he also forgot the documents.', o: ['was he', 'he was', 'he is', 'did he be'], a: 0, why: 'Not only en tête → inversion.' },
  { band: 'B2+', q: 'She denied ___ the money.', o: ['having taken', 'to have took', 'to take', 'take'], a: 0, why: 'deny + -ing (ici forme parfaite).' },
  { band: 'C1', q: 'Had I known about the strike, I ___ a different route.', o: ['would have taken', 'would take', 'had taken', 'will take'], a: 0, why: 'Troisième conditionnel avec inversion.' },
  { band: 'C1', q: 'Hardly ___ the house when it started to rain.', o: ['had we left', 'we had left', 'did we leave', 'we left'], a: 0, why: 'Hardly … when, en tête de phrase → inversion au past perfect.' },
  { band: 'C1', q: 'The proposal, ___ details are still unclear, will be discussed tomorrow.', o: ['whose', 'which', 'that', 'who’s'], a: 0, why: 'Relatif possessif → whose.' },
];

const VOCABULARY: Raw[] = [
  { band: 'A1', q: 'My mother’s sister is my ___.', o: ['aunt', 'cousin', 'niece', 'uncle'], a: 0, why: 'aunt = tante.' },
  { band: 'A1', q: 'It’s very cold. Put on your ___.', o: ['coat', 'shorts', 'sandals', 'swimsuit'], a: 0, why: 'coat = manteau.' },
  { band: 'A1', q: 'I have ___ at 8 in the morning, before work.', o: ['breakfast', 'dinner', 'lunch', 'a party'], a: 0, why: 'breakfast = petit-déjeuner.' },
  { band: 'A2', q: 'Can I ___ by card?', o: ['pay', 'buy', 'spend', 'cost'], a: 0, why: 'pay by card = payer par carte.' },
  { band: 'A2', q: 'I’m really ___. I didn’t sleep last night.', o: ['tired', 'bored', 'angry', 'hungry'], a: 0, why: 'tired = fatigué.' },
  { band: 'A2', q: 'Excuse me, how do I ___ to the station?', o: ['get', 'arrive', 'reach', 'come at'], a: 0, why: 'get to = se rendre à.' },
  { band: 'A2', q: 'The ___ is going to be sunny tomorrow.', o: ['weather', 'time', 'climate', 'temperature'], a: 0, why: 'weather = le temps qu’il fait.' },
  { band: 'A2+', q: 'I need to ___ an appointment with the dentist.', o: ['make', 'do', 'take', 'have'], a: 0, why: 'make an appointment = prendre rendez-vous.' },
  { band: 'A2+', q: 'The flight was ___ because of the storm.', o: ['cancelled', 'closed', 'finished', 'stopped'], a: 0, why: 'cancelled = annulé.' },
  { band: 'B1', q: 'Could you ___ me a favour?', o: ['do', 'make', 'give', 'take'], a: 0, why: 'do someone a favour = rendre service.' },
  { band: 'B1', q: 'We had to ___ the meeting because the manager was ill.', o: ['put off', 'put on', 'take off', 'give up'], a: 0, why: 'put off = reporter.' },
  { band: 'B1', q: 'She’s very ___: she always tells the truth.', o: ['honest', 'honesty', 'dishonest', 'honestly'], a: 0, why: 'Adjectif attendu → honest.' },
  { band: 'B1', q: 'I’m looking ___ to seeing you.', o: ['forward', 'for', 'after', 'up'], a: 0, why: 'look forward to = avoir hâte de.' },
  { band: 'B1+', q: 'Let’s ___ the most of the good weather.', o: ['make', 'do', 'take', 'have'], a: 0, why: 'make the most of = profiter au maximum de.' },
  { band: 'B1+', q: 'Her explanation didn’t make ___ to me.', o: ['sense', 'meaning', 'logic', 'reason'], a: 0, why: 'make sense = avoir du sens.' },
  { band: 'B1+', q: 'He has been looking ___ a new job for months.', o: ['for', 'after', 'at', 'up'], a: 0, why: 'look for = chercher.' },
  { band: 'B2', q: 'Sales ___ significantly last year.', o: ['rose', 'raised', 'arose', 'rised'], a: 0, why: 'rise (intransitif) → rose ; raise demande un complément.' },
  { band: 'B2', q: 'The company is trying to cut ___ on costs.', o: ['down', 'off', 'out', 'up'], a: 0, why: 'cut down on = réduire.' },
  { band: 'B2', q: 'He’s always been reluctant to ___ responsibility for his mistakes.', o: ['take', 'make', 'give', 'bring'], a: 0, why: 'take responsibility = assumer.' },
  { band: 'B2+', q: 'She made a ___ effort to stay calm.', o: ['conscious', 'conscientious', 'conscience', 'consciously'], a: 0, why: 'a conscious effort = un effort délibéré.' },
  { band: 'C1', q: 'The new policy had a ___ impact on small businesses.', o: ['profound', 'deep-seated', 'heavy-handed', 'far-fetched'], a: 0, why: 'profound impact = impact profond (collocation).' },
  { band: 'C1', q: 'The results were ___ with our predictions.', o: ['consistent', 'coherent', 'constant', 'compliant'], a: 0, why: 'consistent with = cohérent avec, conforme à.' },
];

const READING: Raw[] = [
  {
    band: 'A1', passage: 'My name is Lucy. I’m 25 and I live in Leeds with my cat. I work in a hospital. I love my job!',
    q: 'Where does Lucy work?', o: ['In a hospital', 'In a school', 'In a shop', 'At home'], a: 0, why: '« I work in a hospital. »',
  },
  {
    band: 'A1', passage: 'Hi Emma! I’m at the café next to the library. Come at 4. — Sam',
    q: 'Where is Sam?', o: ['In a café', 'In the library', 'At home', 'At school'], a: 0, why: '« I’m at the café next to the library. »',
  },
  {
    band: 'A2', passage: 'SWIMMING POOL\nOpen every day, 7 am – 9 pm.\nClosed on Sunday afternoons.\nChildren under 8 must be with an adult.',
    q: 'A 6-year-old child…', o: ['can swim only with an adult', 'cannot go to the pool', 'can swim alone in the morning', 'must pay more'], a: 0,
    why: '« Children under 8 must be with an adult. »',
  },
  {
    band: 'A2', passage: 'Dear Mr Lee,\nI’m sorry, but I can’t come to work today. I have a high temperature and my doctor told me to stay in bed. I’ll call you tomorrow.\nAnna',
    q: 'Why is Anna writing?', o: ['To say she is ill', 'To ask for a holiday', 'To invite Mr Lee', 'To change her doctor'], a: 0,
    why: 'Elle a de la fièvre : elle prévient qu’elle est malade.',
  },
  {
    band: 'A2+', passage: 'Last year Marco moved from Rome to Dublin for work. At first, he found the weather difficult and missed his family, but now he loves the city and has made lots of friends.',
    q: 'How does Marco feel now?', o: ['Happy in Dublin', 'He wants to go back to Rome', 'He finds the weather difficult', 'He feels lonely'], a: 0,
    why: '« now he loves the city » : le reste concerne le début.',
  },
  {
    band: 'B1', passage: 'WANTED: part-time shop assistant. Weekends only. Experience preferred but not essential, as full training will be given. You must speak English and one other language.',
    q: 'Which statement is true?', o: ['You don’t need experience to apply', 'You must work every day', 'You need to speak three languages', 'There is no training'], a: 0,
    why: '« not essential » : l’expérience n’est pas obligatoire.',
  },
  {
    band: 'B1+', passage: 'Although the museum attracts thousands of visitors each summer, many locals have never been inside. The city council hopes that free entry on Sundays will change this.',
    q: 'Why will entry be free on Sundays?', o: ['To encourage local people to visit', 'Because there are too many tourists', 'Because the museum is closing', 'To reduce summer crowds'], a: 0,
    why: '« many locals have never been inside » : la gratuité vise les habitants.',
  },
  {
    band: 'B2', passage: 'Remote work was once seen as a perk for a lucky few. Today, many employers regard it as a way to attract talent, though some worry that it weakens team spirit and makes it harder to train new staff.',
    q: 'What is the writer’s main point?', o: ['Opinions about remote work are mixed', 'Remote work is only for lucky people', 'Employers have stopped hiring', 'Remote work improves team spirit'], a: 0,
    why: 'Avantage (attirer des talents) et inquiétudes (esprit d’équipe) : avis partagés.',
  },
  {
    band: 'B2+', passage: 'The author’s tone could hardly be described as optimistic; nevertheless, the final chapter leaves room for a cautious hope that the community might yet recover.',
    q: 'The final chapter is…', o: ['slightly hopeful', 'extremely optimistic', 'completely hopeless', 'humorous'], a: 0,
    why: '« a cautious hope » : un espoir prudent.',
  },
  {
    band: 'C1', passage: 'Critics argue that the report, while meticulously researched, glosses over the very issues it purports to address, leaving readers with an impression of thoroughness rather than genuine insight.',
    q: 'According to critics, the report…', o: ['seems thorough but avoids the key issues', 'is poorly researched', 'addresses every issue in depth', 'is too critical of its readers'], a: 0,
    why: '« glosses over » = survole ; « impression of thoroughness » = paraît sérieux.',
  },
];

const LISTENING: Raw[] = [
  { band: 'A1', audio: 'The bus leaves at half past eight.', q: 'When does the bus leave?', o: ['8:30', '8:15', '9:30', '8:00'], a: 0, why: 'half past eight = 8 h 30.' },
  { band: 'A1', audio: 'I’d like a coffee and two croissants, please.', q: 'What does the person order?', o: ['One coffee and two croissants', 'Two coffees and one croissant', 'A tea and two croissants', 'Two coffees'], a: 0, why: '« a coffee and two croissants ».' },
  { band: 'A2', audio: 'Sorry I’m late. There was a lot of traffic on the motorway.', q: 'Why is the speaker late?', o: ['Because of the traffic', 'Because the train was late', 'Because they got up late', 'Because of the weather'], a: 0, why: '« a lot of traffic ».' },
  { band: 'A2', audio: 'That’s sixteen pounds fifty, please.', q: 'How much is it?', o: ['£16.50', '£60.50', '£15.60', '£16.15'], a: 0, why: 'sixteen (16) ≠ sixty (60).' },
  { band: 'A2+', audio: 'The pharmacy is opposite the bank, next to the post office.', q: 'Where is the pharmacy?', o: ['Opposite the bank', 'Next to the bank', 'Behind the post office', 'Opposite the post office'], a: 0, why: '« opposite the bank ».' },
  { band: 'B1', audio: 'I was going to call you last night, but my phone died, so I sent you an email instead.', q: 'How did the speaker contact the listener?', o: ['By email', 'By phone', 'In person', 'By text message'], a: 0, why: '« I sent you an email instead ».' },
  { band: 'B1', audio: 'Could you possibly send me the report by Thursday? Friday is too late for the meeting.', q: 'When does the speaker need the report?', o: ['By Thursday', 'On Friday', 'After the meeting', 'Today'], a: 0, why: '« by Thursday » ; vendredi est trop tard.' },
  { band: 'B1+', audio: 'To be honest, I wasn’t expecting much from the restaurant, but the food turned out to be amazing.', q: 'What did the speaker think of the restaurant?', o: ['It was better than expected', 'It was disappointing', 'It was too expensive', 'It was as expected'], a: 0, why: '« wasn’t expecting much … turned out to be amazing ».' },
  { band: 'B2', audio: 'Had the weather been better, we’d have gone hiking, but as it was, we ended up spending the day in a museum.', q: 'What did they do?', o: ['They visited a museum', 'They went hiking', 'They stayed at home', 'They went to the beach'], a: 0, why: '« we ended up spending the day in a museum ».' },
  { band: 'B2', audio: 'I’m not saying the plan won’t work. I just think we should test it on a smaller scale first.', q: 'What does the speaker suggest?', o: ['Testing the plan on a small scale first', 'Rejecting the plan', 'Starting everywhere immediately', 'Asking someone else'], a: 0, why: '« test it on a smaller scale first ».' },
  { band: 'B2+', audio: 'She’s hardly the most patient person I know, but when it comes to teaching children, she’s in her element.', q: 'What does the speaker say about her?', o: ['She’s excellent at teaching children', 'She’s very patient', 'She dislikes teaching', 'She’s a bad teacher'], a: 0, why: '« in her element » = dans son élément.' },
  { band: 'C1', audio: 'The figures, if anything, understate the problem, since many cases simply go unreported.', q: 'What does the speaker imply?', o: ['The real problem is bigger than the figures show', 'The figures exaggerate the problem', 'Most cases are reported', 'The problem is disappearing'], a: 0, why: '« understate » = minimiser.' },
];

export const PLACEMENT_ITEMS: PlacementExercise[] = [
  ...build('grammar', GRAMMAR),
  ...build('vocabulary', VOCABULARY),
  ...build('reading', READING),
  ...build('listening', LISTENING),
];

export const placementById = new Map(PLACEMENT_ITEMS.map((e) => [e.id, e]));
