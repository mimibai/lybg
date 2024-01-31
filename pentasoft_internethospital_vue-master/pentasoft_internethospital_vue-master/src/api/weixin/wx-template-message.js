import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxTemplateMessageApi = {
    // 添加 @author Stagnant
    addWeixintemplatemessage: (data) => {
        return postAxios('/admin/weixintemplatemessage/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixintemplatemessage: (data) => {
        return postAxios('/admin/weixintemplatemessage/page/query', data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixintemplatemessage: (idList) => {
        return postAxios('/admin/weixintemplatemessage/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixintemplatemessage: (data) => {
        return postAxios('/admin/weixintemplatemessage/update',data);
    },
    // 导出全部  @author Stagnant
    exportAll:(data)=>{
        return postDownloadAxios('/weixintemplatemessage/export/all',data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixintemplatemessage/export/batch', idList);
    },
};
