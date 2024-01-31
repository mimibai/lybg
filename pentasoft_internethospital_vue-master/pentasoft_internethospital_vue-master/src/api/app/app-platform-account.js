import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const appPlatformAccountApi = {
    // 添加应用 @author 54Doctor
    addAppPlatformAccount: (data) => {
        return postAxios('/admin/appPlatformAccount/add', data);
    },
    // 分页查询应用 @author 54Doctor
    queryAppPlatformAccount: (data) => {
        return postAxios('/admin/appPlatformAccount/page/query', data);
    },
    // 删除应用 @author 54Doctor
    deleteAppPlatformAccount: (data) => {
        return postAxios('/admin/appPlatformAccount/delete/' + data);
    },
    // 批量删除应用 @author 54Doctor
    batchDeleteAppPlatformAccount: (appPlatformAccountIdList) => {
        return postAxios('/admin/appPlatformAccount/deleteByIds', appPlatformAccountIdList);
    },
    // 修改应用  @author 54Doctor
    updateAppPlatformAccount: (data) => {
        return postAxios('/admin/appPlatformAccount/update', data);
    },
    // 导出全部  @author 54Doctor
    exportAll: (data) => {
        return postDownloadAxios('/admin/appPlatformAccount/export/all', data);
    },
    // 批量导出  @author 54Doctor
    batchExport: (appPlatformAccountIdList) => {
        return postDownloadAxios('/admin/appPlatformAccount/export/batch', appPlatformAccountIdList);
    },
};
