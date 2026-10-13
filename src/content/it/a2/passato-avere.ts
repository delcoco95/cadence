import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FORM = 'it.a2.tense.passato_avere_form';
const IRR = 'it.a2.tense.irregular_participles';
const MARKERS = 'it.a2.tense.passato_markers';

export const passatoAvere1: Lesson = {
  id: 'it-a2-passato-avere-1',
  cefr: 'A2',
  unitId: 'it-a2-passato-avere',
  title: 'Le passato prossimo avec avere',
  subtitle: 'ho mangiato, hai dormito, abbiamo venduto',
  kcIds: [FORM, MARKERS],
  estMinutes: 8,
  explanation: [
    {
      title: 'avere + participe passé',
      body: 'Le passato prossimo correspond au passé composé : auxiliaire au présent + participe passé. La plupart des verbes prennent avere, comme en français. Le participe régulier se forme à partir de l’infinitif.',
      table: [
        ['-are → -ato', 'parlare → parlato · mangiare → mangiato · comprare → comprato'],
        ['-ere → -uto', 'vendere → venduto · ricevere → ricevuto · credere → creduto'],
        ['-ire → -ito', 'dormire → dormito · finire → finito · capire → capito'],
        ['avere', 'ho · hai · ha · abbiamo · avete · hanno + parlato'],
      ],
      examples: [
        { en: 'Ieri sera ho mangiato una pizza con Marta.', fr: 'Hier soir, j’ai mangé une pizza avec Marta.' },
        { en: 'Avete capito la domanda?', fr: 'Vous avez compris la question ?' },
        { en: 'Non abbiamo dormito molto.', fr: 'Nous n’avons pas beaucoup dormi.' },
      ],
      tip: 'Le h de ho, hai, ha, hanno ne se prononce pas : ho mangiato se dit « o mangiato ». Avec avere, le participe ne s’accorde pas avec le sujet : Maria ha mangiato (et non « mangiata »).',
    },
    {
      title: 'Quand l’utiliser ? Les marqueurs de temps',
      body: 'Le passato prossimo raconte une action terminée : un événement ponctuel, daté ou non. Il s’emploie avec ieri (hier), l’altro ieri (avant-hier), la settimana scorsa (la semaine dernière), l’anno scorso, stamattina. « Il y a » se dit fa, placé après la durée.',
      table: [
        ['il y a deux jours', 'due giorni fa'],
        ['la semaine dernière', 'la settimana scorsa'],
        ['hier soir · ce matin', 'ieri sera · stamattina'],
      ],
      examples: [
        { en: 'Ho comprato questa giacca tre anni fa.', fr: 'J’ai acheté cette veste il y a trois ans.' },
        { en: 'La settimana scorsa abbiamo visitato Verona.', fr: 'La semaine dernière, nous avons visité Vérone.' },
      ],
      tip: '« Il y a » + durée se dit avec fa, APRÈS la durée : due giorni fa. Ne pas traduire par « c’è » : « c’è due giorni » ✗.',
    },
  ],
  exercises: exercises('it-a2-passato-avere-1', 'A2', { kc: FORM })
    .cloze('Ieri sera ___ mangiato una pizza con Marta.', ['ho'], 'io → ho + participe.', { hint: 'io', d: -1.5 })
    .cloze('Ragazzi, avete ___ la domanda?', ['capito'], 'capire → capito (-ire → -ito).', { hint: 'capire', d: -1.3 })
    .mcq('Maria ___ una lettera a sua nonna.', ['ha scritto', 'è scritta', 'ha scritta'], 0, 'scrivere prend avere ; avec avere, le participe ne s’accorde pas avec le sujet.', { d: -1.0 })
    .mcq('Ho comprato questa giacca tre anni ___.', ['fa', 'prima', 'c’è'], 0, '« il y a trois ans » = tre anni fa (fa après la durée).', { kc: MARKERS, d: -1.1 })
    .type('Donne le participe passé de « vendere ».', ['venduto'], '-ere → -uto : venduto.', { d: -1.4 })
    .type('Mets au passato prossimo : Noi dormiamo poco.', ['Noi abbiamo dormito poco.', 'Abbiamo dormito poco.'], 'noi → abbiamo + dormito.', { d: -1.2 })
    .order('Nous n’avons pas beaucoup dormi.', 'Non abbiamo dormito molto.', 'non se place devant l’auxiliaire.', { distractors: ['siamo', 'dormuto'], d: -1.1 })
    .tr('Hier, j’ai travaillé jusqu’à huit heures.', ['Ieri ho lavorato fino alle otto.', 'Ieri io ho lavorato fino alle otto.', 'Ho lavorato fino alle otto ieri.', 'Ieri ho lavorato fino alle 8.', 'Ieri ho lavorato fino alle venti.', 'Ieri ho lavorato fino alle 20.'],
      'lavorare → ho lavorato ; jusqu’à huit heures = fino alle otto.', { kc: [FORM, MARKERS], d: -1.0 })
    .tr('Est-ce que tu as acheté le pain ?', ['Hai comprato il pane?', 'Tu hai comprato il pane?', 'Hai preso il pane?', 'Tu hai preso il pane?'],
      'tu → hai comprato. La question se marque par l’intonation.', { d: -1.3 })
    .listen('Stamattina ho chiamato mia madre e poi ho pulito la cucina.', 'Qu’a-t-elle fait ce matin ?', ['Elle a appelé sa mère et nettoyé la cuisine', 'Elle a appelé son frère et fait les courses', 'Elle a nettoyé la cuisine et dormi'], 0,
      'ho chiamato = j’ai appelé ; ho pulito = j’ai nettoyé.', { d: -1.3 })
    .listen('L’anno scorso abbiamo visitato Verona e Padova.', 'Quand ont-ils visité Vérone ?', ['L’année dernière', 'La semaine dernière', 'Il y a deux ans'], 0,
      'l’anno scorso = l’année dernière.', { kc: MARKERS, d: -1.2 })
    .dictation('Hanno venduto la macchina due mesi fa.', 'hanno venduto ; due mesi fa = il y a deux mois.', { kc: [FORM, MARKERS], d: -1.0 })
    .repeat('Ho finito il lavoro e ho telefonato a Luca.', 'Deux passati prossimi avec avere : ho finito, ho telefonato.', { d: -1.3 })
    .say('Nous avons regardé un film hier soir.', ['Abbiamo guardato un film ieri sera', 'Ieri sera abbiamo guardato un film', 'Noi abbiamo guardato un film ieri sera', 'Ieri sera noi abbiamo guardato un film', 'Abbiamo visto un film ieri sera', 'Ieri sera abbiamo visto un film'],
      'guardare → abbiamo guardato ; hier soir = ieri sera.', { d: -1.1 })
    .answer('Che cosa hai fatto ieri sera?', 'Ieri sera ho cucinato la pasta, ho guardato un film e ho telefonato a mia sorella.',
      'Utilise ho + participe : ho mangiato, ho guardato, ho letto…', { kc: [FORM, MARKERS], keywords: [['ho', 'abbiamo']], minWords: 8, d: -0.8 })
    .build(),
};

