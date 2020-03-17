import $ from './http'

//项目所有枚举接口
export const getAllList = () => $.ajax('/wx/school/schoolDict','get');

//自动登录
export const login = (data) => $.ajax('user/login',"post",data)

//获取全部专业-2级--3级专业那2级专业id跳转页面加载
export const getAllZy = (data) => $.ajax('/wx/major/getMajorType',"post",data);

//获取第三级专业
export const getThirdZy = (data) => $.ajax('/wx/major/list',"post",data);

//获取专业详情-get请求
export const getDetail = (majorId) => $.ajax('/wx/major/' + majorId,"get");

//获取学校分数线
export const getSchoolScore = (data) => $.ajax('/wx/score/listSchoolScore',"post",data);

//获取专业分数线
export const getMajorScore = (data) => $.ajax('/wx/score/listMajorScore',"post",data);

//获取大学列表
export const getSchoolList = (data) => $.ajax('/wx/school/list','POST', data);
//获取大学专业
export const getSchoolMajor = (data) => $.ajax('/wx/school/major', 'POST', data);
