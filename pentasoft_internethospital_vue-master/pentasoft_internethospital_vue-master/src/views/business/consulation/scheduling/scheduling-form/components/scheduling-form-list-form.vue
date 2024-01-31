<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

          <FormItem label="表单名称" prop="schedulingFormName">
            <Input v-model="form.schedulingFormName" />
          </FormItem>
          <FormItem label="显示的Id集合" prop="showWeekIds">
            <Input v-model="form.showWeekIds" />
          </FormItem>
          <FormItem label="周六是否显示下周" prop="isShowNextWeekWhenSat">
            <Input v-model="form.isShowNextWeekWhenSat" />
          </FormItem>
          <FormItem label="周日是否显示下周" prop="isShowNextWeekWhenSun">
            <Input v-model="form.isShowNextWeekWhenSun" />
          </FormItem>
          <FormItem label="是否显示切换按钮" prop="isShowChangeButton">
            <Input v-model="form.isShowChangeButton" />
          </FormItem>
          <FormItem label="向前几周" prop="beforeWeeks">
            <Input type="number" v-model.number="form.beforeWeeks" />
          </FormItem>
          <FormItem label="向后几周" prop="afterWeeks">
            <Input type="number" v-model.number="form.afterWeeks" />
          </FormItem>
          <FormItem label="是否删除" prop="isDelete">
            <Input v-model="form.isDelete" />
          </FormItem>
          <FormItem label="是否默认" prop="isDefault">
            <Input v-model="form.isDefault" />
          </FormItem>
          <FormItem label="排序字段" prop="sorting">
            <Input type="number" v-model.number="form.sorting" />
          </FormItem>
          <FormItem label="显示的方式Id" prop="schedulingFormShowTypeId">
            <Input type="number" v-model.number="form.schedulingFormShowTypeId" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { schedulingFormApi } from '@/api/scheduling/scheduling-form';
export default {
  name: 'SchedulingFormListForm',
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
        schedulingFormId: null,
        // 表单名称
        schedulingFormName: null,
        // 显示的Id集合
        showWeekIds: null,
        // 周六是否显示下周
        isShowNextWeekWhenSat: null,
        // 周日是否显示下周
        isShowNextWeekWhenSun: null,
        // 是否显示切换按钮
        isShowChangeButton: null,
        // 向前几周
        beforeWeeks: null,
        // 向后几周
        afterWeeks: null,
        // 是否删除
        isDelete: null,
        // 是否默认
        isDefault: null,
        // 排序字段
        sorting: null,
        // 显示的方式Id
        schedulingFormShowTypeId: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        schedulingFormId: [{ type: 'number', required: true, message: '请输入主键Id', trigger: 'blur' }],
        // 表单名称
        schedulingFormName: [{ required: true, message: '请输入表单名称', trigger: 'blur' }],
        // 显示的Id集合
        showWeekIds: [{ required: true, message: '请输入显示的Id集合', trigger: 'blur' }],
        // 周六是否显示下周
        isShowNextWeekWhenSat: [{ required: true, message: '请输入周六是否显示下周', trigger: 'blur' }],
        // 周日是否显示下周
        isShowNextWeekWhenSun: [{ required: true, message: '请输入周日是否显示下周', trigger: 'blur' }],
        // 是否显示切换按钮
        isShowChangeButton: [{ required: true, message: '请输入是否显示切换按钮', trigger: 'blur' }],
        // 向前几周
        beforeWeeks: [{ type: 'number', required: true, message: '请输入向前几周', trigger: 'blur' }],
        // 向后几周
        afterWeeks: [{ type: 'number', required: true, message: '请输入向后几周', trigger: 'blur' }],
        // 是否删除
        isDelete: [{ required: true, message: '请输入是否删除', trigger: 'blur' }],
        // 是否默认
        isDefault: [{ required: true, message: '请输入是否默认', trigger: 'blur' }],
        // 排序字段
        sorting: [{ type: 'number', required: true, message: '请输入排序字段', trigger: 'blur' }],
        // 显示的方式Id
        schedulingFormShowTypeId: [{ type: 'number', required: true, message: '请输入显示的方式Id', trigger: 'blur' }]
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
        this.$set(this.form, 'schedulingFormId', newValue['schedulingFormId']);
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
        schedulingFormId: null,
        // 表单名称
        schedulingFormName: null,
        // 显示的Id集合
        showWeekIds: null,
        // 周六是否显示下周
        isShowNextWeekWhenSat: null,
        // 周日是否显示下周
        isShowNextWeekWhenSun: null,
        // 是否显示切换按钮
        isShowChangeButton: null,
        // 向前几周
        beforeWeeks: null,
        // 向后几周
        afterWeeks: null,
        // 是否删除
        isDelete: null,
        // 是否默认
        isDefault: null,
        // 排序字段
        sorting: null,
        // 显示的方式Id
        schedulingFormShowTypeId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await schedulingFormApi.addSchedulingForm(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await schedulingFormApi.updateSchedulingForm(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
