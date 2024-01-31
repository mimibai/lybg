/***
 * Created by Simple on 2018/1/14 0014.
 * Http请求控制器模块
 */

import http from 'axios';
import router from '@/router';
import conf from '@/config';
import refreshToken from '@/api/token';
import { Message, Spin } from 'view-design';
import { qs } from 'qs';
import { localRead, localSave, TOKEN_KEY, REFRESH_TOKEN_KEY } from './local';

export const baseUrl = conf.baseUrl.apiUrl;
export const socketBaseUrl = conf.baseUrl.webSocketUrl;
export const appId = conf.baseUrl.appId;
export const platform = conf.baseUrl.platform;
export const refreshUrl = conf.baseUrl.refreshUrl;
const instance = http.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'AppId': appId,
    'Platform': platform
  }
});
// instance 配置
instance.setToken = (token) => {
  instance.defaults.headers.Authorization = token;
  localSave(TOKEN_KEY, token);
};

// 配置通用请求动画
let loading = null;
// 是否正在刷新的标记
let isRefreshing = false;
// 重试队列，每一项将是一个待执行的函数形式
let requests = [];

/**
 * 通用请求拦截配置
 * @param {*} config
 */
const instanceConf = (config) => {
  let token = localRead(TOKEN_KEY);
  config.headers.Authorization = token;
  return config;
};

instance.interceptors.request.use(instanceConf, err => {
  return Promise.reject(err);
});

// http response 拦截器
instance.interceptors.response.use(async (response) => {
  if (response.config.responseType === 'blob') {
    let isReturnJson = (response.headers && response.headers['content-type'] && response.headers['content-type'].indexOf('json') > -1);
    // 后端返回错误信息
    if (isReturnJson) {
      let reader = new FileReader();
      reader.onload = function (event) {
        let content = reader.result;
        let parseRes = JSON.parse(content); // 错误信息
        return validateResponseCode({
          data: parseRes
        });
      };
      reader.readAsText(response.data);
      return true;
    } else {
      // 下载文件
      download(response);
    }
  } else {
    // 正常json请求
    let data = {};
    if (response && response.data) {
      let code = Number(response.code || response.data.code);
      data = response.data;
      if (code === 101 || code === 1) {
        data = response.data;
      } else if (code == 6) {
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const { data: { token } } = await refreshToken();
            if (token) {
              instance.setToken(token);
              response.config.headers.Authorization = token;
              // 已经刷新了token，将所有队列中的请求进行重试
              requests.forEach(cb => cb(token));
              requests = [];
              return instance(instanceConf(response.config));
            }
          } catch (error) { // 刷新时候直接判断token 不用判断code
            console.error('refreshtoken error =>', error);
            routerRedirect({ redirect: router.currentRoute.fullPath });
          } finally {
            isRefreshing = false;
          }
        } else {
          // 正在刷新token，将返回一个未执行resolve的promise
          return new Promise((resolve) => {
            // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
            requests.push((token) => {
              response.config.headers.Authorization = token;
              resolve(instance(instanceConf(response.config)));
            });
          });
        }
      } else if (code === 0) {
        routerRedirect({ redirect: router.currentRoute.fullPath });
      } else if (![30073, 30072, 30074, 30078, 30075, 30076].includes(code)) {
        Spin.hide();
        Message.error(response.data && (response.data.msg || '网络连接出错!请稍后刷新重试!'));
      }
    }
    return data;
  }
}, (error) => {
  console.log('object', error);
  Message.error('哎呀~ (ಥ﹏ಥ)网络又开小差了,请稍后刷新重试!');
  return Promise.reject(error.response.data);
});

/**
 * 重定向
 */
const routerRedirect = ({ path = '#/login', redirect }) => {
  Message.warning('身份过期，请重新登录!');
  if (router.currentRoute.path != '#/login') {
    setTimeout(() => {
      localStorage.clear();
      router.replace({ path, query: { redirect } });
    }, 1200);
  }
};

function validateResponseCode (res) {
  let { data } = res;
  if (data && data.code && data.code !== 101 && data.code !== 1) {
    if (data.code === 1001) {
      localStorage.clear();
      window.location.href = window.location.pathname + '#/login';
      Message.error('未登录，或登录失效，请登录');
      return;
    } else if (data.code === 502) {
      window.location.href = window.location.pathname + '#/500';
      return;
    } else {
      Spin.hide();
      Message.error(data.msg);
      return Promise.reject(res);
    }
  }

  return Promise.resolve(data);
}

export const postAxios = (url, data) => {
  return instance.post(url, data);
};

export const postFileUploadAxios = (url, data) => {
  return instance.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const getDownloadAxios = (url) => {
  return instance.get(url, { responseType: 'blob' });
};

export const postDownloadAxios = (url, data) => {
  return instance.post(url, data, { responseType: 'blob' });
};

export const getAxios = (url, data) => {
  return instance.get(url, {
    params: data
  });
};

function download (res) {
  let reader = new FileReader();
  let data = res.data;
  reader.onload = e => {
    if (e.target.result.indexOf('Result') != -1 && JSON.parse(e.target.result).Result == false) {
      // 进行错误处理
    } else {
      let fileName = 'download';
      let contentDisposition = res.headers['Content-Disposition'];
      contentDisposition = contentDisposition || res.headers['content-disposition'];
      if (contentDisposition) {
        fileName = window.decodeURI(contentDisposition.split('=')[1], 'UTF-8');
      }
      executeDownload(data, fileName);
    }
  };
  reader.readAsText(data);
}

//  模拟点击a 标签进行下载
function executeDownload (data, fileName) {
  if (!data) {
    return;
  }
  let url = window.URL.createObjectURL(new Blob([data]));
  let link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default instance;
