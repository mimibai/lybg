<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Card>
        <Row>
          <Col span="12">
            <FormItem label="是否删除" prop="isDelete">
              <i-switch v-model="form.isDelete" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否为体验版展示" prop="isDevelop">
              <i-switch v-model="form.isDevelop" />
            </FormItem>
          </Col>
        </Row>
      </Card>
      <Card title="组件父项关系配置">
        <Row>
          <Col span="24">
            <FormItem label="关联父级组件" prop="parentId">
              <Select filterable clearable v-model="form.parentId">
                <Option
                  :key="item.appPageModuleId"
                  :value="item.appPageModuleId"
                  v-for="item in parentPageModuleDataList"
                  >{{ item.name }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Card>
      <Card title="组件类型配置">
        <Row>
          <Col span="12">
            <FormItem label="模块类型" prop="pageModuleTypeId">
              <EnumSelect
                code="AppletPageModuleTypeEnum"
                v-model="form.pageModuleTypeId"
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否显示头部" prop="isShowHeader">
              <i-switch v-model="form.isShowHeader" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="显示类型" prop="pageModuleId">
              <EnumSelect
                code="AppletListShowTypeEnum"
                v-model="form.pageModuleId"
                v-show="form.pageModuleTypeId === 5"
              />
              <EnumSelect
                code="AppletHeaderShowTypeEnum"
                v-model="form.pageModuleId"
                v-show="form.pageModuleTypeId === 14"
              />
              <EnumSelect
                code=""
                v-model="form.pageModuleId"
                v-show="
                  form.pageModuleTypeId != 5 && form.pageModuleTypeId != 14
                "
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="页面所属角色" prop="showRoleIds">
              <RoleLookUp v-model="form.showRoleIdArray" />
            </FormItem>
          </Col>
        </Row>
      </Card>
      <Card
        title="头部设置"
        v-if="form.isShowHeader || form.pageModuleTypeId === 6"
      >
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
            <FormItem label="左边图标" prop="iconLeftUrl">
              <AppImageLinkLookUp v-model="form.iconLeftUrl" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="右边图标" prop="iconRightUrl">
              <AppImageLinkLookUp v-model="form.iconRightUrl" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="图片" prop="imageUrl">
              <AppImageLinkLookUp v-model="form.imageUrl" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="类名" prop="className">
              <Input v-model="form.className" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="跳转地址名称" prop="urlName">
              <Input v-model="form.urlName" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="跳转地址" prop="url">
              <Input v-model="form.url" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="头部背景图片" prop="resultTitleImg">
              <AppImageLinkLookUp v-model="form.resultTitleImg" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="头部样式" prop="resultHeaderStyle">
              <Input type="textarea" row="4" v-model="form.resultHeaderStyle" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="头部子项样式" prop="resultChildStyle">
              <Input type="textarea" row="4" v-model="form.resultChildStyle" />
            </FormItem>
          </Col>
        </Row>
      </Card>
      <Card title="轮播组件配置" v-if="form.pageModuleTypeId === 2">
        <Row>
          <Col span="12">
            <FormItem label="是否显示指示点" prop="isIndicatorDot">
              <i-switch v-model="form.isIndicatorDot" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否纵向滑动" prop="swiperIsVertical">
              <i-switch v-model="form.swiperIsVertical" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="指示点颜色" prop="indicatorColor">
              <ColorPicker v-model="form.indicatorColor" recommend />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="当前指示点颜色" prop="indicatorActiveColor">
              <ColorPicker v-model="form.indicatorActiveColor" recommend />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否自动切换" prop="isAutoplay">
              <i-switch v-model="form.isAutoplay" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否衔接滑动" prop="swiperIsCircular">
              <i-switch v-model="form.swiperIsCircular" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="自动切换间隔" prop="swiperInterval">
              <Input type="number" v-model.number="form.swiperInterval">
                <span slot="append">毫秒</span>
              </Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="滑动动画时长" prop="swiperDuration">
              <Input type="number" v-model.number="form.swiperDuration">
                <span slot="append">毫秒</span>
              </Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="显示滑块数量" prop="displayMultipleIitems">
              <Input
                type="number"
                v-model.number="form.displayMultipleIitems"
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="切换动画类型" prop="easingFunctionType">
              <EnumSelect
                code="EasingFunctionTypeEnum"
                v-model="form.easingFunctionType"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="前边距" prop="previousMargin">
              <Input v-model="form.previousMargin">
                <span slot="append">px</span>
              </Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="后边距" prop="nextMargin">
              <Input v-model="form.nextMargin">
                <span slot="append">px</span>
              </Input>
            </FormItem>
          </Col>
        </Row>
      </Card>

      <Card title="搜索配置" v-if="form.pageModuleTypeId === 9">
        <Row>
          <Col span="12">
            <FormItem label="搜索类型" prop="searchTypeId">
              <EnumSelect
                code="SearchTypeEnum"
                v-model="form.searchTypeId"
                :resultType="2"
                multiple
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="搜索提示信息" prop="searchName">
              <Input v-model="form.searchName" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否展示热门搜索" prop="isShowHotSearch">
              <i-switch v-model="form.isShowHotSearch" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否展示搜索分类" prop="isShowSearchFilter">
              <i-switch v-model="form.isShowSearchFilter" />
            </FormItem>
          </Col>
        </Row>
      </Card>

      <Card title="导航菜单配置" v-if="form.pageModuleTypeId === 4">
        <Row>
          <Col span="12">
            <FormItem label="页数" prop="pages">
              <Input type="number" v-model.number="form.pages" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="行数" prop="rows">
              <Input type="number" v-model.number="form.rows" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="列数" prop="cells">
              <Input type="number" v-model.number="form.cells" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="网格差距" prop="gridGap">
              <Input type="number" v-model.number="form.gridGap" />
            </FormItem>
          </Col>
        </Row>
      </Card>
      <Card
        title="数据配置"
        v-if="
          form.pageModuleTypeId === 2 ||
          form.pageModuleTypeId === 3 ||
          form.pageModuleTypeId === 4 ||
          form.pageModuleTypeId === 5 ||
          form.pageModuleTypeId === 6 ||
          form.pageModuleTypeId === 7 ||
          form.pageModuleTypeId === 13 ||
          form.pageModuleTypeId === 14
        "
      >
        <Row>
          <Col span="12">
            <FormItem label="数据类型" prop="dataTypeId">
              <EnumSelect
                code="AppletModuleDataTypeEnum"
                v-model="form.dataTypeId"
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否读取子项" prop="isChild">
              <i-switch v-model="form.isChild" />
            </FormItem>
          </Col>
        </Row>
        <template
          v-if="
            form.pageModuleDataTypeId === 1 ||
            form.pageModuleDataTypeId === 2 ||
            form.pageModuleDataTypeId === 3 ||
            form.pageModuleDataTypeId === 4 ||
            form.pageModuleDataTypeId === 5
          "
        >
          <Row>
            <Col span="12">
              <FormItem label="站点集合" prop="siteIds">
                <SiteLookUp v-model="form.siteIdArray" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="栏目集合" prop="columnIds">
                <ColumnLookUp v-model="form.columnIdArray" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="读取条数" prop="count">
                <Input type="number" v-model.number="form.count" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="标题长度" prop="titleLenth">
                <Input type="number" v-model.number="form.titleLenth" />
              </FormItem>
            </Col>
          </Row>
        </template>
        <template v-if="form.pageModuleDataTypeId === 6">
          <Row>
            <Col span="24">
              <FormItem label="内容" prop="content">
                <Input type="textarea" row="4" v-model="form.content" />
              </FormItem>
            </Col>
          </Row>
        </template>
        <template
          v-if="
            form.pageModuleDataTypeId === 10 || form.pageModuleDataTypeId === 11
          "
        >
          <Row>
            <Col span="24">
              <FormItem label="主键集合" prop="objectIds">
                <Input type="textArea" v-model="form.objectIds" />
              </FormItem>
            </Col>
          </Row>
        </template>
      </Card>

      <Card title="样式设置">
        <PageModuleStyleTemplate
          :dataList="pageModuleStyleDataList"
          v-model="form.appPageModuleStyleId"
        />
      </Card>

      <Card title="自定义设置">
        <Collapse v-model="showSetting" @on-change="panelChange">
          <Panel name="setting">
            {{ showSettingTitle }}
            <template slot="content">
              <Card title="父项设置">
                <a href="#" slot="extra" @click.prevent="clearStyle"> </a>
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
                      <ColorPicker v-model="form.borderColor" recommend />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="12">
                    <FormItem label="颜色" prop="color">
                      <ColorPicker v-model="form.color" recommend />
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="字体颜色" prop="fontColor">
                      <ColorPicker v-model="form.fontColor" recommend />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="12">
                    <FormItem label="背景色" prop="backgroundColor">
                      <ColorPicker v-model="form.backgroundColor" recommend />
                    </FormItem> </Col
                  ><Col span="12">
                    <FormItem label="背景图片地址" prop="backgroundImageUrl">
                      <AppImageLinkLookUp v-model="form.backgroundImageUrl" />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <FormItem label="自定义样式" prop="style">
                      <Input type="textarea" row="4" v-model="form.style" />
                    </FormItem>
                  </Col>
                </Row>
              </Card>
              <Card title="子项模块设置">
                <Row>
                  <Col span="12">
                    <FormItem label="副标题浮动类型" prop="subFloat">
                      <EnumSelect
                        code="FloatTypeEnum"
                        v-model="form.subFloat"
                      />
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="副标题宽度" prop="subWidth">
                      <Input v-model="form.subWidth" />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <FormItem label="标题样式" prop="titleStyle">
                      <Input
                        type="textarea"
                        row="4"
                        v-model="form.titleStyle"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <FormItem label="副标题样式" prop="subtitleStyle">
                      <Input
                        type="textarea"
                        row="4"
                        v-model="form.subtitleStyle"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <FormItem label="左图标样式" prop="iconLeftStyle">
                      <Input
                        type="textarea"
                        row="4"
                        v-model="form.iconLeftStyle"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <FormItem label="右图标样式" prop="iconRightStyle">
                      <Input
                        type="textarea"
                        row="4"
                        v-model="form.iconRightStyle"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="12">
                    <FormItem label="副标题内边距" prop="subPadding">
                      <Input v-model="form.subPadding" />
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="副标题外边距" prop="subMargin">
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
                    <FormItem label="副标题边框颜色" prop="subBorderColor">
                      <ColorPicker v-model="form.subBorderColor" recommend />
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="副标题边框样式" prop="subBorderStyle">
                      <EnumSelect
                        code="BorderStyleTypeEnum"
                        v-model="form.subBorderStyle"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row
                  ><Col span="12">
                    <FormItem label="副标题圆角边框" prop="subBorderRadius">
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
                      <Input type="textarea" row="4" v-model="form.boxShadow" />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="12">
                    <FormItem label="副标题背景色" prop="subBackgroundColor">
                      <ColorPicker
                        v-model="form.subBackgroundColor"
                        recommend
                      />
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem
                      label="副标题背景图片地址"
                      prop="subBackgroundImage"
                    >
                      <AppImageLinkLookUp v-model="form.subBackgroundImage" />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <FormItem label="副标题自定义样式" prop="subStyle">
                      <Input type="textarea" row="4" v-model="form.subStyle" />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <FormItem label="模块样式" prop="resultSubStyle">
                      <Input
                        type="textarea"
                        row="4"
                        v-model="form.resultSubStyle"
                      />
                    </FormItem>
                  </Col>
                </Row>
              </Card>
            </template>
          </Panel>
        </Collapse>
      </Card>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { getStepNodeName } from '@/lib/util';
import { appPageModuleApi } from '@/api/app/app-page-module';
import { appPageModuleStyleApi } from '@/api/app/app-page-module-style';
import { enumApi } from '@/api/enum.js';
import EnumSelect from '@/components/drop-down-select/enum-select';
import RoleLookUp from '@/components/look-up/role-look-up';
import SiteLookUp from '@/components/look-up/site-look-up';
import ColumnLookUp from '@/components/look-up/column-look-up';
import ImageSelect from '@/components/image-select';
import AppImageLinkLookUp from '@/components/look-up/app-image-link-look-up';
import PageModuleStyleTemplate from '@/components/app/app-page-module-style';
export default {
  name: 'AppPageModuleListForm',
  components: {
    EnumSelect,
    RoleLookUp,
    SiteLookUp,
    ColumnLookUp,
    ImageSelect,
    AppImageLinkLookUp,
    PageModuleStyleTemplate
  },
  props: {
    appPageId: {
      type: Number
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
      propModal: {
        propAppPageId: this.appPageId
      },
      parentPageModuleDataList: [],
      pageModuleTypeDataList: [],
      pageModuleStyleDataList: [],
      styleTemplateData: {},
      showSetting: '',
      showSettingTitle: '展开',
      // 表单数据
      form: {
        // 主键Id
        appPageModuleId: null,
        // 页面
        appPageId: this.appPageId,
        // 模块类型
        pageModuleTypeId: null,
        // 高度
        height: null,
        // 类名
        moduleClassName: null,
        // 背景图片地址
        backgroundImageUrl: null,
        // 背景色
        backgroundColor: '',
        // 样式
        style: null,
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
        // 是否显示头部
        isShowHeader: null,
        // 标题
        title: null,
        // 副标题
        subtitle: null,
        // 标题说明
        introduce: null,
        // 左边图标
        iconLeftUrl: null,
        // 右边图标
        iconRightUrl: null,
        // 图片
        imageUrl: null,
        // 类名
        className: null,
        // 颜色
        color: '',
        // 字体颜色
        fontColor: '',
        // 点击类型
        clickTypeId: null,
        // 跳转地址名称
        urlName: null,
        // 跳转地址
        url: null,
        // 页数
        pages: null,
        // 行数
        rows: null,
        // 列数
        cells: null,
        // 是否显示指示点
        isIndicatorDot: null,
        // 指示点颜色
        indicatorColor: '',
        // 当前指示点颜色
        indicatorActiveColor: '',
        // 是否自动切换
        isAutoplay: null,
        // 自动切换间隔
        swiperInterval: null,
        // 滑动动画时长
        swiperDuration: null,
        // 是否衔接滑动
        swiperIsCircular: null,
        // 是否纵向滑动
        swiperIsVertical: null,
        // 前边距
        previousMargin: null,
        // 后边距
        nextMargin: null,
        // 显示滑块数量
        displayMultipleIitems: null,
        // 是否跳过未显示的滑块布局
        skipHiddenItemLayout: null,
        // 图片间隔宽度
        imageIntervalWidth: null,
        // 是否显示标题
        isShowTitle: null,
        // 标题显示类型
        showTitleTypeId: null,
        // 搜索类型
        searchTypeId: null,
        // 搜索提示信息
        searchName: null,
        // 是否展示热门搜索
        isShowHotSearch: null,
        // 是否展示搜索分类
        isShowSearchFilter: null,
        // 数据类型
        dataTypeId: null,
        // 站点集合
        siteIds: null,
        // 栏目集合
        columnIds: null,
        // 读取条数
        count: null,
        // 标题长度
        titleLenth: null,
        // 是否读取子项
        isChild: null,
        // 内容
        content: null,
        // 父Id
        parentId: null,
        // 父Id串
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 总排序
        sortIndex: null,
        // 是否删除
        isDelete: null,
        // 网格差距
        gridGap: null,
        // 当前网格数
        gridCount: null,
        // 主键集合
        objectId: null,
        // 模块样式
        resultStyle: null,
        // 头部样式
        resultHeaderStyle: null,
        // 显示类型
        pageModuleId: null,
        // 副标题模块宽度
        subModuleWidth: null,
        // 切换动画类型
        easingFunctionType: null,
        // 模块样式Id
        appPageModuleStyleId: null,
        // 左图标样式
        iconLeftStyle: null,
        // 右图标样式
        iconRightStyle: null,
        // 宽度
        width: null,
        // 副标题高度
        subHeight: null,
        // 副标题宽度
        subWidth: null,
        // 副标题浮动类型
        subFloat: null,
        // 副标题背景图片地址
        subBackgroundImage: null,
        // 副标题背景色
        subBackgroundColor: '',
        // 副标题外边距
        subMargin: null,
        // 副标题内边距
        subPadding: null,
        // 副标题圆角边框
        subBorderRadius: null,
        // 副标题边框颜色
        subBorderColor: '',
        // 副标题边框样式
        subBorderStyle: null,
        // 副标题边框宽度
        subBorderWidth: null,
        // 标题样式
        titleStyle: null,
        // 副标题样式
        subtitleStyle: null,
        // 自定义样式
        subStyle: null,
        // 边框宽度
        border_Width: null,
        // 横轴对齐方式
        justifyContent: null,
        // 纵轴对齐方式
        alignItems: null,
        // 显示方向
        flexDirection: null,
        // 阴影
        boxShadow: null,
        // 模块样式
        resultSubStyle: null,
        // 地址类型
        urlTypeId: null,
        // AppId
        urlAppId: null,
        // 目标小程序数据
        urlExtraData: null,
        // 显示类型
        showTypeId: null,
        // 页面所属角色
        showRoleIds: null,
        // 头部子项样式
        resultChildStyle: null,
        // 头部背景图片
        resultTitleImg: null,
        // 主键集合
        objectIds: null,
        // 是否为体验版展示
        isDevelop: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        appPageModuleId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键Id',
            trigger: 'blur'
          }
        ],
        // 模块类型
        pageModuleTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入模块类型',
            trigger: 'blur'
          }
        ],
        // 数据类型
        dataTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入数据类型',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  watch: {
    updateData: function (newValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'appPageModuleId', newValue['appPageModuleId']);
      }
    },
    isUpdate: function (newValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    },
    appPageId: function (newValue) {
      if (newValue) {
        this.propModal.propAppPageId = newValue;
      }
    },
    appPageModuleId: function (newValue) {
      if (newValue) {
        this.propModal.propAppPageModuleId = newValue;
      }
    },
    'form.pageModuleTypeId': function (newValue) {
      if (newValue) {
        this.initPageModuleStyleList(newValue);
      } else {
        this.pageModuleStyleDataList = [];
      }
      this.form.appPageModuleStyleId = null;
    },
    'form.appPageModuleStyleId': function (newVal) {
      if (newVal) {
        this.styleTemplateData = this.pageModuleStyleDataList.find(
          (item) => item.appPageModuleStyleId === newVal
        );
        // 将style赋值父项、子项的样式
        this.fillAllStyle(this.styleTemplateData);
      } else {
        this.clearStyle();
      }
    }
  },
  created () {
    this.initEnum();
    this.initData();
  },
  mounted () {},
  methods: {
    async initData () {
      // 加载本页面下父级组件
      try {
        let params = { appPageId: this.propModal.propAppPageId, pageSize: 999 };
        let result = await appPageModuleApi.queryAppPageModule(params);
        this.parentPageModuleDataList = [];
        result.data.list.forEach((item) => {
          item.name = getStepNodeName(
            this.getPageModuleType(item.pageModuleTypeId),
            item.depth
          );
          this.parentPageModuleDataList.push(item);
        });
      } finally {
      }
    },
    initPageModuleStyleList (pageModuleTypeId) {
      (async () => {
        this.$Spin.show();
        let params = {
          pageSize: 999
        };
        if (pageModuleTypeId) {
          params.pageModuleTypeId = pageModuleTypeId;
          let res = await appPageModuleStyleApi.queryAppPageModuleStyle(params);
          this.pageModuleStyleDataList = res.data.list;
        }
        this.$Spin.hide();
      })();
    },
    async initEnum () {
      try {
        let result = await enumApi.getEnumItemByEnumCode(
          'AppletPageModuleTypeEnum'
        );
        this.pageModuleTypeDataList = result.data;
      } finally {
      }
    },
    getPageModuleType (moduleTypeId) {
      let tmpEnum = this.pageModuleTypeDataList
        .filter((p) => {
          if (p.id === moduleTypeId) {
            return p;
          }
        })
        .map((o) => o.name)
        .join();
      return tmpEnum;
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
        appPageModuleId: null,
        // 页面
        appPageId: this.appPageId,
        // 模块类型
        pageModuleTypeId: null,
        // 高度
        height: null,
        // 类名
        moduleClassName: null,
        // 背景图片地址
        backgroundImageUrl: null,
        // 背景色
        backgroundColor: '',
        // 样式
        style: null,
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
        // 是否显示头部
        isShowHeader: null,
        // 标题
        title: null,
        // 副标题
        subtitle: null,
        // 标题说明
        introduce: null,
        // 左边图标
        iconLeftUrl: null,
        // 右边图标
        iconRightUrl: null,
        // 图片
        imageUrl: null,
        // 类名
        className: null,
        // 颜色
        color: '',
        // 字体颜色
        fontColor: '',
        // 点击类型
        clickTypeId: null,
        // 跳转地址名称
        urlName: null,
        // 跳转地址
        url: null,
        // 页数
        pages: null,
        // 行数
        rows: null,
        // 列数
        cells: null,
        // 是否显示指示点
        isIndicatorDot: null,
        // 指示点颜色
        indicatorColor: '',
        // 当前指示点颜色
        indicatorActiveColor: '',
        // 是否自动切换
        isAutoplay: null,
        // 自动切换间隔
        swiperInterval: null,
        // 滑动动画时长
        swiperDuration: null,
        // 是否衔接滑动
        swiperIsCircular: null,
        // 是否纵向滑动
        swiperIsVertical: null,
        // 前边距
        previousMargin: null,
        // 后边距
        nextMargin: null,
        // 显示滑块数量
        displayMultipleIitems: null,
        // 是否跳过未显示的滑块布局
        skipHiddenItemLayout: null,
        // 图片间隔宽度
        imageIntervalWidth: null,
        // 是否显示标题
        isShowTitle: null,
        // 标题显示类型
        showTitleTypeId: null,
        // 搜索类型
        searchTypeId: null,
        // 搜索提示信息
        searchName: null,
        // 是否展示热门搜索
        isShowHotSearch: null,
        // 是否展示搜索分类
        isShowSearchFilter: null,
        // 数据类型
        dataTypeId: null,
        // 站点集合
        siteIds: null,
        // 栏目集合
        columnIds: null,
        // 读取条数
        count: null,
        // 标题长度
        titleLenth: null,
        // 是否读取子项
        isChild: false,
        // 内容
        content: null,
        // 父Id
        parentId: null,
        // 父Id串
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 总排序
        sortIndex: null,
        // 是否删除
        isDelete: null,
        // 网格差距
        gridGap: null,
        // 当前网格数
        gridCount: null,
        // 主键集合
        objectId: null,
        // 模块样式
        resultStyle: null,
        // 头部样式
        resultHeaderStyle: null,
        // 显示类型
        pageModuleId: null,
        // 副标题模块宽度
        subModuleWidth: null,
        // 切换动画类型
        easingFunctionType: null,
        // 模块样式Id
        appPageModuleStyleId: null,
        // 左图标样式
        iconLeftStyle: null,
        // 右图标样式
        iconRightStyle: null,
        // 宽度
        width: null,
        // 副标题高度
        subHeight: null,
        // 副标题宽度
        subWidth: null,
        // 副标题浮动类型
        subFloat: null,
        // 副标题背景图片地址
        subBackgroundImage: null,
        // 副标题背景色
        subBackgroundColor: '',
        // 副标题外边距
        subMargin: null,
        // 副标题内边距
        subPadding: null,
        // 副标题圆角边框
        subBorderRadius: null,
        // 副标题边框颜色
        subBorderColor: '',
        // 副标题边框样式
        subBorderStyle: null,
        // 副标题边框宽度
        subBorderWidth: null,
        // 标题样式
        titleStyle: null,
        // 副标题样式
        subtitleStyle: null,
        // 自定义样式
        subStyle: null,
        // 边框宽度
        border_Width: null,
        // 横轴对齐方式
        justifyContent: null,
        // 纵轴对齐方式
        alignItems: null,
        // 显示方向
        flexDirection: null,
        // 阴影
        boxShadow: null,
        // 模块样式
        resultSubStyle: null,
        // 地址类型
        urlTypeId: null,
        // AppId
        urlAppId: null,
        // 目标小程序数据
        urlExtraData: null,
        // 显示类型
        showTypeId: null,
        // 页面所属角色
        showRoleIds: null,
        // 头部子项样式
        resultChildStyle: null,
        // 头部背景图片
        resultTitleImg: null,
        // 主键集合
        objectIds: null,
        // 是否为体验版展示
        isDevelop: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await appPageModuleApi.addAppPageModule(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await appPageModuleApi.updateAppPageModule(this.form);
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
      // 父项
      this.form.isShowTitle = false;
      this.form.showTitleTypeId = null;
      this.form.width = null;
      this.form.height = null;
      this.form.padding = null;
      this.form.margin = null;
      this.form.borderRadius = null;
      this.form.borderWidth = null;
      this.form.borderStyle = null;
      this.form.borderColor = '';
      this.form.color = '';
      this.form.fontColor = '';
      this.form.backgroundColor = '';
      this.form.backgroundImageUrl = null;
      this.form.style = null;
      // 子项style
      this.form.subFloat = null;
      this.form.subWidth = null;
      this.form.titleStyle = null;
      this.form.subtitleStyle = null;
      this.form.iconLeftStyle = null;
      this.form.iconRightStyle = null;
      this.form.subMargin = null;
      this.form.subPadding = null;
      this.form.border_Width = null;
      this.form.subBorderWidth = null;
      this.form.subBorderColor = '';
      this.form.subBorderStyle = null;
      this.form.subBorderRadius = null;
      this.form.justifyContent = null;
      this.form.alignItems = null;
      this.form.flexDirection = null;
      this.form.boxShadow = null;
      this.form.subBackgroundColor = '';
      this.form.subBackgroundImage = null;
      this.form.subStyle = null;
    },
    fillAllStyle () {
      if (this.styleTemplateData) {
        // 父项
        this.form.isShowTitle = this.styleTemplateData.isShowTitle;
        this.form.showTitleTypeId = this.styleTemplateData.showTitleTypeId;
        this.form.width = this.styleTemplateData.width;
        this.form.height = this.styleTemplateData.height;
        this.form.padding = this.styleTemplateData.padding;
        this.form.margin = this.styleTemplateData.margin;
        this.form.borderRadius = this.styleTemplateData.borderRadius;
        this.form.borderWidth = this.styleTemplateData.borderWidth;
        this.form.borderStyle = this.styleTemplateData.borderStyle;
        this.form.borderColor = this.styleTemplateData.borderColor || '';
        this.form.color = this.styleTemplateData.color || '';
        this.form.fontColor = this.styleTemplateData.fontColor || '';
        this.form.backgroundColor =
          this.styleTemplateData.backgroundColor || '';
        this.form.backgroundImageUrl =
          this.styleTemplateData.backgroundImageUrl;
        this.form.style = this.styleTemplateData.style;
        // 子项style
        this.form.subFloat = this.styleTemplateData.subFloat;
        this.form.subWidth = this.styleTemplateData.subWidth;
        this.form.titleStyle = this.styleTemplateData.titleStyle;
        this.form.subtitleStyle = this.styleTemplateData.subtitleStyle;
        this.form.iconLeftStyle = this.styleTemplateData.iconLeftStyle;
        this.form.iconRightStyle = this.styleTemplateData.iconRightStyle;
        this.form.subMargin = this.styleTemplateData.subMargin;
        this.form.subPadding = this.styleTemplateData.subPadding;
        this.form.border_Width = this.styleTemplateData.border_Width;
        this.form.subBorderWidth = this.styleTemplateData.subBorderWidth;
        this.form.subBorderColor = this.styleTemplateData.subBorderColor || '';
        this.form.subBorderStyle = this.styleTemplateData.subBorderStyle;
        this.form.subBorderRadius = this.styleTemplateData.subBorderRadius;
        this.form.justifyContent = this.styleTemplateData.justifyContent;
        this.form.alignItems = this.styleTemplateData.alignItems;
        this.form.flexDirection = this.styleTemplateData.flexDirection;
        this.form.boxShadow = this.styleTemplateData.boxShadow;
        this.form.subBackgroundColor =
          this.styleTemplateData.subBackgroundColor || '';
        this.form.subBackgroundImage =
          this.styleTemplateData.subBackgroundImage;
        this.form.subStyle = this.styleTemplateData.subStyle;
      }
    }
  }
};
</script>
<style>
.row {
  border: 1px solid #dcdee2;
}
</style>
