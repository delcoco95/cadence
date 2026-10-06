import type { Lesson } from '../types';
import { exercises } from '../builders';

export const passive1: Lesson = {
  id: 'c1-passive-1',
  cefr: 'C1',
  unitId: 'c1-passive',
  title: 'Rapporter sans affirmer',
  subtitle: 'It is said that…, He is believed to have…, There are thought to be…',
  kcIds: ['c1.passive.reporting_it', 'c1.passive.reporting_personal'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Deux structures pour une même idée',
      body: 'La presse, les rapports et les textes académiques rapportent des informations sans les prendre à leur compte. Verbes typiques : say, believe, think, report, expect, know, consider, claim, allege, estimate, understand.',
      table: [
        ['It + be + participe + that…', 'It is believed that the suspect has left the country.'],
        ['Sujet + be + participe + to + infinitif', 'The suspect is believed to have left the country.'],
        ['There + be + participe + to be', 'There are thought to be over 200 species.'],
      ],
      examples: [
        { en: 'It is reported that two ministers have resigned.', fr: 'Deux ministres auraient démissionné.' },
        { en: 'The company is expected to announce job cuts.', fr: 'L’entreprise devrait annoncer des suppressions de postes.' },
      ],
      tip: 'Le conditionnel journalistique français (« le suspect aurait quitté le pays ») n’existe pas en anglais. « The suspect would have left » ✗ → The suspect is said / believed / reported to have left ✓.',
    },
    {
      title: 'Choisir le bon infinitif',
      table: [
        ['Simultané', 'He is said to live abroad.'],
        ['Antérieur', 'He is said to have lived abroad.'],
        ['En cours', 'She is reported to be negotiating.'],
        ['En cours, antérieur', 'They are thought to have been hiding.'],
        ['Futur / prévu', 'The plant is expected to close.'],
        ['Passif antérieur', 'The painting is believed to have been stolen.'],
      ],
      tip: 'Le verbe de rapport peut lui-même être au passé : It was thought that… / He was thought to be… Mais say ne s’emploie jamais à l’actif avec un infinitif : « They say him to be rich » ✗ → He is said to be rich ✓.',
    },
  ],
  exercises: exercises('c1-passive-1', 'C1', { kc: 'c1.passive.reporting_personal' })
    .mcq('The company is reported ___ record profits last year.', ['to have made', 'to make', 'making', 'that it made'], 0,
      'Action passée (last year) → infinitif passé : to have made.', { d: 2 })
    .mcq('___ that the new drug could reduce symptoms by half.', ['It is claimed', 'Is claimed', 'It is claim', 'There is claimed'], 0,
      'Le sujet « It » est obligatoire en anglais (pas de sujet vide), et claim prend la forme du participe : It is claimed that…',
      { kc: 'c1.passive.reporting_it', d: 1.9 })
    .cloze('The minister is thought ___ considering her resignation.', ['to be'],
      'Action en cours → infinitif progressif : to be considering.', { hint: 'be', d: 2.1 })
    .cloze('The painting is believed ___ stolen during the war.', ['to have been'],
      'Action passée ET passive → to have been + participe : to have been stolen.', { hint: 'have / be', d: 2.3 })
    .cloze('There ___ to be fewer than 500 of these birds left in the wild.', ['are estimated'],
      'There are estimated to be… = on estime qu’il reste… (accord avec « fewer than 500 birds »).', { hint: 'estimate, présent', d: 2.3 })
    .type('Réécris en commençant par « The CEO… » : It is said that the CEO earns ten times more than her predecessor.', [
      'The CEO is said to earn ten times more than her predecessor.',
    ], 'It is said that + sujet + verbe → Sujet + is said + to + base (simultané : to earn).', { loose: true, d: 2.3, instruction: 'Transforme la phrase.' })
    .type('Réécris en commençant par « It… » : The fire is thought to have started in the kitchen.', [
      'It is thought that the fire started in the kitchen.',
      'It is thought that the fire had started in the kitchen.',
      'It is thought the fire started in the kitchen.',
    ], 'to have started (antérieur) → that the fire started.', { kc: 'c1.passive.reporting_it', loose: true, d: 2.4, instruction: 'Transforme la phrase.' })
    .order('Le suspect aurait fui à l’étranger.', 'The suspect is believed to have fled abroad.',
      '« aurait fui » (rumeur) → is believed to have fled. Jamais « would have fled ».', { distractors: ['would'], d: 2.2 })
    .tr('L’entreprise aurait licencié deux cents salariés.', [
      'The company is said to have laid off two hundred employees.',
      'The company is reported to have laid off two hundred employees.',
      'The company is believed to have laid off two hundred employees.',
      'The company is said to have laid off 200 employees.',
      'The company is reported to have laid off 200 employees.',
      'The company is said to have laid off two hundred workers.',
      'The company is reported to have laid off 200 workers.',
      'The company is said to have laid off two hundred staff.',
      'The company is said to have made two hundred employees redundant.',
      'The company is reported to have made 200 employees redundant.',
      'The company is said to have dismissed two hundred employees.',
      'The company is said to have fired 200 employees.',
      'The company is reported to have fired two hundred employees.',
      'It is reported that the company laid off two hundred employees.',
      'It is said that the company has laid off 200 employees.',
    ], 'Conditionnel de rumeur → is said / reported to have + participe. « licencier » (économique) = lay off / make redundant.', { d: 2.4 })
    .tr('On estime que le projet coûtera trois millions d’euros.', [
      'It is estimated that the project will cost three million euros.',
      'It is estimated that the project will cost 3 million euros.',
      'It is estimated that the project will cost €3 million.',
      'It is estimated the project will cost three million euros.',
      'The project is estimated to cost three million euros.',
      'The project is estimated to cost 3 million euros.',
      'The project is estimated to cost €3 million.',
    ], '« On estime que » = It is estimated that… ou The project is estimated to cost… Attention : million reste au singulier après un nombre.', { kc: 'c1.passive.reporting_it', d: 2.2 })
    .mcq('How certain are the claims about the collector?', [
      'They are reported as hearsay, not confirmed fact',
      'They are presented as established and proven',
      'They come directly from the collector himself',
      'They have been disproved by the ink analysis',
    ], 0, '« is said to have bought » : l’auteur rapporte une information sans la garantir. Les structures en is said / is believed signalent une prise de distance.', {
      d: 2.5,
      passage: 'The ancient manuscript, which was discovered in a private library last spring, is now believed to have been copied by at least three different scribes. Initially, it was thought to date from the twelfth century, but recent analysis of the ink suggests it may be considerably older. The collector who owned it is said to have bought it at an auction in the 1970s for a modest sum, unaware of its significance. Experts are understood to be preparing a full catalogue, which is expected to be published next year.',
    })
    .listen('The two companies are understood to have been in talks for several months.', 'Qu’apprend-on ?', [
      'Les deux entreprises négocieraient depuis plusieurs mois',
      'Les deux entreprises ont rompu les négociations',
      'Les négociations commenceront dans quelques mois',
      'Les deux entreprises ont fusionné il y a plusieurs mois',
    ], 0, 'are understood to have been in talks = seraient en pourparlers (information non officielle).', { d: 2.3 })
    .dictation('It is widely believed that the decision was taken long before the vote.',
      'It is widely believed that… = beaucoup pensent que…', { kc: 'c1.passive.reporting_it', d: 2.1 })
    .say('On dit qu’elle parle six langues.', [
      'She is said to speak six languages',
      'She’s said to speak six languages',
      'It is said that she speaks six languages',
      'It is said she speaks six languages',
      'People say she speaks six languages',
      'They say she speaks six languages',
    ], 'She is said to speak… : structure personnelle, plus élégante que It is said that…', { d: 2.1 })
    .answer('Report a rumour or a piece of news you have heard recently, without claiming that it is certain.',
      'The new stadium is said to have cost twice the original budget, and it is believed that the mayor knew about the problem.',
      'Utilise is said / believed / thought / reported to… ou It is said that…', {
        keywords: [['is said', 'is believed', 'is thought', 'is reported', 'are said', 'are believed', 'are thought', 'are reported', 'is rumoured', 'is understood', 'is alleged'], ['to have', 'that', 'to be']],
        minWords: 12, d: 2.7,
      })
    .build(),
};

