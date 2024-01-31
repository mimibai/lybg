<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

      <FormItem label="星期" prop="dayOfWeekId">
        <Input type="number" v-model.number="form.dayOfWeekId" />
      </FormItem>
      <FormItem label="时段" prop="timeOfDayId">
        <Input type="number" v-model.number="form.timeOfDayId" />
      </FormItem>
      <FormItem label="挂号价目" prop="price">
        <Input type="number" v-model.number="form.price" />
      </FormItem>
      <FormItem label="是否审核" prop="isApprove">
        <Input v-model="form.isApprove" />
      </FormItem>
      <FormItem label="门诊级别" prop="schedulingLevelId">
        <Input type="number" v-model.number="form.schedulingLevelId" />
      </FormItem>
      <FormItem label="门诊专业" prop="schedulingSpecialtyId">
        <Input type="number" v-model.number="form.schedulingSpecialtyId" />
      </FormItem>
      <FormItem label="门诊诊室" prop="schedulingClinicId">
        <Input type="number" v-model.number="form.schedulingClinicId" />
      </FormItem>
      <FormItem label="级别编码/号别" prop="schedulingLevelCode">
        <Input v-model="form.schedulingLevelCode" />
      </FormItem>
      <FormItem label="所在医院" prop="hospitalId">
        <Input type="number" v-model.number="form.hospitalId" />
      </FormItem>
      <FormItem label="预约号源" prop="appointNumbers">
        <Input v-model="form.appointNumbers" />
      </FormItem>
      <FormItem label="出诊区域集合" prop="schedulingClinicIds">
        <Input v-model="form.schedulingClinicIds" />
      </FormItem>
      <FormItem label="创建人" prop="posterId">
        <Input type="number" v-model.number="form.posterId" />
      </FormItem>
      <FormItem label="最后审核日期" prop="lastApproveDate">
        <Input v-model="form.lastApproveDate" />
      </FormItem>
      <FormItem label="审核人" prop="approverId">
        <Input type="number" v-model.number="form.approverId" />
      </FormItem>
      <FormItem label="二级审核状态" prop="secondApprovalStateId">
        <Input type="number" v-model.number="form.secondApprovalStateId" />
      </FormItem>
      <FormItem label="新建或编辑状态" prop="createOrUpdateStateId">
        <Input type="number" v-model.number="form.createOrUpdateStateId" />
      </FormItem>
      <FormItem label="最后修改人" prop="lastModifierId">
        <Input type="number" v-model.number="form.lastModifierId" />
      </FormItem>
      <FormItem label="对应的门诊排班计划映射" prop="schedulingPlanMappingId">
        <Input type="number" v-model.number="form.schedulingPlanMappingId" />
      </FormItem>
      <FormItem label="门诊科室" prop="oPDepartmentId">
        <Input type="number" v-model.number="form.oPDepartmentId" />
      </FormItem>
      <FormItem label="门诊医生" prop="oPDoctorId">
        <Input type="number" v-model.number="form.oPDoctorId" />
      </FormItem>
      <FormItem label="出诊类型" prop="oPSchedulingTypeId">
        <Input type="number" v-model.number="form.oPSchedulingTypeId" />
      </FormItem>
      <FormItem label="替诊医生" prop="replaceOPDoctorId">
        <Input type="number" v-model.number="form.replaceOPDoctorId" />
      </FormItem>
      <FormItem label="是否允许预约" prop="isAllowAppoint">
        <Input v-model="form.isAllowAppoint" />
      </FormItem>
      <FormItem label="号源类型" prop="generateAppointNoTypeId">
        <Input type="number" v-model.number="form.generateAppointNoTypeId" />
      </FormItem>
      <FormItem label="起始预约号次" prop="beginAppointNo">
        <Input type="number" v-model.number="form.beginAppointNo" />
      </FormItem>
      <FormItem label="可预约总数" prop="allownAppointTotal">
        <Input type="number" v-model.number="form.allownAppointTotal" />
      </FormItem>
      <FormItem label="自定义号源" prop="allownAppointNumbers">
        <Input v-model="form.allownAppointNumbers" />
      </FormItem>
      <FormItem label="生成号源时间类型" prop="generateAppointNumberTimeTypeId">
        <Input
          type="number"
          v-model.number="form.generateAppointNumberTimeTypeId"
        />
      </FormItem>
      <FormItem label="起始号源时间" prop="beginAppointNumberTime">
        <Input v-model="form.beginAppointNumberTime" />
      </FormItem>
      <FormItem label="号源间隔时间" prop="appointNumberIntervalTime">
        <Input type="number" v-model.number="form.appointNumberIntervalTime" />
      </FormItem>
      <FormItem label="自定义号源时间" prop="appointNumberTimes">
        <Input v-model="form.appointNumberTimes" />
      </FormItem>
      <FormItem label="是否开启绿色通道" prop="isOpenGreenChannel">
        <Input v-model="form.isOpenGreenChannel" />
      </FormItem>
      <FormItem label="生成绿色号源类型" prop="generateGreenAppointNoTypeId">
        <Input
          type="number"
          v-model.number="form.generateGreenAppointNoTypeId"
        />
      </FormItem>
      <FormItem label="起始绿色预约号次" prop="beginGreenAppointNo">
        <Input type="number" v-model.number="form.beginGreenAppointNo" />
      </FormItem>
      <FormItem label="可绿色预约总数" prop="allownGreenAppointTotal">
        <Input type="number" v-model.number="form.allownGreenAppointTotal" />
      </FormItem>
      <FormItem label="自定义绿色号源" prop="allownGreenAppointNumbers">
        <Input v-model="form.allownGreenAppointNumbers" />
      </FormItem>
      <FormItem
        label="生成绿色号源时间类型"
        prop="generateGreenAppointNumberTimeTypeId"
      >
        <Input
          type="number"
          v-model.number="form.generateGreenAppointNumberTimeTypeId"
        />
      </FormItem>
      <FormItem label="起始绿色号源时间" prop="beginGreenAppointNumberTime">
        <Input v-model="form.beginGreenAppointNumberTime" />
      </FormItem>
      <FormItem label="绿色号源间隔时间" prop="greenAppointNumberIntervalTime">
        <Input
          type="number"
          v-model.number="form.greenAppointNumberIntervalTime"
        />
      </FormItem>
      <FormItem label="自定义绿色号源时间" prop="greenAppointNumberTimes">
        <Input v-model="form.greenAppointNumberTimes" />
      </FormItem>
      <FormItem label="重复类型" prop="repeatTypeId">
        <Input type="number" v-model.number="form.repeatTypeId" />
      </FormItem>
      <FormItem label="重复频率" prop="repeatInterval">
        <Input type="number" v-model.number="form.repeatInterval" />
      </FormItem>
      <FormItem label="开始时间" prop="repeatDateTime">
        <Input v-model="form.repeatDateTime" />
      </FormItem>
      <FormItem label="开始时间年" prop="repeatDateOfYear">
        <Input type="number" v-model.number="form.repeatDateOfYear" />
      </FormItem>
      <FormItem label="开始时间月" prop="repeatDateOfMonth">
        <Input type="number" v-model.number="form.repeatDateOfMonth" />
      </FormItem>
      <FormItem label="开始时间日" prop="repeatDateOfDay">
        <Input v-model="form.repeatDateOfDay" />
      </FormItem>
      <FormItem label="结束类型" prop="repeatEndTypeId">
        <Input type="number" v-model.number="form.repeatEndTypeId" />
      </FormItem>
      <FormItem label="结束时间" prop="repeatEndDateTime">
        <Input v-model="form.repeatEndDateTime" />
      </FormItem>
      <FormItem label="最后修改日期" prop="lastDateModified">
        <Input v-model="form.lastDateModified" />
      </FormItem>
      <FormItem label="是否删除" prop="isDelete">
        <Input v-model="form.isDelete" />
      </FormItem>
      <FormItem label="出诊区域集合" prop="schedulingClinicNames">
        <Input v-model="form.schedulingClinicNames" />
      </FormItem>
      <FormItem label="出诊医生集合" prop="doctorIds">
        <Input v-model="form.doctorIds" />
      </FormItem>
      <FormItem label="是否开启精准预约" prop="isAccurateReservation">
        <Input v-model="form.isAccurateReservation" />
      </FormItem>
      <FormItem label="号源类型" prop="oPBasicSchedulingNumberId">
        <Input type="number" v-model.number="form.oPBasicSchedulingNumberId" />
      </FormItem>
      <FormItem label="是否允许特殊预约" prop="isAllowSpecialAppoint">
        <Input v-model="form.isAllowSpecialAppoint" />
      </FormItem>
      <FormItem label="特殊号源类型" prop="generateSpecialAppointNoTypeId">
        <Input
          type="number"
          v-model.number="form.generateSpecialAppointNoTypeId"
        />
      </FormItem>
      <FormItem label="特殊预约起始预约号次" prop="beginSpecialAppointNo">
        <Input type="number" v-model.number="form.beginSpecialAppointNo" />
      </FormItem>
      <FormItem label="特殊预约可预约总数" prop="allownSpecialAppointTotal">
        <Input type="number" v-model.number="form.allownSpecialAppointTotal" />
      </FormItem>
      <FormItem label="特殊预约自定义号源" prop="allownSpecialAppointNumbers">
        <Input v-model="form.allownSpecialAppointNumbers" />
      </FormItem>
      <FormItem
        label="特殊预约生成号源时间类型"
        prop="generateSpecialAppointNumberTimeTypeId"
      >
        <Input
          type="number"
          v-model.number="form.generateSpecialAppointNumberTimeTypeId"
        />
      </FormItem>
      <FormItem
        label="特殊预约起始号源时间"
        prop="beginSpecialAppointNumberTime"
      >
        <Input v-model="form.beginSpecialAppointNumberTime" />
      </FormItem>
      <FormItem
        label="特殊预约号源间隔时间"
        prop="specialAppointNumberIntervalTime"
      >
        <Input
          type="number"
          v-model.number="form.specialAppointNumberIntervalTime"
        />
      </FormItem>
      <FormItem label="特殊预约自定义号源时间" prop="specialAppointNumberTimes">
        <Input v-model="form.specialAppointNumberTimes" />
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { oPSchedulingPlanApi } from '@/api/scheduling/op-scheduling-plan';
export default {
  name: 'OPSchedulingPlanListForm',
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
        oPSchedulingPlanId: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 是否审核
        isApprove: null,
        // 门诊级别
        schedulingLevelId: null,
        // 门诊专业
        schedulingSpecialtyId: null,
        // 门诊诊室
        schedulingClinicId: null,
        // 级别编码/号别
        schedulingLevelCode: null,
        // 所在医院
        hospitalId: null,
        // 预约号源
        appointNumbers: null,
        // 出诊区域集合
        schedulingClinicIds: null,
        // 创建人
        posterId: null,
        // 最后审核日期
        lastApproveDate: null,
        // 审核人
        approverId: null,
        // 二级审核状态
        secondApprovalStateId: null,
        // 新建或编辑状态
        createOrUpdateStateId: null,
        // 最后修改人
        lastModifierId: null,
        // 对应的门诊排班计划映射
        schedulingPlanMappingId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 出诊类型
        oPSchedulingTypeId: null,
        // 替诊医生
        replaceOPDoctorId: null,
        // 是否允许预约
        isAllowAppoint: null,
        // 号源类型
        generateAppointNoTypeId: null,
        // 起始预约号次
        beginAppointNo: null,
        // 可预约总数
        allownAppointTotal: null,
        // 自定义号源
        allownAppointNumbers: null,
        // 生成号源时间类型
        generateAppointNumberTimeTypeId: null,
        // 起始号源时间
        beginAppointNumberTime: null,
        // 号源间隔时间
        appointNumberIntervalTime: null,
        // 自定义号源时间
        appointNumberTimes: null,
        // 是否开启绿色通道
        isOpenGreenChannel: null,
        // 生成绿色号源类型
        generateGreenAppointNoTypeId: null,
        // 起始绿色预约号次
        beginGreenAppointNo: null,
        // 可绿色预约总数
        allownGreenAppointTotal: null,
        // 自定义绿色号源
        allownGreenAppointNumbers: null,
        // 生成绿色号源时间类型
        generateGreenAppointNumberTimeTypeId: null,
        // 起始绿色号源时间
        beginGreenAppointNumberTime: null,
        // 绿色号源间隔时间
        greenAppointNumberIntervalTime: null,
        // 自定义绿色号源时间
        greenAppointNumberTimes: null,
        // 重复类型
        repeatTypeId: null,
        // 重复频率
        repeatInterval: null,
        // 开始时间
        repeatDateTime: null,
        // 开始时间年
        repeatDateOfYear: null,
        // 开始时间月
        repeatDateOfMonth: null,
        // 开始时间日
        repeatDateOfDay: null,
        // 结束类型
        repeatEndTypeId: null,
        // 结束时间
        repeatEndDateTime: null,
        // 最后修改日期
        lastDateModified: null,
        // 是否删除
        isDelete: null,
        // 出诊区域集合
        schedulingClinicNames: null,
        // 出诊医生集合
        doctorIds: null,
        // 是否开启精准预约
        isAccurateReservation: null,
        // 号源类型
        oPBasicSchedulingNumberId: null,
        // 是否允许特殊预约
        isAllowSpecialAppoint: null,
        // 特殊号源类型
        generateSpecialAppointNoTypeId: null,
        // 特殊预约起始预约号次
        beginSpecialAppointNo: null,
        // 特殊预约可预约总数
        allownSpecialAppointTotal: null,
        // 特殊预约自定义号源
        allownSpecialAppointNumbers: null,
        // 特殊预约生成号源时间类型
        generateSpecialAppointNumberTimeTypeId: null,
        // 特殊预约起始号源时间
        beginSpecialAppointNumberTime: null,
        // 特殊预约号源间隔时间
        specialAppointNumberIntervalTime: null,
        // 特殊预约自定义号源时间
        specialAppointNumberTimes: null
      },
      // 表单验证
      formValidate: {
        // 星期
        dayOfWeekId: [
          {
            type: 'number',
            required: true,
            message: '请输入星期',
            trigger: 'blur'
          }
        ],
        // 时段
        timeOfDayId: [
          {
            type: 'number',
            required: true,
            message: '请输入时段',
            trigger: 'blur'
          }
        ],
        // 挂号价目
        price: [
          {
            type: 'number',
            required: true,
            message: '请输入挂号价目',
            trigger: 'blur'
          }
        ],
        // 是否审核
        isApprove: [
          { required: true, message: '请输入是否审核', trigger: 'blur' }
        ],
        // 门诊级别
        schedulingLevelId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊级别',
            trigger: 'blur'
          }
        ],
        // 门诊专业
        schedulingSpecialtyId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊专业',
            trigger: 'blur'
          }
        ],
        // 门诊诊室
        schedulingClinicId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊诊室',
            trigger: 'blur'
          }
        ],
        // 级别编码/号别
        schedulingLevelCode: [
          { required: true, message: '请输入级别编码/号别', trigger: 'blur' }
        ],
        // 所在医院
        hospitalId: [
          {
            type: 'number',
            required: true,
            message: '请输入所在医院',
            trigger: 'blur'
          }
        ],
        // 预约号源
        appointNumbers: [
          { required: true, message: '请输入预约号源', trigger: 'blur' }
        ],
        // 出诊区域集合
        schedulingClinicIds: [
          { required: true, message: '请输入出诊区域集合', trigger: 'blur' }
        ],
        // 创建人
        posterId: [
          {
            type: 'number',
            required: true,
            message: '请输入创建人',
            trigger: 'blur'
          }
        ],
        // 最后审核日期
        lastApproveDate: [
          { required: true, message: '请输入最后审核日期', trigger: 'blur' }
        ],
        // 审核人
        approverId: [
          {
            type: 'number',
            required: true,
            message: '请输入审核人',
            trigger: 'blur'
          }
        ],
        // 二级审核状态
        secondApprovalStateId: [
          {
            type: 'number',
            required: true,
            message: '请输入二级审核状态',
            trigger: 'blur'
          }
        ],
        // 新建或编辑状态
        createOrUpdateStateId: [
          {
            type: 'number',
            required: true,
            message: '请输入新建或编辑状态',
            trigger: 'blur'
          }
        ],
        // 最后修改人
        lastModifierId: [
          {
            type: 'number',
            required: true,
            message: '请输入最后修改人',
            trigger: 'blur'
          }
        ],
        // 对应的门诊排班计划映射
        schedulingPlanMappingId: [
          {
            type: 'number',
            required: true,
            message: '请输入对应的门诊排班计划映射',
            trigger: 'blur'
          }
        ],
        // 门诊科室
        oPDepartmentId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊科室',
            trigger: 'blur'
          }
        ],
        // 门诊医生
        oPDoctorId: [
          {
            type: 'number',
            required: true,
            message: '请输入门诊医生',
            trigger: 'blur'
          }
        ],
        // 出诊类型
        oPSchedulingTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入出诊类型',
            trigger: 'blur'
          }
        ],
        // 替诊医生
        replaceOPDoctorId: [
          {
            type: 'number',
            required: true,
            message: '请输入替诊医生',
            trigger: 'blur'
          }
        ],
        // 是否允许预约
        isAllowAppoint: [
          { required: true, message: '请输入是否允许预约', trigger: 'blur' }
        ],
        // 号源类型
        generateAppointNoTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入号源类型',
            trigger: 'blur'
          }
        ],
        // 起始预约号次
        beginAppointNo: [
          {
            type: 'number',
            required: true,
            message: '请输入起始预约号次',
            trigger: 'blur'
          }
        ],
        // 可预约总数
        allownAppointTotal: [
          {
            type: 'number',
            required: true,
            message: '请输入可预约总数',
            trigger: 'blur'
          }
        ],
        // 自定义号源
        allownAppointNumbers: [
          { required: true, message: '请输入自定义号源', trigger: 'blur' }
        ],
        // 生成号源时间类型
        generateAppointNumberTimeTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入生成号源时间类型',
            trigger: 'blur'
          }
        ],
        // 起始号源时间
        beginAppointNumberTime: [
          { required: true, message: '请输入起始号源时间', trigger: 'blur' }
        ],
        // 号源间隔时间
        appointNumberIntervalTime: [
          {
            type: 'number',
            required: true,
            message: '请输入号源间隔时间',
            trigger: 'blur'
          }
        ],
        // 自定义号源时间
        appointNumberTimes: [
          { required: true, message: '请输入自定义号源时间', trigger: 'blur' }
        ],
        // 是否开启绿色通道
        isOpenGreenChannel: [
          {
            required: true,
            message: '请输入是否开启绿色通道',
            trigger: 'blur'
          }
        ],
        // 生成绿色号源类型
        generateGreenAppointNoTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入生成绿色号源类型',
            trigger: 'blur'
          }
        ],
        // 起始绿色预约号次
        beginGreenAppointNo: [
          {
            type: 'number',
            required: true,
            message: '请输入起始绿色预约号次',
            trigger: 'blur'
          }
        ],
        // 可绿色预约总数
        allownGreenAppointTotal: [
          {
            type: 'number',
            required: true,
            message: '请输入可绿色预约总数',
            trigger: 'blur'
          }
        ],
        // 自定义绿色号源
        allownGreenAppointNumbers: [
          { required: true, message: '请输入自定义绿色号源', trigger: 'blur' }
        ],
        // 生成绿色号源时间类型
        generateGreenAppointNumberTimeTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入生成绿色号源时间类型',
            trigger: 'blur'
          }
        ],
        // 起始绿色号源时间
        beginGreenAppointNumberTime: [
          {
            required: true,
            message: '请输入起始绿色号源时间',
            trigger: 'blur'
          }
        ],
        // 绿色号源间隔时间
        greenAppointNumberIntervalTime: [
          {
            type: 'number',
            required: true,
            message: '请输入绿色号源间隔时间',
            trigger: 'blur'
          }
        ],
        // 自定义绿色号源时间
        greenAppointNumberTimes: [
          {
            required: true,
            message: '请输入自定义绿色号源时间',
            trigger: 'blur'
          }
        ],
        // 重复类型
        repeatTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入重复类型',
            trigger: 'blur'
          }
        ],
        // 重复频率
        repeatInterval: [
          {
            type: 'number',
            required: true,
            message: '请输入重复频率',
            trigger: 'blur'
          }
        ],
        // 开始时间
        repeatDateTime: [
          { required: true, message: '请输入开始时间', trigger: 'blur' }
        ],
        // 开始时间年
        repeatDateOfYear: [
          {
            type: 'number',
            required: true,
            message: '请输入开始时间年',
            trigger: 'blur'
          }
        ],
        // 开始时间月
        repeatDateOfMonth: [
          {
            type: 'number',
            required: true,
            message: '请输入开始时间月',
            trigger: 'blur'
          }
        ],
        // 开始时间日
        repeatDateOfDay: [
          { required: true, message: '请输入开始时间日', trigger: 'blur' }
        ],
        // 结束类型
        repeatEndTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入结束类型',
            trigger: 'blur'
          }
        ],
        // 结束时间
        repeatEndDateTime: [
          { required: true, message: '请输入结束时间', trigger: 'blur' }
        ],
        // 最后修改日期
        lastDateModified: [
          { required: true, message: '请输入最后修改日期', trigger: 'blur' }
        ],
        // 是否删除
        isDelete: [
          { required: true, message: '请输入是否删除', trigger: 'blur' }
        ],
        // 出诊区域集合
        schedulingClinicNames: [
          { required: true, message: '请输入出诊区域集合', trigger: 'blur' }
        ],
        // 出诊医生集合
        doctorIds: [
          { required: true, message: '请输入出诊医生集合', trigger: 'blur' }
        ],
        // 是否开启精准预约
        isAccurateReservation: [
          {
            required: true,
            message: '请输入是否开启精准预约',
            trigger: 'blur'
          }
        ],
        // 号源类型
        oPBasicSchedulingNumberId: [
          {
            type: 'number',
            required: true,
            message: '请输入号源类型',
            trigger: 'blur'
          }
        ],
        // 是否允许特殊预约
        isAllowSpecialAppoint: [
          {
            required: true,
            message: '请输入是否允许特殊预约',
            trigger: 'blur'
          }
        ],
        // 特殊号源类型
        generateSpecialAppointNoTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入特殊号源类型',
            trigger: 'blur'
          }
        ],
        // 特殊预约起始预约号次
        beginSpecialAppointNo: [
          {
            type: 'number',
            required: true,
            message: '请输入特殊预约起始预约号次',
            trigger: 'blur'
          }
        ],
        // 特殊预约可预约总数
        allownSpecialAppointTotal: [
          {
            type: 'number',
            required: true,
            message: '请输入特殊预约可预约总数',
            trigger: 'blur'
          }
        ],
        // 特殊预约自定义号源
        allownSpecialAppointNumbers: [
          {
            required: true,
            message: '请输入特殊预约自定义号源',
            trigger: 'blur'
          }
        ],
        // 特殊预约生成号源时间类型
        generateSpecialAppointNumberTimeTypeId: [
          {
            type: 'number',
            required: true,
            message: '请输入特殊预约生成号源时间类型',
            trigger: 'blur'
          }
        ],
        // 特殊预约起始号源时间
        beginSpecialAppointNumberTime: [
          {
            required: true,
            message: '请输入特殊预约起始号源时间',
            trigger: 'blur'
          }
        ],
        // 特殊预约号源间隔时间
        specialAppointNumberIntervalTime: [
          {
            type: 'number',
            required: true,
            message: '请输入特殊预约号源间隔时间',
            trigger: 'blur'
          }
        ],
        // 特殊预约自定义号源时间
        specialAppointNumberTimes: [
          {
            required: true,
            message: '请输入特殊预约自定义号源时间',
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
          'oPSchedulingPlanId',
          newValue['oPSchedulingPlanId']
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
        oPSchedulingPlanId: null,
        // 星期
        dayOfWeekId: null,
        // 时段
        timeOfDayId: null,
        // 挂号价目
        price: null,
        // 是否审核
        isApprove: null,
        // 门诊级别
        schedulingLevelId: null,
        // 门诊专业
        schedulingSpecialtyId: null,
        // 门诊诊室
        schedulingClinicId: null,
        // 级别编码/号别
        schedulingLevelCode: null,
        // 所在医院
        hospitalId: null,
        // 预约号源
        appointNumbers: null,
        // 出诊区域集合
        schedulingClinicIds: null,
        // 创建人
        posterId: null,
        // 最后审核日期
        lastApproveDate: null,
        // 审核人
        approverId: null,
        // 二级审核状态
        secondApprovalStateId: null,
        // 新建或编辑状态
        createOrUpdateStateId: null,
        // 最后修改人
        lastModifierId: null,
        // 对应的门诊排班计划映射
        schedulingPlanMappingId: null,
        // 门诊科室
        oPDepartmentId: null,
        // 门诊医生
        oPDoctorId: null,
        // 出诊类型
        oPSchedulingTypeId: null,
        // 替诊医生
        replaceOPDoctorId: null,
        // 是否允许预约
        isAllowAppoint: null,
        // 号源类型
        generateAppointNoTypeId: null,
        // 起始预约号次
        beginAppointNo: null,
        // 可预约总数
        allownAppointTotal: null,
        // 自定义号源
        allownAppointNumbers: null,
        // 生成号源时间类型
        generateAppointNumberTimeTypeId: null,
        // 起始号源时间
        beginAppointNumberTime: null,
        // 号源间隔时间
        appointNumberIntervalTime: null,
        // 自定义号源时间
        appointNumberTimes: null,
        // 是否开启绿色通道
        isOpenGreenChannel: null,
        // 生成绿色号源类型
        generateGreenAppointNoTypeId: null,
        // 起始绿色预约号次
        beginGreenAppointNo: null,
        // 可绿色预约总数
        allownGreenAppointTotal: null,
        // 自定义绿色号源
        allownGreenAppointNumbers: null,
        // 生成绿色号源时间类型
        generateGreenAppointNumberTimeTypeId: null,
        // 起始绿色号源时间
        beginGreenAppointNumberTime: null,
        // 绿色号源间隔时间
        greenAppointNumberIntervalTime: null,
        // 自定义绿色号源时间
        greenAppointNumberTimes: null,
        // 重复类型
        repeatTypeId: null,
        // 重复频率
        repeatInterval: null,
        // 开始时间
        repeatDateTime: null,
        // 开始时间年
        repeatDateOfYear: null,
        // 开始时间月
        repeatDateOfMonth: null,
        // 开始时间日
        repeatDateOfDay: null,
        // 结束类型
        repeatEndTypeId: null,
        // 结束时间
        repeatEndDateTime: null,
        // 最后修改日期
        lastDateModified: null,
        // 是否删除
        isDelete: null,
        // 出诊区域集合
        schedulingClinicNames: null,
        // 出诊医生集合
        doctorIds: null,
        // 是否开启精准预约
        isAccurateReservation: null,
        // 号源类型
        oPBasicSchedulingNumberId: null,
        // 是否允许特殊预约
        isAllowSpecialAppoint: null,
        // 特殊号源类型
        generateSpecialAppointNoTypeId: null,
        // 特殊预约起始预约号次
        beginSpecialAppointNo: null,
        // 特殊预约可预约总数
        allownSpecialAppointTotal: null,
        // 特殊预约自定义号源
        allownSpecialAppointNumbers: null,
        // 特殊预约生成号源时间类型
        generateSpecialAppointNumberTimeTypeId: null,
        // 特殊预约起始号源时间
        beginSpecialAppointNumberTime: null,
        // 特殊预约号源间隔时间
        specialAppointNumberIntervalTime: null,
        // 特殊预约自定义号源时间
        specialAppointNumberTimes: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await oPSchedulingPlanApi.addOPSchedulingPlan(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await oPSchedulingPlanApi.updateOPSchedulingPlan(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
