/**
 * 数据范围类型
 */
export const DATA_SCOPE_TYPE = {
    DEFAULT: {
        value: 0,
        desc: "默认类型"
    },
    WX_ACCOUNT: {
        value: 1,
        desc: "微信账号"
    },
    ARTICLE: {
        value: 2,
        desc: "内容权限设置"
    }
}
/**
 * 站点类型
 */
export const SITE_TYPE_ROOT = {
    CONTENT_SITE: {
        value: 51,
        desc: "内容站点"
    },
    DEPARTMENT_SITE: {
        value: 52,
        desc: "科室站点"
    },
    DOCTOR_SITE: {
        value: 53,
        desc: "医生站点"
    },
    DISEASE_SITE: {
        value: 54,
        desc: "疾病站点"
    }
};

/**
 * 选择方式
 */
export const SELECT_TYPE = {
    SINGLE: {
        value: 1,
        desc: '单选'
    },
    MULTIPLE: {
        value: 2,
        desc: '多选'
    }
};

export default {
    SITE_TYPE_ROOT,
    DATA_SCOPE_TYPE,
    SELECT_TYPE
}