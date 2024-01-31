import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const schedulingClinicApi = {
    // 添加门诊排班诊室 @author DuanJianBo
    addSchedulingClinic: (data) => {
    return postAxios('/admin/schedulingClinic/add', data);
},
// 分页查询门诊排班诊室 @author DuanJianBo
querySchedulingClinic: (data) => {
    return postAxios('/admin/schedulingClinic/page/query', data);
},
// 删除门诊排班诊室 @author DuanJianBo
deleteSchedulingClinic: (data) => {
    return postAxios('/admin/schedulingClinic/delete/' + data);
},
// 批量删除门诊排班诊室 @author DuanJianBo
batchDeleteSchedulingClinic: (schedulingClinicIdList) => {
    return postAxios('/admin/schedulingClinic/deleteByIds', schedulingClinicIdList);
},
// 修改门诊排班诊室  @author DuanJianBo
updateSchedulingClinic: (data) => {
    return postAxios('/admin/schedulingClinic/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/schedulingClinic/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (schedulingClinicIdList) => {
    return postDownloadAxios('/schedulingClinic/export/batch', schedulingClinicIdList);
},
};
