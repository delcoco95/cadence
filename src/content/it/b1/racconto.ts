import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const TRAP = 'it.b1.tense.trapassato';
const SEQ = 'it.b1.tense.past_sequence';
const REMOTO = 'it.b1.tense.passato_remoto_recognition';
const NARR = 'it.b1.function.storytelling';

export const racconto1: Lesson = {
  id: 'it-b1-racconto-1',
  cefr: 'B1',
  unitId: 'it-b1-racconto',
  title: 'Le trapassato prossimo',
  subtitle: 'quando sono arrivato, il treno era già partito',
  kcIds: [TRAP, SEQ],
  estMinutes: 10,
  explanation: [
    {
      title: 'Forme',
      body: 'Imparfait de avere ou essere + participe passé. On garde les règles du passato prossimo : même auxiliaire, accord du participe avec essere.',
      table: [
        ['avere', 'avevo, avevi, aveva, avevamo, avevate, avevano + mangiato'],
        ['essere', 'ero, eri, era, eravamo, eravate, erano + partito / partita / partiti / partite'],
      ],
      examples: [
        { en: 'Avevo già mangiato.', fr: 'J’avais déjà mangé.' },
        { en: 'Le ragazze erano già uscite.', fr: 'Les filles étaient déjà sorties.' },
      ],
      tip: 'Même logique que le plus-que-parfait français (j’avais mangé, j’étais parti). « Je n’avais jamais vu » → Non avevo mai visto : non + mai.',
    },
    {
      title: 'Enchaîner les temps du passé',
      body: 'passato prossimo : l’événement ; imperfetto : le décor, l’action en cours ; trapassato : ce qui s’était passé avant. Mots utiles : già, prima, appena (à peine, juste), quando.',
      examples: [
        { en: 'Quando sono arrivata alla stazione, il treno era già partito.', fr: 'Quand je suis arrivée à la gare, le train était déjà parti.' },
        { en: 'Ero stanco perché avevo lavorato tutta la notte.', fr: 'J’étais fatigué parce que j’avais travaillé toute la nuit.' },
      ],
      tip: 'Pas d’antériorité, pas de trapassato : « Ieri ho visto un film » suffit. Le trapassato n’apparaît que s’il y a deux moments dans le passé.',
    },
  ],
  exercises: exercises('it-b1-racconto-1', 'B1', { kc: TRAP, tense: 'trapassato' })
    .mcq('Quando siamo arrivati in stazione, il treno ___ già partito.', ['era', 'aveva', 'è stato'], 0, 'partire prend essere : era partito.', { d: -0.4 })
    .mcq('Marta non ha mangiato perché ___ già pranzato.', ['aveva', 'era', 'avrebbe'], 0, 'pranzare prend avere ; action antérieure → aveva pranzato.', { d: -0.3 })
    .cloze('Le ragazze erano stanche perché ___ tutta la notte.', ['avevano ballato'], 'Antérieur à « erano stanche » → avevano ballato.', { hint: 'ballare', d: -0.1 })
    .cloze('Quando l’ho chiamata, Sara ___ già.', ['era uscita'], 'uscire prend essere ; accord au féminin : era uscita.', { hint: 'uscire', d: 0 })
    .type('Trapassato prossimo de « fare » avec « noi ».', ['avevamo fatto', 'noi avevamo fatto'], 'avevamo + fatto.', { d: -0.3 })
    .type('Trapassato prossimo de « venire » avec « lei » (Giulia).', ['era venuta', 'lei era venuta'], 'venire prend essere : era venuta, accordé au féminin.', { d: -0.1 })
    .order('Je n’avais jamais vu une ville aussi belle.', 'Non avevo mai visto una città così bella.', 'non + avevo + mai + participe.', { distractors: ['ho'], d: -0.2 })
    .tr('Quand je suis {arrivé|arrivée}, ils étaient déjà partis.', ['Quando sono arrivato, erano già partiti.', 'Quando sono arrivata, erano già partiti.', 'Quando sono arrivato, loro erano già partiti.', 'Quando sono arrivata, loro erano già partiti.', 'Quando sono arrivato, erano già andati via.', 'Quando sono arrivata, erano già andati via.'],
      'L’événement au passato prossimo, l’action antérieure au trapassato.', { kc: [TRAP, SEQ], d: 0 })
    .tr('Elle m’a dit qu’elle avait perdu ses clés.', ['Mi ha detto che aveva perso le chiavi.', 'Mi ha detto che aveva perso le sue chiavi.', 'Lei mi ha detto che aveva perso le chiavi.', 'Mi ha detto che aveva perduto le chiavi.'],
      'avait perdu → aveva perso.', { d: 0.1 })
    .listen('Ieri ho incontrato Luca. Era cambiato molto: si era tagliato i capelli e aveva perso dieci chili.', 'Pourquoi Luca semblait-il différent ?', ['Il s’était coupé les cheveux et avait maigri', 'Il avait grossi', 'Il portait des lunettes'], 0,
      'si era tagliato i capelli = il s’était coupé les cheveux ; aveva perso dieci chili = il avait perdu dix kilos.', { d: -0.1 })
    .listen('Quando il professore è entrato, gli studenti avevano già finito l’esercizio.', 'Qu’est-ce qui s’est passé en premier ?', ['Les étudiants ont fini l’exercice', 'Le professeur est entré', 'Le professeur a donné l’exercice'], 0,
      'avevano già finito : antérieur à è entrato.', { kc: SEQ, d: 0 })
    .dictation('Non avevamo mai mangiato un gelato così buono.', 'non + avevamo + mai + mangiato.', { d: -0.2 })
    .repeat('Eravamo appena usciti quando ha cominciato a piovere.', 'eravamo appena usciti = nous venions juste de sortir.', { kc: SEQ, d: -0.2 })
    .say('Je n’avais pas compris la question.', ['Non avevo capito la domanda.', 'Io non avevo capito la domanda.'], 'avevo capito : imparfait de avere + participe.', { d: -0.3 })
    .answer('Racconta una volta in cui sei arrivato o arrivata tardi: che cosa era già successo?', 'Una volta sono arrivata tardi alla stazione e il treno era già partito, quindi ho dovuto aspettare due ore.',
      'Trapassato pour ce qui s’était déjà passé : era già partito, avevano già cominciato…',
      { kc: [TRAP, SEQ], keywords: [['era', 'erano', 'avevo', 'aveva', 'avevano', 'ero', 'eravamo', 'avevamo']], minWords: 10, d: 0.2 })
    .build(),
};

