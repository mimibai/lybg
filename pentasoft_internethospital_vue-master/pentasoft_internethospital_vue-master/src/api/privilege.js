import { postAxios, getAxios } from '@/lib/axios';

export const privilegeApi = {
  // 获取所有请求路径
  getAllUrl: data => {
    return getAxios('/admin/privilege/getAllUrl');
  },
  // 获取全部菜单列表
  getMenuList: data => {
    return postAxios('/admin/privilege/menu/queryAll');
  },
  // 菜单批量保存
  addBatchSaveMenu: data => {
    return postAxios('/admin/privilege/menu/batchSaveMenu', data);
  },
  // 功能点批量保存
  addBatchSavePoints: data => {
    return postAxios('/admin/privilege/function/batchSave', data);
  },
  // 查询菜单功能点
  queryPrivilegeFunctionList: menuKey => {
    return postAxios('/admin/privilege/function/query/' + menuKey);
  },
  // 保存更新功能点
  addOrUpdate: data => {
    return postAxios('/admin/privilege/function/saveOrUpdate', data);
  },
  // 更新角色权限
  getRolePower: data => {
    return postAxios('/admin/privilege/updateRolePrivilege', data);
  },
  // 获取角色可选的功能权限
  getListPrivilegeByRoleId: id => {
    return getAxios('/admin/privilege/listPrivilegeByRoleId/' + id);
  }
};
