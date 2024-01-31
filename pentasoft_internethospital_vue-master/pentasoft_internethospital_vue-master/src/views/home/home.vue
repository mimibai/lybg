<template>
  <div>
    <Row>
      <Col>
        <HomeCard desc="Online consultation" title="在线咨询">
          <ActivePlate :infoList="infoCardData" />
        </HomeCard>
      </Col>
    </Row>
    <Row :gutter="20">
      <Col :lg="6" :md="24">
        <HomeCard desc="User from" title="用户来源">
          <ChartPie :value="pieData" />
          <Spin fix v-if="showPie"></Spin>
        </HomeCard>

      </Col>
      <Col :lg="18" :md="24">
        <HomeCard desc="User active" title="当日问诊数据统计">
          <ChartLine :value="lineData" />
        </HomeCard>
      </Col>
    </Row>
    <!-- <Row :gutter="20">
      <Col :lg="18" :md="24">
        <HomeCard desc="User from" title="柱状图">
          <ChartBar :value="lineData" />
        </HomeCard>
      </Col>
      <Col :lg="6" :md="24">
        <HomeCard desc="complete" title="完成率">
          <ChartGauge />
        </HomeCard>
      </Col>
    </Row>
    <Row :gutter="20">
      <Col :lg="12" :md="24">
        <HomeCard desc="progress" title="进度条">
          <HomeProgress :value="pieData" />
        </HomeCard>
      </Col>
      <Col :lg="6" :md="24">
        <HomeCard desc="progress" title="目标完成度">
          <Home-circle />
        </HomeCard>
      </Col>
      <Col :lg="6" :md="24">
        <HomeCard desc="progress" title="漏斗图">
          <ChartFunnel :value="pieData" />
        </HomeCard>
      </Col>
    </Row> -->

    <Modal v-model="adModal" width="800">
      <Ad />
    </Modal>
  </div>
</template>

<script>
import ActivePlate from '_c/active-plate/active-plate';
import CountTo from '_c/count-to';
import HomeCard from './components/card';
import ChartPie from './components/chart-pie';
import ChartLine from './components/chart-line';
import ChartGauge from './components/chart-gauge';
import ChartBar from './components/chart-bar';
import HomeCircle from './components/home-circle';
import HomeProgress from './components/home-progress';
import ChartFunnel from './components/chart-funnel';
import Ad from '@/components/smart-admin-ad';
import { clinicRecordStatisticApi } from '@/api/interactions/clinicRecordStatistic.js';

export default {
  name: 'Home',
  components: {
    HomeCard,
    ActivePlate,
    CountTo,
    ChartPie,
    ChartFunnel,
    ChartLine,
    HomeCircle,
    ChartGauge,
    ChartBar,
    HomeProgress,
    Ad
  },
  props: {},
  data () {
    return {
      adModal: false,
      infoCardData: [],
      pieData: [
        // { value: 335, name: '直接访问', color: '#3AA1FF' },
        // { value: 310, name: '邮件营销', color: '#36CBCB' },
        // { value: 234, name: '联盟广告', color: '#4ECB73' },
        // { value: 135, name: '视频广告', color: '#F47F92' },
        // { value: 1548, name: '搜索引擎', color: '#FBD437' }
      ],
      lineData: {},
      showPie: true
    };
  },
  computed: {},
  watch: {},
  filters: {},
  created () {},
  mounted () {
    this.initData();
    this.initClinicData();
    this.initUserSource();
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {
    // 初始化页面数据
    async initData () {
      this.$Spin.show();
      try {
        let result = await clinicRecordStatisticApi.statistic();
        this.infoCardData = result.data;
      } finally {
        this.$Spin.hide();
      }
    },
    // 问诊数据
    async initClinicData () {
      this.$Spin.show();
      try {
        let lineResult = await clinicRecordStatisticApi.statisticByTime();
        this.lineData = lineResult.data;
      } finally {
        this.$Spin.hide();
      }
    },
    // 用户来源数据
    async initUserSource () {
      this.showPie = true;
      try {
        let lineResult = await clinicRecordStatisticApi.statisticUserSource();
        this.pieData = lineResult.data;
      } finally {
        this.showPie = false;
      }
    }
  }
};
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
</style>
