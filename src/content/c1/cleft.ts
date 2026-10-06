import type { Lesson } from '../types';
import { exercises } from '../builders';

export const cleft1: Lesson = {
  id: 'c1-cleft-1',
  cefr: 'C1',
  unitId: 'c1-cleft',
  title: 'Phrases clivées : It is… that',
  subtitle: 'It was Sarah who…, It wasn’t until… that…',
  kcIds: ['c1.cleft.it'],
  estMinutes: 12,
  explanation: [
    {
      title: 'It is / was … that / who',
      body: 'Pour mettre en relief un élément (sujet, complément, circonstance), on l’encadre par It is / It was … that (ou who pour une personne). C’est l’équivalent de « C’est… qui / que ».',
      table: [
        ['Phrase neutre', 'Sarah found the error.'],
        ['Focus sur le sujet', 'It was Sarah who found the error.'],
        ['Focus sur l’objet', 'It was the error in the budget that Sarah found.'],
        ['Focus sur le temps', 'It was only last week that we found out.'],
        ['Focus sur la cause', 'It was because of the strike that the launch was delayed.'],
      ],
      examples: [
        { en: 'It was the finance team that spotted the problem.', fr: 'C’est l’équipe financière qui a repéré le problème.' },
        { en: 'It is the managers who are responsible, not the staff.', fr: 'Ce sont les managers qui sont responsables, pas le personnel.' },
      ],
      tip: 'Le verbe de la relative s’accorde avec l’élément mis en relief : It is the managers who ARE responsible. Et « C’est que… » explicatif (« C’est que je suis fatigué ») ne se traduit pas par It’s that : dis The thing is, I’m tired.',
    },
    {
      title: 'Ce n’est que… que : It wasn’t until / It was only',
      table: [
        ['Ce n’est qu’en 2019 que…', 'It wasn’t until 2019 that…'],
        ['Ce n’est qu’après avoir lu le rapport que…', 'It was only after reading the report that…'],
        ['Ce n’est que lorsque… que…', 'It was only when… that…'],
      ],
      examples: [
        { en: 'It wasn’t until midnight that the results came in.', fr: 'Ce n’est qu’à minuit que les résultats sont tombés.' },
      ],
      tip: 'Le temps de be suit le contexte : It is pour le présent, It was pour le passé, It will be pour le futur. « It is in 2010 that he left » ✗ → It was in 2010 that he left ✓.',
    },
  ],
  exercises: exercises('c1-cleft-1', 'C1', { kc: 'c1.cleft.it' })
    .mcq('It was the finance director ___ approved the budget, not the CEO.', ['who', 'which', 'what', 'whom'], 0,
      'Personne en fonction sujet → who (ou that). whom est un complément, which s’emploie pour les choses.', { d: 1.9 })
    .mcq('C’est seulement quand elle est partie que nous avons compris sa valeur.', [
      'It was only when she left that we realised how valuable she was.',
      'It was only when she left what we realised how valuable she was.',
      'It is only when she left that we realised how valuable she was.',
      'Only it was when she left that we realised how valuable she was.',
    ], 0, 'Passé → It was ; la clivée se ferme par that, jamais what.', { d: 2, instruction: 'Choisis la meilleure traduction.' })
    .cloze('It ___ until the third meeting that anyone mentioned the cost.', ['wasn’t', 'was not'],
      'It wasn’t until… that… = ce n’est qu’à… que…', { hint: 'be, négatif', d: 2 })
    .cloze('It is the employees, not the shareholders, who ___ the most from the new policy.', ['benefit', 'will benefit', 'stand to benefit'],
      'Le verbe s’accorde avec « the employees » (pluriel) : who benefit, pas « who benefits ».', { hint: 'benefit', d: 2.2 })
    .cloze('It was in Geneva ___ the agreement was finally signed.', ['that'],
      'Même pour un lieu, la clivée standard utilise that : It was in Geneva that…', { d: 1.9 })
    .type('Mets en relief « the lack of funding » avec It… that : The lack of funding caused the project to fail.', [
      'It was the lack of funding that caused the project to fail.',
      'It was the lack of funding which caused the project to fail.',
    ], 'It was + élément mis en relief + that + reste de la phrase.', { loose: true, d: 2.3, instruction: 'Transforme la phrase.' })
    .type('Réécris avec « It wasn’t until » : We only understood the risks after the accident.', [
      'It wasn’t until after the accident that we understood the risks.',
      'It was not until after the accident that we understood the risks.',
      'It wasn’t until the accident that we understood the risks.',
      'It was not until the accident that we understood the risks.',
    ], 'only… after → It wasn’t until (after)… that… Le verbe de la relative reste à l’affirmatif : that we understood.', { loose: true, d: 2.5, instruction: 'Transforme la phrase.' })
    .order('Mets en relief : C’est toi qui as insisté pour venir.', 'It was you who insisted on coming.',
      'It was + you + who + verbe. insist on + -ing.', { distractors: ['which', 'to'], d: 1.9 })
    .tr('C’est la directrice qui a pris la décision.', [
      'It was the director who made the decision.',
      'It was the director who took the decision.',
      'It was the director that made the decision.',
      'It was the director that took the decision.',
      'It’s the director who made the decision.',
      'It is the director who made the decision.',
      'It was the manager who made the decision.',
      'It was the manager who took the decision.',
      'It was the headteacher who made the decision.',
      'The director was the one who made the decision.',
      'The director is the one who made the decision.',
    ], 'Clivée sur le sujet : It was the director who… « prendre une décision » = make (ou take, britannique) a decision.', { d: 2 })
    .tr('Ce n’est qu’en 2015 que la loi a été modifiée.', [
      'It wasn’t until 2015 that the law was changed.',
      'It wasn’t until 2015 that the law was amended.',
      'It was not until 2015 that the law was changed.',
      'It was not until 2015 that the law was amended.',
      'It was only in 2015 that the law was changed.',
      'It was only in 2015 that the law was amended.',
      'The law was not changed until 2015.',
      'The law wasn’t changed until 2015.',
      'The law was not amended until 2015.',
      'The law wasn’t amended until 2015.',
    ], '« Ce n’est qu’en… que » = It wasn’t until… that… ou It was only in… that… « modifier une loi » = amend / change a law.', { d: 2.3 })
    .mcq('What is the main point of the passage?', [
      'Affordable paper mattered more than is usually acknowledged',
      'The printing press had little effect on literacy',
      'Monasteries opposed the spread of printed books',
      'Gutenberg invented both the press and cheap paper',
    ], 0, 'Les deux clivées (it was not the invention… but the cheap paper ; it was the humble paper mill… that) opposent l’idée reçue à la thèse de l’auteur : le papier bon marché a été décisif.', {
      d: 2.4,
      passage: 'It is often assumed that the printing press alone transformed European literacy. Yet it was not the invention itself that made the decisive difference, but the cheap paper that became available at roughly the same time. Without an affordable surface to print on, the new technology would have remained a luxury for monasteries and wealthy patrons. It was, in other words, the humble paper mill rather than Gutenberg’s workshop that put books into ordinary hands.',
    })
    .listen('It wasn’t the price that put me off, it was the terrible customer service.', 'Pourquoi le locuteur a-t-il renoncé ?', [
      'À cause du service client',
      'À cause du prix',
      'À cause du délai de livraison',
      'À cause de la qualité du produit',
    ], 0, 'Double clivée : It wasn’t X… it was Y. put off = décourager, dissuader.', { d: 2 })
    .dictation('It was only after reading the small print that we noticed the extra fees.',
      'It was only after + -ing… that… the small print = les petites lignes (conditions).', { d: 2.2 })
    .say('C’est le manque de communication qui pose problème.', [
      'It is the lack of communication that is the problem',
      'It’s the lack of communication that’s the problem',
      'It is the lack of communication that causes problems',
      'It’s the lack of communication that causes the problem',
      'It is the lack of communication which is the problem',
      'The lack of communication is what causes problems',
      'What’s causing the problem is the lack of communication',
    ], 'It is + élément mis en relief + that… « poser problème » = be the problem / cause problems.', { d: 2.2 })
    .answer('Who or what has had the biggest influence on your career or studies? Use “It was… that / who…”.',
      'It was my first manager who taught me to plan carefully, and it was only after working abroad that I really became confident.',
      'Fais au moins une phrase clivée : It was… who / that…', { keywords: [['it was', 'it is'], ['who', 'that']], minWords: 12, d: 2.6 })
    .build(),
};

