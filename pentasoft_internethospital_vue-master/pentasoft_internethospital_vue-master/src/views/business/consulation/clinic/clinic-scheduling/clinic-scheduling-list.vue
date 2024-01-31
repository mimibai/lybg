<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>主键Id :</span>
          <Input
            placeholder="请输入主键Id"
            style="width: 180px"
            v-model="queryForm.clinicSchedulingId"
          />
        </Col>
        <Col span="8">
          <span>医生 :</span>
          <Input
            placeholder="请输入医生"
            style="width: 180px"
            v-model="queryForm.doctorId"
          />
        </Col>
        <Col span="8">
          <span>科室 :</span>
          <Input
            placeholder="请输入科室"
            style="width: 180px"
            v-model="queryForm.departmentId"
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
          <span>门诊医生 :</span>
          <Input
            placeholder="请输入门诊医生"
            style="width: 180px"
            v-model="queryForm.oPDoctorId"
          />
        </Col>
        <Col span="8">
          <span>门诊科室 :</span>
          <Input
            placeholder="请输入门诊科室"
            style="width: 180px"
            v-model="queryForm.oPDepartmentId"
          />
        </Col>
        <Col span="8">
          <span>出诊级别 :</span>
          <Input
            placeholder="请输入出诊级别"
            style="width: 180px"
            v-model="queryForm.schedulingLevelId"
          />
        </Col>
        <Col span="8">
          <span>星期 :</span>
          <Input
            placeholder="请输入星期"
            style="width: 180px"
            v-model="queryForm.dayOfWeekId"
          />
        </Col>
        <Col span="8">
          <span>时段 :</span>
          <Input
            placeholder="请输入时段"
            style="width: 180px"
            v-model="queryForm.timeOfDayId"
          />
        </Col>
        <Col span="8">
          <span>排班日期 :</span>
          <DatePicker
            type="datetime"
            placeholder="请选择排班日期"
            v-model="queryForm.schedulingDate"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>是否审核 :</span>
          <Checkbox v-model="queryForm.isApprove"></Checkbox>
        </Col>
        <Col span="8">
          <span>停诊原因 :</span>
          <Input
            placeholder="请输入停诊原因"
            style="width: 180px"
            v-model="queryForm.stopSchedulingReasonId"
          />
        </Col>
        <Col span="8">
          <span>是否允许预约 :</span>
          <Checkbox v-model="queryForm.isAllowAppoint"></Checkbox>
        </Col>
        <Col span="8">
          <span>级别编码/号别 :</span>
          <Input
            placeholder="请输入级别编码/号别"
            style="width: 180px"
            v-model="queryForm.schedulingLevelCode"
          />
        </Col>
        <Col span="8">
          <span>所在医院 :</span>
          <Input
            placeholder="请输入所在医院"
            style="width: 180px"
            v-model="queryForm.hospitalId"
          />
        </Col>
        <Col span="8">
          <span>出诊类型 :</span>
          <Input
            placeholder="请输入出诊类型"
            style="width: 180px"
            v-model="queryForm.oPSchedulingTypeId"
          />
        </Col>
        <Col span="8">
          <span>替诊类型 :</span>
          <Input
            placeholder="请输入替诊类型"
            style="width: 180px"
            v-model="queryForm.replaceTypeId"
          />
        </Col>
        <Col span="8">
          <span>替诊医生 :</span>
          <Input
            placeholder="请输入替诊医生"
            style="width: 180px"
            v-model="queryForm.replaceOPDoctorId"
          />
        </Col>
        <Col span="8">
          <span>被替诊出诊Id :</span>
          <Input
            placeholder="请输入被替诊出诊Id"
            style="width: 180px"
            v-model="queryForm.replaceOPDailySchedulingId"
          />
        </Col>
        <Col span="8">
          <span>第三方编码 :</span>
          <Input
            placeholder="请输入第三方编码"
            style="width: 180px"
            v-model="queryForm.thirdPartyCode"
          />
        </Col>
        <Col span="8">
          <span>是否删除 :</span>
          <Checkbox v-model="queryForm.isDelete"></Checkbox>
        </Col>
        <Col span="8">
          <span>是否修改过 :</span>
          <Checkbox v-model="queryForm.isModified"></Checkbox>
        </Col>
        <Col span="8">
          <span>修改类型 1、手动修改 2、程序导入 :</span>
          <Input
            placeholder="请输入修改类型 1、手动修改 2、程序导入"
            style="width: 180px"
            v-model="queryForm.modifiedTypeId"
          />
        </Col>
        <Col span="8">
          <span>总号源 :</span>
          <Input
            placeholder="请输入总号源"
            style="width: 180px"
            v-model="queryForm.totalNumber"
          />
        </Col>
        <Col span="8">
          <span>可预约号源 :</span>
          <Input
            placeholder="请输入可预约号源"
            style="width: 180px"
            v-model="queryForm.valuableNumber"
          />
        </Col>
        <Col span="8">
          <span>是否全天 :</span>
          <Checkbox v-model="queryForm.isAllDay"></Checkbox>
        </Col>
        <Col span="8">
          <span>问诊类型 枚举：1医院问诊 2科室问诊 3医生问诊 :</span>
          <Input
            placeholder="请输入问诊类型 枚举：1医院问诊 2科室问诊 3医生问诊"
            style="width: 180px"
            v-model="queryForm.clinicTypeId"
          />
        </Col>
        <Col span="8">
          <span>问诊对话类型 枚举：1图文 2语音 3视频 :</span>
          <Input
            placeholder="请输入问诊对话类型 枚举：1图文 2语音 3视频"
            style="width: 180px"
            v-model="queryForm.clinicChatTypeId"
          />
        </Col>
        <Col span="8">
          <span>问诊功能类型 枚举：1在线问诊 2复诊处方 :</span>
          <Input
            placeholder="请输入问诊功能类型 枚举：1在线问诊 2复诊处方"
            style="width: 180px"
            v-model="queryForm.clinicFunctionalTypeId"
          />
        </Col>
        <Col span="8">
          <span>号源类型 :</span>
          <Input
            placeholder="请输入号源类型"
            style="width: 180px"
            v-model="queryForm.generateAppointNoTypeId"
          />
        </Col>
        <Col span="8">
          <span>可预约总数 :</span>
          <Input
            placeholder="请输入可预约总数"
            style="width: 180px"
            v-model="queryForm.allownAppointTotal"
          />
        </Col>
        <Col span="8">
          <span>起始预约号次 :</span>
          <Input
            placeholder="请输入起始预约号次"
            style="width: 180px"
            v-model="queryForm.beginAppointNo"
          />
        </Col>
        <Col span="8">
          <span>自定义号源 :</span>
          <Input
            placeholder="请输入自定义号源"
            style="width: 180px"
            v-model="queryForm.allownAppointNumbers"
          />
        </Col>
        <Col span="8">
          <span>生成号源时间类型 :</span>
          <Input
            placeholder="请输入生成号源时间类型"
            style="width: 180px"
            v-model="queryForm.generateAppointNumberTimeTypeId"
          />
        </Col>
        <Col span="8">
          <span>起始号源时间 :</span>
          <DatePicker
            type="datetime"
            placeholder="请选择起始号源时间"
            v-model="queryForm.beginAppointNumberTime"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>号源间隔时间 :</span>
          <Input
            placeholder="请输入号源间隔时间"
            style="width: 180px"
            v-model="queryForm.appointNumberIntervalTime"
          />
        </Col>
        <Col span="8">
          <span>自定义号源时间 :</span>
          <Input
            placeholder="请输入自定义号源时间"
            style="width: 180px"
            v-model="queryForm.appointNumberTimes"
          />
        </Col>
        <Col span="8">
          <span>创建时间:</span>
          <DatePicker
            placeholder="选择创建日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.createTimeRange"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>更新时间:</span>
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
            v-privilege="'clinic-scheduling-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'clinic-scheduling-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'clinic-scheduling-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddClinicSchedulingForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'clinic-scheduling-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'clinic-scheduling-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-scheduling-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-scheduling-list-batch-export'"
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
                :key="item.clinicSchedulingId"
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
      width="60%"
    >
      <ClinicSchedulingListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { clinicSchedulingApi } from '@/api/clinic/clinic-scheduling';
