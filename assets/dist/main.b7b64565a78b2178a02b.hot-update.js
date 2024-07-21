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

/***/ "./assets/scripts/cool-client-cache.js":
/*!*********************************************!*\
  !*** ./assets/scripts/cool-client-cache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CoolClientCache: () => (/* binding */ CoolClientCache)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// Cache client side configuration\nvar CACHE_CONFIG = {\n  MAX_SIZE: 10,\n  TTL: 1000 * 60,\n  STORAGE_KEY: 'cool-wp-cache'\n};\n\n// Class to manage the cache\nvar CoolClientCache = /*#__PURE__*/function () {\n  function CoolClientCache() {\n    _classCallCheck(this, CoolClientCache);\n    this.cache = new Map();\n    this.loadFromLocalStorage();\n  }\n  return _createClass(CoolClientCache, [{\n    key: \"set\",\n    value: function set(url, html) {\n      var timestamp = Date.now();\n      if (this.cache.size >= CACHE_CONFIG.MAX_SIZE) {\n        var oldestKey = this.getOldestCacheKey();\n        if (oldestKey) this.cache[\"delete\"](oldestKey);\n      }\n      this.cache.set(url, {\n        html: html,\n        timestamp: timestamp\n      });\n      this.saveToLocalStorage();\n    }\n  }, {\n    key: \"get\",\n    value: function get(url) {\n      var cached = this.cache.get(url);\n      if (!cached) return null;\n      var age = Date.now() - cached.timestamp;\n      if (age > CACHE_CONFIG.TTL) {\n        this.cache[\"delete\"](url);\n        this.saveToLocalStorage();\n        return null;\n      }\n      return cached.html;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.cache.clear();\n      this.saveToLocalStorage();\n      console.log('Cache cleared');\n    }\n  }, {\n    key: \"getOldestCacheKey\",\n    value: function getOldestCacheKey() {\n      var oldestKey = null;\n      var oldestTime = Infinity;\n      var _iterator = _createForOfIteratorHelper(this.cache.entries()),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _step$value = _slicedToArray(_step.value, 2),\n            key = _step$value[0],\n            value = _step$value[1];\n          if (value.timestamp < oldestTime) {\n            oldestKey = key;\n            oldestTime = value.timestamp;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      return oldestKey;\n    }\n  }, {\n    key: \"saveToLocalStorage\",\n    value: function saveToLocalStorage() {\n      var serialized = JSON.stringify(Array.from(this.cache.entries()));\n      localStorage.setItem(CACHE_CONFIG.STORAGE_KEY, serialized);\n    }\n  }, {\n    key: \"loadFromLocalStorage\",\n    value: function loadFromLocalStorage() {\n      var serialized = localStorage.getItem(CACHE_CONFIG.STORAGE_KEY);\n      if (serialized) {\n        var parsed = JSON.parse(serialized);\n        this.cache = new Map(parsed);\n\n        // Clear expired cache\n        var _iterator2 = _createForOfIteratorHelper(this.cache.entries()),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var _step2$value = _slicedToArray(_step2.value, 2),\n              url = _step2$value[0],\n              timestamp = _step2$value[1].timestamp;\n            if (Date.now() - timestamp > CACHE_CONFIG.TTL) {\n              this.cache[\"delete\"](url);\n            }\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://cool-links/./assets/scripts/cool-client-cache.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7dda21ed1a7f53709d7")
/******/ })();
/******/ 
/******/ }
);