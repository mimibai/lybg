// 任务调度API
import {
  postAxios,
  getAxios
} from '@/lib/axios';
export const onlineUserApi = {
  // 查询在线员工列表
  getOnlineUserList: (data) => {
    return postAxios('/admin/userOnLine/query', data);
  }

};
