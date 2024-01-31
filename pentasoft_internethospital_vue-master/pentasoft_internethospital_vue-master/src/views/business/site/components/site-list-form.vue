<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="24">
          <FormItem label="站点名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="显示名称" prop="displayName">
            <Input v-model="form.displayName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="唯一标识" prop="code">
            <Input v-model="form.code" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem prop="siteTypeId" label="站点类型">
            <Select v-model="form.siteTypeId">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in siteTypes"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否为分类" prop="isClassify">
            <Checkbox v-model="form.isClassify"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否离线" prop="isOffline">
            <Checkbox v-model="form.isOffline"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="站点定位对象" prop="locateObjectId">
            <Input type="number" v-model="form.locateObjectId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="离线备注" prop="offlineRemark">
            <Input
              v-model="form.offlineRemark"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="请输入离线备注"
            ></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="外部链接" prop="externalLink">
            <Input
              v-model="form.externalLink"
              placeholder="请输入外部链接"
            ></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <FormItem label="网站Logo" prop="siteLogo">
          <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.siteLogo"
            ></FileUploadSingle>
        </FormItem>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="网站关键字" prop="keywords">
            <Input v-model="form.keywords" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="注册条款" prop="registrationTerms">
             <vue-ueditor-wrap
              v-model="form.registrationTerms"
              :config="ueditorConfig"
            ></vue-ueditor-wrap>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="描述" prop="description">
            <Input
              v-model="form.description"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="请输入描述"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="SEO关键字" prop="seoKeywords">
            <Input v-model="form.seoKeywords" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="SEO描述" prop="seoDescription">
            <Input v-model="form.seoDescription" />
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
import VueUeditorWrap from "vue-ueditor-wrap";
import {  SERVICE_TYPE } from "@/constants/file";
import { siteApi } from "@/api/platforms/site";
import { YES_OR_NO, ENUM_ITEM_TYPES } from "@/constants/article";
import {SITE_TYPES} from "@/constants/site";
import config from "@/config";
import FileUploadSingle from "@/components/file-upload-single";
export default {
  name: "SiteListForm",
  components: {VueUeditorWrap,FileUploadSingle},
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
      //上传图片组件参数
      imageUrlModuleType: SERVICE_TYPE.ARTICLE.value,
      ueditorConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: config.baseUrl.fileUploadUrl,
        //serverUrl: fileApi.fileUploadLocalUrl + 3,
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/ueditor/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 340,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 关闭自动保存
        enableAutoSave: true,
        zIndex:1060
      },
      //表单数据
      form: {
        //站点名称
        name: null,
        //显示名称
        displayName: null,
        //简称
        shortName: null,
        //唯一标识
        code: null,
        //描述
        description: null,
        //是否为分类
        isClassify: false,
        //是否离线
        isOffline: false,
        //网站Logo
        siteLogo: null,
        //网站关键字
        keywords: null,
        //注册条款
        registrationTerms: null,
        //站点类型
        siteTypeId: null,
        //站点定位对象
        locateObjectId: null,
        //外部链接
        externalLink: null,
        //离线备注
        offlineRemark: null,
        //SEO关键字
        seoKeywords: null,
        //SEO描述
        seoDescription: null,
        //所在医院
        hospitalId: null,
      },
      //表单验证
      formValidate: {
        //站点Id
        siteId: [
          {
            type: "number",
            required: true,
            message: "请输入站点Id",
            trigger: "blur",
          },
        ],
        //站点名称
        name: [{ required: true, message: "请输入站点名称", trigger: "blur" }],
        //显示名称
        displayName: [
          { required: false, message: "请输入显示名称", trigger: "blur" },
        ],
        //简称
        shortName: [
          { required: false, message: "请输入简称", trigger: "blur" },
        ],
        //唯一标识
        code: [{ required: false, message: "请输入唯一标识", trigger: "blur" }],
        //描述
        description: [
          { required: false, message: "请输入描述", trigger: "blur" },
        ],

        //网站Logo
        siteLogo: [
          { required: false, message: "请输入网站Logo", trigger: "blur" },
        ],
        //网站关键字
        keywords: [
          { required: false, message: "请输入网站关键字", trigger: "blur" },
        ],
        //注册条款
        registrationTerms: [
          { required: false, message: "请输入注册条款", trigger: "blur" },
        ],
        //站点类型
        siteTypeId: [
          {
            type: "number",
            required: true,
            message: "请输入站点类型",
            trigger: "blur",
          },
        ],
        //站点定位对象
        locateObjectId: [
          {
            type: "number",
            required: false,
            message: "请输入站点定位对象",
            trigger: "blur",
          },
        ],
        //外部链接
        externalLink: [
          { required: false, message: "请输入外部链接", trigger: "blur" },
        ],
        //离线备注
        offlineRemark: [
          { required: false, message: "请输入离线备注", trigger: "blur" },
        ],
        //SEO关键字
        seoKeywords: [
          { required: false, message: "请输入SEO关键字", trigger: "blur" },
        ],
        //SEO描述
        seoDescription: [
          { required: false, message: "请输入SEO描述", trigger: "blur" },
        ],
        //所在医院
        hospitalId: [
          {
            type: "number",
            required: false,
            message: "请输入所在医院",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    // 站点类型
    siteTypes: function () {
      let array = [];
      for (let item in SITE_TYPES) {
        let obj = {};
        obj.desc = SITE_TYPES[item].desc;
        obj.value = SITE_TYPES[item].value;
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
  mounted() {
  },
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
        //站点名称
        name: null,
        //显示名称
        displayName: null,
        //简称
        shortName: null,
        //唯一标识
        code: null,
        //描述
        description: null,
        //是否为分类
        isClassify: false,
        //是否离线
        isOffline: false,
        //网站Logo
        siteLogo: null,
        //网站关键字
        keywords: null,
        //注册条款
        registrationTerms: null,
        //站点类型
        siteTypeId: null,
        //站点定位对象
        locateObjectId: null,
        //外部链接
        externalLink: null,
        //离线备注
        offlineRemark: null,
        //SEO关键字
        seoKeywords: null,
        //SEO描述
        seoDescription: null,
        //所在医院
        hospitalId: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await siteApi.addSite(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await siteApi.updateSite(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>