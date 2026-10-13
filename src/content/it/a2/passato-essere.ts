import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const ESS = 'it.a2.tense.passato_essere';
const AGREE = 'it.a2.grammar.participle_agreement';
const REFL = 'it.a2.tense.passato_reflexive';
const AUX = 'it.a2.tense.auxiliary_choice';

export const passatoEssere1: Lesson = {
  id: 'it-a2-passato-essere-1',
  cefr: 'A2',
  unitId: 'it-a2-passato-essere',
  title: 'Le passato prossimo avec essere',
  subtitle: 'sono andato, sei arrivata, siamo partiti',
  kcIds: [ESS, AGREE],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les verbes avec essere',
      body: 'Comme en français, les verbes de mouvement et de changement d’état prennent essere : andare, venire, arrivare, partire, uscire, entrare, tornare, restare, nascere, morire, diventare. Mais en italien, essere et stare se conjuguent aussi avec essere : sono stato = j’ai été.',
      table: [
        ['essere au présent', 'sono · sei · è · siamo · siete · sono'],
        ['participes réguliers', 'andato, arrivato, partito, uscito, tornato'],
        ['participes irréguliers', 'venire → venuto · nascere → nato · morire → morto · rimanere → rimasto · essere, stare → stato'],
      ],
      examples: [
        { en: 'Sabato sono andato al mare.', fr: 'Samedi, je suis allé à la mer.' },
        { en: 'Sei mai stata in Sicilia?', fr: 'Tu es déjà allée en Sicile ?' },
        { en: 'Mio nonno è nato nel 1940.', fr: 'Mon grand-père est né en 1940.' },
      ],
      tip: '« J’ai été » se dit sono stato / sono stata, jamais « ho stato ». Et « je suis allé en Sicile » se dit souvent sono stato in Sicilia (j’y suis allé et revenu).',
    },
    {
      title: 'L’accord du participe',
      body: 'Avec essere, le participe s’accorde toujours avec le sujet, en genre et en nombre : -o, -a, -i, -e. Un groupe mixte prend le masculin pluriel.',
      table: [
        ['masculin', 'Marco è partito · Marco e Luca sono partiti'],
        ['féminin', 'Anna è partita · Anna e Sara sono partite'],
        ['mixte', 'Anna e Marco sono partiti'],
      ],
      examples: [
        { en: 'Le ragazze sono arrivate alle nove.', fr: 'Les filles sont arrivées à neuf heures.' },
        { en: 'Siamo usciti tardi ieri sera.', fr: 'Nous sommes sortis tard hier soir.' },
      ],
      tip: 'L’accord s’entend à l’oral en italien (andato / andata), alors qu’il est muet en français (allé / allée). Une femme dit toujours sono andata, sono stata.',
    },
  ],
  exercises: exercises('it-a2-passato-essere-1', 'A2', { kc: ESS })
    .cloze('Sabato Marco ___ andato al mare.', ['è'], 'andare prend essere : è andato.', { hint: 'essere', d: -1.5 })
    .cloze('Le ragazze sono ___ alle nove.', ['arrivate'], 'Sujet féminin pluriel → arrivate.', { kc: AGREE, hint: 'arrivare', d: -1.2 })
    .mcq('Ieri sera noi ___ tardi.', ['siamo usciti', 'abbiamo usciti', 'abbiamo uscito'], 0, 'uscire prend essere ; noi (groupe) → usciti.', { d: -1.2 })
    .mcq('Anna, sei mai ___ a Venezia?', ['stata', 'stato', 'stati'], 0, 'Anna est une femme → stata.', { kc: AGREE, d: -1.1 })
    .type('Mets au passato prossimo : Paola torna a casa.', ['Paola è tornata a casa.'], 'tornare prend essere ; Paola → tornata.', { kc: [ESS, AGREE], d: -1.1 })
    .type('Mets au passato prossimo : I miei genitori partono per Roma.', ['I miei genitori sono partiti per Roma.'], 'partire prend essere ; genitori (masc. pl.) → partiti.', { kc: [ESS, AGREE], d: -1.0 })
    .order('Mon grand-père est né en 1940.', 'Mio nonno è nato nel 1940.', 'nascere → nato ; en + année = nel.', { distractors: ['ha', 'in'], d: -1.0 })
    .tr('J’ai été malade toute la semaine.', ['Sono stato malato tutta la settimana.', 'Sono stata malata tutta la settimana.', 'Io sono stato malato tutta la settimana.', 'Io sono stata malata tutta la settimana.', 'Sono stato male tutta la settimana.', 'Sono stata male tutta la settimana.'],
      '« j’ai été » = sono stato / sono stata (avec essere).', { kc: [ESS, AGREE], d: -0.9 })
    .tr('Nous sommes {restés|restées} à la maison.', ['Siamo restati a casa.', 'Siamo restate a casa.', 'Siamo rimasti a casa.', 'Siamo rimaste a casa.', 'Noi siamo restati a casa.', 'Noi siamo restate a casa.', 'Noi siamo rimasti a casa.', 'Noi siamo rimaste a casa.'],
      'restare / rimanere prennent essere ; rimanere → rimasto.', { kc: [ESS, AGREE], d: -1.0 })
    .listen('Sono arrivata a Milano alle otto e sono andata subito in albergo.', 'Qui parle ?', ['Une femme', 'Un homme', 'On ne peut pas savoir'], 0,
      'arrivata, andata : terminaison -a → c’est une femme.', { kc: AGREE, d: -1.1 })
    .listen('Siamo partiti venerdì e siamo tornati domenica sera.', 'Quand sont-ils rentrés ?', ['Dimanche soir', 'Vendredi', 'Samedi matin'], 0,
      'siamo tornati domenica sera = nous sommes rentrés dimanche soir.', { d: -1.3 })
    .dictation('Mia sorella è venuta a trovarmi ieri.', 'venire → venuto ; mia sorella → venuta.', { kc: [ESS, AGREE], d: -1.0 })
    .repeat('Siete andati al concerto sabato?', 'andare + essere ; voi (groupe) → andati.', { d: -1.3 })
    .say('Elle est partie ce matin.', ['È partita stamattina', 'Lei è partita stamattina', 'Stamattina è partita', 'Stamattina lei è partita', 'È partita questa mattina', 'Lei è partita questa mattina'],
      'partire + essere ; elle → partita.', { kc: [ESS, AGREE], d: -1.1 })
    .answer('Dove sei andato o andata in vacanza l’ultima volta?', 'L’estate scorsa sono andata in Puglia con mia sorella e siamo rimaste lì due settimane.',
      'sono andato / andata, sono stato / stata… Accorde le participe avec toi.', { kc: [ESS, AGREE], keywords: [['sono', 'siamo']], minWords: 10, d: -0.7 })
    .build(),
};

