import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const LIKE = 'c2.modality.likelihood';
const PRAG = 'c2.modality.pragmatic';
const DARE = 'c2.modality.dare_need';
const ADV = 'c2.modality.stance_adverbs';

export const stanceUnit: Unit = {
  id: 'c2-stance',
  cefr: 'C2',
  title: 'Modalité fine et prise de position',
  description: 'may well, might as well, could hardly, would have thought, dare et need modaux, adverbes d’opinion et de certitude.',
  lessonIds: ['c2-stance-1', 'c2-stance-2'],
  canDo: [
    'Je peux exprimer des degrés précis de probabilité, de surprise ou de reproche avec les modaux.',
    'Je peux signaler ma position sur ce que je dis grâce aux adverbes d’opinion (arguably, admittedly, presumably…).',
  ],
};

export const stance1: Lesson = {
  id: 'c2-stance-1',
  cefr: 'C2',
  unitId: 'c2-stance',
  title: 'Probabilité nuancée et modaux pragmatiques',
  subtitle: 'may well, bound to, might as well, could hardly',
  kcIds: [LIKE, PRAG],
  estMinutes: 10,
  explanation: [
    {
      title: 'Doser la probabilité',
      table: [
        ['may / might / could well + base', 'il est fort possible que', 'The final bill may well be higher.'],
        ['may / might well have + p.p.', 'il est fort possible que… ait', 'She may well have left already.'],
        ['be bound to + base', 'c’est forcé, à coup sûr', 'There are bound to be delays.'],
        ['can’t possibly + base', 'c’est impossible', 'They can’t possibly finish by Friday.'],
      ],
      examples: [
        { en: 'The new line may well cut travel times by half.', fr: 'La nouvelle ligne pourrait bien réduire les temps de trajet de moitié.' },
        { en: 'With this weather, the match is bound to be postponed.', fr: 'Avec ce temps, le match sera forcément reporté.' },
      ],
      tip: 'well renforce la probabilité : « may well » est plus probable que « may ». « You may well ask! » signifie « bonne question ! » (sous-entendu : je n’ai pas la réponse).',
    },
    {
      title: 'Les modaux pragmatiques',
      body: 'Certaines combinaisons ont un sens qui dépasse la somme de leurs mots : elles servent à réagir, à suggérer, à reprocher.',
      table: [
        ['might / may as well + base', 'autant (faute de mieux)', 'The bus has gone; we might as well walk.'],
        ['could hardly + base', 'pouvait difficilement, ne pouvait guère', 'I could hardly refuse.'],
        ['I would have thought…', 'j’aurais cru (surprise, désaccord poli)', 'I’d have thought it was obvious.'],
        ['You might have + p.p.', 'tu aurais pu (reproche)', 'You might have told me!'],
      ],
      examples: [
        { en: 'Since we’re early, we might as well grab a coffee.', fr: 'Puisqu’on est en avance, autant prendre un café.' },
        { en: 'I would have thought the museum would be busier on a Sunday.', fr: 'J’aurais cru que le musée serait plus fréquenté un dimanche.' },
      ],
      tip: 'Ne confonds pas « may well » (c’est probable) et « may as well » (autant le faire). Et « I would have thought » n’est pas un vrai conditionnel passé : c’est une façon courtoise de dire « je ne suis pas d’accord » ou « ça me surprend ».',
    },
  ],
  exercises: exercises('c2-stance-1', 'C2', { kc: LIKE })
    .mcq('The figures are still provisional, so the final total ___ be higher.',
      ['may well', 'may as well', 'had better', 'must have'], 0,
      'may well = il est fort possible que. « may as well » signifie « autant », hors sujet ici.', { d: 3.0 })
    .mcq('The last bus has gone, so we ___ walk home.',
      ['may well', 'might as well', 'would rather', 'can hardly'], 1,
      'might as well = autant (faute de meilleure option).', { kc: PRAG, d: 3.0 })
    .cloze('With so many people interested, the tickets ___ sell out quickly.', ['are bound to'],
      'be bound to = c’est forcé, à coup sûr.', { hint: 'be bound to', d: 3.0 })
    .cloze('The music was so loud that I ___ hear myself think.', ['could hardly', 'could barely', 'could scarcely'],
      'could hardly + base = je pouvais à peine, difficilement.', { kc: PRAG, hint: 'can, au passé + « à peine »', d: 3.0 })
    .type('Exprime une surprise polie en commençant par « I would have thought » : « Surely the train is faster than the bus. »',
      ['I would have thought the train was faster than the bus.', 'I would have thought that the train was faster than the bus.', 'I would have thought the train would be faster than the bus.', 'I would have thought the train is faster than the bus.'],
      'I would have thought (I’d have thought) + proposition, souvent au passé par concordance : surprise ou désaccord poli.', { kc: PRAG, d: 3.4 })
    .cloze('She isn’t answering her phone; she ___ have left already.', ['may well', 'might well', 'could well'],
      'may / might / could well have + p.p. = il est fort possible qu’elle soit déjà partie.', { hint: 'forte possibilité : modal + well', d: 3.1 })
    .mcq('You ___ told me the meeting had been moved! I waited for an hour.',
      ['might have', 'may well have', 'must have', 'would have'], 0,
      'You might have + p.p. = reproche (« tu aurais pu me le dire ! »). must have = déduction, may well have = probabilité.', { kc: PRAG, d: 3.2 })
    .order('Il se pourrait bien qu’ils aient raison au sujet du nouveau planning.', 'They may well be right about the new schedule.',
      'may well + base : forte probabilité au présent.', { distractors: ['as', 'must'], d: 3.0 })
    .tr('Puisqu’on est là, autant visiter le château.',
      ['Since we are here, we might as well visit the castle.', 'Since we are here, we may as well visit the castle.', 'As we are here, we might as well visit the castle.', 'Now that we are here, we might as well visit the castle.'],
      '« Autant + infinitif » = might / may as well + base.', { kc: PRAG, d: 3.2 })
    .tr('Il va forcément y avoir des embouteillages.',
      ['There are bound to be traffic jams.', 'There is bound to be traffic.', 'There are bound to be some traffic jams.', 'There is bound to be a traffic jam.'],
      '« Forcément » (certitude sur le futur) = there is / are bound to be.', { d: 3.3 })
    .mcq('What is Priya’s attitude towards the supplier’s new delivery date?',
      ['She is confident it will be met', 'She is cautiously sceptical', 'She is openly angry and wants to cancel the order', 'She has no opinion on it'], 1,
      '« may well be realistic, but… I’d plan for a further delay » : elle concède la possibilité tout en doutant. « I would have thought… could hardly » trahit une surprise polie.',
      {
        d: 3.3,
        passage: 'Hi Tom, thanks for the update. I would have thought the supplier could hardly miss a deadline they had set themselves, but there we are. The new date may well be realistic, but given their track record, I’d plan for a further delay. We might as well use the extra week to refine the design. Best, Priya',
      })
    .listen('I could hardly say no when she offered to drive me all the way to the airport.', 'Qu’est-ce que le locuteur veut dire ?',
      ['Il a refusé son offre', 'Il lui était difficile de refuser', 'Il a dû conduire lui-même', 'Elle ne lui a rien proposé'], 1,
      '« I could hardly say no » = je pouvais difficilement refuser (donc il a accepté).', { kc: PRAG, d: 3.1 })
    .listen('It may well be the best restaurant in town, but I’d rather not wait two hours for a table.', 'Quelle est la position du locuteur ?',
      ['Il conteste que ce soit le meilleur restaurant', 'Il admet que c’est peut-être le meilleur, mais refuse d’attendre', 'Il veut réserver pour dans deux heures', 'Il trouve le restaurant trop cher'], 1,
      '« It may well be…, but » : concession (c’est bien possible), puis réserve.', { d: 3.1 })
    .say('J’aurais pensé qu’il serait déjà là.',
      ['I would have thought he would be here by now', 'I would have thought he would already be here', 'I would have thought he would be here already', 'I would have expected him to be here by now'],
      'I would have thought + would be : surprise polie.', { kc: PRAG, d: 3.2 })
    .answer('Your friend is unsure whether to apply for a job abroad. Give your opinion, using « may well », « might as well » or « be bound to ».',
      'You may well find the first months difficult, but you’re bound to learn a lot, and since you’re free right now, you might as well give it a try.',
      'Dose ta probabilité (may well, bound to) et propose une option raisonnable (might as well).',
      { d: 3.3, minWords: 15, keywords: [['may well', 'might well', 'could well', 'might as well', 'may as well', 'bound to']] })
    .build(),
};

