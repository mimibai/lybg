<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">

        </Col>
        <Col span="12">
          <FormItem label="患者Id" prop="patientId">
            <Input type="number" v-model.number="form.patientId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="手机号码" prop="mobileNumber">
            <Input v-model="form.mobileNumber" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="身份证号码" prop="idCardNo">
            <Input v-model="form.idCardNo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="真实姓名" prop="realName">
            <Input v-model="form.realName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="注册号" prop="registrationNo">
            <Input v-model="form.registrationNo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="医保手册编码" prop="medicareHandbookCode">
            <Input v-model="form.medicareHandbookCode" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="就诊卡号" prop="treatmentCardNo">
            <Input v-model="form.treatmentCardNo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊医生Id" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="科室Id" prop="departmentId">
            <Input type="number" v-model.number="form.departmentId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊排班级别Id" prop="schedulingLevelId">
            <Input type="number" v-model.number="form.schedulingLevelId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊专业Id" prop="schedulingSpecialtyId">
            <Input type="number" v-model.number="form.schedulingSpecialtyId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊诊室Id" prop="schedulingClinicId">
            <Input type="number" v-model.number="form.schedulingClinicId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="排班性质Id" prop="schedulingPropertyId">
            <Input type="number" v-model.number="form.schedulingPropertyId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="排班计划Id" prop="schedulingPlanId">
            <Input type="number" v-model.number="form.schedulingPlanId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="每日排班Id" prop="dailySchedulingId">
            <Input type="number" v-model.number="form.dailySchedulingId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="排班日期" prop="schedulingDate">
            <DatePicker
              type="date"
              format="yyyy-MM-dd"
              placeholder="请选择排班日期"
              :value="form.schedulingDate"
              @on-change="form.schedulingLevelDataList=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="星期" prop="dayOfWeekId">
            <Input type="number" v-model.number="form.dayOfWeekId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="时段" prop="timeOfDayId">
            <Input type="number" v-model.number="form.timeOfDayId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="挂号价目" prop="price">
            <Input type="number" v-model.number="form.price" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预约号次" prop="appointOrderNo">
            <Input type="number" v-model.number="form.appointOrderNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约状态" prop="appointStateId">
            <Input type="number" v-model.number="form.appointStateId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否发送短信" prop="isSendSM">
            <i-switch v-model="form.isSendSM" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="短信Id" prop="shortMessageId">
            <Input type="number" v-model.number="form.shortMessageId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否发送邮件" prop="isSendEmail">
            <i-switch v-model="form.isSendEmail" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="邮件Id" prop="emailId">
            <Input type="number" v-model.number="form.emailId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否作废" prop="isInvalid">
            <i-switch v-model="form.isInvalid" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="作废日期" prop="lastInvalidDate">
            <DatePicker
              type="datetime"
              placeholder="请选择作废日期"
              :value="form.lastInvalidDate"
              @on-change="form.lastInvalidDate=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="作废人" prop="invaliderId">
            <Input type="number" v-model.number="form.invaliderId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约作废类型" prop="appointInvalidTypeID">
            <Input type="number" v-model.number="form.appointInvalidTypeID" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否为复诊病人的预约" prop="isReferral">
            <i-switch v-model="form.isReferral" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约途径" prop="appointWayId">
            <Input type="number" v-model.number="form.appointWayId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预约号源" prop="schedulingSourceId">
            <Input type="number" v-model.number="form.schedulingSourceId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="备注" prop="remark">
            <Input v-model="form.remark" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="取号日期" prop="registeredDate">
            <DatePicker
              type="date"
              format="yyyy-MM-dd"
              placeholder="请选择取号日期"
              :value="form.registeredDate"
               @on-change="form.registeredDate=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="提交人" prop="posterId">
            <Input type="number" v-model.number="form.posterId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="号源明细主键" prop="dailySchedulingNumberId">
            <Input
              type="number"
              v-model.number="form.dailySchedulingNumberId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="出诊级别编码" prop="schedulingLevelCode">
            <Input v-model="form.schedulingLevelCode" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="相关疾病" prop="diseaseId">
            <Input type="number" v-model.number="form.diseaseId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊医生姓名" prop="doctorName">
            <Input v-model="form.doctorName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="科室" prop="departmentName">
            <Input v-model="form.departmentName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊排班级别" prop="schedulingLevelName">
            <Input v-model="form.schedulingLevelName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊专业" prop="schedulingSpecialtyName">
            <Input v-model="form.schedulingSpecialtyName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="第三方编码" prop="thirdPartyCode">
            <Input v-model="form.thirdPartyCode" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="时段" prop="timeOfDayName">
            <Input v-model="form.timeOfDayName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="时间" prop="time">
            <Input v-model="form.time" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊科室ID" prop="oPDepartmentId">
            <Input type="number" v-model.number="form.oPDepartmentId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊医生ID" prop="oPDoctorId">
            <Input type="number" v-model.number="form.oPDoctorId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="出诊类型" prop="schedulingTypeId">
            <Input type="number" v-model.number="form.schedulingTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="取消原因" prop="schedulingAppointmentCancelTypeId">
            <Input
              type="number"
              v-model.number="form.schedulingAppointmentCancelTypeId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="取消备注" prop="cancelRemark">
            <Input v-model="form.cancelRemark" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="每日门诊排班Id" prop="clinicSchedulingId">
            <Input type="number" v-model.number="form.clinicSchedulingId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊号源明细主键Id" prop="clinicSchedulingNumberId">
            <Input
              type="number"
              v-model.number="form.clinicSchedulingNumberId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="取消方式" prop="appointCancelTypeId">
            <Input type="number" v-model.number="form.appointCancelTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="取消时间" prop="appointCancelDateTime">
            <DatePicker
              type="datetime"
              placeholder="请选择取消时间"
              :value="form.appointCancelDateTime"
              @on-change="form.appointCancelDateTime=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="参保卡类别" prop="appointInsuredCardTypeId">
            <Input
              type="number"
              v-model.number="form.appointInsuredCardTypeId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付方式" prop="paymentMethodTypeId">
            <Input type="number" v-model.number="form.paymentMethodTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="第三方编码" prop="thirdPartyCode1">
            <Input v-model="form.thirdPartyCode1" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="第三方预约参数" prop="thirdPartyParameters">
            <Input v-model="form.thirdPartyParameters" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信支付订单号" prop="payOrderStreamNo_WeiXin">
            <Input v-model="form.payOrderStreamNo_WeiXin" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="微信支付链接" prop="payQRCodeUrl_WeiXin">
            <Input v-model="form.payQRCodeUrl_WeiXin" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信支付二维码" prop="payQRCodePath_WeiXin">
            <Input v-model="form.payQRCodePath_WeiXin" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="微信支付过期时间" prop="payExpiredTime_WeiXin">
            <DatePicker
              type="datetime"
              placeholder="请选择微信支付过期时间"
              :value="form.payExpiredTime_WeiXin"
              @on-change="form.payExpiredTime_WeiXin=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付宝支付订单号" prop="payOrderStreamNo_Ali">
            <Input v-model="form.payOrderStreamNo_Ali" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付宝支付链接" prop="payQRCodeUrl_Ali">
            <Input v-model="form.payQRCodeUrl_Ali" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付宝支付二维码" prop="payQRCodePath_Ali">
            <Input v-model="form.payQRCodePath_Ali" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付宝支付过期时间" prop="payExpiredTime_Ali">
            <DatePicker
              type="datetime"
              format="yyyy-MM-dd"
              placeholder="请选择支付宝支付过期时间"
              :value="form.payExpiredTime_Ali"
              @on-change="form.payExpiredTime_Ali=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付状态" prop="paymentStateTypeId">
            <Input type="number" v-model.number="form.paymentStateTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="调用挂号接口次数" prop="registerCount_Interface">
            <Input
              type="number"
              v-model.number="form.registerCount_Interface"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="订单ID" prop="orderId">
            <Input type="number" v-model.number="form.orderId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否必须支付" prop="isMustPayment">
            <i-switch v-model="form.isMustPayment" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付过期时间" prop="payExpiredTime">
            <DatePicker
              type="datetime"
              placeholder="请选择支付过期时间"
              :value="form.payExpiredTime"
              @on-change="form.payExpiredTime=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="复诊表主键" prop="clinicPrescriptId">
            <Input type="number" v-model.number="form.clinicPrescriptId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否候补预约" prop="isCandidate">
            <i-switch v-model="form.isCandidate" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预约类型" prop="schedulingAppointmentTypeId">
            <Input
              type="number"
              v-model.number="form.schedulingAppointmentTypeId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约操作人" prop="appointmentPosterId">
            <Input type="number" v-model.number="form.appointmentPosterId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者类型" prop="patientTypeId">
            <Input type="number" v-model.number="form.patientTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="证件类型" prop="documentTypeId">
            <Input type="number" v-model.number="form.documentTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="其他证件号" prop="otherCardNo">
            <Input v-model="form.otherCardNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="在线问诊的主键" prop="clinicRecordId">
            <Input type="number" v-model.number="form.clinicRecordId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="问诊类型" prop="clinicChatTypeId">
            <Input type="number" v-model.number="form.clinicChatTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="问诊功能类型" prop="clinicFunctionalTypeId">
            <Input type="number" v-model.number="form.clinicFunctionalTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者评价结果" prop="voteResultId">
            <Input type="number" v-model.number="form.voteResultId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者评价结果得分" prop="voteVoteResultScore">
            <Input type="number" v-model.number="form.voteVoteResultScore" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="自定义表单结果" prop="generalFormResultId">
            <Input type="number" v-model.number="form.generalFormResultId" />
          </FormItem>
        </Col>
        <Col span="12"> </Col>
      </Row>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { clinicAppointmentApi } from '@/api/clinic/clinic-appointment';
