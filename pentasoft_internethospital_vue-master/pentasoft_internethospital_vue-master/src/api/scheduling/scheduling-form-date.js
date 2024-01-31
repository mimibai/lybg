import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const schedulingFormDateApi = {
    // 添加出诊表单日期 @author DuanJianBo
    addSchedulingFormDate: (data) => {
    return postAxios('/admin/schedulingFormDate/add', data);
},
// 分页查询出诊表单日期 @author DuanJianBo
querySchedulingFormDate: (data) => {
    return postAxios('/admin/schedulingFormDate/page/query', data);
},
// 删除出诊表单日期 @author DuanJianBo
deleteSchedulingFormDate: (data) => {
    return postAxios('/admin/schedulingFormDate/delete/' + data);
},
// 批量删除出诊表单日期 @author DuanJianBo
batchDeleteSchedulingFormDate: (schedulingFormDateIdList) => {
    return postAxios('/admin/schedulingFormDate/deleteByIds', schedulingFormDateIdList);
},
// 修改出诊表单日期  @author DuanJianBo
updateSchedulingFormDate: (data) => {
    return postAxios('/admin/schedulingFormDate/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/schedulingFormDate/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (schedulingFormDateIdList) => {
    return postDownloadAxios('/schedulingFormDate/export/batch', schedulingFormDateIdList);
},
};
