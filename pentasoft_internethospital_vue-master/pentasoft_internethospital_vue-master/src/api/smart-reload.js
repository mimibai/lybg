// smartReloadAPI
import {
  postAxios,
  getAxios
} from '@/lib/axios';
export const smartReloadApi = {
  // 查询所有
  getSmartReloadList: () => {
    return getAxios('/admin/smartReload/all');
  },
  // 更新单条数据
  updateSmartReloadData: (data) => {
    return postAxios('/admin/smartReload/update', data);
  },
  // 获取执行结果
  getSmartReloadResult: (tag, page) => {
    return getAxios(`/admin/smartReload/result/${tag}/${page}`);
  }

};
