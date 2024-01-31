import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const oPSchedulingRuleApi = {
    // 添加预约规则表 @author DuanJianBo
    addOPSchedulingRule: (data) => {
    return postAxios('/admin/oPSchedulingRule/add', data);
},
// 分页查询预约规则表 @author DuanJianBo
queryOPSchedulingRule: (data) => {
    return postAxios('/admin/oPSchedulingRule/page/query', data);
},
// 删除预约规则表 @author DuanJianBo
deleteOPSchedulingRule: (data) => {
    return postAxios('/admin/oPSchedulingRule/delete/' + data);
},
// 批量删除预约规则表 @author DuanJianBo
batchDeleteOPSchedulingRule: (oPSchedulingRuleIdList) => {
    return postAxios('/admin/oPSchedulingRule/deleteByIds', oPSchedulingRuleIdList);
},
// 修改预约规则表  @author DuanJianBo
updateOPSchedulingRule: (data) => {
    return postAxios('/admin/oPSchedulingRule/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/oPSchedulingRule/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (oPSchedulingRuleIdList) => {
    return postDownloadAxios('/oPSchedulingRule/export/batch', oPSchedulingRuleIdList);
},
};
