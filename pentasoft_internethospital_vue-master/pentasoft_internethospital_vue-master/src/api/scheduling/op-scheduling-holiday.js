import {postAxios, getAxios, postDownloadAxios} from '@/lib/axios';

export const opSchedulingHolidayApi = {
    // 添加门诊排班假日表 @author DuanJianBo
    addOpSchedulingHoliday: (data) => {
    return postAxios('/admin/opSchedulingHoliday/add', data);
},
// 分页查询门诊排班假日表 @author DuanJianBo
queryOpSchedulingHoliday: (data) => {
    return postAxios('/admin/opSchedulingHoliday/page/query', data);
},
// 删除门诊排班假日表 @author DuanJianBo
deleteOpSchedulingHoliday: (data) => {
    return postAxios('/admin/opSchedulingHoliday/delete/' + data);
},
// 批量删除门诊排班假日表 @author DuanJianBo
batchDeleteOpSchedulingHoliday: (opSchedulingHolidayIdList) => {
    return postAxios('/admin/opSchedulingHoliday/deleteByIds', opSchedulingHolidayIdList);
},
// 修改门诊排班假日表  @author DuanJianBo
updateOpSchedulingHoliday: (data) => {
    return postAxios('/admin/opSchedulingHoliday/update', data);
},
// 导出全部  @author DuanJianBo
exportAll:(data) =>{
    return postDownloadAxios('/opSchedulingHoliday/export/all', data);
},
// 批量导出  @author DuanJianBo
batchExport: (opSchedulingHolidayIdList) => {
    return postDownloadAxios('/opSchedulingHoliday/export/batch', opSchedulingHolidayIdList);
},
};
