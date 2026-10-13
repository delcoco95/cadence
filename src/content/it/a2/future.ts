import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FUT = 'it.a2.tense.futuro_regular';
const FUT_IRR = 'it.a2.tense.futuro_irregular';
const STARE_PER = 'it.a2.grammar.stare_per';
const STARE_GER = 'it.a2.grammar.stare_gerund';

export const future1: Lesson = {
  id: 'it-a2-future-1',
  cefr: 'A2',
  unitId: 'it-a2-future',
  title: 'Le futur simple',
  subtitle: 'partirò, sarà, avremo, andranno',
  kcIds: [FUT, FUT_IRR],
  estMinutes: 9,
  explanation: [
    {
      title: 'Futur régulier',
      body: 'On enlève le -e final de l’infinitif et on ajoute -ò, -ai, -à, -emo, -ete, -anno. Pour les verbes en -are, le a devient e : parlare → parlerò. Les verbes en -care, -gare ajoutent un h (cercherò, pagherò) ; ceux en -ciare, -giare perdent le i (comincerò, mangerò).',
      table: [
        ['parlare', 'parlerò · parlerai · parlerà · parleremo · parlerete · parleranno'],
        ['prendere', 'prenderò · prenderai · prenderà · prenderemo · prenderete · prenderanno'],
        ['partire', 'partirò · partirai · partirà · partiremo · partirete · partiranno'],
      ],
      examples: [
        { en: 'L’anno prossimo studierò in Spagna.', fr: 'L’année prochaine, j’étudierai en Espagne.' },
        { en: 'Domani pagherò io.', fr: 'Demain, c’est moi qui paierai.' },
      ],
      tip: 'Ne pas garder le a des verbes en -are, comme en français (« parlerai ») : « parlarò » ✗ → parlerò ✓. Et l’accent écrit est obligatoire : parlerò, parlerà.',
    },
    {
      title: 'Futurs irréguliers et emplois',
      body: 'Plusieurs verbes courants ont un radical court. Comme en français, on garde le futur après quando et se quand l’action est future. Dans la conversation, le présent remplace souvent le futur proche : Domani vado a Roma.',
      table: [
        ['essere, avere', 'sarò · avrò'],
        ['andare, potere, dovere, vedere', 'andrò · potrò · dovrò · vedrò'],
        ['fare, dare, stare', 'farò · darò · starò'],
        ['venire, volere, bere, rimanere', 'verrò · vorrò · berrò · rimarrò'],
      ],
      examples: [
        { en: 'Quando arriverò a Roma, ti chiamerò.', fr: 'Quand j’arriverai à Rome, je t’appellerai.' },
        { en: 'Se farà bel tempo, andremo al mare.', fr: 'S’il fait beau, nous irons à la mer.' },
        { en: 'Dov’è Paolo? — Non so, sarà in ufficio.', fr: 'Où est Paolo ? — Je ne sais pas, il doit être au bureau.' },
      ],
      tip: 'Après se, le français met le présent (s’il fait beau) ; l’italien préfère le futur quand l’action est future : se farà bel tempo. Le présent est aussi accepté à l’oral : se fa bel tempo, andiamo al mare.',
    },
  ],
  exercises: exercises('it-a2-future-1', 'A2', { kc: FUT })
    .cloze('L’anno prossimo ___ in Spagna.', ['studierò'], 'studiare → studierò (a → e).', { hint: 'studiare, io', d: -1.2 })
    .cloze('Quando arriverò a Roma, ti ___.', ['chiamerò', 'telefonerò'], 'Après quando + futur, futur dans la principale : ti chiamerò.', { hint: 'appeler', d: -1.1 })
    .mcq('Domani ___ io il conto.', ['pagherò', 'pagerò', 'pagarò'], 0, '-gare → -gherò : on ajoute un h pour garder le son dur.', { d: -0.9 })
    .mcq('Stasera noi ___ a casa tua alle otto.', ['verremo', 'veniremo', 'venremo'], 0, 'venire → verr- : verremo.', { kc: FUT_IRR, d: -0.8 })
    .type('Conjugue « essere » au futur avec tu.', ['sarai', 'tu sarai'], 'essere → sar- : sarai.', { kc: FUT_IRR, d: -1.2 })
    .type('Conjugue « andare » au futur avec loro.', ['andranno', 'loro andranno'], 'andare → andr- : andranno.', { kc: FUT_IRR, d: -1.0 })
    .order('S’il fait beau, nous irons à la mer.', 'Se farà bel tempo, andremo al mare.', 'se + futur (action future), futur dans la principale.', { kc: FUT_IRR, distractors: ['farò', 'andrò'], d: -0.9 })
    .tr('Demain, je partirai tôt.', ['Domani partirò presto.', 'Domani io partirò presto.', 'Partirò presto domani.', 'Domani parto presto.', 'Domani partirò di buon’ora.'],
      'partire → partirò. À l’oral, le présent est aussi possible : domani parto presto.', { d: -1.2 })
    .tr('Nous aurons le temps la semaine prochaine.', ['Avremo tempo la settimana prossima.', 'La settimana prossima avremo tempo.', 'Avremo il tempo la settimana prossima.', 'Noi avremo tempo la settimana prossima.', 'La settimana prossima avremo il tempo.'],
      'avere → avr- : avremo.', { kc: FUT_IRR, d: -1.0 })
    .listen('A settembre comincerò un corso di cucina e mangerò meglio.', 'Que fera-t-elle en septembre ?', ['Elle commencera un cours de cuisine', 'Elle partira en vacances', 'Elle changera de travail'], 0,
      'comincerò un corso di cucina = je commencerai un cours de cuisine.', { d: -1.1 })
    .listen('Dov’è Giulia? — Non lo so, sarà ancora in palestra.', 'Que pense-t-il de Giulia ?', ['Elle est sans doute encore à la salle de sport', 'Elle ira à la salle de sport demain', 'Elle n’aime pas le sport'], 0,
      'sarà ancora in palestra : futur de probabilité = elle doit encore être à la salle.', { kc: FUT_IRR, d: -0.7 })
    .dictation('Se potrò, verrò alla tua festa.', 'potere → potrò ; venire → verrò.', { kc: FUT_IRR, d: -0.9 })
    .repeat('Il treno partirà alle nove e arriverà a Firenze alle undici.', 'partirà, arriverà : accent sur la dernière syllabe.', { d: -1.2 })
    .say('Je te téléphonerai demain.', ['Ti telefonerò domani', 'Domani ti telefonerò', 'Io ti telefonerò domani', 'Ti chiamerò domani', 'Domani ti chiamerò', 'Ti telefono domani', 'Ti chiamo domani'], 'telefonare → telefonerò (a → e) ; te = ti, devant le verbe.', { d: -0.9 })
    .answer('Che cosa farai il prossimo fine settimana?', 'Il prossimo fine settimana andrò in montagna con i miei amici e farò una lunga passeggiata.',
      'Futur : andrò, farò, vedrò, resterò…', { kc: [FUT, FUT_IRR], keywords: [['andrò', 'farò', 'vedrò', 'resterò', 'starò', 'sarò', 'avrò', 'dormirò', 'partirò', 'lavorerò', 'studierò', 'visiterò', 'cucinerò', 'uscirò']], minWords: 10, d: -0.7 })
    .build(),
};

