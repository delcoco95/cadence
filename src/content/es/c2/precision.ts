import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const FFN = 'es.c2.vocabulary.false_friends';
const FFV = 'es.c2.vocabulary.false_friend_verbs';
const PARON = 'es.c2.vocabulary.paronyms';
const HOMO = 'es.c2.grammar.homophones_spelling';

export const precision1: Lesson = {
  id: 'es-c2-precision-1',
  cefr: 'C2',
  unitId: 'es-c2-precision',
  title: 'Faux amis du français',
  subtitle: 'embarazada · constipado · largo · éxito · quitar · contestar',
  kcIds: [FFN, FFV],
  estMinutes: 14,
  explanation: [
    {
      title: 'Noms et adjectifs trompeurs',
      table: [
        ['embarazada', 'enceinte (gêné = avergonzado, apurado)'],
        ['constipado', 'enrhumé (constipé = estreñido)'],
        ['largo', 'long (large = ancho)'],
        ['el éxito', 'le succès (la sortie = la salida)'],
        ['el suceso', 'l’événement, le fait divers (le succès = el éxito)'],
        ['la carpeta', 'la chemise, le classeur (la carpette = la alfombra)'],
        ['el compromiso', 'l’engagement, l’obligation (le compromis = el acuerdo, el término medio)'],
        ['la firma', 'la signature (la firme = la empresa)'],
        ['sensible / sensato', 'sensible / sensé'],
        ['en absoluto', 'pas du tout (dans une réponse)'],
      ],
      tip: '« Estoy muy embarazada » pour dire « je suis très gênée » est le faux ami le plus célèbre… et le plus embarrassant.',
    },
    {
      title: 'Verbes trompeurs',
      table: [
        ['quitar', 'enlever, ôter (quitter = dejar, irse de, marcharse de)'],
        ['contestar', 'répondre (contester = impugnar, rebatir, cuestionar)'],
        ['despedir', 'licencier ; dire au revoir'],
        ['discutir', 'se disputer ; débattre'],
        ['molestar', 'déranger, gêner (molester = maltratar, agredir)'],
        ['pretender', 'avoir l’intention de, viser (prétendre = afirmar, asegurar)'],
        ['presumir', 'se vanter, frimer (présumer = suponer)'],
        ['realizar', 'effectuer (se rendre compte = darse cuenta)'],
        ['tirar', 'jeter ; tirer (de) une porte, une corde'],
      ],
      tip: '« ¿Le molesta que abra la ventana? » = « Cela vous dérange-t-il que j’ouvre la fenêtre ? » : aucune violence là-dedans.',
    },
  ],
  exercises: exercises('es-c2-precision-1', 'C2', { kc: FFN })
    .mcq('«Estoy constipada desde el lunes.» Significa:', ['J’ai un rhume depuis lundi.', 'Je suis constipée depuis lundi.', 'Je suis contrariée depuis lundi.'], 0, 'constipado = enrhumé ; constipé = estreñido.', { d: 2.2 })
    .mcq('«La empresa despidió a cuarenta trabajadores.» Significa que la empresa:', ['licenció a cuarenta empleados', 'organizó una fiesta de despedida', 'contrató a cuarenta personas'], 0, 'despedir = licencier (et dire au revoir).', { kc: FFV, d: 2.3 })
    .cloze('Me sentí muy ___ cuando me di cuenta de que había olvidado su nombre.', ['avergonzado', 'avergonzada', 'apurado', 'apurada', 'incómodo', 'incómoda', 'violento', 'violenta'], 'gêné = avergonzado / apurado ; embarazada = enceinte.', { d: 2.4 })
    .cloze('¿Te importa ___ los zapatos antes de entrar? Acabamos de fregar.', ['quitarte'], 'quitarse = enlever (un vêtement).', { kc: FFV, d: 2.3 })
    .type('« La sortie » du métro : « la ___ del metro »', ['salida'], 'la salida = la sortie ; el éxito = le succès.', { d: 2.2 })
    .type('« Il ne m’a pas répondu » : « No me ha ___. »', ['contestado', 'respondido'], 'contestar = répondre (contester = impugnar).', { kc: FFV, d: 2.3 })
    .order('Cette rue est longue mais très étroite.', 'Esta calle es larga pero muy estrecha.', 'largo = long ; estrecho = étroit ; ancho = large.', { distractors: ['ancha', 'angosta'], d: 2.2 })
    .tr('Le film a été un grand succès.', ['La película fue un gran éxito.', 'La película ha sido un gran éxito.', 'La peli fue un gran éxito.', 'La peli ha sido un gran éxito.', 'La película tuvo un gran éxito.', 'La película ha tenido un gran éxito.'],
      'succès = éxito ; suceso = événement, fait divers.', { d: 2.3 })
    .tr('Il se vante de parler cinq langues.', ['Presume de hablar cinco idiomas.', 'Presume de hablar cinco lenguas.', 'Se jacta de hablar cinco idiomas.', 'Alardea de hablar cinco idiomas.', 'Fanfarronea de hablar cinco idiomas.'],
      'presumir de = se vanter de.', { kc: FFV, d: 2.4 })
    .listen('Mi hermana está embarazada de seis meses y ya ha preparado la habitación del bebé.', '¿Qué sabemos de la hermana?', [
      'Que va a tener un bebé', 'Que está avergonzada', 'Que se ha mudado hace seis meses',
    ], 0, 'embarazada = enceinte.', { d: 2.2 })
    .listen('—¿Pretendes terminar el informe hoy? —Lo pretendo, sí, pero con tantas reuniones lo veo difícil.', '¿Qué significa «pretender» aquí?', [
      'Tener la intención de hacer algo', 'Afirmar algo falso', 'Fingir',
    ], 0, 'pretender = avoir l’intention de.', { kc: FFV, d: 2.4 })
    .dictation('El incendio fue el suceso más comentado de la semana.', 'suceso = événement, fait divers.', { d: 2.3 })
    .repeat('Guarda los contratos en la carpeta azul, por favor.', 'la carpeta = la chemise, le classeur.', { d: 2.2 })
    .say('Excusez-moi, est-ce que ça vous dérange si je fume ?', ['Perdone, ¿le molesta si fumo?', 'Perdone, ¿le molesta que fume?', 'Disculpe, ¿le molesta si fumo?', 'Disculpe, ¿le molesta que fume?', 'Perdone, ¿le importa si fumo?', 'Perdone, ¿le importa que fume?', 'Disculpe, ¿le importa que fume?'],
      'molestar = déranger.', { kc: FFV, d: 2.3 })
    .answer('Explica a un compañero francés tres falsos amigos que le pueden causar problemas en España, con un ejemplo de cada uno.',
      'Cuidado con embarazada, que significa enceinte, no gêné. Constipado quiere decir enrhumé. Y si dices que quitas el trabajo, entenderán que lo eliminas: hay que decir que lo dejas.',
      'Cite des faux amis et leur vrai sens, avec exemple.', {
        kc: [FFN, FFV], keywords: [['embarazada', 'constipado', 'largo', 'éxito', 'suceso', 'carpeta'], ['quitar', 'quitas', 'contestar', 'despedir', 'molestar', 'pretender', 'presumir', 'dejas']], minWords: 22, d: 2.6,
      })
    .build(),
};

