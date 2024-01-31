import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const appPageModuleDataApi = {
    // 添加小程序模块数据表 @author 54Doctor
    addAppPageModuleData: (data) => {
        return postAxios('/admin/appPageModuleData/add', data);
    },
    // 分页查询小程序模块数据表 @author 54Doctor
    queryAppPageModuleData: (data) => {
        return postAxios('/admin/appPageModuleData/page/query', data);
    },
    // 删除小程序模块数据表 @author 54Doctor
    deleteAppPageModuleData: (data) => {
        return postAxios('/admin/appPageModuleData/delete/' + data);
    },
    // 批量删除小程序模块数据表 @author 54Doctor
    batchDeleteAppPageModuleData: (appPageModuleDataIdList) => {
        return postAxios('/admin/appPageModuleData/deleteByIds', appPageModuleDataIdList);
    },
    // 修改小程序模块数据表  @author 54Doctor
    updateAppPageModuleData: (data) => {
        return postAxios('/admin/appPageModuleData/update', data);
    },
    // 导出全部  @author 54Doctor
    exportAll: (data) => {
        return postDownloadAxios('/admin/appPageModuleData/export/all', data);
    },
    // 批量导出  @author 54Doctor
    batchExport: (appPageModuleDataIdList) => {
        return postDownloadAxios('/admin/appPageModuleData/export/batch', appPageModuleDataIdList);
    },
    // 移动小程序模块数据表  @author 54Doctor
    moveAppPageModuleData: (id, direction) => {
        return postAxios('/admin/appPageModuleData/move/' + direction + '/' + id);
    },
};
