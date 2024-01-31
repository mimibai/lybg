import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const drugApi = {
  // 添加药品 @author 54Doctor
  addDrug: (data) => {
    return postAxios('/admin/drug/add', data);
  },
  // 分页查询药品 @author 54Doctor
  queryDrug: (data) => {
    return postAxios('/admin/drug/page/query', data);
  },
  // 删除药品 @author 54Doctor
  deleteDrug: (data) => {
    return postAxios('/admin/drug/delete/' + data);
  },
  // 批量删除药品 @author 54Doctor
  batchDeleteDrug: (drugIdList) => {
    return postAxios('/admin/drug/deleteByIds', drugIdList);
  },
  // 修改药品  @author 54Doctor
  updateDrug: (data) => {
    return postAxios('/admin/drug/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/drug/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (drugIdList) => {
    return postDownloadAxios('/admin/drug/export/batch', drugIdList);
  }
};
