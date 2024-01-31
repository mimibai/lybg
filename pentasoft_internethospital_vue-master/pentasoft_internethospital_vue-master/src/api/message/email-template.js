import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const EmailTemplateApi = {
    // 添加门诊科室 @author DuanJianBo
    addEmailTemplate: (data) => {
    return postAxios('/admin/emailTemplate/add', data);
},
// 分页查询门诊科室 @author DuanJianBo
queryEmailTemplate: (data) => {
    return postAxios('/admin/emailTemplate/page/query', data);
},
// 删除门诊科室 @author DuanJianBo
deleteEmailTemplate: (data) => {
    return postAxios('/admin/emailTemplate/delete/' + data);
},
// 批量删除门诊科室 @author DuanJianBo
batchDeleteEmailTemplate: (EmailTemplateIdList) => {
    return postAxios('/admin/emailTemplate/deleteByIds', EmailTemplateIdList);
},
// 修改门诊科室  @author DuanJianBo
updateEmailTemplate: (data) => {
    return postAxios('/admin/emailTemplate/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/emailTemplate/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (EmailTemplateIdList) => {
    return postDownloadAxios('/emailTemplate/export/batch', EmailTemplateIdList);
},
};
