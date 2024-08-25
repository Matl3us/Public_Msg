"use strict";
(self["webpackChunkmsg_app_client"] = self["webpackChunkmsg_app_client"] || []).push([[3],{

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(153);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(154);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(137);
/* harmony import */ var _user_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);





var UserItem = function UserItem(_ref) {
  var id = _ref.id,
    username = _ref.username,
    imageUrl = _ref.imageUrl,
    status = _ref.status,
    type = _ref.type,
    onSubmit = _ref.onSubmit,
    onDelete = _ref.onDelete;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex items-center justify-between bg-background-800 hover:bg-background-700 rounded-md p-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_user_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        imageUrl: imageUrl,
        status: status,
        size: "medium"
      }), type === "notification" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "text-background-50 text-base font-semibold",
        children: [username, " has sent you a friend request"]
      }), type !== "notification" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-background-50",
        children: username
      })]
    }), type === "notification" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        className: "p-[1px] hover:bg-background-800 rounded-md",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "text-success",
          onClick: function onClick() {
            return onSubmit(id);
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        className: "p-[1px] hover:bg-background-800 rounded-md",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "text-error",
          onClick: function onClick() {
            return onDelete(id);
          }
        })
      })]
    }), type === "invitation" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: "p-[1px] hover:bg-background-800 rounded-md",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "24",
        className: "text-error",
        onClick: function onClick() {
          return onDelete(id);
        }
      })
    }), type === "friend" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuTrigger, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex items-center py-1 hover:bg-background-800 rounded-md",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            size: "24",
            className: "text-primary-700"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuContent, {
        className: "text-center data-[state=open]:bg-background-900",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuLabel, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: function onClick() {
              return onSubmit(id);
            },
            children: "Send message"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuLabel, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "text-error",
            onClick: function onClick() {
              return onDelete(id);
            },
            children: "Delete friend"
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserItem);

/***/ }),

/***/ 157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNotificationSocket: () => (/* binding */ useNotificationSocket)
/* harmony export */ });
/* harmony import */ var _components_providers_socket_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var useNotificationSocket = function useNotificationSocket(_ref) {
  var invites = _ref.invites,
    setInvites = _ref.setInvites;
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
    var notificationAddKey = "user:".concat(userData.id, ":notification:add");
    var notificationRemoveKey = "user:".concat(userData.id, ":notification:remove");
    socket.on(notificationAddKey, function (notification) {
      if (notification) {
        setInvites(invites.concat(notification));
      }
    });
    socket.on(notificationRemoveKey, function (notificationId) {
      if (notificationId) {
        setInvites(invites.filter(function (i) {
          return i.id != notificationId;
        }));
      }
    });
    return function () {
      socket.off(notificationAddKey, notificationRemoveKey);
    };
  }, [socket, setInvites, invites, userData.id]);
};

/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_element_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150);
/* harmony import */ var _components_element_user_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(151);
/* harmony import */ var _hooks_useFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(155);
/* harmony import */ var _hooks_useNotificationSocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(157);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);







var Home = function Home() {
  var _useInvitesReceived = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_4__.useInvitesReceived)(),
    invites = _useInvitesReceived.invites,
    setInvites = _useInvitesReceived.setInvites,
    loadingInvites = _useInvitesReceived.loadingInvites,
    refreshInvites = _useInvitesReceived.refreshInvites;
  (0,_hooks_useNotificationSocket__WEBPACK_IMPORTED_MODULE_5__.useNotificationSocket)({
    invites: invites,
    setInvites: setInvites
  });
  var acceptInvite = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_4__.useAcceptInvite)(refreshInvites);
  var rejectInvite = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_4__.useRejectInvite)(refreshInvites);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_element_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "w-[650px] mx-auto mt-12 p-12 rounded-lg bg-background-900",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-xl font-medium mb-4",
        children: "Notifications"
      }), loadingInvites && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        className: "w-50 h-16"
      }), !loadingInvites && invites.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "mt-6 text-center text-background-500 text-sm font-medium",
        children: "No notifications received."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: invites.map(function (e) {
          var _e$sender, _e$sender2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_element_user_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: e.id,
            username: (_e$sender = e.sender) === null || _e$sender === void 0 ? void 0 : _e$sender.username,
            imageUrl: (_e$sender2 = e.sender) === null || _e$sender2 === void 0 ? void 0 : _e$sender2.imageUrl,
            status: "ONLINE",
            type: "notification",
            onSubmit: acceptInvite,
            onDelete: rejectInvite
          }, e.id);
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EllipsisVertical)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const EllipsisVertical = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);


//# sourceMappingURL=ellipsis-vertical.js.map


/***/ })

}]);