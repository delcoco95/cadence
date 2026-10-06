import { useCallback } from 'react';
import { useSettings } from '../db/hooks';
import { voicePref } from '../db/db';
import { speak } from './tts';

/** Fonction de lecture selon les réglages (voix, débit). `slow` : réécoute lente (tortue). */
export function useSpeaker(onSpeak?: () => void) {
  const settings = useSettings();
  const accent = settings?.accent ?? 'en-GB';
  const rate = settings?.speechRate ?? 0.9;
  const id = settings?.voiceId;
  const gender = settings?.voiceGender ?? 'any';
  const source = settings?.voiceSource ?? 'cadence';
  const cadence = settings?.cadenceVoice ?? 'female';
  return useCallback(
    (text: string, slow?: boolean) => {
      onSpeak?.();
      speak(text, accent, { rate: slow ? 0.6 : rate, voice: voicePref({ voiceId: id, voiceGender: gender, voiceSource: source, cadenceVoice: cadence }) });
    },
    [onSpeak, accent, rate, id, gender, source, cadence],
  );
}
