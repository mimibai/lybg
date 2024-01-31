import Main from '@/components/main';
// smart_AppPlatformAccounts路由
export const platform = [
  {
    path: '/app/platform',
    name: 'AppPlatform',
    component: Main,
    meta: {
      title: '应用管理',
      icon: 'ios-alarm'
    },
    children: [
      //  应用列表
      {
        path: '/app/platform/list',
        name: 'AppPlatformAccountList',
        meta: {
          title: '应用列表',
          privilege: [
            { title: '查询', name: 'app-platform-account-list-query' },
            { title: '新增', name: 'app-platform-account-list-add' },
            { title: '编辑', name: 'app-platform-account-list-update' },
            { title: '删除', name: 'app-platform-account-list-delete' },
            { title: '批量删除', name: 'app-platform-account-list-batch-delete' },
            { title: '批量导出', name: 'app-platform-account-list-batch-export' },
            { title: '导出全部', name: 'app-platform-account-list-export-all' }
          ]
        },
        component: () => import('@/views/business/app/app-platform-account/app-platform-account-list.vue')
      },
      {
        path: '/app/page/list',
        name: 'AppPageList',
        meta: {
          title: '页面管理',
          privilege: [
            { title: '查询', name: 'app-page-list-query' },
            { title: '新增', name: 'app-page-list-add' },
            { title: '编辑', name: 'app-page-list-update' },
            { title: '删除', name: 'app-page-list-delete' },
            { title: '批量删除', name: 'app-page-list-batch-delete' },
            { title: '批量导出', name: 'app-page-list-batch-export' },
            { title: '导出全部', name: 'app-page-list-export-all' },

            //页面模块权限
            { title: '页面模块查询', name: 'app-page-module-list-query' },
            { title: '页面模块新增', name: 'app-page-module-list-add' },
            { title: '页面模块编辑', name: 'app-page-module-list-update' },
            { title: '页面模块删除', name: 'app-page-module-list-delete' },
            { title: '页面模块移动', name: 'app-page-module-list-move' },
            { title: '页面模块批量删除', name: 'app-page-module-list-batch-delete' },
            { title: '页面模块批量导出', name: 'app-page-module-list-batch-export' },
            { title: '页面模块导出全部', name: 'app-page-module-list-export-all' },

            //页面模块数据权限
            { title: '页面模块数据查询', name: 'app-page-module-data-list-query' },
            { title: '页面模块数据新增', name: 'app-page-module-data-list-add' },
            { title: '页面模块数据编辑', name: 'app-page-module-data-list-update' },
            { title: '页面模块数据删除', name: 'app-page-module-data-list-delete' },
            { title: '页面模块数据移动', name: 'app-page-module-data-list-move' },
            { title: '页面模块数据批量删除', name: 'app-page-module-data-list-batch-delete' },
            { title: '页面模块数据批量导出', name: 'app-page-module-data-list-batch-export' },
            { title: '页面模块数据导出全部', name: 'app-page-module-data-list-export-all' },

          ]
        },
        component: () => import('@/views/business/app/app-page/app-page-list.vue')

      },

      {
        path: '/app/pageLink/list',
        name: 'AppPageLinkList',
        meta: {
          title: '路径管理',
          privilege: [
            { title: '查询', name: 'app-page-link-list-query' },
            { title: '新增', name: 'app-page-link-list-add' },
            { title: '编辑', name: 'app-page-link-list-update' },
            { title: '删除', name: 'app-page-link-list-delete' },
            { title: '批量删除', name: 'app-page-link-list-batch-delete' },
            { title: '批量导出', name: 'app-page-link-list-batch-export' },
            { title: '导出全部', name: 'app-page-link-list-export-all' }

          ]
        },
        component: () => import('@/views/business/app/app-page-link/app-page-link-list.vue')

      },
      {
        path: '/appImageLink',
        name: 'AppImageLink',
        meta: {
          title: '图片管理',
          privilege: [
            { title: '查询', name: 'app-image-link-list-query' },
            { title: '新增', name: 'app-image-link-list-add' },
            { title: '编辑', name: 'app-image-link-list-update' },
            { title: '删除', name: 'app-image-link-list-delete' },
            { title: '批量删除', name: 'app-image-link-list-batch-delete' },
            { title: '批量导出', name: 'app-image-link-list-batch-export' },
            { title: '导出全部', name: 'app-image-link-list-export-all' }
          ]
        },
        component: () => import('@/views/business/app/app-image-link/app-image-link-list.vue')
      },
      {
        path: '/app/pageModuleStyle/list',
        name: 'AppPageModuleStyleList',
        meta: {
          title: '样式管理',
          privilege: [
            { title: '查询', name: 'app-page-module-style-list-query' },
            { title: '新增', name: 'app-page-module-style-list-add' },
            { title: '编辑', name: 'app-page-module-style-list-update' },
            { title: '删除', name: 'app-page-module-style-list-delete' },
            { title: '批量删除', name: 'app-page-module-style-list-batch-delete' },
            { title: '批量导出', name: 'app-page-module-style-list-batch-export' },
            { title: '导出全部', name: 'app-page-module-style-list-export-all' }
          ]
        },
        component: () => import('@/views/business/app/app-page-module-style/app-page-module-style-list.vue')
      },
      {
        path: '/appSetting',
        name: 'AppSetting',
        meta: {
          title: '设置管理',
          privilege: [
            { title: '查询', name: 'app-setting-list-query' },
            { title: '新增', name: 'app-setting-list-add' },
            { title: '编辑', name: 'app-setting-list-update' },
            { title: '删除', name: 'app-setting-list-delete' },
            { title: '批量删除', name: 'app-setting-list-batch-delete' },
            { title: '批量导出', name: 'app-setting-list-batch-export' },
            { title: '导出全部', name: 'app-setting-list-export-all' }
          ]
        },
        component: () => import('@/views/business/app-setting/app-setting-list.vue')
      }
    ]
  }
];
