/**
 * 微信应用类型
 */
export const WX_APPLICATION_TYPES = {
  WECHAT_PUBLIC_ACCOUNT: {
    value: 1,
    desc: '微信公众号'
  },
  WEB_APPLICATION: {
    value: 2,
    desc: '网站应用'
  },
  MOBILE_APPLICATION: {
    value: 3,
    desc: '移动应用'
  },
  APPLET: {
    value: 4,
    desc: '小程序'
  },
  ELECTRONIC_HEALTH_CARD: {
    value: 5,
    desc: '电子健康卡'
  },
  IM: {
    value: 6,
    desc: '即时通讯IM'
  },
  TRTC: {
    value: 7,
    desc: '实时音视频'
  }
};

/**
 * 微信账号类型
 */
export const WX_ACCOUNT_TYPES = {
  SERVICE: {
    value: 1,
    desc: '服务号'
  },
  SUBSCRIPTion: {
    value: 2,
    desc: '订阅号'
  },
  APPLETS: {
    value: 3,
    desc: '小程序'
  },
  PAYMENT: {
    value: 4,
    desc: '支付账号'
  }
};
/**
 * 微信类型
 */
export const WX_TYPES = {
  HOSPITAL: {
    value: 1,
    desc: '医院'
  },
  DEPARTMENT: {
    value: 2,
    desc: '科室'
  },
  DOCTOR: {
    value: 3,
    desc: '医生'
  },
  OTHER: {
    value: 4,
    desc: '其他'
  }
};

/**
 * 性别
 */
export const SEX = {
  MALE: {
    value: 1,
    desc: '男'
  },
  FEMALE: {
    value: 2,
    desc: '女'
  }
};

/**
 * 用户发送消息类型
 */
export const WX_USER_INPUT_TYPES = {
  TEXT: {
    value: 1,
    desc: '文本'
  },
  MENU: {
    value: 2,
    desc: '菜单'
  },
  PICTURE: {
    value: 3,
    desc: '图片'
  },
  VOICE: {
    value: 4,
    desc: '语音'
  },
  VIDEO: {
    value: 5,
    desc: '视频'
  },
  LOCATION: {
    value: 6,
    desc: '地理位置'
  },
  LINK: {
    value: 7,
    desc: '链接'
  }
};

/**
 * 发送微信模板消息状态类型
 * 1、已发送
 * 2、发送成功
 * 3、用户拒绝接受
 * 4、发送失败
 */
export const WX_TEMPLATE_MESSAGE_STATU_TYPES = {
  SENDED: {
    value: 1,
    desc: '已发送'
  },
  SEND_SUCCESS: {
    value: 2,
    desc: '发送成功'
  },
  USER_REFUSED: {
    value: 3,
    desc: '用户拒绝接受'
  },
  SEND_FAIL: {
    value: 4,
    desc: '发送失败'
  }
};

/**
 * 发送微信模板消息类型
 * 1、医生回复提醒
 * 2、随访提醒
 * 3、预约挂号成功
 * 4、预约挂号取消
 * 5、App通知消息
 * 6、就诊通知
 * 7、爽约提醒
 * 8、预约医生停诊通知
 */
export const APP_WX_MESSAGE_TEMPLATE_TYPES = {
  DOCTOR_REPLY_REMINDER: {
    value: 1,
    desc: '医生回复提醒 '
  },
  FOLLOW_UP_REMINDER: {
    value: 2,
    desc: '随访提醒'
  },
  APPOINTMENT_REGISTRATION_SUCCESS: {
    value: 3,
    desc: '预约挂号成功'
  },
  APPOINTMENT_REGISTRATION_CANCEL: {
    value: 4,
    desc: '预约挂号取消'
  },
  APP_NOTIFICATION_MESSAGE: {
    value: 5,
    desc: 'App通知消息'
  },
  NOTICE_VISIT: {
    value: 6,
    desc: '就诊通知'
  },
  RECALL_REMINDER: {
    value: 7,
    desc: '爽约提醒'
  },
  APPOINTMENT_DOCTOR_CLOSING_NOTICE: {
    value: 8,
    desc: '预约医生停诊通知'
  }
};

export const WX_MENU_TYPES = {
  CLICK: {
    value: 'click',
    desc: '点击'
  },
  VIEW: {
    value: 'view',
    desc: '跳转URL'
  },
  MINI_PROGRAM: {
    value: 'miniprogram',
    desc: '小程序'
  }
};

/**
 * 菜单执行类型：1=文本，2=图文，3=关键字，4=文章列表
 */
export const WX_MENU_EVENT_TYPES = {
  TEXT: {
    value: 1,
    desc: '文本'
  },
  GRAPHIC: {
    value: 2,
    desc: '图文'
  },
  KEY_WORD: {
    value: 3,
    desc: '关键字'
  },
  ARTICLE_LIST: {
    value: 4,
    desc: '文章列表'
  },
  VIDEO_LIST: {
    value: 5,
    desc: '视频列表'
  },
  PICTURE: {
    value: 6,
    desc: '图片'
  },
  VIDEO: {
    value: 7,
    desc: '视频'
  },
  VOICE: {
    value: 8,
    desc: '语音'
  }
};

/**
 * 微信关键字类型
 */
