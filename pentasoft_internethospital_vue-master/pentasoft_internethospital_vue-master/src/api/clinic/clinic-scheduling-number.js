import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const clinicSchedulingNumberApi = {
  // 添加在线问诊号源 @author 54Doctor
  addClinicSchedulingNumber: (data) => {
    return postAxios('/admin/clinicSchedulingNumber/add', data);
  },
  // 分页查询在线问诊号源 @author 54Doctor
  queryClinicSchedulingNumber: (data) => {
    return postAxios('/admin/clinicSchedulingNumber/page/query', data);
  },
  // 删除在线问诊号源 @author 54Doctor
  deleteClinicSchedulingNumber: (data) => {
    return postAxios('/admin/clinicSchedulingNumber/delete/' + data);
  },
  // 批量删除在线问诊号源 @author 54Doctor
  batchDeleteClinicSchedulingNumber: (clinicSchedulingNumberIdList) => {
    return postAxios('/admin/clinicSchedulingNumber/deleteByIds', clinicSchedulingNumberIdList);
  },
  // 修改在线问诊号源  @author 54Doctor
  updateClinicSchedulingNumber: (data) => {
    return postAxios('/admin/clinicSchedulingNumber/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/clinicSchedulingNumber/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (clinicSchedulingNumberIdList) => {
    return postDownloadAxios('/admin/clinicSchedulingNumber/export/batch', clinicSchedulingNumberIdList);
  }
};
