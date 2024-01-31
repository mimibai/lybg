<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="应用AppId" prop="appId">
            <Input v-model="form.appId" />
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="应用名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否启用" prop="isOpen">
            <Checkbox v-model="form.isOpen"></Checkbox>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <Checkbox v-model="form.isDelete"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="即时通信IM配置" prop="iMAccountId">
            <Input type="number" v-model.number="form.iMAccountId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="实时音视TRTC频配置" prop="tRTCAccountId">
            <Input type="number" v-model.number="form.tRTCAccountId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="出诊数据来源" prop="schedulingSource">
            <i-switch size="large" v-model="form.schedulingSource">
              <span slot="open">出诊</span>
              <span slot="close">问诊</span>
            </i-switch>
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
import { appPlatformAccountApi } from '@/api/app/app-platform-account';
export default {
  name: 'AppPlatformAccountListForm',
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
        appPlatformAccountId: null,
        // 应用AppId
        appId: null,
        // 应用名称
        name: null,
        // 是否启用
        isOpen: null,
        // 是否删除
        isDelete: null,
        // 即时通信IM配置
        iMAccountId: null,
        // 实时音视TRTC频配置
        tRTCAccountId: null,
        // 出诊数据来源：true出诊，false在线问诊
        schedulingSource: false
      },
      // 表单验证
      formValidate: {
        // 应用名称
        name: [{ required: true, message: '请输入应用名称', trigger: 'blur' }]
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
          'appPlatformAccountId',
          newValue['appPlatformAccountId']
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
        appPlatformAccountId: null,
        // 应用AppId
        appId: null,
        // 应用名称
        name: null,
        // 是否启用
        isOpen: null,
        // 是否删除
        isDelete: null,
        // 即时通信IM配置
        iMAccountId: null,
        // 实时音视TRTC频配置
        tRTCAccountId: null,
        // 出诊数据来源：true出诊，false在线问诊
        schedulingSource: false
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await appPlatformAccountApi.addAppPlatformAccount(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await appPlatformAccountApi.updateAppPlatformAccount(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
