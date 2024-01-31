<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="名称" prop="name">
        <Input v-model="form.name" />
      </FormItem>
      <FormItem label="最小年龄" prop="minAge">
        <Input type="number" v-model.number="form.minAge" />
      </FormItem>
      <FormItem label="最小年龄提示信息" prop="minAgeMessage">
        <Input v-model="form.minAgeMessage" />
      </FormItem>
      <FormItem label="最大年龄" prop="maxAge">
        <Input type="number" v-model.number="form.maxAge" />
      </FormItem>
      <FormItem label="最大年龄提示信息" prop="maxAgeMessage">
        <Input v-model="form.maxAgeMessage" />
      </FormItem>
      <FormItem label="性别" prop="genderId">
        <Select
          placeholder="请选择"
          style="width: 200px"
          v-model="form.genderId"
        >
          <Option value>不限</Option>
          <Option
            :key="item.value"
            :value="item.value ? 1 : 0"
            v-for="item in genderList"
            >{{ item.desc }}</Option
          >
        </Select>
      </FormItem>
      <FormItem label="性别提示信息" prop="genderMessage">
        <Input v-model="form.genderMessage" />
      </FormItem>
      <FormItem label="备注" prop="remark">
        <Input v-model="form.remark" />
      </FormItem>
      <FormItem label="是否启用" prop="isEnable">
        <Checkbox v-model="form.isEnable"></Checkbox>
      </FormItem>
      <FormItem label="是否删除" prop="isDelete">
        <Checkbox v-model="form.isDelete"></Checkbox>
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { oPSchedulingRuleApi } from "@/api/scheduling/op-scheduling-rule";
import { SEX } from "@/constants/enum-wx";
export default {
  name: "OPSchedulingRuleListForm",
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
  },
  data() {
    return {
      //表单数据
      form: {
        //预约规则Id
        oPSchedulingRuleId: null,
        //名称
        name: null,
        //最小年龄
        minAge: null,
        //最小年龄提示信息
        minAgeMessage: null,
        //最大年龄
        maxAge: null,
        //最大年龄提示信息
        maxAgeMessage: null,
        //性别
        genderId: null,
        //性别提示信息
        genderMessage: null,
        //备注
        remark: null,
        //是否启用
        isEnable: null,
        //是否删除
        isDelete: null,
      },
      //表单验证
      formValidate: {
        //预约规则Id
        oPSchedulingRuleId: [
          {
            type: "number",
            required: false,
            message: "请输入预约规则Id",
            trigger: "blur",
          },
        ],
        //名称
        name: [{ required: false, message: "请输入名称", trigger: "blur" }],
        //最小年龄
        minAge: [
          {
            type: "number",
            required: false,
            message: "请输入最小年龄",
            trigger: "blur",
          },
        ],
        //最小年龄提示信息
        minAgeMessage: [
          {
            required: false,
            message: "请输入最小年龄提示信息",
            trigger: "blur",
          },
        ],
        //最大年龄
        maxAge: [
          {
            type: "number",
            required: false,
            message: "请输入最大年龄",
            trigger: "blur",
          },
        ],
        //最大年龄提示信息
        maxAgeMessage: [
          {
            required: false,
            message: "请输入最大年龄提示信息",
            trigger: "blur",
          },
        ],
        //性别
        genderId: [
          {
            type: "number",
            required: false,
            message: "请输入性别",
            trigger: "blur",
          },
        ],
        //性别提示信息
        genderMessage: [
          { required: false, message: "请输入性别提示信息", trigger: "blur" },
        ],
        //备注
        remark: [{ required: false, message: "请输入备注", trigger: "blur" }],
      },
    };
  },
  computed: {
    genderList: () => {
      let array = [];
      for (let item in SEX) {
        let obj = {};
        obj.desc = SEX[item].desc;
        obj.value = SEX[item].value;
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
        this.$set(
          this.form,
          "opschedulingRuleId",
          newValue["opschedulingRuleId"]
        );
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    cancel() {
      this.$emit("on-form-close");
    },
    save() {
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
        //预约规则Id
        oPSchedulingRuleId: null,
        //名称
        name: null,
        //最小年龄
        minAge: null,
        //最小年龄提示信息
        minAgeMessage: null,
        //最大年龄
        maxAge: null,
        //最大年龄提示信息
        maxAgeMessage: null,
        //性别
        genderId: null,
        //性别提示信息
        genderMessage: null,
        //备注
        remark: null,
        //是否启用
        isEnable: null,
        //是否删除
        isDelete: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await oPSchedulingRuleApi.addOPSchedulingRule(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await oPSchedulingRuleApi.updateOPSchedulingRule(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
