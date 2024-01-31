<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

          <FormItem label="患者Id" prop="patientId">
            <Input type="number" v-model.number="form.patientId" />
          </FormItem>
          <FormItem label="手机号码" prop="mobileNumber">
            <Input v-model="form.mobileNumber" />
          </FormItem>
          <FormItem label="身份证号码" prop="iDCardNo">
            <Input v-model="form.iDCardNo" />
          </FormItem>
          <FormItem label="真实姓名" prop="realName">
            <Input v-model="form.realName" />
          </FormItem>
          <FormItem label="注册号" prop="registrationNo">
            <Input v-model="form.registrationNo" />
          </FormItem>
          <FormItem label="医保手册编码" prop="medicareHandbookCode">
            <Input v-model="form.medicareHandbookCode" />
          </FormItem>
          <FormItem label="就诊卡号" prop="treatmentCardNo">
            <Input v-model="form.treatmentCardNo" />
          </FormItem>
          <FormItem label="门诊医生Id" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
          <FormItem label="科室Id" prop="departmentId">
            <Input type="number" v-model.number="form.departmentId" />
          </FormItem>
          <FormItem label="门诊排班级别Id" prop="schedulingLevelId">
            <Input type="number" v-model.number="form.schedulingLevelId" />
          </FormItem>
          <FormItem label="门诊专业Id" prop="schedulingSpecialtyId">
            <Input type="number" v-model.number="form.schedulingSpecialtyId" />
          </FormItem>
          <FormItem label="门诊诊室Id" prop="schedulingClinicId">
            <Input type="number" v-model.number="form.schedulingClinicId" />
          </FormItem>
          <FormItem label="排班性质Id   枚举：1、计划排班，2、临时排班，3、替诊排班，4、调休排班" prop="schedulingPropertyId">
            <Input type="number" v-model.number="form.schedulingPropertyId" />
          </FormItem>
          <FormItem label="排班计划Id" prop="schedulingPlanId">
            <Input type="number" v-model.number="form.schedulingPlanId" />
          </FormItem>
          <FormItem label="每日排班Id" prop="dailySchedulingId">
            <Input type="number" v-model.number="form.dailySchedulingId" />
          </FormItem>
          <FormItem label="排班日期" prop="schedulingDate">
            <Input v-model="form.schedulingDate" />
          </FormItem>
          <FormItem label="星期" prop="dayOfWeekId">
            <Input type="number" v-model.number="form.dayOfWeekId" />
          </FormItem>
          <FormItem label="时段  枚举：1=上午，2=下午，3=夜间" prop="timeOfDayId">
            <Input type="number" v-model.number="form.timeOfDayId" />
          </FormItem>
          <FormItem label="挂号价目" prop="price">
            <Input type="number" v-model.number="form.price" />
          </FormItem>
          <FormItem label="预约号次" prop="appointOrderNo">
            <Input type="number" v-model.number="form.appointOrderNo" />
          </FormItem>
          <FormItem label="候补状态   枚举 候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期" prop="candidateStateId">
            <Input type="number" v-model.number="form.candidateStateId" />
          </FormItem>
          <FormItem label="是否发送短信" prop="isSendSM">
            <Input v-model="form.isSendSM" />
          </FormItem>
          <FormItem label="短信Id" prop="shortMessageId">
            <Input type="number" v-model.number="form.shortMessageId" />
          </FormItem>
          <FormItem label="是否发送邮件" prop="isSendEmail">
            <Input v-model="form.isSendEmail" />
          </FormItem>
          <FormItem label="邮件Id" prop="emailId">
            <Input type="number" v-model.number="form.emailId" />
          </FormItem>
          <FormItem label="是否作废" prop="isInvalid">
            <Input v-model="form.isInvalid" />
          </FormItem>
          <FormItem label="作废日期" prop="lastInvalidDate">
            <Input v-model="form.lastInvalidDate" />
          </FormItem>
          <FormItem label="作废人" prop="invaliderId">
            <Input type="number" v-model.number="form.invaliderId" />
          </FormItem>
          <FormItem label="预约作废类型   枚举：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)" prop="appointInvalidTypeID">
            <Input type="number" v-model.number="form.appointInvalidTypeID" />
          </FormItem>
          <FormItem label="是否为复诊病人的预约" prop="isReferral">
            <Input v-model="form.isReferral" />
          </FormItem>
          <FormItem label="预约途径   枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS)" prop="appointWayId">
            <Input type="number" v-model.number="form.appointWayId" />
          </FormItem>
          <FormItem label="预约号源   枚举 ：1普通预约，2绿色通道，3申请通道" prop="schedulingSourceId">
            <Input type="number" v-model.number="form.schedulingSourceId" />
          </FormItem>
          <FormItem label="备注" prop="remark">
            <Input v-model="form.remark" />
          </FormItem>
          <FormItem label="取号日期   当状态变为 已就诊时 则此字段必定有值" prop="registeredDate">
            <Input v-model="form.registeredDate" />
          </FormItem>
          <FormItem label="提交人" prop="posterId">
            <Input type="number" v-model.number="form.posterId" />
          </FormItem>
          <FormItem label="号源明细主键" prop="dailySchedulingNumberId">
            <Input type="number" v-model.number="form.dailySchedulingNumberId" />
          </FormItem>
          <FormItem label="出诊级别编码" prop="schedulingLevelCode">
            <Input v-model="form.schedulingLevelCode" />
          </FormItem>
          <FormItem label="相关疾病" prop="diseaseId">
            <Input type="number" v-model.number="form.diseaseId" />
          </FormItem>
          <FormItem label="门诊医生姓名" prop="doctorName">
            <Input v-model="form.doctorName" />
          </FormItem>
          <FormItem label="科室" prop="departmentName">
            <Input v-model="form.departmentName" />
          </FormItem>
          <FormItem label="门诊排班级别" prop="schedulingLevelName">
            <Input v-model="form.schedulingLevelName" />
          </FormItem>
          <FormItem label="门诊专业" prop="schedulingSpecialtyName">
            <Input v-model="form.schedulingSpecialtyName" />
          </FormItem>
          <FormItem label="第三方编码" prop="thirdPartyCode">
            <Input v-model="form.thirdPartyCode" />
          </FormItem>
          <FormItem label="时段" prop="timeOfDayName">
            <Input v-model="form.timeOfDayName" />
          </FormItem>
          <FormItem label="时间" prop="time">
            <Input v-model="form.time" />
          </FormItem>
          <FormItem label="门诊科室ID" prop="oPDepartmentId">
            <Input type="number" v-model.number="form.oPDepartmentId" />
          </FormItem>
          <FormItem label="门诊医生ID" prop="oPDoctorId">
            <Input type="number" v-model.number="form.oPDoctorId" />
          </FormItem>
          <FormItem label="出诊类型" prop="schedulingTypeId">
            <Input type="number" v-model.number="form.schedulingTypeId" />
          </FormItem>
          <FormItem label="取消原因   枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）" prop="schedulingAppointmentCancelTypeId">
            <Input type="number" v-model.number="form.schedulingAppointmentCancelTypeId" />
          </FormItem>
          <FormItem label="取消备注" prop="cancelRemark">
            <Input v-model="form.cancelRemark" />
          </FormItem>
          <FormItem label="每日门诊排班Id" prop="oPDailySchedulingId">
            <Input type="number" v-model.number="form.oPDailySchedulingId" />
          </FormItem>
          <FormItem label="门诊号源明细主键Id" prop="oPDailySchedulingNumberId">
            <Input type="number" v-model.number="form.oPDailySchedulingNumberId" />
          </FormItem>
          <FormItem label="取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消" prop="appointCancelTypeId">
            <Input type="number" v-model.number="form.appointCancelTypeId" />
          </FormItem>
          <FormItem label="取消时间" prop="appointCancelDateTime">
            <Input v-model="form.appointCancelDateTime" />
          </FormItem>
          <FormItem label="参保卡类别" prop="appointInsuredCardTypeId">
            <Input type="number" v-model.number="form.appointInsuredCardTypeId" />
          </FormItem>
          <FormItem label="支付方式" prop="paymentMethodTypeId">
            <Input type="number" v-model.number="form.paymentMethodTypeId" />
          </FormItem>
          <FormItem label="第三方编码" prop="thirdPartyCode1">
            <Input v-model="form.thirdPartyCode1" />
          </FormItem>
          <FormItem label="第三方预约参数" prop="thirdPartyParameters">
            <Input v-model="form.thirdPartyParameters" />
          </FormItem>
          <FormItem label="微信支付订单号" prop="payOrderStreamNo_WeiXin">
            <Input v-model="form.payOrderStreamNo_WeiXin" />
          </FormItem>
          <FormItem label="微信支付链接" prop="payQRCodeUrl_WeiXin">
            <Input v-model="form.payQRCodeUrl_WeiXin" />
          </FormItem>
          <FormItem label="微信支付二维码" prop="payQRCodePath_WeiXin">
            <Input v-model="form.payQRCodePath_WeiXin" />
          </FormItem>
          <FormItem label="微信支付过期时间" prop="payExpiredTime_WeiXin">
            <Input v-model="form.payExpiredTime_WeiXin" />
          </FormItem>
          <FormItem label="支付宝支付订单号" prop="payOrderStreamNo_Ali">
            <Input v-model="form.payOrderStreamNo_Ali" />
          </FormItem>
          <FormItem label="支付宝支付链接" prop="payQRCodeUrl_Ali">
            <Input v-model="form.payQRCodeUrl_Ali" />
          </FormItem>
          <FormItem label="支付宝支付二维码" prop="payQRCodePath_Ali">
            <Input v-model="form.payQRCodePath_Ali" />
          </FormItem>
          <FormItem label="支付宝支付过期时间" prop="payExpiredTime_Ali">
            <Input v-model="form.payExpiredTime_Ali" />
          </FormItem>
          <FormItem label="支付状态" prop="paymentStateTypeId">
            <Input type="number" v-model.number="form.paymentStateTypeId" />
          </FormItem>
          <FormItem label="调用挂号接口次数" prop="registerCount_Interface">
            <Input type="number" v-model.number="form.registerCount_Interface" />
          </FormItem>
          <FormItem label="订单ID" prop="orderId">
            <Input type="number" v-model.number="form.orderId" />
          </FormItem>
          <FormItem label="是否必须支付" prop="isMustPayment">
            <Input v-model="form.isMustPayment" />
          </FormItem>
          <FormItem label="支付过期时间" prop="payExpiredTime">
            <Input v-model="form.payExpiredTime" />
          </FormItem>
          <FormItem label="总排队位置" prop="totalPosition">
            <Input type="number" v-model.number="form.totalPosition" />
          </FormItem>
          <FormItem label="目前排队位置" prop="currentPosition">
            <Input type="number" v-model.number="form.currentPosition" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { schedulingAppointmentCandidateApi } from '@/api/scheduling-appointment-candidate';
