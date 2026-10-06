import type { Cefr, Exercise, Skill } from './types';

/**
 * Petit DSL pour écrire des leçons rapidement et lisiblement.
 * Les identifiants sont `${prefix}-01`, `-02`… dans l'ordre d'écriture :
 * ajouter les nouveaux exercices À LA FIN pour ne pas décaler l'historique.
 */
interface Opts {
  kc?: string | string[];
  d?: number;
  speak?: string;
  skill?: Skill;
  tense?: string;
  instruction?: string;
  themes?: string[];
  /** QCM de compréhension écrite : texte à lire avant la question */
  passage?: string;
}

export function exercises(prefix: string, cefr: Cefr, defaults: { kc: string | string[]; tense?: string }) {
  const list: Exercise[] = [];
  const base = (o: Opts, skill: Skill, instruction: string, explanation: string) => {
    const kc = o.kc ?? defaults.kc;
    return {
      id: `${prefix}-${String(list.length + 1).padStart(2, '0')}`,
      cefr,
      skill: o.skill ?? skill,
      kcIds: Array.isArray(kc) ? kc : [kc],
      difficulty: o.d ?? -1,
      tense: o.tense ?? defaults.tense,
      instruction: o.instruction ?? instruction,
      explanation,
      speak: o.speak,
      themeIds: o.themes,
    };
  };

  const api = {
    /** QCM : la bonne réponse est l'option d'index `answer`. */
    mcq(question: string, options: string[], answer: number, explanation: string, o: Opts = {}) {
      list.push({
        ...base(o, o.passage ? 'reading' : 'grammar', o.passage ? 'Lis le texte, puis réponds.' : 'Choisis la bonne réponse.', explanation),
        type: 'mcq', question, options, answer, passage: o.passage,
      });
      return api;
    },
    /** Texte à trous : `___` dans la phrase. */
    cloze(sentence: string, accepted: string[], explanation: string, o: Opts & { hint?: string; loose?: boolean } = {}) {
      list.push({
        ...base(o, 'grammar', 'Complète la phrase.', explanation),
        type: 'cloze', sentence, accepted, hint: o.hint, strict: !o.loose,
        speak: o.speak ?? sentence.replace('___', accepted[0]),
      });
      return api;
    },
    type(question: string, accepted: string[], explanation: string, o: Opts & { loose?: boolean } = {}) {
      list.push({ ...base(o, 'grammar', 'Écris la réponse.', explanation), type: 'type_answer', question, accepted, strict: !o.loose });
      return api;
    },
    /** Remettre dans l'ordre : la phrase correcte est découpée en mots. */
    order(question: string, sentence: string, explanation: string, o: Opts & { distractors?: string[] } = {}) {
      const tokens = sentence.replace(/([?!])$/, ' $1').replace(/\.$/, '').split(' ').filter(Boolean);
      list.push({
        ...base(o, 'grammar', 'Remets les mots dans l’ordre.', explanation),
        type: 'word_bank', question, tokens, distractors: o.distractors, speak: o.speak ?? sentence,
      });
      return api;
    },
    /** Traduction FR → EN. */
    tr(source: string, accepted: string[], explanation: string, o: Opts = {}) {
      list.push({
        ...base(o, 'writing', 'Traduis en anglais.', explanation),
        type: 'translate', direction: 'fr_en', source, accepted, speak: o.speak ?? accepted[0],
      });
      return api;
    },
    /** Écouter puis choisir. */
    listen(audio: string, question: string, options: string[], answer: number, explanation: string, o: Opts = {}) {
      list.push({
        ...base(o, 'listening', 'Écoute puis réponds.', explanation),
        type: 'listen_mcq', audio, question, options, answer, speak: o.speak ?? audio,
      });
      return api;
    },
    /** Dictée : écrire ce qu'on entend. */
    dictation(audio: string, explanation: string, o: Opts & { accepted?: string[] } = {}) {
      list.push({
        ...base(o, 'listening', 'Écoute et écris la phrase.', explanation),
        type: 'dictation', audio, accepted: o.accepted ?? [audio], speak: audio,
      });
      return api;
    },
    /** Oral : répéter la phrase. */
    repeat(sentence: string, explanation: string, o: Opts = {}) {
      list.push({
        ...base(o, 'speaking', 'Écoute puis répète à voix haute.', explanation),
        type: 'speak', mode: 'repeat', prompt: sentence, speak: sentence,
      });
      return api;
    },
    /** Oral : dire en anglais une phrase française. */
    say(fr: string, accepted: string[], explanation: string, o: Opts = {}) {
      list.push({
        ...base(o, 'speaking', 'Dis-le en anglais, à voix haute.', explanation),
        type: 'speak', mode: 'translate', prompt: fr, accepted, speak: o.speak ?? accepted[0],
      });
      return api;
    },
    /** Oral : réponse libre à une question. */
    answer(question: string, sample: string, explanation: string, o: Opts & { minWords?: number; keywords?: string[][] } = {}) {
      list.push({
        ...base(o, 'speaking', 'Réponds à voix haute, en une ou deux phrases.', explanation),
        type: 'speak', mode: 'answer', prompt: question, sample, minWords: o.minWords ?? 6, keywords: o.keywords,
        speak: o.speak ?? question,
      });
      return api;
    },
    build: () => list,
  };
  return api;
}
