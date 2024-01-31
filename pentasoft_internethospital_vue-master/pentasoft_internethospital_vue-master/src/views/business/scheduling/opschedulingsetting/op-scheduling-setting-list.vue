<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="24">
          <span class="title">名称 :</span>
          <Input
            placeholder="请输入名称"
            style="width: 180px"
            v-model="queryForm.name"
          />
        </Col>
      </Row>

      <!------ 查询条件第一行 begin------->

      <!------ 查询条件第二行 begin------->
      <!------ 查询条件第二行 end------->
      <Row type="flex" justify="center">
        <ButtonGroup>
          <Button
            @click="queryList"
            icon="ios-search"
            type="primary"
            v-privilege="'o-p-scheduling-setting-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'o-p-scheduling-setting-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'o-p-scheduling-setting-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddOPSchedulingSettingForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'o-p-scheduling-setting-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'o-p-scheduling-setting-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'o-p-scheduling-setting-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'o-p-scheduling-setting-list-batch-export'"
          >批量导出
        </Button>
      </Row>
      <!-------操作按钮行 end------->

      <!-------表格列表 begin------->
      <Table
        :columns="mainTable.columnArray"
        :data="mainTable.data"
        :loading="mainTable.loading"
        @on-sort-change="handleSortChange"
        border="border"
        highlight-row="highlight-row"
        ref="mainTable"
      ></Table>

      <Page
        :current="queryForm.pageNum"
        :page-size="queryForm.pageSize"
        :page-size-opts="mainTablePage.pageSizeOps"
        :total="mainTablePage.total"
        @on-change="changeMainTablePagePageNum"
        @on-page-size-change="changeMainTablePagePageSize"
        class="smart-query-table-page"
        show-elevator="show-elevator"
        show-sizer="show-sizer"
        show-total="show-total"
      />
    </Card>
    <!-------表格列表 end------->

    <!-------批量删除Modal begin------->
    <Modal title="批量删除" v-model="batchDeleteModal.show" width="450">
      <Form :label-width="80">
        <FormItem>
          <h3 class="error-color">确定要删除以下数据吗？</h3>
        </FormItem>
        <FormItem label="删除数据">
          <Card style="width: 350px; height: 250px; overflow-y: scroll">
            <ul>
              <li
                v-for="item in mainTableSelectArray"
                :key="item.oPSchedulingSettingId"
              >
                <a href="#">{{ item.name }}</a>
              </li>
            </ul>
          </Card>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button
          @click="batchDeleteModal.show = false"
          size="small"
          type="default"
          >取消</Button
        >
        <Button @click="batchDelete" size="small" type="primary"
          >确定删除</Button
        >
      </div>
    </Modal>
    <!-------批量删除Modal end------->

    <!-------添加、更新 Form表单 begin------->
    <Modal
      :footer-hide="true"
      :title="saveModal.isUpdate ? '更新' : '新建'"
      v-model="saveModal.show"
      @on-cancel="saveFormClose"
      width="60%"
    >
      <OPSchedulingSettingListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { oPSchedulingSettingApi } from '@/api/scheduling/op-scheduling-setting';
