<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row class="smart-query-form-row">
        <span>
          栏目名称 :
          <Input
            placeholder="请输入栏目名称"
            style="width: 180px"
            v-model="queryForm.name"
          />
        </span>
        <span>
          栏目类型 :
          <Select
            placeholder="请选择类型"
            style="width: 200px"
            v-model="queryForm.columnTypeId"
          >
            <Option value>全部</Option>
            <Option
              :key="item.columnId"
              :value="item.value"
              v-for="item in columnTypeList"
              >{{ item.label }}</Option
            >
          </Select>
        </span>
        <span>
          是否锁定：
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.isLock"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value ? 1 : 0"
              v-for="item in enableList"
              >{{ item.desc }}</Option
            >
          </Select>
        </span>

        <ButtonGroup>
          <Button
            @click="queryList"
            icon="ios-search"
            type="primary"
            v-privilege="'column-list-query'"
            >查询</Button
          >
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'column-list-query'"
            >重置</Button
          >
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'column-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}</Button
        >
      </Row>
      <!------ 查询条件第一行 begin------->

      <!------ 查询条件第二行 begin------->
      <Row class="smart-query-form-row" v-show="showMoreQueryConditionFlag">
      </Row>
      <!------ 查询条件第二行 end------->
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddColumnForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'column-list-add'"
          >新建数据</Button
        >
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'column-list-batch-delete'"
          >批量删除</Button
        >

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'column-list-export-all'"
          >导出全部</Button
        >

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'column-list-batch-export'"
          >批量导出</Button
        >
      </Row>
      <!-------操作按钮行 end------->

      <!-------表格列表 begin------->
      <Table
        :columns="mainTable.columnArray"
        :data="mainTable.data"
        :loading="mainTable.loading"
        :objData="mainTable.data"
        row-key="id"
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
              <li v-for="item in mainTableSelectArray" :key="item.columnId">
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
      <ColumnListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import {  getStepNodeName } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { columnApi } from "@/api/news/column";
import ColumnListForm from "./components/column-list-form";
import { YES_OR_NO } from "@/constants/common";
const PAGE_SIZE_INIT = 20;
export default {
  name: "ColumnListView",
  components: {
    ColumnListForm,
  },
  props: {},
  data() {
    return {
      originalData: [],
      columnTypeList: [],
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
        //主键
        id: null,
        //栏目名称
        name: null,
        //所在站点
        siteId: null,
        //是否启用
        isEnable: null,
        //栏目类型Id
        columnTypeId: null,
        //上一级主键
        parentId: null,
        //所在医院
        hospitalId: null,
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
            title: "栏目名称",
            key: "name",
            tree: true,
            width: 300,
            render: (h, params) => {
              return h(
                "A",
                {
                  attrs: {
                    href: params.row.columnUrl,
                    target: "_blank",
                  },
                },
                getStepNodeName(params.row.name, params.row.depth)
              );
            },
          },
          {
            title: "栏目类型",
            key: "columnTypeId",
          },
          {
            title: "是否为分类",
            key: "isClassify",
            width: 100,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isClassify)
              );
            },
          },
          {
            title: "是否启用",
            key: "isEnable",
            width: 100,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isEnable)
              );
            },
          },
          {
            title: "所在站点",
            key: "siteId",
            render: (h, params) => {
              return h("span", params.row.site.name);
            },
          },
          {
            title: "是否锁定",
            key: "isLock",
            width: 100,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isLock)
              );
            },
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
                      value: "column-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditColumnForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "column-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteColumn(params.row.columnId);
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
  computed: {
    enableList: () => {
      let array = [];
      for (let item in YES_OR_NO) {
        let obj = {};
        obj.desc = YES_OR_NO[item].desc;
        obj.value = YES_OR_NO[item].value;
        array.push(obj);
      }
      return array;
    },
  },
  watch: {},
  filters: {},
  created() {
    this.initColumnTypeList();
  },
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
    //查询栏目类型
    async initColumnTypeList() {
      try {
        let params = {
          pageNum: 1,
          pageSize: 100,
        };
        let result = await columnApi.queryColumnType(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            id: item.columnId,
            value: item.keyId,
            label: item.name,
          });
        });
        this.columnTypeList = list;
      } finally {
      }
    },
    //查询
    async queryList() {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await columnApi.queryColumn(params);
        this.originalData = result.data;
        this.getTreeRootData();
      } finally {
        this.mainTable.loading = false;
      }
    },
    //********Tree数据 begin********/
    // 生成树形图数据
    // 这里处理没有children结构的数据
    getTreeRootData() {
      // 取父节点
      let parentArr = this.originalData.list.filter((l) => l.parentId == null);
      let treeRoot = this.getTreeData(this.originalData.list, parentArr);
      this.mainTable.data = treeRoot;
      this.mainTablePage.total = this.originalData.total;
    },
    getTreeData(list, dataArr) {
      dataArr.map((pNode, i) => {
        let childObj = [];
        list.map((cNode, j) => {
          if (pNode.columnId === cNode.parentId) {
            childObj.push(cNode);
          }
        });
        pNode.children = childObj;
        if (childObj.length > 0) {
          pNode._showChildren = true;
          this.getTreeData(list, childObj);
        }
      });
      return dataArr;
    },
    /**********Tree数据 end */
    //重置查询
    resetQueryList() {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        id: null,
        name: null,
        siteId: null,
        isEnable: null,
        columnTypeId: null,
        parentId: null,
        hospitalId: null,
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
    async deleteColumn(id) {
      try {
        this.isShowdeleteLoading = true;
        let result = await columnApi.deleteColumn(id);
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
      await columnApi.batchDeleteColumn(
        this.mainTableSelectArray.map((e) => e.columnId)
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
        await columnApi.exportAll(params);
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
        await columnApi.batchExport(this.mainTableSelectArray.map((e) => e.columnId));
      } catch (e) {
        console.log(e);
      } finally {
        this.batchExportBtnLoading = false;
      }
    },
    /*-------------------------导入导出 end------------------------- */

    /*-------------------------添加，修改 表单 begin------------------------- */
    //显示添加表单
    showAddColumnForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditColumnForm(updateObject) {
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
