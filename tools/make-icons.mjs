// Génère les icônes PNG de la PWA sans dépendance (encodeur PNG minimal + zlib).
// Motif : carré sombre, arc "C" clair (cadence) et point ambre (la série).
import { writeFileSync, mkdirSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const BG = [14, 16, 20];
const FG = [236, 238, 242];
const ACCENT = [245, 166, 35];

function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}

function png(size, pixel) {
  const raw = Buffer.alloc((size * 3 + 1) * size);
  const SS = 4; // suréchantillonnage pour l'anticrénelage
  for (let y = 0; y < size; y++) {
    raw[y * (size * 3 + 1)] = 0;
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0;
      for (let sy = 0; sy < SS; sy++)
        for (let sx = 0; sx < SS; sx++) {
          const c = pixel((x + (sx + 0.5) / SS) / size, (y + (sy + 0.5) / SS) / size);
          r += c[0]; g += c[1]; b += c[2];
        }
      const o = y * (size * 3 + 1) + 1 + x * 3;
      raw[o] = r / SS / SS; raw[o + 1] = g / SS / SS; raw[o + 2] = b / SS / SS;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// u, v ∈ [0,1]. Icône pleine (iOS arrondit lui-même les coins).
function pixel(u, v) {
  const cx = 0.5, cy = 0.5;
  const dx = u - cx, dy = v - cy;
  const r = Math.hypot(dx, dy);
  const ang = Math.atan2(dy, dx); // 0 = droite
  // Anneau ouvert à droite (ouverture de ±50°)
  const inRing = r > 0.2 && r < 0.29 && Math.abs(ang) > (50 * Math.PI) / 180;
  if (inRing) return FG;
  // Point ambre dans l'ouverture
  const px = cx + 0.245, py = cy;
  if (Math.hypot(u - px, v - py) < 0.055) return ACCENT;
  return BG;
}

mkdirSync('public/icons', { recursive: true });
for (const [name, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  writeFileSync(`public/icons/${name}`, png(size, pixel));
}
writeFileSync(
  'public/icons/favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0e1014"/><path d="M68.4 34.3A24.5 24.5 0 1 0 68.4 65.7" fill="none" stroke="#eceef2" stroke-width="9"/><circle cx="74.5" cy="50" r="5.5" fill="#f5a623"/></svg>`,
);
console.log('icons ok');
