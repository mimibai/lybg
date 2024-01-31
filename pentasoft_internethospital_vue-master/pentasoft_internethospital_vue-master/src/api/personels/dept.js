import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const deptApi = {
    // 添加部门 @author DuanJianBo
    addDept: (data) => {
    return postAxios('/admin/dept/add', data);
},
// 分页查询部门 @author DuanJianBo
queryDept: (data) => {
    return postAxios('/admin/dept/page/query', data);
},
// 删除部门 @author DuanJianBo
deleteDept: (data) => {
    return postAxios('/admin/dept/delete/' + data);
},
// 批量删除部门 @author DuanJianBo
batchDeleteDept: (deptIdList) => {
    return postAxios('/admin/dept/deleteByIds', deptIdList);
},
// 修改部门  @author DuanJianBo
updateDept: (data) => {
    return postAxios('/admin/dept/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/dept/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (deptIdList) => {
    return postDownloadAxios('/dept/export/batch', deptIdList);
},
};
