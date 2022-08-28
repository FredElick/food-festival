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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/schedule.js");
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

/***/ "./assets/js/helpers.js":
/*!******************************!*\
  !*** ./assets/js/helpers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createLoremIpsum(numWords = 50) {\r\n    const loremIpsum = \"Lorem ipsum dolor amet tousled brooklyn meditation, polaroid offal kale chips raw denim tumblr succulents jianbing listicle. Man braid godard VHS freegan bespoke fixie XOXO ramps lo-fi edison bulb prism gochujang photo booth. Messenger bag bicycle rights trust fund franzen street art mixtape helvetica, sriracha dreamcatcher live-edge microdosing. Whatever cliche neutra iceland chambray, beard narwhal pop-up health goth readymade palo santo forage live-edge 3 wolf moon echo park edison bulb, viral iceland bicycle rights post-ironic celiac typewriter kinfolk mumblecore tilde palo santo. Dreamcatcher cred cliche, keffiyeh intelligentsia forage vice locavore aesthetic yr. Vexillologist shabby chic fixie, air plant helvetica health goth kickstarter four loko jean shorts tote bag green juice street art beard farm-to-table. Enamel pin jianbing photo booth, YOLO pour-over bushwick next level fingerstache vice retro disrupt cloud bread. Gastropub umami distillery chia food truck adaptogen. Forage hexagon helvetica kogi squid. Crucifix health goth bespoke typewriter fam hexagon helvetica, vice dreamcatcher chillwave tumeric. Keffiyeh aesthetic XOXO venmo live-edge kale chips mlkshk wolf williamsburg hella yr locavore. Tumblr unicorn chillwave, edison bulb occupy offal sartorial gastropub kickstarter. Bitters swag chartreuse single-origin coffee PBR&B post-ironic migas activated charcoal before they sold out iPhone seitan lumbersexual tofu tumeric selvage. Shoreditch hashtag literally, af intelligentsia crucifix sustainable +1 chambray adaptogen. Crucifix retro fixie knausgaard. Photo booth asymmetrical seitan, pug marfa tattooed roof party tacos gochujang woke kale chips vice organic. Street art mumblecore trust fund, normcore single-origin coffee meggings neutra tacos fam. Woke chia asymmetrical try-hard cloud bread hexagon leggings kogi taiyaki. Seitan humblebrag tote bag keytar YOLO art party. Semiotics cliche schlitz shaman, waistcoat chartreuse activated charcoal XOXO post-ironic helvetica messenger bag air plant vape sartorial. Typewriter thundercats direct trade edison bulb lomo la croix trust fund. Tote bag tofu lo-fi blue bottle. Drinking vinegar lyft messenger bag, leggings tofu 90's bitters four loko mustache sriracha pabst shabby chic humblebrag glossier. Meh skateboard yuccie tattooed adaptogen gastropub post-ironic put a bird on it green juice la croix hot chicken ennui cray dreamcatcher neutra. Chia semiotics art party fixie shaman echo park palo santo flexitarian. Letterpress retro chillwave, williamsburg palo santo fashion axe raclette lumbersexual keytar yr plaid ugh. Godard everyday carry twee, roof party affogato williamsburg photo booth. Irony lumbersexual letterpress, trust fund raclette wayfarers art party. Flannel bushwick yr tattooed.\"\r\n    \r\n    const result = loremIpsum.split(/\\s+/).slice(0,numWords).join(\" \");\r\n    return result;\r\n  };\r\n\r\n  dateConverter = function(UNIX_timestamp) {\r\n    const a = new Date(UNIX_timestamp);\r\n    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];\r\n    const year = a.getFullYear();\r\n    const month = months[a.getMonth()];\r\n    const date = a.getDate();\r\n    const result =  month + ' ' + date + ', ' + year \r\n    return result;\r\n  };\r\n\r\n\r\n  module.exports= {\r\n    createLoremIpsum,\r\n    dateConverter\r\n  }\n\n//# sourceURL=webpack:///./assets/js/helpers.js?");

/***/ }),