export const cleft2: Lesson = {
  id: 'c1-cleft-2',
  cefr: 'C1',
  unitId: 'c1-cleft',
  title: 'Pseudo-clivées et antéposition',
  subtitle: 'What I need is…, All I did was…, Much as I admire her…',
  kcIds: ['c1.cleft.wh', 'c1.fronting'],
  estMinutes: 12,
  explanation: [
    {
      title: 'What… is / was…',
      body: 'La pseudo-clivée annonce d’abord le thème (What I need…) pour mettre l’information nouvelle en fin de phrase, là où l’accent tombe naturellement.',
      table: [
        ['What + sujet + verbe + is / was', 'What we need is more time.'],
        ['What + sujet + do + is / was + (to) base', 'What she did was (to) call the police.'],
        ['All + sujet + verbe + is / was', 'All I want is a quiet weekend.'],
        ['The thing / reason / place…', 'The reason why I left is that I was bored.'],
        ['Ordre inversé', 'More time is what we need.'],
      ],
      examples: [
        { en: 'What surprised me was how calm she remained.', fr: 'Ce qui m’a surpris, c’est à quel point elle est restée calme.' },
        { en: 'All he did was ask a question.', fr: 'Il n’a fait que poser une question.' },
      ],
      tip: '« Ce dont j’ai besoin » = What I need (pas « That what I need », ni « What I need of »). « Tout ce que » = All (that) : All I did was ask = je n’ai fait que demander. Après All / What + do… was, la base verbale suffit (ask), to est facultatif.',
    },
    {
      title: 'L’antéposition (fronting)',
      body: 'On place en tête un adjectif, un adverbe ou un complément pour créer un effet de contraste ou de concession.',
      table: [
        ['Adjectif + as + sujet + verbe', 'Strange as it may seem, …'],
        ['Much as + sujet + verbe', 'Much as I admire her, I disagree.'],
        ['Try as + sujet + might', 'Try as he might, he couldn’t open it.'],
        ['Complément en tête', 'This point I cannot accept.'],
      ],
      examples: [
        { en: 'Tempting as it is, I won’t accept the offer.', fr: 'Aussi tentant que ce soit, je n’accepterai pas l’offre.' },
        { en: 'Much as I like the idea, we can’t afford it.', fr: 'J’ai beau aimer l’idée, nous n’en avons pas les moyens.' },
      ],
      tip: '« Aussi étrange que cela puisse paraître » = Strange as it may seem : as vient APRÈS l’adjectif. « As strange it may seem » ✗. Et « j’ai beau essayer » = Try as I might.',
    },
  ],
  exercises: exercises('c1-cleft-2', 'C1', { kc: 'c1.cleft.wh' })
    .mcq('___ I find frustrating is the lack of feedback.', ['What', 'That', 'Which', 'It'], 0,
      'Ce que je trouve frustrant → What I find frustrating…', { d: 1.9 })
    .mcq('All she did ___ ask a simple question.', ['was', 'did', 'had', 'were'], 0,
      'All + sujet + did + was + base : All she did was ask… (= elle n’a fait que…).', { d: 2 })
    .cloze('What the report ___ is that the scheme has failed to reach its targets.', ['shows'],
      'What + sujet + verbe conjugué (shows) + is + information nouvelle.', { hint: 'show, présent', d: 1.9 })
    .type('Réécris avec « What… » : The noise bothers me most.', [
      'What bothers me most is the noise.',
      'What bothers me the most is the noise.',
    ], 'What + verbe + is + élément mis en relief.', { loose: true, d: 2.2, instruction: 'Transforme la phrase.' })
    .type('Réécris avec « All… » : I only wanted to help.', [
      'All I wanted was to help.',
      'All I wanted to do was help.',
      'All I wanted to do was to help.',
      'All I wanted was to help out.',
    ], 'only → All… was : All I wanted was to help.', { loose: true, d: 2.4, instruction: 'Transforme la phrase.' })
    .cloze('Much ___ I respect his work, I cannot support this proposal.', ['as'],
      'Much as + sujet + verbe = bien que, j’ai beau… (concession soutenue).', { kc: 'c1.fronting', d: 2.2 })
    .cloze('Try as she ___, she could not convince the committee.', ['might'],
      'Try as + sujet + might = elle a eu beau essayer.', { kc: 'c1.fronting', d: 2.4 })
    .order('Aussi surprenant que cela puisse paraître, le projet est rentable.', 'Surprising as it may seem, the project is profitable.',
      'Adjectif + as + it may seem : la concession se place en tête.', { kc: 'c1.fronting', distractors: ['so', 'that'], d: 2.3 })
    .tr('Ce dont nous avons besoin, c’est d’un plan réaliste.', [
      'What we need is a realistic plan.',
      'A realistic plan is what we need.',
      'What we need is a plan that is realistic.',
    ], '« Ce dont… c’est » = What… is. Pas de « of » : What we need, pas « What we need of ».', { d: 2.1 })
    .tr('J’ai beau l’admirer, je ne suis pas d’accord avec elle.', [
      'Much as I admire her, I do not agree with her.',
      'Much as I admire her, I don’t agree with her.',
      'Much as I admire her, I disagree with her.',
      'Although I admire her, I disagree with her.',
      'Although I admire her, I don’t agree with her.',
      'Although I admire her, I do not agree with her.',
      'Though I admire her, I don’t agree with her.',
      'Though I admire her, I disagree with her.',
    ], 'Much as I admire her est l’équivalent soutenu de « j’ai beau l’admirer ». Although reste correct mais moins expressif.', { kc: 'c1.fronting', d: 2.3 })
    .mcq('What does the writer imply about the debate on remote work?', [
      'It is driven more by conviction than by data',
      'It has finally been settled by research',
      'Most people prefer working from home',
      'Managers should ban remote work',
    ], 0, '« not how passionate it has become, but how little evidence either side brings » : l’auteur regrette un débat passionné mais pauvre en preuves.', {
      d: 2.4,
      passage: 'What strikes me about the debate on remote work is not how passionate it has become, but how little evidence either side brings to it. All we really know is that some people thrive at home while others feel isolated. Convenient as it may be to declare a winner, the honest answer is that it depends on the job, the team and the person. What managers need is not a new rule, but the judgement to apply the old ones flexibly.',
    })
    .listen('What surprised me wasn’t the result itself, but how quickly everyone accepted it.', 'Qu’est-ce qui a surpris la personne ?', [
      'La rapidité avec laquelle tout le monde a accepté le résultat',
      'Le résultat lui-même',
      'Le fait que personne n’ait accepté le résultat',
      'La lenteur du vote',
    ], 0, 'What surprised me wasn’t X, but Y : l’information importante arrive en fin de phrase.', { d: 2.1 })
    .dictation('All we can do at this stage is wait for the official figures.',
      'All we can do is + base verbale (wait).', { d: 2.1 })
    .say('Ce qui m’inquiète, c’est le calendrier.', [
      'What worries me is the schedule',
      'What worries me is the timetable',
      'What worries me is the timeline',
      'What concerns me is the schedule',
      'What concerns me is the timeline',
      'What concerns me is the timetable',
    ], '« Ce qui m’inquiète, c’est… » = What worries / concerns me is…', { d: 2 })
    .answer('What do you find most rewarding about your work or studies? Begin with “What I…”.',
      'What I find most rewarding is solving problems with my team, and what I enjoy least is the paperwork.',
      'Commence par What I find / enjoy / like… is…', { keywords: [['what i'], ['is', 'was']], minWords: 12, d: 2.5 })
    .build(),
};
