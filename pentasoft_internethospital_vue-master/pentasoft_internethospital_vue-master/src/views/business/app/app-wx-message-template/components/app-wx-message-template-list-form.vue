<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="标题" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="模板类型" prop="appWeiXinMessageTemplateTypeId">
            <Select v-model="form.appWeiXinMessageTemplateTypeId">
              <Option
                :key="item.id"
                :value="item.id"
                v-for="item in messageTemplateTypes"
                >{{ item.name }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="微信账号" prop="weiXinAccountId">
            <Select class="form-width" v-model="form.weiXinAccountId">
              <Option
                :value="item.value"
                v-for="item in wxAccountList"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="模板ID" prop="templateId">
            <Input v-model="form.templateId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="模板编号" prop="templateIdShort">
            <Input v-model="form.templateIdShort" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否消息通路" prop="isMessagePath">
            <Checkbox v-model="form.isMessagePath"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否可用" prop="isAvailable">
            <Checkbox v-model="form.isAvailable"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <template v-if="form.isMessagePath">
        <Row gutter="16">
          <Col span="14">
            <FormItem label="办事结果页样式Id" prop="resultPageStyleId">
              <Input v-model="form.resultPageStyleId" />
            </FormItem>
          </Col>
          <Col span="10"> 注：该模板进入办事结果页则必填 </Col>
        </Row>
        <Row gutter="16">
          <Col span="14">
            <FormItem label="办事记录样式Id" prop="dealMsgStyleId">
              <Input v-model="form.dealMsgStyleId" />
            </FormItem>
          </Col>
          <Col span="10"> 注：该模板进入办事记录页则必填 </Col>
        </Row>
        <Row gutter="16">
          <Col span="14">
            <FormItem label="页卡样式Id" prop="cardStyleId">
              <Input v-model="form.cardStyleId" />
            </FormItem>
          </Col>
          <Col span="10"> 注：该模板进入页卡则必填 </Col>
        </Row>
      </template>
      <Row>
        <Col span="12">
          <FormItem label="模板所属类型" prop="weiXinMessageTemplateTypeId">
            <Select
              class="form-width"
              v-model="form.weiXinMessageTemplateTypeId"
            >
              <Option
                :value="item.id"
                v-for="item in wxMessageTemplateTypeList"
                :key="item.id"
                >{{ item.name }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12" v-if="form.weiXinMessageTemplateTypeId == 2">
          <FormItem
            label="推送的公众号AppId"
            prop="weiXinMessageTemplateSendAppId"
          >
            <Input v-model="form.weiXinMessageTemplateSendAppId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="模板跳转类型" prop="weiXinMessageTemplateSkipTypeId">
            <Select
              class="form-width"
              v-model="form.weiXinMessageTemplateSkipTypeId"
            >
              <Option
                :value="item.id"
                v-for="item in wxMessageTemplateSkipTypeList"
                :key="item.id"
                >{{ item.name }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="跳转地址" prop="weiXinMessageTemplateSkipUrl">
            <Input v-model="form.weiXinMessageTemplateSkipUrl" />
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.weiXinMessageTemplateSkipTypeId === 1">
        <Col span="24">
          <FormItem
            label="跳转的小程序AppId"
            prop="weiXinMessageTemplateSkipAppId"
          >
            <Input v-model="form.weiXinMessageTemplateSkipAppId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="第三方标识" prop="thirdPartyCode">
            <Input v-model="form.thirdPartyCode" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者类型" prop="patientTypeId">
            <Select class="form-width" v-model="form.patientTypeId">
              <Option
                :value="item.id"
                v-for="item in patientTypeList"
                :key="item.id"
                >{{ item.name }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="">
            替换规则(请根据微信模板设置)：
            <div style="color: #f76416">
              <span
                >{1}患者姓名，{2}医生姓名，{3}预约日期，{4}预约时段，{5}费用，{6}科室名称，{7}科室地址</span
              >
              <br />
              <span
                >{8}时段附属内容，{9}预约号续时段附属内容，{10}号序，{11}第三方标识，{12}注册号</span
              >
              <br />
              <span
                >{13}门诊类型，{14}截止时间，{15}预约备注，{16}取消备注，{18}第三方接口时间</span
              >
              <br />
              <span
                >{19}患者建档号，{20}院区 {21}等待人数 {22}入院时间
                {23}出院提醒时间 {24}当前叫号 {25}预计就诊时间</span
              >
            </div>
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem label="模板内容" prop="templateContent">
            <Input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 10 }"
              placeholder=""
              v-model="form.templateContent"
            ></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="备注" prop="remark">
            <Input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder=""
              v-model="form.remark"
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
import { appWxMessageTemplateApi } from "@/api/weixin/app-wx-message-template";
import { wxAccountApi } from "@/api/weixin/wx-account";
import { enumApi } from "@/api/enum.js";
export default {
  name: "AppWxMessageTemplateListForm",
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
      messageTemplateTypes: [],
      //模板所属类型
      wxMessageTemplateTypeList: [],
      //模板跳转类型
      wxMessageTemplateSkipTypeList: [],
      patientTypeList: [],
      //表单数据
      form: {
        //标题
        name: null,
        //模板类型
        appWeiXinMessageTemplateTypeId: null,
        //模板编号
        templateIdShort: null,
        //模板真实ID
        templateId: null,
        //总发送数
        totalSendCount: null,
        //月发送数
        monthSendCount: null,
        //是否可用
        isAvailable: null,
        //备注
        reMark: null,
        //是否删除
        isDelete: null,
        //微信账号
        weiXinAccountId: null,
      },
      //表单验证
      formValidate: {
        //标题
        name: [{ required: true, message: "请输入标题", trigger: "blur" }],
        //模板类型
        appWeiXinMessageTemplateTypeId: [
          {
            type: "number",
            required: true,
            message: "请输入模板类型",
            trigger: "blur",
          },
        ],
        //模板编号
        templateIdShort: [
          { required: false, message: "请输入模板编号", trigger: "blur" },
        ],
        //模板真实ID
        templateId: [
          { required: true, message: "请输入模板真实ID", trigger: "blur" },
        ],

        //备注
        reMark: [{ required: true, message: "请输入备注", trigger: "blur" }],
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
        this.$set(
          this.form,
          "appWeiXinMessageTemplateId",
          newValue["appWeiXinMessageTemplateId"]
        );
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
  },
  computed: {},
  created() {
    this.initEnumData();
    this.initWxAccount();
  },
  mounted() {},
  methods: {
    /* -------------------------页面数据初始化 begin-------------------*/
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
    async initEnumData() {
      this.$Spin.show();
      try {
        let params =
          "AppWeiXinMessageTemplateTypeEnum%2CWeiXinMessageTemplateTypeEnum%2CWeiXinMessageTemplateSkipTypeEnum%2CPatientType";

        let result = await enumApi.getBatchEnumByCodes(params);
        this.messageTemplateTypes =
          result.data.AppWeiXinMessageTemplateTypeEnum;
        this.wxMessageTemplateTypeList =
          result.data.WeiXinMessageTemplateTypeEnum;
        this.wxMessageTemplateSkipTypeList =
          result.data.WeiXinMessageTemplateSkipTypeEnum;
        this.patientTypeList = result.data.PatientType;
      } finally {
        this.$Spin.hide();
      }
    },
    /* -------------------------页面数据初始化 end-------------------*/
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
        //标题
        name: null,
        //模板类型
        appWeiXinMessageTemplateTypeId: null,
        //模板编号
        templateIdShort: null,
        //模板真实ID
        templateId: null,
        //总发送数
        totalSendCount: null,
        //月发送数
        monthSendCount: null,
        //是否可用
        isAvailable: null,
        //备注
        reMark: null,
        //是否删除
        isDelete: null,
        //微信账号
        weiXinAccountId: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await appWxMessageTemplateApi.addAppweixinmessagetemplate(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await appWxMessageTemplateApi.updateAppweixinmessagetemplate(
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
