<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="120" :model="form">
      <Row>
        <Col span="24">
          <FormItem prop="voteId" label="所在投票">
            <Select class="form-width" v-model="form.voteId">
              <Option
                :value="item.value"
                v-for="item in voteListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="投票项名称" prop="name">
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
          <FormItem label="投票总数" prop="voteTotal">
            <Input type="number" v-model.number="form.voteTotal" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否必填" prop="isRequired">
            <Checkbox v-model="form.isRequired"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="是否为真正投票项" prop="isRealItem">
            <Checkbox v-model="form.isRealItem"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="子项的样式类型" prop="childrenStyleTypeId">
            <Select class="form-width" v-model="form.childrenStyleTypeId">
              <Option
                :value="item.value"
                v-for="item in childrenStyleTypeListData"
                :key="item.value"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row border>
        <Col span="12">
          <FormItem label="投票项类型：" prop="voteItemTypeId">
            <Select class="form-width" v-model="form.voteItemTypeId">
              <Option
                :value="item.value"
                v-for="item in voteItemTypeListData"
                :key="item.value"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12" v-if="form.voteItemTypeId == 1">
          <FormItem label="多选投票数量限制" prop="voteItemCountLimit">
            <Input type="number" v-model.number="form.voteItemCountLimit" />
          </FormItem>
        </Col>
      </Row>
      <div v-if="form.voteItemTypeId == 5">
        <Row>
          <Col span="12">
            <FormItem label="枚举选择类型" prop="enumChoiceTypeId">
              <Select class="form-width" v-model="form.enumChoiceTypeId">
                <Option
                  :value="item.value"
                  v-for="item in EnumDropListData"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
            <Col span="12" v-if="form.enumChoiceTypeId == 1">
              <FormItem label="系统枚举code" prop="enumName">
                <Input v-model="form.enumName" />
              </FormItem>
            </Col>
            <Col span="12" v-if="form.enumChoiceTypeId == 2">
              <FormItem label="枚举表类型" prop="enumItemTypeId">
                <Select class="form-width" v-model="form.enumItemTypeId">
                  <Option
                    :title="item.description"
                    :value="item.value"
                    v-for="item in EnumTypeListData"
                    :key="item.value"
                    >{{ item.label + "(" + item.code + ")" }}</Option
                  >
                </Select>
              </FormItem>
            </Col>
          </Col>
        </Row>
      </div>
      <div v-if="form.voteItemTypeId == 3">
        <Row>
          <Col span="12">
            <FormItem label="是否为填写项" prop="isFillItem">
              <Checkbox v-model="form.isFillItem"></Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="文本框类型" prop="textTypeId">
              <Select class="form-width" v-model="form.textTypeId">
                <Option
                  :value="item.value"
                  v-for="item in textTypeListData"
                  :key="item.value"
                  >{{ item.desc }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="文本框限制最少填写字数" prop="textLimitMinNum">
              <Input type="number" v-model.number="form.textLimitMinNum" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="文本框限制最多填写字数" prop="textLimitMaxNum">
              <Input type="number" v-model.number="form.textLimitMaxNum" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="文本提示语" prop="textPlaceholder">
              <Input v-model="form.textPlaceholder" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="是否加密存储" prop="isEncryp">
              <Checkbox v-model="form.isEncryp"></Checkbox>
            </FormItem>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span="24">
          <FormItem label="图片路径" prop="imageUrl">
            <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.imageUrl"
            ></FileUploadSingle>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="链接地址" prop="linkUrl">
            <Input v-model="form.linkUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="得分" prop="score">
            <Input type="number" v-model.number="form.score" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="跳转题的类型" prop="skipVoteItemTypeId">
            <Select class="form-width" v-model="form.skipVoteItemTypeId">
              <Option
                :value="item.value"
                v-for="item in skipVoteItemTypeListData"
                :key="item.value"
                >{{ item.desc }}</Option
              >
            </Select>
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
import {
  VOTE_CHILDREN_STYLE_TYPES,
  VOTE_ITEM_TYPES,
  TEXT_TYPES,
  SKIP_VOTE_ITEM_TYPES
} from '@/constants/vote';
import { voteApi } from '@/api/vote/vote';
import { voteItemApi } from '@/api/vote/vote-item';
import { fileApi } from '@/api/file';
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
import { enumApi } from '@/api/enum';
import { localRead, localSave, TOKEN_KEY } from '@/lib/local';
import config from '@/config';
import FileUploadSingle from '@/components/file-upload-single';
const baseUrl = config.baseUrl.apiUrl;
export default {
  name: 'VoteItemListForm',
  components: { FileUploadSingle },
  props: {
    // 是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true
    },
    // 更新的表单数据对象
    updateData: {
      type: Object
    },
    // 投票id
    voteId: {
      type: Number
    },
    // 上级id
    objParentId: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // 上传图片组件参数
      imageUrlModuleType: SERVICE_TYPE.VOTE.value,
      voteListData: [],
      EnumDropListData: [],
      EnumTypeListData: [],
      // 表单数据
      form: {
        // 投票项名称
        name: null,
        // 名称缩写
        shortName: null,
        // 投票总数
        voteTotal: null,
        // 是否必填
        isRequired: true,
        // 所在投票
        voteId: this.voteId,
        // 所在站点
        siteId: null,
        // 是否为真正投票项
        isRealItem: true,
        // 子项的样式类型 枚举EnumChildrenStyleType：1=横排，2=竖排
        childrenStyleTypeId: null,
        // 投票项类型：1=多选项，2=单选项，3=文本内容
        voteItemTypeId: null,
        // 多选投票数量限制  为null和0为不限制多选几个，为负数的话则为最少可以选几个，为正数则为最多可以选择几个
        voteItemCountLimit: null,
        // 是否为填写项
        isFillItem: false,
        // 文本框类型
        textTypeId: null,
        // 文本框最少字数
        textLimitMinNum: null,
        // 文本框最多字数
        textLimitMaxNum: null,
        // 文本框提示语
        textPlaceholder: null,
        // 是否加密存储
        isEncryp: false,
        // 图片路径
        imageUrl: null,
        // 链接地址
        linkUrl: null,
        // 得分
        score: null,
        // 跳转题的类型   1触发跳题 2被触发跳题
        skipVoteItemTypeId: null,
        parentId: 0,
        enumChoiceTypeId: null,
        enumName: null,
        enumItemTypeId: null
      },
      // 表单验证
      formValidate: {
        // 投票项名称
        name: [
          { required: true, message: '请输入投票项名称', trigger: 'blur' }
        ],
        // 所在投票
        voteId: [
          {
            type: 'number',
            required: true,
            message: '请选择',
            trigger: 'blur'
          }
        ],
        // 子项的样式类型 枚举EnumChildrenStyleType：1=横排，2=竖排
        childrenStyleTypeId: [
          {
            type: 'number',
            required: true,
            message: '请选择子项的样式类型',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  computed: {
    // 子项的样式类型
    childrenStyleTypeListData: function () {
      let array = [];
      for (let item in VOTE_CHILDREN_STYLE_TYPES) {
        let obj = {};
        obj.desc = VOTE_CHILDREN_STYLE_TYPES[item].desc;
        obj.value = VOTE_CHILDREN_STYLE_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    // 投票项类型
    voteItemTypeListData: function () {
      let array = [];
      for (let item in VOTE_ITEM_TYPES) {
        let obj = {};
        obj.desc = VOTE_ITEM_TYPES[item].desc;
        obj.value = VOTE_ITEM_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    // 文本框类型
    textTypeListData: function () {
      let array = [];
      for (let item in TEXT_TYPES) {
        let obj = {};
        obj.desc = TEXT_TYPES[item].desc;
        obj.value = TEXT_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    skipVoteItemTypeListData: function () {
      let array = [];
      for (let item in SKIP_VOTE_ITEM_TYPES) {
        let obj = {};
        obj.desc = SKIP_VOTE_ITEM_TYPES[item].desc;
        obj.value = SKIP_VOTE_ITEM_TYPES[item].value;
        array.push(obj);
      }
      return array;
    }
  },
  watch: {
    objParentId: function (newVal) {
      if (newVal) {
        this.form.parentId = newVal;
      }
    },
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'voteItemId', newValue['voteItemId']);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    }
  },
  created () {
    this.initVoteList();
    this.getEnumData();
    this.getEnumTypeData();
  },
  mounted () {},
  methods: {
    // 查询
    async initVoteList () {
      try {
        let params = {
          pageNum: 1
        };
        let result = await voteApi.queryVote(params);
        let datas = result.data;
        let list = [];
        datas.list.map(item => {
          list.push({
            value: item.voteId,
            label: item.name
          });
        });
        this.voteListData = list;
      } finally {
      }
    },
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.isUpdate) {
            this.update();
          } else {
            this.add();
          }
        } else {
          this.$Message.error('参数验证错误，请仔细填写表单数据!');
        }
      });
    },
    resetForm () {
      this.form = {
        // 投票项名称
        name: null,
        // 名称缩写
        shortName: null,
        // 投票总数
        voteTotal: null,
        // 是否必填
        isRequired: true,
        // 所在投票
        voteId: this.voteId,
        // 所在站点
        siteId: null,
        // 是否为真正投票项
        isRealItem: true,
        // 子项的样式类型 枚举EnumChildrenStyleType：1=横排，2=竖排
        childrenStyleTypeId: null,
        // 投票项类型：1=多选项，2=单选项，3=文本内容
        voteItemTypeId: null,
        // 多选投票数量限制  为null和0为不限制多选几个，为负数的话则为最少可以选几个，为正数则为最多可以选择几个
        voteItemCountLimit: null,
        // 是否为填写项
        isFillItem: false,
        // 文本框类型
        textTypeId: null,
        // 文本框最少字数
        textLimitMinNum: null,
        // 文本框最多字数
        textLimitMaxNum: null,
        // 文本框提示语
        textPlaceholder: null,
        // 是否加密存储
        isEncryp: false,
        // 图片路径
        imageUrl: null,
        // 链接地址
        linkUrl: null,
        // 得分
        score: null,
        // 跳转题的类型   1触发跳题 2被触发跳题
        skipVoteItemTypeId: null,
        parentId: 0,
        enumChoiceTypeId: null,
        enumName: null,
        enumItemTypeId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await voteItemApi.addVoteitem(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await voteItemApi.updateVoteitem(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async getEnumData () {
      this.$Spin.show();
      try {
        let params = {
          enumCode: 'EnumChoiceTypeEnum'
        };
        // console.info("开始调用接口");
        let result = await enumApi.queryEnumitem(params);
        // console.info(result);
        let datas = result.data;
        let list = [];
        // console.info(datas);
        this.EnumDropListData = datas.map(item => ({
          value: item.id,
          label: item.name
        }));
      } finally {
        this.$Spin.hide();
      }
    },
    async getEnumTypeData () {
      this.$Spin.show();
      try {
        // console.info("获取所有枚举表枚举");
        let result = await enumApi.getEnumItemAll();
        // console.info(result);
        let datas = result.data;
        let list = [];
        // console.info(datas);
        this.EnumTypeListData = datas.map(item => ({
          value: item.enumItemTypeId,
          code: item.code,
          label: item.name,
          description: item.description
        }));
      } finally {
        this.$Spin.hide();
      }
    }
  }
};
</script>
