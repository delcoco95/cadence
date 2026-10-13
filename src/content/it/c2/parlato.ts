import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const MARK = 'it.c2.speaking.discourse_markers';
const COLL = 'it.c2.grammar.colloquial_structures';
const REG = 'it.c2.listening.regional_varieties';
const RLEX = 'it.c2.vocabulary.regionalisms';

export const parlato1: Lesson = {
  id: 'it-c2-parlato-1',
  cefr: 'C2',
  unitId: 'it-c2-parlato',
  title: 'Les marqueurs du discours',
  subtitle: 'Allora, cioè, insomma, mica, manco',
  kcIds: [MARK, COLL],
  estMinutes: 12,
  explanation: [
    {
      title: 'Les petits mots de l’oral',
      table: [
        ['allora', 'bon, alors (ouvrir, enchaîner)'],
        ['cioè', 'c’est-à-dire, enfin (reformuler, se corriger)'],
        ['insomma', 'bref, enfin (conclure, marquer l’agacement)'],
        ['tipo', 'genre, du style (familier)'],
        ['praticamente', 'en gros (remplissage)'],
        ['diciamo / voglio dire', 'disons / je veux dire'],
        ['dai', 'allez ! (encourager, protester)'],
        ['boh / mah', 'j’en sais rien / bof, mouais'],
      ],
      tip: '« Insomma! » seul, sur un ton agacé, signifie « ça suffit ! ». En réponse à « Come stai? », « Insomma… » veut dire « bof, pas terrible ». « Allora » en tête de phrase n’a rien de temporel.',
    },
    {
      title: 'Tournures familières',
      table: [
        ['Non è mica facile. / Mica è facile.', 'Ce n’est pas si facile, hein.'],
        ['Mica male!', 'Pas mal du tout !'],
        ['Manco per sogno!', 'Jamais de la vie !'],
        ['Sbrigati, che è tardi.', 'Dépêche-toi, il est tard (che causal).'],
        ['C’ho fame. (= ho fame)', 'J’ai faim (oral, graphie instable).'],
        ['Cosa fai? (= che cosa fai?)', 'Tu fais quoi ?'],
      ],
      tip: '« Mica » renforce une négation ; il ne remplace « non » qu’en tête de phrase (« Mica l’ho detto io »). Ces formes sont normales à l’oral et déplacées dans une copie ou une lettre formelle.',
    },
  ],
  exercises: exercises('it-c2-parlato-1', 'C2', { kc: MARK })
    .mcq('– Com’è andato l’esame? – Mah, ___, poteva andare meglio.', ['insomma', 'allora', 'dai', 'tipo'], 0,
      '« Insomma » : bof, pas terrible ; il nuance une réponse mitigée.', { d: 2.3 })
    .mcq('« Non sono mica scemo! » vuol dire…', ['Non sono affatto stupido', 'Sono un po’ stupido', 'Non sono più stupido', 'Sono stupido come te'], 0,
      '« Mica » renforce la négation : pas du tout.', { kc: COLL, d: 2.2 })
    .cloze('Ci vediamo alle otto, ___ alle otto e mezza, perché prima devo passare in ufficio.', ['cioè', 'anzi', 'o meglio'],
      '« Cioè » (ou « anzi ») introduit une correction : enfin, plutôt.', { hint: 'c’est-à-dire, plutôt', d: 2.3 })
    .cloze('Lavare i piatti per tutto il mese? ___ per sogno!', ['Manco', 'Neanche', 'Nemmeno', 'Neppure'],
      '« Manco per sogno » (familier) = « neanche per sogno » : jamais de la vie.', { kc: COLL, hint: 'même pas (familier)', d: 2.4 })
    .type('Quel mot familier sert à dire « j’en sais rien » en haussant les épaules ?', ['boh'],
      '« Boh » : ignorance ou indifférence, très courant à l’oral.', { d: 2.2 })
    .type('Rends la négation familière et insistante : « Non è facile. » → « Non è ___ facile. »', ['mica', 'affatto', 'per niente', 'per nulla'],
      'mica (familier), affatto, per niente : renforcement de la négation.', { kc: COLL, d: 2.3 })
    .order('Dépêche-toi, on va rater le train !', 'Sbrigati che perdiamo il treno!',
      '« Che » causal familier (= perché) ; présent à valeur de futur proche.', { kc: COLL, distractors: ['cui', 'perdendo'], d: 2.4 })
    .tr('Bref, on s’est {perdus|perdues} et on est {arrivés|arrivées} à minuit.',
      ['Insomma, ci siamo persi e siamo arrivati a mezzanotte.', 'Insomma, ci siamo perse e siamo arrivate a mezzanotte.', 'Insomma, ci siamo persi e alla fine siamo arrivati a mezzanotte.',
        'Insomma, ci siamo perse e alla fine siamo arrivate a mezzanotte.', 'Insomma, ci siamo persi e siamo arrivati solo a mezzanotte.', 'Insomma, ci siamo perse e siamo arrivate solo a mezzanotte.'],
      '« Insomma » résume un récit (bref) ; « on » = noi, avec accord du participe.', { d: 2.4 })
    .tr('Pas mal du tout, ton nouvel appart !',
      ['Mica male il tuo nuovo appartamento!', 'Niente male il tuo nuovo appartamento!', 'Mica male la tua nuova casa!', 'Niente male la tua nuova casa!',
        'Non è mica male il tuo nuovo appartamento!', 'Il tuo nuovo appartamento non è mica male!', 'Il tuo nuovo appartamento è niente male!', 'Il tuo nuovo appartamento non è niente male!'],
      '« Mica male » / « niente male » : pas mal du tout (compliment).', { kc: COLL, d: 2.4 })
    .listen('– Allora, com’è questo nuovo lavoro? – Ma, diciamo che, cioè, i colleghi sono simpatici, però lo stipendio, insomma…', 'Che cosa lascia capire la seconda persona?',
      ['Che lo stipendio non la soddisfa', 'Che i colleghi sono antipatici', 'Che ha cambiato di nuovo lavoro', 'Che è entusiasta di tutto'], 0,
      'Hésitations (diciamo, cioè) puis « insomma… » en suspens : l’aspect négatif est sous-entendu.', { d: 2.5 })
    .listen('Guarda che io mica te l’ho detto per offenderti, eh!', 'Che cosa vuole chiarire chi parla?',
      ['Che non voleva affatto offendere', 'Che voleva offendere', 'Che non ha detto niente', 'Che è offeso lui'], 0,
      '« Mica » = pas du tout ; « guarda che » attire l’attention.', { kc: COLL, d: 2.4 })
    .dictation('Allora, praticamente il treno era in ritardo e insomma abbiamo perso la coincidenza.',
      'Allora (ouverture), praticamente (en gros), insomma (bref).', { d: 2.4 })
    .repeat('Dai, che ce la fai! Mica è la prima volta.',
      '« Dai » encourage ; « mica » en tête de phrase remplace « non ».', { kc: [COLL, MARK], d: 2.3 })
    .say('Allez, viens avec nous !',
      ['Dai, vieni con noi', 'Dai, vieni anche tu con noi', 'Su, vieni con noi', 'Dai, vieni anche tu', 'E dai, vieni con noi'],
      '« Dai » : allez ! (encouragement).', { d: 2.2 })
    .answer('Racconta in modo colloquiale, come a un amico, una giornata in cui è andato tutto storto. Usa almeno due segnali discorsivi (allora, cioè, insomma, praticamente…).',
      'Allora, praticamente mi sono svegliato tardi, ho perso l’autobus e sono arrivato in ufficio bagnato fradicio. Cioè, una giornata da dimenticare, insomma!',
      'Les marqueurs structurent le récit oral : ouverture (allora), reformulation (cioè), conclusion (insomma).',
      { kc: [MARK, COLL], d: 2.5, minWords: 18, keywords: [['allora', 'cioè', 'insomma', 'praticamente', 'tipo', 'diciamo']] })
    .build(),
};

