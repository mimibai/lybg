<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

          <FormItem label="擅长" prop="specialty">
            <Input v-model="form.specialty" />
          </FormItem>
          <FormItem label="在医院排名" prop="totalRanking">
            <Input type="number" v-model.number="form.totalRanking" />
          </FormItem>
          <FormItem label="是否为专家" prop="isExpert">
            <Input v-model="form.isExpert" />
          </FormItem>
          <FormItem label="分管范围" prop="chargeRange">
            <Input v-model="form.chargeRange" />
          </FormItem>
          <FormItem label="咨询范围" prop="consultationScope">
            <Input v-model="form.consultationScope" />
          </FormItem>
          <FormItem label="医疗职称" prop="professionalTitleId">
            <Input type="number" v-model.number="form.professionalTitleId" />
          </FormItem>
          <FormItem label="教学职称" prop="teachingTitleId">
            <Input type="number" v-model.number="form.teachingTitleId" />
          </FormItem>
          <FormItem label="最高学历" prop="educationTitleId">
            <Input type="number" v-model.number="form.educationTitleId" />
          </FormItem>
          <FormItem label="其他职称" prop="otherTitle">
            <Input v-model="form.otherTitle" />
          </FormItem>
          <FormItem label="院内职务" prop="positionTitleId">
            <Input type="number" v-model.number="form.positionTitleId" />
          </FormItem>
          <FormItem label="其他职务" prop="otherPositionTitle">
            <Input v-model="form.otherPositionTitle" />
          </FormItem>
          <FormItem label="所在医院" prop="hospitalId">
            <Input type="number" v-model.number="form.hospitalId" />
          </FormItem>
          <FormItem label="PersonId" prop="personId">
            <Input type="number" v-model.number="form.personId" />
          </FormItem>
          <FormItem label="关联UserId" prop="userId">
            <Input type="number" v-model.number="form.userId" />
          </FormItem>
          <FormItem label="人员身份" prop="personIdentityId">
            <Input type="number" v-model.number="form.personIdentityId" />
          </FormItem>
          <FormItem label="姓名" prop="name">
            <Input v-model="form.name" />
          </FormItem>
          <FormItem label="拼音" prop="pinyin">
            <Input v-model="form.pinyin" />
          </FormItem>
          <FormItem label="拼音首字母" prop="pinyinInitials">
            <Input v-model="form.pinyinInitials" />
          </FormItem>
          <FormItem label="性别：枚举：1=男，2=女" prop="genderId">
            <Input type="number" v-model.number="form.genderId" />
          </FormItem>
          <FormItem label="出生日期" prop="birthday">
            <Input v-model="form.birthday" />
          </FormItem>
          <FormItem label="年龄" prop="age">
            <Input type="number" v-model.number="form.age" />
          </FormItem>
          <FormItem label="民族" prop="nationId">
            <Input type="number" v-model.number="form.nationId" />
          </FormItem>
          <FormItem label="身份证号码" prop="iDCardNo">
            <Input v-model="form.iDCardNo" />
          </FormItem>
          <FormItem label="婚姻状态" prop="maritalStatusId">
            <Input type="number" v-model.number="form.maritalStatusId" />
          </FormItem>
          <FormItem label="职业" prop="occupation">
            <Input v-model="form.occupation" />
          </FormItem>
          <FormItem label="工作单位" prop="office">
            <Input v-model="form.office" />
          </FormItem>
          <FormItem label="住址" prop="address">
            <Input v-model="form.address" />
          </FormItem>
          <FormItem label="联系地址" prop="contactAddress">
            <Input v-model="form.contactAddress" />
          </FormItem>
          <FormItem label="邮编" prop="zipCode">
            <Input v-model="form.zipCode" />
          </FormItem>
          <FormItem label="昵称" prop="nickName">
            <Input v-model="form.nickName" />
          </FormItem>
          <FormItem label="头像路径" prop="avatarPath">
            <Input v-model="form.avatarPath" />
          </FormItem>
          <FormItem label="介绍" prop="description">
            <Input v-model="form.description" />
          </FormItem>
          <FormItem label="Email" prop="email">
            <Input v-model="form.email" />
          </FormItem>
          <FormItem label="手机号码" prop="mobileNumber">
            <Input v-model="form.mobileNumber" />
          </FormItem>
          <FormItem label="电话" prop="phone">
            <Input v-model="form.phone" />
          </FormItem>
          <FormItem label="网址" prop="website">
            <Input v-model="form.website" />
          </FormItem>
          <FormItem label="MSN" prop="mSN">
            <Input v-model="form.mSN" />
          </FormItem>
          <FormItem label="QQ" prop="qQ">
            <Input v-model="form.qQ" />
          </FormItem>
          <FormItem label="备注" prop="remark">
            <Input v-model="form.remark" />
          </FormItem>
          <FormItem label="是否有效" prop="isEnable">
            <Input v-model="form.isEnable" />
          </FormItem>
          <FormItem label="省份" prop="provinceId">
            <Input type="number" v-model.number="form.provinceId" />
          </FormItem>
          <FormItem label="城市" prop="cityId">
            <Input type="number" v-model.number="form.cityId" />
          </FormItem>
          <FormItem label="所在站点" prop="siteId">
            <Input type="number" v-model.number="form.siteId" />
          </FormItem>
          <FormItem label="停诊备注" prop="stopSchedulingNote">
            <Input v-model="form.stopSchedulingNote" />
          </FormItem>
          <FormItem label="Haodf的医生Id" prop="doctorInfoId">
            <Input v-model="form.doctorInfoId" />
          </FormItem>
          <FormItem label="员工编号" prop="staffNumber">
            <Input v-model="form.staffNumber" />
          </FormItem>
          <FormItem label="关联的文章数" prop="relatedArticleNumber">
            <Input type="number" v-model.number="form.relatedArticleNumber" />
          </FormItem>
          <FormItem label="是否开通问答" prop="isOpenQuiz">
            <Input v-model="form.isOpenQuiz" />
          </FormItem>
          <FormItem label="是否开通微博" prop="isOpenMicroblog">
            <Input v-model="form.isOpenMicroblog" />
          </FormItem>
          <FormItem label="微博名称" prop="microblogName">
            <Input v-model="form.microblogName" />
          </FormItem>
          <FormItem label="微博地址" prop="microblogUrl">
            <Input v-model="form.microblogUrl" />
          </FormItem>
          <FormItem label="微博代码" prop="microblogCode">
            <Input v-model="form.microblogCode" />
          </FormItem>
          <FormItem label="微博描述" prop="microblogDescription">
            <Input v-model="form.microblogDescription" />
          </FormItem>
          <FormItem label="手机号码类型" prop="mobileType">
            <Input type="number" v-model.number="form.mobileType" />
          </FormItem>
          <FormItem label="是否开启预约" prop="isOpenAppoint">
            <Input v-model="form.isOpenAppoint" />
          </FormItem>
          <FormItem label="是否开启绿色通道" prop="isOpenGreenChannel">
            <Input v-model="form.isOpenGreenChannel" />
          </FormItem>
          <FormItem label="默认门诊诊室Id" prop="schedulingClinicId">
            <Input type="number" v-model.number="form.schedulingClinicId" />
          </FormItem>
          <FormItem label="执业证书号" prop="practisingCertificateNo">
            <Input v-model="form.practisingCertificateNo" />
          </FormItem>
          <FormItem label="关键字" prop="keyword">
            <Input v-model="form.keyword" />
          </FormItem>
          <FormItem label="是否公开" prop="isOpen">
            <Input v-model="form.isOpen" />
          </FormItem>
          <FormItem label="特殊分组" prop="doctorSpecialGroupId">
            <Input type="number" v-model.number="form.doctorSpecialGroupId" />
          </FormItem>
          <FormItem label="关键字Id" prop="keywordUrlId">
            <Input type="number" v-model.number="form.keywordUrlId" />
          </FormItem>
          <FormItem label="关键字Id集合" prop="keywordUrlIds">
            <Input v-model="form.keywordUrlIds" />
          </FormItem>
          <FormItem label="拼音首字母" prop="firstLetter">
            <Input v-model="form.firstLetter" />
          </FormItem>
          <FormItem label="毕业学校" prop="school">
            <Input v-model="form.school" />
          </FormItem>
          <FormItem label="SEO关键字" prop="seoKeywords">
            <Input v-model="form.seoKeywords" />
          </FormItem>
          <FormItem label="SEO描述" prop="seoDescription">
            <Input v-model="form.seoDescription" />
          </FormItem>
          <FormItem label="是否将网址仅作为超链接处理" prop="isRegardWebsiteAsLink">
            <Input v-model="form.isRegardWebsiteAsLink" />
          </FormItem>
          <FormItem label="是否默认进入单独搜索首页" prop="isDefalultEnterSeparateSearchPage">
            <Input v-model="form.isDefalultEnterSeparateSearchPage" />
          </FormItem>
          <FormItem label="是否显示在手机端" prop="isShowInMobile">
            <Input v-model="form.isShowInMobile" />
          </FormItem>
          <FormItem label="是否有出诊" prop="isHaveScheduling">
            <Input v-model="form.isHaveScheduling" />
          </FormItem>
          <FormItem label="是否有预约" prop="isHaveAppoint">
            <Input v-model="form.isHaveAppoint" />
          </FormItem>
          <FormItem label="社会任职" prop="socialOffice">
            <Input v-model="form.socialOffice" />
          </FormItem>
          <FormItem label="微信头像路径" prop="weiXinAvatarPath">
            <Input v-model="form.weiXinAvatarPath" />
          </FormItem>
          <FormItem label="本人是否可修改个人详细信息" prop="isCanUpdateDetails">
            <Input v-model="form.isCanUpdateDetails" />
          </FormItem>
          <FormItem label="是否停诊" prop="isStopClinic">
            <Input v-model="form.isStopClinic" />
          </FormItem>
          <FormItem label="停诊类型" prop="clinicTypeId">
            <Input type="number" v-model.number="form.clinicTypeId" />
          </FormItem>
          <FormItem label="停诊开始时间" prop="clinicStartTime">
            <Input v-model="form.clinicStartTime" />
          </FormItem>
          <FormItem label="停诊结束时间" prop="clinicEndTime">
            <Input v-model="form.clinicEndTime" />
          </FormItem>
          <FormItem label="子站点" prop="childSiteIds">
            <Input v-model="form.childSiteIds" />
          </FormItem>
          <FormItem label="子站点是否私有" prop="isChildSitePrivate">
            <Input v-model="form.isChildSitePrivate" />
          </FormItem>
          <FormItem label="现专业技术职务" prop="nowProfessionalTechnicalPositions">
            <Input v-model="form.nowProfessionalTechnicalPositions" />
          </FormItem>
          <FormItem label="确定时间" prop="determineTime">
            <Input v-model="form.determineTime" />
          </FormItem>
          <FormItem label="外语语种" prop="foreignLanguage">
            <Input v-model="form.foreignLanguage" />
          </FormItem>
          <FormItem label="成绩" prop="results">
            <Input v-model="form.results" />
          </FormItem>
          <FormItem label="取得时间" prop="foreignLanguageMakeTime">
            <Input v-model="form.foreignLanguageMakeTime" />
          </FormItem>
          <FormItem label="申报职务" prop="declarePosition">
            <Input v-model="form.declarePosition" />
          </FormItem>
          <FormItem label="申报专业" prop="declareProfessional">
            <Input v-model="form.declareProfessional" />
          </FormItem>
          <FormItem label="计算机模块" prop="computerModuleId">
            <Input type="number" v-model.number="form.computerModuleId" />
          </FormItem>
          <FormItem label="来院时间" prop="toHospitalTime">
            <Input v-model="form.toHospitalTime" />
          </FormItem>
          <FormItem label="到首医系统时间" prop="firstMedicalSystemTime">
            <Input v-model="form.firstMedicalSystemTime" />
          </FormItem>
          <FormItem label="院内申报次数" prop="hospitalInDeclareNumber">
            <Input type="number" v-model.number="form.hospitalInDeclareNumber" />
          </FormItem>
          <FormItem label="院外申报次数" prop="hospitalOfDeclareNumber">
            <Input type="number" v-model.number="form.hospitalOfDeclareNumber" />
          </FormItem>
          <FormItem label="是否有岗前培训或教师资格" prop="isHaveServiceTrainingOrTeacherCertification">
            <Input v-model="form.isHaveServiceTrainingOrTeacherCertification" />
          </FormItem>
          <FormItem label="每年工作周数" prop="everyWeekNumber">
            <Input type="number" v-model.number="form.everyWeekNumber" />
          </FormItem>
          <FormItem label="有无患者投诉" prop="isHavePatientComplaints">
            <Input v-model="form.isHavePatientComplaints" />
          </FormItem>
          <FormItem label="有无丙级简历" prop="isHaveClassBingCases">
            <Input v-model="form.isHaveClassBingCases" />
          </FormItem>
          <FormItem label="有无差错事故" prop="isHaveErrorAccident">
            <Input v-model="form.isHaveErrorAccident" />
          </FormItem>
          <FormItem label="继续教育学时" prop="continuingEducationHours">
            <Input v-model="form.continuingEducationHours" />
          </FormItem>
          <FormItem label="年工作量" prop="yearsWork">
            <Input v-model="form.yearsWork" />
          </FormItem>
          <FormItem label="有无传染病培训" prop="isHaveInfectiousDiseasesTraining">
            <Input v-model="form.isHaveInfectiousDiseasesTraining" />
          </FormItem>
          <FormItem label="有无病案例培训" prop="isHaveMedicalRecordRoomTraining">
            <Input v-model="form.isHaveMedicalRecordRoomTraining" />
          </FormItem>
          <FormItem label="有无急诊轮转" prop="isHaveEmergencyRotation">
            <Input v-model="form.isHaveEmergencyRotation" />
          </FormItem>
          <FormItem label="有无导师资格" prop="isHaveInstructorQualifications">
            <Input v-model="form.isHaveInstructorQualifications" />
          </FormItem>
          <FormItem label="导师资格取得时间" prop="instructorQualifyForTime">
            <Input v-model="form.instructorQualifyForTime" />
          </FormItem>
          <FormItem label="现教学职务" prop="teachingPositionId">
            <Input type="number" v-model.number="form.teachingPositionId" />
          </FormItem>
          <FormItem label="申报教学职务" prop="declarationTeachingPositionId">
            <Input type="number" v-model.number="form.declarationTeachingPositionId" />
          </FormItem>
          <FormItem label="默认诊室集合" prop="defaultClinicIds">
            <Input v-model="form.defaultClinicIds" />
          </FormItem>
          <FormItem label="是否允许手机登录" prop="isOpenMobileLogin">
            <Input v-model="form.isOpenMobileLogin" />
          </FormItem>
          <FormItem label="医生对象二维码ID" prop="weiXinDimensionalCodeId1">
            <Input type="number" v-model.number="form.weiXinDimensionalCodeId1" />
          </FormItem>
          <FormItem label="医生关注二维码ID" prop="weiXinDimensionalCodeId2">
            <Input type="number" v-model.number="form.weiXinDimensionalCodeId2" />
          </FormItem>
          <FormItem label="门诊是否静音" prop="isOutpatientMute">
            <Input v-model="form.isOutpatientMute" />
          </FormItem>
          <FormItem label="是否登录过手机" prop="isLoginMobile">
            <Input v-model="form.isLoginMobile" />
          </FormItem>
          <FormItem label="站点Ids" prop="siteIds">
            <Input v-model="form.siteIds" />
          </FormItem>
          <FormItem label="是否允许患者建立对话" prop="isOpenPatientCreateDialog">
            <Input v-model="form.isOpenPatientCreateDialog" />
          </FormItem>
          <FormItem label="默认门诊级别" prop="defaultSchedulingLevelId">
            <Input type="number" v-model.number="form.defaultSchedulingLevelId" />
          </FormItem>
          <FormItem label="默认挂号价格" prop="defaultPrice">
            <Input type="number" v-model.number="form.defaultPrice" />
          </FormItem>
          <FormItem label="是否审核" prop="isApprove">
            <Input v-model="form.isApprove" />
          </FormItem>
          <FormItem label="创建人" prop="posterId">
            <Input type="number" v-model.number="form.posterId" />
          </FormItem>
          <FormItem label="最后审核日期" prop="lastApproveDate">
            <Input v-model="form.lastApproveDate" />
          </FormItem>
          <FormItem label="审核人" prop="approverId">
            <Input type="number" v-model.number="form.approverId" />
          </FormItem>
          <FormItem label="二级审核状态   枚举字段：1=正常（默认），2=申请中，3=驳回，4=二次申请" prop="secondApprovalStateId">
            <Input type="number" v-model.number="form.secondApprovalStateId" />
          </FormItem>
          <FormItem label="新建或编辑状态  枚举字段：1=新建，2=编辑" prop="createOrUpdateStateId">
            <Input type="number" v-model.number="form.createOrUpdateStateId" />
          </FormItem>
          <FormItem label="最后修改人" prop="lastModifierId">
            <Input type="number" v-model.number="form.lastModifierId" />
          </FormItem>
          <FormItem label="对应的医生信息映射" prop="doctorMappingId">
            <Input type="number" v-model.number="form.doctorMappingId" />
          </FormItem>
          <FormItem label="是否删除" prop="isDelete">
            <Input v-model="form.isDelete" />
          </FormItem>
          <FormItem label="自定义字段1" prop="customField1">
            <Input v-model="form.customField1" />
          </FormItem>
          <FormItem label="自定义字段2" prop="customField2">
            <Input v-model="form.customField2" />
          </FormItem>
          <FormItem label="自定义字段3" prop="customField3">
            <Input v-model="form.customField3" />
          </FormItem>
          <FormItem label="自定义字段4" prop="customField4">
            <Input v-model="form.customField4" />
          </FormItem>
          <FormItem label="自定义字段5" prop="customField5">
            <Input v-model="form.customField5" />
          </FormItem>
          <FormItem label="自定义字段6" prop="customField6">
            <Input v-model="form.customField6" />
          </FormItem>
          <FormItem label="自定义字段7" prop="customField7">
            <Input v-model="form.customField7" />
          </FormItem>
          <FormItem label="自定义字段8" prop="customField8">
            <Input v-model="form.customField8" />
          </FormItem>
          <FormItem label="自定义字段9" prop="customField9">
            <Input v-model="form.customField9" />
          </FormItem>
          <FormItem label="自定义字段10" prop="customField10">
            <Input v-model="form.customField10" />
          </FormItem>
          <FormItem label="自动回复模板Id" prop="doctorAutomatedReplyTemplateId">
            <Input type="number" v-model.number="form.doctorAutomatedReplyTemplateId" />
          </FormItem>
          <FormItem label="自动回复类型" prop="doctorAutomatedReplyTypeId">
            <Input type="number" v-model.number="form.doctorAutomatedReplyTypeId" />
          </FormItem>
          <FormItem label="自动回复间隔时间" prop="doctorAutomatedReplyTimes">
            <Input type="number" v-model.number="form.doctorAutomatedReplyTimes" />
          </FormItem>
          <FormItem label="自动回复固定时间点" prop="doctorAutomatedReplyTiming">
            <Input v-model="form.doctorAutomatedReplyTiming" />
          </FormItem>
          <FormItem label="自动回复用户名" prop="doctorAutomatedReplyUserId">
            <Input type="number" v-model.number="form.doctorAutomatedReplyUserId" />
          </FormItem>
          <FormItem label="关联其他出诊医生集合" prop="schedulingDoctorIds">
            <Input v-model="form.schedulingDoctorIds" />
          </FormItem>
          <FormItem label="学术任职" prop="academicParticipation">
            <Input v-model="form.academicParticipation" />
          </FormItem>
          <FormItem label="主研方向" prop="researchDirection">
            <Input v-model="form.researchDirection" />
          </FormItem>
          <FormItem label="获奖情况" prop="awardSituation">
            <Input v-model="form.awardSituation" />
          </FormItem>
          <FormItem label="学术论著" prop="publishedPaper">
            <Input v-model="form.publishedPaper" />
          </FormItem>
          <FormItem label="视频总数" prop="videoCount">
            <Input type="number" v-model.number="form.videoCount" />
          </FormItem>
          <FormItem label="最新发布时间" prop="videoLatestReleaseDate">
            <Input v-model="form.videoLatestReleaseDate" />
          </FormItem>
          <FormItem label="图文问诊价格" prop="clinicPrice">
            <Input type="number" v-model.number="form.clinicPrice" />
          </FormItem>
          <FormItem label="是否开启在线问诊" prop="isOpenClinic">
            <Input v-model="form.isOpenClinic" />
          </FormItem>
          <FormItem label="复诊配置主键" prop="clinicSettingId">
            <Input type="number" v-model.number="form.clinicSettingId" />
          </FormItem>
          <FormItem label="CA签名的UserId" prop="msspId">
            <Input v-model="form.msspId" />
          </FormItem>
          <FormItem label="CA签名电子签章" prop="electronicSignature">
            <Input v-model="form.electronicSignature" />
          </FormItem>
          <FormItem label="语音问诊价格" prop="clinicVoicePrice">
            <Input type="number" v-model.number="form.clinicVoicePrice" />
          </FormItem>
          <FormItem label="视频问诊价格" prop="clinicVideoPrice">
            <Input type="number" v-model.number="form.clinicVideoPrice" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { doctorApi } from '@/api/organizations/doctor';
