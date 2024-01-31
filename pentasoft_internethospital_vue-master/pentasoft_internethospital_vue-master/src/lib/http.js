import Axios from 'axios';
import config from '@/config';
import { Message, Spin } from 'view-design';
import { loginApi } from '@/api/login';
import { reject } from 'lodash';
import { localRead, localSave, TOKEN_KEY, REFRESH_TOKEN_KEY } from './local';
// 之所以封装这个axios，是因为在一些请求中，无法上传信息，很尴尬，估计原因是继承的有问题，无法携带headers
export const baseUrl = config.baseUrl.apiUrl;
export const socketBaseUrl = config.baseUrl.webSocketUrl;
export const appId = config.baseUrl.appId;
export const platform = config.baseUrl.platform;

// 配置通用请求动画
let loading = null;
// 是否正在刷新的标记
let isRefreshing = false;
// 重试队列，每一项将是一个待执行的函数形式
let requests = [];

let axios = Axios.create({
  baseURL: baseUrl,

  retry: 3,
  retryDelay: 1000,

  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'AppId': appId,
    'Platform': platform
  }
});

axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (localRead(TOKEN_KEY)) {
      config.headers['Authorization'] = localRead(TOKEN_KEY);
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    Spin.hide();
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.config.responseType === 'blob') {
      let isReturnJson = res.headers && res.headers['content-type'] && res.headers['content-type'].indexOf('json') > -1;
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
        reader.readAsText(res.data);
        return true;
      } else {
        // 下载文件
        download(res);
      }
    } else {
      // 正常json请求
      return validateResponseCode(res);
    }
  },
  error => {
    Spin.hide();
    Message.error('服务内部错误');
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

function validateResponseCode (res) {
  let { data } = res;
  if (data && data.code && data.code != 101 && data.code != 1) {
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

// function blobToText(blob) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsText(blob);
//     fileReader.onload = function () {
//       try {
//         const result = JSON.parse(this.result);
//         if (result && result['resultCode'] === 'fail') {
//           resolve(result);
//         } else {
//           reject();
//         }
//       } catch (e) {
//         // TODO handle the exception
//         reject();
//       }
//     };
//   });
// }

function retryRequest (res, data) {
  return postAxios(res.config.url, res.config.data);
}

export const postAxios = (url, data) => {
  return axios.post(url, data);
};

export const postFileUploadAxios = (url, data) => {
  return axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const getDownloadAxios = (url) => {
  return axios.get(url, { responseType: 'blob' });
};

export const postDownloadAxios = (url, data) => {
  return axios.post(url, data, { responseType: 'blob' });
};

export const getAxios = (url, data) => {
  return axios.get(url, {
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
