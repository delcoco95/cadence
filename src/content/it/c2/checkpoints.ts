import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('it');

/**
 * Défis de fin d'unité C2 : items d'ÉVALUATION inédits (jamais repris des leçons).
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_C2: Record<string, Exercise[]> = {
  'it-c2-sfumature': assessment(
    exercises('cp-it-c2-sfumature', 'C2', { kc: 'it.c2.grammar.epistemic_future' })
      .mcq('Le luci sono spente e la macchina non c’è: ___ già partiti per le vacanze.', ['saranno', 'sarebbero', 'fossero', 'siano'], 0,
        'Supposition sur le passé : futur antérieur « saranno partiti ».', { d: 2.3 })
      .cloze('Stando alle prime ricostruzioni, l’autista ___ un malore improvviso.', ['avrebbe avuto'],
        '« Stando a » : information non confirmée → conditionnel passé « avrebbe avuto ».', { kc: 'it.c2.grammar.hearsay_conditional', hint: 'avere, conditionnel passé', d: 2.5 })
      .type('Adoucis : « Voglio sapere se la camera è libera. » → « ___ sapere se la camera è libera. »', ['Volevo', 'Vorrei'],
        'Imparfait (volevo) ou conditionnel (vorrei) de politesse.', { kc: 'it.c2.function.mitigation', d: 2.2 })
      .tr('Il n’est pas exclu que le concert soit annulé.',
        ['Non è escluso che il concerto venga annullato.', 'Non è escluso che il concerto sia annullato.', 'Non si esclude che il concerto venga annullato.',
          'Non si esclude che il concerto sia annullato.', 'Non è escluso che il concerto venga cancellato.', 'Non è escluso che il concerto sia cancellato.',
          'Non si può escludere che il concerto venga annullato.'],
        '« Non è escluso che » + subjonctif : « venga / sia annullato ».', { kc: 'it.c2.function.hedging', d: 2.5 })
      .listen('Secondo indiscrezioni, la società starebbe per cedere il suo marchio più famoso a un gruppo straniero.', 'Come viene presentata la notizia?',
        ['Come una voce non ancora confermata', 'Come una decisione ufficiale', 'Come una smentita', 'Come un’opinione del giornalista'], 0,
        '« Secondo indiscrezioni… starebbe per » : conditionnel de distance.', { kc: 'it.c2.grammar.hearsay_conditional', d: 2.4 })
      .dictation('Sarà anche un ottimo medico, ma non ascolta mai i suoi pazienti.',
        'Futur concessif : « sarà anche…, ma » (certes…, mais).', { d: 2.4 })
      .say('Il doit être déjà arrivé à la gare.',
        ['Sarà già arrivato alla stazione', 'Sarà già arrivato in stazione', 'Dovrebbe essere già arrivato alla stazione', 'Deve essere già arrivato alla stazione',
          'Sarà già arrivata alla stazione', 'Sarà già arrivato alla stazione ormai'],
        'Supposition sur le passé : futur antérieur « sarà già arrivato ».', { d: 2.4 })
      .build(),
  ),
  'it-c2-letterario': assessment(
    exercises('cp-it-c2-letterario', 'C2', { kc: 'it.c2.grammar.trapassato_remoto' })
      .mcq('Quando ___ il discorso, il re congedò i ministri.', ['ebbe terminato', 'ha terminato', 'abbia terminato', 'avrà terminato'], 0,
        'Quando + trapassato remoto avec une principale au passato remoto (congedò).', { d: 2.4 })
      .cloze('___ la notizia, la folla si disperse in silenzio.', ['Appresa', 'Saputa', 'Udita', 'Sentita'],
        'Participe absolu accordé avec « la notizia ».', { kc: 'it.c2.grammar.absolute_participle', hint: 'apprendre, participe accordé', d: 2.5 })
      .type('Équivalent courant de « allorché » ? (un mot)', ['quando'],
        'allorché = quando (lorsque).', { kc: 'it.c2.vocabulary.literary_lexicon', d: 2.2 })
      .tr('Les invités partis, la maison redevint silencieuse.',
        ['Partiti gli ospiti, la casa tornò silenziosa.', 'Partiti gli ospiti, la casa ridivenne silenziosa.', 'Partiti gli invitati, la casa tornò silenziosa.',
          'Partiti gli invitati, la casa ridivenne silenziosa.', 'Andati via gli ospiti, la casa tornò silenziosa.', 'Partiti gli ospiti, la casa tornò a essere silenziosa.',
          'Partiti gli ospiti, la casa tornò nel silenzio.'],
        'Participe absolu (partiti gli ospiti) et passato remoto (tornò).', { kc: 'it.c2.grammar.absolute_participle', d: 2.6 })
      .listen('Non v’era anima viva per le strade allorché il forestiero giunse in paese.', 'Che cosa trovò il forestiero arrivando in paese?',
        ['Le strade deserte', 'Una grande festa', 'Il sindaco ad aspettarlo', 'Un mercato affollato'], 0,
        'non v’era anima viva = il n’y avait pas âme qui vive ; allorché = quando.', { kc: 'it.c2.grammar.literary_syntax', d: 2.5 })
      .dictation('Dopo che ebbe chiuso la porta, si accorse di aver dimenticato le chiavi.',
        'Trapassato remoto « ebbe chiuso », puis passato remoto « si accorse ».', { d: 2.5 })
      .say('Une fois le repas terminé, ils sortirent sur la terrasse.',
        ['Terminato il pranzo, uscirono sulla terrazza', 'Finito il pranzo, uscirono sulla terrazza', 'Terminata la cena, uscirono sulla terrazza', 'Finita la cena, uscirono sulla terrazza',
          'Terminato il pasto, uscirono sulla terrazza', 'Finito il pasto, uscirono sulla terrazza'],
        'Participe absolu accordé (terminato il pranzo, terminata la cena) et passato remoto.', { kc: 'it.c2.grammar.absolute_participle', d: 2.5 })
      .build(),
  ),
  'it-c2-idiomi': assessment(
    exercises('cp-it-c2-idiomi', 'C2', { kc: 'it.c2.vocabulary.idioms_attitude' })
      .mcq('Durante la riunione nessuno ha voluto esporsi: tutti hanno fatto…', ['il pesce in barile', 'il passo più lungo della gamba', 'buon viso', 'la mosca bianca'], 0,
        'fare il pesce in barile = ne pas prendre position.', { d: 2.3 })
      .cloze('Dai, sputa il ___: che cosa è successo davvero ieri sera?', ['rospo'],
        'sputare il rospo = cracher le morceau.', { kc: 'it.c2.vocabulary.idioms_imagery', d: 2.3 })
      .type('Complète le proverbe : « Chi dorme non piglia ___. »', ['pesci'],
        'Chi dorme non piglia pesci : on n’a rien sans effort.', { kc: 'it.c2.vocabulary.proverbs', d: 2.2 })
      .tr('Chassez le naturel, il revient au galop.',
        ['Il lupo perde il pelo ma non il vizio.', 'Il lupo perde il pelo, ma non il vizio'],
        'Équivalent italien : le loup perd son poil mais pas son vice.', { kc: 'it.c2.vocabulary.proverbs', d: 2.4 })
      .listen('Volevano comprare una barca senza avere i soldi per il mutuo: hanno fatto il passo più lungo della gamba.', 'Che cosa hanno fatto?',
        ['Hanno voluto qualcosa al di sopra dei loro mezzi', 'Hanno fatto una lunga camminata', 'Hanno rinunciato alla barca', 'Hanno pagato in contanti'], 0,
        'fare il passo più lungo della gamba = dépasser ses moyens.', { d: 2.3 })
      .dictation('Eh, tanto va la gatta al lardo che ci lascia lo zampino.',
        'Équivalent de « tant va la cruche à l’eau qu’à la fin elle se casse ».', { kc: 'it.c2.function.proverb_allusion', d: 2.5 })
      .say('Il cherche toujours la petite bête.',
        ['Cerca sempre il pelo nell’uovo', 'Va sempre a cercare il pelo nell’uovo', 'Cerca sempre il pelo nell’uovo lui'],
        'cercare il pelo nell’uovo = chercher la petite bête.', { kc: 'it.c2.vocabulary.idioms_imagery', d: 2.4 })
      .build(),
  ),
  'it-c2-giornalistico': assessment(
    exercises('cp-it-c2-giornalistico', 'C2', { kc: 'it.c2.reading.headline_style' })
      .mcq('Titolo: « Treni, scatta lo sciopero: stop di 24 ore ». Che cosa succede?',
        ['Comincia uno sciopero dei treni di un giorno', 'I treni aumentano le corse', 'Lo sciopero è stato annullato', 'I biglietti costano di più'], 0,
        'scattare = commencer, entrer en vigueur ; titre nominal.', { d: 2.3 })
      .cloze('Il governo ha annunciato una ___ sugli affitti brevi: controlli e multe più severe.', ['stretta'],
        'una stretta = un tour de vis.', { kc: 'it.c2.vocabulary.press_lexicon', hint: 'tour de vis', d: 2.4 })
      .type('Nominalise : « dopo che il ponte è stato inaugurato » → « dopo l’___ del ponte »', ['inaugurazione'],
        'Nom d’action : l’inaugurazione.', { kc: 'it.c2.grammar.nominal_style', d: 2.3 })
      .tr('Le porte-parole a réaffirmé que l’accord sera signé lundi.',
        ['Il portavoce ha ribadito che l’accordo sarà firmato lunedì.', 'La portavoce ha ribadito che l’accordo sarà firmato lunedì.', 'Il portavoce ha ribadito che l’accordo verrà firmato lunedì.',
          'La portavoce ha ribadito che l’accordo verrà firmato lunedì.', 'Il portavoce ha riaffermato che l’accordo sarà firmato lunedì.', 'Il portavoce ha ribadito che l’intesa sarà firmata lunedì.'],
        'réaffirmer = ribadire ; il / la portavoce.', { kc: 'it.c2.function.press_reporting', d: 2.5 })
      .listen('Rifiuti, braccio di ferro tra Comune e Regione: nessun accordo sulla nuova discarica.', 'Qual è la situazione?',
        ['Comune e Regione sono in conflitto e non trovano un accordo', 'È stata aperta una nuova discarica', 'Comune e Regione hanno firmato un accordo', 'La raccolta dei rifiuti è sospesa'], 0,
        'il braccio di ferro : conflit où personne ne cède.', { kc: 'it.c2.vocabulary.press_lexicon', d: 2.4 })
      .dictation('A seguito delle forti piogge, la strada provinciale resterà chiusa fino a nuovo avviso.',
        'a seguito di + nom : style nominal.', { kc: 'it.c2.grammar.nominal_style', d: 2.4 })
      .say('Pollution : la polémique enfle en ville.',
        ['Smog, monta la polemica in città', 'Inquinamento, monta la polemica in città', 'Smog, cresce la polemica in città', 'Inquinamento, cresce la polemica in città',
          'Smog, in città monta la polemica', 'Inquinamento, in città monta la polemica'],
        'Titre : thème + verbe placé avant le sujet (monta la polemica).', { d: 2.4 })
      .build(),
  ),
  'it-c2-accademico': assessment(
    exercises('cp-it-c2-accademico', 'C2', { kc: 'it.c2.writing.academic_structure' })
      .mcq('Quale espressione introduce una conclusione logica?', ['Ne consegue che', 'Per non parlare di', 'A quanto pare', 'Detto fatto'], 0,
        'ne consegue che = il s’ensuit que.', { d: 2.3 })
      .cloze('Si ___ che il fenomeno sia legato a fattori economici.', ['ritiene', 'pensa', 'suppone', 'ipotizza', 'presume'],
        'Si ritiene che + subjonctif : formule impersonnelle.', { kc: 'it.c2.grammar.academic_impersonal', d: 2.3 })
      .type('Quel verbe signifie « étayer, corroborer » (une hypothèse) ? (infinitif)', ['avvalorare', 'corroborare', 'suffragare', 'confermare'],
        'avvalorare, corroborare un’ipotesi.', { kc: 'it.c2.vocabulary.academic_lexicon', d: 2.4 })
      .tr('Contrairement à ce que soutiennent certains auteurs, le phénomène n’est pas récent.',
        ['A differenza di quanto sostenuto da alcuni autori, il fenomeno non è recente.', 'Contrariamente a quanto sostenuto da alcuni autori, il fenomeno non è recente.',
          'A differenza di quanto sostengono alcuni autori, il fenomeno non è recente.', 'Contrariamente a quanto sostengono alcuni autori, il fenomeno non è recente.',
          'Diversamente da quanto sostenuto da alcuni autori, il fenomeno non è recente.', 'A differenza di quanto affermano alcuni autori, il fenomeno non è recente.'],
        'a differenza di / contrariamente a quanto sostenuto da…', { kc: 'it.c2.writing.academic_argument', d: 2.6 })
      .listen('Pur riconoscendo i limiti del campione, i risultati evidenziano una tendenza chiara.', 'Che cosa ammette l’autore?',
        ['Che il campione ha dei limiti', 'Che i risultati sono sbagliati', 'Che non c’è nessuna tendenza', 'Che il campione è molto ampio'], 0,
        'pur riconoscendo : concession.', { kc: 'it.c2.writing.academic_argument', d: 2.4 })
      .dictation('Va sottolineato che i dati si riferiscono esclusivamente al periodo considerato.',
        'Va sottolineato : andare + participe = il faut souligner.', { kc: 'it.c2.grammar.academic_impersonal', d: 2.5 })
      .say('Ce travail se propose d’analyser le rôle des réseaux sociaux.',
        ['Il presente lavoro si propone di analizzare il ruolo dei social network', 'Questo lavoro si propone di analizzare il ruolo dei social network', 'Il presente lavoro si propone di analizzare il ruolo dei social',
          'Il presente lavoro intende analizzare il ruolo dei social network', 'Il presente lavoro si propone di analizzare il ruolo delle reti sociali', 'Questo lavoro si propone di analizzare il ruolo dei social'],
        'Il presente lavoro si propone di + infinitif.', { d: 2.5 })
      .build(),
  ),
  'it-c2-parlato': assessment(
    exercises('cp-it-c2-parlato', 'C2', { kc: 'it.c2.speaking.discourse_markers' })
      .mcq('– Ti è piaciuto il film? – ___, la prima parte sì, la seconda insomma…', ['Mah', 'Daje', 'Uè', 'Ammazza'], 0,
        '« Mah » : hésitation, avis mitigé.', { d: 2.2 })
      .cloze('Non te la prendere, non l’ha ___ fatto apposta!', ['mica'],
        'mica renforce la négation : il ne l’a pas du tout fait exprès.', { kc: 'it.c2.grammar.colloquial_structures', hint: 'pas du tout (familier)', d: 2.3 })
      .type('Quel mot romain signifie « allez, courage ! » ?', ['daje'],
        'daje (romain) = dai, forza.', { kc: 'it.c2.vocabulary.regionalisms', d: 2.2 })
      .tr('Je vais le faire, c’est-à-dire, j’essaie.',
        ['Lo faccio, cioè, ci provo.', 'Lo farò, cioè, ci provo.', 'Lo faccio, cioè, ci proverò.', 'Lo farò, cioè, ci proverò.', 'Lo faccio, cioè, provo.', 'Lo farò, cioè, provo.'],
        '« Cioè » introduit une correction : je veux dire.', { d: 2.3 })
      .listen('Uè, ciao! Hai visto il Luca? Doveva essere qui alle sei.', 'Quale tratto regionale si sente?',
        ['L’articolo davanti al nome proprio, tipico del Nord', 'Il passato remoto, tipico del Sud', 'La gorgia toscana', 'Il verbo tenere al posto di avere'], 0,
        '« il Luca » : article devant le prénom, trait du Nord ; « uè » est aussi lombard.', { kc: 'it.c2.listening.regional_varieties', d: 2.4 })
      .dictation('Insomma, alla fine non siamo andati da nessuna parte.',
        'Insomma : bref, finalement.', { d: 2.2 })
      .say('Pas question !',
        ['Manco per sogno', 'Neanche per sogno', 'Nemmeno per sogno', 'Neppure per sogno', 'Manco per idea', 'Neanche per idea'],
        'Manco / neanche per sogno : jamais de la vie.', { kc: 'it.c2.grammar.colloquial_structures', d: 2.2 })
      .build(),
  ),
  'it-c2-retorica': assessment(
    exercises('cp-it-c2-retorica', 'C2', { kc: 'it.c2.reading.figures_of_speech' })
      .mcq('« Ti ho aspettato una vita! » è…', ['un’iperbole', 'un ossimoro', 'una litote', 'una metonimia'], 0,
        'Exagération : iperbole.', { d: 2.2 })
      .cloze('Hai perso di nuovo le chiavi? Sai che ___!', ['novità'],
        'Sai che novità : ironie (rien de surprenant).', { kc: 'it.c2.function.irony', d: 2.2 })
      .type('Comment s’appelle en italien la figure « un silenzio assordante » ? (avec l’article)', ['l’ossimoro', 'ossimoro'],
        'L’ossimoro : association de termes contradictoires.', { d: 2.3 })
      .tr('Si tu le dis…',
        ['Se lo dici tu…', 'Se lo dici tu', 'Sarà come dici tu…', 'Se lo dice Lei…'],
        '« Se lo dici tu » : doute poli, sous-entendu « je n’y crois pas ».', { kc: 'it.c2.function.implicature', d: 2.2 })
      .listen('Non starò qui a ricordarvi tutti gli errori del passato: li conoscete benissimo.', 'Quale procedimento usa chi parla?',
        ['La preterizione', 'L’anafora', 'L’ossimoro', 'La litote'], 0,
        'Il dit qu’il ne rappellera pas les erreurs, et les évoque ainsi : prétérition.', { kc: 'it.c2.function.persuasive_rhetoric', d: 2.5 })
      .dictation('Grazie tante per avermi avvisato all’ultimo momento!',
        '« Grazie tante » ironique : reproche.', { kc: 'it.c2.function.irony', d: 2.3 })
      .say('Ça n’a pas été une partie de plaisir.',
        ['Non è stata una passeggiata', 'Non è stata una passeggiata di salute', 'Non è stato facile', 'Non è stata una gita di piacere'],
        'Litote : non è stata una passeggiata.', { d: 2.4 })
      .build(),
  ),
  'it-c2-precisione': assessment(
    exercises('cp-it-c2-precisione', 'C2', { kc: 'it.c2.vocabulary.false_friends_nouns' })
      .mcq('Quale parola significa « la cave » (sous la maison) ?', ['la cantina', 'la cava', 'la mensa', 'la camera'], 0,
        'la cantina = la cave ; la cava = la carrière ; la mensa = la cantine.', { d: 2.3 })
      .cloze('La polizia ha ___ un uomo sospettato del furto.', ['fermato'],
        'fermare qualcuno = interpeller quelqu’un.', { kc: 'it.c2.vocabulary.false_friends_verbs', hint: 'interpeller', d: 2.4 })
      .type('Comment dit-on « délivrer un passeport » ? « ___ un passaporto » (infinitif)', ['rilasciare'],
        'rilasciare un documento = délivrer un document.', { kc: 'it.c2.vocabulary.precise_verbs', d: 2.4 })
      .tr('Il faut rectifier cette erreur dans le rapport.',
        ['Bisogna rettificare questo errore nella relazione.', 'Occorre rettificare questo errore nella relazione.', 'Bisogna correggere questo errore nella relazione.',
          'Occorre correggere questo errore nella relazione.', 'Bisogna rettificare questo errore nel rapporto.', 'Bisogna correggere questo errore nel rapporto.',
          'Va rettificato questo errore nella relazione.', 'Questo errore nella relazione va rettificato.', 'Questo errore nella relazione va corretto.'],
        'rettificare (rectifier) ≠ ratificare (ratifier).', { kc: 'it.c2.vocabulary.paronyms', d: 2.5 })
      .listen('Quest’anno tutti i miei parenti verranno da noi per Pasqua: saremo almeno in venti.', 'Chi verrà per Pasqua?',
        ['Molti membri della famiglia', 'Solo il padre e la madre', 'I vicini di casa', 'I colleghi'], 0,
        'i parenti = la famille élargie.', { d: 2.2 })
      .dictation('Il fine giustifica i mezzi, sosteneva, ma alla fine ha dovuto ricredersi.',
        'il fine (le but) / la fine (la fin).', { kc: 'it.c2.vocabulary.paronyms', d: 2.5 })
      .say('Je prétends que c’est faux.',
        ['Sostengo che è falso', 'Sostengo che sia falso', 'Affermo che è falso', 'Affermo che sia falso', 'Io sostengo che è falso', 'Io sostengo che sia falso'],
        'prétendre (affirmer) = sostenere ; pretendere = exiger.', { kc: 'it.c2.vocabulary.false_friends_verbs', d: 2.4 })
      .build(),
  ),
};

/** Objectifs « Je peux… » de chaque unité C2. */
export const CAN_DO_C2: Record<string, string[]> = {
  'it-c2-sfumature': ['Je peux formuler des suppositions graduées avec le futur et le futur antérieur de probabilité.', 'Je peux rapporter une information non confirmée au conditionnel et atténuer une demande ou une critique.'],
  'it-c2-letterario': ['Je peux lire un récit littéraire au passato remoto, trapassato remoto et participe absolu compris.', 'Je peux reconnaître et employer à bon escient le lexique et la syntaxe du style soutenu.'],
  'it-c2-idiomi': ['Je peux comprendre et employer des idiomes imagés sans les calquer sur le français.', 'Je peux citer un proverbe, y compris à moitié, et saisir ses détournements.'],
  'it-c2-giornalistico': ['Je peux décoder les titres de presse et leur lexique (varare, slittare, la stangata).', 'Je peux écrire dans un style nominal et choisir le verbe introducteur juste.'],
  'it-c2-accademico': ['Je peux structurer un texte académique et effacer le « je » par l’impersonnel.', 'Je peux citer, concéder et réfuter avec le lexique de la recherche.'],
  'it-c2-parlato': ['Je peux comprendre et utiliser les marqueurs du discours et les tournures familières de l’oral.', 'Je peux reconnaître les grands traits régionaux de l’italien parlé.'],
  'it-c2-retorica': ['Je peux identifier les figures de style et les procédés persuasifs d’un discours.', 'Je peux saisir l’ironie et les sous-entendus, et en user avec tact.'],
  'it-c2-precisione': ['Je peux éviter les faux amis entre le français et l’italien.', 'Je peux distinguer les paronymes et choisir le verbe exact plutôt que fare, dare ou mettere.'],
};
