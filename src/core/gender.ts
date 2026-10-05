/**
 * Accord en genre des textes français.
 *
 * Le contenu écrit les formes variables entre accolades : « Je suis {prêt|prête} »,
 * avec une 3ᵉ forme facultative pour le neutre : « {Prêt|Prête|Prêt·e} ».
 * Sans 3ᵉ forme, le neutre est déduit (« prêt·e », ou « heureux / heureuse »).
 */

export type Gender = 'f' | 'm' | 'n';

const GENDERED = /\{([^{}|]*)\|([^{}|]*)(?:\|([^{}|]*))?\}/g;

/** Forme inclusive : « occupé·e » quand le féminin prolonge le masculin, sinon « heureux / heureuse ». */
export function inclusive(m: string, f: string): string {
  if (m === f) return m;
  if (f.startsWith(m)) return `${m}·${f.slice(m.length)}`;
  return `${m} / ${f}`;
}

export function pick(gender: Gender, m: string, f: string, n?: string): string {
  if (gender === 'f') return f;
  if (gender === 'm') return m;
  return n ?? inclusive(m, f);
}

export function genderize(text: string, gender: Gender): string {
  if (!text.includes('{')) return text;
  return text.replace(GENDERED, (_, m: string, f: string, n?: string) => pick(gender, m, f, n));
}

/** Toutes les formes acceptables d'un texte (masculin et féminin), pour la correction. */
export function genderVariants(text: string): string[] {
  if (!text.includes('{')) return [text];
  return [...new Set([genderize(text, 'm'), genderize(text, 'f')])];
}

/**
 * Applique l'accord à tous les textes d'un objet (exercice, fiche…), en profondeur.
 * Les listes de réponses acceptées gardent les deux formes : on ne refuse jamais
 * un accord correct sous prétexte qu'il ne correspond pas au profil.
 */
export function genderizeDeep<T>(value: T, gender: Gender, key?: string): T {
  if (typeof value === 'string') return genderize(value, gender) as T;
  if (Array.isArray(value)) {
    if (key === 'accepted') return value.flatMap((v) => (typeof v === 'string' ? genderVariants(v) : [v])) as T;
    return value.map((v) => genderizeDeep(v, gender)) as T;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = genderizeDeep(v, gender, k);
    return out as T;
  }
  return value;
}
