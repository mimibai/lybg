<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>名称 :</span>
          <Input
            placeholder="请输入名称"
            style="width: 180px"
            v-model="queryForm.name"
          />
        </Col>
        <Col span="8">
          <span>自有应用Id :</span>
           <PlatformSelect v-model="queryForm.appPlatformAccountId" />
        </Col>
        <Col span="8">
          <span>是否必须登录 :</span>
          <i-switch v-model="queryForm.isMustLogon" />
        </Col>
      </Row>

      <!------ 查询条件第一行 begin------->

      <!------ 查询条件第二行 begin------->
      <Row
        type="flex"
        justify="space-between"
        class="search-row"
        v-show="showMoreQueryConditionFlag"
      >
        <Col span="8">
          <span
            >访问限制类型
            枚举：1、登录用户，2、角色类型，3、指定角色，4、指定用户 :</span
          >
          <Input
            placeholder="请输入访问限制类型 枚举：1、登录用户，2、角色类型，3、指定角色，4、指定用户"
            style="width: 180px"
            v-model="queryForm.logonRestrictionTypeId"
          />
        </Col>
        <Col span="8">
          <span>指定用户类型 :</span>
          <Input
            placeholder="请输入指定用户类型"
            style="width: 180px"
            v-model="queryForm.logonRestrictionUserIdentityIds"
          />
        </Col>
        <Col span="8">
          <span>指定用户 :</span>
          <Input
            placeholder="请输入指定用户"
            style="width: 180px"
            v-model="queryForm.logonRestrictionUserIds"
          />
        </Col>
        <Col span="8">
          <span>是否开放登录 :</span>
          <i-switch v-model="queryForm.isOpenLogon" />
        </Col>
        <Col span="8">
          <span>是否显示评论栏 :</span>
          <i-switch v-model="queryForm.isShowComment" />
        </Col>
        <Col span="8">
          <span>是否显示考核 :</span>
          <i-switch v-model="queryForm.isShowAssessment" />
        </Col>
        <Col span="8">
          <span>是否显示留言列表 :</span>
          <i-switch v-model="queryForm.isShowCommentList" />
        </Col>
        <Col span="8">
          <span>视频是否显示相关视频 :</span>
          <i-switch v-model="queryForm.isShowRelatedVideo" />
        </Col>
        <Col span="8">
          <span>是否显示上下篇 :</span>
          <i-switch v-model="queryForm.isShowPreviousOrNextPage" />
        </Col>
        <Col span="8">
          <span>不显示文章的浏览次数的栏目集合 :</span>
          <Input
            placeholder="请输入不显示文章的浏览次数的栏目集合"
            style="width: 180px"
            v-model="queryForm.noShowArticleviewCountColumnIds"
          />
        </Col>
        <Col span="8">
          <span>是否删除 :</span>
          <i-switch v-model="queryForm.isDelete" />
        </Col>
        <Col span="8">
          <span>手机展示样式 :</span>
          <Input
            placeholder="请输入手机展示样式"
            style="width: 180px"
            v-model="queryForm.voteMobileStyleId"
          />
        </Col>
        <Col span="8">
          <span>是否开启人脸认证 :</span>
          <i-switch v-model="queryForm.isOpenFacialVerify" />
        </Col>
        <Col span="8">
          <span>是否开启His档案绑定 :</span>
          <i-switch v-model="queryForm.isOpenPatientBind" />
        </Col>
        <Col span="8">
          <span>是否开启在线建档 :</span>
          <i-switch v-model="queryForm.isOpenOnlineDocumen" />
        </Col>
        <Col span="8">
          <span>绑定是否必须认证 :</span>
          <i-switch v-model="queryForm.isMustVerifyPatientBind" />
        </Col>
        <Col span="8">
          <span>建档是否必须认证 :</span>
          <i-switch v-model="queryForm.isMustVerifyOnlineDocumen" />
        </Col>
        <Col span="8">
          <span>是否开启患者信息编辑补充 :</span>
          <i-switch v-model="queryForm.isOpenPerfectInfo" />
        </Col>
        <Col span="8">
          <span>是否必须认证后可编辑补充 :</span>
          <i-switch v-model="queryForm.isMustVerifyPerfectInfo" />
        </Col>
        <Col span="8">
          <span>是否允许认证患者变更His手机号 :</span>
          <i-switch v-model="queryForm.isVerifyChangeHisMobile" />
        </Col>
        <Col span="8">
          <span>是否开启患者信息上报 :</span>
          <i-switch v-model="queryForm.isOpenPatientInfoReport" />
        </Col>
        <Col span="8">
          <span>是否开启新增患者信息完善 :</span>
          <i-switch v-model="queryForm.isOpenNewPatientInfoPerfect" />
        </Col>
        <Col span="8">
          <span>是否显示我的预约按钮 :</span>
          <i-switch v-model="queryForm.isAppointmentButton" />
        </Col>
        <Col span="8">
          <span>是否开启患者就诊码 :</span>
          <i-switch v-model="queryForm.isOpenPatientVisitCode" />
        </Col>
        <Col span="8">
          <span>患者就诊码类型 :</span>
          <Input
            placeholder="请输入患者就诊码类型"
            style="width: 180px"
            v-model="queryForm.patientVisitCodeTypeId"
          />
        </Col>
        <Col span="8">
          <span>专家医生轮播方式 :</span>
          <Input
            placeholder="请输入专家医生轮播方式"
            style="width: 180px"
            v-model="queryForm.expertDoctorSwiperTypeId"
          />
        </Col>
        <Col span="8">
          <span>首页是否弹出隐私协议 :</span>
          <i-switch v-model="queryForm.isHomePagePrivacyPop" />
        </Col>
        <Col span="8">
          <span>登录是否人脸认证 :</span>
          <i-switch v-model="queryForm.isFaceVerifyForLogon" />
        </Col>
        <Col span="8">
          <span>是否开启用户名登录 :</span>
          <i-switch v-model="queryForm.isOpenAccountLogon" />
        </Col>
        <Col span="8">
          <span>是否开启CA认证 :</span>
          <i-switch v-model="queryForm.isOpenCACertification" />
        </Col>
        <Col span="8">
          <span>是否开启医生编辑患者信息 :</span>
          <i-switch v-model="queryForm.isDoctorEditPatient" />
        </Col>
        <Col span="8">
          <span>是否开启页面统计 :</span>
          <i-switch v-model="queryForm.isOpenStatistics" />
        </Col>
        <Col span="8">
          <span>是否开启仅匹配Url路径 :</span>
          <i-switch v-model="queryForm.isMatchOnlyUrl" />
        </Col>
        <Col span="8">
          <span>登录是否必须完善信息 :</span>
          <i-switch v-model="queryForm.isLogonMustImproveInfo" />
        </Col>
        <Col span="8">
          <span>是否默认绑定默认用户 :</span>
          <i-switch v-model="queryForm.isOpenBindDefaultUser" />
        </Col>
        <Col span="8">
          <span>是否开启医生关注 :</span>
          <i-switch v-model="queryForm.isOPenClinicSubscribe" />
        </Col>
        <Col span="8">
          <span>是否开启消息推送 :</span>
          <i-switch v-model="queryForm.isOpenNotice" />
        </Col>
        <Col span="8">
          <span>是否为默认设置 :</span>
          <i-switch v-model="queryForm.isDefault" />
        </Col>
        <Col span="8">
          <span>是否开启预约倒计时展示 :</span>
          <i-switch v-model="queryForm.isShowScheduleCountDown" />
        </Col>
        <Col span="8">
          <span>是否开启电子健康卡 :</span>
          <i-switch v-model="queryForm.isOpenHealthCard" />
        </Col>
        <Col span="8">
          <span>健康卡显示名称 :</span>
          <Input
            placeholder="请输入健康卡显示名称"
            style="width: 180px"
            v-model="queryForm.healthCardName"
          />
        </Col>
        <Col span="8">
          <span>健康卡底部显示名称 :</span>
          <Input
            placeholder="请输入健康卡底部显示名称"
            style="width: 180px"
            v-model="queryForm.healthCardFootName"
          />
        </Col>
        <Col span="8">
          <span>健康卡委员会名称 :</span>
          <Input
            placeholder="请输入健康卡委员会名称"
            style="width: 180px"
            v-model="queryForm.healthCardCommitteeName"
          />
        </Col>
        <Col span="8">
          <span>是否开启浏览记录 :</span>
          <i-switch v-model="queryForm.isOpenBrowsHistory" />
        </Col>
        <Col span="8">
          <span>是否开启收藏 :</span>
          <i-switch v-model="queryForm.isOpenCollect" />
        </Col>
        <Col span="8">
          <span>平台类型 :</span>
          <Input
            placeholder="请输入平台类型"
            style="width: 180px"
            v-model="queryForm.platformTypeId"
          />
        </Col>
        <Col span="8">
          <span>平台账号 :</span>
          <Input
            placeholder="请输入平台账号"
            style="width: 180px"
            v-model="queryForm.platformObjectId"
          />
        </Col>
        <Col span="8">
          <span>可搜索类型，默认为全部 :</span>
          <Input
            placeholder="请输入可搜索类型，默认为全部"
            style="width: 180px"
            v-model="queryForm.searchTypeIds"
          />
        </Col>
        <Col span="8">
          <span>是否在预约前选择患者 :</span>
          <i-switch v-model="queryForm.isSelectPatientBeforeAppointment" />
        </Col>
        <Col span="8">
          <span>创建时间:</span>
          <DatePicker
            placeholder="选择创建日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.createTimeRange"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>更新时间:</span>
          <DatePicker
            placeholder="选择更新日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.updateTimeRange"
          ></DatePicker>
        </Col>
      </Row>
      <!------ 查询条件第二行 end------->
      <Row type="flex" justify="center">
        <ButtonGroup>
          <Button
            @click="queryList"
            icon="ios-search"
            type="primary"
            v-privilege="'app-setting-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'app-setting-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'app-setting-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddAppSettingForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'app-setting-list-add'"
          >新建数据</Button
        >
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'app-setting-list-batch-delete'"
          >批量删除</Button
        >

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'app-setting-list-export-all'"
          >导出全部</Button
        >

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'app-setting-list-batch-export'"
          >批量导出</Button
        >
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
              <li v-for="item in mainTableSelectArray" :key="item.appSettingId">
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
      <AppSettingListForm
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
import { appSettingApi } from '@/api/app/app-setting';
import AppSettingListForm from './components/app-setting-list-form';
import PlatformSelect from '@/components/drop-down-select/platform-select';
const PAGE_SIZE_INIT = 20;
export default {
  name: 'AppSettingList',
  components: {
    AppSettingListForm,
    PlatformSelect
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
        // 微信账号
        weiXinAccountId: null,
        // 小程序名称
        name: null,
        // 是否必须登录
        isMustLogon: null,
        // 是否开放登录
        isOpenLogon: null,
        // 是否开启医生关注
        isOPenClinicSubscribe: null,
        // 是否开启消息推送
        isOpenNotice: null,
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
            title: '小程序名称',
            key: 'name',
            tableColumn: 'dfyy_AppSettings.Name'
          },
          {
            title: '版本号',
            key: 'version',
            tableColumn: 'dfyy_AppSettings.Version'
          },
          {
            title: '缓存时间',
            key: 'expirationDate',
            tableColumn: 'dfyy_AppSettings.ExpirationDate'
          },
          {
            title: '是否必须登录',
            key: 'isMustLogon',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isMustLogon)
              );
            }
          },
          {
            title: '是否开放登录',
            key: 'isOpenLogon',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isOpenLogon)
              );
            }
          },
          {
            title: '主题颜色',
            key: 'themeColor',
            tableColumn: 'dfyy_AppSettings.ThemeColor',
            sortable: 'custom'
          },
          {
            title: '标题字体颜色',
            key: 'titleFontColor',
            tableColumn: 'dfyy_AppSettings.TitleFontColor',
            sortable: 'custom'
          },
          {
            title: '选择后颜色',
            key: 'selectedColor',
            tableColumn: 'dfyy_AppSettings.SelectedColor',
            sortable: 'custom'
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
                      value: 'app-setting-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditAppSettingForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'app-setting-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteAppSetting(params.row.appSettingId);
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
        let result = await appSettingApi.queryAppSetting(params);
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
        // 微信账号
        weiXinAccountId: null,
        // 小程序名称
        name: null,
        // 是否必须登录
        isMustLogon: null,
        // 是否开放登录
        isOpenLogon: null,
        // 是否开启医生关注
        isOPenClinicSubscribe: null,
        // 是否开启消息推送
        isOpenNotice: null,
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
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
    async deleteAppSetting (appSettingId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await appSettingApi.deleteAppSetting(appSettingId);
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
      await appSettingApi.batchDeleteAppSetting(
        this.mainTableSelectArray.map((e) => e.appSettingId)
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
        await appSettingApi.exportAll(params);
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
        await appSettingApi.batchExport(
          this.mainTableSelectArray.map((e) => e.appSettingId)
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
    showAddAppSettingForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditAppSettingForm (updateObject) {
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
