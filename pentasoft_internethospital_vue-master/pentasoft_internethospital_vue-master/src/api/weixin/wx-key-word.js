import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxKeyWordApi = {
    // 添加 @author Stagnant
    addWeixinkeyword: (data) => {
        return postAxios('/admin/weixinkeyword/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinkeyword: (data) => {
        return postAxios('/admin/weixinkeyword/page/query', data);
    },
    // 删除
    deleteWeixinkeyword: (data) => {
        return postAxios('/admin/weixinkeyword/delete/' + data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinkeyword: (idList) => {
        return postAxios('/admin/weixinkeyword/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinkeyword: (data) => {
        return postAxios('/admin/weixinkeyword/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/weixinkeyword/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinkeyword/export/batch', idList);
    },
};
