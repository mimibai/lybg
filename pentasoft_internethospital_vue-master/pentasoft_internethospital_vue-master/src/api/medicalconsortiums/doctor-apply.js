import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const doctorApplyApi = {
  // 添加 @author 54Doctor
  addDoctorApply: (data) => {
    return postAxios('/doctorApply/add', data);
  },
  // 分页查询 @author 54Doctor
  queryDoctorApply: (data) => {
    return postAxios('/doctorApply/page/query', data);
  },
  // 删除 @author 54Doctor
  deleteDoctorApply: (data) => {
    return postAxios('/doctorApply/delete/' + data);
  },
  // 批量删除 @author 54Doctor
  batchDeleteDoctorApply: (doctorApplyIdList) => {
    return postAxios('/doctorApply/deleteByIds', doctorApplyIdList);
  },
  // 修改  @author 54Doctor
  updateDoctorApply: (data) => {
    return postAxios('/doctorApply/update', data);
  },
  // 导出全部  @author 54Doctor
  exportAll: (data) => {
    return postDownloadAxios('/doctorApply/export/all', data);
  },
  // 批量导出  @author 54Doctor
  batchExport: (doctorApplyIdList) => {
    return postDownloadAxios('/doctorApply/export/batch', doctorApplyIdList);
  },
  // 审核
  verifyDoctorApply: (data) => {
    return postAxios('/doctorApply/verify', data);
  }
};
