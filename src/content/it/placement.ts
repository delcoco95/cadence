import { placementBank, type PlacementExercise, type PlacementRaw } from '../placement';

/**
 * Banque du test de niveau d'italien : items ORIGINAUX, calibrés sur une bande CECRL (A1 à C1),
 * réservés à l'évaluation. Les items A1 et A2 indiquent l'unité du parcours qu'ils permettent de valider.
 */
const GRAMMAR: PlacementRaw[] = [
  { band: 'A1', q: 'Io ___ francese, e tu?', o: ['sono', 'è', 'sei', 'ho'], a: 0, why: 'essere avec io → sono.', unit: 'it-a1-hello' },
  { band: 'A1', q: 'Ho ___ zaino nuovo.', o: ['uno', 'un', 'una', 'un’'], a: 0, why: 'Masculin devant z ou s + consonne → uno (uno zaino).', unit: 'it-a1-nouns' },
  { band: 'A1', q: 'Dove sono ___ studenti?', o: ['gli', 'i', 'le', 'lo'], a: 0, why: 'Masculin pluriel devant s + consonne → gli (gli studenti).', unit: 'it-a1-articles' },
  { band: 'A1', q: 'Giulia ___ vent’anni.', o: ['ha', 'è', 'hai', 'sono'], a: 0, why: 'L’âge s’exprime avec avere : ha vent’anni.', unit: 'it-a1-avere' },
  { band: 'A1', q: 'Noi ___ italiano ogni sera.', o: ['studiamo', 'studiate', 'studiano', 'studio'], a: 0, why: 'noi → -iamo : studiamo.', unit: 'it-a1-present-are' },
  { band: 'A1', q: 'A che ora ___ di lavorare, tu?', o: ['finisci', 'fini', 'finisce', 'finite'], a: 0, why: 'finire prend -isc- : tu finisci.', unit: 'it-a1-present-ere-ire' },
  { band: 'A1', q: 'Abito ___ Roma da tre anni.', o: ['a', 'in', 'di', 'da'], a: 0, why: 'Ville → a (a Roma) ; pays ou région → in.', unit: 'it-a1-time' },
  { band: 'A1', q: 'Mi ___ molto i film italiani.', o: ['piacciono', 'piace', 'piaccio', 'piacete'], a: 0, why: 'Le sujet est i film (pluriel) → piacciono.', unit: 'it-a1-daily' },
  { band: 'A2', q: 'Stasera andiamo ___ cinema.', o: ['al', 'a', 'nel', 'in'], a: 0, why: 'a + il → al cinema.', unit: 'it-a2-prepositions' },
  { band: 'A2', q: '___ madre lavora in ospedale.', o: ['Mia', 'La mia', 'Il mio', 'Mio'], a: 0, why: 'Nom de parenté au singulier : pas d’article → mia madre.', unit: 'it-a2-possessives' },
  { band: 'A2', q: 'Ieri sera ___ un bel film alla TV.', o: ['ho visto', 'sono visto', 'ho vedito', 'visto'], a: 0, why: 'vedere : auxiliaire avere, participe irrégulier visto.', unit: 'it-a2-passato-avere' },
  { band: 'A2', q: 'Mia sorella ___ in Spagna l’estate scorsa.', o: ['è andata', 'ha andato', 'è andato', 'ha andata'], a: 0, why: 'andare se conjugue avec essere ; le participe s’accorde avec le sujet (sorella → andata).', unit: 'it-a2-passato-essere' },
  { band: 'A2', q: 'Da bambino, ogni estate ___ al mare con i nonni.', o: ['andavo', 'sono andato', 'andrò', 'vado'], a: 0, why: 'Habitude dans le passé → imparfait : andavo.', unit: 'it-a2-imperfetto' },
  { band: 'A2', q: '— Conosci Laura? — Sì, ___ conosco bene.', o: ['la', 'le', 'lei', 'gli'], a: 0, why: 'Complément d’objet direct féminin → la.', unit: 'it-a2-pronouns' },
  { band: 'A2', q: '— Quanti caffè bevi al giorno? — ___ bevo tre.', o: ['Ne', 'Li', 'Ci', 'Lo'], a: 0, why: 'Avec une quantité → ne (ne bevo tre = j’en bois trois).', unit: 'it-a2-pronouns' },
  { band: 'A2', q: 'L’anno prossimo ___ a Milano.', o: ['abiterò', 'abitarò', 'abiterei', 'abitavo'], a: 0, why: 'Futur : les verbes en -are prennent -erò → abiterò.', unit: 'it-a2-future' },
  { band: 'A2', q: 'Non posso parlare adesso: ___ lavorando.', o: ['sto', 'sono', 'ho', 'vado'], a: 0, why: 'Action en cours → stare + gérondif : sto lavorando.', unit: 'it-a2-future' },
  { band: 'A2', q: 'Roma è più grande ___ Firenze.', o: ['di', 'che', 'da', 'come'], a: 0, why: 'Comparatif devant un nom ou un pronom → di (et non che, malgré le « que » français).', unit: 'it-a2-compare' },
  { band: 'A2', q: 'Marco, ___ la porta, per favore!', o: ['chiudi', 'chiude', 'chiuda', 'chiudete'], a: 0, why: 'Impératif à tu (on tutoie Marco) → chiudi.', unit: 'it-a2-compare' },
  { band: 'A2+', q: 'Chi ha ___ la finestra?', o: ['aperto', 'aprito', 'aperta', 'aprite'], a: 0, why: 'aprire → participe irrégulier aperto ; avec avere, pas d’accord avec le complément placé après.', unit: 'it-a2-passato-avere' },
  { band: 'A2+', q: 'Stamattina io e Marco ci ___ svegliati tardi.', o: ['siamo', 'abbiamo', 'sono', 'siete'], a: 0, why: 'Verbe pronominal → essere ; io e Marco = noi → ci siamo svegliati.', unit: 'it-a2-passato-essere' },
  { band: 'B1', q: 'Se avessi più tempo, ___ un corso di cucina.', o: ['farei', 'farò', 'facevo', 'faccia'], a: 0, why: 'Hypothèse possible : se + subjonctif imparfait, puis conditionnel présent.' },
  { band: 'B1', q: 'Voglio che voi ___ la verità.', o: ['diciate', 'dite', 'direte', 'dire'], a: 0, why: 'volere che + subjonctif présent : diciate.' },
  { band: 'B1', q: '— Mi presti la bici? — Sì, ___ presto volentieri.', o: ['te la', 'ti la', 'la ti', 'te lo'], a: 0, why: 'Pronoms combinés : ti + la → te la (la bici est féminin).' },
  { band: 'B1', q: 'La ragazza con ___ esco si chiama Giulia.', o: ['cui', 'che', 'quale', 'chi'], a: 0, why: 'Relatif après une préposition → cui (ou la quale, avec l’article).' },
  { band: 'B1+', q: 'Quando sono arrivato in stazione, il treno ___ già partito.', o: ['era', 'è', 'aveva', 'fosse'], a: 0, why: 'Action antérieure à un moment passé → trapassato prossimo ; partire prend essere : era partito.' },
  { band: 'B1+', q: 'In Italia ___ molta pasta.', o: ['si mangia', 'si mangiano', 'si mangiamo', 'se mangia'], a: 0, why: 'Si passivant : le verbe s’accorde avec molta pasta (singulier).' },
  { band: 'B2', q: 'Credevo che tu ___ già partito.', o: ['fossi', 'sei', 'sia', 'fosti'], a: 0, why: 'Principale au passé et antériorité → subjonctif plus-que-parfait : fossi partito.' },
  { band: 'B2', q: 'Se me l’avessi detto prima, ti ___.', o: ['avrei aiutato', 'aiuterei', 'avessi aiutato', 'aiuterò'], a: 0, why: 'Irréel du passé : se + subjonctif plus-que-parfait, puis conditionnel passé.' },
  { band: 'B2', q: 'Ti presto la macchina, ___ tu me la restituisca entro stasera.', o: ['purché', 'anche se', 'siccome', 'quando'], a: 0, why: 'purché (= pourvu que) introduit une condition et demande le subjonctif.' },
  { band: 'B2+', q: 'Mi disse che il giorno dopo ___ a trovarmi.', o: ['sarebbe venuto', 'verrebbe', 'verrà', 'sarà venuto'], a: 0, why: 'Futur dans le passé → conditionnel passé en italien (le français dit « viendrait »).' },
  { band: 'B2+', q: 'Pur ___ molto stanco, ha finito il lavoro.', o: ['essendo', 'essere', 'sia', 'stato'], a: 0, why: 'pur + gérondif = bien que : pur essendo stanco.' },
  { band: 'C1', q: 'Chiunque ___ visto qualcosa è pregato di contattare la polizia.', o: ['abbia', 'ha', 'avesse', 'avrebbe'], a: 0, why: 'chiunque est suivi du subjonctif ; ici passé : abbia visto.' },
  { band: 'C1', q: 'Non risponde al telefono: ___ già andato a dormire.', o: ['sarà', 'sia', 'fosse', 'sarebbe'], a: 0, why: 'Supposition sur le passé → futur antérieur de probabilité : sarà andato (= il a dû aller).' },
  { band: 'C1', q: 'È il libro più bello che io ___ mai letto.', o: ['abbia', 'ho', 'avrei', 'avessi'], a: 0, why: 'Relative après un superlatif → subjonctif : che io abbia mai letto.' },
];

