import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const Q = 'b2.reported.questions';
const CMD = 'b2.reported.commands';
const V = 'b2.reported.verbs';

export const reportedUnit: Unit = {
  id: 'b2-reported',
  cefr: 'B2',
  title: 'Rapporter les paroles',
  description: 'Discours indirect : questions, ordres et demandes rapportés, verbes introducteurs (suggest, deny, admit, warn, refuse…).',
  lessonIds: ['b2-reported-1', 'b2-reported-2'],
  canDo: [
    'Je peux rapporter les questions, demandes et consignes de quelqu’un, par exemple après un entretien ou une réunion.',
    'Je peux résumer une conversation avec des verbes précis comme suggest, admit, refuse ou warn.',
  ],
};

export const reported1: Lesson = {
  id: 'b2-reported-1',
  cefr: 'B2',
  unitId: 'b2-reported',
  title: 'Questions et consignes rapportées',
  subtitle: 'She asked me where… / He told me to…',
  kcIds: [Q, CMD],
  estMinutes: 8,
  explanation: [
    {
      title: 'Les questions rapportées',
      body: 'Dans une question rapportée, l’ordre redevient celui d’une phrase affirmative (sujet + verbe), sans do / does / did, et sans point d’interrogation. Les questions fermées sont introduites par if ou whether.',
      table: [
        ['“Where do you live?”', 'She asked me where I lived.'],
        ['“Have you finished?”', 'He asked if (whether) I had finished.'],
        ['“Will you help me?”', 'She wanted to know if I would help her.'],
      ],
      tip: 'Erreur fréquente : garder l’inversion. « She asked where did I live » ✗ → « She asked where I lived » ✓. Le français fait pareil : « elle m’a demandé où j’habitais ».',
    },
    {
      title: 'Le recul des temps',
      table: [
        ['present → past', 'am → was, do → did'],
        ['present perfect / past → past perfect', 'have done / did → had done'],
        ['will / can → would / could', 'will go → would go'],
        ['repères', 'tomorrow → the next day, yesterday → the day before, here → there'],
      ],
      tip: 'Si l’information est toujours vraie, le recul est facultatif : He told me the shop opens at nine.',
    },
    {
      title: 'Ordres et demandes',
      body: 'tell (ordre) ou ask (demande) + personne + (not) to + base verbale.',
      examples: [
        { en: '“Please wait here.” → She asked us to wait there.', fr: '« Attendez ici, s’il vous plaît. » → Elle nous a demandé d’attendre là.' },
        { en: '“Don’t touch it!” → He told me not to touch it.', fr: '« N’y touche pas ! » → Il m’a dit de ne pas y toucher.' },
      ],
      tip: '« Il m’a dit de… » = He told me to…, jamais « He said me to » ✗. say ne prend pas de complément de personne direct.',
    },
  ],
  exercises: exercises('b2-reported-1', 'B2', { kc: Q, tense: 'reported_speech' })
    .mcq('“Where do you work?” → She asked me ___.', ['where did I work', 'where I worked', 'where do I work'], 1,
      'Question rapportée : ordre sujet + verbe, sans did, et recul du temps → where I worked.', { d: 0.9 })
    .cloze('“Have you seen my keys?” → She asked me if I ___ her keys.', ['had seen'],
      'Present perfect → past perfect dans le discours rapporté.', { hint: 'see', d: 1.1 })
    .cloze('“Don’t be late.” → My boss told me ___ late.', ['not to be'],
      'Ordre négatif rapporté : told + personne + not to + base.', { kc: CMD, d: 1.0 })
    .mcq('“Could you send me the file?” → She ___ me to send her the file.', ['said', 'asked', 'explained'], 1,
      'Demande polie → ask + personne + to. said et explained ne se construisent pas ainsi.', { kc: CMD, d: 0.9 })
    .type('« What time does the train leave? » → He wanted to know…',
      ['He wanted to know what time the train left.', 'He wanted to know when the train left.', 'He wanted to know what time the train leaves.'],
      'Ordre affirmatif, sans does : what time the train left (leaves si l’horaire reste valable).', { d: 1.3 })
    .type('« Please turn off your phones. » → The pilot asked the passengers…',
      ['The pilot asked the passengers to turn off their phones.', 'The pilot asked the passengers to switch off their phones.',
        'The pilot asked the passengers to turn their phones off.', 'The pilot asked the passengers to switch their phones off.'],
      'asked + personne + to + base ; your devient their.', { kc: CMD, d: 1.2 })
    .order('Elle m’a demandé pourquoi j’avais quitté mon dernier emploi.', 'She asked me why I had left my last job.',
      'why + sujet + verbe, sans did ; recul au past perfect.', { distractors: ['did', 'said'], d: 1.2 })
    .order('Le médecin m’a dit de ne pas porter de charges lourdes.', 'The doctor told me not to lift anything heavy.',
      'told + personne + not to + base.', { kc: CMD, distractors: ['said', 'don’t'], d: 1.2 })
    .listen('She asked me whether I could lend her some money until Friday.', 'Que lui a-t-elle demandé ?',
      ['De lui prêter de l’argent jusqu’à vendredi', 'De la rembourser vendredi', 'De l’accompagner vendredi'], 0,
      'asked me whether I could lend her = m’a demandé si je pouvais lui prêter.', { d: 1.0 })
    .listen('The teacher told us not to use our phones during the test.', 'Quelle consigne le professeur a-t-il donnée ?',
      ['Ne pas utiliser leur téléphone pendant le test', 'Éteindre leur téléphone après le test', 'Utiliser leur téléphone pour vérifier leurs réponses'], 0,
      'told us not to use = nous a dit de ne pas utiliser.', { kc: CMD, d: 0.9 })
    .dictation('He asked me if I would be available the following week.', 'will → would ; next week → the following week.', { d: 1.2 })
    .tr('Il m’a demandé si j’avais déjà travaillé à l’étranger.',
      ['He asked me if I had ever worked abroad.', 'He asked me whether I had ever worked abroad.', 'He asked me if I had already worked abroad.',
        'He asked if I had ever worked abroad.', 'He asked whether I had ever worked abroad.', 'He asked me if I had worked abroad before.'],
      'Question fermée → if / whether + sujet + verbe ; « déjà » dans une question = ever.', { d: 1.3 })
    .tr('Elle nous a dit d’attendre dehors.', ['She told us to wait outside.', 'She asked us to wait outside.'],
      'told + personne + to + base.', { kc: CMD, d: 1.0 })
    .say('Il m’a demandé de fermer la porte.', ['He asked me to close the door', 'He asked me to shut the door', 'He told me to close the door', 'He told me to shut the door'],
      'asked / told + me + to + base.', { kc: CMD, d: 0.9 })
    .answer('What questions did they ask you at your last job interview?',
      'They asked me why I wanted the job and whether I could work under pressure.',
      'Rapporte les questions sans inversion : asked me why I…, whether I…',
      { keywords: [['asked'], ['if', 'whether', 'why', 'what', 'how', 'where', 'when']], minWords: 12, d: 1.3 })
    .build(),
};

