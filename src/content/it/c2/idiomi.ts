import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const IMG = 'it.c2.vocabulary.idioms_imagery';
const ATT = 'it.c2.vocabulary.idioms_attitude';
const PROV = 'it.c2.vocabulary.proverbs';
const ALLU = 'it.c2.function.proverb_allusion';

export const idiomi1: Lesson = {
  id: 'it-c2-idiomi-1',
  cefr: 'C2',
  unitId: 'it-c2-idiomi',
  title: 'Idiomes imagés',
  subtitle: 'Due piccioni con una fava, la coda di paglia',
  kcIds: [IMG, ATT],
  estMinutes: 12,
  explanation: [
    {
      title: 'Animaux et cuisine',
      table: [
        ['prendere due piccioni con una fava', 'faire d’une pierre deux coups'],
        ['essere una mosca bianca', 'être un merle blanc, une rareté'],
        ['menare il can per l’aia', 'tourner autour du pot, faire traîner'],
        ['cercare il pelo nell’uovo', 'chercher la petite bête'],
        ['essere come il cacio sui maccheroni', 'tomber à pic'],
        ['sputare il rospo', 'cracher le morceau'],
        ['avere grilli per la testa', 'avoir des lubies, des idées folles'],
        ['essere un pesce fuor d’acqua', 'ne pas être dans son élément'],
      ],
      tip: 'L’image change d’une langue à l’autre : le merle blanc français devient une mouche blanche, et la pierre qui fait deux coups devient une fève qui attrape deux pigeons. Traduire mot à mot produit un contresens ou un sourire.',
    },
    {
      title: 'Attitudes et comportements',
      table: [
        ['fare il pesce in barile', 'faire le mort, éviter de prendre position'],
        ['avere la coda di paglia', 'ne pas avoir la conscience tranquille (et se sentir visé)'],
        ['fare buon viso a cattivo gioco', 'faire contre mauvaise fortune bon cœur'],
        ['tirare l’acqua al proprio mulino', 'tirer la couverture à soi'],
        ['gettare la spugna', 'jeter l’éponge'],
        ['salvare capra e cavoli', 'ménager la chèvre et le chou'],
        ['fare il passo più lungo della gamba', 'viser trop haut, dépasser ses moyens'],
        ['non è farina del tuo sacco', 'ce n’est pas de toi (pas ton idée, pas ton travail)'],
      ],
      tip: '« Fare il pesce in barile » n’a rien à voir avec « être serrés comme des sardines » (essere come sardine) : c’est feindre l’indifférence pour ne pas se compromettre.',
    },
  ],
  exercises: exercises('it-c2-idiomi-1', 'C2', { kc: IMG })
    .mcq('Con questo viaggio vedo i nonni e sbrigo una pratica in comune: prendo due piccioni con ___.',
      ['una fava', 'un sasso', 'una pietra', 'un colpo'], 0,
      'Expression figée : prendere due piccioni con una fava (faire d’une pierre deux coups).', { d: 2.2 })
    .mcq('Quando gli abbiamo chiesto chi avesse ragione, ha fatto il pesce in barile. Che cosa ha fatto?',
      ['Ha evitato di prendere posizione', 'Si è arrabbiato moltissimo', 'Ha confessato tutto', 'Si è messo a urlare'], 0,
      'fare il pesce in barile = rester neutre, ne pas se mouiller.', { kc: ATT, d: 2.4 })
    .cloze('Smettila di menare il can per l’___ e dimmi che cosa è successo.', ['aia'],
      'menare il can per l’aia = tourner autour du pot.', { d: 2.5 })
    .cloze('Se si offende così, vuol dire che ha la coda di ___.', ['paglia'],
      'avere la coda di paglia : se sentir visé parce qu’on n’a pas la conscience tranquille.', { kc: ATT, d: 2.4 })
    .type('Complète l’expression qui signifie « cracher le morceau » : « sputare il ___ »', ['rospo'],
      'sputare il rospo = avouer enfin ce qu’on gardait pour soi.', { d: 2.3 })
    .type('« Faire contre mauvaise fortune bon cœur » → « fare buon ___ a cattivo gioco »', ['viso'],
      'fare buon viso a cattivo gioco : accepter une situation désagréable sans le montrer.', { kc: ATT, d: 2.4 })
    .order('Un collègue aussi honnête, c’est un merle blanc.', 'Un collega così onesto è una mosca bianca.',
      'essere una mosca bianca : être une rareté (le merle blanc français).', { distractors: ['merlo', 'nera'], d: 2.3 })
    .tr('Il a fini par jeter l’éponge.',
      ['Alla fine ha gettato la spugna.', 'Ha finito per gettare la spugna.', 'Alla fine ha buttato la spugna.', 'Ha finito col gettare la spugna.', 'Alla fine gettò la spugna.',
        'Ha gettato la spugna alla fine.', 'Alla fine si è arreso.', 'Ha finito per buttare la spugna.'],
      'gettare (buttare) la spugna : même image qu’en français.', { kc: ATT, d: 2.2 })
    .tr('Arrête de chercher la petite bête !',
      ['Smettila di cercare il pelo nell’uovo!', 'Smetti di cercare il pelo nell’uovo!', 'Non cercare il pelo nell’uovo!', 'Basta cercare il pelo nell’uovo!',
        'Non stare a cercare il pelo nell’uovo!', 'Finiscila di cercare il pelo nell’uovo!'],
      'cercare il pelo nell’uovo : chercher le poil dans l’œuf, c’est-à-dire la petite bête.', { d: 2.4 })
    .listen('Il sindaco vuole accontentare sia i commercianti sia i residenti: insomma, cerca di salvare capra e cavoli.', 'Che cosa cerca di fare il sindaco?',
      ['Di accontentare entrambe le parti', 'Di punire i commercianti', 'Di vendere i terreni agricoli', 'Di rimandare ogni decisione'], 0,
      'salvare capra e cavoli = ménager la chèvre et le chou.', { kc: ATT, d: 2.3 })
    .listen('Il tuo vino rosso con l’arrosto della nonna è stato come il cacio sui maccheroni.', 'Che cosa vuol dire chi parla?',
      ['Che il vino era perfetto per quel piatto', 'Che il vino era troppo forte', 'Che il vino non si abbinava affatto', 'Che il vino l’aveva portato la nonna'], 0,
      'come il cacio sui maccheroni : parfait, qui tombe à pic.', { d: 2.4 })
    .dictation('Questa relazione è ottima, ma si vede che non è farina del suo sacco.',
      'non è farina del suo sacco : ce n’est pas son propre travail.', { kc: ATT, d: 2.5 })
    .repeat('In quell’ufficio pieno di avvocati mi sentivo un pesce fuor d’acqua.',
      'essere (sentirsi) un pesce fuor d’acqua : ne pas être dans son élément.', { d: 2.2 })
    .say('Il tire toujours la couverture à lui.',
      ['Tira sempre l’acqua al suo mulino', 'Tira sempre acqua al suo mulino', 'Porta sempre acqua al suo mulino', 'Tira sempre l’acqua al proprio mulino', 'Porta sempre l’acqua al suo mulino',
        'Tira sempre acqua al proprio mulino', 'Porta sempre acqua al proprio mulino'],
      'tirare (portare) l’acqua al proprio mulino : chercher son seul intérêt.', { kc: ATT, d: 2.5 })
    .answer('Racconta una situazione in cui qualcuno ha fatto il passo più lungo della gamba, oppure in cui hai preso due piccioni con una fava.',
      'Un mio amico ha comprato una casa enorme senza avere un lavoro stabile: ha fatto il passo più lungo della gamba e adesso fa fatica a pagare il mutuo ogni mese.',
      'Réemploie l’expression dans un récit concret, conjuguée au passé.',
      { kc: [IMG, ATT], d: 2.6, minWords: 18, keywords: [['passo', 'piccioni', 'gamba', 'fava']] })
    .build(),
};

