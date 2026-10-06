import type { Exercise } from '../types';
import { exercises } from '../builders';
import { assessment } from '../level';

/**
 * Défis de fin d'unité B2 : items d'évaluation inédits (jamais vus en leçon),
 * pour mesurer le transfert avant de débloquer l'unité suivante.
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_B2: Record<string, Exercise[]> = {
  'b2-narrative': assessment(
    exercises('cp-b2-narrative', 'B2', { kc: 'b2.narrative.past_perfect' })
      .cloze('The streets were wet: it ___ all night.', ['had been raining'],
        'Activité prolongée qui explique un résultat visible → had been raining.', { kc: 'b2.narrative.past_perfect_continuous', hint: 'rain', d: 1.1 })
      .mcq('I ___ my keys, so I couldn’t get into the flat.', ['had lost', 'have lost', 'was losing'], 0,
        'Perte antérieure à « couldn’t get in » → past perfect.', { d: 1.0 })
      .mcq('He was cooking dinner when the smoke alarm ___ off.', ['went', 'was going', 'had gone'], 0,
        'Action courte qui interrompt une action en cours → past simple.', { kc: 'b2.narrative.past_continuous', d: 0.9 })
      .order('Au moment où nous sommes arrivés, la fête était finie.', 'By the time we arrived, the party had finished.',
        'By the time + past simple, puis past perfect.', { kc: 'b2.narrative.sequencing', distractors: ['until', 'has'], d: 1.2 })
      .listen('We had been driving for hours when we finally saw a petrol station.', 'Qu’ont-ils vu après des heures de route ?',
        ['Une station-service', 'Un hôtel', 'Un panneau de sortie'], 0,
        'petrol station = station-service.', { kc: 'b2.narrative.past_perfect_continuous', d: 1.0 })
      .tr('Je n’avais jamais vu autant de monde.',
        ['I had never seen so many people.', 'I’d never seen so many people.', 'I had never seen so many people before.', 'I had never seen such a crowd.', 'I had never seen such a big crowd.'],
        'had never + participe passé (see, saw, seen).', { d: 1.2 })
      .answer('What were you doing at this time yesterday, and what had you done before that?',
        'At this time yesterday I was working on a presentation, and before that I had answered all my emails.',
        'Past continuous pour l’action en cours, past perfect pour ce qui précédait.',
        { kc: ['b2.narrative.past_continuous', 'b2.narrative.past_perfect'], keywords: [['was', 'were'], ['had']], minWords: 12, d: 1.3 })
      .build(),
  ),

  'b2-perfect-future': assessment(
    exercises('cp-b2-perfect-future', 'B2', { kc: 'b2.tense.present_perfect_continuous' })
      .cloze('My legs hurt because I ___ all afternoon.', ['have been running'],
        'Activité prolongée, effet visible maintenant → have been running.', { hint: 'run', d: 1.0 })
      .mcq('I ___ this film four times!', ['have been watching', 'have seen', 'am seeing'], 1,
        'Un nombre de fois → résultat → present perfect simple.', { kc: 'b2.tense.pp_simple_vs_continuous', d: 1.1 })
      .mcq('Next Monday at ten, I ___ my presentation to the board.', ['will be giving', 'have been giving', 'gave'], 0,
        'Action en cours à un moment futur précis → will be giving.', { kc: 'b2.tense.future_continuous', d: 1.1 })
      .cloze('By the time we land, we ___ for fourteen hours.', ['will have been travelling', 'will have been traveling', 'will have travelled', 'will have traveled'],
        'Durée calculée jusqu’à un moment futur → will have (been) travelling.', { kc: 'b2.tense.future_perfect', hint: 'travel', d: 1.6 })
      .listen('I’ve been meaning to tell you: I’ve accepted a job in Montreal.', 'Quelle nouvelle annonce-t-elle ?',
        ['Elle a accepté un poste à Montréal', 'Elle cherche un emploi à Montréal', 'Elle revient de Montréal'], 0,
        'I’ve accepted = c’est fait. I’ve been meaning to = ça fait un moment que je voulais.', { kc: 'b2.tense.pp_simple_vs_continuous', d: 1.2 })
      .tr('Depuis combien de temps attendez-vous ?', ['How long have you been waiting?', 'How long have you waited?'],
        'How long + present perfect continuous.', { d: 1.0 })
      .say('D’ici la fin du mois, j’aurai remboursé mon prêt.',
        ['By the end of the month I will have paid back my loan', 'By the end of the month I will have repaid my loan', 'By the end of the month I will have paid off my loan',
          'By the end of the month I’ll have paid off my loan'],
        'd’ici = by ; action achevée avant → will have + participe.', { kc: 'b2.tense.future_perfect', d: 1.5 })
      .build(),
  ),

  'b2-conditionals': assessment(
    exercises('cp-b2-conditionals', 'B2', { kc: 'b2.conditionals.third' })
      .cloze('If you ___ me the truth, I would have forgiven you.', ['had told'],
        'if + past perfect (tell, told, told).', { hint: 'tell', d: 1.0 })
      .mcq('If I hadn’t stayed up so late, I ___ so tired now.', ['wouldn’t have been', 'wouldn’t be', 'won’t be'], 1,
        'Condition passée, conséquence présente (now) → wouldn’t be.', { kc: 'b2.conditionals.mixed', d: 1.4 })
      .mcq('I wish it ___ so cold today.', ['isn’t', 'wasn’t', 'won’t be'], 1,
        'Souhait sur le présent → wish + past simple (wasn’t ou weren’t).', { kc: 'b2.wishes.wish_if_only', d: 1.0 })
      .cloze('I’d rather we ___ the meeting until Monday.', ['postponed'],
        'would rather + sujet + past simple.', { kc: 'b2.wishes.would_rather', hint: 'postpone', d: 1.3 })
      .listen('If only I hadn’t sold my flat in 2015; prices have doubled since then.', 'Que regrette-t-elle ?',
        ['D’avoir vendu son appartement', 'De ne pas avoir acheté d’appartement', 'D’avoir payé son appartement trop cher'], 0,
        'If only + past perfect : regret sur le passé.', { kc: 'b2.wishes.wish_if_only', d: 1.1 })
      .tr('S’il avait révisé, il aurait réussi son examen.',
        ['If he had revised, he would have passed his exam.', 'If he had studied, he would have passed his exam.', 'If he had revised, he would have passed the exam.',
          'If he had studied, he would have passed the exam.', 'If he’d revised, he’d have passed his exam.'],
        'if + past perfect, would have + participe. réussir un examen = pass an exam.', { d: 1.2 })
      .say('Je préférerais rester à la maison ce soir.',
        ['I’d rather stay at home tonight', 'I would rather stay at home tonight', 'I’d rather stay home tonight', 'I’d prefer to stay at home tonight', 'I would prefer to stay at home this evening'],
        'would rather + base, sans to.', { kc: 'b2.wishes.would_rather', d: 1.0 })
      .build(),
  ),

  'b2-passive': assessment(
    exercises('cp-b2-passive', 'B2', { kc: 'b2.passive.tenses' })
      .cloze('The winners ___ by email next week.', ['will be contacted'],
        'Futur passif : will be + participe.', { hint: 'contact', d: 0.9 })
      .mcq('The documents ___ when the lawyer arrived.', ['were still being printed', 'were still printing', 'still printed'], 0,
        'Action en cours dans le passé, au passif → were being printed.', { d: 1.3 })
      .cloze('Seatbelts ___ worn at all times.', ['must be', 'should be', 'have to be', 'need to be'],
        'Modal + be + participe passé.', { kc: 'b2.passive.modals', hint: 'obligation', d: 1.0 })
      .order('Elle s’est fait voler son sac.', 'She had her bag stolen.',
        'Mésaventure subie → have + objet + participe passé.', { kc: 'b2.passive.causative', distractors: ['by', 'steal'], d: 1.2 })
      .listen('The CEO is reported to have resigned after the scandal.', 'Que rapporte-t-on ?',
        ['Le PDG aurait démissionné', 'Le PDG a été licencié', 'Le PDG a nié le scandale'], 0,
        'is reported to have resigned = aurait démissionné (selon les informations).', { kc: 'b2.passive.impersonal', d: 1.3 })
      .tr('Ce pont a été construit en 1890.', ['This bridge was built in 1890.', 'The bridge was built in 1890.', 'This bridge was constructed in 1890.'],
        'Date passée précise → past simple passif : was built.', { d: 0.9 })
      .say('Je vais faire vérifier mes yeux la semaine prochaine.',
        ['I’m going to have my eyes checked next week', 'I am going to have my eyes tested next week', 'I’m going to get my eyes tested next week',
          'I am going to get my eyes checked next week', 'I’m getting my eyes checked next week', 'I’m having my eyes tested next week'],
        'faire vérifier = have / get + objet + participe passé.', { kc: 'b2.passive.causative', d: 1.2 })
      .build(),
  ),

  'b2-reported': assessment(
    exercises('cp-b2-reported', 'B2', { kc: 'b2.reported.questions' })
      .mcq('“Why are you leaving?” → They asked me why ___ leaving.', ['was I', 'I was', 'am I'], 1,
        'Question rapportée : ordre sujet + verbe, et recul du temps.', { d: 1.0 })
      .cloze('“Did you lock the door?” → She asked me ___ I had locked the door.', ['if', 'whether'],
        'Question fermée rapportée → if / whether.', { d: 0.9 })
      .cloze('“Don’t forget your passport.” → Mum reminded me ___ my passport.', ['not to forget'],
        'remind + personne + (not) to + base.', { kc: 'b2.reported.verbs', d: 1.2 })
      .mcq('“Shall we go by train?” → He suggested ___ by train.', ['to go', 'going', 'us go'], 1,
        'suggest + -ing (ou suggest that we go).', { kc: 'b2.reported.verbs', d: 1.1 })
      .order('Elle nous a demandé de ne pas faire de bruit.', 'She asked us not to make any noise.',
        'asked + personne + not to + base.', { kc: 'b2.reported.commands', distractors: ['said', 'don’t'], d: 1.1 })
      .listen('He admitted that he had forgotten to send the invitations.', 'Qu’a-t-il reconnu ?',
        ['Avoir oublié d’envoyer les invitations', 'Avoir envoyé les mauvaises invitations', 'Ne pas vouloir inviter tout le monde'], 0,
        'admitted that he had forgotten = a reconnu avoir oublié.', { kc: 'b2.reported.verbs', d: 1.1 })
      .tr('Je lui ai demandé où elle habitait.', ['I asked her where she lived.', 'I asked her where she was living.'],
        'Ordre sujet + verbe dans la question rapportée : where she lived.', { d: 1.0 })
      .build(),
  ),

  'b2-deduction': assessment(
    exercises('cp-b2-deduction', 'B2', { kc: 'b2.modals.past_deduction' })
      .cloze('The streets are wet. It ___ during the night.', ['must have rained', 'must have been raining'],
        'Déduction quasi certaine sur le passé → must have rained.', { hint: 'rain', d: 1.0 })
      .mcq('She ___ written that article: she doesn’t speak a word of German.', ['must have', 'can’t have', 'should have'], 1,
        'Impossibilité logique → can’t have written.', { d: 1.2 })
      .mcq('I’m not sure where I put my glasses. I ___ left them in the car.', ['might have', 'can’t have', 'needn’t have'], 0,
        'Incertitude → might have.', { kc: 'b2.modals.past_speculation', d: 1.0 })
      .cloze('You ___ waited for me. I told you I’d be very late!', ['needn’t have', 'need not have', 'shouldn’t have', 'should not have'],
        'Tu as attendu, inutilement → needn’t have waited.', { kc: 'b2.modals.needn_have', hint: 'not need', d: 1.4 })
      .order('Tu aurais dû me prévenir.', 'You should have warned me.',
        'Reproche → should have + participe passé.', { kc: 'b2.modals.past_criticism', distractors: ['must', 'warn'], d: 1.0 })
      .listen('He could have been a professional footballer, but he got injured at eighteen.', 'Que s’est-il passé ?',
        ['Il aurait pu devenir footballeur pro mais s’est blessé', 'Il est devenu footballeur professionnel', 'Il a arrêté le football par manque de talent'], 0,
        'could have been = aurait pu être (possibilité non réalisée).', { kc: 'b2.modals.past_criticism', d: 1.2 })
      .say('Il a dû prendre le mauvais bus.', ['He must have taken the wrong bus', 'He must have got on the wrong bus', 'He must have caught the wrong bus'],
        'Déduction → must have + participe (take, took, taken).', { d: 1.1 })
      .build(),
  ),

  'b2-linking': assessment(
    exercises('cp-b2-linking', 'B2', { kc: 'b2.relative.non_defining' })
      .mcq('The new CEO, ___ was appointed in May, has already cut costs.', ['who', 'which', 'whose'], 0,
        'Personne → who, entre virgules.', { d: 0.9 })
      .cloze('I finally visited Kyoto, ___ my best friend has lived for years.', ['where'],
        'Lieu → where.', { d: 1.0 })
      .cloze('Cars ___ before 2006 are banned from the city centre.', ['made', 'built', 'manufactured', 'produced'],
        'Relative réduite passive : (which were) made.', { kc: 'b2.relative.reduced', hint: 'make', d: 1.3 })
      .mcq('___ being the favourites, they lost in the first round.', ['Although', 'Despite', 'Whereas'], 1,
        'Suivi de -ing → despite.', { kc: 'b2.linking.concession', d: 1.0 })
      .order('Il a raté le train, ce qui l’a mis en retard pour l’entretien.', 'He missed the train, which made him late for the interview.',
        '« ce qui » reprenant la phrase → , which.', { distractors: ['what', 'that'], d: 1.2 })
      .listen('The film got terrible reviews. Nevertheless, it became the biggest hit of the summer.', 'Qu’est-il arrivé au film ?',
        ['Il a été un grand succès malgré de mauvaises critiques', 'Il a eu de bonnes critiques mais peu de spectateurs', 'Il a été retiré des salles cet été'], 0,
        'Nevertheless = néanmoins : le succès s’oppose aux critiques.', { kc: 'b2.linking.contrast', d: 1.1 })
      .tr('Bien que le loyer soit élevé, l’appartement vaut le coup.',
        ['Although the rent is high, the flat is worth it.', 'Although the rent is high, the apartment is worth it.', 'Even though the rent is high, the flat is worth it.',
          'Even though the rent is high, the apartment is worth it.', 'Despite the high rent, the flat is worth it.', 'Despite the high rent, the apartment is worth it.'],
        'bien que + proposition → although / even though.', { kc: 'b2.linking.concession', d: 1.2 })
      .build(),
  ),

  'b2-patterns': assessment(
    exercises('cp-b2-patterns', 'B2', { kc: 'b2.habits.used_to' })
      .cloze('There ___ be a cinema on this street, but it closed years ago.', ['used to'],
        'État passé révolu → used to + base.', { d: 0.9 })
      .mcq('After a few weeks, I got used to ___ up at 6 a.m.', ['wake', 'waking', 'woke'], 1,
        'get used to + -ing.', { kc: 'b2.habits.be_get_used_to', d: 1.0 })
      .mcq('Please remember ___ your timesheet by Friday.', ['submitting', 'to submit', 'submit'], 1,
        'remember to do = penser à faire.', { kc: 'b2.verbs.meaning_change', d: 1.0 })
      .cloze('We had to ___ off the trip because of the storm.', ['put'],
        'put off = reporter.', { kc: 'b2.lexis.collocations', hint: 'reporter', d: 1.1 })
      .order('Il a arrêté de jouer aux jeux vidéo.', 'He stopped playing video games.',
        'stop doing = arrêter de faire.', { kc: 'b2.verbs.meaning_change', distractors: ['to', 'play'], d: 1.0 })
      .listen('I’m not used to such cold weather; back home it never drops below fifteen degrees.', 'Pourquoi a-t-il du mal avec le froid ?',
        ['Il n’est pas habitué à ce climat', 'Il est malade', 'Il a oublié son manteau'], 0,
        'I’m not used to = je ne suis pas habitué à.', { kc: 'b2.habits.be_get_used_to', d: 1.1 })
      .say('Avant, nous allions en Bretagne chaque été.', ['We used to go to Brittany every summer', 'We would go to Brittany every summer', 'We used to go to Brittany each summer'],
        'Habitude passée → used to (ou would) + base.', { d: 1.0 })
      .build(),
  ),
};
