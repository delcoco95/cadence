import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const ND = 'b2.relative.non_defining';
const R = 'b2.relative.reduced';
const CON = 'b2.linking.concession';
const CT = 'b2.linking.contrast';

export const linkingUnit: Unit = {
  id: 'b2-linking',
  cefr: 'B2',
  title: 'Relier ses idées',
  description: 'Relatives explicatives et réduites, concession et contraste (although, despite, whereas, however, nevertheless) pour écrire des phrases plus riches.',
  lessonIds: ['b2-linking-1', 'b2-linking-2'],
  canDo: [
    'Je peux ajouter des précisions dans une phrase avec des relatives (which, whose, where) ou des participes.',
    'Je peux nuancer et opposer des arguments avec although, despite, whereas, however ou nevertheless.',
  ],
};

const ART_CENTRE =
  'The Halden Art Centre, which opened in a former paper mill in 2015, has quickly become one of the region’s most visited attractions. Its founder, Marta Lind, whose family had owned the mill for three generations, wanted the building to stay open to the public rather than be turned into luxury flats. Visitors arriving by car are asked to leave it in the village and walk the last kilometre along the river, a rule which some local businesses have criticised. The café, run by students from the nearby catering school, serves only local produce.';

export const linking1: Lesson = {
  id: 'b2-linking-1',
  cefr: 'B2',
  unitId: 'b2-linking',
  title: 'Relatives explicatives et réduites',
  subtitle: 'which, whose, where… et les participes',
  kcIds: [ND, R],
  estMinutes: 8,
  explanation: [
    {
      title: 'Relative explicative (non-defining)',
      body: 'Elle ajoute une information supplémentaire, non indispensable pour identifier la personne ou la chose. Elle est encadrée de virgules, n’accepte pas that, et le pronom ne peut pas être omis.',
      table: [
        ['personne', 'who', 'My boss, who is Irish, speaks four languages.'],
        ['chose', 'which', 'The Eiffel Tower, which opened in 1889, …'],
        ['possession (dont)', 'whose', 'Marie, whose husband is a pilot, …'],
        ['lieu', 'where', 'Lyon, where I studied, …'],
        ['toute la proposition (ce qui)', ', which', 'He forgot my birthday, which upset me.'],
      ],
      tip: '« ce qui » reprenant toute une phrase se traduit par , which, jamais par what : « He was late, what annoyed me » ✗ → « He was late, which annoyed me » ✓.',
    },
    {
      title: 'Relatives réduites',
      body: 'On peut supprimer le pronom relatif et be pour alléger la phrase.',
      table: [
        ['sens actif → -ing', 'the man (who is) sitting next to me'],
        ['sens passif → participe passé', 'a novel (which was) written in 1920'],
      ],
      examples: [
        { en: 'Anyone wanting a refund should keep the receipt.', fr: 'Toute personne souhaitant un remboursement doit garder le ticket.' },
        { en: 'The paintings stolen last year have been found.', fr: 'Les tableaux volés l’an dernier ont été retrouvés.' },
      ],
    },
  ],
  exercises: exercises('b2-linking-1', 'B2', { kc: ND })
    .mcq('He missed the deadline again, ___ really annoyed his manager.', ['what', 'which', 'that'], 1,
      ', which reprend toute la proposition précédente (= ce qui).', { d: 1.1 })
    .cloze('The architect, ___ designs have won several awards, will give a talk tonight.', ['whose'],
      'Possession (les créations de l’architecte) → whose.', { d: 1.1 })
    .cloze('We stayed in Porto, ___ my grandparents were born.', ['where'],
      'Lieu → where.', { d: 0.9 })
    .cloze('Anyone ___ to join the trip should sign up by Friday.', ['wishing'],
      'Relative réduite active : who wishes → wishing.', { kc: R, hint: 'wish', d: 1.3 })
    .cloze('Most of the goods ___ in this factory are exported to Asia.', ['produced'],
      'Relative réduite passive : which are produced → produced.', { kc: R, hint: 'produce', d: 1.2 })
    .mcq('The woman ___ to the manager is our new client.', ['talking', 'talked', 'is talking'], 0,
      'Sens actif (who is talking) → participe en -ing : talking.', { kc: R, d: 1.1 })
    .type('Relie avec une relative explicative : « Paris is very expensive. I lived there for six years. » (Paris, where…)',
      ['Paris, where I lived for six years, is very expensive.'],
      'where remplace there ; la relative s’insère entre virgules après Paris.', { d: 1.3 })
    .order('Les photos prises pendant le voyage sont magnifiques.', 'The photos taken during the trip are beautiful.',
      'Relative réduite passive : (which were) taken.', { kc: R, distractors: ['which', 'took'], d: 1.2 })
    .mcq('Pourquoi Marta Lind a-t-elle créé le centre d’art ?',
      ['Pour que le bâtiment reste ouvert au public', 'Pour vendre des appartements de luxe', 'Pour former des élèves en cuisine'], 0,
      '« wanted the building to stay open to the public rather than be turned into luxury flats ». Repère les relatives : which opened…, whose family…',
      { kc: [ND, R], d: 1.3, passage: ART_CENTRE })
    .listen('The hotel, which had been closed for two years, has finally reopened.', 'Qu’apprend-on sur l’hôtel ?',
      ['Il a rouvert après deux ans de fermeture', 'Il va fermer pendant deux ans', 'Il a ouvert il y a deux ans'], 0,
      'La relative which had been closed… donne l’information supplémentaire.', { d: 1.0 })
    .dictation('Our manager, who rarely praises anyone, said the project was excellent.', 'Relative explicative entre virgules : who rarely praises anyone.', { d: 1.2 })
    .tr('Mon voisin, dont le fils est médecin, m’a donné de bons conseils.',
      ['My neighbour, whose son is a doctor, gave me some good advice.', 'My neighbor, whose son is a doctor, gave me some good advice.',
        'My neighbour, whose son is a doctor, gave me good advice.', 'My neighbor, whose son is a doctor, gave me good advice.'],
      'dont + possession → whose. advice est indénombrable : some good advice, pas « advices ».', { d: 1.3 })
    .tr('Il a démissionné, ce qui a surpris tout le monde.',
      ['He resigned, which surprised everyone.', 'He resigned, which surprised everybody.', 'He quit, which surprised everyone.',
        'He resigned, which took everyone by surprise.', 'He handed in his notice, which surprised everyone.'],
      '« ce qui » reprenant la phrase → , which.', { d: 1.2 })
    .say('L’homme assis à côté de moi parlait sans arrêt.',
      ['The man sitting next to me talked non-stop', 'The man sitting next to me was talking non-stop', 'The man sitting next to me talked nonstop',
        'The man sitting next to me kept talking', 'The man who was sitting next to me talked non-stop'],
      'Relative réduite active : (who was) sitting. « assis » se dit sitting, pas « sat ».', { kc: R, d: 1.3 })
    .answer('Describe a place that is important to you. Use a non-defining relative clause (which, where, who…).',
      'My grandmother’s village, which is in the mountains, is the place where I spent every summer as a child.',
      'Ajoute une information entre virgules avec which, where, who ou whose.', { keywords: [['which', 'where', 'who', 'whose']], minWords: 14, d: 1.3 })
    .build(),
};

