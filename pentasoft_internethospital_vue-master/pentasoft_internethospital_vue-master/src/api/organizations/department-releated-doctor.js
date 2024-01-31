import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const departmentReleatedDoctorApi = {
    // 添加科室关联的医生 @author DuanJianBo
    addDepartmentReleatedDoctor: (data) => {
    return postAxios('/admin/departmentReleatedDoctor/add', data);
},
// 分页查询科室关联的医生 @author DuanJianBo
queryDepartmentReleatedDoctor: (data) => {
    return postAxios('/admin/departmentReleatedDoctor/page/query', data);
},
// 删除科室关联的医生 @author DuanJianBo
deleteDepartmentReleatedDoctor: (data) => {
    return postAxios('/admin/departmentReleatedDoctor/delete/' + data);
},
// 批量删除科室关联的医生 @author DuanJianBo
batchDeleteDepartmentReleatedDoctor: (departmentReleatedDoctorIdList) => {
    return postAxios('/admin/departmentReleatedDoctor/deleteByIds', departmentReleatedDoctorIdList);
},
// 修改科室关联的医生  @author DuanJianBo
updateDepartmentReleatedDoctor: (data) => {
    return postAxios('/admin/departmentReleatedDoctor/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/departmentReleatedDoctor/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (departmentReleatedDoctorIdList) => {
    return postDownloadAxios('/departmentReleatedDoctor/export/batch', departmentReleatedDoctorIdList);
},
};
