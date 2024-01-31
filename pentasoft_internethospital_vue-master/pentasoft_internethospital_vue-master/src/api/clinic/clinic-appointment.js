import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const clinicAppointmentApi = {
  // 添加 @author 54Doctor
  addClinicAppointment: (data) => {
    return postAxios('/admin/clinicAppointment/add', data);
  },
  // 分页查询 @author 54Doctor
  queryClinicAppointment: (data) => {
    return postAxios('/admin/clinicAppointment/page/query', data);
  },
  // 删除 @author 54Doctor
  deleteClinicAppointment: (data) => {
    return postAxios('/admin/clinicAppointment/delete/' + data);
  },
  // 批量删除 @author 54Doctor
  batchDeleteClinicAppointment: (clinicAppointmentIdList) => {
    return postAxios('/admin/clinicAppointment/deleteByIds', clinicAppointmentIdList);
  },
  // 修改  @author 54Doctor
  updateClinicAppointment: (data) => {
    return postAxios('/admin/clinicAppointment/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/clinicAppointment/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (clinicAppointmentIdList) => {
    return postDownloadAxios('/admin/clinicAppointment/export/batch', clinicAppointmentIdList);
  }
};
