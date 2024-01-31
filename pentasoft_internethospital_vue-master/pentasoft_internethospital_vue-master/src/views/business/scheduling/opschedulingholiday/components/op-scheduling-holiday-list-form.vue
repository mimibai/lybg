<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="名称" prop="name">
        <Input v-model="form.name" />
      </FormItem>
      <FormItem label="日期" prop="dateTime">
        <DatePicker
          placeholder="发布日期"
          split-panels
          type="datetime"
         :value="form.dateTime"
              @on-change="form.dateTime = $event"
          format="yyyy-MM-dd HH:mm:ss"
        ></DatePicker>
      </FormItem>
      <FormItem label="是否启用" prop="isDisable">
        <Checkbox v-model="form.isDisable"></Checkbox>
      </FormItem>
      <FormItem label="备注" prop="reMark">
        <Input v-model="form.reMark" />
      </FormItem>
      <FormItem label="是否删除" prop="isDelete">
        <Checkbox v-model="form.isDelete"></Checkbox>
      </FormItem>
      <FormItem label="显示状态   默认假期" prop="dailySchedulingStateId">
        <Select
          placeholder="请选择应用类型"
          v-model="form.dailySchedulingStateId"
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
      <FormItem label="时段" prop="timeOfDayId">
        <Input type="number" v-model.number="form.timeOfDayId" />
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { opSchedulingHolidayApi } from '@/api/scheduling/op-scheduling-holiday';
import { WX_DAILYSCHEDULING_StATE } from '@/constants/enum-wx';
import { utils } from '@/lib/util';
export default {
  name: 'OpSchedulingHolidayListForm',
  components: {},
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
        oPSchedulingHolidayId: null,
        // 名称
        name: null,
        // 日期
        dateTime: null,
        // 是否启用
        isDisable: null,
        // 备注
        reMark: null,
        // 是否删除
        isDelete: null,
        // 显示状态   默认假期
        dailySchedulingStateId: null,
        // 时段
        timeOfDayId: null
      },
      // 表单验证
      formValidate: {
        // 名称
        name: [{ required: false, message: '请输入名称', trigger: 'blur' }],

        // 备注
        reMark: [{ required: false, message: '请输入备注', trigger: 'blur' }],
        // 显示状态   默认假期
        dailySchedulingStateId: [
          {
            type: 'number',
            required: false,
            message: '请输入显示状态   默认假期',
            trigger: 'blur'
          }
        ],
        // 时段
        timeOfDayId: [
          {
            type: 'number',
            required: false,
            message: '请输入时段',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  computed: {
    wxApplicationTypeList: function () {
      let array = [];
      for (const item in WX_DAILYSCHEDULING_StATE) {
        let obj = {};
        obj.desc = WX_DAILYSCHEDULING_StATE[item].desc;
        obj.value = WX_DAILYSCHEDULING_StATE[item].value;
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
        this.$set(
          this.form,
          'opschedulingHolidayId',
          newValue['opschedulingHolidayId']
        );
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
      if (this.form.dateTime) {
        // 日期属性进行拦截格式化
        this.form.dateTime = utils.formatDate(this.form.dateTime);
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
        // 主键Id
        oPSchedulingHolidayId: null,
        // 名称
        name: null,
        // 日期
        dateTime: null,
        // 是否启用
        isDisable: null,
        // 备注
        reMark: null,
        // 是否删除
        isDelete: null,
        // 显示状态   默认假期
        dailySchedulingStateId: null,
        // 时段
        timeOfDayId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await opSchedulingHolidayApi.addOpSchedulingHoliday(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      this.form.oPSchedulingHolidayId = this.form.opschedulingHolidayId;
      let res = await opSchedulingHolidayApi.updateOpSchedulingHoliday(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
