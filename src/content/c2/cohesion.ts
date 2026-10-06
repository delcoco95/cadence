import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const ELL = 'c2.cohesion.ellipsis';
const SUB = 'c2.cohesion.substitution';
const CONC = 'c2.concession.advanced';
const FRONT = 'c2.concession.fronted';

export const cohesionUnit: Unit = {
  id: 'c2-cohesion',
  cefr: 'C2',
  title: 'Cohésion et concession',
  description: 'Ellipse et substitution pour éviter les répétitions ; concession soutenue avec much as, for all, granted, albeit et l’antéposition (Tired as she was…).',
  lessonIds: ['c2-cohesion-1', 'c2-cohesion-2'],
  canDo: [
    'Je peux enchaîner mes idées sans répétition grâce à l’ellipse et à la substitution (so, not, do so, ones, that of).',
    'Je peux nuancer une argumentation en concédant un point avec des structures soutenues (much as, for all, albeit, Strange as it may seem…).',
  ],
};

export const cohesion1: Lesson = {
  id: 'c2-cohesion-1',
  cefr: 'C2',
  unitId: 'c2-cohesion',
  title: 'Ellipse et substitution',
  subtitle: 'Dire moins pour dire mieux',
  kcIds: [ELL, SUB],
  estMinutes: 10,
  explanation: [
    {
      title: 'La substitution',
      body: 'Un mot court remplace un groupe déjà mentionné. C’est l’un des marqueurs les plus sûrs d’un anglais naturel.',
      table: [
        ['so / not (proposition)', 'Is it open? — I think so. / I hope not.'],
        ['do so / did so (action)', 'She promised to reply, and she did so the next day.'],
        ['one / ones (nom dénombrable)', 'I prefer the black ones.'],
        ['that of / those of', 'The climate of Nice is milder than that of Lille.'],
        ['the former / the latter', 'Between tea and coffee, I prefer the latter.'],
      ],
      examples: [
        { en: 'Will it rain tomorrow? — I’m afraid so.', fr: 'Il va pleuvoir demain ? — J’en ai bien peur.' },
        { en: 'The salaries in this sector are higher than those in retail.', fr: 'Les salaires de ce secteur sont plus élevés que ceux du commerce.' },
      ],
      tip: '« Je pense que oui » = I think so ; « j’espère que non » = I hope not (et non « I don’t hope so »). Pour « je ne pense pas », l’usage courant est I don’t think so ; « I think not » est rare et soutenu.',
    },
    {
      title: 'L’ellipse',
      body: 'On omet ce qui se devine, en gardant l’élément grammatical minimal : l’auxiliaire, le « to » de l’infinitif, ou une formule figée.',
      table: [
        ['après un auxiliaire', 'She said she’d help, and she did.'],
        ['après to', 'Would you like to come? — I’d love to.'],
        ['comparaison', 'It took longer than expected.'],
        ['formules', 'if so, if not, if necessary, if possible'],
      ],
      examples: [
        { en: 'I didn’t expect to enjoy the play, but I did.', fr: 'Je ne pensais pas apprécier la pièce, mais si.' },
        { en: 'Bring a jacket if necessary.', fr: 'Prends une veste si nécessaire.' },
      ],
      tip: 'Le « to » ne disparaît pas : « I’d love! » ✗ → « I’d love to! » ✓. Et la réponse courte reprend l’auxiliaire de la question : « Have you finished? — Yes, I have », pas « Yes, I finished ».',
    },
  ],
  exercises: exercises('c2-cohesion-1', 'C2', { kc: SUB })
    .mcq('Will the meeting be cancelled? — I hope ___. I’ve prepared for it all week.',
      ['not', 'no', 'so not', 'don’t'], 0,
      'I hope not = j’espère que non. not remplace toute la proposition négative.', { d: 3.0 })
    .cloze('Is the museum open on Sundays? — I believe ___, but check the website.', ['so'],
      'I believe so = je crois que oui : so remplace « the museum is open on Sundays ».', { hint: 'reprise d’une proposition', d: 3.0 })
    .cloze('The population of Lyon is larger than ___ of Bordeaux.', ['that'],
      'that of = celle de : reprise d’un nom singulier (the population).', { hint: 'pronom de reprise', d: 3.0 })
    .cloze('Would you like to join us for the concert? — I’d love ___!', ['to'],
      'Ellipse de l’infinitif : on garde « to » (I’d love to).', { kc: ELL, hint: 'ellipse de l’infinitif', d: 3.0 })
    .cloze('The committee asked members to submit their proposals by May, and most of them did ___.', ['so'],
      'do so reprend une action déjà mentionnée (submit their proposals by May).', { hint: 'reprise de l’action', d: 3.2 })
    .mcq('We considered Lisbon and Prague. The ___, being closer to the sea, won the vote.',
      ['former', 'latter', 'first one of them', 'precedent'], 0,
      'the former = le premier cité (Lisbon, au bord de la mer). the latter désignerait Prague.', { d: 3.1 })
    .type('Supprime la répétition par ellipse : « She said she would finish the report by Friday, and she finished the report by Friday. »',
      ['She said she would finish the report by Friday, and she did.', 'She said she would finish the report by Friday and she did.', 'She said she would finish the report by Friday, and she did so.'],
      'L’auxiliaire seul (did) ou do so suffit à reprendre l’action entière.', { kc: ELL, d: 3.2 })
    .type('Remplace le nom répété par « ones » : « I don’t like the red shoes; I prefer the black shoes. »',
      ['I don’t like the red shoes; I prefer the black ones.', 'I don’t like the red shoes, I prefer the black ones.'],
      'ones remplace un nom dénombrable pluriel déjà cité.', { d: 3.0 })
    .order('Le projet a coûté plus cher que prévu.', 'The project cost more than expected.',
      'Ellipse dans la comparaison : than expected (= than we had expected).', { kc: ELL, distractors: ['was', 'it'], d: 3.0 })
    .tr('Malheureusement non, j’en ai bien peur.',
      ['I’m afraid not.', 'I am afraid not.', 'Unfortunately not, I’m afraid.', 'Sadly not, I’m afraid.'],
      'I’m afraid not = j’ai bien peur que non : not remplace la proposition négative.', { d: 3.0 })
    .tr('Si c’est le cas, merci de nous prévenir.',
      ['If so, please let us know.', 'If so, please inform us.', 'If that is the case, please let us know.', 'If so, please tell us.'],
      'If so = si c’est le cas : ellipse figée, très courante à l’écrit professionnel.', { kc: ELL, d: 3.1 })
    .listen('I wasn’t planning to go to the conference, but in the end I did, and I’m glad I did.', 'Le locuteur est-il allé à la conférence ?',
      ['Non, il avait d’autres projets', 'Oui, et il ne le regrette pas', 'Oui, mais il le regrette', 'Il ira l’année prochaine'], 1,
      '« in the end I did » = finalement j’y suis allé ; « I’m glad I did » = je suis content de l’avoir fait.', { kc: ELL, d: 3.0 })
    .listen('Some delegates preferred the morning session, others the afternoon one; the latter turned out to be far livelier.', 'Quelle séance a été la plus animée ?',
      ['Celle du matin', 'Celle de l’après-midi', 'Les deux autant', 'Aucune des deux'], 1,
      'the latter = le second élément cité (the afternoon one).', { d: 3.2 })
    .say('Je pense que oui, mais je n’en suis pas sûr.',
      ['I think so, but I am not sure', 'I think so, but I am not certain', 'I believe so, but I am not sure', 'I think so, but I am not completely sure'],
      '« Je pense que oui » = I think so.', { d: 3.0 })
    .answer('A colleague asks: « Did you manage to finish the presentation, and will you send it to the client today? » Answer naturally, avoiding repetition.',
      'Yes, I did, although it took longer than expected; I hope to send it this afternoon, and if not, I’ll do so first thing tomorrow.',
      'Réponds avec l’auxiliaire seul (I did), une ellipse (than expected, if not) ou une substitution (do so, I hope so).',
      { kc: ELL, d: 3.3, minWords: 15, keywords: [['i did', 'i have', 'do so', 'if not', 'if so', 'hope so', 'think so', 'than expected', 'i will']] })
    .build(),
};

