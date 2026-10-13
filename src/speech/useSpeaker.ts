import { useCallback } from 'react';
import { useSettings } from '../db/hooks';
import { speak } from './tts';
import { speechLocale } from './audio';

/** Fonction de lecture selon les réglages (langue, accent, voix, débit). `slow` : réécoute lente (tortue). */
export function useSpeaker(onSpeak?: () => void) {
  const settings = useSettings();
  const accent = speechLocale(settings?.language ?? 'en', settings?.accent ?? 'en-US');
  const rate = settings?.speechRate ?? 0.9;
  const gender = settings?.cadenceVoice ?? 'female';
  return useCallback(
    (text: string, slow?: boolean) => {
      onSpeak?.();
      speak(text, accent, { rate: slow ? 0.6 : rate, voice: { gender } });
    },
    [onSpeak, accent, rate, gender],
  );
}
