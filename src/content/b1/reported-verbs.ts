import type { Lesson } from '../types';
import { exercises } from '../builders';

const REP = 'b1.grammar.reported.statements';
const ST = 'b1.grammar.reported.say_tell';
const VP = 'b1.grammar.verb_patterns';
const PV = 'b1.vocab.phrasal_verbs';

export const reportedVerbs1: Lesson = {
  id: 'b1-reported-verbs-1',
  cefr: 'B1',
  unitId: 'b1-reported-verbs',
  title: 'Le discours rapporté',
  subtitle: 'She said she was tired · He told me he would call',
  kcIds: [REP, ST],
  estMinutes: 8,
  explanation: [
    {
      title: 'Concordance des temps',
      body: 'Après said / told au passé, le verbe recule d’un temps. Les pronoms et les repères de temps changent aussi.',
      table: [
        ['"I’m tired."', 'She said (that) she was tired.'],
        ['"I’m working."', 'He said he was working.'],
        ['"I’ll call you."', 'He said he would call me.'],
        ['"I can’t come."', 'She said she couldn’t come.'],
        ['"I’ve lost my keys." / "I lost my keys."', 'He said he had lost his keys.'],
      ],
      examples: [
        { en: 'Emma said she was moving to Bristol.', fr: 'Emma a dit qu’elle déménageait à Bristol.' },
        { en: 'They told us they would be late.', fr: 'Ils nous ont dit qu’ils seraient en retard.' },
      ],
      tip: 'Repères de temps : tomorrow → the next day, yesterday → the day before, here → there.',
    },
    {
      title: 'say ou tell ?',
      table: [
        ['say (something)', 'She said that she was busy. · She said to me…'],
        ['tell + personne', 'She told me that she was busy.'],
      ],
      tip: '« He said me » ✗ → « He told me » ou « He said to me » ✓. tell est toujours suivi de la personne.',
    },
  ],
  exercises: exercises('b1-reported-verbs-1', 'B1', { kc: REP, tense: 'reported_speech' })
    .mcq('"I’m tired." → She said that she ___ tired.', ['was', 'is being', 'were'], 0, 'am / is → was.', { d: -0.4 })
    .mcq('He ___ me that he was leaving.', ['told', 'said', 'spoke'], 0, 'Suivi de la personne (me) → told.', { kc: ST, d: -0.4 })
    .cloze('"I will call you." → He said he ___ call me.', ['would', "'d"], 'will → would.', { d: -0.2 })
    .cloze('"We can’t come." → They said they ___ come.', ["couldn't", 'could not'], 'can’t → couldn’t.', { d: 0 })
    .cloze('"I’m working from home." → She told me she ___ from home.', ['was working'], 'Present continuous → past continuous.', { d: 0.1 })
    .type('Rapporte : "I live in Leeds," said Amy. → Amy said…', ['Amy said she lived in Leeds.', 'Amy said that she lived in Leeds.'], 'live → lived ; I → she.', { loose: true, d: 0.3 })
    .type('Rapporte : "I have lost my passport," Tom told us. → Tom told us…', ['Tom told us he had lost his passport.', 'Tom told us that he had lost his passport.', "Tom told us he'd lost his passport.", "Tom told us that he'd lost his passport."],
      'have lost → had lost ; my → his.', { loose: true, d: 0.6 })
    .order('Elle m’a dit qu’elle aimait son nouveau travail.', 'She told me that she liked her new job.', 'told + me ; like → liked.', { kc: ST, distractors: ['said'], d: 0.1 })
    .tr('Il a dit qu’il était occupé.', ['He said he was busy.', 'He said that he was busy.'], 'said + (that) + he was.', { d: 0.2 })
    .tr('Elle m’a dit qu’elle viendrait.', ['She told me she would come.', 'She told me that she would come.', "She told me she'd come.", 'She said she would come.', "She said she'd come.", 'She said to me that she would come.'],
      '« m’a dit » → told me ; viendrait → would come.', { kc: ST, d: 0.4 })
    .listen('My boss told me I could leave early on Friday.', 'Qu’a dit sa responsable ?', ['Il peut partir tôt vendredi', 'Il doit rester tard vendredi', 'Il ne travaille pas vendredi'], 0,
      'I could leave early = je pouvais partir tôt (can → could).', { d: 0 })
    .listen('Jake said he was moving to Berlin, but he didn’t say when.', 'Que sait-on ?', ['Jake va déménager à Berlin, sans date précise', 'Jake a déménagé à Berlin hier', 'Jake ne veut pas aller à Berlin'], 0,
      'he was moving = il allait déménager ; he didn’t say when = il n’a pas dit quand.', { d: 0.1 })
    .dictation('She told us that the train was going to be late.', 'told us + is going to → was going to.', { kc: ST, d: 0.1 })
    .say('Il m’a dit qu’il était malade.', ['He told me he was ill', 'He told me that he was ill', 'He told me he was sick', 'He told me that he was sick', 'He said he was ill', 'He said he was sick'],
      'told me + he was ill.', { kc: ST, d: 0.3 })
    .answer('What did a friend or colleague tell you recently? Report it.', 'My colleague told me that she was looking for a new job and she said she would leave in June.',
      'Rapporte avec told / said et recule les temps.', { kc: [REP, ST], keywords: [['told', 'said']], minWords: 12, d: 0.6 })
    .build(),
};

