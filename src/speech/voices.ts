/** Choix des voix de synthèse : logique pure, testable sans navigateur. */

export interface VoiceLike {
  name: string;
  lang: string;
  localService?: boolean;
  voiceURI?: string;
}

export type VoiceGender = 'female' | 'male';
export type VoiceGenderPref = VoiceGender | 'any';
/** 3 naturelle (Premium, Neural…) · 2 améliorée · 1 standard */
export type VoiceTier = 1 | 2 | 3;

export interface RankedVoice<V extends VoiceLike = VoiceLike> {
  voice: V;
  /** Nom lisible, sans les suffixes techniques */
  label: string;
  tier: VoiceTier;
  gender?: VoiceGender;
  score: number;
}

/**
 * Voix « gadget » d'Apple (effets, chant, robots) et voix Eloquence de faible qualité :
 * inutilisables pour apprendre une langue.
 */
const NOVELTY = new Set(
  [
    'albert', 'bad news', 'bahh', 'bells', 'boing', 'bubbles', 'cellos', 'deranged', 'good news', 'hysterical',
    'jester', 'organ', 'pipe organ', 'superstar', 'trinoids', 'whisper', 'wobble', 'zarvox', 'junior', 'ralph',
    'kathy', 'fred', 'princess', 'grandma', 'grandpa', 'eddy', 'flo', 'reed', 'rocky', 'sandy', 'shelley',
  ],
);

/** Prénoms connus des voix anglaises (Apple, Google, Microsoft). */
const FEMALE = new Set(
  [
    'samantha', 'ava', 'allison', 'susan', 'zoe', 'nicky', 'joelle', 'kate', 'serena', 'stephanie', 'martha',
    'karen', 'catherine', 'moira', 'tessa', 'veena', 'fiona', 'victoria', 'libby', 'sonia', 'maisie', 'hollie',
    'jenny', 'aria', 'michelle', 'ana', 'emma', 'natasha', 'clara', 'emily', 'sara', 'olivia', 'hazel', 'zira',
    'isla', 'heera', 'neerja', 'female', 'abbi', 'bella', 'amber', 'ashley', 'cora', 'elizabeth', 'jane', 'nancy',
  ],
);
const MALE = new Set(
  [
    'daniel', 'arthur', 'oliver', 'tom', 'alex', 'aaron', 'evan', 'nathan', 'fred', 'gordon', 'lee', 'rishi',
    'thomas', 'ryan', 'guy', 'christopher', 'eric', 'roger', 'steffan', 'william', 'mark', 'george', 'david',
    'james', 'jamie', 'liam', 'brian', 'noah', 'male', 'alfie', 'elliot', 'ethan', 'jacob', 'kai', 'luke', 'andrew', 'brandon',
  ],
);

/** Nom sans « (Premium) », « Microsoft », « Online (Natural) - English (United Kingdom) »… */
export function voiceLabel(name: string): string {
  return name
    .replace(/^(Microsoft|Google|Apple)\s+/i, '')
    .replace(/\s*\((premium|enhanced|améliorée|amélioré|compact)\)/gi, '')
    .replace(/\s+Online\s*\(Natural\)/i, '')
    .replace(/\s+-\s+.*$/, '')
    .replace(/\s+\(.*\)$/, '')
    .trim();
}

function firstWord(name: string): string {
  return voiceLabel(name).toLowerCase().split(/\s+/).pop() ?? '';
}

export function isNovelty(v: VoiceLike): boolean {
  return NOVELTY.has(voiceLabel(v.name).toLowerCase());
}

export function voiceTier(v: VoiceLike): VoiceTier {
  if (/premium|neural|natural|wavenet|studio/i.test(v.name)) return 3;
  // Les voix Google en ligne de Chrome sont nettement meilleures que les voix locales standard.
  if (/enhanced|améliorée|amélioré/i.test(v.name) || (/^google/i.test(v.name) && v.localService === false)) return 2;
  return 1;
}

export function voiceGender(v: VoiceLike): VoiceGender | undefined {
  const label = voiceLabel(v.name).toLowerCase();
  if (/\bfemale\b/.test(label)) return 'female';
  if (/\bmale\b/.test(label)) return 'male';
  const w = firstWord(v.name);
  const first = label.split(/\s+/)[0];
  if (FEMALE.has(first) || FEMALE.has(w)) return 'female';
  if (MALE.has(first) || MALE.has(w)) return 'male';
  return undefined;
}

const sameLang = (v: VoiceLike, accent: string) => v.lang.replace('_', '-').toLowerCase() === accent.toLowerCase();
const isEnglish = (v: VoiceLike) => v.lang.toLowerCase().startsWith('en');

/**
 * Voix utilisables pour un accent, de la meilleure à la moins bonne.
 * Ordre : qualité, puis genre préféré, puis voix locale (hors ligne).
 */
export function rankVoices<V extends VoiceLike>(voices: V[], accent: string, pref: VoiceGenderPref = 'any'): RankedVoice<V>[] {
  // accent 'en' : toutes les voix anglaises (repli quand l'accent demandé n'existe pas sur l'appareil)
  const match = accent === 'en' ? isEnglish : (v: VoiceLike) => sameLang(v, accent);
  return voices
    .filter((v) => match(v) && !isNovelty(v))
    .map((voice) => {
      const tier = voiceTier(voice);
      const gender = voiceGender(voice);
      const score = tier * 10 + (pref !== 'any' && gender === pref ? 5 : 0) + (voice.localService !== false ? 1 : 0);
      return { voice, label: voiceLabel(voice.name), tier, gender, score };
    })
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
}

/**
 * Voix à utiliser : celle choisie par l'utilisateur si elle existe sur l'appareil,
 * sinon la meilleure de l'accent, sinon la meilleure voix anglaise d'un autre accent.
 */
export function chooseVoice<V extends VoiceLike>(
  voices: V[],
  accent: string,
  pref: VoiceGenderPref = 'any',
  preferredName?: string,
): V | undefined {
  if (preferredName) {
    // Une voix choisie explicitement est gardée même d'un autre accent (repli quand l'accent manque).
    const chosen = voices.find((v) => v.name === preferredName && isEnglish(v));
    if (chosen) return chosen;
  }
  const ranked = rankVoices(voices, accent, pref);
  if (ranked.length) return ranked[0].voice;
  return rankVoices(voices, 'en', pref)[0]?.voice;
}
