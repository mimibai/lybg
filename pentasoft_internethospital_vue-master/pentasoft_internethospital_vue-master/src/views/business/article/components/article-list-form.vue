<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="24">
          <FormItem prop="siteId" hidden>
            <Input value="127" v-model="form.siteId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem prop="columnId" label="选择栏目">
            <Select class="form-width" v-model="form.columnId">
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
      <Row>
        <Col span="12">
          <FormItem label="文章标题" prop="title">
            <Input v-model="form.title" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="副标题" prop="subTitle">
            <Input v-model="form.subTitle" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="摘要" prop="summary">
            <Input v-model="form.summary" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="发文号" prop="postingNo">
            <Input v-model="form.postingNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="发布日期" prop="releaseDate">
            <DatePicker
              placeholder="发布日期"
              split-panels
              type="datetime"
              v-model="form.releaseDate"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="正文" prop="content">
            <VueUeditorWrap
              v-model="form.content"
              :config="ueditorConfig"
            ></VueUeditorWrap>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem class="select-class" label="文章标签" prop="tagIds">
            <Select class="form-width" multiple v-model="form.tagIds">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in positionListData"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="关键字" prop="keyword">
            <Input type="text" v-model="form.keyword" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否为置顶文章" prop="isTop">
            <Checkbox v-model="form.isTop"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否审核" prop="isApprove">
            <Checkbox v-model="form.isApprove"></Checkbox>
          </FormItem>
        </Col>
      </Row>
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
          <FormItem label="作者" prop="author">
            <Input v-model="form.author" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="责任编辑" prop="responsibleEditor">
            <Input v-model="form.responsibleEditor" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="图片编辑" prop="pictureEditor">
            <Input v-model="form.pictureEditor" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="文章来源" prop="source">
            <Input v-model="form.source" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="文章来源地址" prop="sourceAddress">
            <Input v-model="form.sourceAddress" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="来源发布时间" prop="sourcePostDate">
            <DatePicker
              placeholder="来源发布时间"
              split-panels
              style=""
              type="datetime"
              v-model="form.sourcePostDate"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否发布" prop="isRelease">
            <Checkbox v-model="form.isRelease"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否显示" prop="isDisplay">
            <Checkbox v-model="form.isDisplay"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="外部链接" prop="externalLink">
            <Input v-model="form.externalLink" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="SEO关键字" prop="seoKeywords">
            <Input v-model="form.seoKeywords" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="SEO描述" prop="seoDescription">
            <Input v-model="form.seoDescription" />
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
import VueUeditorWrap from 'vue-ueditor-wrap';
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
import { articleApi } from '@/api/news/article';
import { columnApi } from '@/api/news/column';
import { articleTagApi } from '@/api/news/article-tag';
import { utils } from '@/lib/util';
import config from '@/config';
import FileUploadSingle from '@/components/file-upload-single';
export default {
  name: 'ArticleListForm',
  components: { VueUeditorWrap, FileUploadSingle },
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
      imageUrlModuleType: SERVICE_TYPE.ARTICLE.value,
      ueditorConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: config.baseUrl.fileUploadUrl,
        // serverUrl: fileApi.fileUploadLocalUrl + 3,
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: process.env.VUE_APP_TYPE == 'prod' ? '/manager/ueditor/' : '/ueditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 340,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: true,
        zIndex: 1060
      },
      selectColumnId: null,
      columnListData: [],
      positionListData: [],
      // 表单数据
      form: {
        siteId: 127,
        // 栏目id
        columnId: 0,
        // 文章标题
        title: null,
        // 副标题
        subTitle: null,
        // 摘要
        summary: null,
        // 正文
        content: null,
        // 关键字
        keyword: null,
        // 是否为置顶文章
        isTop: false,
        // 是否审核
        isApprove: true,
        // 图片路径
        imageUrl: null,
        // 作者
        author: null,
        // 文章来源
        source: null,
        // 文章来源地址
        sourceAddress: null,
        // 来源发布时间
        isRelease: false,
        // 是否发布
        isDisplay: false,
        // 是否显示
        isComment: false,
        // 发布日期
        releaseDate: null,
        // 发文号
        postingNo: null,
        // SEO关键字
        seoKeywords: null,
        // SEO描述
        seoDescription: null,
        // 责任编辑
        responsibleEditor: null,
        // 图片编辑
        pictureEditor: null,
        // 文章标签
        articleTagIds: null
      },
      // 表单验证
      formValidate: {
        // 文章栏目
        selectColumnId: [
          { required: true, message: '请选择栏目', trigger: 'blur' },
          { required: true, message: '请选择栏目', trigger: 'change' }
        ],
        // 文章标题
        title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],
        // 副标题
        subTitle: [
          { required: false, message: '请输入副标题', trigger: 'blur' }
        ],
        // 摘要
        summary: [{ required: false, message: '请输入摘要', trigger: 'blur' }],
        // 正文
        content: [{ required: true, message: '请输入正文', trigger: 'blur' }]
      }
    };
  },
  computed: {
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'articleId', newValue['articleId']);
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
    this.initArticleTagListPage();
  },
  mounted () {},
  methods: {
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      if (this.form.releaseDate) {
        // 日期属性进行拦截格式化
        this.form.releaseDate = utils.formatDate(this.form.releaseDate);
      }
      if (this.form.sourcePostDate) {
        this.form.sourcePostDate = utils.formatDate(this.form.sourcePostDate);
      }
      if (this.form.tagIds) {
        // 标签数组转为字符串
        this.form.articleTagIds = this.form.tagIds.toString();
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
        siteId: 127,
        // 栏目id
        columnId: 0,
        // 文章标题
        title: null,
        // 副标题
        subTitle: null,
        // 摘要
        summary: null,
        // 正文
        content: null,
        // 关键字
        keyword: null,
        isTop: false,
        // 是否审核
        isApprove: true,
        // 图片路径
        imageUrl: null,
        // 作者
        author: null,
        // 文章来源
        source: null,
        // 文章来源地址
        sourceAddress: null,
        // 来源发布时间
        isRelease: false,
        // 是否发布
        isDisplay: false,
        // 是否显示
        isComment: false,
        // 发布日期
        releaseDate: null,
        // 发文号
        postingNo: null,
        // SEO关键字
        seoKeywords: null,
        // SEO描述
        seoDescription: null,
        // 责任编辑
        responsibleEditor: null,
        // 图片编辑
        pictureEditor: null,
        // 文章标签
        articleTagIds: null,
        tagIds: []
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await articleApi.addArticle(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await articleApi.updateArticle(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async initColumn () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 300
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
    // 分页查询所有标签
    async initArticleTagListPage () {
      let result = await articleTagApi.queryArticletag({
        pageNum: 1,
        pageSize: 200,
        sort: false
      });
      let datas = result.data;
      let list = [];
      datas.list.map((item) => {
        list.push({
          value: item.articleTagId,
          label: item.articleTagName
        });
      });
      this.positionListData = list;
    }
  }
};
</script>
