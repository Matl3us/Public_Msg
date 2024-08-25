/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 22:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_providers_query_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);


var Home = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(4), __webpack_require__.e(10), __webpack_require__.e(3)]).then(__webpack_require__.bind(__webpack_require__, 40));
});
var Login = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(12), __webpack_require__.e(11)]).then(__webpack_require__.bind(__webpack_require__, 158));
});
var Register = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(7), __webpack_require__.e(12), __webpack_require__.e(14)]).then(__webpack_require__.bind(__webpack_require__, 171));
});
var Friends = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(12), __webpack_require__.e(4), __webpack_require__.e(10), __webpack_require__.e(16), __webpack_require__.e(9)]).then(__webpack_require__.bind(__webpack_require__, 173));
});
var Profile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(5), __webpack_require__.e(18), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(12), __webpack_require__.e(4), __webpack_require__.e(15), __webpack_require__.e(17)]).then(__webpack_require__.bind(__webpack_require__, 179));
});
var Conversations = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(5), __webpack_require__.e(18), __webpack_require__.e(20), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(12), __webpack_require__.e(4), __webpack_require__.e(10), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e(19)]).then(__webpack_require__.bind(__webpack_require__, 187));
});

//import { SocketProvider } from "./components/providers/socket-provider";

var App = function App() {
  return (
    /*#__PURE__*/
    //<SocketProvider>
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_providers_query_provider__WEBPACK_IMPORTED_MODULE_1__.QueryProvider, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Home, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
          path: "/login",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Login, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
          path: "/register",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Register, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
          path: "/friends",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Friends, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
          path: "/profile",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Profile, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
          path: "/conversations",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Conversations, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
          path: "/conversations/:id",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Conversations, {})
        })]
      })
    })
    //</SocketProvider>
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryProvider: () => (/* binding */ QueryProvider)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var QueryProvider = function QueryProvider(_ref) {
  var children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    }),
    _useState2 = _slicedToArray(_useState, 1),
    queryClient = _useState2[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
    client: queryClient,
    children: children
  });
};

/***/ }),

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);






if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(function (registration) {
      console.log("SW registered: ", registration.scope);
    })["catch"](function (registrationError) {
      console.log("SW registration failed: ", registrationError);
    });
  });
}
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {})
  })
}));

/***/ }),

