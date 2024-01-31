import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const voteDetailApi = {
    // 添加投票明细 @author DuanJianBo
    addVoteDetail: (data) => {
        return postAxios('/admin/votedetail/add', data);
    },
    // 分页查询投票明细 @author DuanJianBo
    queryVoteDetail: (data) => {
        return postAxios('/admin/votedetail/page/query', data);
    },
    // 删除投票明细 @author DuanJianBo
    deleteVoteDetail: (data) => {
        return postAxios('/admin/votedetail/delete/' + data);
    },
    // 批量删除投票明细 @author DuanJianBo
    batchDeleteVoteDetail: (idList) => {
        return postAxios('/admin/votedetail/deleteByIds', idList);
    },
    // 修改投票明细  @author DuanJianBo
    updateVoteDetail: (data) => {
        return postAxios('/admin/votedetail/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/votedetail/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (idList) => {
        return postDownloadAxios('/votedetail/export/batch', idList);
    },
    // 移动节点  @author DuanJianBo
    moveVoteDetail: (id, direction) => {
        return postAxios('/admin/votedetail/move/' + direction + '/' + id);
    },
};
