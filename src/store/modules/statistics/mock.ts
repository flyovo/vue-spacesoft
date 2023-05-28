import { WeekSunapCnt } from './type';

const WEEK_SUNAP_CNT: WeekSunapCnt = {
  기관: 1,
  층: 2,
  구역: '외래복합기',
  대수: 1,
  월건수: '12',
  월금액: '333210',
  화건수: '6',
  화금액: '1702680',
  수건수: '18',
  수금액: '2016170',
  목건수: '9',
  목금액: '248940',
  금건수: '15',
  금금액: '745000',
  토건수: '3',
  토금액: '489930',
  일건수: '0',
  일금액: '0'
};

type MockType = {
  [key: string]: WeekSunapCnt;
};

export const STATISTICS_MOCK: MockType = {
  get_week_sunap_cnt: WEEK_SUNAP_CNT
};
