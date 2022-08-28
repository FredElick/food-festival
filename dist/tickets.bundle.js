/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/tickets.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createEl(htmlString, attrs, ...children) {\r\n    if (typeof htmlString !== \"string\") {\r\n      throw Error(\"Argument 'htmlString' is required and must be a string\");\r\n    }\r\n  \r\n    const el = document.createElement(htmlString);\r\n  \r\n    if (typeof attrs === \"object\") {\r\n      for (let key in attrs) {\r\n        if (key.substring(0, 2) === \"on\") {\r\n          el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);\r\n        } else {\r\n          el.setAttribute(key, attrs[key]);\r\n        }\r\n      }\r\n    }\r\n  \r\n    children.forEach(function(child) {\r\n      let node;\r\n  \r\n      if (child.constructor.name.includes(\"Element\")) {\r\n        node = child;\r\n      } else {\r\n        node = document.createTextNode(child);\r\n      }\r\n  \r\n      el.appendChild(node);\r\n    });\r\n  \r\n    return el;\r\n  };\r\n\r\nmodule.exports = createEl;\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/tickets.js":
/*!******************************!*\
  !*** ./assets/js/tickets.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createEl = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\r\nif (window.location.href.indexOf(\"tickets\") > -1) {\r\n\r\n    const purchaseBtn = document.getElementById(\"purchaseBtn\");\r\n    const purchaseEmail = document.getElementById(\"purchaseEmail\");\r\n    const modalEl = document.querySelector(\".modal-content\");\r\n    const modalBodyEl = document.querySelector(\".modal-body\");\r\n    const modalFooterEl = document.querySelector(\".modal-footer\");\r\n\r\n\r\n    function purchaseTicket () {\r\n\r\n      modalEl.removeChild(modalBodyEl)\r\n      modalEl.removeChild(modalFooterEl)\r\n\r\n      modalEl.append(createEl(\"div\", {class: \"modal-body\"},\r\n        createEl(\"h5\", {class: \"modal-title\"}, \r\n        `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`\r\n        ),\r\n      ))\r\n      \r\n    }\r\n    purchaseBtn.addEventListener(\"click\", purchaseTicket);\r\n  }\n\n//# sourceURL=webpack:///./assets/js/tickets.js?");

/***/ })

/******/ });