import { utils } from '@/lib/util';
export default {
  name: 'ClinicAppointmentListForm',
  components: {},
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
        clinicAppointmentId: null,
        // 患者Id
        patientId: null,
        // 手机号码
        mobileNumber: null,
        // 身份证号码
        idCardNo: null,
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
        // 排班性质Id
        schedulingPropertyId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 每日排班Id
        dailySchedulingId: null,
        // 排班日期
        schedulingDate: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 预约号次
        appointOrderNo: null,
        // 预约状态
        appointStateId: null,
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
        // 预约作废类型
        appointInvalidTypeID: null,
        // 是否为复诊病人的预约
        isReferral: null,
        // 预约途径
        appointWayId: null,
        // 预约号源
        schedulingSourceId: null,
        // 备注
        remark: null,
        // 取号日期
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
        // 取消原因
        schedulingAppointmentCancelTypeId: null,
        // 取消备注
        cancelRemark: null,
        // 每日门诊排班Id
        clinicSchedulingId: null,
        // 门诊号源明细主键Id
        clinicSchedulingNumberId: null,
        // 取消方式
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
        // 复诊表主键
        clinicPrescriptId: null,
        // 是否候补预约
        isCandidate: null,
        // 预约类型
        schedulingAppointmentTypeId: null,
        // 预约操作人
        appointmentPosterId: null,
        // 患者类型
        patientTypeId: null,
        // 证件类型
        documentTypeId: null,
        // 其他证件号
        otherCardNo: null,
        // 在线问诊的主键
        clinicRecordId: null,
        // 问诊类型
        clinicChatTypeId: null,
        // 问诊功能类型
        clinicFunctionalTypeId: null,
        // 患者评价结果
        voteResultId: null,
        // 患者评价结果得分
        voteVoteResultScore: null,
        // 自定义表单结果
        generalFormResultId: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        clinicAppointmentId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键Id',
            trigger: 'blur'
          }
        ],
        // 患者Id
        patientId: [
          {
            type: 'number',
            required: true,
            message: '请输入患者Id',
            trigger: 'blur'
          }
        ],
        // 真实姓名
        realName: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' }
        ],
        // 门诊排班级别Id
        schedulingLevelId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊排班级别Id',
            trigger: 'blur'
          }
        ],
        // 每日排班Id
        dailySchedulingId: [
          {
            type: 'number',
            required: true,
            message: '请输入每日排班Id',
            trigger: 'blur'
          }
        ],
        // 排班日期
        schedulingDate: [
          {
            required: true,
            message: '请输入排班日期',
            trigger: 'blur',
            pattern: /.+/
          }
        ],
        // 星期
        dayOfWeekId: [
          {
            type: 'number',
            required: true,
            message: '请输入星期',
            trigger: 'blur'
          }
        ],
        // 时段
        timeOfDayId: [
          {
            type: 'number',
            required: true,
            message: '请输入时段',
            trigger: 'blur'
          }
        ],
        // 挂号价目
        price: [
          {
            type: 'number',
            required: true,
            message: '请输入挂号价目',
            trigger: 'blur'
          }
        ],
        // 预约号次
        appointOrderNo: [
          {
            type: 'number',
            required: true,
            message: '请输入预约号次',
            trigger: 'blur'
          }
        ],
        // 预约状态
        appointStateId: [
          {
            type: 'number',
            required: true,
            message: '请输入预约状态',
            trigger: 'blur'
          }
        ]
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
        this.$set(
          this.form,
          'clinicAppointmentId',
          newValue['clinicAppointmentId']
        );
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
      this.$refs['form'].validate((valid) => {
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
        clinicAppointmentId: null,
        // 患者Id
        patientId: null,
        // 手机号码
        mobileNumber: null,
        // 身份证号码
        idCardNo: null,
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
        // 排班性质Id
        schedulingPropertyId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 每日排班Id
        dailySchedulingId: null,
        // 排班日期
        schedulingDate: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 预约号次
        appointOrderNo: null,
        // 预约状态
        appointStateId: null,
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
        // 预约作废类型
        appointInvalidTypeID: null,
        // 是否为复诊病人的预约
        isReferral: null,
        // 预约途径
        appointWayId: null,
        // 预约号源
        schedulingSourceId: null,
        // 备注
        remark: null,
        // 取号日期
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
        // 取消原因
        schedulingAppointmentCancelTypeId: null,
        // 取消备注
        cancelRemark: null,
        // 每日门诊排班Id
        clinicSchedulingId: null,
        // 门诊号源明细主键Id
        clinicSchedulingNumberId: null,
        // 取消方式
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
        // 复诊表主键
        clinicPrescriptId: null,
        // 是否候补预约
        isCandidate: null,
        // 预约类型
        schedulingAppointmentTypeId: null,
        // 预约操作人
        appointmentPosterId: null,
        // 患者类型
        patientTypeId: null,
        // 证件类型
        documentTypeId: null,
        // 其他证件号
        otherCardNo: null,
        // 在线问诊的主键
        clinicRecordId: null,
        // 问诊类型
        clinicChatTypeId: null,
        // 问诊功能类型
        clinicFunctionalTypeId: null,
        // 患者评价结果
        voteResultId: null,
        // 患者评价结果得分
        voteVoteResultScore: null,
        // 自定义表单结果
        generalFormResultId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await clinicAppointmentApi.addClinicAppointment(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await clinicAppointmentApi.updateClinicAppointment(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
