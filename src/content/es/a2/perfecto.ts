import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const FORM = 'es.a2.tense.perfecto_form';
const IRR = 'es.a2.tense.perfecto_irregular';
const USE = 'es.a2.tense.perfecto_usage';

export const perfecto1: Lesson = {
  id: 'es-a2-perfecto-1',
  cefr: 'A2',
  unitId: 'es-a2-perfecto',
  title: 'Pretérito perfecto : la forme',
  subtitle: 'He comido, has visto, hemos hecho',
  kcIds: [FORM, IRR],
  estMinutes: 9,
  explanation: [
    {
      title: 'haber + participe',
      body: 'Le pretérito perfecto se forme avec haber au présent et le participe passé : -ar → -ado, -er et -ir → -ido. Le participe est invariable.',
      table: [
        ['yo', 'he hablado'],
        ['tú', 'has comido'],
        ['él, ella, usted', 'ha vivido'],
        ['nosotros', 'hemos hablado'],
        ['vosotros', 'habéis comido'],
        ['ellos, ellas, ustedes', 'han vivido'],
      ],
      examples: [
        { en: 'Hoy he trabajado mucho.', fr: 'Aujourd’hui, j’ai beaucoup travaillé.' },
        { en: 'Mi hermana ha salido con sus amigas.', fr: 'Ma sœur est sortie avec ses amies.' },
      ],
      tip: 'Toujours haber, même là où le français prend « être » : « Soy llegado » ✗ → « He llegado » ✓. Et pas d’accord : ella ha salido (pas « salida »). Rien ne s’intercale entre haber et le participe : Lo he visto.',
    },
    {
      title: 'Les participes irréguliers',
      body: 'Une dizaine de verbes très fréquents ont un participe irrégulier. Ils sont à connaître par cœur.',
      table: [
        ['hacer → hecho', 'decir → dicho'],
        ['ver → visto', 'poner → puesto'],
        ['escribir → escrito', 'volver → vuelto'],
        ['abrir → abierto', 'romper → roto'],
        ['morir → muerto', 'descubrir → descubierto'],
      ],
      examples: [
        { en: '¿Qué has hecho este fin de semana?', fr: 'Qu’est-ce que tu as fait ce week-end ?' },
        { en: 'Todavía no hemos visto la nueva película de Almodóvar.', fr: 'Nous n’avons pas encore vu le nouveau film d’Almodóvar.' },
      ],
      tip: 'Pas de « hacido » ni de « escribido ». Attention aussi à l’accent de leído (leer), oído (oír), traído (traer).',
    },
  ],
  exercises: exercises('es-a2-perfecto-1', 'A2', { kc: FORM, tense: 'perfecto' })
    .mcq('Esta mañana (yo) ___ el autobús de las ocho.', ['he cogido', 'soy cogido', 'he cogida'], 0, 'haber + participe invariable : he cogido.', { d: -1.5 })
    .mcq('Mis padres ___ a Sevilla esta semana.', ['han ido', 'son idos', 'han ida'], 0, 'Même les verbes de mouvement prennent haber : han ido.', { d: -1.4 })
    .cloze('¿Quién ___ la ventana? Hace frío.', ['ha abierto'], 'abrir → abierto (irrégulier).', { kc: IRR, hint: 'abrir', d: -1.1 })
    .cloze('Todavía no hemos ___ los deberes.', ['hecho'], 'hacer → hecho.', { kc: IRR, hint: 'hacer', d: -1.2 })
    .type('Donne le participe passé de « escribir ».', ['escrito'], 'escribir → escrito (et non « escribido »).', { kc: IRR, d: -1.3 })
    .type('Conjugue « comer » au pretérito perfecto avec « vosotros ».', ['habéis comido'], 'vosotros → habéis + comido.', { d: -1.2 })
    .order('Elle n’a rien dit.', 'Ella no ha dicho nada.', 'decir → dicho ; no se place avant haber.', { kc: IRR, distractors: ['hecho'], d: -1.0 })
    .tr('Aujourd’hui, j’ai vu Pablo au marché.', [
      'Hoy he visto a Pablo en el mercado.', 'Hoy yo he visto a Pablo en el mercado.', 'He visto a Pablo en el mercado hoy.',
    ], 'ver → visto ; « a » devant une personne complément (a Pablo).', { kc: IRR, d: -1.0 })
    .tr('Ce matin, nous avons écrit un courriel au directeur.', [
      'Esta mañana hemos escrito un correo al director.', 'Esta mañana le hemos escrito un correo al director.',
      'Esta mañana hemos escrito un email al director.', 'Esta mañana hemos escrito un correo electrónico al director.',
      'Esta mañana nosotros hemos escrito un correo al director.', 'Hemos escrito un correo al director esta mañana.',
    ], 'escribir → escrito ; esta mañana → perfecto.', { kc: IRR, d: -0.9 })
    .listen('¿Has visto mis gafas? — No, no las he visto. ¿Las has buscado en el coche?', 'Que cherche la personne ?', ['Ses lunettes', 'Ses clés', 'Sa voiture'], 0,
      'mis gafas = mes lunettes ; no las he visto = je ne les ai pas vues.', { kc: IRR, d: -1.2 })
    .listen('Perdona el retraso: he perdido el metro y he venido andando.', 'Pourquoi est-il en retard ?', ['Il a raté le métro et il est venu à pied', 'Il s’est réveillé tard', 'Sa voiture est tombée en panne'], 0,
      'he perdido el metro = j’ai raté le métro ; he venido andando = je suis venu à pied.', { d: -1.0 })
    .dictation('Hemos vuelto a casa muy tarde y no hemos hecho la cena.', 'volver → vuelto ; hacer → hecho.', { kc: IRR, d: -0.9 })
    .repeat('He leído el libro, pero no he visto la película.', 'leído (accent) ; visto (irrégulier).', { kc: [FORM, IRR], d: -1.2 })
    .say('Qu’est-ce que tu as fait aujourd’hui ?', ['¿Qué has hecho hoy?', '¿Qué has hecho tú hoy?', '¿Tú qué has hecho hoy?', '¿Qué has hecho hoy tú?'],
      'hacer → hecho ; hoy → perfecto.', { kc: IRR, d: -1.1 })
    .answer('¿Qué has hecho esta mañana?', 'Esta mañana me he levantado a las siete, he desayunado y he ido a la oficina en metro.',
      'Enchaîne les actions au perfecto : he desayunado, he ido…', { kc: [FORM, IRR], keywords: [['he', 'has', 'ha', 'hemos']], minWords: 10, d: -0.8 })
    .build(),
};

