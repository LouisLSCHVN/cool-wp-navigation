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

/***/ "./assets/scripts/cool-utils.js":
/*!**************************************!*\
  !*** ./assets/scripts/cool-utils.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SELECTORS: () => (/* binding */ SELECTORS),\n/* harmony export */   isSafeUrl: () => (/* binding */ isSafeUrl),\n/* harmony export */   showErrorMessage: () => (/* binding */ showErrorMessage),\n/* harmony export */   showNotification: () => (/* binding */ showNotification),\n/* harmony export */   updateTag: () => (/* binding */ updateTag)\n/* harmony export */ });\nvar SELECTORS = {\n  ADMIN_MENU: '#adminmenu',\n  WP_BODY: '#wpbody',\n  ADMIN_LINKS: '#adminmenu a',\n  CONTENT_LINKS: '#wpbody a',\n  SUBMIT_BUTTONS: 'input[type=\"submit\"], button[type=\"submit\"]',\n  WP_WRAP: '#wpbody-content'\n};\nvar dontWorkYet = [\"/wp-admin/site-editor.php\", \"/wp-admin/post-new.php\"];\nvar isSafeUrl = function isSafeUrl(url) {\n  try {\n    var currentDomain = window.location.hostname;\n    var urlObj = new URL(url, window.location.origin);\n    if (dontWorkYet.includes(urlObj.pathname)) return false;\n    return urlObj.hostname === currentDomain;\n  } catch (error) {\n    console.error(\"Error checking URL safety:\", error);\n    return false;\n  }\n};\nvar showErrorMessage = function showErrorMessage(message) {\n  var errorDiv = document.createElement('div');\n  errorDiv.className = 'notice notice-error settings-error is-dismissible';\n  errorDiv.textContent = message;\n  errorDiv.setAttribute('role', 'alert');\n  document.querySelector(SELECTORS.WP_WRAP).insertAdjacentElement('afterbegin', errorDiv);\n  setTimeout(function () {\n    return errorDiv.remove();\n  }, 5000);\n};\nvar showNotification = function showNotification(message) {\n  var notificationDiv = document.createElement('div');\n  notificationDiv.className = 'notice notice-success settings-error is-dismissible';\n  notificationDiv.textContent = message;\n  notificationDiv.setAttribute('role', 'status');\n  document.querySelector(SELECTORS.WP_WRAP).insertAdjacentElement('afterbegin', notificationDiv);\n  setTimeout(function () {\n    return notificationDiv.remove();\n  }, 10000);\n};\nvar updateTag = function updateTag(currentDom, newDom) {\n  var htmlTags = ['title', 'meta', 'link', 'style'];\n  htmlTags.forEach(function (tag) {\n    var currentTags = Array.from(currentDom.head.getElementsByTagName(tag));\n    var newTags = Array.from(newDom.head.getElementsByTagName(tag));\n    currentTags.forEach(function (currentTag) {\n      if (!newTags.some(function (newTag) {\n        return newTag.isEqualNode(currentTag);\n      })) {\n        currentTag.remove();\n      }\n    });\n    newTags.forEach(function (newTag) {\n      if (!currentTags.some(function (currentTag) {\n        return currentTag.isEqualNode(newTag);\n      })) {\n        currentDom.head.appendChild(newTag.cloneNode(true));\n      }\n    });\n  });\n  var currentScripts = Array.from(currentDom.head.getElementsByTagName('script'));\n  var newScripts = Array.from(newDom.head.getElementsByTagName('script'));\n  newScripts.forEach(function (newScript) {\n    if (!currentScripts.some(function (currentScript) {\n      return currentScript.src === newScript.src;\n    })) {\n      var script = document.createElement('script');\n      script.src = newScript.src;\n      document.head.appendChild(script);\n    }\n  });\n};\n\n//# sourceURL=webpack://cool-links/./assets/scripts/cool-utils.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0980941ddade3fd3ea40")
/******/ })();
/******/ 
/******/ }
);