import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const oPSchedulingPlanApi = {
    // 添加门诊排班计划表 @author DuanJianBo
    addOPSchedulingPlan: (data) => {
        return postAxios('/admin/admin/oPSchedulingPlan/add', data);
    },
    // 分页查询门诊排班计划表 @author DuanJianBo
    queryOPSchedulingPlan: (data) => {
        return postAxios('/admin/admin/oPSchedulingPlan/page/query', data);
    },
    // 删除门诊排班计划表 @author DuanJianBo
    deleteOPSchedulingPlan: (data) => {
        return postAxios('/admin/admin/oPSchedulingPlan/delete/' + data);
    },
    // 批量删除门诊排班计划表 @author DuanJianBo
    batchDeleteOPSchedulingPlan: (oPSchedulingPlanIdList) => {
        return postAxios('/admin/admin/oPSchedulingPlan/deleteByIds', oPSchedulingPlanIdList);
    },
    // 修改门诊排班计划表  @author DuanJianBo
    updateOPSchedulingPlan: (data) => {
        return postAxios('/admin/admin/oPSchedulingPlan/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/admin/oPSchedulingPlan/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (oPSchedulingPlanIdList) => {
        return postDownloadAxios('/admin/oPSchedulingPlan/export/batch', oPSchedulingPlanIdList);
    },
    // 导入  @author DuanJianBo
    importExcel: (data) => {
        return postAxios('/admin/opSchedulingPlan/importExcel', data);
    },
};
