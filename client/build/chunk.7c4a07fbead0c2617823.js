"use strict";
(self["webpackChunkmsg_app_client"] = self["webpackChunkmsg_app_client"] || []).push([[19],{

/***/ 236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(166);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(161);
/* harmony import */ var _lib_zod_schemas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(168);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(144);
/* harmony import */ var _emoji_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(237);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(244);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(184);
/* harmony import */ var _ui_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(165);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }













var ChatInput = function ChatInput(_ref) {
  var name = _ref.name,
    conversationID = _ref.conversationID;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dialogOpen = _useState4[0],
    setDialogOpen = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    file = _useState6[0],
    setFile = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingFile = _useState8[0],
    setLoadingFile = _useState8[1];
  var handleSelectFile = function handleSelectFile(e) {
    return setFile(e.target.files[0]);
  };
  var handleUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoadingFile(true);
            data = new FormData(); // @ts-ignore
            data.append("image", file);
            _context.next = 6;
            return fetch("/api/upload/image?" + new URLSearchParams({
              conversationId: conversationID
            }), {
              method: "POST",
              body: data
            });
          case 6:
            response = _context.sent;
            if (response.ok) {
              setDialogOpen(false);
            }
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            alert(_context.t0.message);
          case 13:
            _context.prev = 13;
            setLoadingFile(false);
            return _context.finish(13);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10, 13, 16]]);
    }));
    return function handleUpload() {
      return _ref2.apply(this, arguments);
    };
  }();
  var form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__.zodResolver)(_lib_zod_schemas__WEBPACK_IMPORTED_MODULE_5__.messageSchema),
    defaultValues: {
      message: "",
      fileUrl: null
    }
  });
  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }
  function _onSubmit() {
    _onSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoading(true);
            _context2.next = 3;
            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_6__.createMessage)(values, conversationID);
          case 3:
            setLoading(false);
            form.reset();
            setDialogOpen(false);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _onSubmit.apply(this, arguments);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: "flex items-center p-6",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_1__.Form, _objectSpread(_objectSpread({}, form), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("form", {
        onSubmit: form.handleSubmit(onSubmit),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_1__.FormField, {
          control: form.control,
          name: "message",
          render: function render(_ref3) {
            var field = _ref3.field;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_ui_form__WEBPACK_IMPORTED_MODULE_1__.FormItem, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "flex items-center w-[250px] sm:w-[500px] lg:w-[850px]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_ui_dialog__WEBPACK_IMPORTED_MODULE_0__.Dialog, {
                    open: dialogOpen,
                    onOpenChange: setDialogOpen,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogTrigger, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        className: "hover:text-primary-700 text-primary-600 rounded-lg relative left-10"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogContent, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_ui_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogHeader, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogTitle, {
                          className: "mb-4",
                          children: "Upload image"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                          className: "mx-2 p-6 border rounded-md border-background-500 flex flex-col gap-2 items-center justify-center",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                              type: "file",
                              onChange: handleSelectFile,
                              multiple: false,
                              className: "w-0 h-0 overflow-hidden"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                              className: "p-1 hover:bg-background-700 rounded-lg cursor-pointer",
                              onClick: handleUpload,
                              size: 52
                            })]
                          }), !file ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                            children: "Upload an image"
                          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_9__.Button, {
                            onClick: handleUpload,
                            children: "Upload image"
                          }), loadingFile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_spinner__WEBPACK_IMPORTED_MODULE_8__.LoadingSpinner, {})]
                        })]
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, _objectSpread({
                    autoComplete: "off",
                    disabled: loading,
                    className: "px-12 text-base dark:bg-background-800",
                    placeholder: "Message @".concat(name)
                  }, field)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "hover:text-primary-700 text-primary-600 rounded-lg relative right-10 top-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_emoji_picker__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      onChange: function onChange(emoji) {
                        return field.onChange("".concat(field.value).concat(emoji));
                      }
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_1__.FormMessage, {
                className: "absolute"
              })]
            });
          }
        })
      })
    }))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatInput);

/***/ }),

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