export default {
  name: 'DoctorListForm',
  components: {
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
        // 主键Id
        doctorId: null,
        // 擅长
        specialty: null,
        // 在医院排名
        totalRanking: null,
        // 是否为专家
        isExpert: null,
        // 分管范围
        chargeRange: null,
        // 咨询范围
        consultationScope: null,
        // 医疗职称
        professionalTitleId: null,
        // 教学职称
        teachingTitleId: null,
        // 最高学历
        educationTitleId: null,
        // 其他职称
        otherTitle: null,
        // 院内职务
        positionTitleId: null,
        // 其他职务
        otherPositionTitle: null,
        // 所在医院
        hospitalId: null,
        // PersonId
        personId: null,
        // 关联UserId
        userId: null,
        // 人员身份
        personIdentityId: null,
        // 姓名
        name: null,
        // 拼音
        pinyin: null,
        // 拼音首字母
        pinyinInitials: null,
        // 性别：枚举：1=男，2=女
        genderId: null,
        // 出生日期
        birthday: null,
        // 年龄
        age: null,
        // 民族
        nationId: null,
        // 身份证号码
        iDCardNo: null,
        // 婚姻状态
        maritalStatusId: null,
        // 职业
        occupation: null,
        // 工作单位
        office: null,
        // 住址
        address: null,
        // 联系地址
        contactAddress: null,
        // 邮编
        zipCode: null,
        // 昵称
        nickName: null,
        // 头像路径
        avatarPath: null,
        // 介绍
        description: null,
        // Email
        email: null,
        // 手机号码
        mobileNumber: null,
        // 电话
        phone: null,
        // 网址
        website: null,
        // MSN
        mSN: null,
        // QQ
        qQ: null,
        // 备注
        remark: null,
        // 是否有效
        isEnable: null,
        // 省份
        provinceId: null,
        // 城市
        cityId: null,
        // 所在站点
        siteId: null,
        // 停诊备注
        stopSchedulingNote: null,
        // Haodf的医生Id
        doctorInfoId: null,
        // 员工编号
        staffNumber: null,
        // 关联的文章数
        relatedArticleNumber: null,
        // 是否开通问答
        isOpenQuiz: null,
        // 是否开通微博
        isOpenMicroblog: null,
        // 微博名称
        microblogName: null,
        // 微博地址
        microblogUrl: null,
        // 微博代码
        microblogCode: null,
        // 微博描述
        microblogDescription: null,
        // 手机号码类型
        mobileType: null,
        // 是否开启预约
        isOpenAppoint: null,
        // 是否开启绿色通道
        isOpenGreenChannel: null,
        // 默认门诊诊室Id
        schedulingClinicId: null,
        // 执业证书号
        practisingCertificateNo: null,
        // 关键字
        keyword: null,
        // 是否公开
        isOpen: null,
        // 特殊分组
        doctorSpecialGroupId: null,
        // 关键字Id
        keywordUrlId: null,
        // 关键字Id集合
        keywordUrlIds: null,
        // 拼音首字母
        firstLetter: null,
        // 毕业学校
        school: null,
        // SEO关键字
        seoKeywords: null,
        // SEO描述
        seoDescription: null,
        // 是否将网址仅作为超链接处理
        isRegardWebsiteAsLink: null,
        // 是否默认进入单独搜索首页
        isDefalultEnterSeparateSearchPage: null,
        // 是否显示在手机端
        isShowInMobile: null,
        // 是否有出诊
        isHaveScheduling: null,
        // 是否有预约
        isHaveAppoint: null,
        // 社会任职
        socialOffice: null,
        // 微信头像路径
        weiXinAvatarPath: null,
        // 本人是否可修改个人详细信息
        isCanUpdateDetails: null,
        // 是否停诊
        isStopClinic: null,
        // 停诊类型
        clinicTypeId: null,
        // 停诊开始时间
        clinicStartTime: null,
        // 停诊结束时间
        clinicEndTime: null,
        // 子站点
        childSiteIds: null,
        // 子站点是否私有
        isChildSitePrivate: null,
        // 现专业技术职务
        nowProfessionalTechnicalPositions: null,
        // 确定时间
        determineTime: null,
        // 外语语种
        foreignLanguage: null,
        // 成绩
        results: null,
        // 取得时间
        foreignLanguageMakeTime: null,
        // 申报职务
        declarePosition: null,
        // 申报专业
        declareProfessional: null,
        // 计算机模块
        computerModuleId: null,
        // 来院时间
        toHospitalTime: null,
        // 到首医系统时间
        firstMedicalSystemTime: null,
        // 院内申报次数
        hospitalInDeclareNumber: null,
        // 院外申报次数
        hospitalOfDeclareNumber: null,
        // 是否有岗前培训或教师资格
        isHaveServiceTrainingOrTeacherCertification: null,
        // 每年工作周数
        everyWeekNumber: null,
        // 有无患者投诉
        isHavePatientComplaints: null,
        // 有无丙级简历
        isHaveClassBingCases: null,
        // 有无差错事故
        isHaveErrorAccident: null,
        // 继续教育学时
        continuingEducationHours: null,
        // 年工作量
        yearsWork: null,
        // 有无传染病培训
        isHaveInfectiousDiseasesTraining: null,
        // 有无病案例培训
        isHaveMedicalRecordRoomTraining: null,
        // 有无急诊轮转
        isHaveEmergencyRotation: null,
        // 有无导师资格
        isHaveInstructorQualifications: null,
        // 导师资格取得时间
        instructorQualifyForTime: null,
        // 现教学职务
        teachingPositionId: null,
        // 申报教学职务
        declarationTeachingPositionId: null,
        // 默认诊室集合
        defaultClinicIds: null,
        // 是否允许手机登录
        isOpenMobileLogin: null,
        // 医生对象二维码ID
        weiXinDimensionalCodeId1: null,
        // 医生关注二维码ID
        weiXinDimensionalCodeId2: null,
        // 门诊是否静音
        isOutpatientMute: null,
        // 是否登录过手机
        isLoginMobile: null,
        // 站点Ids
        siteIds: null,
        // 是否允许患者建立对话
        isOpenPatientCreateDialog: null,
        // 默认门诊级别
        defaultSchedulingLevelId: null,
        // 默认挂号价格
        defaultPrice: null,
        // 是否审核
        isApprove: null,
        // 创建人
        posterId: null,
        // 最后审核日期
        lastApproveDate: null,
        // 审核人
        approverId: null,
        // 二级审核状态   枚举字段：1=正常（默认），2=申请中，3=驳回，4=二次申请
        secondApprovalStateId: null,
        // 新建或编辑状态  枚举字段：1=新建，2=编辑
        createOrUpdateStateId: null,
        // 最后修改人
        lastModifierId: null,
        // 对应的医生信息映射
        doctorMappingId: null,
        // 是否删除
        isDelete: null,
        // 自定义字段1
        customField1: null,
        // 自定义字段2
        customField2: null,
        // 自定义字段3
        customField3: null,
        // 自定义字段4
        customField4: null,
        // 自定义字段5
        customField5: null,
        // 自定义字段6
        customField6: null,
        // 自定义字段7
        customField7: null,
        // 自定义字段8
        customField8: null,
        // 自定义字段9
        customField9: null,
        // 自定义字段10
        customField10: null,
        // 自动回复模板Id
        doctorAutomatedReplyTemplateId: null,
        // 自动回复类型
        doctorAutomatedReplyTypeId: null,
        // 自动回复间隔时间
        doctorAutomatedReplyTimes: null,
        // 自动回复固定时间点
        doctorAutomatedReplyTiming: null,
        // 自动回复用户名
        doctorAutomatedReplyUserId: null,
        // 关联其他出诊医生集合
        schedulingDoctorIds: null,
        // 学术任职
        academicParticipation: null,
        // 主研方向
        researchDirection: null,
        // 获奖情况
        awardSituation: null,
        // 学术论著
        publishedPaper: null,
        // 视频总数
        videoCount: null,
        // 最新发布时间
        videoLatestReleaseDate: null,
        // 图文问诊价格
        clinicPrice: null,
        // 是否开启在线问诊
        isOpenClinic: null,
        // 复诊配置主键
        clinicSettingId: null,
        // CA签名的UserId
        msspId: null,
        // CA签名电子签章
        electronicSignature: null,
        // 语音问诊价格
        clinicVoicePrice: null,
        // 视频问诊价格
        clinicVideoPrice: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        doctorId: [{ type: 'number', required: true, message: '请输入主键Id', trigger: 'blur' }],
        // 擅长
        specialty: [{ required: true, message: '请输入擅长', trigger: 'blur' }],
        // 在医院排名
        totalRanking: [{ type: 'number', required: true, message: '请输入在医院排名', trigger: 'blur' }],
        // 是否为专家
        isExpert: [{ required: true, message: '请输入是否为专家', trigger: 'blur' }],
        // 分管范围
        chargeRange: [{ required: true, message: '请输入分管范围', trigger: 'blur' }],
        // 咨询范围
        consultationScope: [{ required: true, message: '请输入咨询范围', trigger: 'blur' }],
        // 医疗职称
        professionalTitleId: [{ type: 'number', required: true, message: '请输入医疗职称', trigger: 'blur' }],
        // 教学职称
        teachingTitleId: [{ type: 'number', required: true, message: '请输入教学职称', trigger: 'blur' }],
        // 最高学历
        educationTitleId: [{ type: 'number', required: true, message: '请输入最高学历', trigger: 'blur' }],
        // 其他职称
        otherTitle: [{ required: true, message: '请输入其他职称', trigger: 'blur' }],
        // 院内职务
        positionTitleId: [{ type: 'number', required: true, message: '请输入院内职务', trigger: 'blur' }],
        // 其他职务
        otherPositionTitle: [{ required: true, message: '请输入其他职务', trigger: 'blur' }],
        // 所在医院
        hospitalId: [{ type: 'number', required: true, message: '请输入所在医院', trigger: 'blur' }],
        // PersonId
        personId: [{ type: 'number', required: true, message: '请输入PersonId', trigger: 'blur' }],
        // 关联UserId
        userId: [{ type: 'number', required: true, message: '请输入关联UserId', trigger: 'blur' }],
        // 人员身份
        personIdentityId: [{ type: 'number', required: true, message: '请输入人员身份', trigger: 'blur' }],
        // 姓名
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        // 拼音
        pinyin: [{ required: true, message: '请输入拼音', trigger: 'blur' }],
        // 拼音首字母
        pinyinInitials: [{ required: true, message: '请输入拼音首字母', trigger: 'blur' }],
        // 性别：枚举：1=男，2=女
        genderId: [{ type: 'number', required: true, message: '请输入性别：枚举：1=男，2=女', trigger: 'blur' }],
        // 出生日期
        birthday: [{ required: true, message: '请输入出生日期', trigger: 'blur' }],
        // 年龄
        age: [{ type: 'number', required: true, message: '请输入年龄', trigger: 'blur' }],
        // 民族
        nationId: [{ type: 'number', required: true, message: '请输入民族', trigger: 'blur' }],
        // 身份证号码
        iDCardNo: [{ required: true, message: '请输入身份证号码', trigger: 'blur' }],
        // 婚姻状态
        maritalStatusId: [{ type: 'number', required: true, message: '请输入婚姻状态', trigger: 'blur' }],
        // 职业
        occupation: [{ required: true, message: '请输入职业', trigger: 'blur' }],
        // 工作单位
        office: [{ required: true, message: '请输入工作单位', trigger: 'blur' }],
        // 住址
        address: [{ required: true, message: '请输入住址', trigger: 'blur' }],
        // 联系地址
        contactAddress: [{ required: true, message: '请输入联系地址', trigger: 'blur' }],
        // 邮编
        zipCode: [{ required: true, message: '请输入邮编', trigger: 'blur' }],
        // 昵称
        nickName: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        // 头像路径
        avatarPath: [{ required: true, message: '请输入头像路径', trigger: 'blur' }],
        // 介绍
        description: [{ required: true, message: '请输入介绍', trigger: 'blur' }],
        // Email
        email: [{ required: true, message: '请输入Email', trigger: 'blur' }],
        // 手机号码
        mobileNumber: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        // 电话
        phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
        // 网址
        website: [{ required: true, message: '请输入网址', trigger: 'blur' }],
        // MSN
        mSN: [{ required: true, message: '请输入MSN', trigger: 'blur' }],
        // QQ
        qQ: [{ required: true, message: '请输入QQ', trigger: 'blur' }],
        // 备注
        remark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        // 是否有效
        isEnable: [{ required: true, message: '请输入是否有效', trigger: 'blur' }],
        // 省份
        provinceId: [{ type: 'number', required: true, message: '请输入省份', trigger: 'blur' }],
        // 城市
        cityId: [{ type: 'number', required: true, message: '请输入城市', trigger: 'blur' }],
        // 所在站点
        siteId: [{ type: 'number', required: true, message: '请输入所在站点', trigger: 'blur' }],
        // 停诊备注
        stopSchedulingNote: [{ required: true, message: '请输入停诊备注', trigger: 'blur' }],
        // Haodf的医生Id
        doctorInfoId: [{ required: true, message: '请输入Haodf的医生Id', trigger: 'blur' }],
        // 员工编号
        staffNumber: [{ required: true, message: '请输入员工编号', trigger: 'blur' }],
        // 关联的文章数
        relatedArticleNumber: [{ type: 'number', required: true, message: '请输入关联的文章数', trigger: 'blur' }],
        // 是否开通问答
        isOpenQuiz: [{ required: true, message: '请输入是否开通问答', trigger: 'blur' }],
        // 是否开通微博
        isOpenMicroblog: [{ required: true, message: '请输入是否开通微博', trigger: 'blur' }],
        // 微博名称
        microblogName: [{ required: true, message: '请输入微博名称', trigger: 'blur' }],
        // 微博地址
        microblogUrl: [{ required: true, message: '请输入微博地址', trigger: 'blur' }],
        // 微博代码
        microblogCode: [{ required: true, message: '请输入微博代码', trigger: 'blur' }],
        // 微博描述
        microblogDescription: [{ required: true, message: '请输入微博描述', trigger: 'blur' }],
        // 手机号码类型
        mobileType: [{ type: 'number', required: true, message: '请输入手机号码类型', trigger: 'blur' }],
        // 是否开启预约
        isOpenAppoint: [{ required: true, message: '请输入是否开启预约', trigger: 'blur' }],
        // 是否开启绿色通道
        isOpenGreenChannel: [{ required: true, message: '请输入是否开启绿色通道', trigger: 'blur' }],
        // 默认门诊诊室Id
        schedulingClinicId: [{ type: 'number', required: true, message: '请输入默认门诊诊室Id', trigger: 'blur' }],
        // 执业证书号
        practisingCertificateNo: [{ required: true, message: '请输入执业证书号', trigger: 'blur' }],
        // 关键字
        keyword: [{ required: true, message: '请输入关键字', trigger: 'blur' }],
        // 是否公开
        isOpen: [{ required: true, message: '请输入是否公开', trigger: 'blur' }],
        // 特殊分组
        doctorSpecialGroupId: [{ type: 'number', required: true, message: '请输入特殊分组', trigger: 'blur' }],
        // 关键字Id
        keywordUrlId: [{ type: 'number', required: true, message: '请输入关键字Id', trigger: 'blur' }],
        // 关键字Id集合
        keywordUrlIds: [{ required: true, message: '请输入关键字Id集合', trigger: 'blur' }],
        // 拼音首字母
        firstLetter: [{ required: true, message: '请输入拼音首字母', trigger: 'blur' }],
        // 毕业学校
        school: [{ required: true, message: '请输入毕业学校', trigger: 'blur' }],
        // SEO关键字
        seoKeywords: [{ required: true, message: '请输入SEO关键字', trigger: 'blur' }],
        // SEO描述
        seoDescription: [{ required: true, message: '请输入SEO描述', trigger: 'blur' }],
        // 是否将网址仅作为超链接处理
        isRegardWebsiteAsLink: [{ required: true, message: '请输入是否将网址仅作为超链接处理', trigger: 'blur' }],
        // 是否默认进入单独搜索首页
        isDefalultEnterSeparateSearchPage: [{ required: true, message: '请输入是否默认进入单独搜索首页', trigger: 'blur' }],
        // 是否显示在手机端
        isShowInMobile: [{ required: true, message: '请输入是否显示在手机端', trigger: 'blur' }],
        // 是否有出诊
        isHaveScheduling: [{ required: true, message: '请输入是否有出诊', trigger: 'blur' }],
        // 是否有预约
        isHaveAppoint: [{ required: true, message: '请输入是否有预约', trigger: 'blur' }],
        // 社会任职
        socialOffice: [{ required: true, message: '请输入社会任职', trigger: 'blur' }],
        // 微信头像路径
        weiXinAvatarPath: [{ required: true, message: '请输入微信头像路径', trigger: 'blur' }],
        // 本人是否可修改个人详细信息
        isCanUpdateDetails: [{ required: true, message: '请输入本人是否可修改个人详细信息', trigger: 'blur' }],
        // 是否停诊
        isStopClinic: [{ required: true, message: '请输入是否停诊', trigger: 'blur' }],
        // 停诊类型
        clinicTypeId: [{ type: 'number', required: true, message: '请输入停诊类型', trigger: 'blur' }],
        // 停诊开始时间
        clinicStartTime: [{ required: true, message: '请输入停诊开始时间', trigger: 'blur' }],
        // 停诊结束时间
        clinicEndTime: [{ required: true, message: '请输入停诊结束时间', trigger: 'blur' }],
        // 子站点
        childSiteIds: [{ required: true, message: '请输入子站点', trigger: 'blur' }],
        // 子站点是否私有
        isChildSitePrivate: [{ required: true, message: '请输入子站点是否私有', trigger: 'blur' }],
        // 现专业技术职务
        nowProfessionalTechnicalPositions: [{ required: true, message: '请输入现专业技术职务', trigger: 'blur' }],
        // 确定时间
        determineTime: [{ required: true, message: '请输入确定时间', trigger: 'blur' }],
        // 外语语种
        foreignLanguage: [{ required: true, message: '请输入外语语种', trigger: 'blur' }],
        // 成绩
        results: [{ required: true, message: '请输入成绩', trigger: 'blur' }],
        // 取得时间
        foreignLanguageMakeTime: [{ required: true, message: '请输入取得时间', trigger: 'blur' }],
        // 申报职务
        declarePosition: [{ required: true, message: '请输入申报职务', trigger: 'blur' }],
        // 申报专业
        declareProfessional: [{ required: true, message: '请输入申报专业', trigger: 'blur' }],
        // 计算机模块
        computerModuleId: [{ type: 'number', required: true, message: '请输入计算机模块', trigger: 'blur' }],
        // 来院时间
        toHospitalTime: [{ required: true, message: '请输入来院时间', trigger: 'blur' }],
        // 到首医系统时间
        firstMedicalSystemTime: [{ required: true, message: '请输入到首医系统时间', trigger: 'blur' }],
        // 院内申报次数
        hospitalInDeclareNumber: [{ type: 'number', required: true, message: '请输入院内申报次数', trigger: 'blur' }],
        // 院外申报次数
        hospitalOfDeclareNumber: [{ type: 'number', required: true, message: '请输入院外申报次数', trigger: 'blur' }],
        // 是否有岗前培训或教师资格
        isHaveServiceTrainingOrTeacherCertification: [{ required: true, message: '请输入是否有岗前培训或教师资格', trigger: 'blur' }],
        // 每年工作周数
        everyWeekNumber: [{ type: 'number', required: true, message: '请输入每年工作周数', trigger: 'blur' }],
        // 有无患者投诉
        isHavePatientComplaints: [{ required: true, message: '请输入有无患者投诉', trigger: 'blur' }],
        // 有无丙级简历
        isHaveClassBingCases: [{ required: true, message: '请输入有无丙级简历', trigger: 'blur' }],
        // 有无差错事故
        isHaveErrorAccident: [{ required: true, message: '请输入有无差错事故', trigger: 'blur' }],
        // 继续教育学时
        continuingEducationHours: [{ required: true, message: '请输入继续教育学时', trigger: 'blur' }],
        // 年工作量
        yearsWork: [{ required: true, message: '请输入年工作量', trigger: 'blur' }],
        // 有无传染病培训
        isHaveInfectiousDiseasesTraining: [{ required: true, message: '请输入有无传染病培训', trigger: 'blur' }],
        // 有无病案例培训
        isHaveMedicalRecordRoomTraining: [{ required: true, message: '请输入有无病案例培训', trigger: 'blur' }],
        // 有无急诊轮转
        isHaveEmergencyRotation: [{ required: true, message: '请输入有无急诊轮转', trigger: 'blur' }],
        // 有无导师资格
        isHaveInstructorQualifications: [{ required: true, message: '请输入有无导师资格', trigger: 'blur' }],
        // 导师资格取得时间
        instructorQualifyForTime: [{ required: true, message: '请输入导师资格取得时间', trigger: 'blur' }],
        // 现教学职务
        teachingPositionId: [{ type: 'number', required: true, message: '请输入现教学职务', trigger: 'blur' }],
        // 申报教学职务
        declarationTeachingPositionId: [{ type: 'number', required: true, message: '请输入申报教学职务', trigger: 'blur' }],
        // 默认诊室集合
        defaultClinicIds: [{ required: true, message: '请输入默认诊室集合', trigger: 'blur' }],
        // 是否允许手机登录
        isOpenMobileLogin: [{ required: true, message: '请输入是否允许手机登录', trigger: 'blur' }],
        // 医生对象二维码ID
        weiXinDimensionalCodeId1: [{ type: 'number', required: true, message: '请输入医生对象二维码ID', trigger: 'blur' }],
        // 医生关注二维码ID
        weiXinDimensionalCodeId2: [{ type: 'number', required: true, message: '请输入医生关注二维码ID', trigger: 'blur' }],
        // 门诊是否静音
        isOutpatientMute: [{ required: true, message: '请输入门诊是否静音', trigger: 'blur' }],
        // 是否登录过手机
        isLoginMobile: [{ required: true, message: '请输入是否登录过手机', trigger: 'blur' }],
        // 站点Ids
        siteIds: [{ required: true, message: '请输入站点Ids', trigger: 'blur' }],
        // 是否允许患者建立对话
        isOpenPatientCreateDialog: [{ required: true, message: '请输入是否允许患者建立对话', trigger: 'blur' }],
        // 默认门诊级别
        defaultSchedulingLevelId: [{ type: 'number', required: true, message: '请输入默认门诊级别', trigger: 'blur' }],
        // 默认挂号价格
        defaultPrice: [{ type: 'number', required: true, message: '请输入默认挂号价格', trigger: 'blur' }],
        // 是否审核
        isApprove: [{ required: true, message: '请输入是否审核', trigger: 'blur' }],
        // 创建人
        posterId: [{ type: 'number', required: true, message: '请输入创建人', trigger: 'blur' }],
        // 最后审核日期
        lastApproveDate: [{ required: true, message: '请输入最后审核日期', trigger: 'blur' }],
        // 审核人
        approverId: [{ type: 'number', required: true, message: '请输入审核人', trigger: 'blur' }],
        // 二级审核状态   枚举字段：1=正常（默认），2=申请中，3=驳回，4=二次申请
        secondApprovalStateId: [{ type: 'number', required: true, message: '请输入二级审核状态   枚举字段：1=正常（默认），2=申请中，3=驳回，4=二次申请', trigger: 'blur' }],
        // 新建或编辑状态  枚举字段：1=新建，2=编辑
        createOrUpdateStateId: [{ type: 'number', required: true, message: '请输入新建或编辑状态  枚举字段：1=新建，2=编辑', trigger: 'blur' }],
        // 最后修改人
        lastModifierId: [{ type: 'number', required: true, message: '请输入最后修改人', trigger: 'blur' }],
        // 对应的医生信息映射
        doctorMappingId: [{ type: 'number', required: true, message: '请输入对应的医生信息映射', trigger: 'blur' }],
        // 是否删除
        isDelete: [{ required: true, message: '请输入是否删除', trigger: 'blur' }],
        // 自定义字段1
        customField1: [{ required: true, message: '请输入自定义字段1', trigger: 'blur' }],
        // 自定义字段2
        customField2: [{ required: true, message: '请输入自定义字段2', trigger: 'blur' }],
        // 自定义字段3
        customField3: [{ required: true, message: '请输入自定义字段3', trigger: 'blur' }],
        // 自定义字段4
        customField4: [{ required: true, message: '请输入自定义字段4', trigger: 'blur' }],
        // 自定义字段5
        customField5: [{ required: true, message: '请输入自定义字段5', trigger: 'blur' }],
        // 自定义字段6
        customField6: [{ required: true, message: '请输入自定义字段6', trigger: 'blur' }],
        // 自定义字段7
        customField7: [{ required: true, message: '请输入自定义字段7', trigger: 'blur' }],
        // 自定义字段8
        customField8: [{ required: true, message: '请输入自定义字段8', trigger: 'blur' }],
        // 自定义字段9
        customField9: [{ required: true, message: '请输入自定义字段9', trigger: 'blur' }],
        // 自定义字段10
        customField10: [{ required: true, message: '请输入自定义字段10', trigger: 'blur' }],
        // 自动回复模板Id
        doctorAutomatedReplyTemplateId: [{ type: 'number', required: true, message: '请输入自动回复模板Id', trigger: 'blur' }],
        // 自动回复类型
        doctorAutomatedReplyTypeId: [{ type: 'number', required: true, message: '请输入自动回复类型', trigger: 'blur' }],
        // 自动回复间隔时间
        doctorAutomatedReplyTimes: [{ type: 'number', required: true, message: '请输入自动回复间隔时间', trigger: 'blur' }],
        // 自动回复固定时间点
        doctorAutomatedReplyTiming: [{ required: true, message: '请输入自动回复固定时间点', trigger: 'blur' }],
        // 自动回复用户名
        doctorAutomatedReplyUserId: [{ type: 'number', required: true, message: '请输入自动回复用户名', trigger: 'blur' }],
        // 关联其他出诊医生集合
        schedulingDoctorIds: [{ required: true, message: '请输入关联其他出诊医生集合', trigger: 'blur' }],
        // 学术任职
        academicParticipation: [{ required: true, message: '请输入学术任职', trigger: 'blur' }],
        // 主研方向
        researchDirection: [{ required: true, message: '请输入主研方向', trigger: 'blur' }],
        // 获奖情况
        awardSituation: [{ required: true, message: '请输入获奖情况', trigger: 'blur' }],
        // 学术论著
        publishedPaper: [{ required: true, message: '请输入学术论著', trigger: 'blur' }],
        // 视频总数
        videoCount: [{ type: 'number', required: true, message: '请输入视频总数', trigger: 'blur' }],
        // 最新发布时间
        videoLatestReleaseDate: [{ required: true, message: '请输入最新发布时间', trigger: 'blur' }],
        // 图文问诊价格
        clinicPrice: [{ type: 'number', required: true, message: '请输入图文问诊价格', trigger: 'blur' }],
        // 是否开启在线问诊
        isOpenClinic: [{ required: true, message: '请输入是否开启在线问诊', trigger: 'blur' }],
        // 复诊配置主键
        clinicSettingId: [{ type: 'number', required: true, message: '请输入复诊配置主键', trigger: 'blur' }],
        // CA签名的UserId
        msspId: [{ required: true, message: '请输入CA签名的UserId', trigger: 'blur' }],
        // CA签名电子签章
        electronicSignature: [{ required: true, message: '请输入CA签名电子签章', trigger: 'blur' }],
        // 语音问诊价格
        clinicVoicePrice: [{ type: 'number', required: true, message: '请输入语音问诊价格', trigger: 'blur' }],
        // 视频问诊价格
        clinicVideoPrice: [{ type: 'number', required: true, message: '请输入视频问诊价格', trigger: 'blur' }]
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
        this.$set(this.form, 'doctorId', newValue['doctorId']);
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
      this.$refs['form'].validate(valid => {
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
        doctorId: null,
        // 擅长
        specialty: null,
        // 在医院排名
        totalRanking: null,
        // 是否为专家
        isExpert: null,
        // 分管范围
        chargeRange: null,
        // 咨询范围
        consultationScope: null,
        // 医疗职称
        professionalTitleId: null,
        // 教学职称
        teachingTitleId: null,
        // 最高学历
        educationTitleId: null,
        // 其他职称
        otherTitle: null,
        // 院内职务
        positionTitleId: null,
        // 其他职务
        otherPositionTitle: null,
        // 所在医院
        hospitalId: null,
        // PersonId
        personId: null,
        // 关联UserId
        userId: null,
        // 人员身份
        personIdentityId: null,
        // 姓名
        name: null,
        // 拼音
        pinyin: null,
        // 拼音首字母
        pinyinInitials: null,
        // 性别：枚举：1=男，2=女
        genderId: null,
        // 出生日期
        birthday: null,
        // 年龄
        age: null,
        // 民族
        nationId: null,
        // 身份证号码
        iDCardNo: null,
        // 婚姻状态
        maritalStatusId: null,
        // 职业
        occupation: null,
        // 工作单位
        office: null,
        // 住址
        address: null,
        // 联系地址
        contactAddress: null,
        // 邮编
        zipCode: null,
        // 昵称
        nickName: null,
        // 头像路径
        avatarPath: null,
        // 介绍
        description: null,
        // Email
        email: null,
        // 手机号码
        mobileNumber: null,
        // 电话
        phone: null,
        // 网址
        website: null,
        // MSN
        mSN: null,
        // QQ
        qQ: null,
        // 备注
        remark: null,
        // 是否有效
        isEnable: null,
        // 省份
        provinceId: null,
        // 城市
        cityId: null,
        // 所在站点
        siteId: null,
        // 停诊备注
        stopSchedulingNote: null,
        // Haodf的医生Id
        doctorInfoId: null,
        // 员工编号
        staffNumber: null,
        // 关联的文章数
        relatedArticleNumber: null,
        // 是否开通问答
        isOpenQuiz: null,
        // 是否开通微博
        isOpenMicroblog: null,
        // 微博名称
        microblogName: null,
        // 微博地址
        microblogUrl: null,
        // 微博代码
        microblogCode: null,
        // 微博描述
        microblogDescription: null,
        // 手机号码类型
        mobileType: null,
        // 是否开启预约
        isOpenAppoint: null,
        // 是否开启绿色通道
        isOpenGreenChannel: null,
        // 默认门诊诊室Id
        schedulingClinicId: null,
        // 执业证书号
        practisingCertificateNo: null,
        // 关键字
        keyword: null,
        // 是否公开
        isOpen: null,
        // 特殊分组
        doctorSpecialGroupId: null,
        // 关键字Id
        keywordUrlId: null,
        // 关键字Id集合
        keywordUrlIds: null,
        // 拼音首字母
        firstLetter: null,
        // 毕业学校
        school: null,
        // SEO关键字
        seoKeywords: null,
        // SEO描述
        seoDescription: null,
        // 是否将网址仅作为超链接处理
        isRegardWebsiteAsLink: null,
        // 是否默认进入单独搜索首页
        isDefalultEnterSeparateSearchPage: null,
        // 是否显示在手机端
        isShowInMobile: null,
        // 是否有出诊
        isHaveScheduling: null,
        // 是否有预约
        isHaveAppoint: null,
        // 社会任职
        socialOffice: null,
        // 微信头像路径
        weiXinAvatarPath: null,
        // 本人是否可修改个人详细信息
        isCanUpdateDetails: null,
        // 是否停诊
        isStopClinic: null,
        // 停诊类型
        clinicTypeId: null,
        // 停诊开始时间
        clinicStartTime: null,
        // 停诊结束时间
        clinicEndTime: null,
        // 子站点
        childSiteIds: null,
        // 子站点是否私有
        isChildSitePrivate: null,
        // 现专业技术职务
        nowProfessionalTechnicalPositions: null,
        // 确定时间
        determineTime: null,
        // 外语语种
        foreignLanguage: null,
        // 成绩
        results: null,
        // 取得时间
        foreignLanguageMakeTime: null,
        // 申报职务
        declarePosition: null,
        // 申报专业
        declareProfessional: null,
        // 计算机模块
        computerModuleId: null,
        // 来院时间
        toHospitalTime: null,
        // 到首医系统时间
        firstMedicalSystemTime: null,
        // 院内申报次数
        hospitalInDeclareNumber: null,
        // 院外申报次数
        hospitalOfDeclareNumber: null,
        // 是否有岗前培训或教师资格
        isHaveServiceTrainingOrTeacherCertification: null,
        // 每年工作周数
        everyWeekNumber: null,
        // 有无患者投诉
        isHavePatientComplaints: null,
        // 有无丙级简历
        isHaveClassBingCases: null,
        // 有无差错事故
        isHaveErrorAccident: null,
        // 继续教育学时
        continuingEducationHours: null,
        // 年工作量
        yearsWork: null,
        // 有无传染病培训
        isHaveInfectiousDiseasesTraining: null,
        // 有无病案例培训
        isHaveMedicalRecordRoomTraining: null,
        // 有无急诊轮转
        isHaveEmergencyRotation: null,
        // 有无导师资格
        isHaveInstructorQualifications: null,
        // 导师资格取得时间
        instructorQualifyForTime: null,
        // 现教学职务
        teachingPositionId: null,
        // 申报教学职务
        declarationTeachingPositionId: null,
        // 默认诊室集合
        defaultClinicIds: null,
        // 是否允许手机登录
        isOpenMobileLogin: null,
        // 医生对象二维码ID
        weiXinDimensionalCodeId1: null,
        // 医生关注二维码ID
        weiXinDimensionalCodeId2: null,
        // 门诊是否静音
        isOutpatientMute: null,
        // 是否登录过手机
        isLoginMobile: null,
        // 站点Ids
        siteIds: null,
        // 是否允许患者建立对话
        isOpenPatientCreateDialog: null,
        // 默认门诊级别
        defaultSchedulingLevelId: null,
        // 默认挂号价格
        defaultPrice: null,
        // 是否审核
        isApprove: null,
        // 创建人
        posterId: null,
        // 最后审核日期
        lastApproveDate: null,
        // 审核人
        approverId: null,
        // 二级审核状态   枚举字段：1=正常（默认），2=申请中，3=驳回，4=二次申请
        secondApprovalStateId: null,
        // 新建或编辑状态  枚举字段：1=新建，2=编辑
        createOrUpdateStateId: null,
        // 最后修改人
        lastModifierId: null,
        // 对应的医生信息映射
        doctorMappingId: null,
        // 是否删除
        isDelete: null,
        // 自定义字段1
        customField1: null,
        // 自定义字段2
        customField2: null,
        // 自定义字段3
        customField3: null,
        // 自定义字段4
        customField4: null,
        // 自定义字段5
        customField5: null,
        // 自定义字段6
        customField6: null,
        // 自定义字段7
        customField7: null,
        // 自定义字段8
        customField8: null,
        // 自定义字段9
        customField9: null,
        // 自定义字段10
        customField10: null,
        // 自动回复模板Id
        doctorAutomatedReplyTemplateId: null,
        // 自动回复类型
        doctorAutomatedReplyTypeId: null,
        // 自动回复间隔时间
        doctorAutomatedReplyTimes: null,
        // 自动回复固定时间点
        doctorAutomatedReplyTiming: null,
        // 自动回复用户名
        doctorAutomatedReplyUserId: null,
        // 关联其他出诊医生集合
        schedulingDoctorIds: null,
        // 学术任职
        academicParticipation: null,
        // 主研方向
        researchDirection: null,
        // 获奖情况
        awardSituation: null,
        // 学术论著
        publishedPaper: null,
        // 视频总数
        videoCount: null,
        // 最新发布时间
        videoLatestReleaseDate: null,
        // 图文问诊价格
        clinicPrice: null,
        // 是否开启在线问诊
        isOpenClinic: null,
        // 复诊配置主键
        clinicSettingId: null,
        // CA签名的UserId
        msspId: null,
        // CA签名电子签章
        electronicSignature: null,
        // 语音问诊价格
        clinicVoicePrice: null,
        // 视频问诊价格
        clinicVideoPrice: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await doctorApi.addDoctor(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await doctorApi.updateDoctor(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
