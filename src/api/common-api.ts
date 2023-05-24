import request from '@/utils/request';

export const navigation = (data: any) =>
  request({
    url: 'wisdom/getNavTree',
    method: 'get',
    data
  });
