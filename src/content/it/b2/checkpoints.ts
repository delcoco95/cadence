import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('it');

/**
 * Défis de fin d'unité B2 : items d'ÉVALUATION inédits (jamais repris des leçons).
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_B2: Record<string, Exercise[]> = {
  'it-b2-congiuntivo': assessment(
    exercises('cp-it-b2-congiuntivo', 'B2', { kc: 'it.b2.grammar.sequence_of_tenses' })
      .mcq('Non pensavo che Carla ___ già sposata.', ['fosse', 'sia', 'era'], 0,
        'Principale au passé, état simultané → congiuntivo imperfetto : fosse.', { kc: 'it.b2.grammar.subjunctive_imperfect', d: 0.8 })
      .cloze('Mi sembra strano che non ti ___ ancora nessuno.', ['abbia chiamato', 'abbia chiamata'],
        'Principale au présent, action passée → congiuntivo passato : abbia chiamato.', { kc: 'it.b2.grammar.subjunctive_past', hint: 'chiamare', d: 0.8 })
      .type('« Dubito che abbiano finito. » → « Dubitavo che ___ finito. » Écris l’auxiliaire.', ['avessero'],
        'Principale au passé + antériorité → trapassato : avessero finito.', { kc: 'it.b2.grammar.subjunctive_pluperfect', d: 1.0 })
      .tr('Je voudrais que vous restiez encore un peu.',
        ['Vorrei che restaste ancora un po’.', 'Vorrei che rimaneste ancora un po’.', 'Vorrei che voi restaste ancora un po’.', 'Vorrei che voi rimaneste ancora un po’.',
          'Vorrei che restasse ancora un po’.', 'Vorrei che rimanesse ancora un po’.', 'Vorrei che restaste ancora un poco.'],
        'vorrei che + congiuntivo imperfetto : restaste (voi) ou restasse (Lei).', { kc: 'it.b2.grammar.subjunctive_imperfect', d: 1.0 })
      .listen('Temevo che non avessi ricevuto il mio messaggio, perché non mi rispondevi.', 'Di che cosa aveva paura chi parla?',
        ['Che l’altro non avesse ricevuto il messaggio', 'Di non aver mandato il messaggio', 'Che l’altro fosse arrabbiato'], 0,
        'Temevo che + trapassato : non avessi ricevuto.', { kc: 'it.b2.grammar.subjunctive_pluperfect', d: 0.9 })
      .dictation('Bisognava che qualcuno gli dicesse la verità.',
        'Bisognava che + congiuntivo imperfetto : dicesse (dire → dicessi).', { kc: 'it.b2.grammar.subjunctive_imperfect', d: 0.9 })
      .say('J’espérais qu’il viendrait.',
        ['Speravo che venisse', 'Speravo che sarebbe venuto', 'Io speravo che venisse', 'Io speravo che sarebbe venuto'],
        'Speravo che + venisse (simultanéité) ou sarebbe venuto (futur dans le passé).', { d: 1.0 })
      .build(),
  ),
  'it-b2-ipotesi': assessment(
    exercises('cp-it-b2-ipotesi', 'B2', { kc: 'it.b2.grammar.unreal_past_conditional' })
      .mcq('Se ___ la sveglia, non saresti arrivato in ritardo.', ['avessi messo', 'avresti messo', 'hai messo'], 0,
        'Se + congiuntivo trapassato : avessi messo.', { d: 0.8 })
      .cloze('Se avessimo vinto alla lotteria, adesso ___ in una villa.', ['vivremmo', 'abiteremmo'],
        'Conséquence présente (adesso) → conditionnel présent : vivremmo.', { kc: 'it.b2.grammar.mixed_conditionals', hint: 'vivere', d: 1.0 })
      .type('« Parla come se ___ (essere) il capo. » Écris le verbe.', ['fosse'],
        'come se + congiuntivo imperfetto : fosse.', { kc: 'it.b2.function.wishes_as_if', d: 0.7 })
      .tr('Si tu avais lu le contrat, tu n’aurais pas signé.',
        ['Se avessi letto il contratto, non avresti firmato.', 'Se tu avessi letto il contratto, non avresti firmato.', 'Non avresti firmato se avessi letto il contratto.',
          'Se avessi letto il contratto, non l’avresti firmato.', 'Se tu avessi letto il contratto, non l’avresti firmato.'],
        'Se + avessi letto, non avresti firmato.', { d: 1.0 })
      .listen('Magari avessi ascoltato il consiglio di mio padre! Adesso non avrei tutti questi debiti.', 'Che cosa prova chi parla?',
        ['Rimpianto per non aver seguito un consiglio', 'Gratitudine verso il padre', 'Soddisfazione per i suoi risparmi'], 0,
        'Magari + trapassato = regret ; adesso non avrei debiti = hypothèse mixte.', { kc: ['it.b2.function.wishes_as_if', 'it.b2.grammar.mixed_conditionals'], d: 1.0 })
      .dictation('Se fossimo rimasti a casa, non ci saremmo bagnati.',
        'fossimo rimasti… ci saremmo bagnati : essere et accord au pluriel.', { d: 0.9 })
      .say('Si j’avais eu ton numéro, je t’aurais appelé.',
        ['Se avessi avuto il tuo numero, ti avrei chiamato', 'Se avessi avuto il tuo numero, ti avrei chiamata', 'Ti avrei chiamato se avessi avuto il tuo numero',
          'Ti avrei chiamata se avessi avuto il tuo numero', 'Se io avessi avuto il tuo numero, ti avrei chiamato'],
        'Se avessi avuto… ti avrei chiamato.', { d: 1.0 })
      .build(),
  ),
  'it-b2-condizionale-passato': assessment(
    exercises('cp-it-b2-condizionale-passato', 'B2', { kc: 'it.b2.grammar.future_in_the_past' })
      .mcq('Ci avevano detto che il treno ___ alle sei.', ['sarebbe partito', 'partirebbe', 'parta'], 0,
        'Futur vu du passé → condizionale passato : sarebbe partito.', { d: 0.9 })
      .cloze('Scusa, ___ dovuto avvisarti prima.', ['avrei'],
        'Regret : avrei dovuto.', { kc: 'it.b2.grammar.conditional_past', d: 0.6 })
      .type('« Secondo i medici, il paziente ___ (superare) la notte senza complicazioni. » Écris le verbe.', ['avrebbe superato'],
        'Information non confirmée sur un fait passé : avrebbe superato.', { kc: 'it.b2.function.unconfirmed_news', d: 1.0 })
      .tr('Elle m’a juré qu’elle ne recommencerait pas.',
        ['Mi ha giurato che non l’avrebbe più fatto.', 'Mi ha giurato che non lo avrebbe più fatto.', 'Mi ha giurato che non l’avrebbe rifatto.',
          'Mi ha giurato che non avrebbe ricominciato.', 'Lei mi ha giurato che non l’avrebbe più fatto.', 'Mi giurò che non l’avrebbe più fatto.'],
        'Futur dans le passé : non l’avrebbe più fatto / non avrebbe ricominciato.', { d: 1.1 })
      .listen('Secondo alcune indiscrezioni, la famosa cantante si sarebbe sposata in segreto la settimana scorsa.', 'La notizia è sicura?',
        ['No, è una voce non confermata', 'Sì, l’ha confermata la cantante', 'Sì, è stata pubblicata ufficialmente'], 0,
        'secondo alcune indiscrezioni + si sarebbe sposata : rumeur non confirmée.', { kc: 'it.b2.function.unconfirmed_news', d: 0.9 })
      .dictation('Sarebbe stato meglio prenotare con anticipo.',
        'sarebbe stato meglio + infinitif.', { kc: 'it.b2.grammar.conditional_past', d: 0.7 })
      .say('Nous pensions que tu arriverais plus tôt.',
        ['Pensavamo che saresti arrivato prima', 'Pensavamo che saresti arrivata prima', 'Credevamo che saresti arrivato prima', 'Credevamo che saresti arrivata prima',
          'Pensavamo che arrivassi prima', 'Credevamo che arrivassi prima'],
        'Pensavamo che + saresti arrivato (futur dans le passé).', { d: 1.0 })
      .build(),
  ),
  'it-b2-indiretto': assessment(
    exercises('cp-it-b2-indiretto', 'B2', { kc: 'it.b2.grammar.reported_statements' })
      .mcq('« Ho già pagato il conto. » → Ha detto che ___ il conto.', ['aveva già pagato', 'pagava già', 'avrebbe già pagato'], 0,
        'Passato prossimo → trapassato : aveva già pagato.', { d: 0.8 })
      .cloze('« Arriverò la settimana prossima. » → Ha scritto che sarebbe arrivato la settimana ___.', ['successiva', 'dopo', 'seguente'],
        'la settimana prossima → la settimana successiva / dopo.', { kc: 'it.b2.grammar.reported_time_place', d: 0.9 })
      .type('« Quanto costa questa borsa? » → La cliente ha chiesto quanto ___ quella borsa.', ['costava', 'costasse'],
        'Présent → imperfetto (indicatif ou subjonctif).', { kc: 'it.b2.grammar.reported_questions', d: 0.8 })
      .tr('Il m’a demandé de fermer la porte.',
        ['Mi ha chiesto di chiudere la porta.', 'Lui mi ha chiesto di chiudere la porta.', 'Mi ha detto di chiudere la porta.', 'Mi ha domandato di chiudere la porta.'],
        'Ordre rapporté : chiedere di + infinitif.', { kc: 'it.b2.grammar.reported_commands', d: 0.7 })
      .listen('La segretaria mi ha detto che il direttore era in riunione e che mi avrebbe richiamato nel pomeriggio.', 'Che cosa farà il direttore?',
        ['Richiamerà nel pomeriggio', 'Uscirà dalla riunione subito', 'Manderà una mail'], 0,
        'mi avrebbe richiamato = futur dans le passé.', { d: 0.9 })
      .dictation('Ci ha chiesto se fossimo mai stati in Puglia.',
        'se + congiuntivo trapassato (registre soigné).', { kc: 'it.b2.grammar.reported_questions', d: 1.0 })
      .say('Elle a dit qu’elle ne pouvait pas venir ce jour-là.',
        ['Ha detto che non poteva venire quel giorno', 'Ha detto che quel giorno non poteva venire', 'Lei ha detto che non poteva venire quel giorno', 'Ha detto di non poter venire quel giorno',
          'Ha detto che non sarebbe potuta venire quel giorno'],
        'non posso → non poteva ; oggi → quel giorno.', { kc: ['it.b2.grammar.reported_statements', 'it.b2.grammar.reported_time_place'], d: 1.0 })
      .build(),
  ),
  'it-b2-passivo': assessment(
    exercises('cp-it-b2-passivo', 'B2', { kc: 'it.b2.grammar.passive_venire' })
      .mcq('Il nuovo ospedale ___ l’anno scorso.', ['è stato inaugurato', 'è venuto inaugurato', 'ha inaugurato'], 0,
        'Temps composé : seul essere (è stato inaugurato).', { d: 0.7 })
      .cloze('Le domande ___ presentate entro il 30 giugno.', ['vanno', 'devono essere'],
        'Obligation : vanno presentate (= devono essere presentate).', { kc: 'it.b2.grammar.passive_andare', d: 0.8 })
      .type('« In Italia ___ (consumare) molti caffè al giorno. » Écris le verbe au si passivant.', ['si consumano'],
        'si + verbe accordé avec caffè (pluriel) : si consumano.', { kc: 'it.b2.grammar.si_passivante', d: 0.8 })
      .tr('Les résultats seront publiés demain.',
        ['I risultati verranno pubblicati domani.', 'I risultati saranno pubblicati domani.', 'Domani verranno pubblicati i risultati.', 'Domani saranno pubblicati i risultati.'],
        'Futur passif : verranno / saranno pubblicati.', { d: 0.7 })
      .listen('A causa dell’alluvione, molti documenti dell’archivio sono andati distrutti.', 'Che cosa è successo ai documenti?',
        ['Sono stati distrutti', 'Sono stati spostati', 'Sono stati ritrovati'], 0,
        'andare distrutto = être détruit (perte).', { kc: 'it.b2.grammar.passive_andare', d: 0.9 })
      .dictation('La mostra è stata visitata da più di centomila persone.',
        'è stata visitata da… : passif au passato prossimo.', { d: 0.8 })
      .say('Ces médicaments doivent être conservés au frais.',
        ['Questi farmaci vanno conservati al fresco', 'Queste medicine vanno conservate al fresco', 'Questi medicinali vanno conservati al fresco',
          'Questi farmaci devono essere conservati al fresco', 'Queste medicine devono essere conservate al fresco'],
        'vanno conservati : obligation, accord avec le sujet.', { kc: 'it.b2.grammar.passive_andare', d: 0.9 })
      .build(),
  ),
  'it-b2-forme-implicite': assessment(
    exercises('cp-it-b2-forme-implicite', 'B2', { kc: 'it.b2.grammar.past_infinitive' })
      .mcq('___ il mio messaggio, Luca mi ha subito chiamato.', ['Letto', 'Leggendo stato', 'Dopo leggere'], 0,
        'Participe seul : letto il messaggio (une fois le message lu).', { kc: 'it.b2.grammar.participle_clauses', d: 0.9 })
      .cloze('Dopo ___ uscite dal cinema, le ragazze sono andate in pizzeria.', ['essere', 'esser'],
        'uscire prend essere : dopo essere uscite.', { d: 0.8 })
      .type('Écris le gerundio passato de « partire » (sujet masculin singulier) : « ___ presto, è arrivato per primo. »', ['Essendo partito'],
        'partire prend essere : essendo partito.', { kc: 'it.b2.grammar.gerund_clauses', d: 0.9 })
      .tr('En travaillant moins, tu dormirais mieux.',
        ['Lavorando meno, dormiresti meglio.', 'Se lavorassi meno, dormiresti meglio.', 'Lavorando di meno, dormiresti meglio.', 'Dormiresti meglio lavorando meno.'],
        'Gerundio à valeur d’hypothèse : lavorando meno.', { kc: 'it.b2.grammar.gerund_clauses', d: 0.9 })
      .listen('Chiuse le finestre e spenta la luce, la nonna è andata a dormire.', 'Che cosa ha fatto la nonna prima di dormire?',
        ['Ha chiuso le finestre e spento la luce', 'Ha aperto le finestre', 'Ha lasciato la luce accesa'], 0,
        'Participes accordés : chiuse (le finestre), spenta (la luce).', { kc: 'it.b2.grammar.participle_clauses', d: 1.0 })
      .dictation('Ti chiedo scusa per non averti risposto subito.',
        'per non averti risposto : infinitif passé avec pronom soudé.', { d: 0.8 })
      .say('Après avoir dîné, nous sommes allés nous promener.',
        ['Dopo aver cenato siamo andati a fare una passeggiata', 'Dopo avere cenato siamo andati a fare una passeggiata', 'Dopo aver cenato siamo andati a passeggiare',
          'Dopo aver cenato siamo usciti a fare una passeggiata', 'Dopo cena siamo andati a fare una passeggiata'],
        'Dopo aver cenato + passato prossimo.', { d: 0.8 })
      .build(),
  ),
  'it-b2-connettivi': assessment(
    exercises('cp-it-b2-connettivi', 'B2', { kc: 'it.b2.grammar.concessive_clauses' })
      .mcq('Benché ___ un ottimo stipendio, ha lasciato il lavoro.', ['avesse', 'aveva', 'avrebbe'], 0,
        'benché + congiuntivo imperfetto : avesse.', { d: 0.8 })
      .cloze('Ti do una mano, a patto che tu mi ___ a traslocare sabato.', ['aiuti'],
        'a patto che + congiuntivo : aiuti.', { kc: 'it.b2.grammar.conditional_conjunctions', hint: 'aiutare', d: 0.8 })
      .type('« Parlava piano perché nessuno lo ___ (sentire). » Écris le verbe.', ['sentisse'],
        'perché = pour que → congiuntivo imperfetto : sentisse.', { kc: 'it.b2.grammar.purpose_time_conjunctions', d: 1.0 })
      .tr('Je sortirai même s’il fait froid.',
        ['Uscirò anche se fa freddo.', 'Esco anche se fa freddo.', 'Anche se fa freddo, uscirò.', 'Anche se fa freddo, esco.', 'Uscirò anche se farà freddo.'],
        'anche se + indicatif.', { d: 0.7 })
      .listen('Qualora il volo fosse cancellato, la compagnia vi rimborserà l’intero importo del biglietto.', 'Che cosa succede se il volo viene cancellato?',
        ['I passeggeri ricevono un rimborso completo', 'I passeggeri pagano una penale', 'Il volo parte il giorno dopo'], 0,
        'Qualora + congiuntivo = au cas où ; rimborserà l’intero importo.', { kc: 'it.b2.grammar.conditional_conjunctions', d: 1.0 })
      .dictation('Nonostante fosse stanchissima, è rimasta fino alla fine.',
        'nonostante + congiuntivo imperfetto : fosse.', { d: 0.8 })
      .say('Je te le prête à condition que tu me le rendes demain.',
        ['Te lo presto a condizione che tu me lo restituisca domani', 'Te lo presto purché tu me lo restituisca domani', 'Te lo presto a patto che tu me lo restituisca domani',
          'Te lo presto a condizione che me lo restituisca domani', 'Te lo presto purché me lo restituisca domani', 'Te lo presto a condizione che tu me lo ridia domani'],
        'a condizione che / purché + congiuntivo : restituisca.', { kc: 'it.b2.grammar.conditional_conjunctions', d: 1.0 })
      .build(),
  ),
  'it-b2-lessico': assessment(
    exercises('cp-it-b2-lessico', 'B2', { kc: 'it.b2.vocabulary.pronominal_verbs' })
      .mcq('La festa era noiosa, così ___ dopo mezz’ora.', ['ce ne siamo andati', 'ci siamo andati', 'ne siamo andati'], 0,
        'andarsene au passato prossimo : ce ne siamo andati.', { kc: 'it.b2.grammar.pronominal_verbs_compound', d: 0.9 })
      .cloze('Per imparare a suonare il pianoforte ___ anni di pratica.', ['ci vogliono'],
        'volerci + pluriel : ci vogliono anni.', { kc: 'it.b2.vocabulary.metterci_volerci', d: 0.7 })
      .type('Écris l’augmentatif de « libro » (un gros livre).', ['librone'],
        'libro + -one = librone.', { kc: 'it.b2.vocabulary.suffixes', d: 0.6 })
      .tr('Ne t’inquiète pas, tu vas y arriver !',
        ['Non preoccuparti, ce la farai!', 'Non ti preoccupare, ce la farai!', 'Tranquillo, ce la farai!', 'Tranquilla, ce la farai!', 'Non preoccuparti, ce la fai!', 'Non ti preoccupare, ce la fai!'],
        'farcela au futur : ce la farai.', { d: 0.8 })
      .listen('Mia sorella se l’è presa perché non l’ho invitata alla cena.', 'Come si sente la sorella?',
        ['Offesa', 'Contenta', 'Stanca'], 0,
        'prendersela = se vexer.', { kc: 'it.b2.grammar.pronominal_verbs_compound', d: 0.8 })
      .dictation('Quanto ci metti a prepararti la mattina?',
        'metterci (personne) : quanto ci metti ?', { kc: 'it.b2.vocabulary.metterci_volerci', d: 0.7 })
      .say('Je me suis bien débrouillé à l’oral.',
        ['Me la sono cavata bene all’orale', 'All’orale me la sono cavata bene', 'Io me la sono cavata bene all’orale', 'Me la sono cavata bene all’esame orale'],
        'cavarsela : me la sono cavata (accord avec la).', { kc: 'it.b2.grammar.pronominal_verbs_compound', d: 1.0 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_B2: Record<string, string[]> = {
  'it-b2-congiuntivo': ['Je peux exprimer une opinion, un doute ou un souhait sur le passé avec le subjonctif.', 'Je peux accorder le temps du subjonctif avec celui de la principale.'],
  'it-b2-ipotesi': ['Je peux imaginer ce qui se serait passé si les choses avaient été différentes.', 'Je peux exprimer un regret ou un souhait avec magari et come se.'],
  'it-b2-condizionale-passato': ['Je peux exprimer un regret ou un reproche sur le passé.', 'Je peux dire ce qui devait arriver vu du passé et comprendre une information non confirmée dans la presse.'],
  'it-b2-indiretto': ['Je peux rapporter des paroles, des questions et des ordres au passé.', 'Je peux adapter les repères de temps et de lieu dans un récit rapporté.'],
  'it-b2-passivo': ['Je peux comprendre et rédiger des textes au passif (presse, avis, histoire).', 'Je peux exprimer une obligation impersonnelle avec andare + participe.'],
  'it-b2-forme-implicite': ['Je peux alléger mes phrases avec le gérondif, le participe et l’infinitif passé.', 'Je peux exprimer la cause, le moyen et l’antériorité sans subordonnée.'],
  'it-b2-connettivi': ['Je peux nuancer mon propos avec des concessions (sebbene, anche se).', 'Je peux poser des conditions et exprimer un but ou une précaution.'],
  'it-b2-lessico': ['Je peux utiliser les verbes idiomatiques du quotidien (andarsene, farcela, cavarsela).', 'Je peux dire combien de temps il faut et comprendre les suffixes courants.'],
};
