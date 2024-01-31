<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="栏目名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem prop="columnTypeId" label="栏目类型">
            <Select v-model="form.columnTypeId">
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in columnTypeList"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="栏目简称" prop="shortName">
            <Input v-model="form.shortName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="栏目文章分页大小" prop="pageSize">
            <Input type="number" v-model="form.pageSize" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="关键字" prop="keyword">
            <Input v-model="form.keyword" />
          </FormItem>
        </Col>
        <Col span="12">
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
          <FormItem label="是否为分类" prop="isClassify">
            <Checkbox v-model="form.isClassify"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否启用" prop="isEnable">
            <Checkbox v-model="form.isEnable"></Checkbox>
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
import { FILE_TYPE, SERVICE_TYPE } from "@/constants/file";
import { columnApi } from "@/api/news/column";
import FileUploadSingle from "@/components/file-upload-single";
export default {
  name: "ColumnListForm",
  components: { FileUploadSingle },
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
  },
  data() {
    return {
      imageUrlModuleType: SERVICE_TYPE.COLUMN.value,
      columnTypeList: [],
      //表单数据
      form: {
        //栏目名称
        name: null,
        //栏目描述
        description: null,
        //关键字
        keyword: null,
        //图片路径
        imageUrl: null,
        //是否为分类
        isClassify: false,
        //是否启用
        isEnable: true,
        //栏目的文章分页大小
        pageSize: null,
        //所在站点
        siteId: 127,
        //是否访问限制
        isAccessRestriction: false,
        //栏目简称
        shortName: null,
        //栏目类型Id
        columnTypeId: null,
        //SEO关键字
        seoKeywords: null,
        //SEO描述
        seoDescription: null,
        //是否需要访问密钥
        isNeedAccessKey: false,
        //访问密钥
        accessKey: null,
      },
      //表单验证
      formValidate: {
        //主键
        columnId: [
          {
            type: "number",
            required: true,
            message: "请输入主键",
            trigger: "blur",
          },
        ],
        //栏目名称
        name: [{ required: true, message: "请输入栏目名称", trigger: "blur" }],
        //栏目描述
        description: [
          { required: false, message: "请输入栏目描述", trigger: "blur" },
        ],
        //关键字
        keyword: [
          { required: false, message: "请输入关键字", trigger: "blur" },
        ],
        //图片路径
        imageUrl: [
          { required: false, message: "请输入图片路径", trigger: "blur" },
        ],
        //栏目标签Id
        columnLabelId: [
          {
            type: "number",
            required: true,
            message: "请输入栏目标签Id",
            trigger: "blur",
          },
        ],
        //是否访问限制
        isAccessRestriction: [
          { required: false, message: "请输入是否访问限制", trigger: "blur" },
        ],

        //栏目简称
        shortName: [
          { required: false, message: "请输入栏目简称", trigger: "blur" },
        ],
        //栏目类型Id
        columnTypeId: [
          {
            type: "number",
            required: false,
            message: "请输入栏目类型Id",
            trigger: "blur",
          },
        ],
        //SEO关键字
        seoKeywords: [
          { required: false, message: "请输入SEO关键字", trigger: "blur" },
        ],
        //SEO描述
        seoDescription: [
          { required: false, message: "请输入SEO描述", trigger: "blur" },
        ],
        //是否需要访问密钥
        isNeedAccessKey: [
          {
            required: false,
            message: "请输入是否需要访问密钥",
            trigger: "blur",
          },
        ],
        //访问密钥
        accessKey: [
          { required: false, message: "请输入访问密钥", trigger: "blur" },
        ],
      },
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
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs["form"].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, "id", newValue["id"]);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
  },
  created() {
    this.queryColumnTypeList();
  },
  mounted() {},
  methods: {
    cancel() {
      this.$emit("on-form-close");
    },
    //查询栏目类型
    async queryColumnTypeList() {
      try {
        let params = {
          pageNum: 1,
          pageSize: 100,
        };
        let result = await columnApi.queryColumnType(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            id: item.id,
            value: item.keyId,
            label: item.name,
          });
        });
        this.columnTypeList = list;
      } finally {
      }
    },
    save() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.form.description = this.editor.txt.html();
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
        //栏目名称
        name: null,
        //栏目描述
        description: null,
        //关键字
        keyword: null,
        //图片路径
        imageUrl: null,
        //是否为分类
        isClassify: false,
        //是否启用
        isEnable: true,
        //栏目的文章分页大小
        pageSize: null,
        //所在站点
        siteId: 127,
        //是否访问限制
        isAccessRestriction: false,
        //栏目简称
        shortName: null,
        //栏目类型Id
        columnTypeId: null,
        //SEO关键字
        seoKeywords: null,
        //SEO描述
        seoDescription: null,
        //是否需要访问密钥
        isNeedAccessKey: false,
        //访问密钥
        accessKey: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await columnApi.addColumn(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await columnApi.updateColumn(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>