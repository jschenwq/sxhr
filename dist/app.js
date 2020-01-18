require("./runtime");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.0@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.0.0@@tarojs/redux/index.js");

var _index = __webpack_require__(/*! ./store/index */ "./src/store/index.js");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./app.scss */ "./src/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var store = (0, _index2.default)();

(0, _redux.setStore)(store);

if (_redux.ReduxContext.Provider) {
  _redux.ReduxContext.Provider({
    store: store
  });
  _redux.ReduxContext.Provider({
    store: store
  });
}

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/home/index', 'pages/user/index'],
      // 分包
      subPackages: [{
        "root": "packageCustomerData",
        "pages": ["pages/customerDataList/index"]
      }],
      //窗口设置
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        list: [{
          pagePath: "pages/home/index",
          text: "首页",
          iconPath: "images/tab/home.png",
          selectedIconPath: "images/tab/home-active.png"
        }, {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "images/tab/user.png",
          selectedIconPath: "images/tab/user-active.png"
        }],
        color: '#333',
        selectedColor: '#333',
        backgroundColor: '#fff',
        borderStyle: 'black'
      },
      //网络设置-30S
      networkTimeout: {
        request: 30000,
        connectSocket: 30000,
        uploadFile: 30000,
        downloadFile: 30000
      },
      debug: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.0@@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/reducers/counter.js":
/*!*********************************!*\
  !*** ./src/reducers/counter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = counter;

var _counter = __webpack_require__(/*! ../constants/counter */ "./src/constants/counter.js");

var INITIAL_STATE = {
  num: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _counter.ADD:
      return _extends({}, state, {
        num: state.num + 1
      });
    case _counter.MINUS:
      return _extends({}, state, {
        num: state.num - 1
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.5@redux/lib/redux.js");

var _counter = __webpack_require__(/*! ./counter */ "./src/reducers/counter.js");

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configStore;

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.5@redux/lib/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/_redux-thunk@2.3.0@redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;

var middlewares = [_reduxThunk2.default];

if (true) {
  middlewares.push(__webpack_require__(/*! redux-logger */ "./node_modules/_redux-logger@3.0.6@redux-logger/dist/redux-logger.js").createLogger());
}

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)
// other store enhancers if any
);

function configStore() {
  var store = (0, _redux.createStore)(_index2.default, enhancer);
  return store;
}

/***/ })

},[["./src/app.jsx","runtime","vendors"]]]);;