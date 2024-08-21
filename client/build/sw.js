/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/// <reference no-default-lib="true"/>
/// <reference lib="ES2015" />
/// <reference lib="webworker" />

// Default type of `self` is `WorkerGlobalScope & typeof globalThis`
// https://github.com/microsoft/TypeScript/issues/14877

var cacheName = "PWA-Msg-Cache";
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(cacheName));
});
self.addEventListener("fetch", function (event) {
  var request = event.request;
  var cachedTypes = ["document", "script", "image", "manifest", "json", "serviceworker"];
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
  console.log(request);
});

/*
if (request.mode !== "websocket" || request.method === "GET") {
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
  } else {
    return;
  }
*/

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (null);
/******/ })()
;