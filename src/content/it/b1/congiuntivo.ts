import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FORM = 'it.b1.mood.subjunctive_form';
const OPINION = 'it.b1.mood.subjunctive_opinion';
const IRR = 'it.b1.mood.subjunctive_irregular';
const WILL = 'it.b1.mood.subjunctive_will';

export const congiuntivo1: Lesson = {
  id: 'it-b1-congiuntivo-1',
  cefr: 'B1',
  unitId: 'it-b1-congiuntivo',
  title: 'Subjonctif présent : formes et opinion',
  subtitle: 'penso che parta, credo che lavori…',
  kcIds: [FORM, OPINION],
  estMinutes: 10,
  explanation: [
    {
      title: 'Former le subjonctif présent',
      body: 'Les verbes en -are prennent -i, ceux en -ere et -ire prennent -a. Les trois personnes du singulier sont identiques : on ajoute souvent le pronom pour être clair (che tu parli). noi = comme au présent (-iamo) ; voi = -iate.',
      table: [
        ['parlare', 'che io / tu / lui parli · parliamo · parliate · parlino'],
        ['prendere', 'che io / tu / lui prenda · prendiamo · prendiate · prendano'],
        ['partire', 'che io / tu / lui parta · partiamo · partiate · partano'],
        ['finire (-isc-)', 'che io / tu / lui finisca · finiamo · finiate · finiscano'],
      ],
      examples: [
        { en: 'Penso che Luca parta domani.', fr: 'Je pense que Luca part demain.' },
        { en: 'Credo che i negozi chiudano alle otto.', fr: 'Je crois que les magasins ferment à huit heures.' },
      ],
      tip: 'C’est l’inverse de l’indicatif : -are prend -i (che lui parli), -ere / -ire prennent -a (che lui prenda). Et pour loro : parlino, prendano, jamais « prendino ».',
    },
    {
      title: 'Donner son opinion',
      body: 'Après les verbes d’opinion ou de doute (penso che, credo che, mi sembra che, mi pare che, immagino che, non sono sicuro che, dubito che), l’italien emploie le subjonctif. Après la certitude (so che, sono sicuro che, è vero che), l’indicatif. Même sujet : penso di + infinitif.',
      examples: [
        { en: 'Mi sembra che tu lavori troppo.', fr: 'Il me semble que tu travailles trop.' },
        { en: 'So che abita a Torino.', fr: 'Je sais qu’il habite à Turin.' },
        { en: 'Penso di partire a giugno.', fr: 'Je pense partir en juin.' },
      ],
      tip: 'Piège du francophone : « je pense qu’il vient » est à l’indicatif en français, mais penso che + subjonctif en italien : Penso che venga. À l’oral familier, on entend parfois l’indicatif, mais le subjonctif reste la norme.',
    },
  ],
  exercises: exercises('it-b1-congiuntivo-1', 'B1', { kc: FORM, tense: 'subjunctive' })
    .mcq('Penso che Marco ___ troppo.', ['lavori', 'lavora', 'lavorasse'], 0,
      'penso che + subjonctif présent : lavori. lavora est l’indicatif, familier.', { kc: [FORM, OPINION], d: -0.4 })
    .mcq('Credo che i negozi ___ alle otto.', ['chiudano', 'chiudino', 'chiudere'], 0, 'chiudere (-ere) → che loro chiudano, avec un a.', { d: -0.3 })
    .cloze('Mi sembra che voi ___ troppo in fretta.', ['parliate'], 'voi → -iate : parliate.', { kc: [FORM, OPINION], hint: 'parlare', d: -0.2 })
    .cloze('Dubito che loro ___ in tempo.', ['arrivino'], 'arrivare → che loro arrivino.', { kc: [FORM, OPINION], hint: 'arrivare', d: -0.3 })
    .type('Subjonctif présent de « dormire » avec « io ».', ['dorma', 'che io dorma', 'che dorma', 'io dorma'], 'dormire (-ire) → che io dorma.', { d: -0.3 })
    .type('Subjonctif présent de « capire » avec « loro ».', ['capiscano', 'che loro capiscano', 'che capiscano', 'loro capiscano'], 'capire prend -isc- : che loro capiscano.', { d: 0 })
    .order('Je crois que le film commence à neuf heures.', 'Credo che il film cominci alle nove.', 'credo che + subjonctif : cominci.', { kc: OPINION, distractors: ['comincia'], d: -0.3 })
    .tr('Je pense que tu travailles trop.', ['Penso che tu lavori troppo.', 'Credo che tu lavori troppo.', 'Io penso che tu lavori troppo.', 'Penso che lavori troppo.', 'Credo che lavori troppo.'],
      'penso che + subjonctif ; le pronom tu lève l’ambiguïté (lavori = io, tu, lui).', { kc: OPINION, d: -0.3 })
    .tr('Il me semble qu’ils partent demain.', ['Mi sembra che partano domani.', 'Mi sembra che loro partano domani.', 'Mi pare che partano domani.', 'Mi sembra che domani partano.', 'Mi pare che domani partano.'],
      'mi sembra / mi pare che + subjonctif : partano.', { kc: [FORM, OPINION], d: -0.1 })
    .listen('So che Giulia abita a Torino, ma non credo che lavori lì.', 'Qu’est-ce que la personne sait avec certitude ?', ['Giulia habite à Turin', 'Giulia travaille à Turin', 'Giulia va déménager'], 0,
      'so che + indicatif (certitude : abita) ; non credo che + subjonctif (doute : lavori).', { kc: OPINION, d: 0 })
    .listen('Immagino che i tuoi genitori ti aspettino per cena.', 'Que suppose-t-il ?', ['Que ses parents l’attendent pour le dîner', 'Que ses parents sont en vacances', 'Qu’ils dînent au restaurant'], 0,
      'immagino che + subjonctif : aspettino.', { kc: OPINION, d: -0.2 })
    .dictation('Penso che Anna parta domani mattina.', 'partire → che lei parta.', { d: -0.2 })
    .repeat('Credo che tu abbia ragione.', 'abbia : le b est appuyé, « ab-bia ».', { kc: OPINION, d: -0.5 })
    .say('Je ne suis pas {sûr|sûre} qu’il comprenne.', ['Non sono sicuro che capisca.', 'Non sono sicura che capisca.', 'Non sono sicuro che lui capisca.', 'Non sono sicura che lui capisca.'],
      'non sono sicuro / sicura che + subjonctif : capisca.', { kc: [OPINION, FORM], d: 0.1 })
    .answer('Che cosa pensi della tua città? Usa « penso che » o « credo che ».', 'Penso che la mia città sia bella, ma credo che ci siano troppe macchine in centro.',
      'Opinion + subjonctif : penso che sia, credo che ci siano…',
      { kc: OPINION, keywords: [['penso', 'credo', 'mi sembra', 'immagino', 'mi pare'], ['sia', 'siano', 'abbia', 'abbiano', 'possa', 'faccia', 'manchi', 'manchino', 'offra', 'costi', 'costino', 'piaccia']], minWords: 10, d: 0.2 })
    .build(),
};

