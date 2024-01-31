import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const wxMenuApi = {
    // 添加 @author Stagnant
    addWeixinmenu: (data) => {
        return postAxios('/admin/weixinmenu/add', data);
    },
    // 分页查询 @author Stagnant
    queryWeixinmenu: (data) => {
        return postAxios('/admin/weixinmenu/page/query', data);
    },
    // 删除 @author Stagnant
    deleteWeixinmenu: (data) => {
        return postAxios('/admin/weixinmenu/delete/' + data);
    },
    // 移动节点 @author Stagnant
    moveWeixinmenu: (id, direction) => {
        return postAxios('/admin/weixinmenu/move/' + direction + '/' + id);
    },
    // 批量删除 @author Stagnant
    batchDeleteWeixinmenu: (idList) => {
        return postAxios('/admin/weixinmenu/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateWeixinmenu: (data) => {
        return postAxios('/admin/weixinmenu/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/weixinmenu/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/weixinmenu/export/batch', idList);
    },
    // 同步微信菜单  @author Stagnant
    synchronizeMenu: (data) => {
        return postDownloadAxios('/weixinmenu/synchronize/' + data);
    },
};
