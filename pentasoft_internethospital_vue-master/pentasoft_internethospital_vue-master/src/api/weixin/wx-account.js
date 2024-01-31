import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxAccountApi = {
    // 添加 @author Stagnant
    addWeixinaccount: (data) => {
        return postAxios('/admin/weixinaccount/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinaccount: (data) => {
        return postAxios('/admin/weixinaccount/page/query', data);
    },
    // 删除 @author Stagnant
    deleteWeixinaccount: (data) => {
        return postAxios('/admin/weixinaccount/delete/'+ data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinaccount: (idList) => {
        return postAxios('/admin/weixinaccount/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinaccount: (data) => {
        return postAxios('/admin/weixinaccount/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/weixinaccount/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinaccount/export/batch', idList);
    },
};
