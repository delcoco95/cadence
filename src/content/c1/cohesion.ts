import type { Lesson } from '../types';
import { exercises } from '../builders';

export const cohesion1: Lesson = {
  id: 'c1-cohesion-1',
  cefr: 'C1',
  unitId: 'c1-cohesion',
  title: 'Ellipse et substitution',
  subtitle: 'I hope so, I’m afraid not, do so, one / ones, I’d love to',
  kcIds: ['c1.cohesion.substitution', 'c1.cohesion.ellipsis'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Substituer pour éviter la répétition',
      table: [
        ['so / not après think, hope, suppose, expect, be afraid', 'Will it rain? — I hope not. / I’m afraid so.'],
        ['do so (registre soutenu)', 'He promised to resign and did so the next day.'],
        ['one / ones', 'I prefer the blue one. / The old ones were better.'],
        ['if so / if not', 'Is the offer still valid? If so, we’ll accept it.'],
        ['the former / the latter', 'le premier / le second'],
      ],
      examples: [
        { en: 'Is the report ready? — I believe so.', fr: 'Le rapport est prêt ? — Je crois que oui.' },
        { en: 'Will he be fired? — I hope not.', fr: 'Va-t-il être licencié ? — J’espère que non.' },
      ],
      tip: '« Je pense que oui / non » = I think so / I don’t think so, jamais « I think yes ». Avec think, I don’t think so est la forme naturelle ; I think not est très soutenu.',
    },
    {
      title: 'L’ellipse : garder seulement l’auxiliaire ou to',
      table: [
        ['Auxiliaire seul', 'She said she would call, and she did.'],
        ['to sans verbe', 'Would you like to come? — I’d love to.'],
        ['Après than / as', 'He works harder than I do.'],
        ['So / Neither + auxiliaire + sujet', 'I can’t swim. — Neither can I.'],
      ],
      examples: [
        { en: 'I didn’t want to go, but I had to.', fr: 'Je ne voulais pas y aller, mais j’ai dû.' },
      ],
      tip: 'Ne laisse pas tomber to : « I’d love » tout seul ✗ → I’d love to ✓. Le français dit « avec plaisir » ou « j’aimerais bien » ; l’anglais a besoin de l’auxiliaire ou de to pour rappeler le verbe.',
    },
  ],
  exercises: exercises('c1-cohesion-1', 'C1', { kc: 'c1.cohesion.substitution' })
    .mcq('Are there any tickets left? — I’m afraid ___.', ['not', 'no', 'none', 'don’t'], 0,
      'Réponse négative polie : I’m afraid not (= j’ai bien peur que non).', { d: 2 })
    .cloze('The minister was asked to apologise, but she refused to do ___.', ['so'],
      'do so remplace « apologise » (registre soutenu).', { d: 2.1 })
    .cloze('I didn’t expect to enjoy the conference, but I ___.', ['did'],
      'Ellipse : l’auxiliaire did reprend « enjoyed the conference ».', { kc: 'c1.cohesion.ellipsis', d: 2 })
    .cloze('Would you be willing to chair the meeting? — I’d be happy ___.', ['to'],
      'Ellipse après un adjectif : happy to (chair the meeting). Le to est obligatoire.', { kc: 'c1.cohesion.ellipsis', d: 2 })
    .cloze('She earns considerably more than her manager ___.', ['does'],
      'Après than, on reprend avec l’auxiliaire : than her manager does.', { kc: 'c1.cohesion.ellipsis', d: 2.1 })
    .mcq('Will the board approve the merger? — I suspect ___, but nothing is certain yet.', ['so', 'it', 'that', 'yes'], 0,
      'suspect / think / expect / hope + so pour reprendre une proposition entière.', { d: 1.9 })
    .type('Évite la répétition : Diane said she would finish the report by Friday, and she finished the report by Friday.', [
      'Diane said she would finish the report by Friday, and she did.',
      'Diane said she would finish the report by Friday and she did.',
      'Diane said she would finish the report by Friday, and she did so.',
    ], 'L’auxiliaire seul (she did) ou do so suffit à reprendre l’action.', { kc: 'c1.cohesion.ellipsis', loose: true, d: 2.2, instruction: 'Transforme la phrase.' })
    .order('Il avait promis de rembourser la dette, ce qu’il a fait l’année suivante.', 'He promised to repay the debt and did so the following year.',
      'did so = l’a fait (reprend « repay the debt »).', { distractors: ['it', 'made'], d: 2.2 })
    .tr('Je pense que non, mais je vais vérifier.', [
      'I don’t think so, but I’ll check.',
      'I do not think so, but I will check.',
      'I don’t think so, but I’ll check it.',
      'I don’t think so, but I’m going to check.',
      'I don’t think so, but I’ll double-check.',
      'I don’t think so, but let me check.',
      'I don’t think so, but I’ll verify.',
      'I think not, but I will check.',
    ], '« Je pense que non » = I don’t think so (la négation porte sur think).', { d: 2 })
    .tr('« Tu viens à la soirée ? » « J’aimerais bien, mais je ne peux pas. »', [
      'I’d love to, but I can’t.',
      'I would love to, but I cannot.',
      'I would love to, but I can’t.',
      'I’d like to, but I can’t.',
      'I would like to, but I cannot.',
      'I’d really like to, but I can’t.',
      'I’d love to, but I’m not able to.',
    ], 'Traduis seulement la réponse. Garde to : I’d love to (come), et l’auxiliaire seul : I can’t.', { kc: 'c1.cohesion.ellipsis', d: 2.1 })
    .mcq('In the passage, what does “the latter” refer to?', [
      'The supporters of the four-day week',
      'The critics of the four-day week',
      'The companies that volunteered',
      'The governments considering legislation',
    ], 0, 'the former / the latter = le premier / le second des deux éléments cités (ici les deux camps : critiques puis partisans).', {
      d: 2.3,
      passage: 'Critics argue that the four-day week will damage productivity. Its supporters think not, pointing to trials in which output stayed the same or even rose. Of the two camps, the latter has the stronger evidence, though the trials were short and the companies involved had volunteered to take part. If the results hold over several years, governments may be tempted to legislate. If not, the idea is likely to remain a perk offered by a handful of employers.',
    })
    .listen('I was going to call the supplier this morning, but Mark said he already had.', 'Qu’a fait Mark ?', [
      'Il avait déjà appelé le fournisseur',
      'Il allait appeler le fournisseur plus tard',
      'Il a demandé au locuteur d’appeler',
      'Il a refusé d’appeler le fournisseur',
    ], 0, 'he already had = he had already called the supplier (ellipse).', { kc: 'c1.cohesion.ellipsis', d: 2.1 })
    .dictation('Some delegates supported the motion; others did not, and said so openly.',
      'did not = ellipse ; said so = l’ont dit (substitution).', { d: 2.3 })
    .say('Il a dit qu’il viendrait, mais il n’est pas venu.', [
      'He said he would come, but he didn’t',
      'He said he would come, but he did not',
      'He said he’d come, but he didn’t',
      'He said he would come, but he never did',
      'He said he’d come but he never did',
    ], 'Ellipse : he didn’t (come). Inutile de répéter le verbe.', { kc: 'c1.cohesion.ellipsis', d: 2 })
    .answer('A colleague asks: “Do you think the project will be finished on time?” Answer naturally, avoiding repetition.',
      'I hope so, but I doubt it, because the client keeps changing the brief and the team is already working longer hours than it should.',
      'Commence par une substitution : I hope so / I’m afraid not / I don’t think so / I suspect so…',
      { keywords: [['i hope so', 'i think so', 'i hope not', 'i suppose so', 'i expect so', 'i suspect so', 'i doubt it', 'i am afraid not', 'i am afraid so', 'i do not think so', 'i believe so']], minWords: 12, d: 2.5 })
    .build(),
};

