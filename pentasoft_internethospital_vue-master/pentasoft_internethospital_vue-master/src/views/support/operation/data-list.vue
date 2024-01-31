<template>
  <Card class="warp-card" dis-hover>
    <Form class="tools" inline>
      <FormItem>
        <Button
          @click="showModal"
          icon="md-refresh"
          type="primary"
          v-privilege="'smart-reload-search'"
          >执行</Button
        >
      </FormItem>
    </Form>
    <Alert>
      <h3>签名规则：</h3>
      <pre>
简介：为了防止用户信息被抓包获取后，进行信息篡改，以及伪装信息来源，需要对所有参数（不包括签名字段）进行加密和签名。

规则：
- data请使用客户端的公钥进行加密。
- sign将请求参数使用服务端提供的私钥进行签名。
签名算法：
· 参数名按固定ASCII顺序排序，使键值对的格式key=value拼接字符串（键值对使用&符号拼接）
· 参数名区分大小写
· 传送的sign参数不参与签名
签名有效期：
- 时间戳后5分钟内有效，超出需重新加密即签名
      </pre>
    </Alert>
    <Content style="background: #eee; padding: 20px">
      <Card :bordered="false">
        <div>结果：</div>
        <pre style="white-space: pre-wrap;">{{ result }}</pre>
      </Card>
    </Content>
    <Modal
      :closable="false"
      :mask-closable="false"
      :footer-hide="true"
      @on-cancel="editModal = false"
      title="数据管理"
      v-model="editModal"
    >
      <Form ref="form" :label-width="80" :model="form">
        <FormItem label="strJson">
          <Input
            :autosize="{ minRows: 20, maxRows: 50 }"
            placeholder="加密和签名后端额Json字符串"
            type="textarea"
            v-model="form.strJson"
          />
        </FormItem>
      </Form>
      <Row class="code-row-bg" justify="end" type="flex">
        <Button @click="editModal = false" style="margin-right: 10px"
          >取消</Button
        >
        <Button @click="validateForm" type="primary">保存</Button>
      </Row>
    </Modal>
  </Card>
</template>
<script>
import { operationApi } from '@/api/operation';
export default {
  name: 'OperationList',
  components: {},
  props: {},
  data () {
    return {
      // loading
      resultLoading: false,
      showResult: false,
      // 修改弹窗
      editModal: false,
      form: {
        strJson: ''
      },
      result: null,
      // 表单验证
      formValidate: {
        strJson: [
          {
            required: true,
            message: '请输入加密签名后的Json字符串',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created () {},
  mounted () {},
  methods: {
    showModal () {
      this.editModal = true;
    },
    // 修改
    validateForm () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.execute();
        } else {
          this.$Message.error('参数验证错误，请仔细填写表单数据!');
        }
      });
    },
    async execute () {
      try {
        this.$Spin.show();
        let result = await operationApi.executeData(this.form.strJson);
        this.result = result;
        this.editModal = false;
        this.$Spin.hide();
        if (result.success) {
          this.$Message.success('更新成功');
        } else {
          this.$Message.error('执行出错，请查看返回结果');
        }
      } catch (e) {
        // TODO zhuoda sentry
        console.error(e);
        this.$Message.error('请求错误');
      }
    }
  }
};
</script>
