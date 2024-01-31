<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="24">
          <FormItem prop="voteId" label="所在投票项">
            <Select class="form-width" v-model="form.voteItemId">
              <Option
                :value="item.value"
                v-for="item in voteItemListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="投票明细名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="名称缩写" prop="shortName">
            <Input v-model="form.shortName" />
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="是否附加文本" prop="isAppendText">
            <Checkbox v-model="form.isAppendText"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="附加文本标题" prop="appendTextTitle">
            <Input v-model="form.appendTextTitle" />
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="是否仅为文本" prop="isOnlyText">
            <Checkbox v-model="form.isOnlyText"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="投票总数" prop="voteTotal">
            <Input type="number" v-model.number="form.voteTotal" />
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="是否为链接项" prop="isLinkItem">
            <Checkbox v-model="form.isLinkItem"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="链接地址" prop="linkUrl">
            <Input v-model="form.linkUrl" />
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="分值" prop="score">
            <Input type="number" v-model.number="form.score" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="跳转题的集合" prop="skipVoteItemIdArray">
            <Select multiple class="form-width" v-model="form.skipVoteItemIdArray">
              <Option
                :value="item.value"
                v-for="item in voteItemListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="是否清空选项" prop="isEmptyOption">
            <Checkbox v-model="form.isEmptyOption"></Checkbox>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { getStepNodeName } from "@/lib/util";
import { voteDetailApi } from "@/api/vote/vote-detail";
import { voteItemApi } from "@/api/vote/vote-item";
export default {
  name: "VotedetailListForm",
  components: {},
  props: {
    //是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true,
    },
    //更新的表单数据对象
    updateData: {
      type: Object,
    },
    //投票id
    voteId: {
      type: Number,
    },
    voteItemId: {
      type: Number,
    },
  },
  data() {
    return {
      voteItemListData: [],
      //表单数据
      form: {
        voteDetailId: null,
        //投票明细名称
        name: null,
        //名称缩写
        shortName: null,
        //是否附加文本
        isAppendText: false,
        //附加文本标题
        appendTextTitle: null,
        //是否仅为文本
        isOnlyText: false,
        //投票总数
        voteTotal: null,
        //排序
        sorting: null,
        //所在投票项
        voteItemId: this.voteItemId,
        //所在投票
        voteId: this.voteId,
        //所在站点
        siteId: null,
        //是否为链接项
        isLinkItem: false,
        //链接地址
        linkUrl: null,
        //分值
        score: null,
        //跳转题的集合
        skipVoteItemIds: null,
        skipVoteItemIdArray:[],
        //是否清空选项
        isEmptyOption: false,
      },
      //表单验证
      formValidate: {
        //投票明细名称
        name: [
          { required: true, message: "请输入投票明细名称", trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs["form"].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, "voteDetailId", newValue["voteDetailId"]);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
    // voteId: function (newValue, oldValue) {
    //   if (newValue) {
    //     this.form.voteId = newValue;
    //   }
    // },
    // voteItemId: function (newValue, oldValue) {
    //   if (newValue) {
    //     this.form.voteItemId = newValue;
    //   }
    // },
  },
  created() {
    this.initVoteItemList();
  },
  mounted() {},
  methods: {
    cancel() {
      this.$emit("on-form-close");
    },
    save() {
      if (this.form.skipVoteItemIdArray) {
        //跳转题数组转为字符串
        this.form.skipVoteItemIds = this.form.skipVoteItemIdArray.toString();
      }
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.isUpdate) {
            this.update();
          } else {
            this.add();
          }
        } else {
          this.$Message.error("参数验证错误，请仔细填写表单数据!");
        }
      });
    },
    resetForm() {
      this.form = {
        voteDetailId: null,
        //投票明细名称
        name: null,
        //名称缩写
        shortName: null,
        //是否附加文本
        isAppendText: false,
        //附加文本标题
        appendTextTitle: null,
        //是否仅为文本
        isOnlyText: false,
        //投票总数
        voteTotal: null,
        //排序
        sorting: null,
        //所在投票项
        voteItemId: this.voteItemId,
        //所在投票
        voteId: this.voteId,
        //所在站点
        siteId: null,
        //是否为链接项
        isLinkItem: false,
        //链接地址
        linkUrl: null,
        //分值
        score: null,
        //跳转题的集合
        skipVoteItemIds: null,
        skipVoteItemIdArray:[],
        //是否清空选项
        isEmptyOption: false,
      };
      this.$refs["form"].resetFields();
    },
    //查询投票项列表
    async initVoteItemList() {
      try {
        let params = {
          pageNum: 1,
          voteId: this.voteId,
        };
        let result = await voteItemApi.queryVoteitem(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.voteItemId,
            label: getStepNodeName(item.name, item.depth),
          });
        });
        this.voteItemListData = list;
      } finally {
      }
    },
    async add() {
      this.$Spin.show();
      let res = await voteDetailApi.addVoteDetail(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await voteDetailApi.updateVoteDetail(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
