<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

          <FormItem label="出诊表单Id" prop="schedulingFormId">
            <Input type="number" v-model.number="form.schedulingFormId" />
          </FormItem>
          <FormItem label="显示名称" prop="showName">
            <Input v-model="form.showName" />
          </FormItem>
          <FormItem label="层级" prop="depth">
            <Input type="number" v-model.number="form.depth" />
          </FormItem>
          <FormItem label="父级Id" prop="parentId">
            <Input type="number" v-model.number="form.parentId" />
          </FormItem>
          <FormItem label="父级Id集合" prop="parentIds">
            <Input v-model="form.parentIds" />
          </FormItem>
          <FormItem label="科室集合" prop="departmentIds">
            <Input v-model="form.departmentIds" />
          </FormItem>
          <FormItem label="门诊专业Id集合" prop="schedulingSpecialtyIds">
            <Input v-model="form.schedulingSpecialtyIds" />
          </FormItem>
          <FormItem label="出诊级别Id集合" prop="schedulingLevelIds">
            <Input v-model="form.schedulingLevelIds" />
          </FormItem>
          <FormItem label="医疗职称Id集合" prop="professionalTitleIds">
            <Input v-model="form.professionalTitleIds" />
          </FormItem>
          <FormItem label="是否显示数据" prop="isDefault">
            <Input v-model="form.isDefault" />
          </FormItem>
          <FormItem label="是否删除" prop="isDelete">
            <Input v-model="form.isDelete" />
          </FormItem>
          <FormItem label="排序" prop="sorting">
            <Input type="number" v-model.number="form.sorting" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { schedulingFormDateApi } from '@/api/scheduling/scheduling-form-date';
export default {
  name: 'SchedulingFormDateListForm',
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
        schedulingFormDateId: null,
        // 出诊表单Id
        schedulingFormId: null,
        // 显示名称
        showName: null,
        // 层级
        depth: null,
        // 父级Id
        parentId: null,
        // 父级Id集合
        parentIds: null,
        // 科室集合
        departmentIds: null,
        // 门诊专业Id集合
        schedulingSpecialtyIds: null,
        // 出诊级别Id集合
        schedulingLevelIds: null,
        // 医疗职称Id集合
        professionalTitleIds: null,
        // 是否显示数据
        isDefault: null,
        // 是否删除
        isDelete: null,
        // 排序
        sorting: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        schedulingFormDateId: [{ type: 'number', required: true, message: '请输入主键Id', trigger: 'blur' }],
        // 出诊表单Id
        schedulingFormId: [{ type: 'number', required: true, message: '请输入出诊表单Id', trigger: 'blur' }],
        // 显示名称
        showName: [{ required: true, message: '请输入显示名称', trigger: 'blur' }],
        // 层级
        depth: [{ type: 'number', required: true, message: '请输入层级', trigger: 'blur' }],
        // 父级Id
        parentId: [{ type: 'number', required: true, message: '请输入父级Id', trigger: 'blur' }],
        // 父级Id集合
        parentIds: [{ required: true, message: '请输入父级Id集合', trigger: 'blur' }],
        // 科室集合
        departmentIds: [{ required: true, message: '请输入科室集合', trigger: 'blur' }],
        // 门诊专业Id集合
        schedulingSpecialtyIds: [{ required: true, message: '请输入门诊专业Id集合', trigger: 'blur' }],
        // 出诊级别Id集合
        schedulingLevelIds: [{ required: true, message: '请输入出诊级别Id集合', trigger: 'blur' }],
        // 医疗职称Id集合
        professionalTitleIds: [{ required: true, message: '请输入医疗职称Id集合', trigger: 'blur' }],
        // 是否显示数据
        isDefault: [{ required: true, message: '请输入是否显示数据', trigger: 'blur' }],
        // 是否删除
        isDelete: [{ required: true, message: '请输入是否删除', trigger: 'blur' }],
        // 排序
        sorting: [{ type: 'number', required: true, message: '请输入排序', trigger: 'blur' }]
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
        this.$set(this.form, 'schedulingFormDateId', newValue['schedulingFormDateId']);
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
        schedulingFormDateId: null,
        // 出诊表单Id
        schedulingFormId: null,
        // 显示名称
        showName: null,
        // 层级
        depth: null,
        // 父级Id
        parentId: null,
        // 父级Id集合
        parentIds: null,
        // 科室集合
        departmentIds: null,
        // 门诊专业Id集合
        schedulingSpecialtyIds: null,
        // 出诊级别Id集合
        schedulingLevelIds: null,
        // 医疗职称Id集合
        professionalTitleIds: null,
        // 是否显示数据
        isDefault: null,
        // 是否删除
        isDelete: null,
        // 排序
        sorting: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await schedulingFormDateApi.addSchedulingFormDate(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await schedulingFormDateApi.updateSchedulingFormDate(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
