<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="自有应用" prop="appPlatformAccountId">
            <PlatformSelect v-model="form.appPlatformAccountId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信账户" prop="weiXinAccountId">
            <WxAccountSelect v-model="form.weiXinAccountId" />
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
          <FormItem label="版本号" prop="version">
            <Input v-model="form.version" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="介绍" prop="introduce">
            <Input type="textarea" v-model="form.introduce" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否必须登录" prop="isMustLogon">
            <i-switch v-model="form.isMustLogon" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开放登录" prop="isOpenLogon">
            <i-switch v-model="form.isOpenLogon" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="主题颜色" prop="themeColor">
            <Input v-model="form.themeColor" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="标题字体颜色" prop="titleFontColor">
            <Input v-model="form.titleFontColor" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="选择后颜色" prop="selectedColor">
            <Input v-model="form.selectedColor" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="登录页标题" prop="logonTitle">
            <Input v-model="form.logonTitle" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="登录页按钮名称" prop="logonButtonName">
            <Input v-model="form.logonButtonName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="登录页说明" prop="logonRemark">
            <Input v-model="form.logonRemark" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="登录页底部图片" prop="logonBottomImageUrl">
            <Input v-model="form.logonBottomImageUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <i-switch v-model="form.isDelete" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="缓存时间" prop="expirationDate">
            <Input type="number" v-model.number="form.expirationDate" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="启动屏幕类型" prop="splashScreenTypeId">
            <Input type="number" v-model.number="form.splashScreenTypeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="访问限制类型 枚举：1、登录用户，2、角色类型，3、指定角色，4、指定用户"
            prop="logonRestrictionTypeId"
          >
            <EnumSelect
              v-model="form.logonRestrictionTypeId"
              code="AccessRestrictionTypeEnum"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="指定用户类型" prop="logonRestrictionUserIdentityIds">
            <EnumLookUp
              v-model="form.logonRestrictionUserIdentityIdArray"
              code="UserIdentityTypeEnum"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="指定角色" prop="logonRestrictionRoleIds">
            <RoleLookUp v-model="form.logonRestrictionRoleIdArray" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="指定用户" prop="logonRestrictionUserIds">
             <EmployeeLookUp v-model="form.logonRestrictionUserIdArray" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否显示评论栏" prop="isShowComment">
            <i-switch v-model="form.isShowComment" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否显示考核" prop="isShowAssessment">
            <i-switch v-model="form.isShowAssessment" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否显示留言列表" prop="isShowCommentList">
            <i-switch v-model="form.isShowCommentList" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="视频是否显示相关视频" prop="isShowRelatedVideo">
            <i-switch v-model="form.isShowRelatedVideo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否显示上下篇" prop="isShowPreviousOrNextPage">
            <i-switch v-model="form.isShowPreviousOrNextPage" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="不显示文章的浏览次数的栏目集合"
            prop="noShowArticleviewCountColumnIds"
          >
            <Input v-model="form.noShowArticleviewCountColumnIds" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="手机展示样式" prop="voteMobileStyleId">
            <Input type="number" v-model.number="form.voteMobileStyleId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="患者总数" prop="addPatientCount">
            <Input type="number" v-model.number="form.addPatientCount" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启His档案绑定" prop="isOpenPatientBind">
            <i-switch v-model="form.isOpenPatientBind" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启人脸认证" prop="isOpenFacialVerify">
            <i-switch v-model="form.isOpenFacialVerify" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启在线建档" prop="isOpenOnlineDocumen">
            <i-switch v-model="form.isOpenOnlineDocumen" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="人脸识别失败次数" prop="facialVerifyFailCount">
            <Input type="number" v-model.number="form.facialVerifyFailCount" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="公有图片地址" prop="commonImgUrl">
            <Input v-model="form.commonImgUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="自定义图片地址" prop="customImgUrl">
            <Input v-model="form.customImgUrl" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="院区默认展示图片" prop="areaShowImage">
            <Input v-model="form.areaShowImage" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="院区默认展示Icon图标" prop="areaShowIcon">
            <Input v-model="form.areaShowIcon" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="画布宽度" prop="backgroundSizeWidth">
            <Input v-model="form.backgroundSizeWidth" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="画布高度" prop="backgroundSizeHeight">
            <Input v-model="form.backgroundSizeHeight" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否显示我的预约按钮" prop="isAppointmentButton">
            <i-switch v-model="form.isAppointmentButton" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="背景大小" prop="backgroundSize">
            <Input v-model="form.backgroundSize" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="出诊表分类科室切换方式"
            prop="schedulingTableShowTypeId"
          >
            <Input
              type="number"
              v-model.number="form.schedulingTableShowTypeId"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启His手机号认证" prop="isOpenHisMobileVerify">
            <i-switch v-model="form.isOpenHisMobileVerify" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="绑定是否必须认证" prop="isMustVerifyPatientBind">
            <i-switch v-model="form.isMustVerifyPatientBind" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="建档是否必须认证" prop="isMustVerifyOnlineDocumen">
            <i-switch v-model="form.isMustVerifyOnlineDocumen" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启患者信息编辑补充" prop="isOpenPerfectInfo">
            <i-switch v-model="form.isOpenPerfectInfo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否必须认证后可编辑补充"
            prop="isMustVerifyPerfectInfo"
          >
            <i-switch v-model="form.isMustVerifyPerfectInfo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="是否允许认证患者变更His手机号"
            prop="isVerifyChangeHisMobile"
          >
            <i-switch v-model="form.isVerifyChangeHisMobile" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启患者信息上报" prop="isOpenPatientInfoReport">
            <i-switch v-model="form.isOpenPatientInfoReport" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者认证提示语" prop="patientValidateTips">
            <Input v-model="form.patientValidateTips" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启患者就诊码" prop="isOpenPatientVisitCode">
            <i-switch v-model="form.isOpenPatientVisitCode" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="患者就诊码类型" prop="patientVisitCodeTypeId">
            <Input type="number" v-model.number="form.patientVisitCodeTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="专家医生轮播方式" prop="expertDoctorSwiperTypeId">
            <Input
              type="number"
              v-model.number="form.expertDoctorSwiperTypeId"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="首页是否弹出隐私协议" prop="isHomePagePrivacyPop">
            <i-switch v-model="form.isHomePagePrivacyPop" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="隐私协议主键" prop="privacyPopAgreementId">
            <Input type="number" v-model.number="form.privacyPopAgreementId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启用户名登录" prop="isOpenAccountLogon">
            <i-switch v-model="form.isOpenAccountLogon" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="登录是否人脸认证" prop="isFaceVerifyForLogon">
            <i-switch v-model="form.isFaceVerifyForLogon" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启CA认证" prop="isOpenCACertification">
            <i-switch v-model="form.isOpenCACertification" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启医生编辑患者信息" prop="isDoctorEditPatient">
            <i-switch v-model="form.isDoctorEditPatient" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="CA认证服务接口地址" prop="cAServiceUrl">
            <Input v-model="form.cAServiceUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否开启过期登录再次人脸验证"
            prop="againFaceVerifyForLogon"
          >
            <i-switch v-model="form.againFaceVerifyForLogon" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启页面统计" prop="isOpenStatistics">
            <i-switch v-model="form.isOpenStatistics" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="页面点击统计排除地址" prop="excludeUrl">
            <Input v-model="form.excludeUrl" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启仅匹配Url路径" prop="isMatchOnlyUrl">
            <i-switch v-model="form.isMatchOnlyUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="持续表现_测试数字个数（毫秒）"
            prop="continuousPerformance_NumberCount"
          >
            <Input
              type="number"
              v-model.number="form.continuousPerformance_NumberCount"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="持续表现_显示间隔（毫秒）"
            prop="continuousPerformance_DisplayInterval"
          >
            <Input
              type="number"
              v-model.number="form.continuousPerformance_DisplayInterval"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="持续表现_显示时间（毫秒）"
            prop="continuousPerformance_DisplayTime"
          >
            <Input
              type="number"
              v-model.number="form.continuousPerformance_DisplayTime"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="持续表现_点击无效时间（毫秒）"
            prop="continuousPerformance_ClickInvalildTime"
          >
            <Input
              type="number"
              v-model.number="form.continuousPerformance_ClickInvalildTime"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="登录是否必须完善信息" prop="isLogonMustImproveInfo">
            <i-switch v-model="form.isLogonMustImproveInfo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否默认绑定默认用户" prop="isOpenBindDefaultUser">
            <i-switch v-model="form.isOpenBindDefaultUser" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否启用体验版" prop="isDividedChannel">
            <i-switch v-model="form.isDividedChannel" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启医生关注" prop="isOPenClinicSubscribe">
            <i-switch v-model="form.isOPenClinicSubscribe" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="小程序日志排除地址" prop="logExcludeUrl">
            <Input v-model="form.logExcludeUrl" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启消息推送" prop="isOpenNotice">
            <i-switch v-model="form.isOpenNotice" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否为默认设置" prop="isDefault">
            <i-switch v-model="form.isDefault" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="CA认证服务端Appid应用id" prop="cAServiceAppId">
            <Input v-model="form.cAServiceAppId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="CA认证服务端Appid应用密钥" prop="cAServiceSecretKey">
            <Input v-model="form.cAServiceSecretKey" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="CA认证服务端端签名地址" prop="cAServiceAppUrl">
            <Input v-model="form.cAServiceAppUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否开启预约倒计时展示"
            prop="isShowScheduleCountDown"
          >
            <i-switch v-model="form.isShowScheduleCountDown" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启电子健康卡" prop="isOpenHealthCard">
            <i-switch v-model="form.isOpenHealthCard" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启浏览记录" prop="isOpenBrowsHistory">
            <i-switch v-model="form.isOpenBrowsHistory" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否开启收藏" prop="isOpenCollect">
            <i-switch v-model="form.isOpenCollect" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否只使用微信手机授权登录"
            prop="isOnlyWeiXinPhoneLogon"
          >
            <i-switch v-model="form.isOnlyWeiXinPhoneLogon" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="平台类型" prop="platformTypeId">
            <Input type="number" v-model.number="form.platformTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="平台账号" prop="platformObjectId">
            <Input type="number" v-model.number="form.platformObjectId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="可搜索类型，默认为全部" prop="searchTypeIds">
            <Input v-model="form.searchTypeIds" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="搜索配置" prop="searchConfig">
            <Input v-model="form.searchConfig" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="健康卡显示名称" prop="healthCardName">
            <Input v-model="form.healthCardName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="健康卡底部显示名称" prop="healthCardFootName">
            <Input v-model="form.healthCardFootName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="健康卡委员会名称" prop="healthCardCommitteeName">
            <Input v-model="form.healthCardCommitteeName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否开启新增患者信息完善"
            prop="isOpenNewPatientInfoPerfect"
          >
            <i-switch v-model="form.isOpenNewPatientInfoPerfect" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="是否在预约前选择患者"
            prop="isSelectPatientBeforeAppointment"
          >
            <i-switch v-model="form.isSelectPatientBeforeAppointment" />
          </FormItem>
        </Col>
        <Col span="12"> </Col>
      </Row>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { appSettingApi } from '@/api/app/app-setting';
