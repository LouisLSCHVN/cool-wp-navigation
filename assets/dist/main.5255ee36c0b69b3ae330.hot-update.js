"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecool_links"]("main",{

/***/ "./assets/scripts/cool-navigation.js":
/*!*******************************************!*\
  !*** ./assets/scripts/cool-navigation.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupNavigation: () => (/* binding */ setupNavigation),\n/* harmony export */   setupNavigationForAdminContent: () => (/* binding */ setupNavigationForAdminContent),\n/* harmony export */   setupNavigationForAdminMenu: () => (/* binding */ setupNavigationForAdminMenu)\n/* harmony export */ });\n/* harmony import */ var _cool_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cool-utils.js */ \"./assets/scripts/cool-utils.js\");\n/* harmony import */ var _cool_client_cache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cool-client-cache.js */ \"./assets/scripts/cool-client-cache.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n/**\n * TODO:\n * - [X] When no e.target.parentElement (in changeCurrentState) handle properly\n * - [X] Make a wpcontent specific handling for every link that is in wp-admin/\n * - [X] Add Cache Map\n * - [X] Add Show Error Methods\n * - [X] Add is safeURL method\n * - [X] Add roleback if this dosn't work\n * - [ ] Vite app not working, they just don't start for some reasons ?? Handle that\n * - [ ] Make a list of urls that just replace the html tag\n * - [ ] Make submit button ajax and notification handling\n * - [ ] Do the same for themes and add the clientCache with options\n */\n\n/** IMPORST **/\n\n\n// import { resetVueApp, waitForScripts } from \"./cool-scripts-handler.js\";\n\nvar clientCache = new _cool_client_cache_js__WEBPACK_IMPORTED_MODULE_1__.CoolClientCache();\ndocument.addEventListener('DOMContentLoaded', function () {\n  setupNavigation();\n  listenToPopState();\n  window.history.replaceState({\n    path: window.location.href\n  }, '', window.location.href);\n});\nvar setupNavigation = function setupNavigation() {\n  setupNavigationForAdminMenu();\n  setupNavigationForAdminContent();\n\n  // Not ready yet\n  setupForm();\n};\nvar setupForm = function setupForm() {\n  var forms = document.querySelectorAll('form:not(.ajax-processed)');\n  forms.forEach(function (form) {\n    form.addEventListener('submit', handleSubmit);\n    form.classList.add('ajax-processed');\n  });\n};\nvar setupNavigationForAdminMenu = function setupNavigationForAdminMenu() {\n  var adminLinks = document.querySelectorAll(_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.SELECTORS.ADMIN_LINKS);\n  adminLinks.forEach(function (link) {\n    return link.addEventListener('click', /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              if ((0,_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSafeUrl)(e.target.href)) {\n                _context.next = 2;\n                break;\n              }\n              return _context.abrupt(\"return\");\n            case 2:\n              e.preventDefault();\n              changeWpMenuState(e);\n              _context.next = 6;\n              return navigate(e.target.closest('a').href);\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  });\n};\nvar setupNavigationForAdminContent = function setupNavigationForAdminContent() {\n  var contentLinks = document.querySelectorAll(_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.SELECTORS.CONTENT_LINKS);\n  console.log(\"Content links for content\", contentLinks);\n  contentLinks.forEach(function (link) {\n    return link.addEventListener('click', /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {\n        return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              if ((0,_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSafeUrl)(e.target.href)) {\n                _context2.next = 2;\n                break;\n              }\n              return _context2.abrupt(\"return\");\n            case 2:\n              e.preventDefault();\n              _context2.next = 5;\n              return navigate(e.target.closest(\"a\").href);\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  });\n};\nvar cacheOrFetch = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {\n    var cachedHtml, response, html;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          cachedHtml = clientCache.get(url);\n          if (!cachedHtml) {\n            _context3.next = 4;\n            break;\n          }\n          console.log('Serving from cache:', url);\n          return _context3.abrupt(\"return\", cachedHtml);\n        case 4:\n          console.log('Fetching:', url);\n          _context3.next = 7;\n          return fetch(url);\n        case 7:\n          response = _context3.sent;\n          _context3.next = 10;\n          return response.text();\n        case 10:\n          html = _context3.sent;\n          clientCache.set(url, html);\n          return _context3.abrupt(\"return\", html);\n        case 13:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3);\n  }));\n  return function cacheOrFetch(_x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {\n    var formData, response;\n    return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n      while (1) switch (_context4.prev = _context4.next) {\n        case 0:\n          e.preventDefault();\n          formData = new FormData(form);\n          _context4.prev = 2;\n          _context4.next = 5;\n          return fetch(form.action, {\n            method: form.method,\n            body: formData\n          });\n        case 5:\n          response = _context4.sent;\n          console.log(\"Response from form : \", response);\n          if (response.ok) {\n            _context4.next = 9;\n            break;\n          }\n          throw new Error(\"Error submitting form!\");\n        case 9:\n          (0,_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.showNotification)(\"Form submitted successfully!\");\n          clientCache.clear();\n          _context4.next = 16;\n          break;\n        case 13:\n          _context4.prev = 13;\n          _context4.t0 = _context4[\"catch\"](2);\n          (0,_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.showErrorMessage)(_context4.t0.message);\n        case 16:\n        case \"end\":\n          return _context4.stop();\n      }\n    }, _callee4, null, [[2, 13]]);\n  }));\n  return function handleSubmit(_x4) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar navigate = /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {\n    var wpBody, html, parser, doc, content;\n    return _regeneratorRuntime().wrap(function _callee5$(_context5) {\n      while (1) switch (_context5.prev = _context5.next) {\n        case 0:\n          console.log('Navigating to:', url);\n          wpBody = document.querySelector(_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.SELECTORS.WP_BODY);\n          wpBody.classList.add('cool-nav-loading');\n          _context5.prev = 3;\n          _context5.next = 6;\n          return cacheOrFetch(url);\n        case 6:\n          html = _context5.sent;\n          parser = new DOMParser();\n          doc = parser.parseFromString(html, 'text/html');\n          content = doc.querySelector(_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.SELECTORS.WP_BODY);\n          wpBody.innerHTML = content.innerHTML;\n          (0,_cool_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateTag)(document, doc);\n          setupNavigationForAdminContent();\n          wpBody.classList.remove('cool-nav-loading');\n          console.log(\"Content updated with response from: \", url);\n          window.history.pushState({\n            path: url\n          }, '', url);\n          _context5.next = 22;\n          break;\n        case 18:\n          _context5.prev = 18;\n          _context5.t0 = _context5[\"catch\"](3);\n          console.error('Navigation error:', _context5.t0);\n          wpBody.classList.remove('cool-nav-loading');\n        case 22:\n        case \"end\":\n          return _context5.stop();\n      }\n    }, _callee5, null, [[3, 18]]);\n  }));\n  return function navigate(_x5) {\n    return _ref5.apply(this, arguments);\n  };\n}();\nvar changeWpMenuState = function changeWpMenuState(e) {\n  // Static classes\n  var MENU_TOP = 'menu-top';\n  var CURRENT = 'current';\n  var WP_HAS_CURRENT_SUBMENU = 'wp-has-current-submenu';\n  var WP_NOT_CURRENT_SUBMENU = 'wp-not-current-submenu';\n\n  // Prevent double click\n  if (!e.currentTarget) console.log(\"No current target\");\n  if (e.currentTarget.classList.contains(CURRENT)) return;\n\n  // Remove other styles\n  var current = Array.from(document.getElementsByClassName(CURRENT));\n  var hasCurrentSubmenu = Array.from(document.getElementsByClassName(WP_HAS_CURRENT_SUBMENU));\n  current.forEach(function (el) {\n    return el.classList.remove(CURRENT);\n  });\n  hasCurrentSubmenu.forEach(function (el) {\n    el.classList.remove(WP_HAS_CURRENT_SUBMENU);\n    el.classList.add(WP_NOT_CURRENT_SUBMENU);\n  });\n\n  // Add styles\n  var a = e.currentTarget.classList.contains(MENU_TOP) ? e.currentTarget.parentNode.querySelector('ul li ul a') : e.target.closest('a');\n  if (!a) return;\n  var li = a.parentElement;\n  var ul = li.parentElement;\n  var container = ul.parentElement;\n  var parentContainer = container.parentElement;\n  a.classList.add(CURRENT);\n  li.classList.add(CURRENT);\n  container.classList.remove(WP_NOT_CURRENT_SUBMENU);\n  container.classList.add(WP_HAS_CURRENT_SUBMENU);\n  parentContainer.classList.remove(WP_NOT_CURRENT_SUBMENU);\n  parentContainer.classList.add(WP_HAS_CURRENT_SUBMENU);\n};\nvar listenToPopState = function listenToPopState() {\n  window.addEventListener('popstate', function (event) {\n    if (event.state && event.state.path) {\n      navigate(event.state.path);\n    }\n  });\n};\n\n//# sourceURL=webpack://cool-links/./assets/scripts/cool-navigation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("307dd143a38772c3ff80")
/******/ })();
/******/ 
/******/ }
);