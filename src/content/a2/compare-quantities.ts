import type { Lesson } from '../types';
import { exercises } from '../builders';

export const comparatives: Lesson = {
  id: 'a2-compare-1',
  cefr: 'A2',
  unitId: 'a2-compare',
  title: 'Comparatifs et superlatifs',
  subtitle: 'bigger than, the most expensive…',
  kcIds: ['grammar.comparatives', 'grammar.superlatives'],
  estMinutes: 7,
  explanation: [
    {
      title: 'Former le comparatif et le superlatif',
      table: [
        ['adjectif court (1 syllabe)', 'cheap → cheaper than → the cheapest'],
        ['finit par -y', 'easy → easier → the easiest'],
        ['consonne-voyelle-consonne', 'big → bigger → the biggest'],
        ['adjectif long (2+ syllabes)', 'expensive → more expensive than → the most expensive'],
        ['irréguliers', 'good → better → the best · bad → worse → the worst · far → further → the furthest'],
      ],
    },
    {
      title: 'Autres structures',
      table: [
        ['égalité', 'as fast as (aussi rapide que)'],
        ['infériorité', 'not as expensive as / less expensive than'],
      ],
      tip: 'Après un comparatif, « que » = than (jamais « that ») : « bigger than », « better than ».',
    },
  ],
  exercises: exercises('a2-compare-1', 'A2', { kc: 'grammar.comparatives' })
    .mcq('A train is ___ than a car.', ['fast', 'faster', 'more fast'], 1, 'Adjectif court → -er : faster.', { d: -2 })
    .mcq('This laptop is ___ than the other one.', ['expensiver', 'more expensive', 'most expensive'], 1, 'Adjectif long → more + adjectif.', { d: -1.5 })
    .mcq('It’s ___ day of my life!', ['the best', 'the better', 'the goodest'], 0, 'good → better → the best.', { kc: 'grammar.superlatives' })
    .mcq('My English is ___ than last year.', ['gooder', 'better', 'more good'], 1, 'good → better (irrégulier).')
    .mcq('Paris is bigger ___ Lyon.', ['that', 'than', 'as'], 1, 'Comparatif + than.')
    .type('easy → comparatif ?', ['easier'], 'consonne + y → -ier : easier.', { d: -1 })
    .type('big → superlatif ?', ['the biggest', 'biggest'], 'On double la consonne : the biggest.', { kc: 'grammar.superlatives' })
    .cloze('This is the ___ hotel in the city.', ['most expensive'], 'Superlatif d’un adjectif long → the most expensive.', { kc: 'grammar.superlatives', hint: 'expensive' })
    .cloze('Today the weather is ___ than yesterday.', ['worse'], 'bad → worse → the worst.', { hint: 'bad' })
    .cloze('My brother is as tall ___ my father.', ['as'], 'Égalité : as + adjectif + as.', { d: -0.5 })
    .order('C’est la question la plus difficile.', "It's the most difficult question.", 'Superlatif : the most + adjectif long.', { kc: 'grammar.superlatives', distractors: ['more', 'than'] })
    .tr('Le bus est moins cher que le taxi.', ['The bus is cheaper than the taxi.', 'The bus is less expensive than the taxi.', 'The bus is cheaper than a taxi.', 'The bus is cheaper than taxis.'],
      'moins cher = cheaper (ou less expensive).', { d: 0 })
    .tr('C’est le meilleur restaurant de la ville.', ["It's the best restaurant in the city.", 'It is the best restaurant in the city.', "It's the best restaurant in town.", "This is the best restaurant in the city."],
      'the best + nom + in (et non « of ») the city.', { kc: 'grammar.superlatives', d: 0.5 })
    .listen('London is more expensive than Manchester, but Manchester is rainier.', 'Quelle ville est la plus chère ?', ['Londres', 'Manchester', 'Les deux pareil'], 0,
      'more expensive than = plus cher que.')
    .dictation('This is the most beautiful beach in Spain.', 'the most + adjectif long.', { kc: 'grammar.superlatives' })
    .repeat('Better late than never.', 'Expression courante : mieux vaut tard que jamais.')
    .say('Mon nouveau téléphone est plus rapide que l’ancien.', ['My new phone is faster than the old one', 'My new phone is faster than my old one', 'My new phone is quicker than the old one'],
      'faster than. « l’ancien » = the old one.')
    .answer('Compare your city with another city you know.', 'Paris is bigger and more expensive than Lyon, but Lyon is quieter and the food is better.',
      'Utilise au moins un comparatif (-er than / more … than).', { keywords: [['than']], minWords: 10 })
    .build(),
};

