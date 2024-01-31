import { postAxios, getAxios } from '@/lib/axios';
export const dataScopeApi = {
  // 批量设置某角色数据范围
  updateDataScope: data => {
    return postAxios('/admin/dataScope/batchSet', data);
  },
  // 数据权限列表
  getDataScopeList: (data, roleId) => {
    return getAxios('/admin/dataScope/list/' + data + '?roleId=' + roleId);
  },
  // 获取某角色所设置的数据范围
  getDataScopeByRoleId: roleId => {
    return getAxios('/admin/dataScope/listByRole/' + roleId);
  }
};
