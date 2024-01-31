import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const locationRoomApi = {
    // 添加院区建筑楼层房间 @author DuanJianBo
    addLocationRoom: (data) => {
        return postAxios('/admin/locationRoom/add', data);
    },
    // 分页查询院区建筑楼层房间 @author DuanJianBo
    queryLocationRoom: (data) => {
        return postAxios('/admin/locationRoom/page/query', data);
    },
    // 删除院区建筑楼层房间 @author DuanJianBo
    deleteLocationRoom: (data) => {
        return postAxios('/admin/locationRoom/delete/' + data);
    },
    // 批量删除院区建筑楼层房间 @author DuanJianBo
    batchDeleteLocationRoom: (locationRoomIdList) => {
        return postAxios('/admin/locationRoom/deleteByIds', locationRoomIdList);
    },
    // 修改院区建筑楼层房间  @author DuanJianBo
    updateLocationRoom: (data) => {
        return postAxios('/admin/locationRoom/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/locationRoom/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (locationRoomIdList) => {
        return postDownloadAxios('/locationRoom/export/batch', locationRoomIdList);
    },
    // 查询病房列表 @author DuanJianBo
    queryLocationRoomList: (data) => {
        return postAxios('/admin/locationRoom/query/list', data);
    },
};
