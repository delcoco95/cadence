import type { Lesson } from '../types';
import { exercises } from '../builders';

export const modality1: Lesson = {
  id: 'c1-modality-1',
  cefr: 'C1',
  unitId: 'c1-modality',
  title: 'Modaux au passé et attentes',
  subtitle: 'needn’t have, must have, should have, be bound to, would rather',
  kcIds: ['c1.modal.need_past', 'c1.modal.deduction_past', 'c1.modal.expectation'],
  estMinutes: 12,
  explanation: [
    {
      title: 'needn’t have ou didn’t need to ?',
      table: [
        ['needn’t have + participe', 'action faite, mais inutile : I needn’t have cooked; they had already eaten.'],
        ['didn’t need to + base', 'pas nécessaire (souvent : donc pas fait) : I didn’t need to cook, so I relaxed.'],
      ],
      examples: [
        { en: 'You needn’t have paid for me.', fr: 'Ce n’était pas la peine de payer pour moi (tu l’as fait).' },
        { en: 'We didn’t need to queue because we had tickets.', fr: 'Nous n’avons pas eu besoin de faire la queue, nous avions des billets.' },
      ],
      tip: '« Ce n’était pas la peine que je me dépêche » (je me suis dépêché pour rien) → I needn’t have hurried. Seule cette forme dit clairement que l’action a eu lieu.',
    },
    {
      title: 'Déduire et regretter le passé',
      table: [
        ['must have + participe', 'quasi-certitude : She must have missed the train.'],
        ['can’t / couldn’t have + participe', 'impossibilité : He can’t have seen us.'],
        ['might / may / could have + participe', 'possibilité : They might have got lost.'],
        ['could have + participe', 'possibilité non réalisée, reproche : You could have warned me!'],
        ['should / ought to have + participe', 'regret, reproche : We should have booked earlier.'],
      ],
      tip: '« Il a dû partir » est ambigu en français : obligation (He had to leave) ou déduction (He must have left). Choisis selon le sens ! Et « mustn’t have » n’exprime pas l’impossibilité : on dit can’t have.',
    },
    {
      title: 'Attentes et préférences',
      table: [
        ['be supposed to', 'ce qui est prévu ou exigé : The train was supposed to arrive at 9.'],
        ['be bound to', 'quasi-certitude : Prices are bound to rise.'],
        ['would rather + base', 'préférence pour soi : I’d rather stay in tonight.'],
        ['would rather + sujet + prétérit', 'préférence sur autrui : I’d rather you didn’t smoke here.'],
      ],
      tip: '« Je préférerais que tu viennes » = I’d rather you came : prétérit (I’d rather you come se rencontre en anglais américain). Jamais « I’d rather that you will come ».',
    },
  ],
  exercises: exercises('c1-modality-1', 'C1', { kc: 'c1.modal.deduction_past' })
    .mcq('We ___ so much food; only half the guests turned up.', ['needn’t have bought', 'needn’t buy', 'mustn’t have bought', 'couldn’t have bought'], 0,
      'Achat fait, mais inutile → needn’t have bought.', { kc: 'c1.modal.need_past', d: 2 })
    .cloze('She ___ the email; she replied to it within minutes.', ['must have received'],
      'Déduction quasi certaine sur le passé → must have + participe.', { hint: 'receive', d: 2 })
    .cloze('You ___ brought a gift, but it’s very kind of you.', ['needn’t have', 'need not have'],
      'Le cadeau a été apporté, alors que ce n’était pas nécessaire → needn’t have.', { kc: 'c1.modal.need_past', d: 2.1 })
    .cloze('You’re ___ to wear a badge at all times in this building.', ['supposed', 'meant', 'required', 'expected'],
      'be supposed to = être censé, règle à respecter.', { kc: 'c1.modal.expectation', d: 1.9 })
    .cloze('With so many delays, the project is ___ to go over budget.', ['bound', 'sure', 'certain'],
      'be bound to = c’est sûr que, c’est inévitable.', { kc: 'c1.modal.expectation', hint: 'certitude', d: 2 })
    .cloze('I’d rather you ___ the meeting to next week, if that’s possible.', ['moved'],
      'would rather + autre sujet + prétérit : I’d rather you moved…', { kc: 'c1.modal.expectation', hint: 'move', d: 2.2 })
    .type('Réécris avec « needn’t » (le parapluie a bien été apporté) : It wasn’t necessary for me to bring an umbrella, it was sunny all day.', [
      'I needn’t have brought an umbrella, it was sunny all day.',
      'I need not have brought an umbrella, it was sunny all day.',
      'I needn’t have brought an umbrella because it was sunny all day.',
      'I needn’t have brought an umbrella as it was sunny all day.',
    ], 'Action faite mais inutile → needn’t have + participe passé (brought).', { kc: 'c1.modal.need_past', loose: true, d: 2.2, instruction: 'Transforme la phrase.' })
    .order('Tu aurais pu me prévenir !', 'You could have warned me!',
      'could have + participe = reproche sur une possibilité non utilisée.', { distractors: ['warn', 'must'], d: 1.9 })
    .tr('Il a dû oublier notre rendez-vous.', [
      'He must have forgotten our appointment.',
      'He must have forgotten our meeting.',
      'He must have forgotten about our appointment.',
      'He must have forgotten about our meeting.',
      'He must’ve forgotten our appointment.',
      'He must have forgotten our date.',
    ], 'Ici « a dû » = déduction → must have forgotten (et non had to forget).', { d: 2 })
    .tr('Je préférerais que tu ne le dises à personne.', [
      'I would rather you didn’t tell anyone.',
      'I’d rather you didn’t tell anyone.',
      'I would rather you did not tell anyone.',
      'I’d rather you didn’t tell anybody.',
      'I’d rather you told nobody.',
      'I would rather you told no one.',
      'I’d rather you didn’t say anything to anyone.',
      'I’d rather you not tell anyone.',
      'I would prefer you not to tell anyone.',
      'I’d prefer you not to tell anyone.',
      'I’d prefer it if you didn’t tell anyone.',
      'I would prefer it if you did not tell anyone.',
      'I’d prefer you didn’t tell anyone.',
    ], 'would rather + sujet + prétérit (didn’t tell). Avec prefer : prefer you not to tell / prefer it if you didn’t tell.', { kc: 'c1.modal.expectation', d: 2.3 })
    .mcq('What does the passage imply about the organisers’ reaction?', [
      'Their worry turned out to be unnecessary',
      'They were right to cancel the talk',
      'They had forgotten to book a room',
      'They blamed the speaker for being late',
    ], 0, '« The organisers needn’t have panicked » : ils ont paniqué pour rien.', {
      kc: 'c1.modal.need_past',
      d: 2.3,
      passage: 'The keynote speaker was supposed to arrive at nine, but by half past there was still no sign of her. Someone suggested she must have got stuck in traffic; another pointed out that she couldn’t have, since she was staying at the hotel next door. In the end, it turned out she had been waiting in the wrong conference room for forty minutes. The organisers needn’t have panicked: the talk started late, but nobody seemed to mind.',
    })
    .listen('You were supposed to send the invoice on Monday, and it’s already Thursday.', 'Quel est le problème ?', [
      'La facture aurait dû être envoyée lundi',
      'La facture a été envoyée deux fois',
      'La facture doit être envoyée jeudi prochain',
      'Il n’y a pas de facture à envoyer',
    ], 0, 'were supposed to = étais censé (et ne l’as pas fait).', { kc: 'c1.modal.expectation', d: 2 })
    .dictation('They can’t have left yet; their coats are still here.',
      'can’t have + participe = impossibilité logique sur le passé.', { d: 2.1 })
    .say('Nous aurions dû réserver plus tôt.', [
      'We should have booked earlier',
      'We should have booked sooner',
      'We should’ve booked earlier',
      'We ought to have booked earlier',
      'We should have made a reservation earlier',
      'We should have reserved earlier',
    ], 'Regret → should have + participe. « réserver » = book (plus courant que reserve).', { d: 2 })
    .answer('Think of a time when something went wrong. What should you have done differently? What could have happened?',
      'I should have checked the address before leaving, because I might have missed the interview if a stranger had not helped me.',
      'Combine should have (regret) et might / could / must have (possibilité, déduction).',
      { keywords: [['should have', 'ought to have'], ['could have', 'might have', 'must have', 'may have']], minWords: 14, d: 2.7 })
    .build(),
};

