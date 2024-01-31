import Main from '@/components/main';
// ybj_votes路由
export const flowModulation = [
  {
    path: '/vote-flow',
    name: 'Vote-flow',
    component: Main,
    meta: {
      title: '流调管理',
      icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
      //  表单管理列表
      {
        path: '/vote-flow/vote-list',
        name: 'VoteFlowList',
        meta: {
          title: '流调管理',
          privilege: [
            { title: '查询', name: 'vote-flow-list-query' },
            { title: '新增', name: 'vote-flow-list-add' },
            { title: '编辑', name: 'vote-flow-list-update' },
            { title: '删除', name: 'vote-flow-list-delete' },
            { title: '批量删除', name: 'vote-flow-list-batch-delete' },
            { title: '批量导出', name: 'vote-flow-list-batch-export' },
            { title: '导出全部', name: 'vote-flow-list-export-all' },
            // 以下为投票项的权限列表
            { title: '表单项查询', name: 'vote-flow-item-list-query' },
            { title: '表单项新增', name: 'vote-flow-item-list-add' },
            { title: '表单项编辑', name: 'vote-flow-item-list-update' },
            { title: '表单项删除', name: 'vote-flow-item-list-delete' },
            { title: '表单项移动', name: 'vote-flow-item-list-move' },
            { title: '更新得分', name: 'vote-flow-item-list-update-score' },
            // 表单管理明细相关权限
            { title: '表单明细-查询', name: 'vote-flow-detail-list-query' },
            { title: '表单明细-新增', name: 'vote-flow-detail-list-add' },
            { title: '表单明细-编辑', name: 'vote-flow-detail-list-update' },
            { title: '表单明细-删除', name: 'vote-flow-detail-list-delete' }
          ]
        },
        component: () => import('@/views/business/vote/vote-list.vue')
      },
      {
        path: '/vote-flow-result/list',
        name: 'VoteFlowResultList',
        meta: {
          title: '流调结果管理',
          privilege: [
            { title: '查询', name: 'vote-flow-result-list-query' },
            { title: '详情', name: 'vote-flow-result-list-detail' },
            { title: '核验', name: 'vote-flow-result-list-verification' },
            { title: '批量导出', name: 'vote-flow-result-list-batch-export' },
            { title: '导出全部', name: 'vote-flow-result-list-export-all' },
            { title: '详情序列化格式', name: 'vote-flow-result-getSerilize' }
          ]
        },
        component: () => import('@/views/business/vote/vote-result-list.vue')
      }
    ]
  }
];
