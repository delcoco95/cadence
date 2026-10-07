import { useEffect, useState } from 'react';
import type { Accent, Settings } from '../../db/db';
import { ACCENT_LABELS, CADENCE_VOICES, VOICE_SAMPLE, audioReady, clipCount, downloadVoice, playClip, type CadenceVoice } from '../../speech/audio';
import { CheckIcon, SpeakerIcon } from '../../ui/Icons';

type VoiceSettings = Pick<Settings, 'accent' | 'speechRate' | 'cadenceVoice'>;
type Props = { value: VoiceSettings; onChange: (patch: Partial<Settings>) => void };

/** Les 4 voix Cadence (américaines et britanniques), identiques sur tous les téléphones. */
export function VoicePicker({ value, onChange }: Props) {
  const voices = CADENCE_VOICES[value.accent];
  const selectedId = voices[value.cadenceVoice].id;
  const [ready, setReady] = useState(false);
  const [download, setDownload] = useState<{ id: string; done: number; total: number } | null>(null);
  useEffect(() => {
    void audioReady().then(() => setReady(true));
  }, []);
  const rate = Math.min(1.1, value.speechRate / 0.9);
  const listen = (accent: Accent, v: CadenceVoice) => void playClip(VOICE_SAMPLE, accent, v, rate);
  const count = ready ? clipCount(selectedId) : 0;
  const busy = !!download && download.id === selectedId && download.done < download.total;

  return (
    <div className="stack" style={{ gap: 14 }}>
      <div className="stack" style={{ gap: 8 }}>
        <p className="tiny muted">Accent</p>
        <div className="segmented">
          {(Object.keys(ACCENT_LABELS) as Accent[]).map((a) => (
            <button
              key={a}
              className={`option${value.accent === a ? ' selected' : ''}`}
              onClick={() => {
                onChange({ accent: a, accentChosen: true });
                listen(a, value.cadenceVoice);
              }}
            >
              {ACCENT_LABELS[a]}
            </button>
          ))}
        </div>
      </div>

      <div className="stack" style={{ gap: 8 }}>
        <p className="tiny muted">Voix · identiques sur tous les téléphones</p>
        <div className="voice-list">
          {(Object.keys(voices) as CadenceVoice[]).map((v) => {
            const selected = value.cadenceVoice === v;
            return (
              <div key={v} className={`voice${selected ? ' selected' : ''}`}>
                <button className="play" aria-label={`Écouter ${voices[v].name}`} onClick={() => listen(value.accent, v)}>
                  <SpeakerIcon />
                </button>
                <button
                  className="grow"
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0 }}
                  onClick={() => {
                    onChange({ cadenceVoice: v });
                    listen(value.accent, v);
                  }}
                >
                  <b>{voices[v].name}</b>
                  <span className="note" style={{ display: 'block', marginTop: 2 }}>
                    {voices[v].label.toLowerCase()} · anglais {ACCENT_LABELS[value.accent].toLowerCase()}
                  </span>
                </button>
                {selected && <CheckIcon style={{ width: 22, height: 22, color: 'var(--primary)', flex: 'none' }} />}
              </div>
            );
          })}
        </div>
      </div>

      {ready && count > 0 && (
        <button
          className="btn secondary small"
          style={{ width: '100%' }}
          disabled={busy}
          onClick={() => void downloadVoice(selectedId, (done, total) => setDownload({ id: selectedId, done, total }))}
        >
          {download?.id === selectedId
            ? busy
              ? `Téléchargement… ${Math.round((download.done / download.total) * 100)} %`
              : 'Voix disponible hors ligne'
            : `Télécharger ${voices[value.cadenceVoice].name} pour le hors-ligne (~${Math.round((count * 24) / 1024)} Mo)`}
        </button>
      )}
    </div>
  );
}
