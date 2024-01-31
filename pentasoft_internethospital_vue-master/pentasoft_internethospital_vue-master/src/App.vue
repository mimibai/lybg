
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { systemConfigApi } from "@/api/system-config";
import Vue from "vue";
import columnListFormVue from "./views/business/column/components/column-list-form.vue";
export default {
  name: "App",
  created() {
    this.initSystem();
  },
  methods: {
    async initSystem() {
      let result = await systemConfigApi.getCodeVersion();
      if (result.code === 101) {
        this.$store.commit("setSiteInfo", result.data);
        if (Vue.prototype.$config) {
          Vue.prototype.$config.title = result.data.webSiteName;
        }
      }
    },
  },
};
</script>

<style lang="less">
@import "./main.less";
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
