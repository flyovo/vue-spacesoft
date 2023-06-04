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

  op_prog_cnt: 유형별 키오스크 기기현황
  pos1_cnt: 건물별 키오스크 기기현황
  pos2_cnt: 층별 키오스크 기기현황
*/
export const getDashboardData = (data: any) =>
  request({
    url: `/dashboard/${data.type}`,
    method: 'get',
    params: data
  });
