import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const schedulingAppointmentCandidateApi = {
    // 添加预约候补 @author DuanJianBo
    addSchedulingAppointmentCandidate: (data) => {
    return postAxios('/admin/schedulingAppointmentCandidate/add', data);
},
// 分页查询预约候补 @author DuanJianBo
querySchedulingAppointmentCandidate: (data) => {
    return postAxios('/admin/schedulingAppointmentCandidate/page/query', data);
},
// 删除预约候补 @author DuanJianBo
deleteSchedulingAppointmentCandidate: (data) => {
    return postAxios('/admin/schedulingAppointmentCandidate/delete/' + data);
},
// 批量删除预约候补 @author DuanJianBo
batchDeleteSchedulingAppointmentCandidate: (schedulingAppointmentCandidateIdList) => {
    return postAxios('/admin/schedulingAppointmentCandidate/deleteByIds', schedulingAppointmentCandidateIdList);
},
// 修改预约候补  @author DuanJianBo
updateSchedulingAppointmentCandidate: (data) => {
    return postAxios('/admin/schedulingAppointmentCandidate/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/schedulingAppointmentCandidate/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (schedulingAppointmentCandidateIdList) => {
    return postDownloadAxios('/schedulingAppointmentCandidate/export/batch', schedulingAppointmentCandidateIdList);
},
};
