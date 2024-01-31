<template>
  <Row :gutter="10">
    <!-- Col 左侧科室列表模块 start -->
    <Col :lg="5" :md="8">
      <DepartmentNodeTree
        :treeType="2"
        @handlerSelect="handlerSelect"
      ></DepartmentNodeTree>
    </Col>
    <!-- Col 左侧科室列表模块 end -->
    <!-- Col 右侧医生列表模块 begin -->
    <Col :lg="19" :md="16">
      <Card class="smart-query-Card">
        <!------ 查询条件第一行 begin------->
        <Row type="flex" justify="space-between" class="search-row">
          <Col span="12">
            <span class="title">名称 :</span>
            <Input
              placeholder="请输入名称"
              style="width: 180px"
              v-model="queryForm.name"
            />
          </Col>
          <Col span="12">
            <span class="title">编码 :</span>
            <Input
              placeholder="请输入编码"
              style="width: 180px"
              v-model="queryForm.code"
            />
          </Col>
          <Col span="12">
            <span class="title">职称 :</span>
            <Select
              placeholder="请选择职称"
              style="width: 180px"
              v-model="queryForm.professionalTitleId"
            >
              <Option
                :value="items.value"
                v-for="items in ProfessionalTitleListData"
                :key="items.value"
                >{{ items.label }}</Option
              >
            </Select>
          </Col>

          <Col span="12">
            <span class="title">是否有出诊 :</span>
            <!-- <Input
            placeholder="请输入是否有出诊"
            style="width: 180px"
            v-model="queryForm.isHaveScheduling"
          /> -->
            <Select
              placeholder="请选择"
              style="width: 200px"
              v-model="queryForm.isHaveScheduling"
            >
              <Option value>不限</Option>
              <Option
                :key="item.value"
                :value="item.value ? 1 : 0"
                v-for="item in enableList"
                >{{ item.desc }}</Option
              >
            </Select>
          </Col>
        </Row>

        <!------ 查询条件第一行 begin------->
        <Row
          type="flex"
          justify="space-between"
          class="search-row"
          v-show="showMoreQueryConditionFlag"
        >
          <Col span="24">
            <span class="title">是否有预约 :</span>
            <Select
              placeholder="请选择"
              style="width: 200px"
              v-model="queryForm.isHaveAppoint"
            >
              <Option value>不限</Option>
              <Option
                :key="item.value"
                :value="item.value ? 1 : 0"
                v-for="item in enableList"
                >{{ item.desc }}</Option
              >
            </Select>
          </Col>
          <Col span="24">
            <span class="title">是否开启预约 :</span>
            <Select
              placeholder="请选择"
              style="width: 200px"
              v-model="queryForm.isOpenAppoint"
            >
              <Option value>不限</Option>
              <Option
                :key="item.value"
                :value="item.value ? 1 : 0"
                v-for="item in enableList"
                >{{ item.desc }}</Option
              >
            </Select>
          </Col>
        </Row>

        <!------ 查询条件第二行 begin------->

        <!------ 查询条件第二行 end------->
        <Row type="flex" justify="center">
          <ButtonGroup>
            <Button
              @click="queryList"
              icon="ios-search"
              type="primary"
              v-privilege="'o-p-doctor-list-query'"
              >查询
            </Button>
            <Button
              @click="resetQueryList"
              icon="md-refresh"
              type="default"
              v-privilege="'o-p-doctor-list-query'"
              >重置
            </Button>
          </ButtonGroup>

          <Button
            @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
            icon="md-more"
            style="margin-left: 20px"
            type="primary"
            v-privilege="'o-p-doctor-list-query'"
            >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
          </Button>
        </Row>
      </Card>

      <Card class="warp-Card">
        <!-------操作按钮行 begin------->
        <Row class="marginBottom10">
          <Button
            @click="showAddOPDoctorForm"
            icon="md-add"
            size="small"
            type="primary"
            v-privilege="'o-p-doctor-list-add'"
            >新建数据
          </Button>
          <Button
            @click="showBatchDeleteModal"
            class="marginLeft10"
            icon="ios-trash-outline"
            size="small"
            type="error"
            v-privilege="'o-p-doctor-list-batch-delete'"
            >批量删除
          </Button>

          <Button
            :loading="allExportBtnLoading"
            @click="exportAll"
            class="marginLeft10 float-right"
            icon="ios-cloud-download-outline"
            size="small"
            type="warning"
            v-privilege="'o-p-doctor-list-export-all'"
            >导出全部
          </Button>

          <Button
            :loading="batchExportBtnLoading"
            @click="batchExport"
            class="marginLeft10 float-right"
            icon="ios-download-outline"
            size="small"
            type="warning"
            v-privilege="'o-p-doctor-list-batch-export'"
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
                <li v-for="item in mainTableSelectArray" :key="item.oPDoctorId">
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
        <OPDoctorListForm
          :isUpdate="saveModal.isUpdate"
          :updateData="saveModal.updateData"
          @on-form-close="saveFormClose"
        />
      </Modal>
      <!-------添加、更新 Form表单 end------->
    </Col>
    <!-- Col 右侧医生列表模块 end -->
  </Row>
