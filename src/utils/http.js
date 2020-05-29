import Taro from '@tarojs/taro';
import config from './config';

const baseUrl = config.host;
const header = config.header;
const isShowLoading = config.isShowLoading;
const noConsole = config.noConsole;

function baseOptions(options = {method: 'GET', data: {}, url: '', header:{}}) {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  const storeState = Taro.$store.getState();
  // console.log("Authorization："+storeState.counter.authorize);
  const params = {
    isShowLoading: isShowLoading,
    loadingText: '正在加载',
    url: options.url.indexOf("https://")==-1?baseUrl + options.url:options.url,
    data: options.data,
    method: options.method.toUpperCase(),//taro规定必须大写
    header: Object.assign(options.header?options.header:header,{'Authorization': storeState.counter.authorize?storeState.counter.authorize:'Bearer'})
  }
  return Taro.request(params);
}

function ajax(url, methodType, data, header) {
  return new Promise((resolve => {
    baseOptions({url: url, method: methodType, data: data, header:header}).then((res) => {
      const {statusCode, data} = res;
      if (statusCode >= 200 && statusCode < 300) {
        if (!noConsole) {
          console.log(`${new Date().toLocaleString()}【 M=${url} 】【接口响应：】`, res.data);
        }


        if (data.code != 0) {
          Taro.showToast({
            title: `${res.data.msg}` || res.data.code,
            icon: 'none',
            mask: true,
          });
          if(data.code == 401){//token失效
            Taro.navigateTo({
              url: '/pages/login/index'
            });
          }
        }
        resolve(data);
      } else {

        if(data.code == 403){//无权限
          Taro.showToast({
            title: `${res.data.message}`,
            icon: 'none',
            mask: true,
          });
        }

        // Taro.navigateTo({
        //   url: '/pages/login/index'
        // });


        // throw new Error(`网络请求错误，状态码${statusCode}`);
      }
    })
  }))
}


 function  ajaxJson(url, methodType) {
  return new Promise((resolve => {
    baseOptions({url: url, method: methodType}).then((res) => {
      const {statusCode, data} = res;
      if (statusCode >= 200 && statusCode < 300) {
        resolve(data);
      } else {
        throw new Error(`网络请求错误，状态码${statusCode}`);
      }
    })
  }))
}

export default {
  ajax,ajaxJson
}
