<template>
  <Upload
    multiple
    ref="upload"
    type="drag"
    :max-size="2048"
    :default-file-list="defaultList"
    :on-success="handleSuccess"
    :on-format-error="handleFormatError"
    :on-exceeded-size="handleMaxSize"
    :before-upload="handleBeforeUpload"
    :headers="uploadHeader"
    :action="uploadUrl"
    :on-remove="handleRemove"
  >
    <div style="padding: 20px 0">
      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
      <p>点击选择文件或将文件拖拽到此处上传</p>
    </div>
  </Upload>
</template>
<script>
import Cookies from 'js-cookie';
import { TOKEN_KEY } from '@/lib/cookie';
import { fileApi } from '@/api/file';
import config from '@/config';
export default {
  props: {
    value: {
      default: function () {
        return [];
      }
    },
    fileLocationType: {
      type: Number,
      default: 1
    },
    moduleType: {
      type: Number,
      default: 1
    },
    formatArray: {
      type: Array,
      default: function () {
        return ['jpg', 'jpeg', 'png', 'mp4', 'mov', '3gp'];
      }
    }
  },
  data () {
    console.log(
      'this.defaultFileList: ' + JSON.stringify(this.defaultFileList)
    );
    console.log('this.value: ' + JSON.stringify(this.value));
    return {
      showImgUrl: this.value || [],
      imgName: '',
      visible: false,
      defaultList: [],
      uploadFileValue: []
    };
  },
  watch: {
    value: function (newVal) {
      console.log('value newVal: ' + JSON.stringify(newVal));
      this.defaultList = [];
      if (newVal) {
        this.showImgUrl = newVal;
        let referralApplicationCaseArray = [];
        if (newVal && newVal.length > 0) {
          newVal.forEach((element) => {
            console.log('element ' + element);
            referralApplicationCaseArray.push(
              {
                status: '',
                name: element.substring(element.lastIndexOf('/') + 1),
                size: null,
                percentage: null,
                uid: null,
                showProgress: true,
                response: {
                  code: null,
                  msg: '',
                  data: {
                    fileName: element.substring(element.lastIndexOf('/') + 1),
                    url: element,
                    filePath: '',
                    fileSize: null
                  },
                  urlData: null
                },
                url: element
              }
            );
          });
        }
        this.defaultList = referralApplicationCaseArray;
        console.log('this.defaultList' + JSON.stringify(this.defaultList));
      }
    }
  },
  computed: {
    uploadHeader: function () {
      let header = {
        Authorization: Cookies.get(TOKEN_KEY),
        AppId: config.baseUrl.appId,
        Platform: config.baseUrl.platform
      };
      return header;
    },
    uploadUrl: function () {
      let baseUrl = fileApi.fileUploadLocalUrl;
      switch (this.fileLocationType) {
        case 2:
          baseUrl = fileApi.fileUploadAliUrl;
          break;
        case 3:
          baseUrl = fileApi.fileUploadQiNiuUrl;
          break;
        default:
          break;
      }
      let url = baseUrl + this.moduleType;
      return url;
    },
    reqBody: function () {
      return null;
    }
  },
  methods: {
    async handleSuccess (res, file, fileList) {
      console.log('res ' + JSON.stringify(res));
      if (res.code != 101) {
        console.error(res);
        return this.uploadError();
      }
      let reqBody = {
        moduleId: 1,
        moduleType: this.moduleType,
        fileLocationType: this.fileLocationType,
        fileName: res.data.fileName,
        filePath: res.data.filePath,
        url: res.data.url
      };
      file.url = res.data.url;
      file.name = res.data.fileName;
      // this.value =this.value +"," + res.data.filePath;
      this.uploadFileValue = [];
      fileList.forEach((v, i) => {
        console.log('V ' + JSON.stringify(v));
        this.uploadFileValue.push(v.response.data.url);
      });
      this.$emit('input', this.uploadFileValue);
      this.$Message.success('上传成功');
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc:
          'File format of ' +
          file.name +
          ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      });
    },
    handleBeforeUpload () {
      // const check = this.uploadList.length < 5;
      // if (!check) {
      //   this.$Notice.warning({
      //     title: "Up to five pictures can be uploaded.",
      //   });
      // }
      // return check;
      return true;
    },
    // 上传失败钩子
    uploadError (e) {
      this.$Message.error('上传出错，请重试！');
    },
    handleRemove (file, fileList) {
      console.log('删除');
      debugger;
      this.value = [];
      fileList.forEach((v, i) => {
        this.value.push(v.response.data.url);
      });
      this.$emit('input', this.value);
    }
  },
  mounted () {}
};
</script>
<style>
.upload-show-img {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.upload-show-img img {
  width: 100%;
}
</style>