export const stance2: Lesson = {
  id: 'c2-stance-2',
  cefr: 'C2',
  unitId: 'c2-stance',
  title: 'Dare et need modaux, adverbes de position',
  subtitle: 'Need I say more?, arguably, admittedly, supposedly',
  kcIds: [DARE, ADV],
  estMinutes: 10,
  explanation: [
    {
      title: 'Dare et need : modaux ou verbes ordinaires',
      body: 'dare et need se conjuguent de deux façons. Comme modaux (sans -s, sans do, suivis de la base verbale), surtout à la forme négative ou interrogative et dans un registre soutenu ou britannique. Comme verbes ordinaires, partout.',
      table: [
        ['modal', 'verbe ordinaire'],
        ['You needn’t worry.', 'You don’t need to worry.'],
        ['Need I say more?', 'Do I need to say more?'],
        ['She dared not ask.', 'She didn’t dare (to) ask.'],
        ['You needn’t have cooked. (inutile, mais fait)', 'You didn’t need to cook. (pas nécessaire, fait ou non)'],
      ],
      examples: [
        { en: 'Need I remind you that the doors close at eight?', fr: 'Ai-je besoin de vous rappeler que les portes ferment à huit heures ?' },
        { en: 'I dare say the shop will reopen next week.', fr: 'J’imagine que la boutique rouvrira la semaine prochaine.' },
      ],
      tip: 'Jamais de mélange : « He needs not worry » ✗, « He need not to worry » ✗. « I dare say » ne veut pas dire « j’ose dire » mais « j’imagine, sans doute » : c’est une supposition modeste.',
    },
    {
      title: 'Les adverbes de position (stance adverbs)',
      body: 'Placés en tête ou au milieu de la phrase, ils indiquent ce que le locuteur pense de ce qu’il affirme : degré de certitude, concession, doute.',
      table: [
        ['arguably', 'on peut soutenir que (affirmation défendable)'],
        ['admittedly', 'certes, il faut l’admettre (concession)'],
        ['presumably', 'vraisemblablement (déduction raisonnable)'],
        ['supposedly', 'soi-disant, censément (doute du locuteur)'],
        ['apparently', 'apparemment, d’après ce qu’on dit'],
        ['undeniably', 'indéniablement'],
        ['understandably', 'on le comprend'],
      ],
      examples: [
        { en: 'It is arguably the best album of the decade.', fr: 'On peut soutenir que c’est le meilleur album de la décennie.' },
        { en: 'The device is supposedly waterproof, but mine stopped working in the rain.', fr: 'L’appareil est censé être étanche, mais le mien a cessé de fonctionner sous la pluie.' },
      ],
      tip: 'presumably (je suppose, c’est logique) et supposedly (c’est ce qu’on prétend, mais j’en doute) ne sont pas interchangeables. Attention aussi aux faux amis : actually = en fait, eventually = finalement, pas « actuellement » ni « éventuellement ».',
    },
  ],
  exercises: exercises('c2-stance-2', 'C2', { kc: DARE })
    .mcq('You ___ bring anything; we have plenty of food.',
      ['needn’t', 'mustn’t', 'daren’t', 'don’t need'], 0,
      'needn’t = ce n’est pas la peine. mustn’t = interdiction ; « don’t need » exigerait « to ».', { d: 3.0 })
    .cloze('___ I remind you that the deadline is tomorrow?', ['Need'],
      'need modal en question, registre soutenu : Need I remind you…? (sans do, sans to).', { hint: 'need, employé comme modal', d: 3.1 })
    .cloze('She ___ tell her boss that she had lost the keys.', ['dared not', 'dare not', 'daren’t', 'didn’t dare', 'did not dare'],
      'dare modal au passé : dared not (ou dare not) + base ; verbe ordinaire : didn’t dare (to).', { hint: 'dare, à la forme négative, au passé', d: 3.3 })
    .type('Réécris avec « needn’t have » : « It wasn’t necessary for you to cook, but you did. »',
      ['You needn’t have cooked.', 'You need not have cooked.', 'You needn’t have cooked, but you did.', 'You need not have cooked, but you did.'],
      'needn’t have + p.p. = c’était inutile, mais tu l’as fait.', { d: 3.2 })
    .listen('I dare say the team will cope perfectly well without me for a week.', 'Que signifie « I dare say » ici ?',
      ['J’ose l’affirmer haut et fort', 'J’imagine, je suppose', 'Je refuse de le dire', 'Je mets l’équipe au défi'], 1,
      '« I dare say » = j’imagine, sans doute : supposition modeste.', { d: 3.3 })
    .mcq('The film is ___ the director’s finest work, although some critics prefer her earlier films.',
      ['arguably', 'supposedly', 'eventually', 'actually'], 0,
      'arguably = on peut soutenir que : affirmation défendable, mais discutable (d’où « although some critics… »).', { kc: ADV, d: 3.0 })
    .mcq('The hotel was ___ renovated last year, but the rooms looked exactly as they did a decade ago.',
      ['presumably', 'supposedly', 'admittedly', 'undeniably'], 1,
      'supposedly = soi-disant : le locuteur doute de la rénovation, ce que confirme la suite.', { kc: ADV, d: 3.2 })
    .cloze('___, the plan has its weaknesses, but it is still the best option we have.', ['Admittedly'],
      'Admittedly = certes : on concède un point avant de défendre sa position.', { kc: ADV, hint: 'certes (adverbe de concession)', d: 3.1 })
    .tr('Apparemment, le musée est fermé le lundi.',
      ['Apparently, the museum is closed on Mondays.', 'The museum is apparently closed on Mondays.', 'Apparently, the museum closes on Mondays.', 'Apparently the museum is shut on Mondays.'],
      'apparently = d’après ce qu’on dit ; il peut se placer en tête ou après be.', { kc: ADV, d: 3.0 })
    .tr('Tu n’avais pas besoin de m’attendre.',
      ['You needn’t have waited for me.', 'You need not have waited for me.', 'You didn’t need to wait for me.', 'You didn’t have to wait for me.'],
      'Si l’autre a attendu (sous-entendu ici), needn’t have waited est la forme la plus précise.', { d: 3.2 })
    .mcq('What does the reviewer imply by describing the old galleries as « supposedly » designed for children?',
      ['They were definitely designed for children', 'They claimed to suit children but did not really succeed', 'They were designed by children', 'They have been moved to the new building'], 1,
      'supposedly exprime le doute : les salles prétendaient s’adresser aux enfants, sans y parvenir, contrairement aux nouvelles.',
      {
        kc: ADV, d: 3.4,
        passage: 'The new science museum is, admittedly, smaller than its predecessor, and visitors hoping for the vast dinosaur hall will presumably be disappointed. Yet it is arguably the most engaging museum the city has opened in decades. The so-called interactive galleries of the old building were supposedly designed for children; here, the hands-on exhibits genuinely hold the attention of all ages.',
      })
    .listen('Understandably, the organisers postponed the race after a week of heavy snow.', 'Que pense le locuteur du report ?',
      ['Il le trouve compréhensible', 'Il le juge injustifié', 'Il ignorait que la course était reportée', 'Il pense qu’il aurait fallu l’annuler'], 0,
      'Understandably = on le comprend : le locuteur approuve la décision.', { kc: ADV, d: 3.0 })
    .say('Ai-je besoin d’en dire plus ?',
      ['Need I say more', 'Do I need to say more', 'Do I need to say any more'],
      'Need I say more? : need modal, tournure soutenue et un peu théâtrale.', { d: 3.0 })
    .answer('Give your opinion on remote working, using at least two stance adverbs (arguably, admittedly, presumably, undeniably…).',
      'Remote working is arguably the biggest change to office life in decades; admittedly, it can feel isolating, but it undeniably saves people hours of commuting every week.',
      'Combine un adverbe qui affirme (arguably, undeniably) et un adverbe qui concède ou nuance (admittedly, presumably).',
      { kc: ADV, d: 3.3, minWords: 15, keywords: [['arguably', 'undeniably', 'undoubtedly', 'clearly', 'conceivably'], ['admittedly', 'granted', 'presumably', 'understandably', 'apparently', 'supposedly']] })
    .build(),
};
