import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const HEAD = 'es.c2.reading.headlines';
const RUMOR = 'es.c2.grammar.rumor_conditional';
const NOMINAL = 'es.c2.writing.nominal_style';
const VERBS = 'es.c2.vocabulary.reporting_verbs';

export const periodistico1: Lesson = {
  id: 'es-c2-periodistico-1',
  cefr: 'C2',
  unitId: 'es-c2-periodistico',
  title: 'Lire les titres',
  subtitle: 'Dimite el consejero · Detenido un hombre · habría firmado · presunto',
  kcIds: [HEAD, RUMOR],
  estMinutes: 14,
  explanation: [
    {
      title: 'La grammaire des titres',
      body: 'Les titres espagnols économisent les mots : présent pour un fait passé, participe sans auxiliaire, verbe en tête, articles supprimés, deux-points pour introduire le thème.',
      table: [
        ['Dimite la consejera de Sanidad', 'La ministre régionale de la Santé démissionne (verbe en tête, présent)'],
        ['Detenido un hombre por robar en una joyería', 'Un homme arrêté pour… (participe sans auxiliaire)'],
        ['El Gobierno aprueba la subida del salario mínimo', 'Présent historique pour une décision passée'],
        ['Vivienda: los alquileres suben un 9 %', 'Thème : information'],
        ['La Junta destinará diez millones a…', 'Futur pour une mesure annoncée'],
      ],
      tip: 'Dans un titre, le présent ne signifie pas « maintenant » : « Muere el actor… » rapporte un décès déjà survenu.',
    },
    {
      title: 'Le conditionnel de rumeur et la prudence journalistique',
      body: 'Pour une information non confirmée, la presse emploie le conditionnel, comme le français (« le joueur aurait signé »). Les normes recommandent de l’éviter, mais il est très fréquent. On protège aussi la présomption d’innocence avec presunto, supuestamente, según fuentes…',
      table: [
        ['El delantero habría firmado por tres temporadas.', 'L’attaquant aurait signé pour trois saisons.'],
        ['el presunto autor de los hechos', 'l’auteur présumé des faits'],
        ['según fuentes cercanas a la investigación', 'selon des sources proches de l’enquête'],
        ['supuestamente / al parecer', 'prétendument / apparemment'],
      ],
      tip: 'presunto = présumé (juridique) ; « présomptueux » se dit presuntuoso.',
    },
  ],
  exercises: exercises('es-c2-periodistico-1', 'C2', { kc: HEAD })
    .mcq('«Muere a los 90 años la pintora Rosa Alcañiz». ¿Qué informa este titular?', ['Que la pintora ya ha muerto', 'Que la pintora se está muriendo en este momento', 'Que la pintora morirá pronto'], 0, 'Présent journalistique pour un fait accompli.', { d: 2.2 })
    .mcq('«El club habría ofrecido veinte millones por el jugador.» El periodista:', ['presenta la información como no confirmada', 'afirma un hecho comprobado', 'expresa un deseo'], 0, 'Conditionnel de rumeur = information non vérifiée.', { kc: RUMOR, d: 2.3 })
    .cloze('___ un hombre por robar cobre en las vías del tren.', ['Detenido', 'Arrestado'], 'Titre avec participe sans auxiliaire, accordé au sujet.', { d: 2.3 })
    .cloze('El ___ autor del atraco fue detenido anoche en Valdeolmos.', ['presunto', 'supuesto'], 'presunto = présumé (présomption d’innocence).', { kc: RUMOR, d: 2.3 })
    .type('Réécris en titre (verbe en tête, présent) : « El alcalde de Puertollano del Río ha dimitido. » → « ___ el alcalde de Puertollano del Río »', ['Dimite'], 'Verbe intransitif en tête, au présent : Dimite el alcalde…', { d: 2.4 })
    .type('Conditionnel de rumeur : « Según fuentes policiales, los ladrones ___ (huir) por el tejado. »', ['habrían huido', 'huirían'], 'Rumeur sur un fait passé : conditionnel passé (habrían huido).', { kc: RUMOR, d: 2.5 })
    .order('Le gouvernement approuve la hausse du salaire minimum.', 'El Gobierno aprueba la subida del salario mínimo.', 'Présent journalistique ; la subida = la hausse.', { distractors: ['aprobó', 'el aumento'], d: 2.2 })
    .tr('Selon des sources proches de l’enquête, le suspect aurait avoué.', [
      ...alt(['Según fuentes cercanas a la investigación, ', 'Según fuentes próximas a la investigación, '], ['el sospechoso habría confesado.', 'el presunto autor habría confesado.', 'el sospechoso lo habría confesado todo.']),
    ], 'Conditionnel de rumeur (habría confesado) ; fuentes cercanas.', { kc: RUMOR, d: 2.5 })
    .tr('Logement : les loyers augmentent de 9 %.', ['Vivienda: los alquileres suben un 9 %.', 'Vivienda: los alquileres suben un 9 por ciento.', 'Vivienda: los alquileres aumentan un 9 %.', 'Vivienda: los alquileres aumentan un 9 por ciento.', 'Vivienda: suben los alquileres un 9 %.', 'Vivienda: los alquileres se encarecen un 9 %.'],
      'Pourcentage précédé de « un » : suben un 9 %.', { d: 2.4 })
    .listen('Última hora: según informa la Agencia Meridiana, el ministro de Industria habría presentado su dimisión esta mañana, aunque fuentes del ministerio no lo confirman.', '¿Ha dimitido el ministro?', [
      'No se sabe: la noticia no está confirmada', 'Sí, el ministerio lo ha confirmado', 'No, lo ha desmentido públicamente',
    ], 0, 'habría presentado + no lo confirman : rumeur.', { kc: RUMOR, d: 2.5 })
    .listen('Titulares de la mañana: hallado sin vida un excursionista desaparecido en la sierra; la Junta destinará diez millones a la sequía, y el Real Albolote asciende a Primera.', '¿Cuál de estas noticias se refiere a una decisión futura?', [
      'La de los diez millones para la sequía', 'La del excursionista', 'La del ascenso del equipo',
    ], 0, 'destinará : futur pour une mesure annoncée ; hallado, asciende : faits accomplis.', { d: 2.4 })
    .dictation('Detenido en Valdeolmos el presunto autor de una estafa millonaria.', 'Participe sans auxiliaire ; presunto.', { d: 2.4 })
    .repeat('Dimite la consejera de Sanidad tras la polémica por las listas de espera.', 'Verbe en tête ; tras = après.', { d: 2.3 })
    .say('L’attaquant aurait signé pour trois saisons.', ['El delantero habría firmado por tres temporadas.', 'El delantero habría fichado por tres temporadas.', 'El atacante habría firmado por tres temporadas.'],
      'Conditionnel de rumeur : habría firmado.', { kc: RUMOR, d: 2.4 })
    .answer('Inventa dos titulares de prensa sobre tu ciudad y explica, en una frase, qué ha pasado.',
      'Titulares: «Cierra el último cine del centro» y «Detenidos dos jóvenes por pintadas en la catedral». Es decir, el cine ha cerrado y la policía ha arrestado a dos chicos.',
      'Titres : verbe en tête au présent, participe sans auxiliaire ; puis explication au passé composé.', {
        kc: [HEAD, RUMOR], keywords: [['titular', 'titulares', 'titulo'], ['detenido', 'detenidos', 'detenida', 'cierra', 'dimite', 'muere', 'aprueba', 'sube', 'suben', 'hallado']], minWords: 20, d: 2.6,
      })
    .build(),
};

