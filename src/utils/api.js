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
//获取招生快讯
export const getSchoolNewsList = (data) => $.ajax('/wx/schoolNews/list', 'POST', data);
//获取大学详情
export const getSchoolDetail = (schoolId) => $.ajax('/wx/school/'+schoolId, 'GET');
//获取大学id获取简介
export const getSchoolIntr = (schoolId) => $.ajax('/wx/schoolNews/introduction/'+schoolId, 'GET');

//测评
//获取职业兴趣测评题库
export const getQuestions = ()=> $.ajax('/wx/evaluation/interest/questions','GET');
//提交职业兴趣测评结果
export const submitAnswers = (data) => $.ajax('/wx/evaluation/interest/answers', 'POST', data);

//绑定手机功能模块
//获取验证码
export const getVerificationCode = (data) => $.ajax('/wx/system/getVerificationCode','GET', data);
//绑定手机
export const bindMobile = (data) => $.ajax('/wx/system/bindMobile','GET',data);
