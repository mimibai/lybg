import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const appPageModuleApi = {
  // 添加 @author 54Doctor
  addAppPageModule: (data) => {
    return postAxios('/admin/appPageModule/add', data);
  },
  // 分页查询 @author 54Doctor
  queryAppPageModule: (data) => {
    return postAxios('/admin/appPageModule/page/query', data);
  },
  // 获取实体 @author 54Doctor
  getAppPageModule: (data) => {
    return postAxios('/admin/appPageModule/get/' + data);
  },
  // 删除 @author 54Doctor
  deleteAppPageModule: (data) => {
    return postAxios('/admin/appPageModule/delete/' + data);
  },
  // 批量删除 @author 54Doctor
  batchDeleteAppPageModule: (appPageModuleIdList) => {
    return postAxios('/admin/appPageModule/deleteByIds', appPageModuleIdList);
  },
  // 修改  @author 54Doctor
  updateAppPageModule: (data) => {
    return postAxios('/admin/appPageModule/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/appPageModule/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (appPageModuleIdList) => {
    return postDownloadAxios('/admin/appPageModule/export/batch', appPageModuleIdList);
  },
  // 移动小程序模块数据表  @author 54Doctor
  moveAppPageModule: (id, direction) => {
    return postAxios('/admin/appPageModule/move/' + direction + '/' + id);
},
};
