
import { loginApi } from '@/api/login';
import { localSave, localRead, TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/lib/local';
import { getType } from '@/lib/util';
import { PRIVILEGE_TYPE_ENUM } from '@/constants/privilege';

const localReadRouterPrivilege = () => {
  let map = new Map();
  let userRouterPrivilegeString = localRead('userRouterPrivilege');
  if (userRouterPrivilegeString) {
    let privilegeList = JSON.parse(userRouterPrivilegeString);
    if (privilegeList) {
      for (const path of privilegeList) {
        let key = path.substr(1, 1);
        let pathArray = map.get(key);
        if (pathArray) {
          pathArray.push(path);
        } else {
          pathArray = [];
          pathArray.push(path);
          map.set(key, pathArray);
        }
      }
    }
  }
  return map;
};

export default {
  state: {
    token: localRead(TOKEN_KEY),
    refreshToken: localRead(REFRESH_TOKEN_KEY),
    // session信息
    userLoginInfo: {},
    isUpdatePrivilege: false,
    // key为router name, value为 key的集合,用于v-privilege，页面功能点判断
    privilegeFunctionPointsMap: new Map(),
    // 菜单key权限集合，用于左侧是否有菜单权限判断
    privilegeMenuKeyList: [],
    /**
     * key为 router path的首字母，value为集合
     * 这样做是为了提高查询效率，用于vue-router拦截判断path
     */
    privilegeRouterPathMap: localReadRouterPrivilege()

  },
  mutations: {
    // 设置token
    setToken (state, token) {
      state.token = token;
      localSave(TOKEN_KEY, token);
    },
    setRefreshToken (state, refreshToken) {
      state.refreshToken = refreshToken;
      localSave(REFRESH_TOKEN_KEY, refreshToken);
    },
    // 保存用户登录信息
    setUserLoginInfo (state, userLoginInfo) {
      state.userLoginInfo = userLoginInfo;
      localSave('userLoginInfo', JSON.stringify(userLoginInfo));
    },
    setUserPrivilege (state, privilegeList) {
      state.isUpdatePrivilege = true;
      let routerPathArray = [];
      for (const privilege of privilegeList) {
        // 是菜单权限
        if (privilege.type === PRIVILEGE_TYPE_ENUM.MENU.value) {
          state.privilegeMenuKeyList.push(privilege.key);
          if (privilege.url) {
            routerPathArray.push(privilege.url);
            // 去掉/之后第一个字母
            let key = privilege.url.substr(1, 1);
            let pathArray = state.privilegeRouterPathMap.get(key);
            if (pathArray) {
              pathArray.push(privilege.url);
            } else {
              pathArray = [];
              pathArray.push(privilege.url);
              state.privilegeRouterPathMap.set(key, pathArray);
            }
          }
        }
        // 如果是功能点
        if (privilege.type === PRIVILEGE_TYPE_ENUM.POINTS.value) {
          if (privilege.parentKey) {
            let pointArray = state.privilegeFunctionPointsMap.get(privilege.parentKey);
            if (pointArray) {
              pointArray.push(privilege.key);
            } else {
              pointArray = [];
              pointArray.push(privilege.key);
              state.privilegeFunctionPointsMap.set(privilege.parentKey, pointArray);
            }
          }
        }
      }
      localSave('userRouterPrivilege', JSON.stringify(routerPathArray));
    }
  },
  getters: {
    // 用户功能点权限
    userFuncPrivilegeInfo: () => localRead('funcPrivilegeInfo'),
    // 用户菜单权限
    userMenuPrivilege: state => state.userLoginInfo.privilegeList
  },
  actions: {
    // 登录
    handleLogin ({ commit }, params) {
      params.loginName = params.loginName.trim();
      return new Promise((resolve, reject) => {
        loginApi
          .login(params)
          .then(res => {
            localStorage.clear();
            const data = res.data;
            console.log(data);
            commit('setToken', data.xaccessToken);
            commit('setRefreshToken', data.xrefreshToken);
            // 保存用户登录
            commit('setUserLoginInfo', data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
