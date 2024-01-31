<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="在线问诊每日排班" prop="clinicSchedulingId">
            <Input type="number" v-model.number="form.clinicSchedulingId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="号码" prop="number">
            <Input type="number" v-model.number="form.number" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="时间备注" prop="timeRemark">
            <Input v-model="form.timeRemark" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否已预约" prop="isAppointment">
            <i-switch v-model="form.isAppointment" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约时间" prop="appointmentDate">
            <DatePicker
              type="datetime"
              placeholder="请选择预约时间"
              :value="form.appointmentDate"
              @on-change="form.appointmentDate = $event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="排序" prop="sorting">
            <Input type="number" v-model.number="form.sorting" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="出诊时间" prop="schedulingTime">
            <Input v-model="form.schedulingTime" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <i-switch v-model="form.isDelete" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="放号时间" prop="openDatetime">
            <DatePicker
              type="datetime"
              placeholder="请选择放号时间"
              :value="form.openDatetime"
              @on-change="form.openDatetime = $event"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem
            label="号源生成记录"
            prop="clinicSchedulingNumberGenerateLogId"
          >
            <Input
              type="number"
              v-model.number="form.clinicSchedulingNumberGenerateLogId"
            />
          </FormItem>
        </Col>
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
import { clinicSchedulingNumberApi } from '@/api/clinic/clinic-scheduling-number';
export default {
  name: 'ClinicSchedulingNumberListForm',
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
    clinicSchedulingId: {
      type: Number
    }
  },
  data () {
    return {
      // 表单数据
      form: {
        // 主键Id
        clinicSchedulingNumberId: null,
        // 在线问诊每日排班
        clinicSchedulingId: this.clinicSchedulingId,
        // 号码
        number: null,
        // 时间备注
        timeRemark: null,
        // 是否已预约
        isAppointment: null,
        // 预约时间
        appointmentDate: null,
        // 排序
        sorting: null,
        // 出诊时间
        schedulingTime: null,
        // 是否删除
        isDelete: null,
        // 放号时间
        openDatetime: null,
        // 号源生成记录
        clinicSchedulingNumberGenerateLogId: null
      },
      // 表单验证
      formValidate: {
        // 在线问诊每日排班
        clinicSchedulingId: [
          {
            type: 'number',
            required: true,
            message: '请输入在线问诊每日排班',
            trigger: 'blur'
          }
        ],
        // 号码
        number: [
          {
            type: 'number',
            required: true,
            message: '请输入号码',
            trigger: 'blur'
          }
        ],
        // 排序
        sorting: [
          {
            type: 'number',
            required: true,
            message: '请输入排序',
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
        this.$set(
          this.form,
          'clinicSchedulingNumberId',
          newValue['clinicSchedulingNumberId']
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
        clinicSchedulingNumberId: null,
        // 在线问诊每日排班
        clinicSchedulingId: null,
        // 号码
        number: null,
        // 时间备注
        timeRemark: null,
        // 是否已预约
        isAppointment: null,
        // 预约时间
        appointmentDate: null,
        // 排序
        sorting: null,
        // 出诊时间
        schedulingTime: null,
        // 是否删除
        isDelete: null,
        // 放号时间
        openDatetime: null,
        // 号源生成记录
        clinicSchedulingNumberGenerateLogId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await clinicSchedulingNumberApi.addClinicSchedulingNumber(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await clinicSchedulingNumberApi.updateClinicSchedulingNumber(
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
