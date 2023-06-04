import { RawDataSunap } from './type';

const RAWDATA_SOURCE_DATA = [...Array(100)].map((_, i) => ({
  key: i,
  수납타입: '외래',
  날짜: '2023-03-14',
  요일: '화',
  건물: 'B동',
  층: '1층',
  위치: '외래복합기',
  부서: '원무과',
  세부위치: 'B 왼2',
  wisdom_id: 'test20',
  dev_model: 'i80s',
  chart_no: '190503776',
  수납시간: '06:51',
  수납건수: 0,
  수납불가: 1,
  수납금액: 0,
  '처방전 발급 건수': 0,
  약국전송: i + 1
}));

type MockType = {
  [key: string]: RawDataSunap[];
};

export const RAWDATA_MOCK: MockType = {
  getSunap: RAWDATA_SOURCE_DATA
};
