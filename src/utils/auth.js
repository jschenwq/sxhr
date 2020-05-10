import Taro from '@tarojs/taro';
import {inserToken, changeAppOnLaunch} from '../actions/counter.js';
import config from './config';
import { getUserInfo, getAllList } from './api'
import { setGlobalData } from './global'
//获取数据
export default class Auth{
  //app授权
  static appCheckAuth(){
    return new Promise(async (resolve)=>{
      let flag = await getAuthToken().catch(function () {
        Taro.navigateTo({
          url: '/pages/login/index'
        });
      });
      if( flag ) {
        //更新app状态
        Taro.$store.dispatch(changeAppOnLaunch());
        resolve(true);
      }else{
        //提示
        Taro.showToast({
          title : '获取授权信息失败' ,
          icon : 'none' ,
          mask : true
        })
      }
    });
  }

  static checkAuth(){
    const state = Taro.$store.getState();
    //从缓存读取授权信息
    let authorize = state.authorize || Taro.getStorageSync('authorize');
    return authorize;
  }

  static pageCheckToken(){
    return new Promise((resolve)=>{
      const state = Taro.$store.getState();
      //如果有授权信息
      if(Auth.checkAuth() && !state.counter.appOnLaunch){
        //直接返回
        resolve(true);
      }else{
        resolve(false);
      }
    });
  }
}
//授权用户token
async function getAuthToken(){
  //login
  let res = await Taro.login();
  let userInfo = await Taro.getUserInfo();
  console.log(userInfo);
  //获取token
  let response = await Taro.request({
    url: config.host+'/wx/system/loginForWx',
    data: {
      code: res.code,
      encryptedDatav: userInfo.encryptedData,
      iv: userInfo.iv
    },
    method: 'POST',
  })
  //判断是否成功
  if( response.data && response.data.data ){
    //写入token
    let authorize = response.data.data;

    //写入状态管理
    Taro.$store.dispatch(inserToken(authorize));
    //写入缓存
    Taro.setStorageSync('authorize', authorize);

    //保存用户信息
   await getUserInfo({}).then(({data}) => {
      setGlobalData("userInfo",data);
    });

    //保存数据字典
    await getAllList({}).then(({data}) => {
      setGlobalData("stuType",data.stuType);
      setGlobalData("schoolType",data.schoolType);
      setGlobalData("schoolLevel",data.schoolLevel);
      setGlobalData("type",data.type);
      setGlobalData("province",data.province);
      setGlobalData("year",data.year);
    });

    return true
  }else{
    console.log('获取token失败');
    return false;
  }
}


//2020-4-27--cwq注释之前的简化授权登录
// import Taro from '@tarojs/taro';
// import {inserToken, changeAppOnLaunch} from '../actions/counter.js';
// import config from './config';
// //获取数据
// export default class Auth{
//   //app授权
//   static appCheckAuth(){
//     return new Promise((resolve)=>{
//       const state = Taro.$store.getState();
//       //如果有授权信息
//       if(Auth.checkAuth() && !state.counter.appOnLaunch){
//         //直接返回
//         resolve(true);
//       }else{
//         //判断session_key是否过期
//         Taro.checkSession().then(()=>{
//           //未过期检查token是否有效
//           if(!Auth.checkAuth()){
//             getAuthToken().then((flag)=>{
//               if(flag){
//                 //更新app状态
//                 Taro.$store.dispatch(changeAppOnLaunch());
//                 resolve(true);
//               }else{
//                 //提示
//                 Taro.showToast({
//                   title: '获取授权信息失败',
//                   icon: 'none',
//                   mask: true
//                 });
//                 resolve(false);
//               }
//             });
//           }else{
//             //更新app状态
//             Taro.$store.dispatch(changeAppOnLaunch());
//             //token没有过期，直接返回
//             resolve(true);
//           }
//         }).catch((err)=>{
//           console.log(err);
//           getAuthToken().then((flag)=>{
//             //判断是否token请求成功
//             if(flag){
//               //更新app状态
//               Taro.$store.dispatch(changeAppOnLaunch());
//               resolve(true);
//             }else{
//               //tishi
//               Taro.showToast({
//                 title: '获取授权信息失败',
//                 icon: 'none',
//                 mask: true
//               });
//               resolve(false);
//             }
//           });
//         });
//       }
//     });
//   }
//   //检查令牌是否有效 true --> 有效 false-->无效
//   static checkAuth(){
//     const state = Taro.$store.getState();
//     //从缓存读取授权信息
//     debugger;
//     let authorize = state.authorize || Taro.getStorageSync('authorize') || {},
//       expiryTime = 0,
//       nowTime = ~~(Date.now() / 1000);
//     if(authorize.exp){
//       expiryTime = authorize.exp;
//     }
//     return expiryTime - nowTime > 300;
//   }
//   //获取token
//   static getToken(){
//     const state = Taro.$store.getState();
//     let authorize = state.authorize || Taro.getStorageSync('authorize');
//     return authorize.token;
//   }
// }
// //授权用户token
// function getAuthToken(){
//   const state = Taro.$store.getState();
//   //login
//   return new Promise((resolve, reject)=>{
//     Taro.login({
//       success: (res)=>{
//         if (res.code) {
//           //发起网络请求
//           console.log("---- 用户登录数据信息 ----");
//           console.log(res);
//           new Promise((resolve, reject)=>{
//             Taro.getUserInfo({
//               withCredentials: true,
//               success: (data)=>{
//                 console.log(data);
//                 resolve(data);
//               },
//               fail: (res)=>{
//                 console.log(res);
//               }
//             });
//           }).then((data)=>{
//             //获取token
//             Taro.request({
//               url: config.host+'/wx/system/loginForWx',
//               data: {
//                 code: res.code,
//                 encryptedDatav: data.encryptedData,
//                 iv: data.iv
//               },
//               method: 'POST',
//               success: (res)=>{
//                 //判断是否成功
//                 if(res.data.data){
//                   //写入token
//                   let authorize = res.data.data;
//                   saveAuthToken(authorize);
//                   resolve(true);
//                 }else{
//                   console.log(res.data.msg);
//                   resolve(false);
//                 }
//               },
//               fail: (res)=>{
//                 console.log(res);
//                 resolve(false);
//               }
//             });
//           });
//         } else {
//           console.log('登录调用失败');
//           resolve(false);
//         }
//       }
//     });
//   });
// }
// //写入信息
// function saveAuthToken(authorize){
//   //写入状态管理
//   Taro.$store.dispatch(inserToken(authorize));
//   //写入缓存
//   Taro.setStorageSync('authorize', authorize);
// }

