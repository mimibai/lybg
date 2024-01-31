<template>
  <Select
    filterable
    clearable
    :multiple="multiple"
    :style="selectorStyle"
    v-model="selectValue"
    @on-change="updateSelect"
  >
    <Option :key="item.id" :value="item.id" v-for="item in dataList">{{
      item.name
    }}</Option>
  </Select>
</template>
<script>
import { departmentNodeApi } from '@/api/organizations/department-node';
import { getStepNodeName } from '@/lib/util';
export default {
  name: 'DepartmentSelect',
  props: {
    // 选中的数据
    value: null,
    multiple: {
      type: Boolean,
      default: false
    },
    selectorStyle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      enumCode: this.code,
      dataList: [],
      selectValue: this.value
    };
  },
  watch: {
    value: function (newVal) {
      if (newVal) {
        this.selectValue = newVal;
      }
    }
  },
  computed: {},
  mounted () {
    this.reset();
    this.query();
  },
  methods: {
    reset () {
      this.dataList = [];
      if (this.multiple) {
        this.selectValue = [];
      } else {
        if (this.value) {
          this.selectValue = this.value;
        } else {
          this.selectValue = -1;
        }
      }
    },
    updateSelect (value) {
      this.selectValue = value;
      // 更新父组件绑定的值
      this.$emit('input', this.selectValue);
    },
    getSelectValue () {
      return this.selectValue;
    },
    query () {
      (async () => {
        this.dataList = [];
        let params = {
          departmentNodeCategoryId: 1,
          page: 1,
          pageSize: 9999
        };
        let result = await departmentNodeApi.queryDepartmentNode(params);
        result.data.list.forEach((element) => {
          this.dataList.push({
            id: element.department.departmentId,
            name: getStepNodeName(
              element.name,
              element.depth
            )
          });
        });
      })();
    }
  }
};
</script>