var ChatItem = function ChatItem(_ref) {
  var id = _ref.id,
    userId = _ref.userId,
    content = _ref.content,
    member = _ref.member,
    timestamp = _ref.timestamp,
    fileUrl = _ref.fileUrl,
    socketUrl = _ref.socketUrl;
  if (userId === member.id) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "relative flex justify-end p-2 mb-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex flex-row-reverse gap-x-2 items-end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            className: "rounded-lg relative -top-1",
            src: member.imageUrl,
            alt: "Avatar",
            width: "26",
            height: "26"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "max-w-[550px]",
            children: fileUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
              target: "_blank",
              href: fileUrl,
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                src: fileUrl,
                alt: "message image",
                className: "object-fill rounded-md"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "py-1 px-3 rounded-xl text-sm text-primary-50 bg-primary-600 hover:bg-primary-700",
              children: content
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "self-end relative text-[11px] text-background-600",
          children: timestamp
        })]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "relative flex items-center p-2 mb-2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex gap-x-2 items-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          className: "rounded-lg relative -top-1",
          src: member.imageUrl,
          alt: "Avatar",
          width: "26",
          height: "26"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "max-w-[650px]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "text-xs text-background-500 mb-1",
            children: member.username
          }), fileUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            target: "_blank",
            href: fileUrl,
            rel: "noopener noreferrer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
              src: fileUrl,
              alt: "message image",
              className: "object-fill rounded-md"
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "py-1 px-3 rounded-xl text-sm text-background-100 bg-background-800 hover:bg-background-900",
            children: content
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "self-start relative text-[11px] text-background-600",
        children: timestamp
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatItem);

/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(197);
/* harmony import */ var _hooks_useChatQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(246);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(264);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(265);
/* harmony import */ var _chat_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(261);
/* harmony import */ var _hooks_useChatSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(262);
/* harmony import */ var _hooks_useChatScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(263);
/* harmony import */ var _ui_group_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(196);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);









var DATE_FORMAT = "d MMM yyyy, HH:mm";
var ChatMessages = function ChatMessages(_ref) {
  var _data$pages$0$items$l, _data$pages, _data$pages2;
  var name = _ref.name,
    userId = _ref.userId,
    conversationId = _ref.conversationId,
    isGroup = _ref.isGroup,
    members = _ref.members,
    imageUrl = _ref.imageUrl,
    apiUrl = _ref.apiUrl,
    socketUrl = _ref.socketUrl;
  var queryKey = "chat:".concat(conversationId);
  var addKey = "chat:".concat(conversationId, ":messages");
  var chatRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var bottomRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var messagesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useChatQuery = (0,_hooks_useChatQuery__WEBPACK_IMPORTED_MODULE_1__.useChatQuery)({
      queryKey: queryKey,
      apiUrl: apiUrl,
      paramValue: conversationId
    }),
    data = _useChatQuery.data,
    fetchNextPage = _useChatQuery.fetchNextPage,
    hasNextPage = _useChatQuery.hasNextPage,
    isFetchingNextPage = _useChatQuery.isFetchingNextPage,
    status = _useChatQuery.status;
  (0,_hooks_useChatSocket__WEBPACK_IMPORTED_MODULE_3__.useChatSocket)({
    queryKey: queryKey,
    addKey: addKey
  });
  (0,_hooks_useChatScroll__WEBPACK_IMPORTED_MODULE_4__.useChatScroll)({
    chatRef: chatRef,
    bottomRef: bottomRef,
    loadMore: fetchNextPage,
    shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
    count: (_data$pages$0$items$l = data === null || data === void 0 || (_data$pages = data.pages) === null || _data$pages === void 0 || (_data$pages = _data$pages[0]) === null || _data$pages === void 0 || (_data$pages = _data$pages.items) === null || _data$pages === void 0 ? void 0 : _data$pages.length) !== null && _data$pages$0$items$l !== void 0 ? _data$pages$0$items$l : 0
  });

  // @ts-ignore
  if (status === "pending") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex flex-col flex-1 justify-center items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "h-10 w-10 text-primary-600 animate-spin"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-sm",
        children: "Loading messages..."
      })]
    });
  }
  if (status === "error") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex flex-col flex-1 justify-center items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "h-10 w-10 text-primary-600"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-sm",
        children: "Something went wrong!"
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    ref: chatRef,
    className: "flex flex-1 flex-col p-6 w-full overflow-scroll",
    children: [!hasNextPage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex flex-col items-center mt-auto",
      children: isGroup ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_group_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          members: members,
          size: "large"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          className: "mb-12 mt-6 font-semibold text-background-500 ",
          children: ["This is the start of the conversation in the group ", name]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          className: "rounded-lg",
          src: imageUrl,
          alt: "Avatar",
          width: "64",
          height: "64"
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          className: "mb-12 mt-6 font-semibold text-background-500 ",
          children: ["This is the start of the conversation with @", name]
        })]
      })
    }), hasNextPage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex justify-center",
      children: isFetchingNextPage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "h-32 w-8 text-primary-600 animate-spin"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        onClick: function onClick() {
          return fetchNextPage();
        },
        className: "text-xs text-background-600",
        children: "Load previous messages"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ref: messagesRef,
      className: "flex flex-col-reverse mt-auto",
      children: data === null || data === void 0 || (_data$pages2 = data.pages) === null || _data$pages2 === void 0 ? void 0 : _data$pages2.map(function (group, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: group.items.map(function (message) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chat_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
              id: message.id,
              userId: userId,
              member: message.member,
              content: message.content,
              fileUrl: message.fileUrl,
              timestamp: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(new Date(message.createdAt), DATE_FORMAT),
              socketUrl: socketUrl
            }, message.id);
          })
        }, i);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ref: bottomRef
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatMessages);

