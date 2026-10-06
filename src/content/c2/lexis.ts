import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const AFF = 'c2.lexis.affixes';
const FAM = 'c2.lexis.word_families';
const CONN = 'c2.lexis.connotation';
const COLL = 'c2.lexis.collocation';

export const lexisUnit: Unit = {
  id: 'c2-lexis',
  cefr: 'C2',
  title: 'Précision lexicale',
  description: 'Formation des mots (préfixes, suffixes, familles), quasi-synonymes et connotation, collocations exactes.',
  lessonIds: ['c2-lexis-1', 'c2-lexis-2'],
  canDo: [
    'Je peux former et comprendre des mots dérivés rares grâce aux préfixes et suffixes.',
    'Je peux choisir le mot juste selon sa connotation et ses collocations (thrifty ou stingy, meet a deadline, bitterly cold).',
  ],
};

export const lexis1: Lesson = {
  id: 'c2-lexis-1',
  cefr: 'C2',
  unitId: 'c2-lexis',
  title: 'Préfixes, suffixes et familles de mots',
  subtitle: 'Misunderstand, counterproductive, unpredictability',
  kcIds: [AFF, FAM],
  estMinutes: 10,
  explanation: [
    {
      title: 'Les préfixes qui changent le sens',
      table: [
        ['mis-', 'mal, de travers', 'misunderstand, misjudge, mislead'],
        ['over- / under-', 'trop / pas assez', 'overestimate, underrated'],
        ['counter-', 'à l’encontre de', 'counterproductive, counterpart'],
        ['out-', 'surpasser', 'outnumber, outperform, outlive'],
        ['un- / in- / im- / ir- / il- / dis-', 'contraire', 'unlikely, inaccurate, impractical, irrelevant, illegible, dishonest'],
        ['non-', 'absence', 'non-existent, non-stop'],
      ],
      examples: [
        { en: 'I think you’ve misjudged the situation.', fr: 'Je crois que tu as mal jugé la situation.' },
        { en: 'In this village, sheep outnumber people ten to one.', fr: 'Dans ce village, les moutons sont dix fois plus nombreux que les habitants.' },
      ],
      tip: 'Deux pièges célèbres : « invaluable » signifie « inestimable, précieux » (pas « sans valeur », qui se dit worthless), et « inflammable » signifie « qui prend feu facilement », exactement comme flammable.',
    },
    {
      title: 'Les suffixes et les familles de mots',
      table: [
        ['adjectif → nom', '-ness, -ity, -cy', 'aware → awareness, rare → rarity, accurate → accuracy'],
        ['verbe → nom', '-ment, -ance, -ence, -ion', 'commit → commitment, rely → reliance'],
        ['adjectif → verbe', '-ise / -ize, -ify, -en', 'modern → modernise, clear → clarify, wide → widen'],
        ['verbe → adjectif', '-able, -ible, -ive', 'rely → reliable, predict → predictable, decide → decisive'],
      ],
      examples: [
        { en: 'The unpredictability of the weather made the trip an adventure.', fr: 'Le caractère imprévisible de la météo a transformé le voyage en aventure.' },
        { en: 'Could you clarify what you mean by « soon »?', fr: 'Pourriez-vous préciser ce que vous entendez par « bientôt » ?' },
      ],
      tip: 'L’accent tonique se déplace souvent dans une même famille : PHOtograph, phoTOgraphy, photoGRAPHic. Prononce bien le mot dérivé, sinon il peut être mal compris à l’oral.',
    },
  ],
  exercises: exercises('c2-lexis-1', 'C2', { kc: AFF })
    .mcq('« The museum’s collection of letters is invaluable. » This means the collection is:',
      ['worthless', 'extremely precious', 'impossible to insure', 'of average value'], 1,
      'invaluable = inestimable : sa valeur est si grande qu’on ne peut la chiffrer. « Sans valeur » = worthless.', { d: 3.0 })
    .cloze('Cutting the training budget would be ___productive: mistakes would cost us far more.', ['counter'],
      'counterproductive = qui produit l’effet inverse de celui recherché.', { hint: 'préfixe : qui va à l’encontre', d: 3.1 })
    .cloze('There is growing public ___ of the need to reduce food waste.', ['awareness'],
      'aware → awareness (-ness) : public awareness of = la prise de conscience de.', { kc: FAM, hint: 'aware', d: 3.0 })
    .cloze('I think you’ve ___understood me; I said Tuesday, not Thursday.', ['mis'],
      'mis- = mal, de travers : misunderstand.', { hint: 'préfixe : mal, de travers', d: 3.0 })
    .cloze('The ___ of the instructions caused a lot of confusion.', ['ambiguity'],
      'ambiguous → ambiguity (-ity).', { kc: FAM, hint: 'ambiguous', d: 3.1 })
    .type('Complète avec le nom formé sur « reliable » : « The ___ of the data has been questioned. »', ['reliability'],
      'reliable → reliability (-able devient -ability).', { kc: FAM, d: 3.0 })
    .type('Complète avec le verbe formé sur « clear » : « The rules need to be ___. » (= rendues plus claires)', ['clarified'],
      'clear → clarify → clarified (passif).', { kc: FAM, d: 3.1 })
    .mcq('Careful! « Inflammable » means:',
      ['that cannot burn', 'that burns easily', 'that has already burnt', 'that is fireproof'], 1,
      'inflammable = flammable : le in- n’est pas négatif ici. Ce qui ne brûle pas est non-flammable.', { d: 3.2 })
    .order('Son indécision a coûté cher à l’équipe.', 'His indecisiveness proved costly for the team.',
      'decide → decisive → indecisive → indecisiveness. proved costly = s’est révélé coûteux.', { kc: FAM, distractors: ['undecision', 'costing'], d: 3.2 })
    .tr('Je crois qu’on a sous-estimé la difficulté de la tâche.',
      ['I think we underestimated the difficulty of the task.', 'I think we have underestimated the difficulty of the task.', 'I think we underestimated how difficult the task was.', 'I believe we underestimated the difficulty of the task.'],
      'under- + estimate = sous-estimer.', { d: 3.1 })
    .listen('The film was massively overhyped, but the soundtrack is seriously underrated.', 'Que pense le locuteur ?',
      ['Le film et la musique sont excellents', 'Le film a été trop vanté, la musique mérite plus de reconnaissance', 'Le film est sous-estimé, la musique surestimée', 'Il n’a pas vu le film'], 1,
      'over- (trop) + hyped ; under- (pas assez) + rated.', { d: 3.1 })
    .dictation('The unpredictability of the weather made the expedition even more challenging.',
      'un- + predict + -able + -ity : unpredictability.', { kc: FAM, d: 3.2 })
    .say('Ses efforts ont été contre-productifs.',
      ['His efforts were counterproductive', 'Her efforts were counterproductive', 'His efforts proved counterproductive', 'Her efforts proved counterproductive', 'Their efforts were counterproductive'],
      'counterproductive, en un seul mot (parfois avec trait d’union).', { d: 3.0 })
    .answer('Describe a quality you value in a colleague or friend, using at least two nouns formed with suffixes (-ness, -ity, -ment…).',
      'What I value most in a colleague is reliability, because it builds trust, and a certain kindness and openness that make disagreements much easier to handle.',
      'Emploie des noms dérivés : reliability, honesty, kindness, openness, commitment…',
      { kc: FAM, d: 3.2, minWords: 15, keywords: [['reliability', 'honesty', 'generosity', 'creativity', 'flexibility', 'punctuality', 'curiosity', 'sincerity', 'integrity', 'loyalty'], ['kindness', 'openness', 'awareness', 'commitment', 'fairness', 'thoughtfulness', 'politeness', 'patience', 'enthusiasm']] })
    .build(),
};

export const lexis2: Lesson = {
  id: 'c2-lexis-2',
  cefr: 'C2',
  unitId: 'c2-lexis',
  title: 'Connotation et collocations',
  subtitle: 'Thrifty ou stingy, meet a deadline, bitterly cold',
  kcIds: [CONN, COLL],
  estMinutes: 10,
  explanation: [
    {
      title: 'Quasi-synonymes : la connotation',
      body: 'Deux mots peuvent décrire le même comportement tout en portant un jugement opposé. Au niveau C2, ce choix fait partie du message.',
      table: [
        ['positif', 'neutre', 'négatif'],
        ['thrifty', 'economical', 'stingy, mean'],
        ['assertive', 'confident', 'pushy'],
        ['determined', 'persistent', 'stubborn, obstinate'],
        ['frank', 'direct', 'blunt'],
        ['curious', 'interested', 'nosy'],
        ['renowned', 'well-known', 'notorious'],
        ['childlike', 'young', 'childish'],
      ],
      examples: [
        { en: 'She’s thrifty rather than stingy: she saves so she can be generous.', fr: 'Elle est économe plutôt que radine : elle épargne pour pouvoir être généreuse.' },
        { en: 'The bridge is notorious for its traffic jams.', fr: 'Le pont est tristement célèbre pour ses embouteillages.' },
      ],
      tip: 'Faux amis : « notorious » est négatif (tristement célèbre), alors que « notoire » est neutre en français. « childish » (puéril) critique, « childlike » (d’une fraîcheur enfantine) complimente.',
    },
    {
      title: 'Les collocations',
      table: [
        ['verbe + nom', 'make a decision, meet a deadline, draw a conclusion, strike a balance, pay attention, bear in mind'],
        ['adjectif + nom', 'heavy traffic, strong coffee, a slim chance, a sweeping generalisation'],
        ['adverbe + adjectif', 'bitterly cold, highly unlikely, deeply moving, fully aware, utterly exhausted'],
      ],
      examples: [
        { en: 'We need to strike a balance between speed and accuracy.', fr: 'Il nous faut trouver un équilibre entre rapidité et précision.' },
        { en: 'It is highly unlikely that the shop will open on Sunday.', fr: 'Il est très peu probable que la boutique ouvre dimanche.' },
      ],
      tip: 'Le verbe « faire » ne se traduit presque jamais par do dans ces expressions : faire une erreur = make a mistake, faire attention = pay attention, prendre une décision = make (ou take, en anglais britannique) a decision.',
    },
  ],
  exercises: exercises('c2-lexis-2', 'C2', { kc: CONN })
    .mcq('My grandmother never wastes anything; she’s very ___, and proud of it.',
      ['thrifty', 'stingy', 'mean', 'tight-fisted'], 0,
      'thrifty = économe (positif). stingy, mean et tight-fisted = radin (négatif), incompatible avec « proud of it ».', { d: 3.0 })
    .mcq('The town became ___ for its traffic jams after the new ring road opened.',
      ['notorious', 'renowned', 'celebrated', 'acclaimed'], 0,
      'notorious = tristement célèbre. renowned, celebrated et acclaimed sont élogieux.', { d: 3.1 })
    .cloze('Even at eighty, she has a wonderfully ___ sense of wonder.', ['childlike'],
      'childlike = d’une fraîcheur enfantine (positif) ; childish = puéril (négatif).', { hint: 'enfantin, au sens positif', d: 3.1 })
    .cloze('Despite the extra work, the team managed to ___ the deadline.', ['meet'],
      'meet a deadline = respecter une échéance.', { kc: COLL, hint: 'respecter (une échéance)', d: 3.0 })
    .cloze('It was ___ cold on the summit, so we didn’t stay long.', ['bitterly'],
      'bitterly cold = un froid mordant : collocation figée.', { kc: COLL, hint: 'adverbe : « amèrement »', d: 3.1 })
    .cloze('We need to ___ a balance between quality and cost.', ['strike', 'find'],
      'strike a balance (ou find a balance) = trouver un équilibre.', { kc: COLL, hint: 'frapper', d: 3.1 })
    .type('Corrige la collocation : « We must do a decision before Friday. »',
      ['We must make a decision before Friday.', 'We must take a decision before Friday.', 'We must reach a decision before Friday.'],
      'make (ou take, UK) a decision ; reach a decision = parvenir à une décision. Jamais « do ».', { kc: COLL, d: 3.0 })
    .order('Il est très peu probable qu’ils changent d’avis.', 'It is highly unlikely that they will change their minds.',
      'highly unlikely : highly s’associe aux adjectifs de probabilité.', { kc: COLL, distractors: ['strongly', 'much'], d: 3.0 })
    .tr('Il n’est pas économe, il est radin.',
      ['He isn’t thrifty, he’s stingy.', 'He is not thrifty, he is stingy.', 'He isn’t thrifty, he’s mean.', 'He isn’t economical, he’s stingy.', 'He isn’t frugal, he’s stingy.', 'He isn’t thrifty, he’s tight-fisted.'],
      'thrifty / frugal (positif) contre stingy / mean (négatif).', { d: 3.2 })
    .tr('Gardez à l’esprit que le musée ferme à 17 h.',
      ['Bear in mind that the museum closes at 5 pm.', 'Keep in mind that the museum closes at 5 pm.', 'Bear in mind that the museum closes at 5 p.m.', 'Bear in mind that the museum closes at five.', 'Keep in mind that the museum closes at five.', 'Bear in mind that the museum shuts at 5 pm.', 'Bear in mind the museum closes at 5 pm.'],
      'bear in mind / keep in mind = garder à l’esprit.', { kc: COLL, d: 3.1 })
    .mcq('How do the two descriptions differ?',
      ['They describe completely different behaviours', 'They describe similar behaviours, but Ben’s word choices are far more negative', 'Anna is more critical than Ben', 'Both are equally positive'], 1,
      'determined / stubborn, direct / blunt, careful with the budget / counts every penny : mêmes comportements, connotations opposées.',
      {
        d: 3.2,
        passage: 'Two colleagues describe the same manager. Anna: “Mark is determined and direct. He knows what he wants, tells you frankly what he thinks, and keeps a careful eye on the budget.” Ben: “Mark is stubborn and blunt. He never changes his mind, says exactly what he thinks whatever your feelings, and counts every penny.”',
      })
    .listen('I wouldn’t call her stubborn; she’s simply determined to see the project through.', 'Que fait la locutrice ?',
      ['Elle critique sa collègue', 'Elle remplace un mot péjoratif par un mot valorisant', 'Elle annonce l’abandon du projet', 'Elle avoue être têtue'], 1,
      'stubborn (péjoratif) est remplacé par determined (valorisant).', { d: 3.1 })
    .say('Il faut tirer des conclusions de cette expérience.',
      ['We need to draw conclusions from this experience', 'We must draw conclusions from this experience', 'We have to draw conclusions from this experience', 'We need to learn lessons from this experience', 'We need to draw lessons from this experience'],
      'draw a conclusion = tirer une conclusion.', { kc: COLL, d: 3.0 })
    .answer('Describe someone you know in two ways, first positively and then negatively, using near-synonyms (thrifty/stingy, determined/stubborn, confident/arrogant…).',
      'A friend would say my brother is determined and thrifty, but someone who dislikes him might call him stubborn and stingy, even though they mean exactly the same habits.',
      'Oppose un mot valorisant et son équivalent péjoratif.',
      { d: 3.3, minWords: 15, keywords: [['determined', 'thrifty', 'confident', 'assertive', 'frank', 'economical', 'curious'], ['stubborn', 'stingy', 'arrogant', 'pushy', 'blunt', 'mean', 'nosy', 'obstinate']] })
    .build(),
};
