<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
          <FormItem label="主键" prop="locationFloorId">
            <Input type="number" v-model.number="form.locationFloorId" />
          </FormItem>
          <FormItem label="院区Id" prop="locationBranchId">
            <Input type="number" v-model.number="form.locationBranchId" />
          </FormItem>
          <FormItem label="建筑Id" prop="locationBuildingId">
            <Input type="number" v-model.number="form.locationBuildingId" />
          </FormItem>
          <FormItem label="楼层名称" prop="locationFloorName">
            <Input v-model="form.locationFloorName" />
          </FormItem>
          <FormItem label="简称" prop="shortName">
            <Input v-model="form.shortName" />
          </FormItem>
          <FormItem label="介绍" prop="introduce">
            <Input v-model="form.introduce" />
          </FormItem>
          <FormItem label="是否删除" prop="isDelete">
            <Input v-model="form.isDelete" />
          </FormItem>
          <FormItem label="平面图" prop="baseMapPath">
            <Input v-model="form.baseMapPath" />
          </FormItem>
          <FormItem label="平面图" prop="baseMapPathForAdd">
            <Input v-model="form.baseMapPathForAdd" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
  import { locationFloorApi } from '@/api/navigation/location-floor';
  export default {
    name: 'LocationFloorListForm',
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
         //主键
         locationFloorId:null,
         //院区Id
         locationBranchId:null,
         //建筑Id
         locationBuildingId:null,
         //楼层名称
         locationFloorName:null,
         //简称
         shortName:null,
         //介绍
         introduce:null,
         //是否删除
         isDelete:null,
         //平面图
         baseMapPath:null,
         //平面图
         baseMapPathForAdd:null,
        },
        //表单验证
        formValidate: {
        //主键
        locationFloorId:[{ type:'number',required: true, message: '请输入主键', trigger: 'blur' }],
        //院区Id
        locationBranchId:[{ type:'number',required: true, message: '请输入院区Id', trigger: 'blur' }],
        //建筑Id
        locationBuildingId:[{ type:'number',required: true, message: '请输入建筑Id', trigger: 'blur' }],
        //楼层名称
        locationFloorName:[{ required: true, message: '请输入楼层名称', trigger: 'blur' }],
        //简称
        shortName:[{ required: true, message: '请输入简称', trigger: 'blur' }],
        //介绍
        introduce:[{ required: true, message: '请输入介绍', trigger: 'blur' }],
        //是否删除
        isDelete:[{ required: true, message: '请输入是否删除', trigger: 'blur' }],
        //平面图
        baseMapPath:[{ required: true, message: '请输入平面图', trigger: 'blur' }],
        //平面图
        baseMapPathForAdd:[{ required: true, message: '请输入平面图', trigger: 'blur' }],
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
              this.$set(this.form, 'locationFloorId', newValue['locationFloorId']);
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
          locationFloorId:null,
          //院区Id
          locationBranchId:null,
          //建筑Id
          locationBuildingId:null,
          //楼层名称
          locationFloorName:null,
          //简称
          shortName:null,
          //介绍
          introduce:null,
          //是否删除
          isDelete:null,
          //平面图
          baseMapPath:null,
          //平面图
          baseMapPathForAdd:null,
        };
        this.$refs['form'].resetFields();
      },
      async add() {
        this.$Spin.show();
        let res = await locationFloorApi.addLocationFloor(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      },
      async update() {
        this.$Spin.show();
        let res = await locationFloorApi.updateLocationFloor(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      }
    }
  };
</script>
