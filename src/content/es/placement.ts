import { placementBank, type PlacementExercise, type PlacementRaw } from '../placement';

/**
 * Banque du test de niveau d'espagnol : items ORIGINAUX, calibrés sur une bande CECRL (A1 à C1),
 * réservés à l'évaluation. Les items A1 et A2 indiquent l'unité du parcours qu'ils permettent de valider.
 */
const GRAMMAR: PlacementRaw[] = [
  { band: 'A1', q: '¿De dónde ___ tú? — Soy de Lyon.', o: ['eres', 'es', 'estás', 'soy'], a: 0, why: 'Origine → ser ; avec tú → eres.', unit: 'es-a1-hello' },
  { band: 'A1', q: 'Tengo ___ hermana y dos hermanos.', o: ['un', 'una', 'unos', 'la'], a: 1, why: 'hermana est féminin singulier → una.', unit: 'es-a1-nouns' },
  { band: 'A1', q: 'En mi calle ___ un supermercado.', o: ['está', 'es', 'hay', 'tiene'], a: 2, why: 'Existence d’une chose non définie (un supermercado) → hay (il y a).', unit: 'es-a1-articles' },
  { band: 'A1', q: 'Mi hermano ___ veinte años.', o: ['es', 'tiene', 'está', 'hay'], a: 1, why: 'L’âge s’exprime avec tener : tiene veinte años (et non « es »).', unit: 'es-a1-tener' },
  { band: 'A1', q: 'Nosotros ___ en una oficina.', o: ['trabajáis', 'trabajan', 'trabajo', 'trabajamos'], a: 3, why: 'nosotros → -amos : trabajamos.', unit: 'es-a1-present-ar' },
  { band: 'A1', q: 'Hoy no ___ ir al cine, tengo mucho trabajo.', o: ['puedo', 'podo', 'puedes', 'pueda'], a: 0, why: 'poder diphtongue (o > ue) : yo puedo.', unit: 'es-a1-present-er-ir' },
  { band: 'A1', q: 'La clase empieza ___ las nueve.', o: ['en', 'a', 'de', 'por'], a: 1, why: 'L’heure d’un événement → a las nueve.', unit: 'es-a1-time' },
  { band: 'A1', q: 'A mí me ___ mucho los gatos.', o: ['gusta', 'gusto', 'gustan', 'gustas'], a: 2, why: 'Avec gustar, le verbe s’accorde avec ce qui plaît : los gatos → gustan.', unit: 'es-a1-daily' },
  { band: 'A2', q: 'La farmacia ___ al lado del banco.', o: ['es', 'hay', 'está', 'tiene'], a: 2, why: 'Situer un lieu précis (la farmacia) → estar. Hay sert pour un élément indéfini.', unit: 'es-a2-ser-estar' },
  { band: 'A2', q: 'Este no es tu móvil, es el ___.', o: ['mío', 'mi', 'mía', 'me'], a: 0, why: 'Pronom possessif après l’article : el mío (masculin, comme el móvil).', unit: 'es-a2-possessives' },
  { band: 'A2', q: '¿Ya has ___ los deberes?', o: ['hacido', 'hecho', 'hizo', 'hace'], a: 1, why: 'Participe irrégulier : hacer → hecho.', unit: 'es-a2-perfecto' },
  { band: 'A2', q: 'El verano pasado ___ a Sevilla con mis padres.', o: ['he ido', 'iba', 'voy', 'fui'], a: 3, why: 'Moment passé terminé (el verano pasado) → indefinido : fui.', unit: 'es-a2-indefinido' },
  { band: 'A2', q: 'Cuando era niño, ___ al fútbol todos los sábados.', o: ['jugaba', 'jugaré', 'he jugado', 'juegue'], a: 0, why: 'Habitude dans le passé → imperfecto : jugaba.', unit: 'es-a2-imperfecto' },
  { band: 'A2', q: '¿Las llaves? No ___ encuentro.', o: ['les', 'las', 'los', 'la'], a: 1, why: 'COD féminin pluriel (las llaves) → las.', unit: 'es-a2-pronouns' },
  { band: 'A2', q: 'Coge el paraguas: mañana ___ a llover.', o: ['vas', 'voy', 'va', 'vamos'], a: 2, why: 'Futur proche : ir a + infinitif ; llover est à la 3e personne → va.', unit: 'es-a2-future' },
  { band: 'A2', q: 'Madrid es ___ grande que Sevilla.', o: ['más', 'tan', 'muy', 'mucho'], a: 0, why: 'Comparatif de supériorité : más … que.', unit: 'es-a2-compare' },
  { band: 'A2+', q: 'Hoy Laura no ha venido: ___ enferma.', o: ['es', 'está', 'tiene', 'hay'], a: 1, why: 'État passager → estar enferma.', unit: 'es-a2-ser-estar' },
  { band: 'A2+', q: 'Mientras ___ la cena, sonó el teléfono.', o: ['preparé', 'he preparado', 'preparaba', 'prepare'], a: 2, why: 'Action en cours interrompue → imperfecto ; l’interruption → indefinido.', unit: 'es-a2-imperfecto' },
  { band: 'A2+', q: '¿Le has dado el regalo a Pablo? — Sí, ya ___ he dado.', o: ['le lo', 'se lo', 'lo le', 'se le'], a: 1, why: 'le + lo devient se lo, toujours dans cet ordre.', unit: 'es-a2-pronouns' },
  { band: 'A2+', q: 'Chicos, ___ los deberes antes de cenar.', o: ['hacéis', 'hacer', 'hagáis', 'haced'], a: 3, why: 'Impératif affirmatif de vosotros : infinitif en -d → haced.', unit: 'es-a2-compare' },
  { band: 'B1', q: 'Quiero que ___ a mi fiesta el sábado.', o: ['vienes', 'vengas', 'venir', 'vendrás'], a: 1, why: 'querer que + subjonctif : vengas.' },
  { band: 'B1', q: 'Si tengo tiempo, te ___ esta tarde.', o: ['llamaría', 'llamara', 'llamo', 'llame'], a: 2, why: 'Hypothèse réelle : si + présent, puis présent ou futur.' },
  { band: 'B1', q: 'Este regalo es ___ ti.', o: ['por', 'para', 'a', 'de'], a: 1, why: 'Destinataire → para.' },
  { band: 'B1', q: 'En tu lugar, yo ___ con ella.', o: ['hablaría', 'hablaré', 'hablara', 'hable'], a: 0, why: 'Conseil (« à ta place ») → conditionnel : hablaría.' },
  { band: 'B1+', q: 'Cuando ___ a Madrid, llámame.', o: ['llegas', 'llegarás', 'llegues', 'llegaras'], a: 2, why: 'cuando + action future → subjonctif présent (jamais le futur, contrairement au français).' },
  { band: 'B1+', q: 'Cuando llegué a la estación, el tren ya ___.', o: ['había salido', 'salió', 'ha salido', 'salía'], a: 0, why: 'Antériorité dans le passé → plus-que-parfait : había salido.' },
  { band: 'B1+', q: 'Si ___ más tiempo, aprendería a tocar la guitarra.', o: ['tendría', 'tuviera', 'tengo', 'tenga'], a: 1, why: 'Hypothèse irréelle au présent : si + subjonctif imparfait (jamais le conditionnel après si).' },
  { band: 'B2', q: 'Me pidió que no se lo ___ a nadie.', o: ['diga', 'diría', 'dijera', 'decía'], a: 2, why: 'Principale au passé → subjonctif imparfait : dijera.' },
  { band: 'B2', q: 'Busco un piso que ___ terraza.', o: ['tenga', 'tiene', 'tendrá', 'tuviera'], a: 0, why: 'Relative sur un antécédent non identifié (que je cherche) → subjonctif.' },
  { band: 'B2', q: 'Llevo tres años ___ español.', o: ['estudiar', 'estudiando', 'estudiado', 'a estudiar'], a: 1, why: 'llevar + durée + gérondif = « cela fait … que ».' },
  { band: 'B2+', q: 'Si me lo ___ antes, te habría ayudado.', o: ['habrías dicho', 'dijeras', 'has dicho', 'hubieras dicho'], a: 3, why: 'Irréel du passé : si + plus-que-parfait du subjonctif, puis conditionnel passé.' },
  { band: 'B2+', q: 'Por mucho que ___, no lo vas a convencer.', o: ['insistes', 'insistas', 'insistirás', 'insistías'], a: 1, why: 'por mucho que (concession hypothétique) + subjonctif.' },
  { band: 'C1', q: 'No es que no ___ ayudarte, es que no puedo.', o: ['quiera', 'quiero', 'querré', 'quería'], a: 0, why: 'no es que + subjonctif : on rejette une explication.' },
  { band: 'C1', q: 'Son las once: Luis ya ___ a casa, así que lo llamo.', o: ['llegaría', 'haya llegado', 'hubiera llegado', 'habrá llegado'], a: 3, why: 'Supposition sur un fait accompli → futur antérieur de probabilité : habrá llegado.' },
];