const MINUTES =
  'Subject: Summary of Tuesday’s meeting\n\nDear all,\n\nHere is a quick summary of Tuesday’s discussion with our supplier. Their sales manager admitted that the last two deliveries had arrived late and apologised for not informing us earlier. She promised to send a revised schedule by Friday. However, she refused to lower the transport costs and warned us that prices might rise again in the spring. Paolo suggested looking for a second supplier, and I agreed to contact two alternative companies next week.\n\nBest regards,\nHannah';

export const reported2: Lesson = {
  id: 'b2-reported-2',
  cefr: 'B2',
  unitId: 'b2-reported',
  title: 'Les verbes introducteurs',
  subtitle: 'suggest, deny, admit, warn, refuse, promise…',
  kcIds: [V],
  estMinutes: 8,
  explanation: [
    {
      title: 'Résumer plutôt que répéter',
      body: 'Au lieu de said, un verbe précis résume l’intention : promettre, refuser, avouer… Chaque verbe a sa construction, à apprendre avec lui.',
      table: [
        ['+ to + base', 'agree, refuse, offer, promise, threaten', 'She refused to sign.'],
        ['+ personne + to + base', 'advise, warn, remind, encourage, persuade', 'He warned me not to go.'],
        ['+ -ing', 'deny, admit, suggest, recommend', 'He denied stealing the car.'],
        ['+ préposition + -ing', 'apologise for, insist on, accuse sb of, blame sb for', 'She insisted on paying.'],
        ['+ that', 'explain, admit, suggest, complain', 'He explained that the shop was closed.'],
      ],
      examples: [
        { en: '“I’ll call you tomorrow.” → She promised to call me the next day.', fr: '« Je t’appelle demain. » → Elle a promis de m’appeler le lendemain.' },
        { en: '“Let’s eat out.” → He suggested eating out.', fr: '« Allons au restaurant. » → Il a proposé d’aller au restaurant.' },
      ],
      tip: 'Deux pièges très français : « He suggested to go » ✗ → « He suggested going » ou « He suggested that we go » ✓ ; « Explain me » ✗ → « Explain to me » ✓.',
    },
  ],
  exercises: exercises('b2-reported-2', 'B2', { kc: V, tense: 'reported_speech' })
    .mcq('“I didn’t take the money!” → He denied ___ the money.', ['to take', 'taking', 'that take'], 1,
      'deny + -ing : denied taking.', { d: 1.0 })
    .mcq('“Let’s take a break.” → She suggested ___ a break.', ['to take', 'taking', 'us to take'], 1,
      'suggest + -ing (ou suggest that we take), jamais suggest to.', { d: 1.1 })
    .cloze('“Don’t walk alone in the park at night.” → The police warned us ___ alone in the park at night.', ['not to walk'],
      'warn + personne + not to + base.', { d: 1.1 })
    .cloze('“I’m sorry I was rude.” → He apologised ___ rude.', ['for being'],
      'apologise for + -ing : apologised for being.', { d: 1.3 })
    .mcq('“You broke the printer!” → She accused me ___ the printer.', ['of breaking', 'for breaking', 'to break'], 0,
      'accuse somebody of + -ing.', { d: 1.3 })
    .type('« Yes, I made a mistake. » → She admitted…',
      ['She admitted making a mistake.', 'She admitted having made a mistake.', 'She admitted that she had made a mistake.', 'She admitted to making a mistake.'],
      'admit + -ing, ou admit that + phrase.', { d: 1.2 })
    .order('Elle m’a conseillé de demander une augmentation.', 'She advised me to ask for a pay rise.',
      'advise + personne + to + base. ask for = demander (quelque chose).', { distractors: ['suggested', 'asking'], d: 1.2 })
    .mcq('Qu’a refusé la responsable commerciale ?',
      ['Baisser les frais de transport', 'Envoyer un nouveau planning', 'Reconnaître les retards'], 0,
      '« she refused to lower the transport costs » : refuse + to + base.', { d: 1.3, passage: MINUTES })
    .mcq('Qu’a proposé Paolo ?',
      ['Chercher un deuxième fournisseur', 'Contacter le fournisseur vendredi', 'Annuler la prochaine livraison'], 0,
      '« Paolo suggested looking for a second supplier » : suggest + -ing.', { d: 1.2, passage: MINUTES })
    .listen('She promised to call me back, but she never did.', 'Qu’est-il arrivé ?',
      ['Elle avait promis de rappeler mais ne l’a pas fait', 'Elle a rappelé plus tard', 'Elle a refusé de rappeler'], 0,
      'promised to call me back… but she never did = elle ne l’a jamais fait.', { d: 0.9 })
    .dictation('The minister refused to comment on the rumours.', 'refuse + to + base ; comment on = commenter.',
      { accepted: ['The minister refused to comment on the rumours.', 'The minister refused to comment on the rumors.'], d: 1.0 })
    .tr('Il a nié avoir menti.', ['He denied lying.', 'He denied having lied.', 'He denied that he had lied.', 'He denied that he lied.'],
      'deny + -ing (ou having + participe) ; nier avoir fait = deny doing.', { d: 1.3 })
    .tr('Elle m’a encouragé à postuler.', ['She encouraged me to apply.', 'She encouraged me to apply for it.', 'She encouraged me to apply for the job.'],
      'encourage + personne + to + base.', { d: 1.1 })
    .say('Il a insisté pour payer l’addition.', ['He insisted on paying the bill', 'He insisted on paying the check', 'He insisted on paying'],
      'insist on + -ing, et non « insist to pay ».', { d: 1.3 })
    .answer('Report something a friend or colleague told you recently. Use verbs like suggest, promise or warn.',
      'My colleague warned me not to sign the contract, and she suggested asking a lawyer for advice.',
      'Choisis un verbe introducteur précis et sa construction (warn sb not to, suggest + -ing…).',
      { keywords: [['suggested', 'promised', 'warned', 'advised', 'admitted', 'refused', 'offered', 'reminded', 'denied', 'agreed', 'encouraged', 'insisted']], minWords: 12, d: 1.4 })
    .build(),
};