export const passive2: Lesson = {
  id: 'c1-passive-2',
  cefr: 'C1',
  unitId: 'c1-passive',
  title: 'Passif avancé et « faire faire »',
  subtitle: 'should have been done, being done, have something done',
  kcIds: ['c1.passive.advanced_forms', 'c1.passive.causative'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le passif à toutes les formes',
      table: [
        ['Modal parfait', 'The error should have been spotted earlier.'],
        ['Progressif', 'The bridge is being repaired.'],
        ['Gérondif passif', 'Nobody likes being criticised in public.'],
        ['Infinitif passif', 'The form needs to be signed.'],
        ['Infinitif passé passif', 'She was relieved to have been chosen.'],
        ['Passif en get (oral, souvent négatif ou inattendu)', 'He got fired last week.'],
      ],
      examples: [
        { en: 'The figures must have been altered.', fr: 'Les chiffres ont dû être modifiés.' },
        { en: 'I hate being kept waiting.', fr: 'Je déteste qu’on me fasse attendre.' },
      ],
      tip: 'Après une préposition ou un verbe comme avoid, enjoy, mind, resent → gérondif passif : I don’t mind being contacted, pas « to be contacted ».',
    },
    {
      title: 'Faire faire : have / get something done',
      table: [
        ['have + objet + participe', 'We’re having the office redecorated.'],
        ['get + objet + participe (plus courant à l’oral)', 'I need to get my laptop repaired.'],
        ['Expérience subie', 'She had her bag stolen on the train.'],
        ['need + -ing (= need to be done)', 'The windows need cleaning.'],
      ],
      examples: [
        { en: 'We had the contract checked by a lawyer.', fr: 'Nous avons fait vérifier le contrat par un avocat.' },
      ],
      tip: '« Je me suis fait couper les cheveux » = I had / got my hair cut. « I cut my hair » signifie que tu t’es coupé les cheveux toi-même ! Et « faire + infinitif » ne se traduit pas par make dans ce sens : « I made repair my car » ✗.',
    },
  ],
  exercises: exercises('c1-passive-2', 'C1', { kc: 'c1.passive.advanced_forms' })
    .mcq('These figures ___ before they were sent to the press.', ['should have been checked', 'should have checked', 'should be checking', 'should had been checked'], 0,
      'Reproche sur le passé + sens passif → should have been + participe.', { d: 2 })
    .mcq('I really resent ___ like a child by my manager.', ['being treated', 'to be treated', 'treating', 'be treated'], 0,
      'resent + gérondif ; sens passif → being treated.', { d: 2.1 })
    .cloze('The new terminal ___ at the moment, so expect delays.', ['is being built'],
      'Action en cours + passif → is being + participe.', { hint: 'build', d: 1.9 })
    .cloze('She was furious at ___ out of the decision-making process.', ['being left', 'having been left'],
      'Après une préposition (at) → gérondif passif : being left (ou having been left pour insister sur l’antériorité).', { hint: 'leave', d: 2.3 })
    .cloze('We’re ___ the whole system upgraded next month.', ['having', 'getting'],
      'have / get + objet + participe = faire faire.', { kc: 'c1.passive.causative', d: 1.9 })
    .cloze('My neighbour had his car ___ outside his own house.', ['stolen'],
      'have something done peut décrire une expérience subie : he had his car stolen = on lui a volé sa voiture.', { kc: 'c1.passive.causative', hint: 'steal', d: 1.9 })
    .type('Réécris avec « need » + -ing : The report needs to be proofread before Friday.', [
      'The report needs proofreading before Friday.',
      'The report needs proof-reading before Friday.',
    ], 'need to be done = need doing (sens passif, très britannique).', { kc: 'c1.passive.causative', loose: true, d: 2.4, instruction: 'Transforme la phrase.' })
    .order('Le contrat aurait dû être signé la semaine dernière.', 'The contract should have been signed last week.',
      'should have been + participe passé.', { distractors: ['be'], d: 2 })
    .tr('Je me suis fait voler mon portefeuille dans le métro.', [
      'I had my wallet stolen on the metro.',
      'I had my wallet stolen in the metro.',
      'I had my wallet stolen on the underground.',
      'I had my wallet stolen on the tube.',
      'I had my wallet stolen on the subway.',
      'I got my wallet stolen on the metro.',
      'My wallet was stolen on the metro.',
      'My wallet was stolen on the underground.',
      'My wallet was stolen on the subway.',
      'My wallet got stolen on the metro.',
    ], 'have + objet + participe pour une expérience subie : I had my wallet stolen.', { kc: 'c1.passive.causative', d: 2.2 })
    .tr('Cette question aurait dû être réglée depuis longtemps.', [
      'This issue should have been resolved long ago.',
      'This issue should have been settled long ago.',
      'This issue should have been dealt with long ago.',
      'This issue should have been resolved a long time ago.',
      'This issue should have been settled a long time ago.',
      'This issue ought to have been resolved long ago.',
      'This question should have been resolved long ago.',
      'This question should have been settled long ago.',
      'This matter should have been resolved long ago.',
      'This matter should have been settled long ago.',
    ], 'should have been + participe. « une question à régler » = an issue / a matter (question = interrogation, moins naturel ici).', { d: 2.3 })
    .mcq('What are employees asked to do?', [
      'Make sure valuables are taken away before the works',
      'Contact staff who will be relocated',
      'Repair any damage on the third floor',
      'Stay away from the office for two weeks',
    ], 0, '« we ask you to have anything valuable removed by Thursday » : faire enlever les objets de valeur avant jeudi.', {
      d: 2.2,
      passage: 'Dear all, As you may have heard, the third floor is being refurbished over the next fortnight. Staff who are affected have already been contacted and will be relocated temporarily. Please note that belongings left on desks cannot be guaranteed to be kept safe, so we ask you to have anything valuable removed by Thursday. Any damage that is found to have been caused before the works began should be reported to Facilities immediately.',
    })
    .listen('The meeting room is being cleaned, so we’ll have to meet in the cafeteria.', 'Pourquoi change-t-on de salle ?', [
      'La salle de réunion est en train d’être nettoyée',
      'La salle de réunion a été louée',
      'La cafétéria est plus grande',
      'La salle de réunion est en travaux depuis des mois',
    ], 0, 'is being cleaned = est en train d’être nettoyée (passif progressif).', { d: 1.9 })
    .dictation('We had the documents translated by a professional agency.',
      'have + objet + participe (+ by…) = faire traduire.', { kc: 'c1.passive.causative', d: 2 })
    .say('Je dois faire réparer mon ordinateur.', [
      'I need to get my computer repaired',
      'I need to have my computer repaired',
      'I have to get my computer repaired',
      'I have to have my computer repaired',
      'I must get my computer repaired',
      'I need to get my computer fixed',
      'I need to have my computer fixed',
      'I have to get my computer fixed',
      'I need to get my laptop repaired',
      'My computer needs repairing',
      'My computer needs to be repaired',
    ], 'get / have + objet + participe : get my computer repaired.', { kc: 'c1.passive.causative', d: 2.1 })
    .answer('What services do you pay other people to do for you? Use “have / get something done”.',
      'I usually have my car serviced once a year, and I get my hair cut every month at a salon near my office.',
      'Utilise have / get + objet + participe passé (cut, serviced, repaired, cleaned…).', {
        kc: 'c1.passive.causative',
        keywords: [['have', 'get', 'had', 'got'], ['done', 'cut', 'serviced', 'repaired', 'cleaned', 'fixed', 'delivered', 'checked', 'painted', 'ironed']],
        minWords: 12, d: 2.5,
      })
    .build(),
};
