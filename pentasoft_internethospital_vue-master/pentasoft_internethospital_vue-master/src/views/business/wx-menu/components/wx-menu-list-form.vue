<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="菜单名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="菜单类型" prop="menuType">
            <Select v-model="form.menuType">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in menuTypes"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <div v-if="form.menuType == 'miniprogram'">
        <Row>
          <Col span="24">
            <FormItem label="小程序AppID" prop="appId">
              <Input v-model="form.appId" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <FormItem label="小程序路径" prop="pagePath">
              <Input v-model="form.pagePath" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span="24" v-if="form.menuType == 'click'">
          <FormItem label="菜单Key" prop="menuKey">
            <Input v-model="form.menuKey" />
          </FormItem>
        </Col>
        <Col span="24" v-if="form.menuType == 'view'">
          <FormItem label="跳转地址" prop="menuKey">
            <Input v-model="form.menuKey" />
          </FormItem>
        </Col>

        <Col span="24" v-if="form.menuType == 'miniprogram'">
          <FormItem label="备用地址" prop="menuKey">
            <Input v-model="form.menuKey" />
          </FormItem>
        </Col>
      </Row>
      <!-- 菜单类型为click时 -->
      <Row v-if="form.menuType == 'click'">
        <Col span="12">
          <FormItem label="菜单处理事件类型" prop="menuEventTypeId">
            <Select v-model="form.menuEventTypeId">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in wxMenuEventTypes"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <!-- 菜单处理事件类型为 【文本】 -->
      <Row
        v-if="
          form.menuType == 'click' &&
          (form.menuEventTypeId == 1 || form.menuEventTypeId == 3)
        "
      >
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
          form.menuType == 'click' &&
          (form.menuEventTypeId == 2 ||
            form.menuEventTypeId == 4 ||
            form.menuEventTypeId == 5)
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
            >请确认新建后，在列表中展开此菜单进行图文消息内容的设置！</Divider
          >
        </Row>
        <Row v-if="form.menuEventTypeId == 4 || form.menuEventTypeId == 5">
          <Col span="12">
            <FormItem label="站点" prop="siteIdArray">
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
              <Select placeholder="请选择" multiple v-model="form.columnIdArray">
              
                <Option
                  :key="item.value"
                  :value="item.value"
                  v-for="item in columnListData"
                  >{{ item.label }}</Option
                >
              </Select>
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
import { wxMenuApi } from "@/api/weixin/wx-menu";
import { WX_MENU_TYPES, WX_MENU_EVENT_TYPES } from "@/constants/enum-wx";
import { columnApi } from "@/api/news/column";
import{siteApi}from "@/api/platforms/site";
export default {
  name: "WxMenuListForm",
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
    wxAccountId: null,
    parentId: null,
  },
  data() {
    return {
      siteListData:[],
      columnListData:[],
      //表单数据
      form: {
        //菜单名称
        name: null,
        //菜单Key
        menuKey: null,
        //菜单类型
        menuType: null,
        //菜单处理事件类型
        menuEventTypeId: 0,
        //查询条数
        count: null,
        //文本内容或关键字
        content: null,
        //站点IDS
        siteIds: null,
        siteIdArray:[],
        //栏目IDS
        columnIds: null,
        columnIdArray:[],
        //微信账号主键
        weiXinAccountId: null,
        //小程序AppID
        appId: null,
        //小程序路径
        pagePath: null,
        
      },
      //表单验证
      formValidate: {
        //菜单名称
        name: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
        //菜单Key
        menuKey: [
          { required: true, message: "请输入菜单Key", trigger: "blur" },
        ],
        //菜单类型
        menuType: [
          { required: false, message: "请输入菜单类型", trigger: "blur" },
        ],
        //菜单处理事件类型
        menuEventTypeId: [
          {
            type: "number",
            required: false,
            message: "请输入菜单处理事件类型",
            trigger: "blur",
          },
        ],
        //查询条数
        count: [
          {
            type: "number",
            required: true,
            message: "请输入查询条数",
            trigger: "blur",
          },
        ],
        //文本内容或关键字
        content: [
          {
            required: true,
            message: "请输入文本内容或关键字",
            trigger: "blur",
          },
        ],
        //小程序AppID
        appId: [
          { required: true, message: "请输入小程序AppID", trigger: "blur" },
        ],
        //小程序路径
        pagePath: [
          { required: true, message: "请输入小程序路径", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    //菜单类型
    menuTypes: function () {
      let array = [];
      for (let item in WX_MENU_TYPES) {
        let obj = {};
        obj.desc = WX_MENU_TYPES[item].desc;
        obj.value = WX_MENU_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    //菜单执行类型
    wxMenuEventTypes: function () {
      let array = [];
      for (let item in WX_MENU_EVENT_TYPES) {
        let obj = {};
        obj.desc = WX_MENU_EVENT_TYPES[item].desc;
        obj.value = WX_MENU_EVENT_TYPES[item].value;
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
        this.$set(this.form, "weiXinMenuId", newValue["weiXinMenuId"]);
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
    this.initSite();
    this.initColumn();
  },
  mounted() {},
  methods: {
    async initSite() {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500,
        };
        let result = await siteApi.querySite(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.siteId,
            label: item.name,
          });
        });
        this.siteListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initColumn() {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500,
        };
        let result = await columnApi.queryColumn(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.columnId,
            label: item.name,
          });
        });
        this.columnListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    cancel() {
      this.$emit("on-form-close");
    },
    save() {
      if (!this.isUpdate) {
        this.form.weiXinAccountId = this.wxAccountId;
        this.form.parentId = this.parentId;
      }
      if(this.form.siteIdArray){
        this.form.siteIds=this.form.siteIdArray.toString();
      }
      if(this.form.columnIdArray){
        this.form.columnIds=this.form.columnIdArray.toString();
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
        //菜单名称
        name: null,
        //菜单Key
        menuKey: null,
        //菜单类型
        menuType: null,
        //菜单处理事件类型
        menuEventTypeId: 0,
        //查询条数
        count: null,
        //文本内容或关键字
        content: null,
        //站点IDS
        siteIds: null,
        //栏目IDS
        columnIds: null,
        //微信账号主键
        weiXinAccountId: null,
        //小程序AppID
        appId: null,
        //小程序路径
        pagePath: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await wxMenuApi.addWeixinmenu(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await wxMenuApi.updateWeixinmenu(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
