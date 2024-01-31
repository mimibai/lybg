<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="诊断时间" prop="clinicDate">
            <DatePicker
              type="datetime"
              placeholder="请选择诊断时间"
              :value="form.clinicDate"
              @on-change="form.clinicDate=$event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="问诊类型" prop="clinicTypeId">
            <Input type="number" v-model.number="form.clinicTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="问诊聊天类型" prop="clinicChatTypeId">
            <Input type="number" v-model.number="form.clinicChatTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="问诊状态" prop="clinicStateId">
            <Input type="number" v-model.number="form.clinicStateId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="科室" prop="departmentId">
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
          <FormItem label="医生" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="医生名字" prop="doctorName">
            <Input v-model="form.doctorName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否替诊" prop="isReplace">
            <i-switch v-model="form.isReplace" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="替诊医生" prop="replaceDoctorId">
            <Input type="number" v-model.number="form.replaceDoctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="替诊医生姓名" prop="replaceDoctorName">
            <Input v-model="form.replaceDoctorName" />
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
          <FormItem label="患者" prop="patientId">
            <Input type="number" v-model.number="form.patientId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者名字" prop="patientName">
            <Input v-model="form.patientName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者性别" prop="patientGenderId">
            <Input type="number" v-model.number="form.patientGenderId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者年龄" prop="patientAge">
            <Input type="number" v-model.number="form.patientAge" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者身份证号" prop="patientIDCard">
            <Input v-model="form.patientIDCard" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者头像" prop="patientAvatar">
            <Input v-model="form.patientAvatar" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="用户" prop="postUserId">
            <Input type="number" v-model.number="form.postUserId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者描述" prop="description">
            <Input v-model="form.description" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="曾经治疗情况和效果" prop="effects">
            <Input v-model="form.effects" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="帮助" prop="helps">
            <Input v-model="form.helps" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="答复人" prop="replyPersonId">
            <Input type="number" v-model.number="form.replyPersonId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="答复用户" prop="replyUserId">
            <Input type="number" v-model.number="form.replyUserId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="答复医生" prop="replyDoctorId">
            <Input type="number" v-model.number="form.replyDoctorId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="答复医生名字" prop="replyDoctorName">
            <Input v-model="form.replyDoctorName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="答复内容" prop="replyContent">
            <Input v-model="form.replyContent" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="答复最后时间" prop="replyLastDate">
            <DatePicker
              type="datetime"
              placeholder="请选择答复最后时间"
              :value="form.replyLastDate"
              @on-change="form.replyLastDate=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="问答结果内容" prop="clinicResult">
            <Input v-model="form.clinicResult" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="结束时间" prop="clinicResultDate">
            <DatePicker
              type="datetime"
              placeholder="请选择结束时间"
              :value="form.clinicResultDate"
              @on-change="form.clinicResultDate=$event"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="评价得分" prop="appraisalScore">
            <Input type="number" v-model.number="form.appraisalScore" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="评价内容" prop="appraisal">
            <Input v-model="form.appraisal" />
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
          <FormItem label="患者上传文件集合" prop="fileData">
            <Input v-model="form.fileData" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者手机号" prop="patientMobileNumber">
            <Input v-model="form.patientMobileNumber" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者快递地址" prop="patientExpressAddress">
            <Input v-model="form.patientExpressAddress" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="问诊功能类型 1在线问诊 2复诊处方"
            prop="clinicFunctionalTypeId"
          >
            <Input type="number" v-model.number="form.clinicFunctionalTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="复诊主键" prop="clinicPrescriptId">
            <Input type="number" v-model.number="form.clinicPrescriptId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者绑定的UserId" prop="patientUserId">
            <Input type="number" v-model.number="form.patientUserId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="医生绑定的UserId" prop="doctorUserId">
            <Input type="number" v-model.number="form.doctorUserId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊科室" prop="oPDepartmentId">
            <Input type="number" v-model.number="form.oPDepartmentId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="门诊医生" prop="oPDoctorId">
            <Input type="number" v-model.number="form.oPDoctorId" />
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
          <FormItem label="自定义表单主键" prop="generalFormResultId">
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
import { clinicRecordApi } from '@/api/clinic/clinic-record';
export default {
  name: 'ClinicRecordListForm',
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
        clinicRecordId: null,
        // 诊断时间
        clinicDate: null,
        // 问诊类型
        clinicTypeId: null,
        // 问诊聊天类型
        clinicChatTypeId: null,
        // 问诊状态
        clinicStateId: null,
        // 科室
        departmentId: null,
        // 科室名称
        departmentName: null,
        // 医生
        doctorId: null,
        // 医生名字
        doctorName: null,
        // 是否替诊
        isReplace: null,
        // 替诊医生
        replaceDoctorId: null,
        // 替诊医生姓名
        replaceDoctorName: null,
        // 价格
        price: null,
        // 患者
        patientId: null,
        // 患者名字
        patientName: null,
        // 患者性别
        patientGenderId: null,
        // 患者年龄
        patientAge: null,
        // 患者身份证号
        patientIDCard: null,
        // 患者头像
        patientAvatar: null,
        // 用户
        postUserId: null,
        // 患者描述
        description: null,
        // 曾经治疗情况和效果
        effects: null,
        // 帮助
        helps: null,
        // 答复人
        replyPersonId: null,
        // 答复用户
        replyUserId: null,
        // 答复医生
        replyDoctorId: null,
        // 答复医生名字
        replyDoctorName: null,
        // 答复内容
        replyContent: null,
        // 答复最后时间
        replyLastDate: null,
        // 问答结果内容
        clinicResult: null,
        // 结束时间
        clinicResultDate: null,
        // 评价得分
        appraisalScore: null,
        // 评价内容
        appraisal: null,
        // 是否删除
        isDelete: null,
        // 患者上传文件集合
        fileData: null,
        // 患者手机号
        patientMobileNumber: null,
        // 患者快递地址
        patientExpressAddress: null,
        // 问诊功能类型 1在线问诊 2复诊处方
        clinicFunctionalTypeId: null,
        // 复诊主键
        clinicPrescriptId: null,
        // 患者绑定的UserId
        patientUserId: null,
        // 医生绑定的UserId
        doctorUserId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 挂号主键
        clinicAppointmentId: null,
        // 自定义表单主键
        generalFormResultId: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        clinicRecordId: [
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
        this.$set(this.form, 'clinicRecordId', newValue['clinicRecordId']);
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
        clinicRecordId: null,
        // 诊断时间
        clinicDate: null,
        // 问诊类型
        clinicTypeId: null,
        // 问诊聊天类型
        clinicChatTypeId: null,
        // 问诊状态
        clinicStateId: null,
        // 科室
        departmentId: null,
        // 科室名称
        departmentName: null,
        // 医生
        doctorId: null,
        // 医生名字
        doctorName: null,
        // 是否替诊
        isReplace: null,
        // 替诊医生
        replaceDoctorId: null,
        // 替诊医生姓名
        replaceDoctorName: null,
        // 价格
        price: null,
        // 患者
        patientId: null,
        // 患者名字
        patientName: null,
        // 患者性别
        patientGenderId: null,
        // 患者年龄
        patientAge: null,
        // 患者身份证号
        patientIDCard: null,
        // 患者头像
        patientAvatar: null,
        // 用户
        postUserId: null,
        // 患者描述
        description: null,
        // 曾经治疗情况和效果
        effects: null,
        // 帮助
        helps: null,
        // 答复人
        replyPersonId: null,
        // 答复用户
        replyUserId: null,
        // 答复医生
        replyDoctorId: null,
        // 答复医生名字
        replyDoctorName: null,
        // 答复内容
        replyContent: null,
        // 答复最后时间
        replyLastDate: null,
        // 问答结果内容
        clinicResult: null,
        // 结束时间
        clinicResultDate: null,
        // 评价得分
        appraisalScore: null,
        // 评价内容
        appraisal: null,
        // 是否删除
        isDelete: null,
        // 患者上传文件集合
        fileData: null,
        // 患者手机号
        patientMobileNumber: null,
        // 患者快递地址
        patientExpressAddress: null,
        // 问诊功能类型 1在线问诊 2复诊处方
        clinicFunctionalTypeId: null,
        // 复诊主键
        clinicPrescriptId: null,
        // 患者绑定的UserId
        patientUserId: null,
        // 医生绑定的UserId
        doctorUserId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 挂号主键
        clinicAppointmentId: null,
        // 自定义表单主键
        generalFormResultId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await clinicRecordApi.addClinicRecord(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await clinicRecordApi.updateClinicRecord(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
