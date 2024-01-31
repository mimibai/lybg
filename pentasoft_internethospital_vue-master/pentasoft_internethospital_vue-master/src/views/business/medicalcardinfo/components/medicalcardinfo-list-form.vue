<template>
  <Modal
    :footer-hide="true"
    :width="700"
    title="详情"
    v-model="isShowDetailModal"
  >
    <Form :label-width="100">
      <FormItem label="关联微信用户" prop="weiXinUserId">
        {{ detail.weiXinUserName }}
      </FormItem>
      <FormItem label="姓名" prop="name">
        {{ detail.name }}
      </FormItem>
      <FormItem label="证件号码" prop="idCardNo">
        {{ detail.idCardNo }}
      </FormItem>
      <FormItem label="手机号" prop="mobileNumber">
        {{ detail.mobileNumber }}
      </FormItem>
      <FormItem label="个人渠道授权号" prop="authCode">
        {{ detail.authCode }}
      </FormItem>
      <FormItem label="激活状态" prop="authState">
        {{ detail.authState ? "是" : "否" }}
      </FormItem>
      <FormItem label="授权时间" prop="authDate">
        {{detail.authDate}}
      </FormItem>
      <FormItem label="密码状态" prop="pwdStatus">
        {{ detail.pwdStatus }}
      </FormItem>
      <FormItem label="应用标识" prop="actFlag">
        {{ detail.actFlag }}
      </FormItem>
      <FormItem label="参保状态" prop="insuFlag">
        {{ detail.insuFlag }}
      </FormItem>
      <FormItem label="删除标识" prop="isDelete">
        {{ detail.isDelete ? "是" : "否" }}
      </FormItem>
      <FormItem label="人脸识别认证结果" prop="verifyResult">
        {{ detail.verifyResult }}
      </FormItem>
      <FormItem label="人脸识别是否通过" prop="isPass">
        {{ detail.isPass ? "是" : "否" }}
      </FormItem>
      <FormItem label="人脸识别认证结果是否使用过" prop="isUseVerifyResult">
        {{ detail.isUseVerifyResult ? "是" : "否" }}
      </FormItem>
      <FormItem label="人脸识别通过时间" prop="datePassed">
        {{ detail.datePassed }}
      </FormItem>
      <FormItem label="编辑日期" prop="update_time">
        {{ detail.dateModiffied }}
      </FormItem>
      <FormItem label="创建日期" prop="create_time">
        {{ detail.dateCreated }}
      </FormItem>
    </Form>
  </Modal>
</template>
<script>
import { medicalcardinfoApi } from "@/api/medicalcardinfo";
export default {
  name: "MedicalcardinfoListForm",
  components: {},
  props: {},
  data() {
    return {
      isShowDetailModal: false,
      detail: {},
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    showModal(detail) {
      this.isShowDetailModal = true;
      this.detail = detail;
    },
  },
};
</script>
