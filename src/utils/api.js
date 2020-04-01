import $ from './http'

//项目大学所有枚举接口
export const getAllList = () => $.ajax('/wx/school/schoolDict','get');



//专业
//获取全部专业-2级--3级专业那2级专业id跳转页面加载
export const getAllZy = (data) => $.ajax('/wx/major/getMajorType',"post",data);
//获取第三级专业
export const getThirdZy = (data) => $.ajax('/wx/major/list',"post",data);
//获取专业详情-get请求
export const getDetail = (majorId) => $.ajax('/wx/major/' + majorId,"get");



//分数线
//获取学校分数线
export const getSchoolScore = (data) => $.ajax('/wx/score/listSchoolScore',"post",data);
//获取专业分数线
export const getMajorScore = (data) => $.ajax('/wx/score/listMajorScore',"post",data);



//咨询师
//获取咨询师列表
export const getzxsList = (data) => $.ajax('/wx/counselor/list',"post",data);
//获取咨询师详情
export const getzxsDetail = (counselorId) => $.ajax('/wx/counselor/' + counselorId ,"get");


//大学
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
//获取所有类型的测评人数--不需要登录token
export const getAllEvaluationCount = (data) => $.ajax('/wx/evaluation/statis', 'GET');
//获取登录用户测评报告数量
export const getUserReportCount = (data) => $.ajax('/wx/evaluation/reportCount', 'GET');
//获取登录用户测评报告列表
export const getUserEvaluationList = (data) => $.ajax('/wx/evaluation/reports', 'GET');
//获取登录用户测评报告详情
export const getUserEvaluationDetailById = (evaluationId) => $.ajax('/wx/evaluation/report/' + evaluationId, 'GET');
//获取考试心理和行为测试题库------------------------------
export const getKSXLXWCSQuestions = ()=> $.ajax('/wx/evaluation/psychology/questions','GET');
//提交考试心理和行为测评结果
export const submitKSXLXWCSAnswers = (data) => $.ajax('/wx/evaluation/psychology/answers', 'POST', data);
//获取拖延行为测评题库-----------------------------------
export const getTYXWQuestions = ()=> $.ajax('/wx/evaluation/delay/questions','GET');
//提交拖延行为测评结果
export const submitTYXWAnswers = (data) => $.ajax('/wx/evaluation/delay/answers', 'POST', data);
//获取倦怠行为测评题库-----------------------------------
export const getJDXWQuestions = ()=> $.ajax('/wx/evaluation/lazy/questions','GET');
//提交倦怠行为测评结果
export const submitJDXWAnswers = (data) => $.ajax('/wx/evaluation/lazy/answers', 'POST', data);
//获取学习能力测评题库-------------------------------
export const getXXNLQuestions = ()=> $.ajax('/wx/evaluation/study/questions','GET');
//提交学习能力测评结果
export const submitXXNLAnswers = (data) => $.ajax('/wx/evaluation/study/answers', 'POST', data);
//获取职业兴趣测评题库-------------------------------
export const getZYXQQuestions = ()=> $.ajax('/wx/evaluation/interest/questions','GET');
//提交职业兴趣测评结果
export const submitZYXQAnswers = (data) => $.ajax('/wx/evaluation/interest/answers', 'POST', data);



//绑定手机功能模块
//获取验证码
export const getVerificationCode = (data) => $.ajax('/wx/system/getVerificationCode','GET', data);
//绑定手机
export const bindMobile = (data) => $.ajax('/wx/system/bindMobile','GET',data);
