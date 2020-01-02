import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'
import {
  USER_TOKEN,
  USER_INFO
} from '../utils/constant';
export const base_url = 'https://abcourse.mvp45.com'
// export const base_url = 'https://huiyi.mvp45.com'
const API_SECRET_KEY = 'https://abcourse.mvp45.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
/**
param = {
url: '',
header: {},
method: '',
data: {},
loading: false,
}
*/
const request = async (param = {}, url) => {
  // 添加token请求头
  let data = param.data || {};
  data.sign = SIGN;
  data.time = TIMESTAMP;
  let header = {
    'Content-Type': 'application/json'
  }
  let token = wepy.getStorageSync('token');
  if (token) {
    header.Authorization = 'Bearer ' + token
  }
  if (param.header) {
    header = {
      ...header,
      ...param.header
    }
  }
  // 加载效果
  if (param.loading !== false) {
    tip.loading(param.loading || '请求中');
  }
  // 发起请求
  let response = await wepy.request({
    url: url,
    method: param.method || 'GET',
    data: data,
    header: header,
  })
  if (param.loading !== false) {
    tip.loaded();
  }
  // 响应数据
  const res = response.data
  if (res.code !== 0) {
    tip.toast(res.msg || '请求失败，请重试')
    // 401清除登录信息
    if (res.code === 401) {
      wepy.removeStorageSync('token')
    }
    // 抛出异常，阻止调用者继续执行，调用者可通过.catch抓取该异常后继续执行
    return Promise.reject(res);
  }
  if (res.code == 100010) {
    wepy.removeStorageSync(USER_INFO)
  }
  return res;
};
const requestNoLoading = async (param = {}, url) => {
  // 添加token请求头
  let data = param.data || {};
  data.sign = SIGN;
  data.time = TIMESTAMP;
  let header = {
    'Content-Type': 'application/json'
  }
  let token = wepy.getStorageSync('token');
  if (token) {
    header.Authorization = 'Bearer ' + token
  }
  if (param.header) {
    header = {
      ...header,
      ...param.header
    }
  }
  // 发起请求
  let response = await wepy.request({
    url: url,
    method: param.method || 'GET',
    data: data,
    header: header,
  })
  // 响应数据
  const res = response.data
  if (res.code !== 0) {
    tip.toast(res.msg || '请求失败，请重试')
    // 401清除登录信息
    if (res.code === 401) {
      wepy.removeStorageSync('token')
    }
    // 抛出异常，阻止调用者继续执行，调用者可通过.catch抓取该异常后继续执行
    return Promise.reject(res);
  }
  if (res.code == 100010) {
    wepy.removeStorageSync(USER_INFO)
  }
  return res;
};

module.exports = {
  request,
  requestNoLoading
}