export const passatoAvere2: Lesson = {
  id: 'it-a2-passato-avere-2',
  cefr: 'A2',
  unitId: 'it-a2-passato-avere',
  title: 'Participes irréguliers',
  subtitle: 'fatto, detto, preso, visto… et già, non ancora, mai',
  kcIds: [IRR, MARKERS],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les participes irréguliers courants',
      body: 'Beaucoup de verbes en -ere ont un participe irrégulier. Ils sont très fréquents : il faut les apprendre par cœur.',
      table: [
        ['fare → fatto', 'dire → detto · leggere → letto · scrivere → scritto'],
        ['prendere → preso', 'mettere → messo · chiudere → chiuso · decidere → deciso · spendere → speso'],
        ['vedere → visto', 'aprire → aperto · offrire → offerto · rispondere → risposto · chiedere → chiesto'],
        ['bere → bevuto', 'perdere → perso · vincere → vinto · rompere → rotto · scegliere → scelto'],
      ],
      examples: [
        { en: 'Che cosa hai fatto nel fine settimana?', fr: 'Qu’est-ce que tu as fait ce week-end ?' },
        { en: 'Ho letto un libro e ho visto un film.', fr: 'J’ai lu un livre et j’ai vu un film.' },
        { en: 'Chi ha aperto la finestra?', fr: 'Qui a ouvert la fenêtre ?' },
      ],
      tip: 'Ne pas régulariser : « prenduto » ✗ → preso ✓, « metteto » ✗ → messo ✓. Et attention : « j’ai pris » = ho preso, « j’ai mis » = ho messo.',
    },
    {
      title: 'già, non… ancora, non… mai',
      body: 'Ces adverbes se placent en général entre l’auxiliaire et le participe, comme « déjà » en français. La négation se construit avec non devant l’auxiliaire.',
      table: [
        ['già (déjà)', 'Ho già mangiato.'],
        ['non… ancora (pas encore)', 'Non ho ancora finito.'],
        ['non… mai (jamais)', 'Non ho mai visto Napoli.'],
        ['appena (venir de)', 'Ho appena finito = je viens de finir.'],
      ],
      examples: [
        { en: 'Hai già pagato? — No, non ho ancora pagato.', fr: 'Tu as déjà payé ? — Non, je n’ai pas encore payé.' },
        { en: 'Non ho mai bevuto il caffè.', fr: 'Je n’ai jamais bu de café.' },
      ],
      tip: 'En italien, la négation est double : non… mai, non… ancora. « Ho mai visto » seul ne veut pas dire « je n’ai jamais vu » : il faut non.',
    },
  ],
  exercises: exercises('it-a2-passato-avere-2', 'A2', { kc: IRR })
    .cloze('Che cosa hai ___ nel fine settimana?', ['fatto'], 'fare → fatto.', { hint: 'fare', d: -1.4 })
    .mcq('Ieri ho ___ un bel libro.', ['letto', 'leggiuto', 'leggito'], 0, 'leggere → letto (irrégulier).', { d: -1.2 })
    .mcq('Chi ha ___ la finestra? Fa freddo!', ['aperto', 'aprito', 'apruto'], 0, 'aprire → aperto (irrégulier).', { d: -1.1 })
    .type('Donne le participe passé de « prendere ».', ['preso'], 'prendere → preso.', { d: -1.2 })
    .type('Donne le participe passé de « chiedere ».', ['chiesto'], 'chiedere → chiesto.', { d: -0.9 })
    .order('Je n’ai pas encore fini.', 'Non ho ancora finito.', 'non devant l’auxiliaire, ancora entre l’auxiliaire et le participe.', { kc: MARKERS, distractors: ['già', 'mai'], d: -1.0 })
    .tr('J’ai mis les clés dans le sac.', ['Ho messo le chiavi nella borsa.', 'Io ho messo le chiavi nella borsa.', 'Ho messo le chiavi nello zaino.', 'Ho messo le chiavi in borsa.'],
      'mettere → messo ; dans le sac = nella borsa.', { d: -1.0 })
    .tr('Je n’ai jamais vu Naples.', ['Non ho mai visto Napoli.', 'Io non ho mai visto Napoli.', 'Non sono mai stato a Napoli.', 'Non sono mai stata a Napoli.'],
      'non… mai + vedere → visto. On peut aussi dire « je ne suis jamais allé à Naples ».', { kc: [IRR, MARKERS], d: -0.9 })
    .mcq('Qu’est-ce que Giulia n’a pas encore fait ?', ['Choisir le cadeau de Paolo', 'Écrire les invitations', 'Acheter le gâteau'], 0, 'Non ho ancora scelto il regalo = je n’ai pas encore choisi le cadeau.',
      { kc: MARKERS, passage: 'Sabato è il compleanno di Paolo. Giulia ha già scritto le invitazioni e ha già comprato la torta in pasticceria. Ha speso quaranta euro! Però non ha ancora scelto il regalo: Paolo ha già tutto. Ieri ha chiesto un consiglio a sua sorella, ma lei non ha risposto.', d: -0.8 })
    .listen('Hai già pagato il conto? — Sì, ho appena pagato.', 'A-t-il payé l’addition ?', ['Oui, il vient de payer', 'Non, pas encore', 'Non, il a oublié son portefeuille'], 0,
      'ho appena pagato = je viens de payer.', { kc: MARKERS, d: -0.9 })
    .listen('Ieri sera Marco ha perso le chiavi e ha rotto il telefono.', 'Qu’est-il arrivé à Marco ?', ['Il a perdu ses clés et cassé son téléphone', 'Il a trouvé ses clés et acheté un téléphone', 'Il a perdu son téléphone et cassé ses clés'], 0,
      'perdere → perso ; rompere → rotto.', { d: -1.0 })
    .dictation('Abbiamo scelto un ristorante e abbiamo bevuto un buon vino.', 'scegliere → scelto ; bere → bevuto.', { d: -0.8 })
    .repeat('Non ho detto niente a nessuno.', 'dire → detto ; double négation non… niente.', { d: -1.1 })
    .say('Qu’est-ce que tu as pris ?', ['Che cosa hai preso', 'Cosa hai preso', 'Che hai preso', 'Tu che cosa hai preso', 'Che cosa ha preso', 'Cosa ha preso'], 'prendere → preso. Che cosa / Cosa = qu’est-ce que. Lei → ha preso.', { d: -1.0 })
    .answer('Che cosa hai fatto lo scorso fine settimana?', 'Lo scorso fine settimana ho letto un libro, ho visto un film e ho fatto una passeggiata.',
      'Participes irréguliers : fatto, letto, visto, preso, scritto…', { keywords: [['fatto', 'letto', 'visto', 'preso', 'scritto', 'messo', 'detto', 'bevuto', 'aperto', 'scelto']], minWords: 10, d: -0.7 })
    .build(),
};
