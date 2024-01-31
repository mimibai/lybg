import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxUserApi = {
    // 添加 @author Stagnant
    addWeixinuser: (data) => {
        return postAxios('/admin/weixinuser/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinuser: (data) => {
        return postAxios('/admin/weixinuser/page/query', data);
    },
    // 删除 @author Stagnant
    deleteWeixinuser: (data) => {
        return postAxios('/admin/weixinuser/delete/'+ data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinuser: (idList) => {
        return postAxios('/admin/weixinuser/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinuser: (data) => {
        return postAxios('/admin/weixinuser/update',data);
    },
    // 导出全部  @author Stagnant
    exportAll:(data)=>{
        return postDownloadAxios('/weixinuser/export/all',data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinuser/export/batch', idList);
    },
    // 同步微信用户
    synchronizeUser:(wxAccountId)=>{
        return postAxios('/admin/weixinuser/synchronize',wxAccountId);
    }
};
