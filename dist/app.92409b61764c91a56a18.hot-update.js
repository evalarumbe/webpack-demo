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
    Object(_print_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ1U7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsNkNBQUM7O0FBRXZCO0FBQ0EsZ0NBQWdDLGlEQUFPOztBQUV2Qzs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLG9CQUFvQixrQ0FBWSxFQUFFO0FBQUE7QUFDbEM7QUFDQSxJQUFJLHlEQUFPO0FBQ1gsR0FBRztBQUNIIiwiZmlsZSI6ImFwcC45MjQwOWI2MTc2NGM5MWE1NmExOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XG5cbiAgYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnRNZSwgZmFsc2UpO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxubGV0IGVsZW1lbnRUb1JlbG9hZCA9IGNvbXBvbmVudCgpOyAvLyBvcmlnaW5hbCBwcmludE1lXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnRUb1JlbG9hZCk7XG5cbi8vIEhvdCBNb2R1bGUgUmVsb2FkZXJcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3ByaW50LmpzJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0FjY2VwdGluZyB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZSEnKTtcbiAgICBwcmludE1lKCk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==