export const racconto2: Lesson = {
  id: 'it-b1-racconto-2',
  cefr: 'B1',
  unitId: 'it-b1-racconto',
  title: 'Raconter : passato remoto et récit',
  subtitle: 'nacque, visse, scrisse… all’improvviso, alla fine',
  kcIds: [REMOTO, NARR],
  estMinutes: 10,
  explanation: [
    {
      title: 'Reconnaître le passato remoto',
      body: 'Il exprime une action achevée, coupée du présent : histoire, biographies, contes, romans. Dans le Sud, on l’emploie aussi à l’oral. Il suffit de savoir le reconnaître.',
      table: [
        ['réguliers', 'parlò, credette, partì · parlarono, crederono, partirono'],
        ['essere · avere', 'fu, furono · ebbe, ebbero'],
        ['fare · dire', 'fece · disse'],
        ['nascere · vivere · morire', 'nacque · visse · morì'],
        ['scrivere · prendere · mettere', 'scrisse · prese · mise'],
        ['venire · vedere · decidere', 'venne · vide · decise'],
      ],
      examples: [
        { en: 'Dante nacque a Firenze nel 1265.', fr: 'Dante naquit à Florence en 1265.' },
        { en: 'Leonardo visse a Milano per molti anni.', fr: 'Léonard vécut à Milan pendant de nombreuses années.' },
      ],
      tip: 'Ces formes rappellent le passé simple français (il fut, il eut, il fit, il dit). À l’oral courant du Nord, on dit plutôt le passato prossimo : è nato, ha scritto.',
    },
    {
      title: 'Les mots du récit',
      table: [
        ['un giorno · una volta', 'un jour · une fois'],
        ['mentre', 'pendant que (+ imparfait)'],
        ['all’improvviso · a un certo punto', 'soudain · à un moment donné'],
        ['poco dopo · poi · allora', 'peu après · puis · alors'],
        ['alla fine', 'finalement, à la fin'],
      ],
      examples: [
        { en: 'Mentre cenavamo, all’improvviso è andata via la luce.', fr: 'Pendant que nous dînions, soudain l’électricité a été coupée.' },
      ],
      tip: 'mentre + imperfetto pour l’action en cours, all’improvviso + passato prossimo (ou remoto) pour l’événement qui la coupe.',
    },
  ],
  exercises: exercises('it-b1-racconto-2', 'B1', { kc: REMOTO, tense: 'passato_remoto' })
    .mcq('« Dante nacque a Firenze nel 1265. » Que veut dire « nacque » ?', ['il naquit', 'il naît', 'il naîtra'], 0, 'nascere → nacque (passato remoto) = il naquit, il est né.', { d: -0.4 })
    .mcq('Qu’a fait le pêcheur après avoir lu le message ?', ['Il a ri, puis il a décidé d’essayer', 'Il a jeté la bouteille', 'Il est rentré chez lui'], 0,
      'rise = il rit (ridere) ; decise di provare = il décida d’essayer.',
      { kc: [REMOTO, NARR], passage: 'C’era una volta un pescatore che viveva in un piccolo villaggio vicino al mare. Un giorno, mentre pescava, trovò nella rete una bottiglia. Dentro c’era un messaggio: «Chi trova questa bottiglia avrà tre desideri». Il pescatore rise, ma poi decise di provare. Chiese una barca nuova e all’improvviso la barca apparve davanti a lui.', d: 0.1 })
    .cloze('Mentre ___ la cena, all’improvviso è andata via la luce.', ['preparavamo'], 'Action en cours → imperfetto : preparavamo.', { kc: NARR, hint: 'preparare, noi', d: -0.3 })
    .mcq('Abbiamo aspettato due ore e ___ siamo tornati a casa.', ['alla fine', 'mentre', 'intanto che'], 0, 'alla fine = finalement.', { kc: NARR, d: -0.3 })
    .type('Infinitif de « scrisse » ?', ['scrivere'], 'scrisse = il écrivit (scrivere).', { d: -0.2 })
    .type('Passato prossimo correspondant à « fecero » (loro) ?', ['hanno fatto'], 'fecero = ils firent → hanno fatto.', { d: 0.2 })
    .order('Soudain, quelqu’un a frappé à la porte.', 'All’improvviso qualcuno ha bussato alla porta.', 'all’improvviso ouvre la phrase ; bussare = frapper.', { kc: NARR, d: -0.2 })
    .tr('Pendant que je dormais, le téléphone a sonné.', ['Mentre dormivo, il telefono ha squillato.', 'Mentre dormivo, ha squillato il telefono.', 'Mentre dormivo, il telefono è squillato.', 'Mentre dormivo, è squillato il telefono.', 'Mentre dormivo, il telefono ha suonato.', 'Mentre dormivo, ha suonato il telefono.', 'Mentre io dormivo, il telefono ha squillato.'],
      'mentre + imperfetto (dormivo), puis l’événement au passato prossimo.', { kc: NARR, d: -0.1 })
    .tr('Le roi vécut cent ans. (passato remoto)', ['Il re visse cento anni.', 'Il re visse per cento anni.'], 'vivere → visse.', { d: 0.3 })
    .listen('Garibaldi partì da Quarto nel 1860 con mille volontari.', 'Que s’est-il passé en 1860 ?', ['Garibaldi est parti avec mille volontaires', 'Garibaldi est né', 'Garibaldi est revenu de Sicile'], 0,
      'partì = il partit, il est parti.', { d: -0.1 })
    .listen('Ero in macchina e ascoltavo la radio. A un certo punto ho visto un cane in mezzo alla strada e ho frenato.', 'Pourquoi a-t-elle freiné ?', ['Un chien était au milieu de la route', 'La radio était trop forte', 'Il y avait des travaux'], 0,
      'a un certo punto = à un moment donné ; ho frenato = j’ai freiné.', { kc: NARR, d: -0.2 })
    .dictation('Alla fine decisero di restare a casa.', 'decisero = ils décidèrent (decidere).', { d: 0.1 })
    .repeat('Nel 1492 Colombo arrivò in America.', 'arrivò : accent sur la dernière syllabe.', { d: -0.4 })
    .say('Soudain, il a commencé à pleuvoir.', ['All’improvviso ha cominciato a piovere.', 'All’improvviso è cominciato a piovere.', 'All’improvviso ha iniziato a piovere.', 'All’improvviso è iniziato a piovere.', 'D’improvviso ha cominciato a piovere.', 'All’improvviso si è messo a piovere.'],
      'all’improvviso + passato prossimo.', { kc: NARR, d: -0.1 })
    .answer('Racconta un episodio strano o divertente di un viaggio.', 'Un giorno ero in treno e leggevo un libro. All’improvviso il treno si è fermato e alla fine siamo arrivati con tre ore di ritardo.',
      'Récit : un giorno, mentre, all’improvviso, alla fine.',
      { kc: NARR, keywords: [['all’improvviso', 'un giorno', 'a un certo punto', 'alla fine', 'poi', 'mentre', 'allora']], minWords: 12, d: 0.3 })
    .build(),
};
