<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="主键" prop="drugDeliveryRouteId">
            <Input type="number" v-model.number="form.drugDeliveryRouteId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="编码" prop="code">
            <Input v-model="form.code" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="药品限制类型" prop="drugTypeLimitId">
            <Input type="number" v-model.number="form.drugTypeLimitId" />
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
          <FormItem label="拼音首字母" prop="pinyinInitials">
            <Input v-model="form.pinyinInitials" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="拼音" prop="pinyin">
            <Input v-model="form.pinyin" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="药品剂型限制类型" prop="drugDosageFormTypeLimitId">
            <Input v-model="form.drugDosageFormTypeLimitId" />
          </FormItem>
        </Col>
      </Row>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { drugDeliveryRouteApi } from '@/api/clinic/drug-delivery-route';
export default {
  name: 'DrugDeliveryRouteListForm',
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
        // 主键
        drugDeliveryRouteId: null,
        // 名称
        name: null,
        // 编码
        code: null,
        // 药品限制类型
        drugTypeLimitId: null,
        // 是否删除
        isDelete: null,
        // 拼音首字母
        pinyinInitials: null,
        // 拼音
        pinyin: null,
        // 药品剂型限制类型
        drugDosageFormTypeLimitId: null
      },
      // 表单验证
      formValidate: {
        // 主键
        drugDeliveryRouteId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键',
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
        this.$set(
          this.form,
          'drugDeliveryRouteId',
          newValue['drugDeliveryRouteId']
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
        // 主键
        drugDeliveryRouteId: null,
        // 名称
        name: null,
        // 编码
        code: null,
        // 药品限制类型
        drugTypeLimitId: null,
        // 是否删除
        isDelete: null,
        // 拼音首字母
        pinyinInitials: null,
        // 拼音
        pinyin: null,
        // 药品剂型限制类型
        drugDosageFormTypeLimitId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await drugDeliveryRouteApi.addDrugDeliveryRoute(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await drugDeliveryRouteApi.updateDrugDeliveryRoute(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
