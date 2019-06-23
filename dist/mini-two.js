(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MiniTwo"] = factory();
	else
		root["MiniTwo"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helper/coordinate.js":
/*!**********************************!*\
  !*** ./src/helper/coordinate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shapes_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shapes/base */ \"./src/shapes/base.js\");\n/* harmony import */ var _shapes_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shapes/line */ \"./src/shapes/line.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Coordinate =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Coordinate, _Base);\n\n  function Coordinate(miniTwoInstance) {\n    var _this;\n\n    _classCallCheck(this, Coordinate);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Coordinate).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"miniTwoInstance\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"xCord\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"yCord\", void 0);\n\n    _this.miniTwoInstance = miniTwoInstance;\n    _this.xCord = new _shapes_line__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    _this.yCord = new _shapes_line__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    return _this;\n  }\n\n  _createClass(Coordinate, [{\n    key: \"draw\",\n    value: function draw(ctx, scene) {\n      var miniTwoInstance = this.miniTwoInstance;\n      var xStart = [-miniTwoInstance.width / 2, 0];\n      var xEnd = [miniTwoInstance.width / 2, 0];\n      var yStart = [0, -miniTwoInstance.height / 2];\n      var yEnd = [0, miniTwoInstance.height / 2];\n      this.xCord.start = xStart;\n      this.xCord.end = xEnd;\n      this.yCord.start = yStart;\n      this.yCord.end = yEnd;\n      this.xCord.draw(ctx, scene);\n      this.yCord.draw(ctx, scene);\n    }\n  }]);\n\n  return Coordinate;\n}(_shapes_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coordinate);\n\n//# sourceURL=webpack://MiniTwo/./src/helper/coordinate.js?");

/***/ }),

/***/ "./src/helper/index.js":
/*!*****************************!*\
  !*** ./src/helper/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ \"./src/helper/coordinate.js\");\n\nvar helper = {\n  Coordinate: _coordinate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (helper);\n\n//# sourceURL=webpack://MiniTwo/./src/helper/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _requestAnimationFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestAnimationFrame */ \"./src/requestAnimationFrame.js\");\n/* harmony import */ var _requestAnimationFrame__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_requestAnimationFrame__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mini_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-two */ \"./src/mini-two.js\");\n/* harmony import */ var _shapes_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/image */ \"./src/shapes/image.js\");\n/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes/rect */ \"./src/shapes/rect.js\");\n/* harmony import */ var _shapes_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes/line */ \"./src/shapes/line.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper */ \"./src/helper/index.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helper = _helper__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Image = _shapes_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Rect = _shapes_rect__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Line = _shapes_line__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createImage = function () {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return _construct(_shapes_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], args);\n};\n\n_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createRect = function () {\n  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    args[_key2] = arguments[_key2];\n  }\n\n  return _construct(_shapes_rect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], args);\n};\n\n_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createLine = function () {\n  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    args[_key3] = arguments[_key3];\n  }\n\n  return _construct(_shapes_line__WEBPACK_IMPORTED_MODULE_4__[\"default\"], args);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_mini_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://MiniTwo/./src/index.js?");

/***/ }),

/***/ "./src/mini-two.js":
/*!*************************!*\
  !*** ./src/mini-two.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shapes_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/base */ \"./src/shapes/base.js\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene */ \"./src/scene.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar DEFAULT_OPTIONS = {\n  width: 300,\n  height: 300,\n  dpr: window.devicePixelRatio || 1\n};\n\nvar MiniTwo =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(MiniTwo, _Base);\n\n  function MiniTwo() {\n    var _this;\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, MiniTwo);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MiniTwo).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"elem\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"dpr\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"ctx\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"origin\", {\n      x: 0,\n      y: 0\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"_scene\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_rafId\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"isPlaying\", false);\n\n    _defineProperty(_assertThisInitialized(_this), \"_updateFns\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"add\", function () {\n      var _this$_scene;\n\n      (_this$_scene = _this._scene).add.apply(_this$_scene, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"remove\", function () {\n      var _this$_scene2;\n\n      (_this$_scene2 = _this._scene).remove.apply(_this$_scene2, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"render\", function () {\n      _this._scene.draw(_this.ctx);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"play\", function () {\n      if (_this.isPlaying) {\n        return;\n      }\n\n      _this.isPlaying = true;\n\n      var _self = _assertThisInitialized(_this);\n\n      function loop(times) {\n        for (var i = 0, len = _self._updateFns.length; i < len; i++) {\n          _self._updateFns[i](times);\n        }\n\n        _self._rafId = window.requestAnimationFrame(loop);\n      }\n\n      _self._rafId = window.requestAnimationFrame(loop);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"pause\", function () {\n      _this._rafId && window.cancelAnimationFrame(_this._rafId);\n      _this._rafId = null;\n      _this.isPlaying = false;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onUpdate\", function (fn) {\n      _this._updateFns.push(fn);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"offUpdate\", function (fn) {\n      for (var i = 0, len = _this._updateFns.length; i < len; i++) {\n        if (fn === _this._updateFns[i]) {\n          _this._updateFns.splice(i, 1);\n\n          return;\n        }\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"resize\", function (width, height) {\n      var dpr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.dpr;\n      _this.elem.width = width * dpr;\n      _this.elem.height = height * dpr;\n      _this.elem.style.width = width + \"px\";\n      _this.elem.style.height = height + \"px\";\n      _this.width = width;\n      _this.height = height;\n    });\n\n    for (var key in DEFAULT_OPTIONS) {\n      _this[key] = options[key] === undefined ? DEFAULT_OPTIONS[key] : options[key];\n    }\n\n    _this._scene = new _scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_assertThisInitialized(_this));\n    _this.elem = document.createElement(\"canvas\");\n    _this.elem.width = _this.width * _this.dpr;\n    _this.elem.height = _this.height * _this.dpr;\n    _this.elem.style.width = _this.width + \"px\";\n    _this.elem.style.height = _this.height + \"px\";\n    _this.ctx = _this.elem.getContext(\"2d\");\n    return _this;\n  }\n\n  return MiniTwo;\n}(_shapes_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniTwo);\n\n//# sourceURL=webpack://MiniTwo/./src/mini-two.js?");

