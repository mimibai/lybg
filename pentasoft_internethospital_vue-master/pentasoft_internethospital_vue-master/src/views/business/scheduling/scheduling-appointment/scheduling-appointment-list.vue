<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="24">
          <span class="title">预约日期 :</span>
          <DatePicker
            type="date"
            placeholder="请选择预约日期"
            v-model="queryForm.schedulingDate"
          />
        </Col>
        <Col span="12">
          <span class="title">来源 :</span>
          <RadioGroup
            v-model="queryForm.schedulingSourceId"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="0" style="font-size: 12px; padding: 0 8px"
              >不限</Radio
            >
            <Radio
              v-for="item in schedulingSourceDataList"
              :key="item.value"
              :label="item.value"
              style="font-size: 12px; padding: 0 8px"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
        </Col>
        <Col span="12">
          <span class="title">出诊级别 :</span>
          <RadioGroup
            v-model="queryForm.schedulingLevelId"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="0" style="font-size: 12px; padding: 0 6px"
              >不限</Radio
            >
            <Radio
              v-for="item in schedulingLevelDataList"
              :key="item.value"
              label="item.value"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
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
        <Col span="12">
          <span class="title">预约状态 :</span>
          <RadioGroup
            v-model="queryForm.appointStateId"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="0" style="font-size: 12px; padding: 0 6px"
              >不限</Radio
            >
            <Radio
              v-for="item in appointStateDataList"
              :key="item.value"
              :label="item.value"
              style="font-size: 12px; padding: 0 8px"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
        </Col>
        <Col span="12">
          <span class="title">预约途径 :</span>
          <RadioGroup
            v-model="queryForm.appointWayId"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="0" style="font-size: 12px; padding: 0 6px"
              >不限</Radio
            >
            <Radio
              v-for="item in appointWayDataList"
              :key="item.value"
              :label="item.value"
              style="font-size: 12px; padding: 0 6px"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
        </Col>
        <Col span="12">
          <span class="title">星期 :</span>
          <RadioGroup
            v-model="queryForm.dayOfWeekId"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="0" style="font-size: 12px; padding: 0 8px"
              >不限</Radio
            >
            <Radio
              v-for="item in dayOfWeekDataList"
              :key="item.value"
              :label="item.value"
              style="font-size: 12px; padding: 0 8px"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
        </Col>
        <Col span="12">
          <span class="title">时段 :</span>
          <RadioGroup
            v-model="queryForm.timeOfDayId"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="0" style="font-size: 12px; padding: 0 8px"
              >不限</Radio
            >
            <Radio
              v-for="item in timeOfDayDataList"
              :key="item.value"
              :label="item.value"
              style="font-size: 12px; padding: 0 8px"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
        </Col>
        <Col span="12">
          <span class="title">是否作废 :</span>
          <RadioGroup
            v-model="queryForm.isInvalid"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="-1" style="font-size: 12px; padding: 0 8px"
              >不限</Radio
            >
            <Radio
              v-for="item in YesOrNoDataList"
              :key="item.value"
              :label="item.value ? 1 : 0"
              true-value="1"
              false-value="0"
              style="font-size: 12px; padding: 0 8px"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
        </Col>
        <Col span="12">
          <span class="title">是否复诊 :</span>
          <RadioGroup
            v-model="queryForm.isReferral"
            type="button"
            button-style="solid"
            size="small"
          >
            <Radio :label="-1" style="font-size: 12px; padding: 0 8px"
              >不限</Radio
            >
            <Radio
              v-for="item in YesOrNoDataList"
              :key="item.value"
              :label="item.value ? 1 : 0"
              true-value="1"
              false-value="0"
              style="font-size: 12px; padding: 0 8px"
              >{{ item.desc }}</Radio
            >
          </RadioGroup>
        </Col>
        <Col span="12">
          <span class="title">预约姓名 :</span>
          <Input
            placeholder="请输入预约姓名"
            style="width: 180px"
            v-model="queryForm.realName"
          />
        </Col>
        <Col span="12">
          <span class="title">预约手机 :</span>
          <Input
            placeholder="请输入预约手机"
            style="width: 180px"
            v-model="queryForm.mobileNumber"
          />
        </Col>
        <Col span="12">
          <span class="title">身份证号 :</span>
          <Input
            placeholder="请输入身份证号"
            style="width: 180px"
            v-model="queryForm.idCardNo"
          />
        </Col>
        <Col span="12"> </Col>
        <Col span="12">
          <span class="title">创建时间：</span>
          <DatePicker
            placeholder="选择创建日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.createTimeRange"
          ></DatePicker>
        </Col>
        <Col span="12">
          <span class="title">更新时间：</span>
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
            v-privilege="'scheduling-appointment-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'scheduling-appointment-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'scheduling-appointment-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <!-- <Button
          @click="showAddSchedulingAppointmentForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'scheduling-appointment-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'scheduling-appointment-list-batch-delete'"
          >批量删除
        </Button> -->

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'scheduling-appointment-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'scheduling-appointment-list-batch-export'"
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
                :key="item.schedulingAppointmentId"
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

    <Modal title="删除确认" v-model="deleteModal.show" width="450">
      <Form :label-width="80">
        <FormItem>
          <h3 class="error-color">确定要删除该数据吗？</h3>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="deleteModal.show = false" size="small" type="default"
          >取消</Button
        >
        <Button
          @click="
            deleteSchedulingAppointment(deleteModal.row.schedulingAppointmentId)
          "
          size="small"
          type="primary"
          >确定删除</Button
        >
      </div>
    </Modal>

    <!-------添加、更新 Form表单 begin------->
    <Modal
      :footer-hide="true"
      :title="saveModal.isUpdate ? '更新' : '新建'"
      v-model="saveModal.show"
      @on-cancel="saveFormClose"
      width="60%"
    >
      <SchedulingAppointmentListForm
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
import { schedulingAppointmentApi } from "@/api/scheduling/scheduling-appointment";
import SchedulingAppointmentListForm from "./components/scheduling-appointment-list-form";
import { schedulingLevelApi } from "@/api/scheduling/scheduling-level";
import { YES_OR_NO } from "@/constants/common";
import {
  SCHEDULING_SOURCE,
  APPOINT_STATE,
  APPOINT_WAY,
  DAY_OF_WEEK,
  TIME_OF_DAY,
} from "@/constants/enum-scheduling";
import expandRow from "./components/table-expand.vue";

