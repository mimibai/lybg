import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const opDailySchedulingApi = {
    // 添加门诊日排班表 @author DuanJianBo
    addOpDailyScheduling: (data) => {
    return postAxios('/admin/opDailyScheduling/add', data);
},
// 分页查询门诊日排班表 @author DuanJianBo
queryOpDailyScheduling: (data) => {
    return postAxios('/admin/opDailyScheduling/page/query', data);
},
// 删除门诊日排班表 @author DuanJianBo
deleteOpDailyScheduling: (data) => {
    return postAxios('/admin/opDailyScheduling/delete/' + data);
},
// 批量删除门诊日排班表 @author DuanJianBo
batchDeleteOpDailyScheduling: (opDailySchedulingIdList) => {
    return postAxios('/admin/opDailyScheduling/deleteByIds', opDailySchedulingIdList);
},
// 修改门诊日排班表  @author DuanJianBo
updateOpDailyScheduling: (data) => {
    return postAxios('/admin/opDailyScheduling/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/opDailyScheduling/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (opDailySchedulingIdList) => {
    return postDownloadAxios('/opDailyScheduling/export/batch', opDailySchedulingIdList);
},
};