export const cohesion2: Lesson = {
  id: 'c1-cohesion-2',
  cefr: 'C1',
  unitId: 'c1-cohesion',
  title: 'Connecteurs soutenus et nominalisation',
  subtitle: 'albeit, hence, insofar as, notwithstanding, thereby',
  kcIds: ['c1.linkers.advanced', 'c1.nominalisation'],
  estMinutes: 12,
  explanation: [
    {
      title: 'Connecteurs du registre soutenu',
      table: [
        ['notwithstanding (+ nom)', 'malgré : Notwithstanding the risks, they went ahead.'],
        ['albeit (+ adjectif / adverbe / nom)', 'quoique : a real, albeit temporary, improvement'],
        ['insofar as', 'dans la mesure où : The plan works insofar as it reduces costs.'],
        ['hence (+ nom)', 'd’où : The supply chain broke down, hence the delays.'],
        ['thereby (+ -ing)', 'ce faisant, par là même : They cut prices, thereby attracting new customers.'],
        ['whereas / whilst', 'tandis que (contraste)'],
        ['nonetheless / nevertheless', 'néanmoins'],
      ],
      examples: [
        { en: 'The results were positive, albeit limited.', fr: 'Les résultats étaient positifs, quoique limités.' },
      ],
      tip: 'albeit ne se fait pas suivre d’une proposition complète : « albeit it was late » ✗ → albeit late ✓ (ou although it was late). hence + nom remplace un verbe : hence the delays = d’où les retards.',
    },
    {
      title: 'La nominalisation',
      body: 'L’écrit soutenu transforme verbes et adjectifs en noms : le texte gagne en densité et en objectivité.',
      table: [
        ['The government decided to…', 'The government’s decision to…'],
        ['Prices rose sharply.', 'The sharp rise in prices…'],
        ['They failed to respond.', 'Their failure to respond…'],
        ['The system is reliable.', 'The reliability of the system…'],
        ['We analysed the data.', 'Analysis of the data…'],
      ],
      examples: [
        { en: 'The closure of the factory shocked the town.', fr: 'La fermeture de l’usine a choqué la ville.' },
      ],
      tip: 'Soigne la préposition qui suit le nom : a rise / an increase / a fall IN, the cause OF, demand FOR, an impact ON. « Une hausse de 10 % des prix » = a 10% increase in prices.',
    },
  ],
  exercises: exercises('c1-cohesion-2', 'C1', { kc: 'c1.linkers.advanced' })
    .mcq('The results were encouraging, ___ based on a small sample.', ['albeit', 'despite', 'whereas', 'hence'], 0,
      'albeit + participe / adjectif = quoique. despite exigerait un nom ou un -ing (despite being…).', { d: 2.1 })
    .mcq('The factory was closed for three weeks; ___ the shortage of spare parts.', ['hence', 'thereby', 'albeit', 'whereas'], 0,
      'hence + nom = d’où (conséquence).', { d: 2.1 })
    .cloze('The reform is welcome ___ as it simplifies the tax system, but it does little for low earners.', ['insofar', 'inasmuch'],
      'insofar as = dans la mesure où.', { hint: 'dans la mesure où', d: 2.4 })
    .cloze('The company cut its prices, ___ forcing competitors to do the same.', ['thereby'],
      'thereby + -ing = ce faisant, par là même.', { hint: 'ce faisant', d: 2.3 })
    .cloze('There has been a sharp ___ in the number of applications this year.', ['increase', 'rise'],
      'Nominalisation : a sharp increase / rise in…', { kc: 'c1.nominalisation', hint: 'increase / rise', d: 1.9 })
    .type('Réécris en commençant par « The government’s failure… » : The government failed to act, and this angered voters.', [
      'The government’s failure to act angered voters.',
      'The government’s failure to act angered the voters.',
      'The government’s failure to act made voters angry.',
    ], 'failed to act → failure to act. La proposition devient le sujet de la phrase.', { kc: 'c1.nominalisation', loose: true, d: 2.3, instruction: 'Transforme la phrase.' })
    .type('Réécris en commençant par « The sharp… » : Unemployment rose sharply, which worried economists.', [
      'The sharp rise in unemployment worried economists.',
      'The sharp increase in unemployment worried economists.',
      'The sharp rise in unemployment worried the economists.',
    ], 'rose sharply → the sharp rise IN unemployment.', { kc: 'c1.nominalisation', loose: true, d: 2.4, instruction: 'Transforme la phrase.' })
    .order('Les ventes ont augmenté, quoique lentement.', 'Sales increased, albeit slowly.',
      'albeit + adverbe : albeit slowly.', { distractors: ['despite', 'was'], d: 2 })
    .tr('Le projet a été retardé, d’où l’augmentation des coûts.', [
      'The project was delayed, hence the increase in costs.',
      'The project was delayed, hence the rise in costs.',
      'The project was delayed, hence the higher costs.',
      'The project was delayed, hence the increased costs.',
      'The project was delayed, hence the cost increase.',
      'The project has been delayed, hence the increase in costs.',
      'The project has been delayed, hence the rise in costs.',
      'The project has been delayed, hence the higher costs.',
      'The project was delayed, which explains the increase in costs.',
    ], '« d’où » + nom = hence + nom. increase IN costs.', { d: 2.3 })
    .tr('La fermeture de l’usine a eu un impact considérable sur la région.', [
      'The closure of the factory had a considerable impact on the region.',
      'The closure of the factory had a significant impact on the region.',
      'The closure of the factory had a major impact on the region.',
      'The closure of the factory had a huge impact on the region.',
      'The closure of the factory had a considerable effect on the region.',
      'The closure of the factory has had a considerable impact on the region.',
      'The closing of the factory had a considerable impact on the region.',
      'The closure of the plant had a considerable impact on the region.',
      'The factory closure had a considerable impact on the region.',
      'The factory closure had a significant impact on the region.',
      'The factory closure had a major impact on the region.',
      'The factory’s closure had a considerable impact on the region.',
      'The plant closure had a considerable impact on the region.',
    ], '« fermeture » (d’un site) = closure. « un impact sur » = an impact ON.', { kc: 'c1.nominalisation', d: 2.2 })
    .mcq('According to the passage, what mainly determined whether drivers changed their behaviour?', [
      'Whether good public transport was available',
      'How high the charge was',
      'How much revenue the scheme generated',
      'How long the scheme had been running',
    ], 0, '« depend less on the level of the charge than on the availability of alternatives » : c’est l’offre de transports qui compte.', {
      d: 2.5,
      passage: 'The introduction of congestion charging led to an immediate reduction in traffic volumes, albeit one that narrowed over subsequent years. Its effectiveness, insofar as it can be measured, appears to depend less on the level of the charge than on the availability of alternatives. Where public transport was frequent and reliable, drivers switched; elsewhere, they largely paid and carried on. Notwithstanding these limitations, the scheme generated substantial revenue, a proportion of which was reinvested in bus services.',
    })
    .listen('Profits rose by four per cent, whereas costs remained broadly stable, hence the board’s optimism.', 'Pourquoi le conseil d’administration est-il optimiste ?', [
      'Les bénéfices ont augmenté sans hausse des coûts',
      'Les coûts ont fortement baissé',
      'Les bénéfices sont restés stables',
      'Le conseil a réduit les coûts de 4 %',
    ], 0, 'whereas = tandis que ; hence the board’s optimism = d’où l’optimisme du conseil.', { d: 2.2 })
    .dictation('The rapid growth of online shopping has led to the closure of many local stores.',
      'Deux nominalisations : the rapid growth of…, the closure of…', { kc: 'c1.nominalisation', d: 2.1 })
    .say('Malgré ces difficultés, l’équipe a atteint ses objectifs.', [
      'Despite these difficulties, the team achieved its objectives',
      'Despite these difficulties, the team achieved their objectives',
      'Despite these difficulties, the team achieved its goals',
      'Despite these difficulties, the team met its objectives',
      'Despite these difficulties, the team met its targets',
      'Despite these difficulties, the team reached its targets',
      'Despite these difficulties, the team reached its goals',
      'In spite of these difficulties, the team achieved its goals',
      'Notwithstanding these difficulties, the team achieved its objectives',
    ], 'Despite / Notwithstanding + nom. « atteindre un objectif » = achieve / meet / reach a target.', { d: 2.1 })
    .answer('Summarise the advantages and disadvantages of a recent change at your workplace, school or town, using at least one formal linker.',
      'The new opening hours are more convenient for most customers, albeit less popular with staff, hence the need for a review next year.',
      'Utilise albeit, hence, whereas, notwithstanding, insofar as, thereby, nonetheless…',
      { keywords: [['albeit', 'notwithstanding', 'insofar as', 'hence', 'thereby', 'whereas', 'nonetheless', 'nevertheless', 'whilst']], minWords: 15, d: 2.7 })
    .build(),
};
