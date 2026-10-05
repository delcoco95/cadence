import type { Lesson } from '../types';
import { exercises } from '../builders';

export const articlesPlurals: Lesson = {
  id: 'a2-basics-1',
  cefr: 'A2',
  unitId: 'a2-basics',
  title: 'Articles et pluriels',
  subtitle: 'a / an / the, et le -s du pluriel',
  kcIds: ['grammar.articles', 'grammar.plurals'],
  estMinutes: 6,
  explanation: [
    {
      title: 'a / an / the',
      table: [
        ['a + son consonne', 'a car, a university (/ju/)'],
        ['an + son voyelle', 'an apple, an hour (h muet)'],
        ['the', 'chose précise ou déjà connue : the car in the garage'],
        ['pas d’article', 'généralités au pluriel ou indénombrables : I like cats. Water is important.'],
      ],
      tip: 'Les métiers prennent un article : « I’m an engineer », jamais « I’m engineer ».',
    },
    {
      title: 'Pluriels',
      table: [
        ['+ s', 'book → books'],
        ['-s, -sh, -ch, -x → + es', 'bus → buses, box → boxes'],
        ['consonne + y → ies', 'city → cities (mais day → days)'],
        ['irréguliers', 'man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth'],
      ],
    },
  ],
  exercises: exercises('a2-basics-1', 'A2', { kc: 'grammar.articles' })
    .mcq('I’m ___ engineer.', ['a', 'an', 'the', '—'], 1, 'engineer commence par un son voyelle → an. Et un métier prend toujours un article.', { d: -1.5 })
    .mcq('She has ___ university degree.', ['a', 'an', 'the'], 0, 'university se prononce /ju:/ (son consonne) → a university.', { d: -0.5 })
    .mcq('Can you close ___ door, please?', ['a', 'an', 'the'], 2, 'On parle d’une porte précise (celle de la pièce) → the.', { d: -1 })
    .mcq('Choisis la phrase correcte.', ['I love the cats.', 'I love cats.', 'I love a cats.'], 1, 'Généralité au pluriel : pas d’article. « I love the cats » = j’aime ces chats-là.')
    .mcq('We waited for ___ hour.', ['a', 'an'], 1, 'hour : le h est muet → an hour.', { d: -0.5 })
    .type('child → pluriel ?', ['children'], 'child → children (irrégulier).', { kc: 'grammar.plurals', d: -1 })
    .type('person → pluriel ?', ['people'], 'person → people (irrégulier).', { kc: 'grammar.plurals', d: -1 })
    .cloze('There are three ___ in my team.', ['women'], 'woman → women.', { kc: 'grammar.plurals', hint: 'woman' })
    .cloze('I visited two big ___ last year.', ['cities'], 'consonne + y → -ies : city → cities.', { kc: 'grammar.plurals', hint: 'city' })
    .cloze('My ___ hurt after the run.', ['feet'], 'foot → feet.', { kc: 'grammar.plurals', hint: 'foot', d: 0 })
    .tr('C’est une bonne idée.', ["It's a good idea.", 'It is a good idea.', "That's a good idea.", 'That is a good idea.'], 'idea commence par une voyelle, mais « good » est devant → a good idea.')
    .tr('Mon père est médecin.', ['My father is a doctor.', 'My dad is a doctor.'], 'Métier → article obligatoire : a doctor.', { d: 0 })
    .listen('I need an umbrella and two boxes.', 'De quoi a-t-il besoin ?', ['Un parapluie et deux boîtes', 'Un parapluie et deux bus', 'Une valise et deux boîtes'], 0,
      'an umbrella (voyelle), boxes (box + es).', { kc: 'grammar.plurals' })
    .repeat('An apple, an hour, a university, a European city.', 'On choisit a / an selon le SON, pas la lettre : a European (/ju/), an hour (h muet).', { d: 0 })
    .say('Je suis {développeur|développeuse}.', ["I'm a developer", 'I am a developer', "I'm a software developer", 'I am a software developer'], 'Métier → a developer.')
    .build(),
};

