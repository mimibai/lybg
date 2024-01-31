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
import { doctorApi } from '@/api/organizations/doctor';
export default {
  name: 'DoctorSelect',
  props: {
    departmentId: {
      type: Number,
      default: null
    },
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
      deptId: this.departmentId,
      dataList: [],
      selectValue: this.value
    };
  },
  watch: {
    value: function (newVal) {
      if (newVal) {
        this.selectValue = newVal;
      }
    },
    departmentId: function (newVal) {
      console.log('newVal:', newVal);
      if (newVal) {
        this.deptId = newVal;
        this.selectValue = null;
        this.query();
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
          page: 1,
          pageSize: 9999
        };
        if (this.deptId) {
          params.departmentId = this.deptId;
        }
        let result = await doctorApi.queryDoctor(params);
        result.data.list.forEach((element) => {
          this.dataList.push({
            id: element.doctorId,
            name: element.name
          });
        });
      })();
    }
  }
};
</script>
