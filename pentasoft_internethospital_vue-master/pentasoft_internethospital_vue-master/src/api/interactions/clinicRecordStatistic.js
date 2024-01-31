import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const clinicRecordStatisticApi = {
  // 获取统计数据 @author Stagnant
  statistic: () => {
    return postAxios('/admin/clinicRecordStatistic/get');
  },
  statisticByTime: () => {
    return postAxios('/admin/clinicRecordStatistic/today');
  },
  statisticUserSource: () => {
    return postAxios('/admin/clinicRecordStatistic/userSource');
  }
};
