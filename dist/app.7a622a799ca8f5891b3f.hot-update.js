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

document.body.appendChild(component());

// Hot Module Reloader
if (true) {
  module.hot.accept(/*! ./print.js */ "./src/print.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
(function() {
    console.log('Accepting the updated printMe module!');
    Object(_print_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ1U7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsNkNBQUM7O0FBRXZCO0FBQ0EsZ0NBQWdDLGlEQUFPOztBQUV2Qzs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxvQkFBb0Isa0NBQVksRUFBRTtBQUFBO0FBQ2xDO0FBQ0EsSUFBSSx5REFBTztBQUNYLEdBQUc7QUFDSCIsImZpbGUiOiJhcHAuN2E2MjJhNzk5Y2E4ZjU4OTFiM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXG4gIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByaW50TWUsIGZhbHNlKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmxldCBlbGVtZW50VG9SZWxvYWQgPSBjb21wb25lbnQoKTsgLy8gb3JpZ2luYWwgcHJpbnRNZVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuLy8gSG90IE1vZHVsZSBSZWxvYWRlclxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcHJpbnQuanMnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkIHByaW50TWUgbW9kdWxlIScpO1xuICAgIHByaW50TWUoKTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9