import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const accessBlackApi = {
  // 添加人员资料表 @author Stagnant
  addAccessBlack: (data) => {
    return postAxios('/admin/accessBlack/add', data);
  },
  // 分页查询人员资料表 @author Stagnant
  queryAccessBlack: (data) => {
    return postAxios('/admin/accessBlack/page/query', data);
  },
  // 删除人员资料表 @author Stagnant
  deleteAccessBlack: (ip) => {
    return postAxios('/admin/accessBlack/delete/' + ip);
  },
  // 修改人员资料表  @author Stagnant
  updateAccessBlack: (data) => {
    return postAxios('/admin/accessBlack/update', data);
  }
};
