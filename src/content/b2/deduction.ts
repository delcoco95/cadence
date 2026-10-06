import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const D = 'b2.modals.past_deduction';
const S = 'b2.modals.past_speculation';
const CRIT = 'b2.modals.past_criticism';
const N = 'b2.modals.needn_have';

export const deductionUnit: Unit = {
  id: 'b2-deduction',
  cefr: 'B2',
  title: 'Déductions et regrets au passé',
  description: 'must have, can’t have, might have, should have, could have, needn’t have : déduire, faire des hypothèses et des reproches sur le passé.',
  lessonIds: ['b2-deduction-1', 'b2-deduction-2'],
  canDo: [
    'Je peux faire des déductions et des hypothèses sur ce qui s’est probablement passé.',
    'Je peux exprimer un reproche, un regret ou dire qu’une action passée n’était pas nécessaire.',
  ],
};

export const deduction1: Lesson = {
  id: 'b2-deduction-1',
  cefr: 'B2',
  unitId: 'b2-deduction',
  title: 'must have, can’t have, might have',
  subtitle: 'Déduire et supposer ce qui s’est passé',
  kcIds: [D, S],
  estMinutes: 8,
  explanation: [
    {
      title: 'Modal + have + participe passé',
      body: 'Pour parler du passé avec un degré de certitude, on garde le modal et on ajoute have + participe passé.',
      table: [
        ['presque sûr que oui', 'must have done', 'She must have left already.'],
        ['peut-être', 'might / may / could have done', 'He might have missed the bus.'],
        ['peut-être pas', 'might not / may not have done', 'They may not have seen us.'],
        ['presque sûr que non (impossible)', 'can’t / couldn’t have done', 'You can’t have seen him: he was abroad.'],
      ],
      examples: [
        { en: 'The roads are white. It must have snowed during the night.', fr: 'Les routes sont blanches. Il a dû neiger pendant la nuit.' },
        { en: 'I can’t find my keys. I might have left them at work.', fr: 'Je ne trouve pas mes clés. Je les ai peut-être laissées au travail.' },
        { en: 'He must have been sleeping when you called.', fr: 'Il devait dormir quand tu as appelé.' },
      ],
      tip: 'Le contraire de must have n’est pas « mustn’t have » ✗ mais can’t have ✓. Et attention à « il a dû » : déduction → He must have forgotten ; obligation → He had to leave.',
    },
  ],
  exercises: exercises('b2-deduction-1', 'B2', { kc: D, tense: 'past_modal' })
    .cloze('The lights are off and nobody’s answering. They ___ out.', ['must have gone'],
      'Déduction quasi certaine sur le passé → must have + participe (go, went, gone).', { hint: 'go', d: 1.0 })
    .cloze('You ___ him at the party — he was in Tokyo that week!', ['can’t have seen', 'cannot have seen', 'couldn’t have seen', 'could not have seen'],
      'Impossibilité logique sur le passé → can’t have seen.', { hint: 'not see', d: 1.2 })
    .mcq('Il a dû oublier notre rendez-vous. (déduction)', ['He must have forgotten our appointment.', 'He had to forget our appointment.', 'He must forget our appointment.'], 0,
      'Déduction sur le passé → must have + participe. had to = obligation, hors sujet ici.', { d: 1.0 })
    .mcq('I’m not sure why she didn’t come. She ___ been ill.', ['must have', 'might have', 'can’t have'], 1,
      '« I’m not sure » → simple possibilité : might have.', { kc: S, d: 1.0 })
    .mcq('The ground is completely dry. It ___ last night.', ['can’t have rained', 'mustn’t have rained', 'might rain'], 0,
      'Le contraire de must have est can’t have. « mustn’t have » n’exprime pas la déduction.', { d: 1.2 })
    .cloze('I can’t find my wallet. I ___ it on the bus.', ['might have left', 'may have left', 'could have left', 'must have left'],
      'Hypothèse sur le passé → might / may / could have left.', { kc: S, hint: 'leave', d: 1.0 })
    .type('Déduis : « I’m sure he was very tired after the marathon. » (He must…)', ['He must have been very tired after the marathon.'],
      'I’m sure + passé → must have been.', { d: 1.1 })
    .order('Elle n’a peut-être pas reçu mon message.', 'She might not have received my message.',
      'might not have + participe : peut-être pas.', { kc: S, distractors: ['did', 'receive'], d: 1.2 })
    .listen('Look at the state of this kitchen! The kids must have had a party while we were away.', 'Que suppose le parent ?',
      ['Les enfants ont sûrement fait une fête', 'Les enfants ont rangé la cuisine', 'Les enfants sont partis en vacances'], 0,
      'must have had a party = ont sûrement fait une fête.', { d: 1.0 })
    .listen('I’m not sure who sent the flowers. It could have been my neighbour.', 'Qui a envoyé les fleurs ?',
      ['On ne sait pas, peut-être le voisin', 'Le voisin, c’est certain', 'Certainement pas le voisin'], 0,
      'could have been = peut-être, sans certitude.', { kc: S, d: 1.1 })
    .dictation('He can’t have finished already; he only started ten minutes ago.', 'can’t have finished = impossible qu’il ait fini.',
      { accepted: ['He can’t have finished already; he only started ten minutes ago.', 'He cannot have finished already; he only started ten minutes ago.', 'He can’t have finished already; he only started 10 minutes ago.'], d: 1.2 })
    .tr('Ils ont dû se perdre.', ['They must have got lost.', 'They must have gotten lost.', 'They must have lost their way.'],
      'Déduction → must have + participe. se perdre = get lost.', { d: 1.1 })
    .tr('Elle a peut-être raté son train.',
      ['She might have missed her train.', 'She may have missed her train.', 'She could have missed her train.', 'She might have missed the train.',
        'She may have missed the train.', 'She could have missed the train.', 'Maybe she missed her train.', 'Perhaps she missed her train.', 'Maybe she missed the train.'],
      'peut-être + passé → might / may / could have + participe.', { kc: S, d: 1.0 })
    .say('Ça ne peut pas être lui : il était avec moi.', ['It can’t have been him, he was with me', 'It cannot have been him, he was with me', 'It couldn’t have been him, he was with me'],
      'Impossibilité sur le passé → can’t have been.', { d: 1.4 })
    .answer('Your colleague hasn’t arrived and isn’t answering her phone. What might have happened?',
      'She might have overslept, or she may have had a problem with her car on the way.',
      'Propose plusieurs hypothèses avec might / may / could have + participe.',
      { kc: [S, D], keywords: [['might have', 'may have', 'could have', 'must have']], minWords: 12, d: 1.3 })
    .build(),
};

