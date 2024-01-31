import Main from '@/components/main';
// 内容管理路由
export const appointment = [
    {
        path: '/appointment',
        name: 'Appointment',
        component: Main,
        meta: {
            title: '预约挂号',
            icon: 'icon iconfont iconyoujianguanli'
        },
        children: [
            {
                path: '/appointment/list',
                name: 'SchedulingAppointmentList',
                meta: {
                    title: '预约登记',
                    privilege: [
                        { title: '查询', name: 'scheduling-appointment-list-query' },
                        { title: '新增', name: 'scheduling-appointment-list-add' },
                        { title: '编辑', name: 'scheduling-appointment-list-update' },
                        { title: '删除', name: 'scheduling-appointment-list-delete' },
                        { title: '查看须知确认记录', name: 'scheduling-appointment-list-notice-confirm' },
                        { title: '批量删除', name: 'scheduling-appointment-list-batch-delete' },
                        { title: '批量导出', name: 'scheduling-appointment-list-batch-export' },
                        { title: '导出全部', name: 'scheduling-appointment-list-export-all' },
                        { title: '预约登记_取号', name: 'scheduling-appointment-list-registered' },
                        { title: '预约登记_取消', name: 'scheduling-appointment-list-invalid' },
                    ]
                },
                component: () => import('@/views/business/scheduling/scheduling-appointment/scheduling-appointment-list.vue')
            }
        ]
    }
];
