import {postAxios, getAxios, postDownloadAxios} from '@/lib/http';

export const appPageApi = {
    // 添加小程序页面表 @author 54Doctor
    addAppPage: (data) => {
    return postAxios('/admin/appPage/add', data);
},
// 分页查询小程序页面表 @author 54Doctor
queryAppPage: (data) => {
    return postAxios('/admin/appPage/page/query', data);
},
// 删除小程序页面表 @author 54Doctor
deleteAppPage: (data) => {
    return postAxios('/admin/appPage/delete/' + data);
},
// 批量删除小程序页面表 @author 54Doctor
batchDeleteAppPage: (appPageIdList) => {
    return postAxios('/admin/appPage/deleteByIds', appPageIdList);
},
// 修改小程序页面表  @author 54Doctor
updateAppPage: (data) => {
    return postAxios('/admin/appPage/update', data);
},
// 导出全部  @author 54Doctor
exportAll:(data) =>{
    return postDownloadAxios('/admin/appPage/export/all', data);
},
// 批量导出  @author 54Doctor
batchExport: (appPageIdList) => {
    return postDownloadAxios('/admin/appPage/export/batch', appPageIdList);
},
};
