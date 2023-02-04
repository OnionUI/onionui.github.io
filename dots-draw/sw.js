const cache_name = "dots-draw-v1.4.3";
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

self.addEventListener('install', function (event) {
    var now = Date.now();

    console.log('Handling install event. Resources to prefetch:', cache_content);

    event.waitUntil(
        caches.open(cache_name).then(async function (cache) {
            var cachePromises = cache_content.map(async function (content) {
                var url = new URL(content, location.href);
                url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;

                var request = new Request(url, { mode: 'no-cors' });
                try {
                    const response = await fetch(request);
                    if (response.status >= 400) {
                        throw new Error('request for ' + content +
                            ' failed with status ' + response.statusText);
                    }
                    return await cache.put(content, response);
                } catch (error) {
                    console.error('Not caching ' + content + ' due to ' + error);
                }
            });

            await Promise.all(cachePromises);
            console.log('Pre-fetching complete.');
        }).catch(function (error) {
            console.error('Pre-fetching failed:', error);
        })
    );
});

self.addEventListener('activate', function (event) {
    var expectedCacheNames = [cache_name];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (expectedCacheNames.indexOf(cacheName) === -1) {
                        // If this cache name isn't present in the array of "expected" cache names, then delete it.
                        console.log('Deleting out of date cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('Handling fetch event for', event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                console.log('Found response in cache:', response);

                return response;
            }

            console.log('No response found in cache. About to fetch from network...');

            return fetch(event.request).then(function (response) {
                console.log('Response from network is:', response);

                return response;
            }).catch(function (error) {
                console.error('Fetching failed:', error);

                throw error;
            });
        })
    );
});
