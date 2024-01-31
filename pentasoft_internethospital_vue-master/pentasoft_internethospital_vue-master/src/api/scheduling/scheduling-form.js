import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const schedulingFormApi = {
    // 添加预约表单 @author DuanJianBo
    addSchedulingForm: (data) => {
    return postAxios('/admin/schedulingForm/add', data);
},
// 分页查询预约表单 @author DuanJianBo
querySchedulingForm: (data) => {
    return postAxios('/admin/schedulingForm/page/query', data);
},
// 删除预约表单 @author DuanJianBo
deleteSchedulingForm: (data) => {
    return postAxios('/admin/schedulingForm/delete/' + data);
},
// 批量删除预约表单 @author DuanJianBo
batchDeleteSchedulingForm: (schedulingFormIdList) => {
    return postAxios('/admin/schedulingForm/deleteByIds', schedulingFormIdList);
},
// 修改预约表单  @author DuanJianBo
updateSchedulingForm: (data) => {
    return postAxios('/admin/schedulingForm/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/schedulingForm/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (schedulingFormIdList) => {
    return postDownloadAxios('/schedulingForm/export/batch', schedulingFormIdList);
},
};
