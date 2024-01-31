import { postAxios, getAxios, postDownloadAxios } from '@/lib/axios';

export const enumApi = {
  // 获取系统枚举 @author Stagnant
  queryEnumitem: data => {
    return getAxios('/api/enum/getSystemEnumByCode', data);
  },
  // 获取枚举表中枚举 @author Stagnant
  getEnumItemByCode: data => {
    return getAxios('/api/enum/getEnumItemByCode', data);
  },
  // 批量获取枚举，包括系统枚举和枚举表数据 @author Stagnant
  getBatchEnumByCodes: data => {
    return getAxios('/api/enum/getBatchEnumByCodes?enumCodes=' + data);
  },
  // 获取枚举，包括系统枚举和枚举表数据 @author Stagnant
  getEnumItemByEnumCode: data => {
    return getAxios('/api/enum/getEnumItemByEnumCode?enumCode=' + data);
  },
  // 获取枚举表中所有枚举 @author Stagnant
  getEnumItemAll: data => {
    return getAxios('/api/enum/getEnumItemAll');
  }
};
