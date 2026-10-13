import { createContext, useContext } from 'react';
import type { Lang } from '../content/types';

/** Langue affichée par les écrans (maillot de Coco, drapeaux) : celle du cours actif, ou celle choisie à l'inscription. */
export const LangContext = createContext<Lang>('en');
export const useLang = () => useContext(LangContext);

/** Maillot de Coco : couleurs du pays de la langue apprise (aucun logo de fédération). */
export const JERSEYS: Record<Lang, { shirt: string; collar: string }> = {
  en: { shirt: '#f7f7fa', collar: '#1d2b5a' },
  it: { shirt: '#1f6fd1', collar: '#ffffff' },
  es: { shirt: '#c8102e', collar: '#ffc400' },
};

/** Drapeau d'une langue : Angleterre (croix de saint Georges), Italie, Espagne. Dessiné dans un rectangle 3 × 2. */
export function FlagShapes({ lang, x, y, w }: { lang: Lang; x: number; y: number; w: number }) {
  const h = (w * 2) / 3;
  if (lang === 'it')
    return (
      <g>
        <rect x={x} y={y} width={w / 3} height={h} fill="#009246" />
        <rect x={x + w / 3} y={y} width={w / 3} height={h} fill="#ffffff" />
        <rect x={x + (2 * w) / 3} y={y} width={w / 3} height={h} fill="#ce2b37" />
      </g>
    );
  if (lang === 'es')
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill="#aa151b" />
        <rect x={x} y={y + h / 4} width={w} height={h / 2} fill="#f1bf00" />
      </g>
    );
  const bar = h / 5;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#ffffff" />
      <rect x={x} y={y + (h - bar) / 2} width={w} height={bar} fill="#ce1124" />
      <rect x={x + (w - bar) / 2} y={y} width={bar} height={h} fill="#ce1124" />
    </g>
  );
}

/** Petit drapeau arrondi (sélecteur de langue). */
export function Flag({ lang, size = 28 }: { lang: Lang; size?: number }) {
  return (
    <svg viewBox="0 0 30 20" width={size} height={(size * 2) / 3} aria-hidden="true" style={{ borderRadius: 4, flex: 'none', boxShadow: '0 0 0 1px rgb(0 0 0 / .12)' }}>
      <FlagShapes lang={lang} x={0} y={0} w={30} />
    </svg>
  );
}
