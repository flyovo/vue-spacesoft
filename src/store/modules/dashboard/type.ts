export interface DashboardStoreState {
  dashboard_qsissuecnt: QsIssueCount[];
  dashboard_qswaitavgcnt: QsWaitAvgCount[];
  dashboard_qswaitavgtime: QsWaitAvgTime[];
}

export interface QsIssueCount {
  svr_ip: string;
  pos_1: string;
  pos_2: string;
  pos_4: string;
  발권수: number;
}

export interface QsWaitAvgCount {
  svr_ip: string;
  pos_1: string;
  pos_2: string;
  pos_4: string;
  평균대기인수: string;
}

export interface QsWaitAvgTime {
  svr_ip: string;
  pos_1: string;
  pos_2: string;
  pos_4: string;
  평균대기시간: string;
}

export interface ChartDataByMonth {
  '0': number;
  '-1': number;
  '-2': number;
  '-3': number;
  '-4': number;
  '-5': number;
  '-6': number;
  '-7': number;
  '-8': number;
  '-9': number;
  '-10': number;
  '-11': number;
}

export interface OpAndPos {
  [key: string]: number;
}
