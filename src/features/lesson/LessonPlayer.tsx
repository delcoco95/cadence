import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getLesson } from '../../content';
import type { ExplanationSection } from '../../content/types';
import type { SessionItem } from '../../core/session';
import { completeLesson } from '../../db/progress';
import { lessonRecap, scheduleLessonKcs } from '../../db/learning';
import { useSettings } from '../../db/hooks';
import { speak } from '../../speech/tts';
import { genderizeDeep } from '../../core/gender';
import { CloseIcon, MicIcon, SparkleIcon, SpeakerIcon } from '../../ui/Icons';
import { MascotSays } from '../../ui/Mascot';
import { useProfileText } from '../../ui/profile';
import { unitOfLesson, unitStyle } from '../../ui/units';
import { ExerciseRunner, type RunSummary } from './ExerciseRunner';
import { GoalBanner } from './GoalBanner';
import { useActiveTime } from './useActiveTime';
import { SessionSummary } from './SessionSummary';

export function LessonPlayer() {
  const { lessonId = '' } = useParams();
  const lesson = getLesson(lessonId);
  const navigate = useNavigate();
  const settings = useSettings();
  const profile = useProfileText();
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
    return <SessionSummary title={lesson.title} summary={summary} />;
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
    speak(t, settings?.accent ?? 'en-GB', {
      rate: settings?.speechRate ?? 0.9,
      voice: { name: settings?.voiceName, gender: settings?.voiceGender ?? 'any' },
    });
  };
  const speakCount = lesson.exercises.filter((e) => e.type === 'speak').length;
  const unit = unitOfLesson(lesson.id);
  const explanation = genderizeDeep(lesson.explanation, profile.gender);

  return (
    <div className="screen full" style={unit ? unitStyle(unit.id) : undefined}>
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Quitter" onClick={() => navigate('/')}><CloseIcon /></button>
      </div>
      <section className="cta-card" style={{ gap: 8 }}>
        <p className="tiny">{unit ? `${unit.title} · ` : ''}{lesson.cefr} · {lesson.estMinutes} min</p>
        <h1 style={{ fontSize: 28 }}>{lesson.title}</h1>
        <p>{lesson.subtitle}</p>
        <div className="row" style={{ gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
          <span className="chip" style={{ background: 'rgb(255 255 255 / .22)', color: '#fff' }}><SparkleIcon />{items.length} exercices</span>
          {speakCount > 0 && settings?.speakingEnabled !== false && (
            <span className="chip" style={{ background: 'rgb(255 255 255 / .22)', color: '#fff' }}><MicIcon />{speakCount} à l’oral</span>
          )}
        </div>
      </section>
      <MascotSays mood="think" size={70}>
        {profile.t('Lis l’essentiel, écoute les exemples, puis on pratique ensemble. Pas besoin de tout retenir : les exercices sont là pour ça !')}
      </MascotSays>
      {explanation.map((s, i) => (
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
        <div key={i} className="example row" style={{ alignItems: 'center' }}>
          <div className="grow">
            <p>{ex.en}</p>
            <p className="small muted">{ex.fr}</p>
          </div>
          <button className="icon-btn boxed" aria-label="Écouter" onClick={() => onSpeak(ex.en)}><SpeakerIcon /></button>
        </div>
      ))}
      {section.tip && <p className="tip"><SparkleIcon />{section.tip}</p>}
    </section>
  );
}
