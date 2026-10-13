import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('it');

/**
 * Défis de fin d'unité A2 : items d'ÉVALUATION inédits (jamais repris des leçons).
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_A2: Record<string, Exercise[]> = {
  'it-a2-prepositions': assessment(
    exercises('cp-it-a2-prepositions', 'A2', { kc: 'it.a2.grammar.articulated_prepositions' })
      .cloze('Il gatto dorme ___ letto.', ['sul'], 'su + il = sul.', { hint: 'sur le', d: -1.4 })
      .mcq('Abito ___ Stati Uniti da due anni.', ['negli', 'nei', 'agli'], 0, 'gli Stati Uniti → in + gli = negli.', { d: -0.8 })
      .mcq('Stasera ceniamo ___ nonni.', ['dai', 'ai', 'nei'], 0, 'chez + personnes = da : dai nonni.', { kc: 'it.a2.grammar.prepositions_places', d: -1.0 })
      .cloze('Vorrei ___ acqua frizzante, per favore.', ['dell’'], 'Partitif devant voyelle : di + l’ = dell’.', { kc: 'it.a2.grammar.partitive', hint: 'de l’', speak: 'Vorrei dell’acqua frizzante, per favore.', d: -1.0 })
      .tr('Je vais au travail à pied.', ['Vado al lavoro a piedi.', 'Io vado al lavoro a piedi.', 'Vado a lavorare a piedi.', 'Vado in ufficio a piedi.'], 'à pied = a piedi.', { kc: 'it.a2.grammar.prepositions_da_transport', d: -1.1 })
      .listen('Sono di Bari, ma abito a Torino da dieci anni.', 'Depuis combien de temps habite-t-elle à Turin ?', ['Dix ans', 'Deux ans', 'Elle n’y habite pas'], 0,
        'da dieci anni = depuis dix ans.', { kc: 'it.a2.grammar.prepositions_da_transport', d: -1.1 })
      .say('Le téléphone est dans le sac.', ['Il telefono è nella borsa', 'Il telefono è nello zaino', 'Il telefono sta nella borsa', 'Il cellulare è nella borsa'], 'in + la = nella.', { d: -1.2 })
      .build(),
  ),
  'it-a2-possessives': assessment(
    exercises('cp-it-a2-possessives', 'A2', { kc: 'it.a2.grammar.possessives' })
      .cloze('___ fratello lavora in banca.', ['Mio'], 'Famille au singulier → pas d’article : mio fratello.', { kc: 'it.a2.grammar.possessives_family', hint: 'mon', d: -1.2 })
      .mcq('Signora, è ___ questa giacca?', ['Sua', 'tua', 'vostra'], 0, 'Lei (politesse) → Sua.', { d: -0.9 })
      .mcq('Paolo e Anna vivono con ___ figli a Bologna.', ['i loro', 'loro', 'i suoi'], 0, 'leur(s) = il loro, i loro : toujours avec l’article.', { kc: 'it.a2.grammar.possessives_family', d: -0.8 })
      .mcq('Guarda ___ uccelli sull’albero!', ['quegli', 'quei', 'quelli'], 0, 'uccelli (voyelle) → gli uccelli → quegli.', { kc: 'it.a2.grammar.quello_forms', d: -0.7 })
      .tr('Cette semaine, je travaille beaucoup.', ['Questa settimana lavoro molto.', 'Questa settimana lavoro tanto.', 'Lavoro molto questa settimana.', 'Questa settimana io lavoro molto.'], 'proche dans le temps → questa.', { kc: 'it.a2.grammar.demonstratives', d: -1.3 })
      .listen('Quella è la mia macchina, quella rossa vicino al bar.', 'Quelle est sa voiture ?', ['La rouge, près du bar', 'La noire, devant la banque', 'Celle-ci, ici'], 0,
        'quella rossa vicino al bar = la rouge près du bar.', { kc: 'it.a2.grammar.demonstratives', d: -1.1 })
      .say('Ce sont mes clés.', ['Sono le mie chiavi', 'Queste sono le mie chiavi', 'Quelle sono le mie chiavi'], 'chiavi (fém. pl.) → le mie.', { d: -1.1 })
      .build(),
  ),
  'it-a2-passato-avere': assessment(
    exercises('cp-it-a2-passato-avere', 'A2', { kc: 'it.a2.tense.irregular_participles' })
      .cloze('Hai ___ l’ultimo libro di Elena Ferrante?', ['letto'], 'leggere → letto.', { hint: 'leggere', d: -1.1 })
      .mcq('Ieri sera abbiamo ___ troppo vino.', ['bevuto', 'beuto', 'bevito'], 0, 'bere → bevuto.', { d: -1.0 })
      .mcq('Ho comprato questa bici due anni ___.', ['fa', 'prima', 'da'], 0, 'il y a + durée = durée + fa.', { kc: 'it.a2.tense.passato_markers', d: -1.1 })
      .type('Mets au passato prossimo : Chiudo la porta.', ['Ho chiuso la porta.', 'Io ho chiuso la porta.'], 'chiudere → chiuso.', { d: -0.9 })
      .order('Je n’ai jamais gagné à la loterie.', 'Non ho mai vinto alla lotteria.', 'non… mai ; vincere → vinto.', { kc: 'it.a2.tense.passato_markers', distractors: ['vinciuto'], d: -0.8 })
      .listen('Ho già spedito il pacco, ma non ho ancora pagato la bolletta.', 'Qu’est-ce qu’il n’a pas encore fait ?', ['Payer la facture', 'Envoyer le colis', 'Acheter un timbre'], 0,
        'non ho ancora pagato la bolletta = je n’ai pas encore payé la facture.', { kc: 'it.a2.tense.passato_markers', d: -0.9 })
      .say('Qu’est-ce que tu as dit ?', ['Che cosa hai detto', 'Cosa hai detto', 'Che hai detto', 'Che cosa ha detto', 'Cosa ha detto'], 'dire → detto.', { d: -1.0 })
      .build(),
  ),
  'it-a2-passato-essere': assessment(
    exercises('cp-it-a2-passato-essere', 'A2', { kc: 'it.a2.tense.passato_essere' })
      .cloze('Le mie amiche sono ___ ieri da Parigi.', ['tornate', 'arrivate', 'venute', 'rientrate'], 'Sujet féminin pluriel → -e : tornate.', { kc: 'it.a2.grammar.participle_agreement', hint: 'rentrer', d: -1.0 })
      .mcq('Mio figlio ___ nel 2015.', ['è nato', 'ha nato', 'è nata'], 0, 'nascere + essere ; mio figlio → nato.', { d: -1.2 })
      .mcq('La cena ci ___ molto.', ['è piaciuta', 'ha piaciuto', 'è piaciuto'], 0, 'piacere + essere ; accord avec la cena.', { kc: 'it.a2.tense.auxiliary_choice', d: -0.7 })
      .type('Mets au passato prossimo : Ci alziamo presto. (groupe d’hommes)', ['Ci siamo alzati presto.', 'Noi ci siamo alzati presto.'], 'Verbe pronominal → ci siamo alzati.', { kc: 'it.a2.tense.passato_reflexive', d: -0.8 })
      .tr('Tu es {sorti|sortie} hier soir ?', ['Sei uscito ieri sera?', 'Sei uscita ieri sera?', 'Ieri sera sei uscito?', 'Ieri sera sei uscita?', 'Tu sei uscito ieri sera?', 'Tu sei uscita ieri sera?'], 'uscire + essere ; accord selon la personne.', { kc: 'it.a2.grammar.participle_agreement', d: -1.0 })
      .listen('Il concerto è durato tre ore e siamo tornati a casa all’una.', 'Combien de temps a duré le concert ?', ['Trois heures', 'Une heure', 'Deux heures'], 0,
        'è durato tre ore = il a duré trois heures.', { kc: 'it.a2.tense.auxiliary_choice', d: -1.0 })
      .answer('Che cosa hai fatto lo scorso sabato? Dove sei andato o andata?', 'Sabato scorso sono andato in centro, mi sono comprato una giacca e sono tornato a casa tardi.',
        'sono andato / andata, mi sono… : essere et accord.', { kc: ['it.a2.tense.passato_essere', 'it.a2.grammar.participle_agreement'], keywords: [['sono', 'siamo']], minWords: 10, d: -0.6 })
      .build(),
  ),
  'it-a2-imperfetto': assessment(
    exercises('cp-it-a2-imperfetto', 'A2', { kc: 'it.a2.tense.imperfetto_vs_passato' })
      .cloze('Da piccoli ___ sempre in cortile.', ['giocavamo'], 'Habitude passée → imperfetto : giocavamo.', { kc: 'it.a2.tense.imperfetto_uses', hint: 'giocare, noi', d: -1.1 })
      .mcq('Mentre ___ la TV, è andata via la luce.', ['guardavamo', 'abbiamo guardato', 'guardiamo'], 0, 'mentre + action en cours → imperfetto.', { d: -0.9 })
      .mcq('Nel 2019 ___ un incidente in moto.', ['ho avuto', 'avevo', 'ho'], 0, 'Événement ponctuel daté → passato prossimo.', { d: -0.7 })
      .type('Conjugue « essere » à l’imperfetto avec voi.', ['eravate', 'voi eravate'], 'essere → eravate.', { kc: 'it.a2.tense.imperfetto_form', d: -0.9 })
      .tr('Quand j’étais petit, j’avais un chien.', ['Quando ero piccolo, avevo un cane.', 'Quando ero piccola, avevo un cane.', 'Quando ero piccolo avevo un cane.', 'Quando ero piccola avevo un cane.', 'Da piccolo avevo un cane.', 'Da piccola avevo un cane.', 'Quando ero bambino, avevo un cane.', 'Quando ero bambina, avevo un cane.'],
        'Description et état passés → imperfetto.', { kc: 'it.a2.tense.imperfetto_uses', d: -0.9 })
      .listen('Ero in cucina e preparavo il caffè quando qualcuno ha bussato alla porta.', 'Que s’est-il passé ?', ['Quelqu’un a frappé à la porte pendant qu’elle faisait le café', 'Elle a renversé le café', 'Elle est sortie acheter du café'], 0,
        'preparavo (décor) ; ha bussato (événement).', { d: -0.8 })
      .say('Il pleuvait quand je suis {sorti|sortie}.', ['Pioveva quando sono uscito', 'Pioveva quando sono uscita', 'Quando sono uscito pioveva', 'Quando sono uscita pioveva', 'Stava piovendo quando sono uscito', 'Stava piovendo quando sono uscita'], 'Décor → pioveva ; événement → sono uscito / uscita.', { d: -0.7 })
      .build(),
  ),
  'it-a2-pronouns': assessment(
    exercises('cp-it-a2-pronouns', 'A2', { kc: 'it.a2.grammar.direct_pronouns' })
      .cloze('Le scarpe nuove? ___ ho comprate ieri.', ['Le'], 'le scarpe → le ; accord : comprate.', { kc: 'it.a2.grammar.direct_pronouns_agreement', d: -0.8 })
      .mcq('Vedi spesso tuo cugino? — Sì, ___ vedo ogni settimana.', ['lo', 'gli', 'li'], 0, 'vedere qualcuno (direct) → lo.', { d: -1.1 })
      .mcq('Hai parlato con il professore? — Sì, ___ ho parlato stamattina.', ['gli', 'lo', 'l’'], 0, 'parlare a / con qualcuno → COI : gli ho parlato.', { kc: 'it.a2.grammar.indirect_pronouns', d: -0.7 })
      .mcq('Quante sigarette fumi? — Non ___ fumo più.', ['ne', 'le', 'ci'], 0, 'Quantité → ne : non ne fumo più.', { kc: 'it.a2.grammar.ne_ci', d: -0.8 })
      .tr('Les clés ? Je les ai oubliées à la maison.', ['Le chiavi? Le ho dimenticate a casa.', 'Le chiavi? Le ho lasciate a casa.', 'Le chiavi? Le ho scordate a casa.'], 'le chiavi → le ho dimenticate (accord).', { kc: 'it.a2.grammar.direct_pronouns_agreement', d: -0.7 })
      .listen('Vai spesso in piscina? — Sì, ci vado il martedì e il giovedì.', 'Quand va-t-elle à la piscine ?', ['Le mardi et le jeudi', 'Le lundi et le mercredi', 'Tous les jours'], 0,
        'ci vado = j’y vais.', { kc: 'it.a2.grammar.ne_ci', d: -1.0 })
      .say('Je lui écris un message. (à elle)', ['Le scrivo un messaggio', 'Io le scrivo un messaggio', 'Le mando un messaggio', 'Le scrivo un SMS'], 'scrivere a lei → le scrivo.', { kc: 'it.a2.grammar.indirect_pronouns', d: -0.8 })
      .build(),
  ),
  'it-a2-future': assessment(
    exercises('cp-it-a2-future', 'A2', { kc: 'it.a2.tense.futuro_irregular' })
      .cloze('Domani ___ bel tempo, secondo il meteo.', ['farà'], 'fare → farà.', { hint: 'fare', d: -1.0 })
      .mcq('Quando ___ in pensione, viaggerò di più.', ['andrò', 'vado', 'anderò'], 0, 'Action future après quando → futur : andrò.', { d: -0.8 })
      .mcq('Il film sta ___ cominciare, sbrigati!', ['per', 'a', 'di'], 0, 'stare per + infinitif.', { kc: 'it.a2.grammar.stare_per', d: -1.1 })
      .type('Conjugue « cercare » au futur avec noi.', ['cercheremo', 'noi cercheremo'], '-care → -cher- : cercheremo.', { kc: 'it.a2.tense.futuro_regular', d: -0.8 })
      .tr('Qu’est-ce que vous faites ? Nous sommes en train de manger.', ['Che cosa state facendo? Stiamo mangiando.', 'Cosa state facendo? Stiamo mangiando.', 'Che state facendo? Stiamo mangiando.', 'Che cosa fate? Stiamo mangiando.', 'Cosa fate? Stiamo mangiando.'],
        'Action en cours → stare + gérondif.', { kc: 'it.a2.grammar.stare_gerund', d: -0.9 })
      .listen('Quest’estate rimarremo in città, ma a settembre andremo in Sardegna.', 'Où iront-ils en septembre ?', ['En Sardaigne', 'En Sicile', 'Ils resteront en ville'], 0,
        'andremo in Sardegna = nous irons en Sardaigne.', { d: -1.0 })
      .say('L’année prochaine, j’apprendrai l’espagnol.', ['L’anno prossimo imparerò lo spagnolo', 'L’anno prossimo studierò lo spagnolo', 'Imparerò lo spagnolo l’anno prossimo', 'Studierò lo spagnolo l’anno prossimo'], 'imparare → imparerò.', { kc: 'it.a2.tense.futuro_regular', d: -0.9 })
      .build(),
  ),
  'it-a2-compare': assessment(
    exercises('cp-it-a2-compare', 'A2', { kc: 'it.a2.grammar.comparatives' })
      .cloze('Milano è meno grande ___ Roma.', ['di'], 'Devant un nom → di.', { d: -1.2 })
      .mcq('Questa pizza è ___ di quella di ieri.', ['migliore', 'più migliore', 'meglio'], 0, 'Adjectif (buono) → migliore.', { kc: 'it.a2.grammar.superlatives', d: -0.8 })
      .mcq('Mi piace più nuotare ___ correre.', ['che', 'di', 'come'], 0, 'Entre deux verbes → che.', { d: -0.8 })
      .mcq('Signore, ___ pure, la porta è aperta.', ['entri', 'entra', 'entrate'], 0, 'Lei → entri (-are → -i).', { kc: 'it.a2.grammar.imperative_lei', d: -0.8 })
      .tr('Ne mange pas trop de chocolat !', ['Non mangiare troppo cioccolato!', 'Non mangiare troppa cioccolata!'], 'Négation tu → non + infinitif.', { kc: 'it.a2.grammar.imperative_tu_voi', d: -0.9 })
      .listen('È l’albergo più economico della zona, ma le camere sono piccolissime.', 'Comment est l’hôtel ?', ['Le moins cher du quartier, avec des chambres toutes petites', 'Le plus cher du quartier, avec de grandes chambres', 'Bon marché, avec des chambres très grandes'], 0,
        'il più economico = le moins cher ; piccolissime = toutes petites.', { kc: 'it.a2.grammar.superlatives', d: -0.8 })
      .say('Tourne à gauche et continue tout droit.', ['Gira a sinistra e vai dritto', 'Gira a sinistra e va’ dritto', 'Gira a sinistra e continua dritto', 'Gira a sinistra e vai sempre dritto', 'Gira a sinistra e prosegui dritto', 'Giri a sinistra e vada dritto', 'Giri a sinistra e continui dritto'], 'Impératif tu : gira, vai / va’, continua (ou Lei : giri, vada, continui).', { kc: 'it.a2.grammar.imperative_tu_voi', d: -0.8 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_A2: Record<string, string[]> = {
  'it-a2-prepositions': ['Je peux dire où se trouvent les choses (sul tavolo, nella borsa).', 'Je peux dire où je vais, chez qui, avec quel moyen de transport et depuis quand.'],
  'it-a2-possessives': ['Je peux parler de ma famille et de ce qui m’appartient.', 'Je peux désigner des objets proches ou éloignés (questo, quello).'],
  'it-a2-passato-avere': ['Je peux raconter ce que j’ai fait hier ou le week-end dernier.', 'Je peux dire ce que j’ai déjà fait, pas encore fait ou jamais fait.'],
  'it-a2-passato-essere': ['Je peux raconter un voyage ou une sortie (sono andato, siamo partiti).', 'Je peux décrire ma journée passée avec les verbes pronominaux et dire ce qui m’a plu.'],
  'it-a2-imperfetto': ['Je peux décrire mes habitudes d’enfance et des lieux du passé.', 'Je peux raconter une petite histoire en distinguant le décor et les événements.'],
  'it-a2-pronouns': ['Je peux éviter les répétitions avec lo, la, li, le, gli, le.', 'Je peux parler de quantités avec ne et d’un lieu avec ci.'],
  'it-a2-future': ['Je peux parler de mes projets et faire des prévisions.', 'Je peux dire ce que je suis en train de faire ou sur le point de faire.'],
  'it-a2-compare': ['Je peux comparer des personnes, des lieux et des objets.', 'Je peux donner des conseils et des instructions, à un ami ou poliment.'],
};