</template>

<script>
import DepartmentNodeTree from "@/components/department-node-tree/department-node-tree";
import { dateTimeRangeConvert } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { OPDoctorApi } from "@/api/organizations/opdoctor";
import OPDoctorListForm from "./components/opdoctor-list-form";
import { enumItemApi } from "@/api/enum-item";
import { YES_OR_NO } from "@/constants/common";
const PAGE_SIZE_INIT = 20;
export default {
  name: "OPDoctorList",
  components: {
    DepartmentNodeTree,
    OPDoctorListForm,
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
      ProfessionalTitleListData: [],
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
        //别名
        nickName: null,
        //名称
        name: null,
        //简称
        shortName: null,
        //门诊科室
        opDepartmentId: this.$route.query.opDepartmentId || null,
        //编码
        code: null,
        //科室
        departmentId: null,
        //医生
        doctorId: null,
        //出诊级别
        schedulingLevelId: null,
        //职称
        professionalTitleId: null,
        //是否删除
        isDelete: null,
        //是否开启线上复诊
        isOpenClinicPrescript: null,
        //是否开启预约
        isOpenAppoint: null,
        //是否有出诊
        isHaveScheduling: null,
        //是否有预约
        isHaveAppoint: null,
        //排序
        sorting: null,
        //门诊医生类型   1、医生 2、会诊 3、团队
        oPDoctorTypeId: null,
        //关联医生Id集合
        doctorIds: null,
        //今日是否预约完毕
        isUsedUpForDay: null,
        //推荐医生集合
        recommendOPDoctorIds: null,
        //是否医生   当前台读取医生信息为门诊医生时是否显示
        isDoctor: null,
        //预约规则
        oPSchedulingRuleId: null,
        //出诊配置
        oPSchedulingSettingId: null,
        //复诊表单模板
        referralTemplate: null,
        //是否开启在线问诊
        isOpenClinic: null,
        //关联人员信息
        personId: null,
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
            title: "名称",
            key: "name",
            width:80
          },
          {
            title: "门诊科室",
            key: "opDdepartmentName",
          },
          {
            title: "出诊级别",
            key: "schedulingLevelId",
            width:90,
          },
          {
            title: "医生",
            key: "doctorName",
            width:80
          },
          {
            title: "职称",
            key: "professionalTitle",
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
                      value: "o-p-doctor-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditOPDoctorForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "o-p-doctor-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteOPDoctor(params.row.opdoctorId);
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
    this.initProfessionalTitleType();
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
    /*--------------初始化----------------*/
    async initProfessionalTitleType() {
      try {
        let params = {
          sqlQueryKeyword: "ProfessionalTitle",
        };
        let result = await enumItemApi.listEnumitem(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.keyId,
            label: item.name,
          });
        });
        this.ProfessionalTitleListData = list;
      } finally {
      }
    },
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
        let result = await OPDoctorApi.queryOPDoctor(params);
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
        nickName: null,
        name: null,
        shortName: null,
        opDepartmentId: null,
        code: null,
        departmentId: null,
        doctorId: null,
        schedulingLevelId: null,
        professionalTitleId: null,
        isDelete: null,
        isOpenClinicPrescript: null,
        isOpenAppoint: null,
        isHaveScheduling: null,
        isHaveAppoint: null,
        sorting: null,
        oPDoctorTypeId: null,
        doctorIds: null,
        isUsedUpForDay: null,
        recommendOPDoctorIds: null,
        isDoctor: null,
        oPSchedulingRuleId: null,
        oPSchedulingSettingId: null,
        referralTemplate: null,
        isOpenClinic: null,
        personId: null,
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
    async deleteOPDoctor(oPDoctorId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await OPDoctorApi.deleteOPDoctor(oPDoctorId);
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
      await OPDoctorApi.batchDeleteOPDoctor(
        this.mainTableSelectArray.map((e) => e.opdoctorId)
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
        await OPDoctorApi.exportAll(params);
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
        await OPDoctorApi.batchExport(
          this.mainTableSelectArray.map((e) => e.oPDoctorId)
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
    showAddOPDoctorForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditOPDoctorForm(updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose() {
      this.saveModal.show = false;
      this.queryList();
    },
    /*-------------------------添加，修改 表单 end------------------------- */

    handlerSelect(value) {
      this.queryForm.opDepartmentId = value;
      this.queryList();
    },
  },
};
</script>
