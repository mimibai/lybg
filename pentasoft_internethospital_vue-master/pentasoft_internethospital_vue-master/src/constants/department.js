/**
 * 自动回复类型：默认=1,        及时自动回复 = 2,        间隔一段时间后回复 = 3,        固定时间回复 = 4,关闭 = 5,
 */
export const CONSULTATION_AUTOMATED_REPLY_TYPE = {
    DEFAULT: {
        value: 1, desc: '默认'
    },
    AUTOMATIC_RESPONSE_IN_TIME: {
        value: 2, desc: '及时自动回复'
    },
    REPLY_AFTER_A_PERIOD_OF_TIME: {
        value: 3, desc: '间隔一段时间后回复'
    },
    FIXED_TIME_RESPONSE: {
        value: 4, desc: '固定时间回复'
    },
    OFF: {
        value: 5, desc: '关闭'
    }
}

/**
 * 科室出诊读取方式 1、科室关联门诊科室 ,2、科室下医生关联门诊医生
 */
export const OP_SCHEDULING_DEPARTMENT_READ_TYPE = {
    DEPARTMENT_RELATED_OUTPATIENT_DEPARTMENT: {
        value: 1,
        desc: '科室关联门诊科室'
    }
    ,
    DOCTORS_UNDER_DEPARTMENTS_ASSOCIATED_WITH_OUTPATIENT_DOCTORS: {
        value: 2,
        desc: '科室下医生关联门诊医生'
    }
}

/**
 * 科室出诊展示方式 1、汇总展示 ,2、门诊科室展示
 */
export const OP_SCHEDULING_DEPARTMENT_SHOW_TYPE = {
    SUMMARY_DISPLAY: {
        value: 1,
        desc: '汇总展示'
    }
    ,
    OUTPATIENT_DEPARTMENT_DISPLAY: {
        value: 2,
        desc: '门诊科室展示'
    }
}

export default {
    CONSULTATION_AUTOMATED_REPLY_TYPE,
    OP_SCHEDULING_DEPARTMENT_READ_TYPE,
    OP_SCHEDULING_DEPARTMENT_SHOW_TYPE
}