import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const deptNodeApi = {
    // 添加部门树 @author DuanJianBo
    addDeptNode: (data) => {
    return postAxios('/admin/deptNode/add', data);
},
// 分页查询部门树 @author DuanJianBo
queryDeptNode: (data) => {
    return postAxios('/admin/deptNode/page/query', data);
},
// 删除部门树 @author DuanJianBo
deleteDeptNode: (data) => {
    return postAxios('/admin/deptNode/delete/' + data);
},
// 批量删除部门树 @author DuanJianBo
batchDeleteDeptNode: (deptNodeIdList) => {
    return postAxios('/admin/deptNode/deleteByIds', deptNodeIdList);
},
// 修改部门树  @author DuanJianBo
updateDeptNode: (data) => {
    return postAxios('/admin/deptNode/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/deptNode/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (deptNodeIdList) => {
    return postDownloadAxios('/deptNode/export/batch', deptNodeIdList);
},
};
