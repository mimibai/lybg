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
      <Spin size="large" fix v-if="editModel.loading"></Spin>
    </Modal>
  </div>
</template>
<script>
import { OPDoctorApi } from '@/api/organizations/opdoctor';
export default {
  name: 'OPDoctorLookUp',
  props: {
    departmentId: {
      type: Number,
      default: null
    },
    opDepartmentId: {
      type: Number,
      default: null
    },
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
      deptId: this.departmentId,
      opDeptId: this.opDepartmentId,
      dataList: [],
      targetKeys: this.value || [],
      labelStr: '',
      transferTitles: ['源数据', '已选择'],
      editModel: {
        show: false,
        loading: false,
        title: '请选择',
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
    },
    departmentId: function (newVal) {
      if (newVal) {
        this.deptId = newVal;
        this.selectValue = null;
        this.query();
      }
    },
    opDepartmentId: function (newVal) {
      if (newVal) {
        this.opDeptId = newVal;
        this.query();
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
          this.query();
        }
      }
    },
    render (item) {
      return item.label + '——' + item.description + '';
    },
    handleChange (newTargetKeys) {
      this.targetKeys = newTargetKeys;
    },
    reset () {
      this.dataList = [];
      this.targetKeys = this.value || [];
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
          page: 1,
          pageSize: 5
        };
        if (this.deptId) {
          params.departmentId = this.deptId;
        }
        if (this.opDeptId) {
          params.opDepartmentId = this.opDeptId;
        }
        let result = await OPDoctorApi.queryOPDoctor(params);
        result.data.list.forEach((element) => {
          this.dataList.push({
            key: element.opDoctorId,
            label: element.name,
            description:
              element.opDdepartmentName + '(' + element.professionalTitle + ')',
            disabled: false
          });
        });
        this.handlerSelect();
        this.editModel.loading = false;
      })();
    }
  }
};
</script>
