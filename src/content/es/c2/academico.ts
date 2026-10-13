import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const IMPERS = 'es.c2.writing.academic_impersonal';
const CONNECT = 'es.c2.function.academic_connectors';
const CITE = 'es.c2.writing.citing_concluding';
const DEQUE = 'es.c2.grammar.dequeismo';

export const academico1: Lesson = {
  id: 'es-c2-academico-1',
  cefr: 'C2',
  unitId: 'es-c2-academico',
  title: 'L’écrit académique',
  subtitle: 'se observa · consideramos · cabe señalar · habida cuenta de · en aras de',
  kcIds: [IMPERS, CONNECT],
  estMinutes: 15,
  explanation: [
    {
      title: 'Effacer le « je »',
      body: 'Le texte académique espagnol privilégie le se impersonnel ou passif, le pluriel de modestie (nosotros) et les tournures impersonnelles (cabe, conviene, es preciso + infinitif).',
      table: [
        ['Se observa un descenso de la natalidad.', 'On observe une baisse de la natalité.'],
        ['Se han analizado doscientas encuestas.', 'Deux cents questionnaires ont été analysés (passive réfléchie, accord).'],
        ['En este trabajo pretendemos demostrar…', 'Dans ce travail, nous entendons démontrer…'],
        ['Cabe señalar que… / Conviene subrayar que…', 'Il convient de signaler que… / de souligner que…'],
        ['Es preciso matizar esta afirmación.', 'Il faut nuancer cette affirmation.'],
      ],
      tip: 'Passive réfléchie : le verbe s’accorde avec le nom (se analizaron los datos). Avec une personne précédée de a, il reste au singulier (se entrevistó a los participantes).',
    },
    {
      title: 'Les connecteurs soutenus',
      table: [
        ['habida cuenta de (que)', 'compte tenu de (ce que)'],
        ['en aras de', 'au nom de, dans l’intérêt de (en aras de la claridad)'],
        ['a la luz de', 'à la lumière de'],
        ['a tenor de', 'au vu de, d’après'],
        ['en lo que respecta a / en lo tocante a', 'en ce qui concerne'],
        ['con vistas a', 'en vue de'],
        ['en virtud de', 'en vertu de'],
      ],
      tip: '« en aras de » ne s’emploie qu’avec un nom abstrait positif (la paz, la eficacia, la claridad) : *en aras de terminar est incorrect.',
    },
  ],
  exercises: exercises('es-c2-academico-1', 'C2', { kc: IMPERS })
    .mcq('Choisis la forme correcte : « En el estudio ___ los datos de 2024. »', ['se analizaron', 'se analizó', 'analizaron se'], 0, 'Passive réfléchie : le verbe s’accorde avec los datos.', { d: 2.3 })
    .mcq('___ los resultados obtenidos, cabe concluir que la hipótesis era correcta.', ['A la luz de', 'En aras de', 'Con vistas a'], 0, 'a la luz de = à la lumière de (s’appuyer sur des données).', { kc: CONNECT, d: 2.4 })
    .cloze('En aras de la ___, hemos simplificado la terminología.', ['claridad', 'brevedad', 'precisión', 'concisión'], 'en aras de + nom abstrait : la claridad.', { kc: CONNECT, d: 2.4 })
    .cloze('___ señalar que la muestra es reducida y los resultados deben tomarse con cautela.', ['Cabe', 'Conviene', 'Hay que', 'Es preciso'], 'cabe + infinitif = il convient de, il y a lieu de.', { d: 2.3 })
    .type('Passive réfléchie avec complément de personne : « ___ (entrevistar, passé simple) a cincuenta docentes. »', ['Se entrevistó'], 'se + verbe au singulier devant a + personnes.', { d: 2.6 })
    .type('Connecteur : « ___ cuenta de que los datos son parciales, conviene ser prudentes. »', ['Habida'], 'habida cuenta de que = compte tenu de ce que.', { kc: CONNECT, d: 2.5 })
    .order('Il faut nuancer cette affirmation.', 'Es preciso matizar esta afirmación.', 'es preciso + infinitif : tournure impersonnelle.', { distractors: ['necesita', 'esa'], d: 2.2 })
    .tr('Dans ce travail, nous entendons démontrer que l’hypothèse initiale était erronée.', [
      ...alt(['En este trabajo ', 'En el presente trabajo ', 'En este estudio '], ['pretendemos demostrar ', 'nos proponemos demostrar ', 'intentamos demostrar '], ['que la hipótesis inicial era errónea.', 'que la hipótesis de partida era errónea.']),
    ], 'Pluriel de modestie ; pretender = avoir l’intention de (pas « prétendre »).', { d: 2.5 })
    .tr('Compte tenu des résultats, il convient de revoir la méthode.', [
      ...alt(['Habida cuenta de los resultados, ', 'A la luz de los resultados, ', 'A tenor de los resultados, ', 'Teniendo en cuenta los resultados, ', 'Dados los resultados, '], ['conviene revisar el método.', 'cabe revisar el método.', 'conviene revisar la metodología.', 'es conveniente revisar el método.']),
    ], 'habida cuenta de + nom ; conviene + infinitif.', { kc: CONNECT, d: 2.6 })
    .listen('En lo que respecta a la metodología, se ha optado por un enfoque mixto: por una parte, se han realizado entrevistas; por otra, se han analizado datos estadísticos.', '¿Qué método se ha seguido?', [
      'Uno que combina entrevistas y estadísticas', 'Solo entrevistas', 'Solo análisis estadístico',
    ], 0, 'enfoque mixto : por una parte… por otra.', { kc: CONNECT, d: 2.4 })
    .listen('Cabe destacar que los participantes no conocían el objetivo del experimento, lo cual reduce el riesgo de sesgo.', '¿Por qué se ocultó el objetivo a los participantes?', [
      'Para evitar que influyera en los resultados', 'Porque era confidencial por ley', 'Porque el objetivo cambió durante el experimento',
    ], 0, 'reducir el riesgo de sesgo = limiter le biais.', { d: 2.4 })
    .dictation('Se observa un descenso sostenido de la natalidad en las zonas rurales.', 'se impersonnel ; sostenido = continu.', { d: 2.3 })
    .repeat('En virtud de lo expuesto, consideramos que la propuesta es viable.', 'en virtud de = en vertu de ; lo expuesto = ce qui précède.', { kc: CONNECT, d: 2.3 })
    .say('On a interrogé deux cents étudiants.', ['Se entrevistó a doscientos estudiantes.', 'Se encuestó a doscientos estudiantes.', 'Se entrevistó a doscientos alumnos.', 'Se encuestó a doscientos alumnos.', 'Se ha entrevistado a doscientos estudiantes.', 'Se ha encuestado a doscientos estudiantes.'],
      'se + verbe singulier + a + personnes.', { d: 2.5 })
    .answer('Redacta la introducción de un breve trabajo académico sobre el teletrabajo, sin usar la primera persona del singular.',
      'En el presente trabajo se analizan los efectos del teletrabajo en la productividad. Habida cuenta de la escasez de estudios previos, cabe señalar que nuestras conclusiones son provisionales.',
      'se impersonnel, pluriel de modestie, cabe + infinitif, connecteur soutenu.', {
        kc: [IMPERS, CONNECT], keywords: [['se analizan', 'se analiza', 'se estudia', 'se estudian', 'se examina', 'pretendemos', 'nos proponemos'], ['cabe', 'conviene', 'habida cuenta', 'a la luz de', 'en lo que respecta']], minWords: 22, d: 2.7,
      })
    .build(),
};