const VOCABULARY: PlacementRaw[] = [
  { band: 'A1', q: 'Sono le undici di sera, vado a letto. ___!', o: ['Buonanotte', 'Buongiorno', 'Buon pomeriggio', 'Benvenuto'], a: 0, why: 'buonanotte = bonne nuit, quand on va se coucher.', unit: 'it-a1-hello' },
  { band: 'A1', q: 'Il padre di mio padre è mio ___.', o: ['nonno', 'zio', 'cugino', 'nipote'], a: 0, why: 'nonno = grand-père.' },
  { band: 'A1', q: 'Il latte è ___.', o: ['bianco', 'nero', 'rosso', 'verde'], a: 0, why: 'bianco = blanc.', unit: 'it-a1-avere' },
  { band: 'A1', q: 'Dopo il sabato viene la ___.', o: ['domenica', 'venerdì', 'lunedì', 'giovedì'], a: 0, why: 'Samedi, puis dimanche : domenica.', unit: 'it-a1-time' },
  { band: 'A2', q: 'Ho mal di testa: vado in ___ a comprare un’aspirina.', o: ['farmacia', 'libreria', 'macelleria', 'edicola'], a: 0, why: 'farmacia = pharmacie (libreria = librairie, pas bibliothèque).' },
  { band: 'A2', q: 'Scusi, quanto ___ questa giacca?', o: ['costa', 'paga', 'compra', 'spende'], a: 0, why: 'costare = coûter.' },
  { band: 'A2', q: 'Il treno per Bologna parte dal ___ 3.', o: ['binario', 'marciapiede', 'molo', 'cammino'], a: 0, why: 'binario = voie (de gare) ; marciapiede = trottoir.' },
  { band: 'A2', q: 'Domani ho un ___ di lavoro: devo preparare il curriculum.', o: ['colloquio', 'intervista', 'concorso', 'esame'], a: 0, why: 'colloquio di lavoro = entretien d’embauche (intervista = interview de journaliste).' },
  { band: 'A2', q: 'Prenotiamo una camera con un letto ___ per noi due.', o: ['matrimoniale', 'singolo', 'piccolo', 'stretto'], a: 0, why: 'letto matrimoniale = lit double.' },
  { band: 'A2+', q: 'Mi ___ un favore? Devo spostare il divano.', o: ['fai', 'dai', 'rendi', 'prendi'], a: 0, why: 'fare un favore = rendre service (on ne dit pas rendere).' },
  { band: 'A2+', q: 'Ho ___ il treno per due minuti!', o: ['perso', 'mancato', 'lasciato', 'fallito'], a: 0, why: 'perdere il treno = rater le train.' },
  { band: 'B1', q: 'Lavora in una grande azienda e prende un buono ___.', o: ['stipendio', 'prezzo', 'costo', 'sconto'], a: 0, why: 'stipendio = salaire.' },
  { band: 'B1', q: 'Ho ___ appuntamento dal dentista per lunedì.', o: ['preso', 'fatto', 'dato', 'messo'], a: 0, why: 'prendere appuntamento = prendre rendez-vous.' },
  { band: 'B1', q: 'D’estate lavoro come cameriere per ___ un po’ di soldi.', o: ['guadagnare', 'vincere', 'meritare', 'ottenere'], a: 0, why: 'guadagnare = gagner (de l’argent en travaillant) ; vincere = gagner (un match, un prix).' },
  { band: 'B1+', q: 'Non vedo l’___ di rivederti!', o: ['ora', 'momento', 'tempo', 'attesa'], a: 0, why: 'non vedere l’ora di = avoir hâte de.' },
  { band: 'B1+', q: 'Il direttore è malato: dobbiamo ___ la riunione a giovedì.', o: ['rimandare', 'ritardare', 'riportare', 'ritornare'], a: 0, why: 'rimandare = reporter (à plus tard).' },
  { band: 'B2', q: 'Grazie, non serve aiuto: ce la ___ da solo.', o: ['faccio', 'posso', 'vado', 'metto'], a: 0, why: 'farcela = y arriver : ce la faccio.' },
  { band: 'B2', q: 'Quanto tempo ci ___ per arrivare in centro?', o: ['vuole', 'serve', 'va', 'fa'], a: 0, why: 'volerci = falloir (durée) : quanto tempo ci vuole?' },
  { band: 'B2+', q: 'È una persona molto ___: non cambia mai idea.', o: ['testarda', 'sensibile', 'disponibile', 'educata'], a: 0, why: 'testardo = têtu.' },
  { band: 'C1', q: 'La riforma ha suscitato un acceso ___ in Parlamento.', o: ['dibattito', 'argomento', 'discorso', 'dialogo'], a: 0, why: 'un acceso dibattito = un débat animé (collocation).' },
  { band: 'C1', q: 'Per ___ di cronaca, la riunione era già finita da un’ora.', o: ['dovere', 'obbligo', 'necessità', 'bisogno'], a: 0, why: 'per dovere di cronaca = pour être tout à fait exact (locution figée).' },
];

