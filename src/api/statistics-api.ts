import request from '@/utils/request';

/*
  getWeekSunapCnt : 요일별 수납 통계
 */
export const getStatisticsData = (data: any) =>
  request({
    url: `/statistics/${data.type}`,
    method: 'get',
    params: data
  });
