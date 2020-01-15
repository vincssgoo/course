import {
  request,
  requestNoLoading
} from '../utils/wxRequest';


// const host = 'http://weiwo.mvp45.com'
// const host = 'http://weiwo.com'
// const host = 'https://market.dachaohui.cn'
const host = 'https://abcourse.mvp45.com'
//const apiMall = 'https://api.tangxinmao.com'

// 用户
const getUserInfo = (params) => requestNoLoading(params, host + '/api/frontend/user/info');
const login = (params) => request(params, host + '/api/frontend/user/loginByWxMini');
const searchCourse = (params) => request(params, host + '/api/frontend/search');
const getBanner = (params) => requestNoLoading(params, host + '/api/frontend/banner');
const question = (params) => request(params, host + '/api/frontend/question/index');
const getInfo = (params) => requestNoLoading(params, host + '/api/frontend/setting/index');
const courseList = (params) => requestNoLoading(params, host + '/api/frontend/course/index');
const locationList = (params) => requestNoLoading(params, host + '/api/backend/courseSite/index');
const typeList = (params) => requestNoLoading(params, host + '/api/backend/courseType/index');
const getCourseDetail = (params) => request(params, host + '/api/frontend/course/detail');
const completeProfile = (params) => request(params, host + '/api/frontend/user/updateInfo');
const pay = (params) => request(params, host + '/api/frontend/courseOrder/pay');
const getMyCourse = (params) => requestNoLoading(params, host + '/api/frontend/user/paidCourse');
const getChildInfo = (params) => requestNoLoading(params, host + '/api/frontend/user/info');
const getSchoolList = (params) => requestNoLoading(params, host + '/api/backend/school/index');
const getClassList = (params) => requestNoLoading(params, host + '/api/backend/classes/index');
module.exports = {

  login,
  getUserInfo,
  searchCourse,
  getBanner,
  question,
  getInfo,
  courseList,
  locationList,
  typeList,
  getCourseDetail,
  completeProfile,
  pay,
  getMyCourse,
  getChildInfo,
  getSchoolList,
  getClassList
}
