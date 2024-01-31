<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>主键 :</span>
          <Input
            placeholder="请输入主键"
            style="width: 180px"
            v-model="queryForm.clinicPrescriptId"
          />
        </Col>
        <Col span="8">
          <span>问诊记录 :</span>
          <Input
            placeholder="请输入问诊记录"
            style="width: 180px"
            v-model="queryForm.clinicRecordId"
          />
        </Col>
        <Col span="8">
          <span>开药类型 :</span>
          <Input
            placeholder="请输入开药类型"
            style="width: 180px"
            v-model="queryForm.prescriptTypeId"
          />
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
          <span>开药状态 :</span>
          <Input
            placeholder="请输入开药状态"
            style="width: 180px"
            v-model="queryForm.prescriptStateTypeId"
          />
        </Col>
        <Col span="8">
          <span>挂号主键 :</span>
          <Input
            placeholder="请输入挂号主键"
            style="width: 180px"
            v-model="queryForm.clinicAppointmentId"
          />
        </Col>
        <Col span="8">
          <span>取药类型 :</span>
          <Input
            placeholder="请输入取药类型"
            style="width: 180px"
            v-model="queryForm.postTypeId"
          />
        </Col>
        <Col span="8">
          <span>邮寄地址 :</span>
          <Input
            placeholder="请输入邮寄地址"
            style="width: 180px"
            v-model="queryForm.receiveAddressId"
          />
        </Col>
        <Col span="8">
          <span>门诊科室 :</span>
          <Input
            placeholder="请输入门诊科室"
            style="width: 180px"
            v-model="queryForm.oPDepartmentId"
          />
        </Col>
        <Col span="8">
          <span>科室主键 :</span>
          <Input
            placeholder="请输入科室主键"
            style="width: 180px"
            v-model="queryForm.departmentId"
          />
        </Col>
        <Col span="8">
          <span>门诊医生 :</span>
          <Input
            placeholder="请输入门诊医生"
            style="width: 180px"
            v-model="queryForm.oPDoctorId"
          />
        </Col>
        <Col span="8">
          <span>医生 :</span>
          <Input
            placeholder="请输入医生"
            style="width: 180px"
            v-model="queryForm.doctorId"
          />
        </Col>
        <Col span="8">
          <span>医生名称 :</span>
          <Input
            placeholder="请输入医生名称"
            style="width: 180px"
            v-model="queryForm.doctorName"
          />
        </Col>
        <Col span="8">
          <span>医生用户 :</span>
          <Input
            placeholder="请输入医生用户"
            style="width: 180px"
            v-model="queryForm.doctorUserId"
          />
        </Col>
        <Col span="8">
          <span>患者主键 :</span>
          <Input
            placeholder="请输入患者主键"
            style="width: 180px"
            v-model="queryForm.patientId"
          />
        </Col>
        <Col span="8">
          <span>患者姓名 :</span>
          <Input
            placeholder="请输入患者姓名"
            style="width: 180px"
            v-model="queryForm.patientName"
          />
        </Col>
        <Col span="8">
          <span>患者第三方主键 :</span>
          <Input
            placeholder="请输入患者第三方主键"
            style="width: 180px"
            v-model="queryForm.patientThirdCode"
          />
        </Col>
        <Col span="8">
          <span>患者性别 :</span>
          <Input
            placeholder="请输入患者性别"
            style="width: 180px"
            v-model="queryForm.patientGenderId"
          />
        </Col>
        <Col span="8">
          <span>提交用户 :</span>
          <Input
            placeholder="请输入提交用户"
            style="width: 180px"
            v-model="queryForm.postUserId"
          />
        </Col>
        <Col span="8">
          <span>申请日期 :</span>
          <DatePicker
            type="datetime"
            placeholder="请选择申请日期"
            v-model="queryForm.applyDate"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>诊断日期 :</span>
          <DatePicker
            type="datetime"
            placeholder="请选择诊断日期"
            v-model="queryForm.clinicResultDate"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>是否删除 :</span>
          <i-switch v-model="queryForm.isDelete" />
        </Col>
        <Col span="8">
          <span>是否需要发票 :</span>
          <i-switch v-model="queryForm.isReceipt" />
        </Col>
        <Col span="8">
          <span>外配提交是否成功 :</span>
          <i-switch v-model="queryForm.isExternal" />
        </Col>
        <Col span="8">
          <span>是否在院 :</span>
          <i-switch v-model="queryForm.isHospital" />
        </Col>
        <Col span="8">
          <span>订单id :</span>
          <Input
            placeholder="请输入订单id"
            style="width: 180px"
            v-model="queryForm.orderId"
          />
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
            v-privilege="'clinic-prescript-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'clinic-prescript-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'clinic-prescript-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddClinicPrescriptForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'clinic-prescript-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'clinic-prescript-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-prescript-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-prescript-list-batch-export'"
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
                :key="item.clinicPrescriptId"
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
      <ClinicPrescriptListForm
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
import { clinicPrescriptApi } from '@/api/clinic/clinic-prescript';
import ClinicPrescriptListForm from './components/clinic-prescript-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'ClinicPrescriptList',
  components: {
    ClinicPrescriptListForm
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
        // 主键
        clinicPrescriptId: null,
        // 问诊记录
        clinicRecordId: null,
        // 开药类型
        prescriptTypeId: null,
        // 开药状态
        prescriptStateTypeId: null,
        // 挂号主键
        clinicAppointmentId: null,
        // 取药类型
        postTypeId: null,
        // 邮寄地址
        receiveAddressId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 科室主键
        departmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 医生
        doctorId: null,
        // 医生名称
        doctorName: '',
        // 医生用户
        doctorUserId: null,
        // 患者主键
        patientId: null,
        // 患者姓名
        patientName: '',
        // 患者第三方主键
        patientThirdCode: '',
        // 患者性别
        patientGenderId: null,
        // 提交用户
        postUserId: null,
        // 申请日期
        applyDate: null,
        // 诊断日期
        clinicResultDate: null,
        // 是否删除
        isDelete: false,
        // 是否需要发票
        isReceipt: false,
        // 外配提交是否成功
        isExternal: false,
        // 是否在院
        isHospital: false,
        // 订单id
        orderId: null,
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
            title: '患者姓名',
            key: 'patientName',
            sortable: 'custom'
          },
          {
            title: '科室名称',
            key: 'departmentName',
            sortable: 'custom'
          },
          {
            title: '医生名称',
            key: 'doctorName',
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
            title: '申请日期',
            key: 'applyDate',
            sortable: 'custom'
          },
          {
            title: '挂号类型',
            key: 'patientTypeId',
            sortable: 'custom'
          },
          {
            title: '处方是否支付',
            key: 'isPrescriptPay',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isPrescriptPay
                )
              );
            }
          },

          {
            title: '驳回原因',
            key: 'rejectReason',
            sortable: 'custom'
          },
          {
            title: '处方支付状态',
            key: 'paymentStateTypeId',
            sortable: 'custom'
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
                      value: 'clinic-prescript-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditClinicPrescriptForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'clinic-prescript-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteClinicPrescript(
                          params.row.clinicPrescriptId
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
        let result = await clinicPrescriptApi.queryClinicPrescript(params);
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
        clinicPrescriptId: null,
        clinicRecordId: null,
        prescriptTypeId: null,
        prescriptStateTypeId: null,
        clinicAppointmentId: null,
        postTypeId: null,
        receiveAddressId: null,
        oPDepartmentId: null,
        departmentId: null,
        oPDoctorId: null,
        doctorId: null,
        doctorName: null,
        doctorUserId: null,
        patientId: null,
        patientName: null,
        patientThirdCode: null,
        patientGenderId: null,
        postUserId: null,
        applyDate: null,
        clinicResultDate: null,
        isDelete: null,
        isReceipt: null,
        isExternal: null,
        isHospital: null,
        orderId: null,
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
    async deleteClinicPrescript (clinicPrescriptId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await clinicPrescriptApi.deleteClinicPrescript(
          clinicPrescriptId
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
      await clinicPrescriptApi.batchDeleteClinicPrescript(
        this.mainTableSelectArray.map((e) => e.clinicPrescriptId)
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
        await clinicPrescriptApi.exportAll(params);
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
        await clinicPrescriptApi.batchExport(
          this.mainTableSelectArray.map((e) => e.clinicPrescriptId)
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
    showAddClinicPrescriptForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditClinicPrescriptForm (updateObject) {
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
