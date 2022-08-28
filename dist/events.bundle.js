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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/event.js");
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

/***/ "./assets/js/event.js":
/*!****************************!*\
  !*** ./assets/js/event.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createEl = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\r\nconst createLoremIpsum = __webpack_require__(/*! ./helpers */ \"./assets/js/helpers.js\")\r\n\r\n\r\n  if (window.location.href.indexOf(\"event\") > -1) {\r\n    const currentEvent = JSON.parse(localStorage.getItem(\"currentEvent\")) || {\r\n        title: \"Title Placeholder\",\r\n        subtitle: \"\",\r\n        description: \"\"\r\n    };\r\n\r\n    const pageEl = document.querySelector(\"#page\");\r\n    \r\n    const containerEl = createEl(\"div\", {class: \"container\"},\r\n      createEl(\"div\", {class: \"card mb-3\"}, \r\n        createEl(\"img\", {class: \"card-img-top\", style: \"width: 5px\", src: currentEvent.image || \"https://via.placeholder.com/350x150\"}),\r\n        createEl(\"div\", {class: \"card-body\"}, \r\n          createEl(\"h1\", {class: \"card-title\"}, currentEvent.title || \"\"),\r\n          createEl(\"h2\", {class: \"text-muted\"}, currentEvent.subtitle || \"\"),\r\n          createEl(\"p\", {class: \"card-text mt-3\"}, currentEvent.description || createLoremIpsum(100)),\r\n          createEl(\"a\", {class: \"btn btn-primary\", href: \"tickets.html\"}, \"Buy Tickets\")\r\n        )\r\n      ),\r\n      \r\n    )\r\n    pageEl.appendChild(containerEl)\r\n  }\n\n//# sourceURL=webpack:///./assets/js/event.js?");

/***/ }),

/***/ "./assets/js/helpers.js":
/*!******************************!*\
  !*** ./assets/js/helpers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createLoremIpsum(numWords = 50) {\r\n    const loremIpsum = \"Lorem ipsum dolor amet tousled brooklyn meditation, polaroid offal kale chips raw denim tumblr succulents jianbing listicle. Man braid godard VHS freegan bespoke fixie XOXO ramps lo-fi edison bulb prism gochujang photo booth. Messenger bag bicycle rights trust fund franzen street art mixtape helvetica, sriracha dreamcatcher live-edge microdosing. Whatever cliche neutra iceland chambray, beard narwhal pop-up health goth readymade palo santo forage live-edge 3 wolf moon echo park edison bulb, viral iceland bicycle rights post-ironic celiac typewriter kinfolk mumblecore tilde palo santo. Dreamcatcher cred cliche, keffiyeh intelligentsia forage vice locavore aesthetic yr. Vexillologist shabby chic fixie, air plant helvetica health goth kickstarter four loko jean shorts tote bag green juice street art beard farm-to-table. Enamel pin jianbing photo booth, YOLO pour-over bushwick next level fingerstache vice retro disrupt cloud bread. Gastropub umami distillery chia food truck adaptogen. Forage hexagon helvetica kogi squid. Crucifix health goth bespoke typewriter fam hexagon helvetica, vice dreamcatcher chillwave tumeric. Keffiyeh aesthetic XOXO venmo live-edge kale chips mlkshk wolf williamsburg hella yr locavore. Tumblr unicorn chillwave, edison bulb occupy offal sartorial gastropub kickstarter. Bitters swag chartreuse single-origin coffee PBR&B post-ironic migas activated charcoal before they sold out iPhone seitan lumbersexual tofu tumeric selvage. Shoreditch hashtag literally, af intelligentsia crucifix sustainable +1 chambray adaptogen. Crucifix retro fixie knausgaard. Photo booth asymmetrical seitan, pug marfa tattooed roof party tacos gochujang woke kale chips vice organic. Street art mumblecore trust fund, normcore single-origin coffee meggings neutra tacos fam. Woke chia asymmetrical try-hard cloud bread hexagon leggings kogi taiyaki. Seitan humblebrag tote bag keytar YOLO art party. Semiotics cliche schlitz shaman, waistcoat chartreuse activated charcoal XOXO post-ironic helvetica messenger bag air plant vape sartorial. Typewriter thundercats direct trade edison bulb lomo la croix trust fund. Tote bag tofu lo-fi blue bottle. Drinking vinegar lyft messenger bag, leggings tofu 90's bitters four loko mustache sriracha pabst shabby chic humblebrag glossier. Meh skateboard yuccie tattooed adaptogen gastropub post-ironic put a bird on it green juice la croix hot chicken ennui cray dreamcatcher neutra. Chia semiotics art party fixie shaman echo park palo santo flexitarian. Letterpress retro chillwave, williamsburg palo santo fashion axe raclette lumbersexual keytar yr plaid ugh. Godard everyday carry twee, roof party affogato williamsburg photo booth. Irony lumbersexual letterpress, trust fund raclette wayfarers art party. Flannel bushwick yr tattooed.\"\r\n    \r\n    const result = loremIpsum.split(/\\s+/).slice(0,numWords).join(\" \");\r\n    return result;\r\n  };\r\n\r\n  dateConverter = function(UNIX_timestamp) {\r\n    const a = new Date(UNIX_timestamp);\r\n    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];\r\n    const year = a.getFullYear();\r\n    const month = months[a.getMonth()];\r\n    const date = a.getDate();\r\n    const result =  month + ' ' + date + ', ' + year \r\n    return result;\r\n  };\r\n\r\n\r\n  module.exports= {\r\n    createLoremIpsum,\r\n    dateConverter\r\n  }\n\n//# sourceURL=webpack:///./assets/js/helpers.js?");

/***/ })

/******/ });