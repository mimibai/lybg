import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const voteApi = {
    // 添加投票 @author DuanJianBo
    addVote: (data) => {
        return postAxios('/admin/vote/add', data);
    },
    // 分页查询投票 @author DuanJianBo
    queryVote: (data) => {
        return postAxios('/admin/vote/page/query', data);
    },
    // 删除投票 @author DuanJianBo
    deleteVote: (data) => {
        return postAxios('/admin/vote/delete/' + data);
    },
    // 批量删除投票 @author DuanJianBo
    batchDeleteVote: (idList) => {
        return postAxios('/admin/vote/deleteByIds', idList);
    },
    // 修改投票  @author DuanJianBo
    updateVote: (data) => {
        return postAxios('/admin/vote/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/vote/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (idList) => {
        return postDownloadAxios('/vote/export/batch', idList);
    },
};
