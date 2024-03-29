import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const peonyApi = {
    // 添加牡丹花 @author 卓大
    addPeony: (data) => {
        return postAxios('/admin/peony/add', data);
    },
    // 分页查询牡丹花 @author 卓大
    queryPeony: (data) => {
        return postAxios('/admin/peony/page/query', data);
    },
    // 批量删除牡丹花 @author 卓大
    batchDeletePeony: (idList) => {
        return postAxios('/admin/peony/deleteByIds', idList);
    },
    // 修改牡丹花  @author 卓大
    updatePeony: (data) => {
        return postAxios('/admin/peony/update',data);
    },
    // 导出全部  @author 卓大
    exportAll:(data)=>{
        return postDownloadAxios('/peony/export/all',data);
    },
    // 批量导出  @author 卓大
    batchExport: (idList) => {
        return postDownloadAxios('/peony/export/batch', idList);
    },
};
