import type { Lesson } from '../types';
import { exercises } from '../builders';

export const register1: Lesson = {
  id: 'c1-register-1',
  cefr: 'C1',
  unitId: 'c1-register',
  title: 'Registre et collocations',
  subtitle: 'request vs ask for, heavy rain, deeply concerned, meet a deadline',
  kcIds: ['c1.register.formality', 'c1.collocations'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Formel ou informel ?',
      body: 'Le même message change de vocabulaire selon le destinataire. Le registre formel préfère souvent un verbe simple d’origine latine à un verbe à particule.',
      table: [
        ['get → receive', 'We received your application.'],
        ['ask for → request', 'Further details may be requested.'],
        ['find out → ascertain', 'We need to ascertain the cause.'],
        ['help → assist', 'Our staff will assist you.'],
        ['need → require', 'Applicants are required to provide two references.'],
        ['about → regarding, concerning', 'Regarding your enquiry, …'],
        ['but → however', 'However, the results differ.'],
      ],
      examples: [
        { en: 'We would be grateful if you could provide further details.', fr: 'Nous vous serions reconnaissants de bien vouloir nous fournir des précisions.' },
      ],
      tip: 'Bonne nouvelle : les mots formels anglais ressemblent souvent au français (request, require, assist, purchase). Mais à l’oral entre collègues, trop de formalisme sonne raide : « Can you help me? » plutôt que « Could you assist me? ».',
    },
    {
      title: 'Les collocations',
      body: 'Une collocation est une association naturelle de mots. Traduite mot à mot, elle reste compréhensible mais sonne étrangère.',
      table: [
        ['heavy rain / heavy traffic', 'forte pluie / circulation dense (pas « strong rain »)'],
        ['deeply concerned / bitterly disappointed', 'profondément inquiet / amèrement déçu'],
        ['highly unlikely / fully aware', 'très peu probable / pleinement conscient'],
        ['make a decision / take a risk', 'prendre une décision / prendre un risque'],
        ['pose a threat / raise awareness', 'représenter une menace / sensibiliser'],
        ['meet a deadline / reach an agreement', 'respecter un délai / parvenir à un accord'],
      ],
      tip: '« respecter un délai » = meet a deadline, pas « respect a deadline ». « prendre une décision » = make a decision (take est possible en anglais britannique). « faire attention » = pay attention.',
    },
  ],
  exercises: exercises('c1-register-1', 'C1', { kc: 'c1.collocations' })
    .mcq('Flights were cancelled because of ___ snow.', ['heavy', 'strong', 'big', 'hard'], 0,
      'Collocation : heavy snow / heavy rain (pas strong).', { d: 1.9 })
    .mcq('We are ___ aware of the risks involved.', ['fully', 'highly', 'strongly', 'heavily'], 0,
      'Collocation : fully aware (pleinement conscient).', { d: 2 })
    .cloze('Residents are ___ concerned about the plans to build a motorway nearby.', ['deeply', 'gravely'],
      'Collocations : deeply / gravely concerned.', { hint: 'profondément', d: 2 })
    .cloze('Climate change ___ a serious threat to coastal communities.', ['poses', 'represents', 'presents'],
      'Collocation : pose a threat (représenter une menace).', { hint: 'représente', d: 2.1 })
    .mcq('Which is the most appropriate opening for a formal letter of complaint?', [
      'I am writing to express my dissatisfaction with the service I received.',
      'Just wanted to say I’m pretty unhappy with your service.',
      'Hey, your service was really bad, you know.',
      'So, about the service: not great, to be honest.',
    ], 0, 'Registre formel : I am writing to…, pas de contractions ni de tournures orales (just wanted, pretty, you know).',
    { kc: 'c1.register.formality', d: 1.9, instruction: 'Choisis la réponse la plus adaptée.' })
    .cloze('We would be grateful if you could ___ us with further details.', ['provide', 'supply'],
      'Formel : provide / supply somebody with something.', { kc: 'c1.register.formality', hint: 'fournir (formel)', d: 2 })
    .type('Réécris en registre formel avec « require » : You need to show your passport at the desk.', [
      'You are required to show your passport at the desk.',
      'You are required to present your passport at the desk.',
      'You will be required to show your passport at the desk.',
      'Passengers are required to show their passport at the desk.',
      'Visitors are required to show their passport at the desk.',
    ], 'need to → be required to (formel, souvent au passif).', { kc: 'c1.register.formality', loose: true, d: 2.2, instruction: 'Transforme la phrase.' })
    .order('Nous vous prions de nous excuser pour la gêne occasionnée.', 'We apologise for any inconvenience caused.',
      'Formule figée : We apologise for any inconvenience (caused).', { kc: 'c1.register.formality', distractors: ['excuse', 'the'], d: 2 })
    .tr('Il a pris une décision difficile.', [
      'He made a difficult decision.',
      'He made a tough decision.',
      'He made a hard decision.',
      'He has made a difficult decision.',
      'He took a difficult decision.',
      'He took a tough decision.',
      'He took a hard decision.',
    ], 'make a decision (take a decision en anglais britannique).', { d: 1.9 })
    .tr('Pour toute question, n’hésitez pas à nous contacter.', [
      'Should you have any questions, please do not hesitate to contact us.',
      'Should you have any questions, please don’t hesitate to contact us.',
      'Should you have any questions, do not hesitate to contact us.',
      'Should you have any queries, please do not hesitate to contact us.',
      'If you have any questions, please do not hesitate to contact us.',
      'If you have any questions, please don’t hesitate to contact us.',
      'If you have any questions, do not hesitate to contact us.',
      'If you have any questions, don’t hesitate to contact us.',
      'If you have any queries, please do not hesitate to contact us.',
      'If you have any questions, please feel free to contact us.',
      'Please do not hesitate to contact us if you have any questions.',
      'Please don’t hesitate to contact us if you have any questions.',
      'Please feel free to contact us if you have any questions.',
      'For any questions, please do not hesitate to contact us.',
    ], 'Formule de clôture : Should you have any questions, please do not hesitate to contact us.', { kc: 'c1.register.formality', d: 2 })
    .mcq('Which phrase in the letter shows that it follows up on an earlier exchange?', [
      'Further to our telephone conversation',
      'I am writing to confirm',
      'Please accept our sincere apologies',
      'Should you require any further assistance',
    ], 0, 'Further to… = suite à… (formule qui renvoie à un échange précédent).', {
      kc: 'c1.register.formality',
      d: 2,
      passage: 'Dear Mr Hall, Further to our telephone conversation of 3 May, I am writing to confirm that your request for a refund has been approved. The sum in question will be credited to your account within five working days. Please accept our sincere apologies for the inconvenience caused. Should you require any further assistance, our customer relations team will be happy to help.',
    })
    .listen('I’m bitterly disappointed with the outcome, but I fully respect the committee’s decision.', 'Quelle est l’attitude du locuteur ?', [
      'Très déçu, mais respectueux de la décision',
      'Satisfait du résultat',
      'En colère et décidé à faire appel',
      'Indifférent au résultat',
    ], 0, 'bitterly disappointed = amèrement déçu ; fully respect = respecte pleinement.', { d: 2 })
    .dictation('Heavy traffic is expected on all major roads this weekend.',
      'Collocation : heavy traffic (circulation dense).', { d: 1.9 })
    .say('Nous devons respecter le délai à tout prix.', [
      'We have to meet the deadline at all costs',
      'We must meet the deadline at all costs',
      'We need to meet the deadline at all costs',
      'We have got to meet the deadline at all costs',
      'We’ve got to meet the deadline at all costs',
      'We have to meet the deadline no matter what',
      'We must meet the deadline whatever it takes',
      'We need to meet the deadline whatever happens',
    ], 'meet a deadline (pas « respect »). « à tout prix » = at all costs.', { d: 2.1 })
    .answer('Write the opening of a formal email to a company to request information about a training course.',
      'Dear Sir or Madam, I am writing to enquire about your advanced project management course and would be grateful if you could send me further details.',
      'Utilise des formules formelles : I am writing to enquire…, I would be grateful if…',
      { kc: 'c1.register.formality', keywords: [['dear'], ['writing', 'enquire', 'inquire', 'grateful', 'would like', 'request']], minWords: 15, d: 2.5 })
    .build(),
};

