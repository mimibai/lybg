import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const OPDepartmentApi = {
    // 添加门诊科室 @author DuanJianBo
    addOPDepartment: (data) => {
        return postAxios('/admin/oPDepartment/add', data);
    },
    // 分页查询门诊科室 @author DuanJianBo
    queryOPDepartment: (data) => {
        return postAxios('/admin/oPDepartment/page/query', data);
    },
    // 根据ParentId获取列表
    listOPDepartmentByParentId: (data) => {
        return postAxios('/admin/oPDepartment/list/' + data);
    },
    // 删除门诊科室 @author DuanJianBo
    deleteOPDepartment: (data) => {
        return postAxios('/admin/oPDepartment/delete/' + data);
    },
    // 批量删除门诊科室 @author DuanJianBo
    batchDeleteOPDepartment: (oPDepartmentIdList) => {
        return postAxios('/admin/oPDepartment/deleteByIds', oPDepartmentIdList);
    },
    // 修改门诊科室  @author DuanJianBo
    updateOPDepartment: (data) => {
        return postAxios('/admin/oPDepartment/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/oPDepartment/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (oPDepartmentIdList) => {
        return postDownloadAxios('/oPDepartment/export/batch', oPDepartmentIdList);
    },
    // 移动节点  @author DuanJianBo
    moveOPDepartment: (id, direction) => {
        return postAxios('/admin/oPDepartment/move/' + direction + '/' + id);
    },
};
