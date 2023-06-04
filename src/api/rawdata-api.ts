import request from '@/utils/request';

/*
  getSunap : 수납기 Raw data
  getCert : 제증명 Raw data
  getEtc : 기타 Raw data
  getFail : 오류 Raw data
 */
export const getRawData = (data: any) =>
  request({
    url: `/rawData/${data.type}`,
    method: 'get',
    params: data
  });
