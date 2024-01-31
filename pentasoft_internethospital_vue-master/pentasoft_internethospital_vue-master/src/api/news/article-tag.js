import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const articleTagApi = {
    // 添加 @author Stagnant
    addArticletag: (data) => {
        return postAxios('/admin/articletag/add', data);
    },
    // 分页查询 @author Stagnant
    queryArticletag: (data) => {
        return postAxios('/admin/articletag/page/query', data);
    },
    // 批量删除 @author Stagnant
    batchDeleteArticletag: (idList) => {
        return postAxios('/admin/articletag/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateArticletag: (data) => {
        return postAxios('/admin/articletag/update',data);
    },
    // 导出全部  @author Stagnant
    exportAll:(data)=>{
        return postDownloadAxios('/articletag/export/all',data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/articletag/export/batch', idList);
    },
};
