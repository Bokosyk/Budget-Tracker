const FILES_TO_CACHE = [
    '/',
    '/db.js',
    '/index.js',
    '/styles.css',
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",

]

// Caches variables
const CACHE_NAME = "site-cache-v1";

//Stores all the data in here
const DATA_CACHE_NAME = "data-cache-v1";


//Installs data to cache
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addALL(FILES_TO_CACHE))
    );
});

//requests all the api units
self.addEventListener('fetch', (e) => {
    if (e.request.url.includes("/api/")) {
        e.respondWith(
            //it needs to open the data_cache_name  to get the data
            caches.open(DATA_CACHE_NAME).then((cachedResponse))
        )
    }
})