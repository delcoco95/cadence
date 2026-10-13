import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const ERIR = 'es.a1.verbs.present_er_ir';
const NEG = 'es.a1.grammar.negation';
const STEM = 'es.a1.verbs.stem_change';
const IRHACER = 'es.a1.verbs.ir_hacer';

export const presentErIr1: Lesson = {
  id: 'es-a1-present-er-ir-1',
  cefr: 'A1',
  unitId: 'es-a1-present-er-ir',
  title: 'Le présent des verbes en -er et -ir',
  subtitle: 'Como, bebes, vivimos, escribís…',
  kcIds: [ERIR],
  estMinutes: 8,
  explanation: [
    {
      title: 'comer (manger) et vivir (vivre, habiter)',
      body: 'Les deux groupes ne diffèrent qu’à nosotros et vosotros.',
      table: [
        ['', 'comer', 'vivir'],
        ['yo', 'como', 'vivo'],
        ['tú', 'comes', 'vives'],
        ['él / ella / usted', 'come', 'vive'],
        ['nosotros', 'comemos', 'vivimos'],
        ['vosotros', 'coméis', 'vivís'],
        ['ellos / ellas / ustedes', 'comen', 'viven'],
      ],
      examples: [
        { en: 'Vivimos en un piso pequeño.', fr: 'Nous habitons dans un petit appartement.' },
        { en: '¿Bebes café o té?', fr: 'Tu bois du café ou du thé ?' },
      ],
      tip: 'Verbes en -er : comer, beber (boire), leer (lire), aprender (apprendre), comprender (comprendre), vender (vendre). Verbes en -ir : vivir, escribir (écrire), abrir (ouvrir), recibir (recevoir), compartir (partager).',
    },
    {
      title: 'Petits pièges',
      examples: [
        { en: 'Vivo en Sevilla.', fr: 'J’habite à Séville.' },
        { en: 'Mis hijos aprenden inglés en el colegio.', fr: 'Mes enfants apprennent l’anglais à l’école.' },
        { en: 'No comen carne.', fr: 'Ils ne mangent pas de viande.' },
      ],
      tip: 'Pour une ville, « à » se dit en : « Vivo a Madrid » ✗ → « Vivo en Madrid » ✓. Faux ami : el colegio = l’école (primaire ou secondaire), pas le collège seulement.',
    },
  ],
  exercises: exercises('es-a1-present-er-ir-1', 'A1', { kc: ERIR })
    .cloze('Nosotros ___ en un piso pequeño.', ['vivimos'], 'nosotros, verbe en -ir → -imos.', { hint: 'vivir', d: -2.2 })
    .cloze('¿Tú ___ café o té?', ['bebes'], 'tú, verbe en -er → -es.', { hint: 'beber', d: -2.3 })
    .mcq('¿Vosotros ___ en el centro?', ['vivís', 'vivéis', 'viven'], 0, 'vosotros, verbe en -ir → -ís : vivís.', { d: -1.8 })
    .mcq('Mi padre ___ el periódico todos los días.', ['lee', 'lea', 'leo'], 0, 'él → lee.', { d: -2.0 })
    .type('Conjugue escribir au présent avec yo.', ['escribo', 'yo escribo'], 'yo → -o : escribo.', { d: -2.4 })
    .type('Conjugue comer au présent avec vosotros.', ['coméis', 'vosotros coméis'], 'vosotros, verbe en -er → -éis : coméis.', { d: -1.8 })
    .order('Mes enfants apprennent l’anglais à l’école.', 'Mis hijos aprenden inglés en el colegio.', 'ellos → aprenden ; el colegio = l’école.', { distractors: ['aprendan'], d: -1.8 })
    .tr('J’habite à Séville.', ['Vivo en Sevilla.', 'Yo vivo en Sevilla.'], 'vivir en + ville.', { d: -2.2 })
    .tr('Ils ne mangent pas de viande.', ['No comen carne.', 'Ellos no comen carne.', 'Ellas no comen carne.'], 'no + comen ; pas d’article : carne.', { kc: [ERIR, NEG], d: -1.8 })
    .listen('Vivo con dos amigos y compartimos un piso cerca de la universidad.', 'Avec qui vit-il ?', ['Avec deux amis', 'Avec ses parents', 'Seul'], 0,
      'compartimos un piso = nous partageons un appartement.', { d: -1.8 })
    .listen('¿Qué bebéis? — Yo, una cerveza, y ella, un vino blanco.', 'Que boit la femme ?', ['Du vin blanc', 'Une bière', 'De l’eau'], 0,
      'y ella, un vino blanco = et elle, un vin blanc.', { d: -1.8 })
    .say('Je ne comprends pas.', ['No entiendo.', 'No comprendo.', 'No lo entiendo.', 'No lo comprendo.'], 'No entiendo est le plus courant ; No comprendo est aussi correct.', { kc: [ERIR, NEG], d: -2.2 })
    .dictation('Recibimos muchos correos cada día.', 'nosotros → recibimos ; un correo = un e-mail.', { d: -1.7 })
    .repeat('Leo un libro y bebo un café con leche.', 'beber : b et v se prononcent pareil.', { d: -2.2 })
    .say('Vous écrivez beaucoup ? (à des amis)', ['¿Escribís mucho?', '¿Vosotros escribís mucho?', '¿Vosotras escribís mucho?'], 'vosotros, verbe en -ir → escribís.', { d: -1.7 })
    .build(),
};

