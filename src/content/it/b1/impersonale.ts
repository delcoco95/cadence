import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const SI_IMP = 'it.b1.grammar.si_impersonale';
const SI_PASS = 'it.b1.grammar.si_passivante';
const PASS = 'it.b1.grammar.passive_essere_venire';
const PASS_COMP = 'it.b1.grammar.passive_compound';

export const impersonale1: Lesson = {
  id: 'it-b1-impersonale-1',
  cefr: 'B1',
  unitId: 'it-b1-impersonale',
  title: 'Le si impersonnel et passivant',
  subtitle: 'si vive bene, si vendono case',
  kcIds: [SI_IMP, SI_PASS],
  estMinutes: 10,
  explanation: [
    {
      title: 'Si impersonnel : « on » en général',
      body: 'si + verbe à la 3e personne du singulier : In Italia si mangia tardi. Avec essere + adjectif, l’adjectif est au pluriel : Quando si è giovani… Avec un verbe pronominal, si devient ci si : Ci si alza presto.',
      examples: [
        { en: 'In questo ristorante si mangia bene.', fr: 'Dans ce restaurant, on mange bien.' },
        { en: 'Quando si è stanchi, si lavora male.', fr: 'Quand on est fatigué, on travaille mal.' },
        { en: 'In montagna ci si diverte.', fr: 'À la montagne, on s’amuse.' },
      ],
      tip: '« On » général → si (si dice = on dit). Mais « on » qui veut dire « nous » → noi : On va au cinéma ? = Andiamo al cinema?',
    },
    {
      title: 'Si passivant : le verbe s’accorde',
      body: 'Quand le verbe a un complément direct, il s’accorde avec lui : si vende una casa, si vendono case. Aux temps composés, on emploie essere : Si sono vendute molte macchine.',
      examples: [
        { en: 'Qui si parla italiano.', fr: 'Ici, on parle italien.' },
        { en: 'Dove si comprano i biglietti?', fr: 'Où achète-t-on les billets ?' },
        { en: 'Si affittano appartamenti.', fr: 'Appartements à louer.' },
      ],
      tip: 'Le nom qui suit commande le verbe : si affittano camere (pluriel). « Si affitta camere » est une faute fréquente, même sur les panneaux.',
    },
  ],
  exercises: exercises('it-b1-impersonale-1', 'B1', { kc: SI_IMP, tense: 'present' })
    .mcq('In questo ristorante ___ molto bene.', ['si mangia', 'si mangiano', 'ci mangia'], 0, 'Pas de complément direct → si + 3e personne du singulier.', { d: -0.5 })
    .mcq('In quel negozio ___ libri usati.', ['si vendono', 'si vende', 'si vendano'], 0, 'libri est pluriel → si vendono.', { kc: SI_PASS, d: -0.3 })
    .cloze('La domenica ___ alza tardi.', ['ci si'], 'Verbe pronominal (alzarsi) → ci si alza.', { d: 0 })
    .cloze('Quando ___ giovani, si hanno tanti sogni.', ['si è'], 'si è + adjectif au pluriel : si è giovani.', { d: 0.1 })
    .type('Mets au si passivant : « Organizzano molte feste in estate. »', ['Si organizzano molte feste in estate.', 'In estate si organizzano molte feste.'], 'feste est pluriel → si organizzano.', { kc: SI_PASS, d: 0 })
    .type('Comment dit-on « on dit que » ?', ['si dice che'], 'on dit = si dice.', { d: -0.4 })
    .order('En Italie, on dîne assez tard.', 'In Italia si cena piuttosto tardi.', 'si + 3e personne du singulier.', { distractors: ['cenano'], d: -0.3 })
    .tr('Ici, on ne peut pas fumer.', ['Qui non si può fumare.', 'Non si può fumare qui.', 'Qui non si fuma.', 'Qua non si può fumare.', 'Qui è vietato fumare.'],
      'non si può + infinitif = on ne peut pas.', { d: -0.3 })
    .tr('On cherche des serveurs pour l’été.', ['Si cercano camerieri per l’estate.', 'Per l’estate si cercano camerieri.', 'Cercasi camerieri per l’estate.'],
      'camerieri est pluriel → si cercano. Cercasi : forme figée des annonces.', { kc: SI_PASS, d: 0.1 })
    .listen('In montagna ci si diverte anche senza sciare: si fanno passeggiate e si mangia benissimo.', 'Que fait-on à la montagne, selon lui ?', ['On se promène et on mange très bien', 'On skie toute la journée', 'On reste à l’hôtel'], 0,
      'si fanno passeggiate = on fait des promenades ; si mangia benissimo = on mange très bien.', { kc: [SI_IMP, SI_PASS], d: -0.1 })
    .listen('Scusi, dove si comprano i biglietti dell’autobus? — Dal tabaccaio.', 'Où achète-t-on les billets ?', ['Au bureau de tabac', 'Dans le bus', 'À la gare'], 0,
      'dal tabaccaio = chez le buraliste.', { kc: SI_PASS, d: -0.3 })
    .dictation('Da qui si vede tutta la città.', 'si vede + nom singulier.', { kc: SI_PASS, d: -0.3 })
    .repeat('Non si sa mai che cosa può succedere.', 'non si sa mai = on ne sait jamais.', { d: -0.4 })
    .say('En été, on se lève tôt.', ['D’estate ci si alza presto.', 'In estate ci si alza presto.', 'Ci si alza presto d’estate.', 'Ci si alza presto in estate.'], 'alzarsi → ci si alza.', { d: 0.1 })
    .answer('Come si vive nella tua città? Che cosa si fa la sera?', 'Nella mia città si vive bene: la sera si esce con gli amici e si mangia nei ristoranti del centro.',
      'Si impersonnel : si vive, si esce, si mangia, si fanno…',
      { kc: [SI_IMP, SI_PASS], keywords: [['si vive', 'si mangia', 'si esce', 'si fa', 'si fanno', 'si va', 'ci si', 'si sta', 'si può', 'si beve', 'si trovano', 'si vedono']], minWords: 10, d: 0.2 })
    .build(),
};

