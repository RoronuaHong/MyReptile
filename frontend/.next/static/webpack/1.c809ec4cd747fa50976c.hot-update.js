webpackHotUpdate(1,{

/***/ "./containers/list/index.js":
/*!**********************************!*\
  !*** ./containers/list/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/_antd@3.16.1@antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/_antd@3.16.1@antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/_antd@3.16.1@antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/_antd@3.16.1@antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/_antd@3.16.1@antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/_antd@3.16.1@antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/list */ "./constants/list.js");
/* harmony import */ var _api_boss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../api/boss */ "./api/boss.js");











var _jsxFileName = "/Users/slimhong/Desktop/hobbies/reptile/MyReptile/frontend/containers/list/index.js";



var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a.Content;

var renderList = function renderList(list) {
  return list.map(function (l, i) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: l.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
      span: 3,
      className: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, l.name, " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
      span: 21,
      className: "detail",
      style: {
        background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][i]
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"));
  });
};

var List =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _PureComponent);

  function List() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "render",
    value: function render() {
      var renderLists = renderList(_constants_list__WEBPACK_IMPORTED_MODULE_12__["list"]);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "list-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        className: "list-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        type: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        type: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 3,
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, "\u804C\u4F4D\u540D\u79F0", " :"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_8___default.a, {
        span: 21,
        className: "detail",
        style: {
          background: _constants_list__WEBPACK_IMPORTED_MODULE_12__["color"][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, "\u963F\u6C34\u6DC0\u7C89\u6492\u6389"))))));
    }
  }]);

  return List;
}(PureComponent);



/***/ })

})
//# sourceMappingURL=1.c809ec4cd747fa50976c.hot-update.js.map