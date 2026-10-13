import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('it');

/**
 * Défis de fin d'unité C1 : items d'ÉVALUATION inédits (jamais repris des leçons).
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_C1: Record<string, Exercise[]> = {
  'it-c1-congiuntivo': assessment(
    exercises('cp-it-c1-congiuntivo', 'C1', { kc: 'it.c1.grammar.subjunctive_relatives' })
      .mcq('Non c’era nessuno che ___ rispondere alla domanda del professore.', ['sapesse', 'sapeva', 'sappia'], 0,
        'Antécédent nié, principale au passé → congiuntivo imperfetto : sapesse.', { d: 1.6 })
      .cloze('È la decisione più difficile che ___ mai dovuto prendere.', ['abbia', 'io abbia'],
        'Superlatif + congiuntivo passato : abbia dovuto.', { kc: 'it.c1.grammar.subjunctive_superlatives', hint: 'avere', d: 1.7 })
      .type('« Quoi qu’il arrive, reste calme. » → « Qualunque cosa ___, resta calmo. »', ['succeda', 'accada', 'capiti'],
        'qualunque cosa + congiuntivo : succeda / accada.', { kc: 'it.c1.grammar.indefinite_subjunctive', d: 1.6 })
      .tr('Il est le seul qui m’ait {compris|comprise}.',
        ['È l’unico che mi abbia capito.', 'È l’unico che mi abbia capita.', 'Lui è l’unico che mi abbia capito.', 'Lui è l’unico che mi abbia capita.',
          'È il solo che mi abbia capito.', 'È il solo che mi abbia capita.', 'È l’unico ad avermi capito.', 'È l’unico ad avermi capita.',
          'È l’unico che mi abbia compreso.', 'È l’unico che mi abbia compresa.'],
        'l’unico che + congiuntivo passato : mi abbia capito (ou l’unico ad avermi capito).', { kc: 'it.c1.grammar.subjunctive_superlatives', d: 1.8 })
      .listen('Chiunque abbia lasciato la macchina davanti al cancello è pregato di spostarla immediatamente.', 'Che cosa si chiede?',
        ['Di spostare un’auto parcheggiata davanti al cancello', 'Di chiudere il cancello', 'Di non usare la macchina'], 0,
        'chiunque abbia lasciato = la personne, quelle qu’elle soit, qui a laissé.', { kc: 'it.c1.grammar.indefinite_subjunctive', d: 1.6 })
      .dictation('Cerco un’insegnante che mi aiuti a preparare l’esame orale.',
        'Antécédent recherché → congiuntivo : aiuti.', { d: 1.6 })
      .say('Où que tu sois, appelle-moi.',
        ['Dovunque tu sia, chiamami', 'Ovunque tu sia, chiamami', 'Dovunque tu sia, telefonami', 'Ovunque tu sia, telefonami'],
        'dovunque / ovunque + congiuntivo : tu sia.', { kc: 'it.c1.grammar.indefinite_subjunctive', d: 1.6 })
      .build(),
  ),
  'it-c1-futuro': assessment(
    exercises('cp-it-c1-futuro', 'C1', { kc: 'it.c1.grammar.future_perfect_supposition' })
      .mcq('Hanno le luci spente: ___ già andati a letto.', ['saranno', 'sarebbero', 'fossero'], 0,
        'Supposition sur le passé → futuro anteriore : saranno andati.', { d: 1.5 })
      .cloze('Appena ___ la casa, daremo una grande festa.', ['avremo ristrutturato'],
        'appena + futuro anteriore : avremo ristrutturato.', { kc: 'it.c1.grammar.future_perfect_anteriority', hint: 'ristrutturare', d: 1.6 })
      .type('« Je croyais que tu viendrais. » → « Credevo che ___. » Écris le verbe.', ['saresti venuto', 'saresti venuta'],
        'Futur dans le passé → condizionale passato : saresti venuto.', { kc: 'it.c1.grammar.full_sequence', d: 1.8 })
      .tr('Il doit être chez lui à cette heure-ci.',
        ['Sarà a casa a quest’ora.', 'A quest’ora sarà a casa.', 'A quest’ora sarà a casa sua.', 'Sarà a casa sua a quest’ora.',
          'A quest’ora dovrebbe essere a casa.', 'Dovrebbe essere a casa a quest’ora.', 'A quest’ora deve essere a casa.'],
        'Supposition sur le présent → futuro : sarà a casa.', { kc: 'it.c1.grammar.future_probability', d: 1.5 })
      .listen('Mi aveva giurato che non l’avrebbe detto a nessuno, e invece il giorno dopo lo sapevano tutti.', 'Che cosa è successo?',
        ['Ha rivelato il segreto nonostante la promessa', 'Ha mantenuto il segreto', 'Nessuno ha scoperto niente'], 0,
        'non l’avrebbe detto : futur dans le passé, promesse non tenue.', { kc: 'it.c1.grammar.full_sequence', d: 1.6 })
      .dictation('Chissà che cosa gli sarà successo per essere così di cattivo umore.',
        'chissà + futuro anteriore : sarà successo.', { d: 1.8 })
      .say('Il aura sans doute oublié.',
        ['Se ne sarà dimenticato', 'Si sarà dimenticato', 'Avrà dimenticato', 'Se lo sarà dimenticato', 'Probabilmente ha dimenticato', 'Probabilmente se n’è dimenticato'],
        'Supposition sur le passé → futuro anteriore : se ne sarà dimenticato, avrà dimenticato.', { d: 1.6 })
      .build(),
  ),
  'it-c1-registro': assessment(
    exercises('cp-it-c1-registro', 'C1', { kc: 'it.c1.function.formal_address' })
      .mcq('Signor Rossi, ___ ringrazio per averci scelto.', ['La', 'Le', 'Gli'], 0,
        'ringraziare + COD → La.', { d: 1.5 })
      .cloze('In ___ alla Sua richiesta del 3 marzo, Le comunichiamo quanto segue.', ['riferimento', 'merito'],
        'in riferimento a / in merito a = suite à, au sujet de.', { kc: 'it.c1.writing.formal_correspondence', d: 1.6 })
      .type('« Prière de ne pas déranger. » → « Si ___ di non disturbare. »', ['prega'],
        'si prega di + infinitif.', { kc: 'it.c1.grammar.formal_impersonal', d: 1.4 })
      .tr('Asseyez-vous, je vous en prie, Madame.',
        ['Si accomodi, prego, signora.', 'Prego, si accomodi, signora.', 'Signora, si accomodi, prego.', 'Signora, prego, si accomodi.',
          'Si sieda, prego, signora.', 'Prego, si sieda, signora.', 'Si accomodi pure, signora.', 'Signora, si accomodi pure.'],
        'Impératif de politesse : si accomodi, si sieda.', { d: 1.4 })
      .listen('Gentile cliente, La informiamo che la Sua pratica è in fase di lavorazione e che riceverà una risposta entro dieci giorni lavorativi.', 'Che cosa comunica il messaggio?',
        ['La pratica è in corso e la risposta arriverà entro dieci giorni', 'La pratica è stata respinta', 'Il cliente deve presentarsi allo sportello'], 0,
        'in fase di lavorazione = en cours de traitement.', { kc: 'it.c1.vocabulary.bureaucratic_language', d: 1.6 })
      .dictation('Si prega di allegare alla domanda una fotocopia del codice fiscale.',
        'si prega di allegare = prière de joindre.', { kc: 'it.c1.grammar.formal_impersonal', d: 1.6 })
      .say('Pourriez-vous me rappeler demain, Monsieur ?',
        ['Potrebbe richiamarmi domani, signore?', 'Mi potrebbe richiamare domani, signore?', 'Signore, potrebbe richiamarmi domani?', 'Signore, mi potrebbe richiamare domani?',
          'Può richiamarmi domani, signore?', 'Mi può richiamare domani, signore?'],
        'Lei + conditionnel de politesse : potrebbe richiamarmi.', { d: 1.5 })
      .build(),
  ),
  'it-c1-passato-remoto': assessment(
    exercises('cp-it-c1-passato-remoto', 'C1', { kc: 'it.c1.grammar.passato_remoto_irregular' })
      .mcq('Nel 1492 Colombo ___ l’America.', ['scoprì', 'scoprò', 'scoprisse'], 0,
        'scoprire → scoprì.', { kc: 'it.c1.grammar.passato_remoto_regular', d: 1.4 })
      .cloze('Quando ___ la verità, Anna scoppiò a piangere.', ['seppe'],
        'sapere → seppe.', { hint: 'sapere', d: 1.7 })
      .type('Passato remoto de « venire », 3e personne du pluriel :', ['vennero'],
        'venire → venni, venne, vennero.', { d: 1.5 })
      .tr('Il écrivit une longue lettre et l’envoya.',
        ['Scrisse una lunga lettera e la spedì.', 'Scrisse una lunga lettera e la inviò.', 'Scrisse una lettera lunga e la spedì.', 'Scrisse una lettera lunga e la inviò.',
          'Lui scrisse una lunga lettera e la spedì.'],
        'scrivere → scrisse ; spedire → spedì.', { d: 1.7 })
      .listen('Dopo che ebbe salutato tutti, il vecchio maestro si allontanò lentamente senza voltarsi.', 'Che cosa fece il maestro dopo aver salutato?',
        ['Se ne andò senza girarsi', 'Tornò indietro', 'Rimase a parlare con tutti'], 0,
        'dopo che ebbe salutato (trapassato remoto) → si allontanò.', { kc: 'it.c1.grammar.narrative_tenses', d: 1.7 })
      .dictation('I due fratelli non si parlarono per vent’anni.',
        'parlarsi → si parlarono.', { kc: 'it.c1.grammar.passato_remoto_regular', d: 1.6 })
      .say('Elle naquit en 1910 et vécut à Turin.',
        ['Nacque nel 1910 e visse a Torino', 'Lei nacque nel 1910 e visse a Torino', 'Nacque nel millenovecentodieci e visse a Torino'],
        'nascere → nacque ; vivere → visse.', { d: 1.6 })
      .build(),
  ),
  'it-c1-coesione': assessment(
    exercises('cp-it-c1-coesione', 'C1', { kc: 'it.c1.grammar.formal_connectors' })
      .mcq('Il candidato non aveva i requisiti; ___, la sua domanda è stata respinta.', ['pertanto', 'anzi', 'bensì'], 0,
        'Conséquence : pertanto.', { d: 1.4 })
      .cloze('Non è una crisi passeggera, ___ un cambiamento strutturale.', ['bensì', 'ma'],
        'Après une négation : bensì (mais plutôt).', { d: 1.6 })
      .type('Nom correspondant au verbe « rinviare » (avec l’article) :', ['il rinvio'],
        'rinviare → il rinvio (sans suffixe).', { kc: 'it.c1.vocabulary.nominalization', d: 1.6 })
      .tr('Il a démissionné, ce qui a surpris tout le monde.',
        ['Si è dimesso, il che ha sorpreso tutti.', 'Si è dimesso, cosa che ha sorpreso tutti.', 'Si è dimesso, la qual cosa ha sorpreso tutti.',
          'Si è dimesso, il che ha stupito tutti.', 'Si è dimesso, cosa che ha stupito tutti.', 'Si è dimesso e ciò ha sorpreso tutti.',
          'Si è dimesso e questo ha sorpreso tutti.', 'Ha dato le dimissioni, il che ha sorpreso tutti.', 'Ha dato le dimissioni, cosa che ha sorpreso tutti.'],
        'ce qui (reprise de phrase) = il che.', { kc: 'it.c1.grammar.anaphora_reference', d: 1.7 })
      .listen('L’azienda ha registrato un calo delle vendite; ciononostante, ha deciso di assumere nuovo personale.', 'Che cosa ha fatto l’azienda?',
        ['Ha assunto nonostante il calo delle vendite', 'Ha licenziato dei dipendenti', 'Ha aumentato le vendite'], 0,
        'ciononostante = malgré cela.', { d: 1.5 })
      .dictation('Il ministro ha incontrato il sindaco; quest’ultimo ha chiesto nuovi fondi.',
        'quest’ultimo = le dernier nommé (il sindaco).', { kc: 'it.c1.grammar.anaphora_reference', d: 1.6 })
      .say('La croissance a ralenti ; cependant, le chômage baisse.',
        ['La crescita ha rallentato; tuttavia, la disoccupazione cala', 'La crescita è rallentata; tuttavia, la disoccupazione cala',
          'La crescita ha rallentato; tuttavia, la disoccupazione diminuisce', 'La crescita è rallentata; tuttavia, la disoccupazione diminuisce',
          'La crescita ha rallentato, però la disoccupazione cala', 'La crescita è rallentata, però la disoccupazione cala',
          'La crescita ha rallentato, però la disoccupazione diminuisce', 'La crescita è rallentata, però la disoccupazione diminuisce',
          'La crescita ha rallentato, ma la disoccupazione cala', 'La crescita ha rallentato, ma la disoccupazione diminuisce'],
        'la croissance = la crescita ; cependant = tuttavia.', { d: 1.6 })
      .build(),
  ),
  'it-c1-espressioni': assessment(
    exercises('cp-it-c1-espressioni', 'C1', { kc: 'it.c1.vocabulary.idioms_everyday' })
      .mcq('Che cosa significa « tagliare la corda »?', ['Andarsene di nascosto', 'Rompere i rapporti con qualcuno', 'Risparmiare'], 0,
        'tagliare la corda = filer, s’éclipser.', { d: 1.6 })
      .cloze('Quando ha saputo la notizia, è caduto dalle ___.', ['nuvole'],
        'cadere dalle nuvole = tomber des nues.', { d: 1.5 })
      .type('« J’ai hâte de te voir ! » → « Non vedo l’___ di vederti! »', ['ora'],
        'non vedere l’ora di = avoir hâte de.', { d: 1.4 })
      .tr('Il appelle un chat un chat.',
        ['Dice pane al pane e vino al vino.', 'Lui dice pane al pane e vino al vino.', 'Chiama le cose con il loro nome.', 'Chiama le cose col loro nome.',
          'Non ha peli sulla lingua.'],
        'appeler un chat un chat = dire pane al pane e vino al vino.', { kc: 'it.c1.vocabulary.idioms_body_food', d: 1.6 })
      .listen('Quel ragazzo ha copiato tutto il compito e, chissà come, l’ha passata liscia.', 'Che cosa è successo al ragazzo?',
        ['Non è stato punito', 'È stato scoperto e punito', 'Ha preso un brutto voto'], 0,
        'passarla liscia = s’en tirer sans dommage.', { kc: 'it.c1.vocabulary.idiomatic_pronominal_verbs', d: 1.6 })
      .dictation('Mio padre ha le mani bucate: spende tutto quello che guadagna.',
        'avere le mani bucate = être un panier percé.', { kc: 'it.c1.vocabulary.idioms_body_food', d: 1.5 })
      .say('Ne t’inquiète pas, il ne m’en veut pas.',
        ['Non preoccuparti, non ce l’ha con me', 'Non ti preoccupare, non ce l’ha con me', 'Tranquillo, non ce l’ha con me', 'Tranquilla, non ce l’ha con me',
          'Stai tranquillo, non ce l’ha con me', 'Stai tranquilla, non ce l’ha con me'],
        'en vouloir à quelqu’un = avercela con qualcuno : non ce l’ha con me.', { kc: 'it.c1.vocabulary.idiomatic_pronominal_verbs', d: 1.8 })
      .build(),
  ),
  'it-c1-argomentare': assessment(
    exercises('cp-it-c1-argomentare', 'C1', { kc: 'it.c1.function.concede_refute' })
      .mcq('___ dovesse servirti qualcosa, non esitare a chiamarmi.', ['Qualora', 'Bensì', 'Anzi'], 0,
        'qualora + dovesse + infinitif = au cas où.', { kc: 'it.c1.grammar.hypothetical_connectors', d: 1.5 })
      .cloze('Non è detto che le cose ___ come previsto.', ['vadano'],
        'non è detto che + congiuntivo : vadano.', { kc: 'it.c1.function.hedging', hint: 'andare', d: 1.6 })
      .type('« Ce n’est pas tant le prix qui me dérange que la qualité. » → « Non mi disturba tanto il prezzo ___ la qualità. »', ['quanto'],
        'non tanto… quanto…', { d: 1.7 })
      .tr('Au cas où il appellerait, dis-lui que je suis {sorti|sortie}.',
        ['Qualora chiamasse, digli che sono uscito.', 'Qualora chiamasse, digli che sono uscita.', 'Qualora telefonasse, digli che sono uscito.',
          'Qualora telefonasse, digli che sono uscita.', 'Nel caso in cui chiamasse, digli che sono uscito.', 'Nel caso in cui chiamasse, digli che sono uscita.',
          'Se dovesse chiamare, digli che sono uscito.', 'Se dovesse chiamare, digli che sono uscita.', 'Casomai chiamasse, digli che sono uscito.',
          'Casomai chiamasse, digli che sono uscita.', 'Se chiama, digli che sono uscito.', 'Se chiama, digli che sono uscita.'],
        'au cas où + conditionnel → qualora + congiuntivo imperfetto.', { kc: 'it.c1.grammar.hypothetical_connectors', d: 1.8 })
      .listen('Sarà anche un’idea originale, ma resta il fatto che nessuno ha calcolato quanto costerebbe.', 'Qual è la critica principale?',
        ['Nessuno ha valutato i costi', 'L’idea non è originale', 'Costerebbe troppo poco'], 0,
        'sarà anche… ma resta il fatto che : concession puis objection.', { d: 1.6 })
      .dictation('Magari avessimo avuto più tempo per prepararci!',
        'magari + congiuntivo trapassato = si seulement (regret).', { kc: 'it.c1.function.hedging', d: 1.6 })
      .say('Admettons que ce soit vrai : que fait-on ?',
        ['Ammettiamo che sia vero: che cosa facciamo?', 'Ammettiamo pure che sia vero: che cosa facciamo?', 'Ammettiamo che sia vero: cosa facciamo?',
          'Ammettiamo pure che sia vero: cosa facciamo?', 'Ammettiamo che sia vero: che facciamo?', 'Ammesso che sia vero, che cosa facciamo?',
          'Ammesso che sia vero, cosa facciamo?'],
        'ammettiamo (pure) che + congiuntivo : sia vero.', { d: 1.7 })
      .build(),
  ),
  'it-c1-enfasi': assessment(
    exercises('cp-it-c1-enfasi', 'C1', { kc: 'it.c1.grammar.dislocation' })
      .mcq('Il giornale, ___ compri tu stamattina?', ['lo', 'la', 'ne'], 0,
        'Reprise de il giornale → lo.', { d: 1.4 })
      .cloze('Di pazienza, con lui ___ vuole tanta.', ['ce ne'],
        'volerci + partitif disloqué → ce ne vuole.', { hint: 'ci + ne', d: 1.9 })
      .type('« C’est elle qui a raison. » → « ___ lei ad avere ragione. »', ['È'],
        'Clivée implicite : è lei ad avere ragione.', { kc: 'it.c1.grammar.cleft_sentences', d: 1.5 })
      .tr('C’est ici que j’ai grandi.',
        ['È qui che sono cresciuto.', 'È qui che sono cresciuta.', 'È qua che sono cresciuto.', 'È qua che sono cresciuta.', 'Sono cresciuto qui.', 'Sono cresciuta qui.'],
        'Clivée de lieu : è qui che ; crescere prend essere.', { kc: 'it.c1.grammar.cleft_sentences', d: 1.5 })
      .listen('La macchina nuova l’ha scelta mia moglie: io volevo quella rossa.', 'Chi ha scelto la macchina?',
        ['La moglie di chi parla', 'Chi parla', 'Il venditore'], 0,
        'Dislocation + sujet postposé : l’ha scelta mia moglie.', { kc: ['it.c1.grammar.dislocation', 'it.c1.grammar.marked_order'], d: 1.5 })
      .dictation('Non è che non voglia venire: è che sono stanchissimo.',
        'non è che + congiuntivo… è che…', { kc: 'it.c1.grammar.cleft_sentences', d: 1.7 })
      .say('Ce qui compte, c’est le résultat.',
        ['Quello che conta è il risultato', 'Ciò che conta è il risultato', 'Quel che conta è il risultato', 'Conta il risultato'],
        'Pseudo-clivée : quello che conta è… (un seul è).', { kc: 'it.c1.grammar.cleft_sentences', d: 1.5 })
      .build(),
  ),
};

/** Objectifs « Je peux… » de chaque unité C1. */
export const CAN_DO_C1: Record<string, string[]> = {
  'it-c1-congiuntivo': ['Je peux employer le subjonctif dans les relatives, après un superlatif et avec chiunque, qualunque, dovunque.', 'Je peux choisir entre indicatif et subjonctif selon le registre et la nuance voulue.'],
  'it-c1-futuro': ['Je peux faire des suppositions sur le présent et le passé avec le futur et le futur antérieur.', 'Je peux maîtriser la concordance complète, y compris le futur dans le passé.'],
  'it-c1-registro': ['Je peux m’adresser à un interlocuteur avec le Lei et rédiger un courriel ou une lettre formels.', 'Je peux comprendre et utiliser la langue des avis et des démarches administratives.'],
  'it-c1-passato-remoto': ['Je peux lire et écrire un récit au passato remoto, y compris avec les formes irrégulières.', 'Je peux articuler les temps du récit écrit, trapassato remoto compris.'],
  'it-c1-coesione': ['Je peux enchaîner mes idées avec des connecteurs variés (pertanto, tuttavia, bensì, anzi).', 'Je peux alléger un texte par la nominalisation et les reprises (il che, quest’ultimo).'],
  'it-c1-espressioni': ['Je peux comprendre et utiliser les expressions idiomatiques courantes.', 'Je peux employer les verbes à pronoms figés (farla franca, avercela con qualcuno).'],
  'it-c1-argomentare': ['Je peux nuancer une opinion et envisager une hypothèse (magari, qualora, semmai).', 'Je peux concéder un point puis réfuter un argument de façon structurée.'],
  'it-c1-enfasi': ['Je peux mettre un élément en relief par la dislocation et le sujet postposé.', 'Je peux construire des phrases clivées et pseudo-clivées naturelles.'],
};
