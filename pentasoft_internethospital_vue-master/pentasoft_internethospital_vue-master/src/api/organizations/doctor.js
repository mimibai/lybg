import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const doctorApi = {
    // 添加医生 @author DuanJianBo
    addDoctor: (data) => {
    return postAxios('/admin/doctor/add', data);
},
// 分页查询医生 @author DuanJianBo
queryDoctor: (data) => {
    return postAxios('/admin/doctor/page/query', data);
},
// 删除医生 @author DuanJianBo
deleteDoctor: (data) => {
    return postAxios('/admin/doctor/delete/' + data);
},
// 批量删除医生 @author DuanJianBo
batchDeleteDoctor: (doctorIdList) => {
    return postAxios('/admin/doctor/deleteByIds', doctorIdList);
},
// 修改医生  @author DuanJianBo
updateDoctor: (data) => {
    return postAxios('/admin/doctor/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/doctor/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (doctorIdList) => {
    return postDownloadAxios('/doctor/export/batch', doctorIdList);
},
};
