import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxBulkMessageApi = {
    // 添加 @author Stagnant
    addWeixinbulkmessage: (data) => {
        return postAxios('/admin/weixinbulkmessage/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinbulkmessage: (data) => {
        return postAxios('/admin/weixinbulkmessage/page/query', data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinbulkmessage: (idList) => {
        return postAxios('/admin/weixinbulkmessage/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinbulkmessage: (data) => {
        return postAxios('/admin/weixinbulkmessage/update',data);
    },
    // 导出全部  @author Stagnant
    exportAll:(data)=>{
        return postDownloadAxios('/weixinbulkmessage/export/all',data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinbulkmessage/export/batch', idList);
    },
};
