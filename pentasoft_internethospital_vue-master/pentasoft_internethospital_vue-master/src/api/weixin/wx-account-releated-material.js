import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const WxAccountReleatedMaterialApi = {
    // 添加 @author Stagnant
    addWeixinaccountreleatedmaterial: (data) => {
        return postAxios('/admin/weixinaccountreleatedmaterial/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinaccountreleatedmaterial: (data) => {
        return postAxios('/admin/weixinaccountreleatedmaterial/page/query', data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinaccountreleatedmaterial: (idList) => {
        return postAxios('/admin/weixinaccountreleatedmaterial/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinaccountreleatedmaterial: (data) => {
        return postAxios('/admin/weixinaccountreleatedmaterial/update',data);
    },
    // 导出全部  @author Stagnant
    exportAll:(data)=>{
        return postDownloadAxios('/weixinaccountreleatedmaterial/export/all',data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinaccountreleatedmaterial/export/batch', idList);
    },
};
