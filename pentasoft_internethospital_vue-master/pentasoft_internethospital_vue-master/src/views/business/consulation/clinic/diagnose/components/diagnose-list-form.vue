<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">

        </Col>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="名称" prop="code">
            <Input v-model="form.code" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="名称首字母" prop="pinyinInitials">
            <Input v-model="form.pinyinInitials" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <i-switch v-model="form.isDelete" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="诊断编码类型" prop="diagnoseCodeTypeId">
            <Input type="number" v-model.number="form.diagnoseCodeTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="拼音" prop="pinyin">
            <Input v-model="form.pinyin" />
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
import { diagnoseApi } from '@/api/clinic/diagnose';
export default {
  name: 'DiagnoseListForm',
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
        diagnoseId: null,
        // 名称
        name: null,
        // 名称
        code: null,
        // 名称首字母
        pinyinInitials: null,
        // 是否删除
        isDelete: null,
        // 诊断编码类型
        diagnoseCodeTypeId: null,
        // 拼音
        pinyin: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        diagnoseId: [
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
        this.$set(this.form, 'diagnoseId', newValue['diagnoseId']);
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
        diagnoseId: null,
        // 名称
        name: null,
        // 名称
        code: null,
        // 名称首字母
        pinyinInitials: null,
        // 是否删除
        isDelete: null,
        // 诊断编码类型
        diagnoseCodeTypeId: null,
        // 拼音
        pinyin: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await diagnoseApi.addDiagnose(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await diagnoseApi.updateDiagnose(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
