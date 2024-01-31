<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Tabs type="card" value="name1">
        <TabPane label="全新新建" name="name1">
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="显示名称：" prop="name">
                <Input v-model="form.name" />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="科室编码：" prop="code">
                <Input v-model="form.department.code" />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="科室名称：" prop="name">
                <Input v-model="form.department.name" />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="科室简称：" prop="shortName">
                <Input v-model="form.department.shortName" />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="科室类型：" prop="departmentTypeIdArray">
                <CheckboxGroup v-model="form.department.departmentTypeIdArray">
                  <Checkbox
                    :label="item.value"
                    v-for="item in departmentTypeListData"
                    :key="item.value"
                  >
                    <span>{{ item.label }}</span>
                  </Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="默认出诊科室：" prop="defaultClinicIds">
                <LocationSelect
                  :value="form.department.defaultClinicIdArray"
                  @on-select="handlerSelect"
                />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="图片路径：" prop="imageUrl">
                <FileUploadSingle
                  :moduleType="imageUrlModuleType"
                  v-model="form.department.imageUrl"
                ></FileUploadSingle>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="微信头像路径：" prop="weiXinImageUrl">
                <FileUploadSingle
                  :moduleType="imageUrlModuleType"
                  v-model="form.department.weiXinImageUrl"
                ></FileUploadSingle>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="全员排名：" prop="totalRanking">
                <Input v-model="form.department.totalRanking" />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem
                label="科室关注二维码ID"
                prop="weiXinDimensionalCodeId2"
              >
                <Input v-model="form.department.weiXinDimensionalCodeId2" />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="介绍：" prop="department.description">
                <VueUeditorWrap
                  v-model="form.department.description"
                  :config="ueditorConfig"
                ></VueUeditorWrap>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="科室特色：" prop="specialty">
                <Input
                  teyp="textarea"
                  :autosize="{ minRows: 2, maxRows: 5 }"
                  v-model="form.department.specialty"
                />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="诊疗范围：" prop="consultationScope">
                <Input v-model="form.department.consultationScope" />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="地址：" prop="address">
                <Input v-model="form.department.address" />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="邮编：" prop="zipCode">
                <Input v-model="form.department.zipCode" />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="电话：" prop="phone">
                <Input v-model="form.department.phone" />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="网址：" prop="website">
                <Input v-model="form.department.website" />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="所在医院：" prop="hospitalId">
                <Select
                  placeholder="请选择所在医院"
                  v-model="form.department.hospitalId"
                >
                  <Option
                    :value="item.value"
                    v-for="item in hospitalListData"
                    :key="item.value"
                    >{{ item.label }}</Option
                  >
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem
                label="是否将网址仅作为超链接处理"
                prop="isRegardWebsiteAsLink"
              >
                <Checkbox
                  v-model="form.department.isRegardWebsiteAsLink"
                ></Checkbox>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem
                label="是否默认进入单独搜索首页"
                prop="isDefalultEnterSeparateSearchPage"
              >
                <Checkbox
                  v-model="form.department.isDefalultEnterSeparateSearchPage"
                ></Checkbox>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="是否为分类：" prop="isClassify">
                <Checkbox v-model="form.department.isClassify"></Checkbox>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="是否开通问答：" prop="isOpenQuiz">
                <Checkbox v-model="form.department.isOpenQuiz"></Checkbox>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem
                label="科室自动回复类型"
                prop="departmentAutomatedReplyTypeId"
              >
                <Select
                  v-model="form.department.departmentAutomatedReplyTypeId"
                >
                  <Option
                    :key="item.id"
                    :value="item.value"
                    v-for="item in autoReplyTypeList"
                    >{{ item.desc }}</Option
                  >
                </Select>
              </FormItem>
            </Col>
            <Col span="11"> </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem
                label="科室自动回复模板"
                prop="departmentAutomatedReplyTemplateId"
              >
                <Input
                  v-model="form.department.departmentAutomatedReplyTemplateId"
                />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem
                label="科室自动回复固定时间点"
                prop="departmentAutomatedReplyTiming"
              >
                <DatePicker
                  placeholder="选择科室自动回复固定时间点"
                  split-panels="split-panels"
                  style="width: 200px"
                  type="datetime"
                  :value="form.department.departmentAutomatedReplyTiming"
              @on-change="form.department.departmentAutomatedReplyTiming=$event"
                ></DatePicker>
                （取时间中的时分秒）
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem
                label="科室自动回复间隔时间(分钟)"
                prop="departmentAutomatedReplyTimes"
              >
                <Input
                  type="number"
                  width="150"
                  v-model="form.department.departmentAutomatedReplyTimes"
                />
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem
                label="科室自动回复用户"
                prop="departmentAutomatedReplyUserId"
              >
                <Input
                  type="number"
                  v-model="form.department.departmentAutomatedReplyUserId"
                />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="是否在首页隐藏：" prop="isHideInHome">
                <Checkbox v-model="form.isHideInHome"></Checkbox>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="是否启用：" prop="isEnable">
                <Checkbox v-model="form.isEnable"></Checkbox>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="是否开通微博：" prop="isOpenMicroblog">
                <Checkbox v-model="form.department.isOpenMicroblog"></Checkbox>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="微博名称：" prop="microblogName">
                <Input v-model="form.department.microblogName" />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="微博地址：" prop="microblogUrl">
                <Input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 5 }"
                  v-model="form.department.microblogUrl"
                />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="微博代码：" prop="microblogCode">
                <Input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 5 }"
                  v-model="form.department.microblogCode"
                />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="微博描述：" prop="microblogDescription">
                <Input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 5 }"
                  v-model="form.department.microblogDescription"
                />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="电子邮箱：" prop="email">
                <Input v-model="form.department.email" />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="扩展字段1：" prop="extensionInformation1">
                <VueUeditorWrap
                  v-model="form.department.extensionInformation1"
                  :config="ueditorConfig"
                ></VueUeditorWrap>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="联系我们：" prop="contactUs">
                <VueUeditorWrap
                  v-model="form.department.contactUs"
                  :config="ueditorConfig"
                ></VueUeditorWrap>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="22">
              <FormItem label="我们的服务：" prop="service">
                <VueUeditorWrap
                  v-model="form.department.service"
                  :config="ueditorConfig"
                ></VueUeditorWrap>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem label="是否显示在手机端：" prop="isShowInMobile">
                <Checkbox v-model="form.department.isShowInMobile"></Checkbox>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem
                label="是否允许患者建立对话"
                prop="isOpenPatientCreateDialog"
              >
                <Checkbox
                  v-model="form.department.isOpenPatientCreateDialog"
                ></Checkbox>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem
                label="出诊读取方式"
                prop="departmentAutoopSchedulingDepartmentReadTypematedReplyTimes"
              >
                <Select
                  v-model="form.department.opSchedulingDepartmentReadType"
                >
                  <Option
                    :key="item.id"
                    :value="item.value"
                    v-for="item in opSchedulingDepartmentReadTypeList"
                    >{{ item.desc }}</Option
                  >
                </Select>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem
                label="出诊展示方式"
                prop="opSchedulingDepartmentShowType"
              >
                <Select
                  v-model="form.department.opSchedulingDepartmentShowType"
                >
                  <Option
                    :key="item.id"
                    :value="item.value"
                    v-for="item in opSchedulingDepartmentShowTypeList"
                    >{{ item.desc }}</Option
                  >
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="11">
              <FormItem
                label="是否显示子科室的出诊"
                prop="opSchedulingIsShowChildDepartment"
              >
                <Checkbox
                  v-model="form.department.opSchedulingIsShowChildDepartment"
                ></Checkbox>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem
                label="是否显示医生详细出诊"
                prop="opSchedulingIsShowDoctorDetail"
              >
                <Checkbox
                  v-model="form.department.opSchedulingIsShowDoctorDetail"
                ></Checkbox>
              </FormItem>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="关联已有" name="name2"> </TabPane>
      </Tabs>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap';
