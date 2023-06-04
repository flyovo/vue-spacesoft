export interface RawDataStoreState {
  raw_data_sunap: RawDataSunap[];
}

export interface RawDataSunap {
  수납타입: string;
  날짜: string;
  요일: string;
  건물: string;
  층: string;
  위치: string;
  부서: string;
  세부위치: string;
  wisdom_id: string;
  dev_model: string;
  chart_no: string;
  수납시간: string;
  수납건수: number;
  수납불가: number;
  수납금액: number;
  '처방전 발급 건수': number;
  약국전송: number;
}