export const academico2: Lesson = {
  id: 'es-c2-academico-2',
  cefr: 'C2',
  unitId: 'es-c2-academico',
  title: 'Citer, conclure, éviter le dequeísmo',
  subtitle: 'como señala… · en suma · pienso que / me acuerdo de que',
  kcIds: [CITE, DEQUE],
  estMinutes: 15,
  explanation: [
    {
      title: 'Citer et conclure',
      table: [
        ['Como señala Ferrán (2019), …', 'Comme le souligne Ferrán (2019), …'],
        ['En palabras de la autora, «…»', 'Pour reprendre les mots de l’autrice, « … »'],
        ['De acuerdo con / Según los datos del informe…', 'D’après les données du rapport…'],
        ['Esta tesis ha sido cuestionada por…', 'Cette thèse a été remise en cause par…'],
        ['En suma, / En definitiva, / A modo de conclusión,', 'En somme, / En définitive, / En guise de conclusion,'],
        ['Queda por dilucidar si…', 'Reste à élucider si…'],
      ],
      tip: '« En definitiva » conclut ; il ne veut pas dire « définitivement » (para siempre, de forma definitiva).',
    },
    {
      title: 'Dequeísmo et queísmo',
      body: 'Faute très surveillée à l’écrit. Le dequeísmo ajoute un « de » superflu (*pienso de que) ; le queísmo supprime un « de » exigé par le verbe (*me di cuenta que). Test : remplacez la subordonnée par « eso ». Si l’on dit « pienso eso », pas de « de » ; si l’on dit « me acuerdo de eso », « de que ».',
      table: [
        ['Pienso que… / Creo que… / Dijo que…', 'jamais *pienso de que'],
        ['Es posible que… / Es necesario que…', 'jamais *es posible de que'],
        ['Me acuerdo de que… / Me di cuenta de que…', 'de obligatoire'],
        ['Estoy seguro de que… / Tengo la impresión de que…', 'de obligatoire'],
        ['a pesar de que, antes de que, con tal de que', 'locutions avec de'],
      ],
      tip: 'Le français « je me rends compte que » pousse au queísmo : en espagnol, darse cuenta DE que.',
    },
  ],
  exercises: exercises('es-c2-academico-2', 'C2', { kc: CITE })
    .mcq('Choisis la phrase correcte :', ['Me di cuenta de que el método era erróneo.', 'Me di cuenta que el método era erróneo.', 'Pensé de que el método era erróneo.'], 0, 'darse cuenta de que ; pensar que, sans de.', { kc: DEQUE, d: 2.3 })
    .mcq('¿Cuál es la postura de la autora del fragmento?', [
      'Acepta parte de la tesis de Ferrán, pero la considera incompleta', 'Rechaza por completo la tesis de Ferrán', 'Se limita a resumir la tesis sin valorarla',
    ], 0, 'si bien… no es menos cierto que… ; queda por dilucidar : adhésion partielle.', {
      d: 2.8,
      passage: 'Como señala Ferrán (2019), la despoblación rural responde ante todo a factores económicos. Si bien los datos del Instituto Regional de Estadística de Valdeoro avalan en parte esta tesis, no es menos cierto que la falta de servicios sanitarios y educativos desempeña un papel decisivo que el autor apenas considera. En suma, la explicación económica resulta necesaria, pero insuficiente. Queda por dilucidar, en futuros trabajos, el peso relativo de cada factor.',
    })
    .cloze('Estoy convencida ___ que la muestra no es representativa.', ['de'], 'estar convencido de algo → de que.', { kc: DEQUE, d: 2.3 })
    .cloze('En ___, los resultados confirman parcialmente la hipótesis inicial.', ['suma', 'definitiva', 'resumen', 'conclusión', 'síntesis'], 'en suma / en definitiva = en somme (conclusion).', { d: 2.2 })
    .type('Corrige le dequeísmo : « Es posible de que los datos estén incompletos. » → « Es posible ___ los datos estén incompletos. »', ['que'], 'es posible que, sans de : *es posible de que est un dequeísmo.', { kc: DEQUE, d: 2.4 })
    .type('Complète : « ___ palabras de la autora, “la lengua es un territorio en disputa”. »', ['En'], 'en palabras de = selon les mots de.', { d: 2.3 })
    .order('Je me souviens qu’il pleuvait ce jour-là.', 'Me acuerdo de que aquel día llovía.', 'acordarse de que : de obligatoire.', { distractors: ['recuerdo', 'eso'], kc: DEQUE, d: 2.3 })
    .tr('Comme le souligne l’auteur, cette thèse a été remise en cause.', [
      ...alt(['Como señala el autor, ', 'Como subraya el autor, ', 'Como destaca el autor, '], ['esta tesis ha sido cuestionada.', 'esta tesis se ha cuestionado.', 'esta tesis ha sido puesta en tela de juicio.', 'esta tesis ha sido puesta en duda.']),
    ], 'como señala… ; cuestionar = remettre en cause.', { d: 2.5 })
    .tr('J’ai l’impression que les données sont incomplètes.', ['Tengo la impresión de que los datos están incompletos.', 'Tengo la impresión de que los datos son incompletos.', 'Me da la impresión de que los datos están incompletos.', 'Me da la impresión de que los datos son incompletos.'],
      'tener la impresión de que : de obligatoire.', { kc: DEQUE, d: 2.4 })
    .listen('A modo de conclusión, cabe afirmar que el estudio confirma la hipótesis de partida, si bien queda por dilucidar si los resultados son extrapolables a otros países.', '¿Qué queda pendiente según el hablante?', [
      'Saber si los resultados valen para otros países', 'Confirmar la hipótesis de partida', 'Recoger más datos en el mismo país',
    ], 0, 'queda por dilucidar si… = reste à élucider si…', { d: 2.5 })
    .listen('Pienso de que el problema es más complejo. Bueno, perdón: pienso que el problema es más complejo.', '¿Por qué se corrige el hablante?', [
      'Porque ha cometido un dequeísmo', 'Porque ha usado un tiempo verbal incorrecto', 'Porque ha cambiado de opinión',
    ], 0, 'pienso de que → pienso que : correction d’un dequeísmo.', { kc: DEQUE, d: 2.3 })
    .dictation('Según los datos del informe, la brecha salarial se ha reducido ligeramente.', 'según + source ; la brecha salarial = l’écart de salaires.', { d: 2.4 })
    .repeat('En definitiva, la explicación económica resulta necesaria, pero insuficiente.', 'en definitiva = en définitive (conclusion).', { d: 2.3 })
    .say('Je suis {sûr|sûre} que l’auteur se trompe.', ['Estoy seguro de que el autor se equivoca.', 'Estoy segura de que el autor se equivoca.', 'Estoy seguro de que el autor está equivocado.', 'Estoy segura de que el autor está equivocado.'],
      'estar seguro de que : de obligatoire (éviter le queísmo).', { kc: DEQUE, d: 2.4 })
    .answer('Escribe una breve conclusión para un trabajo sobre las redes sociales: cita una fuente (inventada) y matiza.',
      'Como señala Herrero (2021), las redes favorecen la polarización. Sin embargo, estamos convencidos de que influyen también otros factores. En suma, queda por dilucidar el peso real de cada uno.',
      'Citation (como señala…), de que après estar convencido, connecteur de conclusion.', {
        kc: [CITE, DEQUE], keywords: [['como señala', 'según', 'en palabras de', 'de acuerdo con', 'sostiene'], ['en suma', 'en definitiva', 'a modo de conclusión', 'en conclusión', 'queda por']], minWords: 22, d: 2.7,
      })
    .build(),
};