const VOCABULARY: PlacementRaw[] = [
  { band: 'A1', q: '— ¡Hola! ¿Qué tal? — Muy bien, ___. ¿Y tú?', o: ['de nada', 'gracias', 'perdón', 'adiós'], a: 1, why: 'Muy bien, gracias = très bien, merci.', unit: 'es-a1-hello' },
  { band: 'A1', q: 'El padre de mi madre es mi ___.', o: ['tío', 'primo', 'abuelo', 'sobrino'], a: 2, why: 'abuelo = grand-père.' },
  { band: 'A1', q: 'Después del lunes viene el ___.', o: ['martes', 'miércoles', 'domingo', 'jueves'], a: 0, why: 'lunes (lundi) → martes (mardi).', unit: 'es-a1-time' },
  { band: 'A1', q: 'La nieve es ___.', o: ['negra', 'blanco', 'blanca', 'roja'], a: 2, why: 'blanc ; la nieve est féminin → blanca.', unit: 'es-a1-tener' },
  { band: 'A1', q: 'Tengo sed. ¿Me das un vaso de ___?', o: ['pan', 'agua', 'queso', 'arroz'], a: 1, why: 'tener sed = avoir soif → agua (eau).' },
  { band: 'A2', q: '¿Puedo pagar con ___?', o: ['carta', 'billete', 'tarjeta', 'cuenta'], a: 2, why: 'tarjeta = carte bancaire ; carta = lettre (faux ami).' },
  { band: 'A2', q: 'Estoy muy ___: anoche no dormí nada.', o: ['cansado', 'aburrido', 'enfadado', 'constipado'], a: 0, why: 'cansado = fatigué.' },
  { band: 'A2', q: 'Para ir al aeropuerto, ¿dónde ___ el autobús?', o: ['llevo', 'cojo', 'monto', 'pongo'], a: 1, why: 'coger el autobús = prendre le bus (en Espagne).' },
  { band: 'A2', q: 'Me duele una ___; tengo que ir al dentista.', o: ['espalda', 'pierna', 'rodilla', 'muela'], a: 3, why: 'muela = dent (molaire) : on va chez le dentiste.' },
  { band: 'A2+', q: 'Mi hermana está ___: va a tener un bebé.', o: ['embarazosa', 'embarazada', 'avergonzada', 'casada'], a: 1, why: 'embarazada = enceinte (faux ami : embarrassée = avergonzada).' },
  { band: 'A2+', q: 'He perdido el tren y voy a llegar ___ al trabajo.', o: ['pronto', 'temprano', 'tarde', 'retraso'], a: 2, why: 'llegar tarde = arriver en retard ; pronto = tôt (en Espagne).' },
  { band: 'A2+', q: 'Este fin de semana vamos a ___ una excursión a la sierra.', o: ['hacer', 'dar', 'tomar', 'poner'], a: 0, why: 'hacer una excursión = faire une excursion.' },
  { band: 'B1', q: 'Estudié mucho y ___ el examen con un ocho.', o: ['suspendí', 'aprobé', 'gané', 'recibí'], a: 1, why: 'aprobar un examen = réussir un examen ; suspender = échouer.' },
  { band: 'B1', q: 'El jefe está enfermo, así que hemos ___ la reunión hasta la semana que viene.', o: ['adelantado', 'cumplido', 'aplazado', 'realizado'], a: 2, why: 'aplazar = reporter.' },
  { band: 'B1', q: '¿Me ___ un favor? Necesito ayuda con la mudanza.', o: ['haces', 'das', 'tomas', 'pones'], a: 0, why: 'hacer un favor = rendre service.' },
  { band: 'B1+', q: 'No me ___ bien la cena: me duele el estómago.', o: ['cayó', 'sentó', 'fue', 'pasó'], a: 1, why: 'sentar bien / mal = bien / mal passer (un repas).' },
  { band: 'B1+', q: 'Tengo muchas ___ de verte.', o: ['prisas', 'esperas', 'deseos', 'ganas'], a: 3, why: 'tener ganas de = avoir envie de.' },
  { band: 'B2', q: 'El gobierno ha ___ nuevas medidas para reducir el paro.', o: ['adoptado', 'hecho', 'dado', 'puesto'], a: 0, why: 'adoptar medidas = prendre des mesures.' },
  { band: 'B2', q: 'Tras la crisis, la empresa tuvo que ___ a cien trabajadores.', o: ['dimitir', 'despedir', 'despegar', 'desplazar'], a: 1, why: 'despedir = licencier ; dimitir = démissionner.' },
  { band: 'B2+', q: 'El proyecto se ha ___ abajo por falta de dinero.', o: ['caído', 'ido', 'venido', 'echado'], a: 2, why: 'venirse abajo = s’effondrer, tomber à l’eau.' },
  { band: 'C1', q: 'Su comentario estaba totalmente fuera de ___.', o: ['sitio', 'lugar', 'tono', 'juego'], a: 1, why: 'fuera de lugar = déplacé.' },
  { band: 'C1', q: 'La noticia ___ una gran polémica en las redes.', o: ['soltó', 'desabrochó', 'desenvolvió', 'desató'], a: 3, why: 'desatar una polémica = déclencher une polémique.' },
];