/***/ 19:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}
  :root {
    --text-50: #ffebe5;
    --text-100: #ffd6cc;
    --text-200: #ffad99;
    --text-300: #ff8566;
    --text-400: #ff5c33;
    --text-500: #ff3300;
    --text-600: #cc2900;
    --text-700: #991f00;
    --text-800: #661400;
    --text-900: #330a00;
    --text-950: #1a0500;

    --background-50: #f2f2f2;
    --background-100: #e6e6e6;
    --background-200: #cccccc;
    --background-300: #b3b3b3;
    --background-400: #999999;
    --background-500: #808080;
    --background-600: #666666;
    --background-700: #4d4d4d;
    --background-800: #333333;
    --background-900: #1a1a1a;
    --background-950: #0d0d0d;

    --primary-50: #feeae6;
    --primary-100: #fed5cd;
    --primary-200: #fdab9b;
    --primary-300: #fc8269;
    --primary-400: #fb5837;
    --primary-500: #fa2e05;
    --primary-600: #c82504;
    --primary-700: #961c03;
    --primary-800: #641202;
    --primary-900: #320901;
    --primary-950: #190501;

    --secondary-50: #f4f1f0;
    --secondary-100: #e9e3e2;
    --secondary-200: #d4c7c4;
    --secondary-300: #beaaa7;
    --secondary-400: #a88e8a;
    --secondary-500: #93726c;
    --secondary-600: #755b57;
    --secondary-700: #584441;
    --secondary-800: #3b2e2b;
    --secondary-900: #1d1716;
    --secondary-950: #0f0b0b;

    --accent-50: #fee6e6;
    --accent-100: #fdcece;
    --accent-200: #fb9d9d;
    --accent-300: #fa6b6b;
    --accent-400: #f83a3a;
    --accent-500: #f60909;
    --accent-600: #c50707;
    --accent-700: #940505;
    --accent-800: #620404;
    --accent-900: #310202;
    --accent-950: #190101;
  }

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-auto {
  pointer-events: auto;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.-top-1 {
  top: -0.25rem;
}
.-top-\\[22px\\] {
  top: -22px;
}
.-top-\\[38px\\] {
  top: -38px;
}
.bottom-1 {
  bottom: 0.25rem;
}
.bottom-2 {
  bottom: 0.5rem;
}
.bottom-6 {
  bottom: 1.5rem;
}
.left-1 {
  left: 0.25rem;
}
.left-10 {
  left: 2.5rem;
}
.left-2 {
  left: 0.5rem;
}
.left-56 {
  left: 14rem;
}
.left-\\[12px\\] {
  left: 12px;
}
.left-\\[18px\\] {
  left: 18px;
}
.left-\\[38px\\] {
  left: 38px;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.left-\\[6px\\] {
  left: 6px;
}
.right-10 {
  right: 2.5rem;
}
.right-2 {
  right: 0.5rem;
}
.right-4 {
  right: 1rem;
}
.right-\\[12px\\] {
  right: 12px;
}
.right-\\[20px\\] {
  right: 20px;
}
.right-\\[3px\\] {
  right: 3px;
}
.right-\\[6px\\] {
  right: 6px;
}
.top-0 {
  top: 0px;
}
.top-1 {
  top: 0.25rem;
}
.top-11 {
  top: 2.75rem;
}
.top-12 {
  top: 3rem;
}
.top-2 {
  top: 0.5rem;
}
.top-4 {
  top: 1rem;
}
.top-6 {
  top: 1.5rem;
}
.top-8 {
  top: 2rem;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.z-10 {
  z-index: 10;
}
.z-50 {
  z-index: 50;
}
.z-\\[100\\] {
  z-index: 100;
}
.m-auto {
  margin: auto;
}
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.-mb-6 {
  margin-bottom: -1.5rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-10 {
  margin-bottom: 2.5rem;
}
.mb-12 {
  margin-bottom: 3rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-4 {
  margin-left: 1rem;
}
.ml-auto {
  margin-left: auto;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-12 {
  margin-top: 3rem;
}
.mt-16 {
  margin-top: 4rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-24 {
  margin-top: 6rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-auto {
  margin-top: auto;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.grid {
  display: grid;
}
.h-0 {
  height: 0px;
}
.h-10 {
  height: 2.5rem;
}
.h-11 {
  height: 2.75rem;
}
.h-12 {
  height: 3rem;
}
.h-16 {
  height: 4rem;
}
.h-2 {
  height: 0.5rem;
}
.h-3 {
  height: 0.75rem;
}
.h-3\\.5 {
  height: 0.875rem;
}
.h-32 {
  height: 8rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-56 {
  height: 14rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-\\[1px\\] {
  height: 1px;
}
.h-\\[56px\\] {
  height: 56px;
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.h-screen {
  height: 100vh;
}
.max-h-48 {
  max-height: 12rem;
}
.max-h-screen {
  max-height: 100vh;
}
.min-h-96 {
  min-height: 24rem;
}
.w-0 {
  width: 0px;
}
.w-1\\/6 {
  width: 16.666667%;
}
.w-10 {
  width: 2.5rem;
}
.w-14 {
  width: 3.5rem;
}
.w-16 {
  width: 4rem;
}
.w-2 {
  width: 0.5rem;
}
.w-24 {
  width: 6rem;
}
.w-3 {
  width: 0.75rem;
}
.w-3\\.5 {
  width: 0.875rem;
}
.w-32 {
  width: 8rem;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-64 {
  width: 16rem;
}
.w-72 {
  width: 18rem;
}
.w-8 {
  width: 2rem;
}
.w-96 {
  width: 24rem;
}
.w-\\[1px\\] {
  width: 1px;
}
.w-\\[250px\\] {
  width: 250px;
}
.w-\\[32px\\] {
  width: 32px;
}
.w-\\[450px\\] {
  width: 450px;
}
.w-\\[64px\\] {
  width: 64px;
}
.w-\\[650px\\] {
  width: 650px;
}
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}
.min-w-16 {
  min-width: 4rem;
}
.min-w-24 {
  min-width: 6rem;
}
.min-w-80 {
  min-width: 20rem;
}
.min-w-\\[8rem\\] {
  min-width: 8rem;
}
.max-w-16 {
  max-width: 4rem;
}
.max-w-\\[1200px\\] {
  max-width: 1200px;
}
.max-w-\\[550px\\] {
  max-width: 550px;
}
.max-w-\\[650px\\] {
  max-width: 650px;
}
.max-w-\\[800px\\] {
  max-width: 800px;
}
.max-w-lg {
  max-width: 32rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-auto {
  flex: 1 1 auto;
}
.shrink-0 {
  flex-shrink: 0;
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-24 {
  gap: 6rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-8 {
  gap: 2rem;
}
.gap-\\[1px\\] {
  gap: 1px;
}
.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * 0);
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * (1 - 0));
  margin-left: calc(1rem * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(1rem * calc(1 - 0));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * (1 - 0));
  margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(0px * calc(1 - 0));
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * 0);
  margin-bottom: calc(0px * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * (1 - 0));
  margin-top: calc(0.375rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(0.375rem * calc(1 - 0));
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * 0);
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * (1 - 0));
  margin-top: calc(0.5rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(0.5rem * calc(1 - 0));
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * 0);
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * (1 - 0));
  margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(1rem * calc(1 - 0));
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * 0);
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * (1 - 0));
  margin-top: calc(1.5rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(1.5rem * calc(1 - 0));
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * 0);
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.self-start {
  align-self: flex-start;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-scroll {
  overflow: scroll;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-b-md {
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.border-l-\\[1px\\] {
  border-left-width: 1px;
}
.border-t-\\[1px\\] {
  border-top-width: 1px;
}
.border-dashed {
  border-style: dashed;
}
.border-none {
  border-style: none;
}
.border-accent-200 {
  border-color: #fb9d9d;
  border-color: var(--accent-200);
}
.border-background-200 {
  border-color: #cccccc;
  border-color: var(--background-200);
}
.border-background-500 {
  border-color: #808080;
  border-color: var(--background-500);
}
.border-background-700 {
  border-color: #4d4d4d;
  border-color: var(--background-700);
}
.border-background-900 {
  border-color: #1a1a1a;
  border-color: var(--background-900);
}
.border-emerald-500 {
  --tw-border-opacity: 1;
  border-color: rgba(16, 185, 129, 1);
  border-color: rgba(16, 185, 129, var(--tw-border-opacity));
}
.border-error {
  --tw-border-opacity: 1;
  border-color: rgba(240, 18, 2, 1);
  border-color: rgba(240, 18, 2, var(--tw-border-opacity));
}
.border-neutral-200 {
  --tw-border-opacity: 1;
  border-color: rgba(229, 229, 229, 1);
  border-color: rgba(229, 229, 229, var(--tw-border-opacity));
}
.border-neutral-800 {
  --tw-border-opacity: 1;
  border-color: rgba(38, 38, 38, 1);
  border-color: rgba(38, 38, 38, var(--tw-border-opacity));
}
.border-neutral-900 {
  --tw-border-opacity: 1;
  border-color: rgba(23, 23, 23, 1);
  border-color: rgba(23, 23, 23, var(--tw-border-opacity));
}
.border-success {
  --tw-border-opacity: 1;
  border-color: rgba(80, 222, 9, 1);
  border-color: rgba(80, 222, 9, var(--tw-border-opacity));
}
.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgba(234, 179, 8, 1);
  border-color: rgba(234, 179, 8, var(--tw-border-opacity));
}
.bg-background-700 {
  background-color: #4d4d4d;
  background-color: var(--background-700);
}
.bg-background-800 {
  background-color: #333333;
  background-color: var(--background-800);
}
.bg-background-900 {
  background-color: #1a1a1a;
  background-color: var(--background-900);
}
.bg-background-950 {
  background-color: #0d0d0d;
  background-color: var(--background-950);
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}
.bg-black\\/80 {
  background-color: rgba(0, 0, 0, 0.8);
}
.bg-error {
  --tw-bg-opacity: 1;
  background-color: rgba(240, 18, 2, 1);
  background-color: rgba(240, 18, 2, var(--tw-bg-opacity));
}
.bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(245, 245, 245, 1);
  background-color: rgba(245, 245, 245, var(--tw-bg-opacity));
}
.bg-primary-400 {
  background-color: #fb5837;
  background-color: var(--primary-400);
}
.bg-primary-600 {
  background-color: #c82504;
  background-color: var(--primary-600);
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgba(220, 38, 38, 1);
  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));
}
.bg-success {
  --tw-bg-opacity: 1;
  background-color: rgba(80, 222, 9, 1);
  background-color: rgba(80, 222, 9, var(--tw-bg-opacity));
}
.bg-transparent {
  background-color: transparent;
}
.bg-warning {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 208, 0, 1);
  background-color: rgba(255, 208, 0, var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.fill-current {
  fill: currentColor;
}
.object-fill {
  -o-object-fit: fill;
     object-fit: fill;
}
.p-1 {
  padding: 0.25rem;
}
.p-12 {
  padding: 3rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-8 {
  padding: 2rem;
}
.p-\\[1px\\] {
  padding: 1px;
}
.p-\\[3px\\] {
  padding: 3px;
}
.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-24 {
  padding-left: 6rem;
  padding-right: 6rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pl-1 {
  padding-left: 0.25rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pl-\\[6px\\] {
  padding-left: 6px;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-6 {
  padding-right: 1.5rem;
}
.pr-8 {
  padding-right: 2rem;
}
.pr-\\[12px\\] {
  padding-right: 12px;
}
.pr-\\[2px\\] {
  padding-right: 2px;
}
.text-center {
  text-align: center;
}
.text-2xl {
  font-size: 1.777rem;
}
.text-3xl {
  font-size: 2.369rem;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[12px\\] {
  font-size: 12px;
}
.text-\\[24px\\] {
  font-size: 24px;
}
.text-base {
  font-size: 0.95rem;
}
.text-sm {
  font-size: 0.875rem;
}
.text-xl {
  font-size: 1.333rem;
}
.text-xs {
  font-size: 0.7rem;
  line-height: 0.9rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.leading-none {
  line-height: 1;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.text-accent-500 {
  color: #f60909;
  color: var(--accent-500);
}
.text-background-100 {
  color: #e6e6e6;
  color: var(--background-100);
}
.text-background-200 {
  color: #cccccc;
  color: var(--background-200);
}
.text-background-400 {
  color: #999999;
  color: var(--background-400);
}
.text-background-50 {
  color: #f2f2f2;
  color: var(--background-50);
}
.text-background-500 {
  color: #808080;
  color: var(--background-500);
}
.text-background-600 {
  color: #666666;
  color: var(--background-600);
}
.text-background-700 {
  color: #4d4d4d;
  color: var(--background-700);
}
.text-current {
  color: currentColor;
}
.text-emerald-500 {
  --tw-text-opacity: 1;
  color: rgba(16, 185, 129, 1);
  color: rgba(16, 185, 129, var(--tw-text-opacity));
}
.text-error {
  --tw-text-opacity: 1;
  color: rgba(240, 18, 2, 1);
  color: rgba(240, 18, 2, var(--tw-text-opacity));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgba(115, 115, 115, 1);
  color: rgba(115, 115, 115, var(--tw-text-opacity));
}
.text-neutral-950 {
  --tw-text-opacity: 1;
  color: rgba(10, 10, 10, 1);
  color: rgba(10, 10, 10, var(--tw-text-opacity));
}
.text-neutral-950\\/50 {
  color: rgba(10, 10, 10, 0.5);
}
.text-primary-50 {
  color: #feeae6;
  color: var(--primary-50);
}
.text-primary-500 {
  color: #fa2e05;
  color: var(--primary-500);
}
.text-primary-600 {
  color: #c82504;
  color: var(--primary-600);
}
.text-primary-700 {
  color: #961c03;
  color: var(--primary-700);
}
.text-secondary-50 {
  color: #f4f1f0;
  color: var(--secondary-50);
}
.text-success {
  --tw-text-opacity: 1;
  color: rgba(80, 222, 9, 1);
  color: rgba(80, 222, 9, var(--tw-text-opacity));
}
.text-text-400 {
  color: #ff5c33;
  color: var(--text-400);
}
.text-text-50 {
  color: #ffebe5;
  color: var(--text-50);
}
.text-text-500 {
  color: #ff3300;
  color: var(--text-500);
}
.text-text-900 {
  color: #330a00;
  color: var(--text-900);
}
.text-warning {
  --tw-text-opacity: 1;
  color: rgba(255, 208, 0, 1);
  color: rgba(255, 208, 0, var(--tw-text-opacity));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgba(234, 179, 8, 1);
  color: rgba(234, 179, 8, var(--tw-text-opacity));
}
.underline-offset-4 {
  text-underline-offset: 4px;
}
.opacity-0 {
  opacity: 0;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-70 {
  opacity: 0.7;
}
.opacity-90 {
  opacity: 0.9;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.shadow-none {
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.ring-offset-white {
  --tw-ring-offset-color: #fff;
}
.drop-shadow-none {
  --tw-drop-shadow: drop-shadow(0 0 rgba(0,0,0,0));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 0 rgba(0,0,0,0));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}

html,
body,
:root {
  height: 100%;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0d0d0d;
}

::-webkit-scrollbar-thumb {
  background: #333333;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-webkit-scrollbar-corner {
  display: none;
}

em-emoji-picker {
  --border-radius: 14px;
  --category-icon-size: 14px;
  --font-size: 14px;

  --rgb-accent: 255, 51, 0;
}

.file\\:border-0::file-selector-button {
  border-width: 0px;
}

.file\\:bg-transparent::file-selector-button {
  background-color: transparent;
}

.file\\:text-sm::file-selector-button {
  font-size: 0.875rem;
}

.file\\:font-medium::file-selector-button {
  font-weight: 500;
}

.placeholder\\:text-neutral-500::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgba(115, 115, 115, 1);
  color: rgba(115, 115, 115, var(--tw-text-opacity));
}

.placeholder\\:text-neutral-500::placeholder {
  --tw-text-opacity: 1;
  color: rgba(115, 115, 115, 1);
  color: rgba(115, 115, 115, var(--tw-text-opacity));
}

.hover\\:bg-accent-100:hover {
  background-color: #fdcece;
  background-color: var(--accent-100);
}

.hover\\:bg-background-700:hover {
  background-color: #4d4d4d;
  background-color: var(--background-700);
}

.hover\\:bg-background-800:hover {
  background-color: #333333;
  background-color: var(--background-800);
}

.hover\\:bg-background-900:hover {
  background-color: #1a1a1a;
  background-color: var(--background-900);
}

.hover\\:bg-neutral-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(245, 245, 245, 1);
  background-color: rgba(245, 245, 245, var(--tw-bg-opacity));
}

.hover\\:bg-primary-100:hover {
  background-color: #fed5cd;
  background-color: var(--primary-100);
}

.hover\\:bg-primary-400:hover {
  background-color: #fb5837;
  background-color: var(--primary-400);
}

.hover\\:bg-primary-700:hover {
  background-color: #961c03;
  background-color: var(--primary-700);
}

.hover\\:bg-red-600\\/90:hover {
  background-color: rgba(220, 38, 38, 0.9);
}

.hover\\:text-neutral-950:hover {
  --tw-text-opacity: 1;
  color: rgba(10, 10, 10, 1);
  color: rgba(10, 10, 10, var(--tw-text-opacity));
}

.hover\\:text-primary-500:hover {
  color: #fa2e05;
  color: var(--primary-500);
}

.hover\\:text-primary-700:hover {
  color: #961c03;
  color: var(--primary-700);
}

.hover\\:text-text-900:hover {
  color: #330a00;
  color: var(--text-900);
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.hover\\:opacity-100:hover {
  opacity: 1;
}

.focus\\:bg-neutral-100:focus {
  --tw-bg-opacity: 1;
  background-color: rgba(245, 245, 245, 1);
  background-color: rgba(245, 245, 245, var(--tw-bg-opacity));
}

.focus\\:bg-neutral-800:focus {
  --tw-bg-opacity: 1;
  background-color: rgba(38, 38, 38, 1);
  background-color: rgba(38, 38, 38, var(--tw-bg-opacity));
}

.focus\\:text-neutral-900:focus {
  --tw-text-opacity: 1;
  color: rgba(23, 23, 23, 1);
  color: rgba(23, 23, 23, var(--tw-text-opacity));
}

.focus\\:opacity-100:focus {
  opacity: 1;
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
}

.focus\\:ring-neutral-950:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(10, 10, 10, var(--tw-ring-opacity));
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
}

.focus-visible\\:ring-background-50:focus-visible {
  --tw-ring-color: var(--background-50);
}

.focus-visible\\:ring-neutral-950:focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(10, 10, 10, var(--tw-ring-opacity));
}

.focus-visible\\:ring-primary-950:focus-visible {
  --tw-ring-color: var(--primary-950);
}

.focus-visible\\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.group.destructive .group-\\[\\.destructive\\]\\:border-neutral-100\\/40 {
  border-color: rgba(245, 245, 245, 0.4);
}

.group.destructive .group-\\[\\.destructive\\]\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgba(252, 165, 165, 1);
  color: rgba(252, 165, 165, var(--tw-text-opacity));
}

.group.destructive .group-\\[\\.destructive\\]\\:hover\\:border-red-500\\/30:hover {
  border-color: rgba(239, 68, 68, 0.3);
}

.group.destructive .group-\\[\\.destructive\\]\\:hover\\:bg-red-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(239, 68, 68, 1);
  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));
}

.group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-neutral-50:hover {
  --tw-text-opacity: 1;
  color: rgba(250, 250, 250, 1);
  color: rgba(250, 250, 250, var(--tw-text-opacity));
}

.group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-red-50:hover {
  --tw-text-opacity: 1;
  color: rgba(254, 242, 242, 1);
  color: rgba(254, 242, 242, var(--tw-text-opacity));
}

.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(248, 113, 113, var(--tw-ring-opacity));
}

.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(239, 68, 68, var(--tw-ring-opacity));
}

.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600:focus {
  --tw-ring-offset-color: #dc2626;
}

.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {
  cursor: not-allowed;
}

.peer:disabled ~ .peer-disabled\\:opacity-70 {
  opacity: 0.7;
}

.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}

.data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe="cancel"] {
  --tw-translate-x: 0px;
  transform: translate(0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe="end"] {
  --tw-translate-x: var(--radix-toast-swipe-end-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\][data-swipe="move"] {
  --tw-translate-x: var(--radix-toast-swipe-move-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=checked\\]\\:bg-neutral-900[data-state="checked"] {
  --tw-bg-opacity: 1;
  background-color: rgba(23, 23, 23, 1);
  background-color: rgba(23, 23, 23, var(--tw-bg-opacity));
}

.data-\\[state\\=open\\]\\:bg-background-900[data-state="open"] {
  background-color: #1a1a1a;
  background-color: var(--background-900);
}

.data-\\[state\\=open\\]\\:bg-neutral-100[data-state="open"] {
  --tw-bg-opacity: 1;
  background-color: rgba(245, 245, 245, 1);
  background-color: rgba(245, 245, 245, var(--tw-bg-opacity));
}

.data-\\[state\\=open\\]\\:bg-neutral-800[data-state="open"] {
  --tw-bg-opacity: 1;
  background-color: rgba(38, 38, 38, 1);
  background-color: rgba(38, 38, 38, var(--tw-bg-opacity));
}

.data-\\[state\\=checked\\]\\:text-primary-500[data-state="checked"] {
  color: #fa2e05;
  color: var(--primary-500);
}

.data-\\[state\\=open\\]\\:text-neutral-500[data-state="open"] {
  --tw-text-opacity: 1;
  color: rgba(115, 115, 115, 1);
  color: rgba(115, 115, 115, var(--tw-text-opacity));
}

.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 0.5;
}

.data-\\[swipe\\=move\\]\\:transition-none[data-swipe="move"] {
  transition-property: none;
}

@media (min-width: 640px) {

  .sm\\:bottom-0 {
    bottom: 0px;
  }

  .sm\\:right-0 {
    right: 0px;
  }

  .sm\\:top-auto {
    top: auto;
  }

  .sm\\:w-\\[500px\\] {
    width: 500px;
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  .sm\\:flex-col {
    flex-direction: column;
  }

  .sm\\:justify-end {
    justify-content: flex-end;
  }

  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * 0);
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * (1 - 0));
    margin-left: calc(0.5rem * (1 - var(--tw-space-x-reverse)));
    margin-left: calc(0.5rem * calc(1 - 0));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:text-left {
    text-align: left;
  }
}

@media (min-width: 768px) {

  .md\\:max-w-\\[420px\\] {
    max-width: 420px;
  }
}

@media (min-width: 1024px) {

  .lg\\:w-\\[850px\\] {
    width: 850px;
  }
}

@media (prefers-color-scheme: dark) {

  .dark\\:border-neutral-800 {
    --tw-border-opacity: 1;
    border-color: rgba(38, 38, 38, 1);
    border-color: rgba(38, 38, 38, var(--tw-border-opacity));
  }

  .dark\\:bg-background-800 {
    background-color: #333333;
    background-color: var(--background-800);
  }

  .dark\\:bg-neutral-800 {
    --tw-bg-opacity: 1;
    background-color: rgba(38, 38, 38, 1);
    background-color: rgba(38, 38, 38, var(--tw-bg-opacity));
  }

  .dark\\:bg-neutral-950 {
    --tw-bg-opacity: 1;
    background-color: rgba(10, 10, 10, 1);
    background-color: rgba(10, 10, 10, var(--tw-bg-opacity));
  }

  .dark\\:text-neutral-400 {
    --tw-text-opacity: 1;
    color: rgba(163, 163, 163, 1);
    color: rgba(163, 163, 163, var(--tw-text-opacity));
  }

  .dark\\:text-neutral-50 {
    --tw-text-opacity: 1;
    color: rgba(250, 250, 250, 1);
    color: rgba(250, 250, 250, var(--tw-text-opacity));
  }

  .dark\\:text-neutral-50\\/50 {
    color: rgba(250, 250, 250, 0.5);
  }

  .dark\\:ring-offset-neutral-950 {
    --tw-ring-offset-color: #0a0a0a;
  }

  .dark\\:ring-offset-primary-950 {
    --tw-ring-offset-color: var(--primary-950);
  }

  .dark\\:placeholder\\:text-neutral-400::-moz-placeholder {
    --tw-text-opacity: 1;
    color: rgba(163, 163, 163, 1);
    color: rgba(163, 163, 163, var(--tw-text-opacity));
  }

  .dark\\:placeholder\\:text-neutral-400::placeholder {
    --tw-text-opacity: 1;
    color: rgba(163, 163, 163, 1);
    color: rgba(163, 163, 163, var(--tw-text-opacity));
  }

  .dark\\:hover\\:bg-neutral-800:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(38, 38, 38, 1);
    background-color: rgba(38, 38, 38, var(--tw-bg-opacity));
  }

  .dark\\:hover\\:text-neutral-50:hover {
    --tw-text-opacity: 1;
    color: rgba(250, 250, 250, 1);
    color: rgba(250, 250, 250, var(--tw-text-opacity));
  }

  .dark\\:focus\\:bg-neutral-800:focus {
    --tw-bg-opacity: 1;
    background-color: rgba(38, 38, 38, 1);
    background-color: rgba(38, 38, 38, var(--tw-bg-opacity));
  }

  .dark\\:focus\\:text-neutral-50:focus {
    --tw-text-opacity: 1;
    color: rgba(250, 250, 250, 1);
    color: rgba(250, 250, 250, var(--tw-text-opacity));
  }

  .dark\\:focus\\:ring-neutral-300:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(212, 212, 212, var(--tw-ring-opacity));
  }

  .dark\\:focus-visible\\:ring-neutral-300:focus-visible {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(212, 212, 212, var(--tw-ring-opacity));
  }

  .dark\\:focus-visible\\:ring-primary-300:focus-visible {
    --tw-ring-color: var(--primary-300);
  }

  .dark\\:focus-visible\\:ring-primary-500:focus-visible {
    --tw-ring-color: var(--primary-500);
  }

  .group.destructive .dark\\:group-\\[\\.destructive\\]\\:border-neutral-800\\/40 {
    border-color: rgba(38, 38, 38, 0.4);
  }

  .group.destructive .dark\\:group-\\[\\.destructive\\]\\:hover\\:border-red-900\\/30:hover {
    border-color: rgba(127, 29, 29, 0.3);
  }

  .group.destructive .dark\\:group-\\[\\.destructive\\]\\:hover\\:bg-red-900:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(127, 29, 29, 1);
    background-color: rgba(127, 29, 29, var(--tw-bg-opacity));
  }

  .group.destructive .dark\\:group-\\[\\.destructive\\]\\:hover\\:text-neutral-50:hover {
    --tw-text-opacity: 1;
    color: rgba(250, 250, 250, 1);
    color: rgba(250, 250, 250, var(--tw-text-opacity));
  }

  .group.destructive .dark\\:group-\\[\\.destructive\\]\\:focus\\:ring-red-900:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(127, 29, 29, var(--tw-ring-opacity));
  }

  .dark\\:data-\\[state\\=checked\\]\\:bg-primary-500[data-state="checked"] {
    background-color: #fa2e05;
    background-color: var(--primary-500);
  }

  .dark\\:data-\\[state\\=open\\]\\:bg-neutral-800[data-state="open"] {
    --tw-bg-opacity: 1;
    background-color: rgba(38, 38, 38, 1);
    background-color: rgba(38, 38, 38, var(--tw-bg-opacity));
  }

  .dark\\:data-\\[state\\=checked\\]\\:text-background-50[data-state="checked"] {
    color: #f2f2f2;
    color: var(--background-50);
  }

  .dark\\:data-\\[state\\=open\\]\\:text-neutral-400[data-state="open"] {
    --tw-text-opacity: 1;
    color: rgba(163, 163, 163, 1);
    color: rgba(163, 163, 163, var(--tw-text-opacity));
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunk." + {"3":"c7924c06bcb7b1351bb5","4":"377ac392cc64b90751af","5":"5b046b819a18ef196ef3","6":"ea8056ea42f4bad7cb86","7":"1fbdcc85292255c701d7","8":"998d870bb3bf994e81f9","9":"f712472c3df914c4cb22","10":"b379deeb0df61bf583e8","11":"5fcb63638addb3513922","12":"a6f7fe50d5e3ac24879a","13":"c07bbd2a211fa7e3f6f0","14":"71669f7ca8e54a37ed5c","15":"9a854984f20fb6cc825d","16":"a2f67592b6e325cf6afd","17":"f5622d57ac299f8ecfec","18":"70005477bdc772c87931","19":"7c4a07fbead0c2617823","20":"f133b99ec664c6406372"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "msg-app-client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmsg_app_client"] = self["webpackChunkmsg_app_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2], () => (__webpack_require__(1)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;