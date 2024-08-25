"use strict";
(self["webpackChunkmsg_app_client"] = self["webpackChunkmsg_app_client"] || []).push([[12],{

/***/ 160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   FormControl: () => (/* binding */ FormControl),
/* harmony export */   FormDescription: () => (/* binding */ FormDescription),
/* harmony export */   FormField: () => (/* binding */ FormField),
/* harmony export */   FormItem: () => (/* binding */ FormItem),
/* harmony export */   FormLabel: () => (/* binding */ FormLabel),
/* harmony export */   FormMessage: () => (/* binding */ FormMessage),
/* harmony export */   useFormField: () => (/* binding */ useFormField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(161);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _ui_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(162);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "children"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






var Form = react_hook_form__WEBPACK_IMPORTED_MODULE_4__.FormProvider;
var FormFieldContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var FormField = function FormField(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FormFieldContext.Provider, {
    value: {
      name: props.name
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, _objectSpread({}, props))
  });
};
var useFormField = function useFormField() {
  var fieldContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormFieldContext);
  var itemContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormItemContext);
  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)(),
    getFieldState = _useFormContext.getFieldState,
    formState = _useFormContext.formState;
  var fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  var id = itemContext.id;
  return _objectSpread({
    id: id,
    name: fieldContext.name,
    formItemId: "".concat(id, "-form-item"),
    formDescriptionId: "".concat(id, "-form-item-description"),
    formMessageId: "".concat(id, "-form-item-message")
  }, fieldState);
};
var FormItemContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var FormItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded);
  var id = react__WEBPACK_IMPORTED_MODULE_0__.useId();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FormItemContext.Provider, {
    value: {
      id: id
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", _objectSpread({
      ref: ref,
      className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("space-y-2", className)
    }, props))
  });
});
FormItem.displayName = "FormItem";
var FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  var _useFormField = useFormField(),
    error = _useFormField.error,
    formItemId = _useFormField.formItemId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_label__WEBPACK_IMPORTED_MODULE_2__.Label, _objectSpread({
    ref: ref,
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(error, "text-background-50", className),
    htmlFor: formItemId
  }, props));
});
FormLabel.displayName = "FormLabel";
var FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref4, ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  var _useFormField2 = useFormField(),
    error = _useFormField2.error,
    formItemId = _useFormField2.formItemId,
    formDescriptionId = _useFormField2.formDescriptionId,
    formMessageId = _useFormField2.formMessageId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_5__.Slot, _objectSpread({
    ref: ref,
    id: formItemId,
    "aria-describedby": !error ? "".concat(formDescriptionId) : "".concat(formDescriptionId, " ").concat(formMessageId),
    "aria-invalid": !!error
  }, props));
});
FormControl.displayName = "FormControl";
var FormDescription = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref5, ref) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  var _useFormField3 = useFormField(),
    formDescriptionId = _useFormField3.formDescriptionId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", _objectSpread({
    ref: ref,
    id: formDescriptionId,
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("text-sm text-neutral-500 dark:text-neutral-400", className)
  }, props));
});
FormDescription.displayName = "FormDescription";
var FormMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref6, ref) {
  var className = _ref6.className,
    children = _ref6.children,
    props = _objectWithoutProperties(_ref6, _excluded4);
  var _useFormField4 = useFormField(),
    error = _useFormField4.error,
    formMessageId = _useFormField4.formMessageId;
  var body = error ? String(error === null || error === void 0 ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", _objectSpread(_objectSpread({
    ref: ref,
    id: formMessageId,
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("text-sm font-medium text-warning", className)
  }, props), {}, {
    children: body
  }));
});
FormMessage.displayName = "FormMessage";


/***/ }),

/***/ 159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "type"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    type = _ref.type,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", _objectSpread({
    type: type,
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex h-10 w-full rounded-md text-secondary-50 border border-neutral-800 bg-bg-neutral-950 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300", className),
    ref: ref
  }, props));
});
Input.displayName = "Input";


/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }





var labelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__.Root, _objectSpread({
    ref: ref,
    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(labelVariants(), className)
  }, props));
});
Label.displayName = _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__.Root.displayName;


/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupCreationSchema: () => (/* binding */ groupCreationSchema),
/* harmony export */   inviteSchema: () => (/* binding */ inviteSchema),
/* harmony export */   loginSchema: () => (/* binding */ loginSchema),
/* harmony export */   messageSchema: () => (/* binding */ messageSchema),
/* harmony export */   passwordChangeSchema: () => (/* binding */ passwordChangeSchema),
/* harmony export */   registerSchema: () => (/* binding */ registerSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);

var registerSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, "Email cannot be empty.").email("This is not a valid email format.").max(64, "Email cannot be longer than 64 characters."),
  username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3, "Username has to be at lest 3 characters long.").max(64, "Username cannot be longer than 32 characters."),
  password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(8, "Password has to be at least 8 characters long.").max(64, "Password cannot be longer than 64 characters."),
  confPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).refine(function (data) {
  return data.password === data.confPassword;
}, {
  message: "Passwords don't match.",
  path: ["confPassword"]
});
var loginSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, "Email cannot be empty."),
  password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, "Password cannot be empty.")
});
var inviteSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  friendCode: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().length(10, "Invalid invite code.")
});
var messageSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  message: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().max(512, "Message too long."),
  fileUrl: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable()
});
var groupCreationSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, "Group name cannot be empty.").max(64, "Group name too long."),
  userIds: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string())
});
var passwordChangeSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  oldPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
  newPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(8, "Password has to be at least 8 characters long.").max(64, "Password cannot be longer than 64 characters."),
  newPasswordConf: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).refine(function (data) {
  return data.newPassword === data.newPasswordConf;
}, {
  message: "Passwords don't match.",
  path: ["newPasswordConf"]
});

/***/ })

}]);