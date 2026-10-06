import type { Lesson } from '../types';
import { exercises } from '../builders';

export const inversion1: Lesson = {
  id: 'c1-inversion-1',
  cefr: 'C1',
  unitId: 'c1-inversion',
  title: 'Inversion après un adverbe négatif',
  subtitle: 'Never have I…, Not only…, Hardly… when, No sooner… than',
  kcIds: ['c1.inversion.negative_adverbials', 'c1.inversion.time_clauses'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le principe',
      body: 'En registre soutenu, on place en tête de phrase un adverbe négatif ou restrictif pour insister. Le sujet et l’auxiliaire s’inversent alors, exactement comme dans une question.',
      table: [
        ['Never / Rarely / Seldom', 'Never have I seen such chaos.'],
        ['Little', 'Little did they know what was coming.'],
        ['Not only … but (also)', 'Not only did she win, but she also broke the record.'],
        ['Under no circumstances / On no account', 'Under no circumstances should you share your password.'],
        ['At no time / Not once', 'At no time was the public informed.'],
      ],
      examples: [
        { en: 'Rarely have we received so many complaints.', fr: 'Nous avons rarement reçu autant de plaintes.' },
        { en: 'Little did I know that she was my new boss.', fr: 'J’étais loin de me douter que c’était ma nouvelle patronne.' },
      ],
      tip: 'Pas d’auxiliaire dans la phrase de départ ? Ajoute do / does / did, comme dans une question : « Little they knew » ✗ → « Little did they know » ✓. Le verbe principal revient alors à la base : « Not only did he lied » ✗ → « Not only did he lie » ✓.',
    },
    {
      title: 'Les enchaînements temporels',
      body: 'Pour dire qu’une chose arrive juste après une autre, ou seulement à partir d’un certain moment.',
      table: [
        ['Hardly / Scarcely … when', 'Hardly had we sat down when the alarm went off.'],
        ['No sooner … than', 'No sooner had he left than it started to rain.'],
        ['Not until … + inversion dans la principale', 'Not until the results came out did we relax.'],
        ['Only when / Only then / Only after', 'Only then did I understand the problem.'],
      ],
      examples: [
        { en: 'No sooner had the meeting started than the power went off.', fr: 'La réunion venait à peine de commencer que le courant a été coupé.' },
        { en: 'Only after the audit did they admit the mistake.', fr: 'Ce n’est qu’après l’audit qu’ils ont reconnu l’erreur.' },
      ],
      tip: 'Piège classique : « No sooner … when » ✗. No sooner est un comparatif, il va avec than ; hardly et scarcely vont avec when. Avec Not until et Only when, l’inversion porte sur la proposition PRINCIPALE, jamais sur celle qui suit until / when.',
    },
    {
      title: 'Registre et calques',
      body: 'À l’oral courant, ces tournures paraissent emphatiques, voire théâtrales. Elles brillent à l’écrit : essais, discours, rapports, lettres officielles.',
      tip: 'Le français dit « Jamais je n’ai vu… » sans inverser le sujet. L’anglais, lui, inverse obligatoirement : Never have I seen…, pas « Never I have seen ».',
    },
  ],
  exercises: exercises('c1-inversion-1', 'C1', { kc: 'c1.inversion.negative_adverbials' })
    .mcq('Rarely ___ such a well-argued report.', ['have I read', 'I have read', 'I have ever read', 'read I'], 0,
      'Rarely en tête → inversion auxiliaire + sujet : have I read. Sans auxiliaire, l’inversion « read I » est impossible en anglais moderne.', { d: 1.9 })
    .mcq('Not only ___ the deadline, but they also went over budget.', ['did they miss', 'they missed', 'they did miss', 'missed they'], 0,
      'Not only en tête → did + sujet + base : did they miss.', { d: 2 })
    .cloze('Little ___ that the merger would cost them their jobs.', ['did they suspect'],
      'Little (= ils étaient loin de…) + inversion avec did : did they suspect.', { hint: 'they / suspect', d: 2.1 })
    .cloze('Under no circumstances ___ the building during the inspection.', ['should visitors leave'],
      'Under no circumstances + modal + sujet + base : should visitors leave.', { hint: 'visitors / should / leave', d: 2.2 })
    .cloze('Hardly ___ the presentation when the projector broke down.', ['had she started', 'had she begun'],
      'Hardly + past perfect inversé (had she started) … when + past simple.', { kc: 'c1.inversion.time_clauses', hint: 'she / start', d: 2.3 })
    .cloze('No sooner had the minister finished speaking ___ journalists began shouting questions.', ['than'],
      'No sooner … than (comparatif), jamais « when ».', { kc: 'c1.inversion.time_clauses', hint: 'conjonction', d: 2 })
    .type('Réécris en commençant par « Not until » : We didn’t realise how serious the problem was until the audit.',
      ['Not until the audit did we realise how serious the problem was.', 'Not until the audit did we realize how serious the problem was.'],
      'Not until + complément, puis inversion dans la principale : did we realise. La subordonnée « how serious the problem was » garde l’ordre normal.',
      { kc: 'c1.inversion.time_clauses', loose: true, d: 2.6, instruction: 'Transforme la phrase.' })
    .order('Avec inversion : Jamais l’entreprise n’avait connu une croissance aussi rapide.', 'Never had the company experienced such rapid growth.',
      'Never + had + sujet + participe passé. « such » + adjectif + nom indénombrable : such rapid growth.',
      { distractors: ['did'], d: 2, instruction: 'Remets les mots dans l’ordre (avec inversion).' })
    .tr('Non seulement il a menti, mais il a aussi accusé ses collègues.', [
      'Not only did he lie, but he also blamed his colleagues.',
      'Not only did he lie, but he also accused his colleagues.',
      'Not only did he lie, he also blamed his colleagues.',
      'Not only did he lie, he also accused his colleagues.',
      'Not only did he lie, but he blamed his colleagues too.',
      'He not only lied but also blamed his colleagues.',
      'He not only lied but also accused his colleagues.',
    ], 'En tête de phrase, Not only impose l’inversion : did he lie (et non « Not only he lied »). Sans inversion, il faut déplacer not only après le sujet : He not only lied…', { d: 2.3 })
    .tr('À peine étions-nous arrivés que la réunion a été annulée.', [
      'Hardly had we arrived when the meeting was cancelled.',
      'Hardly had we arrived when the meeting was canceled.',
      'Scarcely had we arrived when the meeting was cancelled.',
      'Scarcely had we arrived when the meeting was canceled.',
      'No sooner had we arrived than the meeting was cancelled.',
      'No sooner had we arrived than the meeting was canceled.',
      'We had hardly arrived when the meeting was cancelled.',
      'We had hardly arrived when the meeting was canceled.',
    ], '« À peine… que » = Hardly / Scarcely had + sujet + pp … when, ou No sooner … than. Le français inverse aussi (« étions-nous »), profites-en !',
    { kc: 'c1.inversion.time_clauses', d: 2.5 })
    .mcq('What is the writer’s attitude towards the council?', [
      'Sceptical and critical of its lack of commitment',
      'Sympathetic to the practical difficulties it faces',
      'Neutral, simply reporting the facts',
      'Enthusiastic about the pedestrianisation plan',
    ], 0, 'Les inversions (Seldom has…, Only after… did…, Not once has…) servent ici l’ironie : l’auteur souligne le contraste entre les grandes annonces et l’inaction. Le ton est critique, pas neutre.', {
      d: 2.4,
      passage: 'Seldom has a policy been announced with such fanfare and implemented with so little conviction. When the city council unveiled its plan to pedestrianise the old town, residents were promised quieter streets and cleaner air. Eighteen months on, the barriers are still waiting to be installed. Only after a petition gathered twelve thousand signatures did the council agree to publish a timetable, and even that, it transpires, was drafted by an external consultancy. Not once has the deputy mayor responsible agreed to be interviewed.',
    })
    .listen('No sooner had the new software been installed than half the team lost access to their files.', 'Que s’est-il passé ?', [
      'Les problèmes sont apparus dès l’installation du logiciel',
      'Le logiciel a été installé après la perte des fichiers',
      'La moitié de l’équipe a refusé le nouveau logiciel',
      'L’installation a été reportée à cause d’un problème',
    ], 0, 'No sooner … than = à peine… que : la perte d’accès a suivi immédiatement l’installation.', { kc: 'c1.inversion.time_clauses', d: 2.2 })
    .dictation('Not until the final chapter does the author reveal who wrote the letters.',
      'Not until + complément, puis inversion au présent : does the author reveal (base verbale après does).', { kc: 'c1.inversion.time_clauses', d: 2.3 })
    .say('En aucun cas tu ne dois signer ce contrat sans le lire.', [
      'Under no circumstances should you sign this contract without reading it',
      'On no account should you sign this contract without reading it',
      'Under no circumstances should you sign the contract without reading it',
      'On no account should you sign the contract without reading it',
      'Under no circumstances must you sign this contract without reading it',
    ], 'Under no circumstances / On no account + should + sujet + base. Après without, le verbe prend -ing : without reading it.', { d: 2.3 })
    .answer('Describe an experience that really surprised you. Start with “Never had I…” or “Rarely have I…”.',
      'Never had I seen so many people at a conference, and rarely have I felt so nervous before giving a talk.',
      'Commence par Never had I… (récit passé) ou Rarely have I… (expérience jusqu’à aujourd’hui), avec l’inversion.',
      { keywords: [['never had i', 'never have i', 'rarely have i', 'rarely had i', 'seldom have i', 'seldom had i', 'not only did']], minWords: 12, d: 2.6 })
    .build(),
};

