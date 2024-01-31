<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="号序" prop="number">
        <Input v-model="form.number" />
      </FormItem>
      <FormItem label="出诊时间" prop="schedulingTimeArray">
        <TimePicker
          confirm
          placeholder="出诊时间段"
          v-model="form.schedulingTimeArray"
          format="HH:mm:ss"
          type="timerange"
          placement="bottom-end"
        ></TimePicker>
        <!-- <DatePicker
          placeholder="出诊时间"
          split-panels
          type="datetime"
          v-model="form.schedulingTime"
          format="yyyy-MM-dd HH:mm:ss"
        ></DatePicker> -->
      </FormItem>
      <FormItem label="放号时间" prop="openDatetime">
        <DatePicker
          placeholder="放号时间"
          split-panels
          type="datetime"
          v-model="form.openDatetime"
          format="yyyy-MM-dd HH:mm:ss"
        ></DatePicker>
      </FormItem>
      <FormItem label="号源预约类型" prop="schedulingAppointmentTypeId">
        <Select v-model="form.schedulingAppointmentTypeId">
          <Option
            :key="item.value"
            :value="item.value"
            v-for="item in EnumOPType"
            >{{ item.desc }}</Option
          >
        </Select>
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { opDailySchedulingNumberApi } from '@/api/scheduling/op-daily-scheduling-number';
import { WX_DAILYSCHEDULING_TYPE } from '@/constants/enum-wx';
import { utils } from '@/lib/util';
export default {
  name: 'OpDailySchedulingNumberListForm',
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
    },
    opdailySchedulingId: null
  },
  data () {
    return {
      // 表单数据
      form: {
        // 主键Id
        oPDailySchedulingNumberId: null,
        // 每日排班

        // 号码
        number: null,
        // 时间备注
        timeRemark: null,
        // 是否已预约
        isAppointment: null,
        // 预约时间   仅保存首次预约时间（即取消再预约不更新此时间）
        appointmentDate: null,
        // 排序
        sorting: null,
        // 出诊时间
        schedulingTime: null,
        // 是否删除
        isDelete: null,
        // 放号时间   可预约为空或时间大于小于当前时间
        openDatetime: null,
        // 号源预约类型
        schedulingAppointmentTypeId: null
      },
      // 表单验证
      formValidate: {}
    };
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
          'opdailySchedulingNumberId',
          newValue['opdailySchedulingNumberId']
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
  computed: {
    EnumOPType: function () {
      let array = [];
      for (const item in WX_DAILYSCHEDULING_TYPE) {
        let obj = {};
        obj.desc = WX_DAILYSCHEDULING_TYPE[item].desc;
        obj.value = WX_DAILYSCHEDULING_TYPE[item].value;
        array.push(obj);
      }
      return array;
    }
  },
  created () {},
  mounted () {},
  methods: {
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      this.form.opdailySchedulingId = this.opdailySchedulingId;
      this.form.oPDailySchedulingNumberId = this.form.opdailySchedulingNumberId;
      // if (this.form.schedulingTime) {
      //   //日期属性进行拦截格式化
      //   this.form.schedulingTime = utils.formatDate(this.form.schedulingTime);
      // }
      if (this.form.openDatetime) {
        // 日期属性进行拦截格式化
        this.form.openDatetime = utils.formatDate(this.form.openDatetime);
      }
      if (this.form.schedulingTimeArray.length >= 2) {
        this.form.schedulingTime =
          this.form.schedulingTimeArray[0] +
          '~' +
          this.form.schedulingTimeArray[1];
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
        oPDailySchedulingNumberId: null,
        // 每日排班
        opdailySchedulingId: null,
        // 号码
        number: null,
        // 时间备注
        timeRemark: null,
        // 是否已预约
        isAppointment: null,
        // 预约时间   仅保存首次预约时间（即取消再预约不更新此时间）
        appointmentDate: null,
        // 排序
        sorting: null,
        // 出诊时间
        schedulingTime: null,
        // 是否删除
        isDelete: null,
        // 放号时间   可预约为空或时间大于小于当前时间
        openDatetime: null,
        // 号源预约类型
        schedulingAppointmentTypeId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await opDailySchedulingNumberApi.addOpDailySchedulingNumber(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await opDailySchedulingNumberApi.updateOpDailySchedulingNumber(
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
