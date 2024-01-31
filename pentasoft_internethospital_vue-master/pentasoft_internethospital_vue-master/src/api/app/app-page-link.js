import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const appPageLinkApi = {
  // 添加小程序页面路径 @author 54Doctor
  addAppPageLink: (data) => {
    return postAxios('/admin/appPageLink/add', data);
  },
  // 分页查询小程序页面路径 @author 54Doctor
  queryAppPageLink: (data) => {
    return postAxios('/admin/appPageLink/page/query', data);
  },
  // 删除小程序页面路径 @author 54Doctor
  deleteAppPageLink: (data) => {
    return postAxios('/admin/appPageLink/delete/' + data);
  },
  // 批量删除小程序页面路径 @author 54Doctor
  batchDeleteAppPageLink: (appPageLinkIdList) => {
    return postAxios('/admin/appPageLink/deleteByIds', appPageLinkIdList);
  },
  // 修改小程序页面路径  @author 54Doctor
  updateAppPageLink: (data) => {
    return postAxios('/admin/appPageLink/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/appPageLink/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (appPageLinkIdList) => {
    return postDownloadAxios('/admin/appPageLink/export/batch', appPageLinkIdList);
  }
};