/***/ }),

/***/ "./src/requestAnimationFrame.js":
/*!**************************************!*\
  !*** ./src/requestAnimationFrame.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var lastTime = 0;\n  var vendors = [\"webkit\", \"moz\"];\n\n  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n    window.requestAnimationFrame = window[vendors[x] + \"RequestAnimationFrame\"];\n    window.cancelAnimationFrame = window[vendors[x] + \"CancelAnimationFrame\"] || window[vendors[x] + \"CancelRequestAnimationFrame\"];\n  }\n\n  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {\n    var currTime = new Date().getTime();\n    var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n    var id = window.setTimeout(function () {\n      callback(currTime + timeToCall);\n    }, timeToCall);\n    lastTime = currTime + timeToCall;\n    return id;\n  };\n  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {\n    clearTimeout(id);\n  };\n})();\n\n//# sourceURL=webpack://MiniTwo/./src/requestAnimationFrame.js?");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Scene = function Scene(_miniTwoInstance) {\n  var _this = this;\n\n  _classCallCheck(this, Scene);\n\n  _defineProperty(this, \"miniTwoInstance\", void 0);\n\n  _defineProperty(this, \"objects\", []);\n\n  _defineProperty(this, \"xc2s\", function (c) {\n    var miniTwoInstance = _this.miniTwoInstance;\n    var rate = miniTwoInstance.dpr / miniTwoInstance.scale;\n    var s = (c + miniTwoInstance.origin.x - miniTwoInstance.translateX) * rate + miniTwoInstance.width * miniTwoInstance.dpr / 2;\n    return s;\n  });\n\n  _defineProperty(this, \"yc2s\", function (c) {\n    var miniTwoInstance = _this.miniTwoInstance;\n    var rate = miniTwoInstance.dpr / miniTwoInstance.scale;\n    var s = miniTwoInstance.height * miniTwoInstance.dpr / 2 - (c + miniTwoInstance.origin.y - miniTwoInstance.translateY) * rate;\n    return s;\n  });\n\n  _defineProperty(this, \"xs2c\", function (s) {\n    var miniTwoInstance = _this.miniTwoInstance;\n    var rate = miniTwoInstance.dpr / miniTwoInstance.scale;\n    var c = (s - miniTwoInstance.width * miniTwoInstance.dpr / 2) / rate - miniTwoInstance.origin.x + miniTwoInstance.translateX;\n    return c;\n  });\n\n  _defineProperty(this, \"ys2c\", function (s) {\n    var miniTwoInstance = _this.miniTwoInstance;\n    var rate = miniTwoInstance.dpr / miniTwoInstance.scale;\n    var c = (miniTwoInstance.height * miniTwoInstance.dpr / 2 - s) / rate - miniTwoInstance.origin.y + miniTwoInstance.translateY;\n    return c;\n  });\n\n  _defineProperty(this, \"xyc2s\", function (p) {\n    var _p = _slicedToArray(p, 2),\n        x = _p[0],\n        y = _p[1];\n\n    return [_this.xc2s(x), _this.yc2s(y)];\n  });\n\n  _defineProperty(this, \"lc2s\", function (lc) {\n    var miniTwoInstance = _this.miniTwoInstance;\n    var rate = miniTwoInstance.dpr / miniTwoInstance.scale;\n    var ls = rate * lc;\n    return ls;\n  });\n\n  _defineProperty(this, \"add\", function (obj) {\n    _this.objects.push(obj);\n  });\n\n  _defineProperty(this, \"remove\", function (obj) {\n    for (var i = 0, len = _this.objects.length; i < len; i++) {\n      if (obj === _this.objects[i]) {\n        _this.objects.splice(i, 1);\n\n        return;\n      }\n    }\n  });\n\n  _defineProperty(this, \"clearCanvas\", function (ctx) {\n    var miniTwoInstance = _this.miniTwoInstance;\n    ctx.clearRect(0, 0, miniTwoInstance.width * miniTwoInstance.dpr, miniTwoInstance.height * miniTwoInstance.dpr);\n  });\n\n  _defineProperty(this, \"draw\", function (ctx) {\n    _this.clearCanvas(ctx);\n\n    _this.objects.forEach(function (obj) {\n      obj.draw(ctx, _this);\n    });\n  });\n\n  this.miniTwoInstance = _miniTwoInstance;\n} // 坐标转换\n;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n//# sourceURL=webpack://MiniTwo/./src/scene.js?");

/***/ }),

