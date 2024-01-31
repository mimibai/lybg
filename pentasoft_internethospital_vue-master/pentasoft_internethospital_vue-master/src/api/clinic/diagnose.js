import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const diagnoseApi = {
  // 添加诊断 @author 54Doctor
  addDiagnose: (data) => {
    return postAxios('/admin/diagnose/add', data);
  },
  // 分页查询诊断 @author 54Doctor
  queryDiagnose: (data) => {
    return postAxios('/admin/diagnose/page/query', data);
  },
  // 删除诊断 @author 54Doctor
  deleteDiagnose: (data) => {
    return postAxios('/admin/diagnose/delete/' + data);
  },
  // 批量删除诊断 @author 54Doctor
  batchDeleteDiagnose: (diagnoseIdList) => {
    return postAxios('/admin/diagnose/deleteByIds', diagnoseIdList);
  },
  // 修改诊断  @author 54Doctor
  updateDiagnose: (data) => {
    return postAxios('/admin/diagnose/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/diagnose/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (diagnoseIdList) => {
    return postDownloadAxios('/admin/diagnose/export/batch', diagnoseIdList);
  }
};