export const precision2: Lesson = {
  id: 'es-c2-precision-2',
  cefr: 'C2',
  unitId: 'es-c2-precision',
  title: 'Paronymes et homophones',
  subtitle: 'actitud / aptitud · infligir / infringir · sino / si no · porque / por qué',
  kcIds: [PARON, HOMO],
  estMinutes: 15,
  explanation: [
    {
      title: 'Paronymes : un son proche, un sens éloigné',
      table: [
        ['actitud / aptitud', 'attitude / aptitude'],
        ['infligir / infringir', 'infliger (un castigo) / enfreindre (una norma)'],
        ['prever / proveer', 'prévoir / pourvoir, fournir'],
        ['perjuicio / prejuicio', 'préjudice, tort / préjugé'],
        ['revelar / rebelarse', 'révéler / se rebeller'],
        ['absolver / absorber', 'absoudre, acquitter / absorber'],
        ['eminente / inminente', 'éminent / imminent'],
        ['adoptar / adaptar', 'adopter / adapter'],
      ],
      tip: 'prever se conjugue comme ver : prevé, previó, previendo. *preveyó vient d’une confusion avec proveer (proveyó).',
    },
    {
      title: 'Homophones : l’orthographe fait le sens',
      table: [
        ['porque / por qué / el porqué', 'parce que / pourquoi / la raison'],
        ['sino / si no', 'mais (après négation) / si… ne… pas'],
        ['a ver / haber', 'voyons / avoir (auxiliaire), il y a (infinitif)'],
        ['hay / ahí / ¡ay!', 'il y a / là / aïe !'],
        ['echo / hecho', 'je jette (echar) / fait (hacer)'],
        ['conque / con que / con qué', 'si bien que / avec lequel, pourvu que / avec quoi'],
        ['asimismo / a sí mismo', 'de même / à lui-même'],
      ],
      tip: '« No es rojo sino azul » (opposition) mais « Si no vienes, me enfado » (condition). Test : si l’on peut insérer un mot entre si et no, ce sont deux mots.',
    },
  ],
  exercises: exercises('es-c2-precision-2', 'C2', { kc: PARON })
    .mcq('El árbitro ___ un duro castigo al jugador que había ___ el reglamento.', ['infligió / infringido', 'infringió / infligido', 'infligió / infligido'], 0, 'infligir un castigo ; infringir una norma.', { d: 2.5 })
    .mcq('Elige la frase correcta:', ['No lo hizo por dinero, sino por orgullo.', 'No lo hizo por dinero, si no por orgullo.', 'No lo hizo por dinero, sino que por orgullo.'], 0, 'sino = mais (opposition après négation).', { kc: HOMO, d: 2.3 })
    .mcq('¿Qué palabra está mal empleada en el correo?', [
      'perjuicios (debería ser prejuicios)', 'aptitud', 'prevé',
    ], 0, 'Le contexte (ideas preconcebidas) exige prejuicios = préjugés ; perjuicio = préjudice.', {
      d: 2.8,
      passage: 'Estimada Sra. Llorente: tras la entrevista, el comité ha valorado muy positivamente su aptitud para el puesto. No obstante, algunos miembros han manifestado ciertos perjuicios sobre los candidatos sin experiencia en el sector, ideas preconcebidas que, a mi juicio, no deberían influir en la decisión. El calendario prevé una segunda entrevista la semana próxima. Atentamente, Ramón Ibarra, Grupo Cierzo.',
    })
    .cloze('No sé ___ no me ha llamado; quizá esté enfadada.', ['por qué'], 'Interrogation indirecte : por qué (deux mots, accent).', { kc: HOMO, d: 2.3 })
    .type('Paronyme : « Tiene una gran ___ para la música: aprende cualquier instrumento en semanas. »', ['aptitud', 'facilidad'], 'aptitud = aptitude ; actitud = attitude.', { d: 2.3 })
    .type('« a ver » ou « haber » ? « Vamos ___ qué dicen los resultados. »', ['a ver'], 'a ver = voyons (ir a + ver).', { kc: HOMO, d: 2.3 })
    .order('Si tu ne viens pas, préviens-moi.', 'Si no vienes, avísame.', 'Condition : si no (deux mots).', { distractors: ['sino', 'avisa'], kc: HOMO, d: 2.2 })
    .tr('Le juge a acquitté l’accusé.', ['El juez absolvió al acusado.', 'El juez ha absuelto al acusado.', 'La jueza absolvió al acusado.', 'La jueza ha absuelto al acusado.', 'El juez absolvió a la acusada.', 'El juez ha absuelto a la acusada.'],
      'absolver = acquitter (absuelto) ; absorber = absorber.', { d: 2.5 })
    .tr('Je ne comprends pas la raison de sa démission.', ['No entiendo el porqué de su dimisión.', 'No comprendo el porqué de su dimisión.', 'No entiendo el motivo de su dimisión.', 'No entiendo la razón de su dimisión.', 'No entiendo por qué ha dimitido.', 'No entiendo por qué dimitió.'],
      'el porqué (nom, un seul mot, accent) = la raison.', { kc: HOMO, d: 2.5 })
    .listen('La llegada de la tormenta es inminente: se recomienda no salir de casa durante las próximas horas.', '¿Cuándo llegará la tormenta?', [
      'Muy pronto', 'Dentro de unos días', 'Ya ha pasado',
    ], 0, 'inminente = imminent ; eminente = éminent.', { d: 2.3 })
    .listen('El joven se rebeló contra su familia y, años después, reveló en un libro los secretos del negocio familiar.', '¿Qué hizo el joven años después?', [
      'Contó secretos en un libro', 'Volvió con su familia', 'Se rebeló contra su editorial',
    ], 0, 'rebelarse = se rebeller ; revelar = révéler.', { d: 2.5 })
    .dictation('Hay que adaptar el texto, no adoptarlo sin más.', 'adaptar (adapter) / adoptar (adopter).', { d: 2.4 })
    .repeat('No es rojo, sino granate.', 'sino : opposition après négation.', { kc: HOMO, d: 2.2 })
    .say('Ce n’est pas un préjugé, c’est un fait.', ['No es un prejuicio, es un hecho.', 'No es un prejuicio, sino un hecho.', 'No se trata de un prejuicio, sino de un hecho.'],
      'prejuicio = préjugé ; hecho (hacer) = fait.', { d: 2.4 })
    .answer('Escribe dos o tres frases que contengan al menos dos de estos pares: sino / si no, porque / por qué, actitud / aptitud.',
      'No vino por pereza, sino porque estaba enfermo. Si no mejora, tendrá que ir al médico. Me pregunto por qué nadie lo llamó: no fue una actitud muy solidaria.',
      'Emploie correctement les paronymes et homophones.', {
        kc: [PARON, HOMO], keywords: [['sino', 'si no'], ['porque', 'por qué', 'porqué', 'actitud', 'aptitud']], minWords: 20, d: 2.6,
      })
    .build(),
};
