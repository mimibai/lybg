import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const clinicPrescriptApi = {
  // 添加复诊开药表 @author 54Doctor
  addClinicPrescript: (data) => {
    return postAxios('/admin/clinicPrescript/add', data);
  },
  // 分页查询复诊开药表 @author 54Doctor
  queryClinicPrescript: (data) => {
    return postAxios('/admin/clinicPrescript/page/query', data);
  },
  // 删除复诊开药表 @author 54Doctor
  deleteClinicPrescript: (data) => {
    return postAxios('/admin/clinicPrescript/delete/' + data);
  },
  // 批量删除复诊开药表 @author 54Doctor
  batchDeleteClinicPrescript: (clinicPrescriptIdList) => {
    return postAxios('/admin/clinicPrescript/deleteByIds', clinicPrescriptIdList);
  },
  // 修改复诊开药表  @author 54Doctor
  updateClinicPrescript: (data) => {
    return postAxios('/admin/clinicPrescript/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/clinicPrescript/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (clinicPrescriptIdList) => {
    return postDownloadAxios('/admin/clinicPrescript/export/batch', clinicPrescriptIdList);
  }
};
