<template>
  <div>
    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddAppPageModuleForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'app-page-module-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'app-page-module-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'app-page-module-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'app-page-module-list-batch-export'"
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
                :key="item.appPageModuleId"
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
      <AppPageModuleListForm
        :appPageId="appPageModel.appPageId"
        :appPageModuleId="appPageModel.appPageModuleId"
        :appPageModuleTypeId="appPageModel.appPageModuleTypeId"
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert, getStepNodeName } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { appPageModuleApi } from '@/api/app/app-page-module';
import AppPageModuleListForm from './components/app-page-module-list-form';
import { enumApi } from '@/api/enum.js';
import AppPageModuleDataList from '../app-page-module-data/app-page-module-data-list';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'AppPageModuleList',
  components: {
    AppPageModuleDataList,
    AppPageModuleListForm
  },
  props: {
    appPageData: {
      type: Object
    }
  },
  data () {
    return {
      appPageModel: this.appPageData,
      appPageModuleTypeList: [],
      appPageModuleDataTypeList: [],
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
        // AppPageModuleId
        appPageModuleId: null,
        // AppPageId
        appPageId: this.appPageId,
        // PageModuleTypeId
        pageModuleTypeId: null,
        // AppPageModuleStyleId
        appPageModuleStyleId: null,
        // Title
        title: '',
        // Subtitle
        subtitle: '',
        // ClickTypeId
        clickTypeId: null,
        // ShowTypeId
        showTypeId: null,
        // IsShowTitle
        isShowTitle: null,
        // ShowTitleTypeId
        showTitleTypeId: null,
        // SearchTypeId
        searchTypeId: '',
        // SearchName
        searchName: '',
        // IsShowHotSearch
        isShowHotSearch: '',
        // IsShowSearchFilter
        isShowSearchFilter: '',
        // DataTypeId
        dataTypeId: null,
        // IsDelete
        isDelete: null,
        // BranchIndex
        branchIndex: null,
        // Depth
        depth: null,
        // SortIndex
        sortIndex: null,
        // ObjectIds
        objectIds: '',
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
              return h(AppPageModuleDataList, {
                props: {
                  appPageModelData: this.appPageModel,
                  appPageModuleModelData: params.row
                }
              });
            }
          },
          {
            title: '模块类型',
            key: 'pageModuleTypeId',
            render: (h, params) => {
              return h(
                'span',
                getStepNodeName(
                  this.getPageModuleType(params.row),
                  params.row.depth
                )
              );
            }
          },
          {
            title: '显示类型',
            key: 'showTypeId',
            sortable: 'custom'
          },

          {
            title: '数据类型',
            key: 'dataTypeId',
            render: (h, params) => {
              return h(
                'span',
                this.appPageModuleDataTypeList
                  .filter((item) => item.id === params.row.dataTypeId)
                  .map((o) => o.name)
                  .join('')
              );
            }
          },
          {
            title: '模块高度',
            key: 'height'
          },
          {
            title: '是否显示头部',
            key: 'isShowHeader',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isShowHeader)
              );
            }
          },
          {
            title: '是否读取子项',
            key: 'isChild',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isChild)
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
            title: '操作',
            key: 'action',
            align: 'right',
            width: 150,
            className: 'action-hide',
            render: (h, params) => {
              let actions = [
                {
                  title: "上移",
                  directives: [
                    {
                      name: "privilege",
                      value: "app-page-module-list-move",
                    },
                  ],
                  action: () => {
                    this.moveAppPageModule(params.row.appPageModuleId, "up");
                  },
                },
                {
                  title: "下移",
                  directives: [
                    {
                      name: "privilege",
                      value: "app-page-module-list-move",
                    },
                  ],
                  action: () => {
                    this.moveAppPageModule(
                      params.row.appPageModuleId,
                      "down"
                    );
                  },
                },
                {
                  title: '编辑',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'app-page-module-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditAppPageModuleForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'app-page-module-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteAppPageModule(params.row.appPageModuleId);
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
    this.getEnumType();
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
    async getEnumType () {
      try {
        let params = 'AppletPageModuleTypeEnum%2CAppletModuleDataTypeEnum';

        let result = await enumApi.getBatchEnumByCodes(params);
        this.appPageModuleTypeList = result.data.AppletPageModuleTypeEnum;
        this.appPageModuleDataTypeList = result.data.AppletModuleDataTypeEnum;
      } finally {
      }
    },
    getPageModuleType (item) {
      let tmpEnum = this.appPageModuleTypeList
        .filter((p) => {
          if (p.id === item.pageModuleTypeId) {
            return p;
          }
        })
        .map((o) => o.name)
        .join();
      return tmpEnum;
    },
    /* -------------------------查询相关 begin------------------------- */
    convertQueryParam () {
      let createTimeArray = dateTimeRangeConvert(
        this.queryForm.createTimeRange
      );
      let updateTimeArray = dateTimeRangeConvert(
        this.queryForm.updateTimeRange
      );
      if (this.appPageModel.appPageId) {
        this.queryForm.appPageId = this.appPageModel.appPageId;
      }
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
      this.mainTable.data = [];
      try {
        let params = this.convertQueryParam();
        let result = await appPageModuleApi.queryAppPageModule(params);
        result.data.list.forEach((item) => {
          item._disableExpand = !(
            item.dataTypeId === 7 || item.dataTypeId === 8
          );
        });
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
        appPageModuleId: null,
        appPageId: null,
        pageModuleTypeId: null,
        appPageModuleStyleId: null,
        title: null,
        subtitle: null,
        clickTypeId: null,
        showTypeId: null,
        isShowTitle: null,
        showTitleTypeId: null,
        searchTypeId: null,
        searchName: null,
        isShowHotSearch: null,
        isShowSearchFilter: null,
        dataTypeId: null,
        isDelete: null,
        depth: null,
        branchIndex: null,
        sortIndex: null,
        objectIds: null,
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
    async deleteAppPageModule (appPageModuleId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await appPageModuleApi.deleteAppPageModule(
          appPageModuleId
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
      await appPageModuleApi.batchDeleteAppPageModule(
        this.mainTableSelectArray.map((e) => e.appPageModuleId)
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
        await appPageModuleApi.exportAll(params);
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
        await appPageModuleApi.batchExport(
          this.mainTableSelectArray.map((e) => e.appPageModuleId)
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
    showAddAppPageModuleForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditAppPageModuleForm (updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose () {
      this.saveModal.show = false;
      this.queryList();
    },
    /* -------------------------添加，修改 表单 end------------------------- */
    /*-------------------------节点移动 begin------------------------- */
    async moveAppPageModule(appPageModuleId, direction) {
      try {
        this.isShowMoveLoading = true;
        let result = await appPageModuleApi.moveAppPageModule(
          appPageModuleId,
          direction
        );
        this.isShowMoveLoading = false;
        this.$Message.success("操作成功");
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        //TODO zhuoda sentry
        console.error(e);
        this.isShowMoveLoading = false;
      }
    },
    /*-------------------------节点移动 begin------------------------- */
  }
};
</script>
