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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.4@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.0.4@@tarojs/redux/index.js");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "anonymousState__temp11", "anonymousState__temp12", "anonymousState__temp13", "anonymousState__temp14", "anonymousState__temp15", "anonymousState__temp16", "anonymousState__temp17", "anonymousState__temp18", "anonymousState__temp19", "anonymousState__temp20", "anonymousState__temp21", "anonymousState__temp22", "anonymousState__temp23", "anonymousState__temp24", "anonymousState__temp25", "anonymousState__temp26", "anonymousState__temp27", "anonymousState__temp28", "anonymousState__temp29", "anonymousState__temp30", "anonymousState__temp31", "anonymousState__temp32", "anonymousState__temp33", "anonymousState__temp34", "$compid__119", "$compid__120", "$compid__121", "$compid__122", "$compid__123", "$compid__124", "$compid__125", "$compid__126", "current", "currentCourse", "title", "body", "scoreValue", "selector", "selectorChecked", "stars"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.onChange = function (e) {
      _this.setState({
        selectorChecked: _this.state.selector[e.detail.value]
      });
    }, _this.customComponents = ["AtGrid", "AtButton", "AtRate"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.state = {
        title: '',
        body: '',
        currentCourse: 0,
        scoreValue: 500,
        current: 0,
        selector: ['本一批', '本二批', '专科批'],
        selectorChecked: '本一批',
        stars: 4
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
    value: function componentDidMount() {}
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
          // url: 'packageCustomerData/pages/customerDataList/customerDataList',
        });
      } else {
        _taroWeapp2.default.switchTab({
          // url: 'packageCustomerData/pages/customerDataList/customerDataList',
        });
      }
    }
    //科目切换

  }, {
    key: 'handleCourse',
    value: function handleCourse(value) {
      this.setState({
        currentCourse: value
      });
    }
    //分数切换

  }, {
    key: 'handleTab',
    value: function handleTab(value) {
      this.setState({
        current: value
      });
    }
    //智能推荐

  }, {
    key: 'gotoZntj',
    value: function gotoZntj() {
      _taroWeapp2.default.navigateTo({
        url: '/packageCX/zntj/index'
      });
    }
    //信息查询

  }, {
    key: 'infomationSearch',
    value: function infomationSearch(data, index) {
      console.log(data);
      console.log(index);
      //找大学
      if (index == 0) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/zdx/index'
        });
      }
      //查专业
      if (index == 1) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/czy/index'
        });
      }
      //看职业
      if (index == 2) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/kzy/index'
        });
      }
      //提前批
      if (index == 3) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/tqp/index'
        });
      }
      //分数线
      if (index == 4) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/fsx/index'
        });
      }
      //招生计划
      if (index == 5) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/zsj/index'
        });
      }
      //批次线
      if (index == 6) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/pcx/index'
        });
      }
      //位次查询
      if (index == 7) {
        _taroWeapp2.default.navigateTo({
          url: '/packageCX/wccx/index'
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__119"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__119 = _genCompid2[0],
          $compid__119 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__120"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__120 = _genCompid4[0],
          $compid__120 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__121"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__121 = _genCompid6[0],
          $compid__121 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__122"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__122 = _genCompid8[0],
          $compid__122 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__123"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__123 = _genCompid10[0],
          $compid__123 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__124"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__124 = _genCompid12[0],
          $compid__124 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__125"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__125 = _genCompid14[0],
          $compid__125 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__126"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__126 = _genCompid16[0],
          $compid__126 = _genCompid16[1];

      var _state = this.__state,
          currentCourse = _state.currentCourse,
          current = _state.current;


      var anonymousState__temp = __webpack_require__(/*! ../../images/home/banner.jpg */ "./src/images/home/banner.jpg");

      var anonymousState__temp2 = (0, _classnames2.default)('home_wl', currentCourse == 0 ? 'home_active' : '');
      var anonymousState__temp3 = (0, _classnames2.default)('home_wl', currentCourse == 1 ? 'home_active' : '');
      var anonymousState__temp4 = (0, _classnames2.default)('home_score', current == 0 ? 'home_font' : '');
      var anonymousState__temp5 = (0, _classnames2.default)('home_scoreLine', current == 1 ? 'home_font' : '');
      var anonymousState__temp6 = [{
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '找大学'
      }, {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '查专业'
      }, {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '看职业'
      }, {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '提前批'
      }, {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '分数线'
      }, {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '招生计划'
      }, {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: '批次线'
      }, {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: '位次查询'
      }];

      var anonymousState__temp7 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp8 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp9 = (0, _classnames2.default)('at-row', 'itemPerson');

      var anonymousState__temp10 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp11 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp12 = (0, _classnames2.default)('at-row', 'itemPerson');

      var anonymousState__temp13 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp14 = __webpack_require__(/*! ../../packageCP/images/evaStart5.png */ "./src/packageCP/images/evaStart5.png");

      var anonymousState__temp15 = (0, _classnames2.default)('at-row', 'itemPerson');

      var anonymousState__temp16 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp17 = __webpack_require__(/*! ../../packageCP/images/evaStart6.png */ "./src/packageCP/images/evaStart6.png");

      var anonymousState__temp18 = (0, _classnames2.default)('at-row', 'itemPerson');

      var anonymousState__temp19 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp20 = (0, _classnames2.default)('at-row', 'itemPerson');

      var anonymousState__temp21 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp22 = (0, _classnames2.default)('at-row', 'itemPerson');

      var anonymousState__temp23 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp24 = (0, _classnames2.default)('at-row', 'itemPerson');

      var anonymousState__temp25 = __webpack_require__(/*! ../../packageCP/images/boy.png */ "./src/packageCP/images/boy.png");

      var anonymousState__temp26 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp27 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp28 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp29 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp30 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp31 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp32 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp33 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      var anonymousState__temp34 = __webpack_require__(/*! ../../packageCP/images/evaStart4.png */ "./src/packageCP/images/evaStart4.png");

      _taroWeapp.propsManager.set({
        "columnNum": "4",
        "hasBorder": false,
        "onClick": this.infomationSearch.bind(this),
        "data": anonymousState__temp6
      }, $compid__119, $prevCompid__119);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "type": "primary",
        "size": "small",
        "circle": "true"
      }, $compid__120, $prevCompid__120);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "type": "primary",
        "size": "small",
        "circle": "true"
      }, $compid__121, $prevCompid__121);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "type": "primary",
        "size": "small",
        "circle": "true"
      }, $compid__122, $prevCompid__122);
      _taroWeapp.propsManager.set({
        "className": "starts",
        "value": this.__state.stars
      }, $compid__123, $prevCompid__123);
      _taroWeapp.propsManager.set({
        "className": "starts",
        "value": this.__state.stars
      }, $compid__124, $prevCompid__124);
      _taroWeapp.propsManager.set({
        "className": "starts",
        "value": this.__state.stars
      }, $compid__125, $prevCompid__125);
      _taroWeapp.propsManager.set({
        "className": "starts",
        "value": this.__state.stars
      }, $compid__126, $prevCompid__126);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        anonymousState__temp12: anonymousState__temp12,
        anonymousState__temp13: anonymousState__temp13,
        anonymousState__temp14: anonymousState__temp14,
        anonymousState__temp15: anonymousState__temp15,
        anonymousState__temp16: anonymousState__temp16,
        anonymousState__temp17: anonymousState__temp17,
        anonymousState__temp18: anonymousState__temp18,
        anonymousState__temp19: anonymousState__temp19,
        anonymousState__temp20: anonymousState__temp20,
        anonymousState__temp21: anonymousState__temp21,
        anonymousState__temp22: anonymousState__temp22,
        anonymousState__temp23: anonymousState__temp23,
        anonymousState__temp24: anonymousState__temp24,
        anonymousState__temp25: anonymousState__temp25,
        anonymousState__temp26: anonymousState__temp26,
        anonymousState__temp27: anonymousState__temp27,
        anonymousState__temp28: anonymousState__temp28,
        anonymousState__temp29: anonymousState__temp29,
        anonymousState__temp30: anonymousState__temp30,
        anonymousState__temp31: anonymousState__temp31,
        anonymousState__temp32: anonymousState__temp32,
        anonymousState__temp33: anonymousState__temp33,
        anonymousState__temp34: anonymousState__temp34,
        $compid__119: $compid__119,
        $compid__120: $compid__120,
        $compid__121: $compid__121,
        $compid__122: $compid__122,
        $compid__123: $compid__123,
        $compid__124: $compid__124,
        $compid__125: $compid__125,
        $compid__126: $compid__126
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class2.$$events = ["handleCourse", "handleTab", "gotoZntj", "onChange"], _class2.$$componentPath = "pages/home/index", _temp2)) || _class);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.4@@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/home/index.jsx","runtime","vendors","common"]]]);