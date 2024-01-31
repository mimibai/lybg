<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="名称" prop="name">
        <Input v-model="form.name" />
      </FormItem>

      <FormItem label="换诊日期" prop="changeRestDateTime">
        <DatePicker
          placeholder="发布日期"
          split-panels
          type="datetime"
          :value="form.changeRestDateTime"
              @on-change="form.changeRestDateTime = $event"
          format="yyyy-MM-dd HH:mm:ss"
        ></DatePicker>
      </FormItem>
      <FormItem label="是否启用" prop="isDisable">
        <Checkbox v-model="form.isDisable"></Checkbox>
      </FormItem>
      <FormItem label="备注" prop="reMark">
        <Input v-model="form.reMark" />
      </FormItem>
      <FormItem label="是否删除" prop="isDelete">
        <Checkbox v-model="form.isDelete"></Checkbox>
      </FormItem>
      <FormItem label="是否清空换诊" prop="isClearChangeScheduling">
        <Checkbox v-model="form.isClearChangeScheduling"></Checkbox>
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { opSchedulingChangeApi } from '@/api/scheduling/op-scheduling-change';
import { utils } from '@/lib/util';
export default {
  name: 'OpSchedulingChangeListForm',
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
        oPSchedulingChangeId: null,
        // 名称
        name: null,
        // 操作日期
        operationDateTime: null,
        // 换诊日期
        changeRestDateTime: null,
        // 是否启用
        isDisable: null,
        // 备注
        reMark: null,
        // 是否删除
        isDelete: null,
        // 是否清空换诊
        isClearChangeScheduling: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        oPSchedulingChangeId: [
          {
            type: 'number',
            required: false,
            message: '请输入主键Id',
            trigger: 'blur'
          }
        ],
        // 名称
        name: [{ required: false, message: '请输入名称', trigger: 'blur' }],
        // 备注
        reMark: [{ required: false, message: '请输入备注', trigger: 'blur' }]
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
          'opschedulingChangeId',
          newValue['opschedulingChangeId']
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
      if (this.form.changeRestDateTime) {
        // 日期属性进行拦截格式化
        this.form.changeRestDateTime = utils.formatDate(
          this.form.changeRestDateTime
        );
      }
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
        oPSchedulingChangeId: null,
        // 名称
        name: null,
        // 操作日期
        operationDateTime: null,
        // 换诊日期
        changeRestDateTime: null,
        // 是否启用
        isDisable: null,
        // 备注
        reMark: null,
        // 是否删除
        isDelete: null,
        // 是否清空换诊
        isClearChangeScheduling: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await opSchedulingChangeApi.addOpSchedulingChange(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await opSchedulingChangeApi.updateOpSchedulingChange(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
