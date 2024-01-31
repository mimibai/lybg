<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="110" :model="form">
      <Row border>
        <Col span="12">
          <FormItem label="投票名称" prop="name">
            <Input v-model="form.name" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="投票名称缩写" prop="voteShortName">
            <Input v-model="form.voteShortName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="正文" prop="content">
            <vue-ueditor-wrap
              v-model="form.content"
              :config="ueditorConfig"
            ></vue-ueditor-wrap>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="描述" prop="description">
            <Input
              v-model="form.description"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="请输入描述"
            ></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="是否限制投票次数" prop="isLimitNumber">
            <Checkbox v-model="form.isLimitNumber"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.isLimitNumber">
        <Col span="12">
          <FormItem label="限制投票次数类型：" prop="limitNumberTypeId">
            <Select class="form-width" v-model="form.limitNumberTypeId">
              <Option
                :value="item.value"
                v-for="item in limitNumberTypeList"
                :key="item.value"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="限制投票数量" prop="limitNumber">
            <InputNumber :min="0" v-model="form.limitNumber" />
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.isLimitNumber">
        <Col span="24">
          <FormItem label="超出限制的提示内容" prop="outOfLimitPrompt">
            <Input v-model="form.outOfLimitPrompt" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="是否访问限制" prop="isAccessRestriction">
            <Checkbox v-model="form.isAccessRestriction"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.isAccessRestriction">
        <Col span="12">
          <FormItem label="访问限制类型" prop="accessRestrictionTypeId">
            <Select
              class="form-width"
              v-model="form.accessRestrictionTypeId"
              @on-change="accessRestrictionTypeChange"
            >
              <Option
                :value="item.value"
                v-for="item in accessRestrictionTypeList"
                :key="item.value"
                >{{ item.desc }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12" v-if="form.accessRestrictionTypeId == 2">
          <FormItem
            label="限制的指定用户类型"
            prop="accessRestrictionUserIdentityIds"
          >
            <Select
              class="form-width"
              multiple
              v-model="form.accessRestrictionUserIdentityIdList"
            >
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in accessRestrictionUserIdentityIdListData"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12" v-if="form.accessRestrictionTypeId == 3">
          <FormItem label="限制的指定角色" prop="accessRestrictionRoleIds">
            <Select
              class="form-width"
              multiple
              filterable
              :loading="roleLoading"
              v-model="form.accessRestrictionReloIdArray"
            >
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in accessRestrictionRoleListData"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12" v-if="form.accessRestrictionTypeId == 4">
          <FormItem label="限制的指定用户" prop="accessRestrictionUserIds">
            <Select
              class="form-width"
              multiple
              filterable
              :loading="userLoading"
              v-model="form.accessRestrictionUserIdArray"
            >
              <Option
                :key="item.value"
                :value="item.value"
                v-for="item in accessRestrictionUserListData"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="显示姓名输入框" prop="isShowNameInput">
            <Checkbox v-model="form.isShowNameInput"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.isShowNameInput">
        <Col span="12">
          <FormItem label="登陆后显示输入框" prop="isShowNameInputAfterLogin">
            <Checkbox v-model="form.isShowNameInputAfterLogin"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="姓名是否必填" prop="isNameInNeed">
            <Checkbox v-model="form.isNameInNeed"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否审核" prop="isApprove">
            <Checkbox v-model="form.isApprove"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否显示在首页" prop="isShowInHome">
            <Checkbox v-model="form.isShowInHome"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否公开参与" prop="isPublicParticipate">
            <Checkbox v-model="form.isPublicParticipate"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12" v-if="!form.isPublicParticipate">
          <FormItem label="参与密钥" prop="participateKey">
            <Input v-model="form.participateKey" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否公开结果" prop="isPublicResult">
            <Checkbox v-model="form.isPublicResult"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12" v-if="!form.isPublicResult">
          <FormItem label="结果访问密钥" prop="resultKey">
            <Input v-model="form.resultKey" />
          </FormItem>
        </Col>
      </Row>
      <Row>
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
          <FormItem label="投票开始日期" prop="voteBeginDate">
            <DatePicker
              placeholder="投票开始日期"
              split-panels
              type="datetime"
              :value="form.voteBeginDate"
              @on-change="form.voteBeginDate = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="投票结束日期" prop="voteEndDate">
            <DatePicker
              placeholder="投票结束日期"
              split-panels
              type="datetime"
              :value="form.voteEndDate"
              @on-change="form.voteEndDate = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="投票总数" prop="voteTotal">
            <InputNumber :min="0" v-model="form.voteTotal" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="排序" prop="sorting">
            <InputNumber :min="0" v-model="form.sorting" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="横排选项数" prop="tableTdNumber">
            <InputNumber :min="0" v-model="form.tableTdNumber" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否显示全题目" prop="isShowAll">
            <Checkbox v-model="form.isShowAll"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否显示题号" prop="isShowTitleNumber">
            <Checkbox v-model="form.isShowTitleNumber"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否为图片投票" prop="isPictureVote">
            <Checkbox v-model="form.isPictureVote"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="投票间隔(分钟)" prop="voteInterval">
            <InputNumber :min="0" v-model="form.voteInterval" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否自定义结果" prop="isCustomResult">
            <Checkbox v-model="form.isCustomResult"></Checkbox>
          </FormItem>
        </Col>
      </Row>
      <Row v-if="form.voteInterval > 0">
        <Col span="24">
          <FormItem
            label="投票间隔内超出限制提示内容"
            prop="frequentVotingPrompt"
          >
            <Input v-model="form.frequentVotingPrompt" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否完成跳转结果页" prop="isCompleteSkipResult">
            <Checkbox v-model="form.isCompleteSkipResult"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="结果提示内容" prop="resultPrompt">
            <Input v-model="form.resultPrompt" />
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
import VueUeditorWrap from 'vue-ueditor-wrap';
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
import { voteApi } from '@/api/vote/vote';
import { roleApi } from '@/api/role';
import { employeeApi } from '@/api/employee';
import { LIMIT_NUMBER_TYPES, ACCESS_RESTRICTION_TYPES } from '@/constants/vote';
import FileUploadSingle from '@/components/file-upload-single';
import { utils } from '@/lib/util';
import config from '@/config';
const baseUrl = config.baseUrl.apiUrl;
export default {
  name: 'VoteListForm',
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
      imageUrlModuleType: SERVICE_TYPE.VOTE.value,
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
      roleLoading: false,
      userLoading: false,
      // 限制的角色列表
      accessRestrictionRoleListData: [],
      // 限制的用户列表数据
      accessRestrictionUserListData: [],
      showTransferSelect: false,
      // 基础路径
      baseUrl: baseUrl,
      // 表单数据
      form: {
        // 主键Id
        id: null,
        // 投票名称
        name: null,
        // 投票名称缩写
        voteShortName: null,
        // 正文
        content: null,
        // 描述
        description: null,
        // 是否审核
        isApprove: true,
        // 图片路径
        imageUrl: null,
        // 是否显示在首页
        isShowInHome: true,
        // 是否公开结果
        isPublicResult: true,
        // 投票开始日期
        voteBeginDate: null,
        // 投票结束日期
        voteEndDate: null,
        // 投票总数
        voteTotal: 0,
        // 排序
        sorting: 9999,
        // 横排选项数
        tableTdNumber: 0,
        // 结果访问密钥
        resultKey: null,
        // 是否公开参与
        isPublicParticipate: true,
        // 参与密钥
        participateKey: null,
        // 是否限制投票次数
        isLimitNumber: false,
        // 限制投票次数枚举类型：1、账号，2、IP，3、账号每日，4、IP每日
        limitNumberTypeId: null,
        // 是否访问限制
        isAccessRestriction: false,
        // 访问限制类型：1、登录用户，2、角色类型，3、指定角色，4、指定用户
        accessRestrictionTypeId: null,
        // 限制的指定用户类型
        accessRestrictionUserIdentityIds: null,
        // 限制的指定角色
        accessRestrictionRoleIds: null,
        // 限制的指定用户
        accessRestrictionUserIds: null,
        // 是否显示全题目
        isShowAll: true,
        // 限制投票数量
        limitNumber: 0,
        // 是否显示题号
        isShowTitleNumber: true,
        // 是否为图片投票
        isPictureVote: false,
        // 显示姓名输入框
        isShowNameInput: false,
        // 登陆后显示输入框
        isShowNameInputAfterLogin: false,
        // 姓名是否必填
        isNameInNeed: false,
        // 投票间隔(分钟)
        voteInterval: 0,
        // 调查类型
        voteModeTypeId: 2,
        // 是否自定义结果
        isCustomResult: false,
        // 是否完成跳转结果页
        isCompleteSkipResult: true,
        // 结果提示内容
        resultPrompt: null,
        // 超出限制的提示内容,仅开启限制且超出限制时提示
        outOfLimitPrompt: null,
        // 投票间隔内超出限制提示内容
        frequentVotingPrompt: null,

        accessRestrictionUserIdentityIdList: [],
        accessRestrictionReloIdArray: [],
        accessRestrictionUserIdArray: []
      },
      // 表单验证
      formValidate: {
        // 投票名称
        name: [
          {
            length: 100,
            required: true,
            message: '请输入投票名称',
            trigger: 'blur'
          }
        ],
        // 投票名称缩写
        voteShortName: [
          { required: false, message: '请输入投票名称缩写', trigger: 'blur' }
        ],
        outOfLimitPrompt: [
          {
            required: true,
            length: 50,
            message: '请输入超出限制的提示内容',
            trigger: 'blur'
          }
        ],
        frequentVotingPrompt: [
          {
            required: true,
            length: 50,
            message: '请输入投票间隔内超出限制提示内容',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  computed: {
    // 限制投票次数枚举类型：
    limitNumberTypeList: function () {
      let array = [];
      for (let item in LIMIT_NUMBER_TYPES) {
        let obj = {};
        obj.desc = LIMIT_NUMBER_TYPES[item].desc;
        obj.value = LIMIT_NUMBER_TYPES[item].value;
        array.push(obj);
      }
      return array;
    },
    // 限制访问类型
    accessRestrictionTypeList: function () {
      let array = [];
      for (let item in ACCESS_RESTRICTION_TYPES) {
        let obj = {};
        obj.desc = ACCESS_RESTRICTION_TYPES[item].desc;
        obj.value = ACCESS_RESTRICTION_TYPES[item].value;
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
          if (k == 'accessRestrictionTypeId') {
            this.initAccessRestrictionData(newValue[k]);
          }
        }
        this.$set(this.form, 'id', newValue['id']);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    },
    '$route.name': function (newVal) {
      console.log('new', newVal);
      if (newVal) {
        if (newVal == 'VoteFlowList') {
          this.form.voteModeTypeId = 4;
        } else if (newVal == 'VoteList') {
          this.form.voteModeTypeId = 2;
        }
      }
    }
  },
  created () {
    if (this.$route.name == 'VoteFlowList') {
      this.form.voteModeTypeId = 4;
    } else if (this.$route.name == 'VoteList') {
      this.form.voteModeTypeId = 2;
    }
  },
  mounted () {},
  methods: {
    async initAccessRestrictionData (type) {
      try {
        if (type == ACCESS_RESTRICTION_TYPES.USER_ROLE.value) {
          this.form.accessRestrictionUserIdArray = [];
          this.reloLoading = true;
          let result = await roleApi.getAllRole();
          let datas = result.data;
          let list = [];
          datas.map((item) => {
            list.push({
              value: item.id,
              label: item.roleName
            });
          });
          this.accessRestrictionRoleListData = list;
        } else if (type == ACCESS_RESTRICTION_TYPES.USERS.value) {
          this.form.accessRestrictionReloIdArray = [];
          this.userLoading = true;
          let params = {
            page: 1
          };
          let result = await employeeApi.getEmployeeList(params);
          let datas = result.data;
          let list = [];
          datas.list.map((item) => {
            list.push({
              value: item.id,
              label: item.actualName
            });
          });
          this.accessRestrictionUserListData = list;
        }
      } finally {
        this.reloLoading = false;
        this.userLoading = false;
      }
    },
    accessRestrictionTypeChange (newVal) {
      this.initAccessRestrictionData(newVal);
    },
    cancel () {
      this.$emit('on-form-close');
    },
    save () {
      // 日期属性格式化
      if (this.form.voteBeginDate) {
        this.form.voteBeginDate = utils.formatDate(this.form.voteBeginDate);
      }
      if (this.form.voteEndDate) {
        this.form.voteEndDate = utils.formatDate(this.form.voteEndDate);
      }
      if (this.form.accessRestrictionReloIdArray) {
        // 限制的角色数组转为字符串
        this.form.accessRestrictionRoleIds =
          this.form.accessRestrictionReloIdArray.toString();
      }
      if (this.form.accessRestrictionUserIdArray) {
        // 限制的角色数组转为字符串
        this.form.accessRestrictionUserIds =
          this.form.accessRestrictionUserIdArray.toString();
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
        id: null,
        // 投票名称
        name: null,
        // 投票名称缩写
        voteShortName: null,
        // 正文
        content: null,
        // 描述
        description: null,
        // 是否审核
        isApprove: true,
        // 图片路径
        imageUrl: null,
        // 是否显示在首页
        isShowInHome: true,
        // 是否公开结果
        isPublicResult: true,
        // 投票开始日期
        voteBeginDate: null,
        // 投票结束日期
        voteEndDate: null,
        // 投票总数
        voteTotal: 0,
        // 排序
        sorting: 9999,
        // 横排选项数
        tableTdNumber: 0,
        // 结果访问密钥
        resultKey: null,
        // 是否公开参与
        isPublicParticipate: true,
        // 参与密钥
        participateKey: null,
        // 是否限制投票次数
        isLimitNumber: false,
        // 限制投票次数枚举类型：1、账号，2、IP，3、账号每日，4、IP每日
        limitNumberTypeId: null,
        // 是否访问限制
        isAccessRestriction: false,
        // 访问限制类型：1、登录用户，2、角色类型，3、指定角色，4、指定用户
        accessRestrictionTypeId: null,
        // 限制的指定用户类型
        accessRestrictionUserIdentityIds: null,
        // 限制的指定角色
        accessRestrictionRoleIds: null,
        // 限制的指定用户
        accessRestrictionUserIds: null,
        // 是否显示全题目
        isShowAll: true,
        // 限制投票数量
        limitNumber: 0,
        // 是否显示题号
        isShowTitleNumber: true,
        // 是否为图片投票
        isPictureVote: false,
        // 显示姓名输入框
        isShowNameInput: false,
        // 登陆后显示输入框
        isShowNameInputAfterLogin: false,
        // 姓名是否必填
        isNameInNeed: false,
        // 投票间隔(分钟)
        voteInterval: 0,
        // 调查类型
        voteModeTypeId: null,
        // 是否自定义结果
        isCustomResult: false,
        // 是否完成跳转结果页
        isCompleteSkipResult: true,
        // 结果提示内容
        resultPrompt: null,
        // 超出限制的提示内容,仅开启限制且超出限制时提示
        outOfLimitPrompt: null,
        // 投票间隔内超出限制提示内容
        frequentVotingPrompt: null,

        accessRestrictionUserIdentityIdList: [],
        accessRestrictionReloIdArray: [],
        accessRestrictionUserIdArray: []
      };
      if (this.$route.name == 'VoteFlowList') {
        this.form.voteModeTypeId = 4;
      } else if (this.$route.name == 'VoteList') {
        this.form.voteModeTypeId = 2;
      }
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await voteApi.addVote(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await voteApi.updateVote(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