export const presentErIr2: Lesson = {
  id: 'es-a1-present-er-ir-2',
  cefr: 'A1',
  unitId: 'es-a1-present-er-ir',
  title: 'Verbes à diphtongue · ir et hacer',
  subtitle: 'Quiero, puedo, voy, hago…',
  kcIds: [STEM, IRHACER],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les diphtongues : e → ie, o → ue',
      body: 'Dans certains verbes, la voyelle du radical change quand elle porte l’accent : partout sauf à nosotros et vosotros.',
      table: [
        ['querer (vouloir)', 'quiero, quieres, quiere, queremos, queréis, quieren'],
        ['poder (pouvoir)', 'puedo, puedes, puede, podemos, podéis, pueden'],
        ['e → ie', 'pensar, empezar, cerrar, entender, preferir'],
        ['o → ue', 'dormir, volver, costar, encontrar · jugar (u → ue)'],
      ],
      examples: [
        { en: '¿Quieres un café?', fr: 'Tu veux un café ?' },
        { en: 'No podemos venir mañana.', fr: 'Nous ne pouvons pas venir demain.' },
      ],
      tip: 'nosotros et vosotros gardent la voyelle de l’infinitif : « puedemos » ✗ → « podemos » ✓, « quieréis » ✗ → « queréis » ✓.',
    },
    {
      title: 'ir (aller) et hacer (faire)',
      table: [
        ['ir', 'voy, vas, va, vamos, vais, van'],
        ['hacer', 'hago, haces, hace, hacemos, hacéis, hacen'],
      ],
      examples: [
        { en: 'Voy a la playa.', fr: 'Je vais à la plage.' },
        { en: 'Esta noche voy a cenar con Ana.', fr: 'Ce soir, je vais dîner avec Ana.' },
        { en: '¿Qué haces?', fr: 'Qu’est-ce que tu fais ?' },
        { en: 'Hoy hace calor.', fr: 'Aujourd’hui, il fait chaud.' },
      ],
      tip: 'ir a + lieu (al, a la) : « Voy en Madrid » ✗ → « Voy a Madrid » ✓. ir a + infinitif = futur proche : voy a cenar. Le temps qu’il fait → hace (hace calor), ce que l’on ressent → tener (tengo calor).',
    },
  ],
  exercises: exercises('es-a1-present-er-ir-2', 'A1', { kc: STEM })
    .cloze('¿___ un café?', ['Quieres'], 'querer, tú → quieres (e → ie).', { hint: 'querer, tú', d: -2.2 })
    .cloze('Nosotros no ___ venir mañana.', ['podemos'], 'nosotros garde le o : podemos.', { hint: 'poder', d: -1.7 })
    .mcq('¿Adónde ___ vosotros este verano?', ['vais', 'vas', 'van'], 0, 'ir, vosotros → vais.', { kc: IRHACER, d: -1.8 })
    .type('Conjugue poder au présent avec yo.', ['puedo', 'yo puedo'], 'o → ue : puedo.', { d: -2.0 })
    .type('Conjugue hacer au présent avec yo.', ['hago', 'yo hago'], 'hacer est irrégulier à yo : hago.', { kc: IRHACER, d: -2.0 })
    .order('Ce soir, je vais dîner avec Ana.', 'Esta noche voy a cenar con Ana.', 'Futur proche : ir a + infinitif.', { kc: IRHACER, distractors: ['en'], d: -1.7 })
    .tr('Je peux ouvrir la fenêtre ?', ['¿Puedo abrir la ventana?', '¿Se puede abrir la ventana?'], 'poder → puedo + infinitif.', { d: -1.8 })
    .tr('Qu’est-ce que tu fais ce week-end ?', ['¿Qué haces este fin de semana?', '¿Qué vas a hacer este fin de semana?', '¿Tú qué haces este fin de semana?'],
      'hacer, tú → haces ; el fin de semana = le week-end.', { kc: IRHACER, d: -1.7 })
    .listen('Prefiero ir en tren, porque el avión cuesta mucho.', 'Pourquoi préfère-t-elle le train ?', ['L’avion coûte cher', 'Le train est plus rapide', 'Elle a peur de l’avion'], 0,
      'prefiero (e → ie), cuesta (o → ue) : el avión cuesta mucho = l’avion coûte cher.', { d: -1.7 })
    .listen('Mañana vamos a la playa. ¿Vienes con nosotros?', 'Que proposent-ils ?', ['D’aller à la plage demain', 'D’aller au cinéma ce soir', 'De rester à la maison'], 0,
      'vamos a la playa = nous allons à la plage ; ¿Vienes? = tu viens ?', { kc: IRHACER, d: -1.8 })
    .mcq('Que propose Laura à Marc ?', ['De venir à Tolède en voiture samedi', 'D’aller à Tolède en train dimanche', 'De l’aider à déménager samedi'], 0,
      'Este sábado vamos a Toledo en coche. ¿Quieres venir?',
      { kc: [IRHACER, STEM], passage: '¡Hola, Marc! Este sábado vamos a Toledo en coche. Salimos a las nueve de la mañana. ¿Quieres venir? Hay sitio para una persona más. Si no puedes, no pasa nada. ¡Besos! Laura', d: -1.7 })
    .dictation('No entiendo la pregunta, ¿puedes repetir?', 'entender → entiendo, poder → puedes.', { d: -1.7 })
    .repeat('Duermo ocho horas y vuelvo a casa temprano.', 'dormir → duermo, volver → vuelvo.', { d: -1.9 })
    .say('Je vais à la plage.', ['Voy a la playa.', 'Yo voy a la playa.'], 'ir → voy ; a la playa.', { kc: IRHACER, d: -2.2 })
    .say('Je veux une bière, s’il te plaît.', ['Quiero una cerveza, por favor.', 'Quiero una caña, por favor.'], 'querer → quiero.', { d: -2.1 })
    .build(),
};
