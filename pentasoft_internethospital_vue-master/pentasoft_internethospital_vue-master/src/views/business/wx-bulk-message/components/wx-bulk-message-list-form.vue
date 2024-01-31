<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
       <FormItem label="微信账号" prop="weiXinAccountId">
        <Input type="number" v-model.number="form.weiXinAccountId" />
      </FormItem>
      <FormItem label="群发的消息ID" prop="msgID">
        <Input v-model="form.msgID" />
      </FormItem>
      <FormItem label="群发状态" prop="status">
        <Input v-model="form.status" />
      </FormItem>
      <FormItem label="粉丝数" prop="totalCount">
        <Input type="number" v-model.number="form.totalCount" />
      </FormItem>
      <FormItem label="准备发送的粉丝数" prop="filterCount">
        <Input type="number" v-model.number="form.filterCount" />
      </FormItem>
      <FormItem label="发送成功的粉丝数" prop="sentCount">
        <Input type="number" v-model.number="form.sentCount" />
      </FormItem>
      <FormItem label="发送失败的粉丝数" prop="errorCount">
        <Input type="number" v-model.number="form.errorCount" />
      </FormItem>
      <FormItem label="素材ID" prop="weiXinMaterialId">
        <Input type="number" v-model.number="form.weiXinMaterialId" />
      </FormItem>
      <FormItem label="用户" prop="userId">
        <Input type="number" v-model.number="form.userId" />
      </FormItem>
      <FormItem label="Media_Id" prop="media_Id">
        <Input v-model="form.media_Id" />
      </FormItem>     
      <FormItem label="是否删除" prop="isDelete">
        <Checkbox v-model="form.isDelete"></Checkbox>
      </FormItem>
      <FormItem label="发送的文本消息" prop="content">
        <Input v-model="form.content" />
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { wxBulkMessageApi } from "@/api/weixin/wx-bulk-message";
export default {
  name: "WxBulkMessageListForm",
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
      //表单数据
      form: {
        //群发的消息ID
        msgID: null,
        //群发状态
        status: null,
        //粉丝数
        totalCount: null,
        //准备发送的粉丝数
        filterCount: null,
        //发送成功的粉丝数
        sentCount: null,
        //发送失败的粉丝数
        errorCount: null,
        //素材ID
        weiXinMaterialId: null,
        //用户
        userId: null,
        //Media_Id
        media_Id: null,
        //微信账号
        weiXinAccountId: null,
        //是否删除
        isDelete: null,
        //创建时间
        create_time: null,
        //修改时间
        update_time: null,
        //发送的文本消息
        content: null,
      },
      //表单验证
      formValidate: {
        //群发的消息ID
        msgID: [
          { required: true, message: "请输入群发的消息ID", trigger: "blur" },
        ],
        //群发状态
        status: [
          { required: true, message: "请输入群发状态", trigger: "blur" },
        ],
        //粉丝数
        totalCount: [
          {
            type: "number",
            required: true,
            message: "请输入粉丝数",
            trigger: "blur",
          },
        ],
        //准备发送的粉丝数
        filterCount: [
          {
            type: "number",
            required: true,
            message: "请输入准备发送的粉丝数",
            trigger: "blur",
          },
        ],
        //发送成功的粉丝数
        sentCount: [
          {
            type: "number",
            required: true,
            message: "请输入发送成功的粉丝数",
            trigger: "blur",
          },
        ],
        //发送失败的粉丝数
        errorCount: [
          {
            type: "number",
            required: true,
            message: "请输入发送失败的粉丝数",
            trigger: "blur",
          },
        ],
        //素材ID
        weiXinMaterialId: [
          {
            type: "number",
            required: true,
            message: "请输入素材ID",
            trigger: "blur",
          },
        ],
        //用户
        userId: [
          {
            type: "number",
            required: true,
            message: "请输入用户",
            trigger: "blur",
          },
        ],
        //Media_Id
        media_Id: [
          { required: true, message: "请输入Media_Id", trigger: "blur" },
        ],
        //微信账号
        weiXinAccountId: [
          {
            type: "number",
            required: true,
            message: "请输入微信账号",
            trigger: "blur",
          },
        ],
        //是否删除
        isDelete: [
          { required: true, message: "请输入是否删除", trigger: "blur" },
        ],
        //创建时间
        create_time: [
          { required: true, message: "请输入创建时间", trigger: "blur" },
        ],
        //修改时间
        update_time: [
          { required: true, message: "请输入修改时间", trigger: "blur" },
        ],
        //发送的文本消息
        content: [
          { required: true, message: "请输入发送的文本消息", trigger: "blur" },
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
        this.$set(this.form, "weiXinBulkMessageId", newValue["weiXinBulkMessageId"]);
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
  mounted() {},
  methods: {
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
        //主键
        weiXinBulkMessageId: null,
        //群发的消息ID
        msgID: null,
        //群发状态
        status: null,
        //粉丝数
        totalCount: null,
        //准备发送的粉丝数
        filterCount: null,
        //发送成功的粉丝数
        sentCount: null,
        //发送失败的粉丝数
        errorCount: null,
        //素材ID
        weiXinMaterialId: null,
        //用户
        userId: null,
        //Media_Id
        media_Id: null,
        //微信账号
        weiXinAccountId: null,
        //是否删除
        isDelete: null,
        //创建时间
        create_time: null,
        //修改时间
        update_time: null,
        //发送的文本消息
        content: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await wxBulkMessageApi.addWeixinbulkmessage(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await wxBulkMessageApi.updateWeixinbulkmessage(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
