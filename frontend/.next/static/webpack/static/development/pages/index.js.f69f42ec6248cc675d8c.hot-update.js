webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/list/index.js":
/*!**********************************!*\
  !*** ./containers/list/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/list */ "./constants/list.js");
var _jsxFileName = "/Users/slimhong/Desktop/hobbies/reptile/MyReptile/frontend/containers/list/index.js";



var renderList = function renderList(list) {
  return list.map(function (l) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: l.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, l.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    })));
  });
};

var List = function List(lists) {
  var renderLists = renderList(_constants_list__WEBPACK_IMPORTED_MODULE_1__["list"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, renderLists));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.f69f42ec6248cc675d8c.hot-update.js.map