export const register2: Lesson = {
  id: 'c1-register-2',
  cefr: 'C1',
  unitId: 'c1-register',
  title: 'Idiomes et verbes à particule',
  subtitle: 'play down, rule out, bring about, cut corners, a blessing in disguise',
  kcIds: ['c1.phrasal_verbs', 'c1.idioms'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Verbes à particule aux sens nuancés',
      table: [
        ['bring about', 'provoquer, entraîner (un changement)'],
        ['play down', 'minimiser'],
        ['rule out', 'exclure (une possibilité)'],
        ['phase out', 'supprimer progressivement'],
        ['come across as', 'donner l’impression d’être'],
        ['get across', 'faire passer (un message)'],
        ['back down', 'céder, faire marche arrière'],
        ['come up with', 'trouver, proposer (une idée)'],
      ],
      examples: [
        { en: 'The minister played down the risks.', fr: 'Le ministre a minimisé les risques.' },
        { en: 'We can’t rule out a second round of cuts.', fr: 'On ne peut pas exclure une deuxième vague de coupes.' },
      ],
      tip: 'Un même verbe change de sens selon le contexte : put off = repousser (put off a meeting) OU dégoûter, décourager (the smell put me off). Apprends-les toujours dans une phrase.',
    },
    {
      title: 'Idiomes courants',
      table: [
        ['the tip of the iceberg', 'la partie émergée de l’iceberg'],
        ['a blessing in disguise', 'un mal pour un bien'],
        ['to cut corners', 'bâcler, rogner sur la qualité'],
        ['to sit on the fence', 'ne pas prendre position'],
        ['back to the drawing board', 'retour à la case départ'],
        ['to be in the same boat', 'être dans la même galère'],
        ['to call it a day', 's’arrêter là (pour aujourd’hui)'],
        ['to bite the bullet', 'se résoudre à faire quelque chose de pénible'],
      ],
      tip: 'Ne traduis pas les idiomes mot à mot : « coûter les yeux de la tête » = to cost an arm and a leg ; « poser un lapin » = to stand someone up ; « ce n’est pas ma tasse de thé » = it’s not my cup of tea (rare coïncidence !).',
    },
  ],
  exercises: exercises('c1-register-2', 'C1', { kc: 'c1.phrasal_verbs' })
    .mcq('The spokesperson tried to ___ the seriousness of the data breach.', ['play down', 'come up with', 'rule out', 'bring about'], 0,
      'play down = minimiser.', { d: 2 })
    .mcq('Losing that contract turned out to be ___: it forced us to diversify.', ['a blessing in disguise', 'the tip of the iceberg', 'a piece of cake', 'the last straw'], 0,
      'a blessing in disguise = un mal pour un bien.', { kc: 'c1.idioms', d: 2 })
    .cloze('Police have not ___ out the possibility of foul play.', ['ruled'],
      'rule out = exclure (une hypothèse).', { d: 2 })
    .cloze('The government plans to ___ out petrol cars by 2035.', ['phase'],
      'phase out = supprimer progressivement.', { hint: 'progressivement', d: 2.1 })
    .cloze('The new CEO hopes to ___ about a change in company culture.', ['bring'],
      'bring about = provoquer, entraîner (un changement).', { d: 2 })
    .cloze('The complaints we’ve received are just the tip of the ___.', ['iceberg'],
      'the tip of the iceberg = la partie émergée de l’iceberg.', { kc: 'c1.idioms', d: 1.9 })
    .cloze('The builders clearly cut ___, and now the roof is leaking.', ['corners'],
      'cut corners = bâcler le travail pour gagner du temps ou de l’argent.', { kc: 'c1.idioms', d: 2 })
    .order('Le projet a échoué, donc retour à la case départ.', 'The project failed, so it’s back to the drawing board.',
      'back to the drawing board = repartir de zéro.', { kc: 'c1.idioms', distractors: ['table', 'return'], d: 2.2 })
    .tr('Ce voyage nous a coûté les yeux de la tête.', [
      'This trip cost us an arm and a leg.',
      'That trip cost us an arm and a leg.',
      'The trip cost us an arm and a leg.',
      'This journey cost us an arm and a leg.',
      'This trip cost us a fortune.',
      'That trip cost us a fortune.',
      'The trip cost us a fortune.',
      'This trip cost us a small fortune.',
      'The trip cost us a small fortune.',
    ], '« coûter les yeux de la tête » = cost an arm and a leg (ou cost a fortune).', { kc: 'c1.idioms', d: 2.1 })
    .tr('La réunion a été reportée à jeudi.', [
      'The meeting has been put off until Thursday.',
      'The meeting was put off until Thursday.',
      'The meeting was put off till Thursday.',
      'The meeting has been put back to Thursday.',
      'The meeting was put back to Thursday.',
      'The meeting has been pushed back to Thursday.',
      'The meeting was pushed back to Thursday.',
      'The meeting has been postponed until Thursday.',
      'The meeting was postponed until Thursday.',
      'The meeting has been postponed to Thursday.',
      'The meeting was postponed to Thursday.',
      'The meeting has been moved to Thursday.',
      'The meeting was moved to Thursday.',
      'The meeting has been rescheduled for Thursday.',
      'The meeting was rescheduled for Thursday.',
    ], '« reporter » = put off / put back / postpone. Attention : « report » signifie faire un compte rendu !', { d: 2 })
    .mcq('What is implied about the government’s position?', [
      'It has avoided taking a clear stance for a long time',
      'It has strongly defended regional airports',
      'It has promised generous new funding',
      'It has won the support of local businesses',
    ], 0, '« ministers have sat on the fence » : ils n’ont pas pris position pendant des années.', {
      kc: 'c1.idioms',
      d: 2.4,
      passage: 'For years, ministers have sat on the fence over the future of regional airports, praising their economic value while quietly cutting their subsidies. Last week’s announcement that two of them will close is, critics say, only the tip of the iceberg. The government insists it has not ruled out further support, but its refusal to commit to any figures has done little to win over local businesses, many of which feel they are being left to fend for themselves.',
    })
    .listen('We’ve been going round in circles for three hours. Let’s call it a day and pick this up tomorrow.', 'Que propose la personne ?', [
      'Arrêter pour aujourd’hui et reprendre demain',
      'Travailler toute la nuit',
      'Abandonner définitivement le projet',
      'Faire une courte pause puis continuer',
    ], 0, 'call it a day = s’arrêter là pour aujourd’hui ; pick this up = reprendre.', { kc: 'c1.idioms', d: 2.1 })
    .dictation('The union refused to back down, despite pressure from the management.',
      'back down = céder, faire marche arrière.', { d: 2 })
    .say('Elle m’a posé un lapin hier soir.', [
      'She stood me up last night',
      'She stood me up yesterday evening',
    ], '« poser un lapin » = stand someone up (le pronom se place entre stand et up).', { d: 2.2 })
    .answer('Describe a difficult situation you had to face at work or in your studies. Use at least one idiom or phrasal verb from the lesson.',
      'Last year our biggest client pulled out, so we had to bite the bullet, go back to the drawing board and come up with a new strategy.',
      'Réutilise un idiome ou un verbe à particule : bite the bullet, back to the drawing board, come up with, rule out…',
      { kc: 'c1.idioms', keywords: [['bite the bullet', 'drawing board', 'come up with', 'came up with', 'blessing in disguise', 'cut corners', 'call it a day', 'same boat', 'back down', 'rule out', 'ruled out', 'tip of the iceberg', 'bring about', 'brought about', 'play down', 'played down']], minWords: 15, d: 2.6 })
    .build(),
};
