self.addEventListener("activate", function (event) {
  console.log("El Service Worker esta activado", event);
});

self.addEventListener("install", function (event) {
  self.skipWaiting();
  console.log("El Service Worker esta instalado", event);
});

var cacheNombre = "cacheDinamico";
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      var requestToCache = event.request.clone();
      return fetch(requestToCache).then(function (response) {
        if (!response || response.status !== 200) {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(cacheNombre).then(function (cache) {
          cache.put(requestToCache, responseToCache);
        });
        return response;
      });
    })
  );
});
