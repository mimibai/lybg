<template>
  <div>
    <Tabs type="card">
      <TabPane label="批量设置排班">
        <Card class="smart-query-Card">
          <Row>
            <Col span="24">
              <h3>
                当前排班医生：
                <a href="#" v-model="showModel.opDoctorName">{{
                  showModel.opDoctorName
                }}</a>
                <font color="red" style="font-size: 12px; margin-left: 30px"
                  >注：批量设置只能设置可预约时间之后</font
                >
              </h3>
            </Col>
          </Row>
          <Row type="flex" justify="space-between" class="search-row">
            <Col span="12">
              <span class="title">科室 :</span>
              <Select
                placeholder="请选择科室"
                style="width: 180px"
                v-model="queryForm.opDepartmentId"
                placement="bottom"
                transfer
                @on-change="opDepartmentChange"
              >
                <Option
                  :value="item.opDepartmentId"
                  v-for="item in opDepartmentDataList"
                  :key="item.opDepartmentId"
                  >{{ item.name }}</Option
                >
              </Select>
            </Col>
            <Col span="12">
              <span class="title">医生 :</span>
              <Select
                placeholder="请选择医生"
                style="width: 180px"
                v-model="queryForm.opDoctorId"
                placement="bottom"
                :label-in-value="true"
                transfer
                @on-change="opDoctorChange"
              >
                <Option
                  :value="item.opDoctorId"
                  v-for="item in opDoctorDataList"
                  :key="item.opDoctorId"
                  >{{ item.name }}</Option
                >
              </Select>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col span="24">
              <span class="title">时间范围 :</span>
              <DatePicker
                type="daterange"
                placeholder="请选择时间范围"
                v-model="queryForm.repeatDateArray"
                :options="optionDateLimit"
              ></DatePicker>
            </Col>
          </Row>

          <!-- <Row type="flex" justify="center" style="margin-top: 15px">
            <ButtonGroup>
              <Button
                @click="queryList"
                icon="ios-search"
                type="primary"
                v-privilege="'op-scheduling-plan-list-query'"
                >查询
              </Button>
              <Button
                @click="resetQueryList"
                icon="md-refresh"
                type="default"
                v-privilege="'op-scheduling-plan-list-query'"
                >重置
              </Button>
            </ButtonGroup>

            <Button
              @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
              icon="md-more"
              style="margin-left: 20px"
              type="primary"
              v-privilege="'op-scheduling-plan-list-query'"
              >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
            </Button>
          </Row> -->
        </Card>

        <Card class="warp-Card">
          <!-------表格列表 begin------->
          <Row class="title">
            <Col span="3"></Col>
            <Col span="3">星期一</Col>
            <Col span="3">星期二</Col>
            <Col span="3">星期三</Col>
            <Col span="3">星期四</Col>
            <Col span="3">星期五</Col>
            <Col span="3">星期六 </Col>
            <Col span="3">星期日</Col>
          </Row>
          <template v-for="item in timeOfDayArray">
            <Row class="row-data">
              <Col span="3"></Col>
              <Col span="3">
                <Row class="row-tr">
                  <Col span="11" class="row-item">是否启用：</Col>
                  <Col span="13">
                    <Checkbox />
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="11" class="row-item">出诊类型：</Col>
                  <Col span="13">
                    <Select
                      placeholder="请选择科室"
                      v-model="queryForm.opDepartmentId"
                      placement="bottom"
                      transfer
                      @on-change="opDepartmentChange"
                    >
                      <Option
                        :value="item.opDepartmentId"
                        v-for="item in opDepartmentDataList"
                        :key="item.opDepartmentId"
                        >{{ item.name }}</Option
                      >
                    </Select>
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="11" class="row-item">出诊级别：</Col>
                  <Col span="13">
                    <Select
                      placeholder="请选择科室"
                      v-model="queryForm.opDepartmentId"
                      placement="bottom"
                      transfer
                      @on-change="opDepartmentChange"
                    >
                      <Option
                        :value="item.opDepartmentId"
                        v-for="item in opDepartmentDataList"
                        :key="item.opDepartmentId"
                        >{{ item.name }}</Option
                      >
                    </Select>
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="11" class="row-item">费用：</Col>
                  <Col span="13">
                    <Select
                      placeholder="请选择科室"
                      v-model="queryForm.opDepartmentId"
                      placement="bottom"
                      transfer
                      @on-change="opDepartmentChange"
                    >
                      <Option
                        :value="item.opDepartmentId"
                        v-for="item in opDepartmentDataList"
                        :key="item.opDepartmentId"
                        >{{ item.name }}</Option
                      >
                    </Select>
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="11" class="row-item">是否预约：</Col>
                  <Col span="13">
                    <Checkbox />
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="11" class="row-item">号源规则：</Col>
                  <Col span="13">
                    <Select
                      placeholder="请选择科室"
                      v-model="queryForm.opDepartmentId"
                      placement="bottom"
                      transfer
                      @on-change="opDepartmentChange"
                    >
                      <Option
                        :value="item.opDepartmentId"
                        v-for="item in opDepartmentDataList"
                        :key="item.opDepartmentId"
                        >{{ item.name }}</Option
                      >
                    </Select>
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="11" class="row-item">是否周期：</Col>
                  <Col span="13">
                    <Select
                      placeholder="请选择科室"
                      v-model="queryForm.opDepartmentId"
                      placement="bottom"
                      transfer
                      @on-change="opDepartmentChange"
                    >
                      <Option
                        :value="item.opDepartmentId"
                        v-for="item in opDepartmentDataList"
                        :key="item.opDepartmentId"
                        >{{ item.name }}</Option
                      >
                    </Select>
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="11" class="row-item">周期间隔：</Col>
                  <Col span="13">
                    <Select
                      placeholder="请选择科室"
                      v-model="queryForm.opDepartmentId"
                      placement="bottom"
                      transfer
                      @on-change="opDepartmentChange"
                    >
                      <Option
                        :value="item.opDepartmentId"
                        v-for="item in opDepartmentDataList"
                        :key="item.opDepartmentId"
                        >{{ item.name }}</Option
                      >
                    </Select>
                  </Col>
                </Row>
                <Row class="row-tr">
                  <Col span="24" class="row-item">
                    例:1周即每周;2周即间隔1周
                  </Col>
                </Row>
              </Col>
              <Col span="3">星期二 </Col>
              <Col span="3">星期三 </Col>
              <Col span="3">星期四 </Col>
              <Col span="3">星期五 </Col>
              <Col span="3">星期六 </Col>
              <Col span="3">星期日 </Col>
            </Row>
          </template>
          <!-- <Table
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
                  <li
                    v-for="item in mainTableSelectArray"
                    :key="item.oPSchedulingPlanId"
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
          <OPSchedulingPlanListForm
            :isUpdate="saveModal.isUpdate"
            :updateData="saveModal.updateData"
            @on-form-close="saveFormClose"
          />
        </Modal>
        <!-------添加、更新 Form表单 end------->
      </TabPane>
      <TabPane label="日排班批量生成">日排班批量生成</TabPane>
      <TabPane label="停诊设置">停诊设置</TabPane>
      <TabPane label="排班计划导入">
        <Card class="warp-Card">
          <Row type="flex" align="middle" class="table-row">
            <Col span="6">
              <span>导入模板下载：</span>
            </Col>
            <Col span="18">
              <a href="#">导入模板.xls</a>
            </Col>
          </Row>
          <Row type="flex" align="middle" class="table-row">
            <Col span="6">
              <span>选择导入类型：</span>
            </Col>
            <Col span="18">
              <RadioGroup v-model="importModel.type">
                <Radio label="2">日排班导入</Radio>
                <Radio label="1">排班计划导入</Radio>
              </RadioGroup>
            </Col>
          </Row>
          <Row type="flex" align="middle" class="table-row">
            <Col span="6">
              <span>选择文件：</span>
            </Col>
            <Col span="18">
              <FileUploadPlus
                :moduleType="importModel.imageUrlModuleType"
                :formatArray="[
                  'doc',
                  'docx',
                  'xls',
                  'xlsx',
                  'pdf',
                  'wps',
                  'txt',
                  'ppt',
                  'pptx',
                  'csv',
                  'xml',
                ]"
                v-model="importModel.file"
              ></FileUploadPlus>
            </Col>
          </Row>
          <Row type="flex" align="middle" class="table-row">
            <Col span="6">
              <Button
                type="primary"
                :loading="importModel.loading"
                icon="ios-folder-open-outline"
                @click="importExcel"
              >
                <span v-if="!importModel.loading">确认导入</span>
                <span v-else>导入中...</span>
              </Button>
            </Col>
            <Col span="18">{{importModel.msg}} </Col>
          </Row>
        </Card>
      </TabPane>
      <TabPane label="更新出诊状态">更新出诊状态</TabPane>
    </Tabs>
  </div>
