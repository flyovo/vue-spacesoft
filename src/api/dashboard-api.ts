import request from '@/utils/request';

/*
  sunap_monthly_cnt : 수납기 월사용량
  cert_monthly_cnt : 제증명 월사용량
  qs_monthly_cnt : 순번발권 월사용량
  arrive_montylu_cnt : 도착확인 월사용량
  phy_montylu_cnt : 신체계측 월사용량

  qs_issue_cnt : 일일 발권건수
  qs_wait_avg_cnt : 평균 대기인수
  qs_wait_avg_time : 평균 대기시간
*/
export const getDashboardData = (data: any) =>
  request({
    url: `/dashboard/${data.type}`,
    method: 'get',
    params: data
  });
