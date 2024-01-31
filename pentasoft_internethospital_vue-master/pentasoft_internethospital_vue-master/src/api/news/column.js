import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const columnApi = {
    // 添加 @author Stagnant
    addColumn: (data) => {
        return postAxios('/admin/column/add', data);
    },
    // 分页查询 @author Stagnant
    queryColumn: (data) => {
        return postAxios('/admin/column/page/query', data);
    },
    // 删除 @author Stagnant
    deleteColumn: (data) => {
        return postAxios('/admin/column/delete/' + data);
    },
    // 批量删除 @author Stagnant
    batchDeleteColumn: (idList) => {
        return postAxios('/admin/column/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateColumn: (data) => {
        return postAxios('/admin/column/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/column/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/column/export/batch', idList);
    },
    // 类型分页查询 @author Stagnant
    queryColumnType: (data) => {
        return postAxios('/admin/column/columnType/list', data);
    },
};
