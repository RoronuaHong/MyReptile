webpackHotUpdate(1,{

/***/ "./api/boss.js":
/*!*********************!*\
  !*** ./api/boss.js ***!
  \*********************/
/*! exports provided: getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./utils/index.js");


var getList = function getList() {
  var url = _utils__WEBPACK_IMPORTED_MODULE_0__["config"].API_COMPLETE_BOSS + '/list';
  return _utils__WEBPACK_IMPORTED_MODULE_0__["http"].get(url);
};



/***/ })

})
//# sourceMappingURL=1.dded7299ac03fa51c772.hot-update.js.map