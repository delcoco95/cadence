import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const EPI = 'it.c2.grammar.epistemic_future';
const HEAR = 'it.c2.grammar.hearsay_conditional';
const MIT = 'it.c2.function.mitigation';
const HEDGE = 'it.c2.function.hedging';

export const sfumature1: Lesson = {
  id: 'it-c2-sfumature-1',
  cefr: 'C2',
  unitId: 'it-c2-sfumature',
  title: 'Supposer et prendre ses distances',
  subtitle: 'Sarà, avrà fatto, si sarebbe dimesso',
  kcIds: [EPI, HEAR],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le futur de probabilité',
      body: 'Le futur simple exprime une supposition sur le présent, le futur antérieur une supposition sur le passé. Le français dit plutôt « doit », « sans doute », « a dû ».',
      table: [
        ['futuro semplice', 'supposition sur le présent', 'Saranno le otto.'],
        ['futuro anteriore', 'supposition sur le passé', 'Avrà perso il treno.'],
        ['futuro concessivo', '« certes…, mais »', 'Sarà anche bravo, ma è antipatico.'],
        ['chissà + futur', 'interrogation sans réponse', 'Chissà dove sarà finito.'],
      ],
      examples: [
        { en: 'Non risponde: sarà ancora in riunione.', fr: 'Il ne répond pas : il doit être encore en réunion.' },
        { en: 'Chi avrà lasciato la porta aperta?', fr: 'Qui a bien pu laisser la porte ouverte ?' },
        { en: 'Sarà pure vero, ma non mi convince.', fr: 'C’est peut-être vrai, mais ça ne me convainc pas.' },
      ],
      tip: '« Deve essere » existe, mais « sarà » est bien plus naturel à l’oral. Le futur concessif (« sarà anche…, ma ») concède un point pour mieux le contester : ce n’est pas un futur.',
    },
    {
      title: 'Le conditionnel de l’information non confirmée',
      body: 'Comme en français journalistique, le conditionnel signale une information rapportée dont on ne garantit pas la vérité : présent pour un fait actuel, passé pour un fait accompli.',
      table: [
        ['Il ministro sarebbe pronto a dimettersi.', 'Le ministre serait prêt à démissionner.'],
        ['Il ladro sarebbe fuggito dalla finestra.', 'Le voleur se serait enfui par la fenêtre.'],
        ['Secondo indiscrezioni, l’accordo prevederebbe tagli.', 'Selon des indiscrétions, l’accord prévoirait des coupes.'],
      ],
      examples: [
        { en: 'Stando ai testimoni, l’auto non si sarebbe fermata allo stop.', fr: 'D’après les témoins, la voiture ne se serait pas arrêtée au stop.' },
      ],
      tip: 'Avec « secondo », « stando a », « a quanto risulta », le conditionnel est attendu. Au passé avec essere, le participe s’accorde : « si sarebbe dimessa ».',
    },
  ],
  exercises: exercises('it-c2-sfumature-1', 'C2', { kc: EPI })
    .mcq('Il telefono di Marta squilla a vuoto da un’ora: ___ già a letto.',
      ['sarà', 'è stata', 'sia', 'sarebbe stata'], 0,
      'Supposition sur le présent : futur simple « sarà » (elle doit être déjà couchée).', { d: 2.3 })
    .cloze('Non trovo più le chiavi: le ___ in macchina ieri sera.', ['avrò lasciate', 'avrò dimenticate'],
      'Futur antérieur de probabilité : « le avrò lasciate » (j’ai dû les laisser). Avec le pronom « le », l’accord du participe est obligatoire.', { hint: 'lasciare : supposition sur le passé', d: 2.6 })
    .mcq('Secondo fonti vicine al Comune, il sindaco ___ un accordo riservato con l’impresa.',
      ['avrebbe firmato', 'ha firmato', 'firmò', 'firmasse'], 0,
      '« Secondo fonti… » : information non confirmée, donc conditionnel passé « avrebbe firmato ».', { kc: HEAR, d: 2.5 })
    .type('Transforme en supposition avec le futur antérieur : « Probabilmente Luca ha dimenticato l’appuntamento. »',
      ['Luca avrà dimenticato l’appuntamento.', 'Avrà dimenticato l’appuntamento.', 'Luca si sarà dimenticato dell’appuntamento.', 'Si sarà dimenticato dell’appuntamento.',
        'Luca si sarà dimenticato l’appuntamento.', 'Luca se ne sarà dimenticato.'],
      'Futur antérieur = supposition sur un fait passé ; « probabilmente » devient inutile.', { d: 2.5 })
    .type('Rapporte comme une information non confirmée, au conditionnel : « L’incendio è partito da un cortocircuito. »',
      ['L’incendio sarebbe partito da un cortocircuito.', 'L’incendio sarebbe stato causato da un cortocircuito.'],
      'Passé composé → conditionnel passé : « sarebbe partito ». Le journaliste ne garantit pas le fait.', { kc: HEAR, d: 2.5 })
    .order('Qui a bien pu laisser la fenêtre ouverte ?', 'Chi avrà lasciato la finestra aperta?',
      'Question au futur antérieur : on s’interroge sur un fait passé sans pouvoir le vérifier.', { distractors: ['ha', 'sarà'], d: 2.4 })
    .tr('Il doit être environ minuit.',
      ['Sarà mezzanotte circa.', 'Sarà circa mezzanotte.', 'Sarà più o meno mezzanotte.', 'Deve essere circa mezzanotte.', 'Dev’essere circa mezzanotte.',
        'Sarà quasi mezzanotte.', 'Saranno circa le dodici.', 'Sarà mezzanotte, più o meno.'],
      'Supposition sur le présent : futur simple « sarà ». « Deve essere » est correct mais moins idiomatique.', { d: 2.3 })
    .tr('Selon la presse, la chanteuse se serait mariée en secret.',
      ['Secondo la stampa, la cantante si sarebbe sposata in segreto.', 'Secondo i giornali, la cantante si sarebbe sposata in segreto.', 'Stando alla stampa, la cantante si sarebbe sposata in segreto.',
        'Secondo la stampa, la cantante si sarebbe sposata di nascosto.', 'Secondo i giornali, la cantante si sarebbe sposata di nascosto.', 'Stando ai giornali, la cantante si sarebbe sposata in segreto.',
        'Stando alla stampa, la cantante si sarebbe sposata di nascosto.', 'Secondo la stampa, la cantante si sarebbe sposata segretamente.'],
      'Conditionnel passé de l’information rapportée, avec accord : « si sarebbe sposata ».', { kc: HEAR, d: 2.6 })
    .mcq('Quale informazione è presentata come certa nel testo?',
      ['I ladri sono entrati da una finestra sul retro', 'Il furto è stato commissionato', 'Il direttore ha dichiarato che le telecamere funzionavano', 'Il ladro conosceva bene il museo'], 2,
      'Seule la déclaration du directeur est rapportée à l’indicatif (« si è limitato a dichiarare »). L’entrée par la fenêtre est au conditionnel (« sarebbero entrati ») et « Sarà stato qualcuno… » n’est qu’une supposition.',
      {
        kc: [HEAR, EPI], d: 2.8,
        passage: 'Ancora mistero sulla scomparsa del dipinto dal museo civico di Valdorso. Secondo le prime indiscrezioni, i ladri sarebbero entrati da una finestra sul retro, rimasta aperta per lavori. Il direttore, raggiunto al telefono, si è limitato a dichiarare: «Le telecamere funzionavano, avremo le immagini entro domani». Una fonte interna, che preferisce restare anonima, ipotizza invece un furto su commissione: «Chi l’ha preso sapeva benissimo cosa cercare. Sarà stato qualcuno che conosceva il museo».',
      })
    .listen('Sono le nove e Paolo non è ancora arrivato. Avrà trovato traffico in tangenziale.', 'Che cosa pensa chi parla?',
      ['Sa con certezza che Paolo è bloccato nel traffico', 'Suppone che Paolo sia in ritardo per il traffico', 'Teme che Paolo non venga più', 'Pensa che Paolo arriverà dalla tangenziale'], 1,
      '« Avrà trovato traffico » : futur antérieur de supposition, pas une certitude.', { d: 2.4 })
    .listen('Secondo fonti del ministero, il decreto verrebbe approvato già la prossima settimana.', 'Come presenta la notizia il giornalista?',
      ['Come un fatto ufficiale', 'Come un’informazione non ancora confermata', 'Come una sua opinione personale', 'Come una notizia smentita'], 1,
      '« Secondo fonti… verrebbe approvato » : conditionnel de distance, l’information n’est pas confirmée.', { kc: HEAR, d: 2.5 })
    .dictation('Avranno avuto i loro motivi per andarsene così presto.',
      'Futur antérieur de supposition : « avranno avuto » (ils ont dû avoir leurs raisons).', { d: 2.5 })
    .repeat('Il presidente avrebbe già scelto il suo successore, ma nessuno lo conferma.',
      'Conditionnel passé de l’information non confirmée.', { kc: HEAR, d: 2.4 })
    .say('Il a dû oublier son portable chez lui.',
      ['Avrà dimenticato il cellulare a casa', 'Avrà dimenticato il telefono a casa', 'Si sarà dimenticato il cellulare a casa', 'Avrà lasciato il cellulare a casa',
        'Avrà lasciato il telefono a casa', 'Deve aver dimenticato il cellulare a casa', 'Avrà dimenticato il telefonino a casa'],
      'Supposition sur le passé : futur antérieur « avrà dimenticato ».', { d: 2.5 })
    .answer('Un collega non si è presentato a una riunione importante e non risponde al telefono. Fai almeno due ipotesi su che cosa gli sarà successo, usando il futuro o il futuro anteriore.',
      'Non so che cosa gli sia successo: avrà avuto un contrattempo, oppure si sarà sentito male. Sarà anche distratto, ma di solito avvisa sempre quando non può venire.',
      'Futur antérieur pour les hypothèses sur le passé (avrà avuto, si sarà sentito), futur concessif pour nuancer (sarà anche…, ma).',
      { d: 2.7, minWords: 18, keywords: [['avrà', 'sarà', 'avranno', 'saranno']] })
    .build(),
};

