import { postAxios, getAxios } from '@/lib/axios';
export const loginApi = {
  // 登录
  login: data => {
    return postAxios('/session/login', data);
  },
  // 根据token获取session
  getSession: () => {
    return getAxios('/session/get');
  },
  // 登出
  logout: (token) => {
    return getAxios(`/session/logOut?Authorization=${token}`);
  },
  // 获取验证码
  getVerificationCode: (data) => {
    return getAxios('/session/verificationCode', data);
  },
  /**
   * 刷新token
   * @param {token、refreshToken}} data 
   * @returns 
   */
  refresh: data => {
    return postAxios('/token/refresh', data);
  }
};
