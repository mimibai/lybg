'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.consulation = void 0;

let _main = _interopRequireDefault(require('@/components/main'));

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _typeof (obj) { if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache () { if (typeof WeakMap !== 'function') return null; let cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache () { return cache; }; return cache; }

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { 'default': obj }; } let cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } let newObj = {}; let hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (let key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { let desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj['default'] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 功能配置相关路由
let consulation = [{
  path: '/consulation',
  name: 'Consulation',
  component: _main['default'],
  meta: {
    title: '互联网问诊',
    icon: 'icon iconfont iconzujian'
  },
  children: [{
    path: '/consulation/clinic-scheduling',
    name: 'Clinic',
    meta: {
      title: '在线问诊',
      icon: 'icon iconfont iconzujian'
    },
    children: [{
      path: '/consulation/clinic-scheduling/list',
      name: 'ClinicSchedulingList',
      meta: {
        title: '问诊日排班',
        privilege: [{
          title: '查询',
          name: 'clinic-scheduling-list-query'
        }, {
          title: '新增',
          name: 'clinic-scheduling-list-add'
        }, {
          title: '编辑',
          name: 'clinic-scheduling-list-update'
        }, {
          title: '删除',
          name: 'clinic-scheduling-list-delete'
        }, {
          title: '批量删除',
          name: 'clinic-scheduling-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'clinic-scheduling-list-batch-export'
        }, {
          title: '导出全部',
          name: 'clinic-scheduling-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/clinic-scheduling/clinic-scheduling-list.vue'));
        });
      }
    }, {
      path: '/consulation/clinic-appointment/list',
      name: 'ClinicAppointmentList',
      meta: {
        title: '问诊预约记录',
        privilege: [{
          title: '查询',
          name: 'clinic-appointment-list-query'
        }, {
          title: '新增',
          name: 'clinic-appointment-list-add'
        }, {
          title: '编辑',
          name: 'clinic-appointment-list-update'
        }, {
          title: '删除',
          name: 'clinic-appointment-list-delete'
        }, {
          title: '批量删除',
          name: 'clinic-appointment-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'clinic-appointment-list-batch-export'
        }, {
          title: '导出全部',
          name: 'clinic-appointment-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/clinic-appointment/clinic-appointment-list.vue'));
        });
      }
    }, {
      path: '/consulation/clinic-record/list',
      name: 'ClinicRecordList',
      meta: {
        title: '问诊记录',
        privilege: [{
          title: '查询',
          name: 'clinic-record-list-query'
        }, {
          title: '新增',
          name: 'clinic-record-list-add'
        }, {
          title: '编辑',
          name: 'clinic-record-list-update'
        }, {
          title: '删除',
          name: 'clinic-record-list-delete'
        }, {
          title: '批量删除',
          name: 'clinic-record-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'clinic-record-list-batch-export'
        }, {
          title: '导出全部',
          name: 'clinic-record-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/clinic-record/clinic-record-list.vue'));
        });
      }
    }, {
      path: '/consulation/clinic-scheduling-number/list',
      name: 'ClinicSchedulingNumberList',
      meta: {
        title: '问诊号源',
        privilege: [{
          title: '查询',
          name: 'clinic-scheduling-number-list-query'
        }, {
          title: '新增',
          name: 'clinic-scheduling-number-list-add'
        }, {
          title: '编辑',
          name: 'clinic-scheduling-number-list-update'
        }, {
          title: '删除',
          name: 'clinic-scheduling-number-list-delete'
        }, {
          title: '批量删除',
          name: 'clinic-scheduling-number-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'clinic-scheduling-number-list-batch-export'
        }, {
          title: '导出全部',
          name: 'clinic-scheduling-number-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/clinic-scheduling-number/clinic-scheduling-number-list.vue'));
        });
      }
    }, {
      path: '/consulation/clinic-setting/list',
      name: 'ClinicSettingList',
      meta: {
        title: '问诊设置',
        privilege: [{
          title: '查询',
          name: 'clinic-setting-list-query'
        }, {
          title: '新增',
          name: 'clinic-setting-list-add'
        }, {
          title: '编辑',
          name: 'clinic-setting-list-update'
        }, {
          title: '删除',
          name: 'clinic-setting-list-delete'
        }, {
          title: '批量删除',
          name: 'clinic-setting-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'clinic-setting-list-batch-export'
        }, {
          title: '导出全部',
          name: 'clinic-setting-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/clinic-setting/clinic-setting-list.vue'));
        });
      }
    }, {
      path: '/consulation/clinic-prescript/list',
      name: 'ClinicPrescriptList',
      meta: {
        title: '问诊处方',
        privilege: [{
          title: '查询',
          name: 'clinic-prescript-list-query'
        }, {
          title: '新增',
          name: 'clinic-prescript-list-add'
        }, {
          title: '编辑',
          name: 'clinic-prescript-list-update'
        }, {
          title: '删除',
          name: 'clinic-prescript-list-delete'
        }, {
          title: '批量删除',
          name: 'clinic-prescript-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'clinic-prescript-list-batch-export'
        }, {
          title: '导出全部',
          name: 'clinic-prescript-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/clinic-prescript/clinic-prescript-list.vue'));
        });
      }
    }, // {
    //   path:'/consulation/clinic-prescript-audit/list',
    //   name:'ClinicPrescriptAuditList',
    //   meta:{
    //     title:'问诊处方审核',
    //     privilege:[
    //       { title: '查询', name: 'clinic-prescript-audit-list-query' },
    //         { title: '新增', name: 'clinic-prescript-audit-list-add' },
    //         { title: '编辑', name: 'clinic-prescript-audit-list-update' },
    //         { title: '删除', name: 'clinic-prescript-audit-list-delete' },
    //         { title: '批量删除', name: 'clinic-prescript-audit-list-batch-delete' },
    //         { title: '批量导出', name: 'clinic-prescript-audit-list-batch-export' },
    //         { title: '导出全部', name: 'clinic-prescript-audit-list-export-all' }
    //     ]
    //   },
    //   component: () => import('@/views/business/consulation/clinic/clinic-prescript-audit/clinic-prescript-audit-list.vue')
    // },
    {
      path: '/consulation/clinic-black/list',
      name: 'ClinicBlackList',
      meta: {
        title: '问诊黑名单',
        privilege: [{
          title: '查询',
          name: 'clinic-black-list-query'
        }, {
          title: '新增',
          name: 'clinic-black-list-add'
        }, {
          title: '编辑',
          name: 'clinic-black-list-update'
        }, {
          title: '删除',
          name: 'clinic-black-list-delete'
        }, {
          title: '批量删除',
          name: 'clinic-black-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'clinic-black-list-batch-export'
        }, {
          title: '导出全部',
          name: 'clinic-black-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/clinic-black/clinic-black-list.vue'));
        });
      }
    }, {
      path: '/consulation/drug-delivery-route/list',
      name: 'DrugDeliveryRouteList',
      meta: {
        title: '给药途径',
        privilege: [{
          title: '查询',
          name: 'drug-delivery-route-list-query'
        }, {
          title: '新增',
          name: 'drug-delivery-route-list-add'
        }, {
          title: '编辑',
          name: 'drug-delivery-route-list-update'
        }, {
          title: '删除',
          name: 'drug-delivery-route-list-delete'
        }, {
          title: '批量删除',
          name: 'drug-delivery-route-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'drug-delivery-route-list-batch-export'
        }, {
          title: '导出全部',
          name: 'drug-delivery-route-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/drug-delivery-route/drug-delivery-route-list.vue'));
        });
      }
    }, {
      path: '/consulation/diagnose/list',
      name: 'DiagnoseList',
      meta: {
        title: '诊断库',
        privilege: [{
          title: '查询',
          name: 'diagnose-list-query'
        }, {
          title: '新增',
          name: 'diagnose-list-add'
        }, {
          title: '编辑',
          name: 'diagnose-list-update'
        }, {
          title: '删除',
          name: 'diagnose-list-delete'
        }, {
          title: '批量删除',
          name: 'diagnose-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'diagnose-list-batch-export'
        }, {
          title: '导出全部',
          name: 'diagnose-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/diagnose/diagnose-list.vue'));
        });
      }
    }, {
      path: '/consulation/drug/list',
      name: 'DrugList',
      meta: {
        title: '药品库',
        privilege: [{
          title: '查询',
          name: 'drug-list-query'
        }, {
          title: '新增',
          name: 'drug-list-add'
        }, {
          title: '编辑',
          name: 'drug-list-update'
        }, {
          title: '删除',
          name: 'drug-list-delete'
        }, {
          title: '批量删除',
          name: 'drug-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'drug-list-batch-export'
        }, {
          title: '导出全部',
          name: 'drug-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/clinic/drug/drug-list.vue'));
        });
      }
    }]
  }, {
    path: '/consulation/scheduling',
    name: 'Scheduling',
    meta: {
      title: '在线挂号',
      icon: 'icon iconfont iconzujian'
    },
    children: [{
      path: '/consulation/scheduling-appointment/list',
      name: 'SchedulingAppointmentList',
      meta: {
        title: '预约记录',
        privilege: [{
          title: '查询',
          name: 'scheduling-appointment-list-query'
        }, {
          title: '新增',
          name: 'scheduling-appointment-list-add'
        }, {
          title: '编辑',
          name: 'scheduling-appointment-list-update'
        }, {
          title: '删除',
          name: 'scheduling-appointment-list-delete'
        }, {
          title: '查看须知确认记录',
          name: 'scheduling-appointment-list-notice-confirm'
        }, {
          title: '批量删除',
          name: 'scheduling-appointment-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'scheduling-appointment-list-batch-export'
        }, {
          title: '导出全部',
          name: 'scheduling-appointment-list-export-all'
        }, {
          title: '预约登记_取号',
          name: 'scheduling-appointment-list-registered'
        }, {
          title: '预约登记_取消',
          name: 'scheduling-appointment-list-invalid'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/scheduling/scheduling-appointment/scheduling-appointment-list.vue'));
        });
      }
    }, {
      path: '/consulation/scheduling-appointment-candidate/list',
      name: 'SchedulingAppointmentCandidatList',
      meta: {
        title: '预约候补',
        privilege: [{
          title: '查询',
          name: 'scheduling-appointment-candidate-list-query'
        }, {
          title: '新增',
          name: 'scheduling-appointment-candidate-list-add'
        }, {
          title: '编辑',
          name: 'scheduling-appointment-candidate-list-update'
        }, {
          title: '删除',
          name: 'scheduling-appointment-candidate-list-delete'
        }, {
          title: '批量删除',
          name: 'scheduling-appointment-candidate-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'scheduling-appointment-candidate-list-batch-export'
        }, {
          title: '导出全部',
          name: 'scheduling-appointment-candidate-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/scheduling/scheduling-appointment-candidate/scheduling-appointment-candidate-list.vue'));
        });
      }
    }, {
      path: '/consulation/scheduling-black/list',
      name: 'SchedulingBlackList',
      meta: {
        title: '预约黑名单',
        privilege: [{
          title: '查询',
          name: 'scheduling-black-list-query'
        }, {
          title: '新增',
          name: 'scheduling-black-list-add'
        }, {
          title: '编辑',
          name: 'scheduling-black-list-update'
        }, {
          title: '删除',
          name: 'scheduling-black-list-delete'
        }, {
          title: '批量删除',
          name: 'scheduling-black-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'scheduling-black-list-batch-export'
        }, {
          title: '导出全部',
          name: 'scheduling-black-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/scheduling/scheduling-black/scheduling-black-list.vue'));
        });
      }
    }, {
      path: '/consulation/scheduling-level/list',
      name: 'SchedulingLevelList',
      meta: {
        title: '门诊排班级别',
        privilege: [{
          title: '查询',
          name: 'scheduling-level-list-query'
        }, {
          title: '新增',
          name: 'scheduling-level-list-add'
        }, {
          title: '编辑',
          name: 'scheduling-level-list-update'
        }, {
          title: '删除',
          name: 'scheduling-level-list-delete'
        }, {
          title: '批量删除',
          name: 'scheduling-level-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'scheduling-level-list-batch-export'
        }, {
          title: '导出全部',
          name: 'scheduling-level-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/scheduling/scheduling-level/scheduling-level-list.vue'));
        });
      }
    }, {
      path: '/consulation/scheduling-form/list',
      name: 'SchedulingFormList',
      meta: {
        title: '预约表单',
        privilege: [{
          title: '查询',
          name: 'scheduling-form-list-query'
        }, {
          title: '新增',
          name: 'scheduling-form-list-add'
        }, {
          title: '编辑',
          name: 'scheduling-form-list-update'
        }, {
          title: '删除',
          name: 'scheduling-form-list-delete'
        }, {
          title: '批量删除',
          name: 'scheduling-form-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'scheduling-form-list-batch-export'
        }, {
          title: '导出全部',
          name: 'scheduling-form-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/scheduling/scheduling-form/scheduling-form-list.vue'));
        });
      }
    }, {
      path: '/consulation/scheduling-form-date/list',
      name: 'SchedulingFormDateList',
      meta: {
        title: '预约表单日期',
        privilege: [{
          title: '查询',
          name: 'scheduling-form-date-list-query'
        }, {
          title: '新增',
          name: 'scheduling-form-date-list-add'
        }, {
          title: '编辑',
          name: 'scheduling-form-date-list-update'
        }, {
          title: '删除',
          name: 'scheduling-form-date-list-delete'
        }, {
          title: '批量删除',
          name: 'scheduling-form-date-list-batch-delete'
        }, {
          title: '批量导出',
          name: 'scheduling-form-date-list-batch-export'
        }, {
          title: '导出全部',
          name: 'scheduling-form-date-list-export-all'
        }]
      },
      component: function component () {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/business/consulation/scheduling/scheduling-form-date/scheduling-form-date-list.vue'));
        });
      }
    }]
  }]
}];
exports.consulation = consulation;
