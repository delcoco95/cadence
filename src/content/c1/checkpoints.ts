import type { Exercise } from '../types';
import { exercises } from '../builders';
import { assessment } from '../level';

/**
 * Défis de fin d'unité C1 : items d'ÉVALUATION, jamais montrés en leçon ni en révision.
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_C1: Record<string, Exercise[]> = {
  'c1-inversion': assessment(
    exercises('cp-c1-inversion', 'C1', { kc: 'c1.inversion.negative_adverbials' })
      .mcq('Seldom ___ such a convincing argument from the opposition.', ['have we heard', 'we have heard', 'we heard', 'heard we'], 0,
        'Seldom en tête → inversion : have we heard.', { d: 2 })
      .cloze('No sooner ___ the contract than the supplier raised its prices.', ['had we signed'],
        'No sooner + had + sujet + participe … than.', { kc: 'c1.inversion.time_clauses', hint: 'we / sign', d: 2.3 })
      .cloze('___ you wish to withdraw your application, please inform us in writing.', ['Should'],
        'Should you wish… = si vous souhaitiez…', { kc: 'c1.inversion.conditional', d: 2 })
      .type('Réécris sans if : If I had realised how late it was, I would have left earlier.', [
        'Had I realised how late it was, I would have left earlier.',
        'Had I realized how late it was, I would have left earlier.',
      ], 'If I had realised → Had I realised.', { kc: 'c1.inversion.conditional', loose: true, d: 2.3, instruction: 'Transforme la phrase.' })
      .order('Avec inversion : Ce n’est qu’alors que j’ai compris mon erreur.', 'Only then did I realise my mistake.',
        'Only then + did + sujet + base.', { kc: 'c1.inversion.time_clauses', distractors: ['realised'], d: 2.2 })
      .tr('Jamais je n’ai été aussi {fier|fière} de mon équipe.', [
        'Never have I been so proud of my team.',
        'Never have I been prouder of my team.',
        'Never have I been as proud of my team.',
        'Never had I been so proud of my team.',
        'I have never been so proud of my team.',
        'I’ve never been so proud of my team.',
        'I have never been prouder of my team.',
        'I’ve never been prouder of my team.',
      ], 'Never have I been… (inversion soutenue) ou I have never been…', { d: 2.2 })
      .say('Si tu voyais Paul, dis-lui de m’appeler.', [
        'Should you see Paul, tell him to call me',
        'Should you see Paul, ask him to call me',
        'Should you see Paul, tell him to give me a call',
        'If you see Paul, tell him to call me',
        'If you see Paul, ask him to call me',
        'If you happen to see Paul, tell him to call me',
      ], 'Should you see… = si jamais tu voyais…', { kc: 'c1.inversion.conditional', d: 2.2 })
      .build(),
  ),
  'c1-cleft': assessment(
    exercises('cp-c1-cleft', 'C1', { kc: 'c1.cleft.it' })
      .mcq('It was not until she read the letter ___ she understood what had happened.', ['that', 'when', 'then', 'what'], 0,
        'It was not until… that…', { d: 2 })
      .cloze('___ annoys me most is the constant noise from the street.', ['What'],
        'Ce qui m’agace le plus → What annoys me most…', { kc: 'c1.cleft.wh', d: 1.9 })
      .cloze('All I ___ was a simple explanation.', ['wanted'],
        'All + sujet + verbe au passé + was : All I wanted was…', { kc: 'c1.cleft.wh', hint: 'want', d: 2 })
      .type('Mets en relief « my sister » : My sister booked the hotel, not me.', [
        'It was my sister who booked the hotel, not me.',
        'It was my sister that booked the hotel, not me.',
        'It was my sister who booked the hotel, not I.',
      ], 'It was + élément mis en relief + who…', { loose: true, d: 2.2, instruction: 'Transforme la phrase.' })
      .order('Aussi difficile que ce soit, nous devons continuer.', 'Difficult as it is, we must carry on.',
        'Adjectif + as + sujet + verbe : Difficult as it is…', { kc: 'c1.fronting', distractors: ['so'], d: 2.3 })
      .tr('Ce que je ne comprends pas, c’est pourquoi il a démissionné.', [
        'What I don’t understand is why he resigned.',
        'What I do not understand is why he resigned.',
        'What I don’t understand is why he quit.',
        'What I do not understand is why he quit.',
        'What I don’t understand is why he stepped down.',
        'What I can’t understand is why he resigned.',
        'What I don’t get is why he resigned.',
      ], '« Ce que… c’est » = What… is.', { kc: 'c1.cleft.wh', d: 2.2 })
      .answer('What is the one thing you would change about your town or city? Use “What… is…” or “It is… that…”.',
        'What my town really needs is better public transport, because it is the lack of buses that forces everyone to drive.',
        'Utilise une pseudo-clivée (What… is…) ou une clivée (It is… that…).',
        { kc: 'c1.cleft.wh', keywords: [['what my', 'what i', 'what we', 'what the', 'what our', 'it is the', 'it was the', 'all we', 'all i']], minWords: 12, d: 2.5 })
      .build(),
  ),
  'c1-passive': assessment(
    exercises('cp-c1-passive', 'C1', { kc: 'c1.passive.reporting_personal' })
      .mcq('The thieves are thought ___ the country by now.', ['to have left', 'to leave', 'leaving', 'that they left'], 0,
        'Action antérieure → to have left.', { d: 2 })
      .cloze('It ___ that the merger will create 500 jobs.', ['is claimed'],
        'It is claimed that… = on affirme que…', { kc: 'c1.passive.reporting_it', hint: 'claim, présent', d: 1.9 })
      .cloze('There ___ to be serious flaws in the original study.', ['are said'],
        'There are said to be… = il y aurait…', { hint: 'say, présent', d: 2.3 })
      .cloze('I can’t stand ___ what to do by people who know less than me.', ['being told'],
        'stand + gérondif passif : being told.', { kc: 'c1.passive.advanced_forms', hint: 'tell', d: 2.2 })
      .tr('Je me suis fait couper les cheveux samedi.', [
        'I had my hair cut on Saturday.',
        'I got my hair cut on Saturday.',
        'I had my hair cut last Saturday.',
        'I got my hair cut last Saturday.',
        'I had a haircut on Saturday.',
        'I got a haircut on Saturday.',
      ], 'have / get + objet + participe : I had my hair cut.', { kc: 'c1.passive.causative', d: 2 })
      .listen('The old hospital is to be converted into flats, it was announced yesterday.', 'Que va devenir l’ancien hôpital ?', [
        'Il sera transformé en appartements',
        'Il sera démoli',
        'Il rouvrira l’année prochaine',
        'Il a été vendu hier',
      ], 0, 'is to be converted = va être transformé (infinitif passif).', { kc: 'c1.passive.advanced_forms', d: 2.1 })
      .say('Le Premier ministre aurait refusé de démissionner.', [
        'The Prime Minister is said to have refused to resign',
        'The Prime Minister is reported to have refused to resign',
        'The Prime Minister is believed to have refused to resign',
        'The Prime Minister reportedly refused to resign',
        'The Prime Minister allegedly refused to resign',
        'It is said that the Prime Minister refused to resign',
        'It is reported that the Prime Minister refused to resign',
      ], 'Conditionnel de rumeur → is said / reported to have + participe.', { d: 2.4 })
      .build(),
  ),
  'c1-conditionals': assessment(
    exercises('cp-c1-conditionals', 'C1', { kc: 'c1.cond.mixed' })
      .mcq('If you had taken the job in London, you ___ a much longer commute now.', ['would have', 'would have had', 'will have', 'had'], 0,
        'Hypothèse passée → conséquence présente (now) : would have.', { d: 2.1 })
      .cloze('___ you had a million euros, what would you do with it?', ['Supposing', 'Suppose'],
        'Supposing / Suppose = à supposer que, et si…', { kc: 'c1.cond.alternatives', hint: 'à supposer que', d: 2 })
      .cloze('The doctor insisted that she ___ at least a week off work.', ['take', 'should take'],
        'insist that + base : take.', { kc: 'c1.subjunctive.mandative', hint: 'take', d: 2.2 })
      .cloze('If only I ___ more attention in class when I was younger!', ['had paid'],
        'Regret passé → If only + past perfect.', { kc: 'c1.unreal.past', hint: 'pay', d: 2.1 })
      .type('Réécris avec « provided » : You can take the car if you fill up the tank.', [
        'You can take the car provided you fill up the tank.',
        'You can take the car provided that you fill up the tank.',
        'Provided you fill up the tank, you can take the car.',
        'Provided that you fill up the tank, you can take the car.',
      ], 'provided (that) + présent.', { kc: 'c1.cond.alternatives', loose: true, d: 2, instruction: 'Transforme la phrase.' })
      .listen('Had it not been for the satnav, we’d still be driving around in circles.', 'Que s’est-il passé ?', [
        'Le GPS leur a permis de trouver leur chemin',
        'Ils se sont perdus à cause du GPS',
        'Ils tournent encore en rond',
        'Ils n’avaient pas de GPS',
      ], 0, 'Had it not been for = sans. Conséquence présente irréelle : ils ne tournent PAS en rond.', { d: 2.4 })
      .tr('Il agit comme s’il était le patron.', [
        'He acts as if he were the boss.',
        'He acts as if he was the boss.',
        'He acts as though he were the boss.',
        'He acts as though he was the boss.',
        'He behaves as if he were the boss.',
        'He behaves as if he was the boss.',
        'He behaves as though he were the boss.',
        'He behaves as though he was the boss.',
        'He acts like he is the boss.',
        'He acts like he was the boss.',
        'He behaves like he is the boss.',
      ], 'as if / as though + prétérit (irréel).', { kc: 'c1.unreal.past', d: 2.1 })
      .build(),
  ),
  'c1-participles': assessment(
    exercises('cp-c1-participles', 'C1', { kc: 'c1.participle.adverbial' })
      .mcq('___ by the noise, the residents called the police.', ['Disturbed', 'Disturbing', 'Having disturbed', 'To disturb'], 0,
        'Les habitants SONT dérangés → participe passé : Disturbed.', { d: 2 })
      .cloze('___ worked abroad for ten years, she found it hard to settle back home.', ['Having'],
        'Having + participe : antériorité.', { kc: 'c1.participle.perfect', d: 2 })
      .cloze('The bridge ___ across the river will be completed next year.', ['being built'],
        'which is being built → being built (relative réduite passive progressive).', { kc: 'c1.participle.reduced_relative', hint: 'build, en cours', d: 2.4 })
      .cloze('The guests ___, we started clearing up.', ['gone', 'having gone', 'having left'],
        'Construction absolue : The guests gone = une fois les invités partis.', { kc: 'c1.participle.absolute', hint: 'partis', d: 2.6 })
      .mcq('Which sentence is correct?', [
        'Looking out of the window, I saw a fox in the garden.',
        'Looking out of the window, a fox was in the garden.',
        'Looked out of the window, I saw a fox in the garden.',
        'Having looking out of the window, I saw a fox in the garden.',
      ], 0, 'C’est moi qui regarde par la fenêtre : le sujet de la principale doit être I.', { d: 2.2, instruction: 'Quelle phrase est correcte ?' })
      .tr('Ne sachant pas quoi dire, il est resté silencieux.', [
        'Not knowing what to say, he remained silent.',
        'Not knowing what to say, he stayed silent.',
        'Not knowing what to say, he kept silent.',
        'Not knowing what to say, he remained quiet.',
        'Not knowing what to say, he stayed quiet.',
        'Not knowing what to say, he kept quiet.',
        'Not knowing what to say, he said nothing.',
      ], 'Not + -ing en tête : Not knowing…', { d: 2.1 })
      .dictation('With the deadline approaching, everyone was working late.',
        'With + nom + -ing : construction absolue.', { kc: 'c1.participle.absolute', d: 2 })
      .build(),
  ),
  'c1-modality': assessment(
    exercises('cp-c1-modality', 'C1', { kc: 'c1.modal.deduction_past' })
      .mcq('I ___ taken a taxi; the station was only five minutes away.', ['needn’t have', 'mustn’t have', 'can’t have', 'wouldn’t rather'], 0,
        'Taxi pris pour rien → needn’t have taken.', { kc: 'c1.modal.need_past', d: 2.1 })
      .cloze('The keys aren’t here. I ___ left them at the office.', ['might have', 'may have', 'could have'],
        'Possibilité sur le passé → might / may / could have.', { hint: 'possibilité', d: 2 })
      .cloze('This is ___ to cause controversy; it always does.', ['bound', 'sure', 'certain'],
        'be bound to = c’est inévitable.', { kc: 'c1.modal.expectation', hint: 'certitude', d: 2 })
      .cloze('Women ___ to live longer than men in most countries.', ['tend'],
        'tend to = avoir tendance à (généralisation prudente).', { kc: 'c1.hedging.verbs', hint: 'tendance', d: 1.9 })
      .tr('Je préférerais que tu viennes demain.', [
        'I’d rather you came tomorrow.',
        'I would rather you came tomorrow.',
        'I’d rather you come tomorrow.',
        'I’d prefer you to come tomorrow.',
        'I would prefer you to come tomorrow.',
        'I’d prefer it if you came tomorrow.',
        'I would prefer it if you came tomorrow.',
        'I’d prefer you came tomorrow.',
      ], 'would rather + sujet + prétérit : I’d rather you came.', { kc: 'c1.modal.expectation', d: 2.2 })
      .listen('It would appear that the figures were slightly overstated, although we cannot be entirely sure.', 'Quelle est l’attitude du locuteur ?', [
        'Prudente : il n’est pas certain',
        'Catégorique : il en est sûr',
        'Indifférente aux chiffres',
        'Accusatrice : quelqu’un a menti',
      ], 0, 'It would appear… cannot be entirely sure : discours nuancé, prudent.', { kc: 'c1.hedging.verbs', d: 2.1 })
      .answer('Your colleague missed an important meeting. Suggest possible reasons and say what he should have done.',
        'He must have forgotten about it, or he might have been stuck in traffic, but he should have sent a message to warn us.',
        'Combine must / might have (déduction) et should have (reproche).',
        { keywords: [['must have', 'might have', 'may have', 'could have', 'cannot have'], ['should have', 'ought to have']], minWords: 14, d: 2.6 })
      .build(),
  ),
  'c1-cohesion': assessment(
    exercises('cp-c1-cohesion', 'C1', { kc: 'c1.cohesion.substitution' })
      .mcq('Will the shop be open on Monday? — I expect ___.', ['so', 'it', 'yes', 'that'], 0,
        'expect + so pour reprendre la proposition.', { d: 1.9 })
      .cloze('He said he would apologise, but he never ___.', ['did'],
        'Ellipse : never did (apologise).', { kc: 'c1.cohesion.ellipsis', d: 2 })
      .cloze('The scheme was a success, ___ a modest one.', ['albeit'],
        'albeit + groupe nominal = quoique.', { kc: 'c1.linkers.advanced', hint: 'quoique', d: 2.3 })
      .cloze('There has been a steady decline ___ the number of young farmers.', ['in'],
        'a decline IN something.', { kc: 'c1.nominalisation', d: 2 })
      .type('Réécris en commençant par « The decision… » : The council decided to close the library, which upset residents.', [
        'The decision to close the library upset residents.',
        'The decision to close the library upset the residents.',
        'The decision to close the library upset local residents.',
      ], 'decided to → the decision to (nominalisation).', { kc: 'c1.nominalisation', loose: true, d: 2.3, instruction: 'Transforme la phrase.' })
      .dictation('The roads were icy, hence the large number of accidents.',
        'hence + nom = d’où.', { kc: 'c1.linkers.advanced', d: 2 })
      .say('« Tu peux m’aider ? » « J’aimerais bien, mais je suis {débordé|débordée}. »', [
        'I’d love to, but I’m swamped',
        'I would love to, but I am swamped',
        'I’d love to, but I’m snowed under',
        'I’d love to, but I’m really busy',
        'I’d love to, but I’m too busy',
        'I’d love to, but I’m overwhelmed',
        'I’d like to, but I’m really busy',
        'I would like to, but I’m overloaded',
      ], 'Dis seulement la réponse. Garde le to : I’d love to.', { kc: 'c1.cohesion.ellipsis', d: 2.2 })
      .build(),
  ),
  'c1-register': assessment(
    exercises('cp-c1-register', 'C1', { kc: 'c1.collocations' })
      .mcq('The new evidence ___ serious doubts about the verdict.', ['raises', 'rises', 'arises', 'lifts'], 0,
        'Collocation : raise doubts (raise est transitif, rise ne l’est pas).', { d: 2.1 })
      .mcq('Which word best replaces “get” in a formal letter: “We hope to get your reply soon”?', ['receive', 'catch', 'grab', 'pick up'], 0,
        'Registre formel : receive.', { kc: 'c1.register.formality', d: 1.9 })
      .cloze('After weeks of protests, the government was forced to back ___.', ['down'],
        'back down = céder, faire marche arrière.', { kc: 'c1.phrasal_verbs', d: 2 })
      .cloze('I’m afraid we’re all in the same ___: nobody has been paid this month.', ['boat'],
        'in the same boat = dans la même galère.', { kc: 'c1.idioms', d: 1.9 })
      .tr('Elle est amèrement déçue par les résultats.', [
        'She is bitterly disappointed with the results.',
        'She is bitterly disappointed by the results.',
        'She is bitterly disappointed in the results.',
        'She’s bitterly disappointed with the results.',
        'She’s bitterly disappointed by the results.',
        'She was bitterly disappointed with the results.',
        'She was bitterly disappointed by the results.',
        'She is deeply disappointed with the results.',
        'She is deeply disappointed by the results.',
      ], 'Collocation : bitterly disappointed.', { d: 2 })
      .listen('Let’s not sit on the fence any longer; we need to make a decision today.', 'Que veut la personne ?', [
        'Prendre position et décider aujourd’hui',
        'Reporter la décision',
        'Demander l’avis d’un expert',
        'S’asseoir pour discuter plus longtemps',
      ], 0, 'sit on the fence = ne pas prendre position.', { kc: 'c1.idioms', d: 2.1 })
      .answer('Announce a recent change in your company, school or town to a formal audience.',
        'I would like to inform you that the library will be closed for renovation, and we apologise for any inconvenience this may cause.',
        'Utilise des formules formelles : I would like to inform you…, We apologise for any inconvenience…',
        { kc: 'c1.register.formality', keywords: [['inform', 'apologise', 'apologize', 'regarding', 'further', 'would like', 'grateful', 'inconvenience', 'pleased to']], minWords: 15, d: 2.5 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_C1: Record<string, string[]> = {
  'c1-inversion': [
    'Je peux mettre une idée en relief à l’écrit grâce à l’inversion après un adverbe négatif.',
    'Je peux formuler une hypothèse soutenue sans if (Should you…, Had I known…).',
  ],
  'c1-cleft': [
    'Je peux insister sur un élément précis avec It is… that… ou What… is….',
    'Je peux exprimer une concession élégante par antéposition (Much as…, Strange as it may seem…).',
  ],
  'c1-passive': [
    'Je peux rapporter une information non confirmée sans l’affirmer (He is said to have…).',
    'Je peux employer le passif à toutes les formes et dire ce que je fais faire (have something done).',
  ],
  'c1-conditionals': [
    'Je peux relier un passé imaginaire à ses conséquences présentes (conditionnel mixte).',
    'Je peux formuler une recommandation formelle avec le subjonctif (It is essential that he be…).',
  ],
  'c1-participles': [
    'Je peux condenser mes phrases avec des participiales (Having finished…, Written in…).',
    'Je peux employer des relatives réduites et des constructions absolues à l’écrit.',
  ],
  'c1-modality': [
    'Je peux faire des déductions et exprimer des regrets sur le passé (must have, needn’t have, should have).',
    'Je peux nuancer mon propos comme dans un texte académique (It would appear that, arguably, tend to).',
  ],
  'c1-cohesion': [
    'Je peux éviter les répétitions grâce à l’ellipse et à la substitution (I hope so, do so, one).',
    'Je peux structurer un texte argumenté avec des connecteurs soutenus et des nominalisations.',
  ],
  'c1-register': [
    'Je peux adapter mon registre (formel ou informel) à la situation et au destinataire.',
    'Je peux employer des collocations, des idiomes et des verbes à particule avec naturel.',
  ],
};