const READING: PlacementRaw[] = [
  {
    band: 'A1', passage: 'Me llamo Carmen. Tengo treinta años y vivo en Valencia con mi marido y mis dos hijos. Soy profesora en un instituto.',
    q: '¿Qué hace Carmen?', o: ['Es profesora', 'Es médica', 'Estudia en un instituto', 'No trabaja'], a: 0, why: '« Soy profesora en un instituto. »',
  },
  {
    band: 'A1', passage: '¡Hola, Pedro! Estoy en la cafetería de la estación. Te espero aquí a las cinco. Un beso, Lucía',
    q: '¿Dónde está Lucía?', o: ['En el tren', 'En una cafetería', 'En su casa', 'En el cine'], a: 1, why: '« Estoy en la cafetería de la estación. »',
  },
  {
    band: 'A1', passage: 'PANADERÍA LA ESPIGA\nAbierto de lunes a sábado, de 8:00 a 14:00.\nDomingo: cerrado.',
    q: '¿Se puede comprar pan el sábado a las diez?', o: ['No, está cerrado', 'Solo por la tarde', 'Sí', 'Solo el domingo'], a: 2,
    why: 'Ouvert du lundi au samedi de 8 h à 14 h : le samedi à 10 h, c’est ouvert.',
  },
  {
    band: 'A2', passage: 'BIBLIOTECA MUNICIPAL\nPuedes llevarte hasta tres libros durante quince días. Si los devuelves tarde, no podrás sacar más libros durante una semana.',
    q: '¿Qué pasa si devuelves un libro tarde?', o: ['Tienes que pagar una multa', 'No puedes sacar libros durante una semana', 'Puedes llevarte tres libros más', 'Tienes que comprar el libro'], a: 1,
    why: '« no podrás sacar más libros durante una semana ».',
  },
  {
    band: 'A2', passage: 'Hola, Marta:\nLo siento, pero mañana no puedo ir a la clase de yoga. Tengo que llevar a mi madre al médico. ¿Quedamos el jueves para tomar algo?\nUn abrazo,\nInés',
    q: '¿Por qué escribe Inés?', o: ['Para decir que no puede ir a clase', 'Para invitar a Marta a yoga', 'Porque está enferma', 'Para pedir el teléfono de un médico'], a: 0,
    why: 'Elle annonce qu’elle ne peut pas venir au cours : elle accompagne sa mère chez le médecin.',
  },
  {
    band: 'A2+', passage: 'SE ALQUILA piso en el centro. Dos dormitorios, cocina equipada y balcón. Sin ascensor (tercera planta). Ideal para estudiantes. 750 € al mes, gastos incluidos.',
    q: '¿Qué afirmación es correcta?', o: ['El piso tiene ascensor', 'Está en las afueras', 'Tiene tres dormitorios', 'El precio incluye los gastos'], a: 3,
    why: '« gastos incluidos » : les charges sont comprises.',
  },
  {
    band: 'A2+', passage: 'Querida Sofía:\nTe escribo desde Granada. El viaje en tren fue largo, pero mereció la pena: la Alhambra es impresionante. Lo único malo es que hace un calor horrible, así que salimos a pasear por la noche.',
    q: '¿Por qué pasean por la noche?', o: ['Porque la Alhambra cierra por la tarde', 'Porque de día hace demasiado calor', 'Porque el viaje fue largo', 'Porque de día trabajan'], a: 1,
    why: '« hace un calor horrible, así que salimos a pasear por la noche ».',
  },
  {
    band: 'B1', passage: 'Se busca camarero o camarera para los fines de semana. No es necesaria experiencia: nosotros te formamos. Imprescindible hablar inglés. Interesados, pasar por el restaurante de 17:00 a 19:00.',
    q: '¿Qué se necesita para el puesto?', o: ['Tener experiencia', 'Trabajar todos los días', 'Hablar inglés', 'Enviar el currículum por correo'], a: 2,
    why: '« Imprescindible hablar inglés » ; l’expérience n’est pas nécessaire.',
  },
  {
    band: 'B1+', passage: 'El ayuntamiento ha decidido cerrar el centro histórico al tráfico los domingos. Los comerciantes temen perder clientes, mientras que los vecinos celebran tener por fin calles tranquilas.',
    q: '¿Qué opinan los comerciantes?', o: ['Les preocupa vender menos', 'Están encantados con la medida', 'Quieren abrir también los lunes', 'Prefieren las calles tranquilas'], a: 0,
    why: '« temen perder clientes » : ils craignent de vendre moins.',
  },
  {
    band: 'B2', passage: 'Cada vez más jóvenes comparten piso pasados los treinta. No siempre se trata de una elección: los alquileres han subido mucho más que los sueldos, y para muchos vivir solo se ha convertido en un lujo.',
    q: 'Según el texto, muchos jóvenes comparten piso…', o: ['porque prefieren vivir acompañados', 'porque los sueldos han subido', 'porque no pueden pagar un piso solos', 'porque está de moda'], a: 2,
    why: 'Les loyers ont augmenté plus que les salaires : vivre seul est devenu un luxe.',
  },
  {
    band: 'B2+', passage: 'La novela no es, ni mucho menos, una lectura ligera; sin embargo, quien llegue al último capítulo encontrará una recompensa que justifica de sobra el esfuerzo.',
    q: 'Según el autor, la novela…', o: ['es fácil y entretenida', 'no vale el esfuerzo', 'tiene un final decepcionante', 'es exigente, pero merece la pena'], a: 3,
    why: '« no es una lectura ligera » mais la récompense « justifica de sobra el esfuerzo ».',
  },
  {
    band: 'C1', passage: 'Los críticos reconocen el rigor del informe, pero le reprochan que pase de puntillas por las cuestiones más espinosas, de modo que da una apariencia de exhaustividad que no se corresponde con su contenido real.',
    q: 'Según los críticos, el informe…', o: ['parece completo, pero evita los temas delicados', 'está mal documentado', 'analiza a fondo todos los problemas', 'es demasiado polémico'], a: 0,
    why: '« pasar de puntillas » = survoler ; « apariencia de exhaustividad » = il paraît complet.',
  },
];

