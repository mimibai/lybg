<template>
  <Row style="flex" :gutter="24" v-if="dataList.length > 0">
    <Col
      span="8"
      v-for="dataItem in showDataList"
      :key="dataItem.appPageModuleStyleId"
      style="border: none; margin-bottom: 15px"
    >
      <div class="style-card">
        <div class="style-content">
          <div :style="dataItem.styleStr">
            <div :style="dataItem.subStyleStr"></div>
          </div>
        </div>
        <div style="clear: both"></div>
        <div class="style-actions">
          <Row class="code-row-bg" justify="end" type="flex" :gutter="16">
            <Col span="17" class="style-title">
              {{ dataItem.title || dataItem.remark
              }}<span v-if="dataItem.isDelete" class="delete-item">已删除</span>
            </Col>
            <Col span="7">
              <Button
                icon="ios-checkmark-circle-outline"
                size="small"
                @click="handleSelect(dataItem.appPageModuleStyleId)"
                v-if="!selectValue"
                >应用</Button
              >
            </Col>
          </Row>
        </div>
      </div>
    </Col>
    <Col span="8" style="border: none; margin-bottom: 15px" v-if="selectValue">
      <a href="javascript:void(0)" @click="clearSelect">
        <Row
          type="flex"
          justify="center"
          align="middle"
          class="style-card"
          style="cursor: pointer"
        >
          <Divider>选择其他</Divider>
        </Row>
      </a>
    </Col>
  </Row>
  <Row v-else>
    <Col span="24">
      <Divider>无可用样式模板</Divider>
    </Col>
  </Row>
</template>
<script>
import { appPageModuleStyleApi } from '@/api/app/app-page-module-style';
export default {
  name: 'PageModuleStyleTemplate',
  props: {
    // 选中的数据
    dataList: {
      type: Array,
      default: () => []
    },
    value: {}
  },
  data () {
    return {
      selectValue: null,
      showDataList: []
    };
  },
  watch: {
    value: function (newVal) {
      console.log('---newVal', newVal);
      if (newVal) {
        this.selectValue = newVal;
      }
    },
    dataList: function (newVal) {
      if (newVal) {
        this.showDataList = newVal;
        this.selectValue = null;
      }
    },
    selectValue: function (newVal) {
      if (newVal) {
        this.showDataList = this.dataList.filter((item) => {
          return item.appPageModuleStyleId == newVal;
        });
        // 更新父组件绑定的值
        this.$emit('input', newVal);
      } else {
        this.showDataList = this.dataList;
      }
    }
  },
  computed: {},
  mounted () {
    this.reset();
  },
  methods: {
    reset () {
      this.selectValue = this.value || null;
    },
    handleSelect (value) {
      this.$Modal.confirm({
        title: '友情提示',
        content: '确认应用此模板吗？',
        onOk: () => {
          this.selectValue = value;
        }
      });
    },
    clearSelect () {
      this.selectValue = null;
    }
  }
};
</script>
<style scoped>
.code-row-bg {
  margin-top: 15px;
}
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
