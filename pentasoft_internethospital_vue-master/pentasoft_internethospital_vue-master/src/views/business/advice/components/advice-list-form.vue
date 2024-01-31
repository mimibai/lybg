<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="建议类型" prop="adviceTypeId">
        <Select class="form-width" v-model="form.adviceTypeId">
          <Option
            :value="item.value"
            v-for="item in adviceTypeListData"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </FormItem>
      <FormItem label="建议主题" prop="title">
        <Input v-model="form.title" />
      </FormItem>
      <FormItem label="编码" prop="code">
        <Input v-model="form.code" />
      </FormItem>
      <FormItem label="建议内容" prop="content">
        <Input v-model="form.content" />
      </FormItem>
      <FormItem label="发送人姓名" prop="sendRealName">
        <Input v-model="form.sendRealName" />
      </FormItem>
      <FormItem label="身份证号码" prop="idCardNo">
        <Input v-model="form.idCardNo" />
      </FormItem>
      <FormItem label="手机号码" prop="mobileNumber">
        <Input v-model="form.mobileNumber" />
      </FormItem>
      <FormItem label="其他联系方式" prop="otherContacts">
        <Input v-model="form.otherContacts" />
      </FormItem>
      <FormItem label="联系地址" prop="contactsAddress">
        <Input v-model="form.contactsAddress" />
      </FormItem>
      <FormItem label="电子邮箱" prop="email">
        <Input v-model="form.email" />
      </FormItem>
      <FormItem label="回复人姓名" prop="replyRealName">
        <Input v-model="form.replyRealName" />
      </FormItem>
      <FormItem label="回复内容" prop="replyContent">
        <Input v-model="form.replyContent" />
      </FormItem>
      <FormItem label="IP" prop="ip">
        <Input v-model="form.ip" />
      </FormItem>
      <FormItem label="IP来源" prop="ipSearch">
        <Input v-model="form.ipSearch" />
      </FormItem>
      <FormItem label="IP来源类型" prop="ipSearchType">
        <Input v-model="form.ipSearchType" />
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { adviceApi } from "@/api/advice";
export default {
  name: "AdviceListForm",
  components: {},
  props: {
    //是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true,
    },
    //更新的表单数据对象
    updateData: {
      type: Object,
    },
  },
  data() {
    return {
      adviceTypeListData: [],
      //表单数据
      form: {
        //建议类型
        adviceTypeId: null,
        //建议主题
        title: null,
        //编码
        code: null,
        //建议内容
        content: null,
        //发送人姓名
        sendRealName: null,
        //身份证号码
        idCardNo: null,
        //手机号码
        mobileNumber: null,
        //其他联系方式
        otherContacts: null,
        //联系地址
        contactsAddress: null,
        //电子邮箱
        email: null,
        //IP
        ip: null,
        //IP来源
        ipSearch: null,
        //IP来源类型
        ipSearchType: null,
      },
      //表单验证
      formValidate: {
        //建议类型
        adviceTypeId: [
          {
            type: "number",
            required: true,
            message: "请输入建议类型",
            trigger: "blur",
          },
        ],
        //建议主题
        title: [{ required: true, message: "请输入建议主题", trigger: "blur" }],
        //编码
        code: [{ required: false, message: "请输入编码", trigger: "blur" }],
        //建议内容
        content: [
          { required: true, message: "请输入建议内容", trigger: "blur" },
        ],
        //发送人姓名
        sendRealName: [
          { required: true, message: "请输入发送人姓名", trigger: "blur" },
        ],
        //身份证号码
        idCardNo: [
          { required: true, message: "请输入身份证号码", trigger: "blur" },
        ],
        //手机号码
        mobileNumber: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
        ],
        //其他联系方式
        otherContacts: [
          { required: true, message: "请输入其他联系方式", trigger: "blur" },
        ],
        //联系地址
        contactsAddress: [
          { required: true, message: "请输入联系地址", trigger: "blur" },
        ],
        //电子邮箱
        email: [{ required: true, message: "请输入电子邮箱", trigger: "blur" }],
        //IP
        ip: [{ required: true, message: "请输入IP", trigger: "blur" }],
        //IP来源
        ipSearch: [
          { required: true, message: "请输入IP来源", trigger: "blur" },
        ],
        //IP来源类型
        ipSearchType: [
          { required: true, message: "请输入IP来源类型", trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs["form"].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, "adviceId", newValue["adviceId"]);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
  },
  created() {},
  mounted() {
    this.initAdviceType();
  },
  methods: {
    async initAdviceType() {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500,
        };
        let result = await adviceApi.queryAdviceType(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.keyId,
            label: item.name,
          });
        });
        this.adviceTypeListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    cancel() {
      this.$emit("on-form-close");
    },
    save() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.isUpdate) {
            this.update();
          } else {
            this.add();
          }
        } else {
          this.$Message.error("参数验证错误，请仔细填写表单数据!");
        }
      });
    },
    resetForm() {
      this.form = {
        //建议类型
        adviceTypeId: null,
        //建议主题
        title: null,
        //编码
        code: null,
        //建议内容
        content: null,
        //发送人姓名
        sendRealName: null,
        //身份证号码
        idCardNo: null,
        //手机号码
        mobileNumber: null,
        //其他联系方式
        otherContacts: null,
        //联系地址
        contactsAddress: null,
        //电子邮箱
        email: null,
        //IP
        ip: null,
        //IP来源
        ipSearch: null,
        //IP来源类型
        ipSearchType: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await adviceApi.addAdvice(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await adviceApi.updateAdvice(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
