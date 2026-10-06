import { AutoTokenizer, StyleTextToSpeech2Model } from '@huggingface/transformers';
import { KokoroTTS } from 'kokoro-js';
import { Mp3Encoder } from '@breezystack/lamejs';

export const MODEL = 'onnx-community/Kokoro-82M-v1.0-ONNX';

let tts;
/**
 * Chargement direct du modèle (kokoro-js ne transmet pas les options de session) pour fixer
 * le nombre de cœurs par processus : plusieurs processus qui se partagent tous les cœurs s'entravent.
 */
export async function loadTts(threads = Number(process.env.KOKORO_THREADS) || 0) {
  if (tts) return tts;
  const session_options = threads ? { intraOpNumThreads: threads, interOpNumThreads: 1 } : {};
  // q8 : modèle quantifié (~90 Mo), qualité quasi identique au modèle complet.
  const [model, tokenizer] = await Promise.all([
    StyleTextToSpeech2Model.from_pretrained(MODEL, { dtype: 'q8', device: 'cpu', session_options }),
    AutoTokenizer.from_pretrained(MODEL),
  ]);
  tts = new KokoroTTS(model, tokenizer);
  return tts;
}

/** Synthèse d'une phrase → MP3 mono (48 kb/s suffisent largement pour la voix). */
export async function synthesizeMp3(text, voice, speed = 1) {
  const t = await loadTts();
  const audio = await t.generate(text, { voice, speed });
  return encodeMp3(audio.audio, audio.sampling_rate);
}

export function encodeMp3(samples, sampleRate, kbps = 48) {
  const pcm = new Int16Array(samples.length);
  for (let i = 0; i < samples.length; i++) pcm[i] = Math.max(-1, Math.min(1, samples[i])) * 0x7fff;
  const enc = new Mp3Encoder(1, sampleRate, kbps);
  const chunks = [];
  for (let i = 0; i < pcm.length; i += 1152) {
    const out = enc.encodeBuffer(pcm.subarray(i, i + 1152));
    if (out.length) chunks.push(Buffer.from(out));
  }
  const end = enc.flush();
  if (end.length) chunks.push(Buffer.from(end));
  return Buffer.concat(chunks);
}
