<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>

        <Col span="12">
          <FormItem label="注册账号" prop="userName">
            <Input v-model="form.userName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="密码" prop="password">
            <Input v-model="form.password" type="password" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="姓名" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="身份证号" prop="idCardNo">
            <Input v-model="form.idCardNo" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="身份证正面图片" prop="idCardFront">
            <!-- <Input v-model="form.idCardFront" /> -->
            <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.idCardFront"
            ></FileUploadSingle>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="身份证反面图片" prop="idCardNegativeSide">
            <!-- <Input v-model="form.idCardNegativeSide" /> -->
            <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.idCardNegativeSide"
            ></FileUploadSingle>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="执业医院" prop="opDepartmentId">
            <Select v-model="form.opDepartmentId">
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
          <FormItem label="科室" prop="dadepartment">
            <Input v-model="form.dadepartment" />
          </FormItem>
        </Col>
      </Row>
      <Row>
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
        <Col span="12">
          <FormItem label="联系电话" prop="phoneNumber">
            <Input v-model="form.phoneNumber" />
          </FormItem>
        </Col>
        <!-- <Col span="12">
                <FormItem label="审核时间" prop="verifyTime">
                                            <DatePicker
                            type="datetime"
                            placeholder="请选择审核时间"
                            v-model="queryForm.verifyTime"
                          ></DatePicker>
                                    </FormItem>
            </Col> -->
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
import { doctorApplyApi } from '@/api/medicalconsortiums/doctor-apply';
import { REFERRAL_APPROVAL_STATUS_TYPE } from '@/constants/common';
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
import FileUploadSingle from '@/components/file-upload-single';
import { referralApplicationApi } from '@/api/medicalconsortiums/referral-application';

export default {
  name: 'DoctorApplyListForm',
  components: { FileUploadSingle },
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
      referralApprovalStatusTypeList: [],
      applyHospitalLIst: [], // 执业医院
      imageUrlModuleType: SERVICE_TYPE.DOCTOR_APPLY.value,
      // 表单数据
      form: {
        // 主键Id
        doctorApplyId: null,
        // 注册账号
        userName: '',
        // 密码
        password: null,
        // 姓名
        name: null,
        // 身份证号
        idCardNo: null,
        // 联系电话
        phoneNumber: null,
        // 身份证正面图片
        idCardFront: null,
        // 身份证反面图片
        idCardNegativeSide: null,
        // 执业医院
        opDepartmentId: null,
        // 科室
        dadepartment: null,
        // 审核状态
        verifyStatus: null,
        // 审核时间
        verifyTime: null,
        // 驳回理由
        overruleReason: null
      },
      // 表单验证
      formValidate: {
        // 注册账号
        userName: [
          { required: true, message: '请输入注册账号', trigger: 'blur' }
        ],
        // 密码
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        // 姓名
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        // 身份证号
        idCardNo: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        // 联系电话
        phoneNumber: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        // 身份证正面图片
        // idCardFront: [
        //   { required: true, message: "请输入身份证正面图片", trigger: "blur" },
        // ],
        // 身份证反面图片
        // idCardNegativeSide: [
        //   { required: true, message: "请输入身份证反面图片", trigger: "blur" },
        // ],
        // 执业医院
        opDepartmentId: [
          {
            type: 'number',
            required: true,
            message: '请输入执业医院',
            trigger: 'blur'
          }
        ],
        // 科室
        dadepartment: [
          { required: true, message: '请输入科室', trigger: 'blur' }
        ],
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
        this.$set(this.form, 'doctorApplyId', newValue['doctorApplyId']);
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
    for (let item in REFERRAL_APPROVAL_STATUS_TYPE) {
      let obj = {};
      obj.label = REFERRAL_APPROVAL_STATUS_TYPE[item].desc;
      obj.value = REFERRAL_APPROVAL_STATUS_TYPE[item].value;
      array.push(obj);
    }
    this.referralApprovalStatusTypeList = array;
    this.initApplyHospital();
  },
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
        doctorApplyId: null,
        // 注册账号
        userName: '',
        // 密码
        password: null,
        // 姓名
        name: null,
        // 身份证号
        idCardNo: null,
        // 联系电话
        phoneNumber: null,
        // 身份证正面图片
        idCardFront: null,
        // 身份证反面图片
        idCardNegativeSide: null,
        // 执业医院
        opDepartmentId: null,
        // 科室
        dadepartment: null,
        // 审核状态
        verifyStatus: null,
        // 审核时间
        verifyTime: null,
        // 驳回理由
        overruleReason: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await doctorApplyApi.addDoctorApply(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await doctorApplyApi.updateDoctorApply(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
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
    }
  }
};
</script>
