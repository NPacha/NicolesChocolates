/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/components/Home.js\");\n/* harmony import */ var _NameForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NameForm */ \"./src/components/NameForm.js\");\n\n\n // import Counter from './Counter';\n//**  ./ means same folder\n\nfunction App(props) {\n  const [name, updateName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('Arthur');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Page-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Ruth App\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NameForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useInput */ \"./src/components/hooks/useInput.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction Home(props) {\n  const [cardText, updateCardText] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''); //German\n\n  const [germanList, updateGermanList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    value: germanNewCard,\n    bind: bindGermanNewCard,\n    reset: resetGermanNewCard\n  } = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])(''); //Kellie\n\n  const [kellieList, updateKellieList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    value: kellieNewCard,\n    bind: bindKellieNewCard,\n    reset: resetKellieNewCard\n  } = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])(''); //Allegra\n\n  const [allegraList, updateAllegraList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    value: allegraNewCard,\n    bind: bindAllegraNewCard,\n    reset: resetAllegraNewCard\n  } = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])(''); //Nicole\n\n  const [nicoleList, updateNicoleList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    value: nicoleNewCard,\n    bind: bindNicoleNewCard,\n    reset: resetNicoleNewCard\n  } = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])('');\n\n  const addGerman = event => {\n    event.preventDefault();\n    updateGermanList([...germanList, germanNewCard]);\n    resetGermanNewCard();\n  };\n\n  const addKellie = event => {\n    event.preventDefault();\n    updateKellieList([...kellieList, kellieNewCard]);\n    resetKellieNewCard();\n  };\n\n  const addAllegra = event => {\n    event.preventDefault();\n    updateAllegraList([...allegraList, allegraNewCard]);\n    resetAllegraNewCard();\n  };\n\n  const addNicole = event => {\n    event.preventDefault();\n    updateNicoleList([...nicoleList, nicoleNewCard]);\n    resetNicoleNewCard();\n  };\n\n  const deleteLi = event => {\n    event.preventDefault();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"heading german\"\n  }, \"German\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    id: \"german-list\"\n  }, germanList.map((card, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: \"\".concat(index).concat(card)\n    }, card);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: 'task-form',\n    onSubmit: addGerman\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Add to Germans Todo List:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    type: \"text\"\n  }, bindGermanNewCard))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Add to German List\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"heading kellie\"\n  }, \"Kellie\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    id: \"kellie-list\"\n  }, kellieList.map((card, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: \"\".concat(index).concat(card)\n    }, card);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: 'task-form',\n    onSubmit: addKellie\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Add to Kellies Todo List:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    type: \"text\"\n  }, bindKellieNewCard))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Add to Kellie List\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"heading allegra\"\n  }, \"Allegra\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    id: \"allegra-list\"\n  }, allegraList.map((card, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: \"\".concat(index).concat(card),\n      onClick: deleteLi\n    }, card);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: 'task-form',\n    onSubmit: addAllegra\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Add to Allegras ToDo List:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    type: \"text\"\n  }, bindAllegraNewCard))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Add to Allegras List\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"heading nicole\"\n  }, \"Nicole\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    id: \"nicole-list\"\n  }, nicoleList.map((card, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: \"\".concat(index).concat(card)\n    }, card);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: 'task-form',\n    onSubmit: addNicole\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Add to Nicoles To Do List:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    type: \"text\"\n  }, bindNicoleNewCard))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Add to Nicoles List\"))));\n}\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/NameForm.js":
/*!************************************!*\
  !*** ./src/components/NameForm.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return NameForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useInput */ \"./src/components/hooks/useInput.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction NameForm(props) {\n  const {\n    value: firstName,\n    bind: bindFirstName,\n    reset: resetFirstName\n  } = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])(''); //useState will return an array, we are passing in the inital value or the inital state\n  //name will be empty string\n  //setName will be equal to a function that will update name (in the DOM?)\n\n  const {\n    value: lastName,\n    bind: bindLastName,\n    reset: resetLastName\n  } = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])('');\n\n  const handleSubmit = evt => {\n    evt.preventDefault(); //stops page from reloading/stops form from reloading\n\n    alert(\"Submitting Name \".concat(firstName, \" \").concat(lastName));\n    resetFirstName(); //updater function just changes the value of name //Never reassign the variable with an equals\n\n    resetLastName();\n  };\n\n  const handleChange = evt => {\n    setName(evt.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"First Name:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    type: \"text\"\n  }, bindFirstName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Last Name:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    type: \"text\"\n  }, bindLastName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Submit Name\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"The name is \".concat(lastName, \" ... \").concat(firstName, \" \").concat(lastName)));\n}\n\n//# sourceURL=webpack:///./src/components/NameForm.js?");

/***/ }),

/***/ "./src/components/hooks/useInput.js":
/*!******************************************!*\
  !*** ./src/components/hooks/useInput.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useInput = initialValue => {\n  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialValue); //setValue will always update whatever value was\n  //value will be set to the initial value\n  //useState returns an array\n  //UseInput will return an object\n\n  return {\n    value,\n    //value: value,\n    setValue,\n    //setValue: setValue,\n    reset: () => setValue(''),\n    //reset function will run setValue and set the value back to empty string\n    bind: {\n      value,\n      onChange: evt => {\n        setValue(evt.target.value); //anytime there is a change change the value to the value of the event.target\n      } //we can add these keys to the html element, because html elements are objects\n      //We called it bind because it will bind the value to the form, but you can name it whatever you want (dropThisStuffInMyInput)\n\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (useInput);\n\n//# sourceURL=webpack:///./src/components/hooks/useInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });