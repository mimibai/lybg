import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const appSettingApi = {
    // 添加小程序配置表 @author DuanJianBo
    addAppSetting: (data) => {
        return postAxios('/admin/appSetting/add', data);
    },
    // 分页查询小程序配置表 @author DuanJianBo
    queryAppSetting: (data) => {
        return postAxios('/admin/appSetting/page/query', data);
    },
    // 删除小程序配置表 @author DuanJianBo
    deleteAppSetting: (data) => {
        return postAxios('/admin/appSetting/delete/' + data);
    },
    // 批量删除小程序配置表 @author DuanJianBo
    batchDeleteAppSetting: (appSettingIdList) => {
        return postAxios('/admin/appSetting/deleteByIds', appSettingIdList);
    },
    // 修改小程序配置表  @author DuanJianBo
    updateAppSetting: (data) => {
        return postAxios('/admin/appSetting/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/appSetting/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (appSettingIdList) => {
        return postDownloadAxios('/appSetting/export/batch', appSettingIdList);
    },
};
