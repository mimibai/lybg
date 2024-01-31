import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const drugDeliveryRouteApi = {
  // 添加给药途径 @author 54Doctor
  addDrugDeliveryRoute: (data) => {
    return postAxios('/admin/drugDeliveryRoute/add', data);
  },
  // 分页查询给药途径 @author 54Doctor
  queryDrugDeliveryRoute: (data) => {
    return postAxios('/admin/drugDeliveryRoute/page/query', data);
  },
  // 删除给药途径 @author 54Doctor
  deleteDrugDeliveryRoute: (data) => {
    return postAxios('/admin/drugDeliveryRoute/delete/' + data);
  },
  // 批量删除给药途径 @author 54Doctor
  batchDeleteDrugDeliveryRoute: (drugDeliveryRouteIdList) => {
    return postAxios('/admin/drugDeliveryRoute/deleteByIds', drugDeliveryRouteIdList);
  },
  // 修改给药途径  @author 54Doctor
  updateDrugDeliveryRoute: (data) => {
    return postAxios('/admin/drugDeliveryRoute/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/admin/drugDeliveryRoute/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (drugDeliveryRouteIdList) => {
    return postDownloadAxios('/admin/drugDeliveryRoute/export/batch', drugDeliveryRouteIdList);
  }
};
