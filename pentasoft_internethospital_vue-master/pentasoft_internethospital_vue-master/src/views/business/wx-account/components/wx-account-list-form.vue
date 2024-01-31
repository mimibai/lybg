<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="140" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信应用类别" prop="weiXinApplicationTypeId">
            <Select
              placeholder="请选择应用类型"
              v-model="form.weiXinApplicationTypeId"
              on-change="applicationTypeChange"
            >
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in wxApplicationTypeList"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="AppID(应用ID)" prop="appId">
            <Input v-model="form.appId" /> </FormItem
        ></Col>
        <Col span="12"
          ><FormItem label="AppSecret(应用密钥)" prop="appSecret">
            <Input v-model="form.appSecret" /> </FormItem
        ></Col>
      </Row>
      <template v-if="form.weiXinApplicationTypeId == 1">
        <Row>
          <Col span="12">
            <FormItem label="微信账号类别" prop="weiXinAccountTypeId">
              <Select
                placeholder="请选择微信账号类别"
                v-model="form.weiXinAccountTypeId"
              >
                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in wxAccountTypeList"
                  >{{ item.desc }}</Option
                >
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="微信类别" prop="weiXinTypeId">
              <Select placeholder="请选择微信类别" v-model="form.weiXinTypeId">
                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in wxTypeList"
                  >{{ item.desc }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="原始Id(标识微信)" prop="toUserName">
              <Input v-model="form.toUserName" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="连接令牌Token" prop="token">
              <Input v-model="form.token" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否主帐号" prop="isMainAccount">
              <Checkbox v-model="form.isMainAccount"></Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否启用" prop="isOpen">
              <Checkbox v-model="form.isOpen"></Checkbox>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否开启关键字搜索" prop="isOpenSeachKeyWord">
              <Checkbox v-model="form.isOpenSeachKeyWord"></Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否开启医生对话" prop="isOpenDoctorDialog">
              <Checkbox v-model="form.isOpenDoctorDialog"></Checkbox>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否开启授权登录" prop="isOpenOauth2Authorize">
              <Checkbox v-model="form.isOpenOauth2Authorize"></Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否开启消息通路" prop="isOpenMessagePath">
              <Checkbox v-model="form.isOpenMessagePath"></Checkbox>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否自动同步图文" prop="isAutoSynchronizeNews">
              <Checkbox v-model="form.isAutoSynchronizeNews"></Checkbox>
            </FormItem>
          </Col>
          <Col span="12"> </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="自动同步栏目" prop="autoSynchronizeToColoumnId">
              <Select
                placeholder="请选择"
                v-model="form.autoSynchronizeToColoumnId"
              >
                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in columnListData"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="是否审核同步栏目"
              prop="isApproveForAutoSynColoumn"
            >
              <Checkbox v-model="form.isApproveForAutoSynColoumn"></Checkbox>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="图文标题字数" prop="titleCount">
              <Input type="number" v-model.number="form.titleCount" />为空不限
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="标题内容分隔符" prop="splitCharForTitle">
              <Input v-model="form.splitCharForTitle" />开启摘要或内容有效
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="是否拼接内容" prop="isAddConentForTitle">
              <Checkbox v-model="form.isAddConentForTitle"></Checkbox
              >摘要和内容二选一,可不选
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否拼接摘要" prop="isAddSummaryForTitle">
              <Checkbox v-model="form.isAddSummaryForTitle"></Checkbox
              >摘要和内容二选一,可不选
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem
              label="是否允许患者主动建立对话"
              prop="isOpenPatientCreateDialog"
            >
              <Checkbox v-model="form.isOpenPatientCreateDialog"></Checkbox>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="完全匹配时是否单条显示"
              prop="autoReplyKeyWordOnlyOneIsSolo"
            >
              <Checkbox v-model="form.autoReplyKeyWordOnlyOneIsSolo" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="搜索站点ID" prop="seachKeyWordSiteId">
              <Input type="number" v-model.number="form.seachKeyWordSiteId" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否搜索子项" prop="isSearchSubkey">
              <Checkbox v-model="form.isSearchSubkey" />
            </FormItem>
          </Col>
        </Row>
        <Divider style="background: #e8eaec; color: #339240"
          >关键字搜索模块：医生 = 2；文章 = 3；视频 = 5；咨询 = 6；科室 =
          7；疾病 = 8；特色技术 = 9；关键字 = 10；站点=12
        </Divider>
        <Row>
          <Col span="24">
            <FormItem label="搜索模块IDS(可多选)" prop="seachKeyWordIdArray">
              <Select
                class="form-width"
                multiple
                v-model="form.seachKeyWordIdArray"
              >
                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in wxEventSearchTypeList"
                  >{{ item.desc }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="回复内容条数" prop="autoReplyKeyWordCount">
              <Input
                type="number"
                v-model.number="form.autoReplyKeyWordCount"
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="是否删除" prop="isDelete">
              <Checkbox v-model="form.isDelete" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="关注自动回复内容" prop="autoReplyIsAddedKeyWordId">
              <Select placeholder="请选择" v-model="form.autoReplyIsAddedKeyWordId">

                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in wxKeyWordFollowList"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="关注追加回复内容"
              prop="autoReplyIsAddedKeyWordIdArray"
            >
              <Select
                class="form-width"
                multiple
                v-model="form.autoReplyIsAddedKeyWordIdArray"
              >
                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in wxKeyWordList"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="未匹配自动回复内容" prop="autoReplyNoMate">
              <Input
                v-model="form.autoReplyNoMate"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 10 }"
                placeholder=""
              ></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <FormItem label="页面底部图片地址" prop="weiXinPageBottomImageUrl">
              <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.weiXinPageBottomImageUrl"
            ></FileUploadSingle>
            </Col>
          </FormItem>
        </Row>
      </template>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
import { localRead, localSave, TOKEN_KEY } from '@/lib/local';
import { wxAccountApi } from '@/api/weixin/wx-account';
import { columnApi } from '@/api/news/column';
import { wxKeyWordApi } from '@/api/weixin/wx-key-word';
import FileUploadSingle from '@/components/file-upload-single';
import {
  WX_APPLICATION_TYPES,
  WX_ACCOUNT_TYPES,
  WX_TYPES,
  WX_KEY_WORD_TYPES,
  WX_EVENT_SEARCH_TYPES
} from '@/constants/enum-wx';
export default {
  name: 'WxAccountListForm',
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
    }
  },
  data () {
    return {
      imageUrlModuleType: SERVICE_TYPE.WX_ACCOUNT.value,
      wxKeyWordList: [],
      wxKeyWordFollowList: [],
      columnListData: [],
      // 表单数据
      form: {
        // 名称
        name: null,
        // 原始Id(标识微信)
        toUserName: null,
        // 微信类别
        weiXinTypeId: null,
        // 微信账号类别
        weiXinAccountTypeId: null,
        // AppID(应用ID)
        appId: null,
        // AppSecret(应用密钥)
        appSecret: null,
        // 连接令牌Token
        token: null,
        // 是否启用
        isOpen: true,
        // 是否开启关键字搜索
        isOpenSeachKeyWord: true,
        // 是否开启医生对话
        isOpenDoctorDialog: null,
        // 回复内容条数
        autoReplyKeyWordCount: 5,
        // 完全匹配时是否单条显示
        autoReplyKeyWordOnlyOneIsSolo: true,
        // 搜索模块IDS
        seachKeyWordIds: null,
        seachKeyWordIdArray: [],
        // 搜索站点ID
        seachKeyWordSiteId: null,
        // 是否搜索子项
        isSearchSubkey: null,
        // 关闭搜索关键字回复内容
        autoReplyCloseSeachKeyWord: null,
        // 关注自动回复内容
        autoReplyIsAdded: null,
        // 是否主帐号
        isMainAccount: null,
        // 是否删除
        isDelete: null,
        // 是否开启授权登录
        isOpenOauth2Authorize: null,
        // 页面底部图片地址
        weiXinPageBottomImageUrl: null,
        // 图文标题字数
        titleCount: null,
        // 是否拼接内容
        isAddConentForTitle: true,
        // 是否拼接摘要
        isAddSummaryForTitle: null,
        // 标题内容分隔符
        splitCharForTitle: null,
        // 微信应用类型
        weiXinApplicationTypeId: null,
        // 关注自动回复内容
        autoReplyIsAddedKeyWordId: null,
        // 关注追加回复内容
        autoReplyIsAddedKeyWordIds: null,
        autoReplyIsAddedKeyWordIdArray: [],
        // 是否开启消息通路
        isOpenMessagePath: null,
        // 是否自动同步图文
        isAutoSynchronizeNews: null,
        // 自动同步栏目
        autoSynchronizeToColoumnId: null,
        // 是否审核同步栏目
        isApproveForAutoSynColoumn: null
      },
      // 表单验证
      formValidate: {
        // 名称
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        // 原始Id(标识微信)
        toUserName: [
          {
            required: false,
            message: '请输入原始Id(标识微信)',
            trigger: 'blur'
          }
        ],
        // 微信类别
        weiXinTypeId: [
          {
            type: 'number',
            required: false,
            message: '请输入微信类别',
            trigger: 'blur'
          }
        ],
        // 微信账号类别
        weiXinAccountTypeId: [
          {
            type: 'number',
            required: false,
            message: '请输入微信账号类别',
            trigger: 'blur'
          }
        ],
        // AppID(应用ID)
        appId: [
          { required: true, message: '请输入AppID(应用ID)', trigger: 'blur' }
        ],
        // AppSecret(应用密钥)
        appSecret: [
          {
            required: true,
            message: '请输入AppSecret(应用密钥)',
            trigger: 'blur'
          }
        ],
        // 连接令牌Token
        token: [
          { required: true, message: '请输入连接令牌Token', trigger: 'blur' }
        ],
        // 回复内容条数
        autoReplyKeyWordCount: [
          {
            type: 'number',
            required: false,
            message: '请输入回复内容条数',
            trigger: 'blur'
          }
        ],
        // 搜索模块IDS
        seachKeyWordIds: [
          { required: false, message: '请输入搜索模块IDS', trigger: 'blur' }
        ],
        // 关注自动回复内容
        autoReplyIsAdded: [
          {
            required: false,
            message: '请输入关注自动回复内容',
            trigger: 'blur'
          }
        ],
        // 页面底部图片地址
        weiXinPageBottomImageUrl: [
          {
            required: false,
            message: '请输入页面底部图片地址',
            trigger: 'blur'
          }
        ],
        // 图文标题字数
        titleCount: [
          {
            type: 'number',
            required: false,
            message: '请输入图文标题字数',
            trigger: 'blur'
          }
        ],
        // 标题内容分隔符
        splitCharForTitle: [
          { required: false, message: '请输入标题内容分隔符', trigger: 'blur' }
        ],
        // 微信应用类型
        weiXinApplicationTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入微信应用类型',
            trigger: 'blur'
          }
        ],
        // 关注自动回复内容
        autoReplyIsAddedKeyWordId: [
          {
            type: 'number',
            required: false,
            message: '请输入关注自动回复内容',
            trigger: 'blur'
          }
        ],
        // 关注追加回复内容
        autoReplyIsAddedKeyWordIds: [
          {
            required: false,
            message: '请输入关注追加回复内容',
            trigger: 'blur'
          }
        ],
        // 自动同步栏目
        autoSynchronizeToColoumnId: [
          {
            type: 'number',
            required: false,
            message: '请输入自动同步栏目',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  computed: {
    fileLocationTypes: function () {
      let array = [];
      for (const item in FILE_TYPE) {
        let obj = {};
        obj.desc = FILE_TYPE[item].desc;
        obj.value = FILE_TYPE[item].value;
        array.push(obj);
      }
      return array;
    },
    wxApplicationTypeList: function () {
      let array = [];
      for (const item in WX_APPLICATION_TYPES) {
        let obj = {};
        obj.desc = WX_APPLICATION_TYPES[item].desc;
        obj.value = WX_APPLICATION_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    wxAccountTypeList: function () {
      let array = [];
      for (const item in WX_ACCOUNT_TYPES) {
        let obj = {};
        obj.desc = WX_ACCOUNT_TYPES[item].desc;
        obj.value = WX_ACCOUNT_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },

    wxTypeList: function () {
      let array = [];
      for (const item in WX_TYPES) {
        let obj = {};
        obj.desc = WX_TYPES[item].desc;
        obj.value = WX_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    wxEventSearchTypeList: function () {
      let array = [];
      for (const item in WX_EVENT_SEARCH_TYPES) {
        let obj = {};
        obj.desc = WX_EVENT_SEARCH_TYPES[item].desc;
        obj.value = WX_EVENT_SEARCH_TYPES[item].value;
        array.push(obj);
      }
      return array;
    }
  },
  watch: {
    updateData: function (newValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'weiXinAccountId', newValue['weiXinAccountId']);
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
    this.initColumn();
    this.initWxKeyWordList();
  },
  mounted () {},
  methods: {
    /* -------------------------页面数据初始化 begin------------------- */
    async initWxKeyWordList () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 100
        };
        let result = await wxKeyWordApi.queryWeixinkeyword(params);
        let datas = result.data;
        let list = [];
        let follwList = [];
        datas.list.map((item) => {
          if (item.weiXinKeyWordTypeId == WX_KEY_WORD_TYPES.FOLLOW.value) {
            follwList.push({
              value: item.weiXinKeyWordId,
              label: item.keyWord
            });
          }
          list.push({
            value: item.weiXinKeyWordId,
            label: item.keyWord
          });
        });
        this.wxKeyWordList = list;
        this.wxKeyWordFollowList = follwList;
      } finally {
        this.$Spin.hide();
      }
    },
    async initColumn () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await columnApi.queryColumn(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.columnId,
            label: item.name
          });
        });
        this.columnListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    /* -------------------------页面数据初始化 end------------------- */
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.autoReplyIsAddedKeyWordIdArray) {
            this.form.autoReplyIsAddedKeyWordIds = this.form.autoReplyIsAddedKeyWordIdArray.toString();
          }
          if (this.form.seachKeyWordIdArray) {
            this.form.seachKeyWordIds = this.form.seachKeyWordIdArray.toString();
          }
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
        // 名称
        name: null,
        // 原始Id(标识微信)
        toUserName: null,
        // 微信类别
        weiXinTypeId: null,
        // 微信账号类别
        weiXinAccountTypeId: null,
        // AppID(应用ID)
        appId: null,
        // AppSecret(应用密钥)
        appSecret: null,
        // 连接令牌Token
        token: null,
        // 是否启用
        isOpen: true,
        // 是否开启关键字搜索
        isOpenSeachKeyWord: true,
        // 是否开启医生对话
        isOpenDoctorDialog: null,
        // 回复内容条数
        autoReplyKeyWordCount: 5,
        // 完全匹配时是否单条显示
        autoReplyKeyWordOnlyOneIsSolo: true,
        // 搜索模块IDS
        seachKeyWordIds: null,
        seachKeyWordIdArray: [],
        // 搜索站点ID
        seachKeyWordSiteId: null,
        // 是否搜索子项
        isSearchSubkey: null,
        // 关闭搜索关键字回复内容
        autoReplyCloseSeachKeyWord: null,
        // 关注自动回复内容
        autoReplyIsAdded: null,
        // 是否主帐号
        isMainAccount: null,
        // 是否删除
        isDelete: null,
        // 是否开启授权登录
        isOpenOauth2Authorize: null,
        // 页面底部图片地址
        weiXinPageBottomImageUrl: null,
        // 图文标题字数
        titleCount: null,
        // 是否拼接内容
        isAddConentForTitle: true,
        // 是否拼接摘要
        isAddSummaryForTitle: null,
        // 标题内容分隔符
        splitCharForTitle: null,
        // 微信应用类型
        weiXinApplicationTypeId: null,
        // 关注自动回复内容
        autoReplyIsAddedKeyWordId: null,
        // 关注追加回复内容
        autoReplyIsAddedKeyWordIds: null,
        autoReplyIsAddedKeyWordIdArray: [],
        // 是否开启消息通路
        isOpenMessagePath: null,
        // 是否自动同步图文
        isAutoSynchronizeNews: null,
        // 自动同步栏目
        autoSynchronizeToColoumnId: null,
        // 是否审核同步栏目
        isApproveForAutoSynColoumn: null
      };
      this.$refs['form'].resetFields();
    },

    async add () {
      this.$Spin.show();
      let res = await wxAccountApi.addWeixinaccount(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await wxAccountApi.updateWeixinaccount(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
