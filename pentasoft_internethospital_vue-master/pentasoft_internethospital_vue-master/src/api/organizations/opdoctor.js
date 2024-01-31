import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const OPDoctorApi = {
    // 添加门诊医生 @author DuanJianBo
    addOPDoctor: (data) => {
    return postAxios('/admin/oPDoctor/add', data);
},
// 分页查询门诊医生 @author DuanJianBo
queryOPDoctor: (data) => {
    return postAxios('/admin/oPDoctor/page/query', data);
},
// 删除门诊医生 @author DuanJianBo
deleteOPDoctor: (data) => {
    return postAxios('/admin/oPDoctor/delete/' + data);
},
// 批量删除门诊医生 @author DuanJianBo
batchDeleteOPDoctor: (oPDoctorIdList) => {
    return postAxios('/admin/oPDoctor/deleteByIds', oPDoctorIdList);
},
// 修改门诊医生  @author DuanJianBo
updateOPDoctor: (data) => {
    return postAxios('/admin/oPDoctor/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/oPDoctor/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (oPDoctorIdList) => {
    return postDownloadAxios('/oPDoctor/export/batch', oPDoctorIdList);
},
};
