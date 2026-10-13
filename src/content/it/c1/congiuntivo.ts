import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const REL = 'it.c1.grammar.subjunctive_relatives';
const SUP = 'it.c1.grammar.subjunctive_superlatives';
const IND = 'it.c1.grammar.indefinite_subjunctive';
const FINE = 'it.c1.grammar.subjunctive_fine_values';

export const congiuntivo1: Lesson = {
  id: 'it-c1-congiuntivo-1',
  cefr: 'C1',
  unitId: 'it-c1-congiuntivo',
  title: 'Relatives et superlatifs',
  subtitle: 'Cerco qualcuno che sappia, il più bello che abbia visto',
  kcIds: [REL, SUP],
  estMinutes: 12,
  explanation: [
    {
      title: 'La relative au subjonctif',
      body: 'Quand l’antécédent est recherché, souhaité, hypothétique ou nié, la relative passe au congiuntivo. Quand il existe bel et bien, on garde l’indicatif.',
      examples: [
        { en: 'Cerco un appartamento che abbia un terrazzo.', fr: 'Je cherche un appartement qui ait une terrasse (n’importe lequel).' },
        { en: 'Ho trovato un appartamento che ha un terrazzo.', fr: 'J’ai trouvé un appartement qui a une terrasse (il existe).' },
        { en: 'Non c’è nessuno che lo sappia.', fr: 'Il n’y a personne qui le sache.' },
        { en: 'C’è qualcuno che possa aiutarmi?', fr: 'Y a-t-il quelqu’un qui puisse m’aider ?' },
      ],
      tip: 'Le français connaît la même règle, mais l’oral la gomme souvent (« je cherche quelqu’un qui peut… »). En italien soutenu, le subjonctif reste attendu : cerco qualcuno che possa, non che può.',
    },
    {
      title: 'Après un superlatif ou unico, solo, primo, ultimo',
      table: [
        ['il più … che + subj.', 'È il libro più bello che abbia mai letto.'],
        ['l’unico / il solo che + subj.', 'È l’unica che mi capisca.'],
        ['il primo / l’ultimo che + subj.', 'È il primo che sia arrivato in orario.'],
        ['principale au passé → imparfait / plus-que-parfait', 'Era l’unico che avesse il coraggio di parlare.'],
      ],
      tip: 'L’indicatif (« il più bello che ho visto ») s’entend à l’oral familier, mais à l’écrit et dans un registre soigné, le subjonctif est la norme. Et pense à la concordance : principale au passé → era il più bello che avessi mai visto.',
    },
  ],
  exercises: exercises('it-c1-congiuntivo-1', 'C1', { kc: REL, tense: 'congiuntivo' })
    .mcq('Cerchiamo un collaboratore che ___ almeno tre lingue.', ['parli', 'parla', 'parlerà'], 0,
      'Antécédent recherché (n’importe quel collaborateur) → congiuntivo : parli.', { d: 1.5 })
    .mcq('È la città più affascinante che ___ mai visitato.', ['abbia', 'avrei', 'avessi'], 0,
      'Superlatif + che → congiuntivo ; principale au présent → congiuntivo passato : abbia visitato.', { kc: SUP, d: 1.6 })
    .cloze('Non conosco nessuno che ___ cucinare meglio di mia nonna.', ['sappia'],
      'Antécédent nié (nessuno) → congiuntivo : sappia.', { hint: 'sapere', d: 1.6 })
    .cloze('Era l’unico che ___ il coraggio di dire la verità.', ['avesse', 'avesse avuto'],
      'l’unico che + congiuntivo ; principale au passé → imperfetto : avesse.', { kc: SUP, hint: 'avere', d: 1.8 })
    .type('« Y a-t-il quelqu’un qui puisse m’aider ? » → « C’è qualcuno che mi ___ aiutare? »', ['possa'],
      'Question sur l’existence d’un antécédent → congiuntivo : possa.', { d: 1.5 })
    .type('« C’est le plus beau cadeau qu’on m’ait jamais fait. » → « È il regalo più bello che mi ___ mai fatto. » Écris l’auxiliaire.', ['abbiano', 'abbia'],
      'Superlatif + congiuntivo passato : mi abbiano fatto (on = ils) ou mi abbia fatto (quelqu’un).', { kc: SUP, d: 1.8 })
    .order('Je cherche un hôtel qui accepte les chiens.', 'Cerco un albergo che accetti i cani.',
      'Hôtel encore inconnu → congiuntivo : accetti.', { distractors: ['accetta', 'accettava'], d: 1.5 })
    .tr('Je ne connais personne qui parle japonais.',
      ['Non conosco nessuno che parli giapponese.', 'Io non conosco nessuno che parli giapponese.', 'Non conosco nessuno che parli il giapponese.',
        'Non conosco nessuno che sappia il giapponese.', 'Non conosco nessuno che sappia parlare giapponese.', 'Non conosco nessuno che sappia parlare il giapponese.'],
      'nessuno che + congiuntivo : parli.', { d: 1.5 })
    .tr('C’est le livre le plus intéressant que j’aie lu cette année.',
      ['È il libro più interessante che abbia letto quest’anno.', 'È il libro più interessante che io abbia letto quest’anno.',
        'Questo è il libro più interessante che abbia letto quest’anno.', 'Questo è il libro più interessante che io abbia letto quest’anno.'],
      'Superlatif relatif + congiuntivo passato : che (io) abbia letto. Pas d’article répété : il libro più interessante.', { kc: SUP, d: 1.7 })
    .listen('Stiamo cercando una babysitter che abbia esperienza con i neonati e che possa lavorare anche il sabato.', 'Che tipo di babysitter cercano?',
      ['Una persona esperta con i neonati, disponibile il sabato', 'Una studentessa disponibile solo la sera', 'Una babysitter che parli inglese'], 0,
      'che abbia esperienza… che possa lavorare il sabato : profil recherché, d’où le subjonctif.', { d: 1.5 })
    .listen('Secondo Marta, quello in Islanda è il viaggio più faticoso che abbia mai fatto, ma anche il più bello.', 'Che cosa pensa Marta del viaggio in Islanda?',
      ['È stato molto faticoso ma bellissimo', 'È stato rilassante e piacevole', 'Non le è piaciuto per niente'], 0,
      'il più faticoso che abbia mai fatto, ma anche il più bello.', { kc: SUP, d: 1.6 })
    .dictation('Non c’è niente che tu possa fare per fargli cambiare idea.',
      'niente che + congiuntivo : possa.', { d: 1.7 })
    .repeat('È la persona più generosa che io conosca.',
      'Superlatif + congiuntivo présent : conosca.', { kc: SUP, d: 1.4 })
    .say('Je cherche quelqu’un qui puisse me conseiller.',
      ['Cerco qualcuno che mi possa consigliare', 'Cerco qualcuno che possa consigliarmi', 'Sto cercando qualcuno che mi possa consigliare',
        'Sto cercando qualcuno che possa consigliarmi', 'Cerco qualcuno che mi sappia consigliare', 'Cerco qualcuno che sappia consigliarmi'],
      'qualcuno che + congiuntivo : possa ; le pronom se place avant possa ou s’attache à l’infinitif.', { d: 1.6 })
    .answer('Descrivi la casa ideale che vorresti trovare: che caratteristiche dovrebbe avere?',
      'Vorrei trovare una casa che abbia un piccolo giardino, che sia vicina al centro e che non costi troppo, perché lavoro in città.',
      'Antécédent souhaité → relative au congiuntivo : che abbia, che sia, che costi.',
      { keywords: [['abbia', 'sia', 'costi', 'possa', 'offra', 'abbiano', 'siano', 'permetta']], minWords: 15, d: 1.8 })
    .build(),
};

