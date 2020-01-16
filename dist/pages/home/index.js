(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./src/actions/counter.js":
/*!********************************!*\
  !*** ./src/actions/counter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minus = exports.add = undefined;
exports.asyncAdd = asyncAdd;

var _counter = __webpack_require__(/*! ../constants/counter */ "./src/constants/counter.js");

var add = exports.add = function add() {
  return {
    type: _counter.ADD
  };
};
var minus = exports.minus = function minus() {
  return {
    type: _counter.MINUS
  };
};

// 异步的action
function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add());
    }, 2000);
  };
}

/***/ }),

/***/ "./src/pages/home/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.0@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.0.0@@tarojs/redux/index.js");

var _api = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");

var _counter = __webpack_require__(/*! ../../actions/counter */ "./src/actions/counter.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["title", "body", "add", "__fn_onClick", "dec", "asyncAdd", "counter"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.state = {
        title: '',
        body: ''
      };
      this.toFenbao1 = this.toFenbao1.bind(this);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log((0, _api.login)({ name: 'cwq' }));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'toFenbao',
    value: function toFenbao() {
      _taroWeapp2.default.showToast({
        title: '22222',
        icon: 'none',
        mask: true
      });
    }
  }, {
    key: 'toFenbao1',
    value: function toFenbao1() {
      if (_taroWeapp2.default.getEnv() == _taroWeapp2.default.ENV_TYPE.WEB) {
        _taroWeapp2.default.navigateTo({
          url: 'packageCustomerData/pages/customerDataList/customerDataList'
        });
      } else {
        _taroWeapp2.default.switchTab({
          url: 'packageCustomerData/pages/customerDataList/customerDataList'
        });
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }, {
    key: 'funPrivatefazzz',
    value: function funPrivatefazzz() {
      return this.props.add.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: 'funPrivatefbzzz',
    value: function funPrivatefbzzz() {
      return this.props.dec.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: 'funPrivatefczzz',
    value: function funPrivatefczzz() {
      return this.props.asyncAdd.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class2.$$events = ["funPrivatefazzz", "funPrivatefbzzz", "funPrivatefczzz", "toFenbao", "toFenbao1"], _class2.$$componentPath = "pages/home/index", _temp2)) || _class);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.0@@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = undefined;

var _http = __webpack_require__(/*! ./http */ "./src/utils/http.js");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//自动登录
var login = exports.login = function login(data) {
  return _http2.default.ajax('user/login', "post", data);
};

//获取列表

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var serverConfig = {
  env: 'prod', //dev:开发环境，prod:生产环境
  host: 'http://localhost:3000', //小程序管理后台服务器域名配置-暂未配置
  version: '1.0',
  noConsole: false, //是否打印发送和接收数据
  header: {
    'content-type': 'application/json', //application/x-www-form-urlencode
    'Authorization': 'Bearer' //请求头设置token值--todo待定
  }
};

exports.default = serverConfig;

/***/ }),

/***/ "./src/utils/http.js":
/*!***************************!*\
  !*** ./src/utils/http.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.0@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _config = __webpack_require__(/*! ./config */ "./src/utils/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = _config2.default.host;
var header = _config2.default.header;
var noConsole = _config2.default.noConsole;

function baseOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { method: 'GET', data: {}, url: '' };

  if (!noConsole) {
    console.log(new Date().toLocaleString() + '\u3010 M=' + options.url + ' \u3011P=' + JSON.stringify(options.data));
  }
  var params = {
    url: baseUrl + options.url,
    data: options.data,
    method: options.method.toUpperCase(), //taro规定必须大写
    header: header
  };
  return _taroWeapp2.default.request(params);
}

function ajax(url, methodType, data) {
  baseOptions({ url: url, method: methodType, data: data }).then(function (res) {
    var statusCode = res.statusCode,
        data = res.data;

    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(new Date().toLocaleString() + '\u3010 M=' + url + ' \u3011\u3010\u63A5\u53E3\u54CD\u5E94\uFF1A\u3011', res.data);
      }
      if (data.status !== 'ok') {
        _taroWeapp2.default.showToast({
          title: res.data.error.message + '~' || false,
          icon: 'none',
          mask: true
        });
      }
      return data;
    } else {
      throw new Error('\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF\uFF0C\u72B6\u6001\u7801' + statusCode);
    }
  });
}

exports.default = {
  ajax: ajax
};

/***/ })

},[["./src/pages/home/index.jsx","runtime","vendors"]]]);