export const future2: Lesson = {
  id: 'it-a2-future-2',
  cefr: 'A2',
  unitId: 'it-a2-future',
  title: 'Stare per et stare + gérondif',
  subtitle: 'sto per uscire, sto lavorando',
  kcIds: [STARE_PER, STARE_GER],
  estMinutes: 8,
  explanation: [
    {
      title: 'stare per + infinitif : être sur le point de',
      body: 'stare per + infinitif exprime une action imminente, comme « être sur le point de » ou « aller » + infinitif tout proche.',
      table: [
        ['stare au présent', 'sto · stai · sta · stiamo · state · stanno'],
        ['stare per + infinitif', 'Sto per uscire = je suis sur le point de sortir.'],
      ],
      examples: [
        { en: 'Sbrigati, il treno sta per partire!', fr: 'Dépêche-toi, le train va partir !' },
        { en: 'Stavo per chiamarti.', fr: 'J’étais sur le point de t’appeler.' },
      ],
      tip: '« Je vais sortir » (futur proche) ne se traduit pas mot à mot par « vado a uscire » : on dit esco, uscirò, ou sto per uscire si c’est imminent.',
    },
    {
      title: 'stare + gérondif : être en train de',
      body: 'stare + gérondif décrit une action en cours, comme « être en train de ». Gérondif : -are → -ando, -ere et -ire → -endo. Irréguliers : fare → facendo, bere → bevendo, dire → dicendo.',
      table: [
        ['parlare → parlando', 'Sto parlando al telefono.'],
        ['leggere → leggendo', 'Che cosa stai leggendo?'],
        ['fare → facendo', 'Che cosa state facendo?'],
      ],
      examples: [
        { en: 'Non posso parlare, sto lavorando.', fr: 'Je ne peux pas parler, je suis en train de travailler.' },
        { en: 'Quando mi hai chiamato, stavo facendo la doccia.', fr: 'Quand tu m’as appelé, j’étais sous la douche.' },
      ],
      tip: 'Le présent simple suffit souvent : « Que fais-tu ? » = Che cosa fai? stare + gérondif insiste sur le moment même. On ne l’emploie pas avec essere ni avec stare lui-même.',
    },
  ],
  exercises: exercises('it-a2-future-2', 'A2', { kc: STARE_GER })
    .cloze('Non posso parlare, sto ___.', ['lavorando'], 'lavorare → lavorando (-are → -ando).', { hint: 'lavorare', d: -1.3 })
    .cloze('Sbrigati, il treno sta ___ partire!', ['per'], 'Action imminente → stare per + infinitif.', { kc: STARE_PER, d: -1.2 })
    .mcq('Che cosa state ___?', ['facendo', 'fando', 'faciendo'], 0, 'fare → facendo (radical fac-).', { d: -1.0 })
    .type('Écris le gérondif de « leggere ».', ['leggendo'], '-ere → -endo : leggendo.', { d: -1.3 })
    .type('Transforme avec stare per : Il film comincia.', ['Il film sta per cominciare.', 'Il film sta per iniziare.'], 'stare per + infinitif : sta per cominciare.', { kc: STARE_PER, d: -1.0 })
    .order('J’étais sur le point de t’appeler.', 'Stavo per chiamarti.', 'stare per + infinitif ; ti s’attache à l’infinitif.', { kc: STARE_PER, distractors: ['ho', 'stato'], d: -0.8 })
    .tr('Que lis-tu en ce moment ?', ['Che cosa stai leggendo?', 'Cosa stai leggendo?', 'Che stai leggendo?', 'Che cosa leggi in questo periodo?', 'Cosa leggi in questo periodo?', 'Che cosa stai leggendo in questo momento?', 'Cosa stai leggendo in questo momento?', 'Che cosa sta leggendo?', 'Cosa sta leggendo?'],
      'Action en cours → stai leggendo (ou sta leggendo avec Lei).', { d: -1.0 })
    .tr('Le magasin est sur le point de fermer.', ['Il negozio sta per chiudere.', 'Sta per chiudere il negozio.'], 'stare per + infinitif : sta per chiudere.', { kc: STARE_PER, d: -1.0 })
    .mcq('Pourquoi Elena ne peut-elle pas aller au cinéma ce soir ?', ['Elle est en train de préparer un examen', 'Elle est sur le point de partir en voyage', 'Elle est malade'], 0,
      'Sto studiando per l’esame di domani = je suis en train de réviser pour l’examen de demain.',
      { kc: [STARE_GER, STARE_PER], passage: 'Ciao Marco! Grazie per l’invito, ma stasera non posso venire al cinema. Sto studiando per l’esame di storia di domani e sono ancora al terzo capitolo. Mia sorella sta per partire per l’Australia, quindi sabato faremo una cena di famiglia. Domenica sarò libera: andiamo al cinema domenica?', d: -0.8 })
    .listen('Aspetta, sto per uscire: ti richiamo tra cinque minuti.', 'Que fait-elle ?', ['Elle est sur le point de sortir', 'Elle vient de rentrer', 'Elle est en train de manger'], 0,
      'sto per uscire = je suis sur le point de sortir.', { kc: STARE_PER, d: -1.0 })
    .listen('I bambini stanno dormendo, parla piano.', 'Pourquoi faut-il parler doucement ?', ['Les enfants dorment', 'Le bébé mange', 'Les voisins travaillent'], 0,
      'stanno dormendo = ils sont en train de dormir.', { d: -1.2 })
    .dictation('Stiamo aspettando l’autobus da mezz’ora.', 'stare + gérondif : stiamo aspettando.', { d: -0.9 })
    .repeat('Sta per piovere: prendi l’ombrello.', 'sta per piovere = il va pleuvoir (imminent).', { kc: STARE_PER, d: -1.2 })
    .say('Je suis en train de cuisiner.', ['Sto cucinando', 'Io sto cucinando', 'Sto preparando da mangiare', 'Sto preparando la cena', 'Sto facendo da mangiare'], 'stare + gérondif : sto cucinando.', { d: -1.1 })
    .answer('Che cosa stai facendo in questo momento? E che cosa stai per fare?', 'In questo momento sto studiando l’italiano e sto per preparare la cena per la mia famiglia.',
      'sto + gérondif (en cours) ; sto per + infinitif (imminent).', { kc: [STARE_GER, STARE_PER], keywords: [['sto', 'stiamo']], minWords: 10, d: -0.6 })
    .build(),
};
