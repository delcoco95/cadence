/** Forme canonique d'un texte lu : apostrophes et espaces unifiés (même audio pour « don’t » et « don't »). */
export function normalizeSpeech(text: string): string {
  return text.normalize('NFC').replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
}

/** Nom de fichier stable d'un texte : FNV-1a 32 bits en hexadécimal, sur la forme canonique. */
export function speechKey(text: string): string {
  let h = 0x811c9dc5;
  for (const ch of normalizeSpeech(text)) {
    h ^= ch.codePointAt(0)!;
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}
