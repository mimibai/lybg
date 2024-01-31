<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
         <Col span="8">
          <span>执业医院 :</span>
           <Select v-model="queryForm.opDepartmentId" style="width: 180px">
             <Option value>不限</Option>
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in applyHospitalLIst"
                >{{ item.label }}</Option
              >
            </Select>
        </Col>
        <Col span="8">
          <span>姓名 :</span>
          <Input
            placeholder="请输入姓名"
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

      <Row type="flex" justify="center">
        <ButtonGroup>
          <Button
            @click="queryList"
            icon="ios-search"
            type="primary"
            v-privilege="'doctor-apply-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'doctor-apply-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <!-- <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'doctor-apply-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button> -->
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddDoctorApplyForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'doctor-apply-list-add'"
          >新建数据
        </Button>
        <!-- <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'doctor-apply-list-batch-delete'"
          >批量删除
        </Button> -->

        <!-- <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'doctor-apply-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'doctor-apply-list-batch-export'"
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
                :key="item.doctorApplyId"
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
      <DoctorApplyListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->

    <!-------审核 begin------->
    <Modal
      :footer-hide="true"
      :title="verifyModal.isUpdate ? '更新' : '新建'"
      v-model="verifyModal.show"
      @on-cancel="verifyFormClose"
      width="60%"
    >
      <DoctorApplyListVerify
        :isUpdate="verifyModal.isUpdate"
        :updateData="verifyModal.updateData"
        @on-form-close="verifyFormClose"
      />
    </Modal>
    <!-------审核 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { doctorApplyApi } from '@/api/medicalconsortiums/doctor-apply';
import DoctorApplyListForm from './components/doctor-apply-list-form';
import DoctorApplyListVerify from './components/doctor-apply-list-verify';
import { referralApplicationApi } from '@/api/medicalconsortiums/referral-application';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'DoctorApplyList',
  components: {
    DoctorApplyListForm,
    DoctorApplyListVerify
  },
  props: {},
  data () {
    return {
      applyHospitalLIst: [], // 执业医院

      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null
      },
      /* -------------------------审核 ------------------------- */
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
        // 主键Id
        doctorApplyId: null,
        // 注册账号
        userName: '',
        // 姓名
        name: '',
        // 身份证号
        idCardNo: '',
        // 联系电话
        phoneNumber: '',
        // 执业医院
        opDepartmentId: null,
        // 科室
        dadepartment: '',
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
          //   key: "doctorApplyId",
          //   sortable: "custom",
          // },
          {
            title: '注册账号',
            key: 'userName'
            // sortable: "custom",
          },
          // {
          //   title: "密码",
          //   key: "password",
          //   sortable: "custom",
          // },
          {
            title: '姓名',
            key: 'name'
            // sortable: "custom",
          },
          {
            title: '身份证号',
            key: 'idCardNo'
            // sortable: "custom",
          },
          {
            title: '联系电话',
            key: 'phoneNumber'
            // sortable: "custom",
          },
          // {
          //   title: "身份证正面图片",
          //   key: "idCardFront",
          //   sortable: "custom",
          // },
          // {
          //   title: "身份证反面图片",
          //   key: "idCardNegativeSide",
          //   sortable: "custom",
          // },
          {
            title: '执业医院',
            key: 'opDepartmentName'
            // sortable: "custom",
          },
          {
            title: '科室',
            key: 'dadepartment'
            // sortable: "custom",
          },
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
              let actions = [
                {
                  title: '编辑',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'doctor-apply-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditDoctorApplyForm(params.row);
                  }
                }
              ];
              if (params.row.verifyStatus == 1) {
                actions.push({
                  title: '审核',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'doctor-apply-list-verify'
                    }
                  ],
                  action: () => {
                    this.showDoctorApplyVerify(params.row);
                  }
                });
              }
              actions.push({
                title: '删除',
                directives: [
                  {
                    name: 'privilege',
                    value: 'doctor-apply-list-delete'
                  }
                ],
                action: () => {
                  this.$Modal.confirm({
                    title: '友情提醒',
                    content: '确定要删除吗？',
                    onOk: () => {
                      this.deleteDoctorApply(params.row.doctorApplyId);
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
  computed: {},
  watch: {},
  filters: {},
  created () {
    this.initApplyHospital();
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
        let result = await doctorApplyApi.queryDoctorApply(params);
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
        doctorApplyId: null,
        userName: null,
        name: null,
        idCardNo: null,
        phoneNumber: null,
        opDepartmentId: null,
        dadepartment: null,
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
    async deleteDoctorApply (doctorApplyId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await doctorApplyApi.deleteDoctorApply(doctorApplyId);
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
      await doctorApplyApi.batchDeleteDoctorApply(
        this.mainTableSelectArray.map((e) => e.doctorApplyId)
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
        await doctorApplyApi.exportAll(params);
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
        await doctorApplyApi.batchExport(
          this.mainTableSelectArray.map((e) => e.doctorApplyId)
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
    showAddDoctorApplyForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditDoctorApplyForm (updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    showDoctorApplyVerify (updateObject) {
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
    }
  }
};
</script>
