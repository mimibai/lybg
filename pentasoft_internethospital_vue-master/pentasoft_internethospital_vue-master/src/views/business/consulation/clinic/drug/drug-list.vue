<template>
  <div>
    <Card class="smart-query-Card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="space-between" class="search-row">
        <Col span="8">
          <span>主键 :</span>
          <Input
            placeholder="请输入主键"
            style="width: 180px"
            v-model="queryForm.drugId"
          />
        </Col>
        <Col span="8">
          <span>药品名称 :</span>
          <Input
            placeholder="请输入药品名称"
            style="width: 180px"
            v-model="queryForm.drugName"
          />
        </Col>
        <Col span="8">
          <span>通用名称 :</span>
          <Input
            placeholder="请输入通用名称"
            style="width: 180px"
            v-model="queryForm.commonName"
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
          <span>商品名称 :</span>
          <Input
            placeholder="请输入商品名称"
            style="width: 180px"
            v-model="queryForm.tradeName"
          />
        </Col>
        <Col span="8">
          <span>编码 :</span>
          <Input
            placeholder="请输入编码"
            style="width: 180px"
            v-model="queryForm.code"
          />
        </Col>
        <Col span="8">
          <span>名称首字母 :</span>
          <Input
            placeholder="请输入名称首字母"
            style="width: 180px"
            v-model="queryForm.pinyinInitials"
          />
        </Col>
        <Col span="8">
          <span>拼音 :</span>
          <Input
            placeholder="请输入拼音"
            style="width: 180px"
            v-model="queryForm.pinyin"
          />
        </Col>
        <Col span="8">
          <span>批准文号 :</span>
          <Input
            placeholder="请输入批准文号"
            style="width: 180px"
            v-model="queryForm.approvalNum"
          />
        </Col>
        <Col span="8">
          <span>生产厂家 :</span>
          <Input
            placeholder="请输入生产厂家"
            style="width: 180px"
            v-model="queryForm.manufacturer"
          />
        </Col>
        <Col span="8">
          <span>药品类型 :</span>
          <Input
            placeholder="请输入药品类型"
            style="width: 180px"
            v-model="queryForm.drugTypeId"
          />
        </Col>
        <Col span="8">
          <span>包装规格 :</span>
          <Input
            placeholder="请输入包装规格"
            style="width: 180px"
            v-model="queryForm.packageSpecification"
          />
        </Col>
        <Col span="8">
          <span>药品规格 :</span>
          <Input
            placeholder="请输入药品规格"
            style="width: 180px"
            v-model="queryForm.drugSpecification"
          />
        </Col>
        <Col span="8">
          <span>最小包装单位 :</span>
          <Input
            placeholder="请输入最小包装单位"
            style="width: 180px"
            v-model="queryForm.minPackagUnit"
          />
        </Col>
        <Col span="8">
          <span>最小包装数量 :</span>
          <Input
            placeholder="请输入最小包装数量"
            style="width: 180px"
            v-model="queryForm.minPackagCount"
          />
        </Col>
        <Col span="8">
          <span>剂量单位 :</span>
          <Input
            placeholder="请输入剂量单位"
            style="width: 180px"
            v-model="queryForm.doseUnit"
          />
        </Col>
        <Col span="8">
          <span>贮藏方式 :</span>
          <Input
            placeholder="请输入贮藏方式"
            style="width: 180px"
            v-model="queryForm.storageModeId"
          />
        </Col>
        <Col span="8">
          <span>商品条形码 :</span>
          <Input
            placeholder="请输入商品条形码"
            style="width: 180px"
            v-model="queryForm.commodityBarCode"
          />
        </Col>
        <Col span="8">
          <span>化学名称 :</span>
          <Input
            placeholder="请输入化学名称"
            style="width: 180px"
            v-model="queryForm.chemicalName"
          />
        </Col>
        <Col span="8">
          <span>英文名称 :</span>
          <Input
            placeholder="请输入英文名称"
            style="width: 180px"
            v-model="queryForm.englishName"
          />
        </Col>
        <Col span="8">
          <span>药品成分 :</span>
          <Input
            placeholder="请输入药品成分"
            style="width: 180px"
            v-model="queryForm.drugComponent"
          />
        </Col>
        <Col span="8">
          <span>药品追溯码 :</span>
          <Input
            placeholder="请输入药品追溯码"
            style="width: 180px"
            v-model="queryForm.drugTraceabilityCode"
          />
        </Col>
        <Col span="8">
          <span>性状 :</span>
          <Input
            placeholder="请输入性状"
            style="width: 180px"
            v-model="queryForm.character"
          />
        </Col>
        <Col span="8">
          <span>药物互相作用 :</span>
          <Input
            placeholder="请输入药物互相作用"
            style="width: 180px"
            v-model="queryForm.drugInteraction"
          />
        </Col>
        <Col span="8">
          <span>用法用量 :</span>
          <Input
            placeholder="请输入用法用量"
            style="width: 180px"
            v-model="queryForm.usageDosage"
          />
        </Col>
        <Col span="8">
          <span>注意事项 :</span>
          <Input
            placeholder="请输入注意事项"
            style="width: 180px"
            v-model="queryForm.mattersNeedingAttention"
          />
        </Col>
        <Col span="8">
          <span>禁忌 :</span>
          <Input
            placeholder="请输入禁忌"
            style="width: 180px"
            v-model="queryForm.taboo"
          />
        </Col>
        <Col span="8">
          <span>不良反应 :</span>
          <Input
            placeholder="请输入不良反应"
            style="width: 180px"
            v-model="queryForm.adverseReaction"
          />
        </Col>
        <Col span="8">
          <span>剂型 :</span>
          <Input
            placeholder="请输入剂型"
            style="width: 180px"
            v-model="queryForm.dosageFormId"
          />
        </Col>
        <Col span="8">
          <span>基本药物标识 :</span>
          <Input
            placeholder="请输入基本药物标识"
            style="width: 180px"
            v-model="queryForm.essentialDrugIdentification"
          />
        </Col>
        <Col span="8">
          <span>是否删除 :</span>
          <i-switch v-model="queryForm.isDelete" />
        </Col>
        <Col span="8">
          <span>是否辅助用药 :</span>
          <i-switch v-model="queryForm.isAdjuvant" />
        </Col>
        <Col span="8">
          <span>是否是重点监控药品 :</span>
          <i-switch v-model="queryForm.isKeyMonitoredDrugs" />
        </Col>
        <Col span="8">
          <span>是否是高警示药品 :</span>
          <i-switch v-model="queryForm.isHighWarnDrugs" />
        </Col>
        <Col span="8">
          <span>是否是针剂标识 :</span>
          <i-switch v-model="queryForm.isInjection" />
        </Col>
        <Col span="8">
          <span>是否是抗肿瘤药物 :</span>
          <i-switch v-model="queryForm.isAntitumorDrugs" />
        </Col>
        <Col span="8">
          <span>是否是抗菌药物 :</span>
          <i-switch v-model="queryForm.isAntibiotics" />
        </Col>
        <Col span="8">
          <span>抗菌药物等级 :</span>
          <Input
            placeholder="请输入抗菌药物等级"
            style="width: 180px"
            v-model="queryForm.antimicrobialGradeId"
          />
        </Col>
        <Col span="8">
          <span>是否激素化疗药物 :</span>
          <i-switch v-model="queryForm.isHormoneChemotherapyDrugs" />
        </Col>
        <Col span="8">
          <span>是否处方药 :</span>
          <i-switch v-model="queryForm.isPrescription" />
        </Col>
        <Col span="8">
          <span>是否麻醉精神药品 :</span>
          <i-switch v-model="queryForm.isNarcoticPsychotropicDrugs" />
        </Col>
        <Col span="8">
          <span>是否毒性药品 :</span>
          <i-switch v-model="queryForm.isToxicDrugs" />
        </Col>
        <Col span="8">
          <span>是否放射药品 :</span>
          <i-switch v-model="queryForm.isRadiopharmaceuticals" />
        </Col>
        <Col span="8">
          <span>药房类型 :</span>
          <Input
            placeholder="请输入药房类型"
            style="width: 180px"
            v-model="queryForm.pharmacyTypeId"
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
            v-privilege="'drug-list-query'"
            >查询
          </Button>
          <Button
            @click="resetQueryList"
            icon="md-refresh"
            type="default"
            v-privilege="'drug-list-query'"
            >重置
          </Button>
        </ButtonGroup>

        <Button
          @click="showMoreQueryConditionFlag = !showMoreQueryConditionFlag"
          icon="md-more"
          style="margin-left: 20px"
          type="primary"
          v-privilege="'drug-list-query'"
          >{{ showMoreQueryConditionFlag ? "隐藏" : "展开" }}
        </Button>
      </Row>
    </Card>

    <Card class="warp-Card">
      <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddDrugForm"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'drug-list-add'"
          >新建数据
        </Button>
        <Button
          @click="showBatchDeleteModal"
          class="marginLeft10"
          icon="ios-trash-outline"
          size="small"
          type="error"
          v-privilege="'drug-list-batch-delete'"
          >批量删除
        </Button>

        <Button
          :loading="allExportBtnLoading"
          @click="exportAll"
          class="marginLeft10 float-right"
          icon="ios-cloud-download-outline"
          size="small"
          type="warning"
          v-privilege="'drug-list-export-all'"
          >导出全部
        </Button>

        <Button
          :loading="batchExportBtnLoading"
          @click="batchExport"
          class="marginLeft10 float-right"
          icon="ios-download-outline"
          size="small"
          type="warning"
          v-privilege="'drug-list-batch-export'"
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
              <li v-for="item in mainTableSelectArray" :key="item.drugId">
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
      <DrugListForm
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
import { drugApi } from '@/api/clinic/drug';
import DrugListForm from './components/drug-list-form';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'DrugList',
  components: {
    DrugListForm
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
        // 主键
        drugId: null,
        // 药品名称
        drugName: '',
        // 通用名称
        commonName: '',
        // 商品名称
        tradeName: '',
        // 编码
        code: '',
        // 名称首字母
        pinyinInitials: '',
        // 拼音
        pinyin: '',
        // 批准文号
        approvalNum: '',
        // 生产厂家
        manufacturer: '',
        // 药品类型
        drugTypeId: null,
        // 包装规格
        packageSpecification: '',
        // 药品规格
        drugSpecification: '',
        // 最小包装单位
        minPackagUnit: '',
        // 最小包装数量
        minPackagCount: null,
        // 剂量单位
        doseUnit: '',
        // 贮藏方式
        storageModeId: null,
        // 商品条形码
        commodityBarCode: '',
        // 化学名称
        chemicalName: '',
        // 英文名称
        englishName: '',
        // 药品成分
        drugComponent: '',
        // 药品追溯码
        drugTraceabilityCode: '',
        // 性状
        character: '',
        // 药物互相作用
        drugInteraction: '',
        // 用法用量
        usageDosage: '',
        // 注意事项
        mattersNeedingAttention: '',
        // 禁忌
        taboo: '',
        // 不良反应
        adverseReaction: '',
        // 剂型
        dosageFormId: null,
        // 基本药物标识
        essentialDrugIdentification: '',
        // 是否删除
        isDelete: null,
        // 是否辅助用药
        isAdjuvant: null,
        // 是否是重点监控药品
        isKeyMonitoredDrugs: null,
        // 是否是高警示药品
        isHighWarnDrugs: null,
        // 是否是针剂标识
        isInjection: null,
        // 是否是抗肿瘤药物
        isAntitumorDrugs: null,
        // 是否是抗菌药物
        isAntibiotics: null,
        // 抗菌药物等级
        antimicrobialGradeId: null,
        // 是否激素化疗药物
        isHormoneChemotherapyDrugs: null,
        // 是否处方药
        isPrescription: null,
        // 是否麻醉精神药品
        isNarcoticPsychotropicDrugs: null,
        // 是否毒性药品
        isToxicDrugs: null,
        // 是否放射药品
        isRadiopharmaceuticals: null,
        // 药房类型
        pharmacyTypeId: null,
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
            title: '药品名称',
            key: 'drugName'

          },
          {
            title: '通用名称',
            key: 'commonName'

          },
          {
            title: '商品名称',
            key: 'tradeName'

          },
          {
            title: '编码',
            key: 'code'

          },
          {
            title: '药品类型',
            key: 'drugTypeId'

          },
          {
            title: '英文名称',
            key: 'englishName'

          },
          {
            title: '药品详情',
            key: 'drugDetails'

          },
          {
            title: '备注',
            key: 'remarks'

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
            title: '是否处方药',
            key: 'isPrescription',
            render: (h, params) => {
              return h(
                'span',
                this.$enum.getDescByValue(
                  'YES_OR_NO',
                  params.row.isPrescription
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
              let actions = [
                {
                  title: '编辑',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'drug-list-update'
                    }
                  ],
                  action: () => {
                    this.showEditDrugForm(params.row);
                  }
                },
                {
                  title: '删除',
                  directives: [
                    {
                      name: 'privilege',
                      value: 'drug-list-delete'
                    }
                  ],
                  action: () => {
                    this.$Modal.confirm({
                      title: '友情提醒',
                      content: '确定要删除吗？',
                      onOk: () => {
                        this.deleteDrug(params.row.drugId);
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
        let result = await drugApi.queryDrug(params);
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
        drugId: null,
        drugName: null,
        commonName: null,
        tradeName: null,
        code: null,
        pinyinInitials: null,
        pinyin: null,
        approvalNum: null,
        manufacturer: null,
        drugTypeId: null,
        packageSpecification: null,
        drugSpecification: null,
        minPackagUnit: null,
        minPackagCount: null,
        doseUnit: null,
        storageModeId: null,
        commodityBarCode: null,
        chemicalName: null,
        englishName: null,
        drugComponent: null,
        drugTraceabilityCode: null,
        character: null,
        drugInteraction: null,
        usageDosage: null,
        mattersNeedingAttention: null,
        taboo: null,
        adverseReaction: null,
        dosageFormId: null,
        essentialDrugIdentification: null,
        isDelete: null,
        isAdjuvant: null,
        isKeyMonitoredDrugs: null,
        isHighWarnDrugs: null,
        isInjection: null,
        isAntitumorDrugs: null,
        isAntibiotics: null,
        antimicrobialGradeId: null,
        isHormoneChemotherapyDrugs: null,
        isPrescription: null,
        isNarcoticPsychotropicDrugs: null,
        isToxicDrugs: null,
        isRadiopharmaceuticals: null,
        pharmacyTypeId: null,
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
    async deleteDrug (drugId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await drugApi.deleteDrug(drugId);
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
      await drugApi.batchDeleteDrug(
        this.mainTableSelectArray.map((e) => e.drugId)
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
        await drugApi.exportAll(params);
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
        await drugApi.batchExport(
          this.mainTableSelectArray.map((e) => e.drugId)
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
    showAddDrugForm () {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
    },
    showEditDrugForm (updateObject) {
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
