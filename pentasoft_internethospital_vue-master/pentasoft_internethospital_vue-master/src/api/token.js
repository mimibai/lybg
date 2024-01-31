
import Axios from 'axios';
import config from '@/config';
import cookie from '@/lib/cookie';

export const baseUrl = config.baseUrl.apiUrl;
export const socketBaseUrl = config.baseUrl.webSocketUrl;
export const appId = config.baseUrl.appId;
export const platform = config.baseUrl.platform;
export const refreshUrl = config.baseUrl.refreshUrl;

export default async () => {
    try {
        const { data } = await Axios.post(refreshUrl, {
            token: cookie.getToken(),
            refreshToken: cookie.getRefreshToken()
        },
            {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'AppId': appId,
                    'Platform': platform
                }
            });
        const { code, data: { token, refreshToken } } = data || {};
        if (token && refreshToken) {
            cookie.setToken(token); //jwt
            cookie.setRefreshToken(refreshToken); //刷新token
        }
        return { code, data: { token, refreshToken } };
    } catch (error) {
        console.log(error);
    }
};