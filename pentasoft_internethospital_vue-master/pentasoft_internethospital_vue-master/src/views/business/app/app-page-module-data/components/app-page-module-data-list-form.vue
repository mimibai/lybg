<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="所属角色" prop="showRoleIds">
            <RoleLookUp v-model="form.showRoleIdArray" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <i-switch v-model="form.isDelete"></i-switch>
          </FormItem>
        </Col>
      </Row>
      <div v-if="appPageModuleModelData.pageModuleTypeId === 2">
        <Row>
          <Col span="24">
            <FormItem label="显示图片" prop="imageUrl">
              <AppImageLinkLookUp v-model="form.imageUrl" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="标题" prop="title">
              <Input v-model="form.title" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <div v-if="appPageModuleModelData.pageModuleTypeId === 14">
        <Row>
          <Col span="12">
            <FormItem label="标题" prop="title">
              <Input v-model="form.title" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="副标题" prop="subtitle">
              <Input v-model="form.subtitle" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="标题说明" prop="introduce">
              <Input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 6 }"
                v-model="form.introduce"
              />
            </FormItem>
          </Col>
        </Row>
        <Row v-if="appPageModuleModelData.pageModuleTypeId === 2">
          <Col span="24">
            <FormItem label="显示图片" prop="imageUrl"
              ><AppImageLinkLookUp v-model="form.imageUrl" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="左图标" prop="iconLeftUrl">
              <AppImageLinkLookUp v-model="form.iconLeftUrl" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="右图标" prop="iconRightUrl">
              <AppImageLinkLookUp v-model="form.iconRightUrl" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <div v-if="appPageModuleModelData.pageModuleTypeId === 4">
        <Row>
          <Col span="12">
            <FormItem label="标题" prop="title">
              <Input v-model="form.title" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="副标题" prop="subtitle">
              <Input v-model="form.subtitle" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="合并行数" prop="mergeRow">
              <Input type="number" v-model.number="form.mergeRow" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="合并列数" prop="mergeCell">
              <Input type="number" v-model.number="form.mergeCell" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="左图标" prop="iconLeftUrl">
              <AppImageLinkLookUp v-model="form.iconLeftUrl" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="右图标" prop="iconRightUrl">
              <AppImageLinkLookUp v-model="form.iconRightUrl" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <div v-if="appPageModuleModelData.pageModuleTypeId === 5">
        <Row>
          <Col span="12">
            <FormItem label="标题" prop="title">
              <Input v-model="form.title" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="副标题" prop="subtitle">
              <Input v-model="form.subtitle" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="左图标" prop="iconLeftUrl">
              <AppImageLinkLookUp v-model="form.iconLeftUrl" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="右图标" prop="iconRightUrl">
              <AppImageLinkLookUp v-model="form.iconRightUrl" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <div v-if="appPageModuleModelData.pageModuleTypeId === 7">
        <Row>
          <Col span="12">
            <FormItem label="标题" prop="title">
              <Input v-model="form.title" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="副标题" prop="subtitle">
              <Input v-model="form.subtitle" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="选中背景色" prop="selectedBackgroundColor">
              <ColorPicker
                v-model="form.selectedBackgroundColor"
                recommend
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="显示图片" prop="imageUrl">
              <AppImageLinkLookUp v-model="form.imageUrl" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="选中图片" prop="selectedBackgroundImage">
              <AppImageLinkLookUp v-model="form.selectedBackgroundImage" />
            </FormItem>
          </Col>
        </Row>
      </div>

      <Row>
        <Col span="12">
          <FormItem label="点击类型" prop="clickTypeId">
            <EnumSelect code="ClickTypeEnum" v-model="form.clickTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="地址类型" prop="urlTypeId">
            <EnumSelect code="UrlTypeEnum" v-model="form.urlTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.urlTypeId === 3">
        <Col span="12">
          <FormItem label="小程序AppId" prop="urlAppId">
            <Input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 6 }"
              v-model="form.urlAppId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="小程序数据" prop="urlExtraData">
            <Input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 6 }"
              v-model="form.urlExtraData"
            />
          </FormItem>
        </Col>
      </Row>
      <Row
        v-if="
          form.urlTypeId === 2 || form.urlTypeId === 3 || form.urlTypeId === 4
        "
      >
        <Col span="12">
          <FormItem label="跳转地址" prop="url">
            <Input v-model="form.url" />
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.urlTypeId === 1">
        <Col span="12">
          <FormItem label="跳转地址" prop="appPageLinkId">
            <AppPageLinkLookUp v-model="form.appPageLinkId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="启动参数" prop="startParameters">
            <Input
              type="textarea"
              placeholder="如：name=vendor&color=black"
              v-model="form.startParameters"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否沿用父项设置" prop="isOpenAppPageModule">
            <i-switch
              v-model="form.isOpenAppPageModule"
              :before-change="handleBeforeOpenAppPageModule"
              @on-change="handleOpenAppPageModule"
            ></i-switch>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否为体验版展示" prop="isDevelop">
            <i-switch v-model="form.isDevelop"></i-switch>
          </FormItem>
        </Col>
      </Row>

      <Card title="样式设置" v-if="!form.isOpenAppPageModule">
        <PageModuleStyleTemplate
          :dataList="pageModuleStyleDataList"
          v-model="form.appPagModuleStyleId"
        />
      </Card>
      <Card title="当前父项应用模板" v-else>
        <Row v-if="propAppPageModel.appPageModuleId != null">
          <Col span="=24">
            <Divider>当前父项为自定义样式</Divider>
          </Col>
        </Row>
        <Row v-else>
          <PageModuleStyleTemplate
            :dataList="pageModuleStyleDataList"
            v-model="propAppPageModel.appPagModuleStyleId"
          />
        </Row>
      </Card>

      <Collapse v-model="showSetting" @on-change="panelChange">
        <Panel name="setting">
          {{ showSettingTitle }}
          <template slot="content">
            <Card title="子项模块样式设置" ref="childStyle">
              <a href="#" slot="extra" @click.prevent="clearStyle">清空 </a>
              <Row>
                <Col span="12">
                  <FormItem label="浮动类型" prop="subFloat">
                    <EnumSelect code="FloatTypeEnum" v-model="form.subFloat" />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="宽度" prop="width">
                    <Input v-model="form.width" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="标题样式" prop="titleStyle">
                    <Input v-model="form.titleStyle" />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="副标题样式" prop="subtitleStyle">
                    <Input v-model="form.subtitleStyle" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="左图标样式" prop="iconLeftStyle">
                    <Input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 6 }"
                      v-model="form.iconLeftStyle"
                    />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="右图标样式" prop="iconRightStyle">
                    <Input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 6 }"
                      v-model="form.iconRightStyle"
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="内边距" prop="padding">
                    <Input v-model="form.padding" />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="外边距" prop="margin">
                    <Input v-model="form.margin" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="动态边框宽度" prop="border_Width">
                    <Input v-model="form.border_Width" />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="边框宽度" prop="borderWidth">
                    <Input v-model="form.borderWidth" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="边框颜色" prop="borderColor">
                    <ColorPicker v-model="form.borderColor" recommend />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="边框样式" prop="borderStyle">
                    <EnumSelect
                      code="BorderStyleTypeEnum"
                      v-model="form.borderStyle"
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="圆角边框" prop="borderRadius">
                    <Input v-model="form.borderRadius" />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="横轴对齐方式" prop="justifyContent">
                    <EnumSelect
                      code="JustifyContentTypeEnum"
                      v-model="form.justifyContent"
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="纵轴对齐方式" prop="alignItems">
                    <EnumSelect
                      code="AlignItemTypeEnum"
                      v-model="form.alignItems"
                    />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="显示方向" prop="flexDirection">
                    <EnumSelect
                      code="FlexDirectionTypeEnum"
                      v-model="form.flexDirection"
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                  <FormItem label="阴影" prop="boxShadow">
                    <Input v-model="form.boxShadow" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <FormItem label="背景色" prop="backgroundColor">
                    <ColorPicker
                      v-model="form.backgroundColor"
                      recommend
                    />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="背景图片" prop="backgroundImage">
                    <AppImageLinkLookUp
                      v-model="form.selectedBackgroundImage"
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                  <FormItem label="自定义样式" prop="style">
                    <Input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 6 }"
                      v-model="form.style"
                    />
                  </FormItem>
                </Col>
              </Row>

              <Spin size="large" fix v-if="childStyleSpinShow"></Spin>
            </Card>
          </template>
        </Panel>
      </Collapse>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { appPageModuleDataApi } from '@/api/app/app-page-module-data';
