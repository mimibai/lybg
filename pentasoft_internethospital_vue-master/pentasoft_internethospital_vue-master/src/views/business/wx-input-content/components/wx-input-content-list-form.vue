<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="用户名称" prop="name">
        {{ form.weiXinUser != null ? form.weiXinUser.nickName : "" }}
      </FormItem>
      <FormItem label="微信账号" prop="name">
        {{ form.weiXinAccount.name }}
      </FormItem>
      <FormItem label="账号类型" prop="name">
        {{
          this.$enum.getDescByValue(
            "WX_ACCOUNT_TYPES",
            form.weiXinAccount.weiXinAccountTypeId
          )
        }}
      </FormItem>
      <FormItem label="发送内容" prop="name">
        {{ form.content }}
      </FormItem>
      <FormItem label="回复内容" prop="replyMsgContent">
        <Input
          v-model="form.replyMsgContent"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="请输入回复内容"
        ></Input>
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
import { WX_ACCOUNT_TYPES } from "@/constants/enum-wx";
export default {
  name: "WxInputContentListForm",
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
        //微信用户ID
        weiXinUserId: null,
        weiXinUser: {
          nickName: null,
          userId: null,
          isDelete: null,
          weiXinType: null,
        },
        //微信用户输入内容类型
        weiXinInputContentTypeId: null,
        //用户输入内容
        content: null,
        //用户点击的菜单ID
        weiXinMenuId: null,
        replyMsgContent: null,
        weiXinAccount: {
          id: null,
          name: null,
          weiXinTypeId: null,
          weiXinAccountTypeId: null,
          weiXinApplicationTypeId: null,
        },
      },
      //表单验证
      formValidate: {
        //用户输入内容
        content: [
          { required: true, message: "请输入用户输入内容", trigger: "blur" },
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
        id:null,
        //微信用户ID
        weiXinUserId: null,
        weiXinUser: {
          id: null,
          nickName: null,
          userId: null,
          isDelete: null,
          weiXinType: null,
        },
        //微信用户输入内容类型
        weiXinInputContentTypeId: null,
        //用户输入内容
        content: null,
        //用户点击的菜单ID
        weiXinMenuId: null,
        replyMsgContent: null,
        weiXinAccount: {
          id: null,
          name: null,
          weiXinTypeId: null,
          weiXinAccountTypeId: null,
          weiXinApplicationTypeId: null,
        },
      };
      this.$refs["form"].resetFields();
    },

    async update() {
      this.$Spin.show();
      let data = {
        weiXinUserId: this.form.weiXinUser.id,
        weiXinInputContentId: this.form.id,
        content: this.form.replyMsgContent,
      };
      let res = await wxReplyMsgApi.replyMsg(data);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
