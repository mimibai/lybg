<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="24">
          <FormItem label="标题" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem prop="weiXinAccountId" label="微信账号">
            <Select v-model="form.weiXinAccountId">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in wxAccountList"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="选择文章" prop="articleIds">
            <Input v-model.number="form.articleIds" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Divider style="color: red"
            >注：微信账号不填写为公用，所有微信账号都能使用</Divider
          >
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
import { WxAccountReleatedMaterialApi } from "@/api/weixin/wx-account-releated-material";
import { wxAccountApi } from "@/api/weixin/wx-account";
export default {
  name: "WxAccountReleatedMaterialListForm",
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
      wxAccountList: [],
      //表单数据
      form: {
        name: null,
        //微信账号
        weiXinAccountId: null,
        articleIds: null,
      },
      //表单验证
      formValidate: {
        //素材
        weiXinMaterialId: [
          {
            type: "number",
            required: true,
            message: "请输入素材",
            trigger: "blur",
          },
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
        this.$set(this.form, "weiXinAccountReleatedMaterialId", newValue["weiXinAccountReleatedMaterialId"]);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
  },
  created() {
    this.initWxAccount();
  },
  mounted() {},
  methods: {
    async initWxAccount() {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 100,
        };
        let result = await wxAccountApi.queryWeixinaccount(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.weiXinAccountId,
            label: item.name,
          });
        });
        this.wxAccountList = list;
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
        //主键
        weiXinAccountReleatedMaterialId: null,
        //素材
        weiXinMaterialId: null,
        //微信账号
        weiXinAccountId: null,
        //用户
        userId: null,
        //Media_Id
        media_Id: null,
        //是否删除
        isDelete: null,
        //创建时间
        create_time: null,
        //修改时间
        update_time: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await WxAccountReleatedMaterialApi.addWeixinaccountreleatedmaterial(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await WxAccountReleatedMaterialApi.updateWeixinaccountreleatedmaterial(
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