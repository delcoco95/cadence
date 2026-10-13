import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FORM = 'it.a2.tense.imperfetto_form';
const USE = 'it.a2.tense.imperfetto_uses';
const CONTRAST = 'it.a2.tense.imperfetto_vs_passato';

export const imperfetto1: Lesson = {
  id: 'it-a2-imperfetto-1',
  cefr: 'A2',
  unitId: 'it-a2-imperfetto',
  title: 'L’imparfait',
  subtitle: 'da bambino giocavo, la casa era grande',
  kcIds: [FORM, USE],
  estMinutes: 8,
  explanation: [
    {
      title: 'Formation',
      body: 'On remplace -re de l’infinitif par les terminaisons -vo, -vi, -va, -vamo, -vate, -vano. Les trois groupes se forment de la même façon.',
      table: [
        ['parlare', 'parlavo · parlavi · parlava · parlavamo · parlavate · parlavano'],
        ['avere', 'avevo · avevi · aveva · avevamo · avevate · avevano'],
        ['dormire', 'dormivo · dormivi · dormiva · dormivamo · dormivate · dormivano'],
        ['essere', 'ero · eri · era · eravamo · eravate · erano'],
        ['fare, bere, dire', 'facevo · bevevo · dicevo'],
      ],
      examples: [
        { en: 'Da bambino abitavo in campagna.', fr: 'Enfant, j’habitais à la campagne.' },
        { en: 'Mia nonna faceva una torta ogni domenica.', fr: 'Ma grand-mère faisait un gâteau tous les dimanches.' },
      ],
      tip: 'Attention à l’accent : parlavano se prononce « parLAvano », l’accent ne tombe pas sur la dernière syllabe.',
    },
    {
      title: 'Emplois : habitudes et descriptions',
      body: 'Comme l’imparfait français, l’imperfetto sert aux habitudes passées (di solito, sempre, ogni estate), aux descriptions (lieux, personnes, temps qu’il faisait, âge, heure) et aux états d’esprit.',
      examples: [
        { en: 'Ogni estate andavamo al mare in Liguria.', fr: 'Chaque été, nous allions à la mer en Ligurie.' },
        { en: 'Era una bella giornata e faceva caldo.', fr: 'C’était une belle journée et il faisait chaud.' },
        { en: 'Quando avevo dieci anni, volevo fare il pilota.', fr: 'Quand j’avais dix ans, je voulais être pilote.' },
      ],
      tip: 'Bonne nouvelle : les emplois de l’imperfetto sont presque les mêmes que ceux de l’imparfait français. Si tu dirais « j’habitais, c’était, il faisait », utilise l’imperfetto.',
    },
  ],
  exercises: exercises('it-a2-imperfetto-1', 'A2', { kc: FORM })
    .cloze('Da bambino ___ in campagna.', ['abitavo'], 'io + abitare → abitavo.', { kc: [FORM, USE], hint: 'abitare', d: -1.4 })
    .cloze('Quando ___ piccola, avevo paura del buio.', ['ero'], 'essere à l’imperfetto : ero (irrégulier).', { hint: 'essere', d: -1.2 })
    .mcq('Mia nonna ___ una torta ogni domenica.', ['faceva', 'fava', 'ha fatto'], 0, 'fare → faceva ; habitude (ogni domenica) → imperfetto.', { kc: [FORM, USE], d: -1.0 })
    .mcq('Era una bella giornata e ___ caldo.', ['faceva', 'ha fatto', 'fa'], 0, 'Description du temps qu’il faisait → imperfetto.', { kc: USE, d: -1.1 })
    .type('Conjugue « bere » à l’imperfetto, 1re personne (io).', ['bevevo', 'io bevevo'], 'bere → bevevo (radical bev-).', { d: -0.9 })
    .type('Conjugue « andare » à l’imperfetto, avec noi.', ['andavamo', 'noi andavamo'], 'andare → andavamo.', { d: -1.2 })
    .order('Chaque été, nous allions à la mer.', 'Ogni estate andavamo al mare.', 'Habitude passée → imperfetto.', { kc: USE, distractors: ['siamo', 'andati'], d: -1.1 })
    .tr('Quand j’avais dix ans, je voulais être pilote.', ['Quando avevo dieci anni, volevo fare il pilota.', 'Quando avevo dieci anni volevo fare il pilota.', 'Quando avevo dieci anni, volevo diventare pilota.', 'Quando avevo 10 anni, volevo fare il pilota.', 'Quando avevo dieci anni, volevo essere un pilota.'],
      'Âge et souhait dans le passé → imperfetto. « Être pilote » se dit souvent fare il pilota.', { kc: USE, d: -0.9 })
    .tr('Mes parents travaillaient beaucoup.', ['I miei genitori lavoravano molto.', 'I miei genitori lavoravano tanto.'], 'loro → lavoravano ; i miei genitori avec article (pluriel).', { d: -1.2 })
    .listen('Da ragazzo giocavo a calcio tutti i pomeriggi.', 'Que faisait-il quand il était jeune ?', ['Il jouait au foot tous les après-midi', 'Il jouait au tennis le week-end', 'Il regardait le foot à la télé'], 0,
      'giocavo a calcio tutti i pomeriggi = je jouais au foot tous les après-midi.', { kc: USE, d: -1.3 })
    .listen('La casa dei miei nonni era piccola ma aveva un giardino enorme.', 'Comment était la maison des grands-parents ?', ['Petite, avec un très grand jardin', 'Grande, sans jardin', 'Petite, sans jardin'], 0,
      'era piccola = elle était petite ; aveva un giardino enorme = elle avait un très grand jardin.', { kc: USE, d: -1.2 })
    .dictation('Di solito facevamo colazione insieme.', 'fare → facevamo ; di solito = d’habitude.', { kc: [FORM, USE], d: -1.0 })
    .repeat('Mio padre leggeva il giornale ogni mattina.', 'leggere → leggeva : habitude.', { d: -1.4 })
    .say('Il faisait froid et il pleuvait.', ['Faceva freddo e pioveva', 'Faceva freddo e stava piovendo'], 'Description → imperfetto : faceva, pioveva.', { kc: [FORM, USE], d: -1.0 })
    .answer('Com’era la tua vita quando eri bambino o bambina?', 'Quando ero bambina abitavo in un piccolo paese e giocavo sempre in giardino con mio fratello.',
      'Utilise l’imperfetto : ero, abitavo, giocavo, andavo…', { kc: [FORM, USE], keywords: [['ero', 'abitavo', 'giocavo', 'andavo', 'avevo', 'facevo', 'era']], minWords: 10, d: -0.7 })
    .build(),
};

