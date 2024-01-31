<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row class="smart-query-form-row">
        <span>
          账号 :
          <Select
            placeholder="请选择"
            style="width: 180px"
            v-model="queryForm.weiXinAccountId"
          >
            <Option
              :value="item.value"
              v-for="item in wxAccountList"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </span>
        <span>
          是否自动回复 :
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.isAutoReply"
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
        <span>
          是否人工回复 :
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.isArtificialReply"
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
            v-privilege="'wx-input-content-list-query'"
            >查询</Button
          >
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'wx-input-content-list-query'"
            >重置</Button
          >
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'wx-input-content-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}</Button
        >
      </Row>
      <!------ 查询条件第一行 begin------->

      <!------ 查询条件第二行 begin------->
      <Row class="smart-query-form-row" v-show="showMoreQueryConditionFlag">
        <span>
          创建时间:
          <DatePicker
            placeholder="选择创建日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.createTimeRange"
          ></DatePicker>
        </span>
      </Row>
      <!------ 查询条件第二行 end------->
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <!-- <Button
          @click="showAddWeixininputcontentForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'wx-input-content-list-add'"
          >新建数据</Button
        >
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'wx-input-content-list-batch-delete'"
          >批量删除</Button
        >

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'wx-input-content-list-export-all'"
          >导出全部</Button
        >

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'wx-input-content-list-batch-export'"
          >批量导出</Button
        > -->
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
              <li v-for="item in mainTableSelectArray" :key="item.weiXinInputContentId">
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
      width="500"
    >
      <WxInputContentListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { wxInputContentApi } from "@/api/weixin/wx-input-content";
import { wxAccountApi } from "@/api/weixin/wx-account";
import WxInputContentListForm from "./components/wx-input-content-list-form";
import { WX_ACCOUNT_TYPES, WX_USER_INPUT_TYPES } from "@/constants/enum-wx";
import { YES_OR_NO } from "@/constants/common";
const PAGE_SIZE_INIT = 20;
export default {
  name: "WxInputContentList",
  components: {
    WxInputContentListForm,
  },
  props: {},
  data() {
    return {
      wxAccountList: [],
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
        //微信用户ID
        weiXinUserId: null,
        //用户输入内容
        content: null,
        //是否自动回复
        isAutoReply: null,
        //是否人工回复
        isArtificialReply: null,
        //微信账号主键
        weiXinAccountId: null,
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
            title: "微信用户",
            key: "weiXinUserName",
            render: (h, params) => {
              return h(
                "span",
                params.row.weiXinUser == null ? "" : params.row.weiXinUser.nickName
              );
            },
          },
          {
            title: "账号名称",
            render: (h, params) => {
              return h("span", params.row.weiXinAccount.name);
            },
          },
          {
            title: "账号类型",
            key: "weiXinAccount.weiXinAccountTypeId",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "WX_ACCOUNT_TYPES",
                  params.row.weiXinAccount.weiXinAccountTypeId
                )
              );
            },
          },
          {
            title: "消息类型",
            key: "weiXinInputContentTypeId",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "WX_USER_INPUT_TYPES",
                  params.row.weiXinInputContentTypeId
                )
              );
            },
          },
          {
            title: "消息内容",
            key: "content",
          },
          {
            title: "点击的菜单",
            key: "weiXinMenuName",
          },
          {
            title: "发送时间",
            key: "createTime",
            width: 120,
            tableColumn: "ybj_weixininputcontents.createTime",
            sortable: "custom",
          },
          {
            title: "是否自动回复",
            key: "isAutoReply",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isAutoReply)
              );
            },
          },
          {
            title: "是否人工回复",
            key: "isArtificialReply",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "YES_OR_NO",
                  params.row.isArtificialReply
                )
              );
            },
          },
          {
            title: "是否删除",
            key: "isDelete",
            width: 80,
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
            width: 130,
            className: "action-hide",
            render: (h, params) => {
              let actions = [
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-input-content-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteWeixininputcontent(params.row.weiXinInputContentId);
                      },
                    });
                  },
                },
              ];
              if (params.row.weiXinUser) {
                actions.push({
                  title: "快速回复",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-input-content-list-reply",
                    },
                  ],
                  action: () => {
                    this.showEditWeixininputcontentForm(params.row);
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
  created() {},
  mounted() {
    this.initWxAccount();
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
    /* -------------------------页面数据初始化 begin-------------------*/
    async initWxAccount() {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 100,
        };
        let result = await wxAccountApi.queryWeixinaccount(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.weiXinAccountId,
            label: item.name,
          });
        });
        this.wxAccountList = list;
      } finally {
        this.$Spin.hide();
      }
    },
    /* -------------------------页面数据初始化 end-------------------*/
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
        let result = await wxInputContentApi.queryWeixininputcontent(params);
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
        //微信用户ID
        weiXinUserId: null,
        //用户输入内容
        content: null,
        //是否自动回复
        isAutoReply: null,
        //是否人工回复
        isArtificialReply: null,
        //微信账号主键
        weiXinAccountId: null,
        createTimeRange: ["", ""],
        updateTimeRange: ["", ""],
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
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
    async deleteWeixininputcontent(weiXinInputContentId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await wxInputContentApi.deleteWeixininputcontent(weiXinInputContentId);
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
      await wxInputContentApi.batchDeleteWeixininputcontent(
        this.mainTableSelectArray.map((e) => e.weiXinInputContentId)
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
        await wxInputContentApi.exportAll(params);
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
        await wxInputContentApi.batchExport(
          this.mainTableSelectArray.map((e) => e.weiXinInputContentId)
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
    showAddWeixininputcontentForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditWeixininputcontentForm(updateObject) {
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
