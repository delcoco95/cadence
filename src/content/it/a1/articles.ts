import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const DEF = 'it.a1.grammar.definite_articles';
const CE = 'it.a1.grammar.c_e_ci_sono';

export const articles1: Lesson = {
  id: 'it-a1-articles-1',
  cefr: 'A1',
  unitId: 'it-a1-articles',
  title: 'Il, lo, la, l’, i, gli, le',
  subtitle: 'Choisir l’article défini selon le début du mot',
  kcIds: [DEF],
  estMinutes: 8,
  explanation: [
    {
      title: 'L’article défini',
      body: 'L’article dépend du genre, du nombre et de la première lettre du nom.',
      table: [
        ['masc. + consonne', 'il / i : il libro, i libri'],
        ['masc. + s + consonne, z, gn, ps, y', 'lo / gli : lo studente, gli studenti · lo zaino, gli zaini'],
        ['masc. + voyelle', 'l’ / gli : l’amico, gli amici'],
        ['fém. + consonne', 'la / le : la casa, le case'],
        ['fém. + voyelle', 'l’ / le : l’amica, le amiche'],
      ],
      examples: [
        { en: 'Gli amici di Marco sono simpatici.', fr: 'Les amis de Marco sont sympathiques.' },
        { en: 'Lo zio e la zia di Luca abitano a Bari.', fr: 'L’oncle et la tante de Luca habitent à Bari.' },
      ],
      tip: 'Le pluriel de « l’amico » est « gli amici », pas « i amici ». Et « les » se dit i, gli ou le : apprends chaque nom avec son article.',
    },
    {
      title: 'Emploi',
      body: 'On l’emploie globalement comme en français, y compris devant les pays et les noms en général.',
      examples: [
        { en: 'Il caffè italiano è buono.', fr: 'Le café italien est bon.' },
        { en: 'L’Italia è bellissima.', fr: 'L’Italie est magnifique.' },
        { en: 'Dov’è la stazione?', fr: 'Où est la gare ?' },
      ],
      tip: 'Au féminin pluriel, pas d’apostrophe : « l’amica » mais « le amiche ».',
    },
  ],
  exercises: exercises('it-a1-articles-1', 'A1', { kc: DEF })
    .mcq('___ studente', ['lo', 'il', 'l’'], 0, 's + consonne → lo studente.', { d: -2.0 })
    .mcq('___ amici', ['gli', 'i', 'le'], 0, 'Masculin pluriel devant voyelle → gli amici.', { d: -1.8 })
    .cloze('___ zaino è nuovo.', ['Lo'], 'Devant z → lo zaino.', { d: -1.9 })
    .cloze('Dove sono ___ chiavi?', ['le'], 'chiave est féminin → la chiave, le chiavi.', { d: -2.0 })
    .type('Article défini de « aereo » (avion, masculin) ?', ['l’', 'l’aereo'], 'Masculin singulier devant voyelle → l’aereo.', { d: -2.1 })
    .type('Mets au pluriel : « lo studente »', ['gli studenti'], 'lo → gli ; studente → studenti.', { d: -1.7 })
    .order('Les amis de Marco sont italiens.', 'Gli amici di Marco sono italiani.', 'amico commence par une voyelle → gli amici.', { distractors: ['i'], d: -1.9 })
    .tr('Où sont les clés ?', ['Dove sono le chiavi?', 'Le chiavi dove sono?'], 'chiave (f.) → le chiavi.', { d: -2.0 })
    .tr('L’ami de Paolo est là.', ['L’amico di Paolo è qui.', 'L’amico di Paolo è qua.', 'L’amico di Paolo c’è.'], 'l’amico ; qui ou qua = ici, là.', { d: -1.8 })
    .listen('Il treno per Firenze è in ritardo.', 'Qu’est-ce qui est en retard ?', ['Le train pour Florence', 'L’avion pour Florence', 'Le bus pour Florence'], 0,
      'il treno = le train ; in ritardo = en retard.', { d: -2.0 })
    .listen('Gli zaini sono qui, le valigie sono là.', 'Où sont les valises ?', ['Là-bas', 'Ici', 'Dans le train'], 0,
      'le valigie = les valises ; là = là-bas.', { d: -1.8 })
    .dictation('Lo zio e la zia di Luca.', 'zio commence par z → lo zio ; zia est féminin → la zia.', { d: -1.9 })
    .repeat('Gli gnocchi e gli spaghetti sono buonissimi.', 'gli = « ly » mouillé ; gn comme dans « montagne ».', { d: -1.9 })
    .say('Le livre et les clés.', ['Il libro e le chiavi.'], 'il libro (m.) ; le chiavi (f. pl.).', { d: -2.1 })
    .say('Où est la gare ?', ['Dov’è la stazione?', 'Dove è la stazione?', 'La stazione dov’è?'], 'Dov’è = dove + è ; la stazione = la gare.', { d: -2.3 })
    .build(),
};

