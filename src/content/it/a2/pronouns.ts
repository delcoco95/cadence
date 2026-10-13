import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const DIRECT = 'it.a2.grammar.direct_pronouns';
const DIR_PP = 'it.a2.grammar.direct_pronouns_agreement';
const INDIRECT = 'it.a2.grammar.indirect_pronouns';
const NE_CI = 'it.a2.grammar.ne_ci';

export const pronouns1: Lesson = {
  id: 'it-a2-pronouns-1',
  cefr: 'A2',
  unitId: 'it-a2-pronouns',
  title: 'Pronoms COD',
  subtitle: 'lo, la, li, le : lo compro, l’ho vista',
  kcIds: [DIRECT, DIR_PP],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les pronoms compléments d’objet direct',
      body: 'Ils remplacent un complément sans préposition et se placent devant le verbe conjugué, comme en français. Avec un infinitif, ils peuvent aussi s’attacher à la fin de l’infinitif, qui perd son -e final.',
      table: [
        ['me, te', 'mi · ti'],
        ['le, la (l’ devant voyelle)', 'lo · la · La (vous, politesse)'],
        ['nous, vous', 'ci · vi'],
        ['les (masc. · fém.)', 'li · le'],
        ['avec infinitif', 'Lo voglio vedere = Voglio vederlo.'],
      ],
      examples: [
        { en: 'Il caffè lo prendo senza zucchero.', fr: 'Le café, je le prends sans sucre.' },
        { en: 'Conosci Marta? — Sì, la conosco bene.', fr: 'Tu connais Marta ? — Oui, je la connais bien.' },
        { en: 'Questi biscotti sono buoni: li compro sempre.', fr: 'Ces biscuits sont bons : je les achète toujours.' },
      ],
      tip: '« Les » a deux formes : li pour un masculin pluriel (i libri → li leggo), le pour un féminin pluriel (le chiavi → le cerco). Ne pas confondre le pronom le avec l’article le.',
    },
    {
      title: 'Au passato prossimo : l’ho visto, l’ho vista',
      body: 'Avec lo, la, li, le, le participe passé s’accorde avec le pronom. lo et la s’élident devant avere : l’ho, l’hai, l’ha. li et le ne s’élident jamais.',
      table: [
        ['il film', 'l’ho visto'],
        ['la partita', 'l’ho vista'],
        ['i documenti', 'li ho letti'],
        ['le foto', 'le ho fatte'],
      ],
      examples: [
        { en: 'Hai visto la nuova serie? — Sì, l’ho vista ieri.', fr: 'Tu as vu la nouvelle série ? — Oui, je l’ai vue hier.' },
        { en: 'Dove sono le chiavi? Le ho messe sul tavolo.', fr: 'Où sont les clés ? Je les ai mises sur la table.' },
      ],
      tip: 'En français, l’accord après « l’ai » est muet à l’oral (vu / vue). En italien, il s’entend et il est obligatoire : l’ho visto (le film) ≠ l’ho vista (la série).',
    },
  ],
  exercises: exercises('it-a2-pronouns-1', 'A2', { kc: DIRECT })
    .cloze('Conosci Marta? — Sì, ___ conosco bene.', ['la'], 'Marta (féminin) → la.', { d: -1.4 })
    .cloze('Questi biscotti sono buoni: ___ compro sempre.', ['li'], 'biscotti (masc. pl.) → li.', { d: -1.2 })
    .mcq('Hai visto la nuova serie? — Sì, ___ ieri.', ['l’ho vista', 'l’ho visto', 'la ho visto'], 0, 'la serie → l’ho vista (élision + accord au féminin).', { kc: DIR_PP, d: -0.9 })
    .mcq('Dove sono le chiavi? ___ sul tavolo.', ['Le ho messe', 'Li ho messi', 'L’ho messo'], 0, 'le chiavi (fém. pl.) → le ho messe.', { kc: DIR_PP, d: -0.8 })
    .type('Remplace le complément par un pronom : Leggo il giornale.', ['Lo leggo.'], 'il giornale → lo, devant le verbe.', { d: -1.3 })
    .type('Remplace le complément par un pronom : Ho comprato le mele.', ['Le ho comprate.'], 'le mele → le ; accord : comprate.', { kc: DIR_PP, d: -0.8 })
    .order('Je veux le voir demain.', 'Voglio vederlo domani.', 'Avec un infinitif, le pronom peut s’attacher : vederlo.', { distractors: ['gli', 'vedergli'], d: -1.0 })
    .tr('Je t’attends devant la gare.', ['Ti aspetto davanti alla stazione.', 'Io ti aspetto davanti alla stazione.'], 'te → ti, devant le verbe ; devant la gare = davanti alla stazione.', { d: -1.2 })
    .tr('Les photos ? Je les ai faites hier.', ['Le foto? Le ho fatte ieri.', 'Le foto? Le ho fatte ieri sera.', 'Le foto? Ieri le ho fatte.'], 'le foto (fém. pl.) → le ho fatte.', { kc: DIR_PP, d: -0.7 })
    .listen('Il pane? L’ho già comprato stamattina.', 'Qu’en est-il du pain ?', ['Il l’a déjà acheté ce matin', 'Il va l’acheter ce soir', 'Il a oublié de l’acheter'], 0,
      'l’ho già comprato = je l’ai déjà acheté.', { kc: DIR_PP, d: -1.1 })
    .listen('Signora, La chiamo domani per l’appuntamento.', 'Que va faire l’homme ?', ['Rappeler la dame demain', 'Prendre rendez-vous aujourd’hui', 'Annuler le rendez-vous'], 0,
      'La chiamo = je vous appelle (politesse).', { d: -1.0 })
    .dictation('I documenti li ho lasciati in ufficio.', 'i documenti → li ho lasciati (accord au masculin pluriel).', { kc: DIR_PP, d: -0.8 })
    .repeat('Non lo so, ma lo chiedo a Marco.', 'lo devant le verbe : non lo so, lo chiedo.', { d: -1.3 })
    .say('Je l’ai {vu|vue} hier.', ['L’ho visto ieri', 'L’ho vista ieri', 'Ieri l’ho visto', 'Ieri l’ho vista', 'Io l’ho visto ieri', 'Io l’ho vista ieri'], 'l’ho visto (lui) / l’ho vista (lei).', { kc: [DIRECT, DIR_PP], d: -1.0 })
    .answer('Hai visto un bel film di recente? Dove l’hai visto?', 'Sì, ho visto un film francese e l’ho visto al cinema con mia sorella sabato sera.',
      'Reprends le film avec lo : l’ho visto…', { kc: [DIRECT, DIR_PP], keywords: [['l’ho', 'lo', 'la', 'l’abbiamo']], minWords: 10, d: -0.7 })
    .build(),
};

