// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('speed-tashizan-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './sp-math-180.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
