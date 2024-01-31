<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="24" style="text-align: center">
        <div class="upload-show-img" v-if="showImgUrl.length > 0">
          <img :src="showImgUrl"/>
        </div>
        <Icon type="md-image" size="100" v-else></Icon>
      </Col>
    </Row>
    <Row type="flex" justify="space-between">
      <Col span="16">
        <Input v-model="showImgUrl" readonly />
      </Col>
      <Col span="7">
        <Upload
          ref="upload"
          :show-upload-list="false"
          :on-success="handleSuccess"
          :format="['jpg', 'jpeg', 'png', 'mp4', 'mov', '3gp']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :before-upload="handleBeforeUpload"
          multiple
          type="select"
          :headers="uploadHeader"
          :action="uploadUrl"
        >
          <Button icon="ios-cloud-upload-outline">上传图片</Button>
        </Upload>
      </Col>
    </Row>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import { localRead, localSave, TOKEN_KEY } from '@/lib/local';
import { fileApi } from '@/api/file';
import config from '@/config';

export default {
  props: {
    value: {
      default: ''
    },
    fileLocationType: {
      type: Number,
      default: 1
    },
    moduleType: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      showImgUrl: this.value || '',
      imgName: '',
      visible: false
    };
  },
  watch: {
    value: function (newVal) {
      if (newVal) {
        this.showImgUrl = newVal;
      }
    }
  },
  computed: {
    uploadHeader: function () {
      let header = {
        'Authorization': localRead(TOKEN_KEY),
        'AppId': config.baseUrl.appId,
        'Platform': config.baseUrl.platform
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
    }
  },
  methods: {
    async handleSuccess (res, file) {
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
      this.showImgUrl = res.data.url;
      this.$emit('input', res.data.url);
      let rep = await fileApi.addFile(reqBody);
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
.upload-show-img img{
  width:100%;
}
</style>
