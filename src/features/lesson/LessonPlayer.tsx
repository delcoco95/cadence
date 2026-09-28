import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getLesson } from '../../content';
import type { ExplanationSection } from '../../content/types';
import type { SessionItem } from '../../core/session';
import { completeLesson } from '../../db/progress';
import { lessonRecap, scheduleLessonKcs } from '../../db/learning';
import { useSettings } from '../../db/hooks';
import { speak } from '../../speech/tts';
import { SpeakerIcon } from '../../ui/Icons';
import { ExerciseRunner, type RunSummary } from './ExerciseRunner';
import { GoalBanner } from './GoalBanner';
import { useActiveTime } from './useActiveTime';
import { SessionSummary } from './SessionSummary';

export function LessonPlayer() {
  const { lessonId = '' } = useParams();
  const lesson = getLesson(lessonId);
  const navigate = useNavigate();
  const settings = useSettings();
  const [goalBanner, setGoalBanner] = useState(false);
  const ping = useActiveTime(() => setGoalBanner(true));
  const [phase, setPhase] = useState<'intro' | 'exercise' | 'done'>('intro');
  const [summary, setSummary] = useState<RunSummary | null>(null);

  const lessonItems = useMemo<SessionItem[]>(
    () =>
      (lesson?.exercises ?? [])
        .filter((e) => settings?.speakingEnabled !== false || e.type !== 'speak')
        .map((exercise) => ({ kind: 'exercise', exercise, source: 'lesson' })),
    [lesson, settings?.speakingEnabled],
  );
  // Fin de leçon : quelques notions vues avant, sans aide (pratique mélangée + récupération espacée).
  const [recap, setRecap] = useState<SessionItem[]>([]);
  useEffect(() => {
    if (lesson) void lessonRecap(lesson).then(setRecap);
  }, [lesson]);
  const items = useMemo(() => [...lessonItems, ...recap], [lessonItems, recap]);

  if (!lesson) {
    return (
      <div className="screen full">
        <p>Leçon introuvable.</p>
        <Link className="btn secondary" to="/">Retour</Link>
      </div>
    );
  }

  async function onFinish(s: RunSummary) {
    // Le score de la leçon ne porte que sur ses propres exercices (pas sur le récap).
    const own = lesson!.exercises.map((e) => s.firstTry.get(e.id)).filter((v): v is number => v !== undefined);
    const score = own.length ? own.reduce((a, b) => a + b, 0) / own.length : s.score;
    await scheduleLessonKcs(lesson!, s.firstTry);
    await completeLesson(lesson!.id, score, s.xp);
    setSummary({ ...s, score });
    setPhase('done');
  }

  if (phase === 'done' && summary) {
    return <SessionSummary title={lesson.title} score={summary.score} xp={summary.xp} />;
  }

  if (phase === 'exercise') {
    return (
      <ExerciseRunner
        items={items}
        context="lesson"
        lessonId={lesson.id}
        onExit={() => navigate('/')}
        onFinish={(s) => void onFinish(s)}
        onActivity={ping}
        banner={goalBanner && <GoalBanner onClose={() => setGoalBanner(false)} />}
      />
    );
  }

  const say = (t: string) => {
    ping();
    speak(t, settings?.accent ?? 'en-GB', settings?.speechRate ?? 0.9);
  };
  const speakCount = lesson.exercises.filter((e) => e.type === 'speak').length;

  return (
    <div className="screen full">
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Quitter" onClick={() => navigate('/')}>✕</button>
      </div>
      <div className="stack" style={{ '--gap': '4px' } as CSSProperties}>
        <span className="chip accent" style={{ alignSelf: 'flex-start' }}>{lesson.cefr} · {lesson.estMinutes} min</span>
        <h1 style={{ marginTop: 8 }}>{lesson.title}</h1>
        <p className="muted">{lesson.subtitle}</p>
        <p className="small muted" style={{ marginTop: 6 }}>
          {items.length} exercices{speakCount && settings?.speakingEnabled !== false ? ` dont ${speakCount} à l’oral 🎙️` : ''}
        </p>
      </div>
      {lesson.explanation.map((s, i) => (
        <ExplanationCard key={i} section={s} onSpeak={say} />
      ))}
      <div className="bottom-action">
        <button className="btn" onClick={() => setPhase('exercise')}>Commencer les exercices</button>
      </div>
    </div>
  );
}

function ExplanationCard({ section, onSpeak }: { section: ExplanationSection; onSpeak: (t: string) => void }) {
  return (
    <section className="card stack explain">
      <h3>{section.title}</h3>
      {section.body && <p>{section.body}</p>}
      {section.table && (
        <table>
          <tbody>
            {section.table.map((row, i) => (
              <tr key={i}>{row.map((c, j) => <td key={j}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
      {section.examples?.map((ex, i) => (
        <div key={i} className="example row" style={{ alignItems: 'flex-start' }}>
          <div className="grow">
            <p>{ex.en}</p>
            <p className="small muted">{ex.fr}</p>
          </div>
          <button className="icon-btn" aria-label="Écouter" onClick={() => onSpeak(ex.en)}><SpeakerIcon /></button>
        </div>
      ))}
      {section.tip && <p className="tip">💡 {section.tip}</p>}
    </section>
  );
}
