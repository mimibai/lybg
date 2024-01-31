import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const adviceApi = {
    // 添加人员资料表 @author Stagnant
    addAdvice: (data) => {
        return postAxios('/admin/advice/add', data);
    },
    // 分页查询人员资料表 @author Stagnant
    queryAdvice: (data) => {
        return postAxios('/admin/advice/page/query', data);
    },
    // 删除人员资料表 @author Stagnant
    deleteAdvice: (adviceId) => {
        return postAxios('/admin/advice/delete/' + adviceId);
    },
    // 批量删除人员资料表 @author Stagnant
    batchDeleteAdvice: (idList) => {
        return postAxios('/admin/advice/deleteByIds', idList);
    },
    // 修改人员资料表  @author Stagnant
    updateAdvice: (data) => {
        return postAxios('/admin/advice/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/advice/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/advice/export/batch', idList);
    },
    // 类型分页查询 @author Stagnant
    queryAdviceType: (data) => {
        return postAxios('/admin/advice/adviceType/list', data);
    },
};