export const pronounsPossessives: Lesson = {
  id: 'a2-basics-2',
  cefr: 'A2',
  unitId: 'a2-basics',
  title: 'Pronoms et possessifs',
  subtitle: 'I / me / my / mine, et le ’s',
  kcIds: ['grammar.pronouns', 'grammar.possessives'],
  estMinutes: 6,
  explanation: [
    {
      title: 'Le tableau à connaître',
      table: [
        ['sujet', 'I · you · he · she · it · we · they'],
        ['complément', 'me · you · him · her · it · us · them'],
        ['adjectif possessif', 'my · your · his · her · its · our · their'],
        ['pronom possessif', 'mine · yours · his · hers · — · ours · theirs'],
      ],
      tip: 'his / her dépend du possesseur, pas de l’objet : « Paul and his mother », « Marie and her father ».',
    },
    {
      title: 'Le génitif ’s',
      body: 'Pour la possession avec une personne : Tom’s car (la voiture de Tom), my parents’ house (pluriel en -s → apostrophe seule).',
      examples: [
        { en: 'This is Sarah’s laptop.', fr: 'C’est l’ordinateur de Sarah.' },
        { en: 'Is this bag yours? — Yes, it’s mine.', fr: 'Ce sac est à toi ? — Oui, c’est le mien.' },
      ],
    },
  ],
  exercises: exercises('a2-basics-2', 'A2', { kc: 'grammar.pronouns' })
    .mcq('Can you help ___? I don’t understand.', ['I', 'me', 'my'], 1, 'Après un verbe → pronom complément : help me.', { d: -1.5 })
    .mcq('Paul called ___ mother yesterday.', ['her', 'his', 'its'], 1, 'Le possesseur est Paul (masculin) → his, même si la mère est une femme.', { kc: 'grammar.possessives' })
    .mcq('Marie lives with ___ father.', ['his', 'her', 'their'], 1, 'Possesseur féminin → her.', { kc: 'grammar.possessives' })
    .mcq('This isn’t my phone. Mine is black. Is it ___?', ['your', 'yours', 'you'], 1, 'Pronom possessif sans nom derrière → yours.', { kc: 'grammar.possessives', d: 0 })
    .mcq('The company changed ___ logo.', ['it’s', 'its', 'his'], 1, 'its = son/sa (chose). it’s = it is.', { kc: 'grammar.possessives', d: 0 })
    .cloze('I saw Anna and Tom, and I talked to ___.', ['them'], 'Complément pluriel → them.', { hint: 'eux' })
    .cloze('We love ___ new flat.', ['our'], 'Adjectif possessif de we → our.', { kc: 'grammar.possessives', hint: 'notre' })
    .cloze('Is this ___ bag? (Tom)', ["Tom's"], 'Le génitif : Tom’s bag = le sac de Tom.', { kc: 'grammar.possessives', d: 0 })
    .order('Ce n’est pas ma voiture, c’est la sienne (à elle).', "It's not my car, it's hers.", 'Pronom possessif féminin : hers.', { kc: 'grammar.possessives', distractors: ['her', 'she'], d: 0 })
    .tr('C’est la maison de mes parents.', ["It's my parents' house.", "This is my parents' house.", "It is my parents' house.", "That's my parents' house."],
      'parents finit par -s → apostrophe seule : my parents’ house.', { kc: 'grammar.possessives', d: 0.5 })
    .tr('Il nous appelle tous les jours.', ['He calls us every day.'], 'Complément de we → us. Et he → calls.')
    .listen('Excuse me, is this your jacket? — No, it’s his.', 'À qui est la veste ?', ['À lui', 'À elle', 'À moi'], 0, 'his = le sien (à lui).', { kc: 'grammar.possessives' })
    .repeat('Is this yours or mine? I think it’s theirs.', 'Pronoms possessifs : yours, mine, theirs.', { kc: 'grammar.possessives' })
    .say('Donne-le-moi, s’il te plaît.', ['Give it to me please', 'Please give it to me', 'Give me it please'], 'Give it to me : le complément « me » après « to ».')
    .answer('Tell me about your family. What are their names?', 'My sister’s name is Léa and my brother’s name is Karim. Their children are very young.',
      'Utilise my, his, her, their et le ’s.', { keywords: [['my'], ['his', 'her', 'their', "'s"]], kc: 'grammar.possessives', minWords: 8 })
    .build(),
};

