"""
Phrases d'essai des voix italiennes et espagnoles (Kokoro et Piper) pour les choisir à l'oreille.
  .venv/Scripts/python samples_it_es.py
Sortie : samples/<moteur>-<voix>-<n>.mp3 + samples/langues.html (page d'écoute).
Modèles attendus dans models/ (voir README des voix).
"""
import html
import os
import time

import lameenc
import numpy as np
from kokoro_onnx import Kokoro
from piper import PiperVoice, SynthesisConfig

HERE = os.path.dirname(os.path.abspath(__file__))
MODELS = os.path.join(HERE, 'models')
OUT = os.path.join(HERE, 'samples')

SENTENCES = {
    'it': [
        'Ciao! Benvenuto su Cadence. Impariamo l’italiano insieme.',
        'Mio fratello lavora in banca, ma il suo lavoro non gli piace.',
        'Potresti mandarmi il rapporto entro giovedì? Venerdì è troppo tardi per la riunione.',
        'A dire il vero non mi aspettavo molto, ma il cibo si è rivelato squisito.',
        'gnocchi',
    ],
    'es': [
        '¡Hola! Bienvenido a Cadence. Aprendamos español juntos.',
        'Mi hermano trabaja en un banco, pero no le gusta su trabajo.',
        '¿Podrías enviarme el informe antes del jueves? El viernes es demasiado tarde para la reunión.',
        'La verdad es que no esperaba mucho, pero la comida resultó estar buenísima.',
        'ferrocarril',
    ],
}

# (langue, moteur, voix, libellé)
CANDIDATES = [
    ('it', 'kokoro', 'if_sara', 'Italienne · femme'),
    ('it', 'kokoro', 'im_nicola', 'Italien · homme'),
    ('it', 'piper', 'it_IT-paola-medium', 'Italienne · femme'),
    ('it', 'piper', 'it_IT-riccardo-x_low', 'Italien · homme'),
    ('es', 'kokoro', 'ef_dora', 'Espagnole · femme'),
    ('es', 'kokoro', 'em_alex', 'Espagnol · homme'),
    ('es', 'kokoro', 'em_santa', 'Espagnol · homme'),
    ('es', 'piper', 'es_ES-sharvard-medium:F', 'Espagnole · femme'),
    ('es', 'piper', 'es_ES-sharvard-medium:M', 'Espagnol · homme'),
    ('es', 'piper', 'es_ES-davefx-medium', 'Espagnol · homme'),
    ('es', 'piper', 'es_ES-carlfm-x_low', 'Espagnol · homme'),
]


def mp3(samples: np.ndarray, rate: int, kbps: int = 48) -> bytes:
    pcm = (np.clip(samples, -1, 1) * 0x7FFF).astype(np.int16)
    enc = lameenc.Encoder()
    enc.set_bit_rate(kbps)
    enc.set_in_sample_rate(rate)
    enc.set_channels(1)
    enc.set_quality(2)
    return enc.encode(pcm.tobytes()) + enc.flush()


_kokoro = None
_piper: dict[str, PiperVoice] = {}


def synthesize(engine: str, voice: str, lang: str, text: str) -> tuple[np.ndarray, int]:
    global _kokoro
    if engine == 'kokoro':
        _kokoro = _kokoro or Kokoro(os.path.join(MODELS, 'kokoro-v1.0.onnx'), os.path.join(MODELS, 'voices-v1.0.bin'))
        return _kokoro.create(text, voice=voice, speed=1.0, lang=lang)
    name, _, speaker = voice.partition(':')
    pv = _piper.get(name) or PiperVoice.load(os.path.join(MODELS, f'{name}.onnx'))
    _piper[name] = pv
    config = SynthesisConfig(speaker_id=pv.config.speaker_id_map[speaker]) if speaker else None
    chunks = [c.audio_float_array for c in pv.synthesize(text, syn_config=config)]
    return np.concatenate(chunks), pv.config.sample_rate


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    rows = []
    for lang, engine, voice, label in CANDIDATES:
        files = []
        for i, text in enumerate(SENTENCES[lang]):
            t0 = time.time()
            samples, rate = synthesize(engine, voice, lang, text)
            name = f"{engine}-{voice.replace(':', '_')}-{i + 1}.mp3"
            with open(os.path.join(OUT, name), 'wb') as f:
                f.write(mp3(samples, rate))
            files.append(name)
            print(f'{name}  {time.time() - t0:.1f} s', flush=True)
        rows.append((lang, engine, voice, label, files))

    sections = []
    for lang, title in (('it', 'Italien'), ('es', 'Espagnol (Espagne)')):
        sections.append(f'<h2 class="lang">{title}</h2>')
        for r_lang, engine, voice, label, files in rows:
            if r_lang != lang:
                continue
            clips = ''.join(
                f'<small>{html.escape(SENTENCES[lang][i])}</small><audio controls preload="none" src="{f}"></audio>'
                for i, f in enumerate(files)
            )
            sections.append(f'<section><h3>{html.escape(voice)}</h3><p>{label} · {engine.capitalize()}</p>{clips}</section>')

    page = f"""<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Voix Cadence · italien et espagnol</title><style>
body{{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:16px;background:#f7f5ff;color:#1e1b3a}}
section{{background:#fff;border:2px solid #e6e2f3;border-radius:16px;padding:14px;margin:12px 0}}
h2.lang{{margin:28px 0 4px}}h3{{margin:0 0 4px;font-size:18px}}p{{margin:0 0 10px;color:#6e6a8a}}
audio{{width:100%;margin:4px 0}}small{{color:#6e6a8a}}
</style></head><body><h1>Voix candidates</h1>
<p>Pour chaque langue, choisis une voix féminine et une voix masculine.</p>
{''.join(sections)}</body></html>"""
    with open(os.path.join(OUT, 'langues.html'), 'w', encoding='utf-8') as f:
        f.write(page)
    print('OK samples/langues.html')


if __name__ == '__main__':
    main()
