// 任务调度API
import {
  postAxios,
  getAxios
} from '@/lib/axios';
export const taskApi = {
  // 查询任务列表
  getTaskList: (data) => {
    return postAxios('/admin/quartz/task/query', data);
  },
  // 添加或更新任务
  addOrUpdateTask: (data) => {
    return postAxios('/admin/quartz/task/saveOrUpdate', data);
  },
  // 查询任务日志
  getTaskLog: (data) => {
    return postAxios('/admin/quartz/task/queryLog', data);
  },
  // 暂停任务
  updateTaskPause: (taskId) => {
    return getAxios(`/admin/quartz/task/pause/${taskId}`);
  },
  // 运行任务
  updateTaskRun: (taskId) => {
    return getAxios(`/admin/quartz/task/run/${taskId}`);
  },
  //   恢复任务
  updateTaskResume: (taskId) => {
    return getAxios(`/admin/quartz/task/resume/${taskId}`);
  },
  //   删除任务
  deleteTask: (taskId) => {
    return getAxios(`/admin/quartz/task/delete/${taskId}`);
  }
};
