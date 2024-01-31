<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>

        <Col span="24">
          <FormItem label="患者名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="性别" prop="genderId">
            <Select v-model="form.genderId">
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in gengerTypeList"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="年龄" prop="age">
            <Input type="number" v-model.number="form.age" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="身份证号" prop="idCardNo">
            <Input v-model="form.idCardNo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="联系电话" prop="phoneNumber">
            <Input v-model="form.phoneNumber" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <!-- <Col span="12">
          <FormItem label="申请日期" prop="applyDate">
            <DatePicker
              type="datetime"
              placeholder="请选择申请日期"
              v-model="queryForm.applyDate"
            ></DatePicker>
          </FormItem>
        </Col> -->
        <Col span="12">
          <FormItem label="申请医院" prop="applyHospitalId">
            <Select v-model="form.applyHospitalId">
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in applyHospitalLIst"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="申请医生" prop="applyDoctorId">
            <Select v-model="form.applyDoctorId">
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in applyDoctorList"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预约医院" prop="reservationHospitalId">
            <Select v-model="form.reservationHospitalId">
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in reservationDoctorList"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约科室" prop="reservationDepartment">
            <Input v-model="form.reservationDepartment" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="申请类型" prop="applyType">
            <Select v-model="form.applyType">
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in referralTypeList"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12" v-show="false">
          <FormItem label="审核状态" prop="verifyStatus">
            <Select v-model="form.verifyStatus">
              <Option
                :key="item.id"
                :value="item.value"
                v-for="item in referralApprovalStatusTypeList"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="期望时间" prop="expectTime">
            <DatePicker
              type="datetime"
              placeholder="请选择期望时间"
              v-model="form.expectTime"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="初步诊断" prop="initialDiagnosis">
            <Input v-model="form.initialDiagnosis" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <!-- <Col span="24">
          <FormItem label="预约说明" prop="reservationInstruction">
            <textarea v-model="form.reservationInstruction" />
          </FormItem>
        </Col> -->
        <Col span="24">
          <FormItem label="预约说明" prop="reservationInstruction">
            <Input type="textarea" v-model="form.reservationInstruction" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="备注" prop="remark">
            <Input type="textarea" v-model="form.remark" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="病例" prop="referralApplicationCase">
            <FileUploadPlusMultiple
              :moduleType="importModel.imageUrlModuleType"
              :formatArray="['jpg', 'png', 'jpeg']"
              v-model="form.referralApplicationCase"
            ></FileUploadPlusMultiple>
          </FormItem>
        </Col>
      </Row>
      <Row v-show="false">
        <Col span="24">
          <FormItem label="驳回理由" prop="overruleReason">
            <Input type="textarea" v-model="form.overruleReason" />
          </FormItem> </Col
      ></Row>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { referralApplicationApi } from '@/api/medicalconsortiums/referral-application';
