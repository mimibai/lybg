import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const locationBranchApi = {
    // 添加医院院区 @author DuanJianBo
    addLocationBranch: (data) => {
        return postAxios('/admin/locationBranch/add', data);
    },
    // 分页查询医院院区 @author DuanJianBo
    queryLocationBranch: (data) => {
        return postAxios('/admin/locationBranch/page/query', data);
    },
    // 删除医院院区 @author DuanJianBo
    deleteLocationBranch: (data) => {
        return postAxios('/admin/locationBranch/delete/' + data);
    },
    // 批量删除医院院区 @author DuanJianBo
    batchDeleteLocationBranch: (locationBranchIdList) => {
        return postAxios('/admin/locationBranch/deleteByIds', locationBranchIdList);
    },
    // 修改医院院区  @author DuanJianBo
    updateLocationBranch: (data) => {
        return postAxios('/admin/locationBranch/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/locationBranch/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (locationBranchIdList) => {
        return postDownloadAxios('/locationBranch/export/batch', locationBranchIdList);
    },
    // 查询医院院区 @author DuanJianBo
    queryLocationBranchList: (data) => {
        return postAxios('/admin/locationBranch/query/list', data);
    },
};
