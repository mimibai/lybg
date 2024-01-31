import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const departmentNodeCategoryApi = {
    // 添加科室节点分类 @author DuanJianBo
    addDepartmentNodeCategory: (data) => {
    return postAxios('/admin/departmentNodeCategory/add', data);
},
// 分页查询科室节点分类 @author DuanJianBo
queryDepartmentNodeCategory: (data) => {
    return postAxios('/admin/departmentNodeCategory/page/query', data);
},
// 删除科室节点分类 @author DuanJianBo
deleteDepartmentNodeCategory: (data) => {
    return postAxios('/admin/departmentNodeCategory/delete/' + data);
},
// 批量删除科室节点分类 @author DuanJianBo
batchDeleteDepartmentNodeCategory: (departmentNodeCategoryIdList) => {
    return postAxios('/admin/departmentNodeCategory/deleteByIds', departmentNodeCategoryIdList);
},
// 修改科室节点分类  @author DuanJianBo
updateDepartmentNodeCategory: (data) => {
    return postAxios('/admin/departmentNodeCategory/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/departmentNodeCategory/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (departmentNodeCategoryIdList) => {
    return postDownloadAxios('/departmentNodeCategory/export/batch', departmentNodeCategoryIdList);
},
};
