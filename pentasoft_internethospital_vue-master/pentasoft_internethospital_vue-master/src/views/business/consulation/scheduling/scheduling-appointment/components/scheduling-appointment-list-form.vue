<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="患者Id" prop="patientId">
            <Input type="number" v-model.number="form.patientId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="手机号码" prop="mobileNumber">
            <Input v-model="form.mobileNumber" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="身份证号码" prop="idCardNo">
            <Input v-model="form.idCardNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="真实姓名" prop="realName">
            <Input v-model="form.realName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="注册号" prop="registrationNo">
            <Input v-model="form.registrationNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="医保手册编码" prop="medicareHandbookCode">
            <Input v-model="form.medicareHandbookCode" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="就诊卡号" prop="treatmentCardNo">
            <Input v-model="form.treatmentCardNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊医生Id" prop="doctorName">
            <Input v-model="form.doctorName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="科室Id" prop="departmentName">
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
          <FormItem label="门诊专业Id" prop="schedulingSpecialtyId">
            <Input type="number" v-model.number="form.schedulingSpecialtyId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊诊室Id" prop="schedulingClinicId">
            <Input type="number" v-model.number="form.schedulingClinicId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="排班性质Id" prop="schedulingPropertyId">
            <Input type="number" v-model.number="form.schedulingPropertyId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="排班计划Id" prop="schedulingPlanId">
            <Input type="number" v-model.number="form.schedulingPlanId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="每日排班Id" prop="dailySchedulingId">
            <Input type="number" v-model.number="form.dailySchedulingId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="排班日期" prop="schedulingDate">
            <DatePicker
              type="date"
              :value="form.schedulingDate"
              @on-change="form.schedulingDate = $event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="星期" prop="dayOfWeekId">
            <RadioGroup
              v-model="form.dayOfWeekId"
              type="button"
              button-style="solid"
              size="small"
            >
              <Radio
                v-for="item in dayOfWeekDataList"
                :key="item.value"
                :label="item.value"
                style="font-size: 12px; padding: 0 6px"
                >{{ item.desc }}</Radio
              >
            </RadioGroup>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="时段" prop="timeOfDayId">
            <RadioGroup
              v-model="form.timeOfDayId"
              type="button"
              button-style="solid"
              size="small"
            >
              <Radio
                v-for="item in timeOfDayDataList"
                :key="item.value"
                :label="item.value"
                style="font-size: 12px; padding: 0 6px"
                >{{ item.desc }}</Radio
              >
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="挂号价目" prop="price">
            <Input type="number" v-model.number="form.price" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约号次" prop="appointOrderNo">
            <Input type="number" v-model.number="form.appointOrderNo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预约状态" prop="appointStateId">
            <RadioGroup
              v-model="form.appointStateId"
              type="button"
              button-style="solid"
              size="small"
            >
              <Radio
                v-for="item in appointStateDataList"
                :key="item.value"
                :label="item.value"
                style="font-size: 12px; padding: 0 6px"
                >{{ item.desc }}</Radio
              >
            </RadioGroup>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否发送短信" prop="isSendSM">
            <Checkbox v-model="form.isSendSM"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="短信Id" prop="shortMessageId">
            <Input type="number" v-model.number="form.shortMessageId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否发送邮件" prop="isSendEmail">
            <Checkbox v-model="form.isSendEmail"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="邮件Id" prop="emailId">
            <Input type="number" v-model.number="form.emailId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否作废" prop="isInvalid">
            <Checkbox v-model="form.isInvalid"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="作废日期" prop="lastInvalidDate">
            <DatePicker type="date" :value="form.lastInvalidDate"
              @on-change="form.lastInvalidDate=$event"></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="作废人" prop="invaliderId">
            <Input type="number" v-model.number="form.invaliderId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预约作废类型" prop="appointInvalidTypeID">
            <Input type="number" v-model.number="form.appointInvalidTypeID" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否为复诊病人的预约" prop="isReferral">
            <Checkbox v-model="form.isReferral"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预约途径" prop="appointWayId">
            <RadioGroup
              v-model="form.appointWayId"
              type="button"
              button-style="solid"
              size="small"
            >
              <Radio
                v-for="item in appointWayDataList"
                :key="item.value"
                :label="item.value"
                style="font-size: 12px; padding: 0 6px"
                >{{ item.desc }}</Radio
              >
            </RadioGroup>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约号源" prop="schedulingSourceId">
            <Input type="number" v-model.number="form.schedulingSourceId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="备注" prop="remark">
            <Input v-model="form.remark" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="取号日期" prop="registeredDate">
            <DatePicker type="date" :value="form.registeredDate"
              @on-change="form.registeredDate=$event"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="提交人" prop="posterId">
            <Input type="number" v-model.number="form.posterId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="号源明细主键" prop="dailySchedulingNumberId">
            <Input
              type="number"
              v-model.number="form.dailySchedulingNumberId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="出诊级别编码" prop="schedulingLevelCode">
            <Input v-model="form.schedulingLevelCode" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="相关疾病" prop="diseaseId">
            <Input type="number" v-model.number="form.diseaseId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊医生姓名" prop="doctorName">
            <Input v-model="form.doctorName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="科室" prop="departmentName">
            <Input v-model="form.departmentName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊排班级别" prop="schedulingLevelName">
            <Input v-model="form.schedulingLevelName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊专业" prop="schedulingSpecialtyName">
            <Input v-model="form.schedulingSpecialtyName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="第三方编码" prop="thirdPartyCode">
            <Input v-model="form.thirdPartyCode" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="时段" prop="timeOfDayName">
            <Input v-model="form.timeOfDayName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="时间" prop="time">
            <Input v-model="form.time" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊科室ID" prop="oPDepartmentId">
            <Input type="number" v-model.number="form.oPDepartmentId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊医生ID" prop="oPDoctorId">
            <Input type="number" v-model.number="form.oPDoctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="出诊类型" prop="schedulingTypeId">
            <Input type="number" v-model.number="form.schedulingTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="取消原因" prop="schedulingAppointmentCancelTypeId">
            <Input
              type="number"
              v-model.number="form.schedulingAppointmentCancelTypeId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="取消备注" prop="cancelRemark">
            <Input v-model="form.cancelRemark" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="每日门诊排班Id" prop="oPDailySchedulingId">
            <Input type="number" v-model.number="form.oPDailySchedulingId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊号源明细主键Id" prop="oPDailySchedulingNumberId">
            <Input
              type="number"
              v-model.number="form.oPDailySchedulingNumberId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="取消方式" prop="appointCancelTypeId">
            <Input type="number" v-model.number="form.appointCancelTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="取消时间" prop="appointCancelDateTime">
            <DatePicker
              type="datetime"
              :value="form.appointCancelDateTime"
              @on-change="form.appointCancelDateTime=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="参保卡类别" prop="appointInsuredCardTypeId">
            <Input
              type="number"
              v-model.number="form.appointInsuredCardTypeId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付方式" prop="paymentMethodTypeId">
            <Input type="number" v-model.number="form.paymentMethodTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="第三方编码" prop="thirdPartyCode1">
            <Input v-model="form.thirdPartyCode1" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="第三方预约参数" prop="thirdPartyParameters">
            <Input v-model="form.thirdPartyParameters" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="微信支付订单号" prop="payOrderStreamNo_WeiXin">
            <Input v-model="form.payOrderStreamNo_WeiXin" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信支付链接" prop="payQRCodeUrl_WeiXin">
            <Input v-model="form.payQRCodeUrl_WeiXin" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="微信支付二维码" prop="payQRCodePath_WeiXin">
            <Input v-model="form.payQRCodePath_WeiXin" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信支付过期时间" prop="payExpiredTime_WeiXin">
            <DatePicker
              type="datetime"
              :value="form.payExpiredTime_WeiXin"
              @on-change="form.payExpiredTime_WeiXin=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付宝支付订单号" prop="payOrderStreamNo_Ali">
            <Input v-model="form.payOrderStreamNo_Ali" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付宝支付链接" prop="payQRCodeUrl_Ali">
            <Input v-model="form.payQRCodeUrl_Ali" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付宝支付二维码" prop="payQRCodePath_Ali">
            <Input v-model="form.payQRCodePath_Ali" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="支付宝支付过期时间" prop="payExpiredTime_Ali">
            <DatePicker
              type="datetime"
              :value="form.payExpiredTime_Ali"
              @on-change="form.payExpiredTime_Ali=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付状态" prop="paymentStateTypeId">
            <Input type="number" v-model.number="form.paymentStateTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="调用挂号接口次数" prop="registerCount_Interface">
            <Input
              type="number"
              v-model.number="form.registerCount_Interface"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="订单ID" prop="orderId">
            <Input type="number" v-model.number="form.orderId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否必须支付" prop="isMustPayment">
            <Checkbox v-model="form.isMustPayment"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="支付过期时间" prop="payExpiredTime">
            <DatePicker
              type="datetime"
              :value="form.payExpiredTime"
              @on-change="form.payExpiredTime=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否候补预约" prop="isCandidate">
            <Checkbox v-model="form.isCandidate"></Checkbox>
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
          <FormItem label="是否开发票" prop="isHaveInvoice">
            <Checkbox v-model="form.isHaveInvoice"></Checkbox>
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
import { schedulingAppointmentApi } from '@/api/scheduling/scheduling-appointment';
import { YES_OR_NO } from '@/constants/common';
import {
  SCHEDULING_SOURCE,
  APPOINT_STATE,
  APPOINT_WAY,
  DAY_OF_WEEK,
  TIME_OF_DAY
} from '@/constants/enum-scheduling';
export default {
  name: 'SchedulingAppointmentListForm',
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
        schedulingAppointmentId: null,
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
        // 排班性质Id   枚举 排班性质：1、计划排班，2、临时排班，3、替诊排班，4、调休排班
        schedulingPropertyId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 每日排班Id
        dailySchedulingId: null,
        // 排班日期
        schedulingDate: null,
        // 星期  直接使用中文的星期枚举EnumDayOfWeek，因为英文的不能配中文字符，两种编码一致
        dayOfWeekId: null,
        // 时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 预约号次
        appointOrderNo: null,
        // 预约状态  枚举 预约状态ID：1未就诊，2已就诊，3取消，4停诊，5违约
        appointStateId: null,
        // 是否发送短信
        isSendSM: false,
        // 短信Id
        shortMessageId: null,
        // 是否发送邮件
        isSendEmail: null,
        // 邮件Id
        emailId: null,
        // 是否作废
        isInvalid: false,
        // 作废日期
        lastInvalidDate: null,
        // 作废人
        invaliderId: null,
        // 预约作废类型  枚举 预约作废类型ID：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)
        appointInvalidTypeID: null,
        // 是否为复诊病人的预约
        isReferral: false,
        // 预约途径  枚举 预约途径：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: null,
        // 预约号源  枚举 预约号源：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: null,
        // 备注
        remark: null,
        // 取号日期  当状态变为 已就诊时 则此字段必定有值
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
        // 时间   兼容第三方接口；邢台三院：号别时段（注意：上午九点要写09:00:00）
        time: null,
        // 门诊科室ID
        oPDepartmentId: null,
        // 门诊医生ID
        oPDoctorId: null,
        // 出诊类型
        schedulingTypeId: null,
        // 取消原因    枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
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
        isMustPayment: false,
        // 支付过期时间
        payExpiredTime: null,
        // 是否候补预约
        isCandidate: null,
        // 预约类型   枚举：1、普通预约  2、特殊预约
        schedulingAppointmentTypeId: null,
        // 预约操作人
        appointmentPosterId: null,
        // 患者类型
        patientTypeId: null,
        // 证件类型
        documentTypeId: null,
        // 其他证件号
        otherCardNo: null,
        // 是否开发票
        isHaveInvoice: null
      },
      // 表单验证
      formValidate: {
        // 患者Id
        patientId: [
          {
            type: 'number',
            required: true,
            message: '请输入患者Id',
            trigger: 'blur'
          }
        ],
        // 手机号码
        mobileNumber: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ],
        // 身份证号码
        idCardNo: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' }
        ],
        // 真实姓名
        realName: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' }
        ],
        // 注册号
        registrationNo: [
          { required: true, message: '请输入注册号', trigger: 'blur' }
        ],
        // 医保手册编码
        medicareHandbookCode: [
          { required: true, message: '请输入医保手册编码', trigger: 'blur' }
        ],
        // 就诊卡号
        treatmentCardNo: [
          { required: true, message: '请输入就诊卡号', trigger: 'blur' }
        ],
        // 门诊医生Id
        doctorId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊医生Id',
            trigger: 'blur'
          }
        ],
        // 科室Id
        departmentId: [
          {
            type: 'number',
            required: true,
            message: '请输入科室Id',
            trigger: 'blur'
          }
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
        // 门诊专业Id
        schedulingSpecialtyId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊专业Id',
            trigger: 'blur'
          }
        ],
        // 门诊诊室Id
        schedulingClinicId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊诊室Id',
            trigger: 'blur'
          }
        ],
        // 排班性质Id   枚举 排班性质：1、计划排班，2、临时排班，3、替诊排班，4、调休排班
        schedulingPropertyId: [
          {
            type: 'number',
            required: true,
            message:
              '请输入排班性质Id   枚举 排班性质：1、计划排班，2、临时排班，3、替诊排班，4、调休排班',
            trigger: 'blur'
          }
        ],
        // 排班计划Id
        schedulingPlanId: [
          {
            type: 'number',
            required: true,
            message: '请输入排班计划Id',
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
          { required: true, message: '请输入排班日期', trigger: 'blur' }
        ],
        // 星期  直接使用中文的星期枚举EnumDayOfWeek，因为英文的不能配中文字符，两种编码一致
        dayOfWeekId: [
          {
            type: 'number',
            required: true,
            message:
              '请输入星期  直接使用中文的星期枚举EnumDayOfWeek，因为英文的不能配中文字符，两种编码一致',
            trigger: 'blur'
          }
        ],
        // 时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: [
          {
            type: 'number',
            required: true,
            message: '请输入时段  枚举：1=上午，2=下午，3=夜间',
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
        // 预约状态  枚举 预约状态ID：1未就诊，2已就诊，3取消，4停诊，5违约
        appointStateId: [
          {
            type: 'number',
            required: true,
            message:
              '请输入预约状态  枚举 预约状态ID：1未就诊，2已就诊，3取消，4停诊，5违约',
            trigger: 'blur'
          }
        ],
        // 是否发送短信
        isSendSM: [
          { required: true, message: '请输入是否发送短信', trigger: 'blur' }
        ],
        // 短信Id
        shortMessageId: [
          {
            type: 'number',
            required: true,
            message: '请输入短信Id',
            trigger: 'blur'
          }
        ],
        // 是否发送邮件
        isSendEmail: [
          { required: true, message: '请输入是否发送邮件', trigger: 'blur' }
        ],
        // 邮件Id
        emailId: [
          {
            type: 'number',
            required: true,
            message: '请输入邮件Id',
            trigger: 'blur'
          }
        ],
        // 是否作废
        isInvalid: [
          { required: true, message: '请输入是否作废', trigger: 'blur' }
        ],
        // 作废日期
        lastInvalidDate: [
          { required: true, message: '请输入作废日期', trigger: 'blur' }
        ],
        // 作废人
        invaliderId: [
          {
            type: 'number',
            required: true,
            message: '请输入作废人',
            trigger: 'blur'
          }
        ],
        // 预约作废类型  枚举 预约作废类型ID：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)
        appointInvalidTypeID: [
          {
            type: 'number',
            required: true,
            message:
              '请输入预约作废类型  枚举 预约作废类型ID：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)',
            trigger: 'blur'
          }
        ],
        // 是否为复诊病人的预约
        isReferral: [
          {
            required: true,
            message: '请输入是否为复诊病人的预约',
            trigger: 'blur'
          }
        ],
        // 预约途径  枚举 预约途径：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: [
          {
            type: 'number',
            required: true,
            message:
              '请输入预约途径  枚举 预约途径：1网上预约，2电话语音(IVR)，3手机短信(SMS)',
            trigger: 'blur'
          }
        ],
        // 预约号源  枚举 预约号源：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: [
          {
            type: 'number',
            required: true,
            message:
              '请输入预约号源  枚举 预约号源：1普通预约，2绿色通道，3申请通道',
            trigger: 'blur'
          }
        ],
        // 备注
        remark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        // 取号日期  当状态变为 已就诊时 则此字段必定有值
        registeredDate: [
          {
            required: true,
            message: '请输入取号日期  当状态变为 已就诊时 则此字段必定有值',
            trigger: 'blur'
          }
        ],
        // 提交人
        posterId: [
          {
            type: 'number',
            required: true,
            message: '请输入提交人',
            trigger: 'blur'
          }
        ],
        // 号源明细主键
        dailySchedulingNumberId: [
          {
            type: 'number',
            required: true,
            message: '请输入号源明细主键',
            trigger: 'blur'
          }
        ],
        // 出诊级别编码
        schedulingLevelCode: [
          { required: true, message: '请输入出诊级别编码', trigger: 'blur' }
        ],
        // 相关疾病
        diseaseId: [
          {
            type: 'number',
            required: true,
            message: '请输入相关疾病',
            trigger: 'blur'
          }
        ],
        // 门诊医生姓名
        doctorName: [
          { required: true, message: '请输入门诊医生姓名', trigger: 'blur' }
        ],
        // 科室
        departmentName: [
          { required: true, message: '请输入科室', trigger: 'blur' }
        ],
        // 门诊排班级别
        schedulingLevelName: [
          { required: true, message: '请输入门诊排班级别', trigger: 'blur' }
        ],
        // 门诊专业
        schedulingSpecialtyName: [
          { required: true, message: '请输入门诊专业', trigger: 'blur' }
        ],
        // 第三方编码
        thirdPartyCode: [
          { required: true, message: '请输入第三方编码', trigger: 'blur' }
        ],
        // 时段
        timeOfDayName: [
          { required: true, message: '请输入时段', trigger: 'blur' }
        ],
        // 时间   兼容第三方接口；邢台三院：号别时段（注意：上午九点要写09:00:00）
        time: [
          {
            required: true,
            message:
              '请输入时间   兼容第三方接口；邢台三院：号别时段（注意：上午九点要写09:00:00）',
            trigger: 'blur'
          }
        ],
        // 门诊科室ID
        oPDepartmentId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊科室ID',
            trigger: 'blur'
          }
        ],
        // 门诊医生ID
        oPDoctorId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊医生ID',
            trigger: 'blur'
          }
        ],
        // 出诊类型
        schedulingTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入出诊类型',
            trigger: 'blur'
          }
        ],
        // 取消原因    枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
        schedulingAppointmentCancelTypeId: [
          {
            type: 'number',
            required: true,
            message:
              '请输入取消原因    枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）',
            trigger: 'blur'
          }
        ],
        // 取消备注
        cancelRemark: [
          { required: true, message: '请输入取消备注', trigger: 'blur' }
        ],
        // 每日门诊排班Id
        oPDailySchedulingId: [
          {
            type: 'number',
            required: true,
            message: '请输入每日门诊排班Id',
            trigger: 'blur'
          }
        ],
        // 门诊号源明细主键Id
        oPDailySchedulingNumberId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊号源明细主键Id',
            trigger: 'blur'
          }
        ],
        // 取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消
        appointCancelTypeId: [
          {
            type: 'number',
            required: true,
            message:
              '请输入取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消',
            trigger: 'blur'
          }
        ],
        // 取消时间
        appointCancelDateTime: [
          { required: true, message: '请输入取消时间', trigger: 'blur' }
        ],
        // 参保卡类别
        appointInsuredCardTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入参保卡类别',
            trigger: 'blur'
          }
        ],
        // 支付方式
        paymentMethodTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入支付方式',
            trigger: 'blur'
          }
        ],
        // 第三方编码
        thirdPartyCode1: [
          { required: true, message: '请输入第三方编码', trigger: 'blur' }
        ],
        // 第三方预约参数
        thirdPartyParameters: [
          { required: true, message: '请输入第三方预约参数', trigger: 'blur' }
        ],
        // 微信支付订单号
        payOrderStreamNo_WeiXin: [
          { required: true, message: '请输入微信支付订单号', trigger: 'blur' }
        ],
        // 微信支付链接
        payQRCodeUrl_WeiXin: [
          { required: true, message: '请输入微信支付链接', trigger: 'blur' }
        ],
        // 微信支付二维码
        payQRCodePath_WeiXin: [
          { required: true, message: '请输入微信支付二维码', trigger: 'blur' }
        ],
        // 微信支付过期时间
        payExpiredTime_WeiXin: [
          {
            required: true,
            message: '请输入微信支付过期时间',
            trigger: 'blur'
          }
        ],
        // 支付宝支付订单号
        payOrderStreamNo_Ali: [
          {
            required: true,
            message: '请输入支付宝支付订单号',
            trigger: 'blur'
          }
        ],
        // 支付宝支付链接
        payQRCodeUrl_Ali: [
          { required: true, message: '请输入支付宝支付链接', trigger: 'blur' }
        ],
        // 支付宝支付二维码
        payQRCodePath_Ali: [
          {
            required: true,
            message: '请输入支付宝支付二维码',
            trigger: 'blur'
          }
        ],
        // 支付宝支付过期时间
        payExpiredTime_Ali: [
          {
            required: true,
            message: '请输入支付宝支付过期时间',
            trigger: 'blur'
          }
        ],
        // 支付状态
        paymentStateTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入支付状态',
            trigger: 'blur'
          }
        ],
        // 调用挂号接口次数
        registerCount_Interface: [
          {
            type: 'number',
            required: true,
            message: '请输入调用挂号接口次数',
            trigger: 'blur'
          }
        ],
        // 订单ID
        orderId: [
          {
            type: 'number',
            required: true,
            message: '请输入订单ID',
            trigger: 'blur'
          }
        ],
        // 是否必须支付
        isMustPayment: [
          { required: true, message: '请输入是否必须支付', trigger: 'blur' }
        ],
        // 支付过期时间
        payExpiredTime: [
          { required: true, message: '请输入支付过期时间', trigger: 'blur' }
        ],
        // 是否候补预约
        isCandidate: [
          { required: true, message: '请输入是否候补预约', trigger: 'blur' }
        ],
        // 预约类型   枚举：1、普通预约  2、特殊预约
        schedulingAppointmentTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入预约类型   枚举：1、普通预约  2、特殊预约',
            trigger: 'blur'
          }
        ],
        // 预约操作人
        appointmentPosterId: [
          {
            type: 'number',
            required: true,
            message: '请输入预约操作人',
            trigger: 'blur'
          }
        ],
        // 患者类型
        patientTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入患者类型',
            trigger: 'blur'
          }
        ],
        // 证件类型
        documentTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入证件类型',
            trigger: 'blur'
          }
        ],
        // 其他证件号
        otherCardNo: [
          { required: true, message: '请输入其他证件号', trigger: 'blur' }
        ],
        // 是否开发票
        isHaveInvoice: [
          { required: true, message: '请输入是否开发票', trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    schedulingSourceDataList: () => {
      let array = [];
      for (let item in SCHEDULING_SOURCE) {
        let obj = {};
        obj.desc = SCHEDULING_SOURCE[item].desc;
        obj.value = SCHEDULING_SOURCE[item].value;
        array.push(obj);
      }
      return array;
    },
    appointStateDataList: () => {
      let array = [];
      for (let item in APPOINT_STATE) {
        let obj = {};
        obj.desc = APPOINT_STATE[item].desc;
        obj.value = APPOINT_STATE[item].value;
        array.push(obj);
      }
      return array;
    },
    appointWayDataList: () => {
      let array = [];
      for (let item in APPOINT_WAY) {
        let obj = {};
        obj.desc = APPOINT_WAY[item].desc;
        obj.value = APPOINT_WAY[item].value;
        array.push(obj);
      }
      return array;
    },
    dayOfWeekDataList: () => {
      let array = [];
      for (let item in DAY_OF_WEEK) {
        let obj = {};
        obj.desc = DAY_OF_WEEK[item].desc;
        obj.value = DAY_OF_WEEK[item].value;
        array.push(obj);
      }
      return array;
    },
    timeOfDayDataList: () => {
      let array = [];
      for (let item in TIME_OF_DAY) {
        let obj = {};
        obj.desc = TIME_OF_DAY[item].desc;
        obj.value = TIME_OF_DAY[item].value;
        array.push(obj);
      }
      return array;
    },
    YesOrNoDataList: () => {
      let array = [];
      for (let item in YES_OR_NO) {
        let obj = {};
        obj.desc = YES_OR_NO[item].desc;
        obj.value = YES_OR_NO[item].value;
        array.push(obj);
      }
      return array;
    }
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
          'schedulingAppointmentId',
          newValue['schedulingAppointmentId']
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
        schedulingAppointmentId: null,
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
        // 排班性质Id   枚举 排班性质：1、计划排班，2、临时排班，3、替诊排班，4、调休排班
        schedulingPropertyId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 每日排班Id
        dailySchedulingId: null,
        // 排班日期
        schedulingDate: null,
        // 星期  直接使用中文的星期枚举EnumDayOfWeek，因为英文的不能配中文字符，两种编码一致
        dayOfWeekId: null,
        // 时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 预约号次
        appointOrderNo: null,
        // 预约状态  枚举 预约状态ID：1未就诊，2已就诊，3取消，4停诊，5违约
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
        // 预约作废类型  枚举 预约作废类型ID：1用户取消，2医生停诊，4医生取消，8管理取消，16预约过期(没有进行预约登记时，预约过期的情况)
        appointInvalidTypeID: null,
        // 是否为复诊病人的预约
        isReferral: null,
        // 预约途径  枚举 预约途径：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: null,
        // 预约号源  枚举 预约号源：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: null,
        // 备注
        remark: null,
        // 取号日期  当状态变为 已就诊时 则此字段必定有值
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
        // 时间   兼容第三方接口；邢台三院：号别时段（注意：上午九点要写09:00:00）
        time: null,
        // 门诊科室ID
        oPDepartmentId: null,
        // 门诊医生ID
        oPDoctorId: null,
        // 出诊类型
        schedulingTypeId: null,
        // 取消原因    枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
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
        // 是否候补预约
        isCandidate: null,
        // 预约类型   枚举：1、普通预约  2、特殊预约
        schedulingAppointmentTypeId: null,
        // 预约操作人
        appointmentPosterId: null,
        // 患者类型
        patientTypeId: null,
        // 证件类型
        documentTypeId: null,
        // 其他证件号
        otherCardNo: null,
        // 是否开发票
        isHaveInvoice: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await schedulingAppointmentApi.addSchedulingAppointment(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await schedulingAppointmentApi.updateSchedulingAppointment(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
