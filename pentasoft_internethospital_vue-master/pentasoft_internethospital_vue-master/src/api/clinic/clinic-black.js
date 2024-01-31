import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const clinicBlackApi = {
  // 添加在线问诊黑名单 @author 54Doctor
  addClinicBlack: (data) => {
    return postAxios('/admin/clinicBlack/add', data);
  },
  // 分页查询在线问诊黑名单 @author 54Doctor
  queryClinicBlack: (data) => {
    return postAxios('/admin/clinicBlack/page/query', data);
  },
  // 删除在线问诊黑名单 @author 54Doctor
  deleteClinicBlack: (data) => {
    return postAxios('/admin/clinicBlack/delete/' + data);
  },
  // 批量删除在线问诊黑名单 @author 54Doctor
  batchDeleteClinicBlack: (clinicBlackIdList) => {
    return postAxios('/admin/clinicBlack/deleteByIds', clinicBlackIdList);
  },
  // 修改在线问诊黑名单  @author 54Doctor
  updateClinicBlack: (data) => {
    return postAxios('/admin/clinicBlack/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/clinicBlack/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (clinicBlackIdList) => {
    return postDownloadAxios('/admin/clinicBlack/export/batch', clinicBlackIdList);
  }
};
