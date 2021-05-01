/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/goBar.ts":
/*!*************************!*\
  !*** ./src/ts/goBar.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoBar": function() { return /* binding */ GoBar; }
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./src/ts/random.ts");

var GoBar = (function () {
    function GoBar() {
        this.resizeHandle = this.resizeHandle.bind(this);
        this.amount = 30;
        this.speed = 1;
        var svgns = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(svgns, "svg");
        this.gradient = document.createElementNS(svgns, "linearGradient");
        this.stop1 = document.createElementNS(svgns, "stop");
        this.stop2 = document.createElementNS(svgns, "stop");
        this.stop3 = document.createElementNS(svgns, "stop");
        this.svg.setAttribute("version", "1.1");
        this.svg.setAttribute("xmlns", svgns);
        this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.screenH = screen.height;
        this.screenW = screen.width;
        this.svg.setAttribute("viewBox", "0 0 " + this.screenW + " " + this.screenH);
        this.svg.style.position = "fixed";
        this.svg.style.top = "0";
        this.svg.style.height = this.screenH.toString();
        this.svg.style.width = this.screenW.toString();
        this.gradient.id = "gradient";
        this.gradient.setAttribute("x1", "0");
        this.gradient.setAttribute("x2", this.screenW.toString());
        this.gradient.setAttribute("y1", "20");
        this.gradient.setAttribute("y2", "20");
        this.gradient.setAttribute("gradientUnits", "userSpaceOnUse");
        this.stop1.setAttribute("offset", "0");
        this.stop1.style.stopColor = "green";
        this.stop2.setAttribute("offset", "0.1");
        this.stop2.style.stopColor = "green";
        this.stop3.setAttribute("offset", "1");
        this.stop3.style.stopColor = "green";
        this.stop3.style.stopOpacity = "0";
        window.addEventListener("resize", this.resizeHandle);
        this.gradient.appendChild(this.stop1);
        this.gradient.appendChild(this.stop2);
        this.gradient.appendChild(this.stop3);
        this.svg.appendChild(this.gradient);
        this.dispaly();
    }
    GoBar.prototype.resizeHandle = function (ev) {
        this.screenH = screen.height;
        this.screenW = screen.width;
        this.svg.setAttribute("viewBox", "0 0 " + this.screenW + " " + this.screenH);
    };
    GoBar.prototype.dispaly = function () {
        var _this = this;
        if (this.svg.children.length < this.amount) {
            this.createAnimate();
        }
        setTimeout(function () { _this.dispaly(); }, _random__WEBPACK_IMPORTED_MODULE_0__.default.number(0, 10));
    };
    GoBar.prototype.createAnimate = function () {
        var direction;
        (function (direction) {
            direction[direction["tb"] = 0] = "tb";
            direction[direction["bt"] = 1] = "bt";
            direction[direction["lr"] = 2] = "lr";
            direction[direction["rl"] = 3] = "rl";
        })(direction || (direction = {}));
        ;
        var ran = _random__WEBPACK_IMPORTED_MODULE_0__.default.number(direction.tb, direction.rl);
        var svgns = "http://www.w3.org/2000/svg";
        var posy = 0;
        var posx = 0;
        if (ran == direction.tb || ran == direction.bt)
            posx = (_random__WEBPACK_IMPORTED_MODULE_0__.default.number(0, this.screenH));
        else
            var posy = (_random__WEBPACK_IMPORTED_MODULE_0__.default.number(0, this.screenW));
        var rectagle = document.createElementNS(svgns, "rect");
        var group = document.createElementNS(svgns, "g");
        group.style.transform = "translate(" + posx + "px, " + posy + "px)";
        rectagle.setAttribute("height", "5");
        rectagle.setAttribute("width", this.screenW.toString());
        rectagle.setAttribute("fill", "url(#gradient)");
        switch (ran) {
            case direction.tb:
                rectagle.style.animation = "moveYn " + this.speed + "s linear";
                break;
            case direction.bt:
                rectagle.style.animation = "moveYp " + this.speed + "s linear";
                break;
            case direction.lr:
                rectagle.style.animation = "moveXn " + this.speed + "s linear";
                break;
            case direction.rl:
                rectagle.style.animation = "moveXp " + this.speed + "s linear";
                break;
            default:
                break;
        }
        rectagle.onanimationend = function (en) {
            group.remove();
        };
        group.appendChild(rectagle);
        this.svg.appendChild(group);
    };
    return GoBar;
}());



/***/ }),

/***/ "./src/ts/humbagerMenu.ts":
/*!********************************!*\
  !*** ./src/ts/humbagerMenu.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HumbagerMenu": function() { return /* binding */ HumbagerMenu; }
