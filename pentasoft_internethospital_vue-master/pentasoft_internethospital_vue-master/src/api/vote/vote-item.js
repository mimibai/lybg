import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const voteItemApi = {
    // 添加投票项 @author DuanJianBo
    addVoteitem: (data) => {
        return postAxios('/admin/voteItem/add', data);
    },
    // 分页查询投票项 @author DuanJianBo
    queryVoteitem: (data) => {
        return postAxios('/admin/voteItem/page/query', data);
    },
    // 删除投票项 @author DuanJianBo
    deleteVoteitem: (data) => {
        return postAxios('/admin/voteItem/delete/' + data);
    },
    // 批量删除投票项 @author DuanJianBo
    batchDeleteVoteitem: (idList) => {
        return postAxios('/admin/voteItem/deleteByIds', idList);
    },
    // 修改投票项  @author DuanJianBo
    updateVoteitem: (data) => {
        return postAxios('/admin/voteItem/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/voteItem/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (idList) => {
        return postDownloadAxios('/voteItem/export/batch', idList);
    },
    // 移动节点  @author DuanJianBo
    moveVoteItem: (id, direction) => {
        return postAxios('/admin/voteItem/move/' + direction + '/' + id);
    },
};
