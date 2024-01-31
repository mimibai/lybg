<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="医生" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="科室" prop="departmentId">
            <Input type="number" v-model.number="form.departmentId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊医生" prop="oPDoctorId">
            <Input type="number" v-model.number="form.oPDoctorId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊科室" prop="oPDepartmentId">
            <Input type="number" v-model.number="form.oPDepartmentId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="出诊级别" prop="schedulingLevelId">
            <Input type="number" v-model.number="form.schedulingLevelId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="星期" prop="dayOfWeekId">
            <Input type="number" v-model.number="form.dayOfWeekId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="时段" prop="timeOfDayId">
            <Input type="number" v-model.number="form.timeOfDayId" />
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
          <FormItem label="排班日期" prop="schedulingDate">
            <DatePicker
              type="datetime"
              placeholder="请选择排班日期"
              :value="form.schedulingDate"
              @on-change="form.schedulingDate=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否审核" prop="isApprove">
            <i-switch v-model="form.isApprove" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="停诊原因" prop="stopSchedulingReasonId">
            <Input type="number" v-model.number="form.stopSchedulingReasonId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否允许预约" prop="isAllowAppoint">
            <i-switch v-model="form.isAllowAppoint" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="级别编码/号别" prop="schedulingLevelCode">
            <Input v-model="form.schedulingLevelCode" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="所在医院" prop="hospitalId">
            <Input type="number" v-model.number="form.hospitalId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="出诊类型" prop="oPSchedulingTypeId">
            <Input type="number" v-model.number="form.oPSchedulingTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="第三方地址" prop="thirdPartyUrl">
            <Input v-model="form.thirdPartyUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="替诊类型" prop="replaceTypeId">
            <Input type="number" v-model.number="form.replaceTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="替诊医生" prop="replaceOPDoctorId">
            <Input type="number" v-model.number="form.replaceOPDoctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="被替诊出诊Id" prop="replaceOPDailySchedulingId">
            <Input
              type="number"
              v-model.number="form.replaceOPDailySchedulingId"
            />
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
          <FormItem label="是否删除" prop="isDelete">
            <i-switch v-model="form.isDelete" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否修改过" prop="isModified">
            <i-switch v-model="form.isModified" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="修改类型 1、手动修改 2、程序导入"
            prop="modifiedTypeId"
          >
            <Input type="number" v-model.number="form.modifiedTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="停诊原因" prop="stopSchedulingReason">
            <Input v-model="form.stopSchedulingReason" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="总号源" prop="totalNumber">
            <Input type="number" v-model.number="form.totalNumber" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="可预约号源" prop="valuableNumber">
            <Input type="number" v-model.number="form.valuableNumber" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否全天" prop="isAllDay">
            <i-switch v-model="form.isAllDay" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="问诊类型 枚举：1医院问诊 2科室问诊 3医生问诊"
            prop="clinicTypeId"
          >
            <Input type="number" v-model.number="form.clinicTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="问诊对话类型 枚举：1图文 2语音 3视频"
            prop="clinicChatTypeId"
          >
            <Input type="number" v-model.number="form.clinicChatTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="问诊功能类型 枚举：1在线问诊 2复诊处方"
            prop="clinicFunctionalTypeId"
          >
            <Input type="number" v-model.number="form.clinicFunctionalTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="号源类型" prop="generateAppointNoTypeId">
            <Input
              type="number"
              v-model.number="form.generateAppointNoTypeId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="起始预约号次" prop="beginAppointNo">
            <Input type="number" v-model.number="form.beginAppointNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="可预约总数" prop="allownAppointTotal">
            <Input type="number" v-model.number="form.allownAppointTotal" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="生成号源时间类型"
            prop="generateAppointNumberTimeTypeId"
          >
            <Input
              type="number"
              v-model.number="form.generateAppointNumberTimeTypeId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="号源间隔时间" prop="appointNumberIntervalTime">
            <Input
              type="number"
              v-model.number="form.appointNumberIntervalTime"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="自定义号源时间" prop="appointNumberTimes">
            <Input v-model="form.appointNumberTimes" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="起始号源时间" prop="beginAppointNumberTime">
            <DatePicker
              type="datetime"
              placeholder="请选择起始号源时间"
              :value="form.beginAppointNumberTime"
              @on-change="form.beginAppointNumberTime=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="自定义号源" prop="allownAppointNumbers">
            <Input v-model="form.allownAppointNumbers" />
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
import { clinicSchedulingApi } from '@/api/clinic/clinic-scheduling';
import { utils } from '@/lib/util';
export default {
  name: 'ClinicSchedulingListForm',
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
        clinicSchedulingId: null,
        // 医生
        doctorId: null,
        // 科室
        departmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 出诊级别
        schedulingLevelId: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 排班日期
        schedulingDate: null,
        // 是否审核
        isApprove: null,
        // 停诊原因
        stopSchedulingReasonId: null,
        // 是否允许预约
        isAllowAppoint: null,
        // 级别编码/号别
        schedulingLevelCode: null,
        // 所在医院
        hospitalId: null,
        // 出诊类型
        oPSchedulingTypeId: null,
        // 第三方地址
        thirdPartyUrl: null,
        // 替诊类型
        replaceTypeId: null,
        // 替诊医生
        replaceOPDoctorId: null,
        // 被替诊出诊Id
        replaceOPDailySchedulingId: null,
        // 第三方编码
        thirdPartyCode: null,
        // 是否删除
        isDelete: null,
        // 是否修改过
        isModified: null,
        // 修改类型 1、手动修改 2、程序导入
        modifiedTypeId: null,
        // 停诊原因
        stopSchedulingReason: null,
        // 总号源
        totalNumber: null,
        // 可预约号源
        valuableNumber: null,
        // 是否全天
        isAllDay: null,
        // 问诊类型 枚举：1医院问诊 2科室问诊 3医生问诊
        clinicTypeId: null,
        // 问诊对话类型 枚举：1图文 2语音 3视频
        clinicChatTypeId: null,
        // 问诊功能类型 枚举：1在线问诊 2复诊处方
        clinicFunctionalTypeId: null,
        // 号源类型
        generateAppointNoTypeId: null,
        // 起始预约号次
        beginAppointNo: null,
        // 可预约总数
        allownAppointTotal: null,
        // 生成号源时间类型
        generateAppointNumberTimeTypeId: null,
        // 号源间隔时间
        appointNumberIntervalTime: null,
        // 自定义号源时间
        appointNumberTimes: null,
        // 起始号源时间
        beginAppointNumberTime: null,
        // 自定义号源
        allownAppointNumbers: null
      },
      // 表单验证
      formValidate: {
        // 出诊级别
        schedulingLevelId: [
          {
            type: 'number',
            required: true,
            message: '请输入出诊级别',
            trigger: 'blur'
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
        // 排班日期
        schedulingDate: [
          {
            required: true,
            message: '请输入排班日期',
            trigger: 'blur',
            pattern: /.+/
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
          'clinicSchedulingId',
          newValue['clinicSchedulingId']
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
        clinicSchedulingId: null,
        // 医生
        doctorId: null,
        // 科室
        departmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 出诊级别
        schedulingLevelId: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 排班日期
        schedulingDate: null,
        // 是否审核
        isApprove: null,
        // 停诊原因
        stopSchedulingReasonId: null,
        // 是否允许预约
        isAllowAppoint: null,
        // 级别编码/号别
        schedulingLevelCode: null,
        // 所在医院
        hospitalId: null,
        // 出诊类型
        oPSchedulingTypeId: null,
        // 第三方地址
        thirdPartyUrl: null,
        // 替诊类型
        replaceTypeId: null,
        // 替诊医生
        replaceOPDoctorId: null,
        // 被替诊出诊Id
        replaceOPDailySchedulingId: null,
        // 第三方编码
        thirdPartyCode: null,
        // 是否删除
        isDelete: null,
        // 是否修改过
        isModified: null,
        // 修改类型 1、手动修改 2、程序导入
        modifiedTypeId: null,
        // 停诊原因
        stopSchedulingReason: null,
        // 总号源
        totalNumber: null,
        // 可预约号源
        valuableNumber: null,
        // 是否全天
        isAllDay: null,
        // 问诊类型 枚举：1医院问诊 2科室问诊 3医生问诊
        clinicTypeId: null,
        // 问诊对话类型 枚举：1图文 2语音 3视频
        clinicChatTypeId: null,
        // 问诊功能类型 枚举：1在线问诊 2复诊处方
        clinicFunctionalTypeId: null,
        // 号源类型
        generateAppointNoTypeId: null,
        // 起始预约号次
        beginAppointNo: null,
        // 可预约总数
        allownAppointTotal: null,
        // 生成号源时间类型
        generateAppointNumberTimeTypeId: null,
        // 号源间隔时间
        appointNumberIntervalTime: null,
        // 自定义号源时间
        appointNumberTimes: null,
        // 起始号源时间
        beginAppointNumberTime: null,
        // 自定义号源
        allownAppointNumbers: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await clinicSchedulingApi.addClinicScheduling(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await clinicSchedulingApi.updateClinicScheduling(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
