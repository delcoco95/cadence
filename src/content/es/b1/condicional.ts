import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const FORM = 'es.b1.grammar.condicional_form';
const POLITE = 'es.b1.function.condicional_politeness';
const ADVICE = 'es.b1.function.condicional_advice';

export const condicional1: Lesson = {
  id: 'es-b1-condicional-1',
  cefr: 'B1',
  unitId: 'es-b1-condicional',
  title: 'Le conditionnel : forme et politesse',
  subtitle: 'Hablaría, tendría ; ¿podrías…?, me gustaría…',
  kcIds: [FORM, POLITE],
  estMinutes: 10,
  explanation: [
    {
      title: 'Infinitif + -ía',
      body: 'Le conditionnel se forme sur l’infinitif entier, avec les terminaisons -ía, -ías, -ía, -íamos, -íais, -ían, les mêmes pour les trois groupes. Les verbes irréguliers gardent le radical du futur.',
      table: [
        ['hablar', 'hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían'],
        ['tener, poner, salir, venir', 'tendría, pondría, saldría, vendría'],
        ['poder, saber, querer, haber', 'podría, sabría, querría, habría'],
        ['hacer, decir', 'haría, diría'],
      ],
      examples: [
        { en: 'Con más tiempo, leería mucho más.', fr: 'Avec plus de temps, je lirais beaucoup plus.' },
        { en: 'En tu lugar, yo no diría nada.', fr: 'À ta place, je ne dirais rien.' },
      ],
      tip: 'L’accent écrit sur le í est obligatoire, et il ne faut pas confondre comería (je mangerais) avec comía (je mangeais). Pas de « hacería » ni de « tenería » : haría, tendría.',
    },
    {
      title: 'Demander poliment, exprimer un souhait',
      body: 'Le conditionnel adoucit une demande ou un souhait, comme en français.',
      table: [
        ['demander', '¿Podrías…? · ¿Te importaría…? · ¿Sería posible…?'],
        ['souhaiter', 'Me gustaría… · Me encantaría… · Querría… / Quería…'],
      ],
      examples: [
        { en: '¿Te importaría cerrar la puerta?', fr: 'Ça t’ennuierait de fermer la porte ?' },
        { en: 'Me gustaría hablar con la directora.', fr: 'J’aimerais parler à la directrice.' },
      ],
      tip: '« Je voudrais » se dit querría, mais aussi quería ou quisiera, très courants. Au bar, en Espagne, on dit plutôt « ¿Me pones un café? » que « Querría un café ».',
    },
  ],
  exercises: exercises('es-b1-condicional-1', 'B1', { kc: FORM, tense: 'condicional' })
    .mcq('Con más tiempo libre, (yo) ___ más deporte.', ['haría', 'hacería', 'hice'], 0, 'hacer → haría (radical irrégulier har-).', { d: -0.5 })
    .mcq('Quelle est la demande la plus polie ?', ['¿Podrías ayudarme con la maleta?', '¡Ayúdame con la maleta!', 'Tienes que ayudarme con la maleta.'], 0,
      'Le conditionnel podrías adoucit la demande.', { kc: POLITE, d: -0.6 })
    .cloze('Nosotros ___ encantados de ayudaros.', ['estaríamos'], 'estar → estaríamos (régulier, accent sur í).', { hint: 'estar', d: -0.4 })
    .cloze('Mis padres ___ el sábado, pero tienen que trabajar.', ['vendrían'], 'venir → vendrían (radical vendr-).', { hint: 'venir', d: -0.3 })
    .type('Conjugue « tener » au conditionnel avec « yo ».', ['tendría'], 'tener → tendría, comme au futur (tendré).', { d: -0.5 })
    .type('Conjugue « decir » au conditionnel avec « vosotros ».', ['diríais'], 'decir → dir- + -íais : diríais.', { d: -0.2 })
    .order('J’aimerais parler avec le directeur.', 'Me gustaría hablar con el director.', 'me gustaría + infinitif.', { kc: POLITE, distractors: ['gustaba'], d: -0.5 })
    .tr('Pourrais-tu m’aider demain ?', [
      '¿Podrías ayudarme mañana?', '¿Me podrías ayudar mañana?', '¿Tú podrías ayudarme mañana?', '¿Mañana podrías ayudarme?', '¿Mañana me podrías ayudar?',
    ], 'poder → podrías ; le pronom se colle à l’infinitif ou se place devant podrías.', { kc: POLITE, d: -0.4 })
    .tr('Je voudrais un billet pour Valence, s’il vous plaît.', [
      'Querría un billete para Valencia, por favor.', 'Quería un billete para Valencia, por favor.', 'Quisiera un billete para Valencia, por favor.',
      'Me gustaría un billete para Valencia, por favor.', 'Por favor, querría un billete para Valencia.', 'Por favor, quería un billete para Valencia.',
    ], 'querría, quería ou quisiera ; un billete (et non « ticket ») para Valencia.', { kc: POLITE, d: -0.4 })
    .listen('¿Te importaría bajar un poco la música? Mañana tengo un examen y tendría que dormir pronto.', 'Que demande la personne ?',
      ['De baisser la musique', 'D’éteindre la télévision', 'De l’aider à réviser'], 0,
      '¿Te importaría bajar la música? = ça t’ennuierait de baisser la musique ?', { kc: POLITE, d: -0.4 })
    .listen('Me encantaría ir con vosotros a la playa, pero este fin de semana tengo que trabajar.', 'Pourquoi la personne ne vient-elle pas ?',
      ['Elle doit travailler', 'Elle n’aime pas la plage', 'Elle est malade'], 0,
      'me encantaría… pero tengo que trabajar.', { d: -0.5 })
    .dictation('Con un poco más de dinero, podríamos viajar a Japón.', 'poder → podríamos.', { d: -0.3 })
    .repeat('Me gustaría saber a qué hora sale el tren.', 'me gustaría + infinitif ; a qué hora (accent sur qué).', { kc: POLITE, d: -0.5 })
    .say('Nous pourrions dîner ensemble samedi.', [
      'Podríamos cenar juntos el sábado.', 'Podríamos cenar juntas el sábado.', 'El sábado podríamos cenar juntos.', 'El sábado podríamos cenar juntas.',
      'Nosotros podríamos cenar juntos el sábado.', 'Nosotras podríamos cenar juntas el sábado.',
    ], 'poder → podríamos ; samedi (ce samedi) = el sábado.', { d: -0.4 })
    .answer('¿Qué harías con un mes de vacaciones?', 'Con un mes de vacaciones viajaría por Sudamérica, aprendería a bailar salsa y descansaría mucho.',
      'Imagine au conditionnel : viajaría, aprendería, descansaría…', {
        keywords: [['viajaría', 'iría', 'haría', 'descansaría', 'aprendería', 'visitaría', 'leería', 'podría', 'estaría', 'me quedaría', 'pasaría']], minWords: 10, d: -0.2,
      })
    .build(),
};