/***/ }),

/***/ 188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversationBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(233);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(234);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(235);
/* harmony import */ var _ui_separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(189);
/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150);
/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(180);
/* harmony import */ var _ui_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(191);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(164);
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(160);
/* harmony import */ var _user_item_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(194);
/* harmony import */ var _hooks_useConversations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(174);
/* harmony import */ var _conversation_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(195);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(166);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(161);
/* harmony import */ var _lib_zod_schemas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(168);
/* harmony import */ var _hooks_useConversationsSocket__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(232);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



















function ConversationBar(_ref) {
  var children = _ref.children,
    friends = _ref.friends,
    loadingFriends = _ref.loadingFriends;
  var _useConversations = (0,_hooks_useConversations__WEBPACK_IMPORTED_MODULE_9__.useConversations)(),
    conversations = _useConversations.conversations,
    setConversations = _useConversations.setConversations,
    loadingConversations = _useConversations.loadingConversations,
    refreshConversations = _useConversations.refreshConversations;
  (0,_hooks_useConversationsSocket__WEBPACK_IMPORTED_MODULE_13__.useConversationsSocket)({
    conversations: conversations,
    setConversations: setConversations
  });
  var createInvite = (0,_hooks_useConversations__WEBPACK_IMPORTED_MODULE_9__.useCreatePrivateConv)(refreshConversations);
  var createGroup = (0,_hooks_useConversations__WEBPACK_IMPORTED_MODULE_9__.useCreateGroup)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dialogOpen = _useState4[0],
    setDialogOpen = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    friendName = _useState6[0],
    setFriendName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      id: "",
      username: "",
      imageUrl: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    userData = _useState8[0],
    setUserData = _useState8[1];
  var groupForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_15__.useForm)({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_11__.zodResolver)(_lib_zod_schemas__WEBPACK_IMPORTED_MODULE_12__.groupCreationSchema),
    defaultValues: {
      name: "",
      userIds: []
    }
  });
  function onSubmit(values) {
    createGroup(values.name, values.userIds, setDialogOpen);
    refreshConversations();
  }
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isMounted = _useState10[0],
    setIsMounted = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var item = localStorage.getItem("userData");
    if (item) {
      var obj = JSON.parse(item);
      setUserData(obj);
    }
    setIsMounted(true);
  }, []);
  var changeInputState = function changeInputState() {
    if (opened) {
      setOpened(false);
      setFriendName("");
    } else {
      setOpened(true);
    }
  };
  var filteredFriends = friends.filter(function (item) {
    var _item$user;
    return item === null || item === void 0 || (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.username.includes(friendName);
  });
  if (!isMounted) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: "flex h-full overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "min-w-80 p-8 bg-background-900",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h1", {
          className: "text-2xl font-medium",
          children: "Chat"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "flex gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
            open: dialogOpen,
            onOpenChange: setDialogOpen,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogTrigger, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
                size: "36",
                className: "pl-[6px] pr-[2px] hover:bg-background-700 bg-background-800 text-background-400 rounded-lg"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogHeader, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, {
                  children: "Create group"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.Form, _objectSpread(_objectSpread({}, groupForm), {}, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("form", {
                  onSubmit: groupForm.handleSubmit(onSubmit),
                  className: "space-y-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormField, {
                    control: groupForm.control,
                    name: "name",
                    render: function render(_ref2) {
                      var field = _ref2.field;
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormItem, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
                          children: "Group name"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, _objectSpread({}, field))
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormMessage, {})]
                      });
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormField, {
                    control: groupForm.control,
                    name: "userIds",
                    render: function render() {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormItem, {
                        className: "space-y-0",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
                          children: "Invite users to the group"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                          className: "w-72 max-h-48 overflow-scroll",
                          children: friends.map(function (item) {
                            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormField, {
                              control: groupForm.control,
                              name: "userIds",
                              render: function render(_ref3) {
                                var _field$value, _item$user2, _item$user3, _item$user4;
                                var field = _ref3.field;
                                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormItem, {
                                  className: "ml-2 w-64",
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
                                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                      className: "relative top-11 left-56",
                                      checked: (_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.includes(item.user.id),
                                      onCheckedChange: function onCheckedChange(checked) {
                                        var _field$value2;
                                        return checked ? field.onChange([].concat(_toConsumableArray(field.value), [item.user.id])) : field.onChange((_field$value2 = field.value) === null || _field$value2 === void 0 ? void 0 : _field$value2.filter(function (value) {
                                          return value !== item.user.id;
                                        }));
                                      }
                                    })
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
                                    className: "ml-4",
                                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_user_item_scroll__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                      id: (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.id,
                                      username: (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.username,
                                      imageUrl: (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.imageUrl,
                                      onSubmit: function onSubmit() {}
                                    }, item.id)
                                  })]
                                }, item.user.id);
                              }
                            }, item.user.id);
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_form__WEBPACK_IMPORTED_MODULE_7__.FormMessage, {})]
                      });
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                    type: "submit",
                    children: "Create"
                  })]
                })
              }))]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
              size: "36",
              className: "p-1 hover:bg-background-700 bg-background-800 text-background-400 rounded-lg",
              onClick: function onClick() {
                return changeInputState();
              }
            })
          })]
        })]
      }), opened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
          className: "z-10",
          placeholder: "Search",
          onChange: function onChange(e) {
            return setFriendName(e.target.value);
          },
          value: friendName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "relative top-1 flex flex-col gap-1 bg-background-950 p-2 max-h-48 rounded-b-md overflow-y-scroll",
          children: [loadingFriends && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
            className: "mt-6 w-50 h-12"
          }), filteredFriends.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
            className: "text-center text-background-200 text-sm font-medium",
            children: "No friends found"
          }) : filteredFriends.map(function (e) {
            var _e$user, _e$user2, _e$user3;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_user_item_scroll__WEBPACK_IMPORTED_MODULE_8__["default"], {
              id: (_e$user = e.user) === null || _e$user === void 0 ? void 0 : _e$user.id,
              username: (_e$user2 = e.user) === null || _e$user2 === void 0 ? void 0 : _e$user2.username,
              imageUrl: (_e$user3 = e.user) === null || _e$user3 === void 0 ? void 0 : _e$user3.imageUrl,
              onSubmit: createInvite
            }, e.id);
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_separator__WEBPACK_IMPORTED_MODULE_1__.Separator, {
        className: "mt-5"
      }), !loadingConversations && conversations.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "flex flex-col items-center justify-center h-full text-background-500 text-sm font-medium",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
          size: "36"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
          className: "text-center",
          children: "No conversations started"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "mt-6 flex flex-col gap-3",
        children: conversations.map(function (e) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_conversation_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: e.id,
            name: e.name,
            isGroup: e.isGroup,
            memberId: userData === null || userData === void 0 ? void 0 : userData.id,
            members: e.members,
            lastMessage: e === null || e === void 0 ? void 0 : e.messages[0]
          }, e.id);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "flex-auto",
      children: children
    })]
  });
}

