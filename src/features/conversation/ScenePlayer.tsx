import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { loadScenes, type Scene } from '../../content/scenes';
import { aidLevel, debrief, matchIntent, targetScore, type SceneDebrief, type TurnRecord } from '../../core/scene';
import { useSettings } from '../../db/hooks';
import type { Settings } from '../../db/db';
import { saveSceneRun, sceneStats } from '../../db/scenes';
import { speechLocale } from '../../speech/audio';
import { speak, stopSpeaking } from '../../speech/tts';
import { isBlockingError, startListening, sttSupported, type Listening } from '../../speech/stt';
import { useActiveTime } from '../lesson/useActiveTime';
import { ProgressBar } from '../../ui/ProgressBar';
import { CloseIcon, MicIcon, SpeakerIcon, StopIcon, TurtleIcon } from '../../ui/Icons';
import { sfx } from '../../ui/sfx';

type Phase = 'brief' | 'talk' | 'done';

interface Msg {
  who: 'npc' | 'me';
  text: string;
  fr?: string;
  /** Réplique non comprise (affichée en sourdine) */
  missed?: boolean;
}

/** Une conversation guidée : réplique du personnage → réponse libre → réaction, jusqu'à l'objectif. */
export function ScenePlayer() {
  const { sceneId = '' } = useParams();
  const settings = useSettings();
  const lang = settings?.language ?? 'en';
  const [scene, setScene] = useState<Scene | null | undefined>(undefined);
  const stats = useLiveQuery(() => sceneStats());

  useEffect(() => {
    let alive = true;
    void loadScenes(lang).then((list) => alive && setScene(list.find((s) => s.id === sceneId) ?? null));
    return () => {
      alive = false;
    };
  }, [lang, sceneId]);

  if (scene === undefined || !settings || !stats) return <div className="screen full"><p className="muted">Chargement…</p></div>;
  if (scene === null)
    return (
      <div className="screen full">
        <p>Scène introuvable.</p>
        <Link className="btn secondary" to="/talk">Retour</Link>
      </div>
    );
  return <Replayable scene={scene} settings={settings} completedRuns={stats.get(scene.id)?.completed ?? 0} />;
}

/** « Rejouer » remonte la partie (nouvelle clé) sans recharger l'app. */
function Replayable({ scene, settings, completedRuns }: { scene: Scene; settings: Settings; completedRuns: number }) {
  const [run, setRun] = useState(0);
  // Les aides sont figées au début de chaque partie (sinon elles changeraient pendant le bilan).
  const [completedAtStart, setCompletedAtStart] = useState(completedRuns);
  return (
    <SceneRun
      key={`${scene.id}-${run}`}
      scene={scene}
      settings={settings}
      completedRuns={completedAtStart}
      onReplay={() => {
        setCompletedAtStart(completedRuns);
        setRun((r) => r + 1);
      }}
    />
  );
}

