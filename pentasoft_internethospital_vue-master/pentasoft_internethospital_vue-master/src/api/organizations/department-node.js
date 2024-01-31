import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const departmentNodeApi = {
    // 添加科室节点 @author DuanJianBo
    addDepartmentNode: (data) => {
        return postAxios('/admin/departmentNode/add', data);
    },
    // 根据ParentId获取列表
    listDepartmentNodeByParentId: (data) => {
        return postAxios('/admin/departmentNode/list/' + data);
    },
    // 分页查询科室节点 @author DuanJianBo
    queryDepartmentNode: (data) => {
        return postAxios('/admin/departmentNode/page/query', data);
    },
    // 删除科室节点 @author DuanJianBo
    deleteDepartmentNode: (data) => {
        return postAxios('/admin/departmentNode/delete/' + data);
    },
    // 批量删除科室节点 @author DuanJianBo
    batchDeleteDepartmentNode: (departmentNodeIdList) => {
        return postAxios('/admin/departmentNode/deleteByIds', departmentNodeIdList);
    },
    // 修改科室节点  @author DuanJianBo
    updateDepartmentNode: (data) => {
        return postAxios('/admin/departmentNode/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/departmentNode/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (departmentNodeIdList) => {
        return postDownloadAxios('/departmentNode/export/batch', departmentNodeIdList);
    },
    // 移动节点  @author DuanJianBo
    moveDepartmentNode: (id, direction) => {
        return postAxios('/admin/departmentNode/move/' + direction + '/' + id);
    },
};
