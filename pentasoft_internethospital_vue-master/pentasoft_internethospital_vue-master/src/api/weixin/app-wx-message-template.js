import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const appWxMessageTemplateApi = {
    // 添加 @author Stagnant
    addAppweixinmessagetemplate: (data) => {
        return postAxios('/admin/appweixinmessagetemplate/add', data);
    },
    // 分页查询 @author Stagnant
    queryAppweixinmessagetemplate: (data) => {
        return postAxios('/admin/appweixinmessagetemplate/page/query', data);
    },
    // 删除 @author Stagnant
    deleteAppweixinmessagetemplate: (data) => {
        return postAxios('/admin/appweixinmessagetemplate/delete/' + data);
    },
    // 批量删除 @author Stagnant
    batchDeleteAppweixinmessagetemplate: (idList) => {
        return postAxios('/admin/appweixinmessagetemplate/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateAppweixinmessagetemplate: (data) => {
        return postAxios('/admin/appweixinmessagetemplate/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/appweixinmessagetemplate/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/appweixinmessagetemplate/export/batch', idList);
    },
};
