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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: manipulateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manipulateInput", function() { return manipulateInput; });
/* harmony import */ var _scripts_copyNodeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/copyNodeContent */ "./src/scripts/copyNodeContent.js");
/* harmony import */ var _scripts_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/promise */ "./src/scripts/promise.js");




var form = document.getElementById('form');
var input = document.getElementById('input');
var submit = document.getElementById('submit');
var output = document.getElementById('output');
var copyBtn = document.getElementById('copy');
var clearBtn = document.getElementById('clear'); // function to run with textarea input

var manipulateInput = function manipulateInput(input) {
  var formOutput = input.split('').filter(function (_char) {
    return _char !== ' ' && _char !== '"' && _char.length > 0;
  });
  var lastItem = formOutput[formOutput.length - 1]; // regex replace argument will remove all line-breaks

  return lastItem === ',' || lastItem === '' ? formOutput.slice(0, -1).join('').replace(/(\r\n|\n|\r)/gm, "") : formOutput.join('').replace(/(\r\n|\n|\r)/gm, "");
}; // run manipulateInput function with fetched input value


if (submit) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    var value = input.value;
    value && Object(_scripts_promise__WEBPACK_IMPORTED_MODULE_1__["default"])(value).then(function () {
      return manipulateInput(value);
    }).then(function (value) {
      return output.innerHTML = "<div class=\"output-value\">".concat(value, "</div>");
    });
  });
} // clears textarea input and scopes output fields


var clear = function clear() {
  input.value = '';
  output.innerHTML = 'Output will display here';
};

if (clearBtn) clearBtn.addEventListener('click', clear); // copies scopes from output

if (copyBtn) copyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  Object(_scripts_copyNodeContent__WEBPACK_IMPORTED_MODULE_0__["default"])(output, 'blink');
});


/***/ }),

/***/ "./src/scripts/copyNodeContent.js":
/*!****************************************!*\
  !*** ./src/scripts/copyNodeContent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggleClassInOneClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleClassInOneClick */ "./src/scripts/toggleClassInOneClick.js");


var copyNodeContent = function copyNodeContent(node, className) {
  var range = document.createRange();
  range.selectNode(node);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  if (node.innerHTML !== '') {
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    Object(_toggleClassInOneClick__WEBPACK_IMPORTED_MODULE_0__["default"])(node, className);
  } else {
    alert('no content to copy');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (copyNodeContent);

/***/ }),

/***/ "./src/scripts/promise.js":
/*!********************************!*\
  !*** ./src/scripts/promise.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var promise = function promise(value) {
  return new Promise(function (res, rej) {
    try {
      res(value);
    } catch (error) {
      rej(error);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (promise);

/***/ }),