function SceneRun({ scene, settings, completedRuns, onReplay }: { scene: Scene; settings: Settings; completedRuns: number; onReplay: () => void }) {
  const navigate = useNavigate();
  // Réglages reçus du parent (déjà chargés) : une requête réactive locale démarrerait vide.
  const ping = useActiveTime();
  const accent = speechLocale(settings.language, settings.accent);
  const aids = aidLevel(completedRuns);

  const [phase, setPhase] = useState<Phase>('brief');
  const [turnId, setTurnId] = useState(scene.start);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState(0);
  const [records, setRecords] = useState<TurnRecord[]>([]);
  const [result, setResult] = useState<SceneDebrief | null>(null);
  const [showText, setShowText] = useState(aids.showSubtitle);
  // Mode de réponse gardé pour toute la conversation (sinon il faudrait rechoisir « écrire » à chaque réplique).
  const [mode, setMode] = useState<'voice' | 'text'>(sttSupported() ? 'voice' : 'text');
  const startedAt = useRef(Date.now());
  const chatEnd = useRef<HTMLDivElement>(null);

  const say = useCallback(
    (text: string, slow = false) => {
      ping();
      speak(text, accent, { rate: slow ? 0.6 : settings.speechRate, voice: { gender: scene.character.voice } });
    },
    [accent, ping, scene.character.voice, settings.speechRate],
  );

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [msgs, hint]);
  useEffect(() => () => stopSpeaking(), []);

  const turn = scene.turns[turnId];
  const turnCount = Object.keys(scene.turns).length;

  function npcSays(text: string, fr?: string) {
    setMsgs((m) => [...m, { who: 'npc', text, fr }]);
    say(text);
  }

  function begin() {
    setPhase('talk');
    startedAt.current = Date.now();
    npcSays(turn.npc, turn.npcFr);
  }

  async function finish(all: TurnRecord[], goalReached: boolean) {
    const d = debrief(all, goalReached);
    setResult(d);
    setPhase('done');
    sfx.complete();
    await saveSceneRun(scene, all, d, Date.now() - startedAt.current);
  }

  /** Réponse de l'apprenant (voix transcrite, texte tapé, ou modèle lu). */
  function answer(utterance: string, usedModel = false) {
    const said = utterance.trim();
    if (!said) return;
    ping();
    const m = matchIntent(turn, said);
    const tries = attempts + 1;
    if (!m.intent) {
      setMsgs((x) => [...x, { who: 'me', text: said, missed: true }]);
      setAttempts(tries);
      // Le personnage fait répéter, comme une vraie personne ; les aides arrivent d'elles-mêmes si on bloque.
      setHint((h) => Math.max(h, Math.min(3, tries - 1)));
      sfx.typo();
      npcSays(turn.fallback);
      return;
    }
    sfx.correct();
    setMsgs((x) => [...x, { who: 'me', text: said }]);
    const record: TurnRecord = {
      turnId,
      said,
      understood: true,
      attempts: tries,
      hints: hint,
      usedModel,
      precision: targetScore(turn, said),
    };
    const all = [...records, record];
    setRecords(all);
    setAttempts(0);
    setHint(0);
    const next = m.intent.next;
    const reaction = m.intent.react ? `${m.intent.react} ` : '';
    if (next === 'end') {
      npcSays(`${reaction}${scene.closing}`);
      window.setTimeout(() => void finish(all, true), 2200);
      return;
    }
    setTurnId(next);
    const nt = scene.turns[next];
    npcSays(`${reaction}${nt.npc}`, nt.npcFr);
  }

  function giveUp() {
    // Abandon : le bilan montre ce qui a été réussi, sans masquer l'échec.
    const all = [...records, { turnId, said: '', understood: false, attempts, hints: hint, usedModel: false, precision: 0 }];
    void finish(all, false);
  }

  if (phase === 'done' && result) return <Debrief scene={scene} records={records} result={result} say={say} onReplay={onReplay} />;

  if (phase === 'brief')
    return (
      <div className="screen full">
        <div className="lesson-top">
          <button className="icon-btn" aria-label="Fermer" onClick={() => navigate('/talk')}><CloseIcon /></button>
        </div>
        <div className="card stack pop" style={{ gap: 10 }}>
          <p className="tiny muted">Scène · {scene.cefr}</p>
          <h1>{scene.title}</h1>
          <p>{scene.situation}</p>
          <div className="talk-goal"><b>Ton objectif :</b> {scene.goal}</div>
          <p className="small muted">
            Tu parles avec <b>{scene.character.name}</b> ({scene.character.role}). {turnCount} échanges environ.
          </p>
        </div>
        <section className="card stack" style={{ gap: 8 }}>
          <h3>Expressions utiles</h3>
          {scene.phrases.map((p) => (
            <button key={p.text} className="phrase-row" onClick={() => say(p.text)}>
              <SpeakerIcon />
              <span className="grow">
                <b>{p.text}</b>
                <br />
                <span className="small muted">{p.fr}</span>
              </span>
            </button>
          ))}
          {completedRuns >= 2 && <p className="note">Tu connais cette scène : cette fois, sans sous-titres ni traduction. Tu peux toujours les afficher.</p>}
        </section>
        <div className="bottom-action">
          <button className="btn" onClick={begin}>Commencer la conversation</button>
        </div>
      </div>
    );

  return (
    <div className="screen full talk-screen">
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Quitter" onClick={() => navigate('/talk')}><CloseIcon /></button>
        <ProgressBar value={records.length / turnCount} tone="primary" label="Avancement de la conversation" />
      </div>

      <div className="talk-log" aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={`talk-msg ${m.who}${m.missed ? ' missed' : ''}`}>
            {m.who === 'npc' ? (
              <>
                <span className="talk-name">{scene.character.name}</span>
                <div className="talk-bubble">
                  {showText ? <p>{m.text}</p> : <p className="muted small">Réplique audio</p>}
                  {aids.showTranslation && m.fr && showText && <p className="small muted">{m.fr}</p>}
                  <div className="row" style={{ gap: 6, marginTop: 6 }}>
                    <button className="icon-btn small" aria-label="Réécouter" onClick={() => say(m.text)}><SpeakerIcon /></button>
                    <button className="icon-btn small" aria-label="Réécouter lentement" onClick={() => say(m.text, true)}><TurtleIcon /></button>
                    {!aids.showSubtitle && (
                      <button className="btn ghost small" onClick={() => setShowText((v) => !v)}>{showText ? 'Masquer le texte' : 'Afficher le texte'}</button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="talk-bubble">
                <p>{m.text}</p>
                {m.missed && <p className="small">Pas compris : reformule, ou demande un coup de pouce.</p>}
              </div>
            )}
          </div>
        ))}
        <div ref={chatEnd} />
      </div>

      <TurnInput
        key={turnId + attempts}
        task={turn.taskFr}
        hints={turn.hints}
        hint={hint}
        lang={accent}
        mode={mode}
        setMode={setMode}
        onHint={() => setHint((h) => Math.min(3, h + 1))}
        onAnswer={answer}
        onSayModel={() => say(turn.hints[2])}
        onUseModel={() => answer(turn.hints[2], true)}
        onGiveUp={giveUp}
        canGiveUp={attempts >= 3}
      />
    </div>
  );
}

