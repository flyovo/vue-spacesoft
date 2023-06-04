export interface StatisticsStoreState {
  statistics_weeksunapcnt: WeekSunapCnt;
}

export interface WeekSunapCnt {
  기관: number;
  층: number;
  구역: string;
  대수: number;
  월건수: string;
  월금액: string;
  화건수: string;
  화금액: string;
  수건수: string;
  수금액: string;
  목건수: string;
  목금액: string;
  금건수: string;
  금금액: string;
  토건수: string;
  토금액: string;
  일건수: string;
  일금액: string;
}

export interface SunapCnt {
  건물: string | number;
  층: string | number;
  위치: string;
  용도: string | number;
  '외래수납 대수': number;
  외래수납건수: number;
  외래수납불가: number;
  외래수납금액: number;
  '처방전 발급 건수': number;
  '약국전송 건수': number;
  중간수납건수: string | number;
  중간수납금액: string | number;
  퇴원수납건수: string | number;
  퇴원수납금액: string | number;
  '입퇴원 수납불가건수': string | number;
}