export const cohesion2: Lesson = {
  id: 'c2-cohesion-2',
  cefr: 'C2',
  unitId: 'c2-cohesion',
  title: 'Concession et contraste soutenus',
  subtitle: 'Much as, for all, granted, albeit, Tired as she was…',
  kcIds: [CONC, FRONT],
  estMinutes: 10,
  explanation: [
    {
      title: 'Connecteurs de concession soutenus',
      table: [
        ['Much as + proposition', 'bien que, j’ai beau…', 'Much as I like him, I can’t agree.'],
        ['For all + groupe nominal', 'malgré (tout)', 'For all its flaws, the film is moving.'],
        ['Granted (that) + proposition', 'certes, admettons que', 'Granted, it’s expensive.'],
        ['albeit + adjectif / adverbe', 'quoique, bien que', 'It worked, albeit slowly.'],
        ['notwithstanding + groupe nominal', 'nonobstant (très soutenu)', 'Notwithstanding the delays, the project succeeded.'],
      ],
      examples: [
        { en: 'Much as I enjoy city life, I need the countryside at weekends.', fr: 'J’ai beau aimer la vie urbaine, j’ai besoin de la campagne le week-end.' },
        { en: 'For all his fame, he remained remarkably modest.', fr: 'Malgré toute sa célébrité, il est resté remarquablement modeste.' },
      ],
      tip: '« For all » ne signifie pas « pour tous » ici, mais « malgré tout(e) ». « Much as » n’est pas une comparaison (« autant que ») : en tête de phrase, il concède. albeit ne se construit jamais avec une proposition complète : « albeit it was slow » ✗.',
    },
    {
      title: 'La concession par antéposition',
      body: 'On place l’adjectif, l’adverbe ou le verbe en tête, suivi de as ou though, puis du sujet et du verbe. Le sens est concessif (« aussi… que », « avoir beau »), jamais causal.',
      table: [
        ['adjectif + as / though + sujet + verbe', 'Tired as she was, she kept going.'],
        ['adverbe + as / though + sujet + verbe', 'Hard though we tried, we failed.'],
        ['verbe + as + sujet + might / may', 'Try as I might, I couldn’t open it.'],
        ['…as it may seem', 'Strange as it may seem, he has never flown.'],
      ],
      examples: [
        { en: 'Small as it is, the flat has a wonderful view.', fr: 'Tout petit qu’il soit, l’appartement a une vue magnifique.' },
      ],
      tip: 'Piège : « Tired as she was » signifie « bien qu’elle soit fatiguée », pas « comme elle était fatiguée ». En anglais américain on entend aussi « As tired as she was, … » avec le même sens, mais la forme sans le premier as est la référence soutenue.',
    },
  ],
  exercises: exercises('c2-cohesion-2', 'C2', { kc: CONC })
    .mcq('___ I admire her dedication, I cannot agree with her methods.',
      ['Much as', 'As long as', 'So much', 'Insofar'], 0,
      'Much as = bien que, j’ai beau : concession en tête de phrase.', { d: 3.0 })
    .mcq('___ its small size, the gallery holds an impressive collection.',
      ['For all', 'Although', 'Even though', 'Despite of'], 0,
      'For all + groupe nominal = malgré. Although et even though exigent une proposition ; « despite of » n’existe pas.', { d: 3.1 })
    .cloze('The plan worked, ___ more slowly than we had hoped.', ['albeit'],
      'albeit + adverbe ou adjectif = quoique : concession compacte, sans proposition.', { hint: 'quoique (+ adverbe)', d: 3.2 })
    .type('Réécris avec « For all » : « Although he has a lot of experience, he still asks for advice. »',
      ['For all his experience, he still asks for advice.', 'For all his experience, he still asks other people for advice.'],
      'For all + possessif + nom : la proposition « he has a lot of experience » devient « his experience ».', { d: 3.4 })
    .type('Réécris en commençant par « Tired as » : « Although she was tired, she finished the race. »',
      ['Tired as she was, she finished the race.', 'Tired as she was, she still finished the race.'],
      'Adjectif + as + sujet + verbe : concession par antéposition.', { kc: FRONT, d: 3.3 })
    .cloze('___ as I might, I couldn’t remember the name of the hotel.', ['Try'],
      'Try as I might = j’avais beau essayer.', { kc: FRONT, hint: 'try', d: 3.2 })
    .order('Aussi étrange que cela puisse paraître, il n’a jamais pris l’avion.', 'Strange though it may seem, he has never flown.',
      'Adjectif + though + it may seem : concession soutenue.', { kc: FRONT, distractors: ['as if', 'is'], d: 3.2 })
    .tr('Malgré tous ses défauts, j’adore cette ville.',
      ['For all its faults, I love this city.', 'For all its flaws, I love this city.', 'Despite all its faults, I love this city.', 'Despite all its flaws, I love this city.', 'For all its faults, I adore this city.'],
      '« Malgré tous ses défauts » = For all its faults (its : la ville).', { d: 3.2 })
    .tr('Aussi intelligent soit-il, il ne peut pas tout savoir.',
      ['Clever as he is, he cannot know everything.', 'Intelligent as he is, he cannot know everything.', 'However clever he is, he cannot know everything.', 'However intelligent he is, he cannot know everything.', 'Clever though he is, he cannot know everything.', 'Clever as he may be, he cannot know everything.'],
      'Adjectif + as + sujet + verbe, ou However + adjectif + sujet + verbe.', { kc: FRONT, d: 3.4 })
    .mcq('What is the writer’s overall position?',
      ['Strongly opposed to pedestrianisation', 'Supportive of the plan but critical of how it has been handled', 'Indifferent to the plan', 'Convinced the plan will fail completely'], 1,
      'Much as I welcome… / Granted… / For all the talk of consultation… / albeit : chaque concession accepte le projet tout en critiquant la méthode.',
      {
        d: 3.3,
        passage: 'Much as I welcome the council’s plan to pedestrianise the high street, I cannot help feeling that local shopkeepers have been left out of the conversation. Granted, footfall may well increase once the cars are gone. For all the talk of consultation, however, not a single trader I have spoken to was invited to the planning meetings. The scheme may succeed, albeit at the cost of considerable goodwill.',
      })
    .listen('Much as I’d love to stay for dinner, I really must catch the last train.', 'Que fait le locuteur ?',
      ['Il accepte de rester dîner', 'Il décline poliment l’invitation', 'Il propose d’aller dîner en ville', 'Il a manqué le dernier train'], 1,
      '« Much as I’d love to… » adoucit un refus.', { d: 3.0 })
    .listen('Hard though we tried, we couldn’t get the old projector to work.', 'Ont-ils réussi à faire fonctionner le projecteur ?',
      ['Oui, après beaucoup d’efforts', 'Non, malgré leurs efforts', 'Ils n’ont pas essayé', 'Oui, du premier coup'], 1,
      '« Hard though we tried » = nous avions beau essayer.', { kc: FRONT, d: 3.1 })
    .say('Certes, c’est cher, mais la qualité est excellente.',
      ['Granted, it is expensive, but the quality is excellent', 'Admittedly, it is expensive, but the quality is excellent', 'Granted, it is pricey, but the quality is excellent', 'Admittedly, it is expensive, but the quality is outstanding'],
      'Granted / Admittedly = certes, avant de défendre son point de vue.', { d: 3.0 })
    .answer('Talk about something you like despite its drawbacks (a city, a job, a hobby), using « Much as », « For all » or « adjective + as + subject ».',
      'For all its rainy weather and crowded trains, I love living in Manchester, and much as I miss the sunshine of home, I wouldn’t move back.',
      'Concède les défauts avec For all, Much as ou une antéposition, puis affirme ton attachement.',
      { kc: [CONC, FRONT], d: 3.3, minWords: 15, keywords: [['much as', 'for all', 'granted', 'albeit', 'as it is', 'though it', 'as it may', 'as i might']] })
    .build(),
};