</template>

<script>
import { dateTimeRangeConvert } from "@/lib/util";
import { PAGE_SIZE_OPTIONS } from "@/constants/table-page";
import { oPSchedulingPlanApi } from "@/api/scheduling/op-scheduling-plan";
import { OPDepartmentApi } from "@/api/organizations/op-department";
import { OPDoctorApi } from "@/api/organizations/opdoctor";
import { enumApi } from "@/api/enum.js";
import OPSchedulingPlanListForm from "./components/op-scheduling-plan-list-form";
import FileUploadPlus from "@/components/file-upload-plus";
import { FILE_TYPE, SERVICE_TYPE } from "@/constants/file";

const PAGE_SIZE_INIT = 20;
export default {
  name: "OPSchedulingPlanList",
  components: {
    OPSchedulingPlanListForm,
    FileUploadPlus,
  },
  props: {},
  data() {
    return {
      timeOfDayEnum: {},
      dayOfWeekEnum: {},
      timeOfDayArray: [1, 2, 3, 4],
      dayOfWeekArray: [1, 2, 3, 4, 5, 6, 7, 8],
      opDepartmentDataList: [],
      opDoctorDataList: [],
      opDepartmentId: null,
      opDoctorId: null,
      optionDateLimit: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        },
      },
      showModel: {
        opDoctorName: "",
      },
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null,
      },
      importModel: {
        type: "2",
        loading: false,
        imageUrlModuleType: SERVICE_TYPE.SCHECULING_PLAN.value,
        file: null,
        msg:''
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
        //科室搜索条件
        opDepartmentId: null,

        //时间范围
        repeatDateArray: ["", ""],

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
        columnArray: [],
      },
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created() {},
  mounted() {
    this.initEnum();
    this.initOPDepartment();
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
      let repeatDateArray = dateTimeRangeConvert(
        this.queryForm.repeatDateArray
      );
      return {
        ...this.queryForm,
        dateCreatedBegin: repeatDateArray[0],
        dateCreatedEnd: repeatDateArray[1],
      };
    },
    async initEnum() {
      let params = "TimeOfDayEnum%2CDayOfWeekEnum";

      let result = await enumApi.getBatchEnumByCodes(params);
      console.log(result);
      this.timeOfDayEnum = result.data.TimeOfDayEnum;
      this.dayOfWeekEnum = result.data.DayOfWeekEnum;
    },
    async initOPSchedulingPlan() {
      let repeatDateArray = dateTimeRangeConvert(
        this.queryForm.repeatDateArray
      );
      let params = {
        opDepartmentId: this.opDepartmentId,
        opDoctorId: this.opDoctorId,
        repeatEndDateTime: repeatDateArray[1],
      };
      let result = await oPSchedulingPlanApi.queryOPSchedulingPlan(params);
    },
    //查询
    async initOPDepartment() {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        params.pageNum = 1;
        params.pageSize = 100;
        let result = await OPDepartmentApi.queryOPDepartment(params);
        this.opDepartmentDataList = result.data.list;
      } finally {
        this.mainTable.loading = false;
      }
    },
    opDepartmentChange(selectVal) {
      if (selectVal) {
        this.opDepartmentId = selectVal;
        this.initOPDoctor();
      }
    },
    //查询
    async initOPDoctor() {
      try {
        let params = {
          pageNum: 1,
          pageSize: 100,
          opDepartmentId: this.opDepartmentId,
        };
        let result = await OPDoctorApi.queryOPDoctor(params);
        this.opDoctorDataList = result.data.list;
      } finally {
        this.mainTable.loading = false;
      }
    },
    opDoctorChange(selectItem) {
      if (selectItem) {
        this.showModel.opDoctorName = selectItem.label;
      }
    },
    async initOPSchedulingPlan() {
      let repeatDateArray = dateTimeRangeConvert(
        this.queryForm.repeatDateArray
      );
      let params = {
        opDepartmentId: this.opDepartmentId,
        opDoctorId: this.opDoctorId,
        repeatEndDateTime: repeatDateArray[1],
      };
      let result = await oPSchedulingPlanApi.queryOPSchedulingPlan(params);
      this.opSchedulingPlanList = result.data.list;
    },
    //重置查询
    resetQueryList() {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
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
    async deleteOPSchedulingPlan(oPSchedulingPlanId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await oPSchedulingPlanApi.deleteOPSchedulingPlan(
          oPSchedulingPlanId
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
      await oPSchedulingPlanApi.batchDeleteOPSchedulingPlan(
        this.mainTableSelectArray.map((e) => e.oPSchedulingPlanId)
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
        await oPSchedulingPlanApi.exportAll(params);
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
        await oPSchedulingPlanApi.batchExport(
          this.mainTableSelectArray.map((e) => e.oPSchedulingPlanId)
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
    showAddOPSchedulingPlanForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditOPSchedulingPlanForm(updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose() {
      this.saveModal.show = false;
      this.queryList();
    },
    /*-------------------------添加，修改 表单 end------------------------- */
    /*-------------------------导入 begin ---------------------------------*/
     async importExcel() {
      try {
        let result = await oPSchedulingPlanApi.importExcel({
          filePath:this.importModel.file,
          typeId:this.importModel.type
        });
        this.importModel.loading = false;
        this.importModel.msg=result.data.msg;
        this.$Message.success("导入成功");
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        //TODO zhuoda sentry
        console.error(e);
        this.importModel.loading = false;
      }
    },
    /*-------------------------导入 end ----------------------------------- */
  },
};
</script>
<style scoped>
.title {
  border: 1px solid #e7e7e7;
  background: #f5f5f6;
  text-align: center;
  vertical-align: middle;
  line-height: 1.42857;
}
.title > div {
  height: 35px;
  padding: 8px;
  border-right: 1px solid #e7e7e7;
}

.row-data > div {
  padding: 8px;
  border: 1px solid #e7e7e7;
}
.row-tr {
  margin-top: 5px;
}
.row-data .row-item {
  font-size: 13px;
}
.table-row {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.table-row:first-child {
  border-top: 1px solid #ccc;
}
.table-row > div {
  height: 100%;
  border-right: 1px solid #ccc;
  padding: 10px;
}
</style>
