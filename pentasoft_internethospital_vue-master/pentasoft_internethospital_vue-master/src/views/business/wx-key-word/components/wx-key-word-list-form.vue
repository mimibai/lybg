<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="120" :model="form">
      <FormItem label="微信账号" prop="weiXinAccountId">
        <Select v-model="form.weiXinAccountId">
          <Option
            :key="item.value"
            :value="item.value"
            v-for="item in wxAccountList"
            >{{ item.label }}</Option
          >
        </Select>
      </FormItem>
      <FormItem label="关键字类型" prop="weiXinKeyWordTypeId">
        <Select v-model="form.weiXinKeyWordTypeId">
          <Option
            :key="item.value"
            :value="item.value"
            v-for="item in wxKeyWordTypes"
            >{{ item.desc }}</Option
          >
        </Select>
      </FormItem>
      <FormItem label="关键字" prop="keyWord">
        <Input v-model="form.keyWord" />
      </FormItem>
      <FormItem label="菜单处理事件类型" prop="menuEventTypeId">
        <Select v-model="form.menuEventTypeId">
          <Option
            :key="item.value"
            :value="item.value"
            v-for="item in wxKeyWordEventTypes"
            >{{ item.desc }}</Option
          >
        </Select>
      </FormItem>
      <!-- 菜单处理事件类型为 【文本】 -->
      <Row v-if="form.menuEventTypeId == 1 || form.menuEventTypeId == 3">
        <Col span="24">
          <FormItem label="文本内容或关键字" prop="content">
            <Input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="请输入文本内容或关键字"
              v-model="form.content"
            />
          </FormItem>
        </Col>
      </Row>
      <div
        v-if="
          form.menuEventTypeId == 2 ||
          form.menuEventTypeId == 4 ||
          form.menuEventTypeId == 5
        "
      >
        <Row>
          <Col span="12">
            <FormItem label="查询条数" prop="count">
              <Input type="number" v-model.number="form.count" />
            </FormItem>
          </Col>
          <Col span="12"></Col>
        </Row>
        <Row v-if="form.menuEventTypeId == 2">
          <Divider
            >请确认新建后，在【微信关键字图文表】中进行图文消息内容的设置！</Divider
          >
        </Row>
        <Row v-if="form.menuEventTypeId == 4 || form.menuEventTypeId == 5">
          <Col span="12">
            <FormItem label="站点IDS" prop="siteIdArray">
               <Select placeholder="请选择" multiple v-model="form.siteIdArray">
                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in siteListData"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="栏目" prop="columnIdArray">
              <Select multiple v-model="form.columnIdArray">
                <Option
                  :value="column.value"
                  v-for="column in columnListData"
                  :key="column.value"
                  >{{ column.label }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
      </div>
      <div v-if="form.menuEventTypeId == 6">
        <Row>
          <Col span="24">
            <FormItem label="图片回复" prop="imageUrl">
              <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.imageUrl"
            ></FileUploadSingle>
            </FormItem>
          </Col>
        </Row>
      </div>
      <div v-if="form.menuEventTypeId == 7 || form.enumEventTypeId == 8">
        <div v-if="form.menuEventTypeId == 7">
          <Row>
            <Col span="24">
              <FormItem label="视频消息的标题" prop="videoTitle">
                <Input v-model="form.videoTitle" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <FormItem label="视频消息的描述" prop="videoDescription">
                <Input v-model="form.videoTitle" />
              </FormItem>
            </Col>
          </Row>
        </div>
        <Row>
          <Col span="24">
            <FormItem label="视频回复" prop="videoUrl">
              <FileUploadSingle
              :moduleType="videoUrlModuleType"
              v-model="form.videoUrl"
            ></FileUploadSingle>
            </FormItem>
          </Col>
        </Row>
      </div>
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
import { wxKeyWordApi } from '@/api/weixin/wx-key-word';
import { siteApi } from '@/api/platforms/site';
import { columnApi } from '@/api/news/column';
import { wxAccountApi } from '@/api/weixin/wx-account';
import { WX_MENU_EVENT_TYPES, WX_KEY_WORD_TYPES } from '@/constants/enum-wx';
import FileUploadSingle from '@/components/file-upload-single';
export default {
  name: 'WxKeyWordListForm',
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
      imageUrlModuleType: SERVICE_TYPE.WX_KEY_WORD.value,
      videoUrlModuleType: SERVICE_TYPE.WX_KEY_WORD.value,
      siteListData: [],
      columnListData: [],
      wxAccountList: [],
      // 表单数据
      form: {
        // 关键字类型
        weiXinKeyWordTypeId: null,
        // 关键字
        keyWord: null,
        // 菜单处理事件类型
        menuEventTypeId: null,
        // 查询条数
        count: null,
        // 文本内容或关键字
        content: null,
        // 站点IDS
        siteIds: null,
        // 栏目IDS
        columnIds: null,
        // 微信账号
        weiXinAccountId: null,
        // 图片回复
        imageUrl: null,
        // 视频回复
        videoUrl: null,
        // 视频消息的标题
        videoTitle: null,
        // 视频消息的描述
        videoDescription: null,
        columnIdArray: [],
        siteIdArray: []
      },
      // 表单验证
      formValidate: {
        // 关键字类型
        weiXinKeyWordTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入关键字类型',
            trigger: 'blur'
          }
        ],
        // 关键字
        keyWord: [{ required: true, message: '请输入关键字', trigger: 'blur' }],
        // 菜单处理事件类型
        menuEventTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入菜单处理事件类型',
            trigger: 'blur'
          }
        ],
        // 查询条数
        count: [
          {
            type: 'number',
            required: true,
            message: '请输入查询条数',
            trigger: 'blur'
          }
        ],
        // 文本内容或关键字
        content: [
          {
            required: true,
            message: '请输入文本内容或关键字',
            trigger: 'blur'
          }
        ],
        // 站点IDS
        siteIds: [
          { required: true, message: '请输入站点IDS', trigger: 'blur' }
        ],
        // 栏目IDS
        columnIds: [
          {
            transform: (value) => String(value),
            required: true,
            message: '请选择栏目',
            trigger: 'blur'
          }
        ],
        // 返回的Xml
        resultXml: [
          { required: true, message: '请输入返回的Xml', trigger: 'blur' }
        ],
        // 是否开启模糊查询
        isOpenVagueSearch: [
          {
            required: true,
            message: '请输入是否开启模糊查询',
            trigger: 'blur'
          }
        ],
        // 搜索次数
        searchCount: [
          {
            type: 'number',
            required: true,
            message: '请输入搜索次数',
            trigger: 'blur'
          }
        ],
        // 是否删除
        isDelete: [
          { required: true, message: '请输入是否删除', trigger: 'blur' }
        ],
        // 微信账号
        weiXinAccountId: [
          {
            type: 'number',
            required: true,
            message: '请输入微信账号',
            trigger: 'blur'
          }
        ],
        // 创建时间
        create_time: [
          { required: true, message: '请输入创建时间', trigger: 'blur' }
        ],
        // 修改时间
        update_time: [
          { required: true, message: '请输入修改时间', trigger: 'blur' }
        ],
        // 支付宝账号
        alipayAccountId: [
          {
            type: 'number',
            required: true,
            message: '请输入支付宝账号',
            trigger: 'blur'
          }
        ],
        // 图片回复
        imageUrl: [
          { required: true, message: '请输入图片回复', trigger: 'blur' }
        ],
        // 视频回复
        videoUrl: [
          { required: true, message: '请输入视频回复', trigger: 'blur' }
        ],
        // 视频消息的标题
        videoTitle: [
          { required: true, message: '请输入视频消息的标题', trigger: 'blur' }
        ],
        // 视频消息的描述
        videoDescription: [
          { required: true, message: '请输入视频消息的描述', trigger: 'blur' }
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
    // 关键字类型
    wxKeyWordTypes: function () {
      let array = [];
      for (let item in WX_KEY_WORD_TYPES) {
        let obj = {};
        obj.desc = WX_KEY_WORD_TYPES[item].desc;
        obj.value = WX_KEY_WORD_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    wxKeyWordEventTypes: function () {
      let array = [];
      for (let item in WX_MENU_EVENT_TYPES) {
        let obj = {};
        obj.desc = WX_MENU_EVENT_TYPES[item].desc;
        obj.value = WX_MENU_EVENT_TYPES[item].value;
        array.push(obj);
      }
      return array;
    }
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'weiXinKeyWordId', newValue['weiXinKeyWordId']);
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
    this.initSite();
    this.initColumn();
    this.initWxAccount();
  },
  mounted () {},
  methods: {
    /* -------------------------页面数据初始化 begin------------------- */
    async initSite () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await siteApi.querySite(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.siteId,
            label: item.name
          });
        });
        this.siteListData = list;
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
    async initWxAccount () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 100
        };
        let result = await wxAccountApi.queryWeixinaccount(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.weiXinAccountId,
            label: item.name
          });
        });
        this.wxAccountList = list;
      } finally {
        this.$Spin.hide();
      }
    },
    /* -------------------------页面数据初始化 end------------------- */
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      if (this.form.siteIdArray) {
        this.form.siteIds = this.form.siteIdArray.toString();
      }
      if (this.form.columnIdArray) {
        this.form.columnIds = this.form.columnIdArray.toString();
      }
      this.$refs['form'].validate((valid) => {
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
        // 关键字类型
        weiXinKeyWordTypeId: null,
        // 关键字
        keyWord: null,
        // 菜单处理事件类型
        menuEventTypeId: null,
        // 查询条数
        count: null,
        // 文本内容或关键字
        content: null,
        // 站点IDS
        siteIds: null,
        // 栏目IDS
        columnIds: null,
        // 微信账号
        weiXinAccountId: null,
        // 图片回复
        imageUrl: null,
        // 视频回复
        videoUrl: null,
        // 视频消息的标题
        videoTitle: null,
        // 视频消息的描述
        videoDescription: null,
        columnIdArray: [],
        siteIdArray: []
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await wxKeyWordApi.addWeixinkeyword(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await wxKeyWordApi.updateWeixinkeyword(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
