// sw.js — cache-first app shell with subpath-safe URLs
const CACHE = 'dk-vocab-v4';

// Use RELATIVE paths so it works on GitHub Pages subpaths too
const ASSETS = [
    './',
    './index.html',
    './style.css?v=4',
    './script.js',
    './quiz.js',
    './skriveguide.js',
    './adjektiver.js',          
    './adverbKonjunktion.js',
    './substantiver.js',
    './verber.js',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable-512.png',
    '/manifest.webmanifest'
];
// ---------- INSTALL: pre-cache the app shell ----------
self.addEventListener('install', (event) => {
  // Activate this SW immediately (no waiting on old one)
    self.skipWaiting();

    event.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        // Cache all listed assets; don't fail the whole install if one is missing
        const results = await Promise.allSettled(
        ASSETS.map((url) => cache.add(new Request(url, { cache: 'reload' })))
        );
        results.forEach((r, i) => {
        if (r.status === 'rejected') {
            console.warn('[SW] Failed to cache:', ASSETS[i], r.reason);
        }
        });
    })());
    });

    // ---------- ACTIVATE: remove old caches, enable navigation preload ----------
    self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        // Delete old versioned caches
        const keys = await caches.keys();
        await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));

        // Improves first paint: browser can start network while SW initializes
        if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
        }

        // Take control of all open pages right away
        await self.clients.claim();
    })());
    });

    // Helper: only cache same-origin GET requests (keeps cache clean & safe)
    const isCacheableGetFromSameOrigin = (req) => {
    const url = new URL(req.url);
    return req.method === 'GET' && url.origin === self.location.origin;
    };

    // ---------- FETCH: handle navigations + static assets ----------
    self.addEventListener('fetch', (event) => {
    const req = event.request;

    // 1) Page navigations (address bar, links, reload)
    if (req.mode === 'navigate') {
        event.respondWith((async () => {
        // Fast path if browser provides a preloaded response
        const preload = await event.preloadResponse;
        if (preload) return preload;

        try {
            // Prefer network (fresh content)
            return await fetch(req);
        } catch {
            // Offline: fall back to the cached app shell (SPA)
            return (await caches.match('./index.html', { ignoreSearch: true })) || Response.error();
        }
        })());
        return; // don't let it fall through to the asset handler
    }

    // 2) Static assets: cache-first, then network (cache successful GETs)
    if (!isCacheableGetFromSameOrigin(req)) {
        // Let the browser handle cross-origin or non-GET requests
        return;
    }

    event.respondWith((async () => {
        // Try cache first (fast)
        const cached = await caches.match(req, { ignoreSearch: true });
        if (cached) return cached;

        // Otherwise fetch and cache if OK
        try {
        const resp = await fetch(req);
        if (resp.ok) {
            const cache = await caches.open(CACHE);
            cache.put(req, resp.clone());
        }
        return resp;
        } catch {
        return Response.error();
        }
    })());
});