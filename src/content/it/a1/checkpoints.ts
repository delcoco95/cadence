import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('it');

/**
 * Défis de fin d'unité A1 : items d'ÉVALUATION inédits (jamais repris des leçons).
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_A1: Record<string, Exercise[]> = {
  'it-a1-hello': assessment(
    exercises('cp-it-a1-hello', 'A1', { kc: 'it.a1.grammar.essere' })
      .mcq('Il est 22 h, tu quittes des amis pour aller dormir. Tu dis :', ['Buonanotte!', 'Buongiorno!', 'Buonasera!'], 0,
        'Buonanotte = bonne nuit, quand on va se coucher.', { kc: 'it.a1.function.greetings', d: -2.3 })
      .cloze('Voi ___ di Milano?', ['siete'], 'voi → siete.', { d: -2.1 })
      .mcq('Dans quel mot entend-on le son « k » ?', ['chiesa', 'cena', 'cielo'], 0, 'ch + i = « k » : chiesa (église). ce, ci = « tché », « tchi ».', { kc: 'it.a1.pronunciation.sounds', d: -1.9 })
      .tr('Nous sommes français et elles sont italiennes.', ['Siamo francesi e loro sono italiane.', 'Noi siamo francesi e loro sono italiane.', 'Siamo francesi e sono italiane.'],
        'francese est invariable au féminin ; italiana → italiane au pluriel.', { kc: ['it.a1.grammar.essere', 'it.a1.grammar.subject_pronouns'], d: -1.8 })
      .listen('Buongiorno, sono il dottor Ferri. Lei è la signora Martin?', 'Que demande le docteur ?', ['Si la dame est Mme Martin', 'Comment elle va', 'D’où elle vient'], 0,
        'Lei è la signora Martin ? = Vous êtes Mme Martin ? (vouvoiement).', { kc: 'it.a1.grammar.subject_pronouns', d: -1.8 })
      .dictation('Ciao, come stai? Io sto bene.', 'come stai ? = comment vas-tu ? ; sto bene = je vais bien.', { kc: 'it.a1.function.greetings', d: -1.9 })
      .say('Bonjour, je m’appelle Paul. Je suis de Bordeaux.', ['Buongiorno, mi chiamo Paul. Sono di Bordeaux.', 'Buongiorno, sono Paul. Sono di Bordeaux.', 'Buongiorno, mi chiamo Paul e sono di Bordeaux.', 'Salve, mi chiamo Paul. Sono di Bordeaux.'],
        'Mi chiamo + prénom ; sono di + ville.', { kc: ['it.a1.function.greetings', 'it.a1.grammar.essere'], d: -1.8 })
      .build(),
  ),
  'it-a1-nouns': assessment(
    exercises('cp-it-a1-nouns', 'A1', { kc: 'it.a1.grammar.indefinite_articles' })
      .mcq('___ psicologo', ['uno', 'un', 'una'], 0, 'ps → uno psicologo.', { d: -1.7 })
      .cloze('Una birra, due ___.', ['birre'], '-a → -e.', { kc: 'it.a1.grammar.noun_plural', d: -2.4 })
      .type('Pluriel de « bar » ?', ['bar'], 'Mot étranger → invariable : due bar.', { kc: 'it.a1.grammar.noun_plural', d: -1.8 })
      .mcq('Quel nom est masculin ?', ['fiore', 'notte', 'chiave'], 0, 'il fiore (la fleur) est masculin ; la notte et la chiave sont féminins.', { kc: 'it.a1.grammar.noun_gender', d: -1.6 })
      .tr('Je voudrais une eau minérale et un sandwich.', ['Vorrei un’acqua minerale e un panino.', 'Vorrei un’acqua minerale e un panino, per favore.'],
        'un’acqua (f., voyelle) ; un panino.', { d: -1.7 })
      .listen('Vorrei tre panini e due aranciate.', 'Combien de sandwichs ?', ['Trois', 'Deux', 'Cinq'], 0, 'tre panini = trois sandwichs.', { kc: 'it.a1.grammar.noun_plural', d: -2.2 })
      .say('Une amie et deux amies.', ['Un’amica e due amiche.'], 'un’amica → due amiche (-ca → -che).', { kc: ['it.a1.grammar.indefinite_articles', 'it.a1.grammar.noun_plural'], d: -1.7 })
      .build(),
  ),
  'it-a1-articles': assessment(
    exercises('cp-it-a1-articles', 'A1', { kc: 'it.a1.grammar.definite_articles' })
      .mcq('___ zii di Paolo', ['gli', 'i', 'lo'], 0, 'zio commence par z → lo zio, gli zii.', { d: -1.7 })
      .cloze('___ amiche di Sara sono qui.', ['Le'], 'Féminin pluriel → le amiche, sans apostrophe.', { d: -1.8 })
      .mcq('In centro ___ molti negozi.', ['ci sono', 'c’è', 'è'], 0, 'Pluriel → ci sono.', { kc: 'it.a1.grammar.c_e_ci_sono', d: -2.0 })
      .order('Où est l’hôtel ?', 'Dov’è l’albergo?', 'Dov’è + article défini.', { kc: ['it.a1.grammar.c_e_ci_sono', 'it.a1.grammar.definite_articles'], d: -1.9 })
      .tr('Il n’y a pas de lait.', ['Non c’è latte.', 'Il latte non c’è.'], 'non c’è + nom singulier.', { kc: 'it.a1.grammar.c_e_ci_sono', d: -1.8 })
      .listen('In piazza c’è una chiesa e ci sono tre ristoranti.', 'Combien de restaurants y a-t-il ?', ['Trois', 'Un', 'Deux'], 0,
        'ci sono tre ristoranti = il y a trois restaurants.', { kc: 'it.a1.grammar.c_e_ci_sono', d: -1.9 })
      .say('Les étudiants sont à Rome.', ['Gli studenti sono a Roma.'], 'studente → lo studente, gli studenti.', { d: -1.8 })
      .build(),
  ),
  'it-a1-avere': assessment(
    exercises('cp-it-a1-avere', 'A1', { kc: 'it.a1.grammar.avere' })
      .mcq('Lei ___ caldo, signora?', ['ha', 'hai', 'ho'], 0, 'Lei (vous) → ha.', { d: -2.0 })
      .cloze('Le case sono ___.', ['bianche'], 'case (f. pl.) → bianche.', { kc: 'it.a1.grammar.adjective_agreement', hint: 'blanches', d: -1.7 })
      .cloze('Ci sono ___ persone al concerto.', ['molte', 'tante'], 'persone (f. pl.) → molte.', { kc: 'it.a1.grammar.molto', hint: 'beaucoup de', d: -1.6 })
      .tr('Ma sœur a douze ans.', ['Mia sorella ha dodici anni.', 'Mia sorella ha 12 anni.'], 'L’âge avec avere + anni.', { d: -1.8 })
      .listen('Abbiamo una casa piccola ma molto luminosa.', 'Comment est la maison ?', ['Petite mais très lumineuse', 'Grande et sombre', 'Petite et sombre'], 0,
        'piccola = petite ; molto luminosa = très lumineuse.', { kc: ['it.a1.grammar.avere', 'it.a1.grammar.adjective_agreement'], d: -1.8 })
      .dictation('Hanno due gatti neri.', 'hanno (h muet) ; gatti (m. pl.) → neri.', { kc: ['it.a1.grammar.avere', 'it.a1.grammar.adjective_agreement'], d: -1.8 })
      .say('J’ai soif et je suis très {fatigué|fatiguée}.', ['Ho sete e sono molto stanco.', 'Ho sete e sono molto stanca.', 'Io ho sete e sono molto stanco.', 'Io ho sete e sono molto stanca.'],
        'avere sete ; molto + adjectif accordé.', { kc: ['it.a1.grammar.avere', 'it.a1.grammar.molto'], d: -1.7 })
      .build(),
  ),
  'it-a1-present-are': assessment(
    exercises('cp-it-a1-present-are', 'A1', { kc: 'it.a1.grammar.present_are' })
      .mcq('Voi ___ la televisione la sera?', ['guardate', 'guardano', 'guardiamo'], 0, 'voi → guardate.', { d: -2.0 })
      .cloze('Tu ___ il conto, io pago il caffè.', ['paghi'], 'pagare → tu paghi (h pour garder le son g dur).', { hint: 'pagare', d: -1.6 })
      .mcq('___ arriva il treno? — Alle dieci.', ['Quando', 'Dove', 'Chi'], 0, 'La réponse est une heure → quando.', { kc: 'it.a1.grammar.questions', d: -2.1 })
      .order('Pourquoi tu n’étudies pas ?', 'Perché non studi?', 'perché + non + verbe.', { kc: ['it.a1.grammar.questions', 'it.a1.grammar.negation'], d: -1.8 })
      .tr('Ils n’habitent pas à Florence.', ['Non abitano a Firenze.', 'Loro non abitano a Firenze.'], 'non + abitano (accent sur A).', { kc: ['it.a1.grammar.present_are', 'it.a1.grammar.negation'], d: -1.8 })
      .listen('Dove compri il pane? — Al forno vicino a casa.', 'Que demande-t-on ?', ['Où la personne achète le pain', 'Quand elle mange', 'Combien coûte le pain'], 0,
        'Dove compri il pane ? = Où achètes-tu le pain ?', { kc: 'it.a1.grammar.questions', d: -1.8 })
      .say('Combien de personnes travaillent ici ?', ['Quante persone lavorano qui?', 'Quante persone lavorano qua?'], 'quante (f. pl.) + persone ; lavorano.', { kc: ['it.a1.grammar.questions', 'it.a1.grammar.present_are'], d: -1.7 })
      .build(),
  ),
  'it-a1-present-ere-ire': assessment(
    exercises('cp-it-a1-present-ere-ire', 'A1', { kc: 'it.a1.grammar.present_ere_ire' })
      .mcq('Il negozio ___ alle otto.', ['chiude', 'chiudi', 'chiudono'], 0, 'il negozio (il) → chiude.', { d: -2.0 })
      .cloze('Loro ___ la casa il sabato.', ['puliscono'], 'pulire prend -isc- : puliscono.', { hint: 'pulire', d: -1.6 })
      .mcq('Noi ___ in vacanza ad agosto.', ['andiamo', 'vanno', 'vado'], 0, 'andare avec noi → andiamo.', { kc: 'it.a1.grammar.irregular_present', d: -1.9 })
      .tr('Tu peux répéter, s’il te plaît ?', ['Puoi ripetere, per favore?', 'Puoi ripetere, per piacere?', 'Puoi ripetere?'],
        'potere avec tu → puoi + infinitif.', { kc: 'it.a1.grammar.modal_verbs', d: -1.7 })
      .listen('Stasera non vengo: devo finire un lavoro.', 'Pourquoi ne vient-il pas ?', ['Il doit finir un travail', 'Il est fatigué', 'Il part en voyage'], 0,
        'devo finire un lavoro = je dois finir un travail.', { kc: ['it.a1.grammar.modal_verbs', 'it.a1.grammar.irregular_present'], d: -1.7 })
      .dictation('Facciamo colazione e poi partiamo.', 'fare → facciamo ; partire → partiamo.', { kc: ['it.a1.grammar.irregular_present', 'it.a1.grammar.present_ere_ire'], d: -1.7 })
      .say('Je ne veux pas dormir.', ['Non voglio dormire.', 'Io non voglio dormire.'], 'volere → voglio + infinitif.', { kc: 'it.a1.grammar.modal_verbs', d: -1.8 })
      .build(),
  ),
  'it-a1-time': assessment(
    exercises('cp-it-a1-time', 'A1', { kc: 'it.a1.function.telling_time' })
      .mcq('Il est 8 h 45 :', ['Sono le nove meno un quarto.', 'Sono le otto meno un quarto.', 'È le nove meno un quarto.'], 0,
        '8 h 45 = neuf heures moins le quart ; pluriel → sono le.', { d: -1.7 })
      .type('Écris en lettres : 61', ['sessantuno'], 'sessanta + uno → sessantuno.', { kc: 'it.a1.vocabulary.numbers', d: -1.6 })
      .cloze('Vengo ___ Marsiglia, ma abito a Parigi.', ['da'], 'Provenance → da.', { kc: 'it.a1.grammar.basic_prepositions', d: -1.7 })
      .mcq('Quel mois vient après « aprile » ?', ['maggio', 'marzo', 'giugno'], 0, 'aprile → maggio (mai).', { kc: 'it.a1.vocabulary.days_months', d: -2.0 })
      .tr('Le cours commence à une heure.', ['La lezione comincia all’una.', 'La lezione inizia all’una.', 'Il corso comincia all’una.', 'Il corso inizia all’una.'],
        'à une heure → all’una.', { d: -1.7 })
      .listen('Il volo parte giovedì alle quindici e trenta.', 'Quand part le vol ?', ['Jeudi à 15 h 30', 'Mardi à 15 h 30', 'Jeudi à 13 h 30'], 0,
        'giovedì = jeudi ; quindici e trenta = 15 h 30.', { kc: ['it.a1.function.telling_time', 'it.a1.vocabulary.days_months'], d: -1.7 })
      .say('Je vais chez Marco samedi.', ['Vado da Marco sabato.', 'Sabato vado da Marco.', 'Io vado da Marco sabato.'], 'chez → da.', { kc: ['it.a1.grammar.basic_prepositions', 'it.a1.vocabulary.days_months'], d: -1.7 })
      .build(),
  ),
  'it-a1-daily': assessment(
    exercises('cp-it-a1-daily', 'A1', { kc: 'it.a1.grammar.reflexive_verbs' })
      .mcq('Voi ___ presto la mattina?', ['vi alzate', 'si alzate', 'ci alziamo'], 0, 'voi → vi alzate.', { d: -1.8 })
      .cloze('A mia madre ___ i fiori.', ['piacciono'], 'i fiori est pluriel → piacciono.', { kc: 'it.a1.grammar.piacere', d: -1.7 })
      .mcq('« Non mi piace il pesce. » — « ___ » (moi non plus)', ['Neanche a me.', 'Anche a me.', 'Neanche io.'], 0,
        'Avec piacere : neanche a me = moi non plus.', { kc: 'it.a1.grammar.piacere', d: -1.6 })
      .tr('Je ne me réveille jamais tard.', ['Non mi sveglio mai tardi.', 'Io non mi sveglio mai tardi.'], 'non + mi sveglio + mai.', { kc: ['it.a1.grammar.reflexive_verbs', 'it.a1.function.frequency'], d: -1.7 })
      .listen('Il fine settimana mi riposo e qualche volta vado al cinema.', 'Que fait-il le week-end ?', ['Il se repose et va parfois au cinéma', 'Il travaille', 'Il va toujours au cinéma'], 0,
        'mi riposo = je me repose ; qualche volta = parfois.', { kc: ['it.a1.grammar.reflexive_verbs', 'it.a1.function.frequency'], d: -1.7 })
      .dictation('Ti piace cucinare?', 'ti piace + infinitif.', { kc: 'it.a1.grammar.piacere', d: -2.0 })
      .say('D’habitude, je me lève à huit heures.', ['Di solito mi alzo alle otto.', 'Di solito alle otto mi alzo.', 'Io di solito mi alzo alle otto.'],
        'di solito + mi alzo + alle otto.', { kc: ['it.a1.grammar.reflexive_verbs', 'it.a1.function.frequency'], d: -1.8 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_A1: Record<string, string[]> = {
  'it-a1-hello': ['Je peux saluer, me présenter et prendre congé, en tutoyant ou en vouvoyant.', 'Je peux dire ma nationalité et d’où je viens.', 'Je peux prononcer les sons propres à l’italien (ch, gli, gn).'],
  'it-a1-nouns': ['Je peux nommer des objets au singulier et au pluriel.', 'Je peux commander au bar avec un, uno, una, un’.'],
  'it-a1-articles': ['Je peux utiliser le bon article défini devant un nom.', 'Je peux dire ce qu’il y a dans un lieu et demander où se trouve quelque chose.'],
  'it-a1-avere': ['Je peux dire mon âge et parler de ce que j’ai.', 'Je peux décrire une personne ou un objet (couleur, taille, caractère).'],
  'it-a1-present-are': ['Je peux parler de ce que je fais avec les verbes en -are, à la forme affirmative et négative.', 'Je peux poser des questions simples : où, quand, pourquoi, combien.'],
  'it-a1-present-ere-ire': ['Je peux utiliser les verbes en -ere et -ire courants.', 'Je peux dire ce que je veux, peux ou dois faire, et où je vais.'],
  'it-a1-time': ['Je peux compter, donner un numéro et dire l’heure.', 'Je peux parler des jours, des mois et situer un lieu avec a, in, di, da.'],
  'it-a1-daily': ['Je peux décrire ma journée et dire à quelle fréquence je fais les choses.', 'Je peux dire ce que j’aime et ce que je n’aime pas.'],
};
