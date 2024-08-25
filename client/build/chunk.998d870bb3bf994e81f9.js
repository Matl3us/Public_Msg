"use strict";
(self["webpackChunkmsg_app_client"] = self["webpackChunkmsg_app_client"] || []).push([[8],{

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   acceptReceivedInvite: () => (/* binding */ acceptReceivedInvite),
/* harmony export */   addUsersToGroup: () => (/* binding */ addUsersToGroup),
/* harmony export */   createGroupConversation: () => (/* binding */ createGroupConversation),
/* harmony export */   createMessage: () => (/* binding */ createMessage),
/* harmony export */   createPrivateConversation: () => (/* binding */ createPrivateConversation),
/* harmony export */   deleteFriendReq: () => (/* binding */ deleteFriendReq),
/* harmony export */   deleteReceivedInvite: () => (/* binding */ deleteReceivedInvite),
/* harmony export */   deleteSentInvite: () => (/* binding */ deleteSentInvite),
/* harmony export */   fetchConversation: () => (/* binding */ fetchConversation),
/* harmony export */   fetchConversations: () => (/* binding */ fetchConversations),
/* harmony export */   fetchFriends: () => (/* binding */ fetchFriends),
/* harmony export */   fetchInvitesReceived: () => (/* binding */ fetchInvitesReceived),
/* harmony export */   fetchInvitesSent: () => (/* binding */ fetchInvitesSent),
/* harmony export */   fetchProfile: () => (/* binding */ fetchProfile),
/* harmony export */   fetchUserStatus: () => (/* binding */ fetchUserStatus),
/* harmony export */   postInvite: () => (/* binding */ postInvite),
/* harmony export */   updateGroupName: () => (/* binding */ updateGroupName),
/* harmony export */   updateProfileImage: () => (/* binding */ updateProfileImage),
/* harmony export */   updateUserStatus: () => (/* binding */ updateUserStatus)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var fetchProfile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("/api/profile", {
            method: "GET"
          });
        case 2:
          response = _context.sent;
          if (response.ok) {
            _context.next = 5;
            break;
          }
          throw new Error("Failed to fetch profile.");
        case 5:
          return _context.abrupt("return", response.json());
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchProfile() {
    return _ref.apply(this, arguments);
  };
}();
var fetchFriends = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("/api/friends/list", {
            method: "GET"
          });
        case 2:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 5;
            break;
          }
          throw new Error("Failed to fetch friends list.");
        case 5:
          return _context2.abrupt("return", response.json());
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchFriends() {
    return _ref2.apply(this, arguments);
  };
}();
var fetchInvitesSent = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("/api/friends/invites/created", {
            method: "GET"
          });
        case 2:
          response = _context3.sent;
          if (response.ok) {
            _context3.next = 5;
            break;
          }
          throw new Error("Failed to fetch sent invites.");
        case 5:
          return _context3.abrupt("return", response.json());
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function fetchInvitesSent() {
    return _ref3.apply(this, arguments);
  };
}();
var fetchInvitesReceived = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch("/api/friends/invites/received", {
            method: "GET"
          });
        case 2:
          response = _context4.sent;
          if (response.ok) {
            _context4.next = 5;
            break;
          }
          throw new Error("Failed to fetch received invites.");
        case 5:
          return _context4.abrupt("return", response.json());
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function fetchInvitesReceived() {
    return _ref4.apply(this, arguments);
  };
}();
var postInvite = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(values) {
    var friendCode;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          friendCode = values.friendCode;
          return _context5.abrupt("return", fetch("/api/socket/invites", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              friendCode: friendCode
            })
          }));
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function postInvite(_x) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteSentInvite = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", fetch("/api/socket/invites/cancel?" + new URLSearchParams({
            id: id
          }), {
            method: "PUT"
          }));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function deleteSentInvite(_x2) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteReceivedInvite = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", fetch("/api/socket/invites/reject?" + new URLSearchParams({
            id: id
          }), {
            method: "PUT"
          }));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteReceivedInvite(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
var acceptReceivedInvite = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", fetch("/api/socket/friends/add?" + new URLSearchParams({
            id: id
          }), {
            method: "PUT"
          }));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function acceptReceivedInvite(_x4) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteFriendReq = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", fetch("/api/socket/friends/remove?" + new URLSearchParams({
            id: id
          }), {
            method: "PUT"
          }));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function deleteFriendReq(_x5) {
    return _ref9.apply(this, arguments);
  };
}();
var fetchConversations = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return fetch("/api/conversations/all", {
            method: "GET"
          });
        case 2:
          response = _context10.sent;
          if (response.ok) {
            _context10.next = 5;
            break;
          }
          throw new Error("Failed to fetch conversations.");
        case 5:
          return _context10.abrupt("return", response.json());
        case 6:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function fetchConversations() {
    return _ref10.apply(this, arguments);
  };
}();
var fetchConversation = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return fetch("/api/conversations?" + new URLSearchParams({
            id: id
          }), {
            method: "GET"
          });
        case 2:
          response = _context11.sent;
          if (response.ok) {
            _context11.next = 5;
            break;
          }
          throw new Error("Failed to fetch conversations.");
        case 5:
          return _context11.abrupt("return", response.json());
        case 6:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function fetchConversation(_x6) {
    return _ref11.apply(this, arguments);
  };
}();
var createPrivateConversation = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", fetch("/api/conversations/private?" + new URLSearchParams({
            id: id
          }), {
            method: "POST"
          }));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function createPrivateConversation(_x7) {
    return _ref12.apply(this, arguments);
  };
}();
var createGroupConversation = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(name) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          return _context13.abrupt("return", fetch("/api/conversations/group", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: name
            })
          }));
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function createGroupConversation(_x8) {
    return _ref13.apply(this, arguments);
  };
}();
var addUsersToGroup = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(id, userIds) {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          return _context14.abrupt("return", fetch("/api/conversations/group", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              conversationId: id,
              userIds: userIds
            })
          }));
        case 1:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function addUsersToGroup(_x9, _x10) {
    return _ref14.apply(this, arguments);
  };
}();
var updateGroupName = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(conversationId, name) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          return _context15.abrupt("return", fetch("/api/conversations/group/name", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              conversationId: conversationId,
              name: name
            })
          }));
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function updateGroupName(_x11, _x12) {
    return _ref15.apply(this, arguments);
  };
}();
var createMessage = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(values, id) {
    var message, fileUrl;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          message = values.message, fileUrl = values.fileUrl;
          return _context16.abrupt("return", fetch("/api/socket/messages?" + new URLSearchParams({
            conversationId: id
          }), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              content: message,
              fileUrl: fileUrl
            })
          }));
        case 2:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function createMessage(_x13, _x14) {
    return _ref16.apply(this, arguments);
  };
}();
var updateProfileImage = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(imageUrl) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          return _context17.abrupt("return", fetch("/api/profile", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              imageUrl: imageUrl
            })
          }));
        case 1:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function updateProfileImage(_x15) {
    return _ref17.apply(this, arguments);
  };
}();
var updateUserStatus = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(status) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          return _context18.abrupt("return", fetch("/api/profile/status", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              status: status
            })
          }));
        case 1:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function updateUserStatus(_x16) {
    return _ref18.apply(this, arguments);
  };
}();
var fetchUserStatus = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
    var response;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return fetch("/api/profile/status", {
            method: "GET"
          });
        case 2:
          response = _context19.sent;
          if (response.ok) {
            _context19.next = 5;
            break;
          }
          throw new Error("Failed to fetch user status.");
        case 5:
          return _context19.abrupt("return", response.json());
        case 6:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function fetchUserStatus() {
    return _ref19.apply(this, arguments);
  };
}();

/***/ })

}]);