webpackHotUpdate(1,{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/_axios@0.18.0@axios/index.js");
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

/***/ })

})
//# sourceMappingURL=1.61cef4ce60aea277c761.hot-update.js.map