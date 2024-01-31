<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="关联关键字" prop="weiXinKeyWordId">
        <Select class="form-width" v-model="form.weiXinKeyWordId">
          <Option
            :value="column.value"
            v-for="column in wxKeyWordDataList"
            :key="column.value"
            >{{ column.label }}</Option
          >
        </Select>
      </FormItem>
      <FormItem label="标题" prop="title">
        <Input v-model="form.title" />
      </FormItem>
      <FormItem label="内容" prop="content">
        <Input v-model="form.content" />
      </FormItem>
      <FormItem label="图片地址" prop="pictureUrl">
        <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.pictureUrl"
            ></FileUploadSingle>
      </FormItem>
      <FormItem label="链接地址" prop="url">
        <Input v-model="form.url" />
      </FormItem>
      <FormItem label="是否删除" prop="isDelete">
        <Checkbox v-model="form.isDelete"></Checkbox>
      </FormItem>
      <FormItem label="第三方标识" prop="image_id">
        <Input v-model="form.image_id" />
      </FormItem>
      <FormItem label="第三方地址" prop="image_url">
        <Input v-model="form.image_url" />
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { WxKeyWordNewApi } from '@/api/weixin/wx-key-word-new';
import { wxKeyWordApi } from '@/api/weixin/wx-key-word';
import FileUploadSingle from '@/components/file-upload-single';
import { localRead, localSave, TOKEN_KEY } from '@/lib/local';
import { SERVICE_TYPE } from '@/constants/file';
import config from '@/config';
const baseUrl = config.baseUrl.apiUrl;
export default {
  name: 'WxKeyWordNewListForm',
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
      wxKeyWordDataList: [],
      // 表单数据
      form: {
        // 微信关键字Id
        weiXinKeyWordId: null,
        // 标题
        title: null,
        // 内容
        content: null,
        // 图片地址
        pictureUrl: null,
        // 链接地址
        url: null,
        // 是否删除
        isDelete: false,
        // 第三方标识
        image_id: null,
        // 第三方地址
        image_url: null
      },
      // 表单验证
      formValidate: {
        // 微信关键字Id
        weiXinKeyWordId: [
          {
            type: 'number',
            required: true,
            message: '请输入微信关键字Id',
            trigger: 'blur'
          }
        ],
        // 标题
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        // 内容
        content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
        // 图片地址
        pictureUrl: [
          { required: true, message: '请输入图片地址', trigger: 'blur' }
        ],
        // 链接地址
        url: [{ required: true, message: '请输入链接地址', trigger: 'blur' }]
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
          if (k == 'moduleType' || k == 'fileLocationType') {
            continue;
          }
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'weiXinKeyWordNewId', newValue['weiXinKeyWordNewId']);
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
    this.initWxKeyWord();
  },
  mounted () {},
  methods: {
    async initWxKeyWord () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await wxKeyWordApi.queryWeixinkeyword(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.weiXinKeyWordId,
            label: item.keyWord
          });
        });
        this.wxKeyWordDataList = list;
      } finally {
        this.$Spin.hide();
      }
    },
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
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
        // 微信关键字Id
        weiXinKeyWordId: null,
        // 标题
        title: null,
        // 内容
        content: null,
        // 图片地址
        pictureUrl: null,
        // 链接地址
        url: null,
        // 是否删除
        isDelete: false,
        // 第三方标识
        image_id: null,
        // 第三方地址
        image_url: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await WxKeyWordNewApi.addWeixinkeywordnew(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await WxKeyWordNewApi.updateWeixinkeywordnew(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
