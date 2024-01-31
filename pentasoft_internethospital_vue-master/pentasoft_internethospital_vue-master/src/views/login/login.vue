<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="content">
      <header class="logo center">
        <div style="display: flex; width: 290px; margin: 0 auto">
          <img
            alt
            src="siteInfo.logo"
            :src="siteInfo.logo"
            style="width: 100px"
          />
          <div style="font-size: 30px; margin-left: 20px">
            {{ siteInfo.webSiteName }}
          </div>
        </div>
      </header>
      <div class="form-con">
        <login-form @on-success-valid="handleSubmit"></login-form>
      </div>
      <footer class="center footerDesc">
        ©{{ siteInfo.siteCopyRight }}  {{ siteInfo.siteVersion }}
      </footer>
    </div>
  </div>
</template>
<script>
import LoginForm from "./components/login-form";
import { mapActions, mapGetters } from "vuex";
import $ from "jquery";
import { lonWave, canvasParticle } from "./canvas";
export default {
  name: "login",
  props: {},
  components: {
    LoginForm,
  },
  data() {
    return {
      siteInfo: {},
    };
  },
  computed: {
    ...mapGetters(["systemInfo"]),
  },
  watch: {},
  filters: {},
  created() {},
  mounted() {
    this.$Spin.hide();
    this.initSystem();
  },
  methods: {
    ...mapActions(["handleLogin"]),
    // 提交
    handleSubmit(params) {
      this.handleLogin(params).then((res) => {
        this.$router.push({
          name: this.$config.homeName,
        });
      });
    },
    initSystem() {
      this.siteInfo = this.systemInfo;
    },
  },
};
</script>
