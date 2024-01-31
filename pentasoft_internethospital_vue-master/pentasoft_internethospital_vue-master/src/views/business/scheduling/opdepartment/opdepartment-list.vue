<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row class="smart-query-form-row">
        <span>
          名称 :
          <Input
            placeholder="请输入名称"
            style="width: 180px"
            v-model="queryForm.name"
          />
        </span>
        <span>
          编码 :
          <Input
            placeholder="请输入编码"
            style="width: 180px"
            v-model="queryForm.code"
          />
        </span>
        <span>
          是否开启预约 :
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.isOpenAppoint"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value ? 1 : 0"
              v-for="item in enableList"
              >{{ item.desc }}</Option
            >
          </Select>
        </span>
        <span>
          是否有出诊 :
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.isHaveScheduling"
          >
            <Option value>不限</Option>
            <Option
              :key="item.value"
              :value="item.value ? 1 : 0"
              v-for="item in enableList"
              >{{ item.desc }}</Option
            >
          </Select>
        </span>
        <ButtonGroup>
          <Button
            @click="queryList"
            icon="ios-search"
            type="primary"
            v-privilege="'o-p-department-list-query'"
            >查询</Button
          >
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'o-p-department-list-query'"
            >重置</Button
          >
        </ButtonGroup>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddOPDepartmentForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'o-p-department-list-add'"
          >新建数据</Button
        >
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'o-p-department-list-batch-delete'"
          >批量删除</Button
        >

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'o-p-department-list-export-all'"
          >导出全部</Button
        >

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'o-p-department-list-batch-export'"
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
              <li
                v-for="item in mainTableSelectArray"
                :key="item.oPDepartmentId"
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
      <OPDepartmentListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        :parentId="saveModal.parentId"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert, getStepNodeName } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { OPDepartmentApi } from '@/api/organizations/op-department';
