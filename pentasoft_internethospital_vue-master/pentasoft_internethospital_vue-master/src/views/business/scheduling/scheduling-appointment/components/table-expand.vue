<template>
  <div>
    <Row class="expand-row">
      <Col span="24" style="text-align:center;">
        <b>{{ row.name }}</b>&nbsp;&nbsp;共预约<b>{{ row.appointNum || 0 }}</b
        >次，成功登记取号<b>{{ row.registeredNum || 0 }}</b
        >次，取消预约<b>{{ row.invalidNum || 0 }}</b
        >次。
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object,
  },
};
</script>