export const imperfetto2: Lesson = {
  id: 'it-a2-imperfetto-2',
  cefr: 'A2',
  unitId: 'it-a2-imperfetto',
  title: 'Imperfetto ou passato prossimo ?',
  subtitle: 'mentre cucinavo, è suonato il telefono',
  kcIds: [CONTRAST, USE],
  estMinutes: 9,
  explanation: [
    {
      title: 'Décor et événement',
      body: 'Dans un récit, l’imperfetto pose le décor (ce qui durait, ce qui était en cours) ; le passato prossimo raconte les événements qui font avancer l’histoire. C’est la même logique qu’entre l’imparfait et le passé composé.',
      table: [
        ['imperfetto', 'action en cours, description, habitude : mentre leggevo…'],
        ['passato prossimo', 'action ponctuelle, terminée, comptée : è arrivato, l’ho visto tre volte'],
        ['mentre + imperfetto', 'Mentre cucinavo, è suonato il telefono.'],
      ],
      examples: [
        { en: 'Mentre aspettavo l’autobus, ho incontrato Paolo.', fr: 'Pendant que j’attendais le bus, j’ai rencontré Paolo.' },
        { en: 'Pioveva, così siamo rimasti a casa.', fr: 'Il pleuvait, alors nous sommes restés à la maison.' },
      ],
    },
    {
      title: 'Les pièges',
      body: 'Une durée précise ou un nombre de fois fermé demandent le passato prossimo, même si l’action a duré : ho abitato a Roma per cinque anni. Avec sapere et conoscere, le sens change : sapevo = je savais, ho saputo = j’ai appris ; conoscevo = je connaissais, ho conosciuto = j’ai fait la connaissance.',
      examples: [
        { en: 'Ho vissuto a Londra per tre anni.', fr: 'J’ai vécu à Londres pendant trois ans.' },
        { en: 'Ho conosciuto mio marito all’università.', fr: 'J’ai rencontré mon mari à l’université.' },
      ],
      tip: '« Pendant trois ans » + action finie → passato prossimo : ho lavorato lì per tre anni (pas « lavoravo lì per tre anni »). « J’ai rencontré quelqu’un » (première fois) = ho conosciuto.',
    },
  ],
  exercises: exercises('it-a2-imperfetto-2', 'A2', { kc: CONTRAST })
    .cloze('Mentre ___ la cena, è suonato il telefono.', ['preparavo', 'cucinavo'], 'Action en cours (mentre) → imperfetto.', { hint: 'préparer, io', d: -1.0 })
    .mcq('___ a Londra per tre anni, poi sono tornata in Italia.', ['Ho vissuto', 'Vivevo', 'Vivo'], 0, 'Durée fermée (per tre anni) → passato prossimo.', { d: -0.7 })
    .mcq('Ieri sera ___ stanco, quindi sono andato a letto presto.', ['ero', 'sono stato', 'sono'], 0, 'État, description → imperfetto.', { kc: [CONTRAST, USE], d: -0.9 })
    .type('Mets le verbe au bon temps : Mentre (io, camminare) per strada, ho visto un incidente.', ['camminavo'], 'Décor en cours → camminavo.', { d: -0.9 })
    .type('Mets le verbe au bon temps : Quando sono arrivato, Lucia (dormire) già.', ['dormiva'], 'Action déjà en cours → dormiva.', { d: -0.8 })
    .order('Pendant que j’attendais le bus, j’ai rencontré Paolo.', 'Mentre aspettavo l’autobus, ho incontrato Paolo.', 'mentre + imperfetto (décor) ; ho incontrato (événement).', { distractors: ['ho aspettato'], d: -0.9 })
    .tr('J’ai rencontré mon mari à l’université.', ['Ho conosciuto mio marito all’università.', 'Io ho conosciuto mio marito all’università.', 'Ho incontrato mio marito all’università.'],
      'Première rencontre → ho conosciuto (conoscere au passato prossimo).', { d: -0.8 })
    .tr('Il faisait beau, alors nous sommes {sortis|sorties}.', ['Era bel tempo, così siamo usciti.', 'Era bel tempo, così siamo uscite.', 'Faceva bel tempo, così siamo usciti.', 'Faceva bel tempo, così siamo uscite.', 'C’era bel tempo, così siamo usciti.', 'C’era bel tempo, così siamo uscite.', 'Faceva bel tempo, quindi siamo usciti.', 'Faceva bel tempo, quindi siamo uscite.'],
      'Décor → faceva bel tempo ; événement → siamo usciti / uscite.', { kc: [CONTRAST, USE], d: -0.8 })
    .mcq('Que faisait Chiara quand la lumière s’est éteinte ?', ['Elle lisait sur le canapé', 'Elle dormait', 'Elle préparait le dîner'], 0, 'leggevo un libro sul divano = je lisais un livre sur le canapé (décor).',
      { kc: [CONTRAST, USE], passage: 'Era una sera di novembre e fuori pioveva. Ero sola a casa e leggevo un libro sul divano. All’improvviso è andata via la luce. Ho cercato una candela in cucina, ma non l’ho trovata. Allora ho chiamato la mia vicina: lei aveva una torcia e me l’ha portata.', d: -0.8 })
    .listen('Mentre facevo la doccia, è arrivato il postino.', 'Que s’est-il passé ?', ['Le facteur est arrivé pendant sa douche', 'Il a pris une douche après le passage du facteur', 'Le facteur faisait sa tournée sous la pluie'], 0,
      'mentre facevo la doccia (en cours) → è arrivato il postino (événement).', { d: -0.9 })
    .listen('Prima andavo in palestra tutti i giorni, ma l’anno scorso ho smesso.', 'Va-t-il encore à la salle de sport ?', ['Non, il a arrêté l’année dernière', 'Oui, tous les jours', 'Oui, mais moins souvent'], 0,
      'andavo (habitude passée) ; ho smesso (événement) = j’ai arrêté.', { kc: [CONTRAST, USE], d: -0.8 })
    .dictation('Quando ero giovane, uscivo spesso con gli amici.', 'Habitude → uscivo ; description → ero.', { kc: USE, d: -0.9 })
    .repeat('Non sapevo che eri in città: l’ho saputo solo ieri.', 'sapevo = je savais ; l’ho saputo = je l’ai appris.', { d: -0.8 })
    .say('Je dormais quand tu as téléphoné.', ['Dormivo quando hai telefonato', 'Io dormivo quando hai telefonato', 'Dormivo quando mi hai telefonato', 'Dormivo quando hai chiamato', 'Dormivo quando mi hai chiamato', 'Stavo dormendo quando hai telefonato', 'Dormivo quando ha telefonato', 'Dormivo quando ha chiamato'],
      'Action en cours → dormivo ; événement → hai telefonato.', { d: -0.9 })
    .answer('Racconta un piccolo incidente: che cosa facevi e che cosa è successo?', 'Mentre andavo al lavoro in bici, pioveva molto e sono caduto davanti a un bar.',
      'Décor à l’imperfetto (mentre andavo, pioveva) + événement au passato prossimo (sono caduto).', { kc: [CONTRAST, USE], keywords: [['mentre', 'quando']], minWords: 10, d: -0.6 })
    .build(),
};