export const congiuntivo2: Lesson = {
  id: 'it-b1-congiuntivo-2',
  cefr: 'B1',
  unitId: 'it-b1-congiuntivo',
  title: 'Subjonctif : irréguliers et volonté',
  subtitle: 'voglio che tu venga, è importante che sia…',
  kcIds: [IRR, WILL],
  estMinutes: 10,
  explanation: [
    {
      title: 'Les subjonctifs irréguliers',
      body: 'Beaucoup partent de la 1re personne du présent : vengo → venga, dico → dica, faccio → faccia, esco → esca, posso → possa, voglio → voglia.',
      table: [
        ['essere', 'sia · siamo · siate · siano'],
        ['avere', 'abbia · abbiamo · abbiate · abbiano'],
        ['fare · dire', 'faccia · facciamo… · dica · diciamo…'],
        ['andare · venire', 'vada · andiamo · andiate · vadano · venga · veniamo…'],
        ['potere · volere · dovere', 'possa · voglia · debba'],
        ['stare · dare · sapere', 'stia · dia · sappia'],
      ],
      examples: [
        { en: 'È importante che tu sia puntuale.', fr: 'Il est important que tu sois ponctuel.' },
        { en: 'Spero che facciate buon viaggio.', fr: 'J’espère que vous ferez bon voyage.' },
      ],
    },
    {
      title: 'Volonté, sentiment, nécessité',
      body: 'Subjonctif après voglio che, preferisco che, spero che, ho paura che, sono contento che, è importante che, è meglio che, bisogna che, è possibile che. Si le sujet est le même, on emploie l’infinitif : Voglio partire (pas « voglio che io parta ») ; Spero di vederti.',
      examples: [
        { en: 'Voglio che tu venga con me.', fr: 'Je veux que tu viennes avec moi.' },
        { en: 'Bisogna che partiamo presto.', fr: 'Il faut que nous partions tôt.' },
        { en: 'Sono contenta che possiate venire.', fr: 'Je suis contente que vous puissiez venir.' },
      ],
      tip: 'Attention à spero che : en français « j’espère que » prend l’indicatif, en italien le subjonctif : Spero che stia bene (j’espère qu’il va bien).',
    },
  ],
  exercises: exercises('it-b1-congiuntivo-2', 'B1', { kc: IRR, tense: 'subjunctive' })
    .mcq('È importante che tutti ___ puntuali.', ['siano', 'sono', 'sia'], 0, 'è importante che + subjonctif ; tutti est pluriel → siano.', { kc: [WILL, IRR], d: -0.3 })
    .mcq('Que demande la professeure ?', ['Que les élèves soient devant l’école à 7 h avec un pique-nique', 'Que les parents accompagnent la sortie', 'Que les élèves apportent beaucoup d’argent'], 0,
      'È necessario che i ragazzi siano davanti alla scuola alle sette ; pranzo al sacco = pique-nique ; è meglio che non portino troppi soldi.',
      { kc: WILL, passage: 'Cari genitori, la gita scolastica a Firenze è il 12 maggio. È necessario che i ragazzi siano davanti alla scuola alle sette. Vi chiediamo di dare ai vostri figli un pranzo al sacco; è meglio che non portino troppi soldi. Speriamo che faccia bel tempo! La professoressa Neri', d: 0 })
    .cloze('Voglio che tu ___ subito a casa.', ['venga'], 'voglio che + subjonctif : venire → venga.', { kc: [WILL, IRR], hint: 'venire', d: -0.2 })
    .cloze('Spero che voi ___ un buon viaggio.', ['facciate'], 'spero che + subjonctif : fare → facciate.', { kc: [WILL, IRR], hint: 'fare', d: 0.1 })
    .type('Subjonctif présent de « andare » avec « loro ».', ['vadano', 'che loro vadano', 'che vadano', 'loro vadano'], 'andare → vada, vadano (mais andiamo, andiate).', { d: -0.1 })
    .type('Subjonctif présent de « dire » avec « io ».', ['dica', 'che io dica', 'che dica', 'io dica'], 'dico → che io dica.', { d: -0.2 })
    .order('Il faut que nous partions tôt.', 'Bisogna che partiamo presto.', 'bisogna che + subjonctif ; noi = partiamo.', { kc: WILL, distractors: ['partono'], d: -0.2 })
    .tr('Mes parents veulent que je fasse médecine.', ['I miei genitori vogliono che io faccia medicina.', 'I miei genitori vogliono che faccia medicina.', 'I miei genitori vogliono che io studi medicina.', 'I miei genitori vogliono che studi medicina.'],
      'vogliono che + subjonctif : faccia ; io évite l’ambiguïté.', { kc: [WILL, IRR], d: 0.1 })
    .tr('J’espère que vous allez bien.', ['Spero che stia bene.', 'Spero che Lei stia bene.', 'Spero che stiate bene.', 'Spero che voi stiate bene.'],
      'aller bien = stare bene ; spero che + subjonctif (indicatif en français) : stia (Lei), stiate (voi).', { kc: [WILL, IRR], d: 0.2 })
    .listen('Preferisco che tu non dica niente a Paolo.', 'Que veut la personne ?', ['Qu’on ne dise rien à Paolo', 'Qu’on parle à Paolo', 'Que Paolo dise la vérité'], 0,
      'preferisco che + subjonctif : non dica niente = ne dise rien.', { kc: WILL, d: -0.2 })
    .listen('Sono contenta che i ragazzi possano venire alla festa.', 'Pourquoi est-elle contente ?', ['Les jeunes peuvent venir à la fête', 'La fête est annulée', 'Les jeunes ont réussi un examen'], 0,
      'sono contenta che + subjonctif : possano (potere).', { d: -0.1 })
    .dictation('Bisogna che tu sappia la verità.', 'sapere → che tu sappia (deux p).', { d: 0.1 })
    .repeat('È meglio che vengano domani.', 'vengano : accent sur « ven ».', { kc: WILL, d: -0.4 })
    .say('J’ai peur qu’il soit trop tard.', ['Ho paura che sia troppo tardi.', 'Temo che sia troppo tardi.'], 'ho paura che / temo che + subjonctif : sia.', { kc: [WILL, IRR], d: 0.1 })
    .answer('Che cosa vuoi che facciano i tuoi amici per il tuo compleanno?', 'Voglio che i miei amici vengano a cena da me e spero che portino una torta al cioccolato.',
      'voglio che / spero che / preferisco che + subjonctif : vengano, portino, facciano…',
      { kc: WILL, keywords: [['voglio', 'spero', 'preferisco'], ['vengano', 'portino', 'facciano', 'siano', 'organizzino', 'preparino', 'cantino', 'stiano', 'restino', 'arrivino', 'regalino', 'vadano']], minWords: 10, d: 0.3 })
    .build(),
};