/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(197);
/* harmony import */ var _ui_group_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _user_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);





var DATE_FORMAT = "d MMM yyyy, HH:mm";
var createInfoText = function createInfoText(memberId, lastMessage) {
  if (!lastMessage) {
    return "Start a conversation!";
  }
  var info = lastMessage.member.id === memberId ? "You" : lastMessage.member.username;
  info += " - ".concat(lastMessage.content);
  if (info.length > 31) {
    info = "".concat(info.slice(0, 28), "...\n");
  }
  return info;
};
var ConversationItem = function ConversationItem(_ref) {
  var _otherUsers$, _otherUsers$2, _otherUsers$3;
  var id = _ref.id,
    name = _ref.name,
    isGroup = _ref.isGroup,
    memberId = _ref.memberId,
    members = _ref.members,
    lastMessage = _ref.lastMessage;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var info = createInfoText(memberId, lastMessage);
  var otherUsers = members.filter(function (member) {
    return member.id !== memberId;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "cursor-pointer flex items-center justify-between bg-background-800 hover:bg-background-700 rounded-md px-4 py-2",
    onClick: function onClick() {
      return navigate("/conversations/".concat(id));
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center gap-4",
      children: [isGroup ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_group_icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
        members: members,
        size: "small"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_user_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        imageUrl: (_otherUsers$ = otherUsers[0]) === null || _otherUsers$ === void 0 ? void 0 : _otherUsers$.imageUrl,
        status: (_otherUsers$2 = otherUsers[0]) === null || _otherUsers$2 === void 0 ? void 0 : _otherUsers$2.status,
        size: "small"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "pb-1 font-semibold",
        children: [name ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-background-50 text-sm",
          children: name
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-background-50 text-sm",
          children: (_otherUsers$3 = otherUsers[0]) === null || _otherUsers$3 === void 0 ? void 0 : _otherUsers$3.username
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "text-xs text-background-500",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "text-[12px]",
            children: info
          }), lastMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-background-600 text-[10px]",
            children: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(lastMessage.createdAt), DATE_FORMAT)
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationItem);

/***/ }),

/***/ 237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(243);
/* harmony import */ var _emoji_mart_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/* harmony import */ var _emoji_mart_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(240);
/* harmony import */ var _ui_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(241);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);





