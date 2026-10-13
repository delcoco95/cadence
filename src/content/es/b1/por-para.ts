import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const PARA = 'es.b1.grammar.para';
const POR = 'es.b1.grammar.por';
const VPREP = 'es.b1.grammar.verb_prepositions';

export const porPara1: Lesson = {
  id: 'es-b1-por-para-1',
  cefr: 'B1',
  unitId: 'es-b1-por-para',
  title: 'Por ou para',
  subtitle: 'Para Madrid, por la calle, gracias por todo',
  kcIds: [PARA, POR],
  estMinutes: 11,
  explanation: [
    {
      title: 'para : le but, la destination',
      body: 'para regarde vers l’avant : ce qu’on vise, où l’on va, à qui l’on destine quelque chose, pour quand.',
      table: [
        ['but (pour, afin de)', 'Estudio para aprobar.'],
        ['destination', 'Salgo para Madrid.'],
        ['destinataire', 'Este regalo es para ti.'],
        ['échéance', 'Lo necesito para el lunes.'],
        ['opinion', 'Para mí, es la mejor.'],
      ],
      examples: [
        { en: 'Ahorro para comprarme un coche.', fr: 'J’économise pour m’acheter une voiture.' },
        { en: 'El informe es para el viernes.', fr: 'Le rapport est pour vendredi.' },
      ],
      tip: 'Repère : para répond à « dans quel but ? », « vers où ? », « pour qui ? ».',
    },
    {
      title: 'por : la cause, le passage, le moyen',
      body: 'por remonte à l’origine : la cause, le lieu par où l’on passe, le moyen, l’échange ou le prix, le moment de la journée.',
      table: [
        ['cause', 'Gracias por todo. · Lo hago por ti.'],
        ['lieu traversé', 'Paseamos por el centro.'],
        ['moyen', 'Te llamo por teléfono.'],
        ['prix, échange', 'Lo compré por veinte euros.'],
        ['moment', 'por la mañana, por la tarde, por la noche'],
      ],
      examples: [
        { en: 'Me encanta pasear por el Retiro.', fr: 'J’adore me promener dans le Retiro.' },
        { en: 'Llegamos tarde por el tráfico.', fr: 'Nous sommes arrivés en retard à cause de la circulation.' },
      ],
      tip: '« Merci pour » se dit gracias por, jamais « gracias para ». Et Lo hago por ti (à cause de toi, à ta place) n’a pas le même sens que Es para ti (c’est pour toi, destinataire).',
    },
  ],
  exercises: exercises('es-b1-por-para-1', 'B1', { kc: PARA })
    .mcq('Estudio español ___ trabajar en Sevilla.', ['para', 'por', 'a'], 0, 'But → para + infinitif.', { d: -0.5 })
    .mcq('Muchas gracias ___ tu ayuda.', ['por', 'para', 'de'], 0, 'Cause du remerciement → gracias por.', { kc: POR, d: -0.5 })
    .cloze('Me gusta pasear ___ el parque del Retiro.', ['por'], 'Lieu que l’on parcourt → por.', { kc: POR, d: -0.4 })
    .cloze('Tengo que terminar el informe ___ el viernes.', ['para'], 'Échéance → para.', { d: -0.3 })
    .type('Complète avec por ou para : « Compré esta bici ___ cien euros. »', ['por'], 'Prix → por.', { kc: POR, d: -0.3 })
    .type('Complète avec por ou para : « ___ mí, es la mejor serie del año. »', ['Para'], 'Opinion → para mí.', { d: -0.3 })
    .order('Ce cadeau est pour ta mère.', 'Este regalo es para tu madre.', 'Destinataire → para.', { distractors: ['por'], d: -0.5 })
    .tr('Je t’appelle demain matin.', [
      'Te llamo mañana por la mañana.', 'Te llamaré mañana por la mañana.', 'Mañana por la mañana te llamo.', 'Mañana por la mañana te llamaré.', 'Yo te llamo mañana por la mañana.',
    ], 'Moment de la journée → por la mañana.', { kc: POR, d: -0.3 })
    .tr('Le train pour Barcelone part à dix heures.', [
      'El tren para Barcelona sale a las diez.', 'El tren a Barcelona sale a las diez.', 'El tren con destino a Barcelona sale a las diez.', 'El tren hacia Barcelona sale a las diez.',
    ], 'Destination → para (ou a, con destino a).', { d: -0.3 })
    .listen('Te llamé por teléfono tres veces, pero no contestaste. ¿Estabas ocupado?', 'Comment a-t-on essayé de le joindre ?',
      ['Par téléphone', 'Par courriel', 'En passant chez lui'], 0,
      'por teléfono = par téléphone (moyen).', { kc: POR, d: -0.5 })
    .listen('Necesito el coche para ir al aeropuerto: mi vuelo sale para Roma a las seis.', 'Pourquoi a-t-il besoin de la voiture ?',
      ['Pour aller à l’aéroport', 'Pour aller travailler', 'Pour faire les courses'], 0,
      'para ir al aeropuerto (but).', { d: -0.5 })
    .dictation('Salimos para Valencia por la tarde.', 'para Valencia (destination) ; por la tarde (moment).', { kc: [PARA, POR], d: -0.4 })
    .repeat('Gracias por todo, de verdad.', 'gracias por + nom.', { kc: POR, d: -0.6 })
    .say('C’est pour toi, joyeux anniversaire !', ['¡Es para ti, feliz cumpleaños!', 'Esto es para ti, ¡feliz cumpleaños!', '¡Es para ti, felicidades!', 'Esto es para ti, ¡felicidades!'],
      'Destinataire → para ti.', { d: -0.6 })
    .answer('¿Para qué estudias español?', 'Estudio español para viajar por España y para hablar con mis amigos de Madrid.',
      'para + infinitif pour le but ; por pour le lieu parcouru.', { kc: [PARA, POR], keywords: [['para']], minWords: 10, d: -0.3 })
    .build(),
};