import { appPageModuleStyleApi } from '@/api/app/app-page-module-style';
import EnumSelect from '@/components/drop-down-select/enum-select';
import RoleLookUp from '@/components/look-up/role-look-up';
import AppImageLinkLookUp from '@/components/look-up/app-image-link-look-up';
import AppPageLinkLookUp from '@/components/look-up/app-page-link-look-up';
import PageModuleStyleTemplate from '@/components/app/app-page-module-style';
export default {
  name: 'AppPageModuleDataListForm',
  components: {
    EnumSelect,
    RoleLookUp,
    AppImageLinkLookUp,
    AppPageLinkLookUp,
    PageModuleStyleTemplate
  },
  props: {
    appPageData: {
      type: Object
    },
    appPageModuleModelData: {
      type: Object
    },
    // 是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true
    },
    // 更新的表单数据对象
    updateData: {
      type: Object
    }
  },
  data () {
    return {
      propAppPageModel: this.appPageData,
      propAppPageModuleModel: this.appPageModuleModelData,
      pageModuleStyleDataList: [],
      styleTemplateData: {},
      showSetting: '',
      showSettingTitle: '展开',
      childStyleSpinShow: false,
      // 表单数据
      form: {
        // 主键Id
        appPageModuleDataId: null,
        // 页面
        appPageId: null,
        // 模块
        appPageModuleId: null,
        // 标题
        title: null,
        // 副标题
        subtitle: null,
        // 标题说明
        introduce: null,
        // 左图标
        iconLeftUrl: null,
        // 右图标
        iconRightUrl: null,
        // 背景图片
        backgroundImage: null,
        // 背景色
        backgroundColor: '',
        // 自定义样式
        style: null,
        // 是否选中
        isSelected: false,
        // 选中左图标
        selectedIconLeftUrl: null,
        // 选中右图标
        selectedIconRightUrl: null,
        // 选中背景图片
        selectedBackgroundImage: null,
        // 选中背景色
        selectedBackgroundColor: '',
        // 选中自定义样式
        selectedStyle: null,
        // 外边距
        margin: null,
        // 内边距
        padding: null,
        // 圆角边框
        borderRadius: null,
        // 边框颜色
        borderColor: '',
        // 边框样式
        borderStyle: null,
        // 边框宽度
        borderWidth: null,
        // 横轴对齐方式
        justifyContent: null,
        // 纵轴对齐方式
        alignItems: null,
        // 显示方向
        flexDirection: null,
        // 阴影
        boxShadow: null,
        // 点击类型
        clickTypeId: null,
        // 跳转地址名称
        urlName: null,
        // 跳转地址
        url: null,
        // 父级Id
        parentId: null,
        // 父级Id集合
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 排序
        sortIndex: null,
        // 是否删除
        isDelete: false,
        // 合并行数
        mergeRow: null,
        // 合并列数
        mergeCell: null,
        // GridRow
        gridRow: null,
        // GridCell
        gridCell: null,
        // 副标题样式
        subtitleStyle: null,
        // 标题样式
        titleStyle: null,
        // 合并开始行数
        gridRowStart: null,
        // 合并结束行数
        gridRowEnd: null,
        // 合并开始列数
        gridCellStart: null,
        // 合并结束列数
        gridCellEnd: null,
        // 动态边框宽度
        border_Width: null,
        // 模块样式
        resultStyle: null,
        // 模块选中样式
        resultSelectedStyle: null,
        // 图片
        imageUrl: null,
        // 选中图片
        selectedImageUrl: null,
        // 样式类型
        appPageModuleStyleId: null,
        // 副标题浮动类型
        subFloat: null,
        // 左图标样式
        iconLeftStyle: null,
        // 右图标样式
        iconRightStyle: null,
        // 地址类型
        urlTypeId: null,
        // 小程序AppId
        urlAppId: null,
        // 小程序数据
        urlExtraData: null,
        // 背景图片
        backgroundImageUrl: null,
        // 宽度
        width: null,
        // 是否沿用父项设置
        isOpenAppPageModule: true,
        // 跳转地址
        appPageLinkId: null,
        // 启动参数
        startParameters: null,
        // 所属角色
        showRoleIds: null,
        showRoleIdArray: [],
        // 是否为体验版展示
        isDevelop: false,
        // 是否应用模板
        isCustomStyle: false,
        // 是否开启自定义
        openCustomization: false
      },
      // 表单验证
      formValidate: {}
    };
  },
  watch: {
    appPageData: function (newValue) {
      if (newValue) {
        this.propAppPageModel = newValue;
        this.form.appPageId = newValue.appPageId;
      }
    },
    appPageModuleModelData: function (newValue) {
      if (newValue) {
        this.propAppPageModuleModel = newValue;
        this.form.appPageModuleId = newValue.appPageModuleId;
        this.form.appPageModuleStyleId = newValue.appPageModuleStyleId;
      }
    },
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(
          this.form,
          'appPageModuleDataId',
          newValue['appPageModuleDataId']
        );
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    },
    'form.appPageModuleStyleId': function (newVal) {
      if (newVal) {
        this.styleTemplateData = this.pageModuleStyleDataList.find(
          (item) => item.appPageModuleStyleId == newVal
        );
        // 将style赋值父项、子项的样式
        this.fillAllStyle(this.styleTemplateData);
      } else {
        this.clearStyle();
      }
    }
  },
  created () {},
  mounted () {
    this.initModuleStyle();
  },
  computed: {},
  methods: {
    async initModuleStyle () {
      this.$Spin.show();
      let params = {
        pageSize: 999
      };
      if (this.propAppPageModuleModel.pageModuleTypeId) {
        params.pageModuleTypeId = this.propAppPageModuleModel.pageModuleTypeId;
      }
      let res = await appPageModuleStyleApi.queryAppPageModuleStyle(params);
      this.pageModuleStyleDataList = res.data.list;
      this.$Spin.hide();
    },
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
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
        // 主键Id
        appPageModuleDataId: null,
        // 页面
        appPageId: null,
        // 模块
        appPageModuleId: null,
        // 标题
        title: null,
        // 副标题
        subtitle: null,
        // 标题说明
        introduce: null,
        // 左图标
        iconLeftUrl: null,
        // 右图标
        iconRightUrl: null,
        // 背景图片
        backgroundImage: null,
        // 背景色
        backgroundColor: '',
        // 自定义样式
        style: null,
        // 是否选中
        isSelected: null,
        // 选中左图标
        selectedIconLeftUrl: null,
        // 选中右图标
        selectedIconRightUrl: null,
        // 选中背景图片
        selectedBackgroundImage: null,
        // 选中背景色
        selectedBackgroundColor: '',
        // 选中自定义样式
        selectedStyle: null,
        // 外边距
        margin: null,
        // 内边距
        padding: null,
        // 圆角边框
        borderRadius: null,
        // 边框颜色
        borderColor: '',
        // 边框样式
        borderStyle: null,
        // 边框宽度
        borderWidth: null,
        // 横轴对齐方式
        justifyContent: null,
        // 纵轴对齐方式
        alignItems: null,
        // 显示方向
        flexDirection: null,
        // 阴影
        boxShadow: null,
        // 点击类型
        clickTypeId: null,
        // 跳转地址名称
        urlName: null,
        // 跳转地址
        url: null,
        // 父级Id
        parentId: null,
        // 父级Id集合
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 排序
        sortIndex: null,
        // 是否删除
        isDelete: null,
        // 合并行数
        mergeRow: null,
        // 合并列数
        mergeCell: null,
        // GridRow
        gridRow: null,
        // GridCell
        gridCell: null,
        // 副标题样式
        subtitleStyle: null,
        // 标题样式
        titleStyle: null,
        // 合并开始行数
        gridRowStart: null,
        // 合并结束行数
        gridRowEnd: null,
        // 合并开始列数
        gridCellStart: null,
        // 合并结束列数
        gridCellEnd: null,
        // 动态边框宽度
        border_Width: null,
        // 模块样式
        resultStyle: null,
        // 模块选中样式
        resultSelectedStyle: null,
        // 图片
        imageUrl: null,
        // 选中图片
        selectedImageUrl: null,
        // 样式类型
        appPageModuleStyleId: null,
        // 副标题浮动类型
        subFloat: null,
        // 左图标样式
        iconLeftStyle: null,
        // 右图标样式
        iconRightStyle: null,
        // 地址类型
        urlTypeId: null,
        // 小程序AppId
        urlAppId: null,
        // 小程序数据
        urlExtraData: null,
        // 背景图片
        backgroundImageUrl: null,
        // 宽度
        width: null,
        // 是否沿用父项设置
        isOpenAppPageModule: true,
        // 跳转地址
        appPageLinkId: null,
        // 启动参数
        startParameters: null,
        // 所属角色
        showRoleIds: null,
        showRoleIdArray: [],
        // 是否为体验版展示
        isDevelop: null,
        // 是否应用模板
        isCustomStyle: false,
        // 是否开启自定义
        openCustomization: false
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await appPageModuleDataApi.addAppPageModuleData(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await appPageModuleDataApi.updateAppPageModuleData(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    panelChange () {
      if (this.showSettingTitle === '展开') {
        this.showSetting = 'setting';
        this.showSettingTitle = '收起';
      } else {
        this.showSetting = '';
        this.showSettingTitle = '展开';
      }
    },
    clearStyle () {
      this.form.subFloat = null;
      this.form.width = null;
      this.form.titleStyle = null;
      this.form.subtitleStyle = null;
      this.form.iconLeftStyle = null;
      this.form.iconRightStyle = null;
      this.form.margin = null;
      this.form.padding = null;
      this.form.border_Width = null;
      this.form.borderWidth = null;
      this.form.borderColor = '';
      this.form.borderStyle = null;
      this.form.borderRadius = null;
      this.form.justifyContent = null;
      this.form.alignItems = null;
      this.form.flexDirection = null;
      this.form.boxShadow = null;
      this.form.backgroundColor = '';
      this.form.backgroundImageUrl = null;
      this.form.style = null;
    },

    handleBeforeOpenAppPageModule () {
      return new Promise((resolve) => {
        let showContent = this.form.isOpenAppPageModule
          ? '确认取消沿用父项设置吗？'
          : '确认沿用父项设置吗？确认后将清空现有样式配置';
        this.$Modal.confirm({
          title: '友情提示',
          content: showContent,
          onOk: () => {
            resolve();
          }
        });
      });
    },
    handleOpenAppPageModule (selectVal) {
      if (selectVal) {
        this.fillChildStyle();
      }
    },
    fillChildStyle () {
      if (this.appPageModuleModelData) {
        this.form.subFloat = this.appPageModuleModelData.subFloat;
        this.form.width = this.appPageModuleModelData.subWidth;
        this.form.titleStyle = this.appPageModuleModelData.titleStyle;
        this.form.subtitleStyle = this.appPageModuleModelData.subtitleStyle;
        this.form.iconLeftStyle = this.appPageModuleModelData.iconLeftStyle;
        this.form.iconRightStyle = this.appPageModuleModelData.iconRightStyle;
        this.form.margin = this.appPageModuleModelData.subMargin;
        this.form.padding = this.appPageModuleModelData.subPadding;
        this.form.border_Width = this.appPageModuleModelData.border_Width;
        this.form.borderWidth = this.appPageModuleModelData.subBorderWidth;
        this.form.borderColor = this.appPageModuleModelData.subBorderColor;
        this.form.borderStyle = this.appPageModuleModelData.subBorderStyle;
        this.form.borderRadius = this.appPageModuleModelData.subBorderRadius;
        this.form.justifyContent = this.appPageModuleModelData.justifyContent;
        this.form.alignItems = this.appPageModuleModelData.alignItems;
        this.form.flexDirection = this.appPageModuleModelData.flexDirection;
        this.form.boxShadow = this.appPageModuleModelData.boxShadow;
        this.form.backgroundColor =
          this.appPageModuleModelData.subBackgroundColor;
        this.form.backgroundImageUrl =
          this.appPageModuleModelData.subBackgroundImage;
        this.form.style = this.appPageModuleModelData.subStyle;
      }
    },
    fillAllStyle () {
      if (this.styleTemplateData) {
        // 子项style
        this.form.subFloat = this.styleTemplateData.subFloat;
        this.form.width = this.styleTemplateData.subWidth;
        this.form.titleStyle = this.styleTemplateData.titleStyle;
        this.form.subtitleStyle = this.styleTemplateData.subtitleStyle;
        this.form.iconLeftStyle = this.styleTemplateData.iconLeftStyle;
        this.form.iconRightStyle = this.styleTemplateData.iconRightStyle;
        this.form.margin = this.styleTemplateData.subMargin;
        this.form.padding = this.styleTemplateData.subPadding;
        this.form.border_Width = this.styleTemplateData.border_Width;
        this.form.borderWidth = this.styleTemplateData.subBorderWidth;
        this.form.borderColor = this.styleTemplateData.subBorderColor;
        this.form.borderStyle = this.styleTemplateData.subBorderStyle;
        this.form.borderRadius = this.styleTemplateData.subBorderRadius;
        this.form.justifyContent = this.styleTemplateData.justifyContent;
        this.form.alignItems = this.styleTemplateData.alignItems;
        this.form.flexDirection = this.styleTemplateData.flexDirection;
        this.form.boxShadow = this.styleTemplateData.boxShadow;
        this.form.backgroundColor = this.styleTemplateData.subBackgroundColor;
        this.form.backgroundImageUrl =
          this.styleTemplateData.subBackgroundImage;
        this.form.style = this.styleTemplateData.subStyle;
      }
    },
    customStyle (dataItem) {
      if (dataItem) {
        this.$Modal.comfirm({
          title: '友情提示',
          content: '确定要应用此模板吗？',
          onOk: () => {
            // 应用模板，赋值appPageModuleStyleId，读取对应style赋值输入框
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.code-row-bg {
  margin-top: 15px;
}
.style-card {
  width: 100%;
  height: 260px;
  padding: 8px;
  overflow: hidden;
  border: 1px solid rgb(231, 234, 236);
  border-radius: 5px;
}
.style-content {
  height: 85%;
  margin-bottom: 8px;
  overflow: hidden;
}
.style-actions {
  width: 90%;
  height: 25px;
  padding: 0px;
  margin: 0 auto;
  list-style: none;
  text-decoration: none;
}
.style-title {
  font-size: 14px;
}
.delete-item {
  font-size: 12px;
  background: rgb(255, 1, 1);
  color: #fff;
  border-radius: 5px;
  padding: 3px;
  margin-left: 5px;
}
</style>
