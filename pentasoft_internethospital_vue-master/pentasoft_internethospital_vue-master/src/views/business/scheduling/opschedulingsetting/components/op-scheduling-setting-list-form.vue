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
          <FormItem label="是否启用预约挂号" prop="isOpenAppoint">
            <Checkbox v-model="form.isOpenAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否启用手机预约挂号" prop="isOpenMobileAppoint">
            <Checkbox v-model="form.isOpenMobileAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否开启图形验证码" prop="isOpenAppointValidateCode">
            <Checkbox
              v-model="form.isOpenAppointValidateCode"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="提前几天可见" prop="inAdvanceDaysForLook">
            <Input
              type="number"
              v-model.number="form.inAdvanceDaysForLook"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="提前几天开启预约" prop="inAdvanceDaysForAppoint">
            <Input
              type="number"
              v-model.number="form.inAdvanceDaysForAppoint"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="当天开启的时间" prop="inAdvanceTimeForAppoint">
            <DatePicker
              placeholder="当天开启的时间"
              split-panels
              type="datetime"
               :value="form.inAdvanceTimeForAppoint"
              @on-change="form.inAdvanceTimeForAppoint = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="提前几天截止预约" prop="inCutoffDaysForAppoint">
            <Input type="number" v-model.number="form.inCutoffDaysForAppoint" />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="当天截止的时间" prop="inCutoffTimeForAppoint">
            <DatePicker
              placeholder="当天截止的时间"
              split-panels
              type="datetime"
             :value="form.inCutoffTimeForAppoint"
              @on-change="form.inCutoffTimeForAppoint = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="周五是否为周一预约前一天" prop="isAppointByFriday">
            <Checkbox v-model="form.isAppointByFriday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="周六是否可以预约周一的号" prop="isAppointBySaturday">
            <Checkbox v-model="form.isAppointBySaturday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="周日是否可以预约周一的号" prop="isAppointBySunday">
            <Checkbox v-model="form.isAppointBySunday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="假期是否可以预约假日后第一天的号"
            prop="isAppointByHoliday"
          >
            <Checkbox v-model="form.isAppointByHoliday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="假期前一天是否可以预约假日后第一天的号"
            prop="isAppointByTheDayBeforeHoliday"
          >
            <Checkbox v-model="form.isAppointByTheDayBeforeHoliday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否跳过周六" prop="isJumpedOverSaturday">
            <Checkbox v-model="form.isJumpedOverSaturday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否跳过周日" prop="isJumpedOverSunday">
            <Checkbox v-model="form.isJumpedOverSunday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否跳过假期" prop="isJumpedOverHoliday">
            <Checkbox v-model="form.isJumpedOverHoliday"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="周五是否为周一预约取消前一天"
            prop="isAppointByFridayToCancel"
          >
            <Checkbox v-model="form.isAppointByFridayToCancel"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="周六是否可以取消周一的号"
            prop="isAppointBySaturdayToCancel"
          >
            <Checkbox v-model="form.isAppointBySaturdayToCancel"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="周日是否可以取消周一的号"
            prop="isAppointBySundayToCancel"
          >
            <Checkbox v-model="form.isAppointBySundayToCancel"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="假期是否可以取消假期后第一天的号"
            prop="isAppointByHolidayToCancel"
          >
            <Checkbox v-model="form.isAppointByHolidayToCancel"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="假期前一天是否可以取消假日后第一天的号"
            prop="isAppointByTheDayBeforeHolidayToCancel"
          >
            <Checkbox
              v-model="form.isAppointByTheDayBeforeHolidayToCancel"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否启用绿色通道" prop="isOpenGreenChannel">
            <Checkbox v-model="form.isOpenGreenChannel"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="提前几天开启绿色通道"
            prop="inAdvanceDaysForGreenChannel"
          >
            <Input
              type="number"
              v-model.number="form.inAdvanceDaysForGreenChannel"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约成功是否发送邮件" prop="isSendEmailForAppoint">
            <Checkbox v-model="form.isSendEmailForAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约成功发送账号" prop="appointEmailAccountId">
            <Select class="form-width" v-model="form.appointEmailAccountId">
              <Option
                :value="item.value"
                v-for="item in emailAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="预约成功邮件模板" prop="appointEmailTemplateId">
            <Select class="form-width" v-model="form.appointEmailTemplateId">
              <Option
                :value="item.value"
                v-for="item in emailTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="预约成功是否发送短信"
            prop="isSendShortMessageForAppoint"
          >
            <Checkbox v-model="form.isSendShortMessageForAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="预约成功短信模板"
            prop="appointShortMessageTemplateId"
          >
            <Select
              class="form-width"
              v-model="form.appointShortMessageTemplateId"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="微信发送模板消息账号" prop="appointWeiXinAccountId">
            <Select class="form-width" v-model="form.appointWeiXinAccountId">
              <Option
                :value="item.value"
                v-for="item in wxAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="预约成功是否发送微信消息"
            prop="isSendWeiXinMessageForAppoint"
          >
            <Checkbox v-model="form.isSendWeiXinMessageForAppoint"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废时是否发送微信消息"
            prop="isSendWeiXinMessageForAppoint_InvalidByPatient"
          >
            <Checkbox
              v-model="form.isSendWeiXinMessageForAppoint_InvalidByPatient"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废时是否发送邮件"
            prop="isSendEmailForAppoint_InvalidByPatient"
          >
            <Checkbox
              v-model="form.isSendEmailForAppoint_InvalidByPatient"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废发送账号"
            prop="appointEmailAccountId_InvalidByPatient"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailAccountId_InvalidByPatient"
            >
              <Option
                :value="item.value"
                v-for="item in emailAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废邮件模板"
            prop="appointEmailTemplateId_InvalidByPatient"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailTemplateId_InvalidByPatient"
            >
              <Option
                :value="item.value"
                v-for="item in emailTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废时是否发送短信"
            prop="isSendShortMessageForAppoint_InvalidByPatient"
          >
            <Checkbox
              v-model="form.isSendShortMessageForAppoint_InvalidByPatient"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废短信模板"
            prop="appointShortMessageTemplateId_InvalidByPatient"
          >
            <Select
              class="form-width"
              v-model="form.appointShortMessageTemplateId_InvalidByPatient"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="医生操作预约作废时是否发送邮件"
            prop="isSendEmailForAppoint_InvalidByDoctor"
          >
            <Checkbox
              v-model="form.isSendEmailForAppoint_InvalidByDoctor"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="医生操作预约作废发送账号"
            prop="appointEmailAccountId_InvalidByDoctor"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailAccountId_InvalidByDoctor"
            >
              <Option
                :value="item.value"
                v-for="item in emailAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="医生操作预约作废邮件模板"
            prop="appointEmailTemplateId_InvalidByDoctor"
          >
            <Input
              type="number"
              v-model.number="form.appointEmailTemplateId_InvalidByDoctor"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="医生操作预约作废时是否发送短信"
            prop="isSendShortMessageForAppoint_InvalidByDoctor"
          >
            <Checkbox
              v-model="form.isSendShortMessageForAppoint_InvalidByDoctor"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="医生操作预约作废短信模板"
            prop="appointShortMessageTemplateId_InvalidByDoctor"
          >
            <Select
              class="form-width"
              v-model="form.appointShortMessageTemplateId_InvalidByDoctor"
            >
              <Option
                :value="item.value"
                v-for="item in emailTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="管理操作预约作废时是否发送邮件"
            prop="isSendEmailForAppoint_InvalidByAdmin"
          >
            <Checkbox
              v-model="form.isSendEmailForAppoint_InvalidByAdmin"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="管理操作预约作废发送账号"
            prop="appointEmailAccountId_InvalidByAdmin"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailAccountId_InvalidByAdmin"
            >
              <Option
                :value="item.value"
                v-for="item in emailAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="管理操作预约作废邮件模板"
            prop="appointEmailTemplateId_InvalidByAdmin"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailTemplateId_InvalidByAdmin"
            >
              <Option
                :value="item.value"
                v-for="item in emailTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="管理操作预约作废时是否发送短信"
            prop="isSendShortMessageForAppoint_InvalidByAdmin"
          >
            <Checkbox
              v-model="form.isSendShortMessageForAppoint_InvalidByAdmin"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="管理操作预约作废短信模板"
            prop="appointShortMessageTemplateId_InvalidByAdmin"
          >
            <Select
              class="form-width"
              v-model="form.appointShortMessageTemplateId_InvalidByAdmin"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="停诊操作预约作废时是否发送邮件"
            prop="isSendEmailForAppoint_InvalidByStop"
          >
            <Checkbox
              v-model="form.isSendEmailForAppoint_InvalidByStop"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="停诊操作预约作废发送账号"
            prop="appointEmailAccountId_InvalidByStop"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailAccountId_InvalidByStop"
            >
              <Option
                :value="item.value"
                v-for="item in emailAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="停诊操作预约作废邮件模板"
            prop="appointEmailTemplateId_InvalidByStop"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailTemplateId_InvalidByStop"
            >
              <Option
                :value="item.value"
                v-for="item in emailTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="停诊操作预约作废时是否发送短信"
            prop="isSendShortMessageForAppoint_InvalidByStop"
          >
            <Checkbox
              v-model="form.isSendShortMessageForAppoint_InvalidByStop"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="停诊操作预约作废短信模板"
            prop="appointShortMessageTemplateId_InvalidByStop"
          >
            <Select
              class="form-width"
              v-model="form.appointShortMessageTemplateId_InvalidByStop"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="过期预约作废时是否发送邮件(违约)"
            prop="isSendEmailForAppoint_InvalidByExpired"
          >
            <Checkbox
              v-model="form.isSendEmailForAppoint_InvalidByExpired"
            ></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="过期预约作废发送账号(违约)"
            prop="appointEmailAccountId_InvalidByExpired"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailAccountId_InvalidByExpired"
            >
              <Option
                :value="item.value"
                v-for="item in emailAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="过期预约作废邮件模板(违约)"
            prop="appointEmailTemplateId_InvalidByExpired"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailTemplateId_InvalidByExpired"
            >
              <Option
                :value="item.value"
                v-for="item in emailTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="过期预约作废时是否发送短信(违约)"
            prop="isSendShortMessageForAppoint_InvalidByExpired"
          >
            <Input
              v-model="form.isSendShortMessageForAppoint_InvalidByExpired"
            />
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="过期预约作废短信模板(违约)"
            prop="appointShortMessageTemplateId_InvalidByExpired"
          >
            <Select
              class="form-width"
              v-model="form.appointShortMessageTemplateId_InvalidByExpired"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否发送诊前提醒患者邮件"
            prop="isSendEmailForAppoint_RemindByPatient"
          >
            <Checkbox
              v-model="form.isSendEmailForAppoint_RemindByPatient"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="诊前提醒患者发送账号"
            prop="appointEmailAccountId_RemindByPatient"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailAccountId_RemindByPatient"
            >
              <Option
                :value="item.value"
                v-for="item in emailAccountListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem></Col
        >
        <Col span="12">
          <FormItem
            label="诊前提醒患者邮件模板"
            prop="appointEmailTemplateId_RemindByPatient"
          >
            <Select
              class="form-width"
              v-model="form.appointEmailTemplateId_RemindByPatient"
            >
              <Option
                :value="item.value"
                v-for="item in emailTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem></Col
        >
        <Col span="12">
          <FormItem
            label="是否发送诊前提醒患者短信"
            prop="isSendShortMessageForAppoint_RemindByPatient"
          >
            <Checkbox
              v-model="form.isSendShortMessageForAppoint_RemindByPatient"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="诊前提醒患者短信模板"
            prop="appointShortMessageTemplateId_RemindByPatient"
          >
            <Select
              class="form-width"
              v-model="form.appointShortMessageTemplateId_RemindByPatient"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem></Col
        >
        <Col span="12">
          <FormItem
            label="预约时间前几天截止取消预约"
            prop="inCutoffDaysForCancerAppoint"
          >
            <Input
              type="number"
              v-model.number="form.inCutoffDaysForCancerAppoint"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="当天取消预约截止的时间"
            prop="inCutoffTimeForCancerAppoint"
          >
            <DatePicker
              placeholder="当天取消预约截止的时间"
              split-panels
              type="datetime"
              :value="form.inCutoffTimeForCancerAppoint"
              @on-change="form.inCutoffTimeForCancerAppoint = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="每月取消预约次数"
            prop="inMonthForCancelAppointCount"
          >
            <Input
              type="number"
              v-model.number="form.inMonthForCancelAppointCount"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="发送诊前提醒的时间" prop="inCutoffTimeForRemind">
            <DatePicker
              placeholder="发送诊前提醒的时间"
              split-panels
              type="datetime"
              :value="form.inCutoffTimeForRemind"
              @on-change="form.inCutoffTimeForRemind = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="取消预约页面提示信息"
            prop="cancelAppointPageMessage"
          >
            <Input v-model="form.cancelAppointPageMessage" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="同一身份证待就诊条数"
            prop="sameIdCardNoSchedulingAppointNoTakeNumCount"
          >
            <Input
              type="number"
              v-model.number="form.sameIdCardNoSchedulingAppointNoTakeNumCount"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="同一天同一身份证可预约个数"
            prop="sameDayIdCardNoSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="form.sameDayIdCardNoSchedulingAppointCount"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="同一时段同一身份证可预约个数"
            prop="sameTimeIdCardNoSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="form.sameTimeIdCardNoSchedulingAppointCount"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="同一天同一身份证同一科室可预约个数"
            prop="sameDayIdCardNoDepartmentSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="
                form.sameDayIdCardNoDepartmentSchedulingAppointCount
              "
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="同一时段同一身份证同一科室可预约个数"
            prop="sameTimeIdCardNoDepartmentSchedulingAppointCount"
          >
            <Input
              type="number"
              v-model.number="
                form.sameTimeIdCardNoDepartmentSchedulingAppointCount
              "
            /> </FormItem
        ></Col>
        <Col span="24">
          <FormItem label="预约须知" prop="schedulingAppointmentNotice">
            <VueUeditorWrap
              v-model="form.schedulingAppointmentNotice"
              :config="ueditorConfig"
            ></VueUeditorWrap>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="是否删除" prop="isDelete">
            <Checkbox v-model="form.isDelete"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="预约地址简介" prop="schedulingAddressDescription">
            <Input v-model="form.schedulingAddressDescription" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="预约地址地图名称" prop="schedulingaddressMapName">
            <Input v-model="form.schedulingaddressMapName" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="预约地址地图坐标经纬度"
            prop="schedulingMapCoordinates"
          >
            <Input v-model="form.schedulingMapCoordinates" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="停诊操作预约作废时是否发送"
            prop="isSendWeiXinMessageForAppoint_InvalidByStop"
          >
            <Checkbox
              v-model="form.isSendWeiXinMessageForAppoint_InvalidByStop"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="过期预约作废时是否发送(违约)"
            prop="isSendWeiXinMessageForAppoint_InvalidByExpired"
          >
            <Checkbox
              v-model="form.isSendWeiXinMessageForAppoint_InvalidByExpired"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="是否发送诊前提醒患者"
            prop="isSendWeiXinMessageForAppoint_RemindByPatient"
          >
            <Checkbox
              v-model="form.isSendWeiXinMessageForAppoint_RemindByPatient"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="复诊就诊卡是否必填"
            prop="isMustTreatmentCardNoForReferral"
          >
            <Checkbox
              v-model="form.isMustTreatmentCardNoForReferral"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="就诊卡号位数" prop="treatmentCardNoNum">
            <Input
              type="number"
              v-model.number="form.treatmentCardNoNum"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="支付宝发送模板消息账号"
            prop="appointAlipayAccountId"
          >
            <Input
              type="number"
              v-model.number="form.appointAlipayAccountId"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="预约成功是否发送支付宝消息"
            prop="isSendAlipayMessageForAppoint"
          >
            <Checkbox
              v-model="form.isSendAlipayMessageForAppoint"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废时是否发送支付宝消息"
            prop="isSendAlipayMessageForAppoint_InvalidByPatient"
          >
            <Checkbox
              v-model="form.isSendAlipayMessageForAppoint_InvalidByPatient"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="参保卡类别是否显示"
            prop="isShowAppointInsuredCardTypeId"
          >
            <Checkbox
              v-model="form.isShowAppointInsuredCardTypeId"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="参保卡类别是否必填"
            prop="isMustAppointInsuredCardTypeId"
          >
            <Checkbox
              v-model="form.isMustAppointInsuredCardTypeId"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否启用在线支付" prop="isOpenPayment">
            <Checkbox v-model="form.isOpenPayment"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="支付密钥" prop="paymentKey">
            <Input v-model="form.paymentKey" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="支付地址" prop="paymentUrl">
            <Input v-model="form.paymentUrl" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="预约接口地址" prop="appointInterfaceUrl">
            <Input v-model="form.appointInterfaceUrl" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否必须在线支付" prop="isMustPayment">
            <Checkbox v-model="form.isMustPayment"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启当日挂号" prop="isDefaultForDay">
            <Checkbox v-model="form.isDefaultForDay"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="上午开启预约时间" prop="aMBeginTimeForDay">
            <DatePicker
              placeholder="上午开启预约时间"
              split-panels
              type="datetime"
             :value="form.aMBeginTimeForDay"
              @on-change="form.aMBeginTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="上午结束预约时间" prop="aMEndTimeForDay">
            <DatePicker
              placeholder="上午结束预约时间"
              split-panels
              type="datetime"
              :value="form.aMEndTimeForDay"
              @on-change="form.aMEndTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="下午开启预约时间" prop="pMBeginTimeForDay">
            <DatePicker
              placeholder="下午开启预约时间"
              split-panels
              type="datetime"
              :value="form.pMBeginTimeForDay"
              @on-change="form.pMBeginTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="下午结束预约时间" prop="pMEndTimeForDay">
            <DatePicker
              placeholder="下午结束预约时间"
              split-panels
              type="datetime"
              :value="form.pMEndTimeForDay"
              @on-change="form.pMEndTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启精准预约" prop="isAccurateReservation">
            <Checkbox
              v-model="form.isAccurateReservation"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="精准预约地址" prop="accurateReservationUrl">
            <Input v-model="form.accurateReservationUrl" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="精准预约上报地址"
            prop="accurateReservationReportUrl"
          >
            <Input v-model="form.accurateReservationReportUrl" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="精准预约公钥" prop="accurateReservationPubilcKey">
            <Input v-model="form.accurateReservationPubilcKey" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="精准预约未通过短信模板"
            prop="aRNoPassShortMessageTemplateId"
          >
            <Input
              type="number"
              v-model.number="form.aRNoPassShortMessageTemplateId"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="精准预约等待审核短信模板"
            prop="aRWaitShortMessageTemplateId"
          >
            <Select
              class="form-width"
              v-model="form.aRWaitShortMessageTemplateId"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem></Col
        >

        <Col span="12">
          <FormItem label="是否必须微信预约" prop="isMustWeiXinAppoint">
            <Checkbox v-model="form.isMustWeiXinAppoint"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="被替诊是否停诊" prop="isStopForReplaced">
            <Checkbox v-model="form.isStopForReplaced"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="替诊是否可预约" prop="isAppointForReplace">
            <Checkbox v-model="form.isAppointForReplace"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否随机放号" prop="isRandomToCancel">
            <Checkbox v-model="form.isRandomToCancel"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否固定放号" prop="isFixedToCancel">
            <Checkbox v-model="form.isFixedToCancel"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="取消后放号时间" prop="appointTimeToCancel">
            <Input
              type="number"
              v-model.number="form.appointTimeToCancel"
            /> </FormItem
        ></Col>
        <Col span="24">
          <FormItem label="预约须知版本" prop="noticeVersion">
            <VueUeditorWrap
              v-model="form.noticeVersion"
              :config="ueditorConfig"
            ></VueUeditorWrap> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="复诊预约预约模板"
            prop="reVisitShortMessageTemplateId"
          >
            <Select
              class="form-width"
              v-model="form.reVisitShortMessageTemplateId"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem></Col
        >
        <Col span="12">
          <FormItem
            label="复诊预约是否发送短信"
            prop="isSendShortMessageForReVisit"
          >
            <Input v-model="form.isSendShortMessageForReVisit" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="支付宝支付账号" prop="payAlipayAccountId">
            <Input
              type="number"
              v-model.number="form.payAlipayAccountId"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="微信支付账号" prop="payWeiXinAccountId">
            <Input
              type="number"
              v-model.number="form.payWeiXinAccountId"
            /> </FormItem
        ></Col>
        <Col span="24">
          <FormItem
            label="当日挂号预约须知"
            prop="schedulingAppointmentNoticeForDay"
          >
            <VueUeditorWrap
              v-model="form.schedulingAppointmentNoticeForDay"
              :config="ueditorConfig"
            ></VueUeditorWrap> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="支付患者类型" prop="payPatientTypeIds">
            <Input v-model="form.payPatientTypeIds" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="当日预约成功是否发送短信"
            prop="isSendShortMessageForDayAppoint"
          >
            <Checkbox
              v-model="form.isSendShortMessageForDayAppoint"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="当日预约成功短信模板"
            prop="appointShortMessageForDayTemplateId"
          >
            <Input
              type="number"
              v-model.number="form.appointShortMessageForDayTemplateId"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废时是否发送短信"
            prop="isSendShortMessageForDayAppoint_InvalidByPatient"
          >
            <Checkbox
              v-model="form.isSendShortMessageForDayAppoint_InvalidByPatient"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="患者操作预约作废短信模板"
            prop="appointShortMessageForDayTemplateId_InvalidByPatient"
          >
            <Input
              type="number"
              v-model.number="
                form.appointShortMessageForDayTemplateId_InvalidByPatient
              "
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启第三方支付" prop="isThirdPartyPay">
            <Checkbox v-model="form.isThirdPartyPay"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启第三方支付" prop="isOpenLockNum">
            <Checkbox v-model="form.isOpenLockNum"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="第三方支付地址" prop="thirdPartyPayUrl">
            <Input v-model="form.thirdPartyPayUrl" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="锁号患者类型" prop="lockPatientTypeIds">
            <Input v-model="form.lockPatientTypeIds" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="锁号患者" prop="lockPatientTypeId">
            <Input
              type="number"
              v-model.number="form.lockPatientTypeId"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启特殊预约" prop="isOpenSpecialAppoint">
            <Checkbox v-model="form.isOpenSpecialAppoint"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="特殊预约提前预约天数"
            prop="inAdvanceDaysForSpecialAppoint"
          >
            <Input
              type="number"
              v-model.number="form.inAdvanceDaysForSpecialAppoint"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启分时预约" prop="isOpenPeriodAppointment">
            <Checkbox
              v-model="form.isOpenPeriodAppointment"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="24">
          <FormItem label="预约温馨提示" prop="appointmentReminder">
            <VueUeditorWrap
              v-model="form.appointmentReminder"
              :config="ueditorConfig"
            ></VueUeditorWrap> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否单独显示当日挂号" prop="isSoleDefaultForDay">
            <Checkbox v-model="form.isSoleDefaultForDay"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="当日挂号患者类型" prop="defaultPatientTypeIds">
            <Input v-model="form.defaultPatientTypeIds" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="中午开启预约时间" prop="noonBeginTimeForDay">
            <DatePicker
              placeholder="中午开启预约时间"
              split-panels
              type="datetime"
               :value="form.noonBeginTimeForDay"
              @on-change="form.noonBeginTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="中午结束预约时间" prop="noonEndTimeForDay">
            <DatePicker
              placeholder="中午结束预约时间"
              split-panels
              type="datetime"
              :value="form.noonEndTimeForDay"
              @on-change="form.noonEndTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="上夜开启预约时间" prop="upNightBeginTimeForDay">
            <DatePicker
              placeholder="上夜开启预约时间"
              split-panels
              type="datetime"
              :value="form.upNightBeginTimeForDay"
              @on-change="form.upNightBeginTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="上夜结束预约时间" prop="upNightEndTimeForDay">
            <DatePicker
              placeholder="上夜结束预约时间"
              split-panels
              type="datetime"
              :value="form.upNightEndTimeForDay"
              @on-change="form.upNightEndTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="下夜开启预约时间" prop="downNightBeginTimeForDay">
            <DatePicker
              placeholder="下夜开启预约时间"
              split-panels
              type="datetime"
              :value="form.downNightBeginTimeForDay"
              @on-change="form.downNightBeginTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="下夜结束预约时间" prop="downNightEndTimeForDay">
            <DatePicker
              placeholder="下夜结束预约时间"
              split-panels
              type="datetime"
              :value="form.downNightEndTimeForDay"
              @on-change="form.downNightEndTimeForDay = $event"
              format="yyyy-MM-dd HH:mm:ss"
            ></DatePicker> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="自费患者预约成功短信" prop="selfPaidSMS">
            <Input type="number" v-model.number="form.selfPaidSMS" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="医保患者预约成功短信" prop="medicalInsuranceSMS">
            <Input
              type="number"
              v-model.number="form.medicalInsuranceSMS"
            /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启实时出诊" prop="isOpenRealTimeSch">
            <Checkbox v-model="form.isOpenRealTimeSch"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否展示剩余号源数量" prop="isShowValuableNumber">
            <Checkbox v-model="form.isShowValuableNumber"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="特殊预约成功时是否发送短信"
            prop="isSendShortMessageForSpecialAppoint"
          >
            <Checkbox
              v-model="form.isSendShortMessageForSpecialAppoint"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="特殊预约成功短信模板"
            prop="specialAppointShortMessageTemplateId"
          >
            <Select
              class="form-width"
              v-model="form.specialAppointShortMessageTemplateId"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem></Col
        >
        <Col span="12">
          <FormItem
            label="特殊预约取消时是否发送短信"
            prop="isSendShortMessageForSpecialAppoint_Invalid"
          >
            <Checkbox
              v-model="form.isSendShortMessageForSpecialAppoint_Invalid"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="特殊预约取消短信模板"
            prop="specialAppointShortMessageTemplateId_Invalid"
          >
            <Select
              class="form-width"
              v-model="form.specialAppointShortMessageTemplateId_Invalid"
            >
              <Option
                :value="item.value"
                v-for="item in shortMessageTemplateListData"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem></Col
        >

        <Col span="12">
          <FormItem label="是否开启医保结算" prop="isOpenMedicalSettlement">
            <Checkbox
              v-model="form.isOpenMedicalSettlement"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="自费是否允许预约" prop="isSelfFeeOpenAppoint">
            <Checkbox v-model="form.isSelfFeeOpenAppoint"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="医保是否允许自费挂号" prop="isMIOpenSelfFeeRegister">
            <Checkbox
              v-model="form.isMIOpenSelfFeeRegister"
            ></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="自费选择预约提示确认询问消息"
            prop="selfFeeConfirmMessage"
          >
            <Input v-model="form.selfFeeConfirmMessage" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem
            label="医保选择挂号提示确认询问消息"
            prop="mIConfirmMessage"
          >
            <Input v-model="form.mIConfirmMessage" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="自费挂号提示消息" prop="selfFeeRemindMessage">
            <Input v-model="form.selfFeeRemindMessage" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="医保预约提示消息" prop="mIRemindMessage">
            <Input v-model="form.mIRemindMessage" /> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="是否开启急诊挂号" prop="isOpenEmergency">
            <Checkbox v-model="form.isOpenEmergency"></Checkbox>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem
            label="是否开启微信小程序预约流调按钮"
            prop="isOpenVoteResult"
          >
            <Checkbox v-model="form.isOpenVoteResult"></Checkbox> </FormItem
        ></Col>
        <Col span="12">
          <FormItem label="表单填写页面" prop="voteItemId">
            <Input type="number" v-model.number="form.voteItemId" />
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
import { oPSchedulingSettingApi } from '@/api/scheduling/op-scheduling-setting';
import { EmailAccountApi } from '@/api/message/email-account';
import { EmailTemplateApi } from '@/api/message/email-template';
import { ShortMessageTemplateApi } from '@/api/message/short-message-template';
import { wxAccountApi } from '@/api/weixin/wx-account';
import { FILE_TYPE, SERVICE_TYPE } from '@/constants/file';
import VueUeditorWrap from 'vue-ueditor-wrap';
import config from '@/config';
import FileUploadSingle from '@/components/file-upload-single';
export default {
  name: 'OPSchedulingSettingListForm',
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
      emailAccountListData: [],
      emailTemplateListData: [],
      shortMessageTemplateListData: [],
      wxAccountListData: [],
      // 表单数据
      form: {
        // 主键Id
        oPSchedulingSettingId: null,
        // 名称
        name: null,
        // 是否默认
        isDefault: null,
        // 是否启用预约挂号
        isOpenAppoint: null,
        // 是否启用手机预约挂号
        isOpenMobileAppoint: null,
        // 提前几天开启预约
        inAdvanceDaysForAppoint: null,
        // 当天开启的时间
        inAdvanceTimeForAppoint: null,
        // 提前几天截止预约
        inCutoffDaysForAppoint: null,
        // 当天截止的时间
        inCutoffTimeForAppoint: null,
        // 周五是否为周一预约前一天
        isAppointByFriday: null,
        // 周六是否可以预约周一的号
        isAppointBySaturday: null,
        // 周日是否可以预约周一的号
        isAppointBySunday: null,
        // 假期是否可以预约假日后第一天的号
        isAppointByHoliday: null,
        // 假期前一天是否可以预约假日后第一天的号
        isAppointByTheDayBeforeHoliday: null,
        // 是否跳过周六
        isJumpedOverSaturday: null,
        // 是否跳过周日
        isJumpedOverSunday: null,
        // 是否跳过假期
        isJumpedOverHoliday: null,
        // 周五是否为周一预约取消前一天
        isAppointByFridayToCancel: null,
        // 周六是否可以取消周一的号
        isAppointBySaturdayToCancel: null,
        // 周日是否可以取消周一的号
        isAppointBySundayToCancel: null,
        // 假期是否可以取消假期后第一天的号
        isAppointByHolidayToCancel: null,
        // 假期前一天是否可以取消假日后第一天的号
        isAppointByTheDayBeforeHolidayToCancel: null,
        // 是否启用绿色通道
        isOpenGreenChannel: null,
        // 提前几天开启绿色通道
        inAdvanceDaysForGreenChannel: null,
        // 预约成功是否发送邮件
        isSendEmailForAppoint: null,
        // 预约成功发送账号
        appointEmailAccountId: null,
        // 预约成功邮件模板
        appointEmailTemplateId: null,
        // 预约成功是否发送短信
        isSendShortMessageForAppoint: null,
        // 预约成功短信模板
        appointShortMessageTemplateId: null,
        // 微信发送模板消息账号
        appointWeiXinAccountId: null,
        // 预约成功是否发送微信消息
        isSendWeiXinMessageForAppoint: null,
        // 预约成功微信消息模板
        appointWeiXinMessageTemplateId: null,
        // 患者操作预约作废时是否发送微信消息
        isSendWeiXinMessageForAppoint_InvalidByPatient: null,
        // 患者操作预约作废时微信消息模板
        weiXinMessageTemplateId_InvalidByPatient: null,
        // 患者操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByPatient: null,
        // 患者操作预约作废发送账号
        appointEmailAccountId_InvalidByPatient: null,
        // 患者操作预约作废邮件模板
        appointEmailTemplateId_InvalidByPatient: null,
        // 患者操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByPatient: null,
        // 患者操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByPatient: null,
        // 医生操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByDoctor: null,
        // 医生操作预约作废发送账号
        appointEmailAccountId_InvalidByDoctor: null,
        // 医生操作预约作废邮件模板
        appointEmailTemplateId_InvalidByDoctor: null,
        // 医生操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByDoctor: null,
        // 医生操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByDoctor: null,
        // 管理操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByAdmin: null,
        // 管理操作预约作废发送账号
        appointEmailAccountId_InvalidByAdmin: null,
        // 管理操作预约作废邮件模板
        appointEmailTemplateId_InvalidByAdmin: null,
        // 管理操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByAdmin: null,
        // 管理操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByAdmin: null,
        // 停诊操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByStop: null,
        // 停诊操作预约作废发送账号
        appointEmailAccountId_InvalidByStop: null,
        // 停诊操作预约作废邮件模板
        appointEmailTemplateId_InvalidByStop: null,
        // 停诊操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByStop: null,
        // 停诊操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByStop: null,
        // 过期预约作废时是否发送邮件(违约)
        isSendEmailForAppoint_InvalidByExpired: null,
        // 过期预约作废发送账号(违约)
        appointEmailAccountId_InvalidByExpired: null,
        // 过期预约作废邮件模板(违约)
        appointEmailTemplateId_InvalidByExpired: null,
        // 过期预约作废时是否发送短信(违约)
        isSendShortMessageForAppoint_InvalidByExpired: null,
        // 过期预约作废短信模板(违约)
        appointShortMessageTemplateId_InvalidByExpired: null,
        // 是否发送诊前提醒患者邮件
        isSendEmailForAppoint_RemindByPatient: null,
        // 诊前提醒患者发送账号
        appointEmailAccountId_RemindByPatient: null,
        // 诊前提醒患者邮件模板
        appointEmailTemplateId_RemindByPatient: null,
        // 是否发送诊前提醒患者短信
        isSendShortMessageForAppoint_RemindByPatient: null,
        // 诊前提醒患者短信模板
        appointShortMessageTemplateId_RemindByPatient: null,
        // 预约时间前几天截止取消预约
        inCutoffDaysForCancerAppoint: null,
        // 当天取消预约截止的时间
        inCutoffTimeForCancerAppoint: null,
        // 每月取消预约次数
        inMonthForCancelAppointCount: null,
        // 发送诊前提醒的时间
        inCutoffTimeForRemind: null,
        // 取消预约页面提示信息
        cancelAppointPageMessage: null,
        // 同一身份证待就诊条数
        sameIdCardNoSchedulingAppointNoTakeNumCount: null,
        // 同一天同一身份证可预约个数
        sameDayIdCardNoSchedulingAppointCount: null,
        // 同一时段同一身份证可预约个数
        sameTimeIdCardNoSchedulingAppointCount: null,
        // 同一天同一身份证同一科室可预约个数
        sameDayIdCardNoDepartmentSchedulingAppointCount: null,
        // 同一时段同一身份证同一科室可预约个数
        sameTimeIdCardNoDepartmentSchedulingAppointCount: null,
        // 预约须知
        schedulingAppointmentNotice: null,
        // 是否删除
        isDelete: null,
        // 预约地址简介
        schedulingAddressDescription: null,
        // 预约地址地图名称
        schedulingaddressMapName: null,
        // 预约地址地图坐标经纬度
        schedulingMapCoordinates: null,
        // 停诊操作预约作废时是否发送
        isSendWeiXinMessageForAppoint_InvalidByStop: null,
        // 过期预约作废时是否发送(违约)
        isSendWeiXinMessageForAppoint_InvalidByExpired: null,
        // 是否发送诊前提醒患者
        isSendWeiXinMessageForAppoint_RemindByPatient: null,
        // 复诊就诊卡是否必填
        isMustTreatmentCardNoForReferral: null,
        // 就诊卡号位数
        treatmentCardNoNum: null,
        // 支付宝发送模板消息账号
        appointAlipayAccountId: null,
        // 预约成功是否发送支付宝消息
        isSendAlipayMessageForAppoint: null,
        // 患者操作预约作废时是否发送支付宝消息
        isSendAlipayMessageForAppoint_InvalidByPatient: null,
        // 参保卡类别是否显示
        isShowAppointInsuredCardTypeId: null,
        // 参保卡类别是否必填
        isMustAppointInsuredCardTypeId: null,
        // 是否启用在线支付
        isOpenPayment: null,
        // 支付密钥
        paymentKey: null,
        // 支付地址
        paymentUrl: null,
        // 预约接口地址
        appointInterfaceUrl: null,
        // 是否必须在线支付
        isMustPayment: null,
        // 支付过期时间
        expiryMinutes: null,
        // 是否开启当日挂号
        isDefaultForDay: null,
        // 上午开启预约时间
        aMBeginTimeForDay: null,
        // 上午结束预约时间
        aMEndTimeForDay: null,
        // 下午开启预约时间
        pMBeginTimeForDay: null,
        // 下午结束预约时间
        pMEndTimeForDay: null,
        // 是否开启精准预约
        isAccurateReservation: null,
        // 精准预约地址
        accurateReservationUrl: null,
        // 精准预约上报地址
        accurateReservationReportUrl: null,
        // 精准预约公钥
        accurateReservationPubilcKey: null,
        // 精准预约未通过短信模板
        aRNoPassShortMessageTemplateId: null,
        // 精准预约等待审核短信模板
        aRWaitShortMessageTemplateId: null,
        // 是否开启图形验证码
        isOpenAppointValidateCode: null,
        // 是否必须微信预约
        isMustWeiXinAppoint: null,
        // 被替诊是否停诊
        isStopForReplaced: null,
        // 替诊是否可预约
        isAppointForReplace: null,
        // 是否随机放号
        isRandomToCancel: null,
        // 是否固定放号
        isFixedToCancel: null,
        // 取消后放号时间   单位分钟；随机放号：最后放号时间；固定放号：放号时间
        appointTimeToCancel: null,
        // 预约须知版本
        noticeVersion: null,
        // 复诊预约预约模板
        reVisitShortMessageTemplateId: null,
        // 复诊预约是否发送短信
        isSendShortMessageForReVisit: null,
        // 支付宝支付账号
        payAlipayAccountId: null,
        // 微信支付账号
        payWeiXinAccountId: null,
        // 当日挂号预约须知
        schedulingAppointmentNoticeForDay: null,
        // 支付患者类型
        payPatientTypeIds: null,
        // 当日预约成功是否发送短信
        isSendShortMessageForDayAppoint: null,
        // 当日预约成功短信模板
        appointShortMessageForDayTemplateId: null,
        // 患者操作预约作废时是否发送短信
        isSendShortMessageForDayAppoint_InvalidByPatient: null,
        // 患者操作预约作废短信模板
        appointShortMessageForDayTemplateId_InvalidByPatient: null,
        // 是否开启第三方支付
        isThirdPartyPay: null,
        // 是否开启第三方支付
        isOpenLockNum: null,
        // 第三方支付地址
        thirdPartyPayUrl: null,
        // 锁号患者类型
        lockPatientTypeIds: null,
        // 锁号患者
        lockPatientTypeId: null,
        // 是否开启特殊预约
        isOpenSpecialAppoint: null,
        // 特殊预约提前预约天数
        inAdvanceDaysForSpecialAppoint: null,
        // 是否开启分时预约
        isOpenPeriodAppointment: null,
        // 预约温馨提示
        appointmentReminder: null,
        // 是否单独显示当日挂号
        isSoleDefaultForDay: null,
        // 当日挂号患者类型
        defaultPatientTypeIds: null,
        // 中午开启预约时间
        noonBeginTimeForDay: null,
        // 中午结束预约时间
        noonEndTimeForDay: null,
        // 上夜开启预约时间
        upNightBeginTimeForDay: null,
        // 上夜结束预约时间
        upNightEndTimeForDay: null,
        // 下夜开启预约时间
        downNightBeginTimeForDay: null,
        // 下夜结束预约时间
        downNightEndTimeForDay: null,
        // 自费患者预约成功短信
        selfPaidSMS: null,
        // 医保患者预约成功短信
        medicalInsuranceSMS: null,
        // 是否开启实时出诊
        isOpenRealTimeSch: null,
        // 是否展示剩余号源数量
        isShowValuableNumber: null,
        // 特殊预约成功时是否发送短信
        isSendShortMessageForSpecialAppoint: null,
        // 特殊预约成功短信模板
        specialAppointShortMessageTemplateId: null,
        // 特殊预约取消时是否发送短信
        isSendShortMessageForSpecialAppoint_Invalid: null,
        // 特殊预约取消短信模板
        specialAppointShortMessageTemplateId_Invalid: null,
        // 提前几天可见   提前几天可见：如果设置了，提前N天可以看到，但是不一定能够预约，预约需要根据下面的 提前几天开启预约
        inAdvanceDaysForLook: null,
        // 是否开启医保结算
        isOpenMedicalSettlement: null,
        // 自费是否允许预约
        isSelfFeeOpenAppoint: null,
        // 医保是否允许自费挂号
        isMIOpenSelfFeeRegister: null,
        // 自费选择预约提示确认询问消息
        selfFeeConfirmMessage: null,
        // 医保选择挂号提示确认询问消息
        mIConfirmMessage: null,
        // 自费挂号提示消息
        selfFeeRemindMessage: null,
        // 医保预约提示消息
        mIRemindMessage: null,
        // 是否启用急诊挂号
        isOpenEmergency: null,
        // 是否开启微信小程序预约流调按钮
        isOpenVoteResult: null,
        // 表单填写页面
        voteItemId: null
      },
      // 表单验证
      formValidate: {
        // 名称
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
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
        this.$set(
          this.form,
          'opschedulingSettingId',
          newValue['opschedulingSettingId']
        );
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
    this.initEmail();
    this.initEmailTemplate();
    this.initShortMessageTemplate();
    this.initWxAccount();
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
        // 主键Id
        oPSchedulingSettingId: null,
        // 名称
        name: null,
        // 是否默认
        isDefault: null,
        // 是否启用预约挂号
        isOpenAppoint: null,
        // 是否启用手机预约挂号
        isOpenMobileAppoint: null,
        // 提前几天开启预约
        inAdvanceDaysForAppoint: null,
        // 当天开启的时间
        inAdvanceTimeForAppoint: null,
        // 提前几天截止预约
        inCutoffDaysForAppoint: null,
        // 当天截止的时间
        inCutoffTimeForAppoint: null,
        // 周五是否为周一预约前一天
        isAppointByFriday: null,
        // 周六是否可以预约周一的号
        isAppointBySaturday: null,
        // 周日是否可以预约周一的号
        isAppointBySunday: null,
        // 假期是否可以预约假日后第一天的号
        isAppointByHoliday: null,
        // 假期前一天是否可以预约假日后第一天的号
        isAppointByTheDayBeforeHoliday: null,
        // 是否跳过周六
        isJumpedOverSaturday: null,
        // 是否跳过周日
        isJumpedOverSunday: null,
        // 是否跳过假期
        isJumpedOverHoliday: null,
        // 周五是否为周一预约取消前一天
        isAppointByFridayToCancel: null,
        // 周六是否可以取消周一的号
        isAppointBySaturdayToCancel: null,
        // 周日是否可以取消周一的号
        isAppointBySundayToCancel: null,
        // 假期是否可以取消假期后第一天的号
        isAppointByHolidayToCancel: null,
        // 假期前一天是否可以取消假日后第一天的号
        isAppointByTheDayBeforeHolidayToCancel: null,
        // 是否启用绿色通道
        isOpenGreenChannel: null,
        // 提前几天开启绿色通道
        inAdvanceDaysForGreenChannel: null,
        // 预约成功是否发送邮件
        isSendEmailForAppoint: null,
        // 预约成功发送账号
        appointEmailAccountId: null,
        // 预约成功邮件模板
        appointEmailTemplateId: null,
        // 预约成功是否发送短信
        isSendShortMessageForAppoint: null,
        // 预约成功短信模板
        appointShortMessageTemplateId: null,
        // 微信发送模板消息账号
        appointWeiXinAccountId: null,
        // 预约成功是否发送微信消息
        isSendWeiXinMessageForAppoint: null,
        // 预约成功微信消息模板
        appointWeiXinMessageTemplateId: null,
        // 患者操作预约作废时是否发送微信消息
        isSendWeiXinMessageForAppoint_InvalidByPatient: null,
        // 患者操作预约作废时微信消息模板
        weiXinMessageTemplateId_InvalidByPatient: null,
        // 患者操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByPatient: null,
        // 患者操作预约作废发送账号
        appointEmailAccountId_InvalidByPatient: null,
        // 患者操作预约作废邮件模板
        appointEmailTemplateId_InvalidByPatient: null,
        // 患者操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByPatient: null,
        // 患者操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByPatient: null,
        // 医生操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByDoctor: null,
        // 医生操作预约作废发送账号
        appointEmailAccountId_InvalidByDoctor: null,
        // 医生操作预约作废邮件模板
        appointEmailTemplateId_InvalidByDoctor: null,
        // 医生操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByDoctor: null,
        // 医生操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByDoctor: null,
        // 管理操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByAdmin: null,
        // 管理操作预约作废发送账号
        appointEmailAccountId_InvalidByAdmin: null,
        // 管理操作预约作废邮件模板
        appointEmailTemplateId_InvalidByAdmin: null,
        // 管理操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByAdmin: null,
        // 管理操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByAdmin: null,
        // 停诊操作预约作废时是否发送邮件
        isSendEmailForAppoint_InvalidByStop: null,
        // 停诊操作预约作废发送账号
        appointEmailAccountId_InvalidByStop: null,
        // 停诊操作预约作废邮件模板
        appointEmailTemplateId_InvalidByStop: null,
        // 停诊操作预约作废时是否发送短信
        isSendShortMessageForAppoint_InvalidByStop: null,
        // 停诊操作预约作废短信模板
        appointShortMessageTemplateId_InvalidByStop: null,
        // 过期预约作废时是否发送邮件(违约)
        isSendEmailForAppoint_InvalidByExpired: null,
        // 过期预约作废发送账号(违约)
        appointEmailAccountId_InvalidByExpired: null,
        // 过期预约作废邮件模板(违约)
        appointEmailTemplateId_InvalidByExpired: null,
        // 过期预约作废时是否发送短信(违约)
        isSendShortMessageForAppoint_InvalidByExpired: null,
        // 过期预约作废短信模板(违约)
        appointShortMessageTemplateId_InvalidByExpired: null,
        // 是否发送诊前提醒患者邮件
        isSendEmailForAppoint_RemindByPatient: null,
        // 诊前提醒患者发送账号
        appointEmailAccountId_RemindByPatient: null,
        // 诊前提醒患者邮件模板
        appointEmailTemplateId_RemindByPatient: null,
        // 是否发送诊前提醒患者短信
        isSendShortMessageForAppoint_RemindByPatient: null,
        // 诊前提醒患者短信模板
        appointShortMessageTemplateId_RemindByPatient: null,
        // 预约时间前几天截止取消预约
        inCutoffDaysForCancerAppoint: null,
        // 当天取消预约截止的时间
        inCutoffTimeForCancerAppoint: null,
        // 每月取消预约次数
        inMonthForCancelAppointCount: null,
        // 发送诊前提醒的时间
        inCutoffTimeForRemind: null,
        // 取消预约页面提示信息
        cancelAppointPageMessage: null,
        // 同一身份证待就诊条数
        sameIdCardNoSchedulingAppointNoTakeNumCount: null,
        // 同一天同一身份证可预约个数
        sameDayIdCardNoSchedulingAppointCount: null,
        // 同一时段同一身份证可预约个数
        sameTimeIdCardNoSchedulingAppointCount: null,
        // 同一天同一身份证同一科室可预约个数
        sameDayIdCardNoDepartmentSchedulingAppointCount: null,
        // 同一时段同一身份证同一科室可预约个数
        sameTimeIdCardNoDepartmentSchedulingAppointCount: null,
        // 预约须知
        schedulingAppointmentNotice: null,
        // 是否删除
        isDelete: null,
        // 预约地址简介
        schedulingAddressDescription: null,
        // 预约地址地图名称
        schedulingaddressMapName: null,
        // 预约地址地图坐标经纬度
        schedulingMapCoordinates: null,
        // 停诊操作预约作废时是否发送
        isSendWeiXinMessageForAppoint_InvalidByStop: null,
        // 过期预约作废时是否发送(违约)
        isSendWeiXinMessageForAppoint_InvalidByExpired: null,
        // 是否发送诊前提醒患者
        isSendWeiXinMessageForAppoint_RemindByPatient: null,
        // 复诊就诊卡是否必填
        isMustTreatmentCardNoForReferral: null,
        // 就诊卡号位数
        treatmentCardNoNum: null,
        // 支付宝发送模板消息账号
        appointAlipayAccountId: null,
        // 预约成功是否发送支付宝消息
        isSendAlipayMessageForAppoint: null,
        // 患者操作预约作废时是否发送支付宝消息
        isSendAlipayMessageForAppoint_InvalidByPatient: null,
        // 参保卡类别是否显示
        isShowAppointInsuredCardTypeId: null,
        // 参保卡类别是否必填
        isMustAppointInsuredCardTypeId: null,
        // 是否启用在线支付
        isOpenPayment: null,
        // 支付密钥
        paymentKey: null,
        // 支付地址
        paymentUrl: null,
        // 预约接口地址
        appointInterfaceUrl: null,
        // 是否必须在线支付
        isMustPayment: null,
        // 支付过期时间
        expiryMinutes: null,
        // 是否开启当日挂号
        isDefaultForDay: null,
        // 上午开启预约时间
        aMBeginTimeForDay: null,
        // 上午结束预约时间
        aMEndTimeForDay: null,
        // 下午开启预约时间
        pMBeginTimeForDay: null,
        // 下午结束预约时间
        pMEndTimeForDay: null,
        // 是否开启精准预约
        isAccurateReservation: null,
        // 精准预约地址
        accurateReservationUrl: null,
        // 精准预约上报地址
        accurateReservationReportUrl: null,
        // 精准预约公钥
        accurateReservationPubilcKey: null,
        // 精准预约未通过短信模板
        aRNoPassShortMessageTemplateId: null,
        // 精准预约等待审核短信模板
        aRWaitShortMessageTemplateId: null,
        // 是否开启图形验证码
        isOpenAppointValidateCode: null,
        // 是否必须微信预约
        isMustWeiXinAppoint: null,
        // 被替诊是否停诊
        isStopForReplaced: null,
        // 替诊是否可预约
        isAppointForReplace: null,
        // 是否随机放号
        isRandomToCancel: null,
        // 是否固定放号
        isFixedToCancel: null,
        // 取消后放号时间   单位分钟；随机放号：最后放号时间；固定放号：放号时间
        appointTimeToCancel: null,
        // 预约须知版本
        noticeVersion: null,
        // 复诊预约预约模板
        reVisitShortMessageTemplateId: null,
        // 复诊预约是否发送短信
        isSendShortMessageForReVisit: null,
        // 支付宝支付账号
        payAlipayAccountId: null,
        // 微信支付账号
        payWeiXinAccountId: null,
        // 当日挂号预约须知
        schedulingAppointmentNoticeForDay: null,
        // 支付患者类型
        payPatientTypeIds: null,
        // 当日预约成功是否发送短信
        isSendShortMessageForDayAppoint: null,
        // 当日预约成功短信模板
        appointShortMessageForDayTemplateId: null,
        // 患者操作预约作废时是否发送短信
        isSendShortMessageForDayAppoint_InvalidByPatient: null,
        // 患者操作预约作废短信模板
        appointShortMessageForDayTemplateId_InvalidByPatient: null,
        // 是否开启第三方支付
        isThirdPartyPay: null,
        // 是否开启第三方支付
        isOpenLockNum: null,
        // 第三方支付地址
        thirdPartyPayUrl: null,
        // 锁号患者类型
        lockPatientTypeIds: null,
        // 锁号患者
        lockPatientTypeId: null,
        // 是否开启特殊预约
        isOpenSpecialAppoint: null,
        // 特殊预约提前预约天数
        inAdvanceDaysForSpecialAppoint: null,
        // 是否开启分时预约
        isOpenPeriodAppointment: null,
        // 预约温馨提示
        appointmentReminder: null,
        // 是否单独显示当日挂号
        isSoleDefaultForDay: null,
        // 当日挂号患者类型
        defaultPatientTypeIds: null,
        // 中午开启预约时间
        noonBeginTimeForDay: null,
        // 中午结束预约时间
        noonEndTimeForDay: null,
        // 上夜开启预约时间
        upNightBeginTimeForDay: null,
        // 上夜结束预约时间
        upNightEndTimeForDay: null,
        // 下夜开启预约时间
        downNightBeginTimeForDay: null,
        // 下夜结束预约时间
        downNightEndTimeForDay: null,
        // 自费患者预约成功短信
        selfPaidSMS: null,
        // 医保患者预约成功短信
        medicalInsuranceSMS: null,
        // 是否开启实时出诊
        isOpenRealTimeSch: null,
        // 是否展示剩余号源数量
        isShowValuableNumber: null,
        // 特殊预约成功时是否发送短信
        isSendShortMessageForSpecialAppoint: null,
        // 特殊预约成功短信模板
        specialAppointShortMessageTemplateId: null,
        // 特殊预约取消时是否发送短信
        isSendShortMessageForSpecialAppoint_Invalid: null,
        // 特殊预约取消短信模板
        specialAppointShortMessageTemplateId_Invalid: null,
        // 提前几天可见   提前几天可见：如果设置了，提前N天可以看到，但是不一定能够预约，预约需要根据下面的 提前几天开启预约
        inAdvanceDaysForLook: null,
        // 是否开启医保结算
        isOpenMedicalSettlement: null,
        // 自费是否允许预约
        isSelfFeeOpenAppoint: null,
        // 医保是否允许自费挂号
        isMIOpenSelfFeeRegister: null,
        // 自费选择预约提示确认询问消息
        selfFeeConfirmMessage: null,
        // 医保选择挂号提示确认询问消息
        mIConfirmMessage: null,
        // 自费挂号提示消息
        selfFeeRemindMessage: null,
        // 医保预约提示消息
        mIRemindMessage: null,
        // 是否开启微信小程序预约流调按钮
        isOpenVoteResult: null,
        // 表单填写页面
        voteItemId: null
      };
      this.$refs['form'].resetFields();
    },
    async add () {
      this.$Spin.show();
      let res = await oPSchedulingSettingApi.addOPSchedulingSetting(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async update () {
      this.$Spin.show();
      let res = await oPSchedulingSettingApi.updateOPSchedulingSetting(
        this.form
      );
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit('on-form-close');
    },
    async initEmail () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await EmailAccountApi.queryEmailAccount(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.emailAccountId,
            label: item.title
          });
        });
        this.emailAccountListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initEmailTemplate () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await EmailTemplateApi.queryEmailTemplate(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.emailTemplateId,
            label: item.name
          });
        });
        this.emailTemplateListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initShortMessageTemplate () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await ShortMessageTemplateApi.queryShortMessageTemplate(
          params
        );
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.shortMessageTemplateId,
            label: item.name
          });
        });
        this.shortMessageTemplateListData = list;
      } finally {
        this.$Spin.hide();
      }
    },
    async initWxAccount () {
      this.$Spin.show();
      try {
        let params = {
          pageNum: 1,
          pageSize: 500
        };
        let result = await wxAccountApi.queryWeixinaccount(params);
        let datas = result.data;
        let list = [];
        datas.list.map((item) => {
          list.push({
            value: item.weiXinAccountId,
            label: item.name
          });
        });
        this.wxAccountListData = list;
      } finally {
        this.$Spin.hide();
      }
    }
  }
};
</script>
