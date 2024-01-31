import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const opDailySchedulingNumberApi = {
    // 添加门诊号源表 @author DuanJianBo
    addOpDailySchedulingNumber: (data) => {
    return postAxios('/admin/opDailySchedulingNumber/add', data);
},
// 分页查询门诊号源表 @author DuanJianBo
queryOpDailySchedulingNumber: (data) => {
    return postAxios('/admin/opDailySchedulingNumber/page/query', data);
},
// 删除门诊号源表 @author DuanJianBo
deleteOpDailySchedulingNumber: (data) => {
    return postAxios('/admin/opDailySchedulingNumber/delete/' + data);
},
// 批量删除门诊号源表 @author DuanJianBo
batchDeleteOpDailySchedulingNumber: (opDailySchedulingNumberIdList) => {
    return postAxios('/admin/opDailySchedulingNumber/deleteByIds', opDailySchedulingNumberIdList);
},
// 修改门诊号源表  @author DuanJianBo
updateOpDailySchedulingNumber: (data) => {
    return postAxios('/admin/opDailySchedulingNumber/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/opDailySchedulingNumber/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (opDailySchedulingNumberIdList) => {
    return postDownloadAxios('/opDailySchedulingNumber/export/batch', opDailySchedulingNumberIdList);
},
};
