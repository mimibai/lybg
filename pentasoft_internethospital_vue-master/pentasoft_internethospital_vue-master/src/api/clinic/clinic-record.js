import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const clinicRecordApi = {
  // 添加在线问诊记录 @author 54Doctor
  addClinicRecord: (data) => {
    return postAxios('/admin/clinicRecord/add', data);
  },
  // 分页查询在线问诊记录 @author 54Doctor
  queryClinicRecord: (data) => {
    return postAxios('/admin/clinicRecord/page/query', data);
  },
  // 删除在线问诊记录 @author 54Doctor
  deleteClinicRecord: (data) => {
    return postAxios('/admin/clinicRecord/delete/' + data);
  },
  // 批量删除在线问诊记录 @author 54Doctor
  batchDeleteClinicRecord: (clinicRecordIdList) => {
    return postAxios('/admin/clinicRecord/deleteByIds', clinicRecordIdList);
  },
  // 修改在线问诊记录  @author 54Doctor
  updateClinicRecord: (data) => {
    return postAxios('/admin/clinicRecord/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/clinicRecord/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (clinicRecordIdList) => {
    return postDownloadAxios('/admin/clinicRecord/export/batch', clinicRecordIdList);
  }
};