export default {
  name: 'SchedulingAppointmentCandidateListForm',
  components: {
  },
  props: {
    // 是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true
    },
    // 更新的表单数据对象
    updateData: {
      type: Object
    }
  },
  data () {
    return {
      // 表单数据
      form: {
        // 主键Id
        schedulingAppointmentCandidateId: null,
        // 患者Id
        patientId: null,
        // 手机号码
        mobileNumber: null,
        // 身份证号码
        iDCardNo: null,
        // 真实姓名
        realName: null,
        // 注册号
        registrationNo: null,
        // 医保手册编码
        medicareHandbookCode: null,
        // 就诊卡号
        treatmentCardNo: null,
        // 门诊医生Id
        doctorId: null,
        // 科室Id
        departmentId: null,
        // 门诊排班级别Id
        schedulingLevelId: null,
        // 门诊专业Id
        schedulingSpecialtyId: null,
        // 门诊诊室Id
        schedulingClinicId: null,
        // 排班性质Id   枚举：1、计划排班，2、临时排班，3、替诊排班，4、调休排班
        schedulingPropertyId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 每日排班Id
        dailySchedulingId: null,
        // 排班日期
        schedulingDate: null,
        // 星期
        dayOfWeekId: null,
        // 时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 预约号次
        appointOrderNo: null,
        // 候补状态   枚举 候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期
        candidateStateId: null,
        // 是否发送短信
        isSendSM: null,
        // 短信Id
        shortMessageId: null,
        // 是否发送邮件
        isSendEmail: null,
        // 邮件Id
        emailId: null,
        // 是否作废
        isInvalid: null,
        // 作废日期
        lastInvalidDate: null,
        // 作废人
        invaliderId: null,
        // 预约作废类型   枚举：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)
        appointInvalidTypeID: null,
        // 是否为复诊病人的预约
        isReferral: null,
        // 预约途径   枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: null,
        // 预约号源   枚举 ：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: null,
        // 备注
        remark: null,
        // 取号日期   当状态变为 已就诊时 则此字段必定有值
        registeredDate: null,
        // 提交人
        posterId: null,
        // 号源明细主键
        dailySchedulingNumberId: null,
        // 出诊级别编码
        schedulingLevelCode: null,
        // 相关疾病
        diseaseId: null,
        // 门诊医生姓名
        doctorName: null,
        // 科室
        departmentName: null,
        // 门诊排班级别
        schedulingLevelName: null,
        // 门诊专业
        schedulingSpecialtyName: null,
        // 第三方编码
        thirdPartyCode: null,
        // 时段
        timeOfDayName: null,
        // 时间
        time: null,
        // 门诊科室ID
        oPDepartmentId: null,
        // 门诊医生ID
        oPDoctorId: null,
        // 出诊类型
        schedulingTypeId: null,
        // 取消原因   枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
        schedulingAppointmentCancelTypeId: null,
        // 取消备注
        cancelRemark: null,
        // 每日门诊排班Id
        oPDailySchedulingId: null,
        // 门诊号源明细主键Id
        oPDailySchedulingNumberId: null,
        // 取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消
        appointCancelTypeId: null,
        // 取消时间
        appointCancelDateTime: null,
        // 参保卡类别
        appointInsuredCardTypeId: null,
        // 支付方式
        paymentMethodTypeId: null,
        // 第三方编码
        thirdPartyCode1: null,
        // 第三方预约参数
        thirdPartyParameters: null,
        // 微信支付订单号
        payOrderStreamNo_WeiXin: null,
        // 微信支付链接
        payQRCodeUrl_WeiXin: null,
        // 微信支付二维码
        payQRCodePath_WeiXin: null,
        // 微信支付过期时间
        payExpiredTime_WeiXin: null,
        // 支付宝支付订单号
        payOrderStreamNo_Ali: null,
        // 支付宝支付链接
        payQRCodeUrl_Ali: null,
        // 支付宝支付二维码
        payQRCodePath_Ali: null,
        // 支付宝支付过期时间
        payExpiredTime_Ali: null,
        // 支付状态
        paymentStateTypeId: null,
        // 调用挂号接口次数
        registerCount_Interface: null,
        // 订单ID
        orderId: null,
        // 是否必须支付
        isMustPayment: null,
        // 支付过期时间
        payExpiredTime: null,
        // 总排队位置
        totalPosition: null,
        // 目前排队位置
        currentPosition: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        schedulingAppointmentCandidateId: [{ type: 'number', required: true, message: '请输入主键Id', trigger: 'blur' }],
        // 患者Id
        patientId: [{ type: 'number', required: true, message: '请输入患者Id', trigger: 'blur' }],
        // 手机号码
        mobileNumber: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        // 身份证号码
        iDCardNo: [{ required: true, message: '请输入身份证号码', trigger: 'blur' }],
        // 真实姓名
        realName: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
        // 注册号
        registrationNo: [{ required: true, message: '请输入注册号', trigger: 'blur' }],
        // 医保手册编码
        medicareHandbookCode: [{ required: true, message: '请输入医保手册编码', trigger: 'blur' }],
        // 就诊卡号
        treatmentCardNo: [{ required: true, message: '请输入就诊卡号', trigger: 'blur' }],
        // 门诊医生Id
        doctorId: [{ type: 'number', required: true, message: '请输入门诊医生Id', trigger: 'blur' }],
        // 科室Id
        departmentId: [{ type: 'number', required: true, message: '请输入科室Id', trigger: 'blur' }],
        // 门诊排班级别Id
        schedulingLevelId: [{ type: 'number', required: true, message: '请输入门诊排班级别Id', trigger: 'blur' }],
        // 门诊专业Id
        schedulingSpecialtyId: [{ type: 'number', required: true, message: '请输入门诊专业Id', trigger: 'blur' }],
        // 门诊诊室Id
        schedulingClinicId: [{ type: 'number', required: true, message: '请输入门诊诊室Id', trigger: 'blur' }],
        // 排班性质Id   枚举：1、计划排班，2、临时排班，3、替诊排班，4、调休排班
        schedulingPropertyId: [{ type: 'number', required: true, message: '请输入排班性质Id   枚举：1、计划排班，2、临时排班，3、替诊排班，4、调休排班', trigger: 'blur' }],
        // 排班计划Id
        schedulingPlanId: [{ type: 'number', required: true, message: '请输入排班计划Id', trigger: 'blur' }],
        // 每日排班Id
        dailySchedulingId: [{ type: 'number', required: true, message: '请输入每日排班Id', trigger: 'blur' }],
        // 排班日期
        schedulingDate: [{ required: true, message: '请输入排班日期', trigger: 'blur' }],
        // 星期
        dayOfWeekId: [{ type: 'number', required: true, message: '请输入星期', trigger: 'blur' }],
        // 时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: [{ type: 'number', required: true, message: '请输入时段  枚举：1=上午，2=下午，3=夜间', trigger: 'blur' }],
        // 挂号价目
        price: [{ type: 'number', required: true, message: '请输入挂号价目', trigger: 'blur' }],
        // 预约号次
        appointOrderNo: [{ type: 'number', required: true, message: '请输入预约号次', trigger: 'blur' }],
        // 候补状态   枚举 候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期
        candidateStateId: [{ type: 'number', required: true, message: '请输入候补状态   枚举 候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期', trigger: 'blur' }],
        // 是否发送短信
        isSendSM: [{ required: true, message: '请输入是否发送短信', trigger: 'blur' }],
        // 短信Id
        shortMessageId: [{ type: 'number', required: true, message: '请输入短信Id', trigger: 'blur' }],
        // 是否发送邮件
        isSendEmail: [{ required: true, message: '请输入是否发送邮件', trigger: 'blur' }],
        // 邮件Id
        emailId: [{ type: 'number', required: true, message: '请输入邮件Id', trigger: 'blur' }],
        // 是否作废
        isInvalid: [{ required: true, message: '请输入是否作废', trigger: 'blur' }],
        // 作废日期
        lastInvalidDate: [{ required: true, message: '请输入作废日期', trigger: 'blur' }],
        // 作废人
        invaliderId: [{ type: 'number', required: true, message: '请输入作废人', trigger: 'blur' }],
        // 预约作废类型   枚举：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)
        appointInvalidTypeID: [{ type: 'number', required: true, message: '请输入预约作废类型   枚举：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)', trigger: 'blur' }],
        // 是否为复诊病人的预约
        isReferral: [{ required: true, message: '请输入是否为复诊病人的预约', trigger: 'blur' }],
        // 预约途径   枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: [{ type: 'number', required: true, message: '请输入预约途径   枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS)', trigger: 'blur' }],
        // 预约号源   枚举 ：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: [{ type: 'number', required: true, message: '请输入预约号源   枚举 ：1普通预约，2绿色通道，3申请通道', trigger: 'blur' }],
        // 备注
        remark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        // 取号日期   当状态变为 已就诊时 则此字段必定有值
        registeredDate: [{ required: true, message: '请输入取号日期   当状态变为 已就诊时 则此字段必定有值', trigger: 'blur' }],
        // 提交人
        posterId: [{ type: 'number', required: true, message: '请输入提交人', trigger: 'blur' }],
        // 号源明细主键
        dailySchedulingNumberId: [{ type: 'number', required: true, message: '请输入号源明细主键', trigger: 'blur' }],
        // 出诊级别编码
        schedulingLevelCode: [{ required: true, message: '请输入出诊级别编码', trigger: 'blur' }],
        // 相关疾病
        diseaseId: [{ type: 'number', required: true, message: '请输入相关疾病', trigger: 'blur' }],
        // 门诊医生姓名
        doctorName: [{ required: true, message: '请输入门诊医生姓名', trigger: 'blur' }],
        // 科室
        departmentName: [{ required: true, message: '请输入科室', trigger: 'blur' }],
        // 门诊排班级别
        schedulingLevelName: [{ required: true, message: '请输入门诊排班级别', trigger: 'blur' }],
        // 门诊专业
        schedulingSpecialtyName: [{ required: true, message: '请输入门诊专业', trigger: 'blur' }],
        // 第三方编码
        thirdPartyCode: [{ required: true, message: '请输入第三方编码', trigger: 'blur' }],
        // 时段
        timeOfDayName: [{ required: true, message: '请输入时段', trigger: 'blur' }],
        // 时间
        time: [{ required: true, message: '请输入时间', trigger: 'blur' }],
        // 门诊科室ID
        oPDepartmentId: [{ type: 'number', required: true, message: '请输入门诊科室ID', trigger: 'blur' }],
        // 门诊医生ID
        oPDoctorId: [{ type: 'number', required: true, message: '请输入门诊医生ID', trigger: 'blur' }],
        // 出诊类型
        schedulingTypeId: [{ type: 'number', required: true, message: '请输入出诊类型', trigger: 'blur' }],
        // 取消原因   枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
        schedulingAppointmentCancelTypeId: [{ type: 'number', required: true, message: '请输入取消原因   枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）', trigger: 'blur' }],
        // 取消备注
        cancelRemark: [{ required: true, message: '请输入取消备注', trigger: 'blur' }],
        // 每日门诊排班Id
        oPDailySchedulingId: [{ type: 'number', required: true, message: '请输入每日门诊排班Id', trigger: 'blur' }],
        // 门诊号源明细主键Id
        oPDailySchedulingNumberId: [{ type: 'number', required: true, message: '请输入门诊号源明细主键Id', trigger: 'blur' }],
        // 取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消
        appointCancelTypeId: [{ type: 'number', required: true, message: '请输入取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消', trigger: 'blur' }],
        // 取消时间
        appointCancelDateTime: [{ required: true, message: '请输入取消时间', trigger: 'blur' }],
        // 参保卡类别
        appointInsuredCardTypeId: [{ type: 'number', required: true, message: '请输入参保卡类别', trigger: 'blur' }],
        // 支付方式
        paymentMethodTypeId: [{ type: 'number', required: true, message: '请输入支付方式', trigger: 'blur' }],
        // 第三方编码
        thirdPartyCode1: [{ required: true, message: '请输入第三方编码', trigger: 'blur' }],
        // 第三方预约参数
        thirdPartyParameters: [{ required: true, message: '请输入第三方预约参数', trigger: 'blur' }],
        // 微信支付订单号
        payOrderStreamNo_WeiXin: [{ required: true, message: '请输入微信支付订单号', trigger: 'blur' }],
        // 微信支付链接
        payQRCodeUrl_WeiXin: [{ required: true, message: '请输入微信支付链接', trigger: 'blur' }],
        // 微信支付二维码
        payQRCodePath_WeiXin: [{ required: true, message: '请输入微信支付二维码', trigger: 'blur' }],
        // 微信支付过期时间
        payExpiredTime_WeiXin: [{ required: true, message: '请输入微信支付过期时间', trigger: 'blur' }],
        // 支付宝支付订单号
        payOrderStreamNo_Ali: [{ required: true, message: '请输入支付宝支付订单号', trigger: 'blur' }],
        // 支付宝支付链接
        payQRCodeUrl_Ali: [{ required: true, message: '请输入支付宝支付链接', trigger: 'blur' }],
        // 支付宝支付二维码
        payQRCodePath_Ali: [{ required: true, message: '请输入支付宝支付二维码', trigger: 'blur' }],
        // 支付宝支付过期时间
        payExpiredTime_Ali: [{ required: true, message: '请输入支付宝支付过期时间', trigger: 'blur' }],
        // 支付状态
        paymentStateTypeId: [{ type: 'number', required: true, message: '请输入支付状态', trigger: 'blur' }],
        // 调用挂号接口次数
        registerCount_Interface: [{ type: 'number', required: true, message: '请输入调用挂号接口次数', trigger: 'blur' }],
        // 订单ID
        orderId: [{ type: 'number', required: true, message: '请输入订单ID', trigger: 'blur' }],
        // 是否必须支付
        isMustPayment: [{ required: true, message: '请输入是否必须支付', trigger: 'blur' }],
        // 支付过期时间
        payExpiredTime: [{ required: true, message: '请输入支付过期时间', trigger: 'blur' }],
        // 总排队位置
        totalPosition: [{ type: 'number', required: true, message: '请输入总排队位置', trigger: 'blur' }],
        // 目前排队位置
        currentPosition: [{ type: 'number', required: true, message: '请输入目前排队位置', trigger: 'blur' }]
      }
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'schedulingAppointmentCandidateId', newValue['schedulingAppointmentCandidateId']);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.isUpdate) {
            this.update();
          } else {
            this.add();
          }
        } else {
          this.$Message.error('参数验证错误，请仔细填写表单数据!');
        }
      });
    },
    resetForm () {
      this.form = {
        // 主键Id
        schedulingAppointmentCandidateId: null,
        // 患者Id
        patientId: null,
        // 手机号码
        mobileNumber: null,
        // 身份证号码
        iDCardNo: null,
        // 真实姓名
        realName: null,
        // 注册号
        registrationNo: null,
        // 医保手册编码
        medicareHandbookCode: null,
        // 就诊卡号
        treatmentCardNo: null,
        // 门诊医生Id
        doctorId: null,
        // 科室Id
        departmentId: null,
        // 门诊排班级别Id
        schedulingLevelId: null,
        // 门诊专业Id
        schedulingSpecialtyId: null,
        // 门诊诊室Id
        schedulingClinicId: null,
        // 排班性质Id   枚举：1、计划排班，2、临时排班，3、替诊排班，4、调休排班
        schedulingPropertyId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 每日排班Id
        dailySchedulingId: null,
        // 排班日期
        schedulingDate: null,
        // 星期
        dayOfWeekId: null,
        // 时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 预约号次
        appointOrderNo: null,
        // 候补状态   枚举 候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期
        candidateStateId: null,
        // 是否发送短信
        isSendSM: null,
        // 短信Id
        shortMessageId: null,
        // 是否发送邮件
        isSendEmail: null,
        // 邮件Id
        emailId: null,
        // 是否作废
        isInvalid: null,
        // 作废日期
        lastInvalidDate: null,
        // 作废人
        invaliderId: null,
        // 预约作废类型   枚举：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)
        appointInvalidTypeID: null,
        // 是否为复诊病人的预约
        isReferral: null,
        // 预约途径   枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: null,
        // 预约号源   枚举 ：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: null,
        // 备注
        remark: null,
        // 取号日期   当状态变为 已就诊时 则此字段必定有值
        registeredDate: null,
        // 提交人
        posterId: null,
        // 号源明细主键
        dailySchedulingNumberId: null,
        // 出诊级别编码
        schedulingLevelCode: null,
        // 相关疾病
        diseaseId: null,
        // 门诊医生姓名
        doctorName: null,
        // 科室
        departmentName: null,
        // 门诊排班级别
        schedulingLevelName: null,
        // 门诊专业
        schedulingSpecialtyName: null,
        // 第三方编码
        thirdPartyCode: null,
        // 时段
        timeOfDayName: null,
        // 时间
        time: null,
        // 门诊科室ID
        oPDepartmentId: null,
        // 门诊医生ID
        oPDoctorId: null,
        // 出诊类型
        schedulingTypeId: null,
        // 取消原因   枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
        schedulingAppointmentCancelTypeId: null,
        // 取消备注
        cancelRemark: null,
        // 每日门诊排班Id
        oPDailySchedulingId: null,
        // 门诊号源明细主键Id
        oPDailySchedulingNumberId: null,
        // 取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消
        appointCancelTypeId: null,
        // 取消时间
        appointCancelDateTime: null,
        // 参保卡类别
        appointInsuredCardTypeId: null,
        // 支付方式
        paymentMethodTypeId: null,
        // 第三方编码
        thirdPartyCode1: null,
        // 第三方预约参数
        thirdPartyParameters: null,
        // 微信支付订单号
        payOrderStreamNo_WeiXin: null,
        // 微信支付链接
        payQRCodeUrl_WeiXin: null,
        // 微信支付二维码
        payQRCodePath_WeiXin: null,
        // 微信支付过期时间
        payExpiredTime_WeiXin: null,
        // 支付宝支付订单号
        payOrderStreamNo_Ali: null,
        // 支付宝支付链接
        payQRCodeUrl_Ali: null,
        // 支付宝支付二维码
        payQRCodePath_Ali: null,
        // 支付宝支付过期时间
        payExpiredTime_Ali: null,
        // 支付状态
        paymentStateTypeId: null,
        // 调用挂号接口次数
        registerCount_Interface: null,
        // 订单ID
        orderId: null,
        // 是否必须支付
        isMustPayment: null,
        // 支付过期时间
        payExpiredTime: null,
        // 总排队位置
        totalPosition: null,
        // 目前排队位置
        currentPosition: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await schedulingAppointmentCandidateApi.addSchedulingAppointmentCandidate(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await schedulingAppointmentCandidateApi.updateSchedulingAppointmentCandidate(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
