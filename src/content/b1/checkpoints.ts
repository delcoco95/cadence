import type { Exercise } from '../types';
import { exercises } from '../builders';
import { assessment } from '../level';

/**
 * Défis de fin d'unité B1 : items d'ÉVALUATION inédits (jamais repris des leçons),
 * pour mesurer le transfert avant de débloquer l'unité suivante.
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_B1: Record<string, Exercise[]> = {
  'b1-present-perfect': assessment(
    exercises('cp-b1-present-perfect', 'B1', { kc: 'b1.tense.present_perfect.experience' })
      .mcq('Have you ever ___ to Scotland?', ['been', 'gone', 'went'], 0, 'Expérience (aller et revenir) → been to.', { d: 0 })
      .cloze('I ___ my homework yet.', ["haven't finished", 'have not finished'], 'yet + négation → haven’t finished.', { kc: 'b1.tense.present_perfect.just_already_yet', hint: 'not / finish', d: 0.1 })
      .mcq('I ___ my grandmother last Sunday.', ['visited', 'have visited', 'have visit'], 0, 'last Sunday → past simple.', { kc: 'b1.tense.contrast.pp_vs_past', d: 0 })
      .order('Nous venons d’arriver à l’hôtel.', "We've just arrived at the hotel.", 'Je viens de… → have just + participe.', { kc: 'b1.tense.present_perfect.just_already_yet', d: 0.2 })
      .tr('Je n’ai jamais goûté les escargots.', ["I've never tried snails.", 'I have never tried snails.', "I've never eaten snails.", 'I have never eaten snails.', "I've never tasted snails.", 'I have never tasted snails.'],
        'Expérience → have never + participe passé.', { d: 0.3 })
      .listen('I’ve already seen that film — I watched it on the plane last month.', 'Quand a-t-il vu le film ?', ['Le mois dernier, dans l’avion', 'Hier soir, au cinéma', 'Il ne l’a pas encore vu'], 0,
        'Le détail daté (last month) passe au past simple.', { kc: 'b1.tense.contrast.pp_vs_past', d: 0.2 })
      .say('Est-ce que tu as déjà payé ?', ['Have you already paid', 'Have you paid yet', 'Have you paid already'], 'Have you paid yet / already?', { kc: 'b1.tense.present_perfect.just_already_yet', d: 0.3 })
      .build(),
  ),
  'b1-for-since': assessment(
    exercises('cp-b1-for-since', 'B1', { kc: 'b1.tense.present_perfect.for_since' })
      .mcq('I’ve had this laptop ___ six months.', ['for', 'since', 'ago'], 0, 'Durée → for.', { d: -0.2 })
      .cloze('He’s been a teacher ___ 2015.', ['since'], 'Point de départ → since.', { d: -0.1 })
      .mcq('___ have you been waiting?', ['How long', 'How much', 'Since when do'], 0, 'Durée jusqu’à maintenant → How long have you…?', { kc: 'b1.grammar.questions.how_long', d: 0 })
      .mcq('I’m exhausted because I ___ all morning.', ['have been cleaning', 'clean', 'am cleaning'], 0, 'Activité récente qui explique l’état → have been cleaning.', { kc: 'b1.tense.present_perfect_continuous.usage', d: 0.3 })
      .tr('Ils sont mariés depuis vingt ans.', ["They've been married for twenty years.", 'They have been married for twenty years.', "They've been married for 20 years.", 'They have been married for 20 years.'],
        '« depuis » + durée → present perfect + for.', { d: 0.3 })
      .dictation('She’s been learning Japanese since last September.', 'has been learning + since.', { kc: 'b1.tense.present_perfect_continuous.form', accepted: ["She's been learning Japanese since last September."], d: 0.3 })
      .answer('How long have you been learning English, and why?', 'I have been learning English for three years because I need it for my job.', 'I have been learning… for / since…',
        { kc: 'b1.grammar.questions.how_long', keywords: [['for', 'since']], minWords: 10, d: 0.5 })
      .build(),
  ),
  'b1-past-narrative': assessment(
    exercises('cp-b1-past-narrative', 'B1', { kc: 'b1.tense.contrast.past_continuous_vs_simple' })
      .cloze('I ___ a shower when the doorbell rang.', ['was having'], 'Action en cours interrompue → was having.', { hint: 'have', d: 0 })
      .mcq('While I was waiting for the bus, I ___ an old friend.', ['met', 'was meeting', 'meet'], 0, 'Événement ponctuel → past simple.', { d: 0.1 })
      .mcq('We ___ go camping every summer when I was young.', ['used to', 'use to', 'were used to'], 0, 'Habitude passée → used to.', { kc: 'b1.grammar.used_to', d: 0 })
      .type('Mets à la forme négative : I used to like jazz.', ["I didn't use to like jazz.", 'I did not use to like jazz.'], 'didn’t use to (sans d).', { kc: 'b1.grammar.used_to.negative_question', loose: true, d: 0.3 })
      .listen('When I was a student, I used to work in a bookshop on Saturdays.', 'Que faisait-elle le samedi ?', ['Elle travaillait dans une librairie', 'Elle étudiait à la bibliothèque', 'Elle achetait des livres'], 0,
        'used to work in a bookshop = elle travaillait dans une librairie.', { kc: 'b1.grammar.used_to', d: 0 })
      .tr('Je lisais quand la lumière s’est éteinte.', ['I was reading when the light went out.', 'I was reading when the lights went out.', 'I was reading when the light went off.', 'I was reading when the lights went off.', 'I was reading when the power went out.', 'I was reading when the power went off.'],
        'Décor (was reading) + événement (went out).', { d: 0.4 })
      .say('Avant, il habitait à Paris.', ['He used to live in Paris', 'He used to live in Paris before', 'He lived in Paris before'], 'Avant, il… → He used to…', { kc: 'b1.grammar.used_to', d: 0.3 })
      .build(),
  ),
  'b1-future': assessment(
    exercises('cp-b1-future', 'B1', { kc: 'b1.tense.future.will_vs_going_to' })
      .mcq('I can’t see you on Monday. I ___ to Rome.', ['’m flying', 'fly', '’ll flying'], 0, 'Voyage organisé → present continuous.', { kc: 'b1.tense.future.arrangements', d: 0 })
      .mcq('Don’t lift that box — I ___ help you.', ['’ll', '’m', 'going to'], 0, 'Offre spontanée → will.', { d: -0.1 })
      .cloze('I’ll text you as soon as I ___ the results.', ['get'], 'as soon as + présent.', { kc: 'b1.grammar.future_time_clauses', hint: 'get', d: 0 })
      .cloze('Look at that dark sky. It’s ___ to rain.', ['going'], 'Indice visible → going to.', { d: -0.2 })
      .order('Je ne partirai pas avant ton arrivée.', "I won't leave until you arrive.", 'not… until + présent.', { kc: 'b1.grammar.future_time_clauses', distractors: ['will'], d: 0.3 })
      .listen('We’re having a party on Saturday. Are you coming?', 'Que propose-t-il ?', ['Une fête samedi', 'Un dîner vendredi', 'Un concert dimanche'], 0,
        'We’re having a party = fête organisée.', { kc: 'b1.tense.future.arrangements', d: -0.1 })
      .tr('Quand j’aurai fini, je t’appellerai.', ["When I've finished, I'll call you.", 'When I have finished, I will call you.', "When I finish, I'll call you.", 'When I finish, I will call you.', "I'll call you when I've finished.", "I'll call you when I finish.", 'I will call you when I finish.', 'I will call you when I have finished.'],
        'when + présent (ou present perfect), will dans la principale.', { kc: 'b1.grammar.future_time_clauses', d: 0.5 })
      .build(),
  ),
  'b1-conditionals': assessment(
    exercises('cp-b1-conditionals', 'B1', { kc: 'b1.grammar.conditional.first' })
      .mcq('If you mix red and white, you ___ pink.', ['get', 'got', 'would got'], 0, 'Vérité générale → présent.', { kc: 'b1.grammar.conditional.zero', d: -0.2 })
      .cloze('If he ___ late again, he’ll lose his job.', ['is'], 'Pas de will après if → is.', { hint: 'be', d: 0 })
      .mcq('I won’t go ___ you come with me.', ['unless', 'if', 'when'], 0, 'unless = sauf si.', { kc: 'b1.grammar.conditional.unless', d: 0.1 })
      .mcq('If I ___ a superpower, I’d choose invisibility.', ['had', 'have', 'would have'], 0, 'Hypothèse → if + prétérit.', { kc: 'b1.grammar.conditional.second', d: 0 })
      .cloze('If we ___ by the sea, we would go swimming every day.', ['lived'], 'Hypothèse → if + prétérit.', { kc: 'b1.grammar.conditional.second', hint: 'live', d: 0.1 })
      .listen('If I were you, I’d take the job.', 'Que conseille-t-il ?', ['Accepter le poste', 'Refuser le poste', 'Attendre une autre offre'], 0,
        'If I were you, I’d… = à ta place, je…', { kc: 'b1.grammar.conditional.second', d: 0 })
      .say('Si tu ne te dépêches pas, on va rater le film.', ["If you don't hurry, we'll miss the film", "If you don't hurry, we will miss the film", "If you don't hurry up, we'll miss the film", "If you don't hurry, we'll miss the movie", "If you don't hurry, we're going to miss the film", "Unless you hurry, we'll miss the film"],
        'if + présent, will.', { d: 0.3 })
      .build(),
  ),
  'b1-passive-relatives': assessment(
    exercises('cp-b1-passive-relatives', 'B1', { kc: 'b1.grammar.passive.past' })
      .cloze('English ___ spoken all over the world.', ['is'], 'Passif présent → is spoken.', { kc: 'b1.grammar.passive.present', d: -0.3 })
      .mcq('The first iPhone ___ in 2007.', ['was released', 'released', 'is released'], 0, 'Passif passé → was released.', { d: 0 })
      .mcq('A doctor is someone ___ treats sick people.', ['who', 'which', 'where'], 0, 'Personne → who.', { kc: 'b1.grammar.relative.defining', d: -0.3 })
      .cloze('This is the house ___ my father grew up.', ['where'], 'Lieu → where.', { kc: 'b1.grammar.relative.where_whose', d: 0 })
      .type('Mets au passif : They opened the new library last year.', ['The new library was opened last year.'], 'was opened ; they est inutile.', { loose: true, d: 0.3 })
      .listen('The man whose car was stolen called the police immediately.', 'Qui a appelé la police ?', ['L’homme à qui on a volé la voiture', 'Le voleur', 'Un passant'], 0,
        'whose car was stolen = dont la voiture a été volée.', { kc: 'b1.grammar.relative.where_whose', d: 0.2 })
      .tr('Le gâteau que tu as fait était délicieux.', ['The cake you made was delicious.', 'The cake that you made was delicious.', 'The cake which you made was delicious.', 'The cake you baked was delicious.', 'The cake that you baked was delicious.'],
        'Relatif complément → that / which ou rien.', { kc: 'b1.grammar.relative.defining', d: 0.3 })
      .build(),
  ),
  'b1-modals': assessment(
    exercises('cp-b1-modals', 'B1', { kc: 'b1.modals.deduction.must_cant' })
      .mcq('He’s got a Ferrari and a yacht. He ___ be very rich.', ['must', 'can’t', 'mustn’t'], 0, 'Déduction quasi certaine → must.', { d: -0.2 })
      .mcq('She ___ be at work — it’s Sunday and the office is closed.', ["can't", 'must', 'has to'], 0, 'Impossible → can’t.', { d: 0.1 })
      .cloze('You ___ smoke in the hospital. It’s against the rules.', ["mustn't", 'must not', "can't", 'cannot'], 'Interdiction → mustn’t.', { kc: 'b1.modals.obligation_review', d: 0 })
      .mcq('It’s a holiday tomorrow, so we ___ get up early.', ["don't have to", "mustn't", "shouldn't to"], 0, 'Pas nécessaire → don’t have to.', { kc: 'b1.modals.obligation_review', d: 0 })
      .cloze('I’ve broken my arm, so I won’t be ___ to play on Saturday.', ['able'], 'Futur de can → won’t be able to.', { kc: 'b1.modals.be_able_to', d: 0 })
      .listen('Take a coat. It might get cold this evening.', 'Que dit-elle ?', ['Il fera peut-être froid ce soir', 'Il fera sûrement froid ce soir', 'Il fait déjà froid'], 0,
        'might = peut-être.', { kc: 'b1.modals.deduction.might_could', d: 0 })
      .say('Tu n’es pas obligé de venir.', ["You don't have to come", 'You do not have to come', "You don't need to come", "You needn't come"], 'Absence d’obligation → don’t have to.', { kc: 'b1.modals.obligation_review', d: 0.3 })
      .build(),
  ),
  'b1-reported-verbs': assessment(
    exercises('cp-b1-reported-verbs', 'B1', { kc: 'b1.grammar.reported.statements' })
      .mcq('She ___ us that she was pregnant.', ['told', 'said', 'spoke'], 0, 'Suivi de la personne → told.', { kc: 'b1.grammar.reported.say_tell', d: -0.2 })
      .cloze('"I don’t like horror films." → He said he ___ like horror films.', ["didn't", 'did not'], 'don’t → didn’t.', { d: 0.1 })
      .mcq('I can’t afford ___ a new car this year.', ['to buy', 'buying', 'buy'], 0, 'afford + to + base.', { kc: 'b1.grammar.verb_patterns', d: 0.1 })
      .cloze('Have you finished ___ the report?', ['writing'], 'finish + -ing.', { kc: 'b1.grammar.verb_patterns', hint: 'write', d: 0 })
      .mcq('Could you ___ the music? I’m trying to sleep.', ['turn down', 'turn up', 'turn on'], 0, 'turn down = baisser (le son).', { kc: 'b1.vocab.phrasal_verbs', d: 0.1 })
      .listen('Mia told me she would be home by midnight.', 'Qu’a dit Mia ?', ['Qu’elle rentrerait avant minuit', 'Qu’elle dormirait chez une amie', 'Qu’elle était déjà rentrée'], 0,
        'she would be home by midnight = elle serait rentrée avant minuit.', { d: 0.1 })
      .tr('Il m’a dit qu’il cherchait un nouvel appartement.', ['He told me he was looking for a new flat.', 'He told me that he was looking for a new flat.', 'He told me he was looking for a new apartment.', 'He told me that he was looking for a new apartment.', 'He said he was looking for a new flat.', 'He said he was looking for a new apartment.'],
        'told me + past continuous ; look for = chercher.', { kc: 'b1.grammar.reported.say_tell', d: 0.4 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_B1: Record<string, string[]> = {
  'b1-present-perfect': ['Je peux parler de mes expériences de vie (déjà, jamais).', 'Je peux dire ce que j’ai déjà fait ou pas encore fait.'],
  'b1-for-since': ['Je peux dire depuis combien de temps je fais quelque chose.', 'Je peux parler d’activités récentes qui durent.'],
  'b1-past-narrative': ['Je peux raconter une histoire au passé, avec un décor et des événements.', 'Je peux décrire mes habitudes d’autrefois.'],
  'b1-future': ['Je peux parler de mes projets, de mes rendez-vous et faire des prédictions.', 'Je peux dire ce que je ferai quand ou dès que quelque chose arrivera.'],
  'b1-conditionals': ['Je peux exprimer des conditions réelles et imaginer des situations.', 'Je peux donner un conseil avec « If I were you ».'],
  'b1-passive-relatives': ['Je peux décrire des faits et des processus avec le passif.', 'Je peux préciser de qui ou de quoi je parle avec who, which, where, whose.'],
  'b1-modals': ['Je peux faire des déductions sur une situation.', 'Je peux parler de règles, d’obligations et de capacités.'],
  'b1-reported-verbs': ['Je peux rapporter ce que quelqu’un m’a dit.', 'Je peux utiliser les verbes courants suivis de -ing ou de to, et des phrasal verbs fréquents.'],
};
