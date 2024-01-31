<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>申请医院 :</span>
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.applyHospitalId"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value"
              v-for="item in applyHospitalLIst"
              >{{ item.label }}</Option
            >
          </Select>
        </Col>
        <Col span="8">
          <span>患者名称 :</span>
          <Input
            placeholder="请输入患者名称"
            style="width: 180px"
            v-model="queryForm.name"
          />
        </Col>
        <Col span="8">
          <span>身份证号 :</span>
          <Input
            placeholder="请输入身份证号"
            style="width: 180px"
            v-model="queryForm.idCardNo"
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

      <Col span="6">
          <span>申请类型 :</span>
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.applyType"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value"
              v-for="item in applyTypeList"
              >{{ item.label }}</Option
            >
          </Select>
        </Col>
        <Col span="6">
          <span>申请医生 :</span>
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.applyDoctorId"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value"
              v-for="item in applyDoctorList"
              >{{ item.label }}</Option
            >
          </Select>
        </Col>

        <Col span="6">
          <span>期望时间 :</span>
          <!-- <DatePicker
            type="datetime"
            placeholder="请选择期望时间"
            v-model="queryForm.expectTime"
          ></DatePicker> -->
          <DatePicker
            placeholder="选择择期望时间范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.expectTimeRange"
          ></DatePicker>
        </Col>
        <Col span="6">
          <span>审核状态 :</span>

          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.verifyStatus"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value"
              v-for="item in referralApprovalStatusTypeList"
              >{{ item.label }}</Option
            >
          </Select>

        </Col>
      </Row>
      <!------ 查询条件第二行 end------->
      <Row type="flex" justify="center">
        <ButtonGroup>
          <Button
            @click="queryList"
            icon="ios-search"
            type="primary"
            v-privilege="'referral-application-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'referral-application-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'referral-application-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddReferralApplicationForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'referral-application-list-add'"
          >新建数据
        </Button>
        <!-- <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'referral-application-list-batch-delete'"
          >批量删除
        </Button> -->

        <!-- <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'referral-application-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'referral-application-list-batch-export'"
          >批量导出
        </Button> -->
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
                :key="item.referralApplicationId"
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
      <ReferralApplicationListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->

    <!--------------审核 begin------------>
    <Modal
      :footer-hide="true"
      :title="'审核'"
      v-model="verifyModal.show"
      @on-cancel="verifyFormClose"
      width="60%"
    >
      <ReferralApplicationListVerify
        :isUpdate="verifyModal.isUpdate"
        :updateData="verifyModal.updateData"
        @on-form-close="verifyFormClose"
      />
    </Modal>
    <!--------------审核 end-------------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { referralApplicationApi } from '@/api/medicalconsortiums/referral-application';
