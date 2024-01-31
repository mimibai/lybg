<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span class="title">院区Id :</span>
          <Input
            placeholder="请输入院区Id"
            style="width: 180px"
            v-model="queryForm.locationBranchId"
          />
        </Col>
        <Col span="8">
          <span class="title">建筑名称 :</span>
          <Input
            placeholder="请输入建筑名称"
            style="width: 180px"
            v-model="queryForm.locationBuildingName"
          />
        </Col>
        <Col span="8">
          <span class="title">拼音 :</span>
          <Input
            placeholder="请输入拼音"
            style="width: 180px"
            v-model="queryForm.pinYin"
          />
        </Col>
        <Col span="8">
          <span class="title">拼音首字母 :</span>
          <Input
            placeholder="请输入拼音首字母"
            style="width: 180px"
            v-model="queryForm.pinyinInitials"
          />
        </Col>
        <Col span="8">
          <span class="title">首字母 :</span>
          <Input
            placeholder="请输入首字母"
            style="width: 180px"
            v-model="queryForm.firstLetter"
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
        <Col span="8">
          <span class="title">是否删除 :</span>
          <Input
            placeholder="请输入是否删除"
            style="width: 180px"
            v-model="queryForm.isDelete"
          />
        </Col>
        <Col span="8">
          <span class="title">排序 :</span>
          <Input
            placeholder="请输入排序"
            style="width: 180px"
            v-model="queryForm.sorting"
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
            v-privilege="'location-building-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'location-building-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'location-building-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddLocationBuildingForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'location-building-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'location-building-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'location-building-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'location-building-list-batch-export'"
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
                :key="item.locationBuildingId"
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
      <LocationBuildingListForm
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
import { locationBuildingApi } from "@/api/navigation/location-building";
import LocationBuildingListForm from "./components/location-building-list-form";

const PAGE_SIZE_INIT = 20;
export default {
  name: "LocationBuildingList",
  components: {
    LocationBuildingListForm,
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
        //院区Id
        locationBranchId: null,
        //建筑名称
        locationBuildingName: null,
        //拼音
        pinYin: null,
        //拼音首字母
        pinyinInitials: null,
        //首字母
        firstLetter: null,
        //坐标的X轴
        locationX: null,
        //坐标的Y轴
        locationY: null,
        //是否删除
        isDelete: null,
        //排序
        sorting: null,
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
            key: "locationBuildingId",
            tableColumn: "smart_LocationBuildings.LocationBuildingId",
            sortable: "custom",
          },
          {
            title: "院区Id",
            key: "locationBranchId",
            tableColumn: "smart_LocationBuildings.LocationBranchId",
            sortable: "custom",
          },
          {
            title: "建筑名称",
            key: "locationBuildingName",
            tableColumn: "smart_LocationBuildings.LocationBuildingName",
            sortable: "custom",
          },
          {
            title: "简称",
            key: "shortName",
            tableColumn: "smart_LocationBuildings.ShortName",
            sortable: "custom",
          },
          {
            title: "拼音",
            key: "pinYin",
            tableColumn: "smart_LocationBuildings.PinYin",
            sortable: "custom",
          },
          {
            title: "拼音首字母",
            key: "pinyinInitials",
            tableColumn: "smart_LocationBuildings.PinyinInitials",
            sortable: "custom",
          },
          {
            title: "首字母",
            key: "firstLetter",
            tableColumn: "smart_LocationBuildings.FirstLetter",
            sortable: "custom",
          },
          {
            title: "介绍",
            key: "introduce",
            tableColumn: "smart_LocationBuildings.Introduce",
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
            title: "排序",
            key: "sorting",
            tableColumn: "smart_LocationBuildings.Sorting",
            sortable: "custom",
          },
          {
            title: "创建日期",
            key: "dateCreated",
            tableColumn: "smart_LocationBuildings.DateCreated",
            sortable: "custom",
          },
          {
            title: "更新日期",
            key: "dateModified",
            tableColumn: "smart_LocationBuildings.DateModified",
            sortable: "custom",
          },
          {
            title: "平面图",
            key: "baseMapPath",
            tableColumn: "smart_LocationBuildings.BaseMapPath",
            sortable: "custom",
          },
          {
            title: "平面图",
            key: "baseMapPathForAdd",
            tableColumn: "smart_LocationBuildings.BaseMapPathForAdd",
            sortable: "custom",
          },
          {
            title: "坐标的X轴",
            key: "locationX",
            tableColumn: "smart_LocationBuildings.LocationX",
            sortable: "custom",
          },
          {
            title: "坐标的Y轴",
            key: "locationY",
            tableColumn: "smart_LocationBuildings.LocationY",
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
                      value: "location-building-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditLocationBuildingForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "location-building-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteLocationBuilding(
                          params.row.locationBuildingId
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
        let result = await locationBuildingApi.queryLocationBuilding(params);
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
        locationBuildingName: null,
        pinYin: null,
        pinyinInitials: null,
        firstLetter: null,
        locationX: null,
        locationY: null,
        isDelete: null,
        sorting: null,
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
    async deleteLocationBuilding(locationBuildingId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await locationBuildingApi.deleteLocationBuilding(
          locationBuildingId
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
      await locationBuildingApi.batchDeleteLocationBuilding(
        this.mainTableSelectArray.map((e) => e.locationBuildingId)
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
        await locationBuildingApi.exportAll(params);
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
        await locationBuildingApi.batchExport(
          this.mainTableSelectArray.map((e) => e.locationBuildingId)
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
    showAddLocationBuildingForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditLocationBuildingForm(updateObject) {
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
