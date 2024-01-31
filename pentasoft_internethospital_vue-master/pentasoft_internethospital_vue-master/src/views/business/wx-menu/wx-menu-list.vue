<template>
  <div>
    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          v-if="showMenuAdd"
          @click="showAddWeixinmenuForm"
          class="marginLeft10 float-right"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'wx-menu-list-add'"
          >新建数据</Button
        >
        <Button
          :loading="synchronizeMenuLoading"
          @click="synchronizeMenu"
          class="marginLeft10 float-right"
          icon="ios-cloud-upload-outline"
          size="small"
          type="warning"
          v-privilege="'wx-menu-list-synchronize'"
          >同步微信</Button
        >

        <!-- <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'wx-account-list-batch-export'"
          >批量导出</Button
        > -->
      </Row>
      <!-------操作按钮行 end------->

      <!-------表格列表 begin------->
      <Table
        :columns="mainTable.columnArray"
        :data="mainTable.data"
        :loading="mainTable.loading"
        row-key="weiXinMenuId"
        border="border"
        highlight-row="highlight-row"
        ref="mainTable"
        stripe
      ></Table>
    </Card>
    <!-------表格列表 end------->

    <!-------添加、更新 Form表单 begin------->
    <Modal
      :footer-hide="true"
      :title="saveModal.isUpdate ? '更新' : '新建'"
      v-model="saveModal.show"
      @on-cancel="saveFormClose"
      width="60%"
    >
      <WxMenuListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
        :wx-account-id="wxAccountId"
        :parent-id="saveModal.parentId"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert, getStepNodeName } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { wxMenuApi } from "@/api/weixin/wx-menu";
import { WX_MENU_EVENT_TYPES } from "@/constants/enum-wx";
import WxMenuListForm from "./components/wx-menu-list-form";
const PAGE_SIZE_INIT = 20;
export default {
  name: "WxMenuList",
  components: {
    WxMenuListForm,
  },
  props: {
    wxAccountId: null,
  },
  data() {
    return {
      originalData: [],
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null,
        parentId: null,
      },
      /* -------------------------批量操作------------------------- */
      //批量刪除彈出框
      batchDeleteModal: {
        show: false,
      },
      //表格多选选中的元素数组
      mainTableSelectArray: [],
      showMenuAdd: false,
      //同步微信菜单loading按钮
      synchronizeMenuLoading: false,
      isShowdeleteLoading: false,
      //系欸但移动loading按钮
      isShowMoveLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      //搜索表单
      queryForm: {
        weiXinAccountId: this.wxAccountId,
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
        orders: [],
      },
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
            title: "菜单名称",
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
            title: "菜单Key",
            key: "menuKey",
          },
          {
            title: "菜单类型",
            key: "menuType",
            width: 150,
          },
          {
            title: "菜单处理事件类型",
            key: "menuEventTypeId",
            width: 150,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "WX_MENU_EVENT_TYPES",
                  params.row.menuEventTypeId
                )
              );
            },
          },
          {
            title: "是否删除",
            key: "isDelete",
            width: 100,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isDelete)
              );
            },
          },
          {
            title: "操作",
            key: "action",
            align: "right",
            width: 200,
            className: "action-hide",
            render: (h, params) => {
              let actions = [
                {
                  title: "上移",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-menu-list-move",
                    },
                  ],
                  action: () => {
                    this.moveWeixinmenu(params.row.weiXinMenuId, "up");
                  },
                },
                {
                  title: "下移",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-menu-list-move",
                    },
                  ],
                  action: () => {
                    this.moveWeixinmenu(params.row.weiXinMenuId, "down");
                  },
                },
                {
                  title: "编辑",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-menu-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditWeixinmenuForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-menu-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteWeixinmenu(params.row.weiXinMenuId);
                      },
                    });
                  },
                },
              ];
              if (
                params.row.depth < 1 &&
                params.row.children != null &&
                params.row.children.length < 5
              ) {
                actions.push({
                  title: "添加子节点",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-menu-list-add",
                    },
                  ],
                  action: () => {
                    this.showAddWeixinmenuForm(null, params.row.weiXinMenuId);
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
        let result = await wxMenuApi.queryWeixinmenu(params);
        this.originalData = result.data;
        this.getTreeRootData();
      } finally {
        this.mainTable.loading = false;
      }
    },
    /*-------------------------查询相关 end------------------------- */

    /*-------------------------删除 begin------------------------- */
    // 根据ID删除
    async deleteWeixinmenu(weiXinMenuId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await wxMenuApi.deleteWeixinmenu(weiXinMenuId);
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
    /*-------------------------节点移动 begin------------------------- */
    async moveWeixinmenu(weiXinMenuId, direction) {
      try {
        this.isShowMoveLoading = true;
        let result = await wxMenuApi.moveWeixinmenu(weiXinMenuId, direction);
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

    /*-------------------------批量操作 begin------------------------- */
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

    /*-------------------------添加，修改 表单 begin------------------------- */
    //显示添加表单
    showAddWeixinmenuForm(e, parentId) {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
      this.saveModal.parentId = parentId || null;
    },
    showEditWeixinmenuForm(updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose() {
      this.saveModal.show = false;
      this.queryList();
    },
    /*-------------------------添加，修改 表单 end------------------------- */

    //********Tree数据 begin********/
    // 生成树形图数据
    // 这里处理没有children结构的数据
    getTreeRootData() {
      // 取父节点
      let parentArr = this.originalData.list.filter((l) => l.parentId == null);
      let treeRoot = this.getTreeData(this.originalData.list, parentArr);
      if (treeRoot != null && treeRoot.length < 3) {
        this.showMenuAdd = true;
      }
      this.mainTable.data = treeRoot;

      this.mainTablePage.total = this.originalData.total;
    },
    getTreeData(list, dataArr) {
      dataArr.map((pNode, i) => {
        let childObj = [];
        list.map((cNode, j) => {
          if (pNode.weiXinMenuId === cNode.parentId) {
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

    //同步
    async synchronizeMenu() {
      try {
        this.synchronizeMenuLoading = true;
        let result = await wxMenuApi.synchronizeMenu(this.wxAccountId);
        this.synchronizeMenuLoading = false;
        if (result) {
          this.$Message.success("同步成功");
        } else {
          this.$Message.error(result.msg);
        }
      } catch (e) {
        //TODO zhuoda sentry
        console.error(e);
        this.synchronizeMenuLoading = false;
      }
    },
  },
};
</script>