export const quantities: Lesson = {
  id: 'a2-quant-1',
  cefr: 'A2',
  unitId: 'a2-quantities',
  title: 'Quantités',
  subtitle: 'some / any / much / many / a lot of',
  kcIds: ['grammar.quantifiers', 'grammar.countable'],
  estMinutes: 7,
  explanation: [
    {
      title: 'Dénombrable ou indénombrable ?',
      body: 'Dénombrable : on peut compter (a chair, two chairs). Indénombrable : pas de pluriel ni de « a » (water, money, information, advice, furniture, news, work).',
      tip: 'Pièges des francophones : « informations » ✗ → information ✓, « advices » ✗ → advice ✓, « a work » ✗ → a job ✓.',
    },
    {
      title: 'Les quantificateurs',
      table: [
        ['some', 'phrase affirmative, offres : I have some questions. Would you like some tea?'],
        ['any', 'négation et questions : I don’t have any time. Do you have any questions?'],
        ['many', 'dénombrable (surtout négation/question) : How many emails?'],
        ['much', 'indénombrable (surtout négation/question) : I don’t have much time.'],
        ['a lot of', 'les deux, surtout à l’affirmatif : a lot of people, a lot of work'],
        ['a few / a little', 'quelques (dénombrable) / un peu de (indénombrable)'],
      ],
    },
  ],
  exercises: exercises('a2-quant-1', 'A2', { kc: 'grammar.quantifiers' })
    .mcq('I don’t have ___ money.', ['some', 'any', 'many'], 1, 'Négation → any. money est indénombrable.', { d: -1.5 })
    .mcq('Would you like ___ coffee?', ['some', 'any', 'many'], 0, 'Offre → some, même dans une question.', { d: -0.5 })
    .mcq('How ___ people work in your company?', ['much', 'many'], 1, 'people est dénombrable → many.', { d: -1.5 })
    .mcq('We don’t have ___ time.', ['many', 'much'], 1, 'time (le temps) est indénombrable → much.', { d: -1 })
    .mcq('Choisis la phrase correcte.', ['Can you give me some informations?', 'Can you give me some information?', 'Can you give me an information?'], 1,
      'information est indénombrable : jamais de -s ni de « an ».', { kc: 'grammar.countable', d: 0 })
    .mcq('She gave me ___ good advice.', ['a', 'some', 'many'], 1, 'advice est indénombrable → some advice (ou a piece of advice).', { kc: 'grammar.countable', d: 0.3 })
    .cloze('There are ___ of tourists in summer.', ['a lot', 'lots'], 'a lot of / lots of = beaucoup de.', { loose: true })
    .cloze('Are there ___ questions?', ['any'], 'Question → any.')
    .cloze('I need a ___ minutes to finish.', ['few'], 'minutes est dénombrable → a few.', { d: 0 })
    .cloze('Can I have a ___ milk in my tea?', ['little'], 'milk est indénombrable → a little.', { d: 0 })
    .order('Je n’ai pas beaucoup de travail aujourd’hui.', "I don't have much work today.", 'work (travail) est indénombrable → much.', { distractors: ['many', 'works'] })
    .tr('Il y a beaucoup de circulation.', ["There's a lot of traffic.", 'There is a lot of traffic.', 'There is lots of traffic.', "There's lots of traffic."], 'traffic est indénombrable → there is a lot of.', { d: 0 })
    .tr('As-tu des nouvelles de Marc ?', ['Do you have any news from Marc?', 'Have you got any news from Marc?', 'Do you have any news about Marc?', 'Have you heard from Marc?'],
      'news est indénombrable et singulier. Question → any.', { kc: 'grammar.countable', d: 0.5 })
    .listen('We’ve got some bread, but we haven’t got any cheese.', 'Que manque-t-il ?', ['Du fromage', 'Du pain', 'Rien'], 0, 'haven’t got any = n’avons pas de.')
    .listen('How many emails did you get today? — Too many!', 'Qu’est-ce qu’on compte ?', ['Des e-mails', 'Des réunions', 'Des appels'], 0, 'How many + dénombrable.')
    .repeat('Is there any milk left? I only need a little.', 'any en question, a little + indénombrable.')
    .say('Je n’ai pas de questions.', ["I don't have any questions", 'I do not have any questions', "I haven't got any questions", 'I have no questions'], 'Négation → any.')
    .answer('What is there in your fridge right now?', 'There is some milk and a lot of vegetables, but there isn’t any cheese.',
      'Utilise some, any, a lot of…', { keywords: [['some', 'any', 'a lot of', 'lots of', 'much', 'many', 'a few', 'a little']], minWords: 8 })
    .build(),
};
