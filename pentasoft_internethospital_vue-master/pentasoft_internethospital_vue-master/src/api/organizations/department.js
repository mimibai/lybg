import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const departmentApi = {
    // 添加科室 @author DuanJianBo
    addDepartment: (data) => {
    return postAxios('/admin/department/add', data);
},
// 分页查询科室 @author DuanJianBo
queryDepartment: (data) => {
    return postAxios('/admin/department/page/query', data);
},
// 删除科室 @author DuanJianBo
deleteDepartment: (data) => {
    return postAxios('/admin/department/delete/' + data);
},
// 批量删除科室 @author DuanJianBo
batchDeleteDepartment: (departmentIdList) => {
    return postAxios('/admin/department/deleteByIds', departmentIdList);
},
// 修改科室  @author DuanJianBo
updateDepartment: (data) => {
    return postAxios('/admin/department/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/department/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (departmentIdList) => {
    return postDownloadAxios('/department/export/batch', departmentIdList);
},
};
