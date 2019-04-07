exports.ids = [0];
exports.modules = {

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



/***/ }),

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
  match: 'jobName'
}, {
  id: 1,
  name: '职位信息',
  match: 'jobDetail'
}, {
  id: 2,
  name: '发布时间',
  match: 'releaseTime'
}, {
  id: 3,
  name: '公司名称',
  match: 'companyName'
}, {
  id: 4,
  name: '公司类型',
  match: 'typeOfBusiness'
}, {
  id: 5,
  name: '公司人数',
  match: 'numberOfPeople'
}, {
  id: 6,
  name: '公司地址',
  match: 'address'
}, {
  id: 7,
  name: '职位详情',
  match: 'jobRequirement'
}, {
  id: 100,
  name: '公司网址',
  match: 'url'
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
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/list */ "./constants/list.js");
/* harmony import */ var _api_boss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../api/boss */ "./api/boss.js");












var _jsxFileName = "/Users/slimhong/Desktop/hobbies/reptile/MyReptile/frontend/containers/list/index.js";




var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a.Content;

var renderList = function renderList(list) {
  return list.map(function (item, i) {
    var rowLists;

    _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_9___default()(item).map(function (l, j) {
      rowLists = _constants_list__WEBPACK_IMPORTED_MODULE_13__["rowList"].map(function (m, k) {});
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
      console.log(list); // const renderLists = renderList(list)

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



/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/entries.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/entries.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/promise.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/promise.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/regenerator/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! exports provided: RECRUIT_API, BOSS_API, API_COMPLETE_BOSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECRUIT_API", function() { return RECRUIT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOSS_API", function() { return BOSS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_COMPLETE_BOSS", function() { return API_COMPLETE_BOSS; });
var recruitApi;

if (window.location.host.match(/^(localhost(:[\d]+)?|t.jobsearch.com)$/)) {
  recruitApi = 'http://localhost:7713';
} else {
  recruitApi = 'https://www.jobsearch.com:7713';
}

var RECRUIT_API = recruitApi; // BOSS直聘接口

var BOSS_API = '/boss'; // BOSS直聘完整API

var API_COMPLETE_BOSS = RECRUIT_API + BOSS_API;

/***/ }),

/***/ "./utils/http.js":
/*!***********************!*\
  !*** ./utils/http.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./utils/config.js");
/* harmony import */ var _msg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./msg */ "./utils/msg.js");





/**
 * @param  {Error}
 * @return {[type]}
 */

var catchError = function catchError(error) {
  _msg__WEBPACK_IMPORTED_MODULE_4__["default"].close();

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    _msg__WEBPACK_IMPORTED_MODULE_4__["default"].info('服务器响应错误');
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
    _msg__WEBPACK_IMPORTED_MODULE_4__["default"].info('网络请求错误');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
    _msg__WEBPACK_IMPORTED_MODULE_4__["default"].info('网络请求过程发生错误');
  }

  console.log(error.config);
};
/**
 * 检测用户Token是否有效
 * @param  {Object} data 服务端返回数据
 */


var checkInvalidToken = function checkInvalidToken(data) {
  if (data.code === 'E100000' && data.msg === 'Error Token') {
    var cookieParam = {
      expires: -1,
      path: '/',
      domain: _config__WEBPACK_IMPORTED_MODULE_3__["COOKIE_BIGCAT_DOMAIN"]
    };
    cookie.remove(_config__WEBPACK_IMPORTED_MODULE_3__["COOKIE_BIGCAT_TOKEN"], cookieParam);
    cookie.remove(_config__WEBPACK_IMPORTED_MODULE_3__["COOKIE_BIGCAT_USER_NAME"], cookieParam);
    cookie.remove(_config__WEBPACK_IMPORTED_MODULE_3__["COOKIE_BIGCAT_USER"], cookieParam);
    var currUrl = encodeURIComponent(window.location.href);
    window.location.href = '/login.html?c=' + currUrl;
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get(url, data) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
        params: data
      }).then(function (result) {
        if (result.data) {
          if (!result.data.success) {
            checkInvalidToken(result.data.data);
          }

          resolve(result.data);
        } else {
          reject(result.data || result);
        }
      }).catch(function (error) {
        catchError(error); // reject(error)
      });
    });
  },
  post: function post(url, data) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, qs.stringify(data)).then(function (result) {
        if (result.data) {
          if (!result.data.success) {
            checkInvalidToken(result.data.data);
          }

          resolve(result.data);
        } else {
          reject(result.data || result);
        }
      }).catch(function (error) {
        catchError(error); // reject(error)
      });
    });
  },
  postFormData: function postFormData(url, data, config) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }, config)).then(function (result) {
        if (result.data) {
          if (!result.data.success) {
            checkInvalidToken(result.data.data);
          }

          resolve(result.data);
        } else {
          reject(result.data || result);
        }
      }).catch(function (error) {
        catchError(error); // reject(error)
      });
    });
  },
  delete: function _delete(url, data) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(url, {
        params: data
      }).then(function (result) {
        if (result.data) {
          if (!result.data.success) {
            checkInvalidToken(result.data.data);
          }

          resolve(result.data);
        } else {
          reject(result.data || result);
        }
      }).catch(function (error) {
        catchError(error); // reject(error)
      });
    });
  },
  put: function put(url, data) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(url, qs.stringify(data)).then(function (result) {
        if (result.data) {
          if (!result.data.success) {
            checkInvalidToken(result.data.data);
          }

          resolve(result.data);
        } else {
          reject(result.data || result);
        }
      }).catch(function (error) {
        catchError(error); // reject(error)
      });
    });
  },
  ajax: function ajax(option) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default()(option).then(function (result) {
        if (result.data) {
          if (!result.data.success) {
            checkInvalidToken(result.data.data);
          }

          resolve(result.data);
        } else {
          reject(result.data || result);
        }
      }).catch(function (error) {
        catchError(error); // reject(error)
      });
    });
  },
  all: function all() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.all([].concat(args)).then(axios__WEBPACK_IMPORTED_MODULE_2___default.a.spread(function () {
        for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          params[_key2] = arguments[_key2];
        }

        resolve(params);
      })).catch(function (error) {
        catchError(error); // reject(error)
      });
    });
  }
});

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: config, http, msg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./utils/config.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./utils/http.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "http", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msg */ "./utils/msg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "msg", function() { return _msg__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./utils/msg.js":
/*!**********************!*\
  !*** ./utils/msg.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  coverIndex: 0,
  info: function info(message, fn) {
    var msg = document.createElement('div');
    var content = document.createElement('div');
    msg.className = 'm1-msg';
    content.className = 'm1-msg-content';
    content.innerHTML = message;
    msg.appendChild(content);
    document.body.appendChild(msg);
    setTimeout(function () {
      document.body.removeChild(msg);
      fn && fn();
    }, 2000);
  },
  loading: function loading(timer) {
    var _this = this;

    if (document.querySelectorAll('.m1-loading').length) {
      return;
    }

    timer = +timer;
    var content = document.createElement('div');
    content.className = 'm1-loading-bg';
    content.innerHTML = '<div class="m1-loading"><i></i></div>';
    var index = this.cover(content, 'loading');

    if (!isNaN(timer)) {
      setTimeout(function () {
        _this.close(index);
      }, timer * 1000);
    }

    return index;
  },
  confirm: function confirm(option, _confirm, cancel, conformName, cancelName) {
    var message = typeof option === 'string' ? option : option.title || '';
    var description = typeof option === 'string' ? '' : option.content ? "<p>".concat(option.content, "</p>") : '';
    var content = document.createElement('div');
    content.className = 'm1-confirm';
    content.innerHTML = "<span class=\"m1-confirm-close\" data-m1-cover-cancel></span>\n\t\t\t\t\t               <div class=\"m1-confirm-content\">\n\t\t\t\t\t                 <h3 class=\"m1-text-center\">".concat(message, "</h3>\n\t\t\t\t\t                 ").concat(description, "\n\t\t\t\t\t               </div>\n\t\t\t\t\t               <div class=\"m1-confirm-footer\">\n\t\t\t\t\t                 <button class=\"m1-btn\" data-m1-cover-cancel>").concat(cancelName || "取消", "</button>\n\t\t\t\t\t                 <button class=\"m1-btn m1-btn-primary\" data-m1-cover-confirm>").concat(conformName || "确认", "</button>\n\t\t\t\t\t               </div>");
    return this.cover(content, 'confirm', _confirm, cancel);
  },
  dialog: function dialog(selector, confirm, cancel) {
    selector = typeof selector === 'string' ? document.querySelector(selector) : selector;
    this.cover(selector, 'dialog', confirm, cancel);
  },
  cover: function cover(content, type, confirm, cancel) {
    var _this = this;

    var index = ++this.coverIndex;
    var body = document.body;
    var shadow = document.createElement('div');
    shadow.className = 'm1-cover-shadow';
    shadow.setAttribute('data-m1-cover', index);
    shadow.setAttribute('data-m1-cover-type', type);
    body.appendChild(shadow);

    if (content instanceof NodeList && content.length > 0) {
      content = content[0];
    }

    content.setAttribute('data-m1-cover', index);
    content.setAttribute('data-m1-cover-type', type);

    if (type === 'loading') {
      body.appendChild(content);
    } else if (type === 'confirm') {
      body.appendChild(content);
    } else if (type === 'dialog') {
      content.classList.add('open');
    }

    var bindCancel = function bindCancel(btn) {
      btn.addEventListener('click', function (e) {
        _this.close(index, cancel);
      }, false);
    };

    var bindConfirm = function bindConfirm(btn) {
      btn.addEventListener('click', function (e) {
        if (typeof confirm === 'function') {
          confirm();
        }
      }, false);
    };

    var m1covers = document.querySelectorAll('[data-m1-cover="' + index + '"]'); // m1covers.forEach(cover => {
    // 	const btnCancels = cover.querySelectorAll('[data-m1-cover-cancel]')
    // 	const btnConfirms = cover.querySelectorAll('[data-m1-cover-confirm]')
    // 	btnCancels.forEach(bindCancel)
    // 	btnConfirms.forEach(bindConfirm)
    // })

    for (var i = 0; i < m1covers.length; i++) {
      var btnCancels = m1covers[i].querySelectorAll('[data-m1-cover-cancel]');
      var btnConfirms = m1covers[i].querySelectorAll('[data-m1-cover-confirm]');

      for (var n = 0; n < btnCancels.length; n++) {
        bindCancel(btnCancels[n]);
      }

      for (var m = 0; m < btnConfirms.length; m++) {
        bindConfirm(btnConfirms[m]);
      }
    }

    return index;
  },
  close: function close(index, func) {
    var removeNodes = function removeNodes(nodes) {
      // nodes.forEach(node => {
      // 	node.parentNode.removeChild(node)
      // })
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].parentNode.removeChild(nodes[i]);
      }
    };

    if (typeof index === 'string') {
      var covers = document.querySelectorAll('[data-m1-cover-type="' + index + '"]');

      if (index === 'loading' || index === 'confirm') {
        removeNodes(covers);
      } else if (index === 'dialog') {
        var _coverShadows = document.querySelectorAll('.m1-cover-shadow[data-m1-cover-type="' + index + '"]');

        removeNodes(_coverShadows); // covers.forEach(cover => {
        // 	cover.classList.remove('open')
        // })

        for (var i = 0; i < covers.length; i++) {
          covers[i].classList.remove('open');
        }
      }
    } else if (typeof index === 'number') {
      var _covers = document.querySelectorAll('[data-m1-cover="' + index + '"]');

      if (_covers.length) {
        var type = _covers[0].getAttribute('data-m1-cover-type');

        if (type === 'loading' || type === 'confirm') {
          removeNodes(_covers);
        } else if (type === 'dialog') {
          removeNodes(coverShadows); // covers.forEach(cover => {
          // 	cover.classList.remove('open')
          // })

          for (var _i = 0; _i < _covers.length; _i++) {
            _covers[_i].classList.remove('open');
          }
        }
      }
    } else {
      var loadings = document.querySelectorAll('[data-m1-cover-type="loading"]');
      var confirms = document.querySelectorAll('[data-m1-cover-type="confirm"]');
      var dialogs = document.querySelectorAll('[data-m1-cover-type="dialog"]');
      removeNodes(loadings);
      removeNodes(confirms); // dialogs.forEach(dialog => {
      // 	dialog.classList.remove('open')
      // })

      for (var _i2 = 0; _i2 < dialogs.length; _i2++) {
        dialogs[_i2].classList.remove('open');
      }
    }

    if (typeof func === 'function') {
      func();
    }
  }
});

/***/ })

};;
//# sourceMappingURL=0.js.map