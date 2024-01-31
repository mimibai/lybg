<template>
  <!--div 功能权限部分 start-->
  <div id="tree">
    <Row>
      <Col class="col-desc" span="16">设置角色对应的数据范围</Col>
      <Col class="button-style" span="8">
        <Button
          @click.native="saveChange()"
          style="margin-right: 20px"
          type="primary"
          v-privilege="'update-role-privilege'"
          >保存</Button
        >
      </Col>
    </Row>
    <!--CheckboxGroup 功能权限勾选部分 start-->
    <CheckboxGroup v-model="checkedData">
      <div class="checked-box">
        <ul>
          <li v-if="dataScopeType == 2">
            <div class="level-two">
              <label class="level-two-label ivu-checkbox-wrapper title"
                >站点根节点</label
              >
              <div class="level-three">
                <div class="isLevel-four">
                  <label class="level-three-label ivu-checkbox-wrapper title"
                    >站点</label
                  >
                  <div class="level-four">
                    <div class="isLevel-four">
                      <label
                        class="level-three-label ivu-checkbox-wrapper title"
                        >栏目</label
                      >
                      <div class="level-four">
                        <label
                          class="level-three-label ivu-checkbox-wrapper title"
                        ></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li v-if="dataScopeType == 7">
            <div class="level-two">
              <label class="level-two-label ivu-checkbox-wrapper title"
                >科室分类</label
              >
              <div class="level-three">
                <div class="isLevel-four">
                  <label class="level-three-label ivu-checkbox-wrapper title"
                    >科室/院区</label
                  >
                  <div class="level-four">
                    <div class="isLevel-four">
                      <label
                        class="level-three-label ivu-checkbox-wrapper title"
                        >子节点</label
                      >
                      <div class="level-four">
                        <label
                          class="level-three-label ivu-checkbox-wrapper title"
                        ></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!--li 一级权限模块 start-->
          <li :key="module.key" v-for="(module, moduleIndex) in tree">
            <div class="level-one">
              <Checkbox
                :label="module.key"
                @click.prevent.native="selectCheckbox(module)"
                >{{ module.viewTypeName }}
              </Checkbox>
            </div>
            <!--div 二级权限模块 start-->
            <div
              :key="childrenModule.key"
              class="level-two"
              v-for="(childrenModule, childrenModuleIndex) in module.childView"
            >
              <template v-if="childrenModule.viewId != -1">
                <Checkbox
                  :label="childrenModule.key"
                  @click.prevent.native="selectCheckbox(childrenModule)"
                  class="level-two-label"
                  >{{ childrenModule.viewTypeName }}</Checkbox
                >
                <!--div 三级权限模块 start-->
                <div class="level-three">
                  <template
                    v-for="(pages, pagesIndex) in childrenModule.childView"
                  >
                    <div
                      :key="pages.key"
                      class="isLevel-four"
                      v-if="pages.childView && pages.childView.length > 0"
                    >
                      <template v-if="pages.viewId != -1">
                        <Checkbox
                          :key="pages.key"
                          :label="pages.key"
                          @click.prevent.native="selectCheckbox(pages)"
                          class="level-three-label"
                          >{{ pages.viewTypeName }}</Checkbox
                        >
                        <!--div 四级权限模块 start-->
                        <div
                          :key="pagesIndex"
                          class="level-four"
                          v-if="pages.childView.length > 0"
                        >
                          <template
                            v-for="(page, pageIndex) in pages.childView"
                          >
                            <!---
                          如果是第四级菜单的话，会继续往下一层遍历
                        -->
                            <template
                              v-if="page.childView && page.childView.length > 0"
                            >
                              <!--div 五级权限模块 start-->
                              <div :key="page.key" class="isLevel-four">
                                <template v-if="page.viewId != -1">
                                  <Checkbox
                                    :label="page.key"
                                    @click.prevent.native="selectCheckbox(page)"
                                    class="level-three-label"
                                    >{{ page.viewTypeName }}</Checkbox
                                  >
                                  <!--div 五级权限的功能点 start-->
                                  <div
                                    class="level-four"
                                    v-if="
                                      page.childView &&
                                      page.childView.length > 0
                                    "
                                  >
                                    <template
                                      v-for="(
                                        fiveLevelFunction, fiveLevelIndex
                                      ) in page.childView"
                                    >
                                      <template
                                        v-if="fiveLevelFunction.viewId != -1"
                                      >
                                        <Checkbox
                                          :label="fiveLevelFunction.key"
                                          @click.prevent.native="
                                            selectCheckbox(fiveLevelFunction)
                                          "
                                          >{{
                                            fiveLevelFunction.viewTypeName
                                          }}</Checkbox
                                        >
                                      </template>
                                    </template>
                                  </div>
                                  <!--div 五级权限的功能点 start-->
                                </template>
                              </div>
                              <!--div 五级权限模块 start-->
                            </template>
                            <template v-else>
                              <template v-if="page.viewId != -1">
                                <Checkbox
                                  :key="page.key"
                                  :label="page.key"
                                  @click.prevent.native="selectCheckbox(page)"
                                  >{{ page.viewTypeName }}</Checkbox
                                >
                              </template>
                            </template>
                          </template>
                        </div>
                        <!--div 四级权限模块 start-->
                      </template>
                    </div>
                    <Checkbox
                      :key="pages.key"
                      :label="pages.key"
                      @click.prevent.native="selectCheckbox(pages)"
                      v-else
                      >{{ pages.viewTypeName }}</Checkbox
                    >
                  </template>
                </div>
                <!--div 三级权限模块 end-->
              </template>
            </div>
            <!--div 二级权限模块 end-->
          </li>
          <!--li 一级权限模块 end-->
        </ul>
        <Spin size="large" fix v-if="loading"></Spin>
      </div>
    </CheckboxGroup>
    <!--CheckboxGroup 功能权限勾选部分 end-->
  </div>
  <!--div 功能权限部分 end-->
