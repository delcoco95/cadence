import type { CSSProperties, ReactNode } from 'react';

export type Mood = 'idle' | 'happy' | 'cheer' | 'sad' | 'think' | 'wow';

/** Coco, l'oiseau mélomane de Cadence. Dessin vectoriel, humeurs animées en CSS. */
export function Mascot({ mood = 'idle', size = 96, style }: { mood?: Mood; size?: number; style?: CSSProperties }) {
  const happyEyes = mood === 'happy' || mood === 'cheer';
  const wingsUp = mood === 'cheer' || mood === 'wow';
  return (
    <svg className={`mascot mood-${mood}`} viewBox="0 0 120 120" width={size} height={size} style={style} aria-hidden="true">
      <defs>
        <radialGradient id="coco-body" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="var(--mascot-light)" />
          <stop offset="1" stopColor="var(--mascot)" />
        </radialGradient>
      </defs>
      <g className="mascot-body">
        {/* ombre au sol */}
        <ellipse cx="60" cy="113" rx="28" ry="4" fill="currentColor" opacity=".08" className="mascot-shadow" />
        {/* pattes */}
        <path d="M50 104v6M70 104v6" stroke="var(--beak)" strokeWidth="4" strokeLinecap="round" />
        {/* ailes */}
        <g className="mascot-wing-l" style={{ transformOrigin: '24px 70px' }}>
          <ellipse cx="22" cy={wingsUp ? 52 : 76} rx="9" ry="16" fill="var(--mascot)" transform={`rotate(${wingsUp ? 35 : 15} 22 ${wingsUp ? 52 : 76})`} />
        </g>
        <g className="mascot-wing-r" style={{ transformOrigin: '96px 70px' }}>
          <ellipse cx="98" cy={wingsUp ? 52 : 76} rx="9" ry="16" fill="var(--mascot)" transform={`rotate(${wingsUp ? -35 : -15} 98 ${wingsUp ? 52 : 76})`} />
        </g>
        {/* corps */}
        <ellipse cx="60" cy="68" rx="40" ry="40" fill="url(#coco-body)" />
        <ellipse cx="60" cy="84" rx="25" ry="20" fill="var(--belly)" />
        {/* houppette */}
        <path d="M56 30c-3-8 0-14 6-16-1 5 1 9 4 12-3 0-7 1-10 4z" fill="var(--mascot)" />
        {/* casque */}
        <path d="M24 60a36 36 0 0 1 72 0" fill="none" stroke="var(--phones)" strokeWidth="5" strokeLinecap="round" />
        <rect x="16" y="54" width="12" height="20" rx="6" fill="var(--phones)" />
        <rect x="92" y="54" width="12" height="20" rx="6" fill="var(--phones)" />
        <rect x="19" y="58" width="6" height="12" rx="3" fill="var(--phones-light)" />
        <rect x="95" y="58" width="6" height="12" rx="3" fill="var(--phones-light)" />
        {/* joues */}
        <ellipse cx="38" cy="74" rx="6" ry="4" fill="var(--cheek)" opacity=".7" />
        <ellipse cx="82" cy="74" rx="6" ry="4" fill="var(--cheek)" opacity=".7" />
        {/* yeux */}
        {happyEyes ? (
          <g stroke="var(--eye)" strokeWidth="4.5" strokeLinecap="round" fill="none">
            <path d="M39 60q7-9 14 0" />
            <path d="M67 60q7-9 14 0" />
          </g>
        ) : (
          <g className="mascot-eyes">
            <circle cx="46" cy="58" r={mood === 'wow' ? 13 : 11.5} fill="#fff" />
            <circle cx="74" cy="58" r={mood === 'wow' ? 13 : 11.5} fill="#fff" />
            <Pupils mood={mood} />
          </g>
        )}
        {mood === 'sad' && (
          <g stroke="var(--eye)" strokeWidth="3" strokeLinecap="round">
            <path d="M36 44l12 4M84 44l-12 4" />
          </g>
        )}
        {/* bec */}
        {mood === 'wow' ? (
          <ellipse cx="60" cy="76" rx="6" ry="7" fill="var(--beak-dark)" />
        ) : happyEyes ? (
          <path d="M51 71h18q-2 9-9 9t-9-9z" fill="var(--beak)" />
        ) : (
          <path d="M54 70h12l-6 8z" fill="var(--beak)" />
        )}
        {mood === 'think' && <circle cx="99" cy="30" r="5" fill="var(--mascot-light)" opacity=".7" className="mascot-bubble" />}
      </g>
    </svg>
  );
}

function Pupils({ mood }: { mood: Mood }) {
  const dx = mood === 'think' ? 3 : 0;
  const dy = mood === 'sad' ? 3 : mood === 'think' ? -3 : 1;
  return (
    <g className="mascot-pupils">
      <circle cx={46 + dx} cy={58 + dy} r="6" fill="var(--eye)" />
      <circle cx={74 + dx} cy={58 + dy} r="6" fill="var(--eye)" />
      <circle cx={48 + dx} cy={55 + dy} r="2" fill="#fff" />
      <circle cx={76 + dx} cy={55 + dy} r="2" fill="#fff" />
    </g>
  );
}

/** Coco qui parle : mascotte + bulle. */
export function MascotSays({
  mood = 'happy',
  size = 84,
  children,
  align = 'left',
}: {
  mood?: Mood;
  size?: number;
  children: ReactNode;
  align?: 'left' | 'right';
}) {
  return (
    <div className={`mascot-says ${align}`}>
      <Mascot mood={mood} size={size} />
      <div className="bubble">{children}</div>
    </div>
  );
}