export const thereIsAre: Lesson = {
  id: 'a2-basics-3',
  cefr: 'A2',
  unitId: 'a2-basics',
  title: 'There is / there are',
  subtitle: 'Il y a… et les prépositions de lieu',
  kcIds: ['grammar.there_is', 'grammar.prepositions.place'],
  estMinutes: 6,
  explanation: [
    {
      title: 'Structure',
      table: [
        ['singulier / indénombrable', 'There is (there’s) a café near my office.'],
        ['pluriel', 'There are two meeting rooms.'],
        ['négation', 'There isn’t any milk. / There aren’t any chairs.'],
        ['question', 'Is there a lift? — Yes, there is. / Are there any shops?'],
        ['passé', 'There was / There were'],
      ],
    },
    {
      title: 'Prépositions de lieu',
      table: [
        ['in', 'dans : in the box, in Paris'],
        ['on', 'sur (en contact) : on the table, on the wall'],
        ['under', 'sous'],
        ['next to', 'à côté de'],
        ['between', 'entre'],
        ['in front of / behind', 'devant / derrière'],
        ['opposite', 'en face de'],
      ],
    },
  ],
  exercises: exercises('a2-basics-3', 'A2', { kc: 'grammar.there_is' })
    .mcq('___ a problem with my computer.', ['There is', 'There are', 'It has'], 0, 'Singulier → there is. « Il y a » ne se traduit jamais par « it has ».', { d: -1.5 })
    .mcq('___ five people in the meeting room.', ['There is', 'There are', 'They are'], 1, 'Pluriel → there are.', { d: -1.5 })
    .mcq('___ any coffee left?', ['Is there', 'Are there', 'There is'], 0, 'coffee est indénombrable → singulier : Is there any coffee?')
    .mcq('Le chat est sous la table.', ['The cat is on the table.', 'The cat is under the table.', 'The cat is in the table.'], 1, 'sous = under.', { kc: 'grammar.prepositions.place' })
    .mcq('The bank is ___ the pharmacy and the post office.', ['between', 'next', 'opposite of'], 0, 'entre deux choses → between.', { kc: 'grammar.prepositions.place' })
    .cloze('There ___ two bedrooms in my flat.', ['are'], 'two bedrooms → pluriel → are.')
    .cloze('There ___ a lot of traffic this morning.', ['was'], 'traffic est indénombrable, et « this morning » (passé) → there was.', { d: 0 })
    .cloze('The poster is ___ the wall.', ['on'], 'Sur une surface verticale → on the wall.', { kc: 'grammar.prepositions.place' })
    .cloze('My car is parked in front ___ the building.', ['of'], 'in front of = devant.', { kc: 'grammar.prepositions.place' })
    .order('Est-ce qu’il y a une pharmacie près d’ici ?', 'Is there a pharmacy near here?', 'Question : Is there + a + nom.', { distractors: ['are', 'it'] })
    .tr('Il n’y a pas de wifi dans l’hôtel.', ["There isn't any wifi in the hotel.", "There's no wifi in the hotel.", 'There is no wifi in the hotel.', "There isn't wifi in the hotel.", 'There is not any wifi in the hotel.'],
      'There isn’t any… ou There’s no…', { d: 0 })
    .tr('Il y avait beaucoup de monde.', ['There were a lot of people.', 'There were many people.', 'There were lots of people.'], 'people est pluriel → there were.', { d: 0.5 })
    .listen('There’s a supermarket opposite the station.', 'Où est le supermarché ?', ['En face de la gare', 'À côté de la gare', 'Dans la gare'], 0,
      'opposite = en face de.', { kc: 'grammar.prepositions.place' })
    .dictation('There are two chairs next to the window.', 'there are + pluriel, next to = à côté de.')
    .say('Il y a un problème.', ["There's a problem", 'There is a problem'], 'Il y a = there is.')
    .answer('Describe your bedroom or your office. What is there?', 'In my bedroom there is a big bed, and there are two lamps next to the window.',
      'Utilise there is / there are et des prépositions de lieu.', { keywords: [['there is', "there's", 'there are'], ['in', 'on', 'next to', 'under', 'between', 'behind', 'opposite']], minWords: 10 })
    .build(),
};