function TurnInput(p: {
  task: string;
  hints: [string, string, string];
  hint: number;
  lang: string;
  mode: 'voice' | 'text';
  setMode: (m: 'voice' | 'text') => void;
  onHint: () => void;
  onAnswer: (t: string) => void;
  onSayModel: () => void;
  onUseModel: () => void;
  onGiveUp: () => void;
  canGiveUp: boolean;
}) {
  const { mode, setMode } = p;
  const [listening, setListening] = useState(false);
  const [live, setLive] = useState('');
  const [typed, setTyped] = useState('');
  const [error, setError] = useState<string | null>(null);
  const rec = useRef<Listening | null>(null);

  useEffect(() => () => rec.current?.abort(), []);

  function start() {
    setError(null);
    setLive('');
    stopSpeaking();
    const l = startListening(p.lang, {
      onText: setLive,
      onEnd: (t) => {
        rec.current = null;
        setListening(false);
        if (t.trim()) p.onAnswer(t);
      },
      onError: (code) => {
        setListening(false);
        if (isBlockingError(code)) {
          setMode('text');
          setError('Micro indisponible ici : réponds par écrit (ou avec la dictée du clavier).');
        } else if (code === 'no-speech') setError('Je n’ai rien entendu. Réessaie.');
      },
    });
    if (l) {
      rec.current = l;
      setListening(true);
    } else setMode('text');
  }

  return (
    <div className="talk-input">
      <p className="talk-task"><b>À toi :</b> {p.task}</p>
      {p.hint > 0 && (
        <div className="talk-hint">
          {p.hint >= 1 && <p className="small"><b>Mot-clé :</b> {p.hints[0]}</p>}
          {p.hint >= 2 && <p className="small"><b>Début :</b> {p.hints[1]}</p>}
          {p.hint >= 3 && (
            <div className="row" style={{ gap: 6, flexWrap: 'wrap' }}>
              <p className="small grow"><b>Exemple :</b> {p.hints[2]}</p>
              <button className="icon-btn small" aria-label="Écouter l’exemple" onClick={p.onSayModel}><SpeakerIcon /></button>
              <button className="btn ghost small" onClick={p.onUseModel}>Je le dis</button>
            </div>
          )}
        </div>
      )}

      {mode === 'voice' ? (
        <div className="row" style={{ justifyContent: 'center', gap: 14 }}>
          <button
            className={`mic-btn${listening ? ' on' : ''}`}
            aria-label={listening ? 'Arrêter' : 'Parler'}
            onClick={() => (listening ? rec.current?.stop() : start())}
          >
            {listening ? <StopIcon /> : <MicIcon />}
          </button>
        </div>
      ) : (
        <form
          className="row"
          style={{ gap: 8 }}
          onSubmit={(e) => {
            e.preventDefault();
            p.onAnswer(typed);
            setTyped('');
          }}
        >
          <input className="field grow" value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="Ta réponse…" autoCapitalize="sentences" />
          <button className="btn small" style={{ width: 'auto' }} disabled={!typed.trim()}>Envoyer</button>
        </form>
      )}
      {listening && <p className="small muted center">{live || 'Je t’écoute… touche le bouton quand tu as fini.'}</p>}
      {error && <p className="small center" style={{ color: 'var(--danger)' }}>{error}</p>}

      <div className="row spread" style={{ gap: 6 }}>
        {p.hint < 3 ? <button className="btn ghost small" onClick={p.onHint}>Coup de pouce</button> : <span />}
        {sttSupported() && (
          <button className="btn ghost small" onClick={() => setMode(mode === 'voice' ? 'text' : 'voice')}>
            {mode === 'voice' ? 'Écrire plutôt' : 'Parler plutôt'}
          </button>
        )}
        {p.canGiveUp && <button className="btn ghost small" onClick={p.onGiveUp}>Terminer ici</button>}
      </div>
    </div>
  );
}

