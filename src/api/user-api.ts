import request from '@/utils/request';

export const login = (data: any) =>
  request({
    url: '/user/login',
    method: 'post',
    data
  });

export const logout = (data: any) =>
  request({
    url: '/user/logout',
    method: 'post',
    data
  });
