import $ from './http'

//自动登录
export const login = (data) => $.ajax('user/login',"post",data)

//获取全部专业-2级--3级专业那2级专业id跳转页面加载
export const getAllZy = (data) => $.ajax('/wx/major/getMajorType',"post",data)

//获取列表
