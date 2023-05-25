import { QsIssueCount, QsWaitAvgCount, QsWaitAvgTime } from './type';

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
  [key: string]: QsIssueCount[] | QsWaitAvgCount[] | QsWaitAvgTime[];
};

export const QS_MOCK: MockType = {
  qsissuecnt: QS_ISSUE_COUNT,
  qswaitavgcnt: QS_WAIT_AVG_COUNT,
  qswaitavgtime: QS_WAIT_AVG_TIME
};
