import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('es');

/**
 * Défis de fin d'unité A1 : items d'ÉVALUATION inédits (jamais repris des leçons).
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_A1: Record<string, Exercise[]> = {
  'es-a1-hello': assessment(
    exercises('cp-es-a1-hello', 'A1', { kc: 'es.a1.grammar.ser_present' })
      .mcq('Il est 16 h. Tu arrives chez des amis. Tu dis :', ['¡Buenas tardes!', '¡Buenos días!', '¡Buenas noches!'], 0,
        'L’après-midi : buenas tardes.', { kc: 'es.a1.function.greetings', d: -2.4 })
      .cloze('Vosotros ___ de Granada, ¿verdad?', ['sois'], 'vosotros → sois.', { hint: 'ser', d: -1.9 })
      .mcq('Quel mot se prononce avec la jota (son raclé) ?', ['gimnasio', 'gato', 'llave'], 0,
        'g devant i → jota : gimnasio.', { kc: 'es.a1.pronunciation.sounds', d: -2.0 })
      .tr('Il est serveur et il est italien.', ['Es camarero y es italiano.', 'Él es camarero y es italiano.', 'Es camarero y italiano.', 'Él es camarero y italiano.'],
        'Profession sans article : es camarero.', { d: -1.9 })
      .listen('Hola, soy Diego. Soy mexicano, pero vivo en Barcelona.', 'De quel pays est Diego ?', ['Du Mexique', 'D’Espagne', 'D’Argentine'], 0,
        'Soy mexicano = je suis mexicain.', { d: -2.0 })
      .type('Quel pronom utilises-tu pour vouvoyer une seule personne ?', ['usted'], 'usted, conjugué comme él.', { kc: 'es.a1.grammar.subject_pronouns', d: -2.0 })
      .say('Enchanté, je m’appelle Paul.', ['Encantado, me llamo Paul.', 'Mucho gusto, me llamo Paul.', 'Encantado, soy Paul.', 'Mucho gusto, soy Paul.'],
        'Un homme dit encantado ; me llamo… ou soy…', { kc: 'es.a1.function.greetings', d: -2.1 })
      .build(),
  ),
  'es-a1-nouns': assessment(
    exercises('cp-es-a1-nouns', 'A1', { kc: 'es.a1.grammar.indefinite_articles' })
      .mcq('Complète : ___ idioma', ['un', 'una'], 0, 'idioma est masculin malgré le -a : un idioma.', { kc: 'es.a1.grammar.noun_gender', d: -1.8 })
      .cloze('Necesito ___ moto nueva.', ['una'], 'moto (motocicleta) est féminin : una moto.', { kc: 'es.a1.grammar.noun_gender', d: -1.9 })
      .type('Écris le pluriel de « flor ».', ['flores'], 'Consonne → + es.', { kc: 'es.a1.grammar.plural', d: -2.0 })
      .mcq('« un autre verre »', ['otro vaso', 'un otro vaso', 'una otra vaso'], 0, 'otro, sans article.', { d: -1.8 })
      .tr('des pommes et un melon', ['unas manzanas y un melón', 'manzanas y un melón'], 'manzana est féminin → unas.', { kc: ['es.a1.grammar.indefinite_articles', 'es.a1.grammar.plural'], d: -1.9 })
      .listen('Para mí, dos cafés y una botella de agua.', 'Qu’est-ce qu’il commande ?', ['Deux cafés et une bouteille d’eau', 'Un café et deux bouteilles d’eau', 'Deux thés et une eau'], 0,
        'dos cafés y una botella de agua.', { kc: 'es.a1.grammar.plural', d: -1.9 })
      .say('une ville et des villages', ['una ciudad y unos pueblos', 'una ciudad y pueblos'], 'ciudad est féminin, pueblo masculin.', { kc: ['es.a1.grammar.noun_gender', 'es.a1.grammar.plural'], d: -1.7 })
      .build(),
  ),
  'es-a1-articles': assessment(
    exercises('cp-es-a1-articles', 'A1', { kc: 'es.a1.grammar.definite_articles' })
      .mcq('Complète : ___ ciudades', ['las', 'los'], 0, 'ciudad est féminin → las ciudades.', { d: -2.0 })
      .cloze('Vamos ___ parque esta tarde.', ['al'], 'a + el = al.', { kc: 'es.a1.grammar.al_del', d: -1.9 })
      .mcq('Choisis la phrase correcte.', ['¿Dónde está el supermercado?', '¿Dónde hay el supermercado?', '¿Dónde es el supermercado?'], 0,
        'Lieu précis → está.', { kc: 'es.a1.grammar.estar_location', d: -1.8 })
      .cloze('En mi barrio ___ dos parques.', ['hay'], 'Existence, sans article défini → hay.', { kc: 'es.a1.grammar.hay', d: -1.9 })
      .tr('Le cinéma est en face de la gare.', ['El cine está enfrente de la estación.', 'El cine está delante de la estación.'], 'Lieu précis → está ; enfrente de = en face de.', { kc: 'es.a1.grammar.estar_location', d: -1.7 })
      .listen('¿Hay un restaurante por aquí? — Sí, hay uno al lado del banco.', 'Où est le restaurant ?', ['À côté de la banque', 'En face de la banque', 'Loin d’ici'], 0,
        'al lado del banco = à côté de la banque.', { kc: ['es.a1.grammar.hay', 'es.a1.grammar.al_del'], d: -1.7 })
      .say('Il y a une pharmacie près d’ici ?', ['¿Hay una farmacia cerca de aquí?', '¿Hay una farmacia cerca?', '¿Hay una farmacia por aquí?'], 'Quelque chose d’indéfini → hay una…', { kc: 'es.a1.grammar.hay', d: -1.8 })
      .build(),
  ),
  'es-a1-tener': assessment(
    exercises('cp-es-a1-tener', 'A1', { kc: 'es.a1.verbs.tener' })
      .cloze('Mis primos ___ un perro enorme.', ['tienen'], 'ellos → tienen.', { hint: 'tener', d: -1.9 })
      .mcq('« Elle est pressée. »', ['Tiene prisa.', 'Es prisa.', 'Está prisa.'], 0, 'être pressé = tener prisa.', { kc: 'es.a1.function.tener_expressions', d: -1.8 })
      .mcq('Unas camisetas ___', ['blancas', 'blancos', 'blanca'], 0, 'camisetas : féminin pluriel → blancas.', { kc: 'es.a1.grammar.adjective_agreement', d: -2.0 })
      .cloze('Hay ___ gente en la playa.', ['mucha'], 'gente est un nom féminin singulier → mucha gente.', { kc: 'es.a1.grammar.muy_mucho', d: -1.6 })
      .tr('Mon frère a trente ans.', ['Mi hermano tiene treinta años.', 'Mi hermano tiene 30 años.'], 'L’âge → tener … años.', { kc: 'es.a1.function.tener_expressions', d: -1.8 })
      .listen('Tengo dos hijas. Son rubias y tienen los ojos azules.', 'Comment sont ses filles ?', ['Blondes aux yeux bleus', 'Brunes aux yeux verts', 'Blondes aux yeux marron'], 0,
        'rubias = blondes ; los ojos azules = les yeux bleus.', { kc: 'es.a1.grammar.adjective_agreement', d: -1.7 })
      .say('Tu as froid ?', ['¿Tienes frío?', '¿Tú tienes frío?'], 'avoir froid = tener frío.', { kc: 'es.a1.function.tener_expressions', d: -2.0 })
      .build(),
  ),
  'es-a1-present-ar': assessment(
    exercises('cp-es-a1-present-ar', 'A1', { kc: 'es.a1.verbs.present_ar' })
      .cloze('¿Vosotros ___ la cena esta noche?', ['preparáis'], 'vosotros → -áis.', { hint: 'preparar', d: -1.7 })
      .mcq('Mis padres ___ en una oficina.', ['trabajan', 'trabajamos', 'trabaja'], 0, 'ellos → trabajan.', { d: -2.0 })
      .mcq('¿___ vive tu hermano? — En Bilbao.', ['Dónde', 'Cuándo', 'Quién'], 0, 'Lieu → dónde.', { kc: 'es.a1.grammar.question_words', d: -2.0 })
      .order('Nous n’achetons pas de pain ici.', 'No compramos pan aquí.', 'no + verbe ; pan sans article.', { kc: 'es.a1.grammar.negation', distractors: ['nada'], d: -1.8 })
      .tr('Pourquoi tu étudies le japonais ?', ['¿Por qué estudias japonés?', '¿Por qué estudias tú japonés?', '¿Tú por qué estudias japonés?'], 'por qué en deux mots, avec accent.', { kc: 'es.a1.grammar.question_words', d: -1.7 })
      .listen('¿Tomas el autobús para ir al trabajo? — No, no tomo el autobús, voy andando.', 'Comment va-t-il au travail ?', ['À pied', 'En bus', 'En voiture'], 0,
        'voy andando = j’y vais à pied.', { kc: 'es.a1.grammar.negation', d: -1.7 })
      .say('Vous parlez espagnol ? (à des amis)', ['¿Habláis español?', '¿Vosotros habláis español?', '¿Habláis castellano?'], 'vosotros → habláis.', { kc: 'es.a1.grammar.questions', d: -1.8 })
      .build(),
  ),
  'es-a1-present-er-ir': assessment(
    exercises('cp-es-a1-present-er-ir', 'A1', { kc: 'es.a1.verbs.present_er_ir' })
      .cloze('Mis abuelos ___ en un pueblo pequeño.', ['viven'], 'ellos → viven.', { hint: 'vivir', d: -2.0 })
      .mcq('Nosotros ___ el desayuno en casa.', ['tomamos', 'tomemos', 'tomáis'], 0, 'nosotros → tomamos.', { kc: 'es.a1.verbs.present_ar', d: -2.0 })
      .mcq('¿___ cerrar la puerta, por favor?', ['Puedes', 'Podes', 'Pudes'], 0, 'poder, tú → puedes (o → ue).', { kc: 'es.a1.verbs.stem_change', d: -1.8 })
      .cloze('Los sábados ___ deporte con mis amigos.', ['hago'], 'hacer, yo → hago.', { kc: 'es.a1.verbs.ir_hacer', hint: 'hacer, yo', d: -1.8 })
      .tr('Nous allons au cinéma ce soir.', ['Vamos al cine esta noche.', 'Esta noche vamos al cine.', 'Nosotros vamos al cine esta noche.'], 'ir, nosotros → vamos ; a + el → al.', { kc: 'es.a1.verbs.ir_hacer', d: -1.8 })
      .listen('Empiezo a trabajar a las nueve y vuelvo a casa a las seis.', 'À quelle heure rentre-t-elle ?', ['À six heures', 'À neuf heures', 'À sept heures'], 0,
        'vuelvo a casa a las seis = je rentre à six heures.', { kc: 'es.a1.verbs.stem_change', d: -1.7 })
      .say('Je ne veux pas sortir aujourd’hui.', ['No quiero salir hoy.', 'Hoy no quiero salir.'], 'querer → quiero ; no avant le verbe.', { kc: 'es.a1.verbs.stem_change', d: -1.7 })
      .build(),
  ),
  'es-a1-time': assessment(
    exercises('cp-es-a1-time', 'A1', { kc: 'es.a1.function.telling_time' })
      .mcq('Comment dit-on 90 ?', ['noventa', 'nueve diez', 'novecientos'], 0, '90 = noventa.', { kc: 'es.a1.vocabulary.numbers', d: -2.0 })
      .mcq('8 h 50 :', ['Son las nueve menos diez.', 'Son las ocho menos diez.', 'Es la nueve menos diez.'], 0,
        'Après la demie, on part de l’heure suivante.', { d: -1.7 })
      .cloze('Vamos a Italia ___ octubre.', ['en'], 'Mois → en.', { kc: 'es.a1.grammar.prepositions_time', d: -1.8 })
      .type('Écris « jeudi » en espagnol.', ['jueves'], 'jueves = jeudi.', { kc: 'es.a1.vocabulary.days_months', d: -2.0 })
      .tr('Le dimanche, je dors beaucoup.', ['Los domingos duermo mucho.', 'Duermo mucho los domingos.', 'Los domingos yo duermo mucho.'], 'Chaque dimanche → los domingos.', { kc: 'es.a1.grammar.prepositions_time', d: -1.7 })
      .listen('La reunión es el jueves a las cuatro y media.', 'Quand a lieu la réunion ?', ['Jeudi à 16 h 30', 'Mardi à 16 h 30', 'Jeudi à 14 h 30'], 0,
        'el jueves a las cuatro y media.', { kc: ['es.a1.vocabulary.days_months', 'es.a1.function.telling_time'], d: -1.7 })
      .say('Il est midi et demie.', ['Son las doce y media.'], '12 h 30 = las doce y media.', { d: -1.8 })
      .build(),
  ),
  'es-a1-daily': assessment(
    exercises('cp-es-a1-daily', 'A1', { kc: 'es.a1.verbs.reflexive' })
      .cloze('¿Cómo ___ llamáis vosotros?', ['os'], 'vosotros → os llamáis.', { d: -1.8 })
      .mcq('A mis padres ___ los perros.', ['les gustan', 'le gusta', 'les gusta'], 0, 'a mis padres → les ; los perros (pluriel) → gustan.', { kc: 'es.a1.grammar.gustar', d: -1.6 })
      .mcq('« Me gusta el teatro. » — « Moi aussi. »', ['A mí también.', 'A mí tampoco.', 'Yo también gusto.'], 0,
        'Après une affirmation → a mí también.', { kc: 'es.a1.function.agree_disagree', d: -1.8 })
      .order('Je ne me couche jamais avant minuit.', 'Nunca me acuesto antes de las doce.', 'nunca + pronom + verbe.', { kc: ['es.a1.function.frequency', 'es.a1.verbs.reflexive'], distractors: ['no'], d: -1.6 })
      .tr('Nous aimons beaucoup danser.', ['Nos gusta mucho bailar.', 'A nosotros nos gusta mucho bailar.', 'Nos encanta bailar.'], 'nos gusta + infinitif.', { kc: 'es.a1.grammar.gustar', d: -1.7 })
      .listen('Me despierto a las siete, pero me levanto a las siete y media.', 'À quelle heure se lève-t-il ?', ['7 h 30', '7 h', '6 h 30'], 0,
        'me levanto a las siete y media = je me lève à 7 h 30.', { d: -1.7 })
      .say('Je me douche le soir.', ['Me ducho por la noche.', 'Por la noche me ducho.', 'Yo me ducho por la noche.'], 'ducharse → me ducho ; le soir → por la noche.', { d: -1.8 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_A1: Record<string, string[]> = {
  'es-a1-hello': ['Je peux saluer, prendre congé et me présenter.', 'Je peux dire d’où je viens et ce que je fais.', 'Je peux prononcer les sons propres à l’espagnol (jota, ñ, ll, r roulé).'],
  'es-a1-nouns': ['Je peux nommer des objets avec un, una, unos, unas.', 'Je peux mettre un nom au pluriel.'],
  'es-a1-articles': ['Je peux dire ce qu’il y a dans un quartier avec hay.', 'Je peux demander et dire où se trouve un lieu.'],
  'es-a1-tener': ['Je peux dire mon âge et parler de ma famille.', 'Je peux décrire une personne ou un objet (taille, couleur).', 'Je peux dire si j’ai faim, soif, froid ou chaud.'],
  'es-a1-present-ar': ['Je peux parler de mes activités au présent.', 'Je peux poser des questions simples (où, quand, comment, pourquoi).'],
  'es-a1-present-er-ir': ['Je peux dire où j’habite, ce que je mange et ce que je bois.', 'Je peux dire ce que je veux, ce que je peux faire et où je vais.'],
  'es-a1-time': ['Je peux compter jusqu’à cent et comprendre un prix.', 'Je peux demander et dire l’heure, une date, un horaire.'],
  'es-a1-daily': ['Je peux décrire ma journée et dire à quelle fréquence je fais les choses.', 'Je peux dire ce que j’aime et réagir aux goûts des autres.'],
};