import { departmentNodeApi } from '@/api/organizations/department-node';
import OPDepartmentListForm from './components/opdepartment-list-form';
import { YES_OR_NO } from '@/constants/common';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'OPDepartmentList',
  components: {
    OPDepartmentListForm
  },
  props: {},
  data () {
    return {
      originalData: {},
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
        // 名称
        name: null,
        // 编码
        code: null,
        // 是否开启预约
        isOpenAppoint: null,
        // 是否有出诊
        isHaveScheduling: null,
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
            title: '名称',
            key: 'name',
            tree: true,
            render: (h, params) => {
              return h(
                'span',
                getStepNodeName(params.row.name, params.row.depth)
              );
            }
          },
          {
            title: '科室代码',
            key: 'code'
          },
          {
            title: '科室名称',
            key: 'departmentName'
          },
          {
            title: '是否仅为分类',
            key: 'isClassify',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue('YES_OR_NO', params.row.isClassify)
              );
            }
          },
          {
            title: '是否排班计划分离',
            key: 'isPlanSeparate',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isPlanSeparate
                )
              );
            }
          },
          {
            title: '操作',
            key: 'action',
            align: 'right',
            width: 180,
            className: 'action-hide',
            render: (h, params) => {
              let actions = [
                {
                  title: '上移',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'opdepartment-list-move'
                    }
                  ],
                  action: () => {
                    this.moveOPDepartment(params.row.opDepartmentId, 'up');
                  }
                },
                {
                  title: '下移',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'opdepartment-list-move'
                    }
                  ],
                  action: () => {
                    this.moveOPDepartment(params.row.opDepartmentId, 'down');
                  }
                },
                {
                  title: '添加子节点',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'opdepartment-list-add'
                    }
                  ],
                  action: () => {
                    this.showAddOPDepartmentForm(params.row.opDepartmentId);
                  }
                },
                {
                  title: '编辑',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'opdepartment-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditOPDepartmentForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'opdepartment-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteOPDepartment(params.row.opDepartmentId);
                      }
                    });
                  }
                },
                {
                  title: '医生管理',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'opdoctor-list-query'
                    }
                  ],
                  action: () => {
                    this.$router.push({
                      path: '/OPDoctor/list',
                      query: { opDepartmentId: params.row.opDepartmentId }
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
  computed: {
    enableList: () => {
      let array = [];
      for (let item in YES_OR_NO) {
        let obj = {};
        obj.desc = YES_OR_NO[item].desc;
        obj.value = YES_OR_NO[item].value;
        array.push(obj);
      }
      return array;
    }
  },
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
        let result = await OPDepartmentApi.queryOPDepartment(params);
        this.originalData = result.data;
        this.mainTable.data = result.data.list;
        this.mainTablePage.total = result.data.total;
        // this.getTreeRootData()
      } finally {
        this.mainTable.loading = false;
      }
    },
    // 重置查询
    resetQueryList () {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        oPDepartmentId: null,
        name: null,
        anotherName: null,
        shortName: null,
        departmentId: null,
        code: null,
        isClassify: null,
        isMergerShowToParent: null,
        isEnable: null,
        isOpenAppoint: null,
        isHaveScheduling: null,
        isHaveAppoint: null,
        firstLetter: null,
        schedulingClinicIds: null,
        oPSchedulingSettingId: null,
        oPSchedulingRuleId: null,
        isUsedUpForDay: null,
        isShowAreaIndex: null,
        phone: null,
        isOpenClinic: null,
        isDepartment: null,
        isPlanSeparate: null,
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
      if (column.order == 'normal') {
        this.queryForm.orders = [];
      } else {
        this.queryForm.orders = [
          {
            column: column.column.tableColumn,
            asc: column.order == 'asc'
          }
        ];
      }
      this.queryList();
    },
    /* -------------------------节点移动 begin------------------------- */
    async moveOPDepartment (opDepartmentId, direction) {
      try {
        this.isShowMoveLoading = true;
        let result = await OPDepartmentApi.moveOPDepartment(
          opDepartmentId,
          direction
        );
        this.isShowMoveLoading = false;
        this.$Message.success('操作成功');
        this.$Spin.hide();
        this.queryList();
      } catch (e) {
        // TODO zhuoda sentry
        console.error(e);
        this.isShowMoveLoading = false;
      }
    },
    /* -------------------------节点移动 begin------------------------- */

    // 生成树形图数据
    // 这里处理没有children结构的数据
    getTreeRootData () {
      // 取父节点
      let parentArr = this.originalData.list.filter(
        (l) => l.parentId === null || l.parentId == 0
      );
      if (parentArr.length == 0) {
        // 非首页则取最最小深度为顶层节点
        let minDepth = Math.min.apply(
          Math,
          this.originalData.list.map((item, index) => {
            return item.depth;
          })
        );
        parentArr = this.originalData.list.filter((l) => l.depth == minDepth);
      }
      let treeRoot = this.convertToTreeData(this.originalData.list, parentArr);

      this.treeData = treeRoot;
      this.mainTable.data = treeRoot;
      this.mainTablePage.total = this.originalData.total;
    },
    convertToTreeData (list, dataArr) {
      dataArr.map((pNode, i) => {
        let childObj = [];
        list.map((cNode, j) => {
          if (pNode.opDepartmentId == cNode.parentId) {
            childObj.push(cNode);
          }
        });
        pNode.children = childObj;
        if (childObj.length > 0) {
          pNode._showChildren = true;
          this.convertToTreeData(list, childObj);
        }
      });
      return dataArr;
    },
    /* -------------------------查询相关 end------------------------- */

    /* -------------------------删除 begin------------------------- */
    // 根据ID删除
    async deleteOPDepartment (oPDepartmentId) {
      try {
        this.isShowdeleteLoading = true;
        let result = await OPDepartmentApi.deleteOPDepartment(oPDepartmentId);
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
      await OPDepartmentApi.batchDeleteOPDepartment(
        this.mainTableSelectArray.map((e) => e.opDepartmentId)
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
        await OPDepartmentApi.exportAll(params);
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
        await OPDepartmentApi.batchExport(
          this.mainTableSelectArray.map((e) => e.oPDepartmentId)
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
    showAddOPDepartmentForm (parentId) {
      this.saveModal.parentId = parentId || 0;
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditOPDepartmentForm (updateObject) {
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