export const periodistico2: Lesson = {
  id: 'es-c2-periodistico-2',
  cefr: 'C2',
  unitId: 'es-c2-periodistico',
  title: 'Style nominal et verbes de parole',
  subtitle: 'tras la aprobación de · llevar a cabo · matizar, desmentir, advertir',
  kcIds: [NOMINAL, VERBS],
  estMinutes: 15,
  explanation: [
    {
      title: 'Nominaliser',
      body: 'La presse et les communiqués transforment les verbes en noms pour condenser l’information. Prépositions clés : tras, ante, pese a, de cara a.',
      table: [
        ['Después de que se aprobara la ley…', 'Tras la aprobación de la ley…'],
        ['Porque los precios han subido…', 'Ante la subida de los precios…'],
        ['Aunque llovió…', 'Pese a la lluvia…'],
        ['investigar → llevar a cabo una investigación', 'mener une enquête'],
        ['detener → proceder a la detención', 'procéder à l’arrestation'],
      ],
      tip: 'Le style nominal est dense mais peut devenir lourd : proceder a la detención de est typique des communiqués de police ; dans un article soigné, detener suffit.',
    },
    {
      title: 'Les verbes introducteurs : nuance et position',
      body: 'Le choix du verbe trahit l’attitude du journaliste. « dijo » est neutre ; les autres orientent.',
      table: [
        ['afirmar, asegurar, sostener', 'affirmer, assurer, soutenir'],
        ['señalar, apuntar, indicar', 'signaler, indiquer'],
        ['matizar, puntualizar', 'nuancer, préciser'],
        ['reconocer, admitir', 'reconnaître, admettre (concession)'],
        ['desmentir, negar', 'démentir, nier'],
        ['advertir, alertar de', 'avertir, mettre en garde'],
        ['denunciar, criticar', 'dénoncer, critiquer'],
        ['avanzar, adelantar', 'annoncer en avant-première'],
      ],
      tip: 'advertir signifie « avertir » mais aussi « remarquer » (advertí que…) ; avisar = prévenir, informer.',
    },
  ],
  exercises: exercises('es-c2-periodistico-2', 'C2', { kc: NOMINAL })
    .mcq('Version nominale de « Después de que se firmara el acuerdo, la bolsa subió » :', ['Tras la firma del acuerdo, la bolsa subió.', 'Tras firmar el acuerdo, la bolsa subió.', 'Tras haberse firmado, subió la bolsa del acuerdo.'], 0, 'tras + nom : tras la firma del acuerdo.', { d: 2.3 })
    .mcq('¿Qué verbo introduce mejor una rectificación parcial de lo dicho antes?', ['matizar', 'desmentir', 'avanzar'], 0, 'matizar = nuancer, préciser sans contredire totalement.', { kc: VERBS, d: 2.4 })
    .mcq('Según el texto, ¿qué ha hecho la empresa?', [
      'Negar que vaya a cerrar la planta, aunque admite recortes', 'Anunciar el cierre de la planta', 'Despedir a doscientos trabajadores',
    ], 0, 'desmintió el cierre ; reconoció una reducción de turnos.', {
      kc: VERBS, d: 2.7,
      passage: 'La dirección de Textiles Arcoíris desmintió ayer el cierre de su planta de Villaseca, tras los rumores difundidos durante el fin de semana. No obstante, la portavoz de la compañía reconoció que se estudia una reducción de turnos ante la caída de los pedidos y matizó que «no está prevista ninguna medida traumática». Los sindicatos, por su parte, advirtieron de que se movilizarán si se produce un solo despido.',
    })
    .cloze('Pese ___ las protestas vecinales, el ayuntamiento mantendrá las obras.', ['a'], 'pese a + nom = malgré.', { d: 2.2 })
    .type('Nominalise : « La policía ha investigado el caso » → « La policía ha llevado a ___ una investigación. »', ['cabo'], 'llevar a cabo = réaliser, mener.', { d: 2.3 })
    .type('Verbe de parole : « El ministro ___ los rumores de dimisión: “No pienso irme”. »', ['desmintió', 'negó', 'ha desmentido', 'ha negado'], 'desmentir = démentir (desmintió, irrégulier e > i).', { kc: VERBS, d: 2.4 })
    .order('Face à la hausse des prix, le gouvernement prépare de nouvelles aides.', 'Ante la subida de los precios, el Gobierno prepara nuevas ayudas.', 'ante + nom = face à.', { distractors: ['delante', 'subir'], d: 2.3 })
    .tr('Les syndicats ont mis en garde contre une grève générale.', [
      ...alt(['Los sindicatos '], ['han advertido de ', 'advirtieron de ', 'han alertado de ', 'alertaron de ', 'han advertido sobre ', 'advirtieron sobre '], ['una huelga general.']),
    ], 'advertir de / alertar de + nom.', { kc: VERBS, d: 2.5 })
    .tr('Après l’approbation du budget, les travaux commenceront en mars.', [
      ...alt(['Tras la aprobación del presupuesto, ', 'Después de la aprobación del presupuesto, ', 'Una vez aprobado el presupuesto, '], ['las obras comenzarán en marzo.', 'las obras empezarán en marzo.']),
    ], 'tras la aprobación de… : style nominal.', { d: 2.4 })
    .listen('La portavoz reconoció que hubo errores en la gestión de la crisis, aunque matizó que la mayoría de las decisiones se tomaron con la información disponible.', '¿Qué actitud adopta la portavoz?', [
      'Admite fallos pero los relativiza', 'Niega cualquier error', 'Culpa a la prensa',
    ], 0, 'reconocer = admettre ; matizar = nuancer.', { kc: VERBS, d: 2.5 })
    .listen('Los agentes procedieron a la detención del conductor tras comprobar que triplicaba la tasa de alcoholemia permitida.', '¿Qué hicieron los agentes?', [
      'Detuvieron al conductor', 'Le pusieron una multa leve', 'Le dejaron marchar',
    ], 0, 'proceder a la detención = arrêter (style de communiqué).', { d: 2.4 })
    .dictation('La oposición denunció la falta de transparencia en la adjudicación del contrato.', 'denunciar = dénoncer ; la adjudicación = l’attribution (d’un marché).', { kc: VERBS, d: 2.5 })
    .repeat('Tras la firma del acuerdo, la bolsa cerró con fuertes subidas.', 'tras + nom ; fuertes subidas = fortes hausses.', { d: 2.3 })
    .say('Malgré la pluie, des milliers de personnes ont manifesté.', [
      ...alt(['Pese a la lluvia, ', 'A pesar de la lluvia, '], ['miles de personas se manifestaron.', 'miles de personas han salido a la calle.', 'miles de personas salieron a la calle.', 'miles de personas se han manifestado.']),
    ], 'pese a / a pesar de + nom.', { d: 2.3 })
    .answer('Resume en estilo periodístico una noticia reciente de tu entorno, usando al menos un sustantivo en lugar de un verbo y un verbo introductor preciso.',
      'Tras la apertura de la nueva biblioteca municipal, la concejala de Cultura aseguró que el horario se ampliará en verano, aunque reconoció que todavía faltan bibliotecarios.',
      'Nominalisation (tras la apertura) + verbes introducteurs nuancés (aseguró, reconoció).', {
        kc: [NOMINAL, VERBS], keywords: [['tras', 'ante', 'pese a', 'de cara a'], ['aseguró', 'afirmó', 'señaló', 'reconoció', 'admitió', 'advirtió', 'matizó', 'desmintió', 'denunció', 'anunció']], minWords: 20, d: 2.7,
      })
    .build(),
};
