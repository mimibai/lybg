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
            v-model="queryForm.clinicRecordId"
          />
        </Col>
        <Col span="8">
          <span>诊断时间 :</span>
          <DatePicker
            type="datetime"
            placeholder="请选择诊断时间"
            v-model="queryForm.clinicDate"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>问诊类型 :</span>
          <Input
            placeholder="请输入问诊类型"
            style="width: 180px"
            v-model="queryForm.clinicTypeId"
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
          <span>问诊聊天类型 :</span>
          <Input
            placeholder="请输入问诊聊天类型"
            style="width: 180px"
            v-model="queryForm.clinicChatTypeId"
          />
        </Col>
        <Col span="8">
          <span>问诊状态 :</span>
          <Input
            placeholder="请输入问诊状态"
            style="width: 180px"
            v-model="queryForm.clinicStateId"
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
        <Col span="8">
          <span>科室名称 :</span>
          <Input
            placeholder="请输入科室名称"
            style="width: 180px"
            v-model="queryForm.departmentName"
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
          <span>医生名字 :</span>
          <Input
            placeholder="请输入医生名字"
            style="width: 180px"
            v-model="queryForm.doctorName"
          />
        </Col>
        <Col span="8">
          <span>是否替诊 :</span>
          <i-switch v-model="queryForm.isReplace" />
        </Col>
        <Col span="8">
          <span>替诊医生 :</span>
          <Input
            placeholder="请输入替诊医生"
            style="width: 180px"
            v-model="queryForm.replaceDoctorId"
          />
        </Col>
        <Col span="8">
          <span>替诊医生姓名 :</span>
          <Input
            placeholder="请输入替诊医生姓名"
            style="width: 180px"
            v-model="queryForm.replaceDoctorName"
          />
        </Col>
        <Col span="8">
          <span>患者 :</span>
          <Input
            placeholder="请输入患者"
            style="width: 180px"
            v-model="queryForm.patientId"
          />
        </Col>
        <Col span="8">
          <span>患者名字 :</span>
          <Input
            placeholder="请输入患者名字"
            style="width: 180px"
            v-model="queryForm.patientName"
          />
        </Col>
        <Col span="8">
          <span>患者性别 :</span>
          <Input
            placeholder="请输入患者性别"
            style="width: 180px"
            v-model="queryForm.patientGenderId"
          />
        </Col>
        <Col span="8">
          <span>患者身份证号 :</span>
          <Input
            placeholder="请输入患者身份证号"
            style="width: 180px"
            v-model="queryForm.patientIDCard"
          />
        </Col>
        <Col span="8">
          <span>用户 :</span>
          <Input
            placeholder="请输入用户"
            style="width: 180px"
            v-model="queryForm.postUserId"
          />
        </Col>
        <Col span="8">
          <span>答复人 :</span>
          <Input
            placeholder="请输入答复人"
            style="width: 180px"
            v-model="queryForm.replyPersonId"
          />
        </Col>
        <Col span="8">
          <span>答复用户 :</span>
          <Input
            placeholder="请输入答复用户"
            style="width: 180px"
            v-model="queryForm.replyUserId"
          />
        </Col>
        <Col span="8">
          <span>答复医生 :</span>
          <Input
            placeholder="请输入答复医生"
            style="width: 180px"
            v-model="queryForm.replyDoctorId"
          />
        </Col>
        <Col span="8">
          <span>是否删除 :</span>
          <i-switch v-model="queryForm.isDelete" />
        </Col>
        <Col span="8">
          <span>问诊功能类型 1在线问诊 2复诊处方 :</span>
          <Input
            placeholder="请输入问诊功能类型 1在线问诊 2复诊处方"
            style="width: 180px"
            v-model="queryForm.clinicFunctionalTypeId"
          />
        </Col>
        <Col span="8">
          <span>医生绑定的UserId :</span>
          <Input
            placeholder="请输入医生绑定的UserId"
            style="width: 180px"
            v-model="queryForm.doctorUserId"
          />
        </Col>
        <Col span="8">
          <span>患者绑定的UserId :</span>
          <Input
            placeholder="请输入患者绑定的UserId"
            style="width: 180px"
            v-model="queryForm.patientUserId"
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
          <span>门诊医生 :</span>
          <Input
            placeholder="请输入门诊医生"
            style="width: 180px"
            v-model="queryForm.oPDoctorId"
          />
        </Col>
        <Col span="8">
          <span>挂号主键 :</span>
          <Input
            placeholder="请输入挂号主键"
            style="width: 180px"
            v-model="queryForm.clinicAppointmentId"
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
            v-privilege="'clinic-record-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'clinic-record-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'clinic-record-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddClinicRecordForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'clinic-record-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'clinic-record-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-record-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-record-list-batch-export'"
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
                :key="item.clinicRecordId"
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
      <ClinicRecordListForm
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
import { clinicRecordApi } from '@/api/clinic/clinic-record';
import ClinicRecordListForm from './components/clinic-record-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'ClinicRecordList',
  components: {
    ClinicRecordListForm
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
        clinicRecordId: null,
        // 诊断时间
        clinicDate: null,
        // 问诊类型
        clinicTypeId: null,
        // 问诊聊天类型
        clinicChatTypeId: null,
        // 问诊状态
        clinicStateId: null,
        // 科室
        departmentId: null,
        // 科室名称
        departmentName: '',
        // 医生
        doctorId: null,
        // 医生名字
        doctorName: '',
        // 是否替诊
        isReplace: false,
        // 替诊医生
        replaceDoctorId: null,
        // 替诊医生姓名
        replaceDoctorName: '',
        // 患者
        patientId: null,
        // 患者名字
        patientName: '',
        // 患者性别
        patientGenderId: null,
        // 患者身份证号
        patientIDCard: '',
        // 用户
        postUserId: null,
        // 答复人
        replyPersonId: null,
        // 答复用户
        replyUserId: null,
        // 答复医生
        replyDoctorId: null,
        // 是否删除
        isDelete: false,
        // 问诊功能类型 1在线问诊 2复诊处方
        clinicFunctionalTypeId: null,
        // 医生绑定的UserId
        doctorUserId: null,
        // 患者绑定的UserId
        patientUserId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 挂号主键
        clinicAppointmentId: null,
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
            title: '问诊医生',
            key: 'doctorName',
            sortable: 'custom'
          },
          {
            title: '患者',
            key: 'patientName',
            sortable: 'custom'
          },
          {
            title: '年龄',
            key: 'patientAge',
            sortable: 'custom'
          },
          {
            title: '患者手机号',
            key: 'patientMobileNumber',
            sortable: 'custom'
          },
          {
            title: '问诊类型',
            key: 'clinicChatTypeId',
            sortable: 'custom'
          },
          {
            title: '问诊时间',
            key: 'clinicDate'
          },
          {
            title: '问诊状态',
            key: 'clinicStatus'
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
                      value: 'clinic-record-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditClinicRecordForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'clinic-record-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteClinicRecord(params.row.clinicRecordId);
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
        let result = await clinicRecordApi.queryClinicRecord(params);
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
        clinicRecordId: null,
        clinicDate: null,
        clinicTypeId: null,
        clinicChatTypeId: null,
        clinicStateId: null,
        departmentId: null,
        departmentName: null,
        doctorId: null,
        doctorName: null,
        isReplace: null,
        replaceDoctorId: null,
        replaceDoctorName: null,
        patientId: null,
        patientName: null,
        patientGenderId: null,
        patientIDCard: null,
        postUserId: null,
        replyPersonId: null,
        replyUserId: null,
        replyDoctorId: null,
        isDelete: null,
        clinicFunctionalTypeId: null,
        doctorUserId: null,
        patientUserId: null,
        oPDepartmentId: null,
        oPDoctorId: null,
        clinicAppointmentId: null,
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
    async deleteClinicRecord (clinicRecordId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await clinicRecordApi.deleteClinicRecord(clinicRecordId);
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
      await clinicRecordApi.batchDeleteClinicRecord(
        this.mainTableSelectArray.map((e) => e.clinicRecordId)
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
        await clinicRecordApi.exportAll(params);
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
        await clinicRecordApi.batchExport(
          this.mainTableSelectArray.map((e) => e.clinicRecordId)
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
    showAddClinicRecordForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditClinicRecordForm (updateObject) {
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
