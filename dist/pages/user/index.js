(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/user/index"],{

/***/ "./src/pages/user/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/user/index.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.4@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/user/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "$compid__129", "$compid__130", "$compid__131", "$compid__132", "$compid__133", "$compid__134", "$compid__135", "$compid__136", "userName"], _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.customComponents = ["AtAvatar", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {

      this.state = {
        userName: 'K'
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "openMyCP",
    value: function openMyCP() {
      //我的测评
      _taroWeapp2.default.navigateTo({
        url: '/packageWD/wdcp/index'
      });
    }
  }, {
    key: "openMyXK",
    value: function openMyXK() {
      //我的选科
      _taroWeapp2.default.navigateTo({
        url: '/packageWD/wdxk/index'
      });
    }
  }, {
    key: "clickServiceCall",
    value: function clickServiceCall() {
      //客服电话
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: '4000022985'
      });
    }
  }, {
    key: "exchangeUser",
    value: function exchangeUser() {
      _taroWeapp2.default.navigateTo({
        url: '/packageWD/qhzh/index'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__129"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__129 = _genCompid2[0],
          $compid__129 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__130"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__130 = _genCompid4[0],
          $compid__130 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__131"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__131 = _genCompid6[0],
          $compid__131 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__132"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__132 = _genCompid8[0],
          $compid__132 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__133"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__133 = _genCompid10[0],
          $compid__133 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__134"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__134 = _genCompid12[0],
          $compid__134 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__135"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__135 = _genCompid14[0],
          $compid__135 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__136"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__136 = _genCompid16[0],
          $compid__136 = _genCompid16[1];

      var anonymousState__temp = { size: 12, color: '#f99300', value: 'sketch' };
      var anonymousState__temp2 = { size: 12, color: '#afafaf', value: 'iphone' };
      var anonymousState__temp3 = { size: 12, color: '#f99300', value: 'credit-card' };
      var anonymousState__temp4 = { size: 12, color: '#ef7357', value: 'file-generic' };
      var anonymousState__temp5 = { size: 12, color: '#ff8360', value: 'shopping-bag' };
      var anonymousState__temp6 = { size: 12, color: '#4cc100', value: 'phone' };
      var anonymousState__temp7 = { size: 12, color: '#f59133', value: 'user' };
      _taroWeapp.propsManager.set({
        "circle": true,
        "size": "large",
        "image": "https://jdc.jd.com/img/200"
      }, $compid__129, $prevCompid__129);
      _taroWeapp.propsManager.set({
        "title": "\u83B7\u53D6VIP\u6743\u9650",
        "arrow": "right",
        "iconInfo": anonymousState__temp
      }, $compid__130, $prevCompid__130);
      _taroWeapp.propsManager.set({
        "title": "\u7ED1\u5B9A\u624B\u673A",
        "arrow": "right",
        "iconInfo": anonymousState__temp2
      }, $compid__131, $prevCompid__131);
      _taroWeapp.propsManager.set({
        "title": "\u4F1A\u5458\u5361\u6FC0\u6D3B",
        "arrow": "right",
        "iconInfo": anonymousState__temp3
      }, $compid__132, $prevCompid__132);
      _taroWeapp.propsManager.set({
        "title": "\u6211\u7684\u6D4B\u8BC4",
        "arrow": "right",
        "onClick": this.openMyCP,
        "iconInfo": anonymousState__temp4
      }, $compid__133, $prevCompid__133);
      _taroWeapp.propsManager.set({
        "title": "\u6211\u7684\u9009\u79D1",
        "arrow": "right",
        "onClick": this.openMyXK,
        "iconInfo": anonymousState__temp5
      }, $compid__134, $prevCompid__134);
      _taroWeapp.propsManager.set({
        "title": "\u5BA2\u670D\u7535\u8BDD\uFF1A400-0022-985",
        "arrow": "right",
        "onClick": this.clickServiceCall,
        "extraText": "\u670D\u52A1\u65F6\u95F4\uFF1A8:30-17:30",
        "iconInfo": anonymousState__temp6
      }, $compid__135, $prevCompid__135);
      _taroWeapp.propsManager.set({
        "title": "\u5207\u6362\u8D26\u53F7",
        "arrow": "right",
        "onClick": this.exchangeUser,
        "iconInfo": anonymousState__temp7
      }, $compid__136, $prevCompid__136);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        $compid__129: $compid__129,
        $compid__130: $compid__130,
        $compid__131: $compid__131,
        $compid__132: $compid__132,
        $compid__133: $compid__133,
        $compid__134: $compid__134,
        $compid__135: $compid__135,
        $compid__136: $compid__136
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/user/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.4@@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/pages/user/index.scss":
/*!***********************************!*\
  !*** ./src/pages/user/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/user/index.jsx","runtime","vendors"]]]);