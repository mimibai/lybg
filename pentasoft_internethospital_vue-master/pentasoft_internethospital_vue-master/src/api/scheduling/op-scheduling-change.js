import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const opSchedulingChangeApi = {
    // 添加门诊排班换休表 @author DuanJianBo
    addOpSchedulingChange: (data) => {
    return postAxios('/admin/opSchedulingChange/add', data);
},
// 分页查询门诊排班换休表 @author DuanJianBo
queryOpSchedulingChange: (data) => {
    return postAxios('/admin/opSchedulingChange/page/query', data);
},
// 删除门诊排班换休表 @author DuanJianBo
deleteOpSchedulingChange: (data) => {
    return postAxios('/admin/opSchedulingChange/delete/' + data);
},
// 批量删除门诊排班换休表 @author DuanJianBo
batchDeleteOpSchedulingChange: (opSchedulingChangeIdList) => {
    return postAxios('/admin/opSchedulingChange/deleteByIds', opSchedulingChangeIdList);
},
// 修改门诊排班换休表  @author DuanJianBo
updateOpSchedulingChange: (data) => {
    return postAxios('/admin/opSchedulingChange/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/opSchedulingChange/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (opSchedulingChangeIdList) => {
    return postDownloadAxios('/opSchedulingChange/export/batch', opSchedulingChangeIdList);
},
};
