<template>
  <div>
    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddOpDailySchedulingNumberForm"
          class="marginLeft10 float-right"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'op-daily-scheduling-number-list-add'"
          >新建数据
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

    <!-------添加、更新 Form表单 begin------->
    <Modal
      :footer-hide="true"
      :title="saveModal.isUpdate ? '更新' : '新建'"
      v-model="saveModal.show"
      @on-cancel="saveFormClose"
      width="500"
    >
      <OpDailySchedulingNumberListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
        :opdaily-scheduling-id="opdailySchedulingId"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { opDailySchedulingNumberApi } from "@/api/scheduling/op-daily-scheduling-number";
import OpDailySchedulingNumberListForm from "./components/op-daily-scheduling-number-list-form";

const PAGE_SIZE_INIT = 20;
export default {
  name: "OpDailySchedulingNumberList",
  components: {
    OpDailySchedulingNumberListForm,
  },
  props: {
    opdailySchedulingId: null,
  },
  data() {
    return {
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null,
      },
      /* -------------------------批量操作------------------------- */
      //批量刪除彈出框
      batchDeleteModal: {
        show: false,
      },
      //表格多选选中的元素数组
      mainTableSelectArray: [],
      /* -------------------------导出操作------------------------- */
      //批量导出loading按钮
      batchExportBtnLoading: false,
      //导出全部loading按钮
      allExportBtnLoading: false,
      isShowdeleteLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      //搜索表单
      queryForm: {
        //每日排班
        opdailySchedulingId: this.opdailySchedulingId,
        //号码
        number: null,
        //时间备注
        timeRemark: null,
        //是否已预约
        isAppointment: null,
        //预约时间   仅保存首次预约时间（即取消再预约不更新此时间）
        appointmentDate: null,
        //排序
        sorting: null,
        //出诊时间
        schedulingTime: null,
        //是否删除
        isDelete: null,
        //号源预约类型
        schedulingAppointmentTypeId: null,
        createTimeRange: ["", ""],
        updateTimeRange: ["", ""],
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
        orders: [],
      },
      //是否展示更多搜索条件
      showMoreQueryConditionFlag: false,
      /*  -------------------------表格相关数据------------------------- */
      //表格分页
      mainTablePage: {
        total: 0,
        pageSizeOps: PAGE_SIZE_OPTIONS,
      },
      //表格
      mainTable: {
        //加载中
        loading: false,
        //表格数据
        data: [],
        //表格列
        columnArray: [
          {
            type: "selection",
            width: 30,
            align: "center",
          },
          {
            title: "号序",
            key: "number",
            tableColumn: "smart_OPDailySchedulingNumbers.number",
            sortable: "custom",
          },
          {
            title: "是否已预约",
            key: "isAppointment",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isAppointment)
              );
            },
          },
          {
            title: "预约时间",
            key: "appointmentDate",
            tableColumn: "smart_OPDailySchedulingNumbers.AppointmentDate",
            sortable: "custom",
          },
          {
            title: "出诊时间",
            key: "schedulingTime",
            tableColumn: "smart_OPDailySchedulingNumbers.SchedulingTime",
            sortable: "custom",
          },
          {
            title: "号源预约类型",
            key: "schedulingAppointmentTypeId",
            tableColumn:
              "smart_OPDailySchedulingNumbers.SchedulingAppointmentTypeId",
            sortable: "custom",
          },
          {
            title: "操作",
            key: "action",
            align: "right",
            width: 130,
            className: "action-hide",
            render: (h, params) => {
              let actions = [
                {
                  title: "编辑",
                  directives: [
                    {
                      name: "privilege",
                      value: "op-daily-scheduling-number-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditOpDailySchedulingNumberForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "op-daily-scheduling-number-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteOpDailySchedulingNumber(
                          params.row.opdailySchedulingNumberId
                        );
                      },
                    });
                  },
                },
              ];
              return this.$tableAction(h, actions);
            },
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created() {},
  mounted() {
    this.queryList();
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    /* -------------------------查询相关 begin------------------------- */
    convertQueryParam() {
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
        dateModifiedEnd: updateTimeArray[1],
      };
    },
    //查询
    async queryList() {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await opDailySchedulingNumberApi.queryOpDailySchedulingNumber(
          params
        );
        this.mainTable.data = result.data.list;
        this.mainTablePage.total = result.data.total;
      } finally {
        this.mainTable.loading = false;
      }
    },
    //重置查询
    resetQueryList() {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        opdailySchedulingId: this.opdailySchedulingId,
        number: null,
        timeRemark: null,
        isAppointment: null,
        appointmentDate: null,
        sorting: null,
        schedulingTime: null,
        isDelete: null,
        schedulingAppointmentTypeId: null,
        createTimeRange: ["", ""],
        updateTimeRange: ["", ""],
        pageNum: 1,
        pageSize: pageSize,
        orders: [],
      };
      this.queryList();
    },
    //修改页码
    changeMainTablePagePageNum(pageNum) {
      this.queryForm.pageNum = pageNum;
      this.queryList();
    },
    //修改页大小
    changeMainTablePagePageSize(pageSize) {
      this.queryForm.pageNum = 1;
      this.queryForm.pageSize = pageSize;
      this.queryList();
    },
    //处理排序
    handleSortChange(column) {
      if (column.order === "normal") {
        this.queryForm.orders = [];
      } else {
        this.queryForm.orders = [
          {
            column: column.column.tableColumn,
            asc: "asc" === column.order,
          },
        ];
      }
      this.queryList();
    },
    /*-------------------------查询相关 end------------------------- */

    /*-------------------------删除 begin------------------------- */
    // 根据ID删除
    async deleteOpDailySchedulingNumber(opDailySchedulingNumberId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await opDailySchedulingNumberApi.deleteOpDailySchedulingNumber(
          opDailySchedulingNumberId
        );
        this.isShowdeleteLoading = false;
        this.$Message.success("删除成功");
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        //TODO zhuoda sentry
        console.error(e);
        this.isShowdeleteLoading = false;
      }
    },
    /*-------------------------删除 begin------------------------- */

    /*-------------------------批量操作 begin------------------------- */
    //显示批量删除弹窗
    showBatchDeleteModal() {
      if (!this.validateMainTableSelection()) {
        return;
      }
      this.batchDeleteModal.show = true;
    },
    //批量删除
    async batchDelete() {
      this.$Spin.show();
      await opDailySchedulingNumberApi.batchDeleteOpDailySchedulingNumber(
        this.mainTableSelectArray.map((e) => e.opDailySchedulingNumberId)
      );
      this.batchDeleteModal.show = false;
      this.$Message.success("刪除成功");
      this.$Spin.hide();
      this.queryList();
    },
    //清空选中
    clearMainTableSelection() {
      this.mainTableSelectArray = [];
    },
    //校验是否有选中
    validateMainTableSelection() {
      this.mainTableSelectArray = this.$refs.mainTable.getSelection();
      if (this.mainTableSelectArray.length < 1) {
        this.$Message.error("请选择至少一条数据");
        return false;
      }
      return true;
    },
    /*-------------------------批量操作 end------------------------- */

    /*-------------------------导入导出 begin------------------------- */
    //导出全部
    async exportAll() {
      try {
        this.allExportBtnLoading = true;
        let params = this.convertQueryParam();
        await opDailySchedulingNumberApi.exportAll(params);
      } catch (e) {
        console.log(e);
      } finally {
        this.allExportBtnLoading = false;
      }
    },
    //批量导出
    async batchExport() {
      if (!this.validateMainTableSelection()) {
        return;
      }
      try {
        this.batchExportBtnLoading = true;
        await opDailySchedulingNumberApi.batchExport(
          this.mainTableSelectArray.map((e) => e.opDailySchedulingNumberId)
        );
      } catch (e) {
        console.log(e);
      } finally {
        this.batchExportBtnLoading = false;
      }
    },
    /*-------------------------导入导出 end------------------------- */

    /*-------------------------添加，修改 表单 begin------------------------- */
    //显示添加表单
    showAddOpDailySchedulingNumberForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditOpDailySchedulingNumberForm(updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose() {
      this.saveModal.show = false;
      this.queryList();
    },
    /*-------------------------添加，修改 表单 end------------------------- */
  },
};
</script>
