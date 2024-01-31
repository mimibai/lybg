<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="140" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="别名" prop="anotherName">
            <Input v-model="form.anotherName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="简称" prop="shortName">
            <Input v-model="form.shortName" />
          </FormItem>
        </Col>
        <Col span="12">
          <!-- <FormItem label="科室ID" prop="departmentId">
            <Input type="number" v-model.number="form.departmentId" />
          </FormItem> -->
          <FormItem label="科室ID" prop="departmentId">
            <Select class="form-width" v-model="form.departmentId">
              <Option
                :value="item.value"
                v-for="item in departmentListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否仅为分类" prop="isClassify">
            <Checkbox v-model="form.isClassify"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="图片路径" prop="imageUrl">
            <FileUploadSingle
              :moduleType="imageUrlModuleType"
              v-model="form.imageUrl"
            ></FileUploadSingle>
          </FormItem>
        </Col>
      </Row>
      <Row>
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
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否有预约" prop="isHaveAppoint">
            <Checkbox v-model="form.isHaveAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="编码" prop="code">
            <Input v-model="form.code" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否有效" prop="isEnable">
            <Checkbox v-model="form.isEnable"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否合并到父项展示" prop="isMergerShowToParent">
            <Checkbox v-model="form.isMergerShowToParent"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="特殊出诊" prop="specialScheduling">
            <VueUeditorWrap
              v-model="form.specialScheduling"
              :config="ueditorConfig"
            ></VueUeditorWrap>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="头部描述" prop="topDescription">
            <VueUeditorWrap
              v-model="form.topDescription"
              :config="ueditorConfig"
            ></VueUeditorWrap>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="底部描述" prop="bottomDescription">
            <VueUeditorWrap
              v-model="form.bottomDescription"
              :config="ueditorConfig"
            ></VueUeditorWrap>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否在院区显示" prop="isShowAreaIndex">
            <Checkbox v-model="form.isShowAreaIndex"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="地址" prop="address">
            <Input v-model="form.address" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="电话" prop="phone">
            <Input v-model="form.phone" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="备注" prop="remark">
            <Input v-model="form.remark" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否科室" prop="isDepartment">
            <Checkbox v-model="form.isDepartment"
              >控制是否在专家介绍显示</Checkbox
            >
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="跳转地址" prop="jumpUrl">
            <Input v-model="form.jumpUrl" />
          </FormItem>
        </Col>
      </Row>
      <Row>
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
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="是否排班计划分离" prop="isPlanSeparate">
            <Checkbox v-model="form.isPlanSeparate"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
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
      </Row>
      <Row>
        <Col span="24">
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
import VueUeditorWrap from 'vue-ueditor-wrap';
import { OPDepartmentApi } from '@/api/organizations/op-department';
import { departmentApi } from '@/api/organizations/department';
import config from '@/config';
import { utils } from '@/lib/util';
import FileUploadSingle from '@/components/file-upload-single';
export default {
  name: 'OPDepartmentListForm',
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
    },
    parentId: {
      type: Number
    }
  },
  data () {
    return {
      imageUrlModuleType: SERVICE_TYPE.ARTICLE.value,
      departmentListData: [],
      // 表单数据
      form: {
        // 主键ID
        oPDepartmentId: null,
        // 名称
        name: null,
        // 别名
        anotherName: null,
        // 简称
        shortName: null,
        // 科室ID
        departmentId: null,
        // 是否仅为分类
        isClassify: null,
        // 图片路径
        imageUrl: null,
        // 父Id
        parentId: this.parentId | 0,
        // 父Id串
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 总排序
        sortIndex: null,
        // 是否开启预约
        isOpenAppoint: null,
        // 是否有出诊
        isHaveScheduling: null,
        // 是否有预约
        isHaveAppoint: null,
        // 编码
        code: null,
        // 拼音首字母
        firstLetter: null,
        // 拼音
        pinyin: null,
        // 名称首字母
        pinyinInitials: null,
        // 是否有效
        isEnable: null,
        // 出诊区域集合
        schedulingClinicIds: null,
        // 是否合并到父项展示
        isMergerShowToParent: null,
        // 出诊显示的父项1
        oPSchedulingShowParentId1: null,
        // 出诊显示的父项2
        oPSchedulingShowParentId2: null,
        // 出诊配置
        oPSchedulingSettingId: null,
        // 特殊出诊
        specialScheduling: null,
        // 头部描述
        topDescription: null,
        // 底部描述
        bottomDescription: null,
        // 出诊区域集合
        schedulingClinicNames: null,
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
        // 是否在院区显示
        isShowAreaIndex: null,
        // 地址
        address: null,
        // 电话
        phone: null,
        // 备注
        remark: null,
        // 是否科室
        isDepartment: null,
        // 跳转地址
        jumpUrl: null,
        // 预约规则
        oPSchedulingRuleId: null,
        // 头像路径
        avatarPathBASE64: null,
        // 是否排班计划分离
        isPlanSeparate: null,
        // 下次接口调用时间
        nextInterfaceDateime: null,
        // 有出诊医生数
        oPSchDoctorCount: null,
        // 有预约医生数
        oPAppointDoctorCount: null,
        // 取号地址
        appointAddress: null,
        // 是否开启候补
        isOpenSchedulingCondidate: null,
        // 预约候补个数
        schedulingCondidateNumber: null,
        // 是否开启在线问诊
        isOpenClinic: null
      },
      // 表单验证
      formValidate: {
        // 名称
        name: [{ required: false, message: '请输入名称', trigger: 'blur' }],
        // 别名
        anotherName: [
          { required: false, message: '请输入别名', trigger: 'blur' }
        ],
        // 简称
        shortName: [
          { required: false, message: '请输入简称', trigger: 'blur' }
        ],
        // 科室ID
        departmentId: [
          {
            type: 'number',
            required: false,
            message: '请输入科室ID',
            trigger: 'blur'
          }
        ],
        // 图片路径
        imageUrl: [
          { required: false, message: '请输入图片路径', trigger: 'blur' }
        ],
        // 编码
        code: [{ required: false, message: '请输入编码', trigger: 'blur' }],
        // 拼音首字母
        firstLetter: [
          { required: false, message: '请输入拼音首字母', trigger: 'blur' }
        ],
        // 拼音
        pinyin: [{ required: false, message: '请输入拼音', trigger: 'blur' }],
        // 名称首字母
        pinyinInitials: [
          { required: false, message: '请输入名称首字母', trigger: 'blur' }
        ],
        // 出诊配置
        oPSchedulingSettingId: [
          {
            type: 'number',
            required: false,
            message: '请输入出诊配置',
            trigger: 'blur'
          }
        ],
        // 特殊出诊
        specialScheduling: [
          { required: false, message: '请输入特殊出诊', trigger: 'blur' }
        ],
        // 头部描述
        topDescription: [
          { required: false, message: '请输入头部描述', trigger: 'blur' }
        ],
        // 底部描述
        bottomDescription: [
          { required: false, message: '请输入底部描述', trigger: 'blur' }
        ],
        // 地址
        address: [{ required: false, message: '请输入地址', trigger: 'blur' }],
        // 电话
        phone: [{ required: false, message: '请输入电话', trigger: 'blur' }],
        // 备注
        remark: [{ required: false, message: '请输入备注', trigger: 'blur' }],

        // 跳转地址
        jumpUrl: [
          { required: false, message: '请输入跳转地址', trigger: 'blur' }
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
        ]
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
        this.$set(this.form, 'opdepartmentId', newValue['opdepartmentId']);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    },
    parentId: function (newValue, oldValue) {
      if (newValue) {
        if (!this.isUpdate) {
          this.resetForm();
          this.$set(this.form, 'opdepartmentId', newValue);
        }
      }
    }
  },
  created () {
    this.initDepartment();
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
        // 主键ID
        oPDepartmentId: null,
        // 名称
        name: null,
        // 别名
        anotherName: null,
        // 简称
        shortName: null,
        // 科室ID
        departmentId: null,
        // 是否仅为分类
        isClassify: null,
        // 图片路径
        imageUrl: null,
        // 父Id
        parentId: this.parentId | 0,
        // 父Id串
        parentIds: null,
        // 深度
        depth: null,
        // 分支排序
        branchIndex: null,
        // 总排序
        sortIndex: null,
        // 是否开启预约
        isOpenAppoint: null,
        // 是否有出诊
        isHaveScheduling: null,
        // 是否有预约
        isHaveAppoint: null,
        // 编码
        code: null,
        // 拼音首字母
        firstLetter: null,
        // 拼音
        pinyin: null,
        // 名称首字母
        pinyinInitials: null,
        // 是否有效
        isEnable: null,
        // 出诊区域集合
        schedulingClinicIds: null,
        // 是否合并到父项展示
        isMergerShowToParent: null,
        // 出诊显示的父项1
        oPSchedulingShowParentId1: null,
        // 出诊显示的父项2
        oPSchedulingShowParentId2: null,
        // 出诊配置
        oPSchedulingSettingId: null,
        // 特殊出诊
        specialScheduling: null,
        // 头部描述
        topDescription: null,
        // 底部描述
        bottomDescription: null,
        // 出诊区域集合
        schedulingClinicNames: null,
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
        // 是否在院区显示
        isShowAreaIndex: null,
        // 地址
        address: null,
        // 电话
        phone: null,
        // 备注
        remark: null,
        // 是否科室
        isDepartment: null,
        // 跳转地址
        jumpUrl: null,
        // 预约规则
        oPSchedulingRuleId: null,
        // 头像路径
        avatarPathBASE64: null,
        // 是否排班计划分离
        isPlanSeparate: null,
        // 下次接口调用时间
        nextInterfaceDateime: null,
        // 有出诊医生数
        oPSchDoctorCount: null,
        // 有预约医生数
        oPAppointDoctorCount: null,
        // 取号地址
        appointAddress: null,
        // 是否开启候补
        isOpenSchedulingCondidate: null,
        // 预约候补个数
        schedulingCondidateNumber: null,
        // 是否开启在线问诊
        isOpenClinic: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await OPDepartmentApi.addOPDepartment(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await OPDepartmentApi.updateOPDepartment(this.form);
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
    }
  }
};
</script>
