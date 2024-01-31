<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="别名" prop="nickName">
            <Input v-model="form.nickName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="简称" prop="shortName">
            <Input v-model="form.shortName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="门诊科室" prop="opDepartmentId">
            <Select class="form-width" v-model="form.opDepartmentId">
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
          <FormItem label="编码" prop="code">
            <Input v-model="form.code" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="科室" prop="departmentId">
            <Select
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
            <Select class="form-width" v-model="form.doctorId">
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
          <FormItem label="职称" prop="professionalTitleId">
            <Select class="form-width" v-model="form.professionalTitleId">
              <Option
                :value="item.value"
                v-for="item in ProfessionalTitleListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem label="专长" prop="specialty">
            <Input v-model="form.specialty" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <Checkbox v-model="form.isDelete"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启预约" prop="isOpenAppoint">
            <Checkbox v-model="form.isOpenAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否有出诊" prop="isHaveScheduling">
            <Checkbox v-model="form.isHaveScheduling"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否有预约" prop="isHaveAppoint">
            <Checkbox v-model="form.isHaveAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="门诊医生类型   1、医生 2、会诊 3、团队"
            prop="oPDoctorTypeId"
          >
            <Input type="number" v-model.number="form.oPDoctorTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="关联医生Id集合" prop="doctorIds">
            <Input v-model="form.doctorIds" />
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem label="头像路径" prop="avatarPath">
            <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.avatarPath"
            ></FileUploadSingle>
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem label="介绍" prop="description">
            <VueUeditorWrap
              v-model="form.description"
              :config="ueditorConfig"
            ></VueUeditorWrap>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否医生   当前台读取医生信息为门诊医生时是否显示"
            prop="isDoctor"
          >
            <Checkbox v-model="form.isDoctor"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约规则" prop="oPSchedulingRuleId">
            <Input type="number" v-model.number="form.oPSchedulingRuleId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="头像路径" prop="avatarPathBASE64">
            <Input v-model="form.avatarPathBASE64" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="价格" prop="price">
            <Input type="number" v-model.number="form.price" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="出诊配置" prop="oPSchedulingSettingId">
            <Input type="number" v-model.number="form.oPSchedulingSettingId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启候补" prop="isOpenSchedulingCondidate">
            <Checkbox v-model="form.isOpenSchedulingCondidate"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约候补个数" prop="schedulingCondidateNumber">
            <Input
              type="number"
              v-model.number="form.schedulingCondidateNumber"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启线上复诊" prop="isOpenClinicPrescript">
            <Checkbox v-model="form.isOpenClinicPrescript"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启在线问诊" prop="isOpenClinic">
            <Checkbox v-model="form.isOpenClinic"></Checkbox>
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
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
import { OPDoctorApi } from '@/api/organizations/opdoctor';
import { departmentApi } from '@/api/organizations/department';
import { OPDepartmentApi } from '@/api/organizations/op-department';
import { schedulingLevelApi } from '@/api/scheduling/scheduling-level';
import { doctorApi } from '@/api/organizations/doctor';
import { enumItemApi } from '@/api/enum-item';
import VueUeditorWrap from 'vue-ueditor-wrap';
import config from '@/config';
import FileUploadSingle from '@/components/file-upload-single';
export default {
  name: 'OPDoctorListForm',
  components: { VueUeditorWrap, FileUploadSingle },
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
      ProfessionalTitleListData: [],

      doctorListData: [],
      departmentListData: [],
      opdepartmentListData: [],
      schedulingLevelListData: [],
      imageUrlModuleType: SERVICE_TYPE.ARTICLE.value,
      // 表单数据
      form: {
        // 主键Id
        oPDoctorId: null,
        // 名称
        name: null,
        // 别名
        nickName: null,
        // 简称
        shortName: null,
        // 门诊科室
        oPDepartmentId: null,
        // 编码
        code: null,
        // 科室
        departmentId: null,
        // 医生
        doctorId: null,
        // 出诊级别
        schedulingLevelId: null,
        // 职称
        professionalTitleId: null,
        // 专长
        specialty: null,
        // 是否删除
        isDelete: null,
        // 是否开启预约
        isOpenAppoint: null,
        // 是否有出诊
        isHaveScheduling: null,
        // 是否有预约
        isHaveAppoint: null,
        // 门诊医生类型   1、医生 2、会诊 3、团队
        oPDoctorTypeId: null,
        // 关联医生Id集合
        doctorIds: null,
        // 排序
        sorting: null,
        // 头像路径
        avatarPath: null,
        // 介绍
        description: null,
        // 今日平均消耗秒数
        averageSecondForDay: null,
        // 今日是否预约完毕
        isUsedUpForDay: null,
        // 前7天平均消耗秒数
        averageSecondForWeek: null,
        // 前7天是否预约完毕
        isUsedUpForWeek: null,
        // 前30天平均消耗秒数
        averageSecondForMonth: null,
        // 前30天是否预约完毕
        isUsedUpForMonth: null,
        // 前30天平均消耗秒数汇总
        averageSeconds: null,
        // 推荐医生集合
        recommendOPDoctorIds: null,
        // 是否医生   当前台读取医生信息为门诊医生时是否显示
        isDoctor: null,
        // 预约规则
        oPSchedulingRuleId: null,
        // 头像路径
        avatarPathBASE64: null,
        // 价格
        price: null,
        // 出诊配置
        oPSchedulingSettingId: null,
        // 是否开启候补
        isOpenSchedulingCondidate: null,
        // 预约候补个数
        schedulingCondidateNumber: null,
        // 是否开启线上复诊
        isOpenClinicPrescript: null,
        // 复诊表单模板
        referralTemplate: null,
        // 是否开启在线问诊
        isOpenClinic: null,
        // 关联人员信息
        personId: null
      },
      ueditorConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: config.baseUrl.fileUploadUrl,
        // serverUrl: fileApi.fileUploadLocalUrl + 3,
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: '/ueditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 340,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: true,
        zIndex: 1060
      },
      // 表单验证
      formValidate: {
        // 主键Id
        oPDoctorId: [
          {
            type: 'number',
            required: false,
            message: '请输入主键Id',
            trigger: 'blur'
          }
        ],
        // 名称
        name: [{ required: false, message: '请输入名称', trigger: 'blur' }],
        schedulingLevelId: [
          {
            type: 'number',
            required: false,
            message: '请输入出诊级别',
            trigger: 'blur'
          }
        ],
        // 职称
        professionalTitleId: [
          {
            type: 'number',
            required: false,
            message: '请输入职称',
            trigger: 'blur'
          }
        ],
        // 专长
        specialty: [
          { required: false, message: '请输入专长', trigger: 'blur' }
        ],
        // 门诊医生类型   1、医生 2、会诊 3、团队
        oPDoctorTypeId: [
          {
            type: 'number',
            required: false,
            message: '请输入门诊医生类型   1、医生 2、会诊 3、团队',
            trigger: 'blur'
          }
        ],
        // 介绍
        description: [
          { required: false, message: '请输入介绍', trigger: 'blur' }
        ],
        // 预约规则
        oPSchedulingRuleId: [
          {
            type: 'number',
            required: false,
            message: '请输入预约规则',
            trigger: 'blur'
          }
        ],
        // 头像路径
        avatarPathBASE64: [
          { required: false, message: '请输入头像路径', trigger: 'blur' }
        ],
        // 价格
        price: [
          {
            type: 'number',
            required: false,
            message: '请输入价格',
            trigger: 'blur'
          }
        ],
        // 出诊配置
        oPSchedulingSettingId: [
          {
            type: 'number',
            required: false,
            message: '请输入出诊配置',
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
        this.$set(this.form, 'opdoctorId', newValue['opdoctorId']);
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
    this.initDoctor(null);
    this.initOPDepartment();
    this.initSchedulingLevel();
    this.initProfessionalTitleType();
  },
  mounted () {},
  methods: {
    departmentChange (e) {
      this.initDoctor(e);
    },
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
        oPDoctorId: null,
        // 名称
        name: null,
        // 别名
        nickName: null,
        // 简称
        shortName: null,
        // 门诊科室
        oPDepartmentId: null,
        // 编码
        code: null,
        // 科室
        departmentId: null,
        // 医生
        doctorId: null,
        // 出诊级别
        schedulingLevelId: null,
        // 职称
        professionalTitleId: null,
        // 专长
        specialty: null,
        // 是否删除
        isDelete: null,
        // 是否开启预约
        isOpenAppoint: null,
        // 是否有出诊
        isHaveScheduling: null,
        // 是否有预约
        isHaveAppoint: null,
        // 门诊医生类型   1、医生 2、会诊 3、团队
        oPDoctorTypeId: null,
        // 关联医生Id集合
        doctorIds: null,
        // 排序
        sorting: null,
        // 头像路径
        avatarPath: null,
        // 介绍
        description: null,
        // 今日平均消耗秒数
        averageSecondForDay: null,
        // 今日是否预约完毕
        isUsedUpForDay: null,
        // 前7天平均消耗秒数
        averageSecondForWeek: null,
        // 前7天是否预约完毕
        isUsedUpForWeek: null,
        // 前30天平均消耗秒数
        averageSecondForMonth: null,
        // 前30天是否预约完毕
        isUsedUpForMonth: null,
        // 前30天平均消耗秒数汇总
        averageSeconds: null,
        // 推荐医生集合
        recommendOPDoctorIds: null,
        // 是否医生   当前台读取医生信息为门诊医生时是否显示
        isDoctor: null,
        // 预约规则
        oPSchedulingRuleId: null,
        // 头像路径
        avatarPathBASE64: null,
        // 价格
        price: null,
        // 出诊配置
        oPSchedulingSettingId: null,
        // 是否开启候补
        isOpenSchedulingCondidate: null,
        // 预约候补个数
        schedulingCondidateNumber: null,
        // 是否开启线上复诊
        isOpenClinicPrescript: null,
        // 复诊表单模板
        referralTemplate: null,
        // 是否开启在线问诊
        isOpenClinic: null,
        // 关联人员信息
        personId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await OPDoctorApi.addOPDoctor(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await OPDoctorApi.updateOPDoctor(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
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
            value: item.opDepartmentId,
            label: item.name
          });
        });
        this.opdepartmentListData = list;
      } finally {
        this.$Spin.hide();
      }
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
    async initProfessionalTitleType () {
      try {
        let params = {
          sqlQueryKeyword: 'ProfessionalTitle'
        };
        let result = await enumItemApi.listEnumitem(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.keyId,
            label: item.name
          });
        });
        this.ProfessionalTitleListData = list;
      } finally {
      }
    }
  }
};
</script>
