import Main from '@/components/main';
// medicalconsortiums路由
export const medicalconsortiums = [
  {
    path: '/doctor-apply',
    name: 'DoctorApply',
    component: Main,
    meta: {
      title: '医联体',
      icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
      //  列表
      {
        path: '/medicalconsortiums/doctor-apply/doctor-apply-list',
        name: 'DoctorApplyList',
        meta: {
          title: '医生申请',
          privilege: [
            { title: '查询', name: 'doctor-apply-list-query' },
            { title: '新增', name: 'doctor-apply-list-add' },
            { title: '编辑', name: 'doctor-apply-list-update' },
            { title: '删除', name: 'doctor-apply-list-delete' },
            { title: '批量删除', name: 'doctor-apply-list-batch-delete' },
            { title: '批量导出', name: 'doctor-apply-list-batch-export' },
            { title: '导出全部', name: 'doctor-apply-list-export-all' }
          ]
        },
        component: () => import('@/views/business/medicalconsortiums/doctor-apply/doctor-apply-list.vue')
      },
      {
        path: '/referral-application/referral-application-list',
        name: 'ReferralApplicationList',
        meta: {
          title: '转诊申请',
          privilege: [
            { title: '查询', name: 'referral-application-list-query' },
            { title: '新增', name: 'referral-application-list-add' },
            { title: '编辑', name: 'referral-application-list-update' },
            { title: '删除', name: 'referral-application-list-delete' },
            { title: '批量删除', name: 'referral-application-list-batch-delete' },
            { title: '批量导出', name: 'referral-application-list-batch-export' },
            { title: '导出全部', name: 'referral-application-list-export-all' }
          ]
        },
        component: () => import('@/views/business/medicalconsortiums/referral-application/referral-application-list.vue')
      }
    ]
  }
];
