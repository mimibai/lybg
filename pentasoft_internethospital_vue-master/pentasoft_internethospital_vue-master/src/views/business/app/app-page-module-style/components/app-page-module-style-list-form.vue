<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Card :title="pageModuleTypeObj.name">
        <Row>
          <Col span="12">
            <FormItem label="是否删除" prop="isDelete">
              <i-switch v-model="form.isDelete" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="标题" prop="title">
              <Input v-model="form.title" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="模板图片" prop="showImage">
              <AppImageLinkLookUp v-model="form.showImage" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="备注" prop="remark">
              <Input
                v-model="form.remark"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 5 }"
                placeholder="备注"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="平台应用" prop="appPlatformAccountId">
              <PlatformSelect v-model="form.appPlatformAccountId" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="微信账号" prop="weiXinAccountId">
              <WxAccountSelect v-model="form.weiXinAccountId" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否显示标题" prop="isShowTitle">
              <i-switch v-model="form.isShowTitle" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="标题显示类型" prop="showTitleTypeId">
              <EnumSelect
                code="ShowTitleTypeEnum"
                v-model="form.showTitleTypeId"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="宽度" prop="width">
              <Input v-model="form.width" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="高度" prop="height">
              <Input v-model="form.height" />
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
            <FormItem label="圆角边框" prop="borderRadius">
              <Input v-model="form.borderRadius" />
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
            <FormItem label="边框样式" prop="borderStyle">
              <EnumSelect
                code="BorderStyleTypeEnum"
                v-model="form.borderStyle"
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="边框颜色" prop="borderColor">
              <ColorPicker v-model="form.borderColor" recommend></ColorPicker>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="颜色" prop="color">
              <ColorPicker v-model="form.color" recommend></ColorPicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="字体颜色" prop="fontColor">
              <ColorPicker v-model="form.fontColor" recommend></ColorPicker>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="背景颜色" prop="backgroundColor">
              <ColorPicker
                v-model="form.backgroundColor"
                recommend
              ></ColorPicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="背景图片" prop="backgroundImageUrl">
              <AppImageLinkLookUp v-model="form.backgroundImageUrl" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="自定义样式" prop="style">
              <Input
                v-model="form.style"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6 }"
                placeholder="请输入自定义样式，如：width:100%;"
              />
            </FormItem>
          </Col>
        </Row>
      </Card>
      <Card title="子项模块设置">
        <Row>
          <Col span="12">
            <FormItem label="浮动类型" prop="subFloat">
              <EnumSelect code="FloatTypeEnum" v-model="form.subFloat" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="宽度" prop="subWidth">
              <Input v-model="form.subWidth" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="高度" prop="subHeight">
              <Input v-model="form.subHeight" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="标题样式" prop="titleStyle">
              <Input
                v-model="form.titleStyle"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 5 }"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="副标题样式" prop="subtitleStyle">
              <Input
                v-model="form.subtitleStyle"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 5 }"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="左图标样式" prop="iconLeftStyle">
              <Input
                v-model="form.iconLeftStyle"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 5 }"
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="右图标样式" prop="iconRightStyle">
              <Input
                v-model="form.iconRightStyle"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 5 }"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="内边距" prop="subPadding">
              <Input v-model="form.subPadding" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="外边距" prop="subMargin">
              <Input v-model="form.subMargin" />
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
            <FormItem label="固定边框宽度" prop="subBorderWidth">
              <Input v-model="form.subBorderWidth" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="边框颜色" prop="subBorderColor">
              <ColorPicker
                v-model="form.subBorderColor"
                recommend
              ></ColorPicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="边框样式" prop="subBorderStyle">
              <EnumSelect
                code="BorderStyleTypeEnum"
                v-model="form.subBorderStyle"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="圆角边框" prop="subBorderRadius">
              <Input v-model="form.subBorderRadius" />
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
              <EnumSelect code="AlignItemTypeEnum" v-model="form.alignItems" />
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
              <Input
                v-model="form.boxShadow"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 5 }"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="背景色" prop="subBackgroundColor">
              <ColorPicker
                v-model="form.subBackgroundColor"
                recommend
              ></ColorPicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="背景图片" prop="subBackgroundImage">
              <AppImageLinkLookUp v-model="form.subBackgroundImage" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="自定义样式" prop="subStyle">
              <Input
                v-model="form.subStyle"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 5 }"
              />
            </FormItem>
          </Col>
        </Row>
      </Card>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { appPageModuleStyleApi } from '@/api/app/app-page-module-style';
