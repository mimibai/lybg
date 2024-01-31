import Main from '@/components/main';
// 功能配置相关路由
export const functions = [
  {
    path: '/function',
    name: 'Function',
    component: Main,
    meta: {
      title: '微信管理',
      icon: 'icon iconfont iconzujian'
    },
    children: [

      {
        path: '/wx-account/list',
        name: 'WxAccountList',
        meta: {
          title: '微信账号',
          privilege: [
            { title: '查询', name: 'wx-account-list-query' },
            { title: '新增', name: 'wx-account-list-add' },
            { title: '编辑', name: 'wx-account-list-update' },
            { title: '删除', name: 'wx-account-list-delete' },
            { title: '批量删除', name: 'wx-account-list-batch-delete' },
            { title: '批量导出', name: 'wx-account-list-batch-export' },
            { title: '导出全部', name: 'wx-account-list-export-all' },
            // 下方为微信菜单的权限，因为是关联在微信账号的子页面，所以需要在微信账号下进行权限设置
            { title: '微信菜单查询', name: 'wx-menu-list-query' },
            { title: '微信菜单新增', name: 'wx-menu-list-add' },
            { title: '微信菜单编辑', name: 'wx-menu-list-update' },
            { title: '微信菜单删除', name: 'wx-menu-list-delete' },
            { title: '微信菜单移动节点', name: 'wx-menu-list-move' },
            { title: '微信菜单同步到微信菜单', name: 'wx-menu-list-synchronize' }

          ]
        },
        component: () => import('@/views/business/wx-account/wx-account-list.vue')
      },
      {
        path: '/wx-user/list',
        name: 'WxUserList',
        meta: {
          title: '微信用户',
          privilege: [
            { title: '查询', name: 'wx-user-list-query' },
            { title: '新增', name: 'wx-user-list-add' },
            { title: '编辑', name: 'wx-user-list-update' },
            { title: '删除', name: 'wx-user-list-delete' },
            { title: '批量删除', name: 'wx-user-list-batch-delete' },
            { title: '同步', name: 'wx-user-list-synchronize' }
          ]
        },
        component: () => import('@/views/business/wx-user/wx-user-list.vue')
      }

      // {
      //     path: '/wxPatientLimit',
      //     name: 'WxPatientLimit',
      //     meta: {
      //         title: '页面患者限制',
      //         privilege: [
      //             { title: '查询', name: 'wx-patient-limit-list-query' },
      //             { title: '新增', name: 'wx-patient-limit-list-add' },
      //             { title: '编辑', name: 'wx-patient-limit-list-update' },
      //             { title: '删除', name: 'wx-patient-limit-list-delete' },
      //             { title: '批量删除', name: 'wx-patient-limit-list-batch-delete' },
      //             { title: '批量导出', name: 'wx-patient-limit-list-batch-export' },
      //             { title: '导出全部', name: 'wx-patient-limit-list-export-all' }
      //         ]
      //     },
      //     component: () => import('@/views/business/wx-patient-limit/wx-patient-limit-list.vue')
      // },
    ]
  }
];
