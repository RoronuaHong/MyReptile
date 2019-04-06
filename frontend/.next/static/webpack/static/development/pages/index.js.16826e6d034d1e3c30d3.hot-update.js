webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/list/index.js":
/*!**********************************!*\
  !*** ./containers/list/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/_antd@3.16.1@antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/_antd@3.16.1@antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/_antd@3.16.1@antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/_antd@3.16.1@antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/_antd@3.16.1@antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/_antd@3.16.1@antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/list */ "./constants/list.js");






var _jsxFileName = "/Users/slimhong/Desktop/hobbies/reptile/MyReptile/frontend/containers/list/index.js";


var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content;

var renderList = function renderList(list) {
  return list.map(function (l) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: l.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 2,
      className: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, l.name, " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 20,
      className: "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"));
  });
};

var List = function List(lists) {
  var renderLists = renderList(_constants_list__WEBPACK_IMPORTED_MODULE_7__["list"]);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "list-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
    className: "list-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, renderLists)));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.16826e6d034d1e3c30d3.hot-update.js.map