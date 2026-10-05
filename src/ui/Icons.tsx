import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

/* ───────── Navigation (trait) ───────── */
export const HomeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} {...p}><path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z" /></svg>
);
export const PathIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} {...p}><circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="12" r="2.2" /><circle cx="6" cy="18" r="2.2" /><path d="M8.2 6H14a4 4 0 0 1 0 8H10a2 2 0 0 0 0 4" /></svg>
);
export const DumbbellIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} {...p}><path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" /></svg>
);
export const ProfileIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} {...p}><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" /></svg>
);
export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth={2.6} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const BackIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth={2.6} {...p}><path d="M15 5l-7 7 7 7" /></svg>
);
export const ChevronIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth={2.6} {...p}><path d="M9 5l7 7-7 7" /></svg>
);
export const SpeakerIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M3.5 9.2c0-.6.5-1 1-1h3L12 4.6c.6-.5 1.5 0 1.5.8v13.2c0 .8-.9 1.3-1.5.8l-4.5-3.6h-3c-.5 0-1-.4-1-1z" />
    <path {...line} strokeWidth={2.2} d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11" />
  </svg>
);
export const TurtleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M4 15c0-4 3.6-7 8-7s8 3 8 7z" />
    <path fill="currentColor" opacity=".55" d="M20 13.5c1.4 0 2.5-.8 2.5-1.9S21.4 9.8 20 10.4z" />
    <path {...line} strokeWidth={2.2} d="M6 15v2.5M10 15v2.5M14 15v2.5M18 15v2.5" />
  </svg>
);
export const MicIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect x="8.5" y="3" width="7" height="12" rx="3.5" fill="currentColor" />
    <path {...line} strokeWidth={2.2} d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
  </svg>
);
export const StopIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}><rect x="6" y="6" width="12" height="12" rx="3" fill="currentColor" /></svg>
);
export const CheckIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth={3.2} {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const GearIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

/* ───────── Illustrations (pleines, colorées par CSS) ───────── */
export const FlameIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M12 2.5c.6 3-1 4.6-2.6 6.3C7.7 10.6 6 12.4 6 15.2 6 18.9 8.7 21.5 12 21.5s6-2.6 6-6.3c0-3.6-2.3-5.4-3.4-8.2-.4 1.6-1.1 2.6-2.1 3.2.4-2.8-.2-5.6-.5-7.7z" />
    <path fill="#fff" opacity=".55" d="M12 21.5c-1.9 0-3.3-1.4-3.3-3.3 0-2.2 2-3.3 2.6-5.2 1 1.4 1.4 2.3 1.6 3.4.6-.4 1.1-1 1.4-1.8.6 1 1 2.1 1 3.6 0 1.9-1.4 3.3-3.3 3.3z" />
  </svg>
);
export const BoltIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M13.6 2.2 4.8 13.1c-.4.5 0 1.2.6 1.2h5.2l-1.3 7.2c-.1.7.8 1.1 1.3.5l8.8-10.9c.4-.5 0-1.2-.6-1.2h-5.2l1.3-7.2c.1-.7-.8-1.1-1.3-.5z" /></svg>
);
export const TargetIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <circle cx="12" cy="12" r="9.5" fill="currentColor" />
    <circle cx="12" cy="12" r="6.5" fill="#fff" />
    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
  </svg>
);
export const TrophyIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M7 3h10v5.5a5 5 0 0 1-10 0z" />
    <path {...line} strokeWidth={2} d="M7 5H4.5v1.5A3.5 3.5 0 0 0 8 10M17 5h2.5v1.5A3.5 3.5 0 0 1 16 10" />
    <path fill="currentColor" d="M10.5 13h3v3.5h-3zM8 17.5h8a1 1 0 0 1 1 1V21H7v-2.5a1 1 0 0 1 1-1z" />
  </svg>
);
export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M12 2.8l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.7l-5.4 2.9 1.1-6.1-4.5-4.3 6.1-.8z" /></svg>
);
export const CrownIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M3 7.5l4.5 4L12 4.5l4.5 7 4.5-4-1.8 11H4.8zM5 19.5h14V21H5z" /></svg>
);
export const LockIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path {...line} strokeWidth={2.4} d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <rect x="5" y="10" width="14" height="11" rx="3" fill="currentColor" />
  </svg>
);
export const UnlockIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path {...line} strokeWidth={2.4} d="M8 10.5V8a4 4 0 0 1 7.6-1.7" />
    <rect x="5" y="10" width="14" height="11" rx="3" fill="currentColor" />
  </svg>
);
export const BookIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M3 5.5C5.8 4.4 8.8 4.5 11.2 6v14c-2.4-1.5-5.4-1.6-8.2-.5z" />
    <path fill="currentColor" opacity=".6" d="M21 5.5c-2.8-1.1-5.8-1-8.2.5v14c2.4-1.5 5.4-1.6 8.2-.5z" />
  </svg>
);
export const HeadphonesIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path {...line} strokeWidth={2.4} d="M4 15v-3a8 8 0 0 1 16 0v3" />
    <rect x="3" y="13" width="5" height="8" rx="2.2" fill="currentColor" />
    <rect x="16" y="13" width="5" height="8" rx="2.2" fill="currentColor" />
  </svg>
);
export const ClockIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <circle cx="12" cy="12" r="9.5" fill="currentColor" />
    <path stroke="#fff" strokeWidth={2.4} strokeLinecap="round" fill="none" d="M12 7v5.2l3.2 2" />
  </svg>
);
export const RefreshIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth={2.6} {...p}><path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4" /></svg>
);
export const SparkleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M12 2c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7z" />
    <path fill="currentColor" opacity=".6" d="M19 15c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3z" />
  </svg>
);
export const BrainIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M9 3.5a3 3 0 0 0-3 2.6A3.2 3.2 0 0 0 3.5 9.3c0 .9.3 1.6.8 2.2a3.3 3.3 0 0 0 1.2 5.3A3 3 0 0 0 9 20.5c1 0 1.9-.5 2.4-1.2V4.8A3 3 0 0 0 9 3.5z" />
    <path fill="currentColor" opacity=".6" d="M15 3.5a3 3 0 0 1 3 2.6 3.2 3.2 0 0 1 2.5 3.2c0 .9-.3 1.6-.8 2.2a3.3 3.3 0 0 1-1.2 5.3 3 3 0 0 1-3.5 3.7c-1 0-1.9-.5-2.4-1.2V4.8A3 3 0 0 1 15 3.5z" />
  </svg>
);
export const ChartIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect x="3.5" y="12" width="4.5" height="8.5" rx="1.5" fill="currentColor" opacity=".55" />
    <rect x="9.75" y="7.5" width="4.5" height="13" rx="1.5" fill="currentColor" opacity=".8" />
    <rect x="16" y="3.5" width="4.5" height="17" rx="1.5" fill="currentColor" />
  </svg>
);
export const LetterIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect x="2.5" y="4" width="19" height="16" rx="4" fill="currentColor" />
    <text x="12" y="16.3" textAnchor="middle" fontSize="11" fontWeight="900" fill="#fff" fontFamily="inherit">Aa</text>
  </svg>
);
export const PlaneIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M21 15.5v-2l-8-5V3.8a1.5 1.5 0 0 0-3 0v4.7l-8 5v2l8-2.5v5.2l-2.2 1.6V21l3.7-1 3.7 1v-1.2L13 18.2V13z" /></svg>
);
export const BriefcaseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path {...line} strokeWidth={2.2} d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <rect x="3" y="7" width="18" height="13" rx="3" fill="currentColor" />
  </svg>
);
export const CapIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M12 4 1.5 9 12 14l10.5-5z" />
    <path fill="currentColor" opacity=".65" d="M6 11.5v4.2c0 1.3 2.7 2.8 6 2.8s6-1.5 6-2.8v-4.2L12 14.4z" />
  </svg>
);
export const FilmIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="currentColor" />
    <path fill="#fff" d="M10 9.3v5.4c0 .4.4.6.7.4l4.2-2.7a.5.5 0 0 0 0-.8l-4.2-2.7c-.3-.2-.7 0-.7.4z" />
  </svg>
);
export const ChatIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M4 4.5h11a2.5 2.5 0 0 1 2.5 2.5v5.5A2.5 2.5 0 0 1 15 15H9l-4 3.5V15H4a2.5 2.5 0 0 1-2.5-2.5V7A2.5 2.5 0 0 1 4 4.5z" />
    <path fill="currentColor" opacity=".55" d="M19 8.5h1a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-.5V21l-3.5-2.5H12a2.5 2.5 0 0 1-2.2-1.3H15a4 4 0 0 0 4-4z" />
  </svg>
);
export const CalendarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect x="3" y="5" width="18" height="16" rx="3.5" fill="currentColor" />
    <rect x="3" y="5" width="18" height="5" rx="2" fill="currentColor" opacity=".6" />
    <path stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" d="M8 3v4M16 3v4" />
  </svg>
);
export const ShieldIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6z" /></svg>
);
export const SunIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    <path stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
  </svg>
);
export const MoonIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" /></svg>
);
export const NoteIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M9 18.5a3 3 0 1 1-2-2.8V5.6c0-.6.4-1.1 1-1.2l10-2c.8-.1 1.5.5 1.5 1.2v12a3 3 0 1 1-2-2.8V7.3L9 8.9z" />
  </svg>
);
