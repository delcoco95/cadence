/**
 * Génère l'audio de tous les textes de corpus.json avec les voix Kokoro de Cadence.
 *   node generate.mjs            → lance 4 processus en parallèle, puis écrit le manifeste
 *   node generate.mjs --manifest → réécrit seulement le manifeste
 * Reprise automatique : un fichier déjà généré n'est pas refait (on peut interrompre et relancer).
 * Sortie : public/audio/<voix>/<clé>.mp3 et public/audio/manifest.json.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const VOICES = ['af_heart', 'am_michael'];
// Mesuré : 4 processus de 2 cœurs vont ~4× plus vite que 3 processus qui se disputent tous les cœurs.
const WORKERS = 4;
const THREADS_PER_WORKER = '2';
const OUT = fileURLToPath(new URL('../../public/audio/', import.meta.url));
const corpus = JSON.parse(readFileSync(new URL('./corpus.json', import.meta.url), 'utf8'));
const args = process.argv.slice(2);

function writeManifest() {
  // Une clé n'est listée que si l'audio existe pour TOUTES les voix : sinon l'app reste sur la synthèse du téléphone.
  const sets = VOICES.map((v) => new Set(existsSync(OUT + v) ? readdirSync(OUT + v).map((f) => f.replace('.mp3', '')) : []));
  const keys = corpus.map((c) => c.key).filter((k) => sets.every((s) => s.has(k)));
  writeFileSync(OUT + 'manifest.json', JSON.stringify({ voices: VOICES, keys }));
  console.log(`manifeste : ${keys.length} / ${corpus.length} textes disponibles`);
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
