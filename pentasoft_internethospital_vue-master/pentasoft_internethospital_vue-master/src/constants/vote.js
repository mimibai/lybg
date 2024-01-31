/**
 *投票相关枚举 
 */
export const VOTE_CHILDREN_STYLE_TYPES = {
    HORIZONTAL: {
        value: 1,
        desc: '横排'
    },
    VERTICAL: {
        value: 2,
        desc: '竖排'
    },
    TOW_IN_A_ROW: {
        value: 3,
        desc: '一行两个'
    },
    STAR_TERM: {
        value: 4,
        desc: '星形项'
    },
    LINE_WITH_TITLE: {
        value: 5,
        desc: '与标题一行'
    },
    ONE_LINE_DISPLAY: {
        value: 6,
        desc: '一行展示'
    },
    DROP_DOWN_TO_SELECT: {
        value: 7,
        desc: '下拉选择'
    }
};

/**
 * 限制投票次数类型，枚举：1、账号，2、IP，3、账号每日，4、IP每日 
 */
export const LIMIT_NUMBER_TYPES = {
    ACCOUNT: {
        value: 1,
        desc: '账号'
    },
    IP: {
        value: 2,
        desc: 'IP'
    },
    EACH_DAY_OF_ACCOUNT: {
        value: 3,
        desc: '账号每日'
    },
    EACH_DAY_OF_IP: {
        value: 4,
        desc: 'IP每日'
    },
    WECHAT_USER: {
        value: 5,
        desc: '微信用户'
    },
    EACH_DAY_OF_WECHAT_USER: {
        value: 6,
        desc: '微信用户每日'
    },
    EACH_MONTH_OF_WECHAT_USER: {
        value: 7,
        desc: '微信用户每月'
    },
    EACH_DEPARTMENT_OF_WECHAT_USER_PER_MONTH: {
        value: 8,
        desc: '微信用户每月每个科室'
    }
};

/**
 * 访问限制类型：1、登录用户，2、用户类型，3、指定角色，4、指定用户
 */
export const ACCESS_RESTRICTION_TYPES = {
    LOGIN_USER: {
        value: 1,
        desc: '登录用户'
    },
    // USER_TYPE: {
    //     value: 2,
    //     desc: '用户类型'
    // },
    USER_ROLE: {
        value: 3,
        desc: '指定角色'
    },
    USERS: {
        value: 4,
        desc: '指定用户'
    }
};

/**
 * 投票项类型：1=多选项，2=单选项，3=文本内容
 */
export const VOTE_ITEM_TYPES = {
    MULTIPLE_OPTIONS: {
        value: 1,
        desc: '多选项'
    },
    SINGLE_CHOICE: {
        value: 2,
        desc: '单选项'
    },
    TEXT_CONTENT: {
        value: 3,
        desc: '文本内容'
    },
    TIME_DATE: {
        value: 4,
        desc: '时间日期'
    },
    RADIO_CONTROL: {
        value: 5,
        desc: '单选控件'
    },
    ADDRESS_CONTROL: {
        value: 6,
        desc: '省市县'
    }
};

/**
 * 文本框类型
 */
export const TEXT_TYPES = {
    PHONE: {
        value: 1,
        desc: '手机号'
    },
    EMAIL: {
        value: 2,
        desc: '邮箱'
    },
    ID_CARD: {
        value: 3,
        desc: '身份证'
    },
    NUMBER: {
        value: 4,
        desc: '纯数字'
    },
    DECIMAL: {
        value: 5,
        desc: '带小数点的数字'
    }
};

/**
 * 跳题的类型
 */
export const SKIP_VOTE_ITEM_TYPES = {
    ACTIVE_JUMP_QUESTION: {
        value: 1,
        desc: '主跳题'
    },
    PASSIVE_JUMP_QUESTION: {
        value: 2,
        desc: '被跳题'
    }
};

export default {
    VOTE_CHILDREN_STYLE_TYPES,
    LIMIT_NUMBER_TYPES
}