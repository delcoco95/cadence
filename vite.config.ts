import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// base './' : fonctionne à la racine d'un domaine comme dans un sous-dossier (GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['icons/apple-touch-icon.png', 'icons/favicon.svg'],
      manifest: {
        name: 'Cadence — langues',
        short_name: 'Cadence',
        description: 'Apprendre l’anglais, l’italien ou l’espagnol, un peu chaque jour.',
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
        // L'aperçu d'une branche, publié dans /preview/, a sa propre app : ne pas lui servir celle-ci.
        navigateFallbackDenylist: [/\/preview\//],
        // Une nouvelle version prend la main tout de suite, SANS recharger la page (pas de leçon coupée) :
        // une version en attente ne pourrait jamais remplacer une ancienne restée bloquée (page blanche de /preview/).
        skipWaiting: true,
        clientsClaim: true,
        // Les voix (plusieurs milliers de MP3) ne sont pas préchargées : chaque fichier est mis en cache
        // à sa première écoute, ou en une fois depuis le profil (« Télécharger la voix »).
        runtimeCaching: [
          {
            urlPattern: /\/audio\/[a-z_]+\/[0-9a-f]{8}\.mp3$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cadence-voices',
              // 8 voix × environ 4 000 phrases : une limite plus basse effacerait une voix téléchargée en en ajoutant une autre.
              expiration: { maxEntries: 40000 },
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