/* harmony export */ });
var HumbagerMenu = (function () {
    function HumbagerMenu(menuIcon, moreElement) {
        this.menuIcon = menuIcon;
        this.moreElement = moreElement;
        this.hadleClick = this.hadleClick.bind(this);
        this.isopen = this.menuIcon.classList.contains("open");
        this.menuIcon.addEventListener("click", this.hadleClick);
    }
    HumbagerMenu.prototype.hadleClick = function () {
        if (this.isopen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    HumbagerMenu.prototype.open = function () {
        var _a;
        this.menuIcon.classList.toggle("open");
        (_a = this.moreElement) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
            element.classList.toggle("open");
        });
        this.isopen = true;
    };
    HumbagerMenu.prototype.close = function () {
        var _a;
        this.menuIcon.classList.toggle("open");
        (_a = this.moreElement) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
            element.classList.toggle("open");
        });
        this.isopen = false;
    };
    return HumbagerMenu;
}());



/***/ }),

/***/ "./src/ts/magicType.ts":
/*!*****************************!*\
  !*** ./src/ts/magicType.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagicType": function() { return /* binding */ MagicType; }
/* harmony export */ });
var MagicType = (function () {
    function MagicType(element, options) {
        this.element = element;
        this.options = options;
        this.spaChar = "!\"#$%&'()*+,-:;<=>?@{|}~\u00A1\u00A2\u00A3\u00A4\u00A5\u00A6\u00A7\u00BC\u00E6\u058D\u058E\u058F";
        this.nextTime = 100;
        this.count = 0;
        this.trigar = true;
        this.textIndex = 0;
        this.action = this.action.bind(this);
        this.text = element.innerText;
        setTimeout(this.action, 1000);
    }
    MagicType.prototype.action = function () {
        var _a, _b, _c;
        if (this.trigar) {
            this.count++;
            if (this.count > this.text.length) {
                this.trigar = !this.trigar;
                if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.delay)
                    this.nextTime = (_b = this.options) === null || _b === void 0 ? void 0 : _b.delay;
            }
        }
        else {
            this.count--;
            this.nextTime = 50;
            if (this.count < 0) {
                if ((_c = this.options) === null || _c === void 0 ? void 0 : _c.texts) {
                    this.text = this.options.texts[this.textIndex];
                    this.textIndex++;
                    if (this.textIndex > this.options.texts.length - 1)
                        this.textIndex = 0;
                }
                this.trigar = !this.trigar;
            }
        }
        this.element.innerText = this.text.substr(0, this.count) + this.genText(this.text.length - this.count);
        setTimeout(this.action, this.nextTime);
    };
    MagicType.prototype.genText = function (len) {
        var text = "";
        for (var i = 0; i < len; i++) {
            var random = Math.random() * (this.spaChar.length - 1);
            text += this.spaChar[Math.floor(random)];
        }
        return text;
    };
    return MagicType;
}());



/***/ }),

/***/ "./src/ts/random.ts":
/*!**************************!*\
  !*** ./src/ts/random.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Random = (function () {
    function Random() {
    }
    Random.number = function (min, max, resulation) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 100; }
        if (resulation === void 0) { resulation = 1; }
        var t = Math.random() * (max - min) + min;
        var num = Math.round(t / resulation) * resulation;
        num = Math.round(num * 10000000000) / 10000000000;
        return num;
    };
    return Random;
}());
/* harmony default export */ __webpack_exports__["default"] = (Random);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _humbagerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humbagerMenu */ "./src/ts/humbagerMenu.ts");
/* harmony import */ var _magicType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./magicType */ "./src/ts/magicType.ts");
/* harmony import */ var _goBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goBar */ "./src/ts/goBar.ts");



var menu = document.querySelector(".hambaga");
var menuHub = document.querySelectorAll(".menu-hub");
var menus = document.querySelectorAll(".menus");
if (menu) {
    new _humbagerMenu__WEBPACK_IMPORTED_MODULE_0__.HumbagerMenu(menu, [menus[0], menuHub[0]]);
}
var text = document.querySelector(".spacial h3");
if (text) {
    new _magicType__WEBPACK_IMPORTED_MODULE_1__.MagicType(text, { delay: 5000, texts: ["Shadhin is my name", "I am work as developer", "this Type Script "] });
}
var gbar = new _goBar__WEBPACK_IMPORTED_MODULE_2__.GoBar();
var x = document.querySelector(".bgound");
x === null || x === void 0 ? void 0 : x.appendChild(gbar.svg);

}();
/******/ })()
;
//# sourceMappingURL=dist.js.map