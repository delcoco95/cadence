const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export const HomeIcon = () => (
  <svg viewBox="0 0 24 24" {...s}><path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z" /></svg>
);
export const PathIcon = () => (
  <svg viewBox="0 0 24 24" {...s}><circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="12" r="2.2" /><circle cx="6" cy="18" r="2.2" /><path d="M8.2 6H14a4 4 0 0 1 0 8H10a2 2 0 0 0 0 4" /></svg>
);
export const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" /></svg>
);
export const CloseIcon = () => (
  <svg viewBox="0 0 24 24" {...s}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const SpeakerIcon = () => (
  <svg viewBox="0 0 24 24" {...s}><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" /></svg>
);
export const BackIcon = () => (
  <svg viewBox="0 0 24 24" {...s}><path d="M15 5l-7 7 7 7" /></svg>
);