var EmojiPicker = function EmojiPicker(_ref) {
  var onChange = _ref.onChange;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_ui_popover__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "24"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverContent, {
      side: "top",
      sideOffset: 40,
      className: "bg-transparent border-none shadow-none drop-shadow-none -mb-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_emoji_mart_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
        data: _emoji_mart_data__WEBPACK_IMPORTED_MODULE_4__,
        perLine: "8",
        previewPosition: "none",
        onEmojiSelect: function onEmojiSelect(emoji) {
          return onChange(emoji["native"]);
        }
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiPicker);

/***/ }),

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

var UserItemScroll = function UserItemScroll(_ref) {
  var id = _ref.id,
    username = _ref.username,
    imageUrl = _ref.imageUrl,
    onSubmit = _ref.onSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "flex items-center justify-between bg-background-800 hover:bg-background-700 rounded-md p-3",
    onClick: function onClick() {
      return onSubmit(id);
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        className: "rounded-lg",
        src: imageUrl,
        alt: "Avatar",
        width: "32",
        height: "32"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "text-background-50 text-sm",
        children: username
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserItemScroll);

/***/ }),

/***/ 191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(137);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }





var Checkbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root, _objectSpread(_objectSpread({
    ref: ref,
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-neutral-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-primary-500 dark:border-neutral-800  dark:ring-offset-neutral-950 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:bg-primary-500 dark:data-[state=checked]:text-background-50", className)
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Indicator, {
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex items-center justify-center text-current"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "h-4 w-4"
      })
    })
  }));
});
Checkbox.displayName = _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;


/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


var GroupIcon = function GroupIcon(_ref) {
  var members = _ref.members,
    size = _ref.size;
  var imageSize = size === "small" ? 26 : 48;
  if (members.length === 1) {
    var iconSize = size === "small" ? 32 : 64;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("w-[64px]", size === "small" && "w-[32px]"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("rounded-lg border border-background-700"),
        src: members[0].imageUrl,
        alt: "Avatar",
        width: iconSize,
        height: iconSize
      })
    });
  }
  if (members.length < 3) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("w-[64px]", size === "small" && "w-[32px]"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("rounded-lg border border-background-700 relative top-2 left-[12px]", size === "small" && "top-1 left-[6px]"),
        src: members[0].imageUrl,
        alt: "Avatar",
        width: imageSize,
        height: imageSize
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("rounded-lg border border-background-700 relative bottom-2 right-[12px]", size === "small" && "bottom-1 right-[6px]"),
        src: members[1].imageUrl,
        alt: "Avatar",
        width: imageSize,
        height: imageSize
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("w-[64px]", size === "small" && "w-[32px] h-[56px]"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("rounded-lg border border-background-700 relative top-2 left-[12px]", size === "small" && "top-1 left-[6px]"),
      src: members[0].imageUrl,
      alt: "Avatar",
      width: imageSize,
      height: imageSize
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("rounded-lg border border-background-700 relative bottom-2 right-[12px]", size === "small" && "bottom-1 right-[6px]"),
      src: members[1].imageUrl,
      alt: "Avatar",
      width: imageSize,
      height: imageSize
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.cn)("text-sm relative w-8 text-center -top-[38px] left-[38px] rounded-lg border-2 border-dashed border-background-200 text-background-200 font-semibold", size === "small" && "w-5 text-xs -top-[22px] left-[18px]"),
      children: ["+", members.length - 2]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupIcon);

/***/ }),

/***/ 241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popover: () => (/* binding */ Popover),
/* harmony export */   PopoverContent: () => (/* binding */ PopoverContent),
/* harmony export */   PopoverTrigger: () => (/* binding */ PopoverTrigger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(242);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "align", "sideOffset"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




var Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Root;
var PopoverTrigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Trigger;
var PopoverContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "center" : _ref$align,
    _ref$sideOffset = _ref.sideOffset,
    sideOffset = _ref$sideOffset === void 0 ? 4 : _ref$sideOffset,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Portal, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Content, _objectSpread({
      ref: ref,
      align: align,
      sideOffset: sideOffset,
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("z-50 w-74 rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ", className)
    }, props))
  });
});
PopoverContent.displayName = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;


/***/ }),

/***/ 189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(190);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "orientation", "decorative"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




var Separator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
    _ref$decorative = _ref.decorative,
    decorative = _ref$decorative === void 0 ? true : _ref$decorative,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root, _objectSpread({
    ref: ref,
    decorative: decorative,
    orientation: orientation,
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("shrink-0 bg-background-700", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)
  }, props));
});
Separator.displayName = _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;


/***/ }),

