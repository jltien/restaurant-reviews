self.addEventListener('install', function(event) {
    var urlsToCache = [
        '/',
        'css/styles.css',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'js/main.js',
        'js/dbhelper.js',
        'js/restaurant_info.js',
        'index.html',
        'restaurant.html'
    ]
    event.waitUntil(
        caches.open('restuarant-reviews').then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    )
});