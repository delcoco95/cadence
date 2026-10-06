import type { Lesson } from '../types';
import { exercises } from '../builders';

export const conditionals1: Lesson = {
  id: 'c1-conditionals-1',
  cefr: 'C1',
  unitId: 'c1-conditionals',
  title: 'Conditionnels mixtes et alternatives à if',
  subtitle: 'If I had…, I would be…, provided, unless, but for, otherwise',
  kcIds: ['c1.cond.mixed', 'c1.cond.alternatives'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Mélanger passé et présent',
      body: 'Le conditionnel mixte relie une hypothèse et une conséquence situées à des moments différents.',
      table: [
        ['Passé irréel → conséquence présente', 'If I had taken that job, I would be living in Berlin now.'],
        ['Présent irréel → conséquence passée', 'If she were more organised, she wouldn’t have missed the deadline.'],
        ['Formes', 'if + past perfect → would + base  /  if + past simple → would have + participe'],
      ],
      examples: [
        { en: 'If we hadn’t sold the flat, we would be rich now.', fr: 'Si nous n’avions pas vendu l’appartement, nous serions riches aujourd’hui.' },
        { en: 'If he weren’t so shy, he would have asked her out.', fr: 'S’il n’était pas si timide, il l’aurait invitée à sortir.' },
      ],
      tip: 'Laisse-toi guider par les marqueurs de temps : now, today, still → would + base ; yesterday, last year, then → would have + participe.',
    },
    {
      title: 'Les alternatives à if',
      table: [
        ['provided / providing (that), as long as', 'à condition que'],
        ['supposing / suppose', 'et si…, à supposer que'],
        ['unless', 'à moins que, sauf si'],
        ['otherwise', 'sinon'],
        ['but for + nom', 'sans, si ce n’était (pas)'],
        ['in case', 'au cas où (précaution, PAS condition)'],
      ],
      examples: [
        { en: 'You can work from home provided you attend the Monday meeting.', fr: 'Tu peux télétravailler à condition d’assister à la réunion du lundi.' },
        { en: 'But for his help, I would have given up.', fr: 'Sans son aide, j’aurais abandonné.' },
      ],
      tip: 'Faux ami : in case ≠ « en cas de ». Take an umbrella in case it rains = au cas où (précaution). « En cas de pluie, le concert est annulé » = If it rains / In the event of rain. Et pas de will après provided, unless ou as long as : « provided you will pay » ✗.',
    },
  ],
  exercises: exercises('c1-conditionals-1', 'C1', { kc: 'c1.cond.mixed' })
    .mcq('If I hadn’t stayed up so late, I ___ so exhausted now.', ['wouldn’t be', 'wouldn’t have been', 'won’t be', 'hadn’t been'], 0,
      'Cause passée (hadn’t stayed up) → conséquence présente (now) : wouldn’t be.', { d: 1.9 })
    .mcq('If he spoke better English, he ___ the job last month.', ['would have got', 'would get', 'will have got', 'had got'], 0,
      'Caractéristique présente (spoke) → conséquence passée (last month) : would have got.', { d: 2.1 })
    .cloze('If we had invested in renewables twenty years ago, we ___ so dependent on imports today.', ['wouldn’t be', 'would not be'],
      'Hypothèse passée → conséquence présente (today) : wouldn’t be.', { hint: 'not / be', d: 2.1 })
    .cloze('If she weren’t so stubborn, she ___ the offer when it was on the table.', ['would have accepted', 'might have accepted', 'could have accepted'],
      'Trait de caractère présent (weren’t so stubborn) → regret passé : would have accepted.', { hint: 'accept', d: 2.3 })
    .cloze('You can borrow my notes ___ you give them back by Monday.', ['provided', 'providing', 'provided that', 'providing that', 'as long as', 'so long as', 'on condition that'],
      'Condition → provided (that) / as long as, suivis du présent.', { kc: 'c1.cond.alternatives', d: 1.9 })
    .cloze('___ for the generosity of a few donors, the museum would have closed years ago.', ['But'],
      'But for + nom = sans, si ce n’avait été (registre soutenu).', { kc: 'c1.cond.alternatives', d: 2.3 })
    .type('Réécris avec « unless » : If the weather doesn’t improve, the match will be cancelled.', [
      'Unless the weather improves, the match will be cancelled.',
      'Unless the weather improves, the match will be canceled.',
      'The match will be cancelled unless the weather improves.',
      'The match will be canceled unless the weather improves.',
    ], 'unless = if… not : le verbe redevient affirmatif (unless the weather improves).', { kc: 'c1.cond.alternatives', loose: true, d: 2.1, instruction: 'Transforme la phrase.' })
    .order('Si j’avais écouté tes conseils, je ne serais pas dans cette situation.', 'If I had listened to your advice, I wouldn’t be in this situation.',
      'Passé irréel (had listened) → conséquence présente (wouldn’t be).', { distractors: ['have'], d: 2.2 })
    .tr('Si elle n’avait pas déménagé, elle vivrait encore à Paris.', [
      'If she had not moved, she would still live in Paris.',
      'If she hadn’t moved, she would still live in Paris.',
      'If she hadn’t moved, she’d still live in Paris.',
      'If she hadn’t moved, she would still be living in Paris.',
      'If she had not moved, she would still be living in Paris.',
      'If she hadn’t moved, she’d still be living in Paris.',
      'If she hadn’t moved away, she would still be living in Paris.',
      'If she hadn’t moved away, she would still live in Paris.',
      'Had she not moved, she would still be living in Paris.',
      'Had she not moved, she would still live in Paris.',
    ], 'Conditionnel mixte : if + past perfect → would (still) + base ou would be + -ing.', { d: 2.3 })
    .tr('Prends ton chargeur au cas où la réunion durerait.', [
      'Take your charger in case the meeting runs late.',
      'Take your charger in case the meeting goes on.',
      'Take your charger in case the meeting runs over.',
      'Take your charger in case the meeting overruns.',
      'Take your charger in case the meeting drags on.',
      'Take your charger in case the meeting lasts a long time.',
      'Take your charger in case the meeting goes on for a long time.',
      'Take your charger with you in case the meeting runs late.',
      'Bring your charger in case the meeting runs late.',
      'Bring your charger in case the meeting goes on.',
      'Bring your charger in case the meeting runs over.',
      'Bring your charger in case the meeting overruns.',
      'Bring your charger in case the meeting drags on.',
    ], 'Précaution → in case + présent (pas de conditionnel ni de will après in case).', { kc: 'c1.cond.alternatives', d: 2.4 })
    .mcq('What does the writer mean by “delay is itself a decision”?', [
      'Postponing a project has real consequences and costs',
      'Councils should never approve ambitious projects',
      'The tram line will never be built',
      'Decisions should always be delayed until costs fall',
    ], 0, 'Le conditionnel mixte (would now be saving) et l’irréel du passé (would have been roughly half) montrent le coût du report : ne pas décider, c’est déjà décider.', {
      d: 2.6,
      passage: 'Supposing the city had built the tram line when it was first proposed in 2005, commuters would now be saving an estimated forty minutes a day. Instead, successive councils postponed the decision, insisting that a cheaper alternative could be found. None was. Had the original plan gone ahead, construction costs would have been roughly half what they are today. The lesson is not that every ambitious project deserves approval, but that delay is itself a decision, and rarely a cheap one.',
    })
    .listen('If I’d known the restaurant was so expensive, I’d have suggested somewhere else. I’m practically broke now.', 'Quelle est la situation du locuteur ?', [
      'Il n’a presque plus d’argent',
      'Il a choisi le restaurant exprès',
      'Il connaissait les prix à l’avance',
      'Il propose un autre restaurant pour ce soir',
    ], 0, 'I’m practically broke = je suis quasiment fauché. If I’d known = If I had known.', { d: 2.1 })
    .dictation('Supposing the funding falls through, what alternatives do we have?',
      'Supposing = à supposer que. fall through = échouer, tomber à l’eau.', { kc: 'c1.cond.alternatives', d: 2.2 })
    .say('Si j’étais plus {prudent|prudente}, je n’aurais pas perdu mes clés.', [
      'If I were more careful, I would not have lost my keys',
      'If I were more careful, I wouldn’t have lost my keys',
      'If I was more careful, I wouldn’t have lost my keys',
      'If I was more careful, I would not have lost my keys',
    ], 'Trait présent (were more careful) → conséquence passée (wouldn’t have lost).', { d: 2.2 })
    .answer('Think of a decision you made in the past. How would your life be different now if you had chosen otherwise?',
      'If I had studied medicine instead of law, I would probably be working in a hospital now and I would have less free time.',
      'Combine if + past perfect avec would + base (conséquence présente).',
      { keywords: [['if i had', 'had i', 'if i hadn’t'], ['would', 'might', 'could']], minWords: 14, d: 2.6 })
    .build(),
};

