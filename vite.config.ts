import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// base './' : fonctionne à la racine d'un domaine comme dans un sous-dossier (GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/apple-touch-icon.png', 'icons/favicon.svg'],
      manifest: {
        name: 'Cadence — English',
        short_name: 'Cadence',
        description: 'Apprendre l’anglais de A2 à C2, un peu chaque jour.',
        lang: 'fr',
        start_url: './',
        scope: './',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f7f5ff',
        theme_color: '#6c4df6',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,json,woff2}'],
        // Les voix (plusieurs milliers de MP3) ne sont pas préchargées : chaque fichier est mis en cache
        // à sa première écoute, ou en une fois depuis le profil (« Télécharger la voix »).
        runtimeCaching: [
          {
            urlPattern: /\/audio\/[a-z_]+\/[0-9a-f]{8}\.mp3$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cadence-voices',
              expiration: { maxEntries: 6000 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
