<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <FormItem label="主键" prop="locationBuildingId">
        <Input type="number" v-model.number="form.locationBuildingId" />
      </FormItem>
      <FormItem label="院区Id" prop="locationBranchId">
        <Input type="number" v-model.number="form.locationBranchId" />
      </FormItem>
      <FormItem label="建筑名称" prop="locationBuildingName">
        <Input v-model="form.locationBuildingName" />
      </FormItem>
      <FormItem label="简称" prop="shortName">
        <Input v-model="form.shortName" />
      </FormItem>
      <FormItem label="拼音" prop="pinYin">
        <Input v-model="form.pinYin" />
      </FormItem>
      <FormItem label="拼音首字母" prop="pinyinInitials">
        <Input v-model="form.pinyinInitials" />
      </FormItem>
      <FormItem label="首字母" prop="firstLetter">
        <Input v-model="form.firstLetter" />
      </FormItem>
      <FormItem label="介绍" prop="introduce">
        <Input v-model="form.introduce" />
      </FormItem>
      <FormItem label="是否删除" prop="isDelete">
        <Input v-model="form.isDelete" />
      </FormItem>
      <FormItem label="排序" prop="sorting">
        <Input type="number" v-model.number="form.sorting" />
      </FormItem>
      <FormItem label="平面图" prop="baseMapPath">
        <Input v-model="form.baseMapPath" />
      </FormItem>
      <FormItem label="平面图" prop="baseMapPathForAdd">
        <Input v-model="form.baseMapPathForAdd" />
      </FormItem>
      <FormItem label="坐标的X轴" prop="locationX">
        <Input v-model="form.locationX" />
      </FormItem>
      <FormItem label="坐标的Y轴" prop="locationY">
        <Input v-model="form.locationY" />
      </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
import { locationBuildingApi } from "@/api/navigation/location-building";
export default {
  name: "LocationBuildingListForm",
  components: {},
  props: {
    //是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true,
    },
    //更新的表单数据对象
    updateData: {
      type: Object,
    },
  },
  data() {
    return {
      //表单数据
      form: {
        //主键
        locationBuildingId: null,
        //院区Id
        locationBranchId: null,
        //建筑名称
        locationBuildingName: null,
        //简称
        shortName: null,
        //拼音
        pinYin: null,
        //拼音首字母
        pinyinInitials: null,
        //首字母
        firstLetter: null,
        //介绍
        introduce: null,
        //是否删除
        isDelete: null,
        //排序
        sorting: null,
        //平面图
        baseMapPath: null,
        //平面图
        baseMapPathForAdd: null,
        //坐标的X轴
        locationX: null,
        //坐标的Y轴
        locationY: null,
      },
      //表单验证
      formValidate: {
        //主键
        locationBuildingId: [
          {
            type: "number",
            required: true,
            message: "请输入主键",
            trigger: "blur",
          },
        ],
        //院区Id
        locationBranchId: [
          {
            type: "number",
            required: true,
            message: "请输入院区Id",
            trigger: "blur",
          },
        ],
        //建筑名称
        locationBuildingName: [
          { required: true, message: "请输入建筑名称", trigger: "blur" },
        ],
        //简称
        shortName: [{ required: true, message: "请输入简称", trigger: "blur" }],
        //拼音
        pinYin: [{ required: true, message: "请输入拼音", trigger: "blur" }],
        //拼音首字母
        pinyinInitials: [
          { required: true, message: "请输入拼音首字母", trigger: "blur" },
        ],
        //首字母
        firstLetter: [
          { required: true, message: "请输入首字母", trigger: "blur" },
        ],
        //介绍
        introduce: [{ required: true, message: "请输入介绍", trigger: "blur" }],
        //是否删除
        isDelete: [
          { required: true, message: "请输入是否删除", trigger: "blur" },
        ],
        //排序
        sorting: [
          {
            type: "number",
            required: true,
            message: "请输入排序",
            trigger: "blur",
          },
        ],
        //平面图
        baseMapPath: [
          { required: true, message: "请输入平面图", trigger: "blur" },
        ],
        //平面图
        baseMapPathForAdd: [
          { required: true, message: "请输入平面图", trigger: "blur" },
        ],
        //坐标的X轴
        locationX: [
          { required: true, message: "请输入坐标的X轴", trigger: "blur" },
        ],
        //坐标的Y轴
        locationY: [
          { required: true, message: "请输入坐标的Y轴", trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs["form"].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(
          this.form,
          "locationBuildingId",
          newValue["locationBuildingId"]
        );
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    cancel() {
      this.$emit("on-form-close");
    },
    save() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.isUpdate) {
            this.update();
          } else {
            this.add();
          }
        } else {
          this.$Message.error("参数验证错误，请仔细填写表单数据!");
        }
      });
    },
    resetForm() {
      this.form = {
        //主键
        locationBuildingId: null,
        //院区Id
        locationBranchId: null,
        //建筑名称
        locationBuildingName: null,
        //简称
        shortName: null,
        //拼音
        pinYin: null,
        //拼音首字母
        pinyinInitials: null,
        //首字母
        firstLetter: null,
        //介绍
        introduce: null,
        //是否删除
        isDelete: null,
        //排序
        sorting: null,
        //平面图
        baseMapPath: null,
        //平面图
        baseMapPathForAdd: null,
        //坐标的X轴
        locationX: null,
        //坐标的Y轴
        locationY: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await locationBuildingApi.addLocationBuilding(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await locationBuildingApi.updateLocationBuilding(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>
