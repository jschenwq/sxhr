import $ from './http'

//自动登录
export const login = (data) => $.ajax('user/login',"post",data)

//获取全部专业-2级--3级专业那2级专业id跳转页面加载
export const getAllZy = (data) => $.ajax('/wx/major/getMajorType',"post",data);

//获取第三级专业
export const getThirdZy = (data) => $.ajax('/wx/major/list',"post",data);

//获取专业详情-get请求
export const getDetail = (url) => $.ajax(url,"get");

//获取大学列表
export const getSchoolList = (data) => $.ajax('/wx/school/list','POST', data);
//获取大学专业
export const getSchoolMajor = (data) => $.ajax('/wx/school/major', 'POST', data);
