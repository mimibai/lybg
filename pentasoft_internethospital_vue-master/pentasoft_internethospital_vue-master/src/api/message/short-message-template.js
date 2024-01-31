import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const ShortMessageTemplateApi = {
    // 添加门诊科室 @author DuanJianBo
    addShortMessageTemplate: (data) => {
    return postAxios('/admin/shortMessageTemplate/add', data);
},
// 分页查询门诊科室 @author DuanJianBo
queryShortMessageTemplate: (data) => {
    return postAxios('/admin/shortMessageTemplate/page/query', data);
},
// 删除门诊科室 @author DuanJianBo
deleteShortMessageTemplate: (data) => {
    return postAxios('/admin/shortMessageTemplate/delete/' + data);
},
// 批量删除门诊科室 @author DuanJianBo
batchDeleteShortMessageTemplate: (ShortMessageTemplateIdList) => {
    return postAxios('/admin/shortMessageTemplate/deleteByIds', ShortMessageTemplateIdList);
},
// 修改门诊科室  @author DuanJianBo
updateShortMessageTemplate: (data) => {
    return postAxios('/admin/shortMessageTemplate/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/shortMessageTemplate/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (ShortMessageTemplateIdList) => {
    return postDownloadAxios('/shortMessageTemplate/export/batch', ShortMessageTemplateIdList);
},
};
