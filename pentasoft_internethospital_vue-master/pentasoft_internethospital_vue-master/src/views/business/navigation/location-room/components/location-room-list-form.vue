<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
          <FormItem label="主键" prop="locationRoomId">
            <Input type="number" v-model.number="form.locationRoomId" />
          </FormItem>
          <FormItem label="所在院区" prop="locationBranchId">
            <Input type="number" v-model.number="form.locationBranchId" />
          </FormItem>
          <FormItem label="所在建筑" prop="locationBuildingId">
            <Input type="number" v-model.number="form.locationBuildingId" />
          </FormItem>
          <FormItem label="所在楼层" prop="locationFloorId">
            <Input type="number" v-model.number="form.locationFloorId" />
          </FormItem>
          <FormItem label="房间名称" prop="locationRoomName">
            <Input v-model="form.locationRoomName" />
          </FormItem>
          <FormItem label="简称" prop="shortName">
            <Input v-model="form.shortName" />
          </FormItem>
          <FormItem label="是否是诊室" prop="isClinic">
            <Input v-model="form.isClinic" />
          </FormItem>
          <FormItem label="介绍" prop="introduce">
            <Input v-model="form.introduce" />
          </FormItem>
          <FormItem label="是否删除" prop="isDelete">
            <Input v-model="form.isDelete" />
          </FormItem>
          <FormItem label="父级Id" prop="parentId">
            <Input type="number" v-model.number="form.parentId" />
          </FormItem>
          <FormItem label="父级Id集合" prop="parentIds">
            <Input v-model="form.parentIds" />
          </FormItem>
          <FormItem label="层级" prop="depth">
            <Input type="number" v-model.number="form.depth" />
          </FormItem>
          <FormItem label="层级排序" prop="branchIndex">
            <Input type="number" v-model.number="form.branchIndex" />
          </FormItem>
          <FormItem label="排序" prop="sortIndex">
            <Input type="number" v-model.number="form.sortIndex" />
          </FormItem>
          <FormItem label="总排序" prop="totalRanking">
            <Input type="number" v-model.number="form.totalRanking" />
          </FormItem>
          <FormItem label="父项名称集合" prop="parentNames">
            <Input v-model="form.parentNames" />
          </FormItem>
          <FormItem label="父项短名称集合" prop="parentShortNames">
            <Input v-model="form.parentShortNames" />
          </FormItem>
          <FormItem label="房间类型" prop="locationRoomTypeId">
            <Input type="number" v-model.number="form.locationRoomTypeId" />
          </FormItem>
          <FormItem label="坐标的X轴" prop="locationX">
            <Input v-model="form.locationX" />
          </FormItem>
          <FormItem label="坐标的Y轴" prop="locationY">
            <Input v-model="form.locationY" />
          </FormItem>
          <FormItem label="搜索次数" prop="searchCount">
            <Input type="number" v-model.number="form.searchCount" />
          </FormItem>
    </Form>
    <Row class="code-row-bg" justify="end" type="flex">
      <Button @click="cancel" style="margin-right:10px">取消</Button>
      <Button @click="save" type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
  import { locationRoomApi } from '@/api/navigation/location-room';
  export default {
    name: 'LocationRoomListForm',
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
         locationRoomId:null,
         //所在院区
         locationBranchId:null,
         //所在建筑
         locationBuildingId:null,
         //所在楼层
         locationFloorId:null,
         //房间名称
         locationRoomName:null,
         //简称
         shortName:null,
         //是否是诊室
         isClinic:null,
         //介绍
         introduce:null,
         //是否删除
         isDelete:null,
         //父级Id
         parentId:null,
         //父级Id集合
         parentIds:null,
         //层级
         depth:null,
         //层级排序
         branchIndex:null,
         //排序
         sortIndex:null,
         //总排序
         totalRanking:null,
         //父项名称集合
         parentNames:null,
         //父项短名称集合
         parentShortNames:null,
         //房间类型
         locationRoomTypeId:null,
         //坐标的X轴
         locationX:null,
         //坐标的Y轴
         locationY:null,
         //搜索次数
         searchCount:null,
        },
        //表单验证
        formValidate: {
        //主键
        locationRoomId:[{ type:'number',required: true, message: '请输入主键', trigger: 'blur' }],
        //所在院区
        locationBranchId:[{ type:'number',required: true, message: '请输入所在院区', trigger: 'blur' }],
        //所在建筑
        locationBuildingId:[{ type:'number',required: true, message: '请输入所在建筑', trigger: 'blur' }],
        //所在楼层
        locationFloorId:[{ type:'number',required: true, message: '请输入所在楼层', trigger: 'blur' }],
        //房间名称
        locationRoomName:[{ required: true, message: '请输入房间名称', trigger: 'blur' }],
        //简称
        shortName:[{ required: true, message: '请输入简称', trigger: 'blur' }],
        //是否是诊室
        isClinic:[{ required: true, message: '请输入是否是诊室', trigger: 'blur' }],
        //介绍
        introduce:[{ required: true, message: '请输入介绍', trigger: 'blur' }],
        //是否删除
        isDelete:[{ required: true, message: '请输入是否删除', trigger: 'blur' }],
        //父级Id
        parentId:[{ type:'number',required: true, message: '请输入父级Id', trigger: 'blur' }],
        //父级Id集合
        parentIds:[{ required: true, message: '请输入父级Id集合', trigger: 'blur' }],
        //层级
        depth:[{ type:'number',required: true, message: '请输入层级', trigger: 'blur' }],
        //层级排序
        branchIndex:[{ type:'number',required: true, message: '请输入层级排序', trigger: 'blur' }],
        //排序
        sortIndex:[{ type:'number',required: true, message: '请输入排序', trigger: 'blur' }],
        //总排序
        totalRanking:[{ type:'number',required: true, message: '请输入总排序', trigger: 'blur' }],
        //父项名称集合
        parentNames:[{ required: true, message: '请输入父项名称集合', trigger: 'blur' }],
        //父项短名称集合
        parentShortNames:[{ required: true, message: '请输入父项短名称集合', trigger: 'blur' }],
        //房间类型
        locationRoomTypeId:[{ type:'number',required: true, message: '请输入房间类型', trigger: 'blur' }],
        //坐标的X轴
        locationX:[{ required: true, message: '请输入坐标的X轴', trigger: 'blur' }],
        //坐标的Y轴
        locationY:[{ required: true, message: '请输入坐标的Y轴', trigger: 'blur' }],
        //搜索次数
        searchCount:[{ type:'number',required: true, message: '请输入搜索次数', trigger: 'blur' }],
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
              this.$set(this.form, 'locationRoomId', newValue['locationRoomId']);
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
          locationRoomId:null,
          //所在院区
          locationBranchId:null,
          //所在建筑
          locationBuildingId:null,
          //所在楼层
          locationFloorId:null,
          //房间名称
          locationRoomName:null,
          //简称
          shortName:null,
          //是否是诊室
          isClinic:null,
          //介绍
          introduce:null,
          //是否删除
          isDelete:null,
          //父级Id
          parentId:null,
          //父级Id集合
          parentIds:null,
          //层级
          depth:null,
          //层级排序
          branchIndex:null,
          //排序
          sortIndex:null,
          //总排序
          totalRanking:null,
          //父项名称集合
          parentNames:null,
          //父项短名称集合
          parentShortNames:null,
          //房间类型
          locationRoomTypeId:null,
          //坐标的X轴
          locationX:null,
          //坐标的Y轴
          locationY:null,
          //搜索次数
          searchCount:null,
        };
        this.$refs['form'].resetFields();
      },
      async add() {
        this.$Spin.show();
        let res = await locationRoomApi.addLocationRoom(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      },
      async update() {
        this.$Spin.show();
        let res = await locationRoomApi.updateLocationRoom(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      }
    }
  };
</script>
