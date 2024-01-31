<template>
  <Card class="warp-Card">
    <Tabs type="card" @on-click="tabChange">
      <TabPane
        v-for="item in tabDataList"
        :key="item.id"
        :label="item.name"
        :name="item.id.toString()"
      >
       <!-------操作按钮行 begin------->
      <Row class="marginBottom10">
        <Button
          @click="showAddAppPageModuleStyleForm(item)"
          icon="md-add"
          size="small"
          type="primary"
          v-privilege="'app-page-module-style-list-add'"
          >新建模块样式
        </Button>
      </Row>
      <!-------操作按钮行 end------->
        <Card class="warp-Card" style="min-height: 500px">
          <Row style="flex" :gutter="24">
            <Col
              span="8"
              v-for="dataItem in pageModuleStyleDataList"
              :key="dataItem.appPageModuleStyleId"
              style="border: none; margin-bottom: 15px"
            >

              <div class="style-card">
                <div class="style-content">
                  <div :style="dataItem.styleStr">
                      <div :style="dataItem.subStyleStr">
                      </div>
                  </div>
                </div>
                <div style="clear:both;"></div>
                <div class="style-actions">
                  <Row class="code-row-bg" justify="end" type="flex" :gutter="16">
                    <Col span="16" class="style-title">
                      {{ dataItem.title || dataItem.remark }}<span v-if="dataItem.isDelete" class="delete-item">已删除</span>
                    </Col>
                    <Col span="4">
                    <Button icon="ios-create-outline" size="small" @click="showEditAppPageModuleStyleForm(dataItem)" style="margin-right: 10px"
                      >编辑</Button
                    ></col>
                    <Col span="4">
                    <Button icon="ios-trash-outline" size="small" :disabled="dataItem.isDelete" @click="showDeleteModal(dataItem)">删除</Button>
                    </Col>
                  </Row>
                </div>
              </div>

            </Col>
          </Row>

          <Spin size="large" fix v-if="spinShow"></Spin>
        </Card>
      </TabPane>
    </Tabs>

    <!-------添加、更新 Form表单 begin------->
    <Modal
      :footer-hide="true"
      :title="saveModal.isUpdate ? '更新' : '新建'"
      v-model="saveModal.show"
      @on-cancel="saveFormClose"
      width="60%"
    >
      <AppPageModuleStyleListForm
        :isUpdate="saveModal.isUpdate"
        :updateData="saveModal.updateData"
        :propPageModuleType="saveModal.propPageModuleType"
        @on-form-close="saveFormClose"
      />
    </Modal>
    <!-------添加、更新 Form表单 end------->
    <!-------删除Modal begin------->
    <Modal title="删除" v-model="deleteModal.show" width="450">
      <Form :label-width="80">
        <FormItem>
          <h3 class="error-color">确定要删除以下数据吗？</h3>
        </FormItem>
        <FormItem label="删除数据">
         {{ deleteModal.deleteData?(deleteModal.deleteData.title||deleteModal.deleteData.remark):'' }}
        </FormItem>
      </Form>
      <div slot="footer">
        <Button
          @click="deleteModal.show = false"
          size="small"
          type="default"
          >取消</Button
        >
        <Button @click="deleteAppPageModuleStyle(deleteModal.deleteData.appPageModuleStyleId)" size="small" type="primary"
          >确定删除</Button
        >
      </div>
    </Modal>
    <!-------删除Modal end------->
  </Card>
</template>

<script>
import { dateTimeRangeConvert } from '@/lib/util';
import { PAGE_SIZE_OPTIONS } from '@/constants/table-page';
import { appPageModuleStyleApi } from '@/api/app/app-page-module-style';
import AppPageModuleStyleListForm from './components/app-page-module-style-list-form';
import { enumApi } from '@/api/enum';

