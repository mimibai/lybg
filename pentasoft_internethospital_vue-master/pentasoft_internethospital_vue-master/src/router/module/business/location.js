import Main from '@/components/main';
// 内容管理路由
export const location = [
    {
        path: '/location',
        name: 'Location',
        component: Main,
        meta: {
            title: '医院管理',
            icon: 'icon iconfont iconyoujianguanli'
        },
        children: [
            {
                path: '/location/branch',
                name: 'BranchManage',
                meta: {
                    title: '院区管理',
                    privilege: [
                        { title: '查询', name: 'location-branch-list-query' },
                        { title: '新增', name: 'location-branch-list-add' },
                        { title: '编辑', name: 'location-branch-list-update' },
                        { title: '删除', name: 'location-branch-list-delete' },
                        { title: '批量删除', name: 'location-branch-list-batch-delete' },
                        { title: '批量导出', name: 'location-branch-list-batch-export' },
                        { title: '导出全部', name: 'location-branch-list-export-all' },
                    ]
                },
                component: () => import('@/views/business/navigation/location-branch/location-branch-list.vue')

            },
            {
                path: '/location/building',
                name: 'BuildingManage',
                meta: {
                    title: '建筑管理',
                    privilege: [
                        { title: '查询', name: 'location-building-list-query' },
                        { title: '新增', name: 'location-building-list-add' },
                        { title: '编辑', name: 'location-building-list-update' },
                        { title: '删除', name: 'location-building-list-delete' },
                        { title: '批量删除', name: 'location-building-list-batch-delete' },
                        { title: '批量导出', name: 'location-building-list-batch-export' },
                        { title: '导出全部', name: 'location-building-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/navigation/location-building/location-building-list.vue')
            },
            {
                path: '/location/floor',
                name: 'FloorManage',
                meta: {
                    title: '楼层管理',
                    privilege: [
                        { title: '查询', name: 'location-floor-list-query' },
                        { title: '新增', name: 'location-floor-list-add' },
                        { title: '编辑', name: 'location-floor-list-update' },
                        { title: '删除', name: 'location-floor-list-delete' },
                        { title: '批量删除', name: 'location-floor-list-batch-delete' },
                        { title: '批量导出', name: 'location-floor-list-batch-export' },
                        { title: '导出全部', name: 'location-floor-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/navigation/location-floor/location-floor-list.vue')
            },
            {
                path: '/location/room',
                name: 'RoomManage',
                meta: {
                    title: '房间列表',
                    privilege: [
                        { title: '查询', name: 'location-room-list-query' },
                        { title: '新增', name: 'location-room-list-add' },
                        { title: '编辑', name: 'location-room-list-update' },
                        { title: '删除', name: 'location-room-list-delete' },
                        { title: '批量删除', name: 'location-room-list-batch-delete' },
                        { title: '批量导出', name: 'location-room-list-batch-export' },
                        { title: '导出全部', name: 'location-room-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/navigation/location-room/location-room-list.vue')
            }
        ]
    }
];
