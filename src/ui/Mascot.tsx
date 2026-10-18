import type { CSSProperties, ReactNode } from 'react';
import { FlagShapes, useLang } from './language';

export type Mood = 'idle' | 'happy' | 'cheer' | 'sad' | 'think' | 'wow';

/**
 * Coco, la bulle de parole de Cadence : elle écoute (casque) et parle (bulle). Dessin vectoriel plat,
 * humeurs animées en CSS ; un petit badge rappelle la langue apprise.
 */
export function Mascot({ mood = 'idle', size = 96, style }: { mood?: Mood; size?: number; style?: CSSProperties }) {
  const lang = useLang();
  const happyEyes = mood === 'happy' || mood === 'cheer';
  return (
    <svg className={`mascot mood-${mood}`} viewBox="0 0 120 120" width={size} height={size} style={style} aria-hidden="true">
      <g className="mascot-body">
        {/* ombre au sol */}
        <ellipse cx="60" cy="114" rx="26" ry="3.5" fill="currentColor" opacity=".08" className="mascot-shadow" />
        {/* bulle de parole, pointe en bas à gauche */}
        <path
          d="M32 26H88A18 18 0 0 1 106 44V74A18 18 0 0 1 88 92H58L36 108L41 92H32A18 18 0 0 1 14 74V44A18 18 0 0 1 32 26Z"
          fill="var(--mascot)"
        />
        {/* reflet discret */}
        <path d="M30 34h22" stroke="var(--mascot-light)" strokeWidth="5" strokeLinecap="round" opacity=".8" />
        {/* casque */}
        <path d="M12 60A48 44 0 0 1 108 60" fill="none" stroke="var(--phones)" strokeWidth="5" strokeLinecap="round" />
        <rect x="5" y="50" width="13" height="22" rx="6.5" fill="var(--phones)" />
        <rect x="102" y="50" width="13" height="22" rx="6.5" fill="var(--phones)" />
        <rect x="8.5" y="55" width="6" height="12" rx="3" fill="var(--phones-light)" />
        <rect x="105.5" y="55" width="6" height="12" rx="3" fill="var(--phones-light)" />
        {/* joues */}
        <ellipse cx="34" cy="70" rx="6" ry="3.8" fill="var(--cheek)" opacity=".75" />
        <ellipse cx="86" cy="70" rx="6" ry="3.8" fill="var(--cheek)" opacity=".75" />
        {/* yeux */}
        {happyEyes ? (
          <g stroke="var(--mascot-ink)" strokeWidth="4.5" strokeLinecap="round" fill="none">
            <path d="M39 58q7-9 14 0" />
            <path d="M67 58q7-9 14 0" />
          </g>
        ) : (
          <g className="mascot-eyes">
            <circle cx="46" cy="56" r={mood === 'wow' ? 12 : 10.5} fill="#fff" />
            <circle cx="74" cy="56" r={mood === 'wow' ? 12 : 10.5} fill="#fff" />
            <Pupils mood={mood} />
          </g>
        )}
        {mood === 'sad' && (
          <g stroke="var(--mascot-ink)" strokeWidth="3" strokeLinecap="round">
            <path d="M36 42l12 4M84 42l-12 4" />
          </g>
        )}
        {/* bouche */}
        {mood === 'wow' ? (
          <ellipse cx="60" cy="75" rx="5.5" ry="6.5" fill="var(--mascot-ink)" />
        ) : mood === 'sad' ? (
          <path d="M52 78q8-6 16 0" fill="none" stroke="var(--mascot-ink)" strokeWidth="4" strokeLinecap="round" />
        ) : happyEyes ? (
          <path d="M50 70h20q-2 10-10 10t-10-10z" fill="var(--mascot-ink)" />
        ) : (
          <path d="M52 72q8 7 16 0" fill="none" stroke="var(--mascot-ink)" strokeWidth="4" strokeLinecap="round" />
        )}
        {/* badge de la langue apprise */}
        <rect x="83" y="78" width="16" height="11.5" rx="2.5" fill="var(--mascot-ink)" opacity=".18" />
        <svg x="84" y="79" width="14" height="9.5" viewBox="0 0 12 8" preserveAspectRatio="none">
          <FlagShapes lang={lang} x={0} y={0} w={12} />
        </svg>
        {/* réflexion : petites bulles */}
        {mood === 'think' && (
          <g className="mascot-bubble" fill="var(--mascot-light)">
            <circle cx="104" cy="22" r="5" />
            <circle cx="113" cy="12" r="3" />
          </g>
        )}
        {/* joie : éclats */}
        {mood === 'cheer' && (
          <g stroke="var(--sun)" strokeWidth="3.5" strokeLinecap="round" className="mascot-bubble">
            <path d="M18 18l5 5M10 34h7M102 18l-5 5M110 34h-7" />
          </g>
        )}
      </g>
    </svg>
  );
}

function Pupils({ mood }: { mood: Mood }) {
  const dx = mood === 'think' ? 3 : 0;
  const dy = mood === 'sad' ? 3 : mood === 'think' ? -3 : 1;
  return (
    <g className="mascot-pupils">
      <circle cx={46 + dx} cy={56 + dy} r="5.5" fill="var(--mascot-ink)" />
      <circle cx={74 + dx} cy={56 + dy} r="5.5" fill="var(--mascot-ink)" />
      <circle cx={48 + dx} cy={53 + dy} r="1.8" fill="#fff" />
      <circle cx={76 + dx} cy={53 + dy} r="1.8" fill="#fff" />
    </g>
  );
}

/** Coco qui parle : mascotte + bulle de texte. */
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
