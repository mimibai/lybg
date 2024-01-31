import Main from '@/components/main';

//组织机构
export const organization=[
    {
        path:'/organization',
        name:'Organization',
        component:Main,
        meta:{
            title:'组织机构',
            icon:'icon iconfont iconrenyuanguanli',
        },
        children:[
            //  科室管理
            {
                path: '/departmentNode/list',
                name: 'DepartmentNodeList',
                meta: {
                    title: '科室管理',
                    privilege: [
                        { title: '查询', name: 'department-node-list-query' },
                        { title: '新增', name: 'department-node-list-add' },
                        { title: '编辑', name: 'department-node-list-update' },
                        { title: '删除', name: 'department-node-list-delete' },
                        { title: '批量删除', name: 'department-node-list-batch-delete' },
                        { title: '批量导出', name: 'department-node-list-batch-export' },
                        { title: '导出全部', name: 'department-node-list-export-all' },
                        { title: '移动节点', name: 'department-node-list-move' },
                        { title: '关闭站点', name: 'department-node-list-close' }
                    ]
                },
                component: () => import('@/views/business/organizations/department-node/department-node-list.vue')
            },
            //  医生管理
            {
                path: '/departmentNode/department-releated-doctor-list',
                name: 'DepartmentReleatedDoctorList',
                meta: {
                    title: '医生管理',
                    privilege: [
                        { title: '查询', name: 'department-releated-doctor-list-query' },
                        { title: '新增', name: 'department-releated-doctor-list-add' },
                        { title: '编辑', name: 'department-releated-doctor-list-update' },
                        { title: '删除', name: 'department-releated-doctor-list-delete' },
                        { title: '批量删除', name: 'department-releated-doctor-list-batch-delete' },
                        { title: '批量导出', name: 'department-releated-doctor-list-batch-export' },
                        { title: '导出全部', name: 'department-releated-doctor-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/organizations/department-releated-doctor/department-releated-doctor-list.vue')
            },
            // //部门管理
            // {
            //     path: '/deptNode/list',
            //     name: 'DeptNodeList',
            //     meta: {
            //         title: '部门管理',
            //         privilege: [
            //             { title: '查询', name: 'dept-node-list-query' },
            //             { title: '新增', name: 'dept-node-list-add' },
            //             { title: '编辑', name: 'dept-node-list-update' },
            //             { title: '删除', name: 'dept-node-list-delete' },
            //             { title: '批量删除', name: 'dept-node-list-batch-delete' },
            //             { title: '批量导出', name: 'dept-node-list-batch-export' },
            //             { title: '导出全部', name: 'dept-node-list-export-all' }
            //         ]
            //     },
            //     component: () => import('@/views/business/organizations/dept-node/dept-node-list.vue')
            // },
            // //部门分类
            // {
            //     path: '/deptNodeCategory/list',
            //     name: 'DeptNodeCategoryList',
            //     meta: {
            //         title: '部门分类',
            //         privilege: [
            //             { title: '查询', name: 'dept-node-category-list-query' },
            //             { title: '新增', name: 'dept-node-category-list-add' },
            //             { title: '编辑', name: 'dept-node-category-list-update' },
            //             { title: '删除', name: 'dept-node-category-list-delete' },
            //             { title: '批量删除', name: 'dept-node-category-list-batch-delete' },
            //             { title: '批量导出', name: 'dept-node-category-list-batch-export' },
            //             { title: '导出全部', name: 'dept-node-category-list-export-all' }
            //         ]
            //     },
            //     component: () => import('@/views/business/organizations/dept-node-category/dept-node-category-list.vue')
            // },
            // //患者管理
            // {
            //     path: '/patient/list',
            //     name: 'PatientList',
            //     meta: {
            //         title: '患者管理',
            //         privilege: [
            //             { title: '查询', name: 'patient-list-query' },
            //             { title: '新增', name: 'patient-list-add' },
            //             { title: '编辑', name: 'patient-list-update' },
            //             { title: '删除', name: 'patient-list-delete' },
            //             { title: '批量删除', name: 'patient-list-batch-delete' },
            //             { title: '批量导出', name: 'patient-list-batch-export' },
            //             { title: '导出全部', name: 'patient-list-export-all' }
            //         ]
            //     },
            //     component: () => import('@/views/business/organizations/patient/patient-list.vue')
            // },
        ]
    }
]