/***/ 246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useChatQuery: () => (/* binding */ useChatQuery)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(252);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var useChatQuery = function useChatQuery(_ref) {
  var queryKey = _ref.queryKey,
    apiUrl = _ref.apiUrl,
    paramValue = _ref.paramValue;
  var fetchMessages = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref2) {
      var _ref2$pageParam, pageParam, url, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref2$pageParam = _ref2.pageParam, pageParam = _ref2$pageParam === void 0 ? undefined : _ref2$pageParam;
            url = query_string__WEBPACK_IMPORTED_MODULE_0__["default"].stringifyUrl({
              url: apiUrl,
              query: {
                cursor: pageParam,
                conversationId: paramValue
              }
            }, {
              skipNull: true
            });
            _context.next = 4;
            return fetch(url);
          case 4:
            res = _context.sent;
            return _context.abrupt("return", res.json());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchMessages(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var _useInfiniteQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery)({
      queryKey: [queryKey],
      queryFn: fetchMessages,
      getNextPageParam: function getNextPageParam(lastPage) {
        return lastPage === null || lastPage === void 0 ? void 0 : lastPage.nextCursor;
      },
      refetchInterval: false,
      initialPageParam: undefined
    }),
    data = _useInfiniteQuery.data,
    fetchNextPage = _useInfiniteQuery.fetchNextPage,
    hasNextPage = _useInfiniteQuery.hasNextPage,
    isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
    status = _useInfiniteQuery.status;
  return {
    data: data,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
    status: status
  };
};

/***/ }),

/***/ 263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useChatScroll: () => (/* binding */ useChatScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var useChatScroll = function useChatScroll(_ref) {
  var chatRef = _ref.chatRef,
    bottomRef = _ref.bottomRef,
    shouldLoadMore = _ref.shouldLoadMore,
    loadMore = _ref.loadMore,
    count = _ref.count;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasInitialized = _useState2[0],
    setHasInitialized = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var topDiv = chatRef === null || chatRef === void 0 ? void 0 : chatRef.current;
    var handleScroll = function handleScroll() {
      var scrollTop = topDiv === null || topDiv === void 0 ? void 0 : topDiv.scrollTop;
      if (scrollTop === 0 && shouldLoadMore) {
        loadMore();
      }
    };
    topDiv === null || topDiv === void 0 || topDiv.addEventListener("scroll", handleScroll);
    return function () {
      topDiv === null || topDiv === void 0 || topDiv.removeEventListener("scroll", handleScroll);
    };
  }, [shouldLoadMore, loadMore, chatRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var bottomDiv = bottomRef === null || bottomRef === void 0 ? void 0 : bottomRef.current;
    var topDiv = chatRef.current;
    var shouldAutoScroll = function shouldAutoScroll() {
      if (!hasInitialized && bottomDiv) {
        setHasInitialized(true);
        return true;
      }
      if (!topDiv) {
        return false;
      }
      var distanceFromBottom = topDiv.scrollHeight - topDiv.scrollTop - topDiv.clientHeight;
      return distanceFromBottom <= 100;
    };
    if (shouldAutoScroll()) {
      setTimeout(function () {
        var _bottomRef$current;
        (_bottomRef$current = bottomRef.current) === null || _bottomRef$current === void 0 || _bottomRef$current.scrollIntoView();
      }, 100);
    }
  }, [bottomRef, chatRef, count, hasInitialized]);
};

/***/ }),

/***/ 262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useChatSocket: () => (/* binding */ useChatSocket)
/* harmony export */ });
/* harmony import */ var _components_providers_socket_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var useChatSocket = function useChatSocket(_ref) {
  var addKey = _ref.addKey,
    queryKey = _ref.queryKey;
  var _useSocket = (0,_components_providers_socket_provider__WEBPACK_IMPORTED_MODULE_0__.useSocket)(),
    socket = _useSocket.socket;
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!socket) {
      return;
    }
    socket.on(addKey, function (message) {
      queryClient.setQueryData([queryKey], function (oldData) {
        if (!oldData || !oldData.pages || oldData.pages.length === 0) {
          return {
            pages: [{
              items: [message]
            }]
          };
        }
        var newData = _toConsumableArray(oldData.pages);
        newData[0] = _objectSpread(_objectSpread({}, newData[0]), {}, {
          items: [message].concat(_toConsumableArray(newData[0].items))
        });
        return _objectSpread(_objectSpread({}, oldData), {}, {
          pages: newData
        });
      });
    });
    return function () {
      socket.off(addKey);
    };
  }, [queryClient, addKey, queryKey, socket]);
};

