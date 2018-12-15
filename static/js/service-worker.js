self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('menu-rame')
      .then(cache => {
        return cache.add('/');
      })
  );
});
