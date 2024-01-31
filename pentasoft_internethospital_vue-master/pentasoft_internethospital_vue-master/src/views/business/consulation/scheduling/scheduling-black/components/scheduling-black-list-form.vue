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
          <FormItem label="预约黑名单类型   枚举：1、多次违约，2、倒号嫌疑，3、虚假用户，4、其他原因" prop="schedulingBlackListTypeId">
            <Input type="number" v-model.number="form.schedulingBlackListTypeId" />
          </FormItem>
          <FormItem label="备注" prop="remark">
            <Input v-model="form.remark" />
          </FormItem>
          <FormItem label="加入时间" prop="joinDate">
            <Input v-model="form.joinDate" />
          </FormItem>
          <FormItem label="提交人" prop="posterId">
            <Input type="number" v-model.number="form.posterId" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { schedulingBlackListApi } from '@/api/scheduling/scheduling-black';
export default {
  name: 'SchedulingBlackListListForm',
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
        schedulingBlacklistId: null,
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
        // 预约黑名单类型   枚举：1、多次违约，2、倒号嫌疑，3、虚假用户，4、其他原因
        schedulingBlackListTypeId: null,
        // 备注
        remark: null,
        // 加入时间
        joinDate: null,
        // 提交人
        posterId: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        schedulingBlacklistId: [{ type: 'number', required: true, message: '请输入主键Id', trigger: 'blur' }],
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
        // 预约黑名单类型   枚举：1、多次违约，2、倒号嫌疑，3、虚假用户，4、其他原因
        schedulingBlackListTypeId: [{ type: 'number', required: true, message: '请输入预约黑名单类型   枚举：1、多次违约，2、倒号嫌疑，3、虚假用户，4、其他原因', trigger: 'blur' }],
        // 备注
        remark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        // 加入时间
        joinDate: [{ required: true, message: '请输入加入时间', trigger: 'blur' }],
        // 提交人
        posterId: [{ type: 'number', required: true, message: '请输入提交人', trigger: 'blur' }]
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
        this.$set(this.form, 'schedulingBlackListId', newValue['schedulingBlackListId']);
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
        schedulingBlacklistId: null,
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
        // 预约黑名单类型   枚举：1、多次违约，2、倒号嫌疑，3、虚假用户，4、其他原因
        schedulingBlackListTypeId: null,
        // 备注
        remark: null,
        // 加入时间
        joinDate: null,
        // 提交人
        posterId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await schedulingBlackListApi.addSchedulingBlackList(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await schedulingBlackListApi.updateSchedulingBlackList(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