/***/ "./src/shapes/base.js":
/*!****************************!*\
  !*** ./src/shapes/base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Base = function Base() {\n  var _this = this;\n\n  _classCallCheck(this, Base);\n\n  _defineProperty(this, \"x\", 0);\n\n  _defineProperty(this, \"y\", 0);\n\n  _defineProperty(this, \"rotate\", 0);\n\n  _defineProperty(this, \"alpha\", 1);\n\n  _defineProperty(this, \"scale\", 1);\n\n  _defineProperty(this, \"width\", 0);\n\n  _defineProperty(this, \"height\", 0);\n\n  _defineProperty(this, \"translateX\", 0);\n\n  _defineProperty(this, \"translateY\", 0);\n\n  _defineProperty(this, \"setX\", function (x) {\n    _this.x = x;\n    return _this;\n  });\n\n  _defineProperty(this, \"setY\", function (y) {\n    _this.y = y;\n    return _this;\n  });\n\n  _defineProperty(this, \"setXY\", function (x, y) {\n    _this.x = x;\n    _this.y = y;\n    return _this;\n  });\n\n  _defineProperty(this, \"setRotate\", function (rotate) {\n    _this.rotate = rotate;\n    return _this;\n  });\n\n  _defineProperty(this, \"setAlpha\", function (alpha) {\n    _this.alpha = alpha;\n    return _this;\n  });\n\n  _defineProperty(this, \"setScale\", function (scale) {\n    _this.scale = scale;\n    return _this;\n  });\n\n  _defineProperty(this, \"setWidth\", function (width) {\n    _this.width = width;\n    return _this;\n  });\n\n  _defineProperty(this, \"setHeight\", function (height) {\n    _this.height = height;\n    return _this;\n  });\n\n  _defineProperty(this, \"setTranslateX\", function (translateX) {\n    _this.translateX = translateX;\n    return _this;\n  });\n\n  _defineProperty(this, \"setTranslateY\", function (translateY) {\n    _this.translateY = translateY;\n    return _this;\n  });\n\n  _defineProperty(this, \"setTranslateXY\", function (translateX, translateY) {\n    _this.translateX = translateX;\n    _this.translateY = translateY;\n    return _this;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);\n\n//# sourceURL=webpack://MiniTwo/./src/shapes/base.js?");

/***/ }),

/***/ "./src/shapes/image.js":
/*!*****************************!*\
  !*** ./src/shapes/image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/shapes/base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Image =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Image, _Base);\n\n  function Image(img, onload) {\n    var _this;\n\n    _classCallCheck(this, Image);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"img\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"imgIsLoad\", false);\n\n    _defineProperty(_assertThisInitialized(_this), \"_draw\", function (ctx, scene) {\n      ctx.save();\n      var x = scene.xc2s(_this.x);\n      var y = scene.yc2s(_this.y);\n      var width = scene.lc2s(_this.width * _this.scale);\n      var height = scene.lc2s(_this.height * _this.scale);\n      var translateX = scene.lc2s(_this.translateX * _this.scale);\n      var translateY = scene.lc2s(_this.translateY * _this.scale); // 为了实现旋转，translate必须这么写\n\n      ctx.translate(x, y);\n      ctx.rotate(_this.rotate * Math.PI / 180);\n      ctx.globalAlpha = _this.alpha;\n      ctx.drawImage(_this.img, -width / 2 + translateX, -height / 2 - translateY, width, height);\n      ctx.globalAlpha = 1;\n      ctx.restore();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"draw\", function (ctx, scene) {\n      if (_this.imgIsLoad) {\n        _this._draw(ctx, scene);\n      } else {\n        _this.img.addEventListener(\"load\", function () {\n          return _this._draw(ctx, scene);\n        });\n      }\n    });\n\n    _this.img = new window.Image();\n    _this.img.src = img;\n\n    _this.img.onload = function () {\n      _this.imgIsLoad = true;\n      _this.width = _this.img.width;\n      _this.height = _this.img.height;\n      onload && onload();\n    };\n\n    return _this;\n  }\n\n  return Image;\n}(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack://MiniTwo/./src/shapes/image.js?");

/***/ }),

