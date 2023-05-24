import request from '@/utils/request';

/*
  getOutSunapCnt : 외래 수납 통계데이터
  getDischargeSunapCnt : 중간,퇴원 수납 통계데이터
  getWeekSunapCnt : 요일별 수납 통계
  getCertCnt : 제증명 통계 데이터
  getEtcCnt : 기타 통계 데이터
 */
export const statistics = (data: any) =>
  request({
    url: `/statistics/${data.type}`,
    method: 'get',
    params: data
  });
