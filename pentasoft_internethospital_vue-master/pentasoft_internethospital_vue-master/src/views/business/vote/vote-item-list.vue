<template>
  <div>
    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddVoteitemForm(0)"
          class="float-right"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'vote-item-list-add'"
          >新建数据</Button
        >
      </Row>
      <!-------操作按钮行 end------->

      <!-------表格列表 begin------->
      <Table
        :columns="mainTable.columnArray"
        :data="mainTable.data"
        :loading="mainTable.loading"
        row-key="voteItemId"
        @on-sort-change="handleSortChange"
        border="border"
        highlight-row="highlight-row"
        ref="mainTable"
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
              <li v-for="item in mainTableSelectArray" :key="item.voteItemId">
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
      <VoteItemListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        :voteId="voteId"
        :objParentId="saveModal.parentId"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert, getStepNodeName } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { voteItemApi } from "@/api/vote/vote-item";
import VoteItemListForm from "./components/vote-item-list-form";
import VoteDetailListForm from "./vote-detail-list";
import { VOTE_CHILDREN_STYLE_TYPE } from "@/constants/vote";
const PAGE_SIZE_INIT = 20;
export default {
  name: "VoteitemList",
  components: {
    VoteItemListForm,
  },
  props: {
    voteId: null,
  },
  data() {
    return {
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null,
        parentId: 0,
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
      //节点移动loading按钮
      isShowMoveLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      //搜索表单
      queryForm: {
        //所在投票
        voteId: this.voteId,
        //父级集合
        parentIds: null,
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
            type: "expand",
            width: 50,
            render: (h, params) => {
              console.log(params);
              return h(VoteDetailListForm, {
                props: {
                  voteId: params.row.voteId,
                  voteItemId: params.row.voteItemId,
                },
              });
            },
          },
          {
            title: "投票项名称",
            key: "name",
            tree: true,
            render: (h, params) => {
              return h(
                "span",
                getStepNodeName(params.row.name, params.row.depth)
              );
            },
          },
          {
            title: "投票总数",
            key: "voteTotal",
            tableColumn: "ybj_voteitems.VoteTotal",
            width: 100,
          },
          {
            title: "是否必填",
            key: "isRequired",
            width: 100,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isRequired)
              );
            },
          },
          {
            title: "是否为真正投票项",
            key: "isRealItem",
            width: 130,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isRealItem)
              );
            },
          },
          {
            title: "子项的样式类型",
            key: "childrenStyleTypeId",
            width: 130,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "VOTE_CHILDREN_STYLE_TYPE",
                  params.row.childrenStyleTypeId
                )
              );
            },
          },
          {
            title: "操作",
            key: "action",
            align: "right",
            width: 230,
            className: "action-hide",
            render: (h, params) => {
              let actions = [
                {
                  title: "上移",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-item-list-move",
                    },
                  ],
                  action: () => {
                    this.moveVoteItem(params.row.voteItemId, "up");
                  },
                },
                {
                  title: "下移",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-item-list-move",
                    },
                  ],
                  action: () => {
                    this.moveVoteItem(params.row.voteItemId, "down");
                  },
                },
                {
                  title: "编辑",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-item-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditVoteitemForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-item-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "如果存在子项，将会被一同删除，确定要删除吗？",
                      onOk: () => {
                        this.deleteVoteitem(params.row.voteItemId);
                      },
                    });
                  },
                },
                {
                  title: "更新得分",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-item-list-update-score",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要更新吗？",
                      onOk: () => {
                        this.updateVoteItemScore(params.row.voteItemId);
                      },
                    });
                  },
                },
              ];
              if (!params.row.isRealItem || params.row.isFillItem) {
                actions.push({
                  title: "添加子节点",
                  directives: [
                    {
                      name: "privilege",
                      value: "vote-item-list-add",
                    },
                  ],
                  action: () => {
                    this.showAddVoteitemForm(params.row.voteItemId);
                  },
                });
              }
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
      return {
        ...this.queryForm,
      };
    },
    //查询
    async queryList() {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await voteItemApi.queryVoteitem(params);
        let tmpData = result.data;
        tmpData.list.map((pNode) => {
          if (!pNode.isRealItem || pNode.isFillItem) {
            pNode._disableExpand = true;
          }
        });
        this.mainTable.data = tmpData.list;
        this.mainTable.total = result.data.total;
        /**todo:优化iview的table树形结构子项无法展开*/
        //this.getTreeRootData(tmpData);
      } finally {
        this.mainTable.loading = false;
      }
    },
    //********Tree数据 begin********/
    // 生成树形图数据
    // 这里处理没有children结构的数据
    getTreeRootData(data) {
      // 取父节点
      let parentArr = data.list.filter(
        (l) => l.parentId == null || l.parentId == 0
      );
      let treeRoot = this.getTreeData(data.list, parentArr);
      this.mainTable.data = treeRoot;
      this.mainTablePage.total = data.total;
    },
    getTreeData(list, dataArr) {
      dataArr.map((pNode, i) => {
        let childObj = [];
        list.map((cNode, j) => {
          if (pNode.voteItemId === cNode.parentId) {
            childObj.push(cNode);
          }
        });
        pNode.children = childObj;
        if (childObj.length > 0) {
          pNode._showChildren = true;
          this.getTreeData(list, childObj);
        }
        //非真实投票项 和 填写项 无需设置投票项详细展开
        if (!pNode.isRealItem || pNode.isFillItem) {
          pNode._disableExpand = true;
        } else {
          pNode._isExpanded = true;
        }
      });
      return dataArr;
    },
    /**********Tree数据 end */
    //重置查询
    resetQueryList() {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        name: null,
        voteId: this.voteId,
        parentIds: null,
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
    async deleteVoteitem(voteItemId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await voteItemApi.deleteVoteitem(voteItemId);
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
      await voteItemApi.batchDeleteVoteitem(
        this.mainTableSelectArray.map((e) => e.voteItemId)
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
        await voteItemApi.exportAll(params);
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
        await voteItemApi.batchExport(
          this.mainTableSelectArray.map((e) => e.voteItemId)
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
    showAddVoteitemForm(parentId) {
      this.saveModal.parentId = parentId || 0;
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditVoteitemForm(updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose() {
      this.saveModal.show = false;
      this.queryList();
    },
    /*-------------------------节点移动 begin------------------------- */
    async moveVoteItem(voteItemId, direction) {
      try {
        this.isShowMoveLoading = true;
        let result = await voteItemApi.moveVoteItem(voteItemId, direction);
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
    /*-------------------------添加，修改 表单 end------------------------- */
  },
};
</script>
