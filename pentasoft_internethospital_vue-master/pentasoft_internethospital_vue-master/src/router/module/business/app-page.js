import Main from '@/components/main';
// App管理路由
export const appPage = [
  {
    path: '/app/page',
    name: 'AppPage',
    component: Main,
    meta: {
      title: '页面管理',
      icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
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
          ]
        },
        component: () => import('@/views/business/app/app-page/app-page-list.vue')

      },
      {
        path: '/app/pageLink/list',
        name: 'AppPageLinkList',
        meta: {
          title: '小程序路径管理',
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
        path: '/app/pageModuleStyle/list',
        name: 'AppPageModuleStyleList',
        meta: {
          title: '模块样式列表',
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
      }
    ]
  }
];