const REVIEW =
  'Rating: 2/5 — Disappointing weekend. We booked this hotel for its sea view, but our room overlooked the car park. The receptionist said we should have asked for a sea-view room when booking, but the website never mentioned that there were different types of room! The breakfast was fine, although we needn’t have paid extra for it, as it turned out to be included in our rate. The staff could have been more helpful when the air conditioning broke. We won’t be coming back.';

export const deduction2: Lesson = {
  id: 'b2-deduction-2',
  cefr: 'B2',
  unitId: 'b2-deduction',
  title: 'should have, could have, needn’t have',
  subtitle: 'Reproches, regrets et efforts inutiles',
  kcIds: [CRIT, N],
  estMinutes: 8,
  explanation: [
    {
      title: 'Reproche et regret',
      table: [
        ['ce qui aurait été bien (pas fait)', 'should / ought to have done', 'You should have called me.'],
        ['ce qui n’aurait pas dû arriver', 'shouldn’t have done', 'I shouldn’t have said that.'],
        ['possibilité non saisie, reproche', 'could have done', 'You could have told me!'],
      ],
      examples: [
        { en: 'We should have booked a table.', fr: 'Nous aurions dû réserver une table.' },
        { en: 'She could have been a great pianist.', fr: 'Elle aurait pu être une grande pianiste.' },
      ],
      tip: '« J’aurais dû » = I should have + participe passé. Jamais « I would have must » ✗ ni « I should had » ✗.',
    },
    {
      title: 'needn’t have ou didn’t need to ?',
      table: [
        ['needn’t have done', 'je l’ai fait, mais c’était inutile', 'I needn’t have cooked: they had already eaten.'],
        ['didn’t need to do', 'ce n’était pas nécessaire (en général, pas fait)', 'I didn’t need to cook: we ate out.'],
      ],
      tip: 'Avec needn’t have, l’action a bien eu lieu, pour rien. Le français « ce n’était pas la peine de… » correspond souvent à needn’t have.',
    },
  ],
  exercises: exercises('b2-deduction-2', 'B2', { kc: CRIT, tense: 'past_modal' })
    .cloze('I feel terrible. I ___ so much at the party last night.', ['shouldn’t have drunk', 'should not have drunk'],
      'Regret sur une action passée → shouldn’t have + participe (drink, drank, drunk).', { hint: 'not drink', d: 1.1 })
    .cloze('You ___ me you were coming! I would have cooked something.', ['should have told', 'could have told'],
      'Reproche : should / could have told = tu aurais dû / pu me le dire.', { hint: 'tell', d: 1.0 })
    .mcq('I ___ taken an umbrella — it didn’t rain at all. (Je l’ai pris pour rien.)', ['needn’t have', 'didn’t need to', 'mustn’t have'], 0,
      'Action faite mais inutile → needn’t have + participe.', { kc: N, d: 1.3 })
    .mcq('The hotel provided towels, so we ___ our own. (Nous n’en avons donc pas apporté.)', ['didn’t need to bring', 'needn’t have brought', 'mustn’t bring'], 0,
      'Pas nécessaire, et pas fait → didn’t need to bring. needn’t have brought signifierait qu’on les a apportées pour rien.', { kc: N, d: 1.4 })
    .cloze('You ___ so early — the meeting has been postponed. (Tu es venu tôt pour rien.)', ['needn’t have come', 'need not have come'],
      'Tu es venu, inutilement → needn’t have come.', { kc: N, hint: 'not need + come', d: 1.4 })
    .type('Exprime un reproche : « You didn’t check the address. » (You should…)', ['You should have checked the address.', 'You ought to have checked the address.'],
      'Reproche sur le passé → should have + participe.', { d: 1.0 })
    .order('Tu n’aurais pas dû lui dire la vérité.', 'You shouldn’t have told him the truth.',
      'shouldn’t have + participe passé (tell, told, told).', { distractors: ['tell', 'wouldn’t'], d: 1.1 })
    .mcq('Pourquoi le client n’aurait-il pas dû payer le petit-déjeuner en plus ?',
      ['Il était déjà compris dans le tarif', 'Il était de mauvaise qualité', 'Il n’a pas pu le prendre'], 0,
      '« we needn’t have paid extra for it, as it turned out to be included in our rate » : payé, mais inutilement.', { kc: N, d: 1.4, passage: REVIEW })
    .mcq('Selon la réception, qu’aurait dû faire le client ?',
      ['Demander une chambre avec vue sur la mer à la réservation', 'Réserver sur un autre site', 'Se plaindre de la climatisation plus tôt'], 0,
      '« we should have asked for a sea-view room when booking » : reproche avec should have.', { d: 1.3, passage: REVIEW })
    .listen('You really shouldn’t have bought me such an expensive present!', 'Que ressent la personne ?',
      ['Elle est touchée mais trouve le cadeau trop cher', 'Elle est fâchée de ne pas avoir reçu de cadeau', 'Elle veut échanger le cadeau'], 0,
      'You shouldn’t have! : formule polie de remerciement, « il ne fallait pas ».', { d: 1.2 })
    .dictation('They should have warned us that the road was closed.', 'should have warned = auraient dû nous prévenir.', { d: 1.0 })
    .tr('Nous aurions pu prendre le train, c’était moins cher.',
      ['We could have taken the train, it was cheaper.', 'We could have gone by train, it was cheaper.', 'We could have taken the train because it was cheaper.',
        'We could have taken the train, it was less expensive.', 'We could have taken the train, which was cheaper.'],
      'Possibilité non saisie → could have + participe (take, took, taken).', { d: 1.2 })
    .tr('Ce n’était pas la peine d’acheter du pain, j’en avais déjà.',
      ['You needn’t have bought bread, I already had some.', 'You need not have bought bread, I already had some.', 'You needn’t have bought any bread, I already had some.',
        'You needn’t have bought bread, I had some already.', 'You didn’t need to buy bread, I already had some.', 'You didn’t need to buy any bread, I already had some.'],
      'Le pain a été acheté pour rien → needn’t have bought.', { kc: N, d: 1.5 })
    .say('J’aurais dû partir plus tôt.', ['I should have left earlier', 'I ought to have left earlier', 'I should have gone earlier'],
      'Regret → should have + participe (leave, left, left).', { d: 1.0 })
    .answer('Think of a mistake you made recently. What should you have done differently?',
      'I should have prepared my presentation earlier, and I shouldn’t have stayed up so late the night before.',
      'Utilise should have / shouldn’t have + participe passé.',
      { keywords: [['should have', 'should not have', 'ought to have', 'could have']], minWords: 12, d: 1.3 })
    .build(),
};
