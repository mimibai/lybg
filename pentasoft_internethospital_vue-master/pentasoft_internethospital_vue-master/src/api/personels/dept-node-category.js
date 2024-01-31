import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const deptNodeCategoryApi = {
    // 添加部门分类 @author DuanJianBo
    addDeptNodeCategory: (data) => {
    return postAxios('/admin/deptNodeCategory/add', data);
},
// 分页查询部门分类 @author DuanJianBo
queryDeptNodeCategory: (data) => {
    return postAxios('/admin/deptNodeCategory/page/query', data);
},
// 删除部门分类 @author DuanJianBo
deleteDeptNodeCategory: (data) => {
    return postAxios('/admin/deptNodeCategory/delete/' + data);
},
// 批量删除部门分类 @author DuanJianBo
batchDeleteDeptNodeCategory: (deptNodeCategoryIdList) => {
    return postAxios('/admin/deptNodeCategory/deleteByIds', deptNodeCategoryIdList);
},
// 修改部门分类  @author DuanJianBo
updateDeptNodeCategory: (data) => {
    return postAxios('/admin/deptNodeCategory/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/deptNodeCategory/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (deptNodeCategoryIdList) => {
    return postDownloadAxios('/deptNodeCategory/export/batch', deptNodeCategoryIdList);
},
};
