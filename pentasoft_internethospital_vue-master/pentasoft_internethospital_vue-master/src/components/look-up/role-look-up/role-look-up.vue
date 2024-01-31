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
import { roleApi } from "@/api/role";
export default {
  name: "RoleLookUp",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    title: {
      type: String,
      default: "",
    },
    // 选中的数据
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dataList: [],
      targetKeys: this.value || [],
      labelStr: "",
      transferTitles: ["源数据", "已选择"],
      editModel: {
        show: false,
        loading: false,
        title: "请选择角色",
        listStyle: {
          width: "45%",
          height: "450px",
        },
      },
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
  },
  computed: {},
  mounted() {},
  methods: {
    handlerFocus() {
      if (!this.editModel.show) {
        this.editModel.show = true;
        if (this.dataList.length < 1) {
          this.reset();
          this.query();
        }
      }
    },
    render(item) {
      return item.label;
    },
    handleChange(newTargetKeys) {
      this.targetKeys = newTargetKeys;
    },
    reset() {
      this.dataList = [];
      this.targetKeys = this.value || [];
    },
    handlerSelect() {
      //获取选择的值名称并显示在Input中
      this.labelStr = "";
      this.labelStr = this.dataList
        .filter((d) => this.targetKeys.indexOf(d.key) > -1)
        .map((item) => item.label)
        .join(",");
      //更新父组件绑定的值
      this.$emit("input", this.targetKeys);
    },
    filterMethod(data, query) {
      return data.label.indexOf(query) > -1;
    },
    query() {
      (async () => {
        this.editModel.loading = true;
        this.dataList = [];
        let result = await roleApi.getAllRole();
        result.data.forEach((element) => {
          this.dataList.push({
            key: element.id,
            label: element.roleName,
            description: element.remark,
            disabled: false,
          });
        });
        this.handlerSelect();
        this.editModel.loading = false;
      })();
    },
  },
};
</script>