export const passatoEssere2: Lesson = {
  id: 'it-a2-passato-essere-2',
  cefr: 'A2',
  unitId: 'it-a2-passato-essere',
  title: 'Verbes pronominaux et choix de l’auxiliaire',
  subtitle: 'mi sono alzato, ci siamo divertiti, mi è piaciuto',
  kcIds: [REFL, AUX],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les verbes pronominaux',
      body: 'Les verbes pronominaux (alzarsi, svegliarsi, divertirsi, vestirsi…) prennent toujours essere, et le participe s’accorde avec le sujet. Le pronom se place devant l’auxiliaire.',
      table: [
        ['io', 'mi sono alzato / alzata'],
        ['tu', 'ti sei alzato / alzata'],
        ['lui, lei', 'si è alzato / alzata'],
        ['noi', 'ci siamo alzati / alzate'],
        ['voi', 'vi siete alzati / alzate'],
        ['loro', 'si sono alzati / alzate'],
      ],
      examples: [
        { en: 'Stamattina mi sono svegliata alle sei.', fr: 'Ce matin, je me suis réveillée à six heures.' },
        { en: 'Alla festa ci siamo divertiti molto.', fr: 'À la fête, nous nous sommes bien amusés.' },
      ],
    },
    {
      title: 'Essere là où le français dit « avoir »',
      body: 'Certains verbes prennent essere en italien mais « avoir » en français : piacere, costare, durare, sembrare, bastare, servire, succedere, et essere / stare. Les verbes cominciare, finire, passare prennent essere sans complément d’objet et avere avec un complément.',
      table: [
        ['ça m’a plu', 'mi è piaciuto · mi è piaciuta (la città)'],
        ['ça a coûté, ça a duré', 'è costato · è durato'],
        ['qu’est-il arrivé ?', 'che cosa è successo?'],
        ['cominciare, finire', 'il film è cominciato · ho cominciato il libro'],
      ],
      examples: [
        { en: 'Il viaggio è durato tre ore.', fr: 'Le voyage a duré trois heures.' },
        { en: 'Ti è piaciuta la mostra?', fr: 'L’exposition t’a plu ?' },
        { en: 'La lezione è finita alle cinque.', fr: 'Le cours s’est terminé à cinq heures.' },
      ],
      tip: 'Avec piacere, le participe s’accorde avec la chose qui plaît : mi è piaciuto il film, mi è piaciuta la pizza, mi sono piaciuti i musei.',
    },
  ],
  exercises: exercises('it-a2-passato-essere-2', 'A2', { kc: REFL })
    .cloze('Stamattina Giulia si è ___ alle sei.', ['svegliata'], 'Verbe pronominal + essere ; Giulia → svegliata.', { kc: [REFL, AGREE], hint: 'svegliarsi', d: -1.2 })
    .mcq('Il viaggio ___ tre ore.', ['è durato', 'ha durato', 'è durata'], 0, 'durare prend essere ; il viaggio (masc.) → durato.', { kc: AUX, d: -0.9 })
    .mcq('Ti ___ la mostra?', ['è piaciuta', 'ha piaciuto', 'è piaciuto'], 0, 'piacere + essere ; accord avec la mostra → piaciuta.', { kc: [AUX, AGREE], d: -0.7 })
    .type('Mets au passato prossimo : Io mi vesto in fretta. (tu es un homme)', ['Io mi sono vestito in fretta.', 'Mi sono vestito in fretta.'], 'vestirsi → mi sono vestito.', { kc: [REFL, AGREE], d: -1.0 })
    .type('Complète avec l’auxiliaire : Quanto ___ costato il biglietto?', ['è'], 'costare prend essere : è costato.', { kc: AUX, d: -0.9 })
    .order('Le film a commencé à neuf heures.', 'Il film è cominciato alle nove.', 'cominciare sans objet → essere.', { kc: AUX, distractors: ['ha'], d: -0.8 })
    .tr('Le concert m’a beaucoup plu.', ['Il concerto mi è piaciuto molto.', 'Il concerto mi è piaciuto tanto.', 'Mi è piaciuto molto il concerto.', 'Mi è piaciuto tanto il concerto.'],
      'piacere + essere : mi è piaciuto.', { kc: AUX, d: -0.8 })
    .tr('Hier, je me suis {couché|couchée} tard.', ['Ieri mi sono coricato tardi.', 'Ieri mi sono coricata tardi.', 'Ieri sono andato a letto tardi.', 'Ieri sono andata a letto tardi.', 'Ieri sera sono andato a letto tardi.', 'Ieri sera sono andata a letto tardi.', 'Mi sono coricato tardi ieri.', 'Mi sono coricata tardi ieri.'],
      'se coucher = coricarsi ou, plus courant, andare a letto ; les deux avec essere.', { kc: [REFL, AGREE], d: -0.8 })
    .mcq('Pourquoi Sara est-elle arrivée en retard au travail ?', ['Elle s’est réveillée tard et le bus n’est pas passé', 'Elle a raté le train', 'Elle s’est perdue en ville'], 0,
      'mi sono svegliata tardi… l’autobus non è passato.',
      { kc: [REFL, AUX], passage: 'Che giornata! Stamattina non ho sentito la sveglia e mi sono svegliata alle otto e mezza. Mi sono vestita in cinque minuti e sono uscita senza fare colazione. Alla fermata ho aspettato venti minuti, ma l’autobus non è passato. Alla fine ho preso un taxi: è costato trenta euro! Sono arrivata in ufficio alle dieci.', d: -0.8 })
    .listen('Che cosa è successo? — Niente, mi sono fatto male al piede.', 'Que s’est-il passé ?', ['Il s’est fait mal au pied', 'Il a perdu son chien', 'Il s’est disputé avec un ami'], 0,
      'mi sono fatto male al piede = je me suis fait mal au pied.', { kc: [REFL, AUX], d: -0.9 })
    .listen('Le vacanze sono finite e ci siamo riposati poco.', 'Comment se sont passées les vacances ?', ['Elles sont finies et ils se sont peu reposés', 'Ils se sont beaucoup reposés', 'Elles commencent demain'], 0,
      'sono finite (essere sans objet) ; ci siamo riposati poco = nous nous sommes peu reposés.', { d: -0.9 })
    .dictation('I bambini si sono addormentati subito.', 'addormentarsi + essere ; i bambini → addormentati.', { kc: [REFL, AGREE], d: -0.8 })
    .repeat('Mi è piaciuta molto la città, ma il viaggio è stato lungo.', 'piaciuta (la città) ; è stato (essere → stato).', { kc: AUX, d: -1.0 })
    .say('Nous nous sommes bien amusés.', ['Ci siamo divertiti molto', 'Ci siamo divertite molto', 'Ci siamo divertiti tanto', 'Ci siamo divertite tanto', 'Noi ci siamo divertiti molto', 'Ci siamo proprio divertiti'],
      'divertirsi → ci siamo divertiti / divertite.', { d: -1.0 })
    .answer('Com’è andata la tua giornata ieri? A che ora ti sei alzato o alzata?', 'Ieri mi sono alzato alle sette, mi sono preparato e sono andato in ufficio in bici.',
      'mi sono alzato / alzata, mi sono vestito / vestita… avec essere et accord.', { keywords: [['mi', 'ci']], minWords: 10, d: -0.7 })
    .build(),
};
