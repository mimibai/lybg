<template>
  <div>
    <Card class="warp-card">
      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="start" class="search-row">
        <Col span="8">
          <span class="title">IP：</span>
          <Input
            placeholder="请输入IP"
            v-model="queryForm.ip"
            style="width: 200px"
          />
        </Col>
        <Col span="8">
          <span class="title">限制原因：</span>
          <Select style="width: 200px">
            <Option
              :key="item.id"
              :value="item.id"
              v-for="item in bannedReasonArray"
              >{{ item.name }}</Option
            >
          </Select>
        </Col>
        <Col span="8"> </Col>
      </Row>

      <!------ 查询条件第一行 begin------->
      <Row type="flex" justify="center">
        <ButtonGroup>
          <Button
            @click="searchAccessBlackList"
            icon="ios-search"
            type="primary"
            v-privilege="'access-black-query'"
            >查询</Button
          >
          <Button
            @click="refresh"
            icon="md-refresh"
            type="default"
            v-privilege="'access-black-query'"
            >重置</Button
          >
        </ButtonGroup>
      </Row>
    </Card>
    <Card class="warp-card" dis-hover>
      <Row class="marginBottom10">
        <Button
          @click="addModal = true"
          class="marginLeft10 float-right"
          icon="md-add"
          type="primary"
          v-privilege="'access-black-add'"
          >添加</Button
        >
      </Row>
      <Table :columns="columns" :data="data" :loading="loading" border></Table>
    </Card>
    <Modal
      @on-cancel="cancelUpdate"
      @on-ok="handleUpdate"
      title="编辑"
      v-model="editModal"
    >
      <Form
        :label-width="80"
        :model="updateItem"
        :rules="updateValidate"
        ref="updateRef"
      >
        <FormItem label="限制IP" prop="bannedIP">
          <Input
            placeholder="请输入限制IP(必填)"
            v-model="updateItem.bannedIP"
          />
        </FormItem>
        <FormItem label="限制原因" prop="bannedReasonId">
          <Select v-model="updateItem.bannedReasonId">
            <Option
              :key="item.id"
              :value="item.id"
              v-for="item in bannedReasonArray"
              >{{ item.name }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="过期时间" prop="expiration">
          <DatePicker
            type="datetime"
            placeholder="请选择过期时间"
            style="width: 200px"
            v-model="updateItem.expiration"
            format="yyyy-MM-dd HH:mm:ss"
          ></DatePicker>
        </FormItem>
        <FormItem label="限制时间" prop="limitMinutes">
          <InputNumber v-model="updateItem.limitMinutes" controls-outside
            ><slot>分钟</slot></InputNumber
          >
        </FormItem>
        <FormItem label="犯规次数" prop="foulsCount">
          <InputNumber
            v-model="updateItem.foulsCount"
            controls-outside
          ></InputNumber>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="cancelUpdate" type="text">取消</Button>
        <Button @click="handleUpdate" type="primary">确定</Button>
      </div>
    </Modal>
    <Modal title="添加" v-model="addModal">
      <Form
        :label-width="80"
        :model="saveItem"
        :rules="saveValidate"
        ref="saveRef"
      >
        <FormItem label="限制IP" prop="bannedIP">
          <Input placeholder="请输入限制IP(必填)" v-model="saveItem.bannedIP" />
        </FormItem>
        <FormItem label="限制原因" prop="bannedReasonId">
          <Select v-model="saveItem.bannedReasonId">
            <Option
              :key="item.id"
              :value="item.id"
              v-for="item in bannedReasonArray"
              >{{ item.name }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="过期时间" prop="expiration">
          <DatePicker
            type="datetime"
            placeholder="请选择过期时间"
            style="width: 200px"
            v-model="saveItem.expiration"
            format="yyyy-MM-dd HH:mm:ss"
          ></DatePicker>
        </FormItem>
        <FormItem label="限制时间" prop="limitMinutes">
          <InputNumber
            v-model="saveItem.limitMinutes"
            :min="minVal"
            controls-outside
          ></InputNumber>
        </FormItem>
        <FormItem label="犯规次数" prop="foulsCount">
          <InputNumber
            v-model="saveItem.foulsCount"
            :min="minVal"
            controls-outside
          ></InputNumber>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="cancelSave" type="text">取消</Button>
        <Button @click="handleSave" type="primary">确定</Button>
      </div>
    </Modal>

    <Modal
      :closable="false"
      :mask-closable="false"
      title="删除"
      v-model="valueModal"
      @on-ok="deleteAccessBlack()"
    >
      确定删除"{{ removeIP }}"这个IP吗？
    </Modal>
  </div>
</template>

<script>
import { accessBlackApi } from '@/api/system/access-black';
import { enumApi } from '@/api/enum';
import { utils } from '@/lib/util';
import { SETTING_TYPE } from '@/constants/common';
export default {
  name: 'AccessBlackList',
  components: {},
  props: {},
  data () {
    return {
      removeIP: '',
      minVal: 1,
      bannedReasonArray: [],
      pageShow: true,
      searchValue: '',
      settingType: '',
      searchType: 'BY_KEY',
      editModal: false,
      addModal: false,
      valueModal: false,
      // table是否loading
      loading: true,
      saveLoading: true,
      updateLoading: true,
      queryForm: {
        ip: '',
        bannedReasonId: null,
        isExp: null
      },
      updateItem: {
        bannedIP: '',
        bannedReasonId: null,
        expiration: null,
        limitMinutes: 1,
        foulsCount: 1,
        foulUrl: ''
      },
      saveItem: {
        bannedIP: '',
        bannedReasonId: null,
        expiration: null,
        limitMinutes: 1,
        foulsCount: 1,
        foulUrl: ''
      },
      valueData: '',
      // table表头
      columns: [
        {
          title: '限制IP',
          key: 'bannedIP'
        },
        {
          title: '限制原因',
          key: 'bannedReasonId',
          render: (h, params) => {
            return h(
              'span',
              this.bannedReasonArray.filter(
                (item) => item.id == params.row.bannedReasonId
              )[0].name
            );
          }
        },
        {
          title: '过期时间',
          key: 'expiration'
        },
        {
          title: '犯规次数',
          key: 'foulsCount'
        },
        {
          title: '被限制时访问的网址',
          key: 'foulUrl'
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          width: 200,
          className: 'action-hide',
          render: (h, params) => {
            return this.$tableAction(h, [
              {
                title: '编辑',
                directives: [
                  {
                    name: 'privilege',
                    value: 'access-black-update'
                  }
                ],
                action: () => {
                  this.updateItem.bannedIP = params.row.bannedIP;
                  this.updateItem.bannedReasonId = params.row.bannedReasonId;
                  this.updateItem.expiration = params.row.expiration;
                  this.updateItem.limitMinutes = params.row.limitMinutes;
                  this.updateItem.foulsCount = params.row.foulsCount;
                  this.updateItem.foulUrl = params.row.foulUrl;
                  this.editModal = true;
                }
              },
              {
                title: '删除',
                directives: [
                  {
                    name: 'privilege',
                    value: 'access-black-delete'
                  }
                ],
                action: () => {
                  this.removeIP = params.row.bannedIP;
                  this.valueModal = true;
                }
              }
            ]);
          }
        }
      ],
      // table数据
      data: [],
      // 验证规则
      updateValidate: {
        bannedIP: [{ required: true, message: '请输入IP', trigger: 'blur' }]
      },
      saveValidate: {
        bannedIP: [{ required: true, message: '请输入IP', trigger: 'blur' }]
      }
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created () {},
  mounted () {
    this.initEnum();
    this.getAccessBlackList();
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {
    initEnum () {
      (async () => {
        this.bannedReasonArray = [];
        let result = await enumApi.getEnumItemByEnumCode(
          'AccessLimitReasonTypeEnum'
        );
        this.bannedReasonArray = result.data;
      })();
    },
    // 查询系统参数列表
    async getAccessBlackList () {
      this.loading = true;
      this.pageShow = true;
      let result = await accessBlackApi.queryAccessBlack({
        ip: this.queryForm.ip,
        bannedReasonId: this.queryForm.bannedReasonId,
        isExp: this.queryForm.isExp
      });
      this.loading = false;
      this.data = result.data;
    },
    // 修改
    handleUpdate () {
      this.$refs['updateRef'].validate((valid) => {
        if (valid) {
          this.updateItem.expiration = utils.formatDate(
            this.updateItem.expiration
          );
          this.updateAccessBlack();
        }
      });
    },
    // 修改系统设置信息
    async updateAccessBlack () {
      this.$Spin.show();
      let result = await accessBlackApi.updateAccessBlack(this.updateItem);
      this.$Spin.hide();
      this.$Message.success('修改成功');
      this.getAccessBlackList();
      this.cancelUpdate();
    },
    // 搜索
    searchAccessBlackList () {
      this.getAccessBlackList();
    },
    // 保存系统设置信息
    handleSave () {
      try {
        this.$refs['saveRef'].validate((valid) => {
          if (valid) {
            this.saveItem.expiration = utils.formatDate(
              this.saveItem.expiration
            );
            this.addAccessBlack();
          }
        });
      } catch (e) {
        // TODO zhuoda sentry
        console.log(e);
      }
    },
    // 新增
    async addAccessBlack () {
      try {
        this.saveLoading = true;
        let result = await accessBlackApi.addAccessBlack(this.saveItem);
        this.saveLoading = false;
        this.$Message.success('添加成功');
        this.getAccessBlackList();
        this.cancelSave();
      } catch (e) {
        // TODO zhuoda sentry
        console.log(e);
        this.saveLoading = false;
      }
    },
    // 取消
    cancelSave () {
      this.saveItem = {};
      // 清空form规则检查
      this.$refs['saveRef'].resetFields();
      this.addModal = false;
    },
    // 取消模态框
    cancelValueModal () {
      this.valueData = '';
      this.valueModal = false;
    },
    // 取消
    cancelUpdate () {
      this.updateItem = {};
      // 清空form规则检查
      this.$refs['updateRef'].resetFields();
      this.editModal = false;
    },
    // 刷新
    refresh () {
      this.queryForm.ip = null;
      this.queryForm.bannedReasonId = null;
      this.queryForm.isExp = null;
      this.getAccessBlackList();
    },
    // 删除IP
    async deleteAccessBlack () {
      this.$Spin.show();
      let result = await accessBlackApi.deleteAccessBlack(this.removeIP);
      this.$Spin.hide();
      this.$Message.success('删除成功');
      this.getAccessBlackList();
      this.valueModal = false;
    }
  }
};
</script>
