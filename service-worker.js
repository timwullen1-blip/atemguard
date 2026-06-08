const CACHE_NAME='truppcontrol-android-legacy-js-v1-20260608';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.svg','./icon-512.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(c){return c.addAll(ASSETS);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.map(function(k){return k!==CACHE_NAME?caches.delete(k):null;}));}));self.clients.claim();});
self.addEventListener('fetch',function(e){if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(function(){return caches.match('./index.html');}));return;}e.respondWith(caches.match(e.request).then(function(c){return c||fetch(e.request);}));});
