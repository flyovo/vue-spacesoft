import {
  QsIssueCount,
  QsWaitAvgCount,
  QsWaitAvgTime,
  ChartDataByMonth,
  OpAndPos
} from './type';

const QS_ISSUE_COUNT: QsIssueCount[] = [
  {
    svr_ip: '200.1.1.216',
    pos_1: 'A동',
    pos_2: '1층',
    pos_4: '원무과',
    발권수: 596
  },
  {
    svr_ip: '200.15.2.241',
    pos_1: 'R동',
    pos_2: '2층',
    pos_4: '원무과',
    발권수: 218
  },
  {
    svr_ip: '200.2.1.234',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    발권수: 157
  },
  {
    svr_ip: '200.2.1.40',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    발권수: 587
  },
  {
    svr_ip: '200.2.1.83',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    발권수: 1247
  },
  {
    svr_ip: '200.2.3.177',
    pos_1: 'B동',
    pos_2: '2층',
    pos_4: '원무과',
    발권수: 332
  },
  {
    svr_ip: '200.2.4.210',
    pos_1: 'B동',
    pos_2: '4층',
    pos_4: '원무과',
    발권수: 271
  },
  {
    svr_ip: '200.2.5.52',
    pos_1: 'B동',
    pos_2: '5층',
    pos_4: '원무과',
    발권수: 285
  },
  {
    svr_ip: '200.8.1.25',
    pos_1: 'C동',
    pos_2: '1층',
    pos_4: '원무과',
    발권수: 766
  }
];

const QS_WAIT_AVG_COUNT: QsWaitAvgCount[] = [
  {
    svr_ip: '200.1.1.216',
    pos_1: 'A동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기인수: '1.5688'
  },
  {
    svr_ip: '200.15.2.241',
    pos_1: 'R동',
    pos_2: '2층',
    pos_4: '원무과',
    평균대기인수: '1.7465'
  },
  {
    svr_ip: '200.2.1.234',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기인수: '1.1274'
  },
  {
    svr_ip: '200.2.1.40',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기인수: '1.6899'
  },
  {
    svr_ip: '200.2.1.83',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기인수: '6.5766'
  },
  {
    svr_ip: '200.2.3.177',
    pos_1: 'B동',
    pos_2: '2층',
    pos_4: '원무과',
    평균대기인수: '1.3323'
  },
  {
    svr_ip: '200.2.4.210',
    pos_1: 'B동',
    pos_2: '4층',
    pos_4: '원무과',
    평균대기인수: '1.0996'
  },
  {
    svr_ip: '200.2.5.52',
    pos_1: 'B동',
    pos_2: '5층',
    pos_4: '원무과',
    평균대기인수: '2.3649'
  },
  {
    svr_ip: '200.8.1.25',
    pos_1: 'C동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기인수: '5.4909'
  }
];

const QS_WAIT_AVG_TIME: QsWaitAvgTime[] = [
  {
    svr_ip: '200.1.1.216',
    pos_1: 'A동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기시간: '99.7383'
  },
  {
    svr_ip: '200.15.2.241',
    pos_1: 'R동',
    pos_2: '2층',
    pos_4: '원무과',
    평균대기시간: '112.2535'
  },
  {
    svr_ip: '200.2.1.234',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기시간: '23.4395'
  },
  {
    svr_ip: '200.2.1.40',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기시간: '89.8637'
  },
  {
    svr_ip: '200.2.1.83',
    pos_1: 'B동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기시간: '152.2895'
  },
  {
    svr_ip: '200.2.3.177',
    pos_1: 'B동',
    pos_2: '2층',
    pos_4: '원무과',
    평균대기시간: '24.1813'
  },
  {
    svr_ip: '200.2.4.210',
    pos_1: 'B동',
    pos_2: '4층',
    pos_4: '원무과',
    평균대기시간: '10.5830'
  },
  {
    svr_ip: '200.2.5.52',
    pos_1: 'B동',
    pos_2: '5층',
    pos_4: '원무과',
    평균대기시간: '69.0491'
  },
  {
    svr_ip: '200.8.1.25',
    pos_1: 'C동',
    pos_2: '1층',
    pos_4: '원무과',
    평균대기시간: '279.1775'
  }
];