export const sfumature2: Lesson = {
  id: 'it-c2-sfumature-2',
  cefr: 'C2',
  unitId: 'it-c2-sfumature',
  title: 'Atténuer et rester prudent',
  subtitle: 'Volevo, direi, non è che, non è escluso che',
  kcIds: [MIT, HEDGE],
  estMinutes: 12,
  explanation: [
    {
      title: 'Adoucir une demande ou une critique',
      table: [
        ['volevo / vorrei + infinitif', 'demande adoucie', 'Volevo chiederti un favore.'],
        ['direi che…', 'opinion atténuée', 'Direi che possiamo chiudere qui.'],
        ['mi permetto di…', 'intervention polie', 'Mi permetto di dissentire.'],
        ['non è che + subjonctif', 'négation adoucie', 'Non è che sia sbagliato, ma…'],
        ['non è che + indicatif ou conditionnel (question)', 'demande indirecte', 'Non è che potresti aiutarmi?'],
        ['quasi quasi', 'envie hésitante', 'Quasi quasi ci vado anch’io.'],
      ],
      examples: [
        { en: 'Volevo sapere se c’è ancora posto per stasera.', fr: 'Je voulais savoir s’il reste de la place pour ce soir.' },
        { en: 'Non è che il tuo progetto sia brutto, è solo un po’ troppo ambizioso.', fr: 'Ce n’est pas que ton projet soit mauvais, il est juste un peu trop ambitieux.' },
      ],
      tip: 'L’imparfait de politesse (« volevo », « pensavo di… ») est encore plus courant qu’en français, au téléphone comme dans les commerces. « Quasi quasi » = « je me laisserais bien tenter ».',
    },
    {
      title: 'La prudence épistémique',
      table: [
        ['sembrerebbe / parrebbe che + subj.', 'il semblerait que'],
        ['a quanto pare / a quanto sembra', 'apparemment, à ce qu’il paraît'],
        ['non è escluso che + subj.', 'il n’est pas exclu que'],
        ['può darsi che + subj.', 'il se peut que'],
        ['tutto lascia pensare che + subj.', 'tout laisse penser que'],
      ],
      examples: [
        { en: 'Sembrerebbe che i dati siano stati raccolti in fretta.', fr: 'Il semblerait que les données aient été recueillies à la hâte.' },
        { en: 'Non è escluso che la riunione venga rinviata.', fr: 'Il n’est pas exclu que la réunion soit reportée.' },
      ],
      tip: 'Toutes ces tournures appellent le subjonctif. « Può darsi » seul sert de réponse : « Viene anche lui? – Può darsi. » (peut-être).',
    },
  ],
  exercises: exercises('it-c2-sfumature-2', 'C2', { kc: MIT })
    .mcq('In una riunione vuoi esprimere un disaccordo in modo garbato. Quale frase scegli?',
      ['Mi permetto di dissentire su questo punto.', 'Lei sbaglia completamente.', 'Non sono d’accordo, punto e basta.', 'Questa è una sciocchezza.'], 0,
      '« Mi permetto di dissentire » : désaccord poli, typique du registre professionnel.', { d: 2.3 })
    .cloze('Non è escluso che il volo ___ cancellato a causa dello sciopero.', ['venga', 'sia'],
      '« Non è escluso che » + subjonctif : « venga » (ou « sia ») cancellato.', { kc: HEDGE, hint: 'venire ou essere, au subjonctif', d: 2.5 })
    .cloze('Non è che tu ___ torto, ma potevi dirlo con più tatto.', ['abbia'],
      '« Non è che » + subjonctif : la négation est adoucie (ce n’est pas que tu aies tort).', { hint: 'avere', d: 2.6 })
    .type('Adoucis la demande avec l’imparfait de politesse : « Voglio chiederti un favore. »',
      ['Volevo chiederti un favore.', 'Ti volevo chiedere un favore.'],
      'L’imparfait « volevo » rend la demande moins directe que le présent « voglio ».', { d: 2.3 })
    .type('Rends l’affirmation plus prudente en commençant par « Sembrerebbe che » : « I dati sono incompleti. »',
      ['Sembrerebbe che i dati siano incompleti.', 'Sembrerebbe che i dati fossero incompleti.'],
      '« Sembrerebbe che » + subjonctif présent : « siano ». L’imparfait « fossero » est aussi admis par concordance avec le conditionnel.', { kc: HEDGE, d: 2.5 })
    .order('Je me permets de vous signaler une petite erreur.', 'Mi permetto di farle notare un piccolo errore.',
      '« Mi permetto di » + infinitif ; « farle notare » = vous faire remarquer (Lei).', { distractors: ['permetterei', 'gli'], d: 2.4 })
    .tr('Ce n’est pas que je n’aie pas envie, mais je suis {épuisé|épuisée}.',
      ['Non è che non ne abbia voglia, ma sono esausto.', 'Non è che non ne abbia voglia, ma sono esausta.', 'Non è che non abbia voglia, ma sono esausto.', 'Non è che non abbia voglia, ma sono esausta.',
        'Non è che non ne abbia voglia, ma sono distrutto.', 'Non è che non ne abbia voglia, ma sono distrutta.', 'Non è che non ne abbia voglia, però sono esausto.', 'Non è che non ne abbia voglia, però sono esausta.',
        'Non è che non ne ho voglia, ma sono esausto.', 'Non è che non ne ho voglia, ma sono esausta.', 'Non è che non abbia voglia, ma sono sfinito.', 'Non è che non abbia voglia, ma sono sfinita.'],
      '« Non è che » + subjonctif (l’indicatif est fréquent à l’oral). Accorde l’adjectif : esausto / esausta.', { d: 2.6 })
    .tr('Il n’est pas exclu que les prix augmentent encore.',
      ['Non è escluso che i prezzi aumentino ancora.', 'Non si esclude che i prezzi aumentino ancora.', 'Non è escluso che i prezzi salgano ancora.', 'Non è escluso che i prezzi aumentino di nuovo.',
        'Non si può escludere che i prezzi aumentino ancora.', 'Non è escluso che i prezzi crescano ancora.', 'Non si esclude che i prezzi salgano ancora.'],
      '« Non è escluso che » + subjonctif : « aumentino ».', { kc: HEDGE, d: 2.6 })
    .mcq('Qual è l’atteggiamento di Giulio Neri?',
      ['Sicuro delle cause del calo e deciso a cambiare i prezzi', 'Prudente: avanza ipotesi senza dare nulla per certo', 'Polemico nei confronti del reparto commerciale', 'Indifferente ai risultati dell’indagine'], 1,
      '« Sembrerebbe che », « non è escluso che », « direi che è presto », « a quanto pare », « mi permetterei di suggerire » : tout le message est atténué.',
      {
        kc: [HEDGE, MIT], d: 2.7,
        passage: 'Gentile dottoressa Ferri, le invio una prima sintesi dell’indagine. Sembrerebbe che il calo delle vendite sia legato soprattutto alla nuova politica dei prezzi, anche se non è escluso che abbia pesato pure la concorrenza online. Direi che è presto per trarre conclusioni: i dati del secondo trimestre sono, a quanto pare, ancora parziali. Mi permetterei comunque di suggerire un incontro con il reparto commerciale entro fine mese. Cordiali saluti, Giulio Neri',
      })
    .listen('Scusa, non è che per caso hai un caricabatterie da prestarmi?', 'Che cosa fa chi parla?',
      ['Si lamenta perché ha perso il caricabatterie', 'Chiede con garbo un caricabatterie in prestito', 'Dice di non avere un caricabatterie', 'Offre il suo caricabatterie'], 1,
      '« Non è che per caso… ? » : demande indirecte et très polie.', { d: 2.3 })
    .listen('A quanto pare lo spettacolo è stato rimandato, ma aspetterei la conferma ufficiale prima di disdire l’albergo.', 'Che cosa consiglia chi parla?',
      ['Disdire subito l’albergo', 'Aspettare una conferma prima di disdire', 'Comprare nuovi biglietti', 'Andare comunque allo spettacolo'], 1,
      '« A quanto pare » signale une information non vérifiée ; « aspetterei » est un conseil adouci.', { kc: HEDGE, d: 2.4 })
    .dictation('Volevo solo dirti che, secondo me, potresti chiedere un parere anche a lei.',
      'Imparfait de politesse (volevo) et conditionnel de suggestion (potresti).', { d: 2.5 })
    .repeat('Tutto lascia pensare che la trattativa si concluda entro l’estate.',
      '« Tutto lascia pensare che » + subjonctif : « si concluda ».', { kc: HEDGE, d: 2.4 })
    .say('Je dirais qu’on peut s’arrêter là pour aujourd’hui.',
      ['Direi che per oggi possiamo fermarci qui', 'Direi che possiamo fermarci qui per oggi', 'Direi che per oggi ci possiamo fermare qui', 'Direi che per oggi possiamo finire qui',
        'Direi che per oggi possiamo chiudere qui', 'Direi che possiamo fermarci qua per oggi', 'Direi che per oggi possiamo fermarci qua'],
      '« Direi che » atténue une proposition : c’est une décision présentée comme une simple opinion.', { d: 2.4 })
    .answer('Un amico ti chiede se il nuovo ristorante sotto casa merita. Ci sei stato una volta sola: rispondi con prudenza, usando almeno un’espressione di attenuazione o di prudenza.',
      'Ci sono stato una volta sola, quindi direi che è presto per giudicare: a quanto pare la cucina è buona, ma non è escluso che quella sera siano stati solo fortunati.',
      'Combine une opinion atténuée (direi che) et une tournure de prudence (a quanto pare, non è escluso che, sembrerebbe).',
      { kc: [HEDGE, MIT], d: 2.7, minWords: 18, keywords: [['direi', 'sembrerebbe', 'pare', 'escluso', 'darsi', 'sembra', 'parrebbe']] })
    .build(),
};
