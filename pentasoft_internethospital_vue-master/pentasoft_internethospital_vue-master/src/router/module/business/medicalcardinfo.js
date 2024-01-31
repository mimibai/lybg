import Main from '@/components/main';
// 文件服务
export const medicalcardinfo = [
  {
    path: '/medicalcardinfo',
    name: 'Medicalcardinfo',
    component: Main,
    meta: {
      title: '医保用户',
      icon: 'ios-cloud-upload'
    },
    children: [
      {
        path: '/medicalcardinfo/list',
        name: 'MedicalcardinfoList',
        meta: {
          title: '医保参与用户',
          icon: 'ios-cloud-upload',
          privilege: [
            { title: '查询', name: 'medicalcardinfo-list-query' },
            { title: '新增', name: 'medicalcardinfo-list-add' },
            { title: '编辑', name: 'medicalcardinfo-list-update' },
            { title: '删除', name: 'medicalcardinfo-list-delete' },
            { title: '批量删除', name: 'medicalcardinfo-list-batch-delete' },
            { title: '批量导出', name: 'medicalcardinfo-list-batch-export' },
            { title: '导出全部', name: 'medicalcardinfo-list-export-all' }
          ]
        },
        component: () => import('@/views/business/medicalcardinfo/medicalcardinfo-list.vue')
      }
    ]
  }
];
