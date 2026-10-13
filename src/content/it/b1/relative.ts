import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const CHE = 'it.b1.grammar.relative_che';
const CUI = 'it.b1.grammar.relative_cui';
const QUALE = 'it.b1.grammar.relative_quale';
const CHI = 'it.b1.grammar.relative_chi';

export const relative1: Lesson = {
  id: 'it-b1-relative-1',
  cefr: 'B1',
  unitId: 'it-b1-relative',
  title: 'Relatives : che et cui',
  subtitle: 'il libro che leggo, la città in cui vivo',
  kcIds: [CHE, CUI],
  estMinutes: 10,
  explanation: [
    {
      title: 'Che : sujet ou complément direct',
      body: 'che traduit à la fois « qui » et « que ». Il est invariable.',
      examples: [
        { en: 'La ragazza che parla è mia cugina.', fr: 'La fille qui parle est ma cousine.' },
        { en: 'Il libro che leggo è molto interessante.', fr: 'Le livre que je lis est très intéressant.' },
      ],
      tip: 'Après un nom, « qui » ne se traduit jamais par chi : « la ragazza chi parla » ✗ → la ragazza che parla ✓.',
    },
    {
      title: 'Cui : après une préposition',
      body: 'Après une préposition, on emploie cui (invariable) : di cui, a cui, con cui, in cui, per cui, da cui. il cui / la cui / i cui / le cui + nom = « dont » de possession ; l’article s’accorde avec le nom qui suit.',
      table: [
        ['dont (parlare di)', 'il film di cui ti ho parlato'],
        ['à qui (scrivere a)', 'l’amico a cui scrivo'],
        ['avec qui', 'la collega con cui lavoro'],
        ['où (lieu, temps)', 'la casa in cui abito · il giorno in cui'],
        ['pour lequel', 'il motivo per cui ti chiamo'],
        ['dont + nom', 'una scrittrice i cui romanzi sono famosi'],
      ],
      tip: 'Choisis la préposition du verbe italien : parlare di → di cui, pensare a → a cui, uscire con → con cui. Le « où » de temps se dit in cui : il giorno in cui ci siamo conosciuti (à l’oral, aussi il giorno che…).',
    },
  ],
  exercises: exercises('it-b1-relative-1', 'B1', { kc: CHE, tense: 'relative' })
    .mcq('La ragazza ___ ti ho presentato ieri è mia cugina.', ['che', 'cui', 'chi'], 0, 'Complément direct sans préposition → che.', { d: -0.5 })
    .mcq('Questo è il film di ___ ti ho parlato.', ['cui', 'che', 'quale'], 0, 'Après une préposition (di) → cui.', { kc: CUI, d: -0.4 })
    .cloze('Il motivo per ___ ti chiamo è semplice.', ['cui'], 'per + cui = pour lequel.', { kc: CUI, d: -0.3 })
    .cloze('Ti ricordi il giorno ___ ci siamo conosciuti?', ['in cui', 'che'], 'le jour où → il giorno in cui (che est possible à l’oral).', { kc: CUI, d: -0.1 })
    .type('Relie avec un relatif : « Ho un’amica. Vive a Parigi. »', ['Ho un’amica che vive a Parigi.'], 'Sujet → che.', { d: -0.4 })
    .type('Complète avec préposition + cui (« avec qui ») : « La persona ___ lavoro è molto simpatica. »', ['con cui'], 'lavorare con → con cui.', { kc: CUI, d: -0.3 })
    .order('La ville où j’habite est petite.', 'La città in cui abito è piccola.', 'où (lieu) → in cui (ou dove).', { kc: CUI, distractors: ['che'], d: -0.3 })
    .tr('Le livre que je lis est très intéressant.', ['Il libro che leggo è molto interessante.', 'Il libro che sto leggendo è molto interessante.', 'Il libro che leggo è interessantissimo.', 'Il libro che sto leggendo è interessantissimo.'],
      'que → che.', { d: -0.5 })
    .tr('C’est l’ami à qui j’ai prêté ma voiture.', ['È l’amico a cui ho prestato la macchina.', 'È l’amico a cui ho prestato la mia macchina.', 'È l’amico cui ho prestato la macchina.', 'È l’amico al quale ho prestato la macchina.', 'È l’amico al quale ho prestato la mia macchina.', 'È l’amico a cui ho prestato l’auto.'],
      'à qui → a cui (ou al quale).', { kc: CUI, d: 0 })
    .listen('Il ristorante in cui abbiamo cenato sabato ha chiuso.', 'Qu’est-ce qui a fermé ?', ['Le restaurant où ils ont dîné samedi', 'Le restaurant qu’ils veulent essayer', 'Le cinéma à côté du restaurant'], 0,
      'il ristorante in cui abbiamo cenato = le restaurant où nous avons dîné.', { kc: CUI, d: -0.3 })
    .listen('Marco è un collega che non parla molto, ma che lavora benissimo.', 'Comment est Marco ?', ['Il parle peu mais travaille très bien', 'Il parle beaucoup', 'Il travaille mal'], 0,
      'che non parla molto = qui ne parle pas beaucoup.', { d: -0.5 })
    .dictation('Questa è la canzone che preferisco.', 'che = que (complément direct).', { d: -0.5 })
    .repeat('È una scrittrice i cui romanzi sono famosi in tutto il mondo.', 'i cui romanzi = dont les romans : l’article s’accorde avec romanzi.', { kc: CUI, d: 0.2 })
    .say('Voici la personne dont je t’ai parlé.', ['Ecco la persona di cui ti ho parlato.', 'Questa è la persona di cui ti ho parlato.', 'Ecco la persona della quale ti ho parlato.', 'Questa è la persona della quale ti ho parlato.'],
      'parlare di → di cui (ou della quale).', { kc: CUI, d: 0 })
    .answer('Descrivi una persona che è importante per te.', 'Mia nonna è una persona che mi ha insegnato molto e con cui parlo di tutto.',
      'Relatives : una persona che…, con cui…, a cui…',
      { kc: [CHE, CUI], keywords: [['che', 'cui', 'quale']], minWords: 10, d: 0 })
    .build(),
};