export const articles2: Lesson = {
  id: 'it-a1-articles-2',
  cefr: 'A1',
  unitId: 'it-a1-articles',
  title: 'C’è, ci sono',
  subtitle: 'Dire ce qu’il y a et demander où c’est',
  kcIds: [CE, DEF],
  estMinutes: 8,
  explanation: [
    {
      title: 'Il y a : c’è / ci sono',
      table: [
        ['c’è + singulier', 'C’è un bar qui vicino. · Il y a un bar près d’ici.'],
        ['ci sono + pluriel', 'Ci sono due farmacie. · Il y a deux pharmacies.'],
        ['négation', 'Non c’è latte. · Non ci sono problemi.'],
        ['question', 'C’è un bancomat? · Il y a un distributeur ?'],
      ],
      tip: '« Il y a » ne se traduit jamais avec avere : « Ha un bar qui » ✗ → « C’è un bar qui » ✓. Et devant un pluriel, c’est ci sono, pas c’è.',
    },
    {
      title: 'C’è… ? ou Dov’è… ?',
      body: 'C’è + article indéfini demande si une chose existe. Dov’è / Dove sono + article défini demande où se trouve une chose précise.',
      examples: [
        { en: 'Scusi, c’è una farmacia qui vicino?', fr: 'Excusez-moi, il y a une pharmacie près d’ici ?' },
        { en: 'Dov’è la farmacia Centrale?', fr: 'Où est la pharmacie Centrale ?' },
        { en: 'Dove sono i bagni?', fr: 'Où sont les toilettes ?' },
      ],
      tip: 'Dov’è s’écrit avec apostrophe (dove + è). C’è se prononce « tchè ».',
    },
  ],
  exercises: exercises('it-a1-articles-2', 'A1', { kc: CE })
    .mcq('In questa strada ___ due farmacie.', ['ci sono', 'c’è', 'sono'], 0, 'Pluriel (due farmacie) → ci sono.', { d: -2.0 })
    .mcq('___ un supermercato qui vicino?', ['C’è', 'Ci sono', 'È'], 0, 'Singulier, question d’existence → C’è…?', { d: -2.1 })
    .cloze('Non ___ latte in frigo.', ['c’è'], 'latte est singulier → non c’è.', { hint: 'il y a', d: -1.9 })
    .mcq('Qu’est-ce qui manque dans le quartier ?', ['Une pharmacie', 'Un parc', 'Un supermarché'], 0,
      'non c’è una farmacia = il n’y a pas de pharmacie.',
      { passage: 'Nel mio quartiere c’è un parco grande e ci sono due bar. C’è anche un supermercato, ma non c’è una farmacia: la farmacia è in via Roma.', d: -1.8 })
    .type('Complète : « In classe ___ venti studenti. » (il y a)', ['ci sono'], 'venti studenti est pluriel → ci sono.', { d: -2.0 })
    .type('Mets au pluriel : « l’albergo » (l’hôtel)', ['gli alberghi'], 'l’ masculin → gli ; -go → -ghi pour garder le son g dur.', { kc: DEF, d: -1.6 })
    .order('Il y a une banque ici ?', 'C’è una banca qui?', 'C’è + singulier ; l’intonation fait la question.', { distractors: ['sono'], d: -2.0 })
    .tr('Il n’y a pas de problème.', ['Non c’è problema.', 'Non c’è nessun problema.', 'Non ci sono problemi.'], 'non c’è + singulier ou non ci sono + pluriel.', { d: -1.8 })
    .tr('Où sont les toilettes ?', ['Dove sono i bagni?', 'Dov’è il bagno?', 'Dove sono le toilette?', 'Dov’è la toilette?'],
      'On dit souvent au singulier : Dov’è il bagno ? (toilette est invariable).', { kc: DEF, d: -1.8 })
    .listen('In camera c’è un letto, ma non ci sono asciugamani.', 'Que manque-t-il dans la chambre ?', ['Des serviettes', 'Un lit', 'Une clé'], 0,
      'non ci sono asciugamani = il n’y a pas de serviettes.', { d: -1.7 })
    .listen('Scusi, c’è una farmacia qui vicino? — Sì, in via Dante.', 'Que cherche la personne ?', ['Une pharmacie', 'Une gare', 'Un café'], 0,
      'c’è una farmacia ? = il y a une pharmacie ?', { d: -2.2 })
    .dictation('Ci sono due bar e un ristorante.', 'ci sono + pluriel ; bar est invariable.', { d: -1.8 })
    .repeat('C’è un problema? — No, non c’è nessun problema.', 'c’è se dit « tchè » ; non c’è nessun… = il n’y a aucun…', { d: -2.0 })
    .say('Il y a un bar ici ?', ['C’è un bar qui?', 'C’è un bar qua?', 'Qui c’è un bar?'], 'C’è + singulier.', { d: -2.0 })
    .say('Il y a deux hôtels.', ['Ci sono due alberghi.', 'Ci sono due hotel.'], 'Pluriel → ci sono ; hotel est invariable.', { d: -1.9 })
    .build(),
};
