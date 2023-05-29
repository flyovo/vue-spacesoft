import { ColumnType } from 'antd/es/table';
import { Device } from './types';

export const deviceColumn: ColumnType<Device>[] = [
  {
    title: 'idx',
    key: 'idx',
    dataIndex: 'idx',
    align: 'center'
  },
  {
    title: 'wisdom id',
    key: 'wisdom_id',
    dataIndex: 'wisdom_id',
    align: 'center'
  },
  {
    title: 'wisdom id',
    key: 'wisdom_id',
    dataIndex: 'wisdom_id',
    align: 'center'
  },
  {
    title: 'wisdom id',
    key: 'wisdom_id',
    dataIndex: 'wisdom_id',
    align: 'center'
  },
  {
    title: 'IP',
    key: 'dev_ip',
    dataIndex: 'dev_ip',
    align: 'left'
  },
  {
    title: '기관',
    key: 'pos_1',
    dataIndex: 'pos_1',
    align: 'center'
  },
  {
    title: '층',
    key: 'pos_2',
    dataIndex: 'pos_2',
    align: 'center'
  },
  {
    title: '설명1',
    key: 'pos_3',
    dataIndex: 'pos_3',
    align: 'center'
  },
  {
    title: '설명2',
    key: 'pos_5',
    dataIndex: 'pos_5',
    align: 'center'
  },
  {
    title: '관리부서',
    key: 'pos_4',
    dataIndex: 'pos_4',
    align: 'center'
  },
  {
    title: '기기타입',
    key: 'dev_type',
    dataIndex: 'dev_type',
    align: 'center'
  },
  {
    title: '모델명',
    key: 'dev_model',
    dataIndex: 'dev_model',
    align: 'center'
  },
  {
    title: '운영프로그램',
    key: 'op_prog',
    dataIndex: 'op_prog',
    align: 'center'
  },
  {
    title: '마지막접속',
    key: 'connect_time',
    dataIndex: 'connect_time',
    align: 'center'
  }
];

export const autoShutdownColumn = [];
export const accountColumn = [];