export const impersonale2: Lesson = {
  id: 'it-b1-impersonale-2',
  cefr: 'B1',
  unitId: 'it-b1-impersonale',
  title: 'Le passif : essere et venire',
  subtitle: 'il ponte è stato costruito, la posta viene consegnata',
  kcIds: [PASS, PASS_COMP],
  estMinutes: 10,
  explanation: [
    {
      title: 'Essere ou venire + participe',
      body: 'Passif = essere + participe passé accordé avec le sujet. Le complément d’agent est introduit par da (articulé : dal, dalla…). Aux temps simples, venire peut remplacer essere pour insister sur l’action.',
      table: [
        ['présent', 'La posta è / viene consegnata alle dieci.'],
        ['imparfait', 'Il castello era / veniva usato come prigione.'],
        ['futur', 'I risultati saranno / verranno pubblicati domani.'],
      ],
      examples: [
        { en: 'Venezia è visitata da milioni di turisti.', fr: 'Venise est visitée par des millions de touristes.' },
        { en: 'I pacchi vengono controllati prima della partenza.', fr: 'Les colis sont contrôlés avant le départ.' },
      ],
      tip: '« par » → da, jamais per : dalla polizia, dal direttore.',
    },
    {
      title: 'Aux temps composés',
      body: 'Passato prossimo passif : essere + stato + participe, les deux participes accordés. Venire est impossible aux temps composés.',
      examples: [
        { en: 'Il ponte è stato costruito nel 1950.', fr: 'Le pont a été construit en 1950.' },
        { en: 'Le lettere sono state spedite ieri.', fr: 'Les lettres ont été envoyées hier.' },
      ],
      tip: '« a été invitée » → è stata invitata : stata et invitata s’accordent tous les deux. « È venuta invitata » ✗.',
    },
  ],
  exercises: exercises('it-b1-impersonale-2', 'B1', { kc: PASS, tense: 'passive' })
    .mcq('Il nuovo ponte ___ dal sindaco domani.', ['sarà inaugurato', 'inaugurerà', 'è inaugurando'], 0, 'Le pont subit l’action : passif au futur, sarà inaugurato.', { d: -0.3 })
    .mcq('Qu’est-il arrivé à beaucoup de pierres du Colisée ?', ['Elles ont servi à construire d’autres bâtiments', 'Les touristes les ont emportées', 'Elles ont été détruites par un incendie'], 0,
      'molte delle sue pietre furono usate per costruire altri palazzi = beaucoup de ses pierres furent utilisées pour construire d’autres palais.',
      { kc: [PASS, PASS_COMP], passage: 'Il Colosseo fu costruito tra il 70 e l’80 dopo Cristo. Era usato per gli spettacoli dei gladiatori e poteva contenere più di 50.000 spettatori. Nel Medioevo venne danneggiato da diversi terremoti e molte delle sue pietre furono usate per costruire altri palazzi. Oggi viene visitato da milioni di turisti ogni anno.', d: 0.2 })
    .cloze('Ogni giorno questi uffici ___ puliti alle sei.', ['vengono', 'sono'], 'Temps simple → venire (ou essere) : vengono puliti.', { hint: 'venire', d: -0.2 })
    .cloze('La lettera ___ spedita ieri.', ['è stata'], 'Passato prossimo passif : è stata spedita (accord au féminin).', { kc: PASS_COMP, hint: 'passé composé passif', d: -0.1 })
    .type('Mets au passif : « Molti turisti visitano Venezia. »', ['Venezia è visitata da molti turisti.', 'Venezia viene visitata da molti turisti.'], 'Le complément devient sujet ; l’agent est introduit par da.', { d: 0 })
    .type('Mets au passif : « La polizia ha arrestato i ladri. »', ['I ladri sono stati arrestati dalla polizia.'], 'sono stati arrestati : deux participes accordés ; da + la = dalla.', { kc: PASS_COMP, d: 0.3 })
    .order('Le film a été tourné à Naples.', 'Il film è stato girato a Napoli.', 'è stato + participe ; venire est impossible aux temps composés.', { kc: PASS_COMP, distractors: ['venuto'], d: -0.2 })
    .tr('Ce roman a été écrit par une jeune femme.', ['Questo romanzo è stato scritto da una giovane donna.', 'Questo romanzo è stato scritto da una ragazza.', 'Questo romanzo è stato scritto da una giovane.'],
      'a été écrit → è stato scritto ; par → da.', { kc: PASS_COMP, d: 0.1 })
    .tr('Les résultats seront publiés demain.', ['I risultati saranno pubblicati domani.', 'I risultati verranno pubblicati domani.', 'Domani saranno pubblicati i risultati.', 'Domani verranno pubblicati i risultati.', 'Domani i risultati saranno pubblicati.', 'Domani i risultati verranno pubblicati.'],
      'Futur passif : saranno ou verranno pubblicati.', { d: 0 })
    .listen('Il museo è stato chiuso per lavori e verrà riaperto a giugno.', 'Quand le musée rouvrira-t-il ?', ['En juin', 'En janvier', 'La semaine prochaine'], 0,
      'verrà riaperto a giugno = il sera rouvert en juin.', { kc: [PASS, PASS_COMP], d: -0.2 })
    .listen('Tutti i pacchi vengono controllati prima della partenza.', 'Que se passe-t-il avant le départ ?', ['Tous les colis sont contrôlés', 'Les colis sont livrés', 'Les passagers sont contrôlés'], 0,
      'vengono controllati = sont contrôlés.', { d: -0.2 })
    .dictation('Le case sono state costruite negli anni Sessanta.', 'sono state costruite : accord au féminin pluriel.', { kc: PASS_COMP, d: 0.1 })
    .repeat('Il quadro è stato dipinto da Caravaggio.', 'dipinto : participe de dipingere.', { kc: PASS_COMP, d: -0.3 })
    .say('L’Italie est visitée par des millions de touristes.', ['L’Italia è visitata da milioni di turisti.', 'L’Italia viene visitata da milioni di turisti.'], 'è / viene visitata ; par → da.', { d: 0 })
    .answer('Parla di un monumento famoso della tua regione: quando è stato costruito? Da chi è visitato?', 'La torre Eiffel è stata costruita nel 1889 e oggi viene visitata da milioni di turisti.',
      'Passif : è stato costruito, viene visitato, è visitato da…',
      { kc: [PASS, PASS_COMP], keywords: [['è stato', 'è stata', 'sono stati', 'sono state', 'fu'], ['viene', 'vengono', 'è visitato', 'è visitata', 'sono visitati']], minWords: 10, d: 0.3 })
    .build(),
};
