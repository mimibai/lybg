import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxInputContentApi = {
    // 添加 @author Stagnant
    addWeixininputcontent: (data) => {
        return postAxios('/admin/weixininputcontent/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixininputcontent: (data) => {
        return postAxios('/admin/weixininputcontent/page/query', data);
    },
    // 删除 @author Stagnant
    deleteWeixininputcontent: (data) => {
        return postAxios('/admin/weixininputcontent/delete/' + data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixininputcontent: (idList) => {
        return postAxios('/admin/weixininputcontent/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixininputcontent: (data) => {
        return postAxios('/admin/weixininputcontent/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/weixininputcontent/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixininputcontent/export/batch', idList);
    },
};
