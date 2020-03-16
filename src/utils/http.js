import Taro from '@tarojs/taro';
import config from './config';

const baseUrl = config.host;
const header = config.header;
const noConsole = config.noConsole;

function baseOptions(options = {method: 'GET', data: {}, url: ''}) {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  const params = {
    url: baseUrl + options.url,
    data: options.data,
    method: options.method.toUpperCase(),//taro规定必须大写
    header: header
  }
  return Taro.request(params);
}

function ajax(url, methodType, data) {
  return new Promise((resolve => {
    baseOptions({url: url, method: methodType, data: data}).then((res) => {
      const {statusCode, data} = res;
      if (statusCode >= 200 && statusCode < 300) {
        if (!noConsole) {
          console.log(`${new Date().toLocaleString()}【 M=${url} 】【接口响应：】`, res.data);
        }

        if (data.code != 0) {
          Taro.showToast({
            title: `${res.data.error.message}~` || res.data.error.code,
            icon: 'none',
            mask: true,
          });
        }
        resolve(data.data);
      } else {
        throw new Error(`网络请求错误，状态码${statusCode}`);
      }
    })
  }))
}

export default {
  ajax
}