const READING: PlacementRaw[] = [
  {
    band: 'A1', passage: 'Ciao! Mi chiamo Giulia, ho 23 anni e abito a Bologna con due amiche. Studio medicina all’università. Il fine settimana lavoro in un bar.',
    q: 'Che cosa studia Giulia?', o: ['Medicina', 'Lingue', 'Economia', 'Musica'], a: 0, why: '« Studio medicina all’università. »',
  },
  {
    band: 'A1', passage: 'Ciao Paolo, sono al supermercato. Compro il pane e il latte. A casa alle sette. Baci, Anna',
    q: 'Dov’è Anna?', o: ['Al supermercato', 'A casa', 'Al bar', 'In ufficio'], a: 0, why: '« sono al supermercato ».',
  },
  {
    band: 'A2', passage: 'FARMACIA CENTRALE\nLunedì – venerdì: 8.30 – 13.00 e 15.30 – 19.30\nSabato: 9.00 – 12.30\nDomenica: chiuso',
    q: 'Il sabato pomeriggio la farmacia…', o: ['è chiusa', 'apre alle 15.30', 'è aperta fino alle 19.30', 'chiude alle 13.00'], a: 0,
    why: 'Le samedi, elle ferme à 12 h 30 : fermée l’après-midi.',
  },
  {
    band: 'A2', passage: 'Cara Marta,\npurtroppo domani non posso venire alla tua festa: mio figlio ha la febbre e devo restare a casa con lui. Ci vediamo la settimana prossima?\nUn abbraccio, Elena',
    q: 'Perché Elena non va alla festa?', o: ['Suo figlio è malato', 'Deve lavorare', 'È in vacanza', 'Non è invitata'], a: 0,
    why: '« mio figlio ha la febbre » : son fils est malade.',
  },
  {
    band: 'A2+', passage: 'AFFITTASI bilocale in centro, 2° piano senza ascensore, arredato, vicino alla stazione. 650 € al mese, spese escluse. No animali.',
    q: 'Quale affermazione è vera?', o: ['Le spese non sono comprese nei 650 €', 'L’appartamento ha l’ascensore', 'Si può tenere un cane', 'L’appartamento è vuoto'], a: 0,
    why: '« spese escluse » = charges non comprises.',
  },
  {
    band: 'A2+', passage: 'Da bambino Luca passava tutte le estati in Puglia dai nonni. Oggi vive a Torino e lavora molto, ma ogni agosto torna al Sud con la sua famiglia.',
    q: 'Che cosa fa Luca oggi ad agosto?', o: ['Va al Sud con la famiglia', 'Lavora a Torino', 'Va dai nonni a Torino', 'Resta a casa da solo'], a: 0,
    why: '« ogni agosto torna al Sud con la sua famiglia » ; les étés chez les grands-parents, c’était dans son enfance.',
  },
  {
    band: 'B1', passage: 'CERCASI cameriere/a per ristorante sul lago. Contratto per la stagione estiva (giugno – settembre). Richiesta la conoscenza dell’inglese; il tedesco è un plus. Vitto e alloggio offerti.',
    q: 'Che cosa offre il ristorante?', o: ['I pasti e una stanza', 'Un contratto di un anno', 'Un corso di tedesco', 'Un lavoro solo a giugno'], a: 0,
    why: '« vitto e alloggio » = nourri et logé.',
  },
  {
    band: 'B1', passage: 'Gentili viaggiatori, a causa di lavori sulla linea, dal 3 al 10 marzo i treni tra Firenze e Pisa saranno sostituiti da autobus. I biglietti già acquistati restano validi.',
    q: 'Chi ha già comprato il biglietto…', o: ['può usarlo sull’autobus', 'deve comprarne uno nuovo', 'deve chiedere il rimborso', 'non può viaggiare'], a: 0,
    why: '« I biglietti già acquistati restano validi. »',
  },
  {
    band: 'B1+', passage: 'Sebbene il centro storico sia pieno di turisti tutto l’anno, molti negozi tradizionali stanno chiudendo: gli affitti sono diventati troppo alti per chi vende prodotti locali.',
    q: 'Perché chiudono i negozi tradizionali?', o: ['Gli affitti costano troppo', 'Non ci sono più turisti', 'I proprietari vanno in pensione', 'I prodotti locali sono vietati'], a: 0,
    why: '« gli affitti sono diventati troppo alti ».',
  },
  {
    band: 'B2', passage: 'Negli ultimi anni le biblioteche di quartiere si sono trasformate: oltre ai libri, offrono corsi, spazi per lo studio e attività per bambini. Alcuni, però, temono che, inseguendo tutte queste funzioni, finiscano per perdere la loro identità.',
    q: 'Qual è l’idea principale del testo?', o: ['Le biblioteche cambiano, ma non tutti ne sono convinti', 'Le biblioteche stanno chiudendo', 'Le biblioteche non prestano più libri', 'Le biblioteche sono ormai solo per bambini'], a: 0,
    why: 'Transformation (cours, espaces…) et inquiétude de certains (« alcuni, però, temono ») .',
  },
  {
    band: 'B2+', passage: 'Il romanzo non concede nulla al lieto fine; eppure, nelle ultime pagine, si intravede la possibilità che i protagonisti, pur feriti, ricomincino a vivere.',
    q: 'Il finale del romanzo è…', o: ['amaro, ma con un filo di speranza', 'del tutto felice', 'completamente disperato', 'comico'], a: 0,
    why: 'Pas de fin heureuse (« non concede nulla al lieto fine »), mais une possibilité de renouveau (« si intravede la possibilità »).',
  },
  {
    band: 'C1', passage: 'Non è tanto la mancanza di fondi a frenare la ricerca, quanto la lentezza con cui le risorse disponibili vengono assegnate: progetti già approvati attendono mesi prima di ricevere un solo euro.',
    q: 'Secondo l’autore, il problema principale è…', o: ['la lentezza nell’assegnare i fondi', 'la mancanza di fondi', 'il numero eccessivo di progetti', 'la scarsa qualità dei ricercatori'], a: 0,
    why: '« Non tanto… quanto » : le vrai problème n’est pas le manque d’argent, mais la lenteur de son attribution.',
  },
];

