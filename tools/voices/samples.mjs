/**
 * Phrases d'essai pour choisir les voix à l'oreille avant de tout générer.
 * Sortie : samples/<voix>-<n>.mp3 + samples/index.html (page d'écoute).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { synthesizeMp3 } from './lib.mjs';

const VOICES = [
  ['af_heart', 'Américaine · femme'],
  ['af_bella', 'Américaine · femme'],
  ['am_michael', 'Américain · homme'],
  ['am_fenrir', 'Américain · homme'],
  ['bf_emma', 'Britannique · femme'],
  ['bm_george', 'Britannique · homme'],
];

const SENTENCES = [
  'Hello! Welcome to Cadence. Let’s learn English together.',
  'My brother works in a bank, but he doesn’t like his job.',
  'Could you send me the report by Thursday? Friday is too late for the meeting.',
  'To be honest, I wasn’t expecting much, but the food turned out to be amazing.',
  'beautiful',
];

mkdirSync('samples', { recursive: true });
const rows = [];
for (const [voice, label] of VOICES) {
  const files = [];
  for (const [i, text] of SENTENCES.entries()) {
    const t0 = Date.now();
    const mp3 = await synthesizeMp3(text, voice);
    const file = `${voice}-${i + 1}.mp3`;
    writeFileSync(`samples/${file}`, mp3);
    files.push(file);
    console.log(`${file}  ${(mp3.length / 1024).toFixed(1)} Ko  ${Date.now() - t0} ms`);
  }
  rows.push({ voice, label, files });
}

const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Voix Cadence</title><style>
body{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:16px;background:#f7f5ff;color:#1e1b3a}
section{background:#fff;border:2px solid #e6e2f3;border-radius:16px;padding:14px;margin:12px 0}
h2{margin:0 0 4px;font-size:18px}p{margin:0 0 10px;color:#6e6a8a}audio{width:100%;margin:4px 0}small{color:#6e6a8a}
</style></head><body><h1>Voix candidates</h1><p>Écoute et choisis une voix féminine et une voix masculine.</p>
${rows
  .map(
    (r) => `<section><h2>${r.voice}</h2><p>${r.label}</p>${r.files
      .map((f, i) => `<small>${SENTENCES[i]}</small><audio controls preload="none" src="${f}"></audio>`)
      .join('')}</section>`,
  )
  .join('')}</body></html>`;
writeFileSync('samples/index.html', html);
console.log('OK samples/index.html');
