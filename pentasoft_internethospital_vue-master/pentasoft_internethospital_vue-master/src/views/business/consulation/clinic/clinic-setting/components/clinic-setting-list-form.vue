<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">

        </Col>
        <Col span="12">
          <FormItem label="是否开启" prop="isOpen">
            <i-switch v-model="form.isOpen" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="问诊科室" prop="departmentId">
            <Input type="number" v-model.number="form.departmentId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="问诊医生" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <i-switch v-model="form.isDelete" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="描述" prop="description">
            <Input v-model="form.description" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否显示管理回复信息" prop="isShowMangeReplyInfo">
            <i-switch v-model="form.isShowMangeReplyInfo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="复诊开药须知" prop="prescriptAgreementId">
            <Input type="number" v-model.number="form.prescriptAgreementId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="可续方相差天数" prop="prescriptDifferDays">
            <Input type="number" v-model.number="form.prescriptDifferDays" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="诊断查询默认天数" prop="diagnoseQueryDays">
            <Input type="number" v-model.number="form.diagnoseQueryDays" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="问诊医生科室须知" prop="clinicAgreementId">
            <Input type="number" v-model.number="form.clinicAgreementId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="配送须知" prop="distributionNotice">
            <Input v-model="form.distributionNotice" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="自提须知" prop="selfNotice">
            <Input v-model="form.selfNotice" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="外配须知" prop="externalNotice">
            <Input v-model="form.externalNotice" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="接单开关" prop="isReceiving">
            <i-switch v-model="form.isReceiving" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启免打扰" prop="isNotDisturb">
            <i-switch v-model="form.isNotDisturb" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="免打扰开始时间" prop="receivingStartTime">
            <Input v-model="form.receivingStartTime" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="免打扰结束时间" prop="receivingEndTime">
            <Input v-model="form.receivingEndTime" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启线上复诊" prop="isClinicPrescriptLine">
            <i-switch v-model="form.isClinicPrescriptLine" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="问诊单日接单上限" prop="clinicLimitCount">
            <Input type="number" v-model.number="form.clinicLimitCount" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="复诊单日接单上限" prop="prescriptLimitCount">
            <Input type="number" v-model.number="form.prescriptLimitCount" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否启用在线支付" prop="isOpenPayment">
            <i-switch v-model="form.isOpenPayment" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付过期时间" prop="expiryMinutes">
            <Input type="number" v-model.number="form.expiryMinutes" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付宝支付账号" prop="payAlipayAccountId">
            <Input type="number" v-model.number="form.payAlipayAccountId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信支付账号" prop="payWeiXinAccountId">
            <Input type="number" v-model.number="form.payWeiXinAccountId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启第三方支付" prop="isThirdPartyPay">
            <i-switch v-model="form.isThirdPartyPay" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="第三方支付地址" prop="thirdPartyPayUrl">
            <Input v-model="form.thirdPartyPayUrl" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否默认" prop="isDefault">
            <i-switch v-model="form.isDefault" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启在线问诊" prop="isOpenClinic">
            <i-switch v-model="form.isOpenClinic" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊问诊医生" prop="oPDoctorId">
            <Input type="number" v-model.number="form.oPDoctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊问诊科室" prop="oPDepartmentId">
            <Input type="number" v-model.number="form.oPDepartmentId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="上午开启预约时间" prop="aMBeginTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择上午开启预约时间"
              :value="form.aMBeginTimeForDay"
              @on-change="form.aMBeginTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="上午结束预约时间" prop="aMEndTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择上午结束预约时间"
              :value="form.aMEndTimeForDay"
              @on-change="form.aMEndTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="下午开启预约时间" prop="pMBeginTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择下午开启预约时间"
               :value="form.pMBeginTimeForDay"
              @on-change="form.pMBeginTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="下午结束预约时间" prop="pMEndTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择下午结束预约时间"
              :value="form.pMEndTimeForDay"
              @on-change="form.pMEndTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="中午开启预约时间" prop="noonBeginTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择中午开启预约时间"
              :value="form.noonBeginTimeForDay"
              @on-change="form.noonBeginTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="中午结束预约时间" prop="noonEndTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择中午结束预约时间"
              :value="form.noonEndTimeForDay"
              @on-change="form.noonEndTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="上夜开启预约时间" prop="upNightBeginTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择上夜开启预约时间"
              :value="form.upNightBeginTimeForDay"
              @on-change="form.upNightBeginTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="上夜结束预约时间" prop="upNightEndTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择上夜结束预约时间"
              :value="form.upNightEndTimeForDay"
              @on-change="form.upNightEndTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="下夜开启预约时间" prop="downNightBeginTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择下夜开启预约时间"
              :value="form.downNightBeginTimeForDay"
              @on-change="form.downNightBeginTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="下夜结束预约时间" prop="downNightEndTimeForDay">
            <DatePicker
              type="datetime"
              placeholder="请选择下夜结束预约时间"
              :value="form.downNightEndTimeForDay"
              @on-change="form.downNightEndTimeForDay=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否实时获取在线问诊" prop="isOpenRealTimeClinic">
            <i-switch v-model="form.isOpenRealTimeClinic" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否实时获取线上复诊"
            prop="isOpenRealTimeClinicPrescript"
          >
            <i-switch v-model="form.isOpenRealTimeClinicPrescript" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="同一身份证待就诊条数"
            prop="sameIdCardNoSchedulingAppointNoTakeNumCount"
          >
            <Input
              type="number"
              v-model.number="form.sameIdCardNoSchedulingAppointNoTakeNumCount"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="同一天同一身份证可预约个数"
            prop="sameDayIdCardNoSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="form.sameDayIdCardNoSchedulingAppointCount"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="同一时段同一身份证可预约个数"
            prop="sameTimeIdCardNoSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="form.sameTimeIdCardNoSchedulingAppointCount"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="同一天同一身份证同一科室可预约个数"
            prop="sameDayIdCardNoDepartmentSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="
                form.sameDayIdCardNoDepartmentSchedulingAppointCount
              "
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="同一时段同一身份证同一科室可预约个数"
            prop="sameTimeIdCardNoDepartmentSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="
                form.sameTimeIdCardNoDepartmentSchedulingAppointCount
              "
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="每月取消预约次数"
            prop="inMonthForCancelAppointCount"
          >
            <Input
              type="number"
              v-model.number="form.inMonthForCancelAppointCount"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="当天取消预约截止的时间"
            prop="inCutoffTimeForCancerAppoint"
          >
            <Input v-model="form.inCutoffTimeForCancerAppoint" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启图文" prop="isOpenClinicImageText">
            <i-switch v-model="form.isOpenClinicImageText" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启语音" prop="isOpenClinicVoice">
            <i-switch v-model="form.isOpenClinicVoice" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启视频" prop="isOpenClinicVideo">
            <i-switch v-model="form.isOpenClinicVideo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="问诊默认自定义表单" prop="clinicGeneralFormId">
            <Input type="number" v-model.number="form.clinicGeneralFormId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="复诊默认自定义表单"
            prop="clinicPrescriptGeneralFormId"
          >
            <Input
              type="number"
              v-model.number="form.clinicPrescriptGeneralFormId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="限制药品类型" prop="limitDrugType">
            <Input v-model="form.limitDrugType" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="问复诊预约展示类型" prop="clinicShowType">
            <Input type="number" v-model.number="form.clinicShowType" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启审核" prop="isOpenExamine">
            <i-switch v-model="form.isOpenExamine" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="在线问诊是否开启开诊断和处方"
            prop="isOpenDiagnosePrescription"
          >
            <i-switch v-model="form.isOpenDiagnosePrescription" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启开检查" prop="isOpenInspect">
            <i-switch v-model="form.isOpenInspect" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启历史方" prop="isOpenHistoricalPrescription">
            <i-switch v-model="form.isOpenHistoricalPrescription" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启常用方" prop="isOpenCommonPrescription">
            <i-switch v-model="form.isOpenCommonPrescription" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="处方药品支付类型" prop="prescriptionDrugsPayTypeId">
            <Input
              type="number"
              v-model.number="form.prescriptionDrugsPayTypeId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="是否开启问诊类型升级"
            prop="isOpenUpGradeClinicChatType"
          >
            <i-switch v-model="form.isOpenUpGradeClinicChatType" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="超时自动取消时间" prop="timeoutAutoCancelTime">
            <Input type="number" v-model.number="form.timeoutAutoCancelTime" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="协议" prop="notice">
            <Input v-model="form.notice" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="评价问卷" prop="voteId">
            <Input type="number" v-model.number="form.voteId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="问诊功能类型" prop="clinicFunctionalTypeId">
            <Input type="number" v-model.number="form.clinicFunctionalTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启第三方审方" prop="isOpenThirdPartyExamine">
            <i-switch v-model="form.isOpenThirdPartyExamine" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启选择药房" prop="isOpenChoicePharmacy">
            <i-switch v-model="form.isOpenChoicePharmacy" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否开启上传监管平台"
            prop="isOpenUploadSupervisionPlatform"
          >
            <i-switch v-model="form.isOpenUploadSupervisionPlatform" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启自定义诊断" prop="isOpenCustomDiagos">
            <i-switch v-model="form.isOpenCustomDiagos" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否医生开方前确认表单"
            prop="isPrescriptionBeforeValidateForm"
          >
            <i-switch v-model="form.isPrescriptionBeforeValidateForm" />
          </FormItem>
        </Col>
      </Row>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { clinicSettingApi } from '@/api/clinic/clinic-setting';
