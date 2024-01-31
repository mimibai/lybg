<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="微信账号主键" prop="weiXinAccountId">
        <Input type="number" readonly v-model.number="form.weiXinAccountId" />
      </FormItem>
      <FormItem label="微信用户ID" prop="weiXinUserId">
        <Input type="number" v-model.number="form.weiXinUserId" />
      </FormItem>
      <FormItem label="微信要回复的消息ID" prop="weiXinInputContentId">
        <Input type="number" v-model.number="form.weiXinInputContentId" />
      </FormItem>
      <FormItem label="回复内容" prop="content">
        <Input v-model="form.content" />
      </FormItem>
      <FormItem label="回复人" prop="userId">
        <Input type="number" v-model.number="form.userId" />
      </FormItem>
      <FormItem label="是否删除" prop="isDelete">
        <Checkbox v-model="form.isDelete"></Checkbox>
      </FormItem>
      <FormItem label="微信号类别" prop="weiXinType">
        <Input type="number" v-model.number="form.weiXinType" />
      </FormItem>
      
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { wxReplyMsgApi } from "@/api/weixin/wx-reply-msg";
export default {
  name: "WxReplyMsgListForm",
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
        //微信要回复的消息ID
        weiXinInputContentId: null,
        //回复内容
        content: null,
        //回复人
        userId: null,
        //是否删除
        isDelete: null,
        //微信号类别
        weiXinType: null,
        //微信账号主键
        weiXinAccountId: null,
      },
      //表单验证
      formValidate: {
        //微信用户ID
        weiXinUserId: [
          {
            type: "number",
            required: true,
            message: "请输入微信用户ID",
            trigger: "blur",
          },
        ],
        //微信要回复的消息ID
        weiXinInputContentId: [
          {
            type: "number",
            required: true,
            message: "请输入微信要回复的消息ID",
            trigger: "blur",
          },
        ],
        //回复内容
        content: [
          { required: true, message: "请输入回复内容", trigger: "blur" },
        ],
        //回复人
        userId: [
          {
            type: "number",
            required: true,
            message: "请输入回复人",
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
        //微信号类别
        weiXinType: [
          {
            type: "number",
            required: true,
            message: "请输入微信号类别",
            trigger: "blur",
          },
        ],
        //微信账号主键
        weiXinAccountId: [
          {
            type: "number",
            required: true,
            message: "请输入微信账号主键",
            trigger: "blur",
          },
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
        this.$set(this.form, "id", newValue["id"]);
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
        id: null,
        //微信用户ID
        weiXinUserId: null,
        //微信要回复的消息ID
        weiXinInputContentId: null,
        //回复内容
        content: null,
        //回复人
        userId: null,
        //是否删除
        isDelete: null,
        //创建时间
        create_time: null,
        //修改时间
        update_time: null,
        //微信号类别
        weiXinType: null,
        //微信账号主键
        weiXinAccountId: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await wxReplyMsgApi.addWeixinreplymsg(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await wxReplyMsgApi.updateWeixinreplymsg(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
