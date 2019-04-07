webpackHotUpdate(1,{

/***/ "./constants/list.js":
/*!***************************!*\
  !*** ./constants/list.js ***!
  \***************************/
/*! exports provided: rowList, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowList", function() { return rowList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
var rowList = [{
  id: 0,
  name: '职位名称',
  match: ''
}, {
  id: 1,
  name: '职位信息'
}, {
  id: 2,
  name: '发布时间'
}, {
  id: 3,
  name: '公司名称'
}, {
  id: 4,
  name: '公司类型'
}, {
  id: 5,
  name: '公司人数'
}, {
  id: 6,
  name: '公司地址'
}, {
  id: 7,
  name: '职位详情'
}];
var color = ['#aaa', '#999', '#888', '#777', '#666', '#555', '#444', '#333'];


/***/ }),

/***/ "./containers/list/index.js":
/*!**********************************!*\
  !*** ./containers/list/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/_antd@3.16.1@antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/_antd@3.16.1@antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/list */ "./constants/list.js");
/* harmony import */ var _api_boss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../api/boss */ "./api/boss.js");












var _jsxFileName = "/Users/slimhong/Desktop/hobbies/reptile/MyReptile/frontend/containers/list/index.js";




var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a.Content;

var renderList = function renderList(list) {
  return list.map(function (item, i) {
    var rowLists;

    _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_9___default()(item).map(function (l, j) {
      rowLists = _constants_list__WEBPACK_IMPORTED_MODULE_13__["rowList"].map(function (m, k) {
        console.log(m);
      });
    }); // console.log(rowLists)


    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  });
};

var List =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(List, _PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      list: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(List, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var option;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_boss__WEBPACK_IMPORTED_MODULE_14__["getList"])();

              case 2:
                option = _context.sent;
                this.setState({
                  list: option.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var list = this.state.list;
      console.log(list);
      var renderLists = renderList(list);
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "list-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", {
        className: "list-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_12__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=1.6c6acdf60cfb2f936aac.hot-update.js.map