type MockType = {
  [key: string]:
    | QsIssueCount[]
    | QsWaitAvgCount[]
    | QsWaitAvgTime[]
    | ChartDataByMonth[]
    | OpAndPos[];
};

// 수납기 월사용량
const SUNAP_MONTHLY_COUNT: ChartDataByMonth[] = [
  {
    '0': 1072,
    '-1': 6173,
    '-2': 5450,
    '-3': 0,
    '-4': 0,
    '-5': 0,
    '-6': 0,
    '-7': 0,
    '-8': 0,
    '-9': 0,
    '-10': 0,
    '-11': 0
  }
];

// 제증명 월사용량
const CERT_MONTHLY_COUNT_CERT: ChartDataByMonth[] = [
  {
    '0': 572,
    '-1': 173,
    '-2': 45410,
    '-3': 0,
    '-4': 0,
    '-5': 0,
    '-6': 0,
    '-7': 0,
    '-8': 0,
    '-9': 0,
    '-10': 0,
    '-11': 0
  }
];

// 순번발권 월사용량
const QS_MONTHLY_COUNT: ChartDataByMonth[] = [
  {
    '0': 51072,
    '-1': 62173,
    '-2': 1450,
    '-3': 1435,
    '-4': 0,
    '-5': 0,
    '-6': 0,
    '-7': 0,
    '-8': 0,
    '-9': 0,
    '-10': 0,
    '-11': 0
  }
];

// 도착확인 월사용량
const ARRIVE_MONTHLY_COUNT: ChartDataByMonth[] = [
  {
    '0': 5172,
    '-1': 62173,
    '-2': 450,
    '-3': 100,
    '-4': 0,
    '-5': 0,
    '-6': 0,
    '-7': 0,
    '-8': 0,
    '-9': 0,
    '-10': 0,
    '-11': 0
  }
];

// 신체계측 월사용량
const PHY_MONTHLY_COUNT: ChartDataByMonth[] = [
  {
    '0': 51072,
    '-1': 6173,
    '-2': 4520,
    '-3': 34568,
    '-4': 0,
    '-5': 0,
    '-6': 0,
    '-7': 0,
    '-8': 0,
    '-9': 0,
    '-10': 0,
    '-11': 0
  }
];

// 유형별 키오스크 기기현황
const OP_PROG_COUNT: OpAndPos[] = [
  {
    순번: 4,
    '수납기(복합기)': 21,
    제증명: 1,
    도착확인: 0,
    신체계측: 1
  }
];

// 건물별 키오스크 기기현황
const POS1_COUNT: OpAndPos[] = [
  {
    A동: 4,
    B동: 23,
    C동: 5,
    R동: 2,
    본관: 0
  }
];

// 층별 키오스크 기기현황
const POS2_COUNT: OpAndPos[] = [
  {
    B1층: 0,
    '1층': 23,
    '2층': 4,
    '3층': 1,
    '4층': 2,
    '5층': 3,
    '6층': 1
  }
];

export const DASHBOARD_MOCK: MockType = {
  sunap_monthly_cnt: SUNAP_MONTHLY_COUNT,
  cert_monthly_cnt: CERT_MONTHLY_COUNT_CERT,
  qs_monthly_cnt: QS_MONTHLY_COUNT,
  arrive_monthly_cnt: ARRIVE_MONTHLY_COUNT,
  phy_monthly_cnt: PHY_MONTHLY_COUNT,

  qs_issue_cnt: QS_ISSUE_COUNT,
  qs_wait_avg_cnt: QS_WAIT_AVG_COUNT,
  qs_wait_avg_time: QS_WAIT_AVG_TIME,

  op_prog_cnt: OP_PROG_COUNT,
  pos1_cnt: POS1_COUNT,
  pos2_cnt: POS2_COUNT
};
