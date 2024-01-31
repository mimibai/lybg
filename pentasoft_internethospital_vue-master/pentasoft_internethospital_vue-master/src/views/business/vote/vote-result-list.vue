<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row class="smart-query-form-row">
        <span>
          所在投票 :
          <Select style="width: 200px" v-model="queryForm.voteId">
            <Option
              :value="item.value"
              v-for="item in voteListData"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </span>
        <span>
          投票日期 :
          <DatePicker
            placeholder="选择投票日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.voteDateRange"
          ></DatePicker>
        </span>
        <span>
          是否已核验:
          <Select
            placeholder="请选择"
            style="width: 200px"
            v-model="queryForm.isVerification"
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
            v-privilege="'voteresult-list-query'"
            >查询</Button
          >
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'voteresult-list-query'"
            >重置</Button
          >
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'voteresult-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}</Button
        >
      </Row>
      <!------ 查询条件第一行 begin------->

      <!------ 查询条件第二行 begin------->
      <Row class="smart-query-form-row" v-show="showMoreQueryConditionFlag">
        <span>
          创建时间:
          <DatePicker
            placeholder="选择创建日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.createTimeRange"
          ></DatePicker>
        </span>
        <span>
          更新时间:
          <DatePicker
            placeholder="选择更新日期范围"
            split-panels="split-panels"
            style="width: 200px"
            type="daterange"
            v-model="queryForm.updateTimeRange"
          ></DatePicker>
        </span>
      </Row>
      <!------ 查询条件第二行 end------->
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'voteresult-list-export-all'"
          >导出全部</Button
        >

        <!-- <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'voteresult-list-batch-export'"
          >批量导出</Button
        > -->
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
    <!-------添加、更新 Form表单 begin------->
    <Modal
      :footer-hide="true"
      :title="'详情'"
      v-model="saveModal.show"
      @on-cancel="saveFormClose"
      width="60%"
    >
      <VoteResultDetail ref="voteResultDetail" />
    </Modal>
    <!-------添加、更新 Form表单 end------->
  </div>
</template>

<script>
import { dateTimeRangeConvert } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { voteApi } from '@/api/vote/vote';
import { voteResultApi } from '@/api/vote/vote-result';
import { YES_OR_NO } from '@/constants/common';
import VoteResultDetail from './components/vote-result-list-form';
const PAGE_SIZE_INIT = 20;
export default {
  name: 'VoteResultList',
  components: {
    VoteResultDetail
  },
  props: {},
  data () {
    return {
      voteListData: [],
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null,
        detail: null
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
        // 投票Id
        voteId: null,
        // 投票人Id
        voterId: null,
        // IP
        iP: null,
        // 投票日期
        voteDate: null,
        // 是否已核验   正常问卷是用不到此字段的，仅对于需要特殊逐个确认的调查表提交信息，才有意义
        isVerification: null,
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        // 投票日期范围
        voteDateRange: ['', ''],
        voteModeTypeId: 1,
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
            title: '投票日期',
            key: 'voteDate',
            tableColumn: 'ybj_voteresults.VoteDate',
            sortable: 'custom'
          },
          {
            title: 'IP',
            key: 'ip',
            tableColumn: 'ybj_voteresults.IP',
            sortable: 'custom'
          },
          {
            title: '投票人姓名',
            key: 'voterName',
            tableColumn: 'ybj_voteresults.VoterName',
            sortable: 'custom'
          },
          {
            title: '分值',
            key: 'score',
            tableColumn: 'ybj_voteresults.Score',
            sortable: 'custom'
          },
          {
            title: '微信用户',
            key: 'weiXinUserId',
            tableColumn: 'ybj_voteresults.WeiXinUserId',
            sortable: 'custom'
          },
          {
            title: '是否已核验',
            key: 'isVerification',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isVerification
                )
              );
            }
          },
          {
            title: '操作',
            key: 'action',
            align: 'right',
            width: 130,
            className: 'action-hide',
            render: (h, params) => {
              // console.info("操作渲染")
              // console.info(params)
              let actions = [
                {
                  title: '详情',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'vote-result-list-detail'
                    }
                  ],
                  action: () => {
                    this.showDetailVoteResult(params.row.voteResultId);
                  }
                },
                {
                  title: '核验',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'vote-result-list-verification'
                    }
                  ],
                  action: () => {
                    this.showEditVoteresultForm(params.row);
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
  watch: {
    '$route.name': function (newVal) {
      if (newVal) {
        if (newVal == 'VoteFlowResultList') {
          this.queryForm.voteModeTypeId = 4;
        } else if (newVal == 'VoteResultList') {
          this.queryForm.voteModeTypeId = 2;
        }
      }
    }
  },
  filters: {},
  created () {
    if (this.$route.name == 'VoteFlowResultList') {
      this.queryForm.voteModeTypeId = 4;
    } else if (this.$route.name == 'VoteResultList') {
      this.queryForm.voteModeTypeId = 2;
    }
    this.initVoteList();
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
    // 查询
    async initVoteList () {
      try {
        let params = {
          pageNum: 1
        };
        let result = await voteApi.queryVote(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.voteId,
            label: item.name
          });
        });
        this.voteListData = list;
      } finally {
      }
    },
    /* -------------------------查询相关 begin------------------------- */
    convertQueryParam () {
      if (this.$route.name == 'VoteFlowResultList') {
        this.queryForm.voteModeTypeId = 4;
      } else if (this.$route.name == 'VoteResultList') {
        this.queryForm.voteModeTypeId = 2;
      }
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
        let result = await voteResultApi.queryVoteResult(params);
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
        // 投票Id
        voteId: null,
        // 投票人Id
        voterId: null,
        // IP
        iP: null,
        // 投票日期
        voteDate: null,
        // 是否已核验   正常问卷是用不到此字段的，仅对于需要特殊逐个确认的调查表提交信息，才有意义
        isVerification: null,
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        // 投票日期范围
        voteDateRange: ['', ''],
        voteModeTypeId: 2,
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
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
    /* -------------------------查询相关 end------------------------- */

    /* -------------------------导入导出 begin------------------------- */
    // 导出全部
    async exportAll () {
      try {
        this.allExportBtnLoading = true;
        let params = this.convertQueryParam();
        if (params.voteId) {
          await voteResultApi.exportAll(params);
        } else {
          this.$Message.error('请选择所在投票');
          return;
        }
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
        await voteResultApi.batchExport(
          this.mainTableSelectArray.map((e) => e.voteResultId)
        );
      } catch (e) {
        console.log(e);
      } finally {
        this.batchExportBtnLoading = false;
      }
    },
    /* -------------------------导入导出 end------------------------- */

    /* -------------------------添加，修改 表单 begin------------------------- */
    // 显示详情表单
    async showDetailVoteResult (voteResultId) {
      try {
        // console.info("点击详情");
        // console.info(voteResultId);
        let result = await voteResultApi.getVoteSerilizeResult(voteResultId);
        // console.info(result);
        if (
          result.data.resultContent != null && result.data.resultContent != ''
        ) {
          result.data.resultContent = JSON.parse(result.data.resultContent);
          // console.info(this.$refs)
        }
        if (result.code == '101') {
          this.$refs['voteResultDetail'].showModal(result.data);
        } else {
        }
      } finally {
      }
    },
    // 显示添加表单
    showAddVoteresultForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditVoteresultForm (updateObject) {
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