import { departmentNodeApi } from '@/api/organizations/department-node';
import { enumItemApi } from '@/api/enum-item';
import { hospitalApi } from '@/api/organizations/hospital';
import LocationSelect from '@/components/location-select';
import FileUploadSingle from '@/components/file-upload-single';
import { SERVICE_TYPE } from '@/constants/file';
import {
  CONSULTATION_AUTOMATED_REPLY_TYPE,
  OP_SCHEDULING_DEPARTMENT_READ_TYPE,
  OP_SCHEDULING_DEPARTMENT_SHOW_TYPE
} from '@/constants/department';
import config from '@/config';
export default {
  name: 'DepartmentNodeListForm',
  components: {
    VueUeditorWrap,
    FileUploadSingle,
    LocationSelect
  },
  props: {
    // 是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true
    },
    // 更新的表单数据对象
    updateData: {
      type: Object
    },
    categoryId: {
      type: Number
    },
    objParentId: {
      type: Number
    }
  },
  data () {
    return {
      imageUrlModuleType: SERVICE_TYPE.DEPARTMENT.value,
      ueditorConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: config.baseUrl.fileUploadUrl,
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: '/ueditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 340,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: true,
        zIndex: 1060
      },
      departmentTypeListData: [],
      hospitalListData: [],
      // 表单数据
      form: {
        // 主键
        departmentNodeId: null,
        // 显示名称
        name: null,
        // 是否启用
        isEnable: true,
        // 父级Id
        parentId: null,
        // 父级Id集合
        parentIds: null,
        // 层级
        depth: null,
        // 层级排序
        branchIndex: null,
        // 排序
        sortIndex: null,
        // 定位科室
        departmentId: null,
        // 所在科室节点分类
        departmentNodeCategoryId: null,
        // 所在医院
        hospitalId: null,
        // 租户
        tenantId: null,
        // 是否在首页隐藏
        isHideInHome: false,
        // 子站点
        childSiteIds: null,
        // 子节点是否私有
        isChildSitePrivate: null,
        // 视频总数
        videoCount: null,
        // 科室封面
        videoImageUrl: null,
        // 最新发布时间
        videoLatestReleaseDate: null,
        // 科室简介
        videoDescription: null,
        department: {
          address: null,
          approverId: null,
          childSiteIds: null,
          clinicPrice: null,
          clinicVideoPrice: null,
          clinicVoicePrice: null,
          code: null,
          consultationScope: null,
          contactUs: null,
          createOrUpdateStateId: null,
          customField1: null,
          customField2: null,
          customField3: null,
          customField4: null,
          customField5: null,
          customField6: null,
          customField7: null,
          customField8: null,
          customField9: null,
          customField10: null,
          defaultClinicIds: null,
          defaultClinicIdArray: [],
          departmentAutomatedReplyTemplateId: null,
          departmentAutomatedReplyTimes: null,
          departmentAutomatedReplyTiming: null,
          departmentAutomatedReplyTypeId: null,
          departmentAutomatedReplyUserId: null,
          departmentId: null,
          departmentMappingId: null,
          departmentTypeIds: null,
          departmentTypeIdArray: [],
          description: null,
          email: null,
          extensionInformation1: null,
          firstLetter: null,
          hospitalId: null,
          imageUrl: null,
          isApprove: false,
          isChildSitePrivate: false,
          isClassify: true,
          isDefalultEnterSeparateSearchPage: false,
          isDelete: false,
          isHaveAppoint: false,
          isHaveScheduling: false,
          isOpenClinic: true,
          isOpenClinicTalk: true,
          isOpenMicroblog: false,
          isOpenPatientCreateDialog: false,
          isOpenQuiz: false,
          isRegardWebsiteAsLink: false,
          isShowInMobile: true,
          keywordUrlId: null,
          keywordUrlIds: null,
          lastApproveDate: null,
          lastModifierId: null,
          lastReleaseDateForArticle: null,
          microblogCode: null,
          microblogDescription: null,
          microblogName: null,
          microblogUrl: null,
          name: null,
          opdepartmentIdsByOPScheduling: null,
          opschedulingDepartmentReadType: null,
          opschedulingDepartmentShowType: null,
          opschedulingIsShowChildDepartment: false,
          opschedulingIsShowDoctorDetail: false,
          phone: null,
          pinyin: null,
          pinyinInitials: null,
          posterId: null,
          relatedArticleNumber: 0,
          secondApprovalStateId: 1,
          seoDescription: null,
          seoKeywords: null,
          service: null,
          shortName: null,
          siteId: null,
          siteIds: null,
          specialty: null,
          totalRanking: 9999,
          website: null,
          weiXinDimensionalCodeId1: null,
          weiXinDimensionalCodeId2: null,
          weiXinImageUrl: null,
          zipCode: null
        }
      },
      // 表单验证
      formValidate: {
        // 显示名称
        name: [{ required: true, message: '请输入显示名称', trigger: 'blur' }],
        description: [
          { required: true, message: '请输入介绍', trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    autoReplyTypeList: function () {
      let array = [];
      for (const item in CONSULTATION_AUTOMATED_REPLY_TYPE) {
        let obj = {};
        obj.desc = CONSULTATION_AUTOMATED_REPLY_TYPE[item].desc;
        obj.value = CONSULTATION_AUTOMATED_REPLY_TYPE[item].value;
        array.push(obj);
      }
      return array;
    },
    opSchedulingDepartmentReadTypeList: function () {
      let array = [];
      for (const item in OP_SCHEDULING_DEPARTMENT_READ_TYPE) {
        let obj = {};
        obj.desc = OP_SCHEDULING_DEPARTMENT_READ_TYPE[item].desc;
        obj.value = OP_SCHEDULING_DEPARTMENT_READ_TYPE[item].value;
        array.push(obj);
      }
      return array;
    },
    opSchedulingDepartmentShowTypeList: function () {
      let array = [];
      for (const item in OP_SCHEDULING_DEPARTMENT_SHOW_TYPE) {
        let obj = {};
        obj.desc = OP_SCHEDULING_DEPARTMENT_SHOW_TYPE[item].desc;
        obj.value = OP_SCHEDULING_DEPARTMENT_SHOW_TYPE[item].value;
        array.push(obj);
      }
      return array;
    }
  },
  watch: {
    objParentId: function (newVal) {
      if (newVal) {
        this.form.parentId = newVal;
      }
    },
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'departmentNodeId', newValue['departmentNodeId']);
        this.$set(
          this.form,
          'department.departmentId',
          newValue['department']['departmentId']
        );
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    },
    categoryId: function (newValue) {
      if (newValue) {
        this.form.departmentNodeCategoryId = newValue;
      }
    }
  },
  created () {},
  mounted () {
    this.initDepartmentType();
  },
  methods: {
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      if (this.form.department.departmentTypeIdArray) {
        this.form.department.departmentTypeIds = this.form.department.departmentTypeIdArray.toString();
      }
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.isUpdate) {
            this.update();
          } else {
            this.add();
          }
        } else {
          this.$Message.error('参数验证错误，请仔细填写表单数据!');
        }
      });
    },
    resetForm () {
      this.form = {
        departmentNodeCategoryId: null,
        // 主键
        departmentNodeId: null,
        // 显示名称
        name: null,
        // 是否启用
        isEnable: null,
        // 父级Id
        parentId: null,
        // 父级Id集合
        parentIds: null,
        // 层级
        depth: null,
        // 层级排序
        branchIndex: null,
        // 排序
        sortIndex: null,
        // 定位科室
        departmentId: null,
        // 所在科室节点分类
        departmentNodeCategoryId: null,
        // 所在医院
        hospitalId: null,
        // 租户
        tenantId: null,
        // 是否在首页隐藏
        isHideInHome: null,
        // 子站点
        childSiteIds: null,
        // 子节点是否私有
        isChildSitePrivate: null,
        // 视频总数
        videoCount: null,
        // 科室封面
        videoImageUrl: null,
        // 最新发布时间
        videoLatestReleaseDate: null,
        // 科室简介
        videoDescription: null,
        department: {
          departmentId: null,
          departmentMappingId: null,
          departmentTypeIds: null,
          address: null,
          approverId: null,
          childSiteIds: null,
          clinicPrice: null,
          clinicVideoPrice: null,
          clinicVoicePrice: null,
          code: null,
          consultationScope: null,
          contactUs: null,
          createOrUpdateStateId: null,
          customField1: null,
          customField2: null,
          customField3: null,
          customField4: null,
          customField5: null,
          customField6: null,
          customField7: null,
          customField8: null,
          customField9: null,
          customField10: null,
          defaultClinicIds: null,
          defaultClinicIdArray: [],
          departmentAutomatedReplyTemplateId: null,
          departmentAutomatedReplyTimes: null,
          departmentAutomatedReplyTiming: null,
          departmentAutomatedReplyTypeId: null,
          departmentAutomatedReplyUserId: null,
          description: null,
          email: null,
          extensionInformation1: null,
          firstLetter: null,
          hospitalId: null,
          imageUrl: null,
          isApprove: false,
          isChildSitePrivate: false,
          isClassify: true,
          isDefalultEnterSeparateSearchPage: false,
          isDelete: false,
          isHaveAppoint: false,
          isHaveScheduling: false,
          isOpenClinic: true,
          isOpenClinicTalk: true,
          isOpenMicroblog: false,
          isOpenPatientCreateDialog: false,
          isOpenQuiz: false,
          isRegardWebsiteAsLink: false,
          isShowInMobile: true,
          keywordUrlId: null,
          keywordUrlIds: null,
          lastApproveDate: null,
          lastModifierId: null,
          lastReleaseDateForArticle: null,
          microblogCode: null,
          microblogDescription: null,
          microblogName: null,
          microblogUrl: null,
          name: null,
          opdepartmentIdsByOPScheduling: null,
          opschedulingDepartmentReadType: null,
          opschedulingDepartmentShowType: null,
          opschedulingIsShowChildDepartment: false,
          opschedulingIsShowDoctorDetail: false,
          phone: null,
          pinyin: null,
          pinyinInitials: null,
          posterId: null,
          relatedArticleNumber: 0,
          secondApprovalStateId: 1,
          seoDescription: null,
          seoKeywords: null,
          service: null,
          shortName: null,
          siteId: null,
          siteIds: null,
          specialty: null,
          totalRanking: 9999,
          website: null,
          weiXinDimensionalCodeId1: null,
          weiXinDimensionalCodeId2: null,
          weiXinImageUrl: null,
          zipCode: null
        }
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await departmentNodeApi.addDepartmentNode(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await departmentNodeApi.updateDepartmentNode(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    /* --------------初始化---------------- */
    async initDepartmentType () {
      try {
        let params = {
          sqlQueryKeyword: 'DepartmentType'
        };
        let result = await enumItemApi.listEnumitem(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.keyId,
            label: item.name
          });
        });
        this.departmentTypeListData = list;
      } finally {
      }
    },
    async initHospital () {
      try {
        let params = {};
        let result = await hospitalApi.queryHospitalList(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.hospitalId,
            label: item.name
          });
        });
        this.hospitalListData = list;
      } finally {
      }
    },
    handlerSelect (val) {
      if (val) {
        this.form.department.defaultClinicIds = val.toString();
      }
    }
  }
};
</script>