import AppImageLinkLookUp from '@/components/look-up/app-image-link-look-up';
import EnumSelect from '@/components/drop-down-select/enum-select';
import PlatformSelect from '@/components/drop-down-select/platform-select';
import WxAccountSelect from '@/components/drop-down-select/wx-account-select';
export default {
  name: 'AppPageModuleStyleListForm',
  components: {
    AppImageLinkLookUp,
    EnumSelect,
    PlatformSelect,
    WxAccountSelect
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
    propPageModuleType: {
      type: Object
    }
  },
  data () {
    return {
      pageModuleTypeObj: {
        id: null,
        name: ''
      },
      title: '',
      // 表单数据
      form: {
        // 主键
        appPageModuleStyleId: null,
        // 平台应用
        appPlatformAccountId: null,
        // 微信账号
        weiXinAccountId: null,
        // 模块类型
        pageModuleTypeId: this.propPageModuleTypeId,
        // 显示类型
        objectTypeId: null,
        // 宽度
        width: null,
        // 高度
        height: null,
        // 背景图片
        backgroundImageUrl: null,
        // 背景颜色
        backgroundColor: '',
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
        // 自定义样式
        style: null,
        // 颜色
        color: '',
        // 字体颜色
        fontColor: '',
        // 高度
        subHeight: null,
        // 宽度
        subWidth: null,
        // 浮动类型
        subFloat: null,
        // 背景图片
        subBackgroundImage: null,
        // 背景色
        subBackgroundColor: '',
        // 外边距
        subMargin: null,
        // 内边距
        subPadding: null,
        // 圆角边框
        subBorderRadius: null,
        // 边框颜色
        subBorderColor: '',
        // 边框样式
        subBorderStyle: null,
        // 固定边框宽度
        subBorderWidth: null,
        // 自定义样式
        subStyle: null,
        // 动态边框宽度
        border_Width: null,
        // 横轴对齐方式
        justifyContent: null,
        // 纵轴对齐方式
        alignItems: null,
        // 显示方向
        flexDirection: null,
        // 阴影
        boxShadow: null,
        // 是否删除
        isDelete: null,
        // 标题样式
        titleStyle: null,
        // 副标题样式
        subtitleStyle: null,
        // 是否显示标题
        isShowTitle: null,
        // 标题显示类型
        showTitleTypeId: null,
        // 图片间隔宽度
        imageIntervalWidth: null,
        // 左图标样式
        iconLeftStyle: null,
        // 右图标样式
        iconRightStyle: null,
        // 标题
        title: null,
        // 备注
        remark: null,
        // ShowImage
        showImage: null
      },
      // 表单验证
      formValidate: {}
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(
          this.form,
          'appPageModuleStyleId',
          newValue['appPageModuleStyleId']
        );
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    },
    propPageModuleType: function (newValue) {
      if (newValue) {
        this.pageModuleTypeObj.id = newValue.id;
        this.pageModuleTypeObj.name = newValue.name;
        this.form.pageModuleTypeId = this.pageModuleTypeObj.id;
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
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
        // 主键
        appPageModuleStyleId: null,
        // 平台应用
        appPlatformAccountId: null,
        // 微信账号
        weiXinAccountId: null,
        // 模块类型
        pageModuleTypeId: this.propPageModuleTypeId,
        // 显示类型
        objectTypeId: null,
        // 宽度
        width: null,
        // 高度
        height: null,
        // 背景图片
        backgroundImageUrl: null,
        // 背景颜色
        backgroundColor: '',
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
        // 自定义样式
        style: null,
        // 颜色
        color: '',
        // 字体颜色
        fontColor: '',
        // 高度
        subHeight: null,
        // 宽度
        subWidth: null,
        // 浮动类型
        subFloat: null,
        // 背景图片
        subBackgroundImage: null,
        // 背景色
        subBackgroundColor: '',
        // 外边距
        subMargin: null,
        // 内边距
        subPadding: null,
        // 圆角边框
        subBorderRadius: null,
        // 边框颜色
        subBorderColor: '',
        // 边框样式
        subBorderStyle: null,
        // 固定边框宽度
        subBorderWidth: null,
        // 自定义样式
        subStyle: null,
        // 动态边框宽度
        border_Width: null,
        // 横轴对齐方式
        justifyContent: null,
        // 纵轴对齐方式
        alignItems: null,
        // 显示方向
        flexDirection: null,
        // 阴影
        boxShadow: null,
        // 是否删除
        isDelete: null,
        // 标题样式
        titleStyle: null,
        // 副标题样式
        subtitleStyle: null,
        // 是否显示标题
        isShowTitle: null,
        // 标题显示类型
        showTitleTypeId: null,
        // 图片间隔宽度
        imageIntervalWidth: null,
        // 左图标样式
        iconLeftStyle: null,
        // 右图标样式
        iconRightStyle: null,
        // 标题
        title: null,
        // 备注
        remark: null,
        // ShowImage
        showImage: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await appPageModuleStyleApi.addAppPageModuleStyle(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await appPageModuleStyleApi.updateAppPageModuleStyle(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
