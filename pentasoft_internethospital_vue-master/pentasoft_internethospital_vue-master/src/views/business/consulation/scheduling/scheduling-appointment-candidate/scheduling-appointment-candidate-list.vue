<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>手机号码 :</span>
          <Input
            placeholder="请输入手机号码"
            style="width: 180px"
            v-model="queryForm.mobileNumber"
          />
        </Col>
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
          <span>患者Id :</span>
          <Input
            placeholder="请输入患者Id"
            style="width: 180px"
            v-model="queryForm.patientId"
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
          <span>时段 枚举：1=上午，2=下午，3=夜间 :</span>
          <Input
            placeholder="请输入时段  枚举：1=上午，2=下午，3=夜间"
            style="width: 180px"
            v-model="queryForm.timeOfDayId"
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
          <span>出诊类型 :</span>
          <Input
            placeholder="请输入出诊类型"
            style="width: 180px"
            v-model="queryForm.schedulingTypeId"
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
          <span>排班计划Id :</span>
          <Input
            placeholder="请输入排班计划Id"
            style="width: 180px"
            v-model="queryForm.schedulingPlanId"
          />
        </Col>
        <Col span="8">
          <span>挂号价目 :</span>
          <Input
            placeholder="请输入挂号价目"
            style="width: 180px"
            v-model="queryForm.price"
          />
        </Col>
        <Col span="8">
          <span
            >候补状态 枚举
            候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期 :</span
          >
          <Input
            placeholder="请输入候补状态   枚举 候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期"
            style="width: 180px"
            v-model="queryForm.candidateStateId"
          />
        </Col>
        <Col span="8">
          <span
            >预约途径 枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS) :</span
          >
          <Input
            placeholder="请输入预约途径   枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS)"
            style="width: 180px"
            v-model="queryForm.appointWayId"
          />
        </Col>
        <Col span="8">
          <span>预约号源 枚举 ：1普通预约，2绿色通道，3申请通道 :</span>
          <Input
            placeholder="请输入预约号源   枚举 ：1普通预约，2绿色通道，3申请通道"
            style="width: 180px"
            v-model="queryForm.schedulingSourceId"
          />
        </Col>
        <Col span="8">
          <span>是否作废 :</span>
          <Input
            placeholder="请输入是否作废"
            style="width: 180px"
            v-model="queryForm.isInvalid"
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
          <span>是否为复诊病人的预约 :</span>
          <Input
            placeholder="请输入是否为复诊病人的预约"
            style="width: 180px"
            v-model="queryForm.isReferral"
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
          <span>号源明细主键 :</span>
          <Input
            placeholder="请输入号源明细主键"
            style="width: 180px"
            v-model="queryForm.dailySchedulingNumberId"
          />
        </Col>
        <Col span="8">
          <span
            >取消原因
            枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
            :</span
          >
          <Input
            placeholder="请输入取消原因   枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）"
            style="width: 180px"
            v-model="queryForm.schedulingAppointmentCancelTypeId"
          />
        </Col>
        <Col span="8">
          <span>调用挂号接口次数 :</span>
          <Input
            placeholder="请输入调用挂号接口次数"
            style="width: 180px"
            v-model="queryForm.registerCount_Interface"
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
          <span>时段 :</span>
          <Input
            placeholder="请输入时段"
            style="width: 180px"
            v-model="queryForm.timeOfDayName"
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
          <span>每日门诊排班Id :</span>
          <Input
            placeholder="请输入每日门诊排班Id"
            style="width: 180px"
            v-model="queryForm.oPDailySchedulingId"
          />
        </Col>
        <Col span="8">
          <span>取消方式 枚举 1、患者取消 2、管理员手动取消 3、自动取消 :</span>
          <Input
            placeholder="请输入取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消"
            style="width: 180px"
            v-model="queryForm.appointCancelTypeId"
          />
        </Col>
        <Col span="8">
          <span>门诊号源明细主键Id :</span>
          <Input
            placeholder="请输入门诊号源明细主键Id"
            style="width: 180px"
            v-model="queryForm.oPDailySchedulingNumberId"
          />
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
          <span>主键Id :</span>
          <Input
            placeholder="请输入主键Id"
            style="width: 180px"
            v-model="queryForm.schedulingAppointmentCandidateId"
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
          <span>第三方预约参数 :</span>
          <Input
            placeholder="请输入第三方预约参数"
            style="width: 180px"
            v-model="queryForm.thirdPartyParameters"
          />
        </Col>
        <Col span="8">
          <span>第三方编码 :</span>
          <Input
            placeholder="请输入第三方编码"
            style="width: 180px"
            v-model="queryForm.thirdPartyCode1"
          />
        </Col>
        <Col span="8">
          <span>微信支付订单号 :</span>
          <Input
            placeholder="请输入微信支付订单号"
            style="width: 180px"
            v-model="queryForm.payOrderStreamNo_WeiXin"
          />
        </Col>
        <Col span="8">
          <span>微信支付链接 :</span>
          <Input
            placeholder="请输入微信支付链接"
            style="width: 180px"
            v-model="queryForm.payQRCodeUrl_WeiXin"
          />
        </Col>
        <Col span="8">
          <span>微信支付二维码 :</span>
          <Input
            placeholder="请输入微信支付二维码"
            style="width: 180px"
            v-model="queryForm.payQRCodePath_WeiXin"
          />
        </Col>
        <Col span="8">
          <span>支付宝支付订单号 :</span>
          <Input
            placeholder="请输入支付宝支付订单号"
            style="width: 180px"
            v-model="queryForm.payOrderStreamNo_Ali"
          />
        </Col>
        <Col span="8">
          <span>支付宝支付链接 :</span>
          <Input
            placeholder="请输入支付宝支付链接"
            style="width: 180px"
            v-model="queryForm.payQRCodeUrl_Ali"
          />
        </Col>
        <Col span="8">
          <span>支付宝支付二维码 :</span>
          <Input
            placeholder="请输入支付宝支付二维码"
            style="width: 180px"
            v-model="queryForm.payQRCodePath_Ali"
          />
        </Col>
        <Col span="8">
          <span>支付状态 :</span>
          <Input
            placeholder="请输入支付状态"
            style="width: 180px"
            v-model="queryForm.paymentStateTypeId"
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
          <Input
            placeholder="请输入是否必须支付"
            style="width: 180px"
            v-model="queryForm.isMustPayment"
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
            v-privilege="'scheduling-appointment-candidate-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'scheduling-appointment-candidate-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'scheduling-appointment-candidate-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddSchedulingAppointmentCandidateForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'scheduling-appointment-candidate-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'scheduling-appointment-candidate-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'scheduling-appointment-candidate-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'scheduling-appointment-candidate-list-batch-export'"
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
                :key="item.schedulingAppointmentCandidateId"
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
      <SchedulingAppointmentCandidateListForm
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
import { schedulingAppointmentCandidateApi } from '@/api/scheduling/scheduling-appointment-candidate';
import SchedulingAppointmentCandidateListForm from './components/scheduling-appointment-candidate-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'SchedulingAppointmentCandidateList',
  components: {
    SchedulingAppointmentCandidateListForm
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
      isShowdeleteLoading: false,
      /* -------------------------查询条件相关数据-------------------- */
      // 搜索表单
      queryForm: {
        // 手机号码
        mobileNumber: null,
        // 身份证号码
        iDCardNo: null,
        // 真实姓名
        realName: null,
        // 患者Id
        patientId: null,
        // 星期
        dayOfWeekId: null,
        // 时段  枚举：1=上午，2=下午，3=夜间
        timeOfDayId: null,
        // 门诊医生Id
        doctorId: null,
        // 出诊类型
        schedulingTypeId: null,
        // 门诊排班级别Id
        schedulingLevelId: null,
        // 门诊专业Id
        schedulingSpecialtyId: null,
        // 门诊诊室Id
        schedulingClinicId: null,
        // 排班计划Id
        schedulingPlanId: null,
        // 挂号价目
        price: null,
        // 候补状态   枚举 候补状态ID：1候补排队中，2候补成功，3候补失败，4候补过期
        candidateStateId: null,
        // 预约途径   枚举：1网上预约，2电话语音(IVR)，3手机短信(SMS)
        appointWayId: null,
        // 预约号源   枚举 ：1普通预约，2绿色通道，3申请通道
        schedulingSourceId: null,
        // 是否作废
        isInvalid: null,
        // 相关疾病
        diseaseId: null,
        // 是否为复诊病人的预约
        isReferral: null,
        // 科室Id
        departmentId: null,
        // 门诊科室ID
        oPDepartmentId: null,
        // 门诊医生ID
        oPDoctorId: null,
        // 号源明细主键
        dailySchedulingNumberId: null,
        // 取消原因   枚举表：不想就诊（1）、其他时间已就诊（2）、时间变动（3）、误操作（4）、其他（99）
        schedulingAppointmentCancelTypeId: null,
        // 调用挂号接口次数
        registerCount_Interface: null,
        // 门诊医生姓名
        doctorName: null,
        // 科室
        departmentName: null,
        // 门诊排班级别
        schedulingLevelName: null,
        // 时段
        timeOfDayName: null,
        // 第三方编码
        thirdPartyCode: null,
        // 每日门诊排班Id
        oPDailySchedulingId: null,
        // 取消方式   枚举 1、患者取消 2、管理员手动取消 3、自动取消
        appointCancelTypeId: null,
        // 门诊号源明细主键Id
        oPDailySchedulingNumberId: null,
        // 提交人
        posterId: null,
        // 主键Id
        schedulingAppointmentCandidateId: null,
        // 参保卡类别
        appointInsuredCardTypeId: null,
        // 支付方式
        paymentMethodTypeId: null,
        // 第三方预约参数
        thirdPartyParameters: null,
        // 第三方编码
        thirdPartyCode1: null,
        // 微信支付订单号
        payOrderStreamNo_WeiXin: null,
        // 微信支付链接
        payQRCodeUrl_WeiXin: null,
        // 微信支付二维码
        payQRCodePath_WeiXin: null,
        // 支付宝支付订单号
        payOrderStreamNo_Ali: null,
        // 支付宝支付链接
        payQRCodeUrl_Ali: null,
        // 支付宝支付二维码
        payQRCodePath_Ali: null,
        // 支付状态
        paymentStateTypeId: null,
        // 订单ID
        orderId: null,
        // 是否必须支付
        isMustPayment: null,
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
            key: 'realName'
          },
          {
            title: '手机号',
            key: 'mobileNumber'
          },
          {
            title: '身份证',
            key: 'iDCardNo'
          },
          {
            title: '就诊卡号',
            key: 'treatmentCardNo'
          },
          {
            title: '医生姓名',
            key: 'doctorName'
          },
          {
            title: '科室名称',
            key: 'departmentName'
          },
          {
            title: '排班日期',
            key: 'schedulingDate'
          },
          {
            title: '挂号价目',
            key: 'price'
          },
          {
            title: '候补状态',
            key: 'candidateStateId'
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
            title: '预约途径',
            key: 'appointWayId',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'APPOINT_WAY',
                  params.row.appointWayId
                )
              );
            }
          },
          {
            title: '预约号源',
            key: 'schedulingSourceId',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'SCHEDULING_SOURCE',
                  params.row.schedulingSourceId
                )
              );
            }
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
                      value: 'scheduling-appointment-candidate-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditSchedulingAppointmentCandidateForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'scheduling-appointment-candidate-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteSchedulingAppointmentCandidate(
                          params.row.schedulingAppointmentCandidateId
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
        let result =
          await schedulingAppointmentCandidateApi.querySchedulingAppointmentCandidate(
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
        candidateStateId: null,
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
        schedulingAppointmentCandidateId: null,
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
    async deleteSchedulingAppointmentCandidate (
      schedulingAppointmentCandidateId
    ) {
      try {
        this.isShowdeleteLoading = true;
        let result =
          await schedulingAppointmentCandidateApi.deleteSchedulingAppointmentCandidate(
            schedulingAppointmentCandidateId
          );
        this.isShowdeleteLoading = false;
        this.$Message.success('删除成功');
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        // TODO zhuoda sentry
        console.error(e);
        this.isShowdeleteLoading = false;
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
      await schedulingAppointmentCandidateApi.batchDeleteSchedulingAppointmentCandidate(
        this.mainTableSelectArray.map((e) => e.schedulingAppointmentCandidateId)
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
        await schedulingAppointmentCandidateApi.exportAll(params);
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
        await schedulingAppointmentCandidateApi.batchExport(
          this.mainTableSelectArray.map(
            (e) => e.schedulingAppointmentCandidateId
          )
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
    showAddSchedulingAppointmentCandidateForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditSchedulingAppointmentCandidateForm (updateObject) {
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
