<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span class="title">所在院区 :</span>
          <Input
            placeholder="请输入所在院区"
            style="width: 180px"
            v-model="queryForm.locationBranchId"
          />
        </Col>
        <Col span="8">
          <span class="title">所在建筑 :</span>
          <Input
            placeholder="请输入所在建筑"
            style="width: 180px"
            v-model="queryForm.locationBuildingId"
          />
        </Col>
        <Col span="8">
          <span class="title">所在楼层 :</span>
          <Input
            placeholder="请输入所在楼层"
            style="width: 180px"
            v-model="queryForm.locationFloorId"
          />
        </Col>
        <Col span="8">
          <span class="title">房间类型 :</span>
          <Input
            placeholder="请输入房间类型"
            style="width: 180px"
            v-model="queryForm.locationRoomTypeId"
          />
        </Col>
        <Col span="8">
          <span class="title">房间名称 :</span>
          <Input
            placeholder="请输入房间名称"
            style="width: 180px"
            v-model="queryForm.locationRoomName"
          />
        </Col>
        <Col span="8">
          <span class="title">是否是诊室 :</span>
          <Input
            placeholder="请输入是否是诊室"
            style="width: 180px"
            v-model="queryForm.isClinic"
          />
        </Col>
        <Col span="8">
          <span class="title">父级Id :</span>
          <Input
            placeholder="请输入父级Id"
            style="width: 180px"
            v-model="queryForm.parentId"
          />
        </Col>
        <Col span="8">
          <span class="title">层级 :</span>
          <Input
            placeholder="请输入层级"
            style="width: 180px"
            v-model="queryForm.depth"
          />
        </Col>
        <Col span="8">
          <span class="title">排序 :</span>
          <Input
            placeholder="请输入排序"
            style="width: 180px"
            v-model="queryForm.sortIndex"
          />
        </Col>
        <Col span="8">
          <span class="title">父级Id集合 :</span>
          <Input
            placeholder="请输入父级Id集合"
            style="width: 180px"
            v-model="queryForm.parentIds"
          />
        </Col>
        <Col span="8">
          <span class="title">是否删除 :</span>
          <Input
            placeholder="请输入是否删除"
            style="width: 180px"
            v-model="queryForm.isDelete"
          />
        </Col>
        <Col span="8">
          <span class="title">父项名称集合 :</span>
          <Input
            placeholder="请输入父项名称集合"
            style="width: 180px"
            v-model="queryForm.parentNames"
          />
        </Col>
        <Col span="8">
          <span class="title">坐标的X轴 :</span>
          <Input
            placeholder="请输入坐标的X轴"
            style="width: 180px"
            v-model="queryForm.locationX"
          />
        </Col>
        <Col span="8">
          <span class="title">坐标的Y轴 :</span>
          <Input
            placeholder="请输入坐标的Y轴"
            style="width: 180px"
            v-model="queryForm.locationY"
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
          <span  class="title">创建时间：</span>
          <DatePicker
            placeholder="选择创建日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.createTimeRange"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span  class="title">更新时间：</span>
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
            v-privilege="'location-room-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'location-room-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'location-room-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddLocationRoomForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'location-room-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'location-room-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'location-room-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'location-room-list-batch-export'"
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
                :key="item.locationRoomId"
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
      width="500"
    >
      <LocationRoomListForm
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
import { locationRoomApi } from "@/api/navigation/location-room";
import LocationRoomListForm from "./components/location-room-list-form";