export const inversion2: Lesson = {
  id: 'c1-inversion-2',
  cefr: 'C1',
  unitId: 'c1-inversion',
  title: 'Inversion conditionnelle, so et such',
  subtitle: 'Should you…, Had I known…, Were it not for…, So great was…',
  kcIds: ['c1.inversion.conditional', 'c1.inversion.so_such'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Supprimer if : l’inversion conditionnelle',
      body: 'Dans un registre soutenu, on peut supprimer if et inverser l’auxiliaire. Seuls trois auxiliaires le permettent : should, were et had.',
      table: [
        ['If you should need help, …', 'Should you need help, …'],
        ['If I had known, …', 'Had I known, …'],
        ['If it were not for…', 'Were it not for…'],
        ['If it had not been for…', 'Had it not been for…'],
        ['If they were to cancel, …', 'Were they to cancel, …'],
      ],
      examples: [
        { en: 'Should you have any questions, please contact our team.', fr: 'Si vous avez des questions, n’hésitez pas à contacter notre équipe.' },
        { en: 'Had we left earlier, we would have caught the train.', fr: 'Si nous étions partis plus tôt, nous aurions eu le train.' },
      ],
      tip: 'La négation ne se contracte jamais dans cette structure : « Hadn’t I known » ✗ → « Had I not known » ✓. Et on n’inverse ni would ni did : « Would you need help » ✗.',
    },
    {
      title: 'So, such et only by en tête',
      table: [
        ['So + adjectif + be + sujet + that', 'So severe was the storm that schools closed.'],
        ['Such + be + nom + that', 'Such was the demand that the website crashed.'],
        ['Only by / Only in this way', 'Only by cutting costs can we survive.'],
      ],
      examples: [
        { en: 'Such was the noise that nobody heard the alarm.', fr: 'Le bruit était tel que personne n’a entendu l’alarme.' },
        { en: 'So successful was the campaign that it was extended.', fr: 'La campagne a eu tant de succès qu’elle a été prolongée.' },
      ],
      tip: '« Telle était sa colère que… » se calque parfaitement : Such was his anger that… En revanche, « So he was angry that » ✗ : après so en tête, c’est be qui passe avant le sujet → So angry was he that…',
    },
  ],
  exercises: exercises('c1-inversion-2', 'C1', { kc: 'c1.inversion.conditional' })
    .mcq('___ any further information, please do not hesitate to contact us.', ['Should you require', 'Would you require', 'Do you require', 'Had you required'], 0,
      'Formule épistolaire classique : Should you require… = si vous aviez besoin de… Would et do ne s’inversent pas pour exprimer une condition.', { d: 1.9 })
    .mcq('___ the warning signs earlier, the crisis could have been avoided.', ['Had we noticed', 'Did we notice', 'Were we noticed', 'Should we have noticed'], 0,
      'Irréel du passé : If we had noticed → Had we noticed.', { d: 2.1 })
    .cloze('___ for her quick thinking, the situation would have turned into a disaster.', ['Had it not been'],
      'If it hadn’t been for… → Had it not been for… (négation non contractée, placée après le sujet).', { hint: 'if it hadn’t been', d: 2.3 })
    .cloze('___ to resign, the board would need to appoint an interim director.', ['Were the CEO'],
      'If the CEO were to resign → Were the CEO to resign : hypothèse peu probable, très soutenue.', { hint: 'if the CEO were to resign', d: 2.4 })
    .type('Réécris sans if : If you change your mind, let us know by Friday.', [
      'Should you change your mind, let us know by Friday.',
      'Should you change your mind, please let us know by Friday.',
    ], 'Condition réelle mais polie → Should + sujet + base : Should you change your mind…', { loose: true, d: 2.3, instruction: 'Transforme la phrase.' })
    .cloze('So ___ the demand for tickets that the website crashed within minutes.', ['great was', 'high was', 'huge was', 'strong was', 'overwhelming was', 'intense was'],
      'So + adjectif + be + sujet : So great was the demand…', { kc: 'c1.inversion.so_such', hint: 'adjectif + be', d: 2.4 })
    .cloze('___ the impact of the report that the minister was forced to resign.', ['Such was'],
      'Such + be + nom + that : Such was the impact… (= l’impact fut tel que…).', { kc: 'c1.inversion.so_such', d: 2.3 })
    .order('Ce n’est qu’en coopérant que nous pourrons réussir.', 'Only by working together can we succeed.',
      'Only by + -ing en tête → inversion du modal : can we succeed.', { kc: 'c1.inversion.so_such', distractors: ['will', 'do'], d: 2.2 })
    .tr('Si j’avais su, je ne serais pas {venu|venue}.', [
      'Had I known, I would not have come.',
      'Had I known, I wouldn’t have come.',
      'Had I known, I would never have come.',
      'If I had known, I would not have come.',
      'If I had known, I wouldn’t have come.',
      'If I’d known, I wouldn’t have come.',
    ], 'Irréel du passé. La version soutenue Had I known est très idiomatique, même à l’oral, dans cette expression figée.', { d: 2.2 })
    .tr('Telle était sa colère qu’il a quitté la pièce sans un mot.', [
      'Such was his anger that he left the room without a word.',
      'Such was his anger that he left the room without saying a word.',
      'So angry was he that he left the room without a word.',
      'So angry was he that he left the room without saying a word.',
      'He was so angry that he left the room without a word.',
      'He was so angry that he left the room without saying a word.',
    ], '« Telle était… que » = Such was… that. Avec un adjectif : So angry was he that…', { kc: 'c1.inversion.so_such', d: 2.6 })
    .mcq('According to the text, what happens if the company changes its terms?', [
      'Subscribers will be informed a month beforehand',
      'Subscribers will automatically receive a refund',
      'The changes will apply only to new customers',
      'Subscribers must give their consent within fourteen days',
    ], 0, 'Were the company to modify these terms = si l’entreprise modifiait ces conditions → préavis d’au moins trente jours.', {
      d: 2.2,
      passage: 'Should a customer wish to cancel their subscription within the first fourteen days, a full refund will be issued. Were the company to modify these terms, subscribers would be notified at least thirty days in advance. Under no circumstances will personal data be shared with third parties without explicit consent. Customers who subscribed before 1 March will keep their current rate until the end of the year.',
    })
    .listen('Were it not for the volunteers, the festival simply couldn’t take place.', 'Que dit-on des bénévoles ?', [
      'Sans eux, le festival ne pourrait pas avoir lieu',
      'Ils ont empêché le festival d’avoir lieu',
      'Ils ne sont pas venus cette année',
      'Le festival peut se passer d’eux',
    ], 0, 'Were it not for… = sans…, s’il n’y avait pas…', { d: 2.1 })
    .dictation('Should the flight be delayed, passengers will be offered a meal voucher.',
      'Should + sujet + base (be delayed) = si jamais le vol était retardé.', { d: 2.2 })
    .say('Si vous aviez besoin d’aide, n’hésitez pas à m’appeler.', [
      'Should you need any help, do not hesitate to call me',
      'Should you need any help, don’t hesitate to call me',
      'Should you need help, do not hesitate to call me',
      'Should you need help, don’t hesitate to call me',
      'If you need any help, do not hesitate to call me',
      'If you need help, don’t hesitate to call me',
    ], 'Should you need… est la formule soutenue idéale pour un e-mail professionnel.', { d: 2.2 })
    .answer('Imagine your life had taken a different path. What would have happened? Use “Had I…” or “Were it not for…”.',
      'Had I not moved to Lyon after university, I would never have met my business partner, and were it not for her, I would still be working in a bank.',
      'Utilise au moins une inversion conditionnelle : Had I (not)…, Were it not for…, Had it not been for…',
      { keywords: [['had i', 'were it not', 'had it not', 'were i', 'should i']], minWords: 14, d: 2.8 })
    .build(),
};