import {
  GENGER_TYPE,
  REFERRAL_TYPE,
  REFERRAL_APPROVAL_STATUS_TYPE
} from '@/constants/common';
import { utils } from '@/lib/util';
import FileUploadPlusMultiple from '@/components/file-upload-plus-multiple';
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
export default {
  name: 'ReferralApplicationListForm',
  components: { FileUploadPlusMultiple },
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
      gengerTypeList: [],
      referralTypeList: [],
      referralApprovalStatusTypeList: [],
      applyHospitalLIst: [], // 申请医院
      applyDoctorList: [], // 申请医生
      reservationDoctorList: [], // 预约医院
      // 表单数据
      form: {
        // 主键Id
        referralApplicationId: null,
        // 患者名称
        name: null,
        // 性别
        genderId: null,
        // 年龄
        age: null,
        // 身份证号
        idCardNo: null,
        // 联系电话
        phoneNumber: null,
        // 申请日期
        applyDate: null,
        // 申请医院
        applyHospitalId: null,
        // 申请医生
        applyDoctorId: null,
        // 预约医院
        reservationHospitalId: null,
        // 申请类型
        applyType: null,
        // 预约科室
        reservationDepartment: null,
        // 期望时间
        expectTime: null,
        // 初步诊断
        initialDiagnosis: null,
        // 预约说明
        reservationInstruction: null,
        // 备注
        remark: null,
        // 审核状态
        verifyStatus: null,
        // 审核时间
        verifyTime: null,
        // 驳回理由
        overruleReason: null,
        // 病例
        referralApplicationCase: []
      },
      // 表单验证
      formValidate: {
        // 主键Id
        referralApplicationId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键Id',
            trigger: 'blur'
          }
        ],
        // 患者名称
        name: [{ required: true, message: '请输入患者名称', trigger: 'blur' }],
        // 性别
        genderId: [
          {
            type: 'number',
            required: true,
            message: '请输入性别',
            trigger: 'blur'
          }
        ],
        // 年龄
        age: [
          {
            type: 'number',
            required: true,
            message: '请输入年龄',
            trigger: 'blur'
          }
        ],
        // 身份证号
        idCardNo: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        // 联系电话
        phoneNumber: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        // 申请日期
        applyDate: [
          { required: true, message: '请输入申请日期', trigger: 'blur' }
        ],
        // 申请医院
        applyHospitalId: [
          {
            type: 'number',
            required: true,
            message: '请输入申请医院',
            trigger: 'blur'
          }
        ],
        // 申请医生
        applyDoctorId: [
          {
            type: 'number',
            required: true,
            message: '请输入申请医生',
            trigger: 'blur'
          }
        ],
        // 预约医院
        reservationHospitalId: [
          {
            type: 'number',
            required: true,
            message: '请输入预约医院',
            trigger: 'blur'
          }
        ],
        // 申请类型
        applyType: [
          {
            type: 'number',
            required: true,
            message: '请输入申请类型',
            trigger: 'blur'
          }
        ],
        // 预约科室
        reservationDepartment: [
          {
            // type: "number",
            required: true,
            message: '请输入预约科室',
            trigger: 'blur'
          }
        ],
        // 期望时间
        // expectTime: [
        //   { required: false, message: "请输入期望时间", trigger: "blur" },
        // ],
        // 初步诊断
        initialDiagnosis: [
          { required: true, message: '请输入初步诊断', trigger: 'blur' }
        ],
        // 预约说明
        reservationInstruction: [
          { required: true, message: '请输入预约说明', trigger: 'blur' }
        ],
        // 备注
        remark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        // 审核状态
        // verifyStatus: [
        //   {
        //     type: "number",
        //     required: true,
        //     message: "请输入审核状态",
        //     trigger: "blur",
        //   },
        // ],
        // 审核时间
        verifyTime: [
          { required: true, message: '请输入审核时间', trigger: 'blur' }
        ]
        // 驳回理由
        // overruleReason: [
        //   { required: true, message: "请输入驳回理由", trigger: "blur" },
        // ],
      },
      importModel: {
        type: '2',
        loading: false,
        imageUrlModuleType: SERVICE_TYPE.REFERRAL_APPLICATION_APPLY.value,
        file: null,
        msg: ''
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
          'referralApplicationId',
          newValue['referralApplicationId']
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
    let array = [];
    for (let item in GENGER_TYPE) {
      let obj = {};
      obj.label = GENGER_TYPE[item].desc;
      obj.value = GENGER_TYPE[item].value;
      array.push(obj);
    }
    this.gengerTypeList = array;

    array = [];
    for (let item in REFERRAL_TYPE) {
      let obj = {};
      obj.label = REFERRAL_TYPE[item].desc;
      obj.value = REFERRAL_TYPE[item].value;
      array.push(obj);
    }
    this.referralTypeList = array;

    array = [];
    for (let item in REFERRAL_APPROVAL_STATUS_TYPE) {
      let obj = {};
      obj.label = REFERRAL_APPROVAL_STATUS_TYPE[item].desc;
      obj.value = REFERRAL_APPROVAL_STATUS_TYPE[item].value;
      array.push(obj);
    }
    this.referralApprovalStatusTypeList = array;

    this.initApplyDoctor();
    this.initApplyHospital();
    this.initReservationDoctor();
  },
  mounted () {},
  methods: {
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      if (this.form.expectTime) {
        // 日期属性进行拦截格式化
        this.form.expectTime = utils.formatDate(this.form.expectTime);
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
        referralApplicationId: null,
        // 患者名称
        name: null,
        // 性别
        genderId: null,
        // 年龄
        age: null,
        // 身份证号
        idCardNo: null,
        // 联系电话
        phoneNumber: null,
        // 申请日期
        applyDate: null,
        // 申请医院
        applyHospitalId: null,
        // 申请医生
        applyDoctorId: null,
        // 预约医院
        reservationHospitalId: null,
        // 申请类型
        applyType: null,
        // 预约科室
        reservationDepartment: null,
        // 期望时间
        expectTime: null,
        // 初步诊断
        initialDiagnosis: null,
        // 预约说明
        reservationInstruction: null,
        // 备注
        remark: null,
        // 审核状态
        verifyStatus: null,
        // 审核时间
        verifyTime: null,
        // 驳回理由
        overruleReason: null,
        // 病例
        referralApplicationCase: []
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await referralApplicationApi.addReferralApplication(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await referralApplicationApi.updateReferralApplication(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    /**
     *       applyHospitalLIst:[],//申请医院
      applyDoctorList:[],//申请医生
      reservationDoctorList:[],//预约医院
     */
    async initApplyHospital () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 300
        };
        let result = await referralApplicationApi.getApplyHospitalLIst(params);
        let datas = result.data;
        let list = [];
        if (datas) {
          datas.map((item) => {
            list.push({
              value: item.opDepartmentId,
              label: item.name
            });
          });
        }

        this.applyHospitalLIst = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initApplyDoctor () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 300,
          opDepartmentId: 8
        };

        let result = await referralApplicationApi.getapplyDoctorList(params);
        let datas = result.data;
        let list = [];
        if (datas) {
          datas.list.map((item) => {
            list.push({
              value: item.opDoctorId,
              label: item.name
            });
          });
        }

        this.applyDoctorList = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initReservationDoctor () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 300,
          opDepartmentId: 8
        };
        let result = await referralApplicationApi.reservationHospitalList(
          params
        );
        let datas = result.data;
        let list = [];
        if (datas) {
          datas.map((item) => {
            list.push({
              value: item.opDepartmentId,
              label: item.name
            });
          });
        }

        this.reservationDoctorList = list;
      } finally {
        this.$Spin.hide();
      }
    }
  }
};
</script>