/***/ "./src/scripts/toggleClassInOneClick.js":
/*!**********************************************!*\
  !*** ./src/scripts/toggleClassInOneClick.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleClassInOneClick = function toggleClassInOneClick(node, className) {
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  node.classList.add("".concat(className));
  setTimeout(function () {
    node.classList.remove("".concat(className));
  }, time);
};

/* harmony default export */ __webpack_exports__["default"] = (toggleClassInOneClick);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvcHlOb2RlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RvZ2dsZUNsYXNzSW5PbmVDbGljay5qcyJdLCJuYW1lcyI6WyJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0Iiwic3VibWl0Iiwib3V0cHV0IiwiY29weUJ0biIsImNsZWFyQnRuIiwibWFuaXB1bGF0ZUlucHV0IiwiZm9ybU91dHB1dCIsInNwbGl0IiwiZmlsdGVyIiwiY2hhciIsImxlbmd0aCIsImxhc3RJdGVtIiwic2xpY2UiLCJqb2luIiwicmVwbGFjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInByb21pc2UiLCJ0aGVuIiwiaW5uZXJIVE1MIiwiY2xlYXIiLCJjb3B5Tm9kZUNvbnRlbnQiLCJub2RlIiwiY2xhc3NOYW1lIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGUiLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImV4ZWNDb21tYW5kIiwidG9nZ2xlQ2xhc3NJbk9uZUNsaWNrIiwiYWxlcnQiLCJQcm9taXNlIiwicmVzIiwicmVqIiwiZXJyb3IiLCJ0aW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QUFIO0FBQ0Q7QUFDRixHQU5ELENBRG1CO0FBQUEsQ0FBckI7O0FBU2lCcEIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDVEY7QUFBQSxJQUFNZSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNWLElBQUQsRUFBTUMsU0FBTixFQUErQjtBQUFBLE1BQWRlLElBQWMsdUVBQVQsSUFBUztBQUN6RGhCLE1BQUksQ0FBQ2lCLFNBQUwsQ0FBZUMsR0FBZixXQUFzQmpCLFNBQXRCO0FBRUFrQixZQUFVLENBQUMsWUFBTTtBQUNmbkIsUUFBSSxDQUFDaUIsU0FBTCxDQUFlRyxNQUFmLFdBQXlCbkIsU0FBekI7QUFDRCxHQUZTLEVBRVBlLElBRk8sQ0FBVjtBQUdILENBTkQ7O0FBUWVOLG9GQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBjb3B5Tm9kZUNvbnRlbnQgZnJvbSAnLi9zY3JpcHRzL2NvcHlOb2RlQ29udGVudCdcbmltcG9ydCBwcm9taXNlIGZyb20gJy4vc2NyaXB0cy9wcm9taXNlJ1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKVxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0JylcbmNvbnN0IGNvcHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weScpXG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpXG5cbi8vIGZ1bmN0aW9uIHRvIHJ1biB3aXRoIHRleHRhcmVhIGlucHV0XG5jb25zdCBtYW5pcHVsYXRlSW5wdXQgPSBpbnB1dCA9PiB7XG4gIGNvbnN0IGZvcm1PdXRwdXQgPSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGNoYXIgPT4gY2hhciAhPT0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBjaGFyICE9PSAnXCInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBjaGFyLmxlbmd0aCA+IDApXG4gIFxuICBjb25zdCBsYXN0SXRlbSA9IGZvcm1PdXRwdXRbZm9ybU91dHB1dC5sZW5ndGggLTFdXG4gIC8vIHJlZ2V4IHJlcGxhY2UgYXJndW1lbnQgd2lsbCByZW1vdmUgYWxsIGxpbmUtYnJlYWtzXG4gIHJldHVybiBsYXN0SXRlbSA9PT0gJywnIHx8IGxhc3RJdGVtID09PSAnJ1xuICAgICAgICAgPyBmb3JtT3V0cHV0LnNsaWNlKDAsIC0xKS5qb2luKCcnKS5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKVxuICAgICAgICAgOiBmb3JtT3V0cHV0LmpvaW4oJycpLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpXG59XG5cbi8vIHJ1biBtYW5pcHVsYXRlSW5wdXQgZnVuY3Rpb24gd2l0aCBmZXRjaGVkIGlucHV0IHZhbHVlXG5pZihzdWJtaXQpIHtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXRcbiAgXG4gICAgdmFsdWUgJiZcbiAgICBwcm9taXNlKHZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBtYW5pcHVsYXRlSW5wdXQodmFsdWUpXG4gICAgfSkudGhlbigodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiBvdXRwdXQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJvdXRwdXQtdmFsdWVcIj4ke3ZhbHVlfTwvZGl2PmBcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjbGVhcnMgdGV4dGFyZWEgaW5wdXQgYW5kIHNjb3BlcyBvdXRwdXQgZmllbGRzXG5jb25zdCBjbGVhciA9ICgpID0+IHtcbiAgaW5wdXQudmFsdWUgPSAnJ1xuICBvdXRwdXQuaW5uZXJIVE1MID0gJ091dHB1dCB3aWxsIGRpc3BsYXkgaGVyZSdcbn1cblxuaWYoY2xlYXJCdG4pIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXIpXG5cbi8vIGNvcGllcyBzY29wZXMgZnJvbSBvdXRwdXRcbmlmKGNvcHlCdG4pIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29weU5vZGVDb250ZW50KG91dHB1dCwgJ2JsaW5rJylcbn0pXG5cbmV4cG9ydCB7IG1hbmlwdWxhdGVJbnB1dCB9IiwiaW1wb3J0IHRvZ2dsZUNsYXNzSW5PbmVDbGljayBmcm9tICcuL3RvZ2dsZUNsYXNzSW5PbmVDbGljaydcblxuY29uc3QgY29weU5vZGVDb250ZW50ID0gKG5vZGUsIGNsYXNzTmFtZSk9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShub2RlKVxuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKVxuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZShyYW5nZSlcblxuICAgIGlmKG5vZGUuaW5uZXJIVE1MICE9PSAnJykge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpICAgIFxuICAgICAgdG9nZ2xlQ2xhc3NJbk9uZUNsaWNrKG5vZGUsY2xhc3NOYW1lKVxuICAgIH0gZWxzZXtcbiAgICAgIGFsZXJ0KCdubyBjb250ZW50IHRvIGNvcHknKVxuICAgIH1cblxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgY29weU5vZGVDb250ZW50IiwiY29uc3QgcHJvbWlzZSA9IHZhbHVlID0+XG4gIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXModmFsdWUpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlaihlcnJvcilcbiAgICB9XG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgcHJvbWlzZSIsImNvbnN0IHRvZ2dsZUNsYXNzSW5PbmVDbGljayA9IChub2RlLGNsYXNzTmFtZSwgdGltZT0xMDAwKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfWApXG4gICAgfSwgdGltZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZUNsYXNzSW5PbmVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=