/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useConversationsSocket: () => (/* binding */ useConversationsSocket)
/* harmony export */ });
/* harmony import */ var _components_providers_socket_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var useConversationsSocket = function useConversationsSocket(_ref) {
  var conversations = _ref.conversations,
    setConversations = _ref.setConversations;
  var _useSocket = (0,_components_providers_socket_provider__WEBPACK_IMPORTED_MODULE_0__.useSocket)(),
    socket = _useSocket.socket;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      id: "",
      username: "",
      imageUrl: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    userData = _useState2[0],
    setUserData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!socket) {
      return;
    }
    var item = localStorage.getItem("userData");
    if (item) {
      var obj = JSON.parse(item);
      setUserData(obj);
    }
    var messageAddKey = "user:".concat(userData.id, ":message:add");
    socket.on(messageAddKey, function (message) {
      if (message) {
        var newConversations = conversations.map(function (c) {
          if (c.id === message.conversationId) {
            c.messages.unshift({
              id: message.id,
              content: message.content,
              fileUrl: message.fileUrl,
              createdAt: message.createdAt,
              member: message.member
            });
          }
          return c;
        });
        newConversations.sort(function (a, b) {
          if (a.messages.length === 0) {
            return -1;
          }
          if (b.messages.length === 0) {
            return 1;
          }
          return new Date(b.messages[0].createdAt).getTime() - new Date(a.messages[0].createdAt).getTime();
        });
        setConversations(newConversations);
      }
    });
    return function () {
      socket.off(messageAddKey);
    };
  }, [socket, conversations, setConversations, userData.id]);
};

/***/ }),

/***/ 187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(266);
/* harmony import */ var _components_element_conversation_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(188);
/* harmony import */ var _components_element_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10);
/* harmony import */ var _components_element_chat_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(236);
/* harmony import */ var _components_element_chat_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(245);
/* harmony import */ var _hooks_useConversations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(174);
/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(180);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(264);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(267);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(137);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(268);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(234);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(233);
/* harmony import */ var _components_ui_group_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(196);
/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(189);
/* harmony import */ var _hooks_useFriends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(155);
/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(150);
/* harmony import */ var _components_element_user_item_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(194);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


















