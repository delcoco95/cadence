import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const THIRD = 'b2.conditionals.third';
const MIXED = 'b2.conditionals.mixed';
const WISH = 'b2.wishes.wish_if_only';
const RATHER = 'b2.wishes.would_rather';

export const conditionalsUnit: Unit = {
  id: 'b2-conditionals',
  cefr: 'B2',
  title: 'Et si… ? Regrets et souhaits',
  description: 'Troisième conditionnel, conditionnels mixtes, wish, if only et would rather : imaginer un autre passé, exprimer regrets et préférences.',
  lessonIds: ['b2-conditionals-1', 'b2-conditionals-2'],
  canDo: [
    'Je peux imaginer ce qui se serait passé si les choses avaient été différentes, et ses conséquences aujourd’hui.',
    'Je peux exprimer un regret, un souhait ou une préférence avec wish, if only et would rather.',
  ],
};

export const conditionals1: Lesson = {
  id: 'b2-conditionals-1',
  cefr: 'B2',
  unitId: 'b2-conditionals',
  title: 'Troisième conditionnel et conditionnels mixtes',
  subtitle: 'Réécrire le passé',
  kcIds: [THIRD, MIXED],
  estMinutes: 8,
  explanation: [
    {
      title: 'Troisième conditionnel : un passé imaginaire',
      body: 'Pour une situation passée qui ne s’est PAS produite, et sa conséquence imaginaire, elle aussi passée.',
      table: [
        ['condition', 'if + past perfect', 'If I had known,'],
        ['conséquence', 'would / could / might have + participe passé', 'I would have called you.'],
      ],
      examples: [
        { en: 'If we had left earlier, we wouldn’t have missed the flight.', fr: 'Si nous étions partis plus tôt, nous n’aurions pas raté l’avion.' },
        { en: 'She might have got the job if she had prepared better.', fr: 'Elle aurait peut-être obtenu le poste si elle s’était mieux préparée.' },
      ],
      tip: 'Jamais de would après if : « If I would have known » ✗ → « If I had known » ✓. Dans « If I’d known, I’d have called », le premier ’d = had, le second = would.',
    },
    {
      title: 'Conditionnels mixtes',
      body: 'On mélange les époques quand la condition et la conséquence ne sont pas au même moment.',
      table: [
        ['passé → présent', 'If I had taken that job, I would be living in Paris now.'],
        ['présent → passé', 'If I weren’t so shy, I would have spoken to her.'],
      ],
      examples: [
        { en: 'If he hadn’t broken his leg, he would be playing tonight.', fr: 'S’il ne s’était pas cassé la jambe, il jouerait ce soir.' },
        { en: 'If I spoke Japanese, I would have understood the guide.', fr: 'Si je parlais japonais, j’aurais compris le guide.' },
      ],
      tip: 'Repère les marqueurs de temps : now, today, tonight dans la conséquence → would + base ; une caractéristique permanente dans la condition (shy, tall, speak Japanese) → past simple.',
    },
  ],
  exercises: exercises('b2-conditionals-1', 'B2', { kc: THIRD, tense: 'third_conditional' })
    .cloze('If we ___ earlier, we wouldn’t have missed the train.', ['had left'],
      'Condition passée irréelle → if + past perfect : had left.', { hint: 'leave', d: 0.9 })
    .cloze('If she had asked me, I ___ her.', ['would have helped'],
      'Conséquence passée imaginaire → would have + participe passé.', { hint: 'help', d: 0.9 })
    .mcq('If I ___ about the strike, I would have taken the car.', ['would have known', 'had known', 'have known'], 1,
      'Pas de would après if : if + past perfect → had known.', { d: 1.0 })
    .mcq('If I had studied medicine, I ___ a doctor now.', ['would have been', 'would be', 'had been'], 1,
      'Condition passée, conséquence présente (now) → conditionnel mixte : would be.', { kc: MIXED, d: 1.3 })
    .mcq('If he ___ so stubborn, he would have accepted our offer.', ['weren’t', 'wouldn’t be', 'won’t be'], 0,
      'Trait de caractère permanent (présent) → if + past simple ; conséquence passée → would have accepted.', { kc: MIXED, d: 1.5 })
    .type('Réécris au 3ᵉ conditionnel : « I didn’t see the sign, so I got lost. » (If I…)',
      ['If I had seen the sign, I wouldn’t have got lost.', 'If I had seen the sign, I wouldn’t have gotten lost.', 'If I had seen the sign, I would not have got lost.',
        'If I had seen the sign, I would not have gotten lost.', 'If I’d seen the sign, I wouldn’t have got lost.', 'I wouldn’t have got lost if I had seen the sign.'],
      'Les deux faits réels deviennent leur contraire : didn’t see → had seen, got lost → wouldn’t have got lost.', { d: 1.4 })
    .order('Si tu m’avais appelé, je serais venu te chercher.', 'If you had called me, I would have picked you up.',
      'if + past perfect, would have + participe. pick someone up = aller chercher quelqu’un.', { distractors: ['will', 'call'], d: 1.2 })
    .cloze('If I hadn’t accepted the promotion, I ___ so stressed now.', ['wouldn’t be', 'would not be'],
      'Condition passée, conséquence présente (now) → would + base : wouldn’t be.', { kc: MIXED, hint: 'not be', d: 1.4 })
    .listen('If the referee had seen the foul, we would have won the match.', 'Que s’est-il réellement passé ?',
      ['L’arbitre n’a pas vu la faute et ils n’ont pas gagné', 'L’arbitre a vu la faute et ils ont gagné', 'Le match a été annulé'], 0,
      'Le 3ᵉ conditionnel décrit l’inverse de la réalité : il n’a pas vu, ils n’ont pas gagné.', { d: 1.1 })
    .listen('If I’d taken that job in Singapore, I’d be earning twice as much now.', 'Quelle est la situation actuelle ?',
      ['Il n’a pas pris le poste et gagne moins', 'Il travaille à Singapour', 'Il va accepter le poste'], 0,
      'If I’d taken (had taken) → passé irréel ; I’d be earning now → conséquence présente.', { kc: MIXED, d: 1.4 })
    .dictation('We would have arrived on time if there hadn’t been so much traffic.', 'if there hadn’t been = s’il n’y avait pas eu.',
      { accepted: ['We would have arrived on time if there hadn’t been so much traffic.', 'We would have arrived on time if there had not been so much traffic.', 'We’d have arrived on time if there hadn’t been so much traffic.'], d: 1.2 })
    .tr('Si j’avais su, je ne serais pas {venu|venue}.',
      ['If I had known, I wouldn’t have come.', 'If I had known, I would not have come.', 'If I’d known, I wouldn’t have come.', 'Had I known, I wouldn’t have come.'],
      'Si + plus-que-parfait → if + past perfect ; conditionnel passé → would have + participe.', { d: 1.2 })
    .tr('Si elle avait fait plus attention, elle ne serait pas à l’hôpital maintenant.',
      ['If she had been more careful, she wouldn’t be in hospital now.', 'If she had been more careful, she would not be in hospital now.',
        'If she had been more careful, she wouldn’t be in the hospital now.', 'If she had paid more attention, she wouldn’t be in hospital now.',
        'If she had paid more attention, she would not be in hospital now.', 'If she had paid more attention, she wouldn’t be in the hospital now.',
        'If she had been more careful, she wouldn’t be in hospital right now.'],
      'Passé → présent (maintenant) : if + past perfect, would + base.', { kc: MIXED, d: 1.6 })
    .say('Si nous avions réservé, nous aurions eu une table.',
      ['If we had booked, we would have got a table', 'If we had booked, we would have had a table', 'If we had booked, we would have gotten a table',
        'If we’d booked, we’d have got a table', 'If we had made a reservation, we would have had a table'],
      'if + had booked, would have got / had.', { d: 1.3 })
    .answer('Think of an important decision in your life. What would have happened if you had chosen differently?',
      'If I had not moved to Lyon, I would never have met my partner and I would not have this job.',
      'Utilise if + past perfect, puis would have + participe (passé) ou would + base (présent).',
      { kc: [THIRD, MIXED], keywords: [['had'], ['would']], minWords: 14, d: 1.5 })
    .build(),
};

