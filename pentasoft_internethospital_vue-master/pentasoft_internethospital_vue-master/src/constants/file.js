export const FILE_TYPE = {
  LOCAL: {
    value: 1,
    desc: '本地文件服务'
  },
  ALI_OSS: {
    value: 2,
    desc: '阿里OSS文件服务'
  },
  QI_NIU_OSS: {
    value: 3,
    desc: '七牛文件服务'
  }
};
export const SERVICE_TYPE = {
  BACK_USER: {
    value: 1,
    desc: '用户后台'
  },
  CODE_REVIEW: {
    value: 2,
    desc: '代码审查'
  },
  ARTICLE: {
    value: 3,
    desc: '文章'
  },
  COLUMN: {
    value: 4,
    desc: '栏目'
  },
  KEY_WORD: {
    value: 5,
    desc: '关键字回复'
  },
  MAIL: {
    value: 6,
    desc: '打击骗保'
  },
  WX_ACCOUNT: {
    value: 7,
    desc: '微信账户'
  },
  WX_KEY_WORD: {
    value: 8,
    desc: '微信关键字图文'
  },
  VOTE: {
    value: 9,
    desc: '投票'
  },
  DEPARTMENT: {
    value: 10,
    desc: '科室'
  },
  SCHECULING_PLAN: {
    value: 11,
    desc: '排班计划'
  },
  DOCTOR_APPLY: {
    value: 13,
    desc: '医生申请'
  },
  REFERRAL_APPLICATION_APPLY: {
    value: 14,
    desc: '转诊申请'
  }
};
export default {
  FILE_TYPE,
  SERVICE_TYPE
};
