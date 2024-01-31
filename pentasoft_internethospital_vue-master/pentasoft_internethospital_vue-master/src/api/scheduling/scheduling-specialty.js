import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const schedulingSpecialtyApi = {
    // 添加门诊专业 @author DuanJianBo
    addSchedulingSpecialty: (data) => {
    return postAxios('/admin/schedulingSpecialty/add', data);
},
// 分页查询门诊专业 @author DuanJianBo
querySchedulingSpecialty: (data) => {
    return postAxios('/admin/schedulingSpecialty/page/query', data);
},
// 删除门诊专业 @author DuanJianBo
deleteSchedulingSpecialty: (data) => {
    return postAxios('/admin/schedulingSpecialty/delete/' + data);
},
// 批量删除门诊专业 @author DuanJianBo
batchDeleteSchedulingSpecialty: (schedulingSpecialtyIdList) => {
    return postAxios('/admin/schedulingSpecialty/deleteByIds', schedulingSpecialtyIdList);
},
// 修改门诊专业  @author DuanJianBo
updateSchedulingSpecialty: (data) => {
    return postAxios('/admin/schedulingSpecialty/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/schedulingSpecialty/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (schedulingSpecialtyIdList) => {
    return postDownloadAxios('/schedulingSpecialty/export/batch', schedulingSpecialtyIdList);
},
};