export const idiomi2: Lesson = {
  id: 'it-c2-idiomi-2',
  cefr: 'C2',
  unitId: 'it-c2-idiomi',
  title: 'Proverbes',
  subtitle: 'Tra il dire e il fare, chi la fa l’aspetti',
  kcIds: [PROV, ALLU],
  estMinutes: 12,
  explanation: [
    {
      title: 'Proverbes courants',
      table: [
        ['Tra il dire e il fare c’è di mezzo il mare.', 'Il y a loin de la coupe aux lèvres.'],
        ['Chi la fa l’aspetti.', 'Qui fait le mal doit s’attendre à le subir.'],
        ['L’abito non fa il monaco.', 'L’habit ne fait pas le moine.'],
        ['Chi dorme non piglia pesci.', 'On n’a rien sans rien.'],
        ['A caval donato non si guarda in bocca.', 'À cheval donné, on ne regarde pas les dents.'],
        ['Tanto va la gatta al lardo che ci lascia lo zampino.', 'Tant va la cruche à l’eau qu’à la fin elle se casse.'],
        ['Non tutte le ciambelle riescono col buco.', 'On ne réussit pas tout du premier coup.'],
        ['Il lupo perde il pelo ma non il vizio.', 'Chassez le naturel, il revient au galop.'],
        ['Meglio un uovo oggi che una gallina domani.', 'Un tiens vaut mieux que deux tu l’auras.'],
      ],
      tip: 'Beaucoup de proverbes ont un équivalent français avec une autre image : apprends la paire entière plutôt que de traduire.',
    },
    {
      title: 'L’allusion : citer à moitié',
      body: 'Les Italiens citent souvent le seul début du proverbe : l’interlocuteur complète mentalement. On les détourne aussi dans les titres de presse.',
      table: [
        ['Eh, chi la fa…', '…l’aspetti'],
        ['Tra il dire e il fare…', '…c’è di mezzo il mare'],
        ['Tanto va la gatta al lardo…', '…che ci lascia lo zampino'],
        ['Paese che vai…', '…usanza che trovi (à Rome, fais comme les Romains)'],
        ['Detto fatto.', 'Aussitôt dit, aussitôt fait.'],
        ['Non c’è due senza tre.', 'Jamais deux sans trois.'],
      ],
      tip: 'Un titre comme « Tra il dire e il fare c’è di mezzo il Senato » joue sur le proverbe : il faut le connaître pour saisir l’ironie.',
    },
  ],
  exercises: exercises('it-c2-idiomi-2', 'C2', { kc: PROV })
    .tr('Il y a loin de la coupe aux lèvres.',
      ['Tra il dire e il fare c’è di mezzo il mare.', 'Fra il dire e il fare c’è di mezzo il mare.'],
      'Équivalent italien : entre le dire et le faire, il y a la mer.', { d: 2.3 })
    .mcq('Quale proverbio corrisponde a « Un tiens vaut mieux que deux tu l’auras » ?',
      ['Meglio un uovo oggi che una gallina domani', 'Chi dorme non piglia pesci', 'L’abito non fa il monaco', 'Chi semina vento raccoglie tempesta'], 0,
      'Mieux vaut un œuf aujourd’hui qu’une poule demain.', { d: 2.3 })
    .cloze('A caval donato non si guarda in ___.', ['bocca'],
      'On ne regarde pas dans la bouche (les dents) d’un cheval offert.', { d: 2.2 })
    .cloze('Ha imbrogliato tutti e adesso l’hanno imbrogliato lui. Eh, chi la fa l’___!', ['aspetti'],
      'Chi la fa l’aspetti : celui qui joue un mauvais tour doit s’attendre à en subir un.', { kc: ALLU, d: 2.4 })
    .type('Complète : « Il lupo perde il pelo ma non il ___. »', ['vizio'],
      'Le loup perd son poil mais pas son vice : on ne change pas de nature.', { d: 2.3 })
    .type('Complète le proverbe qu’on cite souvent à moitié : « Paese che vai, ___ che trovi. »', ['usanza'],
      'Paese che vai, usanza che trovi : il faut s’adapter aux coutumes locales.', { kc: ALLU, d: 2.4 })
    .order('L’habit ne fait pas le moine.', 'L’abito non fa il monaco.',
      'Même proverbe qu’en français, avec abito et monaco.', { distractors: ['vestito', 'frate'], d: 2.2 })
    .tr('Qui sème le vent récolte la tempête.',
      ['Chi semina vento raccoglie tempesta.', 'Chi semina vento raccoglie la tempesta.', 'Chi semina il vento raccoglie la tempesta.', 'Chi semina vento miete tempesta.'],
      'Proverbe identique ; la forme sans articles est la plus courante.', { d: 2.3 })
    .mcq('Che cosa vuole dire l’autore con « chi dorme non piglia pesci »?',
      ['Che i cittadini devono attivarsi per ottenere la biblioteca', 'Che la giunta lavora troppo di notte', 'Che i lavori sono finiti in anticipo', 'Che la biblioteca non serve a nessuno'], 0,
      'Chi dorme non piglia pesci : sans effort, rien n’arrive. L’auteur invite les habitants à se mobiliser.',
      {
        kc: [PROV, ALLU], d: 2.6,
        passage: 'Lettera al direttore. Gentile direttore, da tre anni il nostro quartiere aspetta la nuova biblioteca promessa dalla giunta di Valdorso. Tra il dire e il fare, si sa… Ci era stato detto che i lavori sarebbero cominciati in primavera; siamo a ottobre e il cantiere è ancora chiuso. Qualcuno dirà che non tutte le ciambelle riescono col buco, ed è vero. Ma chi dorme non piglia pesci: se noi cittadini non ci facciamo sentire, la biblioteca resterà un bel disegno appeso in municipio. Lettera firmata.',
      })
    .listen('– Doveva consegnare il progetto lunedì, poi martedì, ora dice venerdì. – Eh, tra il dire e il fare…', 'Che cosa sottintende la seconda persona?',
      ['Che promettere è facile, mantenere è un’altra cosa', 'Che il progetto è già stato consegnato', 'Che venerdì è un giorno fortunato', 'Che il mare è lontano'], 0,
      'Proverbe cité à moitié : « …c’è di mezzo il mare ».', { kc: ALLU, d: 2.4 })
    .listen('Ha di nuovo preso in prestito la macchina senza chiedere: il lupo perde il pelo ma non il vizio.', 'Di chi si parla?',
      ['Di una persona che non cambia le sue cattive abitudini', 'Di una persona che ha venduto la macchina', 'Di un animale smarrito', 'Di una persona che ha smesso di guidare'], 0,
      'Le proverbe souligne une mauvaise habitude qui revient.', { d: 2.3 })
    .dictation('Non tutte le ciambelle riescono col buco, ma la prossima volta andrà meglio.',
      'Non tutte le ciambelle riescono col buco : tout ne réussit pas du premier coup.', { d: 2.4 })
    .repeat('Detto fatto: in mezz’ora la cucina era pulita e la tavola apparecchiata.',
      'Detto fatto : aussitôt dit, aussitôt fait.', { kc: ALLU, d: 2.2 })
    .say('Tant va la cruche à l’eau qu’à la fin elle se casse.',
      ['Tanto va la gatta al lardo che ci lascia lo zampino'],
      'Équivalent italien : la chatte qui va trop souvent au lard finit par y laisser la patte.', { d: 2.5 })
    .answer('Scegli un proverbio italiano che ti piace, spiega che cosa significa e racconta una situazione in cui si può usare.',
      'Mi piace molto il proverbio chi dorme non piglia pesci: significa che bisogna darsi da fare per ottenere qualcosa. Lo direi a un amico che aspetta un lavoro senza mai inviare il curriculum.',
      'Cite le proverbe exactement, explique-le (significa che…) et donne un contexte d’emploi.',
      { kc: [PROV, ALLU], d: 2.6, minWords: 20, keywords: [['proverbio', 'detto'], ['significa', 'vuol', 'vuole']] })
    .build(),
};
