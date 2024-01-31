<!-- 弹窗组件 返回值为Array-->
<template>
  <div>
    <Input
      ref="input"
      readonly
      type="text"
      icon="md-arrow-dropdown"
      style="cursor: pointer"
      :value="labelStr"
      :placeholder="placeholder"
      @on-focus="handlerFocus"
      @on-click="handlerFocus"
    />
    <Modal
      :title="editModel.title"
      v-model="editModel.show"
      width="50%"
      @on-ok="handlerSelect"
    >
      <Row>
        <Col span="24">
          <Select
            filterable
            readonly
            v-model="selectValue"
            @on-change="updateSelect"
          >
            <Option
              :key="item.id"
              :value="item.id"
              v-for="item in selectDataList"
              >{{ item.name }}</Option
            >
          </Select>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span="24">
          <Transfer
            filterable
            :filter-method="filterMethod"
            :data="dataList"
            :target-keys="targetKeys"
            :render-format="render"
            :list-style="editModel.listStyle"
            :titles="transferTitles"
            @on-change="handleChange"
          ></Transfer>
        </Col>
      </Row>

      <Spin size="large" fix v-if="editModel.loading"></Spin>
    </Modal>
  </div>
</template>
<script>
import { siteApi } from '@/api/platforms/site';
import { columnApi } from '@/api/news/column';
import { getStepNodeName } from '@/lib/util';
export default {
  name: 'ColumnLookUp',
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    title: {
      type: String,
      default: ''
    },
    // 选中的数据
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectDataList: [],
      dataList: [],
      targetKeys: this.value || [],
      labelStr: '',
      transferTitles: ['源数据', '已选择'],
      selectValue: null,
      editModel: {
        show: false,
        loading: false,
        title: '请选择栏目',
        listStyle: {
          width: '45%',
          height: '450px'
        }
      }
    };
  },
  watch: {
    value: function (newVal) {
      if (newVal) {
        this.targetKeys = newVal;
        if (this.targetKeys.length > 0) {
          this.reset();
          this.query();
        }
      }
    }
  },
  computed: {},
  mounted () {},
  methods: {
    handlerFocus () {
      if (!this.editModel.show) {
        this.editModel.show = true;
        if (this.dataList.length < 1) {
          this.reset();
          this.initSite();
          this.query();
        }
      }
    },
    render (item) {
      return item.label;
    },
    handleChange (newTargetKeys) {
      this.targetKeys = newTargetKeys;
    },
    reset () {
      this.dataList = [];
      this.targetKeys = this.value || [];
    },
    updateSelect (value) {
      this.selectValue = value;
      this.reset();
      this.query();
    },
    handlerSelect () {
      // 获取选择的值名称并显示在Input中
      this.labelStr = '';
      if (
        this.dataList.findIndex(
          (item) => this.targetKeys.indexOf(item.key) > -1
        ) > -1
      ) {
        this.labelStr = this.dataList
          .filter((d) => this.targetKeys.indexOf(d.key) > -1)
          .map((item) => item.label)
          .join(',');
        // 更新父组件绑定的值
        this.$emit('input', this.targetKeys);
      } else {
        // 传入的值不存在数据源中，防止无法选择，清空选择项
        this.targetKeys = [];
      }
    },
    filterMethod (data, query) {
      return data.label.indexOf(query) > -1;
    },
    query () {
      (async () => {
        this.editModel.loading = true;
        this.dataList = [];
        let params = {
          pageNumber: 1,
          pageSize: 9999
        };
        if (this.selectValue) {
          params.siteId = this.selectValue;
        }
        let result = await columnApi.queryColumn(params);
        result.data.list.forEach((element) => {
          this.dataList.push({
            key: element.siteId,
            label: getStepNodeName(element.name, element.depth),
            description: element.description,
            disabled: false
          });
        });
        this.handlerSelect();
        this.editModel.loading = false;
      })();
    },
    initSite () {
      (async () => {
        this.editModel.loading = true;
        this.selectDataList = [];
        let params = {
          pageNumber: 1,
          pageSize: 9999
        };
        let result = await siteApi.querySite(params);
        result.data.list.forEach((element) => {
          this.selectDataList.push({
            id: element.siteId,
            name: getStepNodeName(element.name, element.depth)
          });
        });
        this.editModel.loading = false;
      })();
    }
  }
};
</script>
