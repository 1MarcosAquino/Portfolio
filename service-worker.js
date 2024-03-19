const CACHE_NAME = 'portfolio-v1';
const urlsToCache = ['./', './index.html', './public/icon.png'];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache).catch(function (error) {
                console.error('Failed to add all resources to cache:', error);
            });
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                    .filter(function (cacheName) {
                        return (
                            cacheName.startsWith('hello-pwa-cache-') &&
                            cacheName !== CACHE_NAME
                        );
                    })
                    .map(function (cacheName) {
                        return caches.delete(cacheName);
                    })
            );
        })
    );
});
