import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const schedulingBlackListApi = {
    // 添加预约挂号黑名单 @author DuanJianBo
    addSchedulingBlackList: (data) => {
    return postAxios('/admin/schedulingBlackList/add', data);
},
// 分页查询预约挂号黑名单 @author DuanJianBo
querySchedulingBlackList: (data) => {
    return postAxios('/admin/schedulingBlackList/page/query', data);
},
// 删除预约挂号黑名单 @author DuanJianBo
deleteSchedulingBlackList: (data) => {
    return postAxios('/admin/schedulingBlackList/delete/' + data);
},
// 批量删除预约挂号黑名单 @author DuanJianBo
batchDeleteSchedulingBlackList: (schedulingBlackListIdList) => {
    return postAxios('/admin/schedulingBlackList/deleteByIds', schedulingBlackListIdList);
},
// 修改预约挂号黑名单  @author DuanJianBo
updateSchedulingBlackList: (data) => {
    return postAxios('/admin/schedulingBlackList/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/schedulingBlackList/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (schedulingBlackListIdList) => {
    return postDownloadAxios('/schedulingBlackList/export/batch', schedulingBlackListIdList);
},
};
