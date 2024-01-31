import Main from '@/components/main';
// ybj_votes路由
export const vote = [
  {
    path: '/vote',
    name: 'Vote',
    component: Main,
    meta: {
      title: '表单管理',
      icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
      //  表单管理列表
      {
        path: '/vote/vote-list',
        name: 'VoteList',
        meta: {
          title: '表单管理',
          privilege: [
            { title: '查询', name: 'vote-list-query' },
            { title: '新增', name: 'vote-list-add' },
            { title: '编辑', name: 'vote-list-update' },
            { title: '删除', name: 'vote-list-delete' },
            { title: '批量删除', name: 'vote-list-batch-delete' },
            { title: '批量导出', name: 'vote-list-batch-export' },
            { title: '导出全部', name: 'vote-list-export-all' },
            // 以下为投票项的权限列表
            { title: '表单项查询', name: 'vote-item-list-query' },
            { title: '表单项新增', name: 'vote-item-list-add' },
            { title: '表单项编辑', name: 'vote-item-list-update' },
            { title: '表单项删除', name: 'vote-item-list-delete' },
            { title: '表单项移动', name: 'vote-item-list-move' },
            { title: '更新得分', name: 'vote-item-list-update-score' },
            // 表单管理明细相关权限
            { title: '表单明细-查询', name: 'vote-detail-list-query' },
            { title: '表单明细-新增', name: 'vote-detail-list-add' },
            { title: '表单明细-编辑', name: 'vote-detail-list-update' },
            { title: '表单明细-删除', name: 'vote-detail-list-delete' }
          ]
        },
        component: () => import('@/views/business/vote/vote-list.vue')
      },
      {
        path: '/vote-result/list',
        name: 'VoteResultList',
        meta: {
          title: '表单结果管理',
          privilege: [
            { title: '查询', name: 'vote-result-list-query' },
            { title: '详情', name: 'vote-result-list-detail' },
            { title: '核验', name: 'vote-result-list-verification' },
            { title: '批量导出', name: 'vote-result-list-batch-export' },
            { title: '导出全部', name: 'vote-result-list-export-all' },
            { title: '详情序列化格式', name: 'vote-result-getSerilize' }
          ]
        },
        component: () => import('@/views/business/vote/vote-result-list.vue')
      }
    ]
  }
];
