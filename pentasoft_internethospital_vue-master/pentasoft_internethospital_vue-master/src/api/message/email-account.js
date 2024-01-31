import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const EmailAccountApi = {
    // 添加门诊科室 @author DuanJianBo
    addEmailAccount: (data) => {
    return postAxios('/admin/emailAccount/add', data);
},
// 分页查询门诊科室 @author DuanJianBo
queryEmailAccount: (data) => {
    return postAxios('/admin/emailAccount/page/query', data);
},
// 删除门诊科室 @author DuanJianBo
deleteEmailAccount: (data) => {
    return postAxios('/admin/emailAccount/delete/' + data);
},
// 批量删除门诊科室 @author DuanJianBo
batchDeleteEmailAccount: (EmailAccountIdList) => {
    return postAxios('/admin/emailAccount/deleteByIds', EmailAccountIdList);
},
// 修改门诊科室  @author DuanJianBo
updateEmailAccount: (data) => {
    return postAxios('/admin/emailAccount/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/emailAccount/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (EmailAccountIdList) => {
    return postDownloadAxios('/emailAccount/export/batch', EmailAccountIdList);
},
};
