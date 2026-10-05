import { useEffect, useReducer } from 'react';
import type { Accent, Settings } from '../../db/db';
import { onVoicesChanged, speak, ttsAvailable, voicesFor } from '../../speech/tts';
import type { VoiceGenderPref, VoiceTier } from '../../speech/voices';
import { CheckIcon, SparkleIcon, SpeakerIcon } from '../../ui/Icons';
import { isIOS } from '../focus/shortcuts';

type VoiceSettings = Pick<Settings, 'accent' | 'voiceName' | 'voiceGender' | 'speechRate'>;

const ACCENTS: { value: Accent; label: string }[] = [
  { value: 'en-GB', label: 'Britannique' },
  { value: 'en-US', label: 'Américain' },
  { value: 'en-AU', label: 'Australien' },
];

const GENDERS: { value: VoiceGenderPref; label: string }[] = [
  { value: 'female', label: 'Féminine' },
  { value: 'male', label: 'Masculine' },
  { value: 'any', label: 'Peu importe' },
];

const TIER: Record<VoiceTier, { label: string; cls: string }> = {
  3: { label: 'Naturelle', cls: 'chip success' },
  2: { label: 'Améliorée', cls: 'chip sky' },
  1: { label: 'Standard', cls: 'chip' },
};

const SAMPLE = (name: string) => `Hi, I'm ${name}! Let's learn English together, one step at a time.`;
const MAX_VOICES = 6;

/** Choix de l'accent, du genre de la voix et de la voix elle-même, avec écoute. */
export function VoicePicker({ value, onChange }: { value: VoiceSettings; onChange: (patch: Partial<VoiceSettings>) => void }) {
  const [, refresh] = useReducer((n: number) => n + 1, 0);
  useEffect(() => onVoicesChanged(refresh), []);

  const forAccent = voicesFor(value.accent, value.voiceGender);
  const missingAccent = forAccent.length === 0;
  const ranked = missingAccent ? voicesFor('en', value.voiceGender) : forAccent;
  const filtered = value.voiceGender === 'any' ? ranked : ranked.filter((r) => r.gender === value.voiceGender || !r.gender);
  const list = (filtered.length ? filtered : ranked).slice(0, MAX_VOICES);
  const selected = list.find((r) => r.voice.name === value.voiceName)?.voice.name ?? list[0]?.voice.name;
  const bestTier = ranked[0]?.tier ?? 1;

  const preview = (name: string | undefined, label: string) =>
    speak(SAMPLE(label), value.accent, { rate: value.speechRate, voice: { name, gender: value.voiceGender } });

  if (!ttsAvailable()) return <p className="note">La synthèse vocale n’est pas disponible sur ce navigateur.</p>;

  return (
    <div className="stack" style={{ gap: 14 }}>
      <div className="stack" style={{ gap: 8 }}>
        <p className="tiny muted">Accent</p>
        <div className="segmented">
          {ACCENTS.map((a) => (
            <button
              key={a.value}
              className={`option${value.accent === a.value ? ' selected' : ''}`}
              onClick={() => onChange({ accent: a.value, voiceName: undefined })}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
      <div className="stack" style={{ gap: 8 }}>
        <p className="tiny muted">Voix</p>
        <div className="segmented">
          {GENDERS.map((g) => (
            <button
              key={g.value}
              className={`option${value.voiceGender === g.value ? ' selected' : ''}`}
              onClick={() => onChange({ voiceGender: g.value, voiceName: undefined })}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {missingAccent && list.length > 0 && (
        <p className="note">Pas de voix {ACCENTS.find((a) => a.value === value.accent)?.label.toLowerCase()} sur cet appareil : voici les autres voix anglaises disponibles.</p>
      )}
      {list.length === 0 ? (
        <p className="note">Aucune voix anglaise sur cet appareil.</p>
      ) : (
        <div className="voice-list">
          {list.map((r) => {
            const isSel = r.voice.name === selected;
            return (
              <div key={r.voice.name} className={`voice${isSel ? ' selected' : ''}`}>
                <button className="play" aria-label={`Écouter ${r.label}`} onClick={() => preview(r.voice.name, r.label)}>
                  <SpeakerIcon />
                </button>
                <button
                  className="grow"
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0 }}
                  onClick={() => {
                    onChange({ voiceName: r.voice.name });
                    preview(r.voice.name, r.label);
                  }}
                >
                  <b>{r.label}</b>
                  <span className="row" style={{ gap: 6, marginTop: 2 }}>
                    <span className={TIER[r.tier].cls}>{TIER[r.tier].label}</span>
                    {r.gender && <span className="note">{r.gender === 'female' ? 'féminine' : 'masculine'}</span>}
                  </span>
                </button>
                {isSel && <CheckIcon style={{ width: 22, height: 22, color: 'var(--primary)', flex: 'none' }} />}
              </div>
            );
          })}
        </div>
      )}

      {bestTier < 3 && (
        <div className="tip">
          <SparkleIcon />
          <span>
            {isIOS() ? (
              <>
                Pour une voix bien plus naturelle, télécharge une voix <b>Premium</b> (gratuite) : Réglages › Accessibilité ›
                Contenu énoncé › Voix › Anglais, puis choisis par exemple <b>Ava</b>, <b>Zoe</b>, <b>Serena</b> ou <b>Jamie</b>
                avec la mention « Premium ». Reviens ensuite ici pour la sélectionner.
              </>
            ) : (
              <>Les voix « Natural » (Edge) ou « Premium » (iPhone, Mac) sont bien plus agréables. Installe-en une dans les réglages de ton appareil, puis reviens la choisir ici.</>
            )}
          </span>
        </div>
      )}
    </div>
  );
}
