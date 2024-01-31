import Main from '@/components/main';
// 内容管理路由
export const content = [
    {
        path: '/content',
        name: 'Content',
        component: Main,
        meta: {
            title: '内容管理',
            icon: 'icon iconfont iconyoujianguanli'
        },
        children: [
            {
                path: '/content/article',
                name: 'ArticleManage',
                meta: {
                    title: '文章管理',
                    privilege: [
                        { title: '查询', name: 'article-list-query' },
                        { title: '新增', name: 'article-list-add' },
                        { title: '编辑', name: 'article-list-update' },
                        { title: '删除', name: 'article-list-delete' },
                        { title: '批量删除', name: 'article-list-batch-delete' },
                        { title: '批量导出', name: 'article-list-batch-export' },
                        { title: '导出全部', name: 'article-list-export-all' }

                    ]
                },
                component: () => import('@/views/business/article/article-list.vue')

            },
            {
                path: '/content/column',
                name: 'ColumnList',
                meta: {
                    title: '栏目管理',
                    privilege: [
                        { title: '查询', name: 'column-list-query' },
                        { title: '新增', name: 'column-list-add' },
                        { title: '编辑', name: 'column-list-update' },
                        { title: '删除', name: 'column-list-delete' },
                        { title: '批量删除', name: 'column-list-batch-delete' },
                        { title: '批量导出', name: 'column-list-batch-export' },
                        { title: '导出全部', name: 'column-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/column/column-list.vue')
            }
        ]
    }
];