const PAGE_SIZE_INIT = 20;
export default {
  name: 'AppPageModuleStyleList',
  components: {
    AppPageModuleStyleListForm
  },
  props: {},
  data () {
    return {
      currentTabIndex: 0,
      tabDataList: [],
      spinShow: false,
      pageModuleStyleDataList: [],
      /* -------------------------添加、更新表单 ------------------------- */
      saveModal: {
        show: false,
        isUpdate: false,
        updateData: null,
        propPageModuleType: null
      },
      deleteModal: {
        show: false,
        deleteData: null
      },
      /* -------------------------查询条件相关数据-------------------- */
      // 搜索表单
      queryForm: {
        // AppPageModuleStyleId
        appPageModuleStyleId: null,
        // AppPlatformAccountId
        appPlatformAccountId: null,
        // WeiXinAccountId
        weiXinAccountId: null,
        // PageModuleTypeId
        pageModuleTypeId: null,
        // ObjectTypeId
        objectTypeId: null,
        // IsDelete
        isDelete: null,
        // IsShowTitle
        isShowTitle: null,
        // ShowTitleTypeId
        showTitleTypeId: null,
        createTimeRange: ['', ''],
        updateTimeRange: ['', ''],
        pageNum: 1,
        pageSize: PAGE_SIZE_INIT,
        orders: []
      }
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created () {},
  mounted () {
    this.initPageModuleType();
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {
    initPageModuleType () {
      (async () => {
        this.tabDataList = [];
        let result = await enumApi.getEnumItemByEnumCode(
          'AppletPageModuleTypeEnum'
        );
        this.tabDataList = result.data;
        this.tabChange(this.tabDataList[0].id);
      })();
    },
    tabChange (pageModuleTypeId) {
      this.currentTabIndex = pageModuleTypeId;
      this.initData(pageModuleTypeId);
    },
    initData (pageModuleTypeId) {
      this.spinShow = true;
      (async () => {
        this.pageModuleStyleDataList = [];
        let params = this.convertQueryParam();
        if (pageModuleTypeId) {
          params.pageModuleTypeId = parseInt(pageModuleTypeId);
        }
        let result = await appPageModuleStyleApi.queryAppPageModuleStyle(
          params
        );
        this.pageModuleStyleDataList = result.data.list;
        this.spinShow = false;
      })();
    },
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

    // 重置查询
    resetQueryList () {
      let pageSize = this.queryForm.pageSize;
      this.queryForm = {
        appPageModuleStyleId: null,
        appPlatformAccountId: null,
        weiXinAccountId: null,
        pageModuleTypeId: null,
        objectTypeId: null,
        isDelete: null,
        isShowTitle: null,
        showTitleTypeId: null,
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
    /* -------------------------查询相关 end------------------------- */

    /* -------------------------删除 begin------------------------- */
    // 根据ID删除
    async deleteAppPageModuleStyle (appPageModuleStyleId) {
      try {
        this.isShowDeleteLoading = true;
        let result = await appPageModuleStyleApi.deleteAppPageModuleStyle(
          appPageModuleStyleId
        );
        this.isShowDeleteLoading = false;
        this.$Message.success('删除成功');
        this.$Spin.hide();
        this.tabChange(this.currentTabIndex);
      } catch (e) {
        console.error(e);
        this.isShowDeleteLoading = false;
      }
    },
    /* -------------------------删除 begin------------------------- */

    /* -------------------------批量操作 begin------------------------- */
    // 显示删除弹窗
    showDeleteModal (data) {
      if (!data || !data.appPageModuleStyleId) {
        return;
      }
      this.deleteModal.deleteData = data;
      this.deleteModal.show = true;
    },
    /* -------------------------批量操作 end------------------------- */

    /* -------------------------添加，修改 表单 begin------------------------- */
    // 显示添加表单
    showAddAppPageModuleStyleForm (pageModuleTypeObj) {
      this.saveModal.isUpdate = false;
      this.saveModal.show = true;
      this.saveModal.propPageModuleType = pageModuleTypeObj;
    },
    showEditAppPageModuleStyleForm (updateObject) {
      this.saveModal.isUpdate = true;
      this.saveModal.updateData = updateObject;
      this.saveModal.show = true;
    },
    saveFormClose () {
      this.saveModal.show = false;
      this.tabChange(this.currentTabIndex);
    }
    /* -------------------------添加，修改 表单 end------------------------- */
  }
};
</script>
<style lang="less" scoped>
.style-card {
  width: 100%;
  height: 260px;
  padding: 8px;
  overflow: hidden;
  border: 1px solid rgb(231, 234, 236);
  border-radius: 5px;
}
.style-content {
  height: 85%;
  margin-bottom: 8px;
  overflow: hidden;
}
.style-actions {
  width: 90%;
  height: 25px;
  padding: 0px;
  margin: 0 auto;
  list-style: none;
  text-decoration: none;
}
.style-title {
  font-size: 14px;
}
.delete-item {
  font-size: 12px;
  background: rgb(255, 1, 1);
  color: #fff;
  border-radius: 5px;
  padding: 3px;
  margin-left: 5px;
}
</style>
