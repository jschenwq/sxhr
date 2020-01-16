import $ from './http'

//自动登录
export const login = (data) => $.ajax('user/login',"post",data)

//获取列表
