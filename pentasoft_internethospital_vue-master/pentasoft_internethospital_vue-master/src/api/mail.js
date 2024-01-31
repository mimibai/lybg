import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const mailApi = {
    // 添加医院邮箱 @author Stagnant
    addMail: (data) => {
        return postAxios('/admin/mail/add', data);
    },
    // 分页查询医院邮箱 @author Stagnant
    queryMail: (data) => {
        return postAxios('/admin/mail/page/query', data);
    },
    // 删除医院邮箱 @author Stagnant
    deleteMail: (data) => {
        return postAxios('/admin/mail/delete/' + data);
    },
    // 批量删除医院邮箱 @author Stagnant
    batchDeleteMail: (mailIdList) => {
        return postAxios('/admin/mail/deleteByIds', mailIdList);
    },
    // 修改医院邮箱  @author Stagnant
    updateMail: (data) => {
        return postAxios('/admin/mail/update', data);
    },
    // 导出全部  @author Stagnant
    exportAll: (data) => {
        return postDownloadAxios('/mail/export/all', data);
    },
    // 批量导出  @author Stagnant
    batchExport: (mailIdList) => {
        return postDownloadAxios('/mail/export/batch', mailIdList);
    },
};
