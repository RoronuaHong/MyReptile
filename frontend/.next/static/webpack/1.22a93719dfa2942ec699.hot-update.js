webpackHotUpdate(1,{

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
/* harmony import */ var _api_boss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/boss */ "./api/boss.js");






var _jsxFileName = "/Users/slimhong/Desktop/hobbies/reptile/MyReptile/frontend/containers/list/index.js";



var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content;

var renderList = function renderList(list) {
  return list.map(function (l, i) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: l.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 3,
      className: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
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
        lineNumber: 12
      },
      __self: this
    }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"));
  });
};

var List = function List(lists) {
  var renderLists = renderList(_constants_list__WEBPACK_IMPORTED_MODULE_7__["list"]); // console.log(getLists)

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
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
      lineNumber: 31
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
      lineNumber: 39
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 47
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
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
      lineNumber: 55
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
      lineNumber: 63
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
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
      lineNumber: 71
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
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
      lineNumber: 79
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
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
      lineNumber: 87
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
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
      lineNumber: 97
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
      lineNumber: 105
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
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
      lineNumber: 113
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
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
      lineNumber: 121
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
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
      lineNumber: 129
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
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
      lineNumber: 137
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
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
      lineNumber: 145
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
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
      lineNumber: 153
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
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
      lineNumber: 163
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
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
      lineNumber: 171
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
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
      lineNumber: 179
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
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
      lineNumber: 187
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
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
      lineNumber: 195
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
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
      lineNumber: 203
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
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
      lineNumber: 211
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
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
      lineNumber: 219
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
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
      lineNumber: 229
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
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
      lineNumber: 237
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
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
      lineNumber: 245
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
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
      lineNumber: 253
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
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
      lineNumber: 261
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
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
      lineNumber: 269
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
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
      lineNumber: 277
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
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
      lineNumber: 285
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
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
      lineNumber: 295
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
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
      lineNumber: 303
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
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
      lineNumber: 311
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
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
      lineNumber: 319
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
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
      lineNumber: 327
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
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
      lineNumber: 335
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
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
      lineNumber: 343
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
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
      lineNumber: 351
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
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
      lineNumber: 361
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
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
      lineNumber: 369
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
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
      lineNumber: 377
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
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
      lineNumber: 385
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
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
      lineNumber: 393
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
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
      lineNumber: 401
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
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
      lineNumber: 409
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
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
      lineNumber: 417
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
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
      lineNumber: 427
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
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
      lineNumber: 435
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
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
      lineNumber: 443
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
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
      lineNumber: 451
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
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
      lineNumber: 459
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
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
      lineNumber: 467
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
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
      lineNumber: 475
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
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
      lineNumber: 483
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
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
      lineNumber: 493
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
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
      lineNumber: 501
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
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
      lineNumber: 509
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
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
      lineNumber: 517
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
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
      lineNumber: 525
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
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
      lineNumber: 533
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
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
      lineNumber: 541
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
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
      lineNumber: 549
    },
    __self: this
  }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=1.22a93719dfa2942ec699.hot-update.js.map