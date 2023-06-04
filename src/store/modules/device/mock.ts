import { Device } from '@/views/HeaderContent/types';
import { DevPosList } from './type';

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

// 사이트 관리 리스트
const SITE_POS_LIST: DevPosList[] = [
  {
    idx: 1,
    type: 'pos_1',
    loc_name: 'A동',
    updatedate: '2022-06-10T07:07:22.000Z'
  },
  {
    idx: 2,
    type: 'pos_4',
    loc_name: '1층',
    updatedate: '2022-06-10T07:06:32.000Z'
  },
  {
    idx: 3,
    type: 'pos_1',
    loc_name: 'A동',
    updatedate: '2022-06-10T07:07:22.000Z'
  },
  {
    idx: 4,
    type: 'pos_4',
    loc_name: '1층',
    updatedate: '2022-06-10T07:06:32.000Z'
  },
  {
    idx: 5,
    type: 'dev_model',
    loc_name: '1층',
    updatedate: '2022-06-10T07:06:32.000Z'
  }
];

type MockType = {
  [key: string]: Device[] | DevPosList[];
};

export const DEVICE_MOCK: MockType = {
  list: DEVICE_DATA_SOURCE,
  site_post_list: SITE_POS_LIST
};
