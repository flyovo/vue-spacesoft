import request from '@/utils/request';

/*
  qsissuecnt : 일일 발권건수
  qswaitavgcnt : 평균 대기인수
  qswaitavgtime : 평균 대기시간
*/
export const dashboardChartData = (data: any) =>
  request({
    url: `/dashboard/${data.type}`,
    method: 'get',
    params: data
  });
