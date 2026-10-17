/**
 * Génère l'audio anglais (corpus.json) avec les voix Kokoro de Cadence (kokoro-js).
 * L'italien et l'espagnol sont générés par generate_it_es.py (Kokoro en Python), qui réécrit ensuite le manifeste ici.
 *   node generate.mjs            → lance 4 processus en parallèle, puis écrit le manifeste
 *   node generate.mjs --manifest → réécrit seulement le manifeste
 * Reprise automatique : un fichier déjà généré n'est pas refait (on peut interrompre et relancer).
 * Sortie : public/audio/<voix>/<clé>.mp3 et public/audio/manifest.json.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Nora, Michael (américain) ; Emma, George (britannique)
export const VOICES = ['af_heart', 'am_michael', 'bf_emma', 'bm_george'];
// Voix de chaque corpus, pour le manifeste : Sara, Nicola (italien) ; Dora, Alex (espagnol)
const MANIFEST = {
  'corpus.json': VOICES,
  'corpus-it.json': ['if_sara', 'im_nicola'],
  'corpus-es.json': ['ef_dora', 'em_alex'],
};
// Mesuré : 4 processus de 2 cœurs vont ~4× plus vite que 3 processus qui se disputent tous les cœurs.
const WORKERS = 4;
const THREADS_PER_WORKER = '2';
const OUT = fileURLToPath(new URL('../../public/audio/', import.meta.url));
const corpus = JSON.parse(readFileSync(new URL('./corpus.json', import.meta.url), 'utf8'));
const args = process.argv.slice(2);

function writeManifest() {
  // Liste par voix : une voix encore en cours de génération ne prive pas les autres de leurs fichiers.
  const voices = {};
  for (const [file, list] of Object.entries(MANIFEST)) {
    const url = new URL(`./${file}`, import.meta.url);
    if (!existsSync(url)) continue;
    const keys = JSON.parse(readFileSync(url, 'utf8')).map((c) => c.key);
    for (const v of list) {
      const files = new Set(existsSync(OUT + v) ? readdirSync(OUT + v).map((f) => f.replace('.mp3', '')) : []);
      voices[v] = keys.filter((k) => files.has(k));
    }
    console.log(`manifeste ${file} : ${list.map((v) => `${v} ${voices[v].length}`).join(' · ')} / ${keys.length} textes`);
  }
  writeFileSync(OUT + 'manifest.json', JSON.stringify({ version: 2, voices }));
}

if (args[0] === '--manifest') {
  writeManifest();
} else if (args[0] === '--worker') {
  const [shard, of] = [Number(args[1]), Number(args[2])];
  const { synthesizeMp3 } = await import('./lib.mjs');
  const jobs = VOICES.flatMap((voice) => corpus.map((c) => ({ voice, ...c }))).filter((_, i) => i % of === shard);
  for (const voice of VOICES) mkdirSync(OUT + voice, { recursive: true });
  let done = 0;
  for (const job of jobs) {
    const file = `${OUT}${job.voice}/${job.key}.mp3`;
    if (!existsSync(file)) writeFileSync(file, await synthesizeMp3(job.text, job.voice));
    if (++done % 25 === 0) console.log(`[${shard}] ${done} / ${jobs.length}`);
  }
  console.log(`[${shard}] terminé`);
} else {
  const started = Date.now();
  await Promise.all(
    Array.from({ length: WORKERS }, (_, i) =>
      new Promise((resolve, reject) => {
        const child = fork(fileURLToPath(import.meta.url), ['--worker', String(i), String(WORKERS)], {
          env: { ...process.env, KOKORO_THREADS: THREADS_PER_WORKER },
        });
        child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`processus ${i} : code ${code}`))));
      }),
    ),
  );
  writeManifest();
  console.log(`durée : ${Math.round((Date.now() - started) / 60000)} min`);
}
