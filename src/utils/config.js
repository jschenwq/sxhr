const serverConfig = {
  env: 'prod',//dev:开发环境，prod:生产环境
  host: 'https://wx.srwmedu.cn/hongru',//小程序管理后台服务器域名配置-暂未配置
  version: '1.0',
  isShowLoading:true,//是否显示数据加载框
  noConsole: false,//是否打印发送和接收数据
  header: {
    'content-type': 'application/json',//application/x-www-form-urlencode
    'Authorization': 'Bearer' //请求头设置token值--todo待定
  }
}

export default serverConfig;
