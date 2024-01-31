import moment from 'moment';
export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '临沂市中心医院互联网医院信息系统',
  /**
   * @description token在Cookie中存储的天数，默认120分钟
   */
  cookieExpires: new Date(new Date().getTime() + 120 * 60 * 1000),
  /**
   * @description refreshToken在Cookie中存储的天数，默认7天
   */
  cookieRefreshExpires: 7,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    appId: '7FFAD0BF-1812-70E8-DCB1-DA1C04F1EF03',
    platform: 'ADMIN',
    apiUrl: (process.env.VUE_APP_TYPE == 'prod' ? (window.location.protocol + '/smart/') : process.env.VUE_APP_URL),
    webSocketUrl: (process.env.VUE_APP_TYPE == 'prod' ? ('wss://' + window.location.host + '/smart/') : process.env.VUE_APP_SOCKET_URL),
    defaultReturnUrl: (process.env.VUE_APP_TYPE == 'prod' ? (window.location.protocol + '/#/pages/news/artices/list') : process.env.VUE_APP_DEFAULT_URL + moment(new Date()).format('YYYYMMDDHH')),
    fileUploadUrl: (process.env.VUE_APP_TYPE == 'prod' ? (window.location.protocol + '/smart/') : process.env.VUE_APP_URL) + 'ueditor/ueditorConfig',
    refreshUrl: (process.env.VUE_APP_TYPE == 'prod' ? (window.location.protocol + '/smart/') : process.env.VUE_APP_URL) + '/token/refresh'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'Home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
};
