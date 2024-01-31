<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="自有应用Id" prop="appPlatformAccountId">
            <PlatformSelect v-model="form.appPlatformAccountId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="小程序账号" prop="weiXinAccountId">
            <WxAccountSelect v-model="form.weiXinAccountId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="解释" prop="description">
            <Input type="textarea" v-model="form.description" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否启用" prop="isAvailable">
            <i-switch v-model="form.isAvailable" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否是精灵图" prop="isWizardMap">
            <i-switch v-model="form.isWizardMap" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="精灵图中的位置" prop="wizardMapPosition">
            <Input v-model="form.wizardMapPosition" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="深度" prop="depth">
            <Input type="number" v-model.number="form.depth" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="图片路径" prop="imageUrl">
            <Input v-model="form.imageUrl" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="图片类型" prop="imageTypeId">
            <EnumSelect
              v-model="form.imageTypeId"
              code="ImageTypeEnum"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="父Id" prop="parentId">
            <Input type="number" v-model.number="form.parentId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="父Id串" prop="parentIds">
            <Input v-model="form.parentIds" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="分支排序" prop="branchIndex">
            <Input type="number" v-model.number="form.branchIndex" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="总排序" prop="sortIndex">
            <Input type="number" v-model.number="form.sortIndex" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="X坐标" prop="positionX">
            <Input v-model="form.positionX" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="Y坐标" prop="positionY">
            <Input v-model="form.positionY" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="精灵图DIV参考高度" prop="testHeight">
            <Input v-model="form.testHeight" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="精灵图DIV参考宽度" prop="testWidth">
            <Input v-model="form.testWidth" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12"> </Col>
        <Col span="12"> </Col>
      </Row>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { appImageLinkApi } from '@/api/app/app-image-link';
import PlatformSelect from '@/components/drop-down-select/platform-select';
import WxAccountSelect from '@/components/drop-down-select/wx-account-select';
import EnumSelect from '@/components/drop-down-select/enum-select';
export default {
  name: 'AppImageLinkListForm',
  components: {
    PlatformSelect,
    WxAccountSelect,
    EnumSelect
  },
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
      // 表单数据
      form: {
        // 主键Id
        appImageLinkId: null,
        // 名称
        name: null,
        // 是否启用
        isAvailable: true,
        // 解释
        description: null,
        // 是否是精灵图
        isWizardMap: false,
        // 精灵图中的位置
        wizardMapPosition: null,
        // 图片路径
        imageUrl: null,
        // 图片类型
        imageTypeId: null,
        // 父Id
        parentId: null,
        // 父Id串
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 总排序
        sortIndex: null,
        // X坐标
        positionX: null,
        // Y坐标
        positionY: null,
        // 精灵图DIV参考高度
        testHeight: null,
        // 精灵图DIV参考宽度
        testWidth: null,
        // 微信小程序账号
        weiXinAccountId: null,
        // 系统应用Id
        appPlatformAccountId: null
      },
      // 表单验证
      formValidate: {
        // 主键Id
        appImageLinkId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键Id',
            trigger: 'blur'
          }
        ],
        // 系统应用Id
        appPlatformAccountId: [
          {
            type: 'number',
            required: true,
            message: '请输入系统应用Id',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs['form'].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, 'appImageLinkId', newValue['appImageLinkId']);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
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
        // 主键Id
        appImageLinkId: null,
        // 名称
        name: null,
        // 是否启用
        isAvailable: true,
        // 解释
        description: null,
        // 是否是精灵图
        isWizardMap: false,
        // 精灵图中的位置
        wizardMapPosition: null,
        // 图片路径
        imageUrl: null,
        // 图片类型
        imageTypeId: null,
        // 父Id
        parentId: null,
        // 父Id串
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 总排序
        sortIndex: null,
        // X坐标
        positionX: null,
        // Y坐标
        positionY: null,
        // 精灵图DIV参考高度
        testHeight: null,
        // 精灵图DIV参考宽度
        testWidth: null,
        // 微信小程序账号
        weiXinAccountId: null,
        // 系统应用Id
        appPlatformAccountId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await appImageLinkApi.addAppImageLink(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await appImageLinkApi.updateAppImageLink(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
