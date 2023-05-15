/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\nfunction createAbout() {\r\n  //Create elements\r\n  const mainSection = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'about-page', 'main-wrapper', null);\r\n  const aboutWrapper = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div','about-wrapper', null, null);\r\n  const headline = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', null, null, 'About us');\r\n  const paragraph = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');\r\n\r\n  //Append elements\r\n  aboutWrapper.appendChild(headline);\r\n  aboutWrapper.appendChild(paragraph);\r\n  mainSection.appendChild(aboutWrapper);\r\n  _website__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(mainSection);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);\n\n//# sourceURL=webpack://restaurant_page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\nfunction createHomePage() {\r\n  //Create elements\r\n  const mainSection = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'home-page', 'main-wrapper', null);\r\n  const textWrapper = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, null, null);\r\n  const firstHomeLine = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', null, null, 'Made by us.');\r\n  const secondHomeLine = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', null, null, 'Enjoyed by Everyone.');\r\n  //Append elements\r\n  textWrapper.appendChild(firstHomeLine);\r\n  textWrapper.appendChild(secondHomeLine);\r\n  mainSection.appendChild(textWrapper);\r\n\r\n  _website__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(mainSection);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\n\r\n\r\n\r\n  function renderPage(pageFunction) {\r\n    document.querySelector('#content').innerHTML = ' ';\r\n    (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\r\n    pageFunction();\r\n    (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\r\n  }\r\n\r\n  document.addEventListener('click',(e) =>{\r\n    switch(e.target.innerText){\r\n      case 'Home':\r\n        renderPage(_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n      break;\r\n      case 'Menu':\r\n        renderPage(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n      break;\r\n      case 'About':\r\n        renderPage(_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n      break;\r\n    }\r\n  });\r\n\r\n  renderPage(_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\nlet menuItems = [{\r\n    name: 'Tasty',\r\n    description: 'Very Yummy!',\r\n    img: '../src/img/menu/1.jpg',\r\n    price: '15$'\r\n  },\r\n  {\r\n    name: 'Waffles',\r\n    description: 'Delicious!',\r\n    img: '../src/img/menu/2.jpg',\r\n    price: '7$'\r\n  },\r\n  {\r\n    name: 'Burger',\r\n    description: 'Very good!',\r\n    img: '../src/img/menu/3.jpg',\r\n    price: '25$'\r\n  },\r\n  {\r\n    name: 'Some pie',\r\n    description: 'So cool!',\r\n    img: '../src/img/menu/4.jpg',\r\n    price: '18$'\r\n  },\r\n  {\r\n    name: 'Soup',\r\n    description: 'Looks interesting!',\r\n    img: '../src/img/menu/5.jpg',\r\n    price: '52$'\r\n  },\r\n  {\r\n    name: 'Shrimps',\r\n    description: 'Ehhhh...',\r\n    img: '../src/img/menu/6.jpg',\r\n    price: '69$'\r\n  }\r\n];\r\n\r\n\r\nfunction createMenu() {\r\n  const menuGrid = (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', 'menu-grid-wrapper', null, null);\r\n  const mainSection = (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'menu-page', 'main-wrapper', null);\r\n  \r\n  menuItems.forEach(item => {\r\n    //Create elements\r\n    const itemCard = (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, 'menu-card', null);\r\n    itemCard.style.backgroundImage = `url(\"${item['img']}\")`;\r\n\r\n    const itemCardOverlay = (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, 'menu-card-overlay', null);\r\n    const itemName = (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h2', null, null, item['name']);\r\n    const itemDescription = (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, item['description']);\r\n    const itemPrice = (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, item['price']);\r\n    //Append Elements\r\n    itemCardOverlay.append(itemName, itemDescription, itemPrice);\r\n    itemCard.appendChild(itemCardOverlay);\r\n    menuGrid.appendChild(itemCard);\r\n  });\r\n\r\n  mainSection.appendChild(menuGrid);\r\n  _website_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(mainSection);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst globalContainer = document.querySelector('#content');\r\n\r\n//Function that is used to create most elements\r\nfunction createHtmlElement(type, id, classes, content) {\r\n  const element = document.createElement(type);\r\n  element.setAttribute('id', id);\r\n  element.classList.add(classes);\r\n  element.textContent = content;\r\n  return element;\r\n}\r\n\r\nfunction createHeader() {\r\n  const header = createHtmlElement('header', null, null, null);\r\n  //create navigation list\r\n  const navList = createHtmlElement('ul', 'website-menu', null, null);\r\n  const navItems = ['Home', 'Menu', 'About'];\r\n\r\n  navItems.forEach(item => {\r\n    const itemList = createHtmlElement('li', null, null, item);\r\n    navList.appendChild(itemList);\r\n  });\r\n\r\n  //create logo\r\n  const websiteLogo = createHtmlElement('span', 'website-logo', null, 'Pizzaria');\r\n\r\n  //add elements to the page\r\n  header.appendChild(navList);\r\n  header.appendChild(websiteLogo);\r\n  globalContainer.appendChild(header);\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = createHtmlElement('footer', null, null, 'Background photo by Pixzolo Photography, menu photos by Mae Mu  on Unsplash');\r\n  globalContainer.appendChild(footer);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalContainer);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;