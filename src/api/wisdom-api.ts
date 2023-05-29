import request from '@/utils/request';

// getNavTree
export const getWisdomData = (data: any) =>
  request({
    url: `wisdom/${data.type}`,
    method: 'get',
    data
  });
