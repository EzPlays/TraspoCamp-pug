/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_empresaAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/empresaAlert */ \"./public/js/modulos/empresaAlert.js\");\n/* harmony import */ var _modulos_empresaAlert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modulos_empresaAlert__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://puginicial/./public/js/app.js?");

/***/ }),

/***/ "./public/js/modulos/empresaAlert.js":
/*!*******************************************!*\
  !*** ./public/js/modulos/empresaAlert.js ***!
  \*******************************************/
/***/ (() => {

eval("var btnEliminarCamion = function btnEliminarCamion(id) {\n  Swal.fire({\n    title: '¿Está seguro?',\n    text: \"¡No podrás revertir esto!\",\n    icon: 'warning',\n    width: 600,\n    padding: '4em',\n    backdrop: \"\\n          rgba(0,0,123,0.4)\\n          url(\\\"https://sweetalert2.github.io/images/nyan-cat.gif\\\")\\n          left top\\n          no-repeat\\n      \",\n    showCancelButton: true,\n    confirmButtonColor: '#3085d6',\n    cancelButtonColor: '#d33',\n    confirmButtonText: '¡Sí, bórralo!',\n    cancelButtonText: '¡No, Cancelar!'\n  }).then(function (result) {\n    if (result.isConfirmed) {\n      Swal.fire('¡Eliminado!', 'Su archivo ha sido eliminado.', 'success');\n      setTimeout(function () {\n        window.location = \"/borrarCamion/\".concat(id);\n      }, 1200);\n    }\n  });\n};\n\nvar btnEliminarCamionero = function btnEliminarCamionero(id) {\n  Swal.fire({\n    title: '¿Está seguro?',\n    text: \"¡No podrás revertir esto!\",\n    icon: 'warning',\n    width: 600,\n    padding: '4em',\n    backdrop: \"\\n          rgba(0,0,123,0.4)\\n          url(\\\"https://sweetalert2.github.io/images/nyan-cat.gif\\\")\\n          left top\\n          no-repeat\\n      \",\n    showCancelButton: true,\n    confirmButtonColor: '#3085d6',\n    cancelButtonColor: '#d33',\n    confirmButtonText: '¡Sí, bórralo!',\n    cancelButtonText: '¡No, Cancelar!'\n  }).then(function (result) {\n    if (result.isConfirmed) {\n      Swal.fire('¡Eliminado!', 'Su archivo ha sido eliminado.', 'success');\n      setTimeout(function () {\n        window.location = \"/borrarCamionero/\".concat(id);\n      }, 1200);\n    }\n  });\n};\n\nvar btnEliminarCiudad = function btnEliminarCiudad(id) {\n  Swal.fire({\n    title: '¿Está seguro?',\n    text: \"¡No podrás revertir esto!\",\n    icon: 'warning',\n    width: 600,\n    padding: '4em',\n    backdrop: \"\\n          rgba(0,0,123,0.4)\\n          url(\\\"https://sweetalert2.github.io/images/nyan-cat.gif\\\")\\n          left top\\n          no-repeat\\n      \",\n    showCancelButton: true,\n    confirmButtonColor: '#3085d6',\n    cancelButtonColor: '#d33',\n    confirmButtonText: '¡Sí, bórralo!',\n    cancelButtonText: '¡No, Cancelar!'\n  }).then(function (result) {\n    if (result.isConfirmed) {\n      Swal.fire('¡Eliminado!', 'Su archivo ha sido eliminado.', 'success');\n      setTimeout(function () {\n        window.location = \"/borrarCamion/\".concat(id);\n      }, 1200);\n    }\n  });\n};\n\nvar btnEliminarPaquete = function btnEliminarPaquete(id) {\n  Swal.fire({\n    title: '¿Está seguro?',\n    text: \"¡No podrás revertir esto!\",\n    icon: 'warning',\n    width: 600,\n    padding: '4em',\n    backdrop: \"\\n          rgba(0,0,123,0.4)\\n          url(\\\"https://sweetalert2.github.io/images/nyan-cat.gif\\\")\\n          left top\\n          no-repeat\\n      \",\n    showCancelButton: true,\n    confirmButtonColor: '#3085d6',\n    cancelButtonColor: '#d33',\n    confirmButtonText: '¡Sí, bórralo!',\n    cancelButtonText: '¡No, Cancelar!'\n  }).then(function (result) {\n    if (result.isConfirmed) {\n      Swal.fire('¡Eliminado!', 'Su archivo ha sido eliminado.', 'success');\n      setTimeout(function () {\n        window.location = \"/borrarPaquete/\".concat(id);\n      }, 1200);\n    }\n  });\n};\n\n//# sourceURL=webpack://puginicial/./public/js/modulos/empresaAlert.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/app.js");
/******/ 	
/******/ })()
;