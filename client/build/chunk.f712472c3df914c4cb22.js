"use strict";
(self["webpackChunkmsg_app_client"] = self["webpackChunkmsg_app_client"] || []).push([[9],{

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

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFriendsSocket: () => (/* binding */ useFriendsSocket)
/* harmony export */ });
/* harmony import */ var _components_providers_socket_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var useFriendsSocket = function useFriendsSocket(_ref) {
  var friends = _ref.friends,
    setFriends = _ref.setFriends,
    invites = _ref.invites,
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
    var friendAddKey = "user:".concat(userData.id, ":friend:add");
    var friendRemoveKey = "user:".concat(userData.id, ":friend:remove");
    var inviteRemoveKey = "user:".concat(userData.id, ":invite:remove");
    socket.on(friendAddKey, function (friend) {
      if (friend) {
        setInvites(invites.filter(function (i) {
          return i.id != friend.id;
        }));
        setFriends(friends.concat(friend));
      }
    });
    socket.on(friendRemoveKey, function (friendId) {
      if (friendId) {
        setFriends(friends.filter(function (f) {
          return f.id != friendId;
        }));
      }
    });
    socket.on(inviteRemoveKey, function (inviteId) {
      if (inviteId) {
        setInvites(invites.filter(function (i) {
          return i.id != inviteId;
        }));
      }
    });
    return function () {
      socket.off(friendAddKey, friendRemoveKey, inviteRemoveKey);
    };
  }, [socket, setInvites, invites, setFriends, friends, userData.id]);
};

/***/ }),

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_element_user_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(151);
/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(160);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(178);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(176);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(177);
/* harmony import */ var _hooks_useFriends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(155);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(166);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(161);
/* harmony import */ var _lib_zod_schemas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(168);
/* harmony import */ var _hooks_useConversations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(174);
/* harmony import */ var _hooks_useFriendsSocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(175);
/* harmony import */ var _components_element_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

















var Friends = function Friends() {
  var _useFriends = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_5__.useFriends)(),
    friends = _useFriends.friends,
    setFriends = _useFriends.setFriends,
    loadingFriends = _useFriends.loadingFriends,
    refreshFriends = _useFriends.refreshFriends;
  var _useInvitesSent = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_5__.useInvitesSent)(),
    invites = _useInvitesSent.invites,
    setInvites = _useInvitesSent.setInvites,
    loadingInvites = _useInvitesSent.loadingInvites,
    refreshInvites = _useInvitesSent.refreshInvites;
  (0,_hooks_useFriendsSocket__WEBPACK_IMPORTED_MODULE_9__.useFriendsSocket)({
    friends: friends,
    setFriends: setFriends,
    invites: invites,
    setInvites: setInvites
  });
  var createInvite = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_5__.useCreateInvite)(refreshInvites);
  var cancelSentInvite = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_5__.useCancelSentInvite)(refreshInvites);
  var createConversation = (0,_hooks_useConversations__WEBPACK_IMPORTED_MODULE_8__.useCreatePrivateConv)();
  var deleteFriend = (0,_hooks_useFriends__WEBPACK_IMPORTED_MODULE_5__.useDeleteFriend)(refreshFriends);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  var changeInputState = function changeInputState() {
    if (opened) {
      form.reset();
      setOpened(false);
    } else {
      setOpened(true);
    }
  };
  var form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__.zodResolver)(_lib_zod_schemas__WEBPACK_IMPORTED_MODULE_7__.inviteSchema),
    defaultValues: {
      friendCode: ""
    }
  });
  function onSubmit(values) {
    form.reset();
    createInvite(values);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_element_navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "flex px-24 mt-12 gap-24 max-w-[1200px] mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "min-h-96 max-w-[800px] mx-auto w-96 p-12 rounded-lg bg-background-900",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            className: "text-2xl font-medium",
            children: "Friends"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
              size: "36",
              className: "p-1 hover:bg-background-800 text-primary-500 rounded-lg",
              onClick: function onClick() {
                return changeInputState();
              }
            })
          })]
        }), opened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.Form, _objectSpread(_objectSpread({}, form), {}, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
            onSubmit: form.handleSubmit(onSubmit),
            className: "flex mt-4 gap-1 mb-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormField, {
              control: form.control,
              name: "friendCode",
              render: function render(_ref) {
                var field = _ref.field;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormItem, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, _objectSpread({
                      placeholder: "Invite code"
                    }, field))
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormMessage, {
                    className: "absolute"
                  })]
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
              type: "submit",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                size: "38",
                className: "p-1 hover:bg-background-800 text-primary-500 rounded-lg"
              })
            })]
          })
        })), loadingFriends && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
          className: "mt-6 w-50 h-16"
        }), !loadingFriends && friends.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex flex-col gap-1 h-56 items-center justify-center text-background-500 text-sm font-medium",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            children: "Friend list empty."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            children: " Invite some people."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "mt-6 flex flex-col gap-3",
          children: friends.map(function (e) {
            var _e$user, _e$user2, _e$user3;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_element_user_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
              id: e.id,
              username: (_e$user = e.user) === null || _e$user === void 0 ? void 0 : _e$user.username,
              imageUrl: (_e$user2 = e.user) === null || _e$user2 === void 0 ? void 0 : _e$user2.imageUrl,
              status: (_e$user3 = e.user) === null || _e$user3 === void 0 ? void 0 : _e$user3.status,
              type: "friend",
              onSubmit: function onSubmit() {
                var _e$user4;
                createConversation((_e$user4 = e.user) === null || _e$user4 === void 0 ? void 0 : _e$user4.id);
              },
              onDelete: deleteFriend
            }, e.id);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "min-h-96 max-w-[800px] w-96 p-12 rounded-lg bg-background-900",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "text-2xl font-medium",
          children: "Invites"
        }), loadingInvites && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
          className: "mt-6 w-50 h-16"
        }), !loadingInvites && invites.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex flex-col gap-1 h-56 items-center justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
            size: "48",
            className: "text-background-700"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            className: "text-background-500 text-sm font-medium",
            children: "No invitations sent."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "mt-6 flex flex-col gap-3",
          children: invites.map(function (e) {
            var _e$receiver, _e$receiver2;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_element_user_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
              id: e.id,
              username: (_e$receiver = e.receiver) === null || _e$receiver === void 0 ? void 0 : _e$receiver.username,
              imageUrl: (_e$receiver2 = e.receiver) === null || _e$receiver2 === void 0 ? void 0 : _e$receiver2.imageUrl,
              status: "ONLINE",
              type: "invitation",
              onSubmit: function onSubmit() {},
              onDelete: cancelSentInvite
            }, e.id);
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Friends);

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


/***/ }),

/***/ 177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MailPlus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const MailPlus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("MailPlus", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);


//# sourceMappingURL=mail-plus.js.map


/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mail)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Mail = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);


//# sourceMappingURL=mail.js.map


/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserRoundPlus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const UserRoundPlus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("UserRoundPlus", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
]);


//# sourceMappingURL=user-round-plus.js.map


/***/ })

}]);