export const conditionals2: Lesson = {
  id: 'c1-conditionals-2',
  cefr: 'C1',
  unitId: 'c1-conditionals',
  title: 'Subjonctif et irréel',
  subtitle: 'I suggest he be…, It’s high time we…, If only…, as if',
  kcIds: ['c1.subjunctive.mandative', 'c1.unreal.past'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le subjonctif « mandatif »',
      body: 'Après les verbes, adjectifs et noms qui expriment une exigence ou une recommandation, l’anglais soutenu emploie la base verbale à toutes les personnes.',
      table: [
        ['Verbes : suggest, recommend, insist, demand, propose, request', 'The board insisted that he resign.'],
        ['Adjectifs : essential, vital, crucial, imperative', 'It is essential that every member be informed.'],
        ['Noms : the recommendation / requirement that', 'The requirement that applicants hold a degree…'],
        ['Négation : not + base', 'We recommend that she not travel alone.'],
      ],
      examples: [
        { en: 'The doctor recommended that he take a week off.', fr: 'Le médecin lui a recommandé de prendre une semaine de repos.' },
      ],
      tip: 'Base verbale, sans -s : he resign, she be, they not travel. En anglais britannique, should + base est aussi courant (that he should resign). Piège très fréquent : « I suggest you to call » ✗ → I suggest (that) you call / I suggest calling ✓.',
    },
    {
      title: 'L’irréel : regrets, souhaits, comparaisons',
      table: [
        ['It’s (high / about) time + prétérit', 'It’s high time we updated the website.'],
        ['I wish / If only + prétérit (regret présent)', 'If only I had more time.'],
        ['I wish / If only + past perfect (regret passé)', 'I wish I hadn’t said that.'],
        ['I wish + would (agacement)', 'I wish you would stop interrupting.'],
        ['as if / as though + prétérit (irréel)', 'He talks as if he owned the place.'],
      ],
      examples: [
        { en: 'I wish I had listened to you.', fr: 'Si seulement je t’avais écouté.' },
      ],
      tip: '« Il est grand temps que nous partions » = It’s high time we left : prétérit, ni présent ni subjonctif. Le décalage dans le passé marque l’irréel.',
    },
  ],
  exercises: exercises('c1-conditionals-2', 'C1', { kc: 'c1.subjunctive.mandative' })
    .mcq('The auditors recommended that the company ___ its accounting procedures.', ['review', 'to review', 'reviewing', 'will have reviewed'], 0,
      'recommend that + sujet + base verbale (subjonctif) : review.', { d: 2 })
    .mcq('It is essential that the system ___ tested before launch.', ['be', 'been', 'being', 'to be'], 0,
      'It is essential that + base : be tested.', { d: 2.1 })
    .cloze('The union is demanding that the decision ___ reversed.', ['be', 'should be'],
      'demand that + base : be reversed (ou should be, britannique).', { hint: 'be', d: 2.1 })
    .cloze('We strongly recommend that children ___ left unattended near the pool.', ['not be', 'should not be', 'shouldn’t be'],
      'Négation au subjonctif : not + base, sans do : not be left.', { hint: 'négation', d: 2.4 })
    .cloze('It’s high time the government ___ action on housing.', ['took'],
      'It’s high time + prétérit : took.', { kc: 'c1.unreal.past', hint: 'take', d: 2 })
    .cloze('I wish I ___ that email; it caused so much trouble.', ['hadn’t sent', 'had not sent'],
      'Regret sur le passé → wish + past perfect.', { kc: 'c1.unreal.past', hint: 'not / send', d: 2.1 })
    .type('Corrige la phrase : « I suggest you to contact the supplier. »', [
      'I suggest you contact the supplier.',
      'I suggest that you contact the supplier.',
      'I suggest that you should contact the supplier.',
      'I suggest you should contact the supplier.',
      'I suggest contacting the supplier.',
    ], 'suggest ne se construit jamais avec un objet + to : suggest (that) you contact… ou suggest + -ing.', { loose: true, d: 2, instruction: 'Corrige la phrase.' })
    .order('Si seulement j’avais plus de temps pour lire.', 'If only I had more time to read.',
      'If only + prétérit pour un regret présent.', { kc: 'c1.unreal.past', distractors: ['have', 'would'], d: 1.9 })
    .tr('Il est essentiel que chaque employé soit formé.', [
      'It is essential that every employee be trained.',
      'It’s essential that every employee be trained.',
      'It is essential that every employee is trained.',
      'It’s essential that every employee is trained.',
      'It is essential that every employee should be trained.',
      'It is essential that each employee be trained.',
      'It is essential that each employee is trained.',
      'It is essential that each employee should be trained.',
      'It is essential that all employees be trained.',
      'It is essential that all employees are trained.',
      'It is essential that every member of staff be trained.',
      'It is essential for every employee to be trained.',
    ], 'It is essential that + base (be trained). L’indicatif (is trained) est courant en anglais britannique.', { d: 2.2 })
    .tr('Il est grand temps que nous changions de fournisseur.', [
      'It is high time we changed supplier.',
      'It’s high time we changed supplier.',
      'It is high time we changed suppliers.',
      'It’s high time we changed suppliers.',
      'It is high time that we changed supplier.',
      'It is high time we changed our supplier.',
      'It’s high time we changed our supplier.',
      'It is high time we switched suppliers.',
      'It’s high time we switched suppliers.',
      'It is high time we found a new supplier.',
      'It’s high time we found a new supplier.',
      'It is about time we changed supplier.',
      'It’s about time we changed suppliers.',
    ], 'It’s high time + prétérit (changed), jamais le présent.', { kc: 'c1.unreal.past', d: 2.3 })
    .mcq('What can be inferred about the first evaluation?', [
      'Its conclusions were weakened by incomplete data',
      'It was carried out by an independent body',
      'It recommended cutting the budget',
      'It concluded that the scheme should end',
    ], 0, '« the absence of reliable figures undermined the first evaluation » : faute de données fiables, la première évaluation a été fragilisée.', {
      d: 2.4,
      passage: 'Following the review, the committee recommends that the pilot scheme be extended for a further twelve months and that its budget not exceed current levels. It is imperative that participating schools submit quarterly data, as the absence of reliable figures undermined the first evaluation. The committee further proposes that an independent body, rather than the ministry itself, conduct the final assessment.',
    })
    .listen('I wish they’d told us about the changes earlier; we could have planned around them.', 'Que regrette la personne ?', [
      'Ne pas avoir été prévenue plus tôt des changements',
      'Avoir trop planifié',
      'Que les changements aient été annulés',
      'Ne pas avoir prévenu ses collègues',
    ], 0, 'I wish they’d told us = I wish they had told us : regret sur le passé.', { kc: 'c1.unreal.past', d: 2.1 })
    .dictation('The committee insisted that the report be published in full.',
      'insist that + base : be published (sans -s, sans should).', { d: 2.2 })
    .say('J’aimerais que tu arrêtes de m’interrompre.', [
      'I wish you would stop interrupting me',
      'I wish you’d stop interrupting me',
      'I wish you would stop cutting me off',
      'I would like you to stop interrupting me',
      'I’d like you to stop interrupting me',
    ], 'Agacement → I wish you would… (stop + -ing).', { kc: 'c1.unreal.past', d: 2.2 })
    .answer('Your team is facing a problem at work or school. What do you recommend? Use “I suggest / recommend that…” or “It is essential that…”.',
      'I suggest that we meet every Monday morning, and it is essential that everyone be informed of the deadlines in advance.',
      'Utilise suggest / recommend / essential that + base verbale.',
      { keywords: [['suggest', 'recommend', 'essential', 'vital', 'insist', 'propose', 'crucial', 'imperative'], ['that']], minWords: 14, d: 2.7 })
    .build(),
};