/***/ "./src/shapes/line.js":
/*!****************************!*\
  !*** ./src/shapes/line.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/shapes/base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Line =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Line, _Base);\n\n  // butt 直角不突出 | round 圆角突出 | square 直角突出\n  //round 圆角相交，半径为线宽 | bevel 平齐相交 | miter 连接处外侧延伸相交于一点\n  // TODO  miterLimit= ''\n  function Line(start, end) {\n    var _this;\n\n    _classCallCheck(this, Line);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"start\", [0, 0]);\n\n    _defineProperty(_assertThisInitialized(_this), \"end\", [0, 0]);\n\n    _defineProperty(_assertThisInitialized(_this), \"color\", \"#000\");\n\n    _defineProperty(_assertThisInitialized(_this), \"lineWidth\", 1);\n\n    _defineProperty(_assertThisInitialized(_this), \"lineCap\", \"butt\");\n\n    _defineProperty(_assertThisInitialized(_this), \"lineJoin\", \"miter\");\n\n    _defineProperty(_assertThisInitialized(_this), \"dash\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"lineDashOffset\", 0);\n\n    _this.start = start;\n    _this.end = end;\n    return _this;\n  }\n\n  _createClass(Line, [{\n    key: \"draw\",\n    value: function draw(ctx, scene) {\n      var _scene$xyc2s = scene.xyc2s(this.start),\n          _scene$xyc2s2 = _slicedToArray(_scene$xyc2s, 2),\n          x1 = _scene$xyc2s2[0],\n          y1 = _scene$xyc2s2[1];\n\n      var _scene$xyc2s3 = scene.xyc2s(this.end),\n          _scene$xyc2s4 = _slicedToArray(_scene$xyc2s3, 2),\n          x2 = _scene$xyc2s4[0],\n          y2 = _scene$xyc2s4[1];\n\n      ctx.strokeStyle = this.color;\n      ctx.lineWidth = scene.lc2s(this.lineWidth);\n      ctx.lineCap = this.lineCap;\n      ctx.lineJoin = this.lineJoin; // TODO  ctx.miterLimit= this.miterLimit\n\n      if (this.dash && this.dash[0] !== undefined && this.dash[1] !== undefined) {\n        ctx.setLineDash(this.dash);\n        ctx.lineDashOffset = this.lineDashOffset;\n      }\n\n      ctx.beginPath();\n      ctx.moveTo(x1, y1);\n      ctx.lineTo(x2, y2);\n      ctx.stroke();\n    }\n  }]);\n\n  return Line;\n}(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Line);\n\n//# sourceURL=webpack://MiniTwo/./src/shapes/line.js?");

/***/ }),

/***/ "./src/shapes/rect.js":
/*!****************************!*\
  !*** ./src/shapes/rect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/shapes/base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Rect =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Rect, _Base);\n\n  function Rect(_width, _height) {\n    var _this;\n\n    _classCallCheck(this, Rect);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"width\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"height\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"borderWidth\", 1);\n\n    _defineProperty(_assertThisInitialized(_this), \"borderColor\", \"#000\");\n\n    _defineProperty(_assertThisInitialized(_this), \"color\", \"rgba(0,0,0,0)\");\n\n    _defineProperty(_assertThisInitialized(_this), \"draw\", function (ctx, scene) {\n      var width = scene.lc2s(_this.width);\n      var height = scene.lc2s(_this.height);\n\n      var _scene$xyc2s = scene.xyc2s([_this.x - _this.width / 2, _this.y + _this.height / 2]),\n          _scene$xyc2s2 = _slicedToArray(_scene$xyc2s, 2),\n          x = _scene$xyc2s2[0],\n          y = _scene$xyc2s2[1];\n\n      ctx.strokeStyle = _this.borderColor;\n      ctx.fillStyle = _this.color;\n      ctx.lineWidth = scene.lc2s(_this.borderWidth);\n      ctx.moveTo(x, y);\n      ctx.fillRect(x, y, width, height);\n      ctx.strokeRect(x, y, width, height);\n    });\n\n    _this.width = _width;\n    _this.height = _height;\n    return _this;\n  }\n\n  return Rect;\n}(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rect);\n\n//# sourceURL=webpack://MiniTwo/./src/shapes/rect.js?");

/***/ })

/******/ });
});