</template>

<script>
import { dataScopeApi } from "@/api/data-scope";
import {
  SITE_TYPE_ROOT,
  DATA_SCOPE_TYPE,
  SELECT_TYPE,
} from "@/constants/data-scope";
export default {
  name: "RoleDataScope",
  props: {
    // 角色id
    roleId: {
      type: Number,
      required: true,
      validator: (value) => {
        return value >= 0;
      },
    },
    dataScopeType: {
      type: Number,
      required: true,
      validator: (value) => {
        return value > 0;
      },
    },
  },
  components: {},
  // 父级组件数据传递
  data() {
    return {
      // 权限数据
      tree: [],
      //权限铺平的map
      treeMap: null,
      loading: false,
      // 提交保存数据
      rolePower: {
        dataScopeKeyList: [],
        roleId: "",
      },
      // 已选项
      checkedData: [],
    };
  },
  computed: {},
  watch: {
    roleId(newVal) {
      if (newVal) {
        this.getListDataScopeByRoleId(newVal, this.dataScopeType);
      }
    },
    dataScopeType(newVal) {
      if (newVal) {
        this.getListDataScopeByRoleId(this.roleId, newVal);
      }
    },
  },
  filters: {},
  created() {},
  mounted() {
    this.getListDataScopeByRoleId(this.roleId, this.dataScopeType);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    // 勾选权限
    selectCheckbox(module) {
      // 是否勾选
      let findIndex = this.checkedData.indexOf(module.key);
      if (findIndex !== -1) {
        //取消自己和孩子
        this.removeCheckAndChidlrenCheck(module);
        //判断父级及其以上是否有重复
        if (module.parentKey) {
          let parentDataScope = this.treeMap.get(module.parentKey);
          if (parentDataScope) {
            this.unCheckedParent(parentDataScope);
          }
        }
      } else {
        // 选中子级所有checkBox
        this.addCheckAndChildrenCheck(module);
        // 父类集合选中
        let parentKey = module.parentKey;
        while (parentKey != null) {
          let parentDataScope = this.treeMap.get(parentKey);
          if (parentDataScope) {
            let findIndex = this.checkedData.findIndex(
              (val) => val == parentKey
            );
            if (findIndex == -1) {
              this.checkedData.push(parentKey);
            }
            parentKey = parentDataScope.parentKey;
            console.log(parentKey);
          } else {
            parentKey = null;
          }
        }
      }
    },
    // 取消父级check
    unCheckedParent(parentDataScope) {
      if (
        parentDataScope &&
        parentDataScope.childView &&
        parentDataScope.childView.length > 0
      ) {
        if (!this.judgeArrayExistCheck(parentDataScope.childView)) {
          let findIndex = this.checkedData.findIndex(
            (val) => val == parentDataScope.key
          );
          if (findIndex != -1) {
            this.checkedData.splice(findIndex, 1);
          }

          parentDataScope = this.treeMap.get(parentDataScope.parentKey);
          this.unCheckedParent(parentDataScope);
        }
      }
    },
    //判断权限数组是否有选中的，有返回true,没有任何选中返回false
    judgeArrayExistCheck(dataScopeArray) {
      if (!dataScopeArray) {
        return false;
      }

      for (let privilege of dataScopeArray) {
        let findIndex = this.checkedData.findIndex(
          (val) => val == privilege.key
        );
        if (findIndex != -1) {
          return true;
        }
      }
      return false;
    },

    // 选中子级所有checkBox
    addCheckAndChildrenCheck(module) {
      let findIndex = this.checkedData.findIndex((val) => val == module.key);
      if (findIndex == -1) {
        this.checkedData.push(module.key);
      }

      if (module.childView) {
        module.childView.forEach((item) => {
          if (item.viewId != -1) {
            this.addCheckAndChildrenCheck(item);
          }
        });
      }
    },
    // 取消自己和下级勾选
    removeCheckAndChidlrenCheck(module) {
      let findIndex = this.checkedData.findIndex((val) => val == module.key);
      if (findIndex != -1) {
        this.checkedData.splice(findIndex, 1);
      }
      if (module.childView) {
        module.childView.forEach((item) => {
          this.removeCheckAndChidlrenCheck(item);
        });
      }
    },
    // 保存改变权限
    saveChange() {
      if (this.checkedData.length == 0) {
        this.$Message.error("还未选择任何权限");
        return;
      }
      this.rolePower.roleId = this.roleId;
      this.rolePower.dataScopeKeyList = this.checkedData.concat();
      this.getRolePower(this.rolePower);
    },
    // 更新角色功能权限方法
    async getRolePower(data) {
      this.loading = true;
      try {
        let dataScopeList = [];
        for (let key of data.dataScopeKeyList) {
          let selected = this.treeMap.get(key);
          let findIndex = dataScopeList.findIndex(
            (val) => val.dataScopeType == selected.viewType
          );
          if (findIndex != -1) {
            let findValueIndex = dataScopeList[
              findIndex
            ].viewTypeIdList.findIndex((val) => val == selected.viewId);
            if (findValueIndex == -1) {
              dataScopeList[findIndex].viewTypeIdList.push(selected.viewId);
            }
          } else {
            dataScopeList.push({
              dataScopeType: selected.viewType,
              viewTypeIdList: [selected.viewId],
            });
          }
        }
        let upData = {
          roleId: this.roleId,
          batchSetList: dataScopeList,
        };
        await dataScopeApi.updateDataScope(upData);
        this.$Message.info("保存成功");
        this.rolePower.dataScopeKeyList = [];
        await this.getListDataScopeByRoleId(this.roleId, this.dataScopeType);
      } catch (e) {
        console.error(e);
      } finally {
        //this.$Spin.hide();
        this.loading = false;
      }
    },
    //将权限tree 打平成map
    tree2map(tree) {
      if (tree) {
        for (let dataScope of tree) {
          this.treeMap.set(dataScope.key, dataScope);
          this.tree2map(dataScope.childView);
        }
      }
    },
    // 获取角色可选的功能权限
    async getListDataScopeByRoleId(roleId, dataScopeType) {
      this.loading = true;
      try {
        let response = await dataScopeApi.getDataScopeList(
          dataScopeType,
          roleId
        );
        let datas = response.data;

        this.tree = datas.dataScopeList;
        this.treeMap = new Map();
        this.tree2map(this.tree);
        this.checkedData = datas.selectedKey || [];
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
#tree {
  border: 1px solid #dcdee2;
  border-top: none;
}
.col-desc {
  margin: 20px 0;
  font-size: 15px;
  color: #95a5a6;
  padding: 0 20px;
}
.button-style {
  margin: 20px 0 20px 0;
  padding-left: 20px;
  text-align: right;
}
.check-right {
  margin-right: 20px;
}
.row-border {
  border: 1px solid #f0f0f0;
}
.col-border {
  line-height: 50px;
  padding-left: 20px;
  border-right: 1px solid #f0f0f0;
}
.col-left {
  line-height: 50px;
  padding-left: 40px;
  border-right: 1px solid #f0f0f0;
}
.col-right {
  padding-left: 20px;
  border-right: 1px solid #f0f0f0;
}
.ivu-tree ul li {
  white-space: normal;
}
.ivu-tree {
  > ul {
    > li {
      > ul {
        > li {
          .ivu-tree-title {
            vertical-align: middle;
            font-weight: bold;
          }
          > ul {
            display: inline-block;
            .ivu-tree-title {
              font-weight: normal;
            }
          }
        }
      }
    }
  }
}
.checked-box {
  padding: 0 15px;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      padding: 0;
      margin: 0;
      .level-one {
        border-bottom: 1px solid rgb(240, 240, 240);
        padding: 10px 0;
      }
      .level-two {
        display: flex;
        align-items: center;
        margin-left: 4%;
        position: relative;
        border-bottom: 1px solid rgb(163, 163, 163);
        line-height: 40px;
        .level-two-label {
          width: 12%;
          min-width: 120px;
        }
        // &:before{ content: '';  position: absolute; height: 100%; width: 1px; background: rgb(240, 240, 240); left: 12%; top: 0; }
        .level-three {
          padding-left: 4%;
          display: block;
          flex: 1;
          min-height: 40px;
          border-left: 1px rgb(240, 240, 240) solid;
          .isLevel-four {
            display: flex;
            align-items: center;
            border-bottom: 1px rgb(226, 226, 226) solid;
            .level-three-label {
              width: 25%;
              min-width: 120px;
            }
            .level-four {
              padding-left: 4%;
              flex: 1;
              min-height: 40px;
              border-left: 1px rgb(240, 240, 240) solid;
              .level-five {
                padding-left: 4%;
                min-height: 40px;
                border-left: 1px rgb(240, 240, 240) solid;
              }
            }
          }
        }
      }
      .ivu-checkbox-wrapper {
        margin-right: 15px;
      }
    }
  }
}
.title {
  font-weight: 600;
}
</style>

