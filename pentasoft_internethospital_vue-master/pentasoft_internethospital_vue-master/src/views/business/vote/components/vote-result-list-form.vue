<template>
  <Modal
    :footer-hide="true"
    :width="700"
    title="详情"
    v-model="isShowDetailModal"
  >
    <Form :label-width="90" inline>
      <Row :gutter="16">
        <Col span="12">
          <FormItem label="所在投票:">{{ detail.voteName }}</FormItem>
        </Col>
        <Col span="12">
          <FormItem label="投票日期:">{{ detail.voteDate }}</FormItem>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="12">
          <FormItem label="IP:">{{ detail.ip }}</FormItem>
        </Col>
        <Col span="12">
          <FormItem label="投票人姓名:">{{ detail.voterName }}</FormItem>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="12">
          <FormItem label="分值:">{{ detail.score }}</FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否已核验:">{{
            detail.isVerification ? "是" : "否"
          }}</FormItem>
        </Col>
      </Row>
      <Divider>以下为填写的结果项</Divider>
      <template
        v-for="(item, index) in detail.voteResultMap"
        style="background:#f8f8f9"
      >
        <Row :gutter="16">
          <Col span="12">
            <FormItem v-bind:label="item.title">{{ item.valueStr }}</FormItem>
          </Col>
        </Row>
      </template>
    </Form>
  </Modal>
</template>
<script>
export default {
  name: "VoteResultDetail",
  components: {},
  props: {},
  data() {
    return {
      isShowDetailModal: false,
      detail: {}
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    showModal(detail) {
      this.isShowDetailModal = true;
      this.detail = detail;
    }
  }
};
</script>
