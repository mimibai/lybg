<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>主键Id :</span>
          <Input
            placeholder="请输入主键Id"
            style="width: 180px"
            v-model="queryForm.clinicSettingId"
          />
        </Col>
        <Col span="8">
          <span>是否开启 :</span>
          <i-switch v-model="queryForm.isOpen" />
        </Col>
        <Col span="8">
          <span>是否默认 :</span>
          <i-switch v-model="queryForm.isDefault" />
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
          <span>问诊科室 :</span>
          <Input
            placeholder="请输入问诊科室"
            style="width: 180px"
            v-model="queryForm.departmentId"
          />
        </Col>
        <Col span="8">
          <span>问诊医生 :</span>
          <Input
            placeholder="请输入问诊医生"
            style="width: 180px"
            v-model="queryForm.doctorId"
          />
        </Col>
        <Col span="8">
          <span>是否删除 :</span>
          <i-switch v-model="queryForm.isDelete" />
        </Col>
        <Col span="8">
          <span>名称 :</span>
          <Input
            placeholder="请输入名称"
            style="width: 180px"
            v-model="queryForm.name"
          />
        </Col>
        <Col span="8">
          <span>问诊医生科室须知 :</span>
          <Input
            placeholder="请输入问诊医生科室须知"
            style="width: 180px"
            v-model="queryForm.clinicAgreementId"
          />
        </Col>
        <Col span="8">
          <span>是否显示管理回复信息 :</span>
          <i-switch v-model="queryForm.isShowMangeReplyInfo" />
        </Col>
        <Col span="8">
          <span>接单开关 :</span>
          <i-switch v-model="queryForm.isReceiving" />
        </Col>
        <Col span="8">
          <span>是否开启免打扰 :</span>
          <i-switch v-model="queryForm.isNotDisturb" />
        </Col>
        <Col span="8">
          <span>是否启用在线支付 :</span>
          <i-switch v-model="queryForm.isOpenPayment" />
        </Col>
        <Col span="8">
          <span>门诊问诊医生 :</span>
          <Input
            placeholder="请输入门诊问诊医生"
            style="width: 180px"
            v-model="queryForm.oPDoctorId"
          />
        </Col>
        <Col span="8">
          <span>门诊问诊科室 :</span>
          <Input
            placeholder="请输入门诊问诊科室"
            style="width: 180px"
            v-model="queryForm.oPDepartmentId"
          />
        </Col>
        <Col span="8">
          <span>是否实时获取在线问诊 :</span>
          <i-switch v-model="queryForm.isOpenRealTimeClinic" />
        </Col>
        <Col span="8">
          <span>是否开启图文 :</span>
          <i-switch v-model="queryForm.isOpenClinicImageText" />
        </Col>
        <Col span="8">
          <span>是否开启语音 :</span>
          <i-switch v-model="queryForm.isOpenClinicVoice" />
        </Col>
        <Col span="8">
          <span>是否开启视频 :</span>
          <i-switch v-model="queryForm.isOpenClinicVideo" />
        </Col>
        <Col span="8">
          <span>限制药品类型 :</span>
          <Input
            placeholder="请输入限制药品类型"
            style="width: 180px"
            v-model="queryForm.limitDrugType"
          />
        </Col>
        <Col span="8">
          <span>是否开启审核 :</span>
          <i-switch v-model="queryForm.isOpenExamine" />
        </Col>
        <Col span="8">
          <span>在线问诊是否开启开诊断和处方 :</span>
          <i-switch v-model="queryForm.isOpenDiagnosePrescription" />
        </Col>
        <Col span="8">
          <span>是否开启开检查 :</span>
          <i-switch v-model="queryForm.isOpenInspect" />
        </Col>
        <Col span="8">
          <span>是否开启历史方 :</span>
          <i-switch v-model="queryForm.isOpenHistoricalPrescription" />
        </Col>
        <Col span="8">
          <span>是否开启常用方 :</span>
          <i-switch v-model="queryForm.isOpenCommonPrescription" />
        </Col>
        <Col span="8">
          <span>处方药品支付类型 :</span>
          <Input
            placeholder="请输入处方药品支付类型"
            style="width: 180px"
            v-model="queryForm.prescriptionDrugsPayTypeId"
          />
        </Col>
        <Col span="8">
          <span>评价问卷 :</span>
          <Input
            placeholder="请输入评价问卷"
            style="width: 180px"
            v-model="queryForm.voteId"
          />
        </Col>
        <Col span="8">
          <span>问诊功能类型 :</span>
          <Input
            placeholder="请输入问诊功能类型"
            style="width: 180px"
            v-model="queryForm.clinicFunctionalTypeId"
          />
        </Col>
        <Col span="8">
          <span>是否开启第三方审方 :</span>
          <i-switch v-model="queryForm.isOpenThirdPartyExamine" />
        </Col>
        <Col span="8">
          <span>是否开启选择药房 :</span>
          <i-switch v-model="queryForm.isOpenChoicePharmacy" />
        </Col>
        <Col span="8">
          <span>是否开启上传监管平台 :</span>
          <i-switch v-model="queryForm.isOpenUploadSupervisionPlatform" />
        </Col>
        <Col span="8">
          <span>是否开启自定义诊断 :</span>
          <i-switch v-model="queryForm.isOpenCustomDiagos" />
        </Col>
        <Col span="8">
          <span>是否医生开方前确认表单 :</span>
          <i-switch v-model="queryForm.isPrescriptionBeforeValidateForm" />
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
            v-privilege="'clinic-setting-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'clinic-setting-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'clinic-setting-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddClinicSettingForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'clinic-setting-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'clinic-setting-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-setting-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-setting-list-batch-export'"
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
                :key="item.clinicSettingId"
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
      <ClinicSettingListForm
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
import { clinicSettingApi } from '@/api/clinic/clinic-setting';
import ClinicSettingListForm from './components/clinic-setting-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'ClinicSettingList',
  components: {
    ClinicSettingListForm
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
      isShowDeleteLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      // 搜索表单
      queryForm: {
        // 主键Id
        clinicSettingId: null,
        // 是否开启
        isOpen: null,
        // 是否默认
        isDefault: null,
        // 问诊科室
        departmentId: null,
        // 问诊医生
        doctorId: null,
        // 是否删除
        isDelete: null,
        // 名称
        name: '',
        // 问诊医生科室须知
        clinicAgreementId: null,
        // 是否显示管理回复信息
        isShowMangeReplyInfo: null,
        // 接单开关
        isReceiving: null,
        // 是否开启免打扰
        isNotDisturb: null,
        // 是否启用在线支付
        isOpenPayment: null,
        // 门诊问诊医生
        oPDoctorId: null,
        // 门诊问诊科室
        oPDepartmentId: null,
        // 是否实时获取在线问诊
        isOpenRealTimeClinic: null,
        // 是否开启图文
        isOpenClinicImageText: null,
        // 是否开启语音
        isOpenClinicVoice: null,
        // 是否开启视频
        isOpenClinicVideo: null,
        // 限制药品类型
        limitDrugType: '',
        // 是否开启审核
        isOpenExamine: null,
        // 在线问诊是否开启开诊断和处方
        isOpenDiagnosePrescription: null,
        // 是否开启开检查
        isOpenInspect: null,
        // 是否开启历史方
        isOpenHistoricalPrescription: null,
        // 是否开启常用方
        isOpenCommonPrescription: null,
        // 处方药品支付类型
        prescriptionDrugsPayTypeId: null,
        // 评价问卷
        voteId: null,
        // 问诊功能类型
        clinicFunctionalTypeId: null,
        // 是否开启第三方审方
        isOpenThirdPartyExamine: null,
        // 是否开启选择药房
        isOpenChoicePharmacy: null,
        // 是否开启上传监管平台
        isOpenUploadSupervisionPlatform: null,
        // 是否开启自定义诊断
        isOpenCustomDiagos: null,
        // 是否医生开方前确认表单
        isPrescriptionBeforeValidateForm: null,
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
            sortable: 'custom'
          },
          {
            title: '是否开启',
            key: 'isOpen',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isOpen)
              );
            }
          },
          {
            title: '问诊科室',
            key: 'departmentId',
            sortable: 'custom'
          },
          {
            title: '问诊医生',
            key: 'doctorId',
            sortable: 'custom'
          },
          {
            title: '描述',
            key: 'description',
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
                      value: 'clinic-setting-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditClinicSettingForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'clinic-setting-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteClinicSetting(params.row.clinicSettingId);
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
        let result = await clinicSettingApi.queryClinicSetting(params);
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
        clinicSettingId: null,
        isOpen: null,
        isDefault: null,
        departmentId: null,
        doctorId: null,
        isDelete: null,
        name: null,
        clinicAgreementId: null,
        isShowMangeReplyInfo: null,
        isReceiving: null,
        isNotDisturb: null,
        isOpenPayment: null,
        oPDoctorId: null,
        oPDepartmentId: null,
        isOpenRealTimeClinic: null,
        isOpenClinicImageText: null,
        isOpenClinicVoice: null,
        isOpenClinicVideo: null,
        limitDrugType: null,
        isOpenExamine: null,
        isOpenDiagnosePrescription: null,
        isOpenInspect: null,
        isOpenHistoricalPrescription: null,
        isOpenCommonPrescription: null,
        prescriptionDrugsPayTypeId: null,
        voteId: null,
        clinicFunctionalTypeId: null,
        isOpenThirdPartyExamine: null,
        isOpenChoicePharmacy: null,
        isOpenUploadSupervisionPlatform: null,
        isOpenCustomDiagos: null,
        isPrescriptionBeforeValidateForm: null,
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
    async deleteClinicSetting (clinicSettingId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await clinicSettingApi.deleteClinicSetting(
          clinicSettingId
        );
        this.isShowDeleteLoading = false;
        this.$Message.success('删除成功');
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        console.error(e);
        this.isShowDeleteLoading = false;
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
      await clinicSettingApi.batchDeleteClinicSetting(
        this.mainTableSelectArray.map((e) => e.clinicSettingId)
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
        await clinicSettingApi.exportAll(params);
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
        await clinicSettingApi.batchExport(
          this.mainTableSelectArray.map((e) => e.clinicSettingId)
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
    showAddClinicSettingForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditClinicSettingForm (updateObject) {
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
