import { postAxios, getAxios } from '@/lib/axios';
export const heartBeatApi = {
  // 分页查询所有岗位
  queryHeartBeatRecord: data => {
    return postAxios('/admin/heartBeat/query', data);
  }
};
