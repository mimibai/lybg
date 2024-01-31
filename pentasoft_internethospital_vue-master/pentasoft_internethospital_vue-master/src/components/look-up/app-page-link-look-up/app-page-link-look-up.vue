<!-- 弹窗组件 返回值为Array-->
<template>
  <div>
    <Input
      ref="input"
      readonly
      clearable
      type="text"
      icon="md-arrow-dropdown"
      style="cursor: pointer"
      :value="labelStr"
      :placeholder="placeholder"
      @on-focus="handlerFocus"
      @on-click="handlerFocus"
      @on-clear="handlerClear"
    />
    <Modal
      :title="editModel.title"
      v-model="editModel.show"
      width="50%"
      @on-ok="handlerSelect"
    >
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
import { appPageLinkApi } from '@/api/app/app-page-link';
export default {
  name: 'AppPageLinkLookUp',
  components: {},
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
      default: ''
    }
  },
  data () {
    return {
      selectDataList: [],
      dataList: [],
      targetKeys: [],
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
        this.selectValue = this.value;
      }
    },
    selectValue: function (newVal) {
      if (newVal) {
        this.reset();
        this.query();
      }
    }
  },
  computed: {},
  mounted () {
    // 初始化
    if (this.value) {
      this.selectValue = this.value;
    }
  },
  methods: {
    handlerFocus () {
      if (!this.editModel.show) {
        this.editModel.show = true;
        if (this.dataList.length < 1) {
          this.reset();
          this.query();
        }
      }
    },
    render (item) {
      return item.name + '<div>' + (item.description || '') + '</div>';
    },
    handleChange (newTargetKeys) {
      if (newTargetKeys.length > 1) {
        this.$Message.error('只允许选择一个!');
      } else {
        this.targetKeys = newTargetKeys;
      }
    },
    reset () {
      this.dataList = [];
      this.targetKeys =
        (Array.isArray(this.value) ? this.value : [this.value]) || [];
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
          .map((item) => item.name)
          .join('');
        // 更新父组件绑定的值
        this.$emit('input', this.targetKeys[0]);
      } else {
        // 传入的值不存在数据源中，防止无法选择，清空选择项
        this.targetKeys = [];
      }
    },
    filterMethod (data, query) {
      return data.name.indexOf(query) > -1;
    },
    query () {
      (async () => {
        this.editModel.loading = true;
        this.dataList = [];
        let params = {
          pageNumber: 1,
          pageSize: 9999
        };
        let result = await appPageLinkApi.queryAppPageLink(params);
        result.data.list.forEach((element) => {
          element.key = element.appPageLinkId;
          this.dataList.push(element);
        });
        this.handlerSelect();
        this.editModel.loading = false;
      })();
    },
    handlerClear () {
      this.value = null;
      this.selectValue = null;
      this.targetKeys = [];
    }
  }
};
</script>
