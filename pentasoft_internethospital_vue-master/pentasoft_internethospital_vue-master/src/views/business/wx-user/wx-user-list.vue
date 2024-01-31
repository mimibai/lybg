<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row class="smart-query-form-row">
        <span>
          是否订阅账号 :
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.isSubscribe"
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
          用户昵称 :
          <Input
            placeholder="请输入用户昵称"
            style="width: 180px"
            v-model="queryForm.nickName"
          />
        </span>
        <span>
          性别 :
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.genderId"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value ? 1 : 0"
              v-for="item in genderList"
              >{{ item.desc }}</Option
            >
          </Select>
        </span>
        <ButtonGroup>
          <Button
            @click="queryList"
            icon="ios-search"
            type="primary"
            v-privilege="'wx-user-list-query'"
            >查询</Button
          >
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'wx-user-list-query'"
            >重置</Button
          >
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'wx-user-list-query'"
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
          @click="showAddWeixinuserForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'wx-user-list-add'"
          >新建数据</Button
        > -->
        <!-- <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'wx-user-list-batch-delete'"
          >批量删除</Button
        > -->

        <Button
          :loading="synchronizeUserLoading"
          @click="synchronizeUser"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'wx-user-list-synchronize'"
          >同步</Button
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
              <li v-for="item in mainTableSelectArray" :key="item.weiXinUserId">
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
      <WeixinuserListForm
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
import { wxUserApi } from "@/api/weixin/wx-user";
import WeixinuserListForm from "./components/wx-user-list-form";
import { YES_OR_NO } from "@/constants/common";
import { SEX } from "@/constants/enum-wx";
const PAGE_SIZE_INIT = 20;
export default {
  name: "wxUserList",
  components: {
    WeixinuserListForm,
  },
  props: {},
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
      synchronizeUserLoading: false,
      isShowdeleteLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      //搜索表单
      queryForm: {
        //是否订阅账号
        isSubscribe: null,
        //用户昵称
        nickName: null,
        //性别
        genderId: null,
        //所在组
        weiXinGroupId: null,
        createTimeRange: ["", ""],
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
            title: "是否订阅账号",
            key: "isSubscribe",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isSubscribe)
              );
            },
          },
          {
            title: "用户昵称",
            key: "nickName",
            tableColumn: "ybj_weixinusers.NickName",
            sortable: "custom",
          },
          {
            title: "所在组",
            key: "weiXinGroupId",
            tableColumn: "ybj_weixinusers.WeiXinGroupId",
            sortable: "custom",
          },
          {
            title: "账号名称",
            key: "wxAccountName",
          },

          {
            title: "性别",
            key: "genderId",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("SEX", params.row.genderId)
              );
            },
          },
          {
            title: "语言",
            key: "language",
          },
          {
            title: "城市",
            key: "city",
            tableColumn: "ybj_weixinusers.City",
            sortable: "custom",
          },
          {
            title: "省份",
            key: "province",
            tableColumn: "ybj_weixinusers.Province",
            sortable: "custom",
          },
          {
            title: "国家",
            key: "country",
            tableColumn: "ybj_weixinusers.Country",
            sortable: "custom",
          },
          {
            title: "关注时间",
            key: "subscribeTime",
          },
          {
            title: "对应网站用户",
            key: "userId",
            tableColumn: "ybj_weixinusers.UserId",
            sortable: "custom",
          },
          {
            title: "是否删除",
            key: "isDelete",
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
                  title: "编辑",
                  directives: [
                    {
                      name: "privilege",
                      value: "wx-user-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditWeixinuserForm(params.row);
                  },
                },
                // {
                //   title: "删除",
                //   directives: [
                //     {
                //       name: "privilege",
                //       value: "wx-user-list-delete",
                //     },
                //   ],
                //   action: () => {
                //     this.$Modal.confirm({
                //       title: "友情提醒",
                //       content: "确定要删除吗？",
                //       onOk: () => {
                //         this.deleteWeixinuser(params.row.weiXinUserId);
                //       },
                //     });
                //   },
                // },
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
    genderList: () => {
      let array = [];
      for (let item in SEX) {
        let obj = {};
        obj.desc = SEX[item].desc;
        obj.value = SEX[item].value;
        array.push(obj);
      }
      return array;
    },
  },
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
      return {
        ...this.queryForm,
        dateCreatedBegin: createTimeArray[0],
        dateCreatedEnd: createTimeArray[1],
      };
    },
    //查询
    async queryList() {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await wxUserApi.queryWeixinuser(params);
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
        //是否订阅账号
        isSubscribe: null,
        //用户昵称
        nickName: null,
        //性别
        genderId: null,
        //所在组
        weiXinGroupId: null,
        createTimeRange: ["", ""],
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
    async deleteWeixinuser(weiXinUserId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await wxUserApi.deleteWeixinuser(weiXinUserId);
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
      await wxUserApi.batchDeleteWeixinuser(
        this.mainTableSelectArray.map((e) => e.weiXinUserId)
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

    /*-------------------------同步 begin------------------------- */
    //导出全部
    async synchronizeUser() {
      try {
        this.synchronizeUserLoading = true;

        await wxUserApi.synchronizeUser();
      } catch (e) {
        console.log(e);
      } finally {
        this.synchronizeUserLoading = false;
        this.queryList();
      }
    },
    /*-------------------------同步 end------------------------- */

    /*-------------------------添加，修改 表单 begin------------------------- */
    //显示添加表单
    showAddWeixinuserForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditWeixinuserForm(updateObject) {
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
