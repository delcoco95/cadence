import { useEffect, useRef } from 'react';

const COLORS = ['#6C4DF6', '#1FBF75', '#FFB020', '#FF5FA2', '#2FA8FF', '#FF7A1A'];

/** Pluie de confettis plein écran, une seule fois. Rien si l'utilisateur limite les animations. */
export function Confetti({ pieces = 120 }: { pieces?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const parts = Array.from({ length: pieces }, () => ({
      x: w / 2 + (Math.random() - 0.5) * w * 0.3,
      y: h * 0.35,
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 16 - 6,
      size: 6 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      round: Math.random() < 0.3,
    }));

    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.vy += 0.45;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - frame / 160);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.round) {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }
      if (frame < 160) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pieces]);

  return <canvas ref={ref} className="confetti" aria-hidden="true" />;
}