export const relative2: Lesson = {
  id: 'it-b1-relative-2',
  cefr: 'B1',
  unitId: 'it-b1-relative',
  title: 'Il quale, chi, quello che',
  subtitle: 'la ragione per la quale, chi cerca trova, ciò che dici',
  kcIds: [QUALE, CHI],
  estMinutes: 10,
  explanation: [
    {
      title: 'Il quale, la quale, i quali, le quali',
      body: 'il quale remplace che ou cui, surtout à l’écrit. Il s’accorde avec l’antécédent et se combine avec les prépositions : del quale, alla quale, nei quali, con le quali…',
      table: [
        ['masculin', 'il quale · i quali'],
        ['féminin', 'la quale · le quali'],
        ['dont', 'del quale, della quale, dei quali, delle quali'],
        ['auquel / à laquelle', 'al quale, alla quale, ai quali, alle quali'],
      ],
      examples: [
        { en: 'Ho parlato con la sorella di Marco, la quale vive a Roma.', fr: 'J’ai parlé avec la sœur de Marco, laquelle vit à Rome.' },
        { en: 'Sono i colleghi con i quali lavoro.', fr: 'Ce sont les collègues avec lesquels je travaille.' },
      ],
      tip: 'Comme « lequel / laquelle » : article + quale, accordé. Utile pour lever une ambiguïté : la sorella di Marco, la quale… (c’est la sœur, pas Marco).',
    },
    {
      title: 'Chi, quello che, ciò che',
      body: 'chi = celui qui, ceux qui, quiconque (sans antécédent, verbe au singulier). quello che / ciò che / quel che = ce que, ce qui.',
      examples: [
        { en: 'Chi studia, impara.', fr: 'Celui qui étudie apprend.' },
        { en: 'Non capisco quello che dici.', fr: 'Je ne comprends pas ce que tu dis.' },
        { en: 'Ciò che mi piace è la libertà.', fr: 'Ce qui me plaît, c’est la liberté.' },
      ],
      tip: 'chi est toujours suivi d’un verbe au singulier : Chi vuole venire alzi la mano (ceux qui veulent venir…). « Ce que » ne se traduit pas par che seul : Fai quello che vuoi.',
    },
  ],
  exercises: exercises('it-b1-relative-2', 'B1', { kc: QUALE, tense: 'relative' })
    .mcq('Questi sono i colleghi con ___ lavoro ogni giorno.', ['i quali', 'il quale', 'le quali'], 0, 'colleghi : masculin pluriel → i quali.', { d: -0.2 })
    .mcq('Que doivent faire les personnes intéressées ?', ['Envoyer leur CV avant le 30 avril', 'Téléphoner à l’hôtel', 'Se présenter à la réception'], 0,
      'Chi è interessato può mandare il curriculum entro il 30 aprile = ceux qui sont intéressés peuvent envoyer leur CV avant le 30 avril.',
      { kc: [CHI, QUALE], passage: 'Hotel sul lago di Como cerca receptionist per la stagione estiva. Cerchiamo una persona che parli inglese e francese. Chi è interessato può mandare il curriculum entro il 30 aprile. La persona che sceglieremo lavorerà alla reception, dove accoglierà i clienti, ai quali darà anche informazioni sulle gite in barca.', d: -0.1 })
    .cloze('Non ho capito ___ hai detto.', ['quello che', 'ciò che', 'quel che'], 'ce que → quello che / ciò che.', { kc: CHI, d: -0.2 })
    .cloze('La ditta per ___ lavoro è tedesca.', ['la quale', 'cui'], 'la ditta (f.) → per la quale (ou per cui).', { d: -0.1 })
    .type('Remplace « di cui » par la forme avec quale : « Il problema di cui parliamo. »', ['Il problema del quale parliamo.'], 'di + il quale → del quale (problema, masc. sing.).', { d: 0 })
    .type('Remplace « a cui » par la forme avec quale : « Le amiche a cui scrivo. »', ['Le amiche alle quali scrivo.'], 'a + le quali → alle quali (amiche, fém. plur.).', { d: 0.1 })
    .order('Ceux qui veulent venir doivent s’inscrire.', 'Chi vuole venire deve iscriversi.', 'chi + verbe au singulier : vuole, deve.', { kc: CHI, distractors: ['vogliono'], d: -0.1 })
    .tr('Fais ce que tu veux.', ['Fai quello che vuoi.', 'Fai ciò che vuoi.', 'Fa’ quello che vuoi.', 'Fa’ ciò che vuoi.', 'Fai quel che vuoi.', 'Fai come vuoi.'],
      'ce que → quello che / ciò che.', { kc: CHI, d: -0.2 })
    .tr('J’ai écrit à la directrice, laquelle m’a répondu tout de suite.', ['Ho scritto alla direttrice, la quale mi ha risposto subito.', 'Ho scritto alla direttrice, che mi ha risposto subito.', 'Ho scritto alla direttrice, la quale mi ha risposto immediatamente.', 'Ho scritto alla direttrice, che mi ha risposto immediatamente.'],
      'laquelle → la quale (ou che).', { d: 0.2 })
    .listen('Chi ha perso un ombrello nero può ritirarlo alla reception.', 'Qui doit aller à la réception ?', ['La personne qui a perdu un parapluie noir', 'Tous les clients', 'Le réceptionniste'], 0,
      'chi ha perso = celui qui a perdu.', { kc: CHI, d: -0.2 })
    .listen('Ho incontrato il fratello di Giulia, il quale lavora in banca.', 'Qui travaille à la banque ?', ['Le frère de Giulia', 'Giulia', 'Le narrateur'], 0,
      'il quale est masculin → il fratello, pas Giulia.', { d: 0.1 })
    .dictation('È proprio ciò che volevo sentire.', 'ciò che = ce que.', { kc: CHI, d: 0 })
    .repeat('Le ragioni per le quali ho cambiato lavoro sono tante.', 'per le quali : accord avec ragioni (fém. plur.).', { d: -0.1 })
    .say('Ce qui me plaît, c’est la cuisine italienne.', ['Quello che mi piace è la cucina italiana.', 'Ciò che mi piace è la cucina italiana.', 'Quel che mi piace è la cucina italiana.'],
      'ce qui → quello che / ciò che ; pas de « c’est » répété.', { kc: CHI, d: 0.1 })
    .answer('Che cosa cerchi in un buon amico? Usa « una persona che… » o « una persona con la quale… ».', 'Un buon amico è una persona con la quale posso parlare di tutto e che mi aiuta quando ho problemi.',
      'Relatives : che, con cui, con la quale, chi…',
      { kc: [QUALE, CHI], keywords: [['quale', 'cui', 'chi', 'che']], minWords: 10, d: 0.2 })
    .build(),
};