function Debrief({ scene, records, result, say, onReplay }: {
  scene: Scene; records: TurnRecord[]; result: SceneDebrief; say: (t: string) => void; onReplay: () => void;
}) {
  const pct = (v: number) => `${Math.round(v * 100)} %`;
  return (
    <div className="screen full">
      <div className="card stack pop" style={{ gap: 10 }}>
        <p className="tiny muted">{scene.title}</p>
        <h1>{result.goalReached ? 'Objectif atteint !' : 'Conversation interrompue'}</h1>
        <p className="small muted">{result.goalReached ? 'Voici ton bilan, réplique par réplique.' : 'Pas grave : rejoue la scène, les aides restent là tant qu’il le faut.'}</p>
      </div>
      <section className="card stack" style={{ gap: 10 }}>
        {[
          ['Compréhension', 'compris du premier coup', result.comprehension],
          ['Précision', 'formes travaillées employées', result.precision],
          ['Autonomie', 'sans coup de pouce', result.autonomy],
        ].map(([label, sub, v]) => (
          <div key={label as string} className="stack" style={{ gap: 4 }}>
            <div className="row spread small"><span><b>{label}</b> · <span className="muted">{sub}</span></span><span>{pct(v as number)}</span></div>
            <ProgressBar value={v as number} tone="primary" thin />
          </div>
        ))}
      </section>
      <section className="card stack" style={{ gap: 12 }}>
        <h3>Tes répliques</h3>
        {records.filter((r) => r.understood).map((r) => {
          const t = scene.turns[r.turnId];
          return (
            <div key={r.turnId} className="stack" style={{ gap: 4 }}>
              <p className="small muted">{t.taskFr}</p>
              <p className="small"><span className="muted">Tu as dit : </span>« {r.said} »{r.usedModel ? ' (exemple lu)' : ''}</p>
              <div className="row" style={{ gap: 6 }}>
                <p className="small grow"><span className="muted">Autre façon de le dire : </span><b>{t.model}</b></p>
                <button className="icon-btn small" aria-label="Écouter" onClick={() => say(t.model)}><SpeakerIcon /></button>
              </div>
            </div>
          );
        })}
      </section>
      <p className="note">Ces répliques comptent comme de la production libre pour les notions de la scène (onglet Mes notions).</p>
      <div className="bottom-action stack" style={{ gap: 6 }}>
        <button className="btn" onClick={onReplay}>Rejouer la scène</button>
        <Link className="btn secondary" to="/talk">Autres scènes</Link>
      </div>
    </div>
  );
}