const LISTENING: PlacementRaw[] = [
  { band: 'A1', audio: 'Il treno per Napoli parte alle nove e un quarto.', q: 'A che ora parte il treno?', o: ['9.15', '9.45', '8.15', '9.30'], a: 0, why: 'nove e un quarto = 9 h 15.' },
  { band: 'A1', audio: 'Vorrei un cappuccino e due cornetti, per favore.', q: 'Che cosa ordina la persona?', o: ['Un cappuccino e due cornetti', 'Due cappuccini e un cornetto', 'Un tè e due cornetti', 'Due caffè'], a: 0, why: '« un cappuccino e due cornetti ».' },
  { band: 'A1', audio: 'Mi chiamo Sara, sono di Genova e ho trentadue anni.', q: 'Quanti anni ha Sara?', o: ['32', '22', '42', '23'], a: 0, why: 'trentadue = 32.' },
  { band: 'A2', audio: 'Scusa il ritardo: ho perso l’autobus e ho dovuto aspettare quello dopo.', q: 'Perché la persona è in ritardo?', o: ['Ha perso l’autobus', 'C’era traffico', 'Si è svegliata tardi', 'Il treno era in ritardo'], a: 0, why: '« ho perso l’autobus ».' },
  { band: 'A2', audio: 'Sono diciassette euro e sessanta, grazie.', q: 'Quanto deve pagare?', o: ['17,60 €', '17,70 €', '16,70 €', '70,60 €'], a: 0, why: 'diciassette = 17 ; sessanta = 60 (settanta = 70).' },
  { band: 'A2', audio: 'La farmacia è in fondo alla strada, di fronte alla banca.', q: 'Dov’è la farmacia?', o: ['Di fronte alla banca', 'Accanto alla banca', 'Dietro la banca', 'All’inizio della strada'], a: 0, why: '« di fronte alla banca » = en face de la banque.' },
  { band: 'A2+', audio: 'Sabato scorso siamo andati al lago, ma pioveva, così siamo tornati a casa presto.', q: 'Che cosa è successo sabato?', o: ['Sono tornati presto per la pioggia', 'Sono rimasti al lago tutto il giorno', 'Non sono partiti', 'Hanno fatto il bagno nel lago'], a: 0, why: '« pioveva, così siamo tornati a casa presto ».' },
  { band: 'A2+', audio: 'Il museo è aperto tutti i giorni tranne il lunedì.', q: 'Quando è chiuso il museo?', o: ['Il lunedì', 'La domenica', 'Mai', 'Il sabato'], a: 0, why: 'tranne il lunedì = sauf le lundi.' },
  { band: 'B1', audio: 'Se domani fa bel tempo andiamo in montagna, altrimenti restiamo in città e andiamo a vedere una mostra.', q: 'Che cosa faranno se piove?', o: ['Andranno a vedere una mostra', 'Andranno in montagna', 'Resteranno a casa', 'Andranno al mare'], a: 0, why: 'altrimenti (= sinon) : ils restent en ville et vont voir une exposition.' },
  { band: 'B1', audio: 'Potrebbe mandarmi il preventivo entro mercoledì? Giovedì mattina devo presentarlo al direttore.', q: 'Entro quando serve il preventivo?', o: ['Mercoledì', 'Giovedì', 'Oggi', 'La settimana prossima'], a: 0, why: '« entro mercoledì » : jeudi, c’est la présentation au directeur.' },
  { band: 'B1+', audio: 'Sinceramente non mi aspettavo granché da quel film, e invece mi è piaciuto moltissimo.', q: 'Che cosa pensa del film chi parla?', o: ['È stato meglio del previsto', 'È stato deludente', 'Non l’ha ancora visto', 'Era proprio come previsto'], a: 0, why: '« non mi aspettavo granché… e invece mi è piaciuto moltissimo ».' },
  { band: 'B2', audio: 'Se avessimo prenotato prima, avremmo trovato posto in quell’albergo; invece abbiamo dovuto dormire in un ostello.', q: 'Dove hanno dormito?', o: ['In un ostello', 'In quell’albergo', 'In campeggio', 'A casa di amici'], a: 0, why: 'L’hôtel est une hypothèse irréelle ; en réalité : « abbiamo dovuto dormire in un ostello ».' },
  { band: 'B2+', audio: 'Ha fatto di tutto per convincerlo, ma lui non ha voluto sentire ragioni.', q: 'Com’è andata a finire?', o: ['Lui non ha cambiato idea', 'Lui si è convinto subito', 'Lui non ha sentito niente', 'Lei ha rinunciato subito'], a: 0, why: 'non voler sentire ragioni = ne rien vouloir entendre.' },
  { band: 'C1', audio: 'Magari avesse ragione lui! Purtroppo i conti dicono tutt’altro.', q: 'Che cosa pensa chi parla?', o: ['Che lui, purtroppo, ha torto', 'Che lui ha ragione', 'Che i conti sono sbagliati', 'Che forse lui ha ragione'], a: 0, why: 'magari + subjonctif imparfait = si seulement… : souhait irréalisable, confirmé par « i conti dicono tutt’altro ».' },
];

export const PLACEMENT: PlacementExercise[] = placementBank(
  { grammar: GRAMMAR, vocabulary: VOCABULARY, reading: READING, listening: LISTENING },
  { prefix: 'it-' },
);