export default {
  name: 'ClinicSettingListForm',
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
        clinicSettingId: null,
        // 是否开启
        isOpen: null,
        // 问诊科室
        departmentId: null,
        // 问诊医生
        doctorId: null,
        // 是否删除
        isDelete: null,
        // 名称
        name: null,
        // 描述
        description: null,
        // 是否显示管理回复信息
        isShowMangeReplyInfo: null,
        // 复诊开药须知
        prescriptAgreementId: null,
        // 可续方相差天数
        prescriptDifferDays: null,
        // 诊断查询默认天数
        diagnoseQueryDays: null,
        // 问诊医生科室须知
        clinicAgreementId: null,
        // 配送须知
        distributionNotice: null,
        // 自提须知
        selfNotice: null,
        // 外配须知
        externalNotice: null,
        // 接单开关
        isReceiving: null,
        // 是否开启免打扰
        isNotDisturb: null,
        // 免打扰开始时间
        receivingStartTime: null,
        // 免打扰结束时间
        receivingEndTime: null,
        // 是否开启线上复诊
        isClinicPrescriptLine: null,
        // 问诊单日接单上限
        clinicLimitCount: null,
        // 复诊单日接单上限
        prescriptLimitCount: null,
        // 是否启用在线支付
        isOpenPayment: null,
        // 支付过期时间
        expiryMinutes: null,
        // 支付宝支付账号
        payAlipayAccountId: null,
        // 微信支付账号
        payWeiXinAccountId: null,
        // 是否开启第三方支付
        isThirdPartyPay: null,
        // 第三方支付地址
        thirdPartyPayUrl: null,
        // 是否默认
        isDefault: null,
        // 是否开启在线问诊
        isOpenClinic: null,
        // 门诊问诊医生
        oPDoctorId: null,
        // 门诊问诊科室
        oPDepartmentId: null,
        // 上午开启预约时间
        aMBeginTimeForDay: null,
        // 上午结束预约时间
        aMEndTimeForDay: null,
        // 下午开启预约时间
        pMBeginTimeForDay: null,
        // 下午结束预约时间
        pMEndTimeForDay: null,
        // 中午开启预约时间
        noonBeginTimeForDay: null,
        // 中午结束预约时间
        noonEndTimeForDay: null,
        // 上夜开启预约时间
        upNightBeginTimeForDay: null,
        // 上夜结束预约时间
        upNightEndTimeForDay: null,
        // 下夜开启预约时间
        downNightBeginTimeForDay: null,
        // 下夜结束预约时间
        downNightEndTimeForDay: null,
        // 是否实时获取在线问诊
        isOpenRealTimeClinic: null,
        // 是否实时获取线上复诊
        isOpenRealTimeClinicPrescript: null,
        // 同一身份证待就诊条数
        sameIdCardNoSchedulingAppointNoTakeNumCount: null,
        // 同一天同一身份证可预约个数
        sameDayIdCardNoSchedulingAppointCount: null,
        // 同一时段同一身份证可预约个数
        sameTimeIdCardNoSchedulingAppointCount: null,
        // 同一天同一身份证同一科室可预约个数
        sameDayIdCardNoDepartmentSchedulingAppointCount: null,
        // 同一时段同一身份证同一科室可预约个数
        sameTimeIdCardNoDepartmentSchedulingAppointCount: null,
        // 每月取消预约次数
        inMonthForCancelAppointCount: null,
        // 当天取消预约截止的时间
        inCutoffTimeForCancerAppoint: null,
        // 是否开启图文
        isOpenClinicImageText: null,
        // 是否开启语音
        isOpenClinicVoice: null,
        // 是否开启视频
        isOpenClinicVideo: null,
        // 问诊默认自定义表单
        clinicGeneralFormId: null,
        // 复诊默认自定义表单
        clinicPrescriptGeneralFormId: null,
        // 限制药品类型
        limitDrugType: null,
        // 问复诊预约展示类型
        clinicShowType: null,
        // 是否开启审核
        isOpenExamine: null,
        // 在线问诊是否开启开诊断和处方
        isOpenDiagnosePrescription: null,
        // 是否开启开检查
        isOpenInspect: null,
        // 是否开启历史方
        isOpenHistoricalPrescription: null,
        // 是否开启常用方
        isOpenCommonPrescription: null,
        // 处方药品支付类型
        prescriptionDrugsPayTypeId: null,
        // 是否开启问诊类型升级
        isOpenUpGradeClinicChatType: null,
        // 超时自动取消时间
        timeoutAutoCancelTime: null,
        // 协议
        notice: null,
        // 评价问卷
        voteId: null,
        // 问诊功能类型
        clinicFunctionalTypeId: null,
        // 是否开启第三方审方
        isOpenThirdPartyExamine: null,
        // 是否开启选择药房
        isOpenChoicePharmacy: null,
        // 是否开启上传监管平台
        isOpenUploadSupervisionPlatform: null,
        // 是否开启自定义诊断
        isOpenCustomDiagos: null,
        // 是否医生开方前确认表单
        isPrescriptionBeforeValidateForm: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        clinicSettingId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键Id',
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
        this.$set(this.form, 'clinicSettingId', newValue['clinicSettingId']);
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
        clinicSettingId: null,
        // 是否开启
        isOpen: null,
        // 问诊科室
        departmentId: null,
        // 问诊医生
        doctorId: null,
        // 是否删除
        isDelete: null,
        // 名称
        name: null,
        // 描述
        description: null,
        // 是否显示管理回复信息
        isShowMangeReplyInfo: null,
        // 复诊开药须知
        prescriptAgreementId: null,
        // 可续方相差天数
        prescriptDifferDays: null,
        // 诊断查询默认天数
        diagnoseQueryDays: null,
        // 问诊医生科室须知
        clinicAgreementId: null,
        // 配送须知
        distributionNotice: null,
        // 自提须知
        selfNotice: null,
        // 外配须知
        externalNotice: null,
        // 接单开关
        isReceiving: null,
        // 是否开启免打扰
        isNotDisturb: null,
        // 免打扰开始时间
        receivingStartTime: null,
        // 免打扰结束时间
        receivingEndTime: null,
        // 是否开启线上复诊
        isClinicPrescriptLine: null,
        // 问诊单日接单上限
        clinicLimitCount: null,
        // 复诊单日接单上限
        prescriptLimitCount: null,
        // 是否启用在线支付
        isOpenPayment: null,
        // 支付过期时间
        expiryMinutes: null,
        // 支付宝支付账号
        payAlipayAccountId: null,
        // 微信支付账号
        payWeiXinAccountId: null,
        // 是否开启第三方支付
        isThirdPartyPay: null,
        // 第三方支付地址
        thirdPartyPayUrl: null,
        // 是否默认
        isDefault: null,
        // 是否开启在线问诊
        isOpenClinic: null,
        // 门诊问诊医生
        oPDoctorId: null,
        // 门诊问诊科室
        oPDepartmentId: null,
        // 上午开启预约时间
        aMBeginTimeForDay: null,
        // 上午结束预约时间
        aMEndTimeForDay: null,
        // 下午开启预约时间
        pMBeginTimeForDay: null,
        // 下午结束预约时间
        pMEndTimeForDay: null,
        // 中午开启预约时间
        noonBeginTimeForDay: null,
        // 中午结束预约时间
        noonEndTimeForDay: null,
        // 上夜开启预约时间
        upNightBeginTimeForDay: null,
        // 上夜结束预约时间
        upNightEndTimeForDay: null,
        // 下夜开启预约时间
        downNightBeginTimeForDay: null,
        // 下夜结束预约时间
        downNightEndTimeForDay: null,
        // 是否实时获取在线问诊
        isOpenRealTimeClinic: null,
        // 是否实时获取线上复诊
        isOpenRealTimeClinicPrescript: null,
        // 同一身份证待就诊条数
        sameIdCardNoSchedulingAppointNoTakeNumCount: null,
        // 同一天同一身份证可预约个数
        sameDayIdCardNoSchedulingAppointCount: null,
        // 同一时段同一身份证可预约个数
        sameTimeIdCardNoSchedulingAppointCount: null,
        // 同一天同一身份证同一科室可预约个数
        sameDayIdCardNoDepartmentSchedulingAppointCount: null,
        // 同一时段同一身份证同一科室可预约个数
        sameTimeIdCardNoDepartmentSchedulingAppointCount: null,
        // 每月取消预约次数
        inMonthForCancelAppointCount: null,
        // 当天取消预约截止的时间
        inCutoffTimeForCancerAppoint: null,
        // 是否开启图文
        isOpenClinicImageText: null,
        // 是否开启语音
        isOpenClinicVoice: null,
        // 是否开启视频
        isOpenClinicVideo: null,
        // 问诊默认自定义表单
        clinicGeneralFormId: null,
        // 复诊默认自定义表单
        clinicPrescriptGeneralFormId: null,
        // 限制药品类型
        limitDrugType: null,
        // 问复诊预约展示类型
        clinicShowType: null,
        // 是否开启审核
        isOpenExamine: null,
        // 在线问诊是否开启开诊断和处方
        isOpenDiagnosePrescription: null,
        // 是否开启开检查
        isOpenInspect: null,
        // 是否开启历史方
        isOpenHistoricalPrescription: null,
        // 是否开启常用方
        isOpenCommonPrescription: null,
        // 处方药品支付类型
        prescriptionDrugsPayTypeId: null,
        // 是否开启问诊类型升级
        isOpenUpGradeClinicChatType: null,
        // 超时自动取消时间
        timeoutAutoCancelTime: null,
        // 协议
        notice: null,
        // 评价问卷
        voteId: null,
        // 问诊功能类型
        clinicFunctionalTypeId: null,
        // 是否开启第三方审方
        isOpenThirdPartyExamine: null,
        // 是否开启选择药房
        isOpenChoicePharmacy: null,
        // 是否开启上传监管平台
        isOpenUploadSupervisionPlatform: null,
        // 是否开启自定义诊断
        isOpenCustomDiagos: null,
        // 是否医生开方前确认表单
        isPrescriptionBeforeValidateForm: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await clinicSettingApi.addClinicSetting(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await clinicSettingApi.updateClinicSetting(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