export const congiuntivo2: Lesson = {
  id: 'it-c1-congiuntivo-2',
  cefr: 'C1',
  unitId: 'it-c1-congiuntivo',
  title: 'Chiunque, qualunque et valeurs fines',
  subtitle: 'Qualunque cosa tu faccia, il fatto che, non è che',
  kcIds: [IND, FINE],
  estMinutes: 12,
  explanation: [
    {
      title: 'Les indéfinis concessifs',
      table: [
        ['chiunque + subj.', 'Chiunque venga, sarà il benvenuto. (qui que ce soit qui)'],
        ['qualunque / qualsiasi + nom + subj.', 'Qualunque cosa tu decida, ti sosterrò. (quoi que)'],
        ['qualunque sia + nom', 'Qualunque sia il prezzo, lo compro. (quel que soit)'],
        ['dovunque / ovunque + subj.', 'Dovunque tu vada, ti seguirò. (où que)'],
        ['comunque + subj.', 'Comunque vadano le cose, resto qui. (de quelque façon que)'],
      ],
      tip: 'qualunque et qualsiasi sont invariables et toujours au singulier : qualunque decisione, pas « qualunque decisioni ». Seul, comunque signifie « de toute façon » et prend l’indicatif : comunque, vengo.',
    },
    {
      title: 'Là où le français hésite',
      body: 'Plusieurs structures appellent le subjonctif en italien alors que le français utilise souvent l’indicatif.',
      examples: [
        { en: 'Il fatto che non abbia chiamato mi preoccupa.', fr: 'Le fait qu’il n’a pas appelé m’inquiète.' },
        { en: 'Che sia bravo, nessuno lo nega.', fr: 'Qu’il soit doué, personne ne le nie.' },
        { en: 'Non è che non voglia: è che non posso.', fr: 'Ce n’est pas que je ne veuille pas : c’est que je ne peux pas.' },
        { en: 'Non so se sia vero.', fr: 'Je ne sais pas si c’est vrai.' },
      ],
      tip: 'Après non so se, mi chiedo se, l’indicatif est correct ; le subjonctif marque un registre plus soutenu ou un doute plus fort. Après il fatto che, préfère le subjonctif, même quand le français dit « le fait qu’il a ».',
    },
  ],
  exercises: exercises('it-c1-congiuntivo-2', 'C1', { kc: IND, tense: 'congiuntivo' })
    .mcq('Qualunque cosa ___, non dirlo a nessuno.', ['succeda', 'succede', 'succederà'], 0,
      'qualunque cosa + congiuntivo : succeda.', { d: 1.6 })
    .mcq('Che cosa serve per diventare volontario?',
      ['Avere almeno diciotto anni e qualche ora libera', 'Un titolo di studio in biblioteconomia', 'Lavorare tutte le domeniche'], 0,
      '« volontari che abbiano almeno diciotto anni e che possano dedicare qualche ora alla settimana ».',
      {
        kc: [FINE, IND, REL],
        d: 1.7,
        passage:
          'Cerchiamo volontari che abbiano almeno diciotto anni e che possano dedicare qualche ora alla settimana alla nostra biblioteca di quartiere. Chiunque sia interessato può presentarsi in segreteria, qualunque sia il suo titolo di studio: non è che servano competenze particolari, basta la voglia di stare con gli altri. Il fatto che la biblioteca resti aperta anche la domenica dipende proprio dal contributo dei volontari.',
      })
    .cloze('Chiunque ___ questo messaggio è pregato di contattarci.', ['legga', 'abbia letto'],
      'chiunque + congiuntivo : legga (ou abbia letto).', { hint: 'leggere', d: 1.6 })
    .cloze('Non è che non ti ___ aiutare: è che oggi non ho tempo.', ['voglia'],
      'non è che + congiuntivo : voglia (ce n’est pas que je ne veuille pas).', { kc: FINE, hint: 'volere', d: 1.9 })
    .type('« Où que tu ailles, je te suivrai. » → « ___ tu vada, ti seguirò. »', ['Dovunque', 'Ovunque'],
      'où que = dovunque / ovunque + congiuntivo.', { d: 1.5 })
    .type('« Quel que soit le résultat, nous serons fiers de toi. » → « ___ sia il risultato, saremo fieri di te. »', ['Qualunque', 'Qualsiasi'],
      'quel que soit = qualunque / qualsiasi sia.', { d: 1.7 })
    .order('Quoi que tu décides, je serai de ton côté.', 'Qualunque cosa tu decida, sarò dalla tua parte.',
      'qualunque cosa + congiuntivo : tu decida.', { distractors: ['decidi', 'decideresti'], d: 1.6 })
    .tr('Qui que ce soit qui appelle, dis que je ne suis pas là.',
      ['Chiunque chiami, di’ che non ci sono.', 'Chiunque chiami, dì che non ci sono.', 'Chiunque telefoni, di’ che non ci sono.', 'Chiunque telefoni, dì che non ci sono.',
        'Chiunque chiami, digli che non ci sono.', 'Chiunque telefoni, digli che non ci sono.'],
      'chiunque + congiuntivo : chiami ; impératif de dire : di’ (ou dì).', { d: 1.7 })
    .tr('Je ne sais pas s’il a raison.',
      ['Non so se abbia ragione.', 'Non so se ha ragione.', 'Io non so se abbia ragione.', 'Io non so se ha ragione.'],
      'non so se + indicatif (courant) ou congiuntivo (soutenu).', { kc: FINE, d: 1.5 })
    .listen('Comunque vadano le cose, l’importante è che tu ci abbia provato.', 'Qual è il messaggio di chi parla?',
      ['Conta aver tentato, a prescindere dal risultato', 'Le cose andranno sicuramente bene', 'Bisogna riprovare finché non si riesce'], 0,
      'comunque vadano le cose = quelle que soit l’issue.', { d: 1.8 })
    .listen('Che Luca sia bravo, nessuno lo mette in dubbio; il problema è che non rispetta mai le scadenze.', 'Che cosa si dice di Luca?',
      ['È bravo, ma non rispetta le scadenze', 'Non è molto bravo nel suo lavoro', 'Rispetta sempre le scadenze'], 0,
      'Che + congiuntivo en tête de phrase : che Luca sia bravo… (qu’il soit doué).', { kc: FINE, d: 1.9 })
    .dictation('Dovunque andasse, portava con sé un vecchio quaderno di appunti.',
      'dovunque + congiuntivo imperfetto (récit au passé) : andasse.', { d: 1.8 })
    .repeat('Qualsiasi decisione prendiate, avvisateci in tempo.',
      'qualsiasi + nom singulier + congiuntivo : prendiate.', { d: 1.5 })
    .say('Le fait qu’il soit parti sans rien dire est étrange.',
      ['Il fatto che sia partito senza dire niente è strano', 'Il fatto che sia partito senza dire nulla è strano',
        'Il fatto che se ne sia andato senza dire niente è strano', 'Il fatto che se ne sia andato senza dire nulla è strano',
        'Il fatto che sia andato via senza dire niente è strano', 'Il fatto che sia andato via senza dire nulla è strano'],
      'il fatto che + congiuntivo passato : sia partito.', { kc: FINE, d: 1.8 })
    .answer('Che consiglio daresti a chiunque voglia imparare bene l’italiano?',
      'Chiunque voglia imparare l’italiano dovrebbe leggere molto e parlare ogni giorno, qualunque sia il suo livello, senza aver paura di sbagliare.',
      'chiunque / qualunque + congiuntivo : chiunque voglia, qualunque sia.',
      { keywords: [['chiunque', 'qualunque', 'qualsiasi', 'dovunque', 'ovunque', 'comunque']], minWords: 15, d: 2.0 })
    .build(),
};
