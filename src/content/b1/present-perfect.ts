import type { Lesson } from '../types';
import { exercises } from '../builders';

const FORM = 'b1.tense.present_perfect.form';
const EXP = 'b1.tense.present_perfect.experience';
const JAY = 'b1.tense.present_perfect.just_already_yet';
const VS = 'b1.tense.contrast.pp_vs_past';

export const presentPerfect1: Lesson = {
  id: 'b1-present-perfect-1',
  cefr: 'B1',
  unitId: 'b1-present-perfect',
  title: 'Present perfect : l’expérience',
  subtitle: 'Have you ever…? I’ve never…',
  kcIds: [FORM, EXP],
  estMinutes: 8,
  explanation: [
    {
      title: 'Forme',
      body: 'have / has + participe passé (3ᵉ colonne des verbes irréguliers, -ed pour les réguliers).',
      table: [
        ['affirmation', 'I / you / we / they have (’ve) seen · he / she / it has (’s) seen'],
        ['négation', 'I haven’t seen · she hasn’t seen'],
        ['question', 'Have you seen…? · Has he seen…?'],
      ],
      examples: [
        { en: 'I’ve visited Scotland twice.', fr: 'J’ai visité l’Écosse deux fois.' },
        { en: 'She hasn’t met my parents.', fr: 'Elle n’a pas rencontré mes parents.' },
      ],
      tip: 'Le participe passé n’est pas le prétérit : « I have went » ✗ → « I have gone » ✓, « I have saw » ✗ → « I have seen » ✓.',
    },
    {
      title: 'Parler de son expérience',
      body: 'On parle d’une expérience de vie, sans dire quand. ever = déjà (dans les questions), never = jamais. been to = aller quelque part et en revenir ; gone to = y être encore.',
      examples: [
        { en: 'Have you ever eaten oysters?', fr: 'As-tu déjà mangé des huîtres ?' },
        { en: 'I’ve never been to Asia.', fr: 'Je ne suis jamais {allé|allée} en Asie.' },
        { en: 'Paul has gone to Rome. He’s back next week.', fr: 'Paul est parti à Rome. Il revient la semaine prochaine.' },
      ],
      tip: 'Dès que tu donnes un moment précis (in 2019, last year, when I was 20), repasse au past simple : « I have been to Rome in 2019 » ✗ → « I went to Rome in 2019 » ✓.',
    },
  ],
  exercises: exercises('b1-present-perfect-1', 'B1', { kc: EXP, tense: 'present_perfect' })
    .cloze('I have never ___ sushi.', ['eaten'], 'eat → ate → eaten : après have, le participe passé.', { kc: FORM, hint: 'eat', d: -0.3 })
    .cloze('She ___ to Canada twice.', ['has been', "'s been"], 'Expérience répétée, sans date → has been (been to = aller et revenir).', { hint: 'be (expérience)', d: -0.2 })
    .type('Participe passé de write ?', ['written'], 'write → wrote → written.', { kc: FORM, d: -0.4 })
    .mcq('Have you ever ___ a marathon?', ['run', 'ran', 'running'], 0, 'run → ran → run : le participe passé est identique à la base.', { kc: FORM, d: -0.3 })
    .mcq('Mark isn’t here. He ___ to the bank.', ['has gone', 'has been', 'is been'], 0, 'Il y est encore → has gone. has been = il y est allé et il est revenu.', { d: 0.2 })
    .mcq('"Have you ever worked abroad?" — Choisis la réponse naturelle.', ['Yes, I have. I worked in Berlin in 2019.', 'Yes, I have. I have worked in Berlin in 2019.', 'Yes, I did. I have worked in Berlin in 2019.'], 0,
      'Question d’expérience → present perfect ; le détail daté (in 2019) → past simple.', { kc: [EXP, VS], d: 0.5 })
    .order('As-tu déjà rencontré quelqu’un de célèbre ?', 'Have you ever met anyone famous?', 'Have + sujet + ever + participe passé.', { distractors: ['did'], d: 0 })
    .order('Elle n’a jamais vu la mer.', 'She has never seen the sea.', 'never se place entre has et le participe passé.', { distractors: ['saw'], d: -0.2 })
    .tr('Je suis déjà {allé|allée} au Japon.', ["I've been to Japan.", 'I have been to Japan.', "I've already been to Japan.", 'I have already been to Japan.', "I've been to Japan before.", 'I have been to Japan before.'],
      'Expérience → have been to. « Je suis allé » ne se traduit pas par « I am gone ».', { d: 0.3 })
    .tr('Il n’a jamais conduit de voiture électrique.', ['He has never driven an electric car.', "He's never driven an electric car."], 'drive → drove → driven ; never + participe passé.', { kc: FORM, d: 0.4 })
    .listen('I’ve lived in three different countries, but I’ve never lived in Asia.', 'Qu’est-ce qui est vrai ?', ['Elle a vécu dans trois pays, mais pas en Asie', 'Elle vit en Asie depuis trois ans', 'Elle n’a jamais quitté son pays'], 0,
      'I’ve lived in three countries = j’ai vécu dans trois pays ; I’ve never lived in Asia = jamais en Asie.', { d: -0.2 })
    .listen('Have you ever tried Korean food? — No, never, but I’d love to.', 'A-t-il déjà goûté la cuisine coréenne ?', ['Non, mais il aimerait bien', 'Oui, souvent', 'Oui, une fois'], 0,
      'No, never = non, jamais ; I’d love to = j’aimerais beaucoup.', { d: 0 })
    .dictation('We’ve visited that museum several times.', 'We’ve = we have ; several times = plusieurs fois → expérience répétée.', { kc: FORM, accepted: ["We've visited that museum several times."], d: 0 })
    .say('Tu as déjà vu ce film ?', ['Have you seen this film', 'Have you ever seen this film', 'Have you seen this movie', 'Have you ever seen this movie', 'Have you already seen this film', 'Have you seen that film', 'Have you ever seen that film'],
      'Have you (ever) seen… ? — pas « Did you already see ».', { d: 0.3 })
    .answer('What is the most interesting place you have ever visited?', 'The most interesting place I have ever visited is Istanbul. I went there two years ago and I loved it.',
      'the most… I have ever visited, puis le détail daté au past simple (I went there…).', { keywords: [['ever', 'been', 'visited']], minWords: 10, d: 0.6 })
    .build(),
};

