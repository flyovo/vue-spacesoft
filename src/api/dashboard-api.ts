import request from '@/utils/request';

/*
  SunapMonthlyCnt : 수납기 월사용량
  certMonthlyCnt : 제증명 월사용량
  qsMonthlyCnt : 순번발권 월사용량
  arriveMonthlyCnt : 도착확인 월사용량
  phyMonthlyCnt : 신체계측 월사용량

  qsissuecnt : 일일 발권건수
  qswaitavgcnt : 평균 대기인수
  qswaitavgtime : 평균 대기시간

  opProgCnt: 유형별 키오스크 기기현황
  pos1Cnt: 건물별 키오스크 기기현황
  pos2Cnt: 층별 키오스크 기기현황
*/
export const getDashboardData = (data: any) =>
  request({
    url: `/dashboard/${data.type}`,
    method: 'get',
    params: data.params
  });
