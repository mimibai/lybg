<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="start" class="search-row">
        <Col span="8">
          <span class="title">姓名 :</span>
          <Input
            placeholder="请输入姓名"
            style="width: 180px"
            v-model="queryForm.name"
          />
        </Col>
        <Col span="8">
          <span class="title">是否开通问答 :</span>
          <Input
            placeholder="请输入是否开通问答"
            style="width: 180px"
            v-model="queryForm.isOpenQuiz"
          />
        </Col>
        <Col span="8">
          <span class="title">是否开启预约 :</span>
          <Input
            placeholder="请输入是否开启预约"
            style="width: 180px"
            v-model="queryForm.isOpenAppoint"
          />
        </Col>
        <Col span="8">
          <span class="title">是否开启绿色通道 :</span>
          <Input
            placeholder="请输入是否开启绿色通道"
            style="width: 180px"
            v-model="queryForm.isOpenGreenChannel"
          />
        </Col>
        <Col span="8">
          <span class="title">是否公开 :</span>
          <Input
            placeholder="请输入是否公开"
            style="width: 180px"
            v-model="queryForm.isOpen"
          />
        </Col>
        <Col span="8">
          <span class="title">是否审核 :</span>
          <Input
            placeholder="请输入是否审核"
            style="width: 180px"
            v-model="queryForm.isApprove"
          />
        </Col>
      </Row>

      <!------ 查询条件第一行 begin------->

      <!------ 查询条件第二行 begin------->
      <Row type="flex"  justify="start" class="search-row" v-show="showMoreQueryConditionFlag">
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
            v-privilege="'doctor-list-query'"
            >查询</Button
          >
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'doctor-list-query'"
            >重置</Button
          >
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'doctor-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}</Button
        >
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddDoctorForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'doctor-list-add'"
          >新建数据</Button
        >
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'doctor-list-batch-delete'"
          >批量删除</Button
        >

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'doctor-list-export-all'"
          >导出全部</Button
        >

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'doctor-list-batch-export'"
          >批量导出</Button
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
              <li v-for="item in mainTableSelectArray" :key="item.doctorId">
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
      <DoctorListForm
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
import { doctorApi } from "@/api/organizations/doctor";
import DoctorListForm from "./components/doctor-list-form";
const PAGE_SIZE_INIT = 20;
export default {
  name: "DoctorList",
  components: {
    DoctorListForm,
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
        //主键Id
        doctorId: null,
        //姓名
        name: null,
        //关联UserId
        userId: null,
        //是否有效
        isEnable: null,
        //是否开通问答
        isOpenQuiz: null,
        //所在医院
        hospitalId: null,
        //所在站点
        siteId: null,
        //Haodf的医生Id
        doctorInfoId: null,
        //员工编号
        staffNumber: null,
        //手机号码
        mobileNumber: null,
        //是否开通微博
        isOpenMicroblog: null,
        //是否开启预约
        isOpenAppoint: null,
        //是否开启绿色通道
        isOpenGreenChannel: null,
        //是否公开
        isOpen: null,
        //默认门诊级别
        defaultSchedulingLevelId: null,
        //默认挂号价格
        defaultPrice: null,
        //是否显示在手机端
        isShowInMobile: null,
        //是否有出诊
        isHaveScheduling: null,
        //是否有预约
        isHaveAppoint: null,
        //是否允许手机登录
        isOpenMobileLogin: null,
        //默认诊室集合
        defaultClinicIds: null,
        //执业证书号
        practisingCertificateNo: null,
        //本人是否可修改个人详细信息
        isCanUpdateDetails: null,
        //是否停诊
        isStopClinic: null,
        //停诊类型
        clinicTypeId: null,
        //是否允许患者建立对话
        isOpenPatientCreateDialog: null,
        //特殊分组
        doctorSpecialGroupId: null,
        //关联其他出诊医生集合
        schedulingDoctorIds: null,
        //是否审核
        isApprove: null,
        //拼音首字母
        firstLetter: null,
        //是否删除
        isDelete: null,
        //是否开启在线问诊
        isOpenClinic: null,
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
            title: "医生姓名",
            key: "name",
          },
          {
            title: "是否为专家",
            key: "isExpert",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue("YES_OR_NO", params.row.isExpert)
              );
            },
          },
          {
            title: "医疗职称",
            key: "professionalTitle",
          },
          {
            title: "所属科室",
            key: "teachingTitleId",
            tableColumn: "dfyy_Doctors.TeachingTitleId",
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
                      value: "doctor-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditDoctorForm(params.row);
                  },
                },
                {
                  title: "删除",
                  directives: [
                    {
                      name: "privilege",
                      value: "doctor-list-delete",
                    },
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: "友情提醒",
                      content: "确定要删除吗？",
                      onOk: () => {
                        this.deleteDoctor(params.row.doctorId);
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
        let result = await doctorApi.queryDoctor(params);
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
        doctorId: null,
        name: null,
        userId: null,
        isEnable: null,
        isOpenQuiz: null,
        hospitalId: null,
        siteId: null,
        doctorInfoId: null,
        staffNumber: null,
        mobileNumber: null,
        isOpenMicroblog: null,
        isOpenAppoint: null,
        isOpenGreenChannel: null,
        isOpen: null,
        defaultSchedulingLevelId: null,
        defaultPrice: null,
        isShowInMobile: null,
        isHaveScheduling: null,
        isHaveAppoint: null,
        isOpenMobileLogin: null,
        defaultClinicIds: null,
        practisingCertificateNo: null,
        isCanUpdateDetails: null,
        isStopClinic: null,
        clinicTypeId: null,
        isOpenPatientCreateDialog: null,
        doctorSpecialGroupId: null,
        schedulingDoctorIds: null,
        isApprove: null,
        firstLetter: null,
        isDelete: null,
        isOpenClinic: null,
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
    async deleteDoctor(doctorId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await doctorApi.deleteDoctor(doctorId);
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
      await doctorApi.batchDeleteDoctor(
        this.mainTableSelectArray.map((e) => e.doctorId)
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
        await doctorApi.exportAll(params);
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
        await doctorApi.batchExport(
          this.mainTableSelectArray.map((e) => e.doctorId)
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
    showAddDoctorForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditDoctorForm(updateObject) {
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