import OPSchedulingSettingListForm from './components/op-scheduling-setting-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'OPSchedulingSettingList',
  components: {
    OPSchedulingSettingListForm
  },
  props: {},
  data () {
    return {
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null
      },
      /* -------------------------批量操作------------------------- */
      // 批量刪除彈出框
      batchDeleteModal: {
        show: false
      },
      // 表格多选选中的元素数组
      mainTableSelectArray: [],
      /* -------------------------导出操作------------------------- */
      // 批量导出loading按钮
      batchExportBtnLoading: false,
      // 导出全部loading按钮
      allExportBtnLoading: false,
      isShowdeleteLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      // 搜索表单
      queryForm: {
        // 名称
        name: null,
        // 是否默认
        isDefault: null,
        // 是否开启当日挂号
        isDefaultForDay: null,
        // 是否单独显示当日挂号
        isSoleDefaultForDay: null,
        // 是否启用预约挂号
        isOpenAppoint: null,
        // 是否启用手机预约挂号
        isOpenMobileAppoint: null,
        // 提前几天可见   提前几天可见：如果设置了，提前N天可以看到，但是不一定能够预约，预约需要根据下面的 提前几天开启预约
        inAdvanceDaysForLook: null,
        // 提前几天开启预约
        inAdvanceDaysForAppoint: null,
        // 当天开启的时间
        inAdvanceTimeForAppoint: null,
        // 提前几天截止预约
        inCutoffDaysForAppoint: null,
        // 当天截止的时间
        inCutoffTimeForAppoint: null,
        // 周五是否为周一预约前一天
        isAppointByFriday: null,
        // 周六是否可以预约周一的号
        isAppointBySaturday: null,
        // 周日是否可以预约周一的号
        isAppointBySunday: null,
        // 是否开启图形验证码
        isOpenAppointValidateCode: null,
        // 被替诊是否停诊
        isStopForReplaced: null,
        // 替诊是否可预约
        isAppointForReplace: null,
        // 是否随机放号
        isRandomToCancel: null,
        // 是否固定放号
        isFixedToCancel: null,
        // 是否必须微信预约
        isMustWeiXinAppoint: null,
        // 假期是否可以预约假日后第一天的号
        isAppointByHoliday: null,
        // 假期前一天是否可以预约假日后第一天的号
        isAppointByTheDayBeforeHoliday: null,
        // 是否跳过周六
        isJumpedOverSaturday: null,
        // 是否跳过周日
        isJumpedOverSunday: null,
        // 是否跳过假期
        isJumpedOverHoliday: null,
        // 是否开启实时出诊
        isOpenRealTimeSch: null,
        // 是否展示剩余号源数量
        isShowValuableNumber: null,
        // 周五是否为周一预约取消前一天
        isAppointByFridayToCancel: null,
        // 周六是否可以取消周一的号
        isAppointBySaturdayToCancel: null,
        // 周日是否可以取消周一的号
        isAppointBySundayToCancel: null,
        // 假期是否可以取消假期后第一天的号
        isAppointByHolidayToCancel: null,
        // 假期前一天是否可以取消假日后第一天的号
        isAppointByTheDayBeforeHolidayToCancel: null,
        // 是否启用绿色通道
        isOpenGreenChannel: null,
        // 提前几天开启绿色通道
        inAdvanceDaysForGreenChannel: null,
        // 预约成功是否发送邮件
        isSendEmailForAppoint: null,
        // 预约成功发送账号
        appointEmailAccountId: null,
        // 预约成功邮件模板
        appointEmailTemplateId: null,
        // 预约成功是否发送短信
        isSendShortMessageForAppoint: null,
        // 预约成功短信模板
        appointShortMessageTemplateId: null,
        // 微信发送模板消息账号
        appointWeiXinAccountId: null,
        // 预约成功是否发送微信消息
        isSendWeiXinMessageForAppoint: null,
        // 预约成功微信消息模板
        appointWeiXinMessageTemplateId: null,
        // 患者操作预约作废时是否发送微信消息
        isSendWeiXinMessageForAppoint_InvalidByPatient: null,
        // 患者操作预约作废时微信消息模板
        weiXinMessageTemplateId_InvalidByPatient: null,
        // 患者操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByPatient: null,
        // 患者操作预约作废发送账号
        appointEmailAccountId_InvalidByPatient: null,
        // 患者操作预约作废邮件模板
        appointEmailTemplateId_InvalidByPatient: null,
        // 患者操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByPatient: null,
        // 患者操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByPatient: null,
        // 医生操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByDoctor: null,
        // 医生操作预约作废发送账号
        appointEmailAccountId_InvalidByDoctor: null,
        // 医生操作预约作废邮件模板
        appointEmailTemplateId_InvalidByDoctor: null,
        // 医生操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByDoctor: null,
        // 医生操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByDoctor: null,
        // 管理操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByAdmin: null,
        // 管理操作预约作废发送账号
        appointEmailAccountId_InvalidByAdmin: null,
        // 管理操作预约作废邮件模板
        appointEmailTemplateId_InvalidByAdmin: null,
        // 管理操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByAdmin: null,
        // 管理操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByAdmin: null,
        // 停诊操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByStop: null,
        // 停诊操作预约作废发送账号
        appointEmailAccountId_InvalidByStop: null,
        // 停诊操作预约作废邮件模板
        appointEmailTemplateId_InvalidByStop: null,
        // 停诊操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByStop: null,
        // 停诊操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByStop: null,
        // 过期预约作废时是否发送邮件(违约)
        isSendEmailForAppoint_InvalidByExpired: null,
        // 过期预约作废发送账号(违约)
        appointEmailAccountId_InvalidByExpired: null,
        // 过期预约作废邮件模板(违约)
        appointEmailTemplateId_InvalidByExpired: null,
        // 过期预约作废时是否发送短信(违约)
        isSendShortMessageForAppoint_InvalidByExpired: null,
        // 过期预约作废短信模板(违约)
        appointShortMessageTemplateId_InvalidByExpired: null,
        // 是否发送诊前提醒患者邮件
        isSendEmailForAppoint_RemindByPatient: null,
        // 诊前提醒患者发送账号
        appointEmailAccountId_RemindByPatient: null,
        // 诊前提醒患者邮件模板
        appointEmailTemplateId_RemindByPatient: null,
        // 是否发送诊前提醒患者短信
        isSendShortMessageForAppoint_RemindByPatient: null,
        // 诊前提醒患者短信模板
        appointShortMessageTemplateId_RemindByPatient: null,
        // 预约时间前几天截止取消预约
        inCutoffDaysForCancerAppoint: null,
        // 发送诊前提醒的时间
        inCutoffTimeForRemind: null,
        // 取消预约页面提示信息
        cancelAppointPageMessage: null,
        // 同一身份证待就诊条数
        sameIdCardNoSchedulingAppointNoTakeNumCount: null,
        // 同一天同一身份证可预约个数
        sameDayIdCardNoSchedulingAppointCount: null,
        // 同一时段同一身份证可预约个数
        sameTimeIdCardNoSchedulingAppointCount: null,
        // 同一天同一身份证同一科室可预约个数
        sameDayIdCardNoDepartmentSchedulingAppointCount: null,
        // 同一时段同一身份证同一科室可预约个数
        sameTimeIdCardNoDepartmentSchedulingAppointCount: null,
        // 是否删除
        isDelete: null,
        // 预约地址地图名称
        schedulingaddressMapName: null,
        // 预约地址地图坐标经纬度
        schedulingMapCoordinates: null,
        // 过期预约作废时是否发送(违约)
        isSendWeiXinMessageForAppoint_InvalidByExpired: null,
        // 停诊操作预约作废时是否发送
        isSendWeiXinMessageForAppoint_InvalidByStop: null,
        // 是否发送诊前提醒患者
        isSendWeiXinMessageForAppoint_RemindByPatient: null,
        // 复诊就诊卡是否必填
        isMustTreatmentCardNoForReferral: null,
        // 就诊卡号位数
        treatmentCardNoNum: null,
        // 支付宝发送模板消息账号
        appointAlipayAccountId: null,
        // 预约成功是否发送支付宝消息
        isSendAlipayMessageForAppoint: null,
        // 患者操作预约作废时是否发送支付宝消息
        isSendAlipayMessageForAppoint_InvalidByPatient: null,
        // 参保卡类别是否显示
        isShowAppointInsuredCardTypeId: null,
        // 参保卡类别是否必填
        isMustAppointInsuredCardTypeId: null,
        // 是否启用在线支付
        isOpenPayment: null,
        // 是否必须在线支付
        isMustPayment: null,
        // 支付过期时间
        expiryMinutes: null,
        // 支付密钥
        paymentKey: null,
        // 是否开启精准预约
        isAccurateReservation: null,
        // 精准预约公钥
        accurateReservationPubilcKey: null,
        // 精准预约等待审核短信模板
        aRWaitShortMessageTemplateId: null,
        // 精准预约未通过短信模板
        aRNoPassShortMessageTemplateId: null,
        // 预约须知版本
        noticeVersion: null,
        // 复诊预约是否发送短信
        isSendShortMessageForReVisit: null,
        // 复诊预约预约模板
        reVisitShortMessageTemplateId: null,
        // 支付宝支付账号
        payAlipayAccountId: null,
        // 微信支付账号
        payWeiXinAccountId: null,
        // 当日挂号预约须知
        schedulingAppointmentNoticeForDay: null,
        // 支付患者类型
        payPatientTypeIds: null,
        // 当日预约成功是否发送短信
        isSendShortMessageForDayAppoint: null,
        // 当日预约成功短信模板
        appointShortMessageForDayTemplateId: null,
        // 患者操作预约作废时是否发送短信
        isSendShortMessageForDayAppoint_InvalidByPatient: null,
        // 患者操作预约作废短信模板
        appointShortMessageForDayTemplateId_InvalidByPatient: null,
        // 是否开启第三方支付
        isThirdPartyPay: null,
        // 是否开启第三方支付
        isOpenLockNum: null,
        // 是否开启医保结算
        isOpenMedicalSettlement: null,
        // 锁号患者类型
        lockPatientTypeIds: null,
        // 锁号患者
        lockPatientTypeId: null,
        // 是否开启特殊预约
        isOpenSpecialAppoint: null,
        // 特殊预约提前预约天数
        inAdvanceDaysForSpecialAppoint: null,
        // 是否开启分时预约
        isOpenPeriodAppointment: null,
        // 自费患者预约成功短信
        selfPaidSMS: null,
        // 医保患者预约成功短信
        medicalInsuranceSMS: null,
        // 特殊预约成功时是否发送短信
        isSendShortMessageForSpecialAppoint: null,
        // 特殊预约成功短信模板
        specialAppointShortMessageTemplateId: null,
        // 特殊预约取消时是否发送短信
        isSendShortMessageForSpecialAppoint_Invalid: null,
        // 特殊预约取消短信模板
        specialAppointShortMessageTemplateId_Invalid: null,
        // 自费是否允许预约
        isSelfFeeOpenAppoint: null,
        // 医保是否允许自费挂号
        isMIOpenSelfFeeRegister: null,
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
        orders: []
      },
      // 是否展示更多搜索条件
      showMoreQueryConditionFlag: false,
      /*  -------------------------表格相关数据------------------------- */
      // 表格分页
      mainTablePage: {
        total: 0,
        pageSizeOps: PAGE_SIZE_OPTIONS
      },
      // 表格
      mainTable: {
        // 加载中
        loading: false,
        // 表格数据
        data: [],
        // 表格列
        columnArray: [
          {
            type: 'selection',
            width: 30,
            align: 'center'
          },
          {
            title: '名称',
            key: 'name',
            tableColumn: 'smart_OPSchedulingSettings.Name',
            sortable: 'custom'
          },
          {
            title: '是否默认',
            key: 'isDefault',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isDefault)
              );
            }
          },
          {
            title: '是否启用预约挂号',
            key: 'isOpenAppoint',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isOpenAppoint)
              );
            }
          },
          {
            title: '是否启用手机预约挂号',
            key: 'isOpenMobileAppoint',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isOpenMobileAppoint
                )
              );
            }
          },
          {
            title: '是否删除',
            key: 'isDelete',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isDelete)
              );
            }
          },
          {
            title: '操作',
            key: 'action',
            align: 'right',
            width: 130,
            className: 'action-hide',
            render: (h, params) => {
              let actions = [
                {
                  title: '编辑',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'o-p-scheduling-setting-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditOPSchedulingSettingForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'o-p-scheduling-setting-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteOPSchedulingSetting(
                          params.row.opschedulingSettingId
                        );
                      }
                    });
                  }
                }
              ];
              return this.$tableAction(h, actions);
            }
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created () {},
  mounted () {
    this.queryList();
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {
    /* -------------------------查询相关 begin------------------------- */
    convertQueryParam () {
      let createTimeArray = dateTimeRangeConvert(
        this.queryForm.createTimeRange
      );
      let updateTimeArray = dateTimeRangeConvert(
        this.queryForm.updateTimeRange
      );
      return {
        ...this.queryForm,
        dateCreatedBegin: createTimeArray[0],
        dateCreatedEnd: createTimeArray[1],
        dateModifiedBegin: updateTimeArray[0],
        dateModifiedEnd: updateTimeArray[1]
      };
    },
    // 查询
    async queryList () {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await oPSchedulingSettingApi.queryOPSchedulingSetting(
          params
        );
        this.mainTable.data = result.data.list;
        this.mainTablePage.total = result.data.total;
      } finally {
        this.mainTable.loading = false;
      }
    },
    // 重置查询
    resetQueryList () {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        name: null,
        isDefault: null,
        isDefaultForDay: null,
        isSoleDefaultForDay: null,
        isOpenAppoint: null,
        isOpenMobileAppoint: null,
        inAdvanceDaysForLook: null,
        inAdvanceDaysForAppoint: null,
        inAdvanceTimeForAppoint: null,
        inCutoffDaysForAppoint: null,
        inCutoffTimeForAppoint: null,
        isAppointByFriday: null,
        isAppointBySaturday: null,
        isAppointBySunday: null,
        isOpenAppointValidateCode: null,
        isStopForReplaced: null,
        isAppointForReplace: null,
        isRandomToCancel: null,
        isFixedToCancel: null,
        isMustWeiXinAppoint: null,
        isAppointByHoliday: null,
        isAppointByTheDayBeforeHoliday: null,
        isJumpedOverSaturday: null,
        isJumpedOverSunday: null,
        isJumpedOverHoliday: null,
        isOpenRealTimeSch: null,
        isShowValuableNumber: null,
        isAppointByFridayToCancel: null,
        isAppointBySaturdayToCancel: null,
        isAppointBySundayToCancel: null,
        isAppointByHolidayToCancel: null,
        isAppointByTheDayBeforeHolidayToCancel: null,
        isOpenGreenChannel: null,
        inAdvanceDaysForGreenChannel: null,
        isSendEmailForAppoint: null,
        appointEmailAccountId: null,
        appointEmailTemplateId: null,
        isSendShortMessageForAppoint: null,
        appointShortMessageTemplateId: null,
        appointWeiXinAccountId: null,
        isSendWeiXinMessageForAppoint: null,
        appointWeiXinMessageTemplateId: null,
        isSendWeiXinMessageForAppoint_InvalidByPatient: null,
        weiXinMessageTemplateId_InvalidByPatient: null,
        isSendEmailForAppoint_InvalidByPatient: null,
        appointEmailAccountId_InvalidByPatient: null,
        appointEmailTemplateId_InvalidByPatient: null,
        isSendShortMessageForAppoint_InvalidByPatient: null,
        appointShortMessageTemplateId_InvalidByPatient: null,
        isSendEmailForAppoint_InvalidByDoctor: null,
        appointEmailAccountId_InvalidByDoctor: null,
        appointEmailTemplateId_InvalidByDoctor: null,
        isSendShortMessageForAppoint_InvalidByDoctor: null,
        appointShortMessageTemplateId_InvalidByDoctor: null,
        isSendEmailForAppoint_InvalidByAdmin: null,
        appointEmailAccountId_InvalidByAdmin: null,
        appointEmailTemplateId_InvalidByAdmin: null,
        isSendShortMessageForAppoint_InvalidByAdmin: null,
        appointShortMessageTemplateId_InvalidByAdmin: null,
        isSendEmailForAppoint_InvalidByStop: null,
        appointEmailAccountId_InvalidByStop: null,
        appointEmailTemplateId_InvalidByStop: null,
        isSendShortMessageForAppoint_InvalidByStop: null,
        appointShortMessageTemplateId_InvalidByStop: null,
        isSendEmailForAppoint_InvalidByExpired: null,
        appointEmailAccountId_InvalidByExpired: null,
        appointEmailTemplateId_InvalidByExpired: null,
        isSendShortMessageForAppoint_InvalidByExpired: null,
        appointShortMessageTemplateId_InvalidByExpired: null,
        isSendEmailForAppoint_RemindByPatient: null,
        appointEmailAccountId_RemindByPatient: null,
        appointEmailTemplateId_RemindByPatient: null,
        isSendShortMessageForAppoint_RemindByPatient: null,
        appointShortMessageTemplateId_RemindByPatient: null,
        inCutoffDaysForCancerAppoint: null,
        inCutoffTimeForRemind: null,
        cancelAppointPageMessage: null,
        sameIdCardNoSchedulingAppointNoTakeNumCount: null,
        sameDayIdCardNoSchedulingAppointCount: null,
        sameTimeIdCardNoSchedulingAppointCount: null,
        sameDayIdCardNoDepartmentSchedulingAppointCount: null,
        sameTimeIdCardNoDepartmentSchedulingAppointCount: null,
        isDelete: null,
        schedulingaddressMapName: null,
        schedulingMapCoordinates: null,
        isSendWeiXinMessageForAppoint_InvalidByExpired: null,
        isSendWeiXinMessageForAppoint_InvalidByStop: null,
        isSendWeiXinMessageForAppoint_RemindByPatient: null,
        isMustTreatmentCardNoForReferral: null,
        treatmentCardNoNum: null,
        appointAlipayAccountId: null,
        isSendAlipayMessageForAppoint: null,
        isSendAlipayMessageForAppoint_InvalidByPatient: null,
        isShowAppointInsuredCardTypeId: null,
        isMustAppointInsuredCardTypeId: null,
        isOpenPayment: null,
        isMustPayment: null,
        expiryMinutes: null,
        paymentKey: null,
        isAccurateReservation: null,
        accurateReservationPubilcKey: null,
        aRWaitShortMessageTemplateId: null,
        aRNoPassShortMessageTemplateId: null,
        noticeVersion: null,
        isSendShortMessageForReVisit: null,
        reVisitShortMessageTemplateId: null,
        payAlipayAccountId: null,
        payWeiXinAccountId: null,
        schedulingAppointmentNoticeForDay: null,
        payPatientTypeIds: null,
        isSendShortMessageForDayAppoint: null,
        appointShortMessageForDayTemplateId: null,
        isSendShortMessageForDayAppoint_InvalidByPatient: null,
        appointShortMessageForDayTemplateId_InvalidByPatient: null,
        isThirdPartyPay: null,
        isOpenLockNum: null,
        isOpenMedicalSettlement: null,
        lockPatientTypeIds: null,
        lockPatientTypeId: null,
        isOpenSpecialAppoint: null,
        inAdvanceDaysForSpecialAppoint: null,
        isOpenPeriodAppointment: null,
        selfPaidSMS: null,
        medicalInsuranceSMS: null,
        isSendShortMessageForSpecialAppoint: null,
        specialAppointShortMessageTemplateId: null,
        isSendShortMessageForSpecialAppoint_Invalid: null,
        specialAppointShortMessageTemplateId_Invalid: null,
        isSelfFeeOpenAppoint: null,
        isMIOpenSelfFeeRegister: null,
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        pageNum: 1,
        pageSize: pageSize,
        orders: []
      };
      this.queryList();
    },
    // 修改页码
    changeMainTablePagePageNum (pageNum) {
      this.queryForm.pageNum = pageNum;
      this.queryList();
    },
    // 修改页大小
    changeMainTablePagePageSize (pageSize) {
      this.queryForm.pageNum = 1;
      this.queryForm.pageSize = pageSize;
      this.queryList();
    },
    // 处理排序
    handleSortChange (column) {
      if (column.order === 'normal') {
        this.queryForm.orders = [];
      } else {
        this.queryForm.orders = [
          {
            column: column.column.tableColumn,
            asc: column.order === 'asc'
          }
        ];
      }
      this.queryList();
    },
    /* -------------------------查询相关 end------------------------- */

    /* -------------------------删除 begin------------------------- */
    // 根据ID删除
    async deleteOPSchedulingSetting (oPSchedulingSettingId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await oPSchedulingSettingApi.deleteOPSchedulingSetting(
          oPSchedulingSettingId
        );
        this.isShowdeleteLoading = false;
        this.$Message.success('删除成功');
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        // TODO zhuoda sentry
        console.error(e);
        this.isShowdeleteLoading = false;
      }
    },
    /* -------------------------删除 begin------------------------- */

    /* -------------------------批量操作 begin------------------------- */
    // 显示批量删除弹窗
    showBatchDeleteModal () {
      if (!this.validateMainTableSelection()) {
        return;
      }
      this.batchDeleteModal.show = true;
    },
    // 批量删除
    async batchDelete () {
      this.$Spin.show();
      await oPSchedulingSettingApi.batchDeleteOPSchedulingSetting(
        this.mainTableSelectArray.map((e) => e.opschedulingSettingId)
      );
      this.batchDeleteModal.show = false;
      this.$Message.success('刪除成功');
      this.$Spin.hide();
      this.queryList();
    },
    // 清空选中
    clearMainTableSelection () {
      this.mainTableSelectArray = [];
    },
    // 校验是否有选中
    validateMainTableSelection () {
      this.mainTableSelectArray = this.$refs.mainTable.getSelection();
      if (this.mainTableSelectArray.length < 1) {
        this.$Message.error('请选择至少一条数据');
        return false;
      }
      return true;
    },
    /* -------------------------批量操作 end------------------------- */

    /* -------------------------导入导出 begin------------------------- */
    // 导出全部
    async exportAll () {
      try {
        this.allExportBtnLoading = true;
        let params = this.convertQueryParam();
        await oPSchedulingSettingApi.exportAll(params);
      } catch (e) {
        console.log(e);
      } finally {
        this.allExportBtnLoading = false;
      }
    },
    // 批量导出
    async batchExport () {
      if (!this.validateMainTableSelection()) {
        return;
      }
      try {
        this.batchExportBtnLoading = true;
        await oPSchedulingSettingApi.batchExport(
          this.mainTableSelectArray.map((e) => e.oPSchedulingSettingId)
        );
      } catch (e) {
        console.log(e);
      } finally {
        this.batchExportBtnLoading = false;
      }
    },
    /* -------------------------导入导出 end------------------------- */

    /* -------------------------添加，修改 表单 begin------------------------- */
    // 显示添加表单
    showAddOPSchedulingSettingForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditOPSchedulingSettingForm (updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose () {
      this.saveModal.show = false;
      this.queryList();
    }
    /* -------------------------添加，修改 表单 end------------------------- */
  }
};
</script>