import ReferralApplicationListForm from './components/referral-application-list-form';
import ReferralApplicationListVerify from './components/referral-application-list-Verify';
import { GENGER_TYPE, REFERRAL_APPROVAL_STATUS_TYPE, REFERRAL_TYPE } from '@/constants/common';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'ReferralApplicationList',
  components: {
    ReferralApplicationListForm,
    ReferralApplicationListVerify
  },
  props: {},
  data () {
    return {
      applyHospitalLIst: [],
      applyDoctorList: [],
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null
      },
      /* -------------------------添加、更新表单 ------------------------- */
      verifyModal: {
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
        // 患者名称
        name: '',
        // 性别
        genderId: null,
        // 年龄
        age: null,
        // 身份证号
        idCardNo: '',
        // 联系电话
        phoneNumber: '',
        // 申请日期
        applyDate: null,
        // 申请医院
        applyHospitalId: null,
        // 申请医生
        applyDoctorId: null,
        // 预约医院
        reservationHospitalId: null,
        // 申请类型
        applyType: null,
        // 预约科室
        reservationDepartment: null,
        // 期望时间
        expectTimeRange: ['', ''],
        // 初步诊断
        initialDiagnosis: '',
        // 预约说明
        reservationInstruction: '',
        // 备注
        remark: '',
        // 审核状态
        verifyStatus: null,
        // 审核时间
        verifyTime: null,
        // 驳回理由
        overruleReason: '',
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
          // {
          //   title: "主键Id",
          //   key: "referralApplicationId",
          //   sortable: "custom",
          // },
          {
            title: '患者名称',
            key: 'name'
            // sortable: "custom",
          },
          {
            title: '性别',
            key: 'genderId',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('GENGER_TYPE', params.row.genderId)
              );
            }
          },
          {
            title: '年龄',
            key: 'age'
            // sortable: "custom",
          },
          // {
          //   title: "身份证号",
          //   key: "idCardNo",
          //   sortable: "custom",
          // },
          {
            title: '联系电话',
            key: 'phoneNumber'
            // sortable: "custom",
          },
          {
            title: '申请日期',
            key: 'applyDate'
            // sortable: "custom",
          },
          {
            title: '申请医院',
            key: 'applyHospitalName'
            // sortable: "custom",
          },
          {
            title: '申请医生',
            key: 'applyDoctorName'
            // sortable: "custom",
          },
          {
            title: '预约医院',
            key: 'reservationHospitalName'
            // sortable: "custom",
          },
          {
            title: '申请类型',
            key: 'applyType',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('REFERRAL_TYPE', params.row.applyType)
              );
            }
          },
          {
            title: '预约科室',
            key: 'reservationDepartment'
            // sortable: "custom",
          },
          {
            title: '期望时间',
            key: 'expectTime'
            // sortable: "custom",
          },
          // {
          //   title: "初步诊断",
          //   key: "initialDiagnosis",
          //   sortable: "custom",
          // },
          // {
          //   title: "预约说明",
          //   key: "reservationInstruction",
          //   sortable: "custom",
          // },
          // {
          //   title: "备注",
          //   key: "remark",
          //   sortable: "custom",
          // },
          {
            title: '审核状态',
            key: 'verifyStatus',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'REFERRAL_APPROVAL_STATUS_TYPE',
                  params.row.verifyStatus
                )
              );
            }
          },
          {
            title: '审核时间',
            key: 'verifyTime'
            // sortable: "custom",
          },

          // {
          //   title: "驳回理由",
          //   key: "overruleReason",
          //   sortable: "custom",
          // },
          // {
          //   title: "新增时间",
          //   key: "dateCreated",
          //   sortable: "custom",
          // },
          // {
          //   title: "修改时间",
          //   key: "dateModified",
          //   sortable: "custom",
          // },
          {
            title: '操作',
            key: 'action',
            align: 'right',
            width: 130,
            className: 'action-hide',
            render: (h, params) => {
              let actions = [];
              actions.push({
                title: '编辑',
                directives: [
                  {
                    name: 'privilege',
                    value: 'referral-application-list-update'
                  }
                ],
                action: () => {
                  this.showEditReferralApplicationForm(params.row);
                }
              });
              if (params.row.verifyStatus == 1) {
                actions.push({
                  title: '审核',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'referral-application-list-verify'
                    }
                  ],
                  action: () => {
                    this.showReferralApplicationListVerify(params.row);
                  }
                });
              }
              actions.push({
                title: '删除',
                directives: [
                  {
                    name: 'privilege',
                    value: 'referral-application-list-delete'
                  }
                ],
                action: () => {
                  this.$Modal.confirm({
                    title: '友情提醒',
                    content: '确定要删除吗？',
                    onOk: () => {
                      this.deleteReferralApplication(
                        params.row.referralApplicationId
                      );
                    }
                  });
                }
              });
              return this.$tableAction(h, actions);
            }
          }
        ]
      }
    };
  },
  computed: {
    gengerList: () => {
      let array = [];
      for (let item in GENGER_TYPE) {
        let obj = {};
        obj.desc = GENGER_TYPE[item].desc;
        obj.value = GENGER_TYPE[item].value;
        array.push(obj);
      }
      return array;
    },
    applyTypeList: () => {
      let array = [];
      for (let item in REFERRAL_TYPE) {
        let obj = {};
        obj.label = REFERRAL_TYPE[item].desc;
        obj.value = REFERRAL_TYPE[item].value;
        array.push(obj);
      }
      return array;
    },
    referralApprovalStatusTypeList: () => {
      let array = [];
      for (let item in REFERRAL_APPROVAL_STATUS_TYPE) {
        let obj = {};
        obj.label = REFERRAL_APPROVAL_STATUS_TYPE[item].desc;
        obj.value = REFERRAL_APPROVAL_STATUS_TYPE[item].value;
        array.push(obj);
      }
      return array;
    }
  },
  watch: {},
  filters: {},
  created () {
    this.initApplyHospital();
    this.initApplyDoctor();
  },
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
      let expectTimeArray = dateTimeRangeConvert(
        this.queryForm.expectTimeRange
      );
      return {
        ...this.queryForm,
        dateCreatedBegin: createTimeArray[0],
        dateCreatedEnd: createTimeArray[1],
        dateModifiedBegin: updateTimeArray[0],
        dateModifiedEnd: updateTimeArray[1],
        expectTimeBegin: expectTimeArray[0],
        expectTimeEnd: expectTimeArray[1]
      };
    },
    // 查询
    async queryList () {
      this.mainTable.loading = true;
      try {
        let params = this.convertQueryParam();
        let result = await referralApplicationApi.queryReferralApplication(
          params
        );
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
        name: null,
        genderId: null,
        age: null,
        idCardNo: null,
        phoneNumber: null,
        applyDate: null,
        applyHospitalId: null,
        applyDoctorId: null,
        reservationHospitalId: null,
        applyType: null,
        reservationDepartment: null,
        expectTimeRange: ['', ''],
        initialDiagnosis: null,
        reservationInstruction: null,
        remark: null,
        verifyStatus: null,
        verifyTime: null,
        overruleReason: null,
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
    async deleteReferralApplication (referralApplicationId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await referralApplicationApi.deleteReferralApplication(
          referralApplicationId
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
      await referralApplicationApi.batchDeleteReferralApplication(
        this.mainTableSelectArray.map((e) => e.referralApplicationId)
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
        await referralApplicationApi.exportAll(params);
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
        await referralApplicationApi.batchExport(
          this.mainTableSelectArray.map((e) => e.referralApplicationId)
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
    showAddReferralApplicationForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditReferralApplicationForm (updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      // this.saveModal.updateData.referralApplicationCase =
      //   referralApplicationCaseArray;
      this.saveModal.show = true;
    },
    showReferralApplicationListVerify (updateObject) {
      this.verifyModal.isUpdate = true;
      this.verifyModal.updateData = updateObject;
      this.verifyModal.show = true;
    },
    saveFormClose () {
      this.saveModal.show = false;
      this.queryList();
    },
    verifyFormClose () {
      this.verifyModal.show = false;
      this.queryList();
    },
    /* -------------------------添加，修改 表单 end------------------------- */
    async initApplyHospital () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 300
        };
        let result = await referralApplicationApi.getApplyHospitalLIst(params);
        let datas = result.data;
        let list = [];
        if (datas) {
          datas.map((item) => {
            list.push({
              value: item.opDepartmentId,
              label: item.name
            });
          });
        }

        this.applyHospitalLIst = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initApplyDoctor () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 300,
          opDepartmentId: 8
        };

        let result = await referralApplicationApi.getapplyDoctorList(params);
        let datas = result.data;
        let list = [];
        if (datas) {
          datas.list.map((item) => {
            list.push({
              value: item.opDoctorId,
              label: item.name
            });
          });
        }

        this.applyDoctorList = list;
      } finally {
        this.$Spin.hide();
      }
    }
  }
};
</script>
