import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const oPSchedulingStopVisitApi = {
    // 添加停诊申请 @author DuanJianBo
    addOPSchedulingStopVisit: (data) => {
    return postAxios('/admin/oPSchedulingStopVisit/add', data);
},
// 分页查询停诊申请 @author DuanJianBo
queryOPSchedulingStopVisit: (data) => {
    return postAxios('/admin/oPSchedulingStopVisit/page/query', data);
},
// 删除停诊申请 @author DuanJianBo
deleteOPSchedulingStopVisit: (data) => {
    return postAxios('/admin/oPSchedulingStopVisit/delete/' + data);
},
// 批量删除停诊申请 @author DuanJianBo
batchDeleteOPSchedulingStopVisit: (oPSchedulingStopVisitIdList) => {
    return postAxios('/admin/oPSchedulingStopVisit/deleteByIds', oPSchedulingStopVisitIdList);
},
// 修改停诊申请  @author DuanJianBo
updateOPSchedulingStopVisit: (data) => {
    return postAxios('/admin/oPSchedulingStopVisit/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/oPSchedulingStopVisit/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (oPSchedulingStopVisitIdList) => {
    return postDownloadAxios('/oPSchedulingStopVisit/export/batch', oPSchedulingStopVisitIdList);
},
};