export const parlato2: Lesson = {
  id: 'it-c2-parlato-2',
  cefr: 'C2',
  unitId: 'it-c2-parlato',
  title: 'Variétés régionales',
  subtitle: 'La Giulia, tengo fame, annamo, anguria ou cocomero',
  kcIds: [REG, RLEX],
  estMinutes: 12,
  explanation: [
    {
      title: 'Reconnaître les grands traits',
      table: [
        ['Nord : article devant les prénoms', 'la Giulia, il Marco'],
        ['Nord : passé composé partout', 'Ieri sono andato (passato remoto rare)'],
        ['Sud : passato remoto pour un passé récent', 'Stamattina andai al mercato (Sicile, Calabre)'],
        ['Sud : tenere = avere, stare = essere', 'Tengo fame. Sto stanco.'],
        ['Rome : apocope de l’infinitif, « annamo »', 'Che stai a fa’? Annamo! (= andiamo)'],
        ['Toscane : gorgia, « noi si va »', 'la hasa (= la casa) ; noi si va al mare'],
      ],
      tip: 'Ces traits sont à reconnaître, pas à imiter : à l’écrit et dans un contexte formel, l’italien standard reste la norme. « Stare a casa » (rester chez soi) est en revanche courant partout.',
    },
    {
      title: 'Un objet, plusieurs noms',
      table: [
        ['l’anguria / il cocomero', 'la pastèque (Nord / Centre-Sud)'],
        ['la gruccia / la stampella / l’ometto', 'le cintre (selon la région)'],
        ['marinare la scuola / bigiare / fare sega / fare forca', 'sécher les cours'],
        ['il bocia (Vénétie), il guaglione (Naples), il carusu (Sicile)', 'le gamin, le jeune'],
        ['Daje! (Rome)', 'Allez ! Vas-y !'],
        ['Uè! (Milan, Naples)', 'Hé ! (salut, interpellation)'],
        ['Ammazza! (Rome, Centre)', 'Waouh ! La vache !'],
      ],
      tip: 'Les formes neutres sont comprises partout : « marinare la scuola » pour sécher, « anguria » et « cocomero » coexistent. « La stampella » est aussi la béquille : le contexte tranche.',
    },
  ],
  exercises: exercises('it-c2-parlato-2', 'C2', { kc: REG })
    .mcq('Chi dice « Stamattina andai dal medico » per un fatto di poche ore fa probabilmente viene…',
      ['dal Sud, per esempio dalla Sicilia', 'dalla Lombardia', 'dal Piemonte', 'dal Veneto'], 0,
      'Le passato remoto pour un passé récent est typique du Sud ; le Nord emploie le passato prossimo.', { d: 2.4 })
    .mcq('A Roma un amico ti grida « Daje! » prima di un esame. Che cosa vuol dire?', ['Forza, coraggio!', 'Smettila!', 'Arrivederci!', 'Attento!'], 0,
      '« Daje » (romain) = dai, forza : encouragement.', { kc: RLEX, d: 2.3 })
    .cloze('« Tengo fame », in italiano standard: « ___ fame ».', ['Ho', 'Io ho'],
      'Au Sud, tenere remplace avere ; en standard : ho fame.', { hint: 'avere', d: 2.2 })
    .type('Donne l’expression standard la plus neutre pour « sécher les cours ». (infinitif)', ['marinare la scuola', 'saltare la scuola', 'marinare le lezioni', 'saltare le lezioni'],
      'marinare la scuola est compris partout ; bigiare, fare sega, fare forca sont régionaux.', { kc: RLEX, d: 2.4 })
    .type('Écris en italien standard le romain « Annamo! ».', ['Andiamo'],
      'Romain : annamo = andiamo (assimilation nd > nn).', { d: 2.3 })
    .order('(Nord) Giulia vient avec nous ce soir.', 'La Giulia viene con noi stasera.',
      'Article devant le prénom féminin : trait du Nord, absent de la norme écrite.', { distractors: ['Il', 'Lo'], d: 2.3 })
    .tr('Il a acheté une pastèque au marché.',
      ['Ha comprato un’anguria al mercato.', 'Ha comprato un cocomero al mercato.', 'Ha preso un’anguria al mercato.', 'Ha preso un cocomero al mercato.',
        'Al mercato ha comprato un’anguria.', 'Al mercato ha comprato un cocomero.', 'Lui ha comprato un’anguria al mercato.', 'Lui ha comprato un cocomero al mercato.'],
      'anguria (Nord) et cocomero (Centre-Sud) sont tous deux corrects.', { kc: RLEX, d: 2.3 })
    .tr('Nous, demain, on va à la mer.',
      ['Noi domani andiamo al mare.', 'Domani andiamo al mare.', 'Noi andiamo al mare domani.', 'Andiamo al mare domani.', 'Noi domani si va al mare.', 'Domani noi si va al mare.'],
      'Standard : andiamo. Le toscan « noi si va » est accepté (on = si + 3e personne).', { d: 2.4 })
    .mcq('Quale tratto regionale usa Salvo?',
      ['Il passato remoto per un fatto della stessa mattina', 'L’articolo davanti al nome proprio', 'Il saluto « uè »', 'L’esclamazione « ammazza »'], 0,
      'Salvo dit « La vidi stamattina… se ne andò » : passato remoto méridional. « Uè » et « la Giulia » sont de Marco, « ammazza » de Lorenzo.',
      {
        kc: [REG, RLEX], d: 2.6,
        passage: 'Al bar dell’università. Marco, milanese, entra: «Uè, ragazzi! Avete visto la Giulia?». Salvo, che è di Catania, risponde: «La vidi stamattina in biblioteca, ma poi se ne andò». Interviene Lorenzo, romano: «Ammazza che freddo oggi! Annamo a prende’ ’n caffè?». Marco ride: «A Milano diremmo: andiamo a prendere un caffè, e basta!». Salvo aggiunge: «E io tengo pure fame, sbrighiamoci».',
      })
    .listen('Ma che stai a fa’? È mezz’ora che t’aspetto!', 'Da dove viene probabilmente chi parla, e che cosa chiede?',
      ['Da Roma; chiede che cosa stai facendo', 'Da Milano; chiede che cosa mangi', 'Da Napoli; chiede dove vai', 'Da Firenze; chiede che ore sono'], 0,
      'Romain : stare a + infinitif tronqué (« fa’ » = fare) = stare facendo.', { d: 2.5 })
    .listen('Passami una stampella, che appendo la giacca.', 'Che cosa chiede chi parla?',
      ['Una gruccia per appendere la giacca', 'Una stampella per camminare', 'Un martello', 'Una sedia'], 0,
      'Ici « stampella » = cintre (usage du Centre-Sud), pas béquille : « appendo la giacca » lève l’ambiguïté.', { kc: RLEX, d: 2.5 })
    .dictation('Da ragazzo marinavo la scuola per andare al mare con gli amici.',
      'marinare la scuola : sécher les cours (forme neutre).', { kc: RLEX, d: 2.3 })
    .repeat('In Toscana dicono cocomero, a Milano anguria: il frutto però è lo stesso.',
      'Doublets régionaux : cocomero / anguria.', { kc: RLEX, d: 2.2 })
    .say('J’ai faim et je suis {fatigué|fatiguée}.',
      ['Ho fame e sono stanco', 'Ho fame e sono stanca', 'Ho fame e sono stanco morto', 'Ho fame e sono stanca morta'],
      'Standard : ho fame, sono stanco. Au Sud on entend « tengo fame, sto stanco ».', { d: 2.2 })
    .answer('Conosci un tratto del parlato di una regione italiana (pronuncia, parola o costruzione)? Descrivilo e spiega come si direbbe in italiano standard.',
      'A Roma ho sentito spesso dire annamo invece di andiamo, e anche che stai a fa al posto di che cosa stai facendo. In italiano standard si usano le forme complete.',
      'Décris le trait (où, comment) et donne l’équivalent standard (invece di, al posto di).',
      { kc: [REG, RLEX], d: 2.6, minWords: 20, keywords: [['standard', 'invece', 'posto', 'dicono', 'dire']] })
    .build(),
};
