import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const locationBuildingApi = {
    // 添加院区建筑 @author DuanJianBo
    addLocationBuilding: (data) => {
        return postAxios('/admin/locationBuilding/add', data);
    },
    // 分页查询院区建筑 @author DuanJianBo
    queryLocationBuilding: (data) => {
        return postAxios('/admin/locationBuilding/page/query', data);
    },
    // 删除院区建筑 @author DuanJianBo
    deleteLocationBuilding: (data) => {
        return postAxios('/admin/locationBuilding/delete/' + data);
    },
    // 批量删除院区建筑 @author DuanJianBo
    batchDeleteLocationBuilding: (locationBuildingIdList) => {
        return postAxios('/admin/locationBuilding/deleteByIds', locationBuildingIdList);
    },
    // 修改院区建筑  @author DuanJianBo
    updateLocationBuilding: (data) => {
        return postAxios('/admin/locationBuilding/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/locationBuilding/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (locationBuildingIdList) => {
        return postDownloadAxios('/locationBuilding/export/batch', locationBuildingIdList);
    },
    // 查询建筑列表 @author DuanJianBo
    queryLocationBuildingist: (data) => {
        return postAxios('/admin/locationBuilding/query/list', data);
    },
};
