/**
 * 用户身份
 */
export const USER_IDENTITY_TYPE = {
    PATIENT_USER: {
        value: 1,
        desc: "患者用户"
    },
    DOCTOR_USER: {
        value: 2,
        desc: "医生用户"
    },
    MANAGEMENT_USER: {
        value: 3,
        desc: "管理用户"
    },
    HEALTH_CARE_EXPERT: {
        value: 4,
        desc: "医保专家"
    },
    DOMAIN_USER: {
        value: 5,
        desc: "域用户"
    }
};

export default {
    USER_IDENTITY_TYPE
}