export const porPara2: Lesson = {
  id: 'es-b1-por-para-2',
  cefr: 'B1',
  unitId: 'es-b1-por-para',
  title: 'Expressions et verbes à préposition',
  subtitle: 'Por eso, por cierto ; pensar en, soñar con',
  kcIds: [POR, VPREP],
  estMinutes: 11,
  explanation: [
    {
      title: 'Expressions avec por et para',
      body: 'Beaucoup d’expressions courantes sont figées. por introduit aussi l’agent d’une phrase passive.',
      table: [
        ['por eso', 'c’est pour ça'],
        ['por fin', 'enfin'],
        ['por cierto', 'au fait'],
        ['por supuesto', 'bien sûr'],
        ['por lo menos', 'au moins'],
        ['para nada', 'pas du tout'],
        ['passif', 'escrito por Cervantes'],
      ],
      examples: [
        { en: 'Por cierto, ¿has visto a Luis?', fr: 'Au fait, tu as vu Luis ?' },
        { en: 'El Quijote fue escrito por Cervantes.', fr: 'Don Quichotte a été écrit par Cervantes.' },
      ],
      tip: 'por eso = c’est pour ça (cause) ; para eso = pour ça, dans ce but.',
    },
    {
      title: 'Verbes et prépositions : pas comme en français',
      body: 'Certains verbes très fréquents changent de préposition par rapport au français.',
      table: [
        ['penser à', 'pensar en'],
        ['rêver de', 'soñar con'],
        ['tomber amoureux de', 'enamorarse de'],
        ['se marier avec', 'casarse con'],
        ['se souvenir de', 'acordarse de'],
        ['mettre du temps à', 'tardar en'],
        ['retrouver quelqu’un', 'quedar con'],
        ['s’inquiéter pour', 'preocuparse por'],
      ],
      examples: [
        { en: 'Pienso mucho en ti.', fr: 'Je pense beaucoup à toi.' },
        { en: 'Sueño con vivir en Canarias.', fr: 'Je rêve de vivre aux Canaries.' },
      ],
      tip: '« Je pense à toi » → Pienso en ti, pas « pienso a ti ». « Tu mets combien de temps pour venir ? » → ¿Cuánto tardas en venir?',
    },
  ],
  exercises: exercises('es-b1-por-para-2', 'B1', { kc: VPREP })
    .mcq('Siempre pienso ___ ti.', ['en', 'a', 'de'], 0, 'pensar en = penser à.', { d: -0.4 })
    .cloze('Mi hermana se casa ___ un chico de Cádiz.', ['con'], 'casarse con = se marier avec.', { d: -0.3 })
    .cloze('Hoy he quedado ___ Laura para tomar algo.', ['con'], 'quedar con alguien = retrouver quelqu’un.', { d: -0.3 })
    .mcq('Combien de temps faut-il à Irene pour aller à la fac ?', ['Dix minutes à pied', 'Dix minutes en bus', 'Une demi-heure à pied'], 0,
      'Para ir a la facultad tardo solo diez minutos andando.',
      {
        kc: [VPREP, POR], d: -0.3,
        passage: 'Querida Ana:\nTe escribo desde Salamanca. Por fin he encontrado piso: está en el centro y lo comparto con dos chicas de Portugal. Para ir a la facultad tardo solo diez minutos andando. Por las tardes estudio en la biblioteca y los viernes quedo con mis compañeros de clase. Pienso mucho en vosotros, pero no me arrepiento para nada de haber venido. Por cierto, ¿te acuerdas de Javier? ¡Se ha enamorado de una de mis compañeras de piso! Un abrazo, Irene',
      })
    .type('Complète avec la bonne préposition : « ¿Te acuerdas ___ mi primo Alberto? »', ['de'], 'acordarse de = se souvenir de.', { d: -0.3 })
    .type('Complète avec la bonne préposition : « ¿Cuánto tardas ___ llegar al trabajo? »', ['en'], 'tardar en + infinitif.', { d: -0.1 })
    .order('Je rêve de vivre près de la mer.', 'Sueño con vivir cerca del mar.', 'soñar con = rêver de.', { distractors: ['de'], d: -0.2 })
    .tr('Au fait, tu as parlé avec Jorge ?', ['Por cierto, ¿has hablado con Jorge?', 'Por cierto, ¿hablaste con Jorge?', 'Por cierto, ¿tú has hablado con Jorge?'],
      'au fait = por cierto.', { kc: POR, d: -0.2 })
    .tr('Il est tombé amoureux d’une Italienne.', ['Se enamoró de una italiana.', 'Se ha enamorado de una italiana.', 'Él se enamoró de una italiana.', 'Él se ha enamorado de una italiana.'],
      'enamorarse de ; les nationalités prennent une minuscule.', { d: -0.2 })
    .listen('Este cuadro fue pintado por Velázquez en el siglo diecisiete.', 'Que dit-on du tableau ?',
      ['Il a été peint par Velázquez', 'Il a été acheté par un musée', 'Il a été peint pour le roi'], 0,
      'fue pintado por = a été peint par (agent du passif).', { kc: POR, d: -0.2 })
    .listen('No te preocupes por mí, de verdad. Estoy bien y por la noche te llamo.', 'Que dit la personne ?',
      ['De ne pas s’inquiéter pour elle', 'Qu’elle est malade', 'Qu’elle ne pourra pas appeler'], 0,
      'preocuparse por = s’inquiéter pour.', { kc: [VPREP, POR], d: -0.3 })
    .dictation('Todo depende de lo que diga el médico.', 'depender de = dépendre de.', { d: -0.1 })
    .repeat('Por supuesto que me acuerdo de ti.', 'por supuesto ; acordarse de.', { kc: [VPREP, POR], d: -0.4 })
    .say('Je pense à toi tous les jours.', ['Pienso en ti todos los días.', 'Pienso en ti cada día.', 'Todos los días pienso en ti.', 'Cada día pienso en ti.'],
      'pensar en.', { d: -0.4 })
    .answer('¿Con qué sueñas? ¿Qué te gustaría hacer en el futuro?', 'Sueño con vivir un año en Barcelona y con trabajar en una empresa internacional.',
      'soñar con + infinitif.', { keywords: [['sueño con', 'pienso en', 'me gustaría']], minWords: 10, d: 0 })
    .build(),
};
