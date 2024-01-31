import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const clinicSchedulingApi = {
  // 添加在线问诊日排班 @author 54Doctor
  addClinicScheduling: (data) => {
    return postAxios('/admin/clinicScheduling/add', data);
  },
  // 分页查询在线问诊日排班 @author 54Doctor
  queryClinicScheduling: (data) => {
    return postAxios('/admin/clinicScheduling/page/query', data);
  },
  // 删除在线问诊日排班 @author 54Doctor
  deleteClinicScheduling: (data) => {
    return postAxios('/admin/clinicScheduling/delete/' + data);
  },
  // 批量删除在线问诊日排班 @author 54Doctor
  batchDeleteClinicScheduling: (clinicSchedulingIdList) => {
    return postAxios('/admin/clinicScheduling/deleteByIds', clinicSchedulingIdList);
  },
  // 修改在线问诊日排班  @author 54Doctor
  updateClinicScheduling: (data) => {
    return postAxios('/admin/clinicScheduling/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/clinicScheduling/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (clinicSchedulingIdList) => {
    return postDownloadAxios('/admin/clinicScheduling/export/batch', clinicSchedulingIdList);
  }
};
