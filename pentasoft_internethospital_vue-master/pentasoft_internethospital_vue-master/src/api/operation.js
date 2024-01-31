import { postAxios } from '@/lib/axios';

export const operationApi = {
    executeData: (data) => {
        return postAxios('/admin/data/execute', data);
    },
};
