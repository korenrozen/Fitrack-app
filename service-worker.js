self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fittrack-cache').then(cache => {
      return cache.addAll(['./', './index.html']);
    })
  );
});