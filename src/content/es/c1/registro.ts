import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const USTED = 'es.c1.function.formal_usted';
const LETTER = 'es.c1.function.formal_letter';
const REQUEST = 'es.c1.grammar.polite_requests';
const ADMIN = 'es.c1.vocabulary.administrative_language';

export const registro1: Lesson = {
  id: 'es-c1-registro-1',
  cefr: 'C1',
  unitId: 'es-c1-registro',
  title: 'Usted et la lettre formelle',
  subtitle: 'Siéntese · Estimada señora: · Quedo a la espera de su respuesta',
  kcIds: [USTED, LETTER],
  estMinutes: 13,
  explanation: [
    {
      title: 'Le vouvoiement : usted, ustedes',
      body: 'usted et ustedes se conjuguent à la 3e personne et prennent les pronoms le, la, lo, se et le possessif su. En Espagne, le tutoiement est très répandu ; usted reste de règle avec l’administration, les clients, les personnes âgées et dans les lettres formelles.',
      table: [
        ['¿Le apetece un café?', 'Vous voulez un café ? (à une personne)'],
        ['Siéntese y no se preocupe.', 'Asseyez-vous et ne vous inquiétez pas.'],
        ['¿Se lo envío por correo?', 'Je vous l’envoie par courrier ?'],
        ['su solicitud / la solicitud de usted', 'votre demande (de usted lève l’ambiguïté de su)'],
      ],
      examples: [
        { en: 'Disculpe, ¿es usted la responsable del departamento?', fr: 'Excusez-moi, êtes-vous la responsable du service ?' },
        { en: 'Les rogamos que esperen en la sala.', fr: 'Nous vous prions de patienter dans la salle.' },
      ],
      tip: 'Le « vous » de politesse à une seule personne = usted (singulier). Ne mélangez jamais tú et usted dans un même message : « Le escribo… te agradezco » est une faute de registre fréquente.',
    },
    {
      title: 'Les formules de la lettre',
      body: 'La lettre formelle espagnole est plus directe que la française. Après la formule d’appel, on met deux-points, pas une virgule.',
      table: [
        ['Estimado señor: / Estimada señora:', 'Monsieur, / Madame,'],
        ['Estimados señores:', 'Madame, Monsieur, (à une entreprise)'],
        ['Me dirijo a usted para / con el fin de…', 'Je me permets de vous écrire afin de…'],
        ['En relación con su carta del 3 de mayo…', 'Suite à votre lettre du 3 mai…'],
        ['Quedo a la espera de su respuesta.', 'Dans l’attente de votre réponse,'],
        ['Sin otro particular, le saluda atentamente,', 'Je vous prie d’agréer mes salutations distinguées.'],
        ['Atentamente, / Un cordial saludo,', 'Cordialement,'],
      ],
      tip: 'Les longues formules françaises (« Je vous prie d’agréer… ») n’ont pas d’équivalent : « Atentamente » suffit. Et la majuscule après les deux-points est d’usage seulement en début de paragraphe.',
    },
  ],
  exercises: exercises('es-c1-registro-1', 'C1', { kc: USTED })
    .mcq('Señora Ortega, ¿___ un café mientras espera?', ['le apetece', 'te apetece', 'os apetece'], 0, 'usted → pronom le et 3e personne : le apetece.', { d: 1.4 })
    .mcq('Choisis la formule d’appel correcte pour une lettre formelle :', ['Estimada señora Ortega:', 'Querida señora Ortega,', 'Hola, señora Ortega:'], 0,
      'Estimado/a + deux-points. Querido/a est réservé aux proches.', { kc: LETTER, d: 1.5 })
    .cloze('Siéntese, por favor, y no ___ preocupe: enseguida le atiende el doctor.', ['se'], 'Impératif négatif de usted : no se preocupe.', { hint: 'pronom', d: 1.4 })
    .cloze('Quedo a la ___ de su respuesta.', ['espera'], 'Formule figée : quedo a la espera de.', { kc: LETTER, d: 1.5 })
    .type('Impératif négatif (usted) de « irse » : « No ___ todavía, por favor. »', ['se vaya', 'se marche'], 'Subjonctif présent à la 3e personne : no se vaya.', { d: 1.6 })
    .type('Complète la formule de clôture : « Sin otro ___, le saluda atentamente. »', ['particular'], 'Sin otro particular = sans autre objet (formule de clôture).', { kc: LETTER, d: 1.8 })
    .order('Je vous écris en réponse à votre lettre du 3 mai.', 'Le escribo en respuesta a su carta del 3 de mayo.', 'usted : le escribo, su carta.', { kc: LETTER, distractors: ['te', 'vuestra'], d: 1.5 })
    .tr('Pourriez-vous me dire où se trouve le bureau du directeur ?', alt(['¿Podría decirme ', '¿Me podría decir ', '¿Podría indicarme ', '¿Me podría indicar ', '¿Sería tan amable de decirme '], ['dónde está ', 'dónde se encuentra '], ['el despacho del director?']),
      'Conditionnel de politesse à la 3e personne : ¿podría…? ; bureau (pièce) = el despacho.', { d: 1.5 })
    .tr('Je me permets de vous écrire afin de vous demander des informations sur le cours.', alt(['Me dirijo a usted ', 'Le escribo '], ['para ', 'con el fin de ', 'a fin de '], ['solicitarle ', 'pedirle '], ['información sobre el curso.']),
      'me dirijo a usted para… ; demander officiellement = solicitar. « Informations » se dit au singulier : información.', { kc: LETTER, d: 1.8 })
    .listen('Buenos días, señor Navarro. Le llamo de la clínica para recordarle que mañana tiene cita a las diez. Si no puede venir, avísenos con antelación, por favor.', '¿Para qué llaman al señor Navarro?', [
      'Para recordarle una cita', 'Para cancelar su cita', 'Para pedirle un documento',
    ], 0, 'le llamo, recordarle, avísenos : registre usted.', { d: 1.4 })
    .listen('Estimados señores: en relación con su anuncio publicado el pasado lunes, me dirijo a ustedes para presentar mi candidatura al puesto de traductor.', '¿Qué tipo de texto es?', [
      'Una carta de candidatura', 'Una reclamación', 'Una invitación',
    ], 0, 'presentar mi candidatura al puesto = postuler.', { kc: LETTER, d: 1.5 })
    .dictation('Le agradezco de antemano su atención.', 'de antemano = par avance.', { kc: LETTER, d: 1.6 })
    .repeat('Disculpe, ¿es usted la responsable del departamento?', 'disculpe : impératif de usted.', { d: 1.4 })
    .say('Ne vous inquiétez pas, nous nous en occupons.', [
      ...alt(['No se preocupe, ', 'No se preocupen, '], ['nosotros nos encargamos.', 'nos encargamos nosotros.', 'nos ocupamos nosotros.', 'nosotros nos ocupamos.', 'nos encargamos de ello.', 'nos ocupamos de ello.']),
      'No os preocupéis, nosotros nos encargamos.', 'No os preocupéis, nos encargamos nosotros.',
    ], 'Registre formel : no se preocupe (usted) ou no se preocupen (ustedes).', { d: 1.6 })
    .answer('Escribe el comienzo de un correo formal a una empresa para pedir información sobre un producto o un servicio.',
      'Estimados señores: me dirijo a ustedes para solicitar información sobre sus cursos de verano, en concreto sobre los precios y las fechas de inscripción. Atentamente.',
      'Formule d’appel, objet (me dirijo a ustedes para…), clôture.', {
        kc: [LETTER, USTED], keywords: [['estimado', 'estimada', 'estimados', 'estimadas', 'distinguido', 'distinguida', 'distinguidos'], ['me dirijo', 'le escribo', 'les escribo', 'solicitar', 'solicitarle', 'solicitarles']], minWords: 18, d: 1.9,
      })
    .build(),
};

