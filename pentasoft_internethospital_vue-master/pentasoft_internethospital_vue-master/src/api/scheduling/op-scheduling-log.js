import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const oPSchedulingLogApi = {
    // 添加门诊排班日志表 @author DuanJianBo
    addOPSchedulingLog: (data) => {
    return postAxios('/admin/oPSchedulingLog/add', data);
},
// 分页查询门诊排班日志表 @author DuanJianBo
queryOPSchedulingLog: (data) => {
    return postAxios('/admin/oPSchedulingLog/page/query', data);
},
// 删除门诊排班日志表 @author DuanJianBo
deleteOPSchedulingLog: (data) => {
    return postAxios('/admin/oPSchedulingLog/delete/' + data);
},
// 批量删除门诊排班日志表 @author DuanJianBo
batchDeleteOPSchedulingLog: (oPSchedulingLogIdList) => {
    return postAxios('/admin/oPSchedulingLog/deleteByIds', oPSchedulingLogIdList);
},
// 修改门诊排班日志表  @author DuanJianBo
updateOPSchedulingLog: (data) => {
    return postAxios('/admin/oPSchedulingLog/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/oPSchedulingLog/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (oPSchedulingLogIdList) => {
    return postDownloadAxios('/oPSchedulingLog/export/batch', oPSchedulingLogIdList);
},
};
