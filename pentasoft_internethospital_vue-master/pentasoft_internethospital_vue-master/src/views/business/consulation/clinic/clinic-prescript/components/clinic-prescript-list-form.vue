<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="主键" prop="clinicPrescriptId">
            <Input type="number" v-model.number="form.clinicPrescriptId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="问诊记录" prop="clinicRecordId">
            <Input type="number" v-model.number="form.clinicRecordId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="开药类型" prop="prescriptTypeId">
            <Input type="number" v-model.number="form.prescriptTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="开药状态" prop="prescriptStateTypeId">
            <Input type="number" v-model.number="form.prescriptStateTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="价格" prop="price">
            <Input type="number" v-model.number="form.price" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="药品序号集合" prop="medicineIdSet">
            <Input v-model="form.medicineIdSet" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="药品序号集合" prop="medicineSetJson">
            <Input v-model="form.medicineSetJson" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="挂号主键" prop="clinicAppointmentId">
            <Input type="number" v-model.number="form.clinicAppointmentId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="挂号第三方主键" prop="regId">
            <Input v-model="form.regId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="取药类型" prop="postTypeId">
            <Input type="number" v-model.number="form.postTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="邮寄地址" prop="receiveAddressId">
            <Input type="number" v-model.number="form.receiveAddressId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="邮寄地址" prop="receiveAddress">
            <Input v-model="form.receiveAddress" />
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
          <FormItem label="科室主键" prop="departmentId">
            <Input type="number" v-model.number="form.departmentId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="科室名称" prop="departmentName">
            <Input v-model="form.departmentName" />
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
          <FormItem label="医生" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="医生名称" prop="doctorName">
            <Input v-model="form.doctorName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="医生用户" prop="doctorUserId">
            <Input type="number" v-model.number="form.doctorUserId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者主键" prop="patientId">
            <Input type="number" v-model.number="form.patientId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者姓名" prop="patientName">
            <Input v-model="form.patientName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者第三方主键" prop="patientThirdCode">
            <Input v-model="form.patientThirdCode" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者性别" prop="patientGenderId">
            <Input type="number" v-model.number="form.patientGenderId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者年龄" prop="patientAge">
            <Input type="number" v-model.number="form.patientAge" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者身份证" prop="patientIDCard">
            <Input v-model="form.patientIDCard" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="提交用户" prop="postUserId">
            <Input type="number" v-model.number="form.postUserId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="诊断" prop="clinicResultId">
            <Input type="number" v-model.number="form.clinicResultId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="诊断结果" prop="clinicResult">
            <Input v-model="form.clinicResult" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="诊断日期" prop="clinicResultDate">
            <DatePicker
              type="datetime"
              format="yyyy-MM-dd"
              placeholder="请选择诊断日期"
               :value="form.clinicResultDate"
              @on-change="form.clinicResultDate=$event"
            ></DatePicker>
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
          <FormItem label="是否需要发票" prop="isReceipt">
            <i-switch v-model="form.isReceipt" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="发票邮箱" prop="receiptEmail">
            <Input v-model="form.receiptEmail" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="自定义表单主键" prop="generalFormResultId">
            <Input type="number" v-model.number="form.generalFormResultId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="外配提交是否成功" prop="isExternal">
            <i-switch v-model="form.isExternal" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否在院" prop="isHospital">
            <i-switch v-model="form.isHospital" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="挂号类型" prop="patientTypeId">
            <Input type="number" v-model.number="form.patientTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="医生修改药品序号集合" prop="doctorMedicineSetJson">
            <Input v-model="form.doctorMedicineSetJson" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="处方是否支付" prop="isPrescriptPay">
            <i-switch v-model="form.isPrescriptPay" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="外配上传处方识别" prop="externalDiscern">
            <Input v-model="form.externalDiscern" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="申请日期" prop="applyDate">
            <DatePicker
              type="datetime"
              format="yyyy-MM-dd"
              placeholder="请选择申请日期"
              :value="form.applyDate"
              @on-change="form.applyDate=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="驳回原因" prop="rejectReason">
            <Input v-model="form.rejectReason" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="CA签名结果字符串" prop="cASignRes">
            <Input v-model="form.cASignRes" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="CA签名原文串" prop="cASignOriginal">
            <Input v-model="form.cASignOriginal" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="签名数据ID" prop="cASignDataID">
            <Input v-model="form.cASignDataID" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="药品序号集合" prop="originalMedicineSetJson">
            <Input v-model="form.originalMedicineSetJson" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="处方支付状态" prop="paymentStateTypeId">
            <Input type="number" v-model.number="form.paymentStateTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="订单id" prop="orderId">
            <Input type="number" v-model.number="form.orderId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="原始诊断结果" prop="originalClinicResult">
            <Input v-model="form.originalClinicResult" />
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
import { clinicPrescriptApi } from '@/api/clinic/clinic-prescript';
export default {
  name: 'ClinicPrescriptListForm',
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
        // 主键
        clinicPrescriptId: null,
        // 问诊记录
        clinicRecordId: null,
        // 开药类型
        prescriptTypeId: null,
        // 开药状态
        prescriptStateTypeId: null,
        // 价格
        price: null,
        // 药品序号集合
        medicineIdSet: null,
        // 药品序号集合
        medicineSetJson: null,
        // 挂号主键
        clinicAppointmentId: null,
        // 挂号第三方主键
        regId: null,
        // 取药类型
        postTypeId: null,
        // 邮寄地址
        receiveAddressId: null,
        // 邮寄地址
        receiveAddress: null,
        // 门诊科室
        oPDepartmentId: null,
        // 科室主键
        departmentId: null,
        // 科室名称
        departmentName: null,
        // 门诊医生
        oPDoctorId: null,
        // 医生
        doctorId: null,
        // 医生名称
        doctorName: null,
        // 医生用户
        doctorUserId: null,
        // 患者主键
        patientId: null,
        // 患者姓名
        patientName: null,
        // 患者第三方主键
        patientThirdCode: null,
        // 患者性别
        patientGenderId: null,
        // 患者年龄
        patientAge: null,
        // 患者身份证
        patientIDCard: null,
        // 提交用户
        postUserId: null,
        // 诊断
        clinicResultId: null,
        // 诊断结果
        clinicResult: null,
        // 诊断日期
        clinicResultDate: null,
        // 是否删除
        isDelete: null,
        // 是否需要发票
        isReceipt: null,
        // 发票邮箱
        receiptEmail: null,
        // 自定义表单主键
        generalFormResultId: null,
        // 外配提交是否成功
        isExternal: null,
        // 是否在院
        isHospital: null,
        // 挂号类型
        patientTypeId: null,
        // 医生修改药品序号集合
        doctorMedicineSetJson: null,
        // 处方是否支付
        isPrescriptPay: null,
        // 外配上传处方识别
        externalDiscern: null,
        // 申请日期
        applyDate: null,
        // 驳回原因
        rejectReason: null,
        // CA签名结果字符串
        cASignRes: null,
        // CA签名原文串
        cASignOriginal: null,
        // 签名数据ID
        cASignDataID: null,
        // 药品序号集合
        originalMedicineSetJson: null,
        // 处方支付状态
        paymentStateTypeId: null,
        // 订单id
        orderId: null,
        // 原始诊断结果
        originalClinicResult: null
      },
      // 表单验证
      formValidate: {
        // 主键
        clinicPrescriptId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键',
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
          'clinicPrescriptId',
          newValue['clinicPrescriptId']
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
        // 主键
        clinicPrescriptId: null,
        // 问诊记录
        clinicRecordId: null,
        // 开药类型
        prescriptTypeId: null,
        // 开药状态
        prescriptStateTypeId: null,
        // 价格
        price: null,
        // 药品序号集合
        medicineIdSet: null,
        // 药品序号集合
        medicineSetJson: null,
        // 挂号主键
        clinicAppointmentId: null,
        // 挂号第三方主键
        regId: null,
        // 取药类型
        postTypeId: null,
        // 邮寄地址
        receiveAddressId: null,
        // 邮寄地址
        receiveAddress: null,
        // 门诊科室
        oPDepartmentId: null,
        // 科室主键
        departmentId: null,
        // 科室名称
        departmentName: null,
        // 门诊医生
        oPDoctorId: null,
        // 医生
        doctorId: null,
        // 医生名称
        doctorName: null,
        // 医生用户
        doctorUserId: null,
        // 患者主键
        patientId: null,
        // 患者姓名
        patientName: null,
        // 患者第三方主键
        patientThirdCode: null,
        // 患者性别
        patientGenderId: null,
        // 患者年龄
        patientAge: null,
        // 患者身份证
        patientIDCard: null,
        // 提交用户
        postUserId: null,
        // 诊断
        clinicResultId: null,
        // 诊断结果
        clinicResult: null,
        // 诊断日期
        clinicResultDate: null,
        // 是否删除
        isDelete: null,
        // 是否需要发票
        isReceipt: null,
        // 发票邮箱
        receiptEmail: null,
        // 自定义表单主键
        generalFormResultId: null,
        // 外配提交是否成功
        isExternal: null,
        // 是否在院
        isHospital: null,
        // 挂号类型
        patientTypeId: null,
        // 医生修改药品序号集合
        doctorMedicineSetJson: null,
        // 处方是否支付
        isPrescriptPay: null,
        // 外配上传处方识别
        externalDiscern: null,
        // 申请日期
        applyDate: null,
        // 驳回原因
        rejectReason: null,
        // CA签名结果字符串
        cASignRes: null,
        // CA签名原文串
        cASignOriginal: null,
        // 签名数据ID
        cASignDataID: null,
        // 药品序号集合
        originalMedicineSetJson: null,
        // 处方支付状态
        paymentStateTypeId: null,
        // 订单id
        orderId: null,
        // 原始诊断结果
        originalClinicResult: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await clinicPrescriptApi.addClinicPrescript(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await clinicPrescriptApi.updateClinicPrescript(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
