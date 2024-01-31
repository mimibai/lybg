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
            v-model="queryForm.clinicAppointmentId"
          />
        </Col>
        <Col span="8">
          <span>患者Id :</span>
          <Input
            placeholder="请输入患者Id"
            style="width: 180px"
            v-model="queryForm.patientId"
          />
        </Col>
        <Col span="8">
          <span>手机号码 :</span>
          <Input
            placeholder="请输入手机号码"
            style="width: 180px"
            v-model="queryForm.mobileNumber"
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
          <span>身份证号码 :</span>
          <Input
            placeholder="请输入身份证号码"
            style="width: 180px"
            v-model="queryForm.iDCardNo"
          />
        </Col>
        <Col span="8">
          <span>真实姓名 :</span>
          <Input
            placeholder="请输入真实姓名"
            style="width: 180px"
            v-model="queryForm.realName"
          />
        </Col>
        <Col span="8">
          <span>注册号 :</span>
          <Input
            placeholder="请输入注册号"
            style="width: 180px"
            v-model="queryForm.registrationNo"
          />
        </Col>
        <Col span="8">
          <span>医保手册编码 :</span>
          <Input
            placeholder="请输入医保手册编码"
            style="width: 180px"
            v-model="queryForm.medicareHandbookCode"
          />
        </Col>
        <Col span="8">
          <span>就诊卡号 :</span>
          <Input
            placeholder="请输入就诊卡号"
            style="width: 180px"
            v-model="queryForm.treatmentCardNo"
          />
        </Col>
        <Col span="8">
          <span>门诊医生Id :</span>
          <Input
            placeholder="请输入门诊医生Id"
            style="width: 180px"
            v-model="queryForm.doctorId"
          />
        </Col>
        <Col span="8">
          <span>科室Id :</span>
          <Input
            placeholder="请输入科室Id"
            style="width: 180px"
            v-model="queryForm.departmentId"
          />
        </Col>
        <Col span="8">
          <span>门诊排班级别Id :</span>
          <Input
            placeholder="请输入门诊排班级别Id"
            style="width: 180px"
            v-model="queryForm.schedulingLevelId"
          />
        </Col>
        <Col span="8">
          <span>门诊专业Id :</span>
          <Input
            placeholder="请输入门诊专业Id"
            style="width: 180px"
            v-model="queryForm.schedulingSpecialtyId"
          />
        </Col>
        <Col span="8">
          <span>门诊诊室Id :</span>
          <Input
            placeholder="请输入门诊诊室Id"
            style="width: 180px"
            v-model="queryForm.schedulingClinicId"
          />
        </Col>
        <Col span="8">
          <span>排班性质Id :</span>
          <Input
            placeholder="请输入排班性质Id"
            style="width: 180px"
            v-model="queryForm.schedulingPropertyId"
          />
        </Col>
        <Col span="8">
          <span>排班计划Id :</span>
          <Input
            placeholder="请输入排班计划Id"
            style="width: 180px"
            v-model="queryForm.schedulingPlanId"
          />
        </Col>
        <Col span="8">
          <span>每日排班Id :</span>
          <Input
            placeholder="请输入每日排班Id"
            style="width: 180px"
            v-model="queryForm.dailySchedulingId"
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
          <span>预约号次 :</span>
          <Input
            placeholder="请输入预约号次"
            style="width: 180px"
            v-model="queryForm.appointOrderNo"
          />
        </Col>
        <Col span="8">
          <span>预约状态 :</span>
          <Input
            placeholder="请输入预约状态"
            style="width: 180px"
            v-model="queryForm.appointStateId"
          />
        </Col>
        <Col span="8">
          <span>是否发送短信 :</span>
          <i-switch v-model="queryForm.isSendSM" />
        </Col>
        <Col span="8">
          <span>是否发送邮件 :</span>
          <i-switch v-model="queryForm.isSendEmail" />
        </Col>
        <Col span="8">
          <span>是否作废 :</span>
          <i-switch v-model="queryForm.isInvalid" />
        </Col>
        <Col span="8">
          <span>作废日期 :</span>
          <DatePicker
            type="datetime"
            placeholder="请选择作废日期"
            v-model="queryForm.lastInvalidDate"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>作废人 :</span>
          <Input
            placeholder="请输入作废人"
            style="width: 180px"
            v-model="queryForm.invaliderId"
          />
        </Col>
        <Col span="8">
          <span>预约作废类型 :</span>
          <Input
            placeholder="请输入预约作废类型"
            style="width: 180px"
            v-model="queryForm.appointInvalidTypeID"
          />
        </Col>
        <Col span="8">
          <span>是否为复诊病人的预约 :</span>
          <i-switch v-model="queryForm.isReferral" />
        </Col>
        <Col span="8">
          <span>预约途径 :</span>
          <Input
            placeholder="请输入预约途径"
            style="width: 180px"
            v-model="queryForm.appointWayId"
          />
        </Col>
        <Col span="8">
          <span>预约号源 :</span>
          <Input
            placeholder="请输入预约号源"
            style="width: 180px"
            v-model="queryForm.schedulingSourceId"
          />
        </Col>
        <Col span="8">
          <span>取号日期 :</span>
          <DatePicker
            type="datetime"
            placeholder="请选择取号日期"
            v-model="queryForm.registeredDate"
          ></DatePicker>
        </Col>
        <Col span="8">
          <span>提交人 :</span>
          <Input
            placeholder="请输入提交人"
            style="width: 180px"
            v-model="queryForm.posterId"
          />
        </Col>
        <Col span="8">
          <span>号源明细主键 :</span>
          <Input
            placeholder="请输入号源明细主键"
            style="width: 180px"
            v-model="queryForm.dailySchedulingNumberId"
          />
        </Col>
        <Col span="8">
          <span>出诊级别编码 :</span>
          <Input
            placeholder="请输入出诊级别编码"
            style="width: 180px"
            v-model="queryForm.schedulingLevelCode"
          />
        </Col>
        <Col span="8">
          <span>相关疾病 :</span>
          <Input
            placeholder="请输入相关疾病"
            style="width: 180px"
            v-model="queryForm.diseaseId"
          />
        </Col>
        <Col span="8">
          <span>门诊医生姓名 :</span>
          <Input
            placeholder="请输入门诊医生姓名"
            style="width: 180px"
            v-model="queryForm.doctorName"
          />
        </Col>
        <Col span="8">
          <span>科室 :</span>
          <Input
            placeholder="请输入科室"
            style="width: 180px"
            v-model="queryForm.departmentName"
          />
        </Col>
        <Col span="8">
          <span>门诊排班级别 :</span>
          <Input
            placeholder="请输入门诊排班级别"
            style="width: 180px"
            v-model="queryForm.schedulingLevelName"
          />
        </Col>
        <Col span="8">
          <span>门诊专业 :</span>
          <Input
            placeholder="请输入门诊专业"
            style="width: 180px"
            v-model="queryForm.schedulingSpecialtyName"
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
          <span>时段 :</span>
          <Input
            placeholder="请输入时段"
            style="width: 180px"
            v-model="queryForm.timeOfDayName"
          />
        </Col>
        <Col span="8">
          <span>时间 :</span>
          <Input
            placeholder="请输入时间"
            style="width: 180px"
            v-model="queryForm.time"
          />
        </Col>
        <Col span="8">
          <span>门诊科室ID :</span>
          <Input
            placeholder="请输入门诊科室ID"
            style="width: 180px"
            v-model="queryForm.oPDepartmentId"
          />
        </Col>
        <Col span="8">
          <span>门诊医生ID :</span>
          <Input
            placeholder="请输入门诊医生ID"
            style="width: 180px"
            v-model="queryForm.oPDoctorId"
          />
        </Col>
        <Col span="8">
          <span>出诊类型 :</span>
          <Input
            placeholder="请输入出诊类型"
            style="width: 180px"
            v-model="queryForm.schedulingTypeId"
          />
        </Col>
        <Col span="8">
          <span>取消原因 :</span>
          <Input
            placeholder="请输入取消原因"
            style="width: 180px"
            v-model="queryForm.schedulingAppointmentCancelTypeId"
          />
        </Col>
        <Col span="8">
          <span>每日门诊排班Id :</span>
          <Input
            placeholder="请输入每日门诊排班Id"
            style="width: 180px"
            v-model="queryForm.clinicSchedulingId"
          />
        </Col>
        <Col span="8">
          <span>门诊号源明细主键Id :</span>
          <Input
            placeholder="请输入门诊号源明细主键Id"
            style="width: 180px"
            v-model="queryForm.clinicSchedulingNumberId"
          />
        </Col>
        <Col span="8">
          <span>取消方式 :</span>
          <Input
            placeholder="请输入取消方式"
            style="width: 180px"
            v-model="queryForm.appointCancelTypeId"
          />
        </Col>
        <Col span="8">
          <span>参保卡类别 :</span>
          <Input
            placeholder="请输入参保卡类别"
            style="width: 180px"
            v-model="queryForm.appointInsuredCardTypeId"
          />
        </Col>
        <Col span="8">
          <span>支付方式 :</span>
          <Input
            placeholder="请输入支付方式"
            style="width: 180px"
            v-model="queryForm.paymentMethodTypeId"
          />
        </Col>
        <Col span="8">
          <span>订单ID :</span>
          <Input
            placeholder="请输入订单ID"
            style="width: 180px"
            v-model="queryForm.orderId"
          />
        </Col>
        <Col span="8">
          <span>是否必须支付 :</span>
          <i-switch v-model="queryForm.isMustPayment" />
        </Col>
        <Col span="8">
          <span>在线问诊的主键 :</span>
          <Input
            placeholder="请输入在线问诊的主键"
            style="width: 180px"
            v-model="queryForm.clinicRecordId"
          />
        </Col>
        <Col span="8">
          <span>预约类型 :</span>
          <Input
            placeholder="请输入预约类型"
            style="width: 180px"
            v-model="queryForm.schedulingAppointmentTypeId"
          />
        </Col>
        <Col span="8">
          <span>预约操作人 :</span>
          <Input
            placeholder="请输入预约操作人"
            style="width: 180px"
            v-model="queryForm.appointmentPosterId"
          />
        </Col>
        <Col span="8">
          <span>患者类型 :</span>
          <Input
            placeholder="请输入患者类型"
            style="width: 180px"
            v-model="queryForm.patientTypeId"
          />
        </Col>
        <Col span="8">
          <span>证件类型 :</span>
          <Input
            placeholder="请输入证件类型"
            style="width: 180px"
            v-model="queryForm.documentTypeId"
          />
        </Col>
        <Col span="8">
          <span>其他证件号 :</span>
          <Input
            placeholder="请输入其他证件号"
            style="width: 180px"
            v-model="queryForm.otherCardNo"
          />
        </Col>
        <Col span="8">
          <span>问诊类型 :</span>
          <Input
            placeholder="请输入问诊类型"
            style="width: 180px"
            v-model="queryForm.clinicChatTypeId"
          />
        </Col>
        <Col span="8">
          <span>问诊功能类型 :</span>
          <Input
            placeholder="请输入问诊功能类型"
            style="width: 180px"
            v-model="queryForm.clinicFunctionalTypeId"
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
            v-privilege="'clinic-appointment-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'clinic-appointment-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'clinic-appointment-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddClinicAppointmentForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'clinic-appointment-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'clinic-appointment-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-appointment-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'clinic-appointment-list-batch-export'"
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
                :key="item.clinicAppointmentId"
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
      <ClinicAppointmentListForm
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
import { clinicAppointmentApi } from '@/api/clinic/clinic-appointment';
import ClinicAppointmentListForm from './components/clinic-appointment-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'ClinicAppointmentList',
  components: {
    ClinicAppointmentListForm
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
        clinicAppointmentId: null,
        // 患者Id
        patientId: null,
        // 手机号码
        mobileNumber: '',
        // 身份证号码
        iDCardNo: '',
        // 真实姓名
        realName: '',
        // 注册号
        registrationNo: '',
        // 医保手册编码
        medicareHandbookCode: '',
        // 就诊卡号
        treatmentCardNo: '',
        // 门诊医生Id
        doctorId: null,
        // 科室Id
        departmentId: null,
        // 门诊排班级别Id
        schedulingLevelId: null,
        // 门诊专业Id
        schedulingSpecialtyId: null,
        // 门诊诊室Id
        schedulingClinicId: null,
        // 排班性质Id
        schedulingPropertyId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 每日排班Id
        dailySchedulingId: null,
        // 排班日期
        schedulingDate: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 预约号次
        appointOrderNo: null,
        // 预约状态
        appointStateId: null,
        // 是否发送短信
        isSendSM: null,
        // 是否发送邮件
        isSendEmail: null,
        // 是否作废
        isInvalid: null,
        // 作废日期
        lastInvalidDate: null,
        // 作废人
        invaliderId: null,
        // 预约作废类型
        appointInvalidTypeID: null,
        // 是否为复诊病人的预约
        isReferral: null,
        // 预约途径
        appointWayId: null,
        // 预约号源
        schedulingSourceId: null,
        // 取号日期
        registeredDate: null,
        // 提交人
        posterId: null,
        // 号源明细主键
        dailySchedulingNumberId: null,
        // 出诊级别编码
        schedulingLevelCode: '',
        // 相关疾病
        diseaseId: null,
        // 门诊医生姓名
        doctorName: '',
        // 科室
        departmentName: '',
        // 门诊排班级别
        schedulingLevelName: '',
        // 门诊专业
        schedulingSpecialtyName: '',
        // 第三方编码
        thirdPartyCode: '',
        // 时段
        timeOfDayName: '',
        // 时间
        time: '',
        // 门诊科室ID
        oPDepartmentId: null,
        // 门诊医生ID
        oPDoctorId: null,
        // 出诊类型
        schedulingTypeId: null,
        // 取消原因
        schedulingAppointmentCancelTypeId: null,
        // 每日门诊排班Id
        clinicSchedulingId: null,
        // 门诊号源明细主键Id
        clinicSchedulingNumberId: null,
        // 取消方式
        appointCancelTypeId: null,
        // 参保卡类别
        appointInsuredCardTypeId: null,
        // 支付方式
        paymentMethodTypeId: null,
        // 订单ID
        orderId: null,
        // 是否必须支付
        isMustPayment: null,
        // 在线问诊的主键
        clinicRecordId: null,
        // 预约类型
        schedulingAppointmentTypeId: null,
        // 预约操作人
        appointmentPosterId: null,
        // 患者类型
        patientTypeId: null,
        // 证件类型
        documentTypeId: null,
        // 其他证件号
        otherCardNo: '',
        // 问诊类型
        clinicChatTypeId: null,
        // 问诊功能类型
        clinicFunctionalTypeId: null,
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
            title: '患者姓名',
            key: 'realName',
            width: 80
          },
          {
            title: '手机号码',
            key: 'mobileNumber'
          },
          {
            title: '医生姓名',
            key: 'doctorName',
            width: 80
          },
          {
            title: '科室名称',
            key: 'departmentName',
            width: 80
          },
          {
            title: '挂号时间',
            key: 'dateCreated',
            width: 130
          },
          {
            title: '价格',
            key: 'price',
            width: 65
          },
          {
            title: '预约状态',
            key: 'appointStateId',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('APPOINT_STATE', params.row.appointStateId)
              );
            }
          },
          {
            title: '是否作废',
            key: 'isInvalid',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isInvalid)
              );
            }
          },
          {
            title: '预约号源',
            key: 'schedulingSourceId',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('SCHEDULING_SOURCE', params.row.schedulingSourceId)
              );
            }
          },
          {
            title: '提交用户',
            key: 'posterId'
          },
          {
            title: '支付状态',
            key: 'paymentStateTypeId'
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
                      value: 'clinic-appointment-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditClinicAppointmentForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'clinic-appointment-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteClinicAppointment(
                          params.row.clinicAppointmentId
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
        let result = await clinicAppointmentApi.queryClinicAppointment(params);
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
        clinicAppointmentId: null,
        patientId: null,
        mobileNumber: null,
        iDCardNo: null,
        realName: null,
        registrationNo: null,
        medicareHandbookCode: null,
        treatmentCardNo: null,
        doctorId: null,
        departmentId: null,
        schedulingLevelId: null,
        schedulingSpecialtyId: null,
        schedulingClinicId: null,
        schedulingPropertyId: null,
        schedulingPlanId: null,
        dailySchedulingId: null,
        schedulingDate: null,
        dayOfWeekId: null,
        timeOfDayId: null,
        appointOrderNo: null,
        appointStateId: null,
        isSendSM: null,
        isSendEmail: null,
        isInvalid: null,
        lastInvalidDate: null,
        invaliderId: null,
        appointInvalidTypeID: null,
        isReferral: null,
        appointWayId: null,
        schedulingSourceId: null,
        registeredDate: null,
        posterId: null,
        dailySchedulingNumberId: null,
        schedulingLevelCode: null,
        diseaseId: null,
        doctorName: null,
        departmentName: null,
        schedulingLevelName: null,
        schedulingSpecialtyName: null,
        thirdPartyCode: null,
        timeOfDayName: null,
        time: null,
        oPDepartmentId: null,
        oPDoctorId: null,
        schedulingTypeId: null,
        schedulingAppointmentCancelTypeId: null,
        clinicSchedulingId: null,
        clinicSchedulingNumberId: null,
        appointCancelTypeId: null,
        appointInsuredCardTypeId: null,
        paymentMethodTypeId: null,
        orderId: null,
        isMustPayment: null,
        clinicRecordId: null,
        schedulingAppointmentTypeId: null,
        appointmentPosterId: null,
        patientTypeId: null,
        documentTypeId: null,
        otherCardNo: null,
        clinicChatTypeId: null,
        clinicFunctionalTypeId: null,
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
    async deleteClinicAppointment (clinicAppointmentId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await clinicAppointmentApi.deleteClinicAppointment(
          clinicAppointmentId
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
      await clinicAppointmentApi.batchDeleteClinicAppointment(
        this.mainTableSelectArray.map((e) => e.clinicAppointmentId)
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
        await clinicAppointmentApi.exportAll(params);
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
        await clinicAppointmentApi.batchExport(
          this.mainTableSelectArray.map((e) => e.clinicAppointmentId)
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
    showAddClinicAppointmentForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditClinicAppointmentForm (updateObject) {
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
