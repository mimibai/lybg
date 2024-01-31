import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const hospitalApi = {
    // 添加医院 @author DuanJianBo
    addHospital: (data) => {
        return postAxios('/admin/hospital/add', data);
    },
    // 分页查询医院 @author DuanJianBo
    queryHospital: (data) => {
        return postAxios('/admin/hospital/page/query', data);
    },
    // 删除医院 @author DuanJianBo
    deleteHospital: (data) => {
        return postAxios('/admin/hospital/delete/' + data);
    },
    // 批量删除医院 @author DuanJianBo
    batchDeleteHospital: (hospitalIdList) => {
        return postAxios('/admin/hospital/deleteByIds', hospitalIdList);
    },
    // 修改医院  @author DuanJianBo
    updateHospital: (data) => {
        return postAxios('/admin/hospital/update', data);
    },
    // 导出全部  @author DuanJianBo
    exportAll: (data) => {
        return postDownloadAxios('/hospital/export/all', data);
    },
    // 批量导出  @author DuanJianBo
    batchExport: (hospitalIdList) => {
        return postDownloadAxios('/hospital/export/batch', hospitalIdList);
    },
    // 查询医院 @author DuanJianBo
    queryHospitalList: (data) => {
        return postAxios('/admin/hospital/query/list', data);
    },
};
