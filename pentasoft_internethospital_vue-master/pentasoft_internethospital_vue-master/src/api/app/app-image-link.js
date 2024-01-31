import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const appImageLinkApi = {
    // 添加小程序图片 @author 54Doctor
    addAppImageLink: (data) => {
        return postAxios('/admin/appImageLink/add', data);
    },
    // 分页查询小程序图片 @author 54Doctor
    queryAppImageLink: (data) => {
        return postAxios('/admin/appImageLink/page/query', data);
    },
    // 删除小程序图片 @author 54Doctor
    deleteAppImageLink: (data) => {
        return postAxios('/admin/appImageLink/delete/' + data);
    },
    // 批量删除小程序图片 @author 54Doctor
    batchDeleteAppImageLink: (appImageLinkIdList) => {
        return postAxios('/admin/appImageLink/deleteByIds', appImageLinkIdList);
    },
    // 修改小程序图片  @author 54Doctor
    updateAppImageLink: (data) => {
        return postAxios('/admin/appImageLink/update', data);
    },
    // 导出全部  @author 54Doctor
    exportAll: (data) => {
        return postDownloadAxios('/admin/appImageLink/export/all', data);
    },
    // 批量导出  @author 54Doctor
    batchExport: (appImageLinkIdList) => {
        return postDownloadAxios('/admin/appImageLink/export/batch', appImageLinkIdList);
    },
};