export const pronouns2: Lesson = {
  id: 'it-a2-pronouns-2',
  cefr: 'A2',
  unitId: 'it-a2-pronouns',
  title: 'Pronoms COI, ne et ci',
  subtitle: 'gli telefono, le scrivo, ne prendo due, ci vado',
  kcIds: [INDIRECT, NE_CI],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les pronoms compléments d’objet indirect',
      body: 'Ils remplacent un complément introduit par a : telefono a Marco → gli telefono. Au singulier, « lui » a deux formes : gli (à lui) et le (à elle). Le avec majuscule = à vous (politesse).',
      table: [
        ['me, te', 'mi · ti'],
        ['lui (masc.)', 'gli'],
        ['lui (fém.) · vous (Lei)', 'le · Le'],
        ['nous, vous', 'ci · vi'],
        ['leur', 'gli (courant) · loro, après le verbe (soutenu)'],
      ],
      examples: [
        { en: 'Domani è il compleanno di Luca: gli regalo un libro.', fr: 'Demain c’est l’anniversaire de Luca : je lui offre un livre.' },
        { en: 'Le ho scritto un messaggio, ma non mi ha risposto.', fr: 'Je lui ai écrit un message, mais elle ne m’a pas répondu.' },
        { en: 'Vedo poco i miei genitori, ma gli telefono ogni domenica.', fr: 'Je vois peu mes parents, mais je leur téléphone tous les dimanches.' },
      ],
      tip: 'Le français « lui » ne distingue pas le genre ; l’italien si : gli (à lui), le (à elle). Avec les COI, pas d’accord du participe : le ho scritto (et non « scritta »).',
    },
    {
      title: 'ne et ci',
      body: 'ne remplace une quantité ou un complément introduit par di, comme « en » : Quanti caffè bevi? Ne bevo due. ci remplace un lieu, comme « y » : Vai a Roma? Sì, ci vado domani. Avec ne au passato prossimo, le participe s’accorde avec la quantité.',
      table: [
        ['ne = en (quantité)', 'Quante mele vuoi? Ne voglio tre.'],
        ['ne + négation', 'Non ne ho = je n’en ai pas.'],
        ['ci = y (lieu)', 'Sei mai stato a Napoli? Sì, ci sono stato due volte.'],
        ['c’è, ci sono', 'ci + essere = il y a'],
      ],
      examples: [
        { en: 'Hai dei fratelli? — Sì, ne ho due.', fr: 'Tu as des frères et sœurs ? — Oui, j’en ai deux.' },
        { en: 'Vieni al mare con noi? — No, ci vado domani.', fr: 'Tu viens à la mer avec nous ? — Non, j’y vais demain.' },
      ],
      tip: 'Avec une quantité, ne est obligatoire, comme « en » : « Ho due » ✗ → Ne ho due ✓.',
    },
  ],
  exercises: exercises('it-a2-pronouns-2', 'A2', { kc: INDIRECT })
    .cloze('Domani è il compleanno di Luca: ___ regalo un libro.', ['gli'], 'a Luca (masculin) → gli.', { d: -1.2 })
    .mcq('Hai telefonato a tua sorella? — Sì, ___ ho telefonato ieri.', ['le', 'la', 'gli'], 0, 'telefonare a lei → le (COI féminin).', { d: -0.8 })
    .mcq('Quanti caffè bevi al giorno? — ___ bevo tre.', ['Ne', 'Li', 'Ci'], 0, 'Quantité → ne : ne bevo tre.', { kc: NE_CI, d: -1.0 })
    .type('Remplace par un pronom : Vado in palestra il lunedì.', ['Ci vado il lunedì.', 'Il lunedì ci vado.'], 'in palestra (lieu) → ci.', { kc: NE_CI, d: -1.1 })
    .type('Remplace par un pronom : Scrivo ai nonni.', ['Gli scrivo.', 'Scrivo loro.'], 'ai nonni → gli (courant) ou loro après le verbe.', { d: -0.8 })
    .order('Tu as des frères et sœurs ? Oui, j’en ai deux.', 'Hai fratelli? Sì, ne ho due.', 'Quantité → ne devant le verbe.', { kc: NE_CI, distractors: ['li', 'ci'], d: -1.0 })
    .tr('Je lui ai offert des fleurs. (à elle)', ['Le ho regalato dei fiori.', 'Le ho regalato i fiori.', 'Le ho regalato fiori.', 'Le ho offerto dei fiori.', 'Io le ho regalato dei fiori.', 'Le ho regalato delle rose.'],
      'à elle → le ; pas d’accord du participe avec un COI.', { d: -0.8 })
    .tr('Tu es déjà {allé|allée} à Venise ? — Oui, j’y suis {allé|allée} l’année dernière.', ['Sei mai stato a Venezia? Sì, ci sono stato l’anno scorso.', 'Sei mai stata a Venezia? Sì, ci sono stata l’anno scorso.', 'Sei già stato a Venezia? Sì, ci sono stato l’anno scorso.', 'Sei già stata a Venezia? Sì, ci sono stata l’anno scorso.', 'Sei mai andato a Venezia? Sì, ci sono andato l’anno scorso.', 'Sei mai andata a Venezia? Sì, ci sono andata l’anno scorso.', 'Sei già stato a Venezia? Sì, ci sono andato l’anno scorso.', 'Sei mai stato a Venezia? Sì, ci sono andato l’anno scorso.'],
      'y = ci, devant l’auxiliaire : ci sono stato.', { kc: NE_CI, d: -0.7 })
    .mcq('Que fait Giorgio pour l’anniversaire de sa mère ?', ['Il lui offre un livre de cuisine et l’emmène au restaurant', 'Il lui téléphone de Londres', 'Il lui achète des fleurs au marché'], 0,
      'Le regalo un libro di cucina… la porto in un ristorante.',
      { kc: [INDIRECT, NE_CI], passage: 'Domenica è il compleanno di mia madre. Le regalo un libro di cucina: ne ha già tanti, ma le piacciono moltissimo. Poi la porto in un ristorante sul lago. Ci andiamo spesso perché è il suo posto preferito. Mio fratello vive a Londra e non può venire, ma le telefona la mattina.', d: -0.8 })
    .listen('Signor Rossi, Le mando i documenti oggi pomeriggio.', 'Que va faire la personne ?', ['Envoyer les documents à M. Rossi cet après-midi', 'Demander les documents à M. Rossi', 'Apporter les documents demain matin'], 0,
      'Le mando = je vous envoie (politesse).', { d: -1.0 })
    .listen('Hai del latte? — No, non ne ho più.', 'A-t-il du lait ?', ['Non, il n’en a plus', 'Oui, un peu', 'Oui, beaucoup'], 0,
      'non ne ho più = je n’en ai plus.', { kc: NE_CI, d: -0.9 })
    .dictation('Ai bambini piace il gelato: gli compro un cono.', 'ai bambini → gli (leur).', { d: -0.8 })
    .repeat('Vieni al mare con noi? No, ci vado domani.', 'ci = y (al mare).', { kc: NE_CI, d: -1.2 })
    .say('Je lui téléphone ce soir. (à lui)', ['Gli telefono stasera', 'Stasera gli telefono', 'Io gli telefono stasera', 'Gli telefono questa sera', 'Questa sera gli telefono'], 'telefonare a lui → gli telefono.', { d: -1.0 })
    .answer('Che cosa regali di solito ai tuoi amici per il compleanno?', 'Di solito gli regalo un libro o un disco. A mia sorella invece regalo dei fiori.',
      'gli regalo (à lui, à eux), le regalo (à elle)…', { kc: [INDIRECT, NE_CI], keywords: [['gli', 'le', 'ne']], minWords: 10, d: -0.6 })
    .build(),
};
