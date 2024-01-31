<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="消息模板Id" prop="appWeiXinMessageTemplateId">
            <Input
              type="number"
              v-model.number="form.appWeiXinMessageTemplateId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="发送状态" prop="weiXinTemplateMessageStatuTypeId">
            <Select v-model="form.weiXinTemplateMessageStatuTypeId">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in templateMsgStatuTypes"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="微信返回消息id" prop="msgID">
            <Input type="number" v-model.number="form.msgID" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <Checkbox v-model="form.isDelete"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="备注" prop="reMark">
            <Input
              v-model="form.reMark"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="请输入备注"
            ></Input>
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
import { wxTemplateMessageApi } from "@/api/weixin/wx-template-message";
import {WX_TEMPLATE_MESSAGE_STATU_TYPES} from "@/constants/enum-wx";
export default {
  name: "WxTemplateMessageListForm",
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
        //消息模板Id
        appWeiXinMessageTemplateId: null,
        //备注
        reMark: null,
        //是否删除
        isDelete: null,
        //办事结果页地址
        resultPageUrl: null,
      },
      //表单验证
      formValidate: {
        //消息模板Id
        appWeiXinMessageTemplateId: [
          {
            type: "number",
            required: true,
            message: "请输入消息模板Id",
            trigger: "blur",
          },
        ],
        //备注
        reMark: [{ required: false, message: "请输入备注", trigger: "blur" }],
        //办事结果页地址
        resultPageUrl: [
          { required: false, message: "请输入办事结果页地址", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    // 发送状态
    templateMsgStatuTypes: function () {
      let array = [];
      for (let item in WX_TEMPLATE_MESSAGE_STATU_TYPES) {
        let obj = {};
        obj.desc = WX_TEMPLATE_MESSAGE_STATU_TYPES[item].desc;
        obj.value = WX_TEMPLATE_MESSAGE_STATU_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs["form"].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, "weiXinTemplateMessageId", newValue["weiXinTemplateMessageId"]);
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
        //消息模板Id
        appWeiXinMessageTemplateId: null,
        //备注
        reMark: null,
        //是否删除
        isDelete: null,
        //办事结果页地址
        resultPageUrl: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await wxTemplateMessageApi.addWeixintemplatemessage(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await wxTemplateMessageApi.updateWeixintemplatemessage(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
