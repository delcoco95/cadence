import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const NOM = 'c2.academic.nominalisation';
const NP = 'c2.academic.noun_phrases';
const HEDGE = 'c2.academic.hedging';
const BOOST = 'c2.academic.boosting';

export const academicUnit: Unit = {
  id: 'c2-academic',
  cefr: 'C2',
  title: 'Registre académique',
  description: 'Nominalisation, groupes nominaux complexes, atténuation (hedging) et renforcement (boosting) des affirmations.',
  lessonIds: ['c2-academic-1', 'c2-academic-2'],
  canDo: [
    'Je peux condenser une idée en groupe nominal dense, comme dans un rapport ou un article.',
    'Je peux doser la force de mes affirmations à l’écrit en les atténuant ou en les renforçant à bon escient.',
  ],
};

export const academic1: Lesson = {
  id: 'c2-academic-1',
  cefr: 'C2',
  unitId: 'c2-academic',
  title: 'Nominalisation et groupes nominaux complexes',
  subtitle: 'Des actions aux concepts',
  kcIds: [NOM, NP],
  estMinutes: 10,
  explanation: [
    {
      title: 'La nominalisation',
      body: 'L’écrit académique ou professionnel transforme volontiers verbes et adjectifs en noms : le texte devient plus dense, plus impersonnel, et les idées peuvent devenir sujets d’autres verbes.',
      table: [
        ['style courant', 'style nominal'],
        ['The council decided to close the library.', 'The council’s decision to close the library…'],
        ['Prices rose sharply.', 'The sharp rise in prices…'],
        ['People rely heavily on cars.', 'Heavy reliance on cars…'],
        ['The project failed because nobody funded it.', 'The project failed owing to a lack of funding.'],
      ],
      examples: [
        { en: 'The sharp rise in rents has prompted many students to move further out.', fr: 'La forte hausse des loyers a poussé de nombreux étudiants à s’éloigner du centre.' },
        { en: 'The introduction of the new timetable caused some initial confusion.', fr: 'La mise en place du nouvel horaire a d’abord semé une certaine confusion.' },
      ],
      tip: 'Les prépositions qui suivent ces noms diffèrent souvent du français : an increase / a rise / a fall IN (pas « of »), an impact / an effect / an emphasis ON, a demand / a need FOR, an approach TO, a failure TO + base.',
    },
    {
      title: 'Les groupes nominaux complexes',
      body: 'L’anglais accumule les modificateurs avant le nom (pré-modification) et ajoute des précisions après (post-modification). Le nom principal vient en dernier dans la pré-modification, à l’inverse du français.',
      table: [
        ['nom + nom', 'energy consumption figures', 'les chiffres de consommation d’énergie'],
        ['adjectif composé avec nombre', 'a two-year research project', 'un projet de recherche de deux ans'],
        ['participe passé', 'a study conducted in 2021', 'une étude menée en 2021'],
        ['infinitif', 'the decision to expand', 'la décision de s’agrandir'],
      ],
      examples: [
        { en: 'A five-minute walk from the station brings you to the old harbour.', fr: 'À cinq minutes à pied de la gare, on arrive au vieux port.' },
      ],
      tip: 'Dans un adjectif composé, le nom reste au singulier et prend un trait d’union : « a ten-minute break », jamais « a ten-minutes break ». Lis un groupe nominal anglais de droite à gauche pour le traduire.',
    },
  ],
  exercises: exercises('c2-academic-1', 'C2', { kc: NOM })
    .mcq('There has been a sharp ___ the number of cyclists in the city centre.',
      ['increase of', 'increase in', 'increase on', 'increasing of'], 1,
      'an increase IN + ce qui augmente. « increase of » s’emploie seulement devant un chiffre (an increase of 10%).', { d: 3.0 })
    .cloze('The rapid ___ of the coastline has forced several villages to move inland.', ['erosion'],
      'erode → erosion : le nom permet d’en faire le sujet de la phrase.', { hint: 'erode', d: 3.0 })
    .type('Nominalise en commençant par « The council’s » : « The council decided to close the library, which surprised residents. »',
      ['The council’s decision to close the library surprised residents.', 'The council’s decision to close the library came as a surprise to residents.'],
      'decided → decision (+ to + base). La relative « which surprised » disparaît : la décision devient le sujet.', { d: 3.3 })
    .type('Nominalise en commençant par « The dramatic » : « Prices fell dramatically, and this affected small businesses. »',
      ['The dramatic fall in prices affected small businesses.', 'The dramatic drop in prices affected small businesses.', 'The dramatic decline in prices affected small businesses.', 'The dramatic fall in prices had an effect on small businesses.'],
      'fell dramatically → the dramatic fall IN prices : l’adverbe devient adjectif, le verbe devient nom.', { d: 3.4 })
    .mcq('Which version is the most suitable for an academic report?',
      ['Because people rely more and more on cars, the air is getting dirtier.', 'Growing reliance on private cars has contributed to a decline in air quality.', 'People are using their cars loads more, so the air’s worse.', 'The air is worse because of cars, people use them a lot.'], 1,
      'Deux nominalisations (reliance, decline) et un verbe précis (contributed to) : registre académique.', { d: 3.0 })
    .cloze('The study places particular emphasis ___ early childhood education.', ['on'],
      'emphasis ON, comme to place emphasis on / to put the emphasis on.', { hint: 'préposition', d: 3.0 })
    .cloze('We went on a ___ walk along the cliffs.', ['two-hour'],
      'Adjectif composé : nombre + nom au singulier, avec trait d’union.', { kc: NP, hint: 'deux heures (adjectif composé)', d: 3.0 })
    .order('Les chiffres de consommation d’énergie des ménages ont été publiés.', 'Household energy consumption figures have been published.',
      'Pré-modification : le nom principal (figures) vient en dernier, précédé de ses modificateurs.', { kc: NP, distractors: ['of', 'the'], d: 3.2 })
    .tr('Une étude menée en 2022 a révélé une hausse du télétravail.',
      ['A study conducted in 2022 revealed an increase in remote working.', 'A study carried out in 2022 revealed an increase in remote working.', 'A study conducted in 2022 revealed a rise in remote working.', 'A study carried out in 2022 revealed a rise in remote working.', 'A study conducted in 2022 showed an increase in remote working.', 'A study conducted in 2022 found an increase in remote work.'],
      'Post-modification par un participe (conducted / carried out in 2022) ; une hausse DE = an increase / a rise IN.', { kc: NP, d: 3.2 })
    .tr('Le manque de financement a retardé le projet.',
      ['The lack of funding delayed the project.', 'A lack of funding delayed the project.', 'The lack of funding has delayed the project.', 'A lack of funding has delayed the project.', 'The lack of funds delayed the project.'],
      'a lack of + nom : nominalisation typique des rapports.', { d: 3.0 })
    .mcq('Which feature makes this paragraph typically academic?',
      ['Frequent personal pronouns and contractions', 'Dense noun phrases that turn actions into concepts', 'Short sentences with emotional vocabulary', 'Direct questions addressed to the reader'], 1,
      '« The widespread adoption of…», « a reassessment of…», « the introduction of… » : les actions deviennent des concepts, ce qui densifie le propos.',
      {
        kc: NP, d: 3.2,
        passage: 'The widespread adoption of electric bicycles in mid-sized European cities has prompted a reassessment of urban transport policy. Early resistance from local authorities, largely attributable to concerns over road safety, has given way to a more pragmatic approach, with the introduction of dedicated lanes and subsidised purchase schemes. The long-term impact of these measures on car ownership, however, remains difficult to quantify.',
      })
    .listen('The closure of the bridge has led to a significant increase in journey times for commuters.', 'Quelle est la conséquence de la fermeture du pont ?',
      ['Les trajets sont plus longs', 'Les trajets coûtent moins cher', 'Les navetteurs travaillent à domicile', 'Le pont rouvrira bientôt'], 0,
      '« a significant increase in journey times » = les temps de trajet ont nettement augmenté.', { d: 3.0 })
    .dictation('The findings of a three-year study conducted in rural areas were published yesterday.',
      'three-year study : adjectif composé au singulier ; conducted in rural areas : post-modification.',
      { kc: NP, d: 3.3, accepted: ['The findings of a three-year study conducted in rural areas were published yesterday.', 'The findings of a 3-year study conducted in rural areas were published yesterday.'] })
    .say('La hausse des prix de l’énergie inquiète les consommateurs.',
      ['The rise in energy prices worries consumers', 'The increase in energy prices worries consumers', 'Rising energy prices worry consumers', 'The rise in energy prices is worrying consumers'],
      'the rise IN energy prices : nominalisation + nom composé (energy prices).', { d: 3.1 })
    .answer('Summarise a change you have noticed in your town or workplace in one formal sentence, using nominalisation (the introduction of…, a rise in…).',
      'The introduction of a car-free zone in the town centre has led to a noticeable increase in the number of pedestrians and a decline in noise levels.',
      'Transforme les actions en noms (introduction, increase, decline) suivis de la bonne préposition.',
      { kc: NP, d: 3.3, minWords: 15, keywords: [['introduction', 'increase', 'rise', 'decline', 'reduction', 'development', 'growth', 'expansion', 'closure', 'improvement'], ['of', 'in']] })
    .build(),
};

