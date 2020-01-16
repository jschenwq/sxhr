import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/home/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/user/index',
    ],
    // 分包
    subPackages: [
      {
        "root": "packageCustomerData",
        "name": "packageCustomerData",
        "pages": [
          "pages/customerDataList/customerDataList",
        ]
      }
    ],
    //窗口设置
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/home/index",
          text: "首页",
          iconPath: "images/tab/home.png",
          selectedIconPath: "images/tab/home-active.png"
        }, {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "images/tab/user.png",
          selectedIconPath: "images/tab/user-active.png"
        }
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'black'
    },
    //网络设置
    networkTimeout: {
      request: 120000,
      connectSocket: 120000,
      uploadFile: 120000,
      downloadFile: 120000
    },
    debug: false
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