const PAGE_SIZE_INIT = 20;
export default {
  name: "SchedulingAppointmentList",
  components: {
    SchedulingAppointmentListForm,
    expandRow,
  },
  props: {},
  data() {
    return {
      schedulingLevelDataList: [],
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null,
      },
      deleteModal: {
        row: null,
        show: false,
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
        //手机号码
        mobileNumber: null,
        //身份证号码
        idCardNo: null,
        //真实姓名
        realName: null,
        //患者Id
        patientId: null,
        //星期
        dayOfWeekId: 0,
        //时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: 0,
        //门诊医生Id
        doctorId: null,
        //出诊类型
        schedulingTypeId: null,
        //门诊排班级别Id
        schedulingLevelId: 0,
        //门诊专业Id
        schedulingSpecialtyId: null,
        //门诊诊室Id
        schedulingClinicId: null,
        //排班计划Id
        schedulingPlanId: null,
        //挂号价目
        price: null,
        //预约状态  枚举 预约状态ID：1未就诊，2已就诊，3取消，4停诊，5违约
        appointStateId: 0,
        //预约途径  枚举 预约途径：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: 0,
        //预约号源  枚举 预约号源：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: 0,
        //是否作废
        isInvalid: -1,
        //相关疾病
        diseaseId: null,
        //是否为复诊病人的预约
        isReferral: -1,
        //科室Id
        departmentId: null,
        //门诊科室ID
        oPDepartmentId: null,
        //门诊医生ID
        oPDoctorId: null,
        //号源明细主键
        dailySchedulingNumberId: null,
        //取消原因    枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
        schedulingAppointmentCancelTypeId: null,
        //调用挂号接口次数
        registerCount_Interface: null,
        //门诊医生姓名
        doctorName: null,
        //科室
        departmentName: null,
        //门诊排班级别
        schedulingLevelName: null,
        //时段
        timeOfDayName: null,
        //第三方编码
        thirdPartyCode: null,
        //每日门诊排班Id
        oPDailySchedulingId: null,
        //取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消
        appointCancelTypeId: null,
        //门诊号源明细主键Id
        oPDailySchedulingNumberId: null,
        //提交人
        posterId: null,
        //参保卡类别
        appointInsuredCardTypeId: null,
        //支付方式
        paymentMethodTypeId: null,
        //第三方预约参数
        thirdPartyParameters: null,
        //第三方编码
        thirdPartyCode1: null,
        //微信支付订单号
        payOrderStreamNo_WeiXin: null,
        //微信支付链接
        payQRCodeUrl_WeiXin: null,
        //微信支付二维码
        payQRCodePath_WeiXin: null,
        //支付宝支付订单号
        payOrderStreamNo_Ali: null,
        //支付宝支付链接
        payQRCodeUrl_Ali: null,
        //支付宝支付二维码
        payQRCodePath_Ali: null,
        //支付状态
        paymentStateTypeId: null,
        //订单ID
        orderId: null,
        //是否必须支付
        isMustPayment: null,
        //是否开发票
        isHaveInvoice: null,
        //预约类型   枚举：1、普通预约  2、特殊预约
        schedulingAppointmentTypeId: null,
        //预约操作人
        appointmentPosterId: null,
        //患者类型
        patientTypeId: null,
        //证件类型
        documentTypeId: null,
        //其他证件号
        otherCardNo: null,
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
            type: "expand",
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row.patient,
                },
              });
            },
          },
          {
            title: "预约医生",
            width: 100,
            render: (h, params) => {
              return h("span", params.row.doctorName);
            },
          },
          {
            title: "预约人",
            width: 100,
            render: (h, params) => {
              return h("span", params.row.patient.name);
            },
          },
          {
            title: "年龄",
            width: 80,
            render: (h, params) => {
              return h("span", params.row.patient.age);
            },
          },
          {
            title: "预约人手机",
            key: "mobileNumber",
          },

          {
            title: "预约号源",
            key: "schedulingSourceId",
            width: 100,
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "SCHEDULING_SOURCE",
                  params.row.schedulingSourceId
                )
              );
            },
          },
          {
            title: "预约号",
            key: "appointOrderNo",
          },
          {
            title: "预约时间",
            key: "schedulingDate",
            render: (h, params) => {
              return h(
                "span",
                params.row.schedulingDate +
                  " " +
                  this.$enum.getDescByValue(
                    "TIME_OF_DAY",
                    params.row.timeOfDayId
                  )
              );
            },
          },
          {
            title: "预约状态",
            key: "appointStateId",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "APPOINT_STATE",
                  params.row.appointStateId
                ) +
                  (params.row.appointCancelTypeId != null &&
                  params.row.appointCancelTypeId > 0
                    ? "(" +
                      this.$enum.getDescByValue(
                        "APPOINT_CANCEL_TYPE",
                        params.row.appointCancelTypeId
                      ) +
                      ")"
                    : "")
              );
            },
          },
          {
            title: "申请路径",
            key: "appointWayId",
            render: (h, params) => {
              return h(
                "span",
                this.$enum.getDescByValue(
                  "APPOINT_WAY",
                  params.row.appointWayId
                )
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
                  title: "登记明细",
                  directives: [
                    {
                      name: "privilege",
                      value: "scheduling-appointment-list-update",
                    },
                  ],
                  action: () => {
                    this.showEditSchedulingAppointmentForm(params.row);
                  },
                },
              ];
              if (params.row.appointStateId === APPOINT_STATE.NO_VISIT.value) {
                actions.push({
                  title: "取号",
                  directives: [
                    {
                      name: "privilege",
                      value: "scheduling-appointment-list-batch-register",
                    },
                  ],
                  action: () => {
                    this.batchRegistered(params.row.schedulingAppointmentId);
                  },
                });

                actions.push({
                  title: "取消",
                  directives: [
                    {
                      name: "privilege",
                      value: "scheduling-appointment-list-batch-invalid",
                    },
                  ],
                  action: () => {
                    this.batchInvalid(params.row.schedulingAppointmentId);
                  },
                });
              }
              actions.push({
                title: "删除",
                directives: [
                  {
                    name: "privilege",
                    value: "scheduling-appointment-list-delete",
                  },
                ],
                action: () => {
                  this.showDeleteModal(params.row);
                },
              });
              return this.$tableAction(h, actions);
            },
          },
        ],
      },
    };
  },
  computed: {
    schedulingSourceDataList: () => {
      let array = [];
      for (let item in SCHEDULING_SOURCE) {
        let obj = {};
        obj.desc = SCHEDULING_SOURCE[item].desc;
        obj.value = SCHEDULING_SOURCE[item].value;
        array.push(obj);
      }
      return array;
    },
    appointStateDataList: () => {
      let array = [];
      for (let item in APPOINT_STATE) {
        let obj = {};
        obj.desc = APPOINT_STATE[item].desc;
        obj.value = APPOINT_STATE[item].value;
        array.push(obj);
      }
      return array;
    },
    appointWayDataList: () => {
      let array = [];
      for (let item in APPOINT_WAY) {
        let obj = {};
        obj.desc = APPOINT_WAY[item].desc;
        obj.value = APPOINT_WAY[item].value;
        array.push(obj);
      }
      return array;
    },
    dayOfWeekDataList: () => {
      let array = [];
      for (let item in DAY_OF_WEEK) {
        let obj = {};
        obj.desc = DAY_OF_WEEK[item].desc;
        obj.value = DAY_OF_WEEK[item].value;
        array.push(obj);
      }
      return array;
    },
    timeOfDayDataList: () => {
      let array = [];
      for (let item in TIME_OF_DAY) {
        let obj = {};
        obj.desc = TIME_OF_DAY[item].desc;
        obj.value = TIME_OF_DAY[item].value;
        array.push(obj);
      }
      return array;
    },
    YesOrNoDataList: () => {
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
    this.queryList();
    this.initSchedulingLevel();
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
        if (params.isInvalid === -1) {
          params.isInvalid = null;
        }
        if (params.isReferral === -1) {
          params.isReferral = null;
        }
        let result = await schedulingAppointmentApi.querySchedulingAppointment(
          params
        );
        this.mainTable.data = result.data.list;
        this.mainTablePage.total = result.data.total;
      } finally {
        this.mainTable.loading = false;
      }
    },
    async initSchedulingLevel() {
      let params = {
        pageNum: 1,
        pageSize: 9999,
      };
      try {
        let result = await schedulingLevelApi.querySchedulingLevel(params);
        result.data.list.forEach((element) => {
          this.schedulingLevelDataList.push({
            value: element.schedulingLevelId,
            desc: element.name,
          });
        });
      } finally {
      }
    },
    //重置查询
    resetQueryList() {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        mobileNumber: null,
        iDCardNo: null,
        realName: null,
        patientId: null,
        dayOfWeekId: null,
        timeOfDayId: null,
        doctorId: null,
        schedulingTypeId: null,
        schedulingLevelId: null,
        schedulingSpecialtyId: null,
        schedulingClinicId: null,
        schedulingPlanId: null,
        price: null,
        appointStateId: null,
        appointWayId: null,
        schedulingSourceId: null,
        isInvalid: null,
        diseaseId: null,
        isReferral: null,
        departmentId: null,
        oPDepartmentId: null,
        oPDoctorId: null,
        dailySchedulingNumberId: null,
        schedulingAppointmentCancelTypeId: null,
        registerCount_Interface: null,
        doctorName: null,
        departmentName: null,
        schedulingLevelName: null,
        timeOfDayName: null,
        thirdPartyCode: null,
        oPDailySchedulingId: null,
        appointCancelTypeId: null,
        oPDailySchedulingNumberId: null,
        posterId: null,
        appointInsuredCardTypeId: null,
        paymentMethodTypeId: null,
        thirdPartyParameters: null,
        thirdPartyCode1: null,
        payOrderStreamNo_WeiXin: null,
        payQRCodeUrl_WeiXin: null,
        payQRCodePath_WeiXin: null,
        payOrderStreamNo_Ali: null,
        payQRCodeUrl_Ali: null,
        payQRCodePath_Ali: null,
        paymentStateTypeId: null,
        orderId: null,
        isMustPayment: null,
        isHaveInvoice: null,
        schedulingAppointmentTypeId: null,
        appointmentPosterId: null,
        patientTypeId: null,
        documentTypeId: null,
        otherCardNo: null,
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
    async deleteSchedulingAppointment(schedulingAppointmentId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await schedulingAppointmentApi.deleteSchedulingAppointment(
          schedulingAppointmentId
        );
        this.isShowdeleteLoading = false;
        this.deleteModal.show = false;
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
    //显示删除弹窗
    showDeleteModal(selectRow) {
      this.deleteModal.row = selectRow;
      this.deleteModal.show = true;
    },

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
      await schedulingAppointmentApi.batchDeleteSchedulingAppointment(
        this.mainTableSelectArray.map((e) => e.schedulingAppointmentId)
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
        await schedulingAppointmentApi.exportAll(params);
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
        await schedulingAppointmentApi.batchExport(
          this.mainTableSelectArray.map((e) => e.schedulingAppointmentId)
        );
      } catch (e) {
        console.log(e);
      } finally {
        this.batchExportBtnLoading = false;
      }
    },
    //批量取号
    async batchRegistered(schedulingAppointmentId) {
      this.$Spin.show();
      let ids = [];
      ids.push(schedulingAppointmentId);
      await schedulingAppointmentApi.batchRegistered(ids.map((e) => e));
      this.batchDeleteModal.show = false;
      this.$Message.success("取号成功");
      this.$Spin.hide();
      this.queryList();
    },
    //批量取消
    async batchInvalid(schedulingAppointmentId) {
      this.$Spin.show();
      let ids = [];
      ids.push(schedulingAppointmentId);
      await schedulingAppointmentApi.batchInvalid(ids.map((e) => e));
      this.batchDeleteModal.show = false;
      this.$Message.success("取消成功");
      this.$Spin.hide();
      this.queryList();
    },
    /*-------------------------导入导出 end------------------------- */

    /*-------------------------添加，修改 表单 begin------------------------- */
    //显示添加表单
    showAddSchedulingAppointmentForm() {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditSchedulingAppointmentForm(updateObject) {
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
