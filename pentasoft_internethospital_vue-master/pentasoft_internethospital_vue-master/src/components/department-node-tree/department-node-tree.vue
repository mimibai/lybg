<template>
  <Card class="warp-card" dis-hover style="position: relative">
    <p slot="title">科室列表</p>
    <TreeDrag
      :getChild="getChild"
      @on-select="handlerSelect"
      @on-drag="handlerDrag"
      titleKey="name"
    />
  </Card>
</template>
<script>
import TreeDrag from "@/components/tree-drag";
import { departmentNodeApi } from "@/api/organizations/department-node";
import { OPDepartmentApi } from "@/api/organizations/op-department";

export default {
  name: "DepartmentNodeTree",
  components: {
    TreeDrag,
  },
  props: {
    treeType: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
  methods: {
    /*-------------------------科室树形  begin  ------------------------- */
    getChild(node) {
      return new Promise((resolve, reject) => {
        const data = [];
        let parentId = 0;
        if (node.nodeKey != 0) {
          parentId = node.id;
        }
        if (this.treeType === 1) {
          let result = departmentNodeApi
            .listDepartmentNodeByParentId(parentId)
            .then((result) => {
              let dataList = result.data;
              // 接口获取数据加载子节点
              for (let i = 0; i < dataList.length; i++) {
                const child = {
                  name: dataList[i].name,
                  id: dataList[i].departmentNodeId,
                  departmentId: dataList[i].departmentId,
                  loading: false,
                  children: [],
                };
                if (!dataList[i].hasChildren) {
                  delete child.loading;
                  delete child.children;
                }
                data.push(child);
              }
              resolve(data);
            })
            .catch((err) => {});
        } else {
          let result = OPDepartmentApi.listOPDepartmentByParentId(parentId)
            .then((result) => {
              let dataList = result.data;
              // 接口获取数据加载子节点
              for (let i = 0; i < dataList.length; i++) {
                const child = {
                  name: dataList[i].name,
                  id: dataList[i].opDepartmentId,
                  loading: false,
                  children: [],
                };
                if (!dataList[i].hasChildren) {
                  delete child.loading;
                  delete child.children;
                }
                data.push(child);
              }
              resolve(data);
            })
            .catch((err) => {});
        }
      });
    },
    handlerSelect(node) {
      if (node) {
        this.selected = node;
        if (node.id != null) {
          this.$emit("handlerSelect", node.id);
        }
      }
    },
    handlerDrag(from, to, position, e) {
      this.dragHis.push({
        from,
        to,
        position,
        e,
      });
    },
    /*-------------------------科室树形  end  ------------------------- */
  },
};
</script>
