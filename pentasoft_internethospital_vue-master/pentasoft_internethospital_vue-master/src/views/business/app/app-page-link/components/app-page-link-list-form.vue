<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="路径" prop="url">
            <Input v-model="form.url" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否启用" prop="isAvailable">
            <Checkbox v-model="form.isAvailable"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="描述" prop="description">
            <Input v-model="form.description" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="系统应用Id" prop="appPlatformAccountId">
            <Input type="number" v-model.number="form.appPlatformAccountId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="微信账号" prop="weiXinAccountId">
            <Input type="number" v-model.number="form.weiXinAccountId" />
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
import { appPageLinkApi } from '@/api/app/app-page-link';
export default {
  name: 'AppPageLinkListForm',
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
        appPageLinkId: null,
        // 名称
        name: null,
        // 路径
        url: null,
        // 是否启用
        isAvailable: null,
        // 描述
        description: null,
        // 系统应用Id
        appPlatformAccountId: null,
        // 微信账号
        weiXinAccountId: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        appPageLinkId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键Id',
            trigger: 'blur'
          }
        ],
        // 名称
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        // 路径
        url: [{ required: true, message: '请输入路径', trigger: 'blur' }],
        // 系统应用Id
        appPlatformAccountId: [
          {
            type: 'number',
            required: true,
            message: '请输入系统应用Id',
            trigger: 'blur'
          }
        ],
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
        this.$set(this.form, 'appPageLinkId', newValue['appPageLinkId']);
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
        appPageLinkId: null,
        // 名称
        name: null,
        // 路径
        url: null,
        // 是否启用
        isAvailable: null,
        // 描述
        description: null,
        // 系统应用Id
        appPlatformAccountId: null,
        // 微信账号
        weiXinAccountId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await appPageLinkApi.addAppPageLink(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await appPageLinkApi.updateAppPageLink(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