const LISTENING: PlacementRaw[] = [
  { band: 'A1', audio: 'El autobús sale a las ocho y media.', q: '¿A qué hora sale el autobús?', o: ['A las 8:15', 'A las 8:30', 'A las 9:30', 'A las 7:30'], a: 1, why: 'las ocho y media = 8 h 30.' },
  { band: 'A1', audio: 'Quería una botella de agua y un bocadillo de queso, por favor.', q: '¿Qué pide?', o: ['Agua y un bocadillo', 'Un café y un bocadillo', 'Agua y una tortilla', 'Dos botellas de agua'], a: 0, why: '« una botella de agua y un bocadillo de queso ».' },
  { band: 'A1', audio: 'Me llamo Andrés. Soy de Málaga, pero vivo en Madrid.', q: '¿Dónde vive Andrés?', o: ['En Málaga', 'En Granada', 'En Madrid', 'En Marbella'], a: 2, why: '« vivo en Madrid » ; Málaga est sa ville d’origine.' },
  { band: 'A2', audio: 'Siento llegar tarde: el metro se ha parado veinte minutos entre dos estaciones.', q: '¿Por qué llega tarde?', o: ['Por el tráfico', 'Por un problema en el metro', 'Porque se ha dormido', 'Porque ha perdido el autobús'], a: 1, why: '« el metro se ha parado veinte minutos ».' },
  { band: 'A2', audio: 'Son dieciséis euros con cincuenta.', q: '¿Cuánto es?', o: ['16,50 €', '60,50 €', '6,50 €', '16,15 €'], a: 0, why: 'dieciséis (16) ≠ sesenta (60) ; cincuenta = 50.' },
  { band: 'A2', audio: 'Mañana no tengo clase, así que voy a ir a la playa con mis primos.', q: '¿Qué va a hacer mañana?', o: ['Ir a clase', 'Quedarse en casa', 'Estudiar con sus primos', 'Ir a la playa'], a: 3, why: '« voy a ir a la playa con mis primos ».' },
  { band: 'A2+', audio: 'Gire a la derecha en el semáforo y siga todo recto hasta la plaza; el museo está a la izquierda.', q: '¿Qué tiene que hacer primero?', o: ['Girar a la izquierda', 'Girar a la derecha en el semáforo', 'Cruzar la plaza', 'Entrar en el museo'], a: 1, why: '« Gire a la derecha en el semáforo » vient en premier.' },
  { band: 'A2+', audio: 'El tren con destino a Zaragoza saldrá con quince minutos de retraso desde la vía cuatro.', q: '¿Qué pasa con el tren?', o: ['Está cancelado', 'Sale de la vía catorce', 'Sale con retraso', 'Sale antes de la hora'], a: 2, why: '« saldrá con quince minutos de retraso ».' },
  { band: 'B1', audio: 'Pensaba venir en coche, pero al final he venido en tren porque había obras en la carretera.', q: '¿Cómo ha venido?', o: ['En tren', 'En coche', 'En autobús', 'Andando'], a: 0, why: '« al final he venido en tren ».' },
  { band: 'B1', audio: '¿Podrías mandarme el informe antes del jueves? El viernes ya es tarde para la reunión.', q: '¿Cuándo necesita el informe?', o: ['El viernes', 'Después de la reunión', 'Antes del jueves', 'Hoy mismo'], a: 2, why: '« antes del jueves » ; le vendredi est trop tard.' },
  { band: 'B1+', audio: 'La verdad es que no esperaba mucho del restaurante, pero la comida resultó ser buenísima.', q: '¿Qué opina del restaurante?', o: ['Le decepcionó', 'Fue mejor de lo que esperaba', 'Era demasiado caro', 'Fue como esperaba'], a: 1, why: '« no esperaba mucho … resultó ser buenísima ».' },
  { band: 'B2', audio: 'Si hubiera hecho buen tiempo, habríamos ido a la montaña, pero al final pasamos el día en un museo.', q: '¿Qué hicieron?', o: ['Fueron a la montaña', 'Se quedaron en casa', 'Fueron a la playa', 'Visitaron un museo'], a: 3, why: 'Irréel du passé : ils ne sont pas allés à la montagne ; « pasamos el día en un museo ».' },
  { band: 'B2+', audio: 'No es que el plan sea malo; es que me parece precipitado lanzarlo sin probarlo antes a pequeña escala.', q: '¿Qué propone?', o: ['Probar el plan primero a pequeña escala', 'Rechazar el plan', 'Lanzarlo enseguida', 'Buscar otro plan'], a: 0, why: '« sin probarlo antes a pequeña escala » : il veut d’abord un test limité.' },
  { band: 'C1', audio: 'Las cifras, en todo caso, se quedan cortas, ya que muchos casos ni siquiera se denuncian.', q: '¿Qué da a entender?', o: ['Las cifras exageran el problema', 'El problema es mayor de lo que indican las cifras', 'Casi todos los casos se denuncian', 'El problema está desapareciendo'], a: 1, why: '« se quedan cortas » = sont en deçà de la réalité.' },
];

export const PLACEMENT: PlacementExercise[] = placementBank(
  { grammar: GRAMMAR, vocabulary: VOCABULARY, reading: READING, listening: LISTENING },
  { prefix: 'es-' },
);
