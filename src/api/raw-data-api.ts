import request from '@/utils/request';

/*
  getSunap : 수납기 Raw data
  getCert : 제증명 Raw data
  getETC : 기타 Raw data
  getFail : 오류 Raw data
 */
export const rawData = (data: any) =>
  request({
    url: `/rawdata/${data.type}`,
    method: 'get',
    params: data
  });