var Conversations = function Conversations() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useParams)(),
    id = _useParams.id;
  var _useFriends = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_9__.useFriends)(),
    friends = _useFriends.friends,
    loadingFriends = _useFriends.loadingFriends;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    friendName = _useState2[0],
    setFriendName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    groupName = _useState4[0],
    setGroupName = _useState4[1];
  var _useConversation = (0,_hooks_useConversations__WEBPACK_IMPORTED_MODULE_5__.useConversation)(id || ""),
    conversation = _useConversation.conversation,
    loadingConversation = _useConversation.loadingConversation;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    opened = _useState6[0],
    setOpened = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    dialogOpen = _useState8[0],
    setDialogOpen = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    changeNameOpen = _useState10[0],
    setChangeNameOpen = _useState10[1];
  var addToGroup = (0,_hooks_useConversations__WEBPACK_IMPORTED_MODULE_5__.useAddToGroup)();
  var updateName = (0,_hooks_useConversations__WEBPACK_IMPORTED_MODULE_5__.useChangeName)();
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      id: "",
      username: "",
      imageUrl: ""
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    userData = _useState12[0],
    setUserData = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _conversation$name;
    var item = localStorage.getItem("userData");
    if (item) {
      var obj = JSON.parse(item);
      setUserData(obj);
    }
    setGroupName((_conversation$name = conversation === null || conversation === void 0 ? void 0 : conversation.name) !== null && _conversation$name !== void 0 ? _conversation$name : "");
  }, [conversation]);
  if (!id) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_element_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_element_conversation_bar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        friends: friends,
        loadingFriends: loadingFriends,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "flex flex-col h-full items-center justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
            size: "64",
            className: "text-background-500"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "text-background-500 font-bold",
            children: "No conversations opened"
          })]
        })
      })
    });
  }
  var name = "";
  var imageUrl = "";
  if (!loadingConversation) {
    var otherUsers = conversation === null || conversation === void 0 ? void 0 : conversation.members.filter(function (member) {
      return member.id !== userData.id;
    });
    if ((otherUsers === null || otherUsers === void 0 ? void 0 : otherUsers.length) > 1) {
      name = conversation !== null && conversation !== void 0 && conversation.name ? conversation === null || conversation === void 0 ? void 0 : conversation.name : otherUsers[0].username;
      imageUrl = otherUsers[0].imageUrl;
    } else {
      name = conversation !== null && conversation !== void 0 && conversation.name ? conversation === null || conversation === void 0 ? void 0 : conversation.name : conversation === null || conversation === void 0 ? void 0 : conversation.members[0].username;
      imageUrl = conversation === null || conversation === void 0 ? void 0 : conversation.members[0].imageUrl;
    }
  }
  var filteredFriends = friends.filter(function (item) {
    var names = conversation === null || conversation === void 0 ? void 0 : conversation.members.map(function (m) {
      return m.username;
    });
    return item.user.username.includes(friendName) && !(names !== null && names !== void 0 && names.includes(item.user.username));
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_element_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_element_conversation_bar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      friends: friends,
      loadingFriends: loadingFriends,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "flex h-full flex-col gap-2 items-center bg-background-950",
        children: loadingConversation ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "flex flex-col flex-1 justify-center items-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
            className: "h-10 w-10 text-primary-600 animate-spin"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "flex items-center justify-between px-6 w-full h-16 border-b-2 border-background-900",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "flex gap-5 items-center",
              children: [conversation !== null && conversation !== void 0 && conversation.isGroup ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_group_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                members: conversation === null || conversation === void 0 ? void 0 : conversation.members,
                size: "small"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
                className: "rounded-lg",
                src: imageUrl,
                alt: "Avatar",
                width: "32",
                height: "32"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: "text-background-100 text-large font-semibold",
                children: name
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "flex gap-2 items-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
                open: dialogOpen,
                onOpenChange: setDialogOpen,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogTrigger, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    size: "32",
                    className: "p-1 hover:bg-background-800 text-primary-500 rounded-lg"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogHeader, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogTitle, {
                      className: "mb-6",
                      children: "Information about this chat"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                        className: "flex flex-col gap-2 items-center",
                        children: [conversation !== null && conversation !== void 0 && conversation.isGroup ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_group_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                          members: conversation === null || conversation === void 0 ? void 0 : conversation.members,
                          size: "large"
                        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
                          className: "rounded-lg",
                          src: imageUrl,
                          alt: "Avatar",
                          width: "48",
                          height: "48"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                          className: "flex gap-2",
                          children: changeNameOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__.Input, {
                              className: "h-8 text-[24px]",
                              onChange: function onChange(e) {
                                return setGroupName(e.target.value);
                              },
                              value: groupName
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
                              size: "32",
                              className: "p-1 hover:bg-background-700 text-success rounded-lg",
                              onClick: function onClick() {
                                if (groupName) {
                                  updateName(id, groupName, setDialogOpen);
                                }
                              }
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"], {
                              size: "32",
                              className: "p-1 hover:bg-background-700 text-error rounded-lg",
                              onClick: function onClick() {
                                return setChangeNameOpen(false);
                              }
                            })]
                          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                              className: "text-background-50 text-[24px] font-semibold",
                              children: name
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_20__["default"], {
                              size: "32",
                              className: "p-1 hover:bg-background-700 text-background-400 rounded-lg",
                              onClick: function onClick() {
                                return setChangeNameOpen(true);
                              }
                            })]
                          })
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_8__.Separator, {
                        className: "my-4"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                        className: "text-background-100 mb-2",
                        children: "Members"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                        className: "flex flex-col gap-[1px]",
                        children: conversation === null || conversation === void 0 ? void 0 : conversation.members.map(function (m) {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                            className: "flex items-center gap-4 p-2 hover:bg-background-800 rounded-md",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
                              className: "rounded-lg",
                              src: m.imageUrl,
                              alt: "Avatar",
                              width: "32",
                              height: "32"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
                              className: "text-background-200",
                              children: m.username
                            })]
                          }, m.id);
                        })
                      }), (conversation === null || conversation === void 0 ? void 0 : conversation.isGroup) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("button", {
                          className: "flex gap-2 items-center justify-center hover:bg-background-800 py-2 pr-[12px] rounded-lg",
                          onClick: function onClick() {
                            return setOpened(!opened);
                          },
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_21__["default"], {
                            size: "36",
                            className: "pl-[6px] pr-[2px]"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                            className: "font-semibold mt-2",
                            children: "Invite new members"
                          })]
                        }), opened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                          className: "mt-4",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__.Input, {
                            className: "z-10",
                            placeholder: "Search",
                            onChange: function onChange(e) {
                              return setFriendName(e.target.value);
                            },
                            value: friendName
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                            className: "relative top-1 flex flex-col gap-1 bg-background-950 p-2 max-h-48 rounded-b-md overflow-y-scroll",
                            children: [loadingFriends && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_10__.Skeleton, {
                              className: "mt-6 w-50 h-12"
                            }), filteredFriends.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                              className: "text-center text-background-200 text-sm font-medium",
                              children: "No friends available"
                            }) : filteredFriends.map(function (e) {
                              var _e$user, _e$user2, _e$user3;
                              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_element_user_item_scroll__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                id: (_e$user = e.user) === null || _e$user === void 0 ? void 0 : _e$user.id,
                                username: (_e$user2 = e.user) === null || _e$user2 === void 0 ? void 0 : _e$user2.username,
                                imageUrl: (_e$user3 = e.user) === null || _e$user3 === void 0 ? void 0 : _e$user3.imageUrl,
                                onSubmit: function onSubmit(userId) {
                                  return addToGroup(id, [userId], setDialogOpen);
                                }
                              }, e.id);
                            })]
                          })]
                        })]
                      })]
                    })]
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_element_chat_messages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: name,
            userId: userData.id,
            conversationId: id,
            isGroup: conversation === null || conversation === void 0 ? void 0 : conversation.isGroup,
            members: conversation === null || conversation === void 0 ? void 0 : conversation.members,
            apiUrl: "/api/messages",
            socketUrl: "/api/socket/messages",
            imageUrl: imageUrl
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_element_chat_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            name: name,
            conversationID: id
          })]
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Conversations);

/***/ })

}]);