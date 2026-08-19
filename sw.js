/**
 * RAAHIYOO 2.0 — SERVICE WORKER FOR OFFLINE MOUNTAIN RESILIENCE
 * Caches core pages, datasets, and guides for zero-network areas (Spiti, Ladakh, etc.)
 */

const CACHE_NAME = 'raahiyoo-offline-v2.0';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './destination.html',
  './ai-planner.html',
  './circuits.html',
  './compare.html',
  './sos.html',
  './stays.html',
  './calculator.html',
  './how-to-reach.html',
  './css/style.css',
  './css/components.css',
  './js/theme.js',
  './js/data.js',
  './js/app.js',
  './js/ai-planner.js',
  './js/circuits.js',
  './js/compare.js',
  './js/sos.js',
  './js/stays.js',
  './js/calculator.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch fresh copy in background to update cache (stale-while-revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback for HTML navigation requests
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
