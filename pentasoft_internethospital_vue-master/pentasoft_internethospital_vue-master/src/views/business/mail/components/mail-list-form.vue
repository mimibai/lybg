<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
          <FormItem label="被举报对象" prop="title">
            <Input v-model="form.title" />
          </FormItem>
          <FormItem label="编码" prop="code">
            <Input v-model="form.code" />
          </FormItem>
          <FormItem label="举报描述" prop="content">
            <Input v-model="form.content" />
          </FormItem>
          <FormItem label="发送用户Id" prop="sendUserId">
            <Input type="number" v-model.number="form.sendUserId" />
          </FormItem>
          <FormItem label="举报人姓名" prop="sendRealName">
            <Input v-model="form.sendRealName" />
          </FormItem>
          <FormItem label="身份证号码" prop="iDCardNo">
            <Input v-model="form.iDCardNo" />
          </FormItem>
          <FormItem label="举报人手机号码" prop="mobileNumber">
            <Input v-model="form.mobileNumber" />
          </FormItem>
          <FormItem label="举报人联系方式" prop="otherContacts">
            <Input v-model="form.otherContacts" />
          </FormItem>
          <FormItem label="电子邮箱" prop="email">
            <Input v-model="form.email" />
          </FormItem>
          <FormItem label="IP" prop="iP">
            <Input v-model="form.iP" />
          </FormItem>
          <FormItem label="浏览次数" prop="viewCount">
            <Input type="number" v-model.number="form.viewCount" />
          </FormItem>
          <FormItem label="是否回复" prop="isReply">
            <Input v-model="form.isReply" />
          </FormItem>
          <FormItem label="回复用户Id" prop="replyUserId">
            <Input type="number" v-model.number="form.replyUserId" />
          </FormItem>
          <FormItem label="回复人姓名" prop="replyRealName">
            <Input v-model="form.replyRealName" />
          </FormItem>
          <FormItem label="回复内容" prop="replyContent">
            <Input v-model="form.replyContent" />
          </FormItem>
          <FormItem label="是否为匿名" prop="isAnonymous">
            <Input v-model="form.isAnonymous" />
          </FormItem>
          <FormItem label="是否为公开" prop="isPublic">
            <Input v-model="form.isPublic" />
          </FormItem>
          <FormItem label="发送日期" prop="sendDate">
            <Input v-model="form.sendDate" />
          </FormItem>
          <FormItem label="回复日期" prop="replyDate">
            <Input v-model="form.replyDate" />
          </FormItem>
          <FormItem label="创建日期" prop="create_time">
            <Input v-model="form.create_time" />
          </FormItem>
          <FormItem label="更新日期" prop="update_time">
            <Input v-model="form.update_time" />
          </FormItem>
          <FormItem label="邮件类型Id" prop="mailLabelId">
            <Input type="number" v-model.number="form.mailLabelId" />
          </FormItem>
          <FormItem label="所在站点" prop="siteId">
            <Input type="number" v-model.number="form.siteId" />
          </FormItem>
          <FormItem label="IP来源" prop="iPSearch">
            <Input v-model="form.iPSearch" />
          </FormItem>
          <FormItem label="IP来源类型" prop="iPSearchType">
            <Input v-model="form.iPSearchType" />
          </FormItem>
          <FormItem label="医院信箱类型Id" prop="mailTypeId">
            <Input type="number" v-model.number="form.mailTypeId" />
          </FormItem>
          <FormItem label="微信用户Id" prop="sendWeiXinUserId">
            <Input type="number" v-model.number="form.sendWeiXinUserId" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
  import { mailApi } from '@/api/mail';
  export default {
    name: 'MailListForm',
    components: {
    },
    props: {
      //是否为更新表单
      isUpdate: {
        type: Boolean,
        default: true
      },
      //更新的表单数据对象
      updateData: {
        type: Object
      }
    },
    data() {
      return {
        //表单数据
        form: {
         //被举报对象
         title:null,
         //编码
         code:null,
         //举报描述
         content:null,
         //发送用户Id
         sendUserId:null,
         //举报人姓名
         sendRealName:null,
         //身份证号码
         iDCardNo:null,
         //举报人手机号码
         mobileNumber:null,
         //举报人联系方式
         otherContacts:null,
         //电子邮箱
         email:null,
         //IP
         iP:null,
         //浏览次数
         viewCount:null,
         //是否回复
         isReply:null,
         //回复用户Id
         replyUserId:null,
         //回复人姓名
         replyRealName:null,
         //回复内容
         replyContent:null,
         //是否为匿名
         isAnonymous:null,
         //是否为公开
         isPublic:null,
         //发送日期
         sendDate:null,
         //回复日期
         replyDate:null,
         //创建日期
         create_time:null,
         //更新日期
         update_time:null,
         //邮件类型Id
         mailLabelId:null,
         //所在站点
         siteId:null,
         //IP来源
         iPSearch:null,
         //IP来源类型
         iPSearchType:null,
         //医院信箱类型Id
         mailTypeId:null,
         //微信用户Id
         sendWeiXinUserId:null,
        },
        //表单验证
        formValidate: {
        //被举报对象
        title:[{ required: true, message: '请输入被举报对象', trigger: 'blur' }],
        //编码
        code:[{ required: true, message: '请输入编码', trigger: 'blur' }],
        //举报描述
        content:[{ required: true, message: '请输入举报描述', trigger: 'blur' }],
        //发送用户Id
        sendUserId:[{ type:'number',required: true, message: '请输入发送用户Id', trigger: 'blur' }],
        //举报人姓名
        sendRealName:[{ required: true, message: '请输入举报人姓名', trigger: 'blur' }],
        //身份证号码
        iDCardNo:[{ required: true, message: '请输入身份证号码', trigger: 'blur' }],
        //举报人手机号码
        mobileNumber:[{ required: true, message: '请输入举报人手机号码', trigger: 'blur' }],
        //举报人联系方式
        otherContacts:[{ required: true, message: '请输入举报人联系方式', trigger: 'blur' }],
        //电子邮箱
        email:[{ required: true, message: '请输入电子邮箱', trigger: 'blur' }],
        //IP
        iP:[{ required: true, message: '请输入IP', trigger: 'blur' }],
        //浏览次数
        viewCount:[{ type:'number',required: true, message: '请输入浏览次数', trigger: 'blur' }],
        //是否回复
        isReply:[{ required: true, message: '请输入是否回复', trigger: 'blur' }],
        //回复用户Id
        replyUserId:[{ type:'number',required: true, message: '请输入回复用户Id', trigger: 'blur' }],
        //回复人姓名
        replyRealName:[{ required: true, message: '请输入回复人姓名', trigger: 'blur' }],
        //回复内容
        replyContent:[{ required: true, message: '请输入回复内容', trigger: 'blur' }],
        //是否为匿名
        isAnonymous:[{ required: true, message: '请输入是否为匿名', trigger: 'blur' }],
        //是否为公开
        isPublic:[{ required: true, message: '请输入是否为公开', trigger: 'blur' }],
        //发送日期
        sendDate:[{ required: true, message: '请输入发送日期', trigger: 'blur' }],
        //回复日期
        replyDate:[{ required: true, message: '请输入回复日期', trigger: 'blur' }],
        //创建日期
        create_time:[{ required: true, message: '请输入创建日期', trigger: 'blur' }],
        //更新日期
        update_time:[{ required: true, message: '请输入更新日期', trigger: 'blur' }],
        //邮件类型Id
        mailLabelId:[{ type:'number',required: true, message: '请输入邮件类型Id', trigger: 'blur' }],
        //所在站点
        siteId:[{ type:'number',required: true, message: '请输入所在站点', trigger: 'blur' }],
        //IP来源
        iPSearch:[{ required: true, message: '请输入IP来源', trigger: 'blur' }],
        //IP来源类型
        iPSearchType:[{ required: true, message: '请输入IP来源类型', trigger: 'blur' }],
        //医院信箱类型Id
        mailTypeId:[{ type:'number',required: true, message: '请输入医院信箱类型Id', trigger: 'blur' }],
        //微信用户Id
        sendWeiXinUserId:[{ type:'number',required: true, message: '请输入微信用户Id', trigger: 'blur' }],
        }
      };
    },
  watch: {
      updateData: function(newValue, oldValue) {
          this.$refs['form'].resetFields();
          if (this.isUpdate) {
              for (let k in this.form) {
                  this.$set(this.form, k, newValue[k]);
              }
              this.$set(this.form, 'id', newValue['id']);
          }
      },
      isUpdate: function(newValue, oldValue) {
          if (!newValue) {
              this.resetForm();
              this.$refs['form'].resetFields();
          }
      }
  },
    created() {},
    mounted() {},
    methods: {
      cancel() {
        this.$emit('on-form-close');
      },
      save() {
       this.$refs['form'].validate(valid => {
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
    resetForm() {
        this.form = {
          //主键
          id:null,
          //被举报对象
          title:null,
          //编码
          code:null,
          //举报描述
          content:null,
          //发送用户Id
          sendUserId:null,
          //举报人姓名
          sendRealName:null,
          //身份证号码
          iDCardNo:null,
          //举报人手机号码
          mobileNumber:null,
          //举报人联系方式
          otherContacts:null,
          //电子邮箱
          email:null,
          //IP
          iP:null,
          //浏览次数
          viewCount:null,
          //是否回复
          isReply:null,
          //回复用户Id
          replyUserId:null,
          //回复人姓名
          replyRealName:null,
          //回复内容
          replyContent:null,
          //是否为匿名
          isAnonymous:null,
          //是否为公开
          isPublic:null,
          //发送日期
          sendDate:null,
          //回复日期
          replyDate:null,
          //创建日期
          create_time:null,
          //更新日期
          update_time:null,
          //邮件类型Id
          mailLabelId:null,
          //所在站点
          siteId:null,
          //IP来源
          iPSearch:null,
          //IP来源类型
          iPSearchType:null,
          //医院信箱类型Id
          mailTypeId:null,
          //微信用户Id
          sendWeiXinUserId:null,
        };
        this.$refs['form'].resetFields();
      },
      async add() {
        this.$Spin.show();
        let res = await mailApi.addMail(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      },
      async update() {
        this.$Spin.show();
        let res = await mailApi.updateMail(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      }
    }
  };
</script>
