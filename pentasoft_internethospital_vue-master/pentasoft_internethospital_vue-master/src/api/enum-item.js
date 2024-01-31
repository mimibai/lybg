import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const enumItemApi = {
    // 添加枚举明细 @author Stagnant
    addEnumitem: (data) => {
        return postAxios('/admin/enumitem/add', data);
    },
    // 分页查询枚举明细 @author Stagnant
    queryEnumitem: (data) => {
        return postAxios('/admin/enumitem/page/query', data);
    },
    // 批量删除枚举明细 @author Stagnant
    batchDeleteEnumitem: (enumItemIdList) => {
        return postAxios('/admin/enumitem/deleteByIds', enumItemIdList);
    },
    // 修改枚举明细  @author Stagnant
    updateEnumitem: (data) => {
        return postAxios('/admin/enumitem/update',data);
    },
    // 查询枚举列表 @author Stagnant
    listEnumitem: (data) => {
        return postAxios('/admin/enumitem/list/query', data);
    },
};
