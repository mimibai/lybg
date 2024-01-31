import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const oPSchedulingSettingApi = {
    // 添加门诊配置表 @author DuanJianBo
    addOPSchedulingSetting: (data) => {
    return postAxios('/admin/oPSchedulingSetting/add', data);
},
// 分页查询门诊配置表 @author DuanJianBo
queryOPSchedulingSetting: (data) => {
    return postAxios('/admin/oPSchedulingSetting/page/query', data);
},
// 删除门诊配置表 @author DuanJianBo
deleteOPSchedulingSetting: (data) => {
    return postAxios('/admin/oPSchedulingSetting/delete/' + data);
},
// 批量删除门诊配置表 @author DuanJianBo
batchDeleteOPSchedulingSetting: (oPSchedulingSettingIdList) => {
    return postAxios('/admin/oPSchedulingSetting/deleteByIds', oPSchedulingSettingIdList);
},
// 修改门诊配置表  @author DuanJianBo
updateOPSchedulingSetting: (data) => {
    return postAxios('/admin/oPSchedulingSetting/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/oPSchedulingSetting/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (oPSchedulingSettingIdList) => {
    return postDownloadAxios('/oPSchedulingSetting/export/batch', oPSchedulingSettingIdList);
},
};