export const condicional2: Lesson = {
  id: 'es-b1-condicional-2',
  cefr: 'B1',
  unitId: 'es-b1-condicional',
  title: 'Conseiller et imaginer',
  subtitle: 'Deberías…, yo que tú…, lo mejor sería…',
  kcIds: [ADVICE, FORM],
  estMinutes: 10,
  explanation: [
    {
      title: 'Donner un conseil',
      body: 'Pour conseiller, on emploie deber, tener que ou poder au conditionnel, ou une formule « à ta place » suivie du conditionnel.',
      table: [
        ['tu devrais', 'deberías / tendrías que + infinitif'],
        ['tu pourrais', 'podrías + infinitif'],
        ['à ta place', 'yo que tú / yo en tu lugar + conditionnel'],
        ['il vaudrait mieux', 'sería mejor / lo mejor sería + infinitif'],
      ],
      examples: [
        { en: 'Deberías dormir un poco más.', fr: 'Tu devrais dormir un peu plus.' },
        { en: 'Yo que tú, aceptaría la oferta.', fr: 'À ta place, j’accepterais l’offre.' },
      ],
      tip: '« À ta place » ne se traduit pas mot à mot : yo que tú ou yo en tu lugar (on entend aussi yo de ti). Et « tu devrais » = deberías, pas « debes », qui est un ordre.',
    },
    {
      title: 'Imaginer, rapporter une promesse',
      body: 'Le conditionnel exprime aussi ce qui arriverait dans une situation imaginée, et le futur vu du passé, exactement comme en français.',
      examples: [
        { en: 'En una isla desierta, leería todo el día.', fr: 'Sur une île déserte, je lirais toute la journée.' },
        { en: 'Me dijo que llamaría el lunes.', fr: 'Il m’a dit qu’il appellerait lundi.' },
      ],
      tip: 'Après si, jamais de conditionnel : « si j’avais » ne se dit pas « si tendría » mais « si tuviera » (voir l’unité Hypothèses).',
    },
  ],
  exercises: exercises('es-b1-condicional-2', 'B1', { kc: ADVICE, tense: 'condicional' })
    .mcq('Tienes fiebre. ___ ir al médico.', ['Deberías', 'Debiste', 'Debes de'], 0, 'Conseil → deberías + infinitif. « Debes de » exprime une supposition.', { d: -0.5 })
    .cloze('Me dijo que ___ a las ocho, pero todavía no ha llegado.', ['vendría'], 'Futur vu du passé → conditionnel : vendría.', { kc: FORM, hint: 'venir', d: -0.2 })
    .cloze('Lo mejor ___ hablar con ella directamente.', ['sería'], 'lo mejor sería + infinitif = le mieux serait de…', { hint: 'ser', d: -0.4 })
    .mcq('Quelle est la première chose que Lucía ferait à la place de Marcos ?',
      ['Demander à l’entreprise quelques jours de télétravail par mois', 'Refuser l’offre', 'Chercher un appartement à Séville'], 0,
      'Primero hablaría con la empresa para pedir unos días de teletrabajo al mes.',
      {
        d: -0.3,
        passage: 'Foro: ¿Qué hago?\nMarcos: Me han ofrecido un trabajo en Barcelona. El sueldo es mejor, pero tendría que dejar a mi familia y a mis amigos en Sevilla. ¿Qué haríais vosotros?\nLucía: Yo que tú, no lo pensaría dos veces. Primero hablaría con la empresa para pedir unos días de teletrabajo al mes. Así podrías volver a Sevilla a menudo. Y deberías visitar Barcelona antes de decidir: es una ciudad cara y sería mejor buscar piso con tiempo.',
      })
    .type('Transforme en conseil avec « yo que tú » : « Tienes que descansar. »', [
      'Yo que tú, descansaría.', 'Yo en tu lugar, descansaría.', 'Yo de ti, descansaría.', 'Yo que tú, descansaría más.', 'Yo en tu lugar, descansaría más.',
    ], 'yo que tú + conditionnel à la 1re personne : descansaría.', { loose: true, d: -0.3 })
    .type('Rapporte la promesse : « Te ayudaré. » → « Me dijo que me ___. »', ['ayudaría'], 'Futur → conditionnel après un verbe au passé : ayudaría.', { kc: FORM, d: -0.2 })
    .order('Tu devrais appeler ta mère.', 'Deberías llamar a tu madre.', 'deberías + infinitif ; a devant une personne.', { distractors: ['deberás'], d: -0.5 })
    .tr('À ta place, je ne dirais rien.', ['Yo que tú, no diría nada.', 'Yo en tu lugar, no diría nada.', 'Yo de ti, no diría nada.', 'En tu lugar, no diría nada.'],
      'yo que tú / yo en tu lugar + diría (decir).', { kc: [ADVICE, FORM], d: -0.3 })
    .tr('Il vaudrait mieux partir tôt.', [
      'Sería mejor salir pronto.', 'Sería mejor salir temprano.', 'Lo mejor sería salir pronto.', 'Lo mejor sería salir temprano.',
      'Sería mejor irse pronto.', 'Sería mejor irse temprano.', 'Sería mejor marcharse pronto.', 'Sería mejor marcharse temprano.',
    ], 'sería mejor + infinitif ; tôt = pronto ou temprano.', { d: -0.2 })
    .listen('Si te duele tanto la espalda, deberías ir al fisioterapeuta y no deberías levantar cosas pesadas.', 'Quel conseil reçoit la personne ?',
      ['Aller chez le kiné et ne pas porter de choses lourdes', 'Faire plus de sport', 'Prendre des médicaments'], 0,
      'deberías ir al fisioterapeuta ; no deberías levantar cosas pesadas.', { d: -0.4 })
    .listen('Ana me prometió que me llamaría el lunes, pero no ha llamado.', 'Qu’avait promis Ana ?', ['D’appeler lundi', 'De venir lundi', 'D’écrire un message'], 0,
      'me llamaría el lunes = elle m’appellerait lundi.', { kc: FORM, d: -0.3 })
    .dictation('Yo en tu lugar, buscaría otro trabajo.', 'yo en tu lugar + buscaría.', { d: -0.3 })
    .repeat('Tendrías que hablar con tu jefe cuanto antes.', 'tendrías que + infinitif = tu devrais ; cuanto antes = le plus tôt possible.', { d: -0.4 })
    .say('Vous devriez réserver l’hôtel maintenant.', [
      'Deberíais reservar el hotel ahora.', 'Deberíais reservar el hotel ya.', 'Vosotros deberíais reservar el hotel ahora.',
      'Debería reservar el hotel ahora.', 'Debería reservar el hotel ya.', 'Usted debería reservar el hotel ahora.',
      'Deberían reservar el hotel ahora.', 'Deberían reservar el hotel ya.', 'Ustedes deberían reservar el hotel ahora.',
    ], 'vous (plusieurs amis) → deberíais ; vous de politesse → debería / deberían.', { d: -0.3 })
    .answer('Un amigo quiere aprender español rápidamente. ¿Qué le aconsejas?', 'Yo que tú vería series en español y hablaría con nativos todos los días.',
      'Conseille avec yo que tú, deberías, tendrías que, lo mejor sería…', {
        kc: [ADVICE, FORM], keywords: [['yo que tú', 'yo en tu lugar', 'deberías', 'tendrías', 'podrías', 'sería', 'yo de ti']], minWords: 12, d: -0.1,
      })
    .build(),
};
