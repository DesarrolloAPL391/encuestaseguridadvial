// Service worker: cachea el app shell. Los datos (Supabase) siempre van por red.
// IMPORTANTE: sube este número (o el texto v1 -> v2...) cada vez que publiques cambios;
// eso fuerza a borrar la caché vieja y a que todos los usuarios reciban la actualización.
const CACHE = 'pesv-apl-v2';
const SHELL = [
  '.', 'index.html',
  'css/styles.css',
  'js/config.js', 'js/employees.js', 'js/app.js',
  'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/logo.png',
];

self.addEventListener('install', (e) => {
  // cache:'reload' evita que el shell se guarde desde la caché HTTP del navegador (archivos viejos)
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Permite que la página fuerce la activación de un SW en espera
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Nunca cachear llamadas a Supabase ni a la CDN del SDK
  if (url.hostname.endsWith('supabase.co') || url.hostname.endsWith('jsdelivr.net') || url.hostname.endsWith('googleapis.com') || url.hostname.endsWith('gstatic.com')) return;
  if (e.request.method !== 'GET') return;

  const sameOrigin = url.origin === self.location.origin;
  // Para archivos propios: pide SIEMPRE la versión fresca (sin caché HTTP); usa caché solo sin conexión
  const req = sameOrigin ? new Request(e.request.url, { cache: 'no-store' }) : e.request;

  e.respondWith(
    fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request))
  );
});
