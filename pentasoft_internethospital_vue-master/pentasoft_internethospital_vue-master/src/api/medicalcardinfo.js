import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const medicalcardinfoApi = {
    // 添加 @author Stagnant
    addMedicalcardinfo: (data) => {
        return postAxios('/admin/medicalcardinfo/add', data);
    },
    // 分页查询 @author Stagnant
    queryMedicalcardinfo: (data) => {
        console.log(data)
        return postAxios('/admin/medicalcardinfo/page/query', data);
    },
    // 删除 @author Stagnant
    deleteMedicalcardinfo: (data) => {
        return postAxios('/admin/medicalcardinfo/delete/' + data);
    },
    // 批量删除 @author Stagnant
    batchDeleteMedicalcardinfo: (idList) => {
        return postAxios('/admin/medicalcardinfo/deleteByIds', idList);
    },
    // 修改  @author Stagnant
    updateMedicalcardinfo: (data) => {
        return postAxios('/admin/medicalcardinfo/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/medicalcardinfo/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (idList) => {
        return postDownloadAxios('/medicalcardinfo/export/batch', idList);
    },
};
