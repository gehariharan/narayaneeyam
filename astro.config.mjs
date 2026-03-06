// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import VitePWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Narayaneeyam',
        short_name: 'Narayaneeyam',
        description: 'Narayaneeyam reader — daskams, slokas, images, commentary.',
        theme_color: '#0b0c10',
        background_color: '#0b0c10',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ],
      },
      workbox: {
        navigateFallback: '/',
        // only precache small static assets; Blob-hosted images are runtime-cached
        globPatterns: ['**/*.{js,css,html,ico,svg,webmanifest}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.hostname.includes('public.blob.vercel-storage.com'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'blob-images',
              expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
      },
    }),
  ],
});
