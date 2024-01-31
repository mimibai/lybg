<template>
  <Select
    v-if="showType === 1"
    filterable
    clearable
    :multiple="propMultiple"
    :style="selectorStyle"
    v-model="selectValue"
    @on-change="updateSelect"
  >
    <Option :key="item.id" :value="item.id" v-for="item in dataList">{{
      item.name
    }}</Option>
  </Select>
  <RadioGroup
    v-else
    v-model="selectValue"
    type="button"
    button-style="solid"
    :style="selectorStyle"
    @on-change="updateSelect"
  >
    <Radio :label="-1">不限</Radio>
    <Radio v-for="item in dataList" :key="item.id" :label="item.id">{{
      item.name
    }}</Radio>
  </RadioGroup>
</template>
<script>
import { enumApi } from '@/api/enum';
export default {
  name: 'EnumSelect',
  props: {
    code: {
      type: String,
      default: ''
    },
    viewType: {
      default: 1
    },
    // 选中的数据
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    selectorStyle: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    resultType: {
      type: Number,
      default: () => 1
    }
  },
  data () {
    return {
      showType: this.viewType,
      enumCode: this.code,
      propMultiple: this.multiple,
      dataList: [],
      selectValue: this.value
    };
  },
  watch: {
    value: function (newVal) {
      if (newVal) {
        if (typeof newVal === 'number') {
          this.selectValue = newVal;
        } else if (typeof newVal === 'string') {
          let tmpArray = newVal.split(',');
          this.selectValue = tmpArray.map((item) => {
            return Number(item);
          });
        }
      } else {
        this.selectValue = -1;
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
      let resultVal;
      if (this.resultType === 2) {
        resultVal = this.selectValue.toString();
      } else {
        resultVal = this.selectValue;
      }
      this.$emit('input', resultVal);
    },
    getSelectValue () {
      return this.selectValue;
    },
    query () {
      (async () => {
        this.dataList = [];
        if (this.enumCode) {
          let result = await enumApi.getEnumItemByEnumCode(this.enumCode);
          this.dataList = result.data;
        }
      })();
    }
  }
};
</script>
