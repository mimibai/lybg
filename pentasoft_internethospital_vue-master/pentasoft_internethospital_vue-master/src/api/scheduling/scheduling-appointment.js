import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const schedulingAppointmentApi = {
    // 添加预约挂号 @author DuanJianBo
    addSchedulingAppointment: (data) => {
        return postAxios('/admin/schedulingAppointment/add', data);
    },
    // 分页查询预约挂号 @author DuanJianBo
    querySchedulingAppointment: (data) => {
        return postAxios('/admin/schedulingAppointment/page/query', data);
    },
    // 删除预约挂号 @author DuanJianBo
    deleteSchedulingAppointment: (data) => {
        return postAxios('/admin/schedulingAppointment/delete/' + data);
    },
    // 批量删除预约挂号 @author DuanJianBo
    batchDeleteSchedulingAppointment: (schedulingAppointmentIdList) => {
        return postAxios('/admin/schedulingAppointment/deleteByIds', schedulingAppointmentIdList);
    },
    // 修改预约挂号  @author DuanJianBo
    updateSchedulingAppointment: (data) => {
        return postAxios('/admin/schedulingAppointment/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/schedulingAppointment/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (schedulingAppointmentIdList) => {
        return postDownloadAxios('/schedulingAppointment/export/batch', schedulingAppointmentIdList);
    },
    // 批量 登记取号 @author DuanJianBo
    batchRegistered: (data) => {
        return postAxios('/admin/schedulingAppointment/batchRegistered', data);
    },
    // 批量 登记取消 @author DuanJianBo
    batchInvalid: (data) => {
        return postAxios('/admin/schedulingAppointment/batchInvalid', data);
    },
};