export const modality2: Lesson = {
  id: 'c1-modality-2',
  cefr: 'C1',
  unitId: 'c1-modality',
  title: 'Nuancer son propos (hedging)',
  subtitle: 'It would appear that…, tend to, arguably, to some extent',
  kcIds: ['c1.hedging.verbs', 'c1.hedging.adverbs'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Pourquoi nuancer ?',
      body: 'En anglais académique et professionnel, une affirmation trop catégorique passe pour arrogante ou peu rigoureuse. On « hedge » : on atténue pour rester exact.',
      table: [
        ['It would appear / seem that…', 'It would appear that the figures were incorrect.'],
        ['seem / appear + to (have)', 'The policy appears to have backfired.'],
        ['tend to + base', 'Older users tend to prefer email.'],
        ['may well / could well', 'Demand may well recover next year.'],
        ['be likely / unlikely to', 'The bill is unlikely to pass.'],
      ],
      examples: [
        { en: 'The results would seem to confirm our hypothesis.', fr: 'Les résultats sembleraient confirmer notre hypothèse.' },
      ],
    },
    {
      title: 'Adverbes et expressions',
      table: [
        ['arguably', 'on peut soutenir que, sans doute'],
        ['to some extent / to a certain degree', 'dans une certaine mesure'],
        ['presumably', 'vraisemblablement, je suppose'],
        ['relatively / somewhat / fairly', 'relativement, quelque peu, assez'],
        ['There is some evidence that…', 'certains éléments indiquent que…'],
      ],
      examples: [
        { en: 'This is arguably her best film.', fr: 'C’est sans doute son meilleur film.' },
      ],
      tip: 'Faux amis : « sans doute » = probably / arguably (sans aucun doute = undoubtedly) ; « eventually » = finalement (éventuellement = possibly) ; « actually » = en fait (actuellement = currently). « likely » est un adjectif : He is likely to come (britannique) ; He will likely come est surtout américain.',
    },
  ],
  exercises: exercises('c1-modality-2', 'C1', { kc: 'c1.hedging.verbs' })
    .mcq('The new policy ___ to have had little effect on unemployment.', ['appears', 'is appearing', 'appear', 'is appeared'], 0,
      'appear + to have + participe : sembler avoir…', { d: 1.9 })
    .mcq('This is ___ the most important novel of the decade, although not everyone would agree.', ['arguably', 'eventually', 'actually', 'undoubtedly'], 0,
      'arguably = on peut soutenir que. undoubtedly contredirait « not everyone would agree » ; eventually et actually sont des faux amis.', { kc: 'c1.hedging.adverbs', d: 2 })
    .cloze('It would ___ that the meeting has been postponed; nobody has turned up.', ['appear', 'seem'],
      'It would appear / seem that… : déduction prudente.', { d: 2 })
    .cloze('Sales may ___ pick up again after the summer.', ['well'],
      'may well = il est fort possible que.', { hint: 'renforce may', d: 2.2 })
    .cloze('The plan is, to some ___, a step in the right direction.', ['extent', 'degree'],
      'to some extent = dans une certaine mesure.', { kc: 'c1.hedging.adverbs', d: 2 })
    .type('Atténue l’affirmation avec « appear » : The company has lost interest in the project.', [
      'The company appears to have lost interest in the project.',
      'The company would appear to have lost interest in the project.',
      'It appears that the company has lost interest in the project.',
      'It would appear that the company has lost interest in the project.',
    ], 'appear + to have + participe (action passée) ou It appears that…', { loose: true, d: 2.4, instruction: 'Transforme la phrase.' })
    .type('Atténue avec « likely » : The price of energy will rise next winter.', [
      'The price of energy is likely to rise next winter.',
      'Energy prices are likely to rise next winter.',
      'It is likely that the price of energy will rise next winter.',
      'The price of energy will likely rise next winter.',
    ], 'be likely to + base : est susceptible de, va probablement.', { kc: 'c1.hedging.adverbs', loose: true, d: 2.2, instruction: 'Transforme la phrase.' })
    .order('Ces résultats semblent confirmer notre hypothèse.', 'These results seem to confirm our hypothesis.',
      'seem + to + base.', { distractors: ['are', 'confirming'], d: 1.9 })
    .tr('Cette méthode est sans doute plus efficace, mais elle coûte plus cher.', [
      'This method is probably more effective, but it costs more.',
      'This method is probably more efficient, but it costs more.',
      'This method is arguably more effective, but it costs more.',
      'This method is arguably more efficient, but it costs more.',
      'This method is probably more effective, but it is more expensive.',
      'This method is probably more efficient, but it is more expensive.',
      'This method is arguably more effective, but it is more expensive.',
      'This method is arguably more efficient, but it is more expensive.',
      'This method is probably more effective but more expensive.',
      'This method is probably more efficient but more expensive.',
      'This method is no doubt more effective, but it is more expensive.',
      'This method is no doubt more efficient, but it costs more.',
      'This method is likely more effective, but it costs more.',
      'This approach is probably more effective, but it costs more.',
    ], '« sans doute » = probably / arguably, pas « without doubt » (= sans aucun doute).', { kc: 'c1.hedging.adverbs', d: 2.4 })
    .tr('Il semblerait que le logiciel contienne une erreur.', [
      'It would seem that the software contains an error.',
      'It would appear that the software contains an error.',
      'It would seem that the software contains a bug.',
      'It would appear that the software contains a bug.',
      'It would seem the software contains an error.',
      'It seems that the software contains an error.',
      'It appears that the software contains an error.',
      'It would seem that there is an error in the software.',
      'It would appear that there is an error in the software.',
      'The software would seem to contain an error.',
      'The software would appear to contain an error.',
      'The software seems to contain an error.',
      'The software appears to contain an error.',
      'The software seems to contain a bug.',
      'The software appears to contain a bug.',
      'There seems to be an error in the software.',
      'There appears to be an error in the software.',
      'There seems to be a bug in the software.',
    ], '« Il semblerait que » = It would seem / appear that… (indicatif après that, pas de subjonctif).', { d: 2.2 })
    .mcq('How would you describe the authors’ tone?', [
      'Cautious and self-critical',
      'Confident and dismissive of other views',
      'Angry and polemical',
      'Indifferent to the results',
    ], 0, 'would appear to, relatively small, tend to, it is possible that, somewhat overstated, may well : accumulation de marqueurs de prudence et d’autocritique.', {
      d: 2.3,
      passage: 'The findings presented here would appear to support the hypothesis that flexible working hours are associated with lower staff turnover. However, the sample was relatively small and drawn largely from the technology sector, where such arrangements tend to be common. It is therefore possible that the effect has been somewhat overstated. Further research involving a wider range of industries may well produce more nuanced results.',
    })
    .listen('Customers who receive a follow-up call tend to be more satisfied, although the effect seems to fade after a few months.', 'Que dit-on de l’effet de l’appel de suivi ?', [
      'Il semble s’estomper au bout de quelques mois',
      'Il dure plusieurs années',
      'Il rend les clients moins satisfaits',
      'Il est impossible à mesurer',
    ], 0, 'seems to fade = semble s’estomper. tend to = avoir tendance à.', { d: 2.1 })
    .dictation('Presumably, the delay was caused by the strike at the port.',
      'Presumably = vraisemblablement, je suppose.', { kc: 'c1.hedging.adverbs', d: 2.1 })
    .say('Il est fort possible que les prix augmentent l’année prochaine.', [
      'Prices may well rise next year',
      'Prices could well rise next year',
      'Prices might well rise next year',
      'Prices may well go up next year',
      'Prices could well go up next year',
      'Prices are likely to rise next year',
      'Prices are likely to go up next year',
      'It is quite possible that prices will rise next year',
      'It’s quite possible that prices will rise next year',
      'It is very possible that prices will rise next year',
      'There is a strong possibility that prices will rise next year',
    ], '« Il est fort possible que » = may well / could well + base.', { d: 2.2 })
    .answer('Give your opinion on a controversial topic (social media, remote work, nuclear energy…) in a careful, nuanced way.',
      'Social media arguably makes it easier to stay in touch, but it would appear that heavy users tend to feel more anxious and isolated.',
      'Utilise au moins une marque de nuance : arguably, it would appear, tend to, may well, to some extent, likely…',
      { kc: 'c1.hedging.adverbs', keywords: [['arguably', 'to some extent', 'it would appear', 'it would seem', 'tend to', 'tends to', 'may well', 'likely', 'seems to', 'appears to', 'presumably']], minWords: 15, d: 2.7 })
    .build(),
};
