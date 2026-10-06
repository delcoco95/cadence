import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const DIST = 'c2.aspect.distancing';
const HIST = 'c2.aspect.historic_present';
const FUT = 'c2.aspect.future_in_past';
const STAT = 'c2.aspect.stative_dynamic';

export const aspectUnit: Unit = {
  id: 'c2-aspect',
  cefr: 'C2',
  title: 'Nuances de temps et d’aspect',
  description: 'Le passé de politesse, le présent de narration, le futur vu du passé et les verbes d’état employés dynamiquement.',
  lessonIds: ['c2-aspect-1', 'c2-aspect-2'],
  canDo: [
    'Je peux adoucir une demande ou une question en jouant sur le temps (I was wondering…, Did you want…).',
    'Je peux raconter une anecdote de façon vivante et situer un projet ou un destin vu depuis le passé.',
  ],
};

export const aspect1: Lesson = {
  id: 'c2-aspect-1',
  cefr: 'C2',
  unitId: 'c2-aspect',
  title: 'Le passé de distance et le présent de narration',
  subtitle: 'Quand le temps grammatical ne dit plus l’heure',
  kcIds: [DIST, HIST],
  estMinutes: 10,
  explanation: [
    {
      title: 'Le passé de distance (politesse)',
      body: 'Au niveau C2, le temps grammatical sert aussi à créer de la distance sociale. Le past simple ou le past continuous rendent une demande moins directe, donc plus courtoise, alors que la situation est bien présente. Le past continuous est le plus tentatif : il présente la demande comme une pensée en cours, facile à refuser.',
      table: [
        ['direct', 'adouci', 'très adouci'],
        ['I wonder if you could…', 'I wondered if you could…', 'I was wondering if you could…'],
        ['I hope you can come.', 'I hoped you could come.', 'We were hoping you might come.'],
        ['Do you want a receipt?', 'Did you want a receipt?', 'Were you wanting a receipt? (oral, UK)'],
      ],
      examples: [
        { en: 'I was wondering whether you might have time to look at my draft.', fr: 'Je me demandais si vous auriez le temps de jeter un œil à mon brouillon.' },
        { en: 'Did you want to see the menu again?', fr: 'Vous vouliez revoir la carte ?' },
        { en: 'We were hoping you could join us for dinner.', fr: 'Nous espérions que vous pourriez vous joindre à nous pour le dîner.' },
      ],
      tip: 'Le français adoucit avec l’imparfait (« je voulais vous demander ») ou le conditionnel (« je voudrais »). L’anglais préfère le past continuous : « I am wondering if you could… » sonne étrange, « I was wondering if you could… » est l’usage naturel. Garde aussi la concordance : was wondering if you COULD, pas « can ».',
    },
    {
      title: 'Le présent de narration (historic present)',
      body: 'Pour raconter une anecdote à l’oral, résumer l’intrigue d’un livre ou d’un film, écrire un titre de presse ou commenter un match, l’anglais emploie le présent pour des faits passés. L’effet est d’immédiateté : l’auditeur est placé au cœur de la scène.',
      table: [
        ['anecdote orale', 'So I’m waiting for the bus, and this woman walks up and asks me…'],
        ['résumé d’intrigue', 'In the novel, Elena returns to her village and discovers a secret.'],
        ['titre de presse', 'Local Bakery Wins National Award'],
        ['commentaire sportif', 'She takes the ball, beats two defenders and shoots!'],
      ],
      examples: [
        { en: 'So I get to the office, and the whole team is wearing party hats.', fr: 'Bref, j’arrive au bureau, et toute l’équipe porte des chapeaux de fête.' },
        { en: 'In the final chapter, the detective finally reveals the truth.', fr: 'Dans le dernier chapitre, le détective révèle enfin la vérité.' },
      ],
      tip: 'Le passage au présent marque souvent le moment fort du récit, après un décor posé au passé. Une fois le basculement fait, reste au présent jusqu’à la fin de la scène : alterner au hasard brouille la chronologie. Dans un titre, « Wins » vaut « a remporté ».',
    },
  ],
  exercises: exercises('c2-aspect-1', 'C2', { kc: DIST })
    .mcq('Which request is the most tentative, and the easiest to decline politely?',
      ['I want to ask if you could review my draft.', 'I was wondering whether you might review my draft.', 'I am wondering if you review my draft.', 'I wonder you could review my draft.'], 1,
      'Le past continuous + might crée le maximum de distance : la demande est présentée comme une simple pensée. Les options 3 et 4 sont fautives (temps et construction).', { d: 3.0 })
    .cloze('We ___ you might be free to join us for lunch on Friday.', ['were hoping'],
      'Past continuous de politesse : « we were hoping » = nous espérions (et espérons toujours). La situation est présente, le temps est passé pour adoucir.', { hint: 'hope, au past continuous de politesse', d: 3.0 })
    .cloze('___ you want to sit by the window or near the door?', ['Did'],
      'Le serveur dit « Did you want…? » : le prétérit ne renvoie pas au passé, il rend l’offre moins insistante.', { hint: 'do, au passé de politesse', d: 3.0 })
    .type('Rends la demande plus diplomatique en commençant par « I was wondering » : « Can you send me the figures by Monday? »',
      ['I was wondering if you could send me the figures by Monday.', 'I was wondering whether you could send me the figures by Monday.', 'I was wondering if you would be able to send me the figures by Monday.', 'I was wondering whether you would be able to send me the figures by Monday.'],
      'I was wondering + if / whether + could (concordance) : on ne garde pas « can ». Ce n’est plus une question directe, donc pas d’inversion.', { d: 3.2 })
    .mcq('Which sentence uses a past tense to soften the tone rather than to refer to past time?',
      ['How much did you want to spend, roughly?', 'How much did you spend on the trip last summer?', 'How much had you spent before the sale started?', 'How much were you spending each month in 2019?'], 0,
      'Dans la bouche d’un vendeur, « How much did you want to spend? » concerne le présent : le prétérit sert de précaution oratoire. Les autres phrases parlent réellement du passé.', { d: 3.2 })
    .order('Je me demandais si vous pourriez m’accorder quelques minutes.', 'I was wondering if you could spare me a few minutes.',
      'was wondering + if + could : la demande indirecte garde l’ordre affirmatif sujet-verbe.', { distractors: ['am', 'can'], d: 3.0 })
    .tr('Vous vouliez régler par carte ?', ['Did you want to pay by card?', 'Were you wanting to pay by card?', 'Did you want to pay by credit card?', 'Did you wish to pay by card?'],
      'L’imparfait de politesse du français se rend par le prétérit : Did you want…? (ou, plus britannique et encore plus doux, Were you wanting…?).', { d: 3.0 })
    .cloze('So yesterday I’m queuing at the bakery, and this man ___ round and asks me the way to the museum.', ['turns'],
      'Le récit est au présent de narration (I’m queuing… asks) : on garde le présent simple pour l’action ponctuelle, turns.', { kc: HIST, hint: 'turn', d: 3.1 })
    .mcq('Which headline follows standard English convention for an event that happened yesterday?',
      ['Local Teenager Has Won National Chess Title', 'Local Teenager Wins National Chess Title', 'Local Teenager Won National Chess Title', 'Local Teenager Is Winning National Chess Title'], 1,
      'Les titres de presse emploient le présent simple pour un fait passé récent : « Wins ». C’est le présent de narration à l’écrit.', { kc: HIST, d: 3.0 })
    .mcq('Why does the narrator switch from the past to the present tense?',
      ['To signal that the events are still happening now', 'To make the key moment feel vivid and immediate', 'To show that this happens every Tuesday', 'Because the past simple cannot introduce direct speech'], 1,
      'Le décor est posé au passé (was supposed to, had planned), puis le moment fort bascule au présent (walks in, says, I look) : c’est le présent de narration, qui rend la scène vivante.',
      {
        kc: HIST, d: 3.3,
        passage: 'Last Tuesday was supposed to be a quiet day. I had planned to finish the quarterly report and leave early. Then, at ten past four, my manager walks in, puts a stack of folders on my desk and says, with a perfectly straight face, “Just a few small things before the weekend.” I look at the folders, I look at the clock, and I quietly cancel my plans for the evening.',
      })
    .listen('I was wondering whether you’d had a chance to look at my proposal.', 'Que fait la personne ?',
      ['Elle relance poliment au sujet d’une proposition', 'Elle raconte ce qu’elle a fait la semaine dernière', 'Elle refuse une proposition', 'Elle annonce qu’elle a oublié sa proposition'], 0,
      '« I was wondering whether you’d had a chance to… » est une relance très courtoise : elle demande, sans insister, si l’autre a eu le temps de regarder.', { d: 3.0 })
    .listen('So I get to the station, the train’s just pulling out, and guess who’s waving at me from the window? My brother.', 'Quand ces événements ont-ils eu lieu ?',
      ['En ce moment même', 'Dans le passé, mais racontés au présent pour l’effet', 'Demain, comme prévu', 'Chaque jour, par habitude'], 1,
      'Anecdote au présent de narration : « I get to the station » raconte un fait passé de manière vivante, comme si on y était.', { kc: HIST, d: 3.2 })
    .dictation('We were hoping you might be able to join us on Friday.',
      'were hoping : past continuous de politesse ; might be able to : possibilité prudente.', { d: 3.0 })
    .say('Je voulais vous demander si vous pourriez relire mon rapport.',
      ['I was wondering if you could read over my report', 'I was wondering if you could proofread my report', 'I was wondering whether you could look over my report', 'I wanted to ask if you could read my report', 'I was going to ask if you could read over my report'],
      'L’imparfait de politesse devient « I was wondering if you could… » ou « I wanted to ask if you could… ».', { d: 3.1 })
    .answer('You need a colleague to cover your shift next Saturday. Ask politely and give a reason.',
      'I was wondering if you could possibly cover my shift next Saturday, because my cousin is getting married and I really can’t miss it.',
      'Utilise le past continuous de politesse (I was wondering / I was hoping) et justifie ta demande (because, since, as).',
      { d: 3.2, minWords: 15, keywords: [['was wondering', 'were wondering', 'was hoping', 'were hoping', 'wondered', 'hoped'], ['because', 'since', 'as']] })
    .build(),
};

