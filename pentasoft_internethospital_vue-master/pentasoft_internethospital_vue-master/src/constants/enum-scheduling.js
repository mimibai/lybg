/**
 * 预约号源：1普通预约，2绿色通道，3=申请通道
 */
export const SCHEDULING_SOURCE = {
    GENERAL_APPOINTMENT: {
        value: 1,
        desc: '普通预约'
    },
    GREEN_CHANNEL: {
        value: 2,
        desc: '绿色通道'
    },
    APPLICATION_CHANNEL: {
        value: 3,
        desc: '申请通道'
    },
    INTERFACE_BOOKING: {
        value: 4,
        desc: '接口预约'
    },
    ACCURATE_APPOINTMENT: {
        value: 5,
        desc: '精准预约'
    },
    HOSPITAL_RETURN_VISIT: {
        value: 6,
        desc: '医院复诊'
    },
    HOSPITAL_CONSULTATION: {
        value: 7,
        desc: '医院问诊'
    }
};

/**
 * 星期
 */
export const DAY_OF_WEEK = {
    MONDAY: { value: 1, desc: "星期一" },
    TUESDAY: { value: 2, desc: "星期二" },
    WEDNESDAY: { value: 3, desc: "星期三" },
    THURSDAY: { value: 4, desc: "星期四" },
    FRIDAY: { value: 5, desc: "星期五" },
    SATURDAY: { value: 6, desc: "星期六" },
    SUNDAY: { value: 7, desc: "星期日" }
}
/**
 * 时段
 */
export const TIME_OF_DAY = {
    AM: {
        value: 1,
        desc: "上午"
    },
    /**
     * 下午
     */
    PM: { value: 2, desc: "下午" },
    /**
     * 夜晚
     */
    NIGHT: { value: 3, desc: "夜晚" },
    /**
     * 全天
     */
    ALL_DAY: { value: 4, desc: "全天" },
    /**
     * 中午
     */
    NOON: { value: 5, desc: "中午" },
    /**
     * 上夜
     */
    FIRST_HALF_OF_THE_NIGHT: { value: 6, desc: "上夜" },
    /**
     * 下夜
     */
    THE_SECOND_HALF_OF_THE_NIGHT: { value: 7, desc: "下夜" }
};
/**
 * 预约状态
 */
export const APPOINT_STATE = {
    NO_VISIT: { value: 1, desc: "未就诊" },
    VISITED: { value: 2, desc: "已就诊" },
    CANCEL: { value: 3, desc: "取消" },
    CLOSE: { value: 4, desc: "停诊" },
    BREACH_OF_CONTRACT: { value: 5, desc: "违约" },
    ERROR: { value: 6, desc: "错误" },
    LOCKED_NUMBER: { value: 7, desc: "已锁号" },
    BE_AN_ALTERNATE: { value: 8, desc: "候补" }
};
/**
 * 预约途径
 */
export const APPOINT_WAY = {
    /**
     * 网站
     */
    WEBSITE: { value: 1, desc: "网站" },
    /**
     * 手机网页
     */
    H5: { value: 2, desc: "手机网页" },
    /**
     * 微信
     */
    WECHAT: { value: 3, desc: "微信" },
    /**
     * 手机客户端
     */
    MOBILE_CLIENT: { value: 4, desc: "手机客户端" },
    /**
     * 支付宝生活号
     */
    ALIPAY_LIFE_ACCOUNT: { value: 5, desc: "支付宝生活号" },
    /**
     * 门诊
     */
    OUTPATIENT: { value: 6, desc: "门诊" },
    /**
     * 住院
     */
    BE_HOSPITALIZED: { value: 7, desc: "住院" },
    /**
     * 微信小程序
     */
    WE_CHAT_MINI_PROGRAM: { value: 8, desc: "微信小程序" },
    /**
     * 接口同步
     */
    INTERFACE_SYNCHRONIZATION: { value: 9, desc: "接口同步" }
};
/**
 * 预约状态
 */
 export const APPOINT_CANCEL_TYPE = {
    PATIENT_CANCELLATION: { value: 1, desc: "患者取消" },
    MANUALLY_CANCEL: { value: 2, desc: "手动取消" },
    AUTOMATIC_CANCELLATION: { value: 3, desc: "自动取消" },
    SPECIAL_USER_CANCEL: { value: 4, desc: "特殊用户取消" }
};

export default {
    SCHEDULING_SOURCE,
    DAY_OF_WEEK,
    TIME_OF_DAY,
    APPOINT_STATE,
    APPOINT_WAY,
    APPOINT_CANCEL_TYPE
}