export const perfecto2: Lesson = {
  id: 'es-a2-perfecto-2',
  cefr: 'A2',
  unitId: 'es-a2-perfecto',
  title: 'Hoy, ya, todavía no, alguna vez',
  subtitle: 'Quand employer le perfecto en Espagne',
  kcIds: [USE],
  estMinutes: 9,
  explanation: [
    {
      title: 'Un passé encore lié au présent',
      body: 'En Espagne, le perfecto s’emploie pour une action passée dans une période qui n’est pas terminée, pour un passé très récent et pour les expériences de la vie.',
      table: [
        ['période en cours', 'hoy, esta mañana, esta semana, este mes, este año'],
        ['passé très récent', 'hace un rato, hace poco, hace cinco minutos'],
        ['expérience', 'alguna vez, nunca, muchas veces, ya'],
      ],
      examples: [
        { en: 'Esta semana he ido dos veces al gimnasio.', fr: 'Cette semaine, je suis allé deux fois à la salle de sport.' },
        { en: 'Hace un rato ha llamado tu madre.', fr: 'Ta mère a appelé il y a un instant.' },
      ],
      tip: 'En Espagne on dit « Hoy he comido paella » : le perfecto correspond bien au passé composé français pour ce qui est récent. « Hoy comí » s’entend surtout en Amérique latine et aux Canaries.',
    },
    {
      title: 'ya, todavía no, alguna vez, nunca',
      body: 'ya (déjà) se place avant haber ou à la fin ; todavía no / aún no (pas encore) avant haber, ou no… todavía. alguna vez (déjà, dans une question sur l’expérience) et nunca (jamais).',
      table: [
        ['déjà', 'Ya he comido. / He comido ya.'],
        ['pas encore', 'Todavía no he comido. / No he comido todavía.'],
        ['expérience', '¿Has estado alguna vez en Sevilla?'],
        ['jamais', 'Nunca he estado en Sevilla. / No he estado nunca en Sevilla.'],
      ],
      examples: [
        { en: '¿Ya habéis reservado el hotel?', fr: 'Vous avez déjà réservé l’hôtel ?' },
        { en: 'Nunca he probado el pulpo.', fr: 'Je n’ai jamais goûté le poulpe.' },
      ],
      tip: 'Dans une question sur l’expérience, « déjà » se dit alguna vez : « Tu es déjà allé à Séville ? » → ¿Has estado alguna vez en Sevilla? Et si nunca suit le verbe, il faut no devant : No he estado nunca.',
    },
  ],
  exercises: exercises('es-a2-perfecto-2', 'A2', { kc: USE, tense: 'perfecto' })
    .mcq('¿___ alguna vez en Galicia? (vosotros)', ['Habéis estado', 'Habéis sido', 'Estáis estado'], 0, 'Expérience → perfecto de estar : habéis estado.', { d: -1.2 })
    .cloze('No he terminado el informe ___. Lo termino mañana.', ['todavía', 'aún'], 'no… todavía = pas encore.', { hint: 'encore', d: -1.0 })
    .cloze('Nunca ___ en avión. Me da miedo.', ['he viajado'], 'Expérience → perfecto : nunca he viajado.', { hint: 'viajar, yo', d: -1.1 })
    .mcq('Pourquoi Clara n’a-t-elle pas encore rencontré sa cheffe ?', ['Elle est en voyage', 'Elle est malade', 'Elle travaille dans un autre bureau'], 0,
      'todavía no he conocido a mi jefa: está de viaje.',
      {
        d: -0.9,
        passage: 'Mensaje de Clara a su hermano\n¡Hola, Juan! ¿Qué tal la semana? La mía ha sido muy intensa. Esta semana he empezado en el nuevo trabajo y hasta ahora todo ha ido bien. Mis compañeros son muy simpáticos, pero todavía no he conocido a mi jefa: está de viaje. Esta tarde he ido al gimnasio por primera vez en dos meses y estoy muerta. ¿Has hablado ya con mamá? Un beso.',
      })
    .type('Réponds négativement avec « todavía no » : « ¿Has hecho la maleta? »', [
      'No, todavía no la he hecho.', 'Todavía no la he hecho.', 'No, todavía no.', 'No, todavía no he hecho la maleta.',
      'Todavía no he hecho la maleta.', 'No, no la he hecho todavía.', 'No, aún no la he hecho.',
    ], 'todavía no + haber : Todavía no la he hecho.', { loose: true, d: -0.8 })
    .type('Mets au pretérito perfecto : « Hoy (nosotros, desayunar) en una cafetería. »', ['Hoy hemos desayunado en una cafetería.', 'hemos desayunado'],
      'hoy → perfecto : hemos desayunado.', { kc: [USE, FORM], loose: true, d: -1.1 })
    .order('Je ne suis jamais {allé|allée} à Grenade.', 'Nunca he estado en Granada.', 'Expérience → nunca + perfecto de estar.', { distractors: ['sido'], d: -1.0 })
    .tr('Ce matin, j’ai pris un café avec Marta.', [
      'Esta mañana he tomado un café con Marta.', 'Esta mañana me he tomado un café con Marta.', 'Esta mañana yo he tomado un café con Marta.',
      'He tomado un café con Marta esta mañana.', 'Me he tomado un café con Marta esta mañana.',
    ], 'esta mañana → perfecto : he tomado.', { d: -1.0 })
    .tr('Tu as déjà fini ?', ['¿Ya has terminado?', '¿Has terminado ya?', '¿Ya has acabado?', '¿Has acabado ya?', '¿Tú ya has terminado?', '¿Tú ya has acabado?'],
      'ya + perfecto ; terminar ou acabar.', { d: -1.1 })
    .listen('Este año hemos viajado mucho: hemos estado en Roma, en Lisboa y en Berlín. Todavía no hemos ido a París.', 'Quelle ville n’ont-ils pas encore visitée ?', ['Paris', 'Berlin', 'Lisbonne'], 0,
      'Todavía no hemos ido a París = nous ne sommes pas encore allés à Paris.', { d: -1.0 })
    .listen('¿Habéis probado alguna vez el pulpo a la gallega? — Yo sí, pero Ana nunca lo ha probado.', 'Qui n’a jamais goûté le poulpe ?', ['Ana', 'La personne qui répond', 'Personne'], 0,
      'Ana nunca lo ha probado = Ana ne l’a jamais goûté.', { d: -0.9 })
    .dictation('Esta semana he trabajado mucho y todavía no he descansado.', 'esta semana → perfecto ; todavía no avant haber.', { d: -0.9 })
    .repeat('¿Has estado alguna vez en Mallorca? — No, nunca.', 'alguna vez = déjà (expérience) ; nunca = jamais.', { d: -1.3 })
    .say('Nous avons déjà mangé.', ['Ya hemos comido.', 'Hemos comido ya.', 'Nosotros ya hemos comido.', 'Nosotras ya hemos comido.'], 'ya + hemos comido.', { d: -1.3 })
    .answer('¿Qué cosas interesantes has hecho este año? ¿Hay algo que todavía no has hecho?', 'Este año he viajado a Portugal y he empezado a estudiar español. Todavía no he ido a Madrid.',
      'este año → perfecto ; todavía no he… pour ce qui reste à faire.', { kc: [USE, FORM], keywords: [['he', 'hemos'], ['todavía', 'nunca', 'ya', 'alguna', 'aún']], minWords: 12, d: -0.7 })
    .build(),
};
