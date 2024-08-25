/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/// <reference no-default-lib="true"/>
/// <reference lib="ES2015" />
/// <reference lib="webworker" />

// Default type of `self` is `WorkerGlobalScope & typeof globalThis`
// https://github.com/microsoft/TypeScript/issues/14877

var cacheName = "PWA-Msg-Cache";
self.addEventListener("install", function (event) {
  console.log("installation");
  event.waitUntil(caches.open(cacheName));
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  console.log("activation");
});
self.addEventListener("fetch", function (event) {
  var request = event.request;
  var cachedTypes = ["document", "script", "image", "manifest", "json"];
  if (request.method === "GET") {
    if (cachedTypes.includes(request.destination)) {
      event.respondWith(caches.open(cacheName).then(function (cache) {
        return fetch(event.request.url).then(function (fetchedResponse) {
          cache.put(event.request, fetchedResponse.clone());
          return fetchedResponse;
        })["catch"](function () {
          return cache.match(event.request.url);
        });
      }));
    }
  }
  return;
});

/*

### Network first, falling back to cache ###

self.addEventListener("fetch", (event: FetchEvent) => {
  const { request } = event;
  const cachedTypes = [
    "document",
    "script",
    "image",
    "manifest",
    "json",
  ];
  if (request.method === "GET") {
    if (cachedTypes.includes(request.destination)) {
      event.respondWith(
        caches.open(cacheName).then((cache) => {
          return fetch(event.request.url)
            .then((fetchedResponse) => {
              cache.put(event.request, fetchedResponse.clone());

              return fetchedResponse;
            })
            .catch(() => {
              return cache.match(event.request.url);
            });
        })
      );
    }
  }
  return;
});

### Cache first, falling back to network ###

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const cachedTypes = [
    "document",
    "script",
    "image",
    "manifest",
    "json",
  ];
  if (request.method === "GET") {
    if (cachedTypes.includes(request.destination)) {
      event.respondWith(
        caches.open(cacheName).then((cache) => {
          return cache.match(event.request.url).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }

            return fetch(event.request).then((fetchedResponse) => {
              cache.put(event.request, fetchedResponse.clone());

              return fetchedResponse;
            });
          });
        })
      );
    }
  }
  return;
});

### Stale-while-revalidate ###

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const cachedTypes = [
    "document",
    "script",
    "image",
    "manifest",
    "json",
  ];
  if (request.method === "GET") {
    if (cachedTypes.includes(request.destination)) {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());

          return networkResponse;
        });

        return cachedResponse || fetchedResponse;
      });
    }));
  }
  return;
});

*/

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (null);
/******/ })()
;