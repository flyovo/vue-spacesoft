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
