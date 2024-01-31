<template>
  <div>
    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row
        class="marginBottom10"
        style="width: 700px; margin-left: auto; margin-right: auto"
      >
        <Button
          @click="showAddVoteDetailForm"
          class="float-right"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'vote-detail-list-add'"
          >新建数据</Button
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
        width="700"
        style="margin: 0 auto"
      ></Table>

      <!-- <Page
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
      /> -->
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
              <li v-for="item in mainTableSelectArray" :key="item.voteDetailId">
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
      <VoteDetailListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        :voteId="voteId"
        :voteItemId="voteItemId"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { voteDetailApi } from "@/api/vote/vote-detail";
import VoteDetailListForm from "./components/vote-detail-list-form";
const PAGE_SIZE_INIT = 20;
export default {
  name: "VoteDetailList",
  components: {
    VoteDetailListForm,
  },
  props: {
    voteId: null,
    voteItemId: null,
    vModeTypeId: null,
  },
  data() {
    return {
      isShowMoveLoading:false,
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
        //所在投票项
        voteItemId: this.voteItemId,
        //所在投票
        voteId: this.voteId,
        //所在站点
        siteId: null,
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
            title: "投票明细名称",
            key: "name",
          },
          {
            title: "是否附加文本",
            key: "isAppendText",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isAppendText)
              );
            },
          },
          {
            title: "附加文本标题",
            key: "appendTextTitle",
            tableColumn: "ybj_votedetails.AppendTextTitle",
          },
          {
            title: "投票总数",
            key: "voteTotal",
            tableColumn: "ybj_votedetails.VoteTotal",
          },
          {
            title: "操作",
            key: "action",
            align: "right",
            width: 150,
            className: "action-hide",
            render: (h, params) => {
              let actions = [
                {
                  title: "上移",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-detail-list-move",
                    },
                  ],
                  action: () => {
                    this.moveVoteDetail(params.row.voteDetailId, "up");
                  },
                },
                {
                  title: "下移",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-detail-list-move",
                    },
                  ],
                  action: () => {
                    this.moveVoteDetail(params.row.voteDetailId, "down");
                  },
                },
                {
                  title: "编辑",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-detail-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditVoteDetailForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-detail-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteVoteDetail(params.row.voteDetailId);
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
  watch: {
    // voteId: function (newValue, oldValue) {
    //   if (newValue) {
    //     this.voteId = newValue;
    //   }
    // },
    // voteItemId: function (newValue, oldValue) {
    //   if (newValue) {
    //     this.voteItemId = newValue;
    //   }
    // },
  },
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
      return {
        ...this.queryForm,
      };
    },
    //查询
    async queryList() {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await voteDetailApi.queryVoteDetail(params);
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
        voteItemId: null,
        voteId: null,
        siteId: null,
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
    async deleteVoteDetail(voteDetailId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await voteDetailApi.deleteVoteDetail(voteDetailId);
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
      await voteDetailApi.batchDeleteVoteDetail(
        this.mainTableSelectArray.map((e) => e.voteDetailId)
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
        await voteDetailApi.exportAll(params);
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
        await voteDetailApi.batchExport(
          this.mainTableSelectArray.map((e) => e.voteDetailId)
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
    showAddVoteDetailForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditVoteDetailForm(updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose() {
      this.saveModal.show = false;
      this.queryList();
    },
    /*-------------------------添加，修改 表单 end------------------------- */
    /*-------------------------节点移动 begin------------------------- */
    async moveVoteDetail(voteDetailId, direction) {
      try {
        this.isShowMoveLoading = true;
        let result = await voteDetailApi.moveVoteDetail(voteDetailId, direction);
        this.isShowMoveLoading = false;
        this.$Message.success("操作成功");
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        //TODO zhuoda sentry
        console.error(e);
        this.isShowMoveLoading = false;
      }
    },
    /*-------------------------节点移动 begin------------------------- */
  },
};
</script>
