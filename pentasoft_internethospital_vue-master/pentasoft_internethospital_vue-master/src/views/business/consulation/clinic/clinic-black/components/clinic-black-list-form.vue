<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <
        </Col>
        <Col span="12">
          <FormItem label="患者Id" prop="patientId">
            <Input type="number" v-model.number="form.patientId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="身份证号" prop="iDCardNo">
            <Input v-model="form.iDCardNo" />
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
          <FormItem label="医生Id" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="原因" prop="reason">
            <Input v-model="form.reason" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="加入日期" prop="joinDate">
            <DatePicker
              type="datetime"
              placeholder="请选择加入日期"
              :value="form.joinDate"
               @on-change="form.joinDate=$event"
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
          <FormItem label="门诊医生Id" prop="oPDoctorId">
            <Input type="number" v-model.number="form.oPDoctorId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊科室Id" prop="oPDepartmentId">
            <Input type="number" v-model.number="form.oPDepartmentId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="操作用户" prop="operateUserId">
            <Input type="number" v-model.number="form.operateUserId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="黑名单类型" prop="clinicBlcakTypeId">
            <Input type="number" v-model.number="form.clinicBlcakTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="黑名单用户" prop="clinicBlcakUserId">
            <Input type="number" v-model.number="form.clinicBlcakUserId" />
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
import { clinicBlackApi } from '@/api/clinic/clinic-black';
export default {
  name: 'ClinicBlackListForm',
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
        clinicBlcakId: null,
        // 患者Id
        patientId: null,
        // 身份证号
        iDCardNo: null,
        // 科室Id
        departmentId: null,
        // 医生Id
        doctorId: null,
        // 原因
        reason: null,
        // 加入日期
        joinDate: null,
        // 是否删除
        isDelete: null,
        // 门诊医生Id
        oPDoctorId: null,
        // 门诊科室Id
        oPDepartmentId: null,
        // 操作用户
        operateUserId: null,
        // 黑名单类型
        clinicBlcakTypeId: null,
        // 黑名单用户
        clinicBlcakUserId: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        clinicBlcakId: [
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
        this.$set(this.form, 'clinicBlackId', newValue['clinicBlackId']);
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
        clinicBlcakId: null,
        // 患者Id
        patientId: null,
        // 身份证号
        iDCardNo: null,
        // 科室Id
        departmentId: null,
        // 医生Id
        doctorId: null,
        // 原因
        reason: null,
        // 加入日期
        joinDate: null,
        // 是否删除
        isDelete: null,
        // 门诊医生Id
        oPDoctorId: null,
        // 门诊科室Id
        oPDepartmentId: null,
        // 操作用户
        operateUserId: null,
        // 黑名单类型
        clinicBlcakTypeId: null,
        // 黑名单用户
        clinicBlcakUserId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await clinicBlackApi.addClinicBlack(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await clinicBlackApi.updateClinicBlack(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
