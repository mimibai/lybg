import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const appPageModuleStyleApi = {
  // 添加 @author 54Doctor
  addAppPageModuleStyle: (data) => {
    return postAxios('/admin/appPageModuleStyle/add', data);
  },
  // 分页查询 @author 54Doctor
  queryAppPageModuleStyle: (data) => {
    return postAxios('/admin/appPageModuleStyle/page/query', data);
  },
  // 删除 @author 54Doctor
  deleteAppPageModuleStyle: (data) => {
    return postAxios('/admin/appPageModuleStyle/delete/' + data);
  },
  // 批量删除 @author 54Doctor
  batchDeleteAppPageModuleStyle: (appPageModuleStyleIdList) => {
    return postAxios('/admin/appPageModuleStyle/deleteByIds', appPageModuleStyleIdList);
  },
  // 修改  @author 54Doctor
  updateAppPageModuleStyle: (data) => {
    return postAxios('/admin/appPageModuleStyle/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/appPageModuleStyle/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (appPageModuleStyleIdList) => {
    return postDownloadAxios('/admin/appPageModuleStyle/export/batch', appPageModuleStyleIdList);
  }
};
