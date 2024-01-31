export const YES_OR_NO = {
  YES: {
    value: true,
    desc: '是'
  },
  NO: {
    value: false,
    desc: '否'
  }
};

export const GENGER_TYPE = {
  MALE: {
    value: 1,
    desc: '男'
  },
  FEMALE: {
    value: 2,
    desc: '女'
  }
};

export const SETTING_TYPE = {
  SITE_PARAMETER: {
    value: 'SiteParameters',
    desc: '站点参数设置'
  },

  ARTICLE_PARAMETER: {
    value: 'ArticleParameters',
    desc: '文章参数设置'
  },
  SITE_INFO_PARAMETER: {
    value: 'SiteInfoParameters',
    desc: '网站信息参数设置'
  }
};
// 转诊申请转诊类型
export const REFERRAL_TYPE = {
  HOSPITALIAED: {
    value: 1,
    desc: '住院'
  },
  OUTPATIENT_CLINIC: {
    value: 2,
    desc: '门诊'
  }
};

// 转诊申请审核状态
export const REFERRAL_APPROVAL_STATUS_TYPE = {
  PENDING_REVIEW: {
    value: 1,
    desc: '待审核'
  },
  PASS_THROUGH: {
    value: 2,
    desc: '通过'
  },
  TURN_DOWN: {
    value: 3,
    desc: '驳回'
  }
};
export default {
  YES_OR_NO,
  GENGER_TYPE,
  SETTING_TYPE,
  REFERRAL_TYPE,
  REFERRAL_APPROVAL_STATUS_TYPE
};