export const presentPerfect2: Lesson = {
  id: 'b1-present-perfect-2',
  cefr: 'B1',
  unitId: 'b1-present-perfect',
  title: 'just, already, yet · present perfect ou past simple',
  subtitle: 'Ce qui vient de se passer, ce qui est fait ou pas encore',
  kcIds: [JAY, VS],
  estMinutes: 8,
  explanation: [
    {
      title: 'just, already, yet',
      table: [
        ['just = à l’instant', 'entre have et le participe : I’ve just arrived.'],
        ['already = déjà (plus tôt que prévu)', 'entre have et le participe : She’s already left.'],
        ['yet = déjà ? / pas encore', 'en fin de phrase, questions et négations : Have you eaten yet? I haven’t eaten yet.'],
      ],
      examples: [
        { en: 'I’ve just finished the report.', fr: 'Je viens de finir le rapport.' },
        { en: 'Has the parcel arrived yet?', fr: 'Le colis est-il déjà arrivé ?' },
      ],
      tip: '« Je viens de » ne se traduit pas par « I come from » : on dit I’ve just + participe passé.',
    },
    {
      title: 'Present perfect ou past simple ?',
      body: 'Le present perfect relie le passé à maintenant (résultat, expérience, période non terminée : today, this week). Le past simple situe l’action dans un moment terminé.',
      table: [
        ['present perfect', 'ever, never, just, already, yet, so far, today, this year'],
        ['past simple', 'yesterday, last week, in 2020, two days ago, when I was young'],
      ],
      examples: [
        { en: 'I’ve lost my keys. (je ne les ai toujours pas)', fr: 'J’ai perdu mes clés.' },
        { en: 'I lost my keys last week. (moment terminé)', fr: 'J’ai perdu mes clés la semaine dernière.' },
      ],
      tip: 'Le passé composé français se traduit par les deux temps. Cherche le marqueur de temps : s’il est terminé et précis, c’est le past simple.',
    },
  ],
  exercises: exercises('b1-present-perfect-2', 'B1', { kc: JAY, tense: 'present_perfect' })
    .mcq('Have you finished the report ___?', ['yet', 'already', 'just'], 0, 'Question, fin de phrase → yet.', { d: -0.4 })
    .cloze('The train has ___ left — you can still see it!', ['just'], 'À l’instant → just.', { hint: 'à l’instant', d: -0.1 })
    .order('Je n’ai pas encore répondu à son e-mail.', "I haven't replied to her email yet.", 'yet en fin de phrase négative = pas encore.', { distractors: ['already'], d: 0.1 })
    .mcq('We ___ a new flat last month.', ['bought', 'have bought', 'have buy'], 0, 'last month = moment terminé → past simple.', { kc: VS, d: -0.1 })
    .mcq('"Where’s your phone?" — "I don’t know. I ___ it."', ['’ve lost', '’m losing', '’d lose'], 0, 'Résultat présent (je ne l’ai pas) → present perfect.', { kc: VS, d: 0.1 })
    .cloze('She ___ the company in 2018.', ['joined'], 'in 2018 → past simple.', { kc: VS, hint: 'join', d: -0.2 })
    .type('Corrige l’erreur : « I have seen him yesterday. »', ['I saw him yesterday.', 'Yesterday I saw him.'], 'yesterday → past simple : I saw him yesterday.', { kc: VS, loose: true, d: 0.4 })
    .mcq('Qu’est-ce que Sara n’a pas encore fait ?', ['Réserver les vols', 'Payer l’acompte', 'Trouver un restaurant'], 2,
      'I haven’t found a restaurant yet = je n’ai pas encore trouvé de restaurant.',
      { passage: 'Hi Tom,\nQuick update on the Lisbon trip. I’ve booked the flights and I’ve already paid the deposit for the apartment. I haven’t found a restaurant for Saturday yet — any ideas?\nSara', d: 0 })
    .tr('Je viens de recevoir ton message.', ["I've just got your message.", 'I have just got your message.', "I've just received your message.", 'I have just received your message.', 'I just got your message.', 'I just received your message.'],
      'Je viens de… → I’ve just + participe passé.', { d: 0.3 })
    .tr('Ils ont déménagé à Lyon il y a deux ans.', ['They moved to Lyon two years ago.', 'They moved to Lyon 2 years ago.', 'Two years ago they moved to Lyon.'], 'ago → past simple.', { kc: VS, d: 0.3 })
    .listen('Have you booked the hotel yet? — Yes, I booked it this morning.', 'L’hôtel est-il réservé ?', ['Oui, ce matin', 'Pas encore', 'Oui, hier soir'], 0,
      'this morning (terminé) → past simple : I booked it this morning.', { kc: VS, d: -0.1 })
    .listen('Sorry, Anna isn’t here. She’s just gone out.', 'Où est Anna ?', ['Elle vient de sortir', 'Elle n’est pas encore arrivée', 'Elle est partie en vacances'], 0,
      'She’s just gone out = elle vient de sortir.', { d: 0 })
    .dictation('I’ve already sent the invoice to the client.', 'already entre have et le participe passé.', { accepted: ["I've already sent the invoice to the client."], d: 0.1 })
    .say('Tu as déjà fini ?', ['Have you finished yet', 'Have you already finished', 'Have you finished already'], 'Question → Have you finished yet? (ou already pour marquer la surprise).', { d: 0.2 })
    .answer('What have you done today so far? What did you do yesterday evening?', 'Today I have already answered my emails and I have just had lunch. Yesterday evening I watched a film.',
      'Aujourd’hui → present perfect (already, just) ; hier soir → past simple.', { kc: VS, keywords: [['already', 'just', 'yet'], ['yesterday', 'last night']], minWords: 12, d: 0.7 })
    .build(),
};
