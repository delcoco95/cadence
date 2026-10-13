import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('es');

/**
 * Défis de fin d'unité A2 : items d'évaluation inédits (jamais repris des leçons).
 * Ajouter les nouveaux items à la fin de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_A2: Record<string, Exercise[]> = {
  'es-a2-ser-estar': assessment(
    exercises('cp-es-a2-ser-estar', 'A2', { kc: 'es.a2.grammar.ser_uses' })
      .mcq('Mi novia ___ italiana, de Turín.', ['es', 'está', 'hay'], 0, 'Nationalité → ser : es italiana.', { d: -1.4 })
      .cloze('¿Por qué ___ tan triste hoy?', ['estás'], 'État du moment → estar : estás triste.', { kc: 'es.a2.grammar.estar_uses', hint: 'estar, tú', d: -1.2 })
      .mcq('¿___ un hospital cerca de aquí?', ['Hay', 'Está', 'Es'], 0, 'Existence d’un lieu non identifié (un hospital) → hay.', { kc: 'es.a2.grammar.hay_esta', d: -1.3 })
      .cloze('No quiero ver otra vez esa serie: ___ muy aburrida.', ['es'], 'Qualité de la série (ennuyeuse) → ser aburrida.', { kc: 'es.a2.grammar.ser_estar_adjectives', hint: 'ser ou estar', d: -0.9 })
      .tr('Le musée est fermé le lundi.', ['El museo está cerrado los lunes.', 'El museo cierra los lunes.', 'Los lunes el museo está cerrado.', 'Los lunes el museo cierra.'],
        'Résultat (fermé) → estar cerrado.', { kc: 'es.a2.grammar.estar_uses', d: -0.9 })
      .listen('Mi piso no es muy grande, pero está en el centro y es muy luminoso.', 'Quel est l’avantage de l’appartement ?', ['Il est au centre et lumineux', 'Il est très grand', 'Il est neuf et bon marché'], 0,
        'está en el centro (lieu) ; es muy luminoso (caractéristique).', { kc: ['es.a2.grammar.ser_uses', 'es.a2.grammar.estar_uses'], d: -1.0 })
      .say('Mon frère est malade aujourd’hui.', ['Mi hermano está enfermo hoy.', 'Hoy mi hermano está enfermo.', 'Mi hermano está malo hoy.', 'Hoy mi hermano está malo.'],
        'Malade → estar enfermo (ou estar malo).', { kc: 'es.a2.grammar.ser_estar_adjectives', d: -1.0 })
      .build(),
  ),
  'es-a2-possessives': assessment(
    exercises('cp-es-a2-possessives', 'A2', { kc: 'es.a2.grammar.possessive_short' })
      .mcq('¿Es este vuestro coche? — No, el ___ es el rojo.', ['nuestro', 'nuestros', 'nos'], 0, 'el coche → el nuestro.', { kc: 'es.a2.grammar.possessive_long', d: -1.0 })
      .cloze('Carmen vive con ___ padres en Zaragoza.', ['sus'], 'padres (pluriel) → sus.', { d: -1.4 })
      .mcq('Mira ___ montañas de allí, al fondo: son los Pirineos.', ['aquellas', 'aquellos', 'estas'], 0, 'Loin (allí), féminin pluriel → aquellas.', { kc: 'es.a2.grammar.demonstratives', d: -1.0 })
      .tr('Ces chaussures sont à toi ?', ['¿Estos zapatos son tuyos?', '¿Esos zapatos son tuyos?', '¿Son tuyos estos zapatos?', '¿Son tuyos esos zapatos?'],
        'zapatos (masculin pluriel) → estos / esos, tuyos.', { kc: 'es.a2.grammar.possessive_long', d: -0.9 })
      .order('Leur fille étudie à Valence.', 'Su hija estudia en Valencia.', 'leur → su.', { d: -1.2 })
      .listen('¿Estas maletas son vuestras? — Sí, son nuestras. Bueno, la azul no: esa es de mi hermano.', 'À qui est la valise bleue ?', ['À son frère', 'À eux', 'À la personne qui pose la question'], 0,
        'la azul no: esa es de mi hermano.', { kc: 'es.a2.grammar.possessive_long', d: -0.9 })
      .say('Ça, c’est vrai.', ['Eso es verdad.', 'Esto es verdad.', 'Eso es cierto.', 'Esto es cierto.'], 'Idée → neutre eso.', { kc: 'es.a2.grammar.demonstratives', d: -1.2 })
      .build(),
  ),
  'es-a2-perfecto': assessment(
    exercises('cp-es-a2-perfecto', 'A2', { kc: 'es.a2.tense.perfecto_form' })
      .mcq('Esta semana ___ mucho en la oficina.', ['he trabajado', 'he trabajada', 'soy trabajado'], 0, 'haber + participe invariable.', { d: -1.4 })
      .cloze('¿Dónde has ___ las llaves?', ['puesto'], 'poner → puesto.', { kc: 'es.a2.tense.perfecto_irregular', hint: 'poner', d: -1.1 })
      .cloze('Todavía no ___ la carta a mi abuela.', ['he escrito'], 'escribir → escrito.', { kc: 'es.a2.tense.perfecto_irregular', hint: 'escribir, yo', d: -1.0 })
      .tr('Vous avez déjà mangé du gazpacho ?', [
        '¿Habéis comido gazpacho alguna vez?', '¿Habéis comido alguna vez gazpacho?', '¿Habéis probado el gazpacho alguna vez?', '¿Habéis probado alguna vez el gazpacho?',
        '¿Ha comido gazpacho alguna vez?', '¿Ha comido usted gazpacho alguna vez?', '¿Han comido gazpacho alguna vez?',
      ], 'Expérience → perfecto + alguna vez.', { kc: 'es.a2.tense.perfecto_usage', d: -0.8 })
      .listen('Hoy ha sido un día horrible: he perdido el autobús y me he dejado el móvil en casa.', 'Qu’est-ce qu’elle a oublié ?', ['Son portable', 'Ses clés', 'Son portefeuille'], 0,
        'me he dejado el móvil en casa = j’ai oublié mon portable à la maison.', { d: -1.0 })
      .dictation('Nunca hemos estado en Canarias, pero este año vamos a ir.', 'Expérience → nunca hemos estado.', { kc: 'es.a2.tense.perfecto_usage', d: -0.9 })
      .say('Je n’ai pas encore fini.', [
        'Todavía no he terminado.', 'Aún no he terminado.', 'No he terminado todavía.', 'Todavía no he acabado.', 'Aún no he acabado.', 'No he acabado todavía.', 'Yo todavía no he terminado.',
      ], 'todavía no + perfecto.', { kc: 'es.a2.tense.perfecto_usage', d: -1.0 })
      .build(),
  ),
  'es-a2-indefinido': assessment(
    exercises('cp-es-a2-indefinido', 'A2', { kc: 'es.a2.tense.indefinido_regular' })
      .mcq('En 2015 mis padres ___ a vivir a Valencia.', ['se mudaron', 'se han mudado', 'se mudan'], 0, 'Date passée → indefinido.', { kc: 'es.a2.tense.perfecto_vs_indefinido', d: -1.0 })
      .cloze('Ayer Ana ___ una tarta para mi cumpleaños.', ['hizo'], 'hacer → hizo (avec z).', { kc: 'es.a2.tense.indefinido_irregular', hint: 'hacer', d: -1.0 })
      .cloze('Anoche ___ muy tarde a casa.', ['volví'], 'volver, yo → volví.', { hint: 'volver, yo', d: -1.2 })
      .mcq('¿___ a la fiesta de Marta el sábado?', ['Fuisteis', 'Fuistes', 'Ibais'], 0, 'vosotros → fuisteis (« fuistes » est une faute courante).', { kc: 'es.a2.tense.indefinido_irregular', d: -0.9 })
      .tr('Il y a trois jours, j’ai perdu mes clés.', ['Hace tres días perdí mis llaves.', 'Hace tres días perdí las llaves.', 'Perdí mis llaves hace tres días.', 'Perdí las llaves hace tres días.'],
        'hace + durée → indefinido.', { kc: 'es.a2.tense.perfecto_vs_indefinido', d: -0.9 })
      .listen('El año pasado estuve en México por trabajo. Tuve muchas reuniones, pero también pude visitar Oaxaca.', 'Qu’a-t-il pu faire en plus du travail ?', ['Visiter Oaxaca', 'Apprendre à cuisiner', 'Aller à la plage'], 0,
        'pude visitar Oaxaca = j’ai pu visiter Oaxaca.', { kc: 'es.a2.tense.indefinido_irregular', d: -0.9 })
      .say('Hier, nous sommes {allés|allées} au cinéma.', ['Ayer fuimos al cine.', 'Ayer nosotros fuimos al cine.', 'Ayer nosotras fuimos al cine.', 'Fuimos al cine ayer.'],
        'ir → fuimos.', { kc: 'es.a2.tense.indefinido_irregular', d: -1.1 })
      .build(),
  ),
  'es-a2-imperfecto': assessment(
    exercises('cp-es-a2-imperfecto', 'A2', { kc: 'es.a2.tense.imperfecto_usage' })
      .mcq('Cuando era pequeña, siempre ___ a casa de mis abuelos en verano.', ['iba', 'fui', 'he ido'], 0, 'Habitude → iba.', { d: -1.2 })
      .cloze('Antes ___ en el centro, pero ahora vivimos en las afueras.', ['vivíamos'], 'nosotros → vivíamos.', { kc: 'es.a2.tense.imperfecto_form', hint: 'vivir, nosotros', d: -1.1 })
      .cloze('Mientras mi padre ___ el periódico, mi madre preparaba el café.', ['leía'], 'Action de fond → leía.', { kc: 'es.a2.tense.imperfecto_form', hint: 'leer', d: -1.0 })
      .mcq('Estábamos en el parque cuando ___ a llover.', ['empezó', 'empezaba', 'ha empezado'], 0, 'Événement qui interrompt → indefinido.', { kc: 'es.a2.tense.imperfecto_vs_indefinido', d: -0.9 })
      .tr('Il était dix heures et il pleuvait.', ['Eran las diez y llovía.', 'Eran las diez y estaba lloviendo.'], 'Heure et météo (décor) → imperfecto.', { d: -0.8 })
      .listen('De joven, mi abuelo era pescador. Se levantaba a las cuatro y volvía al puerto por la tarde.', 'À quelle heure se levait le grand-père ?', ['À quatre heures', 'À six heures', 'À midi'], 0,
        'se levantaba a las cuatro.', { d: -1.0 })
      .answer('¿Cómo era tu escuela cuando eras niño o niña?', 'Mi escuela era pequeña y estaba cerca de mi casa. Tenía un patio grande y los profesores eran muy simpáticos.',
        'Description passée → era, estaba, tenía.', { keywords: [['era', 'estaba', 'tenía', 'había', 'eran']], minWords: 12, d: -0.7 })
      .build(),
  ),
  'es-a2-pronouns': assessment(
    exercises('cp-es-a2-pronouns', 'A2', { kc: 'es.a2.grammar.direct_object_pronouns' })
      .mcq('¿Has llamado a tus abuelos? — Sí, ___ he llamado esta mañana.', ['los', 'les', 'las'], 0, 'a tus abuelos (complément direct, masculin pluriel) → los.', { d: -1.0 })
      .cloze('¿La paella? Voy a ___ ahora mismo.', ['prepararla'], 'Pronom collé à l’infinitif.', { kc: 'es.a2.grammar.pronoun_position', hint: 'preparar + la', d: -0.8 })
      .mcq('A Juan ___ duele la cabeza.', ['le', 'lo', 'se'], 0, 'doler + complément indirect → le duele.', { kc: 'es.a2.grammar.indirect_object_pronouns', d: -1.1 })
      .cloze('Necesito tu diccionario. ¿Me ___ dejas?', ['lo'], 'me + lo (el diccionario).', { kc: 'es.a2.grammar.se_lo', d: -1.0 })
      .tr('Je le lui ai donné.', ['Se lo he dado.', 'Se lo di.', 'Yo se lo he dado.', 'Yo se lo di.', 'Se la he dado.', 'Se la di.'],
        'le + lo → se lo.', { kc: 'es.a2.grammar.se_lo', d: -0.7 })
      .listen('¿Has comprado el pan? — No, se me ha olvidado. Lo compro ahora.', 'Quand va-t-il acheter le pain ?', ['Maintenant', 'Demain matin', 'Il ne va pas l’acheter'], 0,
        'Lo compro ahora = je l’achète maintenant.', { d: -1.0 })
      .say('Je te l’explique.', ['Te lo explico.', 'Yo te lo explico.', 'Te la explico.'], 'te + lo.', { kc: 'es.a2.grammar.se_lo', d: -0.9 })
      .build(),
  ),
  'es-a2-future': assessment(
    exercises('cp-es-a2-future', 'A2', { kc: 'es.a2.tense.ir_a' })
      .mcq('Mañana ___ que levantarme a las seis.', ['tengo', 'hay', 'debo'], 0, 'tener que + infinitif.', { kc: 'es.a2.grammar.obligation', d: -1.2 })
      .cloze('El próximo año ___ a Japón.', ['viajaremos'], 'Futur simple : viajar + emos.', { kc: 'es.a2.tense.futuro_simple', hint: 'viajar, nosotros, futur', d: -1.0 })
      .mcq('¿Qué ___ haciendo los niños? — Están jugando en el jardín.', ['están', 'son', 'hay'], 0, 'estar + gérondif.', { kc: 'es.a2.grammar.estar_gerundio', d: -1.3 })
      .cloze('Esta tarde voy ___ estudiar en la biblioteca.', ['a'], 'ir a + infinitif.', { d: -1.4 })
      .tr('Il faudra partir tôt.', [
        'Habrá que salir temprano.', 'Habrá que salir pronto.', 'Tendremos que salir temprano.', 'Tendremos que salir pronto.',
        'Hay que salir temprano.', 'Hay que salir pronto.',
      ], 'hay que au futur → habrá que.', { kc: 'es.a2.grammar.obligation', d: -0.7 })
      .listen('¿Vienes a la playa? — No puedo, estoy estudiando. Tengo un examen el lunes.', 'Pourquoi ne va-t-elle pas à la plage ?', ['Elle révise pour un examen', 'Elle travaille', 'Elle est malade'], 0,
        'estoy estudiando ; tengo un examen.', { kc: 'es.a2.grammar.estar_gerundio', d: -1.0 })
      .say('Nous allons acheter une maison.', ['Vamos a comprar una casa.', 'Nosotros vamos a comprar una casa.', 'Nosotras vamos a comprar una casa.'], 'vamos a + infinitif.', { d: -1.2 })
      .build(),
  ),
  'es-a2-compare': assessment(
    exercises('cp-es-a2-compare', 'A2', { kc: 'es.a2.grammar.comparatives' })
      .mcq('Este ordenador es ___ caro de la tienda.', ['el más', 'más', 'tan'], 0, 'Superlatif → el más… de.', { kc: 'es.a2.grammar.superlatives', d: -1.0 })
      .cloze('Mi hermana pequeña es ___ alta como yo.', ['tan'], 'Égalité → tan… como.', { d: -1.2 })
      .mcq('Este restaurante es ___ que el de ayer.', ['mejor', 'más bueno de', 'buenísimo'], 0, 'bueno → mejor que.', { d: -1.0 })
      .cloze('___ la mesa, por favor, que vamos a comer.', ['poned'], 'vosotros → poned.', { kc: 'es.a2.grammar.imperative_affirmative', hint: 'poner, vosotros', d: -0.8 })
      .tr('Tourne à droite et continue tout droit.', [
        'Gira a la derecha y sigue recto.', 'Gira a la derecha y sigue todo recto.', 'Tuerce a la derecha y sigue recto.', 'Tuerce a la derecha y sigue todo recto.',
      ], 'Impératif tú : gira, sigue.', { kc: 'es.a2.grammar.imperative_affirmative', d: -0.9 })
      .listen('Señora, siéntese aquí, por favor, y espere un momento. El doctor viene enseguida.', 'Que doit faire la dame ?', ['S’asseoir et attendre', 'Revenir demain', 'Entrer dans le cabinet'], 0,
        'siéntese, espere : impératif de usted.', { kc: 'es.a2.grammar.imperative_affirmative', d: -0.9 })
      .answer('¿Cuál es el mejor lugar de tu región? ¿Por qué?', 'El mejor lugar de mi región es la costa, porque las playas son más bonitas y tranquilas que en otras zonas.',
        'el mejor… de ; más… que.', { kc: 'es.a2.grammar.superlatives', keywords: [['mejor', 'más', 'menos', 'tan']], minWords: 12, d: -0.6 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_A2: Record<string, string[]> = {
  'es-a2-ser-estar': ['Je peux décrire une personne, un lieu et un état avec ser ou estar.', 'Je peux demander où se trouve quelque chose avec hay ou está.'],
  'es-a2-possessives': ['Je peux dire à qui appartient un objet.', 'Je peux désigner des choses proches ou lointaines.'],
  'es-a2-perfecto': ['Je peux raconter ce que j’ai fait aujourd’hui ou cette semaine.', 'Je peux parler de mes expériences (déjà, jamais, pas encore).'],
  'es-a2-indefinido': ['Je peux raconter ce que j’ai fait hier, le week-end dernier ou pendant mes vacances.', 'Je peux choisir entre perfecto et indefinido selon la période.'],
  'es-a2-imperfecto': ['Je peux décrire mes habitudes d’autrefois.', 'Je peux raconter une anecdote avec un décor et des événements.'],
  'es-a2-pronouns': ['Je peux éviter les répétitions avec lo, la, le, se lo.', 'Je peux placer les pronoms avec un infinitif, un gérondif ou un impératif.'],
  'es-a2-future': ['Je peux parler de mes projets et faire des prévisions.', 'Je peux dire ce que je dois faire et ce que je suis en train de faire.'],
  'es-a2-compare': ['Je peux comparer des lieux, des objets et des personnes.', 'Je peux donner des conseils et des indications à l’impératif.'],
};
