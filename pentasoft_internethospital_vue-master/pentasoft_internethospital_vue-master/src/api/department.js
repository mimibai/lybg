import { postAxios, getAxios } from '@/lib/axios';
export const departmentApi = {
  // 加载所有的部门子部门
  getLoadDepartment: () => {
    return getAxios('/admin/departmentSys/list');
  },
  // 查询部门及员工列表
  getDepartmentEmployeeList: () => {
    return getAxios('/admin/departmentSys/listEmployee');
  },
  // 添加部门
  addDepartment: (data) => {
    return postAxios('/admin/departmentSys/add', data);
  },
  // 编辑部门
  updateDepartment: (data) => {
    return postAxios('/admin/departmentSys/update', data);
  },
  // 删除部门
  deleteDepartment: (data) => {
    return postAxios('/admin/departmentSys/delete/' + data);
  },
  // 根据id获取部门信息
  getDepartmentById: (data) => {
    return getAxios('/admin/departmentSys/query/' + data);
  },
  // 查询部门列表
  getDepartmentAll: () => {
    return getAxios('/admin/departmentSys/listAll');
  },
  // 根据部门名称获取员工列表
  getListEmployeeByDepartmentName: (departmentName) => {
    return getAxios('/admin/departmentSys/listEmployeeByDepartmentName?departmentName=' + departmentName);
  },
  // 上下移动
  upOrDown: (departmentId, swapId) => {
    return getAxios('/admin/departmentSys/upOrDown/' + departmentId + '/' + swapId);
  },
  // 升级
  upGrade: (departmentId) => {
    return getAxios('/admin/departmentSys/upgrade/' + departmentId);
  },
  // 降级
  downGrade: (departmentId, preId) => {
    return getAxios('/admin/departmentSys/downgrade/' + departmentId + '/' + preId);
  }
};