export const WX_KEY_WORD_TYPES = {
  SEARCH: {
    value: 1,
    desc: '搜索'
  },
  MENU: {
    value: 2,
    desc: '菜单'
  },
  FOLLOW: {
    value: 3,
    desc: '关注'
  }
};

export const WX_EVENT_SEARCH_TYPES = {
  DOCTOR: {
    value: 2,
    desc: '医生'
  },
  ARTICLE: {
    value: 3,
    desc: '文章'
  },
  VIDEO: {
    value: 5,
    desc: '视频'
  },
  CONSULTING: {
    value: 6,
    desc: '咨询'
  },
  DEPARTMENT: {
    value: 7,
    desc: '科室'
  },
  DISEASE: {
    value: 8,
    desc: '疾病'
  },
  CHARACTERISTIC_TECHNOLOGY: {
    value: 9,
    desc: '特色技术'
  },
  KEY_WORD: {
    value: 10,
    desc: '关键字'
  },
  SITE: {
    value: 12,
    desc: '站点'
  }
};

/**
 * 预约状态
 */
export const WX_DAILYSCHEDULING_StATE = {
  RRSERVATION_NOT_OPENED: {
    value: 0,
    desc: '未开启预约'
  },
  TIME_IS_NOT_OP: {
    value: 2,
    desc: '时间未到'
  },
  RRSERVATION_IS_AVAILABLE: {
    value: 4,
    desc: '可预约'
  },
  TIME_HAS_PASSED: {
    value: 6,
    desc: '时间已过'
  },
  SUSPEND: {
    value: 8,
    desc: '暂停'
  },
  VACATION: {
    value: 10,
    desc: '假期'
  },
  APPOINTMENT: {
    value: 12,
    desc: '约满'
  },
  SUSPEND_MEDICAL_SERVICE: {
    value: 14,
    desc: '停诊'
  },
  ALTERNATIVE_DIAGNOSIS: {
    value: 16,
    desc: '替诊'
  },
  BE_SUBSTITUTED: {
    value: 18,
    desc: '被替诊'
  },
  REPLACEMENT: {
    value: 20,
    desc: '换诊'
  },
  ALTERNATE: {
    value: 22,
    desc: '可候补'
  }
};
/**
 * 日志操作类型
 */
export const WX_OPSCHEDULINGLOG_TYPE = {
  SCHEDULE_LIST_TABLE: {
    value: 1,
    desc: '计划表'
  },
  VISITING_LIST_TABLE: {
    value: 2,
    desc: '出诊表'
  },
  SOURCE_LIST_TABLE: {
    value: 3,
    desc: '号源表'
  },
  REST_EXCHANGE_FORM_TABLE: {
    value: 4,
    desc: '换休表'
  },
  HOLIDAY_LIST_TABLE: {
    value: 5,
    desc: '假期表'
  }
};

/**
 * 排班操作日志类型
 */
export const WX_OPSCHEDULINGOPRATE_TYPE = {
  OP_CREATE: {
    value: 1,
    desc: '新建'
  },
  OP_EDIT: {
    value: 2,
    desc: '编辑'
  },
  OP_DELETE: {
    value: 3,
    desc: '删除'
  }
};

/**
 * 时段上下午
 */
export const WX_OPTIMEOFDAY = {
  OP_MORNING: {
    value: 1,
    desc: '上午'
  },
  OP_AFTERNOON: {
    value: 2,
    desc: '下午'
  },
  OP_NIGHT: {
    value: 3,
    desc: '夜晚'
  },
  OP_ALL_DAY: {
    value: 4,
    desc: '全天'
  },
  OP_NOON: {
    value: 5,
    desc: '中午'
  },
  OP_UP_TO_NIGHT: {
    value: 6,
    desc: '上夜'
  },
  OP_DOWN_TO_NIGHT: {
    value: 7,
    desc: '下夜'
  }
};
export const WX_DAILYSCHEDULING_TYPE = {
  OP_ORDINARY: {
    value: 1,
    desc: '普遍预约'
  },
  OP_SPECIAL: {
    value: 2,
    desc: '特殊预约'
  }
};

export const OP_SCHEDULING_TYPE = {
  NORMAL_VISIT: {
    value: 1,
    desc: '正常出诊'
  },
  CLOSE_VISIT: {
    value: 2,
    desc: '停诊'
  },
  SUBSTITUTE_VISIT: {
    value: 3,
    desc: '替诊'
  }
};

export default {
  OP_SCHEDULING_TYPE,
  WX_DAILYSCHEDULING_TYPE,
  WX_OPTIMEOFDAY,
  WX_OPSCHEDULINGOPRATE_TYPE,
  WX_OPSCHEDULINGLOG_TYPE,
  WX_APPLICATION_TYPES,
  WX_ACCOUNT_TYPES,
  WX_TYPES,
  SEX,
  WX_USER_INPUT_TYPES,
  WX_TEMPLATE_MESSAGE_STATU_TYPES,
  APP_WX_MESSAGE_TEMPLATE_TYPES,
  WX_MENU_TYPES,
  WX_MENU_EVENT_TYPES,
  WX_KEY_WORD_TYPES,
  WX_EVENT_SEARCH_TYPES,
  WX_DAILYSCHEDULING_StATE
};
