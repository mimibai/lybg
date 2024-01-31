<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="门诊日志类型" prop="opschedulingLogTypeId">
        <Select v-model="form.opschedulingLogTypeId">
          <Option
            :key="item.value"
            :value="item.value"
            v-for="item in EnumOPSchedulingLogType"
            >{{ item.desc }}</Option
          >
        </Select>
      </FormItem>
      <FormItem label="操作类型" prop="opschedulingOperateTypeId">
        <Select v-model="form.opschedulingOperateTypeId">
          <Option
            :key="item.value"
            :value="item.value"
            v-for="item in EnumOPSchedulingOperateType"
            >{{ item.desc }}</Option
          >
        </Select>
      </FormItem>
      <FormItem label="操作记录" prop="objectModelDescription">
        <Input v-model="form.objectModelDescription" />
      </FormItem>
      <FormItem label="备注" prop="reMark">
        <Input v-model="form.reMark" />
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { oPSchedulingLogApi } from '@/api/scheduling/op-scheduling-log';
import { WX_OPSCHEDULINGLOG_TYPE, WX_OPSCHEDULINGOPRATE_TYPE } from '@/constants/enum-wx';

export default {
  name: 'OPSchedulingLogListForm',
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
        oPSchedulingLogId: null,
        // 门诊日志类型
        oPSchedulingLogTypeId: null,
        // 操作类型
        oPSchedulingOperateTypeId: null,
        // 操作主键
        objectId: null,
        // 操作对象
        objectModelJsonStr: null,
        // 操作记录
        objectModelDescription: null,
        // 用户ID
        userId: null,
        // 备注
        reMark: null
      },
      // 表单验证
      formValidate: {
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
          'opschedulingLogId',
          newValue['opschedulingLogId']
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
  computed: {
    EnumOPSchedulingLogType: function () {
      let array = [];
      for (const item in WX_OPSCHEDULINGLOG_TYPE) {
        let obj = {};
        obj.desc = WX_OPSCHEDULINGLOG_TYPE[item].desc;
        obj.value = WX_OPSCHEDULINGLOG_TYPE[item].value;
        array.push(obj);
      }
      return array;
    },
    EnumOPSchedulingOperateType: function () {
      let array = [];
      for (const item in WX_OPSCHEDULINGOPRATE_TYPE) {
        let obj = {};
        obj.desc = WX_OPSCHEDULINGOPRATE_TYPE[item].desc;
        obj.value = WX_OPSCHEDULINGOPRATE_TYPE[item].value;
        array.push(obj);
      }
      return array;
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
        oPSchedulingLogId: null,
        // 门诊日志类型
        oPSchedulingLogTypeId: null,
        // 操作类型
        oPSchedulingOperateTypeId: null,
        // 操作主键
        objectId: null,
        // 操作对象
        objectModelJsonStr: null,
        // 操作记录
        objectModelDescription: null,
        // 用户ID
        userId: null,
        // 备注
        reMark: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await oPSchedulingLogApi.addOPSchedulingLog(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await oPSchedulingLogApi.updateOPSchedulingLog(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
