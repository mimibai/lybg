import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const clinicSettingApi = {
  // 添加在线问诊配置表 @author 54Doctor
  addClinicSetting: (data) => {
    return postAxios('/admin/clinicSetting/add', data);
  },
  // 分页查询在线问诊配置表 @author 54Doctor
  queryClinicSetting: (data) => {
    return postAxios('/admin/clinicSetting/page/query', data);
  },
  // 删除在线问诊配置表 @author 54Doctor
  deleteClinicSetting: (data) => {
    return postAxios('/admin/clinicSetting/delete/' + data);
  },
  // 批量删除在线问诊配置表 @author 54Doctor
  batchDeleteClinicSetting: (clinicSettingIdList) => {
    return postAxios('/admin/clinicSetting/deleteByIds', clinicSettingIdList);
  },
  // 修改在线问诊配置表  @author 54Doctor
  updateClinicSetting: (data) => {
    return postAxios('/admin/clinicSetting/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/clinicSetting/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (clinicSettingIdList) => {
    return postDownloadAxios('/admin/clinicSetting/export/batch', clinicSettingIdList);
  }
};