import ClinicSchedulingListForm from './components/clinic-scheduling-list-form';
import ClinicSchedulingNumberList from '@/views/business/consulation/clinic/clinic-scheduling-number/clinic-scheduling-number-list';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'ClinicSchedulingList',
  components: {
    ClinicSchedulingListForm,
    ClinicSchedulingNumberList
  },
  props: {},
  data () {
    return {
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null
      },
      /* -------------------------批量操作------------------------- */
      // 批量刪除彈出框
      batchDeleteModal: {
        show: false
      },
      // 表格多选选中的元素数组
      mainTableSelectArray: [],
      /* -------------------------导出操作------------------------- */
      // 批量导出loading按钮
      batchExportBtnLoading: false,
      // 导出全部loading按钮
      allExportBtnLoading: false,
      isShowDeleteLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      // 搜索表单
      queryForm: {
        // 主键Id
        clinicSchedulingId: null,
        // 医生
        doctorId: null,
        // 科室
        departmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 出诊级别
        schedulingLevelId: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 排班日期
        schedulingDate: null,
        // 是否审核
        isApprove: null,
        // 停诊原因
        stopSchedulingReasonId: null,
        // 是否允许预约
        isAllowAppoint: null,
        // 级别编码/号别
        schedulingLevelCode: '',
        // 所在医院
        hospitalId: null,
        // 出诊类型
        oPSchedulingTypeId: null,
        // 替诊类型
        replaceTypeId: null,
        // 替诊医生
        replaceOPDoctorId: null,
        // 被替诊出诊Id
        replaceOPDailySchedulingId: null,
        // 第三方编码
        thirdPartyCode: '',
        // 是否删除
        isDelete: null,
        // 是否修改过
        isModified: null,
        // 修改类型 1、手动修改 2、程序导入
        modifiedTypeId: null,
        // 总号源
        totalNumber: null,
        // 可预约号源
        valuableNumber: null,
        // 是否全天
        isAllDay: null,
        // 问诊类型 枚举：1医院问诊 2科室问诊 3医生问诊
        clinicTypeId: null,
        // 问诊对话类型 枚举：1图文 2语音 3视频
        clinicChatTypeId: null,
        // 问诊功能类型 枚举：1在线问诊 2复诊处方
        clinicFunctionalTypeId: null,
        // 号源类型
        generateAppointNoTypeId: null,
        // 可预约总数
        allownAppointTotal: null,
        // 起始预约号次
        beginAppointNo: null,
        // 自定义号源
        allownAppointNumbers: '',
        // 生成号源时间类型
        generateAppointNumberTimeTypeId: null,
        // 起始号源时间
        beginAppointNumberTime: null,
        // 号源间隔时间
        appointNumberIntervalTime: null,
        // 自定义号源时间
        appointNumberTimes: '',
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
        orders: []
      },
      // 是否展示更多搜索条件
      showMoreQueryConditionFlag: false,
      /*  -------------------------表格相关数据------------------------- */
      // 表格分页
      mainTablePage: {
        total: 0,
        pageSizeOps: PAGE_SIZE_OPTIONS
      },
      // 表格
      mainTable: {
        // 加载中
        loading: false,
        // 表格数据
        data: [],
        // 表格列
        columnArray: [
          {
            type: 'selection',
            width: 30,
            align: 'center'
          },
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(ClinicSchedulingNumberList, {
                props: {
                  clinicSchedulingId: params.row.clinicSchedulingId
                }
              });
            }
          },
          {
            title: '科室',
            key: 'departmentId',
            sortable: 'custom'
          },
          {
            title: '医生',
            key: 'doctorId',
            sortable: 'custom'
          },
          {
            title: '出诊级别',
            key: 'schedulingLevelId',
            sortable: 'custom'
          },
          {
            title: '出诊类型',
            key: 'oPSchedulingTypeId',
            sortable: 'custom'
          },
          {
            title: '排班日期',
            key: 'schedulingDate',
            sortable: 'custom'
          },
          {
            title: '星期',
            key: 'dayOfWeekId',
            sortable: 'custom'
          },
          {
            title: '时段',
            key: 'timeOfDayId',
            sortable: 'custom'
          },
          {
            title: '挂号价目',
            key: 'price',
            sortable: 'custom'
          },

          {
            title: '问诊类型',
            key: 'clinicTypeId',
            sortable: 'custom'
          },
          {
            title: '问诊对话类型',
            key: 'clinicChatTypeId',
            sortable: 'custom'
          },
          {
            title: '是否允许预约',
            key: 'isAllowAppoint',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isAllowAppoint
                )
              );
            }
          },

          {
            title: '是否删除',
            key: 'isDelete',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isDelete)
              );
            }
          },
          {
            title: '可预约号源',
            key: 'valuableNumber',
            sortable: 'custom'
          },
          {
            title: '操作',
            key: 'action',
            align: 'right',
            width: 130,
            className: 'action-hide',
            render: (h, params) => {
              let actions = [
                {
                  title: '编辑',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'clinic-scheduling-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditClinicSchedulingForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'clinic-scheduling-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteClinicScheduling(
                          params.row.clinicSchedulingId
                        );
                      }
                    });
                  }
                }
              ];
              return this.$tableAction(h, actions);
            }
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created () {},
  mounted () {
    this.queryList();
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {
    /* -------------------------查询相关 begin------------------------- */
    convertQueryParam () {
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
        dateModifiedEnd: updateTimeArray[1]
      };
    },
    // 查询
    async queryList () {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await clinicSchedulingApi.queryClinicScheduling(params);
        this.mainTable.data = result.data.list;
        this.mainTablePage.total = result.data.total;
      } finally {
        this.mainTable.loading = false;
      }
    },
    // 重置查询
    resetQueryList () {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        clinicSchedulingId: null,
        doctorId: null,
        departmentId: null,
        oPDoctorId: null,
        oPDepartmentId: null,
        schedulingLevelId: null,
        dayOfWeekId: null,
        timeOfDayId: null,
        schedulingDate: null,
        isApprove: null,
        stopSchedulingReasonId: null,
        isAllowAppoint: null,
        schedulingLevelCode: null,
        hospitalId: null,
        oPSchedulingTypeId: null,
        replaceTypeId: null,
        replaceOPDoctorId: null,
        replaceOPDailySchedulingId: null,
        thirdPartyCode: null,
        isDelete: null,
        isModified: null,
        modifiedTypeId: null,
        totalNumber: null,
        valuableNumber: null,
        isAllDay: null,
        clinicTypeId: null,
        clinicChatTypeId: null,
        clinicFunctionalTypeId: null,
        generateAppointNoTypeId: null,
        allownAppointTotal: null,
        beginAppointNo: null,
        allownAppointNumbers: null,
        generateAppointNumberTimeTypeId: null,
        beginAppointNumberTime: null,
        appointNumberIntervalTime: null,
        appointNumberTimes: null,
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        pageNum: 1,
        pageSize: pageSize,
        orders: []
      };
      this.queryList();
    },
    // 修改页码
    changeMainTablePagePageNum (pageNum) {
      this.queryForm.pageNum = pageNum;
      this.queryList();
    },
    // 修改页大小
    changeMainTablePagePageSize (pageSize) {
      this.queryForm.pageNum = 1;
      this.queryForm.pageSize = pageSize;
      this.queryList();
    },
    // 处理排序
    handleSortChange (column) {
      if (column.order === 'normal') {
        this.queryForm.orders = [];
      } else {
        this.queryForm.orders = [
          {
            column: column.column.tableColumn,
            asc: column.order === 'asc'
          }
        ];
      }
      this.queryList();
    },
    /* -------------------------查询相关 end------------------------- */

    /* -------------------------删除 begin------------------------- */
    // 根据ID删除
    async deleteClinicScheduling (clinicSchedulingId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await clinicSchedulingApi.deleteClinicScheduling(
          clinicSchedulingId
        );
        this.isShowDeleteLoading = false;
        this.$Message.success('删除成功');
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        console.error(e);
        this.isShowDeleteLoading = false;
      }
    },
    /* -------------------------删除 begin------------------------- */

    /* -------------------------批量操作 begin------------------------- */
    // 显示批量删除弹窗
    showBatchDeleteModal () {
      if (!this.validateMainTableSelection()) {
        return;
      }
      this.batchDeleteModal.show = true;
    },
    // 批量删除
    async batchDelete () {
      this.$Spin.show();
      await clinicSchedulingApi.batchDeleteClinicScheduling(
        this.mainTableSelectArray.map((e) => e.clinicSchedulingId)
      );
      this.batchDeleteModal.show = false;
      this.$Message.success('刪除成功');
      this.$Spin.hide();
      this.queryList();
    },
    // 清空选中
    clearMainTableSelection () {
      this.mainTableSelectArray = [];
    },
    // 校验是否有选中
    validateMainTableSelection () {
      this.mainTableSelectArray = this.$refs.mainTable.getSelection();
      if (this.mainTableSelectArray.length < 1) {
        this.$Message.error('请选择至少一条数据');
        return false;
      }
      return true;
    },
    /* -------------------------批量操作 end------------------------- */

    /* -------------------------导入导出 begin------------------------- */
    // 导出全部
    async exportAll () {
      try {
        this.allExportBtnLoading = true;
        let params = this.convertQueryParam();
        await clinicSchedulingApi.exportAll(params);
      } catch (e) {
        console.log(e);
      } finally {
        this.allExportBtnLoading = false;
      }
    },
    // 批量导出
    async batchExport () {
      if (!this.validateMainTableSelection()) {
        return;
      }
      try {
        this.batchExportBtnLoading = true;
        await clinicSchedulingApi.batchExport(
          this.mainTableSelectArray.map((e) => e.clinicSchedulingId)
        );
      } catch (e) {
        console.log(e);
      } finally {
        this.batchExportBtnLoading = false;
      }
    },
    /* -------------------------导入导出 end------------------------- */

    /* -------------------------添加，修改 表单 begin------------------------- */
    // 显示添加表单
    showAddClinicSchedulingForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditClinicSchedulingForm (updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose () {
      this.saveModal.show = false;
      this.queryList();
    }
    /* -------------------------添加，修改 表单 end------------------------- */
  }
};
</script>
