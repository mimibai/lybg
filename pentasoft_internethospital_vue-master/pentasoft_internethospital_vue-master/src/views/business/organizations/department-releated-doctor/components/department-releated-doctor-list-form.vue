<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

          <FormItem label="科室" prop="departmentId">
            <Input type="number" v-model.number="form.departmentId" />
          </FormItem>
          <FormItem label="医生" prop="doctorId">
            <Input type="number" v-model.number="form.doctorId" />
          </FormItem>
          <FormItem label="是否为默认科室" prop="isDefaultDepartment">
            <Input v-model="form.isDefaultDepartment" />
          </FormItem>
          <FormItem label="科室上的医生排序" prop="sortingInDepartment">
            <Input type="number" v-model.number="form.sortingInDepartment" />
          </FormItem>
          <FormItem label="医生上的科室排序" prop="sortingInDoctor">
            <Input type="number" v-model.number="form.sortingInDoctor" />
          </FormItem>
          <FormItem label="医生定位的科室节点Id字符串" prop="locateDepartmentNodeIds">
            <Input v-model="form.locateDepartmentNodeIds" />
          </FormItem>
          <FormItem label="院内职务" prop="positionTitleId">
            <Input type="number" v-model.number="form.positionTitleId" />
          </FormItem>
          <FormItem label="子站点" prop="childSiteIds">
            <Input v-model="form.childSiteIds" />
          </FormItem>
          <FormItem label="子站点是否私有" prop="isChildSitePrivate">
            <Input v-model="form.isChildSitePrivate" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { departmentReleatedDoctorApi } from '@/api/organizations/department-releated-doctor';
export default {
  name: 'DepartmentReleatedDoctorListForm',
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
        // 主键id
        departmentReleatedDoctorId: null,
        // 科室
        departmentId: null,
        // 医生
        doctorId: null,
        // 是否为默认科室
        isDefaultDepartment: null,
        // 科室上的医生排序
        sortingInDepartment: null,
        // 医生上的科室排序
        sortingInDoctor: null,
        // 医生定位的科室节点Id字符串
        locateDepartmentNodeIds: null,
        // 院内职务
        positionTitleId: null,
        // 子站点
        childSiteIds: null,
        // 子站点是否私有
        isChildSitePrivate: null
      },
      // 表单验证
      formValidate: {
        // 主键id
        departmentReleatedDoctorId: [{ type: 'number', required: true, message: '请输入主键id', trigger: 'blur' }],
        // 科室
        departmentId: [{ type: 'number', required: true, message: '请输入科室', trigger: 'blur' }],
        // 医生
        doctorId: [{ type: 'number', required: true, message: '请输入医生', trigger: 'blur' }],
        // 是否为默认科室
        isDefaultDepartment: [{ required: true, message: '请输入是否为默认科室', trigger: 'blur' }],
        // 科室上的医生排序
        sortingInDepartment: [{ type: 'number', required: true, message: '请输入科室上的医生排序', trigger: 'blur' }],
        // 医生上的科室排序
        sortingInDoctor: [{ type: 'number', required: true, message: '请输入医生上的科室排序', trigger: 'blur' }],
        // 医生定位的科室节点Id字符串
        locateDepartmentNodeIds: [{ required: true, message: '请输入医生定位的科室节点Id字符串', trigger: 'blur' }],
        // 院内职务
        positionTitleId: [{ type: 'number', required: true, message: '请输入院内职务', trigger: 'blur' }],
        // 子站点
        childSiteIds: [{ required: true, message: '请输入子站点', trigger: 'blur' }],
        // 子站点是否私有
        isChildSitePrivate: [{ required: true, message: '请输入子站点是否私有', trigger: 'blur' }]
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
        this.$set(this.form, 'departmentReleatedDoctorId', newValue['departmentReleatedDoctorId']);
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
        // 主键id
        departmentReleatedDoctorId: null,
        // 科室
        departmentId: null,
        // 医生
        doctorId: null,
        // 是否为默认科室
        isDefaultDepartment: null,
        // 科室上的医生排序
        sortingInDepartment: null,
        // 医生上的科室排序
        sortingInDoctor: null,
        // 医生定位的科室节点Id字符串
        locateDepartmentNodeIds: null,
        // 院内职务
        positionTitleId: null,
        // 子站点
        childSiteIds: null,
        // 子站点是否私有
        isChildSitePrivate: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await departmentReleatedDoctorApi.addDepartmentReleatedDoctor(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await departmentReleatedDoctorApi.updateDepartmentReleatedDoctor(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
