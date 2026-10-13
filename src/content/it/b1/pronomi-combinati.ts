import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const COMB = 'it.b1.pronouns.combined_forms';
const GLIELO = 'it.b1.pronouns.glielo';
const POS = 'it.b1.pronouns.combined_position';
const NE = 'it.b1.pronouns.combined_ne';

export const pronomiCombinati1: Lesson = {
  id: 'it-b1-pronomi-combinati-1',
  cefr: 'B1',
  unitId: 'it-b1-pronomi-combinati',
  title: 'Pronoms combinés : me lo, glielo',
  subtitle: 'Me lo presti? Glielo dico.',
  kcIds: [COMB, GLIELO],
  estMinutes: 10,
  explanation: [
    {
      title: 'Indirect + direct : me lo, te la, ce li…',
      body: 'Quand deux pronoms se suivent, le complément indirect vient d’abord et mi, ti, ci, vi, si deviennent me, te, ce, ve, se devant lo, la, li, le, ne.',
      table: [
        ['mi + lo', 'me lo'],
        ['ti + la', 'te la'],
        ['ci + li', 'ce li'],
        ['vi + le', 've le'],
        ['si + lo', 'se lo'],
      ],
      examples: [
        { en: 'Mi presti la penna? — Sì, te la presto.', fr: 'Tu me prêtes le stylo ? — Oui, je te le prête.' },
        { en: 'Ci mandi le foto? — Ve le mando stasera.', fr: 'Tu nous envoies les photos ? — Je vous les envoie ce soir.' },
      ],
      tip: 'Au passé composé, le participe s’accorde avec lo, la, li, le (élidés en l’ devant avere) : Me l’hai data ? (la chiave) ; Te li ho comprati (i biglietti).',
    },
    {
      title: 'Glielo, gliela, glieli, gliele',
      body: 'gli (à lui), le (à elle) et Le (à vous, Lei) deviennent tous glie- devant lo, la, li, le, ne, et forment un seul mot : glielo, gliela, glieli, gliele, gliene. Devant ho, hai…, glielo et gliela s’élident : gliel’ho.',
      examples: [
        { en: 'Hai dato il libro a Marco? — Sì, gliel’ho dato.', fr: 'Tu as donné le livre à Marco ? — Oui, je le lui ai donné.' },
        { en: 'Signora, glielo porto subito.', fr: 'Madame, je vous l’apporte tout de suite.' },
      ],
      tip: 'Ordre inversé par rapport au français : « je le lui dis » → glielo dico (gli d’abord, en un mot). Et glielo vaut pour lui, elle et Lei : c’est le contexte qui tranche.',
    },
  ],
  exercises: exercises('it-b1-pronomi-combinati-1', 'B1', { kc: COMB, tense: 'present' })
    .mcq('Mi presti la macchina? — Sì, ___ presto.', ['te la', 'ti la', 'la ti'], 0, 'ti + la → te la, indirect en premier.', { d: -0.4 })
    .mcq('Quando restituisci i libri a Paolo? — ___ restituisco domani.', ['Glieli', 'Gli li', 'Li gli'], 0, 'a Paolo (gli) + i libri (li) → glieli, en un seul mot.', { kc: GLIELO, d: -0.3 })
    .cloze('Ci prepari un caffè? — Certo, ___ preparo subito.', ['ve lo'], 'à vous (vi → ve) + le café (lo) → ve lo.', { d: -0.3 })
    .cloze('Signora, il conto ___ porto subito.', ['glielo'], 'à vous, Lei (Le → glie) + il conto (lo) → glielo.', { kc: GLIELO, d: -0.2 })
    .type('Remplace « la chiave » et « a Luca » par des pronoms : « Do la chiave a Luca. »', ['Gliela do.'], 'a Luca (gli) + la chiave (la) → gliela do.', { kc: GLIELO, d: -0.1 })
    .type('Remplace « le foto » par un pronom : « Mi mandi le foto? »', ['Me le mandi?'], 'mi + le → me le mandi ?', { d: -0.1 })
    .order('Je te l’ai déjà dit.', 'Te l’ho già detto.', 'ti + lo → te lo, élidé devant ho : te l’ho.', { distractors: ['ti'], d: -0.2 })
    .tr('Je le lui explique demain.', ['Glielo spiego domani.', 'Domani glielo spiego.', 'Io glielo spiego domani.', 'Glielo spiegherò domani.', 'Domani glielo spiegherò.'],
      'le lui → glielo, un seul mot, devant le verbe.', { kc: GLIELO, d: 0 })
    .tr('Tu me la prêtes ? (la valise)', ['Me la presti?', 'Tu me la presti?', 'Me la presti la valigia?'], 'mi + la → me la.', { d: -0.3 })
    .listen('Il regalo per la mamma? Gliel’ho già comprato ieri.', 'Qu’est-ce qui est déjà fait ?', ['Le cadeau pour maman est acheté', 'Il doit encore acheter le cadeau', 'Maman a acheté le cadeau'], 0,
      'gliel’ho comprato = je le lui ai acheté.', { kc: GLIELO, d: -0.1 })
    .listen('Le chiavi? Te le lascio sul tavolo della cucina.', 'Où seront les clés ?', ['Sur la table de la cuisine', 'Dans la voiture', 'Chez le voisin'], 0,
      'te le lascio = je te les laisse.', { d: -0.3 })
    .dictation('Ce li hanno regalati i nonni.', 'ci + li → ce li ; participe accordé avec li : regalati.', { d: 0.1 })
    .repeat('Glielo dico io, non ti preoccupare.', 'gli se prononce « lyi » : glielo = « lyélo ».', { kc: GLIELO, d: -0.4 })
    .say('Elle nous l’a envoyée hier. (la lettre)', ['Ce l’ha mandata ieri.', 'Ce l’ha spedita ieri.', 'Ieri ce l’ha mandata.', 'Ieri ce l’ha spedita.', 'Lei ce l’ha mandata ieri.', 'Lei ce l’ha spedita ieri.', 'Ce l’ha inviata ieri.'],
      'ci + la → ce la, élidé : ce l’ha ; participe accordé au féminin.', { d: 0.3 })
    .answer('Un amico ti chiede dei soldi in prestito. Glieli presti?', 'Se è un buon amico glieli presto, ma gli chiedo di restituirmeli entro un mese.',
      'glieli presto / non glieli presto : gli + li en un mot.',
      { kc: GLIELO, keywords: [['glieli', 'glielo', 'gliela', 'gliele', 'gliene']], minWords: 10, d: 0.3 })
    .build(),
};

