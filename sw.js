self.addEventListener("install", function(event) {
    self.skipWaiting();
    console.log('[service worker] installing service worker..', event);
});

self.addEventListener("activate", function(event) {
    console.log('[service worker] activating service worker..', event);
    return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
    console.log("[service worker] fetching on something..", event);
    event.respondWith(fetch(event.request));
});