export const academic2: Lesson = {
  id: 'c2-academic-2',
  cefr: 'C2',
  unitId: 'c2-academic',
  title: 'Atténuer et renforcer une affirmation',
  subtitle: 'Hedging et boosting',
  kcIds: [HEDGE, BOOST],
  estMinutes: 10,
  explanation: [
    {
      title: 'Atténuer (hedging)',
      body: 'En anglais académique, on évite d’affirmer plus que ce que les données permettent. On atténue avec plusieurs outils, souvent combinés.',
      table: [
        ['modaux', 'may, might, could', 'This may explain the gap.'],
        ['verbes prudents', 'suggest, indicate, appear, seem, tend to', 'The data suggest a link.'],
        ['adverbes', 'possibly, relatively, partly, to some extent', 'The effect is relatively small.'],
        ['formules', 'It could be argued that… / There is some evidence that…', 'It could be argued that the policy came too late.'],
        ['approximations', 'approximately, roughly, around', 'roughly a third of participants'],
      ],
      examples: [
        { en: 'These findings would seem to indicate a seasonal pattern.', fr: 'Ces résultats sembleraient indiquer une tendance saisonnière.' },
        { en: 'Older participants tended to answer more cautiously.', fr: 'Les participants plus âgés avaient tendance à répondre plus prudemment.' },
      ],
      tip: '« prove » est presque toujours trop fort dans un article : préfère suggest, indicate ou point to. Et « data » est traditionnellement pluriel à l’écrit soutenu : the data suggest.',
    },
    {
      title: 'Renforcer (boosting)',
      body: 'Quand les preuves sont solides, on peut affirmer avec force, mais sans emphase émotionnelle.',
      table: [
        ['adverbes', 'clearly, undoubtedly, evidently, crucially'],
        ['verbes', 'demonstrate, show, establish'],
        ['formules', 'It is evident that… / There is no doubt that… / The evidence strongly suggests…'],
      ],
      examples: [
        { en: 'The results clearly demonstrate the benefits of regular breaks.', fr: 'Les résultats démontrent clairement les bienfaits des pauses régulières.' },
      ],
      tip: 'Trop de boosters affaiblit un texte : « obviously » ou « everyone knows » semblent arrogants. Les francophones abusent souvent de « it is evident that » (« il est évident que ») : réserve-le aux cas vraiment indiscutables.',
    },
  ],
  exercises: exercises('c2-academic-2', 'C2', { kc: HEDGE })
    .mcq('These results ___ that sleep plays a role in memory.',
      ['prove', 'suggest', 'guarantee', 'certify'], 1,
      'suggest atténue l’affirmation ; prove, guarantee ou certify sont trop catégoriques pour un résultat d’étude.', { d: 3.0 })
    .cloze('It ___ be argued that the policy came too late to make a difference.', ['could', 'might', 'may', 'can'],
      'It could / might be argued that… : formule d’atténuation classique.', { hint: 'modal prudent', d: 3.0 })
    .type('Atténue l’affirmation avec « appear to » : « The new method reduces errors. »',
      ['The new method appears to reduce errors.', 'The new method would appear to reduce errors.'],
      'appear to + base : on présente le résultat comme une observation, pas comme une certitude.', { d: 3.1 })
    .mcq('Which sentence uses a booster appropriately in a scientific paper?',
      ['The data clearly demonstrate a link between diet and sleep quality.', 'The data totally and absolutely prove everything about sleep.', 'The data are kind of showing some link, maybe.', 'Obviously, everyone knows that diet affects sleep.'], 0,
      'clearly + demonstrate : renforcement sobre. Les autres options sont soit excessives, soit familières, soit arrogantes.', { kc: BOOST, d: 3.0 })
    .cloze('The results ___ show that students who took regular breaks performed better.', ['clearly'],
      'clearly renforce une affirmation appuyée sur les résultats.', { kc: BOOST, hint: 'clairement', d: 3.0 })
    .mcq('Which sentence is the most cautious?',
      ['Remote work increases productivity.', 'Remote work may, under certain conditions, lead to modest gains in productivity.', 'Remote work clearly boosts productivity.', 'It is evident that remote work increases productivity.'], 1,
      'Modal (may), restriction (under certain conditions) et approximation (modest) : triple atténuation.', { d: 3.0 })
    .order('Il semblerait que les résultats soient en partie dus au hasard.', 'It would appear that the results are partly due to chance.',
      'It would appear that… + partly : double atténuation.', { distractors: ['seems', 'prove'], d: 3.2 })
    .tr('Ces résultats laissent penser que le climat joue un rôle.',
      ['These results suggest that the climate plays a role.', 'These results suggest that climate plays a role.', 'These findings suggest that climate plays a role.', 'These findings suggest that the climate plays a role.', 'These results indicate that climate plays a role.'],
      '« Laisser penser » = suggest, verbe d’atténuation par excellence.', { d: 3.1 })
    .tr('Il ne fait aucun doute que cette découverte est importante.',
      ['There is no doubt that this discovery is important.', 'This discovery is undoubtedly important.', 'Undoubtedly, this discovery is important.', 'There is no doubt that this discovery is significant.', 'This discovery is undoubtedly significant.'],
      'There is no doubt that… ou undoubtedly : renforcement explicite.', { kc: BOOST, d: 3.1 })
    .mcq('How would you describe the authors’ stance?',
      ['Confident that parks always improve wellbeing', 'Cautious, presenting tentative and qualified conclusions', 'Dismissive of all earlier research', 'Neutral, offering no interpretation at all'], 1,
      'suggests, may be, appears to, seems to, should be interpreted with caution : le texte accumule les marques d’atténuation.',
      {
        d: 3.3,
        passage: 'Previous studies have largely assumed that urban green spaces improve residents’ wellbeing. The present study, based on a survey of 1,200 households, suggests that the relationship may be more complex than often supposed. While proximity to parks appears to be associated with higher reported life satisfaction, this effect seems to be considerably weaker in neighbourhoods with limited public transport. These findings should, however, be interpreted with caution, as the sample was drawn from a single city.',
      })
    .listen('Crucially, the effect was observed in every age group, which strongly suggests that it is not a coincidence.', 'Pourquoi le résultat est-il jugé important ?',
      ['Il n’apparaît que chez les jeunes', 'Il apparaît dans toutes les tranches d’âge', 'Il est probablement dû au hasard', 'Il n’a pas encore été mesuré'], 1,
      '« observed in every age group » + « strongly suggests » : renforcement appuyé sur la régularité du résultat.', { kc: BOOST, d: 3.1 })
    .listen('To some extent, the drop in sales may reflect the unusually warm winter rather than any change in customer habits.', 'Que dit le locuteur de la baisse des ventes ?',
      ['Elle s’explique entièrement par les habitudes des clients', 'Elle pourrait en partie s’expliquer par un hiver doux', 'Elle est due à un hiver très froid', 'Elle n’a aucune explication'], 1,
      '« To some extent… may reflect » : explication partielle et prudente.', { d: 3.2 })
    .say('Les données montrent clairement une amélioration.',
      ['The data clearly show an improvement', 'The data clearly shows an improvement', 'The figures clearly show an improvement', 'The data clearly demonstrate an improvement'],
      'clearly + show : renforcement sobre. The data show (pluriel soutenu) ou shows (courant).', { kc: BOOST, d: 3.0 })
    .answer('Does homework improve pupils’ results? Give a balanced, academic-style answer that hedges one claim and boosts another.',
      'There is some evidence that homework may improve results for older pupils, although the effect appears to be small; what is clear, however, is that excessive homework reduces time for rest.',
      'Atténue une idée (may, appears, some evidence) et renforce-en une autre (clearly, it is clear, undoubtedly).',
      { kc: [HEDGE, BOOST], d: 3.4, minWords: 18, keywords: [['may', 'might', 'appears', 'seems', 'suggest', 'suggests', 'tend'], ['clearly', 'clear', 'undoubtedly', 'evident', 'strongly', 'certainly']] })
    .build(),
};
