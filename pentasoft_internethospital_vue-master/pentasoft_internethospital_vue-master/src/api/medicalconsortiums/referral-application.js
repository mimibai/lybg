import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const referralApplicationApi = {
  // 添加 @author 54Doctor
  addReferralApplication: (data) => {
    return postAxios('/referralApplication/add', data);
  },
  // 分页查询 @author 54Doctor
  queryReferralApplication: (data) => {
    return postAxios('/referralApplication/page/query', data);
  },
  // 删除 @author 54Doctor
  deleteReferralApplication: (data) => {
    return postAxios('/referralApplication/delete/' + data);
  },
  // 批量删除 @author 54Doctor
  batchDeleteReferralApplication: (referralApplicationIdList) => {
    return postAxios('/referralApplication/deleteByIds', referralApplicationIdList);
  },
  // 修改  @author 54Doctor
  updateReferralApplication: (data) => {
    return postAxios('/referralApplication/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/referralApplication/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (referralApplicationIdList) => {
    return postDownloadAxios('/referralApplication/export/batch', referralApplicationIdList);
  },
  // 获取申请医生
  getapplyDoctorList: (data) => {
    return postAxios('/referralApplication/page/queryApplyDoctorList', data);
  },
  // 获取申请医院
  getApplyHospitalLIst: (data) => {
    return postAxios('/referralApplication/page/queryApplyHospitalLIst', data);
  },
  // 获取预约医院
  reservationHospitalList: (data) => {
    return postAxios('/referralApplication/page/queryReservationHospitalList', data);
  },

  verifyReferralApplication: (data) => {
    return postAxios('/referralApplication/verify', data);
  }
};
