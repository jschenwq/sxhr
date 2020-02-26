import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/home/index'

import configStore from './store'

import './app.scss'

//taro-ui的引入
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

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

      'pages/service/index',

      'pages/evaluation/index',

      'pages/class/index',

      'pages/user/index',
    ],
    // 分包
    subPackages: [
      //信息查询分包
      {
        "root": "packageCX",
        "pages": [
          'zdx/index',
          'czy/index',
          'kzy/index',
          'tqp/index',
          'fsx/index',
          'zsjh/index',
          'pcx/index',
          'wccx/index',
        ]
      },
      //服务分包
      {
        "root": "packageFW",
        "pages": [
          'gbydyfw/index',
          'hyfw/index',
          'sxkfw/index',
        ]
      },
      //测评分包
      {
        "root": "packageCP",
        "pages": [
          'assess/index',
          'sketch/index',
        ]
      },
      //课堂分包
      {
        'root': 'packageKC',
        'pages': [
          'video/index',
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
          text: "填志愿",
          iconPath: "images/tab/home.png",
          selectedIconPath: "images/tab/home-active.png"
        },{
          pagePath: "pages/service/index",
          text: "服务",
          iconPath: "images/tab/service.png",
          selectedIconPath: "images/tab/service-active.png"
        },{
          pagePath: "pages/evaluation/index",
          text: "测评",
          iconPath: "images/tab/evaluation.png",
          selectedIconPath: "images/tab/evaluation-active.png"
        },{
          pagePath: 'pages/class/index',
          text: '课堂',
          iconPath: 'images/tab/class.png',
          selectedIconPath: 'images/tab/class-active.png'
        },{
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "images/tab/personal.png",
          selectedIconPath: "images/tab/personal-active.png"
        }
      ],
      color: '#333',
      selectedColor: '#19b955',
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
