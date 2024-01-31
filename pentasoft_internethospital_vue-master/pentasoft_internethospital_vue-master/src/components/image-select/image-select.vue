<template>
  <Row :gutter="16">
    <Col span="6" v-for="(item, index) in dataList" :key="index">
      <Card style="border: 1px solid #e7eaec">
        <div style="text-align: center">
          <img :src="item.src" style="width: 100%" />
          <Row>
            <Col span="18" style="text-align: left">
              {{ item.name }}
            </Col>
            <Col span="6">
              <Button size="small">应用</Button>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  </Row>
</template>
<script>
import { appPageModuleStyleApi } from '@/api/app/app-page-module-style';

export default {
  name: 'ImageSelect',
  props: {
    pageModuleTypeId: {
      type: Number
    }
  },
  data () {
    return {
      propPageModuleTypeId: this.pageModuleTypeId,
      dataList: [
        {
          id: 1,
          name: '首页轮播图一',
          src: 'https://wx4.sinaimg.cn/bmiddle/005RAtQwly1gtquw2ga82j60p00p076b02.jpg'
        },
        {
          id: 2,
          name: '首页轮播图二',
          src: 'https://wx4.sinaimg.cn/bmiddle/005RAtQwly1gtquw2ga82j60p00p076b02.jpg'
        },
        {
          id: 3,
          name: '首页轮播图三',
          src: 'https://wx4.sinaimg.cn/bmiddle/005RAtQwly1gtquw2ga82j60p00p076b02.jpg'
        },
        {
          id: 4,
          name: '首页轮播图四',
          src: 'https://wx4.sinaimg.cn/bmiddle/005RAtQwly1gtquw2ga82j60p00p076b02.jpg'
        },
        {
          id: 5,
          name: '首页轮播图五',
          src: 'https://wx4.sinaimg.cn/bmiddle/005RAtQwly1gtquw2ga82j60p00p076b02.jpg'
        }
      ]
    };
  },
  computed: {},
  mounted () {
    this.initData();
  },
  watch: {
    pageModuleTypeId: function (newValue) {
      if (newValue) {
        this.propPageModuleTypeId = newValue;
      }
    }
  },
  methods: {
    initData () {
      (async () => {
        this.dataList = [];
        let params = {
          pageModuleTypeId: this.propPageModuleTypeId,
          pageSize: 999
        };
        let result = await appPageModuleStyleApi.queryAppPageModuleStyle(
          params
        );
        this.dataList = result.data.list;
      })();
    }
  }
};
</script>
