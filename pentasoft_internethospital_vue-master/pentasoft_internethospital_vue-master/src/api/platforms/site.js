import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const siteApi = {
    // 添加 @author Stagnant
    addSite: (data) => {
        return postAxios('/admin/site/add', data);
    },
    // 分页查询 @author Stagnant
    querySite: (data) => {
        return postAxios('/admin/site/page/query', data);
    },
     // 删除 @author Stagnant
     deleteSite: (data) => {
        return postAxios('/admin/site/delete/'+ data);
    },
    // 批量删除 @author Stagnant
    batchDeleteSite: (idList) => {
        return postAxios('/admin/site/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateSite: (data) => {
        return postAxios('/admin/site/update',data);
    },
    // 导出全部  @author Stagnant
    exportAll:(data)=>{
        return postDownloadAxios('/site/export/all',data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/site/export/batch', idList);
    },
};
