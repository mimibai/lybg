import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const articleApi = {
    // 添加 @author 卓大
    addArticle: (data) => {
        return postAxios('/admin/article/add', data);
    },
    // 分页查询 @author 卓大
    queryArticle: (data) => {
        return postAxios('/admin/article/page/query', data);
    },
    deleteArticleById: (articleId) => {
        return postAxios('/admin/article/delete/' + articleId);
    },
    // 批量删除 @author 卓大
    batchDeleteArticle: (idList) => {
        return postAxios('/admin/article/deleteByIds', idList);
    },
    // 修改  @author 卓大
    updateArticle: (data) => {
        return postAxios('/admin/article/update', data);
    },
    // 导出全部  @author 卓大
    exportAll: (data) => {
        return postDownloadAxios('/article/export/all', data);
    },
    // 批量导出  @author 卓大
    batchExport: (idList) => {
        return postDownloadAxios('/article/export/batch', idList);
    },
};
