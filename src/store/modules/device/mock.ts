import { Device } from '@/views/HeaderContent/types';

export const DEVICE_DATA_SOURCE: Device[] = Array.from(
  new Array(100),
  (arr, index) => ({
    key: index,
    idx: 1,
    dev_ip: '200.1.1.216',
    wisdom_id: 'test1',
    ocs_id: null,
    kiosk_id: null,
    pos_1: 'A동',
    pos_2: '1층',
    pos_3: '외래복합기',
    pos_4: '원무과',
    pos_5: 'M 왼쪽',
    dev_type: 'KIOSK',
    dev_model: 'i80s',
    op_prog: '외래복합기-M/B 서버',
    cms_group_id: null,
    cms_status: '미배포',
    connect_time: '2023-03-13 07:25:59'
  })
);

type MockType = {
  [key: string]: Device[];
};

export const DEVICE_MOCK: MockType = {
  list: DEVICE_DATA_SOURCE
};
