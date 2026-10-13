"""
Génère l'audio des cours d'italien et d'espagnol avec les voix Kokoro validées (Sara, Nicola ; Dora, Alex).
  .venv/Scripts/python generate_it_es.py            → corpus-it.json et corpus-es.json
  .venv/Scripts/python generate_it_es.py it         → une seule langue
Reprise automatique : un fichier déjà généré n'est pas refait (on peut interrompre et relancer).
Sortie : public/audio/<voix>/<clé>.mp3, puis le manifeste est réécrit par generate.mjs --manifest.
Prérequis : npm run speech-corpus (corpus à jour) et les modèles dans models/ (voir samples_it_es.py).
"""
import json
import os
import subprocess
import sys
import time
from multiprocessing import Pool

HERE = os.path.dirname(os.path.abspath(__file__))
MODELS = os.path.join(HERE, 'models')
OUT = os.path.normpath(os.path.join(HERE, '..', '..', 'public', 'audio'))

VOICES = {'it': ['if_sara', 'im_nicola'], 'es': ['ef_dora', 'em_alex']}
# Mesuré : un processus ne va pas plus vite avec 4 cœurs qu'avec 2 ; 6 processus de 2 cœurs occupent la machine.
WORKERS = 6
THREADS_PER_WORKER = 2

_kokoro = None


def _init() -> None:
    global _kokoro
    import onnxruntime as ort
    from kokoro_onnx import Kokoro

    opts = ort.SessionOptions()
    opts.intra_op_num_threads = THREADS_PER_WORKER
    opts.inter_op_num_threads = 1
    session = ort.InferenceSession(os.path.join(MODELS, 'kokoro-v1.0.onnx'), opts, providers=['CPUExecutionProvider'])
    _kokoro = Kokoro.from_session(session, os.path.join(MODELS, 'voices-v1.0.bin'))


def _job(job: tuple[str, str, str, str]) -> str:
    lang, voice, key, text = job
    from samples_it_es import mp3

    samples, rate = _kokoro.create(text, voice=voice, speed=1.0, lang=lang)
    path = os.path.join(OUT, voice, f'{key}.mp3')
    tmp = path + '.part'
    with open(tmp, 'wb') as f:
        f.write(mp3(samples, rate))
    os.replace(tmp, path)
    return key


def main() -> None:
    langs = sys.argv[1:] or ['it', 'es']
    jobs = []
    for lang in langs:
        with open(os.path.join(HERE, f'corpus-{lang}.json'), encoding='utf-8') as f:
            corpus = json.load(f)
        for voice in VOICES[lang]:
            os.makedirs(os.path.join(OUT, voice), exist_ok=True)
            jobs += [(lang, voice, c['key'], c['text']) for c in corpus if not os.path.exists(os.path.join(OUT, voice, f"{c['key']}.mp3"))]
    print(f'{len(jobs)} fichiers à générer ({", ".join(langs)})', flush=True)
    started = time.time()
    with Pool(WORKERS, initializer=_init) as pool:
        for done, _ in enumerate(pool.imap_unordered(_job, jobs, chunksize=4), 1):
            if done % 100 == 0:
                rate = done / (time.time() - started)
                print(f'{done} / {len(jobs)} · {rate:.1f} fichiers/s · reste ~{(len(jobs) - done) / rate / 60:.0f} min', flush=True)
    print(f'durée : {(time.time() - started) / 60:.0f} min', flush=True)
    subprocess.run(['node', os.path.join(HERE, 'generate.mjs'), '--manifest'], check=True)


if __name__ == '__main__':
    main()
