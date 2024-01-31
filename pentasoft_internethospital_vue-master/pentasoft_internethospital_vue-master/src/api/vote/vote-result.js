import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const voteResultApi = {
  // 分页查询 @author DuanJianBo
  queryVoteResult: (data) => {
    return postAxios('/admin/voteresult/page/query', data);
  },
  // 详情 @author DuanJianBo
  getVoteResult: (id) => {
    return postAxios('/admin/voteresult/get/' + id);
  },
  // 详情序列化 @author DuanJianBo
  getVoteSerilizeResult: (id) => {
    return postAxios('/admin/voteresult/getSerilize/' + id);
  },
  // 导出全部  @author DuanJianBo
  exportAll: (data) => {
    return postDownloadAxios('/admin/voteresult/export/all', data);
  },
  // 批量导出  @author DuanJianBo
  batchExport: (idList) => {
    return postDownloadAxios('/admin/voteresult/export/batch', idList);
  }
};
