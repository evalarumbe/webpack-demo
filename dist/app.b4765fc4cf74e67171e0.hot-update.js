webpackHotUpdate("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");



function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.addEventListener('click', _print_js__WEBPACK_IMPORTED_MODULE_1__["default"], false);

  element.appendChild(btn);

  return element;
}

let elementToReload = component(); // original printMe
document.body.appendChild(elementToReload);

// Hot Module Reloader
if (true) {
  module.hot.accept(/*! ./print.js */ "./src/print.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
(function() {
    console.log('Accepting the updated printMe module!');
    elementToReload = component(); // re-render the component to use the updated printMe
    document.body.appendChild(elementToReload);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ1U7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsNkNBQUM7O0FBRXZCO0FBQ0EsZ0NBQWdDLGlEQUFPOztBQUV2Qzs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLG9CQUFvQixrQ0FBWSxFQUFFO0FBQUE7QUFDbEM7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYXBwLmI0NzY1ZmM0Y2Y3NGU2NzE3MWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludC5qcyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuICBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmludE1lLCBmYWxzZSk7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5sZXQgZWxlbWVudFRvUmVsb2FkID0gY29tcG9uZW50KCk7IC8vIG9yaWdpbmFsIHByaW50TWVcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudFRvUmVsb2FkKTtcblxuLy8gSG90IE1vZHVsZSBSZWxvYWRlclxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcHJpbnQuanMnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkIHByaW50TWUgbW9kdWxlIScpO1xuICAgIGVsZW1lbnRUb1JlbG9hZCA9IGNvbXBvbmVudCgpOyAvLyByZS1yZW5kZXIgdGhlIGNvbXBvbmVudCB0byB1c2UgdGhlIHVwZGF0ZWQgcHJpbnRNZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudFRvUmVsb2FkKTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9