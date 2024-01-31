import Main from '@/components/main';
// ybj_sites路由
export const site = [
    {
        path: '/site',
        name: 'Site',
        component: Main,
        meta: {
            title: '站点管理',
            icon: 'icon iconfont iconyoujianguanli'
        },
        children: [
            //  列表
            {
                path: '/site/site-list',
                name: 'SiteList',
                meta: {
                    title: '站点管理',
                    privilege: [
                        { title: '查询', name: 'site-list-query' },
                        { title: '新增', name: 'site-list-add' },
                        { title: '编辑', name: 'site-list-update' },
                        { title: '删除', name: 'site-list-delete' },
                        { title: '批量删除', name: 'site-list-batch-delete' },
                        { title: '批量导出', name: 'site-list-batch-export' },
                        { title: '导出全部', name: 'site-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/site/site-list.vue')
             }
        ]
    }
];
