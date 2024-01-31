import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const WxKeyWordNewApi = {
    // 添加 @author Stagnant
    addWeixinkeywordnew: (data) => {
        return postAxios('/admin/weixinkeywordnew/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinkeywordnew: (data) => {
        return postAxios('/admin/weixinkeywordnew/page/query', data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinkeywordnew: (idList) => {
        return postAxios('/admin/weixinkeywordnew/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinkeywordnew: (data) => {
        return postAxios('/admin/weixinkeywordnew/update',data);
    },
    // 导出全部  @author Stagnant
    exportAll:(data)=>{
        return postDownloadAxios('/weixinkeywordnew/export/all',data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinkeywordnew/export/batch', idList);
    },
};
