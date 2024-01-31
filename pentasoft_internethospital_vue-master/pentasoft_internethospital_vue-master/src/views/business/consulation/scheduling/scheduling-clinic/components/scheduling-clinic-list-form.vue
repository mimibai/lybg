<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
          <FormItem label="简称" prop="shortName">
            <Input v-model="form.shortName" />
          </FormItem>
          <FormItem label="描述" prop="description">
            <Input v-model="form.description" />
          </FormItem>
          <FormItem label="排序" prop="sorting">
            <Input type="number" v-model.number="form.sorting" />
          </FormItem>
          <FormItem label="编码" prop="code">
            <Input v-model="form.code" />
          </FormItem>
          <FormItem label="适用科室Id集合" prop="departmentIds">
            <Input v-model="form.departmentIds" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { schedulingClinicApi } from '@/api/scheduling/scheduling-clinic';
export default {
  name: 'SchedulingClinicListForm',
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
        schedulingClinicId: null,
        // 名称
        name: null,
        // 简称
        shortName: null,
        // 描述
        description: null,
        // 排序
        sorting: null,
        // 编码
        code: null,
        // 适用科室Id集合
        departmentIds: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        schedulingClinicId: [{ type: 'number', required: true, message: '请输入主键Id', trigger: 'blur' }],
        // 名称
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        // 简称
        shortName: [{ required: true, message: '请输入简称', trigger: 'blur' }],
        // 描述
        description: [{ required: true, message: '请输入描述', trigger: 'blur' }],
        // 排序
        sorting: [{ type: 'number', required: true, message: '请输入排序', trigger: 'blur' }],
        // 编码
        code: [{ required: true, message: '请输入编码', trigger: 'blur' }],
        // 适用科室Id集合
        departmentIds: [{ required: true, message: '请输入适用科室Id集合', trigger: 'blur' }]
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
        this.$set(this.form, 'schedulingClinicId', newValue['schedulingClinicId']);
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
        schedulingClinicId: null,
        // 名称
        name: null,
        // 简称
        shortName: null,
        // 描述
        description: null,
        // 排序
        sorting: null,
        // 编码
        code: null,
        // 适用科室Id集合
        departmentIds: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await schedulingClinicApi.addSchedulingClinic(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await schedulingClinicApi.updateSchedulingClinic(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
