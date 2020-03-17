import Taro from '@tarojs/taro';
import {inserToken, changeAppOnLaunch} from '../actions/counter.js';
import config from './config';
//获取数据
export default class Auth{
  //app授权
  static appCheckAuth(){
    return new Promise((resolve)=>{
      const state = Taro.$store.getState();
      console.log(state);
      //如果有授权信息
      if(Auth.checkAuth() && !state.counter.appOnLaunch){
        //直接返回
        resolve(true);
      }else{
        //判断session_key是否过期
        Taro.checkSession().then(async ()=>{
          //未过期检查token是否有效
          if(!Auth.checkAuth()){
            let flag = await getAuthToken();
            if(flag){
              //更新app状态
              Taro.$store.dispatch(changeAppOnLaunch());
              resolve(true);
            }else{
              //提示
              Taro.showToast({
                title: '获取授权信息失败',
                icon: 'none',
                mask: true
              });
            }
          }else{
            //更新app状态
            Taro.$store.dispatch(changeAppOnLaunch());
            //token没有过期，直接返回
            resolve(true);
          }
        }).catch(async (err)=>{
          console.log(err);
          let flag = await getAuthToken();
          //判断是否token请求成功
          if(flag){
            //更新app状态
            Taro.$store.dispatch(changeAppOnLaunch());
            resolve(true);
          }else{
            //tishi
            Taro.showToast({
              title: '获取授权信息失败',
              icon: 'none',
              mask: true
            });
          }
        });
      }
    })
  }
  //检查令牌是否有效 true --> 有效 false-->无效
  static checkAuth(){
    const state = Taro.$store.getState();
    //从缓存读取授权信息
    let authorize = state.authorize || Taro.getStorageSync('authorize') || {},
        expiryTime = 0,
        nowTime = ~~(Date.now() / 1000);
    if(authorize.exp){
      expiryTime = authorize.exp;
    }
    return expiryTime - nowTime > 300;
  }
  //获取token
  static getToken(){
    const state = Taro.$store.getState();
    let authorize = state.authorize || Taro.getStorageSync('authorize');
    return authorize.token;
  }
}
//授权用户token
async function getAuthToken(){
  const state = Taro.$store.getState();
  //login
  let res = await Taro.login();
  console.log("---- 用户登录数据信息 ----");
  console.log(res);
  let encryptedDatav = '', iv='';
  await Taro.getUserInfo({
    withCredentials: true,
    success: (data)=>{
      console.log(data);
      encryptedDatav = data.encryptedData;
      iv = data.iv;
    },
    fail: (res)=>{
      console.log(res);
    }
  });
  //获取token
  let response = await Taro.request({
    url: config.host+'/wx/system/loginForWx',
    data: {
      code: res.code,
      encryptedDatav: encryptedDatav,
      iv: iv
    },
    method: 'POST'
  });
  //判断是否成功
  if(response.data.data){
    //写入token
    let authorize = response.data.data;
    saveAuthToken(authorize);
    return true;
  }else{
    console.log(response.data.msg);
    return false;
  }
}
//写入信息
function saveAuthToken(authorize){
  //写入状态管理
  Taro.$store.dispatch(inserToken(authorize));
  //写入缓存
  Taro.setStorageSync('authorize', authorize);
}