/***/ "./assets/js/schedule.js":
/*!*******************************!*\
  !*** ./assets/js/schedule.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createEl = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\r\nconst { createLoremIpsum, dateConverter } = __webpack_require__(/*! ./helpers */ \"./assets/js/helpers.js\");\r\nif (window.location.href.indexOf(\"schedule\") > -1) {\r\n\r\n    const date = new Date();\r\n    const d = date.getDate();\r\n    const m = date.getMonth();\r\n    const y = date.getFullYear();\r\n\r\n    function onEventClick(calEvent) {\r\n\r\n    const start = dateConverter(calEvent.start);\r\n    localStorage.setItem(\"currentEvent\", JSON.stringify({\r\n        title: calEvent.title,\r\n        subtitle: start,\r\n        description: calEvent.description,\r\n        image: calEvent.image\r\n    }))\r\n    \r\n    window.location.href = \"events.html\"\r\n\r\n    }\r\n\r\n    const events = [\r\n    {\r\n        title: 'Vegan Day',\r\n        start: new Date(y, m+1, 20),\r\n        description: `Vegans unite! At this event, we'll be celebrating with vegan food from around the globe. With so many delicious vegan cuisine options, it's hard to pick one. What are you hungry for? Let us share with you!\r\n        Veganism is a lifestyle choice—we're passionate about creating healthy and delicious food products without harming the environment, so please spread the word about our festival and about our work!`,\r\n        image: \"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80\",\r\n    },\r\n    {\r\n        title: 'Harvest Festival',\r\n        start: new Date(y, m+1, 20),\r\n        image: \"https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80\",\r\n    },\r\n    {\r\n        title: 'Bacon Day',\r\n        start: new Date(y, m+1, 20),\r\n        description: `Today's all about bacon! We'll be serving up the best tasting bacon around town! Let's all get excited about bacon together!\r\n        As an appetizer, grab a side of our delicious BBQ pulled pork and pick up a delicious side of our homemade slaw and sauce! There will be bacon everywhere!!`,\r\n        image: \"https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80\",\r\n    \r\n    },\r\n    {\r\n        title: 'Fry-day',\r\n        description: `You bring it, we fry it. Everything tastes better fried! Whether it's your favorite sponge cake or a refreshing afternoon snack,\r\n        prepare to shock your tastebuds.`,\r\n        start: new Date(y, m+1, 21),\r\n        image: \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\r\n    },\r\n    {\r\n        title: 'Pizza Party!',\r\n        description: `This event is devoted to all those pizza lovers out there. Come enjoy fresh from the oven pizza and learn tips on making pizza at home from the pros!`,\r\n        start: new Date(y, m+1, 22),\r\n        image: \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\r\n    },\r\n    {\r\n        title: 'Pasta Bonanza',\r\n        description: `All things pasta.`,\r\n        start: new Date(y, m+1, 22),\r\n        image: \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\r\n    },\r\n    {\r\n        title: 'Fruity Foods!',\r\n        description: `We will be showcasing dishes where fruits are a primary ingredient. Come learn how you can add more fruits into your diet!`,\r\n        start: new Date(y, m+1, 22),\r\n        image: \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\r\n    },\r\n    {\r\n        title: 'Veggie Mix Up',\r\n        description: `We will be showcasing great dishes that have plenty of veggies and proteins! This is for all those out there who love food, but want to get more vegetables in their diets!`,\r\n        start: new Date(y, m+1, 23),\r\n        image: \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\r\n    },\r\n    {\r\n        title: 'Fry-day',\r\n        description: `You bring it, we fry it....again. This event is always a huge hit, so we hold it twice!!`,\r\n        start: new Date(y, m+1, 23),\r\n        image: \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\r\n    },\r\n    ]\r\n\r\n    const pageEl = document.querySelector(\"#page\");\r\n\r\n    function createCards(events) {\r\n      const cards = events.map((event) => (\r\n          createEl(\"div\", {class: \"card-body clickable\", onClick: () => onEventClick(event)}, \r\n          createEl(\"h5\", {class: \"card-title\"}, event.title || \"\"),\r\n          createEl(\"p\", {class: \"card-text\"}, event.description || createLoremIpsum()),\r\n          createEl(\"hr\")\r\n          )\r\n      ))\r\n      return cards\r\n    }\r\n    \r\n    const containerEl1 = createEl(\"div\", {class: \"container mt-5\"}, \r\n    createEl(\"div\", {class: \"card mb-5\"}, \r\n        createEl(\"h5\", {class: \"card-header\"}, \"Day 1\"),\r\n        ...createCards(events.slice(0,3))\r\n    )\r\n    )\r\n\r\n    const containerEl2 = createEl(\"div\", {class: \"container\"}, \r\n    createEl(\"div\", {class: \"card mb-5\"}, \r\n        createEl(\"h5\", {class: \"card-header\"}, \"Day 2\"),\r\n        ...createCards(events.slice(3,6))\r\n    )\r\n    )\r\n\r\n    const containerEl3 = createEl(\"div\", {class: \"container\"}, \r\n    createEl(\"div\", {class: \"card mb-5\"}, \r\n        createEl(\"h5\", {class: \"card-header\"}, \"Day 3\"),\r\n        ...createCards(events.slice(6,9))\r\n    )\r\n    )\r\n\r\n    pageEl.appendChild(containerEl1);\r\n    pageEl.appendChild(containerEl2);\r\n    pageEl.appendChild(containerEl3);\r\n  }\n\n//# sourceURL=webpack:///./assets/js/schedule.js?");

/***/ })

/******/ });