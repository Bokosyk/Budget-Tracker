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
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addALL(FILES_TO_CACHE))
    );
});