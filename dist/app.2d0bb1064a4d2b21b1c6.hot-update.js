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
    document.body.removeChild(elementToReload);
    elementToReload = component(); // re-render the component to use the updated printMe
    document.body.appendChild(elementToReload);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ1U7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsNkNBQUM7O0FBRXZCO0FBQ0EsZ0NBQWdDLGlEQUFPOztBQUV2Qzs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLG9CQUFvQixrQ0FBWSxFQUFFO0FBQUE7QUFDbEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJhcHAuMmQwYmIxMDY0YTRkMmIyMWIxYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXG4gIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByaW50TWUsIGZhbHNlKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmxldCBlbGVtZW50VG9SZWxvYWQgPSBjb21wb25lbnQoKTsgLy8gb3JpZ2luYWwgcHJpbnRNZVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50VG9SZWxvYWQpO1xuXG4vLyBIb3QgTW9kdWxlIFJlbG9hZGVyXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgnLi9wcmludC5qcycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdBY2NlcHRpbmcgdGhlIHVwZGF0ZWQgcHJpbnRNZSBtb2R1bGUhJyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50VG9SZWxvYWQpO1xuICAgIGVsZW1lbnRUb1JlbG9hZCA9IGNvbXBvbmVudCgpOyAvLyByZS1yZW5kZXIgdGhlIGNvbXBvbmVudCB0byB1c2UgdGhlIHVwZGF0ZWQgcHJpbnRNZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudFRvUmVsb2FkKTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9