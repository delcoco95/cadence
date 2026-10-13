import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const FUT = 'es.c1.grammar.future_of_probability';
const COND = 'es.c1.grammar.conditional_of_probability';
const PERF = 'es.c1.grammar.future_perfect';
const CONC = 'es.c1.grammar.concessive_future';

export const probabilidad1: Lesson = {
  id: 'es-c1-probabilidad-1',
  cefr: 'C1',
  unitId: 'es-c1-probabilidad',
  title: 'Supposer avec le futur et le conditionnel',
  subtitle: '¿Dónde estará? · Serían las tres · deber de + infinitif',
  kcIds: [FUT, COND],
  estMinutes: 13,
  explanation: [
    {
      title: 'Le futur pour une supposition au présent',
      body: 'En espagnol, le futur simple sert très souvent à faire une hypothèse sur le présent. Le conditionnel fait la même chose pour le passé (imparfait ou indefinido).',
      table: [
        ['Supposition sur le présent', 'futur : Estará en casa. (il doit être chez lui)'],
        ['Supposition sur le passé', 'conditionnel : Estaría en casa. (il devait être chez lui)'],
        ['¿Qué hora será?', 'Quelle heure peut-il bien être ?'],
        ['Tendría unos veinte años.', 'Il devait avoir une vingtaine d’années.'],
      ],
      examples: [
        { en: 'No contesta; estará en la ducha.', fr: 'Il ne répond pas ; il doit être sous la douche.' },
        { en: 'Serían las tres cuando se fue la luz.', fr: 'Il devait être trois heures quand le courant a été coupé.' },
      ],
      tip: 'Le français dit « il doit être », « il est sans doute ». Le futur simple de supposition (« il sera malade ») est vieilli en français mais très vivant en espagnol : n’hésitez pas à l’utiliser.',
    },
    {
      title: 'Autres façons de supposer',
      body: 'deber de + infinitif exprime la probabilité, deber + infinitif l’obligation ; dans l’usage courant, deber seul s’emploie aussi pour la probabilité. a lo mejor et igual (familier) prennent l’indicatif ; quizá(s) et tal vez acceptent les deux modes.',
      table: [
        ['Debe de tener cuarenta años.', 'Il doit avoir quarante ans (probabilité).'],
        ['Debes estudiar más.', 'Tu dois étudier davantage (obligation).'],
        ['A lo mejor llueve.', 'Il va peut-être pleuvoir.'],
        ['Quizá venga / quizá viene.', 'Il viendra peut-être.'],
      ],
      examples: [
        { en: 'Igual se ha quedado sin batería.', fr: 'Ça se trouve, il n’a plus de batterie.' },
      ],
      tip: 'Ne dites pas « a lo mejor llueva » : a lo mejor se construit toujours avec l’indicatif.',
    },
  ],
  exercises: exercises('es-c1-probabilidad-1', 'C1', { kc: FUT, tense: 'futuro' })
    .mcq('Llaman a la puerta a las once de la noche y no esperas a nadie. Te preguntas: «¿Quién ___ a estas horas?»', ['será', 'sea', 'fuera'], 0,
      'Supposition sur le présent → futur : ¿Quién será?', { d: 1.4 })
    .mcq('Cuando conocí a tu padre, él ___ unos veinte años.', ['tendría', 'tendrá', 'tuviera'], 0, 'Supposition sur le passé → conditionnel : tendría.', { kc: COND, d: 1.6 })
    .cloze('No contesta al teléfono; ___ en la ducha.', ['estará', 'debe de estar', 'debe estar'], 'Supposition au présent : futur (estará) ou deber de + infinitif.', { hint: 'estar, supposition', d: 1.5 })
    .cloze('Anoche vi luz en su ventana, así que ___ en casa.', ['estaría', 'debía de estar', 'debía estar'], 'Supposition sur le passé : conditionnel (estaría) ou debía de + infinitif.', { kc: COND, hint: 'estar, supposition', d: 1.8 })
    .type('Transforme avec le futur de probabilité : « Probablemente tiene más de sesenta años. » → « ___ más de sesenta años. »', ['Tendrá'], 'probablemente tiene → tendrá.', { d: 1.5 })
    .type('Transforme avec le conditionnel de probabilité : « Probablemente eran las tres cuando se fue la luz. » → « ___ las tres cuando se fue la luz. »', ['Serían'],
      'probablemente eran → serían (pluriel avec les heures).', { kc: COND, d: 1.8 })
    .order('Il devait être minuit quand le film s’est terminé.', 'Sería medianoche cuando terminó la película.', 'Supposition sur le passé → conditionnel : sería.', { kc: COND, distractors: ['será'], d: 1.7 })
    .tr('Elle doit avoir environ quarante ans.', [
      ...alt(['Tendrá', 'Debe de tener', 'Debe tener'], [' unos cuarenta años.', ' alrededor de cuarenta años.', ' cuarenta años más o menos.']),
      'Rondará los cuarenta.', 'Rondará los cuarenta años.',
    ], 'Supposition au présent : tendrá ou debe de tener.', { d: 1.6 })
    .tr('Il devait être très fatigué, car il s’est endormi dans le métro.', alt(['Estaría', 'Debía de estar', 'Debía estar'], [' muy cansado, '], ['porque', 'pues', 'ya que'], [' se durmió', ' se quedó dormido'], [' en el metro.']),
      'Supposition sur le passé : estaría ou debía de estar.', { kc: COND, d: 1.9 })
    .listen('—¿Dónde está Lucía? —No sé, estará todavía en clase o se habrá ido directamente al gimnasio.', '¿Qué sabemos de Lucía?', [
      'No se sabe con seguridad dónde está', 'Está en clase', 'Está en el gimnasio',
    ], 0, 'estará, se habrá ido : deux suppositions, aucune certitude.', { d: 1.6 })
    .listen('Cuando mis abuelos emigraron a Alemania, mi abuela tendría unos dieciocho años y no hablaría ni una palabra de alemán.', '¿Qué expresa el hablante sobre su abuela?', [
      'Una suposición sobre su edad y su alemán', 'Un dato seguro sobre su edad', 'Un deseo para el futuro',
    ], 0, 'tendría, hablaría : conditionnel de probabilité sur le passé.', { kc: COND, d: 1.8 })
    .dictation('A estas horas ya estarán cenando.', 'estarán cenando : supposition sur ce qui se passe maintenant.', { d: 1.5 })
    .repeat('Serían las tres de la madrugada cuando sonó el teléfono.', 'serían las tres : heure approximative dans le passé.', { kc: COND, d: 1.6 })
    .say('Il doit y avoir des embouteillages.', ['Habrá atascos.', 'Habrá atasco.', 'Debe de haber atascos.', 'Debe de haber atasco.', 'Debe haber atascos.', 'Debe haber atasco.', 'Habrá mucho tráfico.', 'Debe de haber mucho tráfico.'],
      'Supposition au présent : habrá (futur de hay) ou debe de haber.', { d: 1.6 })
    .answer('Piensa en un vecino o en un amigo: ¿qué estará haciendo ahora mismo? Haz al menos tres suposiciones.',
      'Mi vecino estará viendo la tele, porque oigo voces; su mujer estará trabajando todavía y los niños estarán haciendo los deberes en su cuarto.',
      'Futur de probabilité : estará, tendrá, será…', { keywords: [['estará', 'estarán', 'será', 'serán', 'tendrá', 'tendrán', 'habrá', 'debe de', 'deben de']], minWords: 15, d: 1.9 })
    .build(),
};

export const probabilidad2: Lesson = {
  id: 'es-c1-probabilidad-2',
  cefr: 'C1',
  unitId: 'es-c1-probabilidad',
  title: 'Futur antérieur et futur concessif',
  subtitle: 'Ya habré terminado · habrá salido · será muy listo, pero…',
  kcIds: [PERF, CONC],
  estMinutes: 13,
  explanation: [
    {
      title: 'Futur antérieur et conditionnel passé',
      body: 'habré + participe marque une action terminée avant un moment futur, ou une supposition sur un passé récent (= probablemente ha…). habría + participe fait une supposition sur un plus-que-parfait.',
      table: [
        ['Cuando vuelvas, ya habré terminado.', 'Quand tu reviendras, j’aurai déjà fini.'],
        ['Habrá salido.', 'Il sera sorti, il a dû sortir.'],
        ['Ya se habría ido cuando llegaste.', 'Il avait dû partir quand tu es arrivé.'],
      ],
      examples: [
        { en: 'Para el lunes ya habremos tomado una decisión.', fr: 'D’ici lundi, nous aurons déjà pris une décision.' },
        { en: 'No encuentro las llaves; me las habré dejado en el coche.', fr: 'Je ne trouve pas mes clés ; j’ai dû les laisser dans la voiture.' },
      ],
      tip: 'Après cuando, en cuanto, hasta que, jamais de futur : « quand tu auras fini » = cuando hayas terminado (subjonctif passé), pas « cuando habrás terminado ».',
    },
    {
      title: 'Le futur concessif',
      body: 'Suivi de pero, le futur (ou le conditionnel pour le passé) concède un point pour mieux le contester : « il est peut-être…, mais… ».',
      table: [
        ['Será muy guapo, pero es antipático.', 'Il est peut-être très beau, mais il est antipathique.'],
        ['Tendrá experiencia, pero no sabe mandar.', 'Il a sans doute de l’expérience, mais il ne sait pas diriger.'],
        ['Sería famoso, pero nadie lo reconoció.', 'Il était peut-être célèbre, mais personne ne l’a reconnu.'],
      ],
      tip: 'Ce futur ne parle pas de l’avenir : « Será rico, pero no es feliz » se traduit par un présent nuancé (il est peut-être riche).',
    },
  ],
  exercises: exercises('es-c1-probabilidad-2', 'C1', { kc: PERF, tense: 'futuro perfecto' })
    .mcq('Cuando vuelvas de vacaciones, nosotros ya ___ de casa.', ['nos habremos mudado', 'nos hayamos mudado', 'nos habíamos mudado'], 0,
      'Action achevée avant un moment futur → futur antérieur : nos habremos mudado.', { d: 1.6 })
    .mcq('¿Qué quiere decir el ayudante con «Ese ladrón será muy listo»?', [
      'Admite que quizá sea listo, pero señala un error', 'Está seguro de que el ladrón es muy inteligente', 'Piensa que el ladrón llegará a ser muy listo',
    ], 0, 'Futur concessif : será muy listo, pero… = il est peut-être malin, mais…', {
      kc: [CONC, PERF], d: 2.0,
      passage: 'El inspector Ruiz examinó el despacho en silencio. La ventana estaba abierta y había barro en la alfombra. «El ladrón habrá entrado por el jardín», murmuró. «Conocería bien la casa, porque no tocó nada más que la caja fuerte. Y tendría la llave, porque la cerradura está intacta.» Su ayudante no parecía convencido: «Ese ladrón será muy listo, inspector, pero se le ha olvidado algo: el perro no ladró.»',
    })
    .cloze('No encuentro las llaves; me las ___ en el coche.', ['habré dejado', 'habré olvidado'], 'Supposition sur un passé récent → futur antérieur : me las habré dejado.', { hint: 'dejar, supposition', d: 1.7 })
    .cloze('___ muy simpático, pero a mí no me cae bien.', ['Será'], 'Futur concessif : será… pero = il est peut-être…, mais.', { kc: CONC, hint: 'ser, concession', d: 1.7 })
    .type('Complète : « Cuando (tú, terminar) ___ el informe, mándamelo. »', ['hayas terminado', 'termines'], 'Après cuando → subjonctif (hayas terminado), jamais le futur antérieur.', { d: 1.8 })
    .type('Transforme : « Seguramente ya se había ido cuando llegaste. » → « Ya se ___ ido cuando llegaste. »', ['habría'], 'Supposition sur un plus-que-parfait → conditionnel passé : se habría ido.', { d: 2.0 })
    .order('Il aura sans doute oublié notre rendez-vous.', 'Se habrá olvidado de nuestra cita.', 'Supposition sur le passé récent : se habrá olvidado.', { distractors: ['haya'], d: 1.6 })
    .tr('Dans dix ans, nous aurons remboursé le prêt.', alt(['Dentro de diez años, ', 'En diez años, '], ['habremos pagado ', 'habremos devuelto ', 'habremos terminado de pagar ', 'habremos amortizado '], ['el préstamo.', 'el crédito.']),
      'Futur antérieur : habremos pagado. « Dans dix ans » = dentro de diez años.', { d: 1.7 })
    .tr('Il est peut-être riche, mais il n’est pas heureux.', alt(['Será rico', 'Tal vez sea rico', 'Puede que sea rico', 'Quizás sea rico', 'Quizá sea rico'], [', pero no es feliz.']),
      'Futur concessif : será rico, pero…', { kc: CONC, d: 1.8 })
    .listen('Ya habrán llegado a Bilbao, porque salieron a las ocho y el viaje dura unas cuatro horas.', '¿Por qué cree el hablante que ya han llegado?', [
      'Por la hora de salida y la duración del viaje', 'Porque le han llamado', 'Porque lo ha visto en las redes',
    ], 0, 'habrán llegado : déduction, pas information.', { d: 1.6 })
    .listen('Tendrá mucha experiencia, no lo niego, pero en la entrevista no supo responder a ninguna pregunta técnica.', '¿Qué opina el hablante del candidato?', [
      'Reconoce su experiencia, pero lo critica', 'Lo considera el mejor candidato', 'No sabe si tiene experiencia',
    ], 0, 'tendrá… pero : concession puis critique.', { kc: CONC, d: 1.8 })
    .dictation('Para el lunes ya habremos tomado una decisión.', 'habremos tomado : futur antérieur.', { d: 1.6 })
    .repeat('Sería muy famoso, pero nadie lo reconoció en la calle.', 'Conditionnel concessif pour le passé.', { kc: CONC, d: 1.7 })
    .say('Ils auront raté le train.', ['Habrán perdido el tren.', 'Se les habrá escapado el tren.', 'Deben de haber perdido el tren.', 'Seguramente han perdido el tren.', 'Seguro que han perdido el tren.', 'Habrán perdido el tren, seguro.'],
      'Supposition sur le passé récent : habrán perdido.', { d: 1.6 })
    .answer('Imagina tu vida dentro de diez años: ¿qué habrás conseguido para entonces?',
      'Dentro de diez años habré terminado de pagar mi piso, habré aprendido a tocar el piano y, si todo va bien, habré viajado por toda Sudamérica.',
      'Futur antérieur : habré + participe.', { keywords: [['habré', 'habremos', 'habrá', 'habrán']], minWords: 15, d: 1.9 })
    .build(),
};
