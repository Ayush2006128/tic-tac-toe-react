self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tic-tac-toe-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/main.tsx',
        '/src/App.tsx',
        '/src/App.css',
        '/src/index.css',
        '/src/components/Board.tsx',
        '/src/components/Board.css',
        '/src/components/Square.tsx',
        '/src/components/GameModeDialog.css',
        '/src/components/GameModeDialog.tsx',
        '/src/theme/vars.css',
        '/src/logic/ai_easy.ts',
        '/src/logic/ai_hard.ts',
        '/src/logic/shared.ts',
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