export const registro2: Lesson = {
  id: 'es-c1-registro-2',
  cefr: 'C1',
  unitId: 'es-c1-registro',
  title: 'Demandes polies et langue administrative',
  subtitle: 'Le agradecería que… · le ruego que… · expone / solicita',
  kcIds: [REQUEST, ADMIN],
  estMinutes: 14,
  explanation: [
    {
      title: 'Demander avec tact',
      body: 'Le agradecería que + subjonctif imparfait (conditionnel → imparfait). Le ruego que + subjonctif présent. Dans la langue administrative, que disparaît parfois : Le rogamos disculpe las molestias.',
      table: [
        ['Le agradecería que me enviara el presupuesto.', 'Je vous serais reconnaissant de m’envoyer le devis.'],
        ['Le ruego que tenga en cuenta mi solicitud.', 'Je vous prie de tenir compte de ma demande.'],
        ['¿Sería usted tan amable de cerrar la puerta?', 'Auriez-vous l’amabilité de fermer la porte ?'],
        ['Quisiera / Desearía hablar con el director.', 'Je souhaiterais parler au directeur.'],
      ],
      examples: [
        { en: 'Les rogamos disculpen las molestias.', fr: 'Nous vous prions de nous excuser pour la gêne occasionnée.' },
      ],
      tip: '« Je vous serais reconnaissant de bien vouloir… » → Le agradecería que + subjonctif imparfait (enviara / enviase), pas l’infinitif comme en français.',
    },
    {
      title: 'Le vocabulaire administratif',
      body: 'La requête officielle (la instancia) suit un plan fixe : identité, EXPONE (les faits), SOLICITA (la demande), lieu et date, signature.',
      table: [
        ['solicitar / la solicitud', 'demander / la demande (officielle)'],
        ['adjuntar / adjunto le remito', 'joindre / veuillez trouver ci-joint'],
        ['cumplimentar un impreso', 'remplir un formulaire'],
        ['el plazo / la tasa', 'le délai / la taxe, les frais'],
        ['el trámite / tramitar', 'la démarche / traiter (un dossier)'],
        ['la cita previa', 'le rendez-vous (obligatoire)'],
        ['el justificante', 'le justificatif, le récépissé'],
      ],
      tip: 'Faux ami : solicitar = demander (officiellement), sans l’idée d’insistance de « solliciter ». Et « la presente » désigne la lettre elle-même : Por la presente le comunico…',
    },
  ],
  exercises: exercises('es-c1-registro-2', 'C1', { kc: REQUEST, tense: 'subjuntivo' })
    .mcq('Le agradecería que me ___ el presupuesto antes del viernes.', ['enviara', 'enviaría', 'enviará'], 0, 'Le agradecería que + subjonctif imparfait : enviara (ou enviase).', { d: 1.6 })
    .mcq('¿Qué pide la señora Ibáñez?', [
      'Que se resuelva cuanto antes su solicitud de licencia', 'Que le devuelvan el dinero de las obras', 'Que le concedan una cita previa',
    ], 0, 'SOLICITA : que se resuelva a la mayor brevedad la citada solicitud.', {
      kc: ADMIN, d: 2.0,
      passage: 'Ayuntamiento de Villanueva del Arce\nD.ª Carmen Ibáñez Soler, mayor de edad, con domicilio en la calle Mayor, 14, de esta localidad,\nEXPONE: Que el pasado 12 de febrero presentó la solicitud de licencia de obras para la reforma de su vivienda y que, transcurrido el plazo legal, no ha recibido respuesta alguna.\nSOLICITA: Que se tenga por presentada esta instancia y se resuelva a la mayor brevedad la citada solicitud, a cuyo efecto adjunta copia del justificante de registro.\nEn Villanueva del Arce, a 3 de abril de 2026.',
    })
    .cloze('Le ___ que disculpe las molestias ocasionadas.', ['ruego', 'rogamos', 'pido', 'pedimos'], 'rogar que + subjonctif : le ruego que disculpe.', { hint: 'prier', d: 1.6 })
    .cloze('Para cualquier trámite en el ayuntamiento, es imprescindible pedir cita ___.', ['previa'], 'la cita previa : rendez-vous obligatoire.', { kc: ADMIN, d: 1.5 })
    .type('Complète : « ¿Sería usted tan amable ___ cerrar la ventana? »', ['de'], 'ser tan amable de + infinitif.', { d: 1.5 })
    .type('Verbe administratif (registre soutenu) pour « remplir » un formulaire : ___', ['cumplimentar'], 'cumplimentar un impreso : registre administratif (rellenar est courant).', { kc: ADMIN, d: 1.9 })
    .order('Je vous joins une copie de mon contrat.', 'Le adjunto una copia de mi contrato.', 'adjuntar = joindre (à un courrier).', { kc: ADMIN, distractors: ['te', 'junto'], d: 1.5 })
    .tr('Je vous serais {reconnaissant|reconnaissante} de bien vouloir me répondre rapidement.', [
      ...alt(['Le agradecería que me '], ['respondiera ', 'respondiese ', 'contestara ', 'contestase '], ['lo antes posible.', 'cuanto antes.', 'a la mayor brevedad.', 'con rapidez.']),
      ...alt(['Les agradecería que me '], ['respondieran ', 'respondiesen ', 'contestaran ', 'contestasen '], ['lo antes posible.', 'cuanto antes.', 'a la mayor brevedad.']),
    ], 'Le agradecería que + subjonctif imparfait ; a la mayor brevedad = dans les meilleurs délais.', { d: 2.0 })
    .tr('Le délai de dépôt des demandes se termine le 30 juin.', alt(['El plazo de presentación de solicitudes ', 'El plazo para presentar las solicitudes ', 'El plazo para presentar solicitudes '], ['termina', 'finaliza', 'vence', 'acaba', 'concluye'], [' el 30 de junio.']),
      'el plazo de presentación de solicitudes : formule administrative.', { kc: ADMIN, d: 1.8 })
    .listen('Les rogamos que apaguen sus teléfonos móviles durante la sesión y que no abandonen la sala hasta que finalice la votación.', '¿Qué se pide al público?', [
      'Apagar el móvil y no salir hasta el final de la votación', 'Votar por teléfono', 'Salir de la sala antes de la votación',
    ], 0, 'les rogamos que apaguen… y que no abandonen : subjonctif présent.', { d: 1.6 })
    .listen('Para tramitar la renovación del permiso, deberá presentar el impreso debidamente cumplimentado, una fotografía reciente y el justificante del pago de la tasa.', '¿Cuál de estos documentos NO se menciona?', [
      'Un certificado médico', 'Una fotografía reciente', 'El justificante de pago',
    ], 0, 'Impreso, fotografía, justificante : pas de certificat médical.', { kc: ADMIN, d: 1.9 })
    .dictation('Adjunto le remito la documentación solicitada.', 'Adjunto le remito : veuillez trouver ci-joint.', { kc: ADMIN, d: 1.7 })
    .repeat('Le ruego que tenga en cuenta mi solicitud.', 'rogar que + subjonctif présent.', { d: 1.5 })
    .say('Pourriez-vous m’envoyer le formulaire par courriel ?', [
      ...alt(['¿Podría enviarme', '¿Me podría enviar', '¿Podría mandarme', '¿Me podría mandar', '¿Sería tan amable de enviarme', '¿Podrían enviarme', '¿Me puede enviar'], [' el formulario por correo electrónico?', ' el formulario por correo?', ' el formulario por email?']),
      '¿Podría remitirme el formulario por correo electrónico?',
    ], 'Conditionnel de politesse : ¿podría enviarme…?', { d: 1.6 })
    .answer('Has comprado un producto que llegó roto. Escribe dos o tres frases formales para pedir una solución a la empresa.',
      'Me dirijo a ustedes porque el aspirador que compré el día 5 llegó roto. Les agradecería que me lo cambiaran o que me devolvieran el importe lo antes posible.',
      'Le / les agradecería que + subjonctif imparfait ; registre usted.', { kc: [REQUEST, USTED], keywords: [['agradecería', 'ruego', 'rogaría', 'solicito', 'solicitarles', 'solicitarle']], minWords: 18, d: 2.0 })
    .build(),
};
