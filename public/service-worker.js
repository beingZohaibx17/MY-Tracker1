

const CACHE_NAME = 'zohaib-tracker-v22';

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0/',
  'https://aistudiocdn.com/lucide-react@^0.554.0'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
            return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
            // Allow caching of valid responses (200) and opaque responses (0) from CDNs
            if (!networkResponse || (networkResponse.status !== 200 && networkResponse.status !== 0)) {
                return networkResponse;
            }

            // Only cache images and font/css files dynamically, avoid caching API calls or dynamic pages aggressively
            const url = event.request.url;
            if (url.match(/\.(js|css|png|jpg|jpeg|svg|woff2)$/) || url.includes('googleapis') || url.includes('gstatic')) {
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
            }
            
            return networkResponse;
        }).catch(() => {
             // Fallback for navigation requests
             if (event.request.mode === 'navigate') {
                 return caches.match('/index.html');
             }
        });
    })
  );
});