import EnumSelect from '@/components/drop-down-select/enum-select';
import PlatformSelect from '@/components/drop-down-select/platform-select';
import WxAccountSelect from '@/components/drop-down-select/wx-account-select';
import RoleLookUp from '@/components/look-up/role-look-up';
import EnumLookUp from '@/components/look-up/enum-look-up';
import EmployeeLookUp from '@/components/look-up/employee-look-up';
export default {
  name: 'AppSettingListForm',
  components: {
    EnumSelect,
    PlatformSelect,
    WxAccountSelect,
    RoleLookUp,
    EnumLookUp,
    EmployeeLookUp
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
    }
  },
  data () {
    return {
      // 表单数据
      form: {
        // 主键
        appSettingId: null,
        // 自有应用Id
        appPlatformAccountId: null,
        // 微信账户Id
        weiXinAccountId: null,
        // 版本号
        version: null,
        // 名称
        name: null,
        // 介绍
        introduce: null,
        // 是否必须登录
        isMustLogon: null,
        // 是否开放登录
        isOpenLogon: null,
        // 主题颜色
        themeColor: null,
        // 标题字体颜色
        titleFontColor: null,
        // 选择后颜色
        selectedColor: null,
        // 登录页标题
        logonTitle: null,
        // 登录页按钮名称
        logonButtonName: null,
        // 登录页说明
        logonRemark: null,
        // 登录页底部图片
        logonBottomImageUrl: null,
        // 是否删除
        isDelete: null,
        // 缓存时间
        expirationDate: null,
        // 启动屏幕类型
        splashScreenTypeId: null,
        // 访问限制类型 枚举：1、登录用户，2、角色类型，3、指定角色，4、指定用户
        logonRestrictionTypeId: null,
        // 指定用户类型
        logonRestrictionUserIdentityIds: null,
        logonRestrictionUserIdentityIdArray: [],
        // 指定角色
        logonRestrictionRoleIdArray: [],
        // 指定用户
        logonRestrictionUserIds: null,
        logonRestrictionUserIdArray: [],
        // 是否显示评论栏
        isShowComment: null,
        // 是否显示考核
        isShowAssessment: null,
        // 是否显示留言列表
        isShowCommentList: null,
        // 视频是否显示相关视频
        isShowRelatedVideo: null,
        // 是否显示上下篇
        isShowPreviousOrNextPage: null,
        // 不显示文章的浏览次数的栏目集合
        noShowArticleviewCountColumnIds: null,
        // 手机展示样式
        voteMobileStyleId: null,
        // 患者总数
        addPatientCount: null,
        // 是否开启His档案绑定
        isOpenPatientBind: null,
        // 是否开启人脸认证
        isOpenFacialVerify: null,
        // 是否开启在线建档
        isOpenOnlineDocumen: null,
        // 人脸识别失败次数
        facialVerifyFailCount: null,
        // 公有图片地址
        commonImgUrl: null,
        // 自定义图片地址
        customImgUrl: null,
        // 院区默认展示图片
        areaShowImage: null,
        // 院区默认展示Icon图标
        areaShowIcon: null,
        // 画布宽度
        backgroundSizeWidth: null,
        // 画布高度
        backgroundSizeHeight: null,
        // 是否显示我的预约按钮
        isAppointmentButton: null,
        // 背景大小
        backgroundSize: null,
        // 出诊表分类科室切换方式
        schedulingTableShowTypeId: null,
        // 是否开启His手机号认证
        isOpenHisMobileVerify: null,
        // 绑定是否必须认证
        isMustVerifyPatientBind: null,
        // 建档是否必须认证
        isMustVerifyOnlineDocumen: null,
        // 是否开启患者信息编辑补充
        isOpenPerfectInfo: null,
        // 是否必须认证后可编辑补充
        isMustVerifyPerfectInfo: null,
        // 是否允许认证患者变更His手机号
        isVerifyChangeHisMobile: null,
        // 是否开启患者信息上报
        isOpenPatientInfoReport: null,
        // 患者认证提示语
        patientValidateTips: null,
        // 是否开启患者就诊码
        isOpenPatientVisitCode: null,
        // 患者就诊码类型
        patientVisitCodeTypeId: null,
        // 专家医生轮播方式
        expertDoctorSwiperTypeId: null,
        // 首页是否弹出隐私协议
        isHomePagePrivacyPop: null,
        // 隐私协议主键
        privacyPopAgreementId: null,
        // 是否开启用户名登录
        isOpenAccountLogon: null,
        // 登录是否人脸认证
        isFaceVerifyForLogon: null,
        // 是否开启CA认证
        isOpenCACertification: null,
        // 是否开启医生编辑患者信息
        isDoctorEditPatient: null,
        // CA认证服务接口地址
        cAServiceUrl: null,
        // 是否开启过期登录再次人脸验证
        againFaceVerifyForLogon: null,
        // 是否开启页面统计
        isOpenStatistics: null,
        // 页面点击统计排除地址
        excludeUrl: null,
        // 是否开启仅匹配Url路径
        isMatchOnlyUrl: null,
        // 持续表现_测试数字个数（毫秒）
        continuousPerformance_NumberCount: null,
        // 持续表现_显示间隔（毫秒）
        continuousPerformance_DisplayInterval: null,
        // 持续表现_显示时间（毫秒）
        continuousPerformance_DisplayTime: null,
        // 持续表现_点击无效时间（毫秒）
        continuousPerformance_ClickInvalildTime: null,
        // 登录是否必须完善信息
        isLogonMustImproveInfo: null,
        // 是否默认绑定默认用户
        isOpenBindDefaultUser: null,
        // 是否启用体验版
        isDividedChannel: null,
        // 是否开启医生关注
        isOPenClinicSubscribe: null,
        // 小程序日志排除地址
        logExcludeUrl: null,
        // 是否开启消息推送
        isOpenNotice: null,
        // 是否为默认设置
        isDefault: null,
        // CA认证服务端Appid应用id
        cAServiceAppId: null,
        // CA认证服务端Appid应用密钥
        cAServiceSecretKey: null,
        // CA认证服务端端签名地址
        cAServiceAppUrl: null,
        // 是否开启预约倒计时展示
        isShowScheduleCountDown: null,
        // 是否开启电子健康卡
        isOpenHealthCard: null,
        // 是否开启浏览记录
        isOpenBrowsHistory: null,
        // 是否开启收藏
        isOpenCollect: null,
        // 是否只使用微信手机授权登录
        isOnlyWeiXinPhoneLogon: null,
        // 平台类型
        platformTypeId: null,
        // 平台账号
        platformObjectId: null,
        // 可搜索类型，默认为全部
        searchTypeIds: null,
        // 搜索配置
        searchConfig: null,
        // 健康卡显示名称
        healthCardName: null,
        // 健康卡底部显示名称
        healthCardFootName: null,
        // 健康卡委员会名称
        healthCardCommitteeName: null,
        // 是否开启新增患者信息完善
        isOpenNewPatientInfoPerfect: null,
        // 是否在预约前选择患者
        isSelectPatientBeforeAppointment: null
      },
      // 表单验证
      formValidate: {
        // 主键
        appSettingId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键',
            trigger: 'blur'
          }
        ],
        // 自有应用Id
        appPlatformAccountId: [
          {
            type: 'number',
            required: true,
            message: '请输入自有应用Id',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'appSettingId', newValue['appSettingId']);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
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
      console.log(this.$refs['form']);
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
        appSettingId: null,
        // 自有应用Id
        appPlatformAccountId: null,
        // 微信账户Id
        weiXinAccountId: null,
        // 版本号
        version: null,
        // 名称
        name: null,
        // 介绍
        introduce: null,
        // 是否必须登录
        isMustLogon: null,
        // 是否开放登录
        isOpenLogon: null,
        // 主题颜色
        themeColor: null,
        // 标题字体颜色
        titleFontColor: null,
        // 选择后颜色
        selectedColor: null,
        // 登录页标题
        logonTitle: null,
        // 登录页按钮名称
        logonButtonName: null,
        // 登录页说明
        logonRemark: null,
        // 登录页底部图片
        logonBottomImageUrl: null,
        // 是否删除
        isDelete: null,
        // 缓存时间
        expirationDate: null,
        // 启动屏幕类型
        splashScreenTypeId: null,
        // 访问限制类型 枚举：1、登录用户，2、角色类型，3、指定角色，4、指定用户
        logonRestrictionTypeId: null,
        // 指定用户类型
        logonRestrictionUserIdentityIds: null,
        // 指定角色
        logonRestrictionRoleIds: null,
        // 指定用户
        logonRestrictionUserIds: null,
        // 是否显示评论栏
        isShowComment: null,
        // 是否显示考核
        isShowAssessment: null,
        // 是否显示留言列表
        isShowCommentList: null,
        // 视频是否显示相关视频
        isShowRelatedVideo: null,
        // 是否显示上下篇
        isShowPreviousOrNextPage: null,
        // 不显示文章的浏览次数的栏目集合
        noShowArticleviewCountColumnIds: null,
        // 手机展示样式
        voteMobileStyleId: null,
        // 患者总数
        addPatientCount: null,
        // 是否开启His档案绑定
        isOpenPatientBind: null,
        // 是否开启人脸认证
        isOpenFacialVerify: null,
        // 是否开启在线建档
        isOpenOnlineDocumen: null,
        // 人脸识别失败次数
        facialVerifyFailCount: null,
        // 公有图片地址
        commonImgUrl: null,
        // 自定义图片地址
        customImgUrl: null,
        // 院区默认展示图片
        areaShowImage: null,
        // 院区默认展示Icon图标
        areaShowIcon: null,
        // 画布宽度
        backgroundSizeWidth: null,
        // 画布高度
        backgroundSizeHeight: null,
        // 是否显示我的预约按钮
        isAppointmentButton: null,
        // 背景大小
        backgroundSize: null,
        // 出诊表分类科室切换方式
        schedulingTableShowTypeId: null,
        // 是否开启His手机号认证
        isOpenHisMobileVerify: null,
        // 绑定是否必须认证
        isMustVerifyPatientBind: null,
        // 建档是否必须认证
        isMustVerifyOnlineDocumen: null,
        // 是否开启患者信息编辑补充
        isOpenPerfectInfo: null,
        // 是否必须认证后可编辑补充
        isMustVerifyPerfectInfo: null,
        // 是否允许认证患者变更His手机号
        isVerifyChangeHisMobile: null,
        // 是否开启患者信息上报
        isOpenPatientInfoReport: null,
        // 患者认证提示语
        patientValidateTips: null,
        // 是否开启患者就诊码
        isOpenPatientVisitCode: null,
        // 患者就诊码类型
        patientVisitCodeTypeId: null,
        // 专家医生轮播方式
        expertDoctorSwiperTypeId: null,
        // 首页是否弹出隐私协议
        isHomePagePrivacyPop: null,
        // 隐私协议主键
        privacyPopAgreementId: null,
        // 是否开启用户名登录
        isOpenAccountLogon: null,
        // 登录是否人脸认证
        isFaceVerifyForLogon: null,
        // 是否开启CA认证
        isOpenCACertification: null,
        // 是否开启医生编辑患者信息
        isDoctorEditPatient: null,
        // CA认证服务接口地址
        cAServiceUrl: null,
        // 是否开启过期登录再次人脸验证
        againFaceVerifyForLogon: null,
        // 是否开启页面统计
        isOpenStatistics: null,
        // 页面点击统计排除地址
        excludeUrl: null,
        // 是否开启仅匹配Url路径
        isMatchOnlyUrl: null,
        // 持续表现_测试数字个数（毫秒）
        continuousPerformance_NumberCount: null,
        // 持续表现_显示间隔（毫秒）
        continuousPerformance_DisplayInterval: null,
        // 持续表现_显示时间（毫秒）
        continuousPerformance_DisplayTime: null,
        // 持续表现_点击无效时间（毫秒）
        continuousPerformance_ClickInvalildTime: null,
        // 登录是否必须完善信息
        isLogonMustImproveInfo: null,
        // 是否默认绑定默认用户
        isOpenBindDefaultUser: null,
        // 是否启用体验版
        isDividedChannel: null,
        // 是否开启医生关注
        isOPenClinicSubscribe: null,
        // 小程序日志排除地址
        logExcludeUrl: null,
        // 是否开启消息推送
        isOpenNotice: null,
        // 是否为默认设置
        isDefault: null,
        // CA认证服务端Appid应用id
        cAServiceAppId: null,
        // CA认证服务端Appid应用密钥
        cAServiceSecretKey: null,
        // CA认证服务端端签名地址
        cAServiceAppUrl: null,
        // 是否开启预约倒计时展示
        isShowScheduleCountDown: null,
        // 是否开启电子健康卡
        isOpenHealthCard: null,
        // 是否开启浏览记录
        isOpenBrowsHistory: null,
        // 是否开启收藏
        isOpenCollect: null,
        // 是否只使用微信手机授权登录
        isOnlyWeiXinPhoneLogon: null,
        // 平台类型
        platformTypeId: null,
        // 平台账号
        platformObjectId: null,
        // 可搜索类型，默认为全部
        searchTypeIds: null,
        // 搜索配置
        searchConfig: null,
        // 健康卡显示名称
        healthCardName: null,
        // 健康卡底部显示名称
        healthCardFootName: null,
        // 健康卡委员会名称
        healthCardCommitteeName: null,
        // 是否开启新增患者信息完善
        isOpenNewPatientInfoPerfect: null,
        // 是否在预约前选择患者
        isSelectPatientBeforeAppointment: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await appSettingApi.addAppSetting(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await appSettingApi.updateAppSetting(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
