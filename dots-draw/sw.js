const cache_name = "dots-draw-v1.1";
const cache_content = [
    "/dots-draw/",
    "/dots-draw/index.html",
    "/dots-draw/app.js",
    "/dots-draw/style.css",
    "/dots-draw/res/dots-draw-icon-32.png",
    "/dots-draw/res/dots-draw-icon-128.png",
    "/dots-draw/res/dots-draw-icon-256.png",
    "/dots-draw/res/dots-draw-icon-512.png"
]

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
        (async () => {
            const cache = await caches.open(cache_name);
            console.log("[Service Worker] Caching all: app shell and content");
            await cache.addAll(cache_content);
        })()
    );
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cache_name);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});
