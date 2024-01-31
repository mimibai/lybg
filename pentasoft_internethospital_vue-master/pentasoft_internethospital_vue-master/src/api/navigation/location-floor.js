import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const locationFloorApi = {
    // 添加院区建筑楼层 @author DuanJianBo
    addLocationFloor: (data) => {
        return postAxios('/admin/locationFloor/add', data);
    },
    // 分页查询院区建筑楼层 @author DuanJianBo
    queryLocationFloor: (data) => {
        return postAxios('/admin/locationFloor/page/query', data);
    },
    // 删除院区建筑楼层 @author DuanJianBo
    deleteLocationFloor: (data) => {
        return postAxios('/admin/locationFloor/delete/' + data);
    },
    // 批量删除院区建筑楼层 @author DuanJianBo
    batchDeleteLocationFloor: (locationFloorIdList) => {
        return postAxios('/admin/locationFloor/deleteByIds', locationFloorIdList);
    },
    // 修改院区建筑楼层  @author DuanJianBo
    updateLocationFloor: (data) => {
        return postAxios('/admin/locationFloor/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/locationFloor/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (locationFloorIdList) => {
        return postDownloadAxios('/locationFloor/export/batch', locationFloorIdList);
    },
    // 查询楼层列表 @author DuanJianBo
    queryLocationFloorList: (data) => {
        return postAxios('/admin/locationFloor/query/list', data);
    },
};