export const aspect2: Lesson = {
  id: 'c2-aspect-2',
  cefr: 'C2',
  unitId: 'c2-aspect',
  title: 'Le futur dans le passé et les verbes d’état',
  subtitle: 'Projets, destins et sens dynamiques',
  kcIds: [FUT, STAT],
  estMinutes: 10,
  explanation: [
    {
      title: 'Le futur vu depuis le passé',
      body: 'Pour parler de ce qui était encore à venir à un moment du passé, l’anglais dispose de plusieurs formes, chacune avec sa nuance.',
      table: [
        ['was / were going to', 'intention ou prévision, souvent non réalisée', 'I was going to call you, but I got held up.'],
        ['would', 'destin connu du narrateur', 'She left Lyon in 1998; she would never live there again.'],
        ['was / were to + base', 'programme officiel ou destin', 'The talks were to begin at nine.'],
        ['was / were to have + p.p.', 'programme qui ne s’est pas réalisé', 'The bridge was to have opened in May.'],
        ['was about to / was on the point of', 'imminence', 'I was about to leave when you rang.'],
      ],
      examples: [
        { en: 'That day he wrote the first page of a novel that would make him famous.', fr: 'Ce jour-là, il écrivit la première page d’un roman qui le rendrait célèbre.' },
        { en: 'The festival was to have opened on Friday, but heavy rain delayed it.', fr: 'Le festival devait ouvrir vendredi, mais de fortes pluies l’ont retardé.' },
      ],
      tip: 'Le conditionnel français de récit (« elle ne reviendrait jamais ») se traduit par would : ce n’est pas une hypothèse. Et « devait ouvrir » est ambigu en français : was to open (c’était prévu) ou was to have opened (c’était prévu, mais cela n’a pas eu lieu).',
    },
    {
      title: 'Verbes d’état employés dynamiquement',
      body: 'Certains verbes d’état changent de sens quand on les met à la forme en -ing : ils décrivent alors une action ou un comportement temporaire.',
      table: [
        ['état', 'sens dynamique'],
        ['I think it’s a good idea. (opinion)', 'I’m thinking of moving. (réfléchir, envisager)'],
        ['We have a cottage. (posséder)', 'We’re having lunch. (vivre, prendre)'],
        ['I see your point. (comprendre)', 'I’m seeing the dentist at three. (rendez-vous)'],
        ['He is patient. (trait de caractère)', 'He’s being patient. (comportement du moment)'],
        ['The soup tastes salty. (avoir un goût)', 'I’m tasting the soup. (goûter)'],
      ],
      examples: [
        { en: 'You’re being unusually quiet today.', fr: 'Tu es inhabituellement silencieux aujourd’hui.' },
        { en: 'We’re seeing the architect on Thursday.', fr: 'Nous voyons l’architecte jeudi.' },
      ],
      tip: '« You are silly » juge la personne ; « You are being silly » juge un comportement passager, ce qui est bien moins blessant. Le français ne marque pas cette différence : c’est à toi de choisir la forme selon l’intention.',
    },
  ],
  exercises: exercises('c2-aspect-2', 'C2', { kc: FUT })
    .mcq('When we met in 2010, neither of us knew that we ___ business partners ten years later.',
      ['will become', 'would become', 'had become', 'are becoming'], 1,
      'Futur vu du passé : would become. « will » serait un futur vu du présent, « had become » une antériorité.', { d: 3.0 })
    .cloze('The new library ___ in May, but the opening was postponed until the autumn.', ['was to have opened'],
      'Programme officiel non réalisé : was to have + participe passé.', { hint: 'open : programme non réalisé, avec be to', d: 3.6 })
    .cloze('I ___ call you last night, but the meeting ran until ten.', ['was going to'],
      'Intention passée non réalisée : was going to + base.', { hint: 'be going to', d: 3.0 })
    .type('Réécris avec « was about to » : « She was on the point of leaving when the phone rang. »',
      ['She was about to leave when the phone rang.'],
      'was on the point of + -ing = was about to + base : action imminente, interrompue.', { d: 3.0 })
    .mcq('Which sentence makes it clear that the plan was NOT carried out?',
      ['The ceremony was to take place at noon.', 'The ceremony was to have taken place at noon.', 'The ceremony took place at noon.', 'The ceremony would take place at noon, as it did every year.'], 1,
      'Seul « was to have taken place » signale un programme abandonné. « was to take place » indique seulement ce qui était prévu, sans dire si cela a eu lieu.', { d: 3.4 })
    .order('Ce jour-là, il écrivit la première page d’un roman qui le rendrait célèbre.', 'That day he wrote the first page of a novel that would make him famous.',
      'Destin vu du passé : would + base (would make).', { distractors: ['will', 'made'], d: 3.0 })
    .tr('J’allais t’envoyer un message, mais j’ai oublié.',
      ['I was going to send you a message, but I forgot.', 'I was going to text you, but I forgot.', 'I was going to message you, but I forgot.', 'I was going to send you a text, but I forgot.'],
      '« J’allais » (intention non réalisée) = I was going to.', { d: 3.0 })
    .mcq('Which sentence describes temporary behaviour rather than a permanent trait?',
      ['He is stubborn.', 'He is being stubborn.', 'He is a stubborn person.', 'He has always been stubborn.'], 1,
      'be + being + adjectif = comportement du moment. Les autres phrases décrivent un trait de caractère.', { kc: STAT, d: 3.0 })
    .cloze('We ___ the architect on Thursday to discuss the plans.', ['are seeing'],
      'see au sens de « rencontrer, avoir rendez-vous » devient dynamique : are seeing (futur programmé).', { kc: STAT, hint: 'see, au sens de rendez-vous', d: 3.0 })
    .cloze('Hang on, I ___ the sauce to check whether it needs more salt.', ['am tasting', '’m tasting'],
      'taste au sens d’« goûter » (action volontaire) accepte la forme en -ing ; au sens d’« avoir un goût », non (It tastes salty).', { kc: STAT, hint: 'taste', d: 3.0 })
    .listen('Sorry, but you’re being very quiet today. Is everything all right?', 'Que remarque la personne ?',
      ['Que son interlocuteur est d’un naturel discret', 'Que son interlocuteur est inhabituellement silencieux aujourd’hui', 'Que la pièce est trop calme', 'Que son interlocuteur parle trop fort'], 1,
      '« You’re being very quiet » = comportement passager, inhabituel. « You’re very quiet » décrirait plutôt un tempérament.', { kc: STAT, d: 3.0 })
    .listen('We were to have flown to Lisbon on Monday, but the airline cancelled every flight that week.', 'Sont-ils partis lundi ?',
      ['Oui, comme prévu', 'Non, leur vol a été annulé', 'Oui, avec un jour de retard', 'On ne le sait pas'], 1,
      '« were to have flown » = c’était prévu, mais cela ne s’est pas fait.', { d: 3.3 })
    .dictation('I’m thinking of applying for a job abroad next year.',
      'think + -ing = réfléchir, envisager : sens dynamique, donc forme continue possible.', { kc: STAT, d: 3.0 })
    .say('Nous réfléchissons à déménager à la campagne.',
      ['We are thinking of moving to the countryside', 'We are thinking about moving to the countryside', 'We are thinking of moving to the country', 'We are considering moving to the countryside'],
      'think of / about + -ing au sens d’« envisager » : forme continue.', { kc: STAT, d: 3.0 })
    .answer('Think of a plan you once had that did not work out. What were you going to do, and what happened instead?',
      'Last summer I was going to cycle across Scotland, but my bike broke down on the first day, so I ended up exploring Edinburgh on foot instead.',
      'Emploie was going to (ou was to have) pour le projet, puis le past simple pour ce qui s’est réellement passé.',
      { d: 3.2, minWords: 15, keywords: [['was going to', 'were going to', 'was to', 'was about to', 'would'], ['but', 'however', 'instead']] })
    .build(),
};
