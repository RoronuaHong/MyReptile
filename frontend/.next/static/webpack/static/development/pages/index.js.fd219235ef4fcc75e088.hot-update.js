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
  return list.map(function (l, i) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: l.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 3,
      className: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, l.name, " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 21,
      className: "detail",
      style: {
        background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][i]
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
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
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "list-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
    className: "list-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    style: {
      borderBottom: "1px solid ".concat(_constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][3]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][6]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    className: "detail",
    style: {
      background: _constants_list__WEBPACK_IMPORTED_MODULE_7__["color"][7]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.fd219235ef4fcc75e088.hot-update.js.map