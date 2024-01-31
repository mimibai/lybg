import Main from '@/components/main';
// 动态加载
export const operation = [
  {
    path: '/operation',
    name: 'Operation',
    component: Main,
    meta: {
      title: '数据管理',
      icon: 'icon iconfont icondongtaijiazai'
    },

    children: [
      {
        path: '/operation/data-list',
        name: 'OperationList',
        meta: {
          title: '数据管理',
          icon: 'icon iconfont icondongtaijiazai',
          privilege: [
            {
              title: '查询',
              name: 'operation-query'
            },
            {
              title: '执行query',
              name: 'operation-update'
            },
          ]
        },
        component: () =>
          import('@/views/support/operation/data-list.vue')
      }
    ]
  }
];