export const reportedVerbs2: Lesson = {
  id: 'b1-reported-verbs-2',
  cefr: 'B1',
  unitId: 'b1-reported-verbs',
  title: 'Verbe + -ing ou to · phrasal verbs',
  subtitle: 'I enjoy cooking · I’ve decided to move · look after, give up…',
  kcIds: [VP, PV],
  estMinutes: 8,
  explanation: [
    {
      title: '-ing ou to + base ?',
      table: [
        ['+ -ing', 'enjoy, avoid, finish, mind, suggest, keep, consider, can’t stand'],
        ['+ to + base', 'want, decide, hope, plan, agree, refuse, manage, afford, would like'],
        ['préposition + -ing', 'I’m interested in learning… · I’m looking forward to seeing you.'],
      ],
      examples: [
        { en: 'I enjoy working with people.', fr: 'J’aime travailler avec des gens.' },
        { en: 'She decided to change jobs.', fr: 'Elle a décidé de changer de travail.' },
        { en: 'Would you mind opening the window?', fr: 'Ça te dérangerait d’ouvrir la fenêtre ?' },
      ],
      tip: 'Le français met un infinitif partout ; l’anglais non : « I avoid to drive » ✗ → « I avoid driving » ✓.',
    },
    {
      title: 'Phrasal verbs courants',
      table: [
        ['look after', 's’occuper de, garder'],
        ['look for', 'chercher'],
        ['find out', 'découvrir, apprendre'],
        ['give up', 'arrêter, abandonner'],
        ['put off', 'repousser, remettre à plus tard'],
        ['turn down', 'refuser (une offre) ; baisser (le son)'],
        ['set up', 'créer, monter'],
        ['run out of', 'ne plus avoir de'],
      ],
      tip: 'Le sens d’un phrasal verb est souvent impossible à deviner : apprends-le en contexte, avec un exemple.',
    },
  ],
  exercises: exercises('b1-reported-verbs-2', 'B1', { kc: VP })
    .mcq('I really enjoy ___ new recipes.', ['trying', 'to try', 'try'], 0, 'enjoy + -ing.', { d: -0.4 })
    .mcq('We’ve decided ___ a house in the country.', ['to buy', 'buying', 'buy'], 0, 'decide + to + base.', { d: -0.4 })
    .cloze('Try to avoid ___ during rush hour.', ['driving'], 'avoid + -ing.', { hint: 'drive', d: -0.1 })
    .cloze('She refused ___ the contract.', ['to sign'], 'refuse + to + base.', { hint: 'sign', d: 0 })
    .mcq('He gave ___ smoking last year.', ['up', 'off', 'out'], 0, 'give up = arrêter (une habitude).', { kc: PV, d: -0.2 })
    .mcq('Can you ___ my cat while I’m on holiday?', ['look after', 'look for', 'look up'], 0, 'look after = s’occuper de.', { kc: PV, d: -0.2 })
    .cloze('We’ve ___ out of milk. Can you buy some?', ['run'], 'run out of = ne plus avoir de (have run).', { kc: PV, d: 0.1 })
    .order('J’ai hâte de te voir.', "I'm looking forward to seeing you.", 'look forward to + -ing (to est ici une préposition).', { kc: [VP, PV], distractors: ['see'], d: 0.3 })
    .tr('Elle a réussi à trouver un appartement.', ['She managed to find a flat.', 'She managed to find an apartment.', 'She succeeded in finding a flat.', 'She succeeded in finding an apartment.', 'She was able to find a flat.', 'She was able to find an apartment.'],
      'manage + to + base.', { d: 0.4 })
    .tr('Je dois découvrir pourquoi il a refusé l’offre.', ['I have to find out why he turned down the offer.', 'I have to find out why he refused the offer.', 'I need to find out why he turned down the offer.', 'I need to find out why he refused the offer.', 'I must find out why he turned down the offer.', 'I must find out why he refused the offer.', 'I have to find out why he turned the offer down.', 'I need to find out why he turned the offer down.'],
      'find out = découvrir ; turn down = refuser.', { kc: PV, d: 0.6 })
    .listen('I’d like to set up my own business one day, but I keep putting it off.', 'Que dit-il ?', ['Il repousse sans cesse son projet d’entreprise', 'Il a déjà créé son entreprise', 'Il a abandonné l’idée'], 0,
      'set up = créer ; keep putting it off = je n’arrête pas de le repousser.', { kc: [PV, VP], d: 0.3 })
    .listen('Do you mind waiting a few minutes? The doctor is running late.', 'Que demande-t-on ?', ['D’attendre quelques minutes', 'De revenir demain', 'De prendre un autre rendez-vous'], 0,
      'Do you mind + -ing ? = ça vous dérange de… ?', { d: -0.1 })
    .mcq('Pourquoi annule-t-elle le dîner ?', ['Elle doit garder son neveu', 'Elle est malade', 'Le restaurant est fermé'], 0, 'I have to look after my nephew = je dois garder mon neveu.',
      { kc: PV, passage: 'Hi! Sorry, I can’t make it tonight — I have to look after my nephew. Shall we put off dinner until Saturday? I’ve also found out that the new Thai place opens on Friday, so we could try it!', d: 0.1 })
    .say('J’ai décidé d’apprendre à nager.', ['I decided to learn to swim', "I've decided to learn to swim", 'I have decided to learn to swim', 'I decided to learn how to swim', "I've decided to learn how to swim"],
      'decide + to ; learn + to.', { d: 0.3 })
    .answer('What do you enjoy doing at the weekend, and what do you want to do next year?', 'At the weekend I enjoy going for long walks and reading. Next year I want to learn to play the piano.',
      'enjoy + -ing ; want + to.', { keywords: [['enjoy', 'love', 'like'], ['want to', 'hope to', 'plan to', 'would like to']], minWords: 14, d: 0.6 })
    .build(),
};