const PAGE_SIZE_INIT = 20;
export default {
  name: "LocationRoomList",
  components: {
    LocationRoomListForm,
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
      allExportBtnLoading: false,
      isShowdeleteLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      //搜索表单
      queryForm: {
        //所在院区
        locationBranchId: null,
        //所在建筑
        locationBuildingId: null,
        //所在楼层
        locationFloorId: null,
        //房间类型
        locationRoomTypeId: null,
        //房间名称
        locationRoomName: null,
        //是否是诊室
        isClinic: null,
        //父级Id
        parentId: null,
        //层级
        depth: null,
        //排序
        sortIndex: null,
        //父级Id集合
        parentIds: null,
        //是否删除
        isDelete: null,
        //父项名称集合
        parentNames: null,
        //坐标的X轴
        locationX: null,
        //坐标的Y轴
        locationY: null,
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
            title: "主键",
            key: "locationRoomId",
            tableColumn: "smart_LocationRooms.LocationRoomId",
            sortable: "custom",
          },
          {
            title: "所在院区",
            key: "locationBranchId",
            tableColumn: "smart_LocationRooms.LocationBranchId",
            sortable: "custom",
          },
          {
            title: "所在建筑",
            key: "locationBuildingId",
            tableColumn: "smart_LocationRooms.LocationBuildingId",
            sortable: "custom",
          },
          {
            title: "所在楼层",
            key: "locationFloorId",
            tableColumn: "smart_LocationRooms.LocationFloorId",
            sortable: "custom",
          },
          {
            title: "房间名称",
            key: "locationRoomName",
            tableColumn: "smart_LocationRooms.LocationRoomName",
            sortable: "custom",
          },
          {
            title: "简称",
            key: "shortName",
            tableColumn: "smart_LocationRooms.ShortName",
            sortable: "custom",
          },
          {
            title: "是否是诊室",
            key: "isClinic",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isClinic)
              );
            },
          },
          {
            title: "介绍",
            key: "introduce",
            tableColumn: "smart_LocationRooms.Introduce",
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
            title: "创建日期",
            key: "dateCreated",
            tableColumn: "smart_LocationRooms.DateCreated",
            sortable: "custom",
          },
          {
            title: "更新日期",
            key: "dateModified",
            tableColumn: "smart_LocationRooms.DateModified",
            sortable: "custom",
          },
          {
            title: "父级Id",
            key: "parentId",
            tableColumn: "smart_LocationRooms.ParentId",
            sortable: "custom",
          },
          {
            title: "父级Id集合",
            key: "parentIds",
            tableColumn: "smart_LocationRooms.ParentIds",
            sortable: "custom",
          },
          {
            title: "层级",
            key: "depth",
            tableColumn: "smart_LocationRooms.Depth",
            sortable: "custom",
          },
          {
            title: "层级排序",
            key: "branchIndex",
            tableColumn: "smart_LocationRooms.BranchIndex",
            sortable: "custom",
          },
          {
            title: "排序",
            key: "sortIndex",
            tableColumn: "smart_LocationRooms.SortIndex",
            sortable: "custom",
          },
          {
            title: "总排序",
            key: "totalRanking",
            tableColumn: "smart_LocationRooms.TotalRanking",
            sortable: "custom",
          },
          {
            title: "父项名称集合",
            key: "parentNames",
            tableColumn: "smart_LocationRooms.ParentNames",
            sortable: "custom",
          },
          {
            title: "父项短名称集合",
            key: "parentShortNames",
            tableColumn: "smart_LocationRooms.ParentShortNames",
            sortable: "custom",
          },
          {
            title: "房间类型",
            key: "locationRoomTypeId",
            tableColumn: "smart_LocationRooms.LocationRoomTypeId",
            sortable: "custom",
          },
          {
            title: "坐标的X轴",
            key: "locationX",
            tableColumn: "smart_LocationRooms.LocationX",
            sortable: "custom",
          },
          {
            title: "坐标的Y轴",
            key: "locationY",
            tableColumn: "smart_LocationRooms.LocationY",
            sortable: "custom",
          },
          {
            title: "搜索次数",
            key: "searchCount",
            tableColumn: "smart_LocationRooms.SearchCount",
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
                      value: "location-room-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditLocationRoomForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "location-room-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteLocationRoom(params.row.locationRoomId);
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
        let result = await locationRoomApi.queryLocationRoom(params);
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
        locationBranchId: null,
        locationBuildingId: null,
        locationFloorId: null,
        locationRoomTypeId: null,
        locationRoomName: null,
        isClinic: null,
        parentId: null,
        depth: null,
        sortIndex: null,
        parentIds: null,
        isDelete: null,
        parentNames: null,
        locationX: null,
        locationY: null,
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
    async deleteLocationRoom(locationRoomId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await locationRoomApi.deleteLocationRoom(locationRoomId);
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
      await locationRoomApi.batchDeleteLocationRoom(
        this.mainTableSelectArray.map((e) => e.locationRoomId)
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
        await locationRoomApi.exportAll(params);
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
        await locationRoomApi.batchExport(
          this.mainTableSelectArray.map((e) => e.locationRoomId)
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
    showAddLocationRoomForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditLocationRoomForm(updateObject) {
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
