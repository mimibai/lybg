import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const opBasicSchedulingNumberApi = {
    // 添加基本出诊号源表 @author DuanJianBo
    addOpBasicSchedulingNumber: (data) => {
    return postAxios('/admin/opBasicSchedulingNumber/add', data);
},
// 分页查询基本出诊号源表 @author DuanJianBo
queryOpBasicSchedulingNumber: (data) => {
    return postAxios('/admin/opBasicSchedulingNumber/page/query', data);
},
// 删除基本出诊号源表 @author DuanJianBo
deleteOpBasicSchedulingNumber: (data) => {
    return postAxios('/admin/opBasicSchedulingNumber/delete/' + data);
},
// 批量删除基本出诊号源表 @author DuanJianBo
batchDeleteOpBasicSchedulingNumber: (opBasicSchedulingNumberIdList) => {
    return postAxios('/admin/opBasicSchedulingNumber/deleteByIds', opBasicSchedulingNumberIdList);
},
// 修改基本出诊号源表  @author DuanJianBo
updateOpBasicSchedulingNumber: (data) => {
    return postAxios('/admin/opBasicSchedulingNumber/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/opBasicSchedulingNumber/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (opBasicSchedulingNumberIdList) => {
    return postDownloadAxios('/opBasicSchedulingNumber/export/batch', opBasicSchedulingNumberIdList);
},
};
