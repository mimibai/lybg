<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="24">
          <FormItem label="自有应用Id" prop="appPlatformAccountId">
            <PlatformSelect v-model="form.appPlatformAccountId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="小程序账号" prop="weiXinAccountId">
            <WxAccountSelect v-model="form.weiXinAccountId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="页面类型" prop="pageTypeId">
            <EnumSelect v-model="form.pageTypeId" code="AppletPageTypeEnum" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="页面所属角色" prop="showRoleIds">
            <RoleLookUp v-model="form.showRoleIdArray" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="是否登录" prop="isLogon">
            <Checkbox v-model="form.isLogon"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.isLogon">
        <Col span="12">
          <FormItem label="访问限制类型" prop="logonRestrictionTypeId">
            <EnumSelect
              v-model="form.logonRestrictionTypeId"
              code="AccessRestrictionTypeEnum"
            />
          </FormItem>
        </Col>
        <Col span="12" v-if="form.logonRestrictionTypeId === 2">
          <FormItem label="指定用户类型" prop="logonRestrictionUserIdentityIds">
            <EnumLookUp
              v-model="form.logonRestrictionUserIdentityIdArray"
              code="UserIdentityTypeEnum"
            />
          </FormItem>
        </Col>
        <Col span="12" v-if="form.logonRestrictionTypeId === 3">
          <FormItem label="指定角色" prop="logonRestrictionRoleIds">
            <RoleLookUp v-model="form.logonRestrictionRoleIdArray" />
          </FormItem>
        </Col>
        <Col span="12" v-if="form.logonRestrictionTypeId === 4">
          <FormItem label="指定用户" prop="logonRestrictionUserIds">
            <EmployeeLookUp v-model="form.logonRestrictionUserIdArray" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="适用站点" prop="siteIds">
            <SiteLookUp v-model="form.siteIdArray" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="适用栏目" prop="columnIds">
            <ColumnLookUp v-model="form.columnIdArray" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="模块背景色" prop="backgroundColor">
            <ColorPicker v-model="form.backgroundColor" recommend></ColorPicker>
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
          <FormItem label="是否没有底部导航" prop="isNoHaveTabbar">
            <Checkbox v-model="form.isNoHaveTabbar"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否为体验版展示" prop="isDevelop">
            <Checkbox v-model="form.isDevelop"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12"> </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="备注" prop="remark">
            <Input type="textarea" :rows="5" v-model="form.remark"></Input>
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
import { appPageApi } from "@/api/app/app-page";
import EnumSelect from "@/components/drop-down-select/enum-select";
import PlatformSelect from "@/components/drop-down-select/platform-select";
import WxAccountSelect from "@/components/drop-down-select/wx-account-select";
import RoleLookUp from "@/components/look-up/role-look-up";
import SiteLookUp from "@/components/look-up/site-look-up";
import ColumnLookUp from "@/components/look-up/column-look-up";
import EmployeeLookUp from "@/components/look-up/employee-look-up";
import EnumLookUp from "@/components/look-up/enum-look-up";
export default {
  name: "AppPageListForm",
  components: {
    EnumSelect,
    PlatformSelect,
    WxAccountSelect,
    RoleLookUp,
    SiteLookUp,
    ColumnLookUp,
    EmployeeLookUp,
    EnumLookUp,
  },
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
        //主键Id
        appPageId: null,
        //自有应用Id
        appPlatformAccountId: null,
        //小程序账号
        weiXinAccountId: null,
        //页面类型
        pageTypeId: null,
        //名称
        name: null,
        //适用站点
        siteIds: null,
        siteIdArray: [],
        //适用栏目
        columnIds: null,
        columnIdArray: [],
        //备注
        remark: null,
        //是否删除
        isDelete: null,
        //屏幕类型
        splashScreenTypeId: null,
        //是否登录
        isLogon: null,
        //访问限制类型  枚举：1、登录用户，2、角色类型，3、指定角色，4、指定用户
        logonRestrictionTypeId: null,
        //指定用户类型
        logonRestrictionUserIdentityIds: null,
        logonRestrictionUserIdentityIdArray: [],
        //指定角色
        logonRestrictionRoleIds: null,
        logonRestrictionRoleIdArray: [],
        //指定用户
        logonRestrictionUserIds: null,
        logonRestrictionUserIdArray: [],
        //模块背景色
        backgroundColor: "#2D8CF0",
        //页面所属角色
        showRoleIds: null,
        showRoleIdArray: [],
        //是否没有底部导航
        isNoHaveTabbar: null,
        //是否为体验版展示
        isDevelop: null,
      },
      //表单验证
      formValidate: {
        //自有应用Id
        appPlatformAccountId: [
          {
            type: "number",
            required: true,
            message: "请选择自有应用",
            trigger: "blur",
          },
        ],
        //小程序账号
        weiXinAccountId: [
          {
            type: "number",
            required: true,
            message: "请选择小程序账号",
            trigger: "blur",
          },
        ],
        //页面类型
        pageTypeId: [
          {
            type: "number",
            required: true,
            message: "请选择页面类型",
            trigger: "blur",
          },
        ],
        //名称
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        //适用站点
        siteIdArray: [
          { required: true, message: "请选择适用站点", trigger: "blur" },
        ],
        //适用栏目
        columnIdArray: [
          { required: true, message: "请选择适用栏目", trigger: "blur" },
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
        this.$set(this.form, "appPageId", newValue["appPageId"]);
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
          for (let k in this.form) {
            if (this.form[k]) {
              if (k == "siteIdArray") {
                this.$set(this.form, "siteIds", this.form[k].join(","));
              }
              if (k == "columnIdArray") {
                this.$set(this.form, "columnIds", this.form[k].join(","));
              }
              if (k == "logonRestrictionUserIdentityIdArray") {
                this.$set(
                  this.form,
                  "logonRestrictionUserIdentityIds",
                  this.form[k].join(",")
                );
              }
              if (k == "logonRestrictionRoleIdArray") {
                this.$set(
                  this.form,
                  "logonRestrictionRoleIds",
                  this.form[k].join(",")
                );
              }
              if (k == "logonRestrictionUserIdArray") {
                this.$set(
                  this.form,
                  "logonRestrictionUserIds",
                  this.form[k].join(",")
                );
              }
              if (k == "showRoleIdArray") {
                this.$set(this.form, "showRoleIds", this.form[k].join(","));
              }
            }
          }
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
        //主键Id
        appPageId: null,
        //自有应用Id
        appPlatformAccountId: null,
        //小程序账号
        weiXinAccountId: null,
        //页面类型
        pageTypeId: null,
        //名称
        name: null,
        //适用站点
        siteIds: null,
        siteIdArray: [],
        //适用栏目
        columnIds: null,
        columnIdArray: [],
        //备注
        remark: null,
        //是否删除
        isDelete: null,
        //屏幕类型
        splashScreenTypeId: null,
        //是否登录
        isLogon: null,
        //访问限制类型  枚举：1、登录用户，2、角色类型，3、指定角色，4、指定用户
        logonRestrictionTypeId: null,
        //指定用户类型
        logonRestrictionUserIdentityIds: null,
        logonRestrictionUserIdentityIdArray: [],
        //指定角色
        logonRestrictionRoleIds: null,
        logonRestrictionRoleIdArray: [],
        //指定用户
        logonRestrictionUserIds: null,
        logonRestrictionUserIdArray: [],
        //模块背景色
        backgroundColor: null,
        //页面所属角色
        showRoleIds: null,
        showRoleIdArray: [],
        //是否没有底部导航
        isNoHaveTabbar: null,
        //是否为体验版展示
        isDevelop: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await appPageApi.addAppPage(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await appPageApi.updateAppPage(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