const CARS =
  'Should cities ban cars from their centres? Supporters point to cleaner air and quieter streets, and the evidence from several European cities is encouraging. Nevertheless, the picture is more complicated than it seems. Although many residents welcome the change, shop owners often report a fall in customers during the first year. Older people and those with disabilities, who may depend on cars, can also feel excluded. Whereas young commuters happily switch to bikes, others simply stop coming into town. Despite these concerns, I believe a gradual ban, combined with better public transport, is the right way forward.';

export const linking2: Lesson = {
  id: 'b2-linking-2',
  cefr: 'B2',
  unitId: 'b2-linking',
  title: 'Concession et contraste',
  subtitle: 'although, despite, whereas, however, nevertheless',
  kcIds: [CON, CT],
  estMinutes: 8,
  explanation: [
    {
      title: 'Concession : « bien que », « malgré »',
      table: [
        ['although / even though', '+ sujet + verbe', 'Although it was late, we went out.'],
        ['despite / in spite of', '+ nom ou -ing', 'Despite the rain, we went out. / In spite of being tired, …'],
        ['despite the fact that', '+ sujet + verbe', 'Despite the fact that it was raining, …'],
      ],
      examples: [
        { en: 'Even though she was nervous, she gave a great speech.', fr: 'Même si elle était nerveuse, elle a fait un excellent discours.' },
        { en: 'Despite having little experience, he got the job.', fr: 'Malgré son peu d’expérience, il a obtenu le poste.' },
      ],
      tip: 'Trois erreurs typiques : « despite of » ✗ (despite OU in spite of) ; « despite it was late » ✗ (despite + nom) ; « Although…, but… » ✗ (un seul connecteur suffit).',
    },
    {
      title: 'Contraste entre deux idées',
      table: [
        ['whereas / while', 'dans la même phrase', 'I love jazz, whereas my wife prefers rock.'],
        ['however', 'nouvelle phrase, suivi d’une virgule', 'The plan is good. However, it is expensive.'],
        ['nevertheless / nonetheless', 'plus formel : « néanmoins »', 'It was risky. Nevertheless, they went ahead.'],
      ],
      tip: 'however n’est pas une conjonction : « It was cheap, however it broke » ✗ → « It was cheap. However, it broke. » ✓ (ou un point-virgule).',
    },
  ],
  exercises: exercises('b2-linking-2', 'B2', { kc: CON })
    .mcq('___ the rain, the festival went ahead as planned.', ['Although', 'Despite', 'However'], 1,
      'Suivi d’un nom (the rain) → despite.', { d: 0.9 })
    .mcq('___ he had trained for months, he didn’t finish the race.', ['Despite', 'In spite of', 'Even though'], 2,
      'Suivi d’une proposition (sujet + verbe) → even though / although.', { d: 1.0 })
    .cloze('Despite ___ the best candidate, he didn’t get the job.', ['being'],
      'despite + -ing : despite being.', { hint: 'be', d: 1.1 })
    .mcq('My brother loves crowded cities, ___ I prefer the countryside.', ['whereas', 'despite', 'nevertheless'], 0,
      'Contraste entre deux sujets dans la même phrase → whereas.', { kc: CT, d: 1.0 })
    .cloze('The project was over budget. ___, the client was delighted with the result.', ['Nevertheless', 'However', 'Nonetheless', 'Even so', 'Still'],
      'Nouvelle phrase qui s’oppose à la précédente → Nevertheless / However, suivi d’une virgule.', { kc: CT, hint: 'malgré tout', d: 1.1 })
    .type('Réécris avec despite : « Although it was late, we went for a walk. »',
      ['Despite it being late, we went for a walk.', 'Despite the late hour, we went for a walk.', 'Despite the fact that it was late, we went for a walk.',
        'We went for a walk despite it being late.', 'We went for a walk despite the fact that it was late.', 'We went for a walk despite the late hour.'],
      'despite + nom, + -ing, ou + the fact that + proposition.', { d: 1.5 })
    .order('Bien qu’il soit riche, il vit très simplement.', 'Although he is rich, he lives very simply.',
      'although + sujet + verbe, sans but dans la seconde partie.', { distractors: ['Despite', 'but'], d: 1.0 })
    .mcq('Quelle est la position finale de l’auteur ?',
      ['Il est favorable à une interdiction progressive avec de meilleurs transports', 'Il est opposé à toute interdiction', 'Il veut d’abord aider les commerçants à déménager'], 0,
      '« Despite these concerns, I believe a gradual ban… is the right way forward. » Les connecteurs (Nevertheless, Although, Whereas, Despite) structurent l’argumentation.',
      { kc: [CT, CON], d: 1.4, passage: CARS })
    .listen('Even though the tickets were really expensive, the concert was sold out in an hour.', 'Qu’est-ce qui est surprenant ?',
      ['Le concert a affiché complet malgré des billets très chers', 'Les billets étaient bon marché', 'Le concert a été annulé au bout d’une heure'], 0,
      'Even though = même si ; sold out = complet.', { d: 1.1 })
    .listen('Online courses are cheaper and more flexible, whereas classroom courses offer more contact with teachers.', 'Quel avantage ont les cours en présentiel ?',
      ['Plus de contact avec les enseignants', 'Ils sont moins chers', 'Ils sont plus flexibles'], 0,
      'whereas introduit le contraste : classroom courses offer more contact.', { kc: CT, d: 1.1 })
    .dictation('Despite the strike, most employees managed to get to work.', 'Despite + nom, sans of.', { d: 1.0 })
    .tr('Malgré la crise, l’entreprise a embauché cinquante personnes.',
      ['Despite the crisis, the company hired fifty people.', 'Despite the crisis, the company hired 50 people.', 'In spite of the crisis, the company hired fifty people.',
        'In spite of the crisis, the company hired 50 people.', 'Despite the crisis, the company took on fifty people.', 'Despite the crisis, the company recruited fifty people.',
        'Despite the crisis, the firm hired fifty people.'],
      'malgré + nom → despite / in spite of + nom.', { d: 1.2 })
    .tr('Mon frère est très sportif, alors que moi, je déteste le sport.',
      ['My brother is very sporty, whereas I hate sport.', 'My brother is very sporty, while I hate sport.', 'My brother is very sporty, whereas I hate sports.',
        'My brother is very sporty, while I hate sports.', 'My brother is very athletic, whereas I hate sport.', 'My brother is very athletic, while I hate sports.'],
      'alors que (opposition) → whereas / while.', { kc: CT, d: 1.2 })
    .say('Bien qu’elle soit fatiguée, elle a continué à travailler.',
      ['Although she was tired, she kept working', 'Even though she was tired, she kept working', 'Although she was tired, she carried on working',
        'Although she was tired, she continued working', 'Although she was tired, she continued to work', 'Despite being tired, she kept working'],
      'although + proposition, ou despite + -ing.', { d: 1.2 })
    .answer('What are the advantages and disadvantages of working from home?',
      'Working from home saves a lot of time; however, some people feel isolated, whereas others enjoy the peace and quiet.',
      'Oppose les arguments avec however, whereas, although ou despite.',
      { kc: [CT, CON], keywords: [['however', 'although', 'whereas', 'while', 'despite', 'nevertheless', 'even though', 'in spite of']], minWords: 15, d: 1.4 })
    .build(),
};
