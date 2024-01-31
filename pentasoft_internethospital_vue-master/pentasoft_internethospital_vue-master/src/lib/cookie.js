import Cookies from 'js-cookie';
import config from '@/config';
const { cookieExpires, cookieRefreshExpires } = config;
export const TOKEN_KEY = '54doctor_credentials';
export const REFRESH_TOKEN_KEY = 'refreshToken';

export default {
  setToken: token => {
    // Cookies.set(TOKEN_KEY, token, {
    //   // token在Cookie中存储的天数，默认1天
    //   expires: cookieExpires || 7
    // });
  },
  setRefreshToken: refreshTOken => {
    Cookies.set(REFRESH_TOKEN_KEY, refreshTOken, {
      // refreshToken在Cookie中存储7天
      expires: cookieRefreshExpires || 7
    });
  },
  getToken: () => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) return token;
    else return null;
  },
  getRefreshToken: () => {
    const refreshToken = Cookies.get(REFRESH_TOKEN_KEY);
    if (refreshToken) return refreshToken;
    else return null;
  },
  clearToken: () => {
    console.log('q1111');
    Cookies.remove(TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
  }
};
