<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>表单名称 :</span>
          <Input
            placeholder="请输入表单名称"
            style="width: 180px"
            v-model="queryForm.schedulingFormName"
          />
        </Col>
        <Col span="8">
          <span>显示的Id集合 :</span>
          <Input
            placeholder="请输入显示的Id集合"
            style="width: 180px"
            v-model="queryForm.showWeekIds"
          />
        </Col>
        <Col span="8">
          <span>周六是否显示下周 :</span>
          <Input
            placeholder="请输入周六是否显示下周"
            style="width: 180px"
            v-model="queryForm.isShowNextWeekWhenSat"
          />
        </Col>
        <Col span="8">
          <span>周日是否显示下周 :</span>
          <Input
            placeholder="请输入周日是否显示下周"
            style="width: 180px"
            v-model="queryForm.isShowNextWeekWhenSun"
          />
        </Col>
        <Col span="8">
          <span>是否显示切换按钮 :</span>
          <Input
            placeholder="请输入是否显示切换按钮"
            style="width: 180px"
            v-model="queryForm.isShowChangeButton"
          />
        </Col>
        <Col span="8">
          <span>向前几周 :</span>
          <Input
            placeholder="请输入向前几周"
            style="width: 180px"
            v-model="queryForm.beforeWeeks"
          />
        </Col>
        <Col span="8">
          <span>向后几周 :</span>
          <Input
            placeholder="请输入向后几周"
            style="width: 180px"
            v-model="queryForm.afterWeeks"
          />
        </Col>
        <Col span="8">
          <span>是否删除 :</span>
          <Input
            placeholder="请输入是否删除"
            style="width: 180px"
            v-model="queryForm.isDelete"
          />
        </Col>
        <Col span="8">
          <span>是否默认 :</span>
          <Input
            placeholder="请输入是否默认"
            style="width: 180px"
            v-model="queryForm.isDefault"
          />
        </Col>
        <Col span="8">
          <span>排序字段 :</span>
          <Input
            placeholder="请输入排序字段"
            style="width: 180px"
            v-model="queryForm.sorting"
          />
        </Col>
        <Col span="8">
          <span>显示的方式Id :</span>
          <Input
            placeholder="请输入显示的方式Id"
            style="width: 180px"
            v-model="queryForm.schedulingFormShowTypeId"
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
            v-privilege="'scheduling-form-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'scheduling-form-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'scheduling-form-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddSchedulingFormForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'scheduling-form-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'scheduling-form-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'scheduling-form-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'scheduling-form-list-batch-export'"
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
                :key="item.schedulingFormId"
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
      <SchedulingFormListForm
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
import { schedulingFormApi } from '@/api/scheduling/scheduling-form';
import SchedulingFormListForm from './components/scheduling-form-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'SchedulingFormList',
  components: {
    SchedulingFormListForm
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
        // 表单名称
        schedulingFormName: null,
        // 显示的Id集合
        showWeekIds: null,
        // 周六是否显示下周
        isShowNextWeekWhenSat: null,
        // 周日是否显示下周
        isShowNextWeekWhenSun: null,
        // 是否显示切换按钮
        isShowChangeButton: null,
        // 向前几周
        beforeWeeks: null,
        // 向后几周
        afterWeeks: null,
        // 是否删除
        isDelete: null,
        // 是否默认
        isDefault: null,
        // 排序字段
        sorting: null,
        // 显示的方式Id
        schedulingFormShowTypeId: null,
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
            title: '表单名称',
            key: 'schedulingFormName'
          },
          {
            title: '周六是否显示下周',
            key: 'isShowNextWeekWhenSat',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isShowNextWeekWhenSat
                )
              );
            }
          },
          {
            title: '周日是否显示下周',
            key: 'isShowNextWeekWhenSun',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isShowNextWeekWhenSun
                )
              );
            }
          },
          {
            title: '是否显示切换按钮',
            key: 'isShowChangeButton',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isShowChangeButton
                )
              );
            }
          },
          {
            title: '向前几周',
            key: 'beforeWeeks'
          },
          {
            title: '向后几周',
            key: 'afterWeeks'
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
            title: '是否默认',
            key: 'isDefault',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isDefault)
              );
            }
          },
          {
            title: '显示的方式Id',
            key: 'schedulingFormShowTypeId'
          },
          {
            title: '创建时间',
            key: 'dateCreated'
          },
          {
            title: '更新时间',
            key: 'dateModified'
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
                      value: 'scheduling-form-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditSchedulingFormForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'scheduling-form-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteSchedulingForm(params.row.schedulingFormId);
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
        let result = await schedulingFormApi.querySchedulingForm(params);
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
        schedulingFormName: null,
        showWeekIds: null,
        isShowNextWeekWhenSat: null,
        isShowNextWeekWhenSun: null,
        isShowChangeButton: null,
        beforeWeeks: null,
        afterWeeks: null,
        isDelete: null,
        isDefault: null,
        sorting: null,
        schedulingFormShowTypeId: null,
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
    async deleteSchedulingForm (schedulingFormId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await schedulingFormApi.deleteSchedulingForm(
          schedulingFormId
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
      await schedulingFormApi.batchDeleteSchedulingForm(
        this.mainTableSelectArray.map((e) => e.schedulingFormId)
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
        await schedulingFormApi.exportAll(params);
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
        await schedulingFormApi.batchExport(
          this.mainTableSelectArray.map((e) => e.schedulingFormId)
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
    showAddSchedulingFormForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditSchedulingFormForm (updateObject) {
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