export const conditionals2: Lesson = {
  id: 'b2-conditionals-2',
  cefr: 'B2',
  unitId: 'b2-conditionals',
  title: 'wish, if only, would rather',
  subtitle: 'Regrets, souhaits et préférences',
  kcIds: [WISH, RATHER],
  estMinutes: 8,
  explanation: [
    {
      title: 'wish / if only : un temps « en arrière »',
      body: 'Après wish et if only, on recule d’un temps pour marquer l’irréel. If only est plus fort, plus émotionnel.',
      table: [
        ['souhait sur le présent', 'wish + past simple', 'I wish I had more time.'],
        ['regret sur le passé', 'wish + past perfect', 'I wish I hadn’t said that.'],
        ['agacement, envie que quelqu’un change', 'wish + would', 'I wish you would stop shouting.'],
      ],
      examples: [
        { en: 'I wish I were (was) taller.', fr: 'J’aimerais être plus grand.' },
        { en: 'If only we had left earlier!', fr: 'Si seulement nous étions partis plus tôt !' },
      ],
      tip: '« Je regrette de ne pas avoir… » se dit très naturellement I wish I had… On ne dit pas « I wish I will » : pour un futur possible, on emploie I hope.',
    },
    {
      title: 'would rather : préférer',
      table: [
        ['ma préférence', 'I’d rather + base', 'I’d rather stay in tonight.'],
        ['ce que je préfère que quelqu’un fasse', 'I’d rather + sujet + past simple', 'I’d rather you didn’t smoke here.'],
        ['comparaison', 'would rather A than B', 'I’d rather walk than wait for the bus.'],
      ],
      tip: 'Pas de « to » après would rather : « I’d rather to go » ✗ → « I’d rather go » ✓. Avec prefer, en revanche : I’d prefer to go.',
    },
  ],
  exercises: exercises('b2-conditionals-2', 'B2', { kc: WISH })
    .cloze('I wish I ___ more time to read, but work takes everything.', ['had'],
      'Souhait sur le présent → wish + past simple : had.', { hint: 'have', d: 0.9 })
    .cloze('I wish I ___ that email to my boss — it was a disaster.', ['hadn’t sent', 'had not sent'],
      'Regret sur un fait passé → wish + past perfect : hadn’t sent.', { hint: 'not send', d: 1.1 })
    .mcq('If only I ___ my umbrella this morning!', ['took', 'had taken', 'would take'], 1,
      'Regret sur le passé (this morning) → if only + past perfect.', { d: 1.0 })
    .mcq('I wish you ___ leaving your dirty socks on the floor. Please, just stop!', ['would stop', 'had stopped', 'will stop'], 0,
      'Agacement, on veut que l’autre change → wish + would.', { d: 1.2 })
    .mcq('I’d rather ___ at home tonight; I’m exhausted.', ['stay', 'to stay', 'staying'], 0,
      'would rather + base verbale, sans to.', { kc: RATHER, d: 0.8 })
    .mcq('I’d rather you ___ anyone about this yet.', ['don’t tell', 'didn’t tell', 'won’t tell'], 1,
      'would rather + autre sujet + past simple (sens présent) : didn’t tell.', { kc: RATHER, d: 1.3 })
    .order('J’aimerais être plus patient avec mes enfants.', 'I wish I were more patient with my children.',
      'wish + past simple ; were est la forme soignée pour toutes les personnes.', { distractors: ['will', 'am'], d: 1.1 })
    .mcq('Que reproche sa compagne à Tom ?',
      ['Il préfère se plaindre plutôt qu’agir', 'Il gagne trop peu d’argent', 'Il a trop écouté ses amis'], 0,
      '« My partner says I’d rather complain than do something about it » : would rather A than B.',
      {
        kc: [WISH, RATHER],
        d: 1.3,
        passage:
          'Dear Clare, Two years ago I turned down a place at an art school because my parents wanted me to study law. Now I’m a trainee lawyer and the salary is good, but I wish I had followed my instinct. If only I had been braver at eighteen! My partner says I’d rather complain than do something about it, and maybe she’s right. Is it too late to change direction? — Tom, 26',
      })
    .listen('I wish I’d listened to your advice. Now I’ve lost all my savings.', 'Que regrette-t-il ?',
      ['Ne pas avoir écouté le conseil', 'Avoir donné un mauvais conseil', 'Avoir trop économisé'], 0,
      'I wish I’d (had) listened = je regrette de ne pas avoir écouté.', { d: 1.0 })
    .listen('Would you mind if we ate in tonight? I’d rather not go out in this weather.', 'Que propose-t-elle ?',
      ['Manger à la maison', 'Sortir malgré le mauvais temps', 'Aller au cinéma'], 0,
      'eat in = manger chez soi ; I’d rather not go out = je préférerais ne pas sortir.', { kc: RATHER, d: 1.1 })
    .dictation('If only we had booked the tickets when they were still cheap.', 'If only + past perfect : regret.',
      { accepted: ['If only we had booked the tickets when they were still cheap.', 'If only we’d booked the tickets when they were still cheap.'], d: 1.1 })
    .tr('Je regrette de ne pas avoir appris le piano.',
      ['I wish I had learned the piano.', 'I wish I had learnt the piano.', 'I wish I’d learned the piano.', 'I wish I’d learnt the piano.',
        'I wish I had learned to play the piano.', 'I wish I had learnt to play the piano.', 'If only I had learned the piano.',
        'I regret not learning the piano.', 'I regret not having learned the piano.', 'I regret not learning to play the piano.'],
      'Regret sur le passé → I wish I had + participe (ou I regret not + -ing).', { d: 1.3 })
    .tr('Je préférerais que tu ne fumes pas dans la voiture.',
      ['I’d rather you didn’t smoke in the car.', 'I would rather you didn’t smoke in the car.', 'I would rather you did not smoke in the car.',
        'I’d prefer it if you didn’t smoke in the car.', 'I’d prefer you not to smoke in the car.', 'I would prefer you not to smoke in the car.'],
      'would rather + sujet + past simple : I’d rather you didn’t smoke.', { kc: RATHER, d: 1.4 })
    .say('J’aimerais habiter plus près de la mer.',
      ['I wish I lived closer to the sea', 'I wish I lived nearer the sea', 'I wish I lived nearer to the sea', 'I wish I lived closer to the coast', 'I would like to live closer to the sea'],
      'Souhait irréel sur le présent → I wish + past simple : lived.', { d: 1.1 })
    .answer('Is there anything you wish you had done differently when you were younger?',
      'I wish I had travelled more when I was a student, and I wish I had not wasted so much time.',
      'Exprime des regrets avec I wish / If only + past perfect.', { keywords: [['wish', 'if only'], ['had']], minWords: 12, d: 1.3 })
    .build(),
};