export const pronomiCombinati2: Lesson = {
  id: 'it-b1-pronomi-combinati-2',
  cefr: 'B1',
  unitId: 'it-b1-pronomi-combinati',
  title: 'Place des pronoms et ne',
  subtitle: 'dimmelo, devo dirtelo, ce ne sono, gliene parlo',
  kcIds: [POS, NE],
  estMinutes: 10,
  explanation: [
    {
      title: 'Où placer les pronoms combinés ?',
      body: 'Devant un verbe conjugué, mais attachés à la fin d’un infinitif (qui perd son -e), d’un gérondif et d’un impératif tu / noi / voi. Avec Lei, ils restent devant. Avec un modal (volere, potere, dovere), deux places possibles.',
      table: [
        ['verbe conjugué', 'Te lo do.'],
        ['infinitif / modal', 'Voglio dartelo. · Te lo voglio dare.'],
        ['impératif tu / voi', 'Portamelo! · Portatemelo!'],
        ['impératif Lei', 'Me lo porti!'],
        ['impératif négatif (tu)', 'Non dirmelo! · Non me lo dire!'],
      ],
      examples: [
        { en: 'Non posso spiegartelo adesso.', fr: 'Je ne peux pas te l’expliquer maintenant.' },
        { en: 'Questo documento è per il direttore: portaglielo!', fr: 'Ce document est pour le directeur : apporte-le-lui !' },
      ],
      tip: 'Avec les impératifs courts da’, di’, fa’, sta’, va’, la consonne du pronom double : dammelo, dimmelo, fammelo vedere. Sauf avec gli : diglielo.',
    },
    {
      title: 'Avec ne : me ne, gliene, ce n’è',
      body: 'ne (en) se combine comme lo : me ne, te ne, ce ne, ve ne, gliene. Ce n’è / ce ne sono = il y en a.',
      examples: [
        { en: 'Quanti caffè ti servono? — Me ne servono due.', fr: 'Combien de cafés te faut-il ? — Il m’en faut deux.' },
        { en: 'Hai parlato del problema al capo? — Sì, gliene ho parlato.', fr: 'Tu as parlé du problème au chef ? — Oui, je lui en ai parlé.' },
        { en: 'Ci sono ancora biglietti? — Sì, ce ne sono tre.', fr: 'Il reste des billets ? — Oui, il y en a trois.' },
      ],
      tip: '« Il y en a » = ce n’è (singulier) / ce ne sono (pluriel), jamais « ci ne ». Et « donne-m’en » = dammene.',
    },
  ],
  exercises: exercises('it-b1-pronomi-combinati-2', 'B1', { kc: POS, tense: 'present' })
    .mcq('Non trovo il tuo numero: ___ di nuovo, per favore.', ['dimmelo', 'dimelo', 'dirmelo'], 0,
      'di’ + me lo → dimmelo (consonne doublée). dirmelo est l’infinitif, employé avec non.', { d: -0.2 })
    .mcq('Qu’est-ce que le narrateur n’a pas dit à Elisa ?', ['Le prix du sac', 'Le nom du concert', 'La date de la fête'], 0,
      'voleva sapere quanto l’avevo pagata, ma io non gliel’ho detto = je ne le lui ai pas dit.',
      { kc: [GLIELO, NE], passage: 'Ieri era il compleanno di mia sorella Elisa. Le ho comprato una borsa di pelle e gliel’ho data a cena. Lei voleva sapere quanto l’avevo pagata, ma io non gliel’ho detto! Poi mio fratello le ha regalato due biglietti per un concerto: ce n’erano pochissimi, ma lui è riuscito a trovarne due.', d: 0 })
    .cloze('Vuoi vedere le foto? Posso ___ stasera.', ['mostrartele', 'fartele vedere'], 'Après un infinitif, les pronoms s’attachent : mostrare → mostrar- + te + le.', { hint: 'mostrare + te + le', d: 0.1 })
    .cloze('Ci sono ancora biglietti? — Sì, ___ sono ancora tre.', ['ce ne'], 'il y en a (pluriel) → ce ne sono.', { kc: NE, d: -0.2 })
    .type('Remplace « un po’ di pane » par ne : « Dammi un po’ di pane. »', ['Dammene un po’.', 'Dammene.'], 'da’ + me + ne → dammene (consonne doublée).', { kc: [NE, POS], d: 0.2 })
    .type('Remplace par des pronoms (« il libro », « a Giulia ») : « Devo restituire il libro a Giulia. » Une des deux places suffit.', ['Devo restituirglielo.', 'Glielo devo restituire.'],
      'Avec un modal : glielo devo restituire ou devo restituirglielo.', { kc: [POS, GLIELO], d: 0.2 })
    .order('Je ne peux pas te l’expliquer maintenant.', 'Non te lo posso spiegare adesso.', 'Avec un modal, te lo peut se placer devant : non te lo posso spiegare.', { distractors: ['ti'], d: 0 })
    .tr('Des chaises ? Il y en a deux dans la cuisine.', ['Sedie? Ce ne sono due in cucina.', 'Delle sedie? Ce ne sono due in cucina.', 'Le sedie? Ce ne sono due in cucina.', 'Sedie? In cucina ce ne sono due.', 'Le sedie? In cucina ce ne sono due.'],
      'il y en a (pluriel) → ce ne sono.', { kc: NE, d: 0 })
    .tr('Donne-le-moi, s’il te plaît ! (le livre)', ['Dammelo, per favore!', 'Dammelo, per piacere!', 'Per favore, dammelo!', 'Me lo dai, per favore?'],
      'da’ + me lo → dammelo.', { d: -0.1 })
    .listen('Questa ricetta è buonissima: te la scrivo, così puoi farla anche tu.', 'Que va faire la personne ?', ['Lui écrire la recette', 'Lui préparer le plat', 'Lui acheter un livre de cuisine'], 0,
      'te la scrivo = je te l’écris.', { kc: [COMB, POS], d: -0.2 })
    .listen('Hai parlato del viaggio ai tuoi? — Sì, gliene ho parlato ieri sera.', 'Qu’a-t-il fait hier soir ?', ['Il a parlé du voyage à ses parents', 'Il a réservé le voyage', 'Il a rendu visite à ses parents'], 0,
      'gliene ho parlato = je leur en ai parlé (ai tuoi = à tes parents).', { kc: NE, d: 0.1 })
    .dictation('Non posso dirtelo adesso.', 'dire → dir- + te + lo : dirtelo.', { d: -0.1 })
    .repeat('Fammelo vedere, dai!', 'fa’ + me lo → fammelo : le m est doublé.', { d: -0.4 })
    .say('Vous pouvez me l’envoyer par e-mail ? (Lei, le document)', ['Me lo può mandare per email?', 'Può mandarmelo per email?', 'Me lo può mandare per e-mail?', 'Può mandarmelo per e-mail?', 'Me lo può inviare per email?', 'Può inviarmelo per email?', 'Me lo potrebbe mandare per email?', 'Potrebbe mandarmelo per email?', 'Me lo può mandare per mail?', 'Può mandarmelo per mail?'],
      'me lo può mandare ou può mandarmelo : deux places possibles avec un modal.', { d: 0.2 })
    .answer('Un collega ti chiede in prestito la tua macchina. Che cosa gli rispondi?', 'Va bene, te la presto volentieri, ma devi restituirmela domani sera con il pieno.',
      'te la presto, devi restituirmela, non posso prestartela…',
      { kc: [POS, COMB], keywords: [['te la', 'prestartela', 'restituirmela', 'riportarmela', 'me la']], minWords: 10, d: 0.3 })
    .build(),
};
