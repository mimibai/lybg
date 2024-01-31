import Main from '@/components/main';
// 内容管理路由
export const scheduling = [
  {
    path: '/scheduling',
    name: 'OPScheduling',
    component: Main,
    meta: {
      title: '出诊排班',
      icon: 'icon iconfont icondingshirenwu'
    },
    children: [
      {
        path: '/OPDepartment/list',
        name: 'OPDepartmentList',
        meta: {
          title: '门诊科室',
          privilege: [
            { title: '查询', name: 'opdepartment-list-query' },
            { title: '新增', name: 'opdepartment-list-add' },
            { title: '编辑', name: 'opdepartment-list-update' },
            { title: '删除', name: 'opdepartment-list-delete' },
            { title: '批量删除', name: 'opdepartment-list-batch-delete' },
            { title: '批量导出', name: 'opdepartment-list-batch-export' },
            { title: '移动节点', name: 'opdepartment-list-move' },
            { title: '导出全部', name: 'opdepartment-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opdepartment/opdepartment-list.vue')
      },
      {
        path: '/OPDoctor/list',
        name: 'OPDoctorList',
        meta: {
          title: '门诊医生',
          privilege: [
            { title: '查询', name: 'opdoctor-list-query' },
            { title: '新增', name: 'opdoctor-list-add' },
            { title: '编辑', name: 'opdoctor-list-update' },
            { title: '删除', name: 'opdoctor-list-delete' },
            { title: '批量删除', name: 'opdoctor-list-batch-delete' },
            { title: '批量导出', name: 'opdoctor-list-batch-export' },
            { title: '导出全部', name: 'opdoctor-list-export-all' }
          ]
        },
        component: () => import('@/views/business/organizations/opdoctor/opdoctor-list.vue')
      },
      {
        path: '/Specialty/list',
        name: 'SpecialtyList',
        meta: {
          title: '门诊专业',
          privilege: [
            { title: '查询', name: 'specialty-list-query' },
            { title: '新增', name: 'specialty-list-add' },
            { title: '编辑', name: 'specialty-list-update' },
            { title: '删除', name: 'specialty-list-delete' },
            { title: '批量删除', name: 'specialty-list-batch-delete' },
            { title: '批量导出', name: 'specialty-list-batch-export' },
            { title: '导出全部', name: 'specialty-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/specialty/specialty-list.vue')
      },
      {
        path: '/OpSchedulingPlan/list',
        name: 'OpSchedulingPlanList',
        meta: {
          title: '排班计划',
          privilege: [
            { title: '查询', name: 'op-scheduling-plan-list-query' },
            { title: '新增', name: 'op-scheduling-plan-list-add' },
            { title: '编辑', name: 'op-scheduling-plan-list-update' },
            { title: '删除', name: 'op-scheduling-plan-list-delete' },
            { title: '批量删除', name: 'op-scheduling-plan-list-batch-delete' },
            { title: '批量导出', name: 'op-scheduling-plan-list-batch-export' },
            { title: '导出全部', name: 'op-scheduling-plan-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opschedulingplan/op-scheduling-plan-list.vue')
      },
      {
        path: '/OpdailyScheduling/list',
        name: 'OpdailyScheduling',
        meta: {
          title: '出诊信息',
          privilege: [
            { title: '查询', name: 'op-daily-scheduling-list-query' },
            { title: '新增', name: 'op-daily-scheduling-list-add' },
            { title: '编辑', name: 'op-daily-scheduling-list-update' },
            { title: '删除', name: 'op-daily-scheduling-list-delete' },
            { title: '批量删除', name: 'op-daily-scheduling-list-batch-delete' },
            { title: '批量导出', name: 'op-daily-scheduling-list-batch-export' },
            { title: '导出全部', name: 'op-daily-scheduling-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opdailyscheduling/op-daily-scheduling-list.vue')
      },
      {
        path: '/SchedulingClinic/list',
        name: 'SchedulingClinic',
        meta: {
          title: '门诊诊室',
          privilege: [
            { title: '查询', name: 'scheduling-clinic-list-query' },
            { title: '新增', name: 'scheduling-clinic-list-add' },
            { title: '编辑', name: 'scheduling-clinic-list-update' },
            { title: '删除', name: 'scheduling-clinic-list-delete' },
            { title: '批量删除', name: 'scheduling-clinic-list-batch-delete' },
            { title: '批量导出', name: 'scheduling-clinic-list-batch-export' },
            { title: '导出全部', name: 'scheduling-clinic-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/schedulingclinic/scheduling-clinic-list.vue')
      },
      {
        path: '/OPSchedulingChange/list',
        name: 'OPSchedulingChange',
        meta: {
          title: '换诊管理',
          privilege: [
            { title: '查询', name: 'op-scheduling-change-list-query' },
            { title: '新增', name: 'op-scheduling-change-list-add' },
            { title: '编辑', name: 'op-scheduling-change-list-update' },
            { title: '删除', name: 'op-scheduling-change-list-delete' },
            { title: '批量删除', name: 'op-scheduling-change-list-batch-delete' },
            { title: '批量导出', name: 'op-scheduling-change-list-batch-export' },
            { title: '导出全部', name: 'op-scheduling-change-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opschedulingchange/op-scheduling-change-list.vue')
      },
      {
        path: '/OPSchedulingHoliday/list',
        name: 'OPSchedulingHoliday',
        meta: {
          title: '假期管理',
          privilege: [
            { title: '查询', name: 'op-scheduling-holiday-list-query' },
            { title: '新增', name: 'op-scheduling-holiday-list-add' },
            { title: '编辑', name: 'op-scheduling-holiday-list-update' },
            { title: '删除', name: 'op-scheduling-holiday-list-delete' },
            { title: '批量删除', name: 'op-scheduling-holiday-list-batch-delete' },
            { title: '批量导出', name: 'op-scheduling-holiday-list-batch-export' },
            { title: '导出全部', name: 'op-scheduling-holiday-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opschedulingholiday/op-scheduling-holiday-list.vue')
      },
      {
        path: '/OPSchedulingRule/list',
        name: 'OPSchedulingRule',
        meta: {
          title: '预约规则管理',
          privilege: [
            { title: '查询', name: 'op-scheduling-rule-list-query' },
            { title: '新增', name: 'op-scheduling-rule-list-add' },
            { title: '编辑', name: 'op-scheduling-rule-list-update' },
            { title: '删除', name: 'op-scheduling-rule-list-delete' },
            { title: '批量删除', name: 'op-scheduling-rule-list-batch-delete' },
            { title: '批量导出', name: 'op-scheduling-rule-list-batch-export' },
            { title: '导出全部', name: 'op-scheduling-rule-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opschedulingrule/op-scheduling-rule-list.vue')
      },
      {
        path: '/OPSchedulingSetting/list',
        name: 'OPSchedulingSetting',
        meta: {
          title: '预约配置管理',
          privilege: [
            { title: '查询', name: 'op-scheduling-setting-list-query' },
            { title: '新增', name: 'op-scheduling-setting-list-add' },
            { title: '编辑', name: 'op-scheduling-setting-list-update' },
            { title: '删除', name: 'op-scheduling-setting-list-delete' },
            { title: '批量删除', name: 'op-scheduling-setting-list-batch-delete' },
            { title: '批量导出', name: 'op-scheduling-setting-list-batch-export' },
            { title: '导出全部', name: 'op-scheduling-setting-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opschedulingsetting/op-scheduling-setting-list.vue')
      },
      {
        path: '/OPSchedulingLog/list',
        name: 'OPSchedulingLog',
        meta: {
          title: '操作日志管理',
          privilege: [
            { title: '查询', name: 'op-scheduling-log-list-query' },
            { title: '新增', name: 'op-scheduling-log-list-add' },
            { title: '编辑', name: 'op-scheduling-log-list-update' },
            { title: '删除', name: 'op-scheduling-log-list-delete' },
            { title: '批量删除', name: 'op-scheduling-log-list-batch-delete' },
            { title: '批量导出', name: 'op-scheduling-log-list-batch-export' },
            { title: '导出全部', name: 'op-scheduling-log-list-export-all' }
          ]
        },
        component: () => import('@/views/business/scheduling/opschedulinglog/op-scheduling-log-list.vue')
      }
    ]
  }
];
