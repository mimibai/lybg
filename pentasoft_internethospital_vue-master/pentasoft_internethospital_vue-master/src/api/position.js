import { postAxios, getAxios } from '@/lib/axios';
export const positionApi = {
  // 分页查询所有岗位
  getPositionListPage: data => {
    return postAxios('/admin/position/getListPage', data);
  },
  // 更新岗位
  updatePosition: data => {
    return postAxios('/admin/position/update', data);
  },
  // 添加岗位
  addPosition: data => {
    return postAxios('/admin/position/add', data);
  },
  // 根据ID删除岗位
  deletePosition: id => {
    return getAxios('/admin/position/remove/' + id);
  }
};
