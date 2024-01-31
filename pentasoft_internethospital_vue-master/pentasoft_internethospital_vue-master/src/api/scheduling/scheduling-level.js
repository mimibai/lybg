import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const schedulingLevelApi = {
    // 添加门诊排班级别 @author DuanJianBo
    addSchedulingLevel: (data) => {
        return postAxios('/admin/schedulingLevel/add', data);
    },
    // 分页查询门诊排班级别 @author DuanJianBo
    querySchedulingLevel: (data) => {
        return postAxios('/admin/schedulingLevel/page/query', data);
    },
    // 删除门诊排班级别 @author DuanJianBo
    deleteSchedulingLevel: (data) => {
        return postAxios('/admin/schedulingLevel/delete/' + data);
    },
    // 批量删除门诊排班级别 @author DuanJianBo
    batchDeleteSchedulingLevel: (schedulingLevelIdList) => {
        return postAxios('/admin/schedulingLevel/deleteByIds', schedulingLevelIdList);
    },
    // 修改门诊排班级别  @author DuanJianBo
    updateSchedulingLevel: (data) => {
        return postAxios('/admin/schedulingLevel/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/schedulingLevel/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (schedulingLevelIdList) => {
        return postDownloadAxios('/schedulingLevel/export/batch', schedulingLevelIdList);
    },
};
