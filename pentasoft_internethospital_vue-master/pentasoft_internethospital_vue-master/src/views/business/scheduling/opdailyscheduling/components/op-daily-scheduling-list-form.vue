<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="24" class="head">
          <p>基础信息：</p>
        </Col>
        <Col span="12">
          <FormItem label="科室" prop="departmentId">
            <Select
              id="departmentId"
              class="form-width"
              @on-change="departmentChange"
              filterable
              v-model="form.departmentId"
            >
              <Option
                :value="item.value"
                v-for="item in departmentListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="医生" prop="doctorId">
            <Select class="form-width" filterable v-model="form.doctorId">
              <Option
                :value="item.value"
                v-for="item in doctorListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊科室" prop="opdepartmentId">
            <Select
              id="opdepartmentId"
              class="form-width"
              @on-change="opdepartmentChange"
              filterable
              v-model="form.opdepartmentId"
            >
              <Option
                :value="item.value"
                v-for="item in opdepartmentListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊医生" prop="opdoctorId">
            <Select
              class="form-width"
              on-change=""
              filterable
              v-model="form.opdoctorId"
            >
              <Option
                :value="item.value"
                v-for="item in opdoctorListData"
                :key="item.value"
                >{{ item.label }}
              </Option>
            </Select>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="出诊级别" prop="schedulingLevelId">
            <Select class="form-width" v-model="form.schedulingLevelId">
              <Option
                :value="item.value"
                v-for="item in schedulingLevelListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="星期" prop="dayOfWeekId">
            <Input type="number" v-model.number="form.dayOfWeekId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="时段" prop="timeOfDayId">
            <Select v-model="form.timeOfDayId">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in EnumOPTimeOfDay"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="挂号价目" prop="price">
            <Input type="number" v-model.number="form.price" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="排班日期" prop="schedulingDate">
            <DatePicker
              placeholder="排班日期"
              split-panels
              type="datetime"
              :value="form.schedulingDate"
              @on-change="form.schedulingDate = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="24" class="head">
          <p>补充信息：</p>
        </Col>
        <Col span="12">
          <FormItem label="停诊原因" prop="stopSchedulingReasonId">
            <Input type="number" v-model.number="form.stopSchedulingReasonId" />
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="出诊类型" prop="oPSchedulingTypeId">
            <Select v-model="form.oPSchedulingTypeId">
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in EnumOPSchedulingType"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="医疗职称" prop="professionalTitleId">
            <Input type="number" v-model.number="form.professionalTitleId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约状态" prop="dailySchedulingState">
            <Input type="number" v-model.number="form.dailySchedulingState" />
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem label="第三方地址" prop="thirdPartyUrl">
            <Input v-model="form.thirdPartyUrl" />
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="第三方编码" prop="thirdPartyCode">
            <Input v-model="form.thirdPartyCode" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="医生ID集合" prop="doctorIds">
            <Input v-model="form.doctorIds" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="总号源" prop="totalNumber">
            <Input type="number" v-model.number="form.totalNumber" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="可预约号源" prop="valuableNumber">
            <Input type="number" v-model.number="form.valuableNumber" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="诊疗费用" prop="clinicPrice">
            <Input type="number" v-model.number="form.clinicPrice" />
          </FormItem>
        </Col>
        <Col span="24" class="head">
          <p>开关字段：</p>
        </Col>
        <Col span="12">
          <FormItem label="是否全天" prop="isAllDay">
            <Checkbox v-model="form.isAllDay"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启精准预约" prop="isAccurateReservation">
            <Checkbox v-model="form.isAccurateReservation"></Checkbox>
          </FormItem>
        </Col>

        <Col span="12">
          <FormItem label="是否允许特殊预约" prop="isAllowSpecialAppoint">
            <Checkbox v-model="form.isAllowSpecialAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否允许预约" prop="isAllowAppoint">
            <Checkbox v-model="form.isAllowAppoint"></Checkbox>
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
import { opDailySchedulingApi } from '@/api/scheduling/op-daily-scheduling';
import { departmentApi } from '@/api/organizations/department';
import { doctorApi } from '@/api/organizations/doctor';
import { OPDepartmentApi } from '@/api/organizations/op-department';
import { OPDoctorApi } from '@/api/organizations/opdoctor';
import { schedulingLevelApi } from '@/api/scheduling/scheduling-level';
import { WX_OPTIMEOFDAY, OP_SCHEDULING_TYPE } from '@/constants/enum-wx';
import { utils } from '@/lib/util';
export default {
  name: 'OpDailySchedulingListForm',
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
      departmentListData: [],
      doctorListData: [],
      opdepartmentListData: [],
      opdoctorListData: [],
      schedulingLevelListData: [],
      // 表单数据
      form: {
        // 主键Id
        oPDailySchedulingId: null,
        // 医生
        doctorId: null,
        // 科室
        departmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 出诊级别
        schedulingLevelId: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 排班日期
        schedulingDate: null,
        // 是否审核
        isApprove: null,
        // 停诊原因
        stopSchedulingReasonId: null,
        // 创建门诊排班方式
        createSchedulingModeId: null,
        // 门诊专业
        schedulingSpecialtyId: null,
        // 是否允许预约
        isAllowAppoint: null,
        // 门诊诊室
        schedulingClinicId: null,
        // 级别编码/号别
        schedulingLevelCode: null,
        // 所在医院
        hospitalId: null,
        // 出诊区域集合
        schedulingClinicIds: null,
        // 出诊类型
        oPSchedulingTypeId: null,
        // 医疗职称
        professionalTitleId: null,
        // 第三方地址
        thirdPartyUrl: null,
        // 预约状态
        dailySchedulingState: null,
        // 替诊类型
        replaceTypeId: null,
        // 替诊医生
        replaceOPDoctorId: null,
        // 被替诊出诊Id
        replaceOPDailySchedulingId: null,
        // 第三方编码
        thirdPartyCode: null,
        // 是否删除
        isDelete: null,
        // 医生ID集合
        doctorIds: null,
        // 创建依据的门诊计划
        oPSchedulingPlanId: null,
        // 是否修改过
        isModified: null,
        // 修改类型  1、手动修改 2、程序导入
        modifiedTypeId: null,
        // 出诊区域集合
        schedulingClinicNames: null,
        // 平均消耗秒数
        averageSecond: null,
        // 是否预约完毕
        isUsedUp: null,
        // 停诊原因
        stopSchedulingReason: null,
        // 总号源
        totalNumber: null,
        // 可预约号源
        valuableNumber: null,
        // 是否全天
        isAllDay: null,
        // 是否开启精准预约
        isAccurateReservation: null,
        // 诊疗费用
        clinicPrice: null,
        // 是否允许特殊预约
        isAllowSpecialAppoint: null
      },
      // 表单验证
      formValidate: {}
    };
  },
  computed: {
    EnumOPTimeOfDay: function () {
      let array = [];
      for (const item in WX_OPTIMEOFDAY) {
        let obj = {};
        obj.desc = WX_OPTIMEOFDAY[item].desc;
        obj.value = WX_OPTIMEOFDAY[item].value;
        array.push(obj);
      }
      return array;
    },
    EnumOPSchedulingType: function () {
      let array = [];
      for (const item in OP_SCHEDULING_TYPE) {
        let obj = {};
        obj.desc = OP_SCHEDULING_TYPE[item].desc;
        obj.value = OP_SCHEDULING_TYPE[item].value;
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
          'opdailySchedulingId',
          newValue['opdailySchedulingId']
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
  created () {
    this.initDepartment();
    this.initOPDepartment();
    this.initDoctor(null);
    this.initOPDoctor(null);
    this.initSchedulingLevel();
  },
  mounted () {},
  methods: {
    departmentChange (e) {
      this.initDoctor(e);
    },
    opdepartmentChange (e) {
      this.initOPDoctor(e);
    },
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      if (this.form.schedulingDate) {
        // 日期属性进行拦截格式化
        this.form.schedulingDate = utils.formatDate(this.form.schedulingDate);
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
        oPDailySchedulingId: null,
        // 医生
        doctorId: null,
        // 科室
        departmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 出诊级别
        schedulingLevelId: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 排班日期
        schedulingDate: null,
        // 是否审核
        isApprove: null,
        // 停诊原因
        stopSchedulingReasonId: null,
        // 创建门诊排班方式
        createSchedulingModeId: null,
        // 门诊专业
        schedulingSpecialtyId: null,
        // 是否允许预约
        isAllowAppoint: null,
        // 门诊诊室
        schedulingClinicId: null,
        // 级别编码/号别
        schedulingLevelCode: null,
        // 所在医院
        hospitalId: null,
        // 出诊区域集合
        schedulingClinicIds: null,
        // 出诊类型
        oPSchedulingTypeId: null,
        // 医疗职称
        professionalTitleId: null,
        // 第三方地址
        thirdPartyUrl: null,
        // 预约状态
        dailySchedulingState: null,
        // 替诊类型
        replaceTypeId: null,
        // 替诊医生
        replaceOPDoctorId: null,
        // 被替诊出诊Id
        replaceOPDailySchedulingId: null,
        // 第三方编码
        thirdPartyCode: null,
        // 是否删除
        isDelete: null,
        // 医生ID集合
        doctorIds: null,
        // 创建依据的门诊计划
        oPSchedulingPlanId: null,
        // 是否修改过
        isModified: null,
        // 修改类型  1、手动修改 2、程序导入
        modifiedTypeId: null,
        // 出诊区域集合
        schedulingClinicNames: null,
        // 平均消耗秒数
        averageSecond: null,
        // 是否预约完毕
        isUsedUp: null,
        // 停诊原因
        stopSchedulingReason: null,
        // 总号源
        totalNumber: null,
        // 可预约号源
        valuableNumber: null,
        // 是否全天
        isAllDay: null,
        // 是否开启精准预约
        isAccurateReservation: null,
        // 诊疗费用
        clinicPrice: null,
        // 是否允许特殊预约
        isAllowSpecialAppoint: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await opDailySchedulingApi.addOpDailyScheduling(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.form.oPDailySchedulingId = this.form.opdailySchedulingId;
      this.$Spin.show();
      let res = await opDailySchedulingApi.updateOpDailyScheduling(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async initDepartment () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await departmentApi.queryDepartment(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.departmentId,
            label: item.name
          });
        });
        this.departmentListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initDoctor (departmentId) {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500,
          departmentId: departmentId
        };
        let result = await doctorApi.queryDoctor(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.doctorId,
            label: item.name
          });
        });
        this.doctorListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initOPDepartment () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await OPDepartmentApi.queryOPDepartment(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.opdepartmentId,
            label: item.name
          });
        });
        this.opdepartmentListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initOPDoctor (opdepartmentId) {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500,
          opdepartmentId: opdepartmentId
        };
        let result = await OPDoctorApi.queryOPDoctor(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.opdoctorId,
            label: item.name
          });
        });
        this.opdoctorListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initSchedulingLevel () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await schedulingLevelApi.querySchedulingLevel(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.schedulingLevelId,
            label: item.name
          });
        });
        this.schedulingLevelListData = list;
      } finally {
        this.$Spin.hide();
      }
    }
  }
};
</script>
<style>
.head {
  font-weight: bold;
  color: #339240;
  background: #d9d9d9;
  height: 40px;
  line-height: 40px;
}
.head p {
  margin-left: 20px;
}
Row Col {
  border: 1px solid #ccc;
}
</style>
