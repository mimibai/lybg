<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">
      <Row>
        <Col span="12">
          <FormItem label="主键" prop="drugId">
            <Input type="number" v-model.number="form.drugId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="药品名称" prop="drugName">
            <Input v-model="form.drugName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="通用名称" prop="commonName">
            <Input v-model="form.commonName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="商品名称" prop="tradeName">
            <Input v-model="form.tradeName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="编码" prop="code">
            <Input v-model="form.code" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="名称首字母" prop="pinyinInitials">
            <Input v-model="form.pinyinInitials" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="拼音" prop="pinyin">
            <Input v-model="form.pinyin" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="批准文号" prop="approvalNum">
            <Input v-model="form.approvalNum" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="提供药房" prop="providePharmacyId">
            <Input type="number" v-model.number="form.providePharmacyId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="生产厂家" prop="manufacturer">
            <Input v-model="form.manufacturer" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="药品类型" prop="drugTypeId">
            <Input type="number" v-model.number="form.drugTypeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="包装规格" prop="packageSpecification">
            <Input v-model="form.packageSpecification" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="药品规格" prop="drugSpecification">
            <Input v-model="form.drugSpecification" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="包装单位" prop="packagUnit">
            <Input v-model="form.packagUnit" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="最小包装单位" prop="minPackagUnit">
            <Input v-model="form.minPackagUnit" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="最小包装数量" prop="minPackagCount">
            <Input type="number" v-model.number="form.minPackagCount" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="剂量" prop="dose">
            <Input type="number" v-model.number="form.dose" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="剂量单位" prop="doseUnit">
            <Input v-model="form.doseUnit" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="贮藏方式" prop="storageModeId">
            <Input type="number" v-model.number="form.storageModeId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="商品条形码" prop="commodityBarCode">
            <Input v-model="form.commodityBarCode" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="化学名称" prop="chemicalName">
            <Input v-model="form.chemicalName" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="英文名称" prop="englishName">
            <Input v-model="form.englishName" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="药品详情" prop="drugDetails">
            <Input v-model="form.drugDetails" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="药品成分" prop="drugComponent">
            <Input v-model="form.drugComponent" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="药品追溯码" prop="drugTraceabilityCode">
            <Input v-model="form.drugTraceabilityCode" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="性状" prop="character">
            <Input v-model="form.character" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="药物互相作用" prop="drugInteraction">
            <Input v-model="form.drugInteraction" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="用法用量" prop="usageDosage">
            <Input v-model="form.usageDosage" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="注意事项" prop="mattersNeedingAttention">
            <Input v-model="form.mattersNeedingAttention" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="备注" prop="remarks">
            <Input v-model="form.remarks" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="禁忌" prop="taboo">
            <Input v-model="form.taboo" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="不良反应" prop="adverseReaction">
            <Input v-model="form.adverseReaction" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="剂型" prop="dosageFormId">
            <Input type="number" v-model.number="form.dosageFormId" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="基本药物标识" prop="essentialDrugIdentification">
            <Input v-model="form.essentialDrugIdentification" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <i-switch v-model="form.isDelete" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否辅助用药" prop="isAdjuvant">
            <i-switch v-model="form.isAdjuvant" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否是重点监控药品" prop="isKeyMonitoredDrugs">
            <i-switch v-model="form.isKeyMonitoredDrugs" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否是高警示药品" prop="isHighWarnDrugs">
            <i-switch v-model="form.isHighWarnDrugs" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否是针剂标识" prop="isInjection">
            <i-switch v-model="form.isInjection" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否是抗肿瘤药物" prop="isAntitumorDrugs">
            <i-switch v-model="form.isAntitumorDrugs" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否是抗菌药物" prop="isAntibiotics">
            <i-switch v-model="form.isAntibiotics" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="抗菌药物等级" prop="antimicrobialGradeId">
            <Input type="number" v-model.number="form.antimicrobialGradeId" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否激素化疗药物" prop="isHormoneChemotherapyDrugs">
            <i-switch v-model="form.isHormoneChemotherapyDrugs" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否处方药" prop="isPrescription">
            <i-switch v-model="form.isPrescription" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否麻醉精神药品" prop="isNarcoticPsychotropicDrugs">
            <i-switch v-model="form.isNarcoticPsychotropicDrugs" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否毒性药品" prop="isToxicDrugs">
            <i-switch v-model="form.isToxicDrugs" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="是否放射药品" prop="isRadiopharmaceuticals">
            <i-switch v-model="form.isRadiopharmaceuticals" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="药房类型" prop="pharmacyTypeId">
            <Input type="number" v-model.number="form.pharmacyTypeId" />
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
import { drugApi } from '@/api/clinic/drug';
export default {
  name: 'DrugListForm',
  components: {},
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
      // 表单数据
      form: {
        // 主键
        drugId: null,
        // 药品名称
        drugName: null,
        // 通用名称
        commonName: null,
        // 商品名称
        tradeName: null,
        // 编码
        code: null,
        // 名称首字母
        pinyinInitials: null,
        // 拼音
        pinyin: null,
        // 批准文号
        approvalNum: null,
        // 提供药房
        providePharmacyId: null,
        // 生产厂家
        manufacturer: null,
        // 药品类型
        drugTypeId: null,
        // 包装规格
        packageSpecification: null,
        // 药品规格
        drugSpecification: null,
        // 包装单位
        packagUnit: null,
        // 最小包装单位
        minPackagUnit: null,
        // 最小包装数量
        minPackagCount: null,
        // 剂量
        dose: null,
        // 剂量单位
        doseUnit: null,
        // 贮藏方式
        storageModeId: null,
        // 商品条形码
        commodityBarCode: null,
        // 化学名称
        chemicalName: null,
        // 英文名称
        englishName: null,
        // 药品详情
        drugDetails: null,
        // 药品成分
        drugComponent: null,
        // 药品追溯码
        drugTraceabilityCode: null,
        // 性状
        character: null,
        // 药物互相作用
        drugInteraction: null,
        // 用法用量
        usageDosage: null,
        // 注意事项
        mattersNeedingAttention: null,
        // 备注
        remarks: null,
        // 禁忌
        taboo: null,
        // 不良反应
        adverseReaction: null,
        // 剂型
        dosageFormId: null,
        // 基本药物标识
        essentialDrugIdentification: null,
        // 是否删除
        isDelete: null,
        // 是否辅助用药
        isAdjuvant: null,
        // 是否是重点监控药品
        isKeyMonitoredDrugs: null,
        // 是否是高警示药品
        isHighWarnDrugs: null,
        // 是否是针剂标识
        isInjection: null,
        // 是否是抗肿瘤药物
        isAntitumorDrugs: null,
        // 是否是抗菌药物
        isAntibiotics: null,
        // 抗菌药物等级
        antimicrobialGradeId: null,
        // 是否激素化疗药物
        isHormoneChemotherapyDrugs: null,
        // 是否处方药
        isPrescription: null,
        // 是否麻醉精神药品
        isNarcoticPsychotropicDrugs: null,
        // 是否毒性药品
        isToxicDrugs: null,
        // 是否放射药品
        isRadiopharmaceuticals: null,
        // 药房类型
        pharmacyTypeId: null
      },
      // 表单验证
      formValidate: {
        // 主键
        drugId: [
          {
            type: 'number',
            required: true,
            message: '请输入主键',
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
        this.$set(this.form, 'drugId', newValue['drugId']);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs['form'].resetFields();
      }
    }
  },
  created () {},
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
        // 主键
        drugId: null,
        // 药品名称
        drugName: null,
        // 通用名称
        commonName: null,
        // 商品名称
        tradeName: null,
        // 编码
        code: null,
        // 名称首字母
        pinyinInitials: null,
        // 拼音
        pinyin: null,
        // 批准文号
        approvalNum: null,
        // 提供药房
        providePharmacyId: null,
        // 生产厂家
        manufacturer: null,
        // 药品类型
        drugTypeId: null,
        // 包装规格
        packageSpecification: null,
        // 药品规格
        drugSpecification: null,
        // 包装单位
        packagUnit: null,
        // 最小包装单位
        minPackagUnit: null,
        // 最小包装数量
        minPackagCount: null,
        // 剂量
        dose: null,
        // 剂量单位
        doseUnit: null,
        // 贮藏方式
        storageModeId: null,
        // 商品条形码
        commodityBarCode: null,
        // 化学名称
        chemicalName: null,
        // 英文名称
        englishName: null,
        // 药品详情
        drugDetails: null,
        // 药品成分
        drugComponent: null,
        // 药品追溯码
        drugTraceabilityCode: null,
        // 性状
        character: null,
        // 药物互相作用
        drugInteraction: null,
        // 用法用量
        usageDosage: null,
        // 注意事项
        mattersNeedingAttention: null,
        // 备注
        remarks: null,
        // 禁忌
        taboo: null,
        // 不良反应
        adverseReaction: null,
        // 剂型
        dosageFormId: null,
        // 基本药物标识
        essentialDrugIdentification: null,
        // 是否删除
        isDelete: null,
        // 是否辅助用药
        isAdjuvant: null,
        // 是否是重点监控药品
        isKeyMonitoredDrugs: null,
        // 是否是高警示药品
        isHighWarnDrugs: null,
        // 是否是针剂标识
        isInjection: null,
        // 是否是抗肿瘤药物
        isAntitumorDrugs: null,
        // 是否是抗菌药物
        isAntibiotics: null,
        // 抗菌药物等级
        antimicrobialGradeId: null,
        // 是否激素化疗药物
        isHormoneChemotherapyDrugs: null,
        // 是否处方药
        isPrescription: null,
        // 是否麻醉精神药品
        isNarcoticPsychotropicDrugs: null,
        // 是否毒性药品
        isToxicDrugs: null,
        // 是否放射药品
        isRadiopharmaceuticals: null,
        // 药房类型
        pharmacyTypeId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await drugApi.addDrug(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await drugApi.updateDrug(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    }
  }
};
</script>
