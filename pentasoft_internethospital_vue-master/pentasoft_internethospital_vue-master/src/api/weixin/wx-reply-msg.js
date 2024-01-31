import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxReplyMsgApi = {
    // 添加 @author Stagnant
    addWeixinreplymsg: (data) => {
        return postAxios('/admin/weixinreplymsg/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinreplymsg: (data) => {
        return postAxios('/admin/weixinreplymsg/page/query', data);
    },
    // 删除
    deleteWeixinreplymsg: (data) => {
        return postAxios('/admin/weixinreplymsg/delete/' + data);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinreplymsg: (idList) => {
        return postAxios('/admin/weixinreplymsg/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinreplymsg: (data) => {
        return postAxios('/admin/weixinreplymsg/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/weixinreplymsg/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinreplymsg/export/batch', idList);
    },
    // 回复消息 @author Stagnant
    replyMsg: (data) => {
        return postAxios('/admin/weixinreplymsg